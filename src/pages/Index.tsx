import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Message {
  id: number;
  author: string;
  text: string;
  timestamp: string;
  isOwn?: boolean;
}

interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: string;
  example: string;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      author: 'Елена Иванова',
      text: 'Добрый день! Очень интересует тема использования интерактивных досок',
      timestamp: '14:30',
    },
    {
      id: 2,
      author: 'Марина Петрова',
      text: 'Подскажите, есть ли бесплатные аналоги для работы с дробями?',
      timestamp: '14:32',
    },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [activeTab, setActiveTab] = useState('intro');

  const resources: Resource[] = [
    {
      id: 1,
      title: 'Учи.ру',
      description: 'Интерактивные задания по математике для 1-4 классов',
      category: 'Платформа',
      icon: 'GraduationCap',
      example: 'Игровые задания на сложение и вычитание в пределах 100',
    },
    {
      id: 2,
      title: 'ЯКласс',
      description: 'Электронный образовательный ресурс с проверкой',
      category: 'Платформа',
      icon: 'BookOpen',
      example: 'Автоматическая проверка решения примеров и задач',
    },
    {
      id: 3,
      title: 'GeoGebra',
      description: 'Динамическая математическая программа',
      category: 'Приложение',
      icon: 'Shapes',
      example: 'Визуализация геометрических фигур и их свойств',
    },
    {
      id: 4,
      title: 'Kahoot',
      description: 'Создание интерактивных викторин и опросов',
      category: 'Игровой',
      icon: 'Gamepad2',
      example: 'Математическая викторина на закрепление таблицы умножения',
    },
    {
      id: 5,
      title: 'Quizizz',
      description: 'Образовательные квизы с мгновенной обратной связью',
      category: 'Игровой',
      icon: 'Trophy',
      example: 'Тест на решение текстовых задач с самопроверкой',
    },
    {
      id: 6,
      title: 'Scratch',
      description: 'Программирование математических игр и анимаций',
      category: 'Творческое',
      icon: 'Code',
      example: 'Создание игры для изучения дробей',
    },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        author: 'Вы',
        text: newMessage,
        timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        isOwn: true,
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary rounded-lg p-2">
                <Icon name="Presentation" className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Электронные ресурсы на уроках математики</h1>
                <p className="text-sm text-gray-600">Вебинар для учителей начальных классов</p>
              </div>
            </div>
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              <Icon name="Users" size={16} className="mr-2" />
              48 участников
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="intro" className="text-sm font-medium">
                  <Icon name="Home" size={16} className="mr-2" />
                  Введение
                </TabsTrigger>
                <TabsTrigger value="examples" className="text-sm font-medium">
                  <Icon name="Lightbulb" size={16} className="mr-2" />
                  Примеры
                </TabsTrigger>
                <TabsTrigger value="demo" className="text-sm font-medium">
                  <Icon name="Monitor" size={16} className="mr-2" />
                  Демонстрация
                </TabsTrigger>
              </TabsList>

              <TabsContent value="intro" className="space-y-6 animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Target" size={24} className="text-primary" />
                      Цели вебинара
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-2 mt-1">
                        <Icon name="Check" size={18} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Познакомиться с современными ресурсами</h3>
                        <p className="text-sm text-gray-600">
                          Изучить актуальные платформы и приложения для обучения математике
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-2 mt-1">
                        <Icon name="Check" size={18} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Научиться применять на практике</h3>
                        <p className="text-sm text-gray-600">
                          Получить конкретные примеры интеграции ресурсов в учебный процесс
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-2 mt-1">
                        <Icon name="Check" size={18} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Обменяться опытом</h3>
                        <p className="text-sm text-gray-600">
                          Поделиться своими находками и узнать о практиках коллег
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="TrendingUp" size={24} className="text-primary" />
                      Преимущества электронных ресурсов
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6 rounded-lg overflow-hidden">
                      <img 
                        src="https://cdn.poehali.dev/projects/c0cf7b1f-a35d-413b-8276-f64306cc6c69/files/e98ec580-53e6-40c3-93bc-84db721c6fe0.jpg" 
                        alt="Урок математики в начальной школе"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                        <Icon name="Sparkles" size={20} className="text-primary mb-2" />
                        <h4 className="font-semibold mb-1">Интерактивность</h4>
                        <p className="text-sm text-gray-600">Активное вовлечение учеников в процесс обучения</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                        <Icon name="LineChart" size={20} className="text-primary mb-2" />
                        <h4 className="font-semibold mb-1">Визуализация</h4>
                        <p className="text-sm text-gray-600">Наглядное представление абстрактных понятий</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                        <Icon name="Zap" size={20} className="text-primary mb-2" />
                        <h4 className="font-semibold mb-1">Мгновенная обратная связь</h4>
                        <p className="text-sm text-gray-600">Автоматическая проверка и корректировка</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                        <Icon name="User" size={20} className="text-primary mb-2" />
                        <h4 className="font-semibold mb-1">Индивидуальный темп</h4>
                        <p className="text-sm text-gray-600">Адаптация под уровень каждого ученика</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="examples" className="space-y-6 animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle>Практические примеры использования</CardTitle>
                    <CardDescription>Как интегрировать электронные ресурсы в урок</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="mb-6 rounded-lg overflow-hidden">
                      <img 
                        src="https://cdn.poehali.dev/projects/c0cf7b1f-a35d-413b-8276-f64306cc6c69/files/2f3085b1-9e8d-410d-8bb7-2bb290ad34fd.jpg" 
                        alt="Использование цифровых технологий в обучении"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="border-l-4 border-primary bg-green-50 p-4 rounded-r-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Clock" size={18} className="text-primary" />
                        <h4 className="font-semibold">Начало урока (5-7 минут)</h4>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Использование Kahoot для устного счёта и активизации внимания
                      </p>
                      <Badge>Мотивация</Badge>
                      <Badge className="ml-2" variant="outline">
                        Игровая форма
                      </Badge>
                    </div>

                    <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="BookOpen" size={18} className="text-green-600" />
                        <h4 className="font-semibold">Объяснение нового материала (15-20 минут)</h4>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        GeoGebra для визуализации геометрических фигур и их свойств
                      </p>
                      <Badge className="bg-green-600">Наглядность</Badge>
                      <Badge className="ml-2" variant="outline">
                        Интерактивная модель
                      </Badge>
                    </div>

                    <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="PenTool" size={18} className="text-orange-600" />
                        <h4 className="font-semibold">Закрепление (10-15 минут)</h4>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Учи.ру для самостоятельной работы с автоматической проверкой
                      </p>
                      <Badge className="bg-orange-600">Индивидуальный темп</Badge>
                      <Badge className="ml-2" variant="outline">
                        Обратная связь
                      </Badge>
                    </div>

                    <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Home" size={18} className="text-purple-600" />
                        <h4 className="font-semibold">Домашнее задание</h4>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        ЯКласс для дифференцированных заданий с отслеживанием прогресса
                      </p>
                      <Badge className="bg-purple-600">Аналитика</Badge>
                      <Badge className="ml-2" variant="outline">
                        Разноуровневость
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="demo" className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle>Обзор электронных ресурсов</CardTitle>
                    <CardDescription>Популярные платформы для обучения математике</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {resources.map((resource) => (
                        <Card key={resource.id} className="hover:shadow-md transition-shadow">
                          <CardContent className="pt-6">
                            <div className="flex items-start gap-4">
                              <div className="bg-primary/10 rounded-lg p-3">
                                <Icon name={resource.icon as any} size={24} className="text-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h3 className="font-bold text-lg">{resource.title}</h3>
                                  <Badge variant="secondary" className="text-xs">
                                    {resource.category}
                                  </Badge>
                                </div>
                                <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                                  <p className="text-xs text-gray-500 mb-1 font-medium">Пример применения:</p>
                                  <p className="text-sm text-gray-700">{resource.example}</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24 h-[calc(100vh-8rem)]">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={20} />
                  Чат для обсуждения
                </CardTitle>
                <CardDescription>Задавайте вопросы и делитесь опытом</CardDescription>
              </CardHeader>
              <CardContent className="p-0 flex flex-col h-[calc(100%-5rem)]">
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] ${
                            message.isOwn
                              ? 'bg-primary text-white'
                              : 'bg-gray-100 text-gray-900'
                          } rounded-lg p-3 shadow-sm`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold">{message.author}</span>
                            <span className="text-xs opacity-70">{message.timestamp}</span>
                          </div>
                          <p className="text-sm">{message.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="border-t p-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Введите сообщение..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} size="icon">
                      <Icon name="Send" size={18} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Icon name="Calendar" size={16} />
              <span>29 ноября 2025</span>
              <span className="mx-2">•</span>
              <Icon name="Clock" size={16} />
              <span>14:00 - 15:30</span>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Icon name="Download" size={16} className="mr-2" />
                Скачать материалы
              </Button>
              <Button size="sm">
                <Icon name="Star" size={16} className="mr-2" />
                Оценить вебинар
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;