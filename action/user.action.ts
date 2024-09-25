"use server ";

import prismadb from "@/lib/prismadb";

export const createUser = async (data: any) => {
    return await _CREATE({ data });
};

export const createOrUpdateUser = async (data: any) => {
    try {
        const existingUser = await _RETRIVE({ where: { phone: data.phone } });

        if (existingUser) {
            // Update existing user
            return await prismadb.user.update({
                where: { email: data.phone },
                data: data,
            });
        } else {
            // Create new user
            return await prismadb.user.create({
                data: data,
            });
        }
    } catch (error) {
        console.error("Error occurred while creating or updating user:", error);
        throw error;
    } finally {
        await prismadb.$disconnect();
    }
};

const _CREATE = async ({ data }: { data: any }) => {
    let createdData;

    try {
        createdData = await prismadb.user.create({
            data: data,
        });
    } catch (error) {
        // Handle errors here
        console.error("Error occurred while creating data:", error);
        throw error; // Re-throw the error to propagate it up the call stack
    } finally {
        // Close the database connection
        await prismadb.$disconnect();
    }
    return createdData;
};

const _GET = async ({ where, include }: { where: any; include?: any }) => {
    try {
      return await prismadb.user.findMany({
        where: where,
        ...(include && { include: include })
      });
    } catch (error) {
      console.error('Error occurred while retrieving data:', error);
      throw error; // Re-throw the error to propagate it up the call stack
    } finally {
      await prismadb.$disconnect();
    }
  };


  const _RETRIVE = async ({ where, include }: { where: any; include?: any }) => {
    try {
      return await prismadb.user.findUnique({
        where: where,
        ...(include && { include: include })
      });
    } catch (error) {
      console.error('Error occurred while retrieving data:', error);
      throw error; // Re-throw the error to propagate it up the call stack
    } finally {
      await prismadb.$disconnect();
    }
  };
