"use server"

import prismadb from "@/lib/prismadb";
import { getCurrentUser } from "./user.action";
import { Collection } from "@prisma/client";
export const createCollection = async (data: any) => {
    return await _CREATE({ data });
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