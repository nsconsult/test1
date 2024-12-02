// app/api/upload/route.js
import { NextResponse } from 'next/server';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadsDir = path.join(process.cwd(), 'public', 'uploads');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

export async function POST(request) {
  return new Promise((resolve, reject) => {
    upload.single('file')(request, {}, (err) => {
      if (err) {
        return reject(new NextResponse('Error during file upload', { status: 500 }));
      }
      // Debugging line to check the uploaded file object
      console.log('File uploaded: ', request.file);
      resolve(new NextResponse('File uploaded successfully!', { status: 200 }));
    });
  });
}