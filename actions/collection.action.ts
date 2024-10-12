"use server"

import prismadb from "@/lib/prismadb";
import { getCurrentUser } from "./user.action";
import { Collection } from "@prisma/client";

export const createCollectionForCurrentUser = async (data: any) => {
    try {
        const currentUser = await getCurrentUser();
        const url = new URL(data.url);
        const pathParts = url.pathname.split('/');
        console.log("pathParts: ", pathParts)
        let socialPostId = '';
        
        if (url.hostname.includes('vt.tiktok.com')) {
            // https://vt.tiktok.com/ZS2TvpTJ3/
            console.log("url.hostname.includes('vt.tiktok.com')")
            socialPostId = pathParts[1]
        } else if (url.hostname.includes('tiktok.com') && pathParts[2] === 'video') {
            console.log("url.hostname.includes('tiktok.com') && pathParts[2] === 'video'")
            socialPostId = pathParts[3];
        } else if (url.hostname.includes('facebook.com') && pathParts[2] === 'posts') {
            console.log("url.hostname.includes('facebook.com') && pathParts[2] === 'posts'")
            socialPostId = pathParts[3];
        }
        console.log("socialPostId: ", socialPostId)

        if(!socialPostId || socialPostId === '' || socialPostId === undefined || socialPostId.length === 0) return {
            error: "Invalid URL"
        }
        // Check if the collection already exists
        const existingCollection = await prismadb.collection.findFirst({
            where: {
                socialPostId: socialPostId,
                platform: data.platform,
            }
        });

        if (existingCollection) {
            throw new Error("Bài đăng của bạn đã tồn tại");
        }

        const collection = await prismadb.collection.create({
            data: { 
                ...data, 
                userId: currentUser?.id,
                socialPostId: socialPostId
            },
        });
        return collection;
    } catch (error) {
        console.error("Error creating collection for current user:", error);
        throw error;
    }
};

export const getCurrentUserCollections = async (): Promise<Collection[]> => {
    try {
        console.log("getCurrentUserCollections >>>")
        // Fetch collections from your database
        const currentUser = await getCurrentUser();
        const collections = await prismadb.collection.findMany({
            where: { userId: currentUser?.id },
        });
        console.log("collections: ", collections)
        // Serialize the collections to plain objects
        return collections.map((collection: Collection) => ({
            id: collection.id,
            url: collection.url,
            platform: collection.platform,
            socialPostId: collection.socialPostId,
            // Include other fields as needed
        }));
    } catch (error) {
        console.error("Error fetching user collections:", error);
        throw error;
    } 
};

export const updateCollection = async (params: { where: any; data: any }) => {
    return await _PATCH(params);
};

export const retrieveCollection = async (params: { where: any; include?: any }) => {
    return await _RETRIEVE(params);
};



const _CREATE = async ({ data }: { data: any }) => {
    let createdData;

    try {
        createdData = await prismadb.collection.create({
            data: data,
        });
    } catch (error) {
        console.error("Error occurred while creating collection:", error);
        throw error;
    } finally {
        await prismadb.$disconnect();
    }
    return createdData;
};

const _GET = async ({ where, include }: { where: any; include?: any }) => {
    try {
        return await prismadb.collection.findMany({
            where: where,
            ...(include && { include: include }),
        });
    } catch (error) {
        console.error("Error occurred while retrieving collections:", error);
        throw error;
    } finally {
        await prismadb.$disconnect();
    }
};

const _PATCH = async ({ where, data }: { where: any; data: any }) => {
    try {
        return await prismadb.collection.update({
            where: where,
            data: data,
        });
    } catch (error) {
        console.error("Error occurred while updating collection:", error);
        throw error;
    } finally {
        await prismadb.$disconnect();
    }
};

const _RETRIEVE = async ({ where, include }: { where: any; include?: any }) => {
    try {
        return await prismadb.collection.findFirst({
            where: where,
            ...(include && { include: include }),
        });
    } catch (error) {
        console.error("Error occurred while retrieving collection:", error);
        throw error;
    } finally {
        await prismadb.$disconnect();
    }
};