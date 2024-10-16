"use server";

// import { storePost } from "@/lib/posts";
// import { redirect } from "next/navigation";
//
// export async function createPost(formData) {
//   const title = formData.get('title');
//   const image = formData.get('image');
//   const content = formData.get('content');
//
//   let errorsArray = [];
//
//   if(!title || title.trim().length === 0) {
//     errorsArray.push("Title is required");
//
//   }
//
//   if(!content || content.trim().length === 0){
//     errorsArray.push("Content is required");
//   }
//
//   if(!image || image.size === 0){
//     errorsArray.push("Image is required");
//   }
//
//   if(errorsArray.length > 0){
//     return errorsArray;
//   }
//
//
//   await storePost({
//     imageUrl: '',
//     title,
//     content,
//     userId: 1
//   });
//   redirect('/feed');
// }

import { updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from "next/cache";

export async function togglePostLikeStatus(postId) {
  await updatePostLikeStatus(postId,2 );
  revalidatePath('/', 'layout');
}