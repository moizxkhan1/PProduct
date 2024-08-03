import DataForm from "../Product/DataForm";
import Breadcrumb from "../ui/Breadcrumb";
import Input from "../ui/Input";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const labels = [
    "Umlaufvermögen",
    "Flüssige Mittel und kurzf. Gehalten Aktiven mit Börsenkurs",
    "Forderungen aus Lieferungen und Leistungen",
    "übrige kurzfristige Forderungen",
    "Vorräte und nicht fakturierte DL",
    "Aktive Rechnungsabgrenzugen",
    "Anlagevermögen",
    "Beteiligungen",
    "Sachanlagen",
    "Immatreille Werte",
    "nicht einbezahltes Aktienkapital",
  ];
  return (
    <div className="container space-y-8 pt-12 pb-4">
      <Breadcrumb />
      <div className="space-y-12">
        <DataForm section="Aktiven" labels={labels} />
        <DataForm section="Passiven" labels={labels} />
      </div>
      <div className="ml-2 flex gap-4 items-center">
        <Input type="checkbox" />
        <Paragraph type="label">
          Are you sure all the data you put in is correct?
        </Paragraph>
      </div>
      <Button
        type="secondary"
        text="Weiter"
        onClick={() => {
          navigate("/auswertungsbericht");
        }}
      />
    </div>
  );
};

export default Product;
