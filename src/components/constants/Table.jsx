"use client";

import { Table } from "flowbite-react";

const tableData = [
  {
    contact_source: "Devon Cuperus",
    redfin_ink:
      "https://www.redfin.com/OH/Dayton/228-E-Siebenthaler-Ave-45405/home/75902984",
    full_address: "228 E Siebenthaler Ave Dayton OH 45405",
    street_address: "228 E Siebenthaler Ave",
    city: "Dayton",
    state: "OH",
    postal_code: "45405",
    sq_feet: "934",
    year_built: "1930",
    home_style: "House",
    dom: "16",
    asking_price: "25,000",
    price_per_square_foot: "27",
    bedroom: "2",
    bathroom: "1.0",
    property_type: "Single Family Residential",
    lead_source: "On Market",
    after_repair_value: "81258.0",
    max_allowable_offer: "34148.7",
    below_asking: "-36.59%",
    mls_number: "---",
    drive_url:
      "https://drive.google.com/drive/folders/1UUwUEvkXb0VhaYanzN38G4jmU165gl5o?usp=sharing",
    drive_file: "Middletown",
    number_of_comps: "6",
  },
  {
    contact_source: "Devon Cuperus",
    redfin_ink:
      "https://www.redfin.com/OH/Dayton/228-E-Siebenthaler-Ave-45405/home/75902984",
    full_address: "228 E Siebenthaler Ave Dayton OH 45405",
    street_address: "228 E Siebenthaler Ave",
    city: "Dayton",
    state: "OH",
    postal_code: "45405",
    sq_feet: "934",
    year_built: "1930",
    home_style: "House",
    dom: "16",
    asking_price: "25,000",
    price_per_square_foot: "27",
    bedroom: "2",
    bathroom: "1.0",
    property_type: "Single Family Residential",
    lead_source: "On Market",
    after_repair_value: "81258.0",
    max_allowable_offer: "34148.7",
    below_asking: "-36.59%",
    mls_number: "---",
    drive_url:
      "https://drive.google.com/drive/folders/1UUwUEvkXb0VhaYanzN38G4jmU165gl5o?usp=sharing",
    drive_file: "Middletown",
    number_of_comps: "6",
  },
  {
    contact_source: "Devon Cuperus",
    redfin_ink:
      "https://www.redfin.com/OH/Dayton/228-E-Siebenthaler-Ave-45405/home/75902984",
    full_address: "228 E Siebenthaler Ave Dayton OH 45405",
    street_address: "228 E Siebenthaler Ave",
    city: "Dayton",
    state: "OH",
    postal_code: "45405",
    sq_feet: "934",
    year_built: "1930",
    home_style: "House",
    dom: "16",
    asking_price: "25,000",
    price_per_square_foot: "27",
    bedroom: "2",
    bathroom: "1.0",
    property_type: "Single Family Residential",
    lead_source: "On Market",
    after_repair_value: "81258.0",
    max_allowable_offer: "34148.7",
    below_asking: "-36.59%",
    mls_number: "---",
    drive_url:
      "https://drive.google.com/drive/folders/1UUwUEvkXb0VhaYanzN38G4jmU165gl5o?usp=sharing",
    drive_file: "Middletown",
    number_of_comps: "6",
  },
  {
    contact_source: "Devon Cuperus",
    redfin_ink:
      "https://www.redfin.com/OH/Dayton/228-E-Siebenthaler-Ave-45405/home/75902984",
    full_address: "228 E Siebenthaler Ave Dayton OH 45405",
    street_address: "228 E Siebenthaler Ave",
    city: "Dayton",
    state: "OH",
    postal_code: "45405",
    sq_feet: "934",
    year_built: "1930",
    home_style: "House",
    dom: "16",
    asking_price: "25,000",
    price_per_square_foot: "27",
    bedroom: "2",
    bathroom: "1.0",
    property_type: "Single Family Residential",
    lead_source: "On Market",
    after_repair_value: "81258.0",
    max_allowable_offer: "34148.7",
    below_asking: "-36.59%",
    mls_number: "---",
    drive_url:
      "https://drive.google.com/drive/folders/1UUwUEvkXb0VhaYanzN38G4jmU165gl5o?usp=sharing",
    drive_file: "Middletown",
    number_of_comps: "6",
  },
  {
    contact_source: "Devon Cuperus",
    redfin_ink:
      "https://www.redfin.com/OH/Dayton/228-E-Siebenthaler-Ave-45405/home/75902984",
    full_address: "228 E Siebenthaler Ave Dayton OH 45405",
    street_address: "228 E Siebenthaler Ave",
    city: "Dayton",
    state: "OH",
    postal_code: "45405",
    sq_feet: "934",
    year_built: "1930",
    home_style: "House",
    dom: "16",
    asking_price: "25,000",
    price_per_square_foot: "27",
    bedroom: "2",
    bathroom: "1.0",
    property_type: "Single Family Residential",
    lead_source: "On Market",
    after_repair_value: "81258.0",
    max_allowable_offer: "34148.7",
    below_asking: "-36.59%",
    mls_number: "---",
    drive_url:
      "https://drive.google.com/drive/folders/1UUwUEvkXb0VhaYanzN38G4jmU165gl5o?usp=sharing",
    drive_file: "Middletown",
    number_of_comps: "6",
  },
  {
    contact_source: "Devon Cuperus",
    redfin_ink:
      "https://www.redfin.com/OH/Dayton/228-E-Siebenthaler-Ave-45405/home/75902984",
    full_address: "228 E Siebenthaler Ave Dayton OH 45405",
    street_address: "228 E Siebenthaler Ave",
    city: "Dayton",
    state: "OH",
    postal_code: "45405",
    sq_feet: "934",
    year_built: "1930",
    home_style: "House",
    dom: "16",
    asking_price: "25,000",
    price_per_square_foot: "27",
    bedroom: "2",
    bathroom: "1.0",
    property_type: "Single Family Residential",
    lead_source: "On Market",
    after_repair_value: "81258.0",
    max_allowable_offer: "34148.7",
    below_asking: "-36.59%",
    mls_number: "---",
    drive_url:
      "https://drive.google.com/drive/folders/1UUwUEvkXb0VhaYanzN38G4jmU165gl5o?usp=sharing",
    drive_file: "Middletown",
    number_of_comps: "6",
  },
  {
    contact_source: "Devon Cuperus",
    redfin_ink:
      "https://www.redfin.com/OH/Dayton/228-E-Siebenthaler-Ave-45405/home/75902984",
    full_address: "228 E Siebenthaler Ave Dayton OH 45405",
    street_address: "228 E Siebenthaler Ave",
    city: "Dayton",
    state: "OH",
    postal_code: "45405",
    sq_feet: "934",
    year_built: "1930",
    home_style: "House",
    dom: "16",
    asking_price: "25,000",
    price_per_square_foot: "27",
    bedroom: "2",
    bathroom: "1.0",
    property_type: "Single Family Residential",
    lead_source: "On Market",
    after_repair_value: "81258.0",
    max_allowable_offer: "34148.7",
    below_asking: "-36.59%",
    mls_number: "---",
    drive_url:
      "https://drive.google.com/drive/folders/1UUwUEvkXb0VhaYanzN38G4jmU165gl5o?usp=sharing",
    drive_file: "Middletown",
    number_of_comps: "6",
  },
  {
    contact_source: "Devon Cuperus",
    redfin_ink:
      "https://www.redfin.com/OH/Dayton/228-E-Siebenthaler-Ave-45405/home/75902984",
    full_address: "228 E Siebenthaler Ave Dayton OH 45405",
    street_address: "228 E Siebenthaler Ave",
    city: "Dayton",
    state: "OH",
    postal_code: "45405",
    sq_feet: "934",
    year_built: "1930",
    home_style: "House",
    dom: "16",
    asking_price: "25,000",
    price_per_square_foot: "27",
    bedroom: "2",
    bathroom: "1.0",
    property_type: "Single Family Residential",
    lead_source: "On Market",
    after_repair_value: "81258.0",
    max_allowable_offer: "34148.7",
    below_asking: "-36.59%",
    mls_number: "---",
    drive_url:
      "https://drive.google.com/drive/folders/1UUwUEvkXb0VhaYanzN38G4jmU165gl5o?usp=sharing",
    drive_file: "Middletown",
    number_of_comps: "6",
  },
  {
    contact_source: "Devon Cuperus",
    redfin_ink:
      "https://www.redfin.com/OH/Dayton/228-E-Siebenthaler-Ave-45405/home/75902984",
    full_address: "228 E Siebenthaler Ave Dayton OH 45405",
    street_address: "228 E Siebenthaler Ave",
    city: "Dayton",
    state: "OH",
    postal_code: "45405",
    sq_feet: "934",
    year_built: "1930",
    home_style: "House",
    dom: "16",
    asking_price: "25,000",
    price_per_square_foot: "27",
    bedroom: "2",
    bathroom: "1.0",
    property_type: "Single Family Residential",
    lead_source: "On Market",
    after_repair_value: "81258.0",
    max_allowable_offer: "34148.7",
    below_asking: "-36.59%",
    mls_number: "---",
    drive_url:
      "https://drive.google.com/drive/folders/1UUwUEvkXb0VhaYanzN38G4jmU165gl5o?usp=sharing",
    drive_file: "Middletown",
    number_of_comps: "6",
  },
  {
    contact_source: "Devon Cuperus",
    redfin_ink:
      "https://www.redfin.com/OH/Dayton/228-E-Siebenthaler-Ave-45405/home/75902984",
    full_address: "228 E Siebenthaler Ave Dayton OH 45405",
    street_address: "228 E Siebenthaler Ave",
    city: "Dayton",
    state: "OH",
    postal_code: "45405",
    sq_feet: "934",
    year_built: "1930",
    home_style: "House",
    dom: "16",
    asking_price: "25,000",
    price_per_square_foot: "27",
    bedroom: "2",
    bathroom: "1.0",
    property_type: "Single Family Residential",
    lead_source: "On Market",
    after_repair_value: "81258.0",
    max_allowable_offer: "34148.7",
    below_asking: "-36.59%",
    mls_number: "---",
    drive_url:
      "https://drive.google.com/drive/folders/1UUwUEvkXb0VhaYanzN38G4jmU165gl5o?usp=sharing",
    drive_file: "Middletown",
    number_of_comps: "6",
  },
  {
    contact_source: "Devon Cuperus",
    redfin_ink:
      "https://www.redfin.com/OH/Dayton/228-E-Siebenthaler-Ave-45405/home/75902984",
    full_address: "228 E Siebenthaler Ave Dayton OH 45405",
    street_address: "228 E Siebenthaler Ave",
    city: "Dayton",
    state: "OH",
    postal_code: "45405",
    sq_feet: "934",
    year_built: "1930",
    home_style: "House",
    dom: "16",
    asking_price: "25,000",
    price_per_square_foot: "27",
    bedroom: "2",
    bathroom: "1.0",
    property_type: "Single Family Residential",
    lead_source: "On Market",
    after_repair_value: "81258.0",
    max_allowable_offer: "34148.7",
    below_asking: "-36.59%",
    mls_number: "---",
    drive_url:
      "https://drive.google.com/drive/folders/1UUwUEvkXb0VhaYanzN38G4jmU165gl5o?usp=sharing",
    drive_file: "Middletown",
    number_of_comps: "6",
  },
  {
    contact_source: "Devon Cuperus",
    redfin_ink:
      "https://www.redfin.com/OH/Dayton/228-E-Siebenthaler-Ave-45405/home/75902984",
    full_address: "228 E Siebenthaler Ave Dayton OH 45405",
    street_address: "228 E Siebenthaler Ave",
    city: "Dayton",
    state: "OH",
    postal_code: "45405",
    sq_feet: "934",
    year_built: "1930",
    home_style: "House",
    dom: "16",
    asking_price: "25,000",
    price_per_square_foot: "27",
    bedroom: "2",
    bathroom: "1.0",
    property_type: "Single Family Residential",
    lead_source: "On Market",
    after_repair_value: "81258.0",
    max_allowable_offer: "34148.7",
    below_asking: "-36.59%",
    mls_number: "---",
    drive_url:
      "https://drive.google.com/drive/folders/1UUwUEvkXb0VhaYanzN38G4jmU165gl5o?usp=sharing",
    drive_file: "Middletown",
    number_of_comps: "6",
  },
  {
    contact_source: "Devon Cuperus",
    redfin_ink:
      "https://www.redfin.com/OH/Dayton/228-E-Siebenthaler-Ave-45405/home/75902984",
    full_address: "228 E Siebenthaler Ave Dayton OH 45405",
    street_address: "228 E Siebenthaler Ave",
    city: "Dayton",
    state: "OH",
    postal_code: "45405",
    sq_feet: "934",
    year_built: "1930",
    home_style: "House",
    dom: "16",
    asking_price: "25,000",
    price_per_square_foot: "27",
    bedroom: "2",
    bathroom: "1.0",
    property_type: "Single Family Residential",
    lead_source: "On Market",
    after_repair_value: "81258.0",
    max_allowable_offer: "34148.7",
    below_asking: "-36.59%",
    mls_number: "---",
    drive_url:
      "https://drive.google.com/drive/folders/1UUwUEvkXb0VhaYanzN38G4jmU165gl5o?usp=sharing",
    drive_file: "Middletown",
    number_of_comps: "6",
  },
  {
    contact_source: "Devon Cuperus",
    redfin_ink:
      "https://www.redfin.com/OH/Dayton/228-E-Siebenthaler-Ave-45405/home/75902984",
    full_address: "228 E Siebenthaler Ave Dayton OH 45405",
    street_address: "228 E Siebenthaler Ave",
    city: "Dayton",
    state: "OH",
    postal_code: "45405",
    sq_feet: "934",
    year_built: "1930",
    home_style: "House",
    dom: "16",
    asking_price: "25,000",
    price_per_square_foot: "27",
    bedroom: "2",
    bathroom: "1.0",
    property_type: "Single Family Residential",
    lead_source: "On Market",
    after_repair_value: "81258.0",
    max_allowable_offer: "34148.7",
    below_asking: "-36.59%",
    mls_number: "---",
    drive_url:
      "https://drive.google.com/drive/folders/1UUwUEvkXb0VhaYanzN38G4jmU165gl5o?usp=sharing",
    drive_file: "Middletown",
    number_of_comps: "6",
  },
];

