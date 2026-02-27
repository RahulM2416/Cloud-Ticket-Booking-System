import PDFDocument from "pdfkit";

export const generatePDF = (ename, price, event, location) => {

  const doc = new PDFDocument({
    size: "A4",
    margin: 50,
  });

  const buffers = [];

  doc.on("data", (chunk) => buffers.push(chunk));

  return new Promise((resolve, reject) => {

    doc.on("end", () => {
      const pdfData = Buffer.concat(buffers);
      resolve(pdfData);   
    });

    doc.on("error", reject);


    doc.font("Courier");

    const now = new Date().toLocaleString();

    doc.fontSize(12).text(now, { align: "right" });

    doc.moveDown(2);

    doc.fontSize(26)
       .text("BOOKING SYSTEM", { align: "center" });

    doc.moveDown();

    doc
      .dash(5, { space: 5 })
      .moveTo(50, doc.y)
      .lineTo(550, doc.y)
      .stroke();

    doc.undash();

    doc.moveDown(2);

    doc.fontSize(16);

    doc.text(`Name : ${ename}`);
    doc.moveDown();

    doc.text(`Price : ${price}`);
    doc.moveDown();

    doc.text(`Event : ${event}`);
    doc.moveDown();

    doc.text(`Location : ${location}`);
    doc.moveDown(3);

    // notice box
    const boxY = doc.y;

    doc.roundedRect(50, boxY, 500, 60, 10).stroke();

    doc.fontSize(14).text(
      "Please carry this booking confirmation during entry.",
      70,
      boxY + 20,
      {
        align: "center",
        width: 460,
      }
    );

    doc.end();   
  });
};