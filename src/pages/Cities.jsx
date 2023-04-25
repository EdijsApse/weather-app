import Continent from "../components/Continent";
import FavoriteList from "../components/FavoriteList";
import Card from "../components/UI/Card";

const EuropeCapitals = [
  "Andorra la Vella",
  "Athens",
  "Belgrade",
  "Berlin",
  "Bern",
  "Bratislava",
  "Brussels",
  "Bucharest",
  "Budapest",
  "Chisinau",
  "Copenhagen",
  "Dublin",
  "Helsinki",
  "Kiev",
  "Lisbon",
  "Ljubljana",
  "London",
  "Luxembourg",
  "Madrid",
  "Minsk",
  "Monaco",
  "Moscow",
  "Nicosia",
  "Nuuk",
  "Oslo",
  "Paris",
  "Podgorica",
  "Prague",
  "Reykjavik",
  "Riga",
  "Rome",
  "San Marino",
  "Sarajevo",
  "Skopje",
  "Sofia",
  "Stockholm",
  "Tallinn",
  "Tirana",
  "Vaduz",
  "Valletta",
  "Vatican City",
  "Vienna",
  "Vilnius",
  "Warsaw",
  "Zagreb",
];

const AfricasBigestCities = [
  "Cairo",
  "Lagos",
  "Kinshasa",
  "Alexandria",
  "Casablanca",
  "Abidjan",
  "Kano",
  "Ibadan",
  "Durban",
  "Algiers",
  "Addis Ababa",
  "Nairobi",
  "Khartoum",
];

const AsiaCities = [
  "Tokyo",
  "Delhi",
  "Shanghai",
  "Beijing",
  "Mumbai",
  "Istanbul",
  "Karachi",
  "Dhaka",
  "Guangzhou",
  "Shenzhen",
  "Seoul",
  "Chongqing",
  "Jakarta",
  "Tehran",
  "Kinshasa",
  "Shenyang",
];

const NorthAmerica = [
  "Mexico City",
  "New York City",
  "Los Angeles",
  "Toronto",
  "Chicago",
  "Houston",
  "Montreal",
  "Philadelphia",
  "Phoenix",
  "San Antonio",
  "San Diego",
  "Dallas",
  "Vancouver",
  "Washington D.C.",
  "Calgary",
  "Edmonton",
  "Ottawa",
  "Guadalajara",
];

const SouthAmerica = [
  "São Paulo",
  "Buenos Aires",
  "Rio de Janeiro",
  "Lima",
  "Bogotá",
  "Santiago",
  "Salvador",
  "Brasília",
  "Fortaleza",
  "Belém",
  "Curitiba",
  "Medellín",
  "Porto Alegre",
  "Recife",
  "Montevideo",
  "Caracas",
  "Guayaquil",
  "Asunción",
  "Córdoba",
];

const AustraliaCities = [
  "Sydney",
  "Melbourne",
  "Brisbane",
  "Perth",
  "Adelaide",
  "Gold Coast",
  "Newcastle",
  "Canberra",
  "Wollongong",
  "Geelong",
  "Cairns",
  "Darwin",
  "Townsville",
  "Toowoomba",
  "Ballarat",
  "Bendigo",
  "Albury",
  "Launceston",
  "Mackay",
];

const Cities = () => {
  return (
    <div className="w-full">
      <div className="w-full flex-col flex space-y-6 lg:flex-row lg:space-y-0 lg:space-x-8">
        <Card className="w-full pb-6 lg:w-2/3">
          <div className="space-y-4 xl:space-y-8">
            <Continent
              cities={EuropeCapitals}
              label="Europe"
              labelIcon="fa-solid fa-earth-europe"
            />
            <Continent
              cities={AfricasBigestCities}
              label="Africa"
              labelIcon="fa-solid fa-earth-africa"
            />
            <Continent
              cities={AsiaCities}
              label="Asia"
              labelIcon="fa-solid fa-earth-asia"
            />
            <Continent
              cities={NorthAmerica}
              label="North America"
              labelIcon="fa-solid fa-earth-americas"
            />
            <Continent
              cities={SouthAmerica}
              label="South America"
              labelIcon="fa-solid fa-earth-americas"
            />
            <Continent
              cities={AustraliaCities}
              label="Australia"
              labelIcon="fa-solid fa-earth-oceania"
            />
          </div>
        </Card>
        <Card className="w-full h-full lg:w-1/3 lg:pb-8">
          <FavoriteList />
        </Card>
      </div>
    </div>
  );
};

export default Cities;
