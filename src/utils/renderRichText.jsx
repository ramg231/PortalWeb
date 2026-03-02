export const renderRichText = (blocks = []) =>
  blocks.map((block, i) => {
    switch (block.type) {

      // 📝 PÁRRAFO
      case "paragraph":
        return (
          <p key={i} className="mb-4 text-justify leading-relaxed">
            {renderChildren(block.children)}
          </p>
        );

      // 🔠 TÍTULOS
      case "heading": {
        const Tag = `h${block.level || 2}`;
        return (
          <Tag
            key={i}
            className="mt-8 mb-4 font-bold text-[#003566]"
          >
            {renderChildren(block.children)}
          </Tag>
        );
      }

      // 📋 LISTAS
      case "list":
        return block.format === "ordered" ? (
          <ol key={i} className="list-decimal ml-6 mb-4">
            {block.children.map((item, j) => (
              <li key={j}>{renderChildren(item.children)}</li>
            ))}
          </ol>
        ) : (
          <ul key={i} className="list-disc ml-6 mb-4">
            {block.children.map((item, j) => (
              <li key={j}>{renderChildren(item.children)}</li>
            ))}
          </ul>
        );

      // 💬 CITA
      case "quote":
        return (
          <blockquote
            key={i}
            className="border-l-4 border-[#003566] pl-4 italic my-6 text-gray-600"
          >
            {renderChildren(block.children)}
          </blockquote>
        );

      // 💻 CÓDIGO
      case "code":
        return (
          <pre
            key={i}
            className="bg-gray-100 p-4 rounded-md overflow-x-auto my-6"
          >
            <code>{block.children?.[0]?.text}</code>
          </pre>
        );

      // 🖼️ IMAGEN (si usas media embebida)
      case "image":
        return (
          <figure key={i} className="my-6">
            <img
              src={block.image?.url}
              alt={block.image?.alternativeText || ""}
              className="rounded-lg mx-auto"
            />
            {block.image?.caption && (
              <figcaption className="text-sm text-center text-gray-500 mt-2">
                {block.image.caption}
              </figcaption>
            )}
          </figure>
        );

      default:
        return null;
    }
  });


// 🔹 Render inline (bold, italic, links, etc.)
const renderChildren = (children = []) =>
  children.map((child, i) => {
    let text = child.text;

    if (child.bold) text = <strong key={i}>{text}</strong>;
    if (child.italic) text = <em key={i}>{text}</em>;
    if (child.underline) text = <u key={i}>{text}</u>;

    if (child.type === "link") {
      return (
        <a
          key={i}
          href={child.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#003566] underline"
        >
          {child.children?.[0]?.text}
        </a>
      );
    }

    return <span key={i}>{text}</span>;
  });
