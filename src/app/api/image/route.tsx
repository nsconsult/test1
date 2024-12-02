import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

const UPLOAD_DIR = path.join(process.cwd(), "public/uploads");

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const body = Object.fromEntries(formData);
  const file = (body.file as Blob) || null;

  if (file) {
    const buffer = Buffer.from(await file.arrayBuffer());

    // Créer le répertoire si nécessaire
    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }

    const fileName = (body.file as File).name;
    const filePath = path.resolve(UPLOAD_DIR, fileName);

    // Écrire le fichier dans le répertoire des uploads
    fs.writeFileSync(filePath, buffer);

    // Retourner le chemin relatif de l'image
    const relativePath = `/uploads/${fileName}`;
    
    return NextResponse.json({
      success: true,
      name: fileName,
      path: relativePath,  // Chemin relatif à partir du répertoire public
    });
  } else {
    return NextResponse.json({
      success: false,
    });
  }
};