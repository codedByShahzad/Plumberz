import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { servicesData } from "@/src/lib/servicesdata";
import ServiceDetailContent from "./ServiceDetailContent";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getServiceBySlug(slug: string) {
  return servicesData.find((service) => {
    const serviceSlug = service.href.split("/").pop();
    return serviceSlug === slug;
  });
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.href.split("/").pop() || "",
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service page could not be found.",
    };
  }

  return {
    title: `${service.title} | Plumberz`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailContent service={service} />;
}