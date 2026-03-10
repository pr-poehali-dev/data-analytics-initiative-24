import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FaqSection() {
  const faqs = [
    {
      question: "Что такое QWERTEX?",
      answer:
        "QWERTEX — IT-компания, которая разрабатывает собственные продукты для автоматизации работы с документами. Флагманское направление — автоматизированный нормоконтроль: система сама проверяет техническую документацию на соответствие ГОСТ, ЕСКД, СПДС и корпоративным стандартам.",
    },
    {
      question: "Как быстро можно внедрить продукт?",
      answer:
        "Стандартное внедрение занимает от 1 до 2 недель. Мы берём на себя настройку, обучение команды и подключение к вашим системам. Для корпоративных клиентов сроки согласуются индивидуально.",
    },
    {
      question: "Можно ли настроить продукт под наши стандарты?",
      answer:
        "Да. Продукты QWERTEX поддерживают загрузку корпоративных шаблонов и стандартов. На тарифе «Корпоратив» доступна полная кастомизация под внутренние регламенты вашей компании.",
    },
    {
      question: "Есть ли интеграция с 1С, ERP и другими системами?",
      answer:
        "Да, мы поддерживаем интеграцию с 1С, SAP, а также с другими ERP и СЭД через API. На тарифе «Бизнес» и выше интеграция входит в поставку.",
    },
    {
      question: "Как хранятся данные? Можно ли развернуть на своих серверах?",
      answer:
        "Облачная версия хранит данные на защищённых серверах в России. Для корпоративных клиентов доступно On-premise развёртывание на собственной инфраструктуре.",
    },
    {
      question: "Предоставляете ли вы демо или тестовый период?",
      answer:
        "Да! Свяжитесь с нами — мы проведём демонстрацию под ваши задачи и предоставим тестовый доступ для оценки продукта вашей командой.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">
                Частые вопросы
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70">
                Ответы на популярные вопросы о продуктах и внедрении QWERTEX.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl py-12">
          <ScrollReveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glassmorphic-accordion-item">
                  <AccordionTrigger className="text-left font-medium tracking-tight">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground opacity-70">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}