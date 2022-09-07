import ChooseUS from "../../components/cards/chooseUs.component";
import LgNavbar from "../../components/Navbar/navbar";

function Aboutpage() {
  return (
    <>
      <div className="px-44 py-20 flex flex-col items-center justify-center gap-20">
        <div>
          <h4 className="font-bold text-gray-800 text-xl pb-10 text-center">
            Who we are
          </h4>
          <div className="flex items-center justify-center gap-20">
            <div className="w-96 h-96">
              <img
                src="https://image.shutterstock.com/image-illustration/-260nw-306682604.jpg"
                alt=""
                className="rounded-lg shadow-xl w-full h-full"
              />
            </div>
            <p className="w-1/2 text-sm font-semibold text-gray-400">
              The word 'SARVAM' a Sanskrit word that stands for "Everything" or
              "Complete", represents to the totality of our strengths as a
              company - Infrastructure, Man power, Rich Experience, Extensive
              Product Range, Quality and undying passion to remain ahead of the
              times. All backed by our capable and experienced sales, Marketing,
              Back end Supporting, Service and Logistics team. SARVAM SAFETY
              Equipment (P) ltd is a Channel partner for reputed National and
              International Life Saving Equipment Manufacturers, catering the
              safety needs of various Industrial segments such as Automobiles,
              Chemical, Engineering, Pharmaceuticals, Refineries, Construction,
              power sectors , Fire service, Government sectors, IT , Hotels and
              various Institutions. SARVAM Safety is headed by the young and
              dynamic Front-runner K. Praveen Shetty, who has extensively
              travelled both India and abroad, participated in various seminars
              and Exhibitions and has garnered over 30 plus years of rich and
              relevant experience in the field of personal Safety. This
              ever-smiling, congenial Gentleman's extensive experience,
              knowledge, energy and undying passion to remain ahead in the
              safety field is the spirit & motivation behind “Sarvam Safety”
              SARVAM SAFETY is your one stop solution provider for "Life Safety
              Equipment", with vast product range that encompasses complete
              Protection to Head , Eye , Hearing , Respiratory , Hand , Body ,
              Foot and other safety Equipment like - Fall , First aid , Confined
              Space , Electrical safety , Gas detectors , Breathing Apparatus ,
              Safety cans & cabinets , Spill kits & sorbents, Fire & Welding
              blankets , etc.
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold pb-10">Why Choose Us</h4>
          <ChooseUS />
        </div>

        <div>
          <h4 className="text-xl font-semibold text-xl text-gray-800 text-center">
            Our consistent practices of strict adherence to quality, prompt
            delivery and efficient service have enabled us to be proud channel
            partner for various reputed safety Equipment Manufacturers and to
            name the few:
          </h4>
          <div className="flex flex-col items-center gap-4 pt-10 text-lg font-semibold text-gray-400">
            <p>
              3M India Ltd - Personal safety division , Abbrasive , Adhesives{" "}
            </p>
            <p>
              Acme Fabrik Plast Company - Safety Shoes & Rainwears * Dupont
              India
            </p>
            <p>
              Pvt Limited - Chemical Protective Clothings , Gloves * E-Square
            </p>
            <p>
              Alliance Pvt. Ltd. - Lockouts & Tag Out, Traffic Safety * Garware
            </p>
            <p>
              Wall ropes Ltd - Safety Net, Ropes * Honeywell Analytics –
              Portable
            </p>
            <p>
              & Fixed Gas detectors * Honeywell Safety Products * Karam
              Industries
            </p>
            <p>
              - Fall protection & PPE'S * Prolite Autoglo limited - Emergency
            </p>
            <p>
              Lights & Glow Signages * Superhouse Limited - Safety Shoes & Work
            </p>
            <p>
              wear * Sagar Asia – Ladders and Scaffold. * Tara Lohia Pvt. Ltd.,
              -
            </p>
            <p>Kevlar Gloves/ FR Cover all</p>
          </div>
        </div>
        <hr className="text-gray-400 text-4xl w-full" />
        <div>
          <h4 className="text-xl font-semibold text-xl text-gray-800 text-center">
            We also represent, few Reputed International Safety Manufacturers
            like
          </h4>
          <div className="flex flex-col items-center gap-4 pt-10 text-lg font-semibold text-gray-400">
            <p>
              Cardiac Science Corporation - Automatic External Defibrillator
            </p>
            <p>
              Defibtech LLC– Automatic External Defibrillator. * Esca Tech Inc -
              D
            </p>
            <p>
              Lead Hand & Body Wash solutions * Justrite Manufacturing Co -
              Safety
            </p>
            <p>
              Cans & Cabinets for Flammable Liquid storage * Alliance Rubber –
            </p>
            <p>
              Malaysia – Thin Nitrile gloves * Polison Corporation – Taiwan –
              Blue
            </p>
            <p>
              Eagle face shield * Tempshield Incorporated - USA – Cyro gloves &
            </p>
            <p>Aprons * Showa Glove Co – Malaysia – Gloves * Lalan Rubber –</p>
            <p>Srilanka - Gloves</p>
          </div>
          <hr className="text-gray-400 text-4xl w-full" />
        </div>
        <div className="bg-gray-50 px-6 py-5 shadow-xl border-gray-50">
          <h4 className="text-xl font-bold pb-4">Happy customer says</h4>
          <p className="text-lg font-semibold text-gray-400 pl-4">
            Got some hair nets from here.they're quality and order was processed
            smoothly.what's more in the staff is so helpful! Especially
            Mr.krishna,an executive who really helped me get my order as quick
            as possible as i was in a hurry
          </p>
          <span className="text-xl font-semibold text-blue-800 pt-6">
            Veenth Abhram
          </span>
        </div>
      </div>
    </>
  );
}
export default Aboutpage;