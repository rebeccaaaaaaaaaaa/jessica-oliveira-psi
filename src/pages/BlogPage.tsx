import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Post {
  id: number;
  titulo: string;
  imagem: string | null;
  conteudo: string;
  data_publicacao: string;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4); // Mostrar 4 inicialmente

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

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "http://psicojessicaoliveira-admin.test/noticias-api/get-all.php"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Erro ao buscar os posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center">
        <p className="text-lg text-gray-600">Carregando...</p>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12 md:py-20">
      <header className="text-center mb-12 md:mb-16">
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary mb-4"
        >
          Blog
        </motion.h1>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
        {posts.slice(0, visibleCount).map((post, index) => (
          <div
            className="grid md:grid-cols-2 gap-6 items-center shadow-md rounded-lg overflow-hidden bg-white"
            style={{ cursor: "pointer" }}
            key={post.id}
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{post.titulo}</h3>
              <p className="text-sm text-gray-500 mb-2">
                {new Date(post.data_publicacao).toLocaleDateString("pt-BR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <a
                href={`/blog/${post.id}`}
                className="inline-block text-primary font-medium hover:underline"
              >
                Ver mais
              </a>
            </div>
            {post.imagem && (
              <motion.img
                variants={featureVariants(index)}
                src={`http://psicojessicaoliveira-admin.test/${post.imagem}`}
                alt={post.titulo}
                className="w-full h-48 object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {visibleCount < posts.length && (
        <div className="flex justify-center">
          <button
            onClick={handleLoadMore}
            className="py-5font-medium rounded hover:bg-primary-dark transition"
          >
            Carregar mais
          </button>
        </div>
      )}
    </main>
  );
};

export default BlogPage;
