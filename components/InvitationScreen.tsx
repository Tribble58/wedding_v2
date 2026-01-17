'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function InvitationScreen() {
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

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-white to-pink-50 px-4 py-8 sm:py-16">
      <div className="max-w-2xl w-full space-y-6 sm:space-y-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-pink-800 px-4">
          Мы будем рады видеть вас!
        </h2>
        
        <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg px-4">
          <p>
            Дорогие друзья и близкие!
          </p>
          <p>
            Мы приглашаем вас разделить с нами один из самых важных дней в нашей жизни.
          </p>
          <p>
            Ваше присутствие сделает этот день особенным и незабываемым.
          </p>
        </div>

        {/* Информация о мероприятии */}
        <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-8 max-w-2xl mx-auto px-4">
          {/* Адрес */}
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-5 sm:p-6 shadow-sm border border-pink-100">
            <h3 className="text-lg sm:text-xl font-semibold text-pink-800 mb-3 flex items-center gap-2">
              <span>📍</span>
              <span>Адрес</span>
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Санкт-Петербург, Гангутская улица, 4
            </p>
            <p className="text-gray-600 text-sm sm:text-base mt-1">
              Дом Бутик Отель
            </p>
          </div>

          {/* Дресс-код */}
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-5 sm:p-6 shadow-sm border border-pink-100">
            <h3 className="text-lg sm:text-xl font-semibold text-pink-800 mb-3 flex items-center gap-2">
              <span>👗</span>
              <span>Дресс-код</span>
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              Мы бы хотели попросить отдать предпочтение оттенкам, которые будут ниже, и фасонам, в которых Вы будете чувствовать себя комфортно <span className="text-pink-500">❤️</span>
            </p>
            
            {/* Изображения цветовых палитр */}
            <div className="space-y-4 mt-6">
              <div className="relative w-full rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/dress-code-colors.jpg"
                  alt="Цветовые палитры для дресс-кода: Black, Olive, Beige"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority={false}
                />
              </div>
              
              <div className="relative w-full rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/dress-code-palette.jpg"
                  alt="Цветовая палитра: Graphite, Rain forest, Pistachio, Light gray"
                  width={800}
                  height={400}
                  className="w-full h-auto object-contain"
                  priority={false}
                />
              </div>
            </div>
          </div>

          {/* Тайминг */}
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-5 sm:p-6 shadow-sm border border-pink-100">
            <h3 className="text-lg sm:text-xl font-semibold text-pink-800 mb-4 flex items-center gap-2">
              <span>⏰</span>
              <span>Тайминг</span>
            </h3>
            <div className="space-y-3 sm:space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-pink-600 font-semibold text-base sm:text-lg whitespace-nowrap">15:20</span>
                <div>
                  <p className="text-base sm:text-lg">
                    Роспись в загсе <span className="text-pink-500">💍👰🏽‍♀️🤵🏻</span>
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 mt-1 italic">
                    Вы можете приехать в загс к этому времени или сразу отправиться на площадку.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-pink-600 font-semibold text-base sm:text-lg whitespace-nowrap">16:00–16:30</span>
                <p className="text-base sm:text-lg">
                  Путь из загса до площадки
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-pink-600 font-semibold text-base sm:text-lg whitespace-nowrap">с 16:00</span>
                <p className="text-base sm:text-lg">
                  Велком дринк
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-pink-600 font-semibold text-base sm:text-lg whitespace-nowrap">16:30</span>
                <p className="text-base sm:text-lg">
                  Начало банкета в ресторане
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-pink-600 font-semibold text-base sm:text-lg whitespace-nowrap">21:30</span>
                <p className="text-base sm:text-lg">
                  Окончание банкета
                </p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 sm:mt-12 space-y-5 sm:space-y-6 max-w-md mx-auto px-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-gray-700 text-left text-sm sm:text-base">
              Ваше имя (необязательно)
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-base min-h-[44px]"
              placeholder="Введите ваше имя"
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 sm:py-5 bg-pink-600 text-white text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:bg-pink-700 active:bg-pink-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-h-[48px] touch-manipulation"
          >
            {isSubmitting ? 'Отправка...' : 'Я буду'}
          </button>

          {submitStatus === 'success' && (
            <div className="p-4 bg-green-100 text-green-700 rounded-lg text-sm sm:text-base">
              Спасибо! Мы получили ваше подтверждение.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg text-sm sm:text-base">
              Произошла ошибка. Пожалуйста, попробуйте еще раз.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
