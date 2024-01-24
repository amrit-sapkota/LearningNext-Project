import React from "react";
import Link from "next/link";
const Form = ({ type, post, setPost, submit, handleSubmit }) => {
  return (
    <div>
      <section className="w-full max-w-full flex-start flex-col">
        <h1 className="head_text text-left">
          <span className="purple_gradient">{type} Post</span>
        </h1>
        <p className="desc text-left max-w-md">
          {type} and Unleash your creativity by crafting captivating prompts
          using AI-powered platforms. Share your imaginative ideas with the
          world and let your creativity soar!.
        </p>
        <form
          className="w-full mt-10 gap-7 glassmorphism max-w-2xl flex flex-col"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="prompt" className="label font-bold">
              Your Prompt
            </label>
            <textarea
              id="prompt"
              name="prompt"
              required
              rows="5"
              className="input"
              placeholder="Write your prompt here..."
              onChange={(e) => setPost({ ...post, prompt: e.target.value })}
              value={post.prompt}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="tag" className="label font-bold">
              Tag <span>(#product, #graphics, #art)</span>
            </label>
            <input
              id="tag"
              name="tag"
              type="text"
              className="input"
              placeholder="Enter a tag..."
              onChange={(e) => setPost({ ...post, tag: e.target.value })}
              value={post.tag}
            />
          </div>
          <div className="flex-end mx-3 mb-5 gap-4">
            <Link href="/" className="text-gray-500 text-sm ">
              Cancel
            </Link>
            <button
              type="submit"
              disabled={submit}
              className="px-5 py-1.5 text-sm  bg-primary-orange rounded-full text-white"
            >
              {submit ? `${type}...` : type}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Form;
