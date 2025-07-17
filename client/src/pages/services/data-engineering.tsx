import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Database, BarChart3, Zap, GitBranch } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import QuoteModal from "@/components/quote-modal";
import { useState } from "react";

export default function DataEngineering() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-900 to-blue-900 text-white py-20 pt-32">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                Specialized Service
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-primary">Data Engineering</span> Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform raw data into actionable insights with robust data pipelines, real-time processing, and scalable analytics infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Get A Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-black bg-white hover:bg-gray-100"
                >
                  View Data Projects
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Database className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Data Pipelines</h3>
                  <p className="text-sm text-gray-300">ETL/ELT processes</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <BarChart3 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Real-time Analytics</h3>
                  <p className="text-sm text-gray-300">Stream processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">
                Advanced <span className="text-primary">Data Engineering</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We build robust data infrastructure that enables organizations to collect, process, and analyze data at scale. 
                Our solutions ensure data quality, reliability, and accessibility for data-driven decision making.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Data Pipeline Development</h3>
                    <p className="text-gray-600">Automated data ingestion and processing workflows</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Real-time Processing</h3>
                    <p className="text-gray-600">Stream processing for immediate insights and actions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Data Warehousing</h3>
                    <p className="text-gray-600">Scalable storage solutions for structured and unstructured data</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Data Migration</h3>
                    <p className="text-gray-600">Seamless data transfer between systems and platforms</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Service Highlights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Data Solutions</span>
                    <span className="font-semibold">30+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Timeline</span>
                    <span className="font-semibold">2-5 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Data Processed</span>
                    <span className="font-semibold">10TB+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Performance Gain</span>
                    <span className="font-semibold">300%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Data <span className="text-primary">Technologies</span>
            </h2>
            <p className="text-lg text-gray-600">
              We use industry-leading tools and frameworks for data engineering
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Apache Spark", "Kafka", "Hadoop", "Airflow", "Snowflake", "Databricks",
              "Python", "Scala", "SQL", "dbt", "Terraform", "Docker"
            ].map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Data Engineering Process</span>
            </h2>
            <p className="text-lg text-gray-600">
              Structured approach to building scalable data infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Database className="w-8 h-8" />,
                title: "Data Assessment",
                description: "Analyze current data sources and requirements"
              },
              {
                icon: <GitBranch className="w-8 h-8" />,
                title: "Pipeline Design",
                description: "Design scalable data processing workflows"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Implementation",
                description: "Build and deploy data pipelines"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Monitoring & Optimization",
                description: "Monitor performance and optimize pipelines"
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">{phase.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's build a data infrastructure that powers your business insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-white text-primary hover:bg-gray-100"
            >
              Get A Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-primary"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}