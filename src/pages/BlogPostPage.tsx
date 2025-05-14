import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../services/baseUrl";
import { motion } from "framer-motion";

interface Post {
  id: number;
  titulo: string;
  imagem: string | null;
  conteudo: string;
  data_publicacao: string;
}

const BlogPostPage = () => {
  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const featureVariants = (index: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: index * 0.15 + 0.3 },
    },
  });
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  const [loading, setLoading] = useState(true);

  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/noticias-api/get-one.php?id=${id}`
        );
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Erro ao buscar o post:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchRelatedPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/noticias-api/get-all.php`);
        const data = await response.json();
        setRelatedPosts(data.slice(0, 5)); // mostra até 5 relacionados
      } catch (error) {
        console.error("Erro ao buscar posts relacionados:", error);
      }
    };

    fetchPost();
    fetchRelatedPosts();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center">
        <p className="text-lg text-gray-600">Carregando...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center">
        <p className="text-lg text-red-600">Post não encontrado.</p>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Post principal */}
        <article className="md:col-span-2">
          <header className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary mb-4">
              {post.titulo}
            </h1>
          </header>

          {post.imagem && (
            <img
              src={`${BASE_URL}/${post.imagem}`}
              alt={post.titulo}
              className="mb-6 w-full max-h-[500px] object-cover rounded"
            />
          )}

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: post.conteudo.replace(/\n/g, "<br />"),
            }}
          />

          <div className="flex items-center justify-between mt-24">
            <p className="text-sm text-gray-500">
              Publicado em:{" "}
              {new Date(post.data_publicacao).toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-sm text-gray-500 flex items-center">
              <img
                src="/Logo.png"
                alt="Logo"
                className="w-8 h-8 mr-2 inline-block"
              />
              por: Jessica Oliveira
            </p>
          </div>
        </article>

        {/* Sidebar com outros posts */}
        <aside className="space-y-6">
          <h2 className="text-xl font-semibold mb-4 text-primary">
            Outros posts
          </h2>
          {relatedPosts?.map((post) => (
            <div
              className="grid md:grid-cols-12 gap-6 items-center shadow-md rounded-lg overflow-hidden bg-white"
              style={{ cursor: "pointer" }}
              key={post.id}
              onClick={() => (window.location.href = `/blog/${post.id}`)}
            >
              <div className="p-4">
                <h3 className="text-lg text-gray-500 mb-6">{post.titulo}</h3>
                <p className="text-sm text-gray-500 mb-6">
                  {new Date(post.data_publicacao).toLocaleDateString("pt-BR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <a
                  href={`/blog/${post.id}`}
                  className="text-primary font-medium hover:text-primary-dark transition"
                >
                  Ler mais
                </a>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </main>
  );
};

export default BlogPostPage;
