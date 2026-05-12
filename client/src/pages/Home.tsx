import { Button } from "@/components/ui/button";
import {
  Github,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Zap,
  Shield,
  Linkedin,
} from "lucide-react";
import { useEffect, useState } from "react";

/**
 * DESIGN PHILOSOPHY: Premium Dark Backend Engineer Portfolio
 * - Deep charcoal/near-black backgrounds with crisp white/light gray text
 * - Accent colors in cyan (#00d9ff) for technical elements
 * - Playfair Display serif for headings (bold, professional)
 * - Inter sans-serif for body (clean, readable)
 * - Asymmetric layouts with generous whitespace
 * - Subtle animations on scroll and hover
 * - Minimal code-inspired visual accents
 * - "Recall" project as visual anchor and showcase
 */

interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "recall",
    title: "Recall",
    type: "منصة مؤسسية متكاملة",
    description:
      "نظام مؤسسي متكامل تم تطويره ببنية حديثة. تم مؤخرًا إعادة هيكلته باعتماد Layered Architecture مع تطبيق SOLID وDDD لتعزيز القابلية للتوسع وسهولة الصيانة وفصل الاهتمامات.",
    highlights: [
      "فصل الأعمال في طبقات: Domain, Application, Infrastructure, Presentation",
      "اعتماد SOLID بشكل عملي في جميع جوانب التوسع",
      "تنظيم Business Logic بدوال وخدمات واضحة لكل مجال",
      "نظام صلاحيات دقيق وموسع لإدارة الوصول",
      "سهولة إضافة وحدات وكيانات جديدة بسرعة"
    ],
    tech: ["NestJS", "TypeScript", "Prisma", "Redis"],
    github: "https://github.com/IMDNOS/recall",
    featured: true
  },
  {
    id: "cabsula",
    title: "Cabsula",
    type: "نظام إدارة صيدليات",
    description:
      "نظام Backend لإدارة الصيدليات يركز على المخزون والموردين والفواتير والمدفوعات بدقة تشغيلية وصلاحيات إدارية قوية.",
    highlights: [
      "مصادقة وتفويض باستخدام Sanctum",
      "إدارة دورة حياة المخزون والدفعات",
      "إدارة الموردين والفواتير والمرتجعات",
      "عمليات إتلاف وإرجاع منظمة",
      "نظام صلاحيات إداري واضح",
      "REST APIs قابلة للتكامل",
      "تقليل الأخطاء التشغيلية في الإدارة اليومية"
    ],
    tech: ["Laravel", "Sanctum", "MySQL", "Blade", "REST API"],
    github: "https://github.com/saifkenani-SW/Cabsula"
  },
  {
    id: "goswift",
    title: "GoSwift Backend",
    type: "Backend للتجارة الإلكترونية والطلبات",
    description:
      "خلفية مرنة لإدارة المتاجر والمنتجات والسلة والطلبات والإشعارات مع تنظيم API قابل للتوسع وإدارة فعالة للمشرفين.",
    highlights: [
      "نظام سلة متكامل",
      "إدارة دورة حياة الطلبات",
      "بحث وتصفية متقدمة",
      "إشعارات للمستخدمين",
      "دعم واجهات إدارة المشرف",
      "تصميم API معياري"
    ],
    tech: ["Laravel", "MySQL", "REST API"],
    github: "https://github.com/saifkenani-SW/GoSwift-BackEnd"
  },
  {
    id: "senet",
    title: "Senet Game",
    type: "لعبة استراتيجية مدعومة بخوارزميات ذكاء",
    description:
      "تنفيذ لعبة لوحية مع نمذجة دقيقة لحالة اللعبة وخوارزميات قرار ذكية وتقييم احتمالات الحركة لتحقيق تجربة لعب تحليلية.",
    highlights: [
      "خوارزمية ExpectMiniMax",
      "تقييم حالات اللعب",
      "حساب الحركات بالذكاء الاصطناعي",
      "نمذجة احتمالات النتائج",
      "تصميم كائني واضح"
    ],
    tech: ["Java", "OOP", "AI Search Algorithms"],
    github: "https://github.com/saifkenani-SW/Senet-Game"
  },
  {
    id: "maze",
    title: "Maze Collapse Game",
    type: "لعبة ألغاز بخوارزميات بحث",
    description:
      "لعبة متاهة ديناميكية تُطبّق خوارزميات البحث الكلاسيكية مع أنماط عرض متعددة ومحاكاة للمستويات.",
    highlights: [
      "BFS و DFS و UCS",
      "عرض 2D/3D",
      "محاكاة مستويات",
      "خرائط من ملفات",
      "منطق لعب ديناميكي",
      "تطبيق عملي لمبادئ البحث"
    ],
    tech: ["Java", "Swing", "Search Algorithms"],
    github: "https://github.com/saifkenani-SW/Maze-Collapse-Game"
  },
  {
    id: "compiler",
    title: "Flask Compiler",
    type: "Compiler + Web Application",
    description:
      "مشروع يجمع بين مفاهيم بناء المترجمات وتطبيق ويب لإدارة المنتجات باستخدام Flask مع بنية تعليمية عملية متكاملة.",
    highlights: [
      "تنفيذ Lexer وParser",
      "توليد AST",
      "إدارة Symbol Table",
      "اختبارات لمكونات المترجم",
      "Backend باستخدام Flask",
      "رفع صور للمنتجات",
      "ربط مفاهيم أكاديمية بتطبيق عملي"
    ],
    tech: ["Python", "Flask", "Compiler Design"],
    github: "https://github.com/saifkenani-SW/flask-compiler-python"
  },
  {
    id: "parallel",
    title: "Parallel Programming App",
    type: "تطبيق Backend معياري",
    description:
      "تطبيق مبني على NestJS يعكس تنظيمًا واضحًا للنطاقات التجارية وتوزيعًا عمليًا للخدمات ضمن بنية قابلة للتوسع.",
    highlights: [
      "تقسيم النظام إلى Domain Modules",
      "فصل الطلبات والمدفوعات والمخزون",
      "تهيئة تشغيل عبر Docker",
      "وحدة بريد إلكتروني مستقلة",
      "هيكلة مناسبة للتوسع المؤسسي"
    ],
    tech: ["NestJS", "TypeScript", "Docker"],
    github: "https://github.com/Abdalrhmman-Alsyed/parallent_programming_app"
  }
];

