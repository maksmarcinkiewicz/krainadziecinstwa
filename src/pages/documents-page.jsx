import DocumentsSection from "../Components/DocumentsSection";
import documentImg from "../assets/documents-page-illustration.png";
import { motion } from "framer-motion";
const DocumentsPage = () => {
  return (
    <div>
      <motion.div
        className="container mx-auto mt-20 p-4 md:p-0 flex flex-col md:flex-row md:items-center md:justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div>
          <h2 className="text-3xl font-bold mb-8 ">Dokumenty do pobrania</h2>
          <p className="md:text-lg mb-8 md:mb-0">
            Zapraszamy do skorzystania z naszej kolekcji przydatnych dokumentów,
            które można pobrać w formacie PDF.
          </p>
        </div>
        <img
          src={documentImg}
          alt="documents img"
          className="md:w-3/12 w-9/12"
          loading="lazy"
        />
      </motion.div>
      <DocumentsSection />
    </div>
  );
};

export default DocumentsPage;
