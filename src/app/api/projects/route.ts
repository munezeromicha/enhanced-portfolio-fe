import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import cloudinary from '@/lib/cloudinary';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const tags = (formData.get('tags') as string).split(',');
    const liveUrl = formData.get('liveUrl') as string;
    const githubUrl = formData.get('githubUrl') as string;
    const image = formData.get('image') as File;

    // Upload image to Cloudinary
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ resource_type: 'image' }, (error, result) => {
          if (error) reject(error);
          resolve(result);
        })
        .end(buffer);
    });

    const project = await prisma.project.create({
      data: {
        title,
        description,
        imageUrl: (result as any).secure_url,
        tags,
        liveUrl,
        githubUrl,
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: 'Error creating project' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching projects' }, { status: 500 });
  }
}