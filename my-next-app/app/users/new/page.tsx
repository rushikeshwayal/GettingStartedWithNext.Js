import ProductCard from '@/app/components/ProductCard'
import Link from 'next/link'
import React from 'react'

const NewUser = () => {
  return (
    <div>
      <h1>New User under user</h1>
      <Link href="/users">Back to Users</Link>
      <ProductCard />
    </div>
  )
}

export default NewUser
