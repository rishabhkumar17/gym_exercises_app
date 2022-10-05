import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/images/Logo.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack
        gap="40px"
        sx={{ alignItems: 'center' }}
        flexWrap="wrap"
        px="40px"
        pt="24px"
      >
        <img src={Logo} alt="logo" style={{ width: '50px', height: '50px' }} />
      </Stack>
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: '28px', xs: '20px' } }}
        mt="41px"
        textAlign="center"
        pb="40px"
      >
        Made with ❤️ by{' '}
        <a
          href="https://github.com/rishabhkumar17"
          target="_blank"
          style={{ color: '#000', textDecoration: 'none', fontWeight: 'bold' }}
        >
          Rishabh
        </a>
      </Typography>
    </Box>
  )
}

export default Footer
