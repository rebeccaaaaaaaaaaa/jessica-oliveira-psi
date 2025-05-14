import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../services/baseUrl";

interface Post {
  id: number;
  titulo: string;
  imagem: string | null;
  conteudo: string;
  data_publicacao: string;
}

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

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

    fetchPost();
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
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary mb-4">
          {post.titulo}
        </h1>
      </header>
      <article className="max-w-3xl mx-auto">
        {post.imagem && (
          <img
            src={`${BASE_URL}/${post.imagem}`}
            alt={post.titulo}
            className="mb-6 w-full max-h-[500px] object-cover rounded"
          />
        )}
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.conteudo }}
        />
        <div className="flex items-center justify-between mt-6 mb-4">
          <p className="text-sm text-gray-500 mb-6">
            Publicado em:{" "}
            {new Date(post.data_publicacao).toLocaleDateString("pt-BR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-sm text-gray-500 mb-6">
            <img
              src="/Logo.png"
              alt="Logo"
              className="w-8 h-8 mr-2 inline-block"
            />
            por: Jessica Oliveira
          </p>
        </div>
      </article>
    </main>
  );
};

export default BlogPostPage;
