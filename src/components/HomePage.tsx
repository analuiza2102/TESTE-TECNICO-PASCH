import {
  Github,
  Star,
  Search,
  GitBranch,
  Smartphone,
  Tablet,
  Monitor,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

export function HomePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
      {/* HERO */}
      <div className="text-center space-y-4 sm:space-y-6">
        <div className="flex justify-center">
          <div className="p-3 sm:p-4 bg-primary/10 rounded-full">
            <Github className="h-12 w-12 sm:h-16 sm:w-16 text-primary" />
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
            GitHub Profile Viewer
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Uma aplicação para visualizar perfis e repositórios do GitHub,
            desenvolvida como parte do desafio técnico para vaga de
            Desenvolvedor Frontend na Paschoalotto.
          </p>
        </div>
      </div>

      {/* SOBRE O DESAFIO */}
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5 text-primary" />
          Sobre o Desafio
        </CardTitle>
        <CardDescription>
          Criar uma tela de perfil de usuário funcional e responsiva usando a
          API do GitHub
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          Este projeto solicita a criação de uma interface para buscar e exibir
          informações de usuários do GitHub. O objetivo é demonstrar minhas
          habilidades em desenvolvimento frontend, consumo de APIs e design
          responsivo.
        </p>

        <div className="w-full flex flex-row flex-wrap gap-4">
          <div className="flex-1 min-w-[220px] space-y-2">
            <h4 className="font-medium flex items-center gap-2">
              <Search className="h-4 w-4 text-primary" />
              Funcionalidades Principais
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1 ml-6">
              <li>• Campo de busca por nome de usuário</li>
              <li>• Exibição completa do perfil</li>
              <li>• Lista dos 10 repositórios mais recentes</li>
              <li>• Estados de loading, erro e sucesso</li>
            </ul>
          </div>

          <div className="flex-1 min-w-[220px] space-y-2">
            <h4 className="font-medium flex items-center gap-2">
              <GitBranch className="h-4 w-4 text-primary" />
              Diferenciais Implementados
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1 ml-6">
              <li>• Dark mode com persistência</li>
              <li>• Cache de resultados</li>
              <li>• Design totalmente responsivo</li>
              <li>• Acessibilidade básica</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>

      {/* STACK TECNOLÓGICA */}
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Monitor className="h-5 w-5 text-primary" />
          Stack Tecnológica
        </CardTitle>
        <CardDescription>
          Tecnologias e ferramentas utilizadas no desenvolvimento
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full flex flex-row flex-wrap gap-4">
          <div className="flex-1 min-w-[220px] space-y-3">
            <h4 className="font-medium">Frontend</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">Shadcn/ui</Badge>
              <Badge variant="secondary">lucide-react</Badge>
            </div>
          </div>

          <div className="flex-1 min-w-[220px] space-y-3">
            <h4 className="font-medium">Funcionalidades</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">GitHub API</Badge>
              <Badge variant="secondary">Dark Mode</Badge>
              <Badge variant="secondary">Cache Local</Badge>
              <Badge variant="secondary">Responsivo</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

      
     <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Smartphone className="h-5 w-5 text-primary" />
          Design Responsivo
        </CardTitle>
        <CardDescription>
          Otimizado para todos os tamanhos de tela
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="w-full flex flex-row flex-wrap text-center">
          {/* MOBILE */}
          <div className="flex-1 basis-1/3 flex flex-col items-center gap-2 py-4">
            <Smartphone className="w-10 h-10 text-primary" aria-hidden />
            <p className="font-medium">Mobile</p>
            <p className="text-xs text-muted-foreground">320px+</p>
          </div>

          {/* TABLET */}
          <div className="flex-1 basis-1/3 flex flex-col items-center gap-2 py-4">
            <Tablet className="w-10 h-10 text-primary" aria-hidden />
            <p className="font-medium">Tablet</p>
            <p className="text-xs text-muted-foreground">768px+</p>
          </div>

          {/* DESKTOP */}
          <div className="flex-1 basis-1/3 flex flex-col items-center gap-2 py-4">
            <Monitor className="w-10 h-10 text-primary" aria-hidden />
            <p className="font-medium">Desktop</p>
            <p className="text-xs text-muted-foreground">1024px+</p>
          </div>
        </div>
      </CardContent>
    </Card>

      {/* CTA FINAL */}
      <div className="text-center space-y-4 py-4 sm:py-6">
        <h3 className="text-lg sm:text-xl font-medium">Pronto para começar?</h3>
        <p className="text-muted-foreground">
          Use o campo de busca acima para encontrar qualquer perfil do GitHub
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center text-sm text-muted-foreground">
          <span>Experimente buscar por:</span>
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="outline">telesvevo</Badge>
            <Badge variant="outline">analuiza2102</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
