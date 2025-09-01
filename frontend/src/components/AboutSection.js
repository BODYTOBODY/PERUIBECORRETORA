import React from "react";
import { Award, Target, Eye, Heart, TrendingUp, Users, Shield, CheckCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { aboutData } from "../data/mockData";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            Sobre Nós
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conhece a <span className="text-blue-600">Peruíbe Corretora</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {aboutData.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {aboutData.stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Nossa Missão</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {aboutData.mission}
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Nossa Visão</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {aboutData.vision}
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <Card className="p-8 border-0 shadow-2xl bg-gradient-to-br from-blue-50 to-white">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Nossos Valores</h3>
              </div>
              <ul className="space-y-4">
                {aboutData.values.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </Card>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-300 rounded-full opacity-30"></div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Por que escolher a Peruíbe Corretora?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nosso compromisso é oferecer o melhor atendimento e as soluções mais adequadas para cada cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Experiência Comprovada</h4>
              <p className="text-gray-600">
                Mais de 15 anos no mercado, com conhecimento profundo em seguros e relacionamento sólido com as principais seguradoras.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Atendimento Personalizado</h4>
              <p className="text-gray-600">
                Cada cliente é único. Oferecemos consultoria personalizada para encontrar a melhor solução para suas necessidades.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Confiança e Segurança</h4>
              <p className="text-gray-600">
                Transparência total em todas as operações, com suporte completo desde a contratação até o sinistro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;