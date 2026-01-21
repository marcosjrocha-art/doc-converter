'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { BarChart3, FileText, Zap } from 'lucide-react'

/**
 * StatsSection - Displays real-time conversion statistics
 * Shows total conversions, success rate, and data processed
 */
export function StatsSection() {
  const [stats, setStats] = useState({
    totalConversions: 0,
    successRate: 0,
    dataProcessed: 0,
  })

  useEffect(() => {
    // Fetch stats from API
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats')
        if (response.ok) {
          const data = await response.json()
          setStats(data)
        }
      } catch (error) {
        console.error('Error fetching stats:', error)
      }
    }

    fetchStats()
    // Refresh stats every 30 seconds
    const interval = setInterval(fetchStats, 30000)
    return () => clearInterval(interval)
  }, [])

  const statItems = [
    {
      icon: FileText,
      label: 'Conversões Totais',
      value: stats.totalConversions.toLocaleString('pt-BR'),
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Zap,
      label: 'Taxa de Sucesso',
      value: `${stats.successRate}%`,
      color: 'from-green-500 to-green-600',
    },
    {
      icon: BarChart3,
      label: 'Dados Processados',
      value: `${(stats.dataProcessed / 1024 / 1024).toFixed(1)} MB`,
      color: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">{item.label}</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {item.value}
                    </p>
                  </div>
                  <div className={`bg-gradient-to-br ${item.color} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
