'use client'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useProjectFilter } from '@/contexts/project-filter-context'

const categories = [
  '全部',
  '知识付费',
  'Chrome插件',
  'Web应用',
  '移动应用',
  '开源项目',
  '工具',
  '其他'
]

const ProjectFilter = () => {
  const { selectedCategory, setSelectedCategory, searchQuery, setSearchQuery } = useProjectFilter()

  return (
    <div className="mb-8 space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="搜索项目..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default ProjectFilter 