const techStack = {
  "Backend": ["NestJS", "Laravel", "TypeScript", "PHP", "Python", "Java"],
  "Database & Infrastructure": ["Prisma", "MySQL", "Redis", "Docker"],
  "Concepts": ["REST APIs", "Authentication", "RBAC", "System Design", "Search Algorithms", "Compiler Design"]
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
                setVisibleProjects((prev) => {
                  const updated = new Set(prev);
                  updated.add(entry.target.id);
                  return Array.from(updated);
                });
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll("[data-project]");
    projectElements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container max-w-7xl mx-auto px-4 py-3 sm:py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-base sm:text-lg font-bold text-accent">SK</div>
          <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#tech" className="hover:text-accent transition-colors">Tech</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 sm:pt-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663252151284/YRMVdaCd3WRBALBDiSkFtd/hero-bg-dark-tech-nMcVejJEFvV7E5USQ4gp52.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6 inline-block">
              <span className="text-accent text-xs sm:text-sm font-mono tracking-wider">Backend Engineer</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Saif Al-Din Kenani
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
              مهندس Backend متخصص في بناء الأنظمة القابلة للتوسع عبر هندسة معيارية حديثة، مع تركيز قوي على SOLID وDDD وLayered Architecture في التطبيقات المؤسسية.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent/10 text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6"
                onClick={() => window.open("https://github.com/saifkenani-SW", "_blank")}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent/10 text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6"
                onClick={() => window.open("mailto:saif.khaled.kenani@gmail.com")}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact
              </Button>
            </div>
            <div className="mt-6 space-y-2 text-sm sm:text-base text-foreground/80">
              <p>الاسم: Saif Al-Din Kenani</p>
              <p>البريد الإلكتروني: saif.khaled.kenani@gmail.com</p>
              <p>GitHub: https://github.com/saifkenani-SW</p>
              <p>LinkedIn: https://www.linkedin.com/in/saif-kenani-180a6a381/</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 md:py-32 border-t border-border">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">About Me</h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-foreground/80">
                <p>
                  أنا مهندس Backend من سوريا، أعمل على تصميم وبناء أنظمة مؤسسية قابلة للتوسع مع اهتمام عالٍ بجودة البنية وسهولة الصيانة طويلة المدى.
                </p>
                <p>
                  أركز على تصميم REST APIs، أنظمة المصادقة والتفويض، والبنية التحتية للتطبيقات الكبيرة مع فصل واضح للمسؤوليات لتحقيق مرونة التطوير.
                </p>
                <p>
                  أهتم أيضًا بالخوارزميات وتصميم المترجمات وأنماط هندسة البرمجيات، وأطبّق ذلك عمليًا في المشاريع لإنتاج حلول احترافية موثوقة للشركات.
                </p>
              </div>
            </div>
            
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <Code2 className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-base sm:text-lg font-bold mb-2">Backend Architecture</h3>
                  <p className="text-sm text-foreground/60">Modular design, clean code, scalable systems</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <Shield className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-base sm:text-lg font-bold mb-2">Authentication</h3>
                  <p className="text-sm text-foreground/60">RBAC, permissions, secure systems</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <Database className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-base sm:text-lg font-bold mb-2">Data Management</h3>
                  <p className="text-sm text-foreground/60">ORM, caching, query optimization</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <Zap className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-base sm:text-lg font-bold mb-2">Performance</h3>
                  <p className="text-sm text-foreground/60">Optimization, scalability, efficiency</p>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-16 sm:py-20 md:py-32 border-t border-border bg-card/30">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16">Technology Stack</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {Object.entries(techStack).map(([category, techs]) => (
              <div key={category}>
                <h3 className="text-lg sm:text-xl font-bold text-accent mb-4 sm:mb-6">{category}</h3>
                <div className="space-y-2 sm:space-y-3">
                  {techs.map((tech) => (
                    <div key={tech} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm sm:text-base text-foreground/80">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 md:py-32 border-t border-border">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16">Featured Projects</h2>
          
          {/* Recall Project - Featured */}
          <div 
            id="recall"
            data-project
            className={`mb-16 sm:mb-20 transition-all duration-700 ${
              visibleProjects.includes("recall") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center bg-card border border-border rounded-lg overflow-hidden">
              <div className="h-56 sm:h-64 md:h-full bg-gradient-to-br from-accent/20 to-transparent relative overflow-hidden">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663252151284/YRMVdaCd3WRBALBDiSkFtd/project-recall-showcase-Vz6Xtg8oGKcLJubMWYhF33.webp"
                  alt="Recall Architecture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
              </div>
              
              <div className="p-6 sm:p-8 md:p-12">
                <div className="inline-block mb-4 px-3 py-1 bg-accent/20 text-accent text-xs font-mono rounded">
                  FEATURED PROJECT
                </div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Recall</h3>
                <p className="text-accent text-xs sm:text-sm font-mono mb-6">Enterprise Administrative Platform</p>
                
                <p className="text-sm sm:text-base text-foreground/80 mb-6 sm:mb-8 leading-relaxed">
                  منصة Recall هي نظام مؤسسي متكامل من تطويري، تمت إعادة هيكلته مؤخرًا عبر Layered Architecture وتطبيق SOLID وDDD، ما رفع جودة الاعتمادية وفصل الاهتمامات وسهّل التوسع والصيانة.
                </p>
                
                <div className="mb-8">
                  <h4 className="font-bold text-xs sm:text-sm text-accent mb-3 sm:mb-4">FEATURES / UPDATES</h4>
                  <ul className="space-y-2">
                    {projects[0].highlights.map((highlight) => (
                      <li key={highlight} className="text-xs sm:text-sm text-foreground/70 flex items-start gap-3">
                        <span className="text-accent mt-1">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-bold text-xs sm:text-sm text-accent mb-3 sm:mb-4">TECH STACK</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[0].tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-card border border-border text-xs sm:text-sm rounded text-foreground/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={() => window.open(projects[0].github, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              </div>
            </div>
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(1).map((project, index) => (
              <div
                key={project.id}
                id={project.id}
                data-project
                className={`bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-accent/50 transition-all duration-700 ${
                  visibleProjects.includes(project.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-accent text-xs font-mono mb-4">{project.type}</p>
                
                <p className="text-sm sm:text-base text-foreground/70 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-[11px] sm:text-xs text-accent mb-2 sm:mb-3 tracking-wider">KEY FEATURES</h4>
                  <ul className="space-y-2">
                    {project.highlights.slice(0, 3).map((highlight) => (
                      <li key={highlight} className="text-[11px] sm:text-xs text-foreground/60 flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-background border border-border text-[11px] sm:text-xs rounded text-foreground/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline"
                  size="sm"
                  className="border-accent text-accent hover:bg-accent/10"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <ExternalLink className="w-3 h-3 mr-2" />
                  GitHub
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Mindset Section */}
      <section className="py-16 sm:py-20 md:py-32 border-t border-border bg-card/30">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12">Engineering Philosophy</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">Clean Architecture</h3>
              <p className="text-sm sm:text-base text-foreground/70">
                Building systems with clear separation of concerns, modular design, and maintainable code structures.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">Scalability First</h3>
              <p className="text-sm sm:text-base text-foreground/70">
                Designing systems that grow efficiently, with performance optimization and infrastructure considerations from the start.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">Security & Reliability</h3>
              <p className="text-sm sm:text-base text-foreground/70">
                Implementing robust authentication, authorization, and error handling to build trustworthy systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-32 border-t border-border">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">Let's Connect</h2>
          <p className="text-base sm:text-lg text-foreground/70 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Interested in discussing backend architecture, system design, or potential opportunities? Feel free to reach out.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6"
              onClick={() => window.open("mailto:saif.khaled.kenani@gmail.com")}
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </Button>
            <Button 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent/10 text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6"
              onClick={() => window.open("https://github.com/saifkenani-SW", "_blank")}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub Profile
            </Button>
            <Button 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent/10 text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6"
              onClick={() => window.open("https://www.linkedin.com/in/saif-kenani-180a6a381/", "_blank")}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="text-foreground/60 text-sm">
                © 2026 Saif Al-Din Kenani. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/saifkenani-SW" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:saif.khaled.kenani@gmail.com" className="text-foreground/60 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/saif-kenani-180a6a381/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
