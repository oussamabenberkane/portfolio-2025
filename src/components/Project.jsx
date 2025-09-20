import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  logo,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
  <div className="flex items-center gap-3">
    {/* Project logo */}
    <img
      src={logo}
      alt={`${title} logo`}
      className="w-8 h-8 object-contain rounded-md shadow-sm"
    />
    <p className="text-2xl font-semibold text-neutral-200">{title}</p>
  </div>

  {/* Tags */}
  <div className="flex flex-wrap gap-3 mt-2 text-sand text-sm">
    {tags.map((tag) => (
      <span
        key={tag.id}
        className="flex items-center gap-1 px-2 py-1 bg-neutral-800 rounded-md"
      >
        <img src={tag.path} alt={tag.name} className="w-4 h-4" />
        {tag.name}
      </span>
    ))}
  </div>
</div>

        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;