import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

/**
 * GET /api/stats
 * Returns conversion statistics
 */
export async function GET() {
  try {
    // Get total conversions
    const totalConversions = await prisma.conversion.count()

    // Get successful conversions
    const successfulConversions = await prisma.conversion.count({
      where: { status: 'completed' },
    })

    // Calculate success rate
    const successRate = totalConversions > 0 
      ? Math.round((successfulConversions / totalConversions) * 100)
      : 0

    // Get total data processed
    const conversions = await prisma.conversion.findMany({
      select: { originalFileSize: true },
    })
    const totalDataProcessed = conversions.reduce(
      (sum, conv) => sum + conv.originalFileSize,
      0
    )

    return NextResponse.json({
      totalConversions,
      successRate,
      dataProcessed: totalDataProcessed,
    })
  } catch (error) {
    console.error('Error fetching stats:', error)
    return NextResponse.json(
      { message: 'Error fetching statistics' },
      { status: 500 }
    )
  }
}
