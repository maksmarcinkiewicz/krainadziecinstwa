import DocumentsSection from "../Components/DocumentsSection";

const DocumentsPage = () => {
  return (
    <div>
      <div className="container mx-auto mt-20 p-4 md:p-0">
        <h2 className="text-3xl font-bold mb-8 ">Dokumenty do pobrania</h2>

        <p className="md:text-lg ">
          Zapraszamy do skorzystania z naszej kolekcji przydatnych dokumentów,
          które można pobrać w formacie PDF.
        </p>
      </div>
      <DocumentsSection />
    </div>
  );
};

export default DocumentsPage;
