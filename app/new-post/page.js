import FormSubmit from "@/components/form-submit";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";


export default function NewPostPage() {

  async function createPost(formData) {
    "use server"
    const title = formData.get('title');
    const image = formData.get('image');
    const content = formData.get('content');

    // let errorsArray = [];
    //
    // if(!title || title.trim().length === 0) {
    //   errorsArray.push("Title is required");
    //
    // }
    //
    // if(!content || content.trim().length === 0){
    //   errorsArray.push("Content is required");
    // }
    //
    // if(!image || image.size === 0){
    //   errorsArray.push("Image is required");
    // }
    //
    // if(errorsArray.length > 0){
    //   return errorsArray;
    // }

    await storePost({
      imageUrl: '',
      title,
      content,
      userId: 1
    });
    redirect('/feed');
  }

  return (
    <>
      <h1>Create a new post</h1>
      <form action={createPost}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title"/>
        </p>
        <p className="form-control">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5"/>
        </p>
        <p className="form-actions">
          <FormSubmit/>
        </p>
      </form>
    </>
  );
}
