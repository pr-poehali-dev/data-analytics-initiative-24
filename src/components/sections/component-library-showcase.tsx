import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"
import { CtaCard } from "@/components/ui-library/cards/cta-card"
import { ProgressCard } from "@/components/ui-library/cards/progress-card"
import { ScrollAnimation } from "@/components/ui-library/animations/scroll-animations"
import { FileCheck, FileText, CheckCircle, Clock, Users, ArrowRight, Rocket, Lightbulb, Sparkles } from "lucide-react"

export function ComponentLibraryShowcase() {
  const [activeTab, setActiveTab] = useState("normokontrol")

  return (
    <section id="components" className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="Наши продукты"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="Инструменты, которые уже сегодня избавят вашу компанию от рутины с документами"
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8">
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-12">
                <AnimatedGradientBorder
                  colors={["#dc2626", "#4b5563", "#dc2626", "#4b5563"]}
                  borderWidth={1}
                  duration={8}
                  containerClassName="rounded-full"
                >
                  <TabsList className="glassmorphic-tabs border-0">
                    <TabsTrigger value="normokontrol">Нормоконтроль</TabsTrigger>
                    <TabsTrigger value="docflow">Документооборот</TabsTrigger>
                    <TabsTrigger value="analytics">Аналитика</TabsTrigger>
                  </TabsList>
                </AnimatedGradientBorder>
              </div>

              {/* Cards Tab */}
              <TabsContent value="normokontrol" className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium tracking-tight text-center">Автоматический нормоконтроль</h3>
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                    Система проверяет документы по всем требуемым стандартам — мгновенно и без ошибок
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ScrollAnimation type="slide" direction="up" delay={0.1}>
                      <ProgressCard
                        title="Проверено документов сегодня"
                        description="Нормоконтроль работает в автоматическом режиме"
                        progress={247}
                        total={247}
                        status="success"
                        showFraction
                        variant="default"
                        icon={<FileCheck className="h-6 w-6" />}
                        className="border-glow-red"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.2}>
                      <ProgressCard
                        title="Соответствие стандартам ГОСТ"
                        description="Документация проходит актуальные нормы"
                        progress={98}
                        total={100}
                        status="success"
                        showPercentage
                        variant="gradient"
                        progressColor="bg-gradient-to-r from-red-500 to-red-700"
                        icon={<CheckCircle className="h-6 w-6" />}
                        className="border-glow-green"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.3}>
                      <ProgressCard
                        title="Экономия времени команды"
                        description="По сравнению с ручным нормоконтролем"
                        progress={90}
                        total={100}
                        status="default"
                        showPercentage
                        variant="outlined"
                        icon={<Clock className="h-6 w-6" />}
                        className="border-glow-blue"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.4}>
                      <ProgressCard
                        title="Документов в архиве"
                        description="Надёжное хранение с историей изменений"
                        progress={1840}
                        total={2000}
                        status="info"
                        showFraction
                        variant="glass"
                        progressColor="bg-blue-500"
                        icon={<FileText className="h-6 w-6" />}
                        className="border-glow-purple"
                      />
                    </ScrollAnimation>
                  </div>
                </div>
              </TabsContent>

              {/* Docflow Tab */}
              <TabsContent value="docflow" className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium tracking-tight text-center">Умный документооборот</h3>
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                    Автоматическое формирование, маршруты согласования и надёжный архив документов
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ScrollAnimation type="slide" direction="up" delay={0.1}>
                      <CtaCard
                        title="Создание документов"
                        description="Автоматическое формирование документов по шаблонам. Стандарты уже вшиты в систему."
                        primaryAction={{ text: "Подробнее" }}
                        variant="default"
                        icon={<FileText className="h-6 w-6" />}
                        className="border-glow-red"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.2}>
                      <CtaCard
                        title="Маршруты согласования"
                        description="Настройте цепочки согласования, уведомления и сроки — система сделает остальное."
                        primaryAction={{ text: "Попробовать" }}
                        variant="gradient"
                        alignment="center"
                        buttonVariant="gradient"
                        icon={<Users className="h-6 w-6" />}
                        className="border-glow-blue"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.3}>
                      <CtaCard
                        title="Умный архив"
                        description="Все документы в одном месте: история версий, поиск, фильтры и быстрый доступ."
                        primaryAction={{ text: "Узнать больше" }}
                        variant="glass"
                        alignment="right"
                        buttonVariant="magnetic"
                        icon={<Sparkles className="h-6 w-6" />}
                        className="border-glow-purple"
                      />
                    </ScrollAnimation>
                  </div>
                </div>
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics" className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium tracking-tight text-center">Аналитика и контроль</h3>
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                    Наглядные метрики эффективности документооборота вашей компании в реальном времени
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ScrollAnimation type="slide" direction="up" delay={0.1}>
                      <ProgressCard
                        title="Скорость обработки документов"
                        description="Среднее время нормоконтроля одного документа"
                        progress={92}
                        total={100}
                        status="success"
                        showPercentage
                        variant="default"
                        icon={<Clock className="h-6 w-6" />}
                        className="border-glow-red"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.2}>
                      <ProgressCard
                        title="Согласовано в срок"
                        description="Документы, прошедшие согласование без просрочки"
                        progress={88}
                        total={100}
                        status="success"
                        showPercentage
                        showFraction
                        variant="gradient"
                        progressColor="bg-gradient-to-r from-red-500 to-red-700"
                        icon={<CheckCircle className="h-6 w-6" />}
                        className="border-glow-green"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.3}>
                      <ProgressCard
                        title="Активные пользователи"
                        description="Из 25 сотрудников проектного отдела"
                        progress={22}
                        total={25}
                        status="default"
                        showFraction
                        variant="outlined"
                        icon={<Users className="h-6 w-6" />}
                        className="border-glow-blue"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.4}>
                      <ProgressCard
                        title="Выявлено нарушений стандартов"
                        description="Автоматически исправлено до отправки"
                        progress={143}
                        total={143}
                        status="success"
                        showFraction
                        variant="glass"
                        progressColor="bg-green-500"
                        icon={<Rocket className="h-6 w-6" />}
                        className="border-glow-purple"
                      />
                    </ScrollAnimation>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <ScrollAnimation type="fade">
                    <AnimatedGradientBorder
                      colors={["#dc2626", "#4b5563", "#dc2626", "#4b5563"]}
                      borderWidth={1}
                      duration={6}
                    >
                      <a
                        href="#pricing"
                        className="inline-flex items-center bg-background border-0 text-foreground hover:text-white px-6 py-2.5 text-sm font-medium"
                      >
                        Запросить демо
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </AnimatedGradientBorder>
                  </ScrollAnimation>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}