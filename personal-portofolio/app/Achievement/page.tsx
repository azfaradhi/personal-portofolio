import React from 'react'
import Header from '@/components/Header'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'

const Achievement = () => {
  return (
    <div className='bg-fixed bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 min-h-screen'>
        <div className='flex flex-col items-center'>
            <Header />
            <div className='container flex flex-col mt-20 justify-start'>
              <h1 className='text-white text-5xl font-medium mb-10'>Achievement</h1>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">No</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Regional</TableHead>
                    <TableHead>Certificate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>

                  <TableRow className='text-white'>
                    <TableCell className="font-medium">1</TableCell>
                    <TableCell>Finalist - High School Mathematical Modelling Competition</TableCell>
                    <TableCell>National</TableCell>
                    <TableCell> 
                      <a href="/Certificate/HSSMC.pdf" target="_blank" rel="noopener noreferrer">
                        <Button className='bg-white text-black'>Open</Button>
                      </a>
                    </TableCell>
                  </TableRow>

                  <TableRow className='text-white'>
                    <TableCell className="font-medium">2</TableCell>
                    <TableCell>First Place - Matematika Ria IPB</TableCell>
                    <TableCell>National</TableCell>
                    <TableCell> 
                      <a href="/Certificate/MR.pdf" target="_blank" rel="noopener noreferrer">
                        <Button className='bg-white text-black'>Open</Button>
                      </a>
                    </TableCell>
                  </TableRow>

                  <TableRow className='text-white'>
                    <TableCell className="font-medium">3</TableCell>
                    <TableCell>First Place - Sebelas Maret Mathematics Competition</TableCell>
                    <TableCell>National</TableCell>
                    <TableCell> 
                      <a href="/Certificate/FUNS.pdf" target="_blank" rel="noopener noreferrer">
                        <Button className='bg-white text-black'>Open</Button>
                      </a>
                    </TableCell>
                  </TableRow>

                  <TableRow className='text-white'>
                    <TableCell className="font-medium">4</TableCell>
                    <TableCell>Finalist - National Mathematics Olympiad</TableCell>
                    <TableCell>National</TableCell>
                    <TableCell> 
                        <Button className='bg-white text-black'>Open</Button>
                    </TableCell>
                  </TableRow>

                  <TableRow className='text-white'>
                    <TableCell className="font-medium">5</TableCell>
                    <TableCell>Finalist - ITB Mathematics Olympiad</TableCell>
                    <TableCell>National</TableCell>
                    <TableCell> 
                      <a href="/Certificate/ITBMO.pdf" target="_blank" rel="noopener noreferrer">
                        <Button className='bg-white text-black'>Open</Button>
                      </a>
                    </TableCell>
                  </TableRow>

                </TableBody>
              </Table>
            </div>
        </div>
    </div>
  )
}

export default Achievement