export default function StripedRows() {
  return (
    <div className="">
      <Table striped className="table">
        <Table.Head>
          <Table.HeadCell className="table-head">Contact Source</Table.HeadCell>
          <Table.HeadCell className="table-head">Redfin Link</Table.HeadCell>
          <Table.HeadCell className="table-head">Full Address</Table.HeadCell>
          <Table.HeadCell className="table-head">Street Address</Table.HeadCell>
          <Table.HeadCell className="table-head">City</Table.HeadCell>
          <Table.HeadCell className="table-head">State</Table.HeadCell>
          <Table.HeadCell className="table-head">Postal Code</Table.HeadCell>
          <Table.HeadCell className="table-head">Sq. Feet</Table.HeadCell>
          <Table.HeadCell className="table-head">Year Built</Table.HeadCell>
          <Table.HeadCell className="table-head">Home Style</Table.HeadCell>
          <Table.HeadCell className="table-head">DOM</Table.HeadCell>
          <Table.HeadCell className="table-head">Asking Price</Table.HeadCell>
          <Table.HeadCell className="table-head">
            Price Per Square Foot
          </Table.HeadCell>
          <Table.HeadCell className="table-head">Bedroom</Table.HeadCell>
          <Table.HeadCell className="table-head">Bathroom</Table.HeadCell>
          <Table.HeadCell className="table-head">Property Type</Table.HeadCell>
          <Table.HeadCell className="table-head">Lead Source</Table.HeadCell>
          <Table.HeadCell className="table-head">
            After Repair Value
          </Table.HeadCell>
          <Table.HeadCell className="table-head">
            Max Allowable Offer
          </Table.HeadCell>
          <Table.HeadCell className="table-head">% Below Asking</Table.HeadCell>
          <Table.HeadCell className="table-head">MLS Number</Table.HeadCell>
          <Table.HeadCell className="table-head">Drive URL</Table.HeadCell>
          <Table.HeadCell className="table-head">Drive File</Table.HeadCell>
          <Table.HeadCell className="table-head">
            Number of Comps
          </Table.HeadCell>
        </Table.Head>

        <Table.Body>
          {tableData.map((data, index) => (
            <Table.Row key={index} className="body">
              <Table.Cell className="table-body">
                {data.contact_source}
              </Table.Cell>
              <Table.Cell className="table-body">{data.redfin_ink}</Table.Cell>
              <Table.Cell className="table-body">
                {data.full_address}
              </Table.Cell>
              <Table.Cell className="table-body">
                {data.street_address}
              </Table.Cell>
              <Table.Cell className="table-body">{data.city}</Table.Cell>
              <Table.Cell className="table-body">{data.state}</Table.Cell>
              <Table.Cell className="table-body">{data.postal_code}</Table.Cell>
              <Table.Cell className="table-body">{data.sq_feet}</Table.Cell>
              <Table.Cell className="table-body">{data.year_built}</Table.Cell>
              <Table.Cell className="table-body">{data.home_style}</Table.Cell>
              <Table.Cell className="table-body">{data.dom}</Table.Cell>
              <Table.Cell className="table-body">
                {data.asking_price}
              </Table.Cell>
              <Table.Cell className="table-body">
                {data.price_per_square_foot}
              </Table.Cell>
              <Table.Cell className="table-body">{data.bedroom}</Table.Cell>
              <Table.Cell className="table-body">{data.bathroom}</Table.Cell>
              <Table.Cell className="table-body">
                {data.property_type}
              </Table.Cell>
              <Table.Cell className="table-body">{data.lead_source}</Table.Cell>
              <Table.Cell className="table-body">
                {data.after_repair_value}
              </Table.Cell>
              <Table.Cell className="table-body">
                {data.max_allowable_offer}
              </Table.Cell>
              <Table.Cell className="table-body">
                {data.below_asking}
              </Table.Cell>
              <Table.Cell className="table-body">{data.mls_number}</Table.Cell>
              <Table.Cell className="table-body">{data.drive_url}</Table.Cell>
              <Table.Cell className="table-body">{data.drive_file}</Table.Cell>
              <Table.Cell className="table-body">
                {data.number_of_comps}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
