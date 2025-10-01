"use client";

import { useState } from 'react';
import { Post } from '@prisma/client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';

const formSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  content: z.string().min(1, { message: 'Content is required' }),
  imageUrl: z.string().url({ message: 'Must be a valid URL' }).optional().or(z.literal('')),
  category: z.string().optional(),
});

type PostFormValues = z.infer<typeof formSchema>;

interface PostFormProps {
  initialData: Post | null;
}

export default function PostForm({ initialData }: PostFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const title = initialData ? 'Edit Post' : 'Create Post';
  const description = initialData ? 'Edit the details of this blog post.' : 'Add a new post to your blog.';
  const toastMessage = initialData ? 'Post updated.' : 'Post created.';
  const action = initialData ? 'Save changes' : 'Create post';

  // Create default values that match the form schema
  const defaultValues = initialData ? {
    title: initialData.title,
    content: initialData.content,
    imageUrl: initialData.imageUrl || '',
    category: initialData.category || '',
  } : {
    title: '',
    content: '',
    imageUrl: '',
    category: '',
  };

  const form = useForm<PostFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: PostFormValues) => {
    setIsLoading(true);
    try {
      let response;
      if (initialData) {
        response = await fetch(`/api/blog/${initialData.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      } else {
        response = await fetch('/api/blog', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      }

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      router.refresh();
      router.push('/dashboard/admin/blog' as any);
      toast.success(toastMessage);

    } catch (error) {
      toast.error('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., My First Blog Post" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea placeholder="Write your blog post here..." {...field} rows={10} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Health Tips" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com/image.png" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Saving...' : action}
          </Button>
        </form>
      </Form>
    </>
  );
}