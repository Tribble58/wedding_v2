'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function InvitationCard() {
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/confirm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name.trim() || 'Гость' }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setName('')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const groomPhoto = '/images/groom-child.jpg'
  const bridePhoto = '/images/bride-child.jpg'
  const hasGroomPhoto = false
  const hasBridePhoto = false

  return (
    <main className="min-h-screen w-full bg-[#8B1A1A] flex items-center justify-center px-4 py-8">
      {/* Карточка приглашения */}
      <div className="w-full max-w-md bg-[#F5F0E8] p-6 sm:p-8 relative shadow-2xl" style={{ 
        borderRadius: '8px',
        border: '2px solid #2C2C2C',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
      }}>
        {/* Декоративные сердечки */}
        <div className="absolute top-4 right-4 text-red-500 text-xl">❤️</div>
        <div className="absolute top-8 left-6 text-red-500 text-sm">❤️</div>
        <div className="absolute bottom-20 right-8 text-red-500 text-base">❤️</div>
        <div className="absolute bottom-32 left-4 text-red-500 text-sm">❤️</div>

        {/* Баннер МЫ ЖЕНИМСЯ */}
        <div className="flex justify-center items-center gap-1 mb-6 flex-wrap">
          {['М', 'Ы', ' ', 'Ж', 'Е', 'Н', 'И', 'М', 'С', 'Я'].map((letter, index) => {
            if (letter === ' ') return <span key={index} className="w-2" />
            const colors = ['#FFB6C1', '#FFD700', '#90EE90', '#87CEEB', '#DDA0DD', '#FFA500']
            const color = colors[index % colors.length]
            return (
              <div
                key={index}
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold text-lg sm:text-xl rounded"
                style={{ backgroundColor: color }}
              >
                {letter}
              </div>
            )
          })}
        </div>

        {/* Текст приглашения */}
        <div className="text-center mb-6">
          <p className="text-[#C85A5A] text-sm sm:text-base leading-relaxed font-medium">
            Дорогие и близкие
          </p>
          <p className="text-[#C85A5A] text-base sm:text-lg font-bold mt-2 leading-tight">
            ПРИГЛАШАЕМ РАЗДЕЛИТЬ ЭТОТ ОСОБЕННЫЙ ДЕНЬ ВМЕСТЕ С НАМИ
          </p>
        </div>

        {/* Информация о мероприятии */}
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-2">
            <span className="text-[#C85A5A] font-bold">→</span>
            <div>
              <span className="text-[#C85A5A] font-bold text-sm sm:text-base">Сбор гостей</span>
              <p className="text-gray-800 text-sm sm:text-base">Санкт-Петербург, Гангутская улица, 4</p>
              <p className="text-gray-600 text-xs sm:text-sm">Дом Бутик Отель</p>
              <span className="text-[#C85A5A] text-xs sm:text-sm font-semibold">ГДЕ?</span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-[#C85A5A] font-bold">→</span>
            <div>
              <span className="text-[#C85A5A] font-bold text-sm sm:text-base">КОГДА?</span>
              <p className="text-gray-800 text-sm sm:text-base">01 августа 2025 г.</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-[#C85A5A] font-bold">→</span>
            <div>
              <span className="text-[#C85A5A] font-bold text-sm sm:text-base">В 15:20</span>
              <span className="text-[#C85A5A] text-xs sm:text-sm font-semibold ml-2">ВО СКОЛЬКО?</span>
            </div>
          </div>
        </div>

        {/* Фотографии жениха и невесты */}
        <div className="flex justify-center gap-6 mb-6">
          <div className="flex flex-col items-center">
            <p className="text-[#C85A5A] font-bold text-xs sm:text-sm mb-2">НЕВЕСТА</p>
            {hasBridePhoto ? (
              <div className="w-24 h-32 sm:w-28 sm:h-36 overflow-hidden border-2 border-[#C85A5A] relative" style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}>
                <Image
                  src={bridePhoto}
                  alt="Невеста в детстве"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 96px, 112px"
                />
              </div>
            ) : (
              <div className="w-24 h-32 sm:w-28 sm:h-36 bg-pink-200 border-2 border-[#C85A5A] flex items-center justify-center overflow-hidden" style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}>
                <span className="text-pink-400 text-4xl">👧</span>
              </div>
            )}
          </div>

          <div className="flex flex-col items-center">
            <p className="text-[#C85A5A] font-bold text-xs sm:text-sm mb-2">ЖЕНИХ</p>
            {hasGroomPhoto ? (
              <div className="w-24 h-32 sm:w-28 sm:h-36 overflow-hidden border-2 border-[#C85A5A] relative" style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}>
                <Image
                  src={groomPhoto}
                  alt="Жених в детстве"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 96px, 112px"
                />
              </div>
            ) : (
              <div className="w-24 h-32 sm:w-28 sm:h-36 bg-blue-200 border-2 border-[#C85A5A] flex items-center justify-center overflow-hidden" style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}>
                <span className="text-blue-400 text-4xl">👦</span>
              </div>
            )}
          </div>
        </div>

        {/* Программа дня */}
        <div className="mb-6">
          <h3 className="text-[#C85A5A] font-bold text-base sm:text-lg mb-3 text-center">ПРОГРАММА ДНЯ</h3>
          <div className="space-y-2 text-sm sm:text-base text-gray-800">
            <div className="flex items-start gap-2">
              <span className="text-red-500">❤️</span>
              <div>
                <span className="font-semibold">15:20</span> Роспись в загсе 💍👰🏽‍♀️🤵🏻
                <p className="text-xs sm:text-sm text-gray-600 italic mt-1">
                  Вы можете приехать в загс к этому времени или сразу отправиться на площадку.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500">❤️</span>
              <div>
                <span className="font-semibold">16:00–16:30</span> Путь из загса до площадки
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500">❤️</span>
              <div>
                <span className="font-semibold">с 16:00</span> Велком дринк
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500">❤️</span>
              <div>
                <span className="font-semibold">16:30</span> Начало банкета в ресторане
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500">❤️</span>
              <div>
                <span className="font-semibold">21:30</span> Окончание банкета
              </div>
            </div>
          </div>
        </div>

        {/* Дресс-код */}
        <div className="mb-6">
          <h3 className="text-[#C85A5A] font-bold text-base sm:text-lg mb-3 text-center">ДРЕСС-КОД</h3>
          <p className="text-gray-800 text-xs sm:text-sm leading-relaxed mb-4">
            Нам будет очень приятно, если Вы поддержите цветовую гамму торжества и выберите наряды в соответствии с цветовой палитрой нашей свадьбы
          </p>
          
          {/* Изображения цветовых палитр */}
          <div className="space-y-3">
            <div className="relative w-full rounded overflow-hidden">
              <Image
                src="/images/dress-code-colors.jpg"
                alt="Цветовые палитры для дресс-кода"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                priority={false}
              />
            </div>
            
            <div className="relative w-full rounded overflow-hidden">
              <Image
                src="/images/dress-code-palette.jpg"
                alt="Цветовая палитра"
                width={800}
                height={400}
                className="w-full h-auto object-contain"
                priority={false}
              />
            </div>
          </div>
        </div>

        {/* Форма подтверждения */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-gray-800 text-sm font-medium">
              Ваше имя (необязательно)
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C85A5A] focus:border-[#C85A5A] text-base bg-white"
              placeholder="Введите ваше имя"
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-[#C85A5A] text-white text-base font-semibold rounded-lg shadow-lg hover:bg-[#B04A4A] active:bg-[#9A3A3A] disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-h-[48px]"
          >
            {isSubmitting ? 'Отправка...' : 'Я буду ❤️'}
          </button>

          {submitStatus === 'success' && (
            <div className="p-4 bg-green-100 text-green-700 rounded-lg text-sm">
              Спасибо! Мы получили ваше подтверждение.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg text-sm">
              Произошла ошибка. Пожалуйста, попробуйте еще раз.
            </div>
          )}
        </form>
      </div>
    </main>
  )
}
