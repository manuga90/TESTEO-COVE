import FileUpload from "../../components/FileUpload";

export default function HomePage() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">
          Subida de Archivos a Cloudinary
        </h1>
        <FileUpload />
      </main>
    </div>
  );
}
