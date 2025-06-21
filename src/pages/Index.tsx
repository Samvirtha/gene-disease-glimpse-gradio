
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Dna, Search, BarChart3, Shield, Zap, Users, Award } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGradioRedirect = () => {
    // Replace with your actual Gradio URL
    window.open('https://your-gradio-app-url.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* DNA Animation Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
          <div className="animate-spin-slow">
            <Dna size={128} className="text-cyan-400" />
          </div>
        </div>
        <div className="absolute top-1/3 right-20 w-24 h-24 opacity-15">
          <div className="animate-pulse">
            <Dna size={96} className="text-purple-400" />
          </div>
        </div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 opacity-10">
          <div className="animate-bounce">
            <Dna size={80} className="text-blue-400" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div 
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <Dna size={120} className="mx-auto text-cyan-400 relative z-10 animate-bounce" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            GenPredict
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-gray-300 font-light">
            Advanced Gene-Disease Prediction Platform
          </p>
          
          <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to predict disease susceptibility 
            from genetic markers with unprecedented accuracy and speed.
          </p>

          <div className="space-y-6">
            <Button
              onClick={handleGradioRedirect}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 group"
            >
              Launch Prediction Tool
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
            </Button>
            
            <div className="flex justify-center space-x-8 mt-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield size={16} className="text-green-400" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap size={16} className="text-yellow-400" />
                <span>Real-time Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award size={16} className="text-purple-400" />
                <span>98.7% Accuracy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Cutting-Edge Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search size={40} />,
                title: "Genomic Analysis",
                description: "Advanced algorithms analyze thousands of genetic variants to identify disease-associated patterns."
              },
              {
                icon: <BarChart3 size={40} />,
                title: "Risk Assessment",
                description: "Comprehensive risk scoring with detailed probability distributions and confidence intervals."
              },
              {
                icon: <Users size={40} />,
                title: "Population Data",
                description: "Leverages diverse population genetics data for more accurate and inclusive predictions."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About GenPredict
          </h2>
          
          <div className="space-y-8 text-lg leading-relaxed text-gray-300">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Revolutionary Technology</h3>
              <p>
                GenPredict represents a breakthrough in personalized medicine, combining cutting-edge machine learning 
                algorithms with comprehensive genomic databases. Our platform analyzes genetic variants across multiple 
                chromosomes to predict disease susceptibility with remarkable accuracy.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Scientific Foundation</h3>
              <p>
                Built on peer-reviewed research and validated against large-scale population studies, GenPredict 
                incorporates data from over 100,000 individuals across diverse ethnic backgrounds. Our models 
                are continuously updated with the latest genomic discoveries and clinical findings.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-pink-400">Privacy & Security</h3>
              <p>
                Your genetic data is protected with enterprise-grade encryption and never stored permanently. 
                All analyses are performed in real-time with immediate deletion of input data. We are fully 
                compliant with HIPAA, GDPR, and other international privacy regulations.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Clinical Applications</h3>
              <p>
                GenPredict supports healthcare professionals in making informed decisions about patient care. 
                From cancer screening protocols to cardiovascular risk assessment, our predictions help enable 
                proactive medical interventions and personalized treatment strategies.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={handleGradioRedirect}
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Start Your Analysis
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/30 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Dna size={32} className="text-cyan-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              GenPredict
            </span>
          </div>
          <p className="text-gray-400 mb-4">
            Advancing personalized medicine through AI-powered genomic analysis
          </p>
          <p className="text-sm text-gray-500">
            © 2025 GenPredict. All rights reserved. | Made with precision and care.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
