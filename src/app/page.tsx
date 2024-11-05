'use client'
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { ActionIcon, Anchor, Avatar, AvatarGroup, BackgroundImage, Box, Button, Card, Container, Flex, Group, Image, NavLink, Paper, rem, SimpleGrid, Stack, Text, Transition } from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from "react";
import { FaCheckCircle, FaGraduationCap } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { GrFlag } from "react-icons/gr";
import { HiOutlineHome, HiOutlineLightBulb } from "react-icons/hi";
import { IoIosArrowForward, IoMdArrowDropdown } from "react-icons/io";
import { IoCalendarOutline, IoDocumentTextOutline, IoMoonOutline, IoStar } from "react-icons/io5";
import { RiThumbUpLine } from "react-icons/ri";
import { RxDividerVertical } from "react-icons/rx";



export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Stack pos={"relative"} gap={0}>
      <BackgroundImage src="/assets/image/bg/bg.png" radius={0} >
        <Container size={"md"} >
          <Stack>
            <Flex direction={"column"}>
              <Header />
              <Box1 />
              <Box2 />

            </Flex>
          </Stack>
        </Container >
      </BackgroundImage>
      <Box top={215} right={0} w={"100%"} pos={"absolute"} style={{
        zIndex: 998
      }}>
        <Box pos={"relative"} p={"md"}>
          <Image visibleFrom='md' right={50} w={"45%"} style={{ zIndex: 999, position: "absolute" }} src={"	https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/06/gambar-depan-web-1.png"} alt="" />
        </Box>
      </Box>
      <Box bg={"#168383"}>
        <Container>
          <Box p={30}>
            <Carousel
              loop
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
              slideGap={0}
              nextControlIcon={<IconArrowRight color="#16838300" style={{ width: rem(16), height: rem(16) }} />}
              previousControlIcon={<IconArrowLeft color="#16838300" style={{ width: rem(16), height: rem(16) }} />}
            >
              <CarouselSlide>
                <Flex direction={"row"}>
                  <Image src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/05/Logo-BCW-1.png"} alt="" w={112} />
                  <Image src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/05/Logo-PPDB.png"} alt="" w={112} />
                  <Image src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/05/Logo-P5-SMP-Bustanul-Makmur-1.png"} alt="" w={112} />
                </Flex>
              </CarouselSlide>
              <CarouselSlide>
                <Flex direction={"row"}>
                  <Image src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/05/Logo-BCW-1.png"} alt="" w={112} />
                  <Image src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/05/Logo-PPDB.png"} alt="" w={112} />
                  <Image src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/05/Logo-P5-SMP-Bustanul-Makmur-1.png"} alt="" w={112} />
                </Flex>
              </CarouselSlide>
              <CarouselSlide>
                <Flex direction={"row"}>
                  <Image src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/05/Logo-BCW-1.png"} alt="" w={112} />
                  <Image src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/05/Logo-PPDB.png"} alt="" w={112} />
                  <Image src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/05/Logo-P5-SMP-Bustanul-Makmur-1.png"} alt="" w={112} />
                </Flex>
              </CarouselSlide>
              <CarouselSlide>
                <Flex direction={"row"}>
                  <Image src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/05/Logo-BCW-1.png"} alt="" w={112} />
                  <Image src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/05/Logo-PPDB.png"} alt="" w={112} />
                  <Image src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/05/Logo-P5-SMP-Bustanul-Makmur-1.png"} alt="" w={112} />
                </Flex>
              </CarouselSlide>
            </Carousel>
          </Box>
        </Container>
      </Box>
      <Box3 />
      <Box4 />
      <Box5 opened={true} />
      <Box6 />
      <Box7 />
      <Box8 />

    </Stack>
  );
}

export function Header() {
  const navberanda = [
    {
      id: 1,
      text: "Beranda"
    }
  ]

  const navprofil = [
    {
      id: 1,
      text: "Tentang Kami"
    },
    {
      id: 2,
      text: "Visi dan Misi"
    },
    {
      id: 3,
      text: "Ekstrakulikuler"
    },
    {
      id: 4,
      text: "Fasilitas"
    }

  ]

  const navinformasi = [
    {
      id: 1,
      text: "Agenda"
    },
    {
      id: 2,
      text: "Prestasi"
    },
    {
      id: 3,
      text: "Pengumuman"
    },
    {
      id: 4,
      text: "Karya"
    }
  ]

  return (
    <Box pb={50}>
      <Stack>
        <Box

          pt={10}
          pb={10}
        >
          <Flex direction={"row"} gap={"xl"} align={"center"}>
            <Box>
              <Image src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/03/Logo-Web-SMP-Buma.png"} alt="" w={"180"} />
            </Box>
            <Box ml={"lg"}>
              <Flex direction={"row"} align={"center"} gap={"lg"}>
                <Box>
                  {navberanda.map((v, k) => {
                    return (
                      <Box key={k}>
                        <Anchor underline="never">
                          <Text size="sm" c={"white"}>{v.text}</Text>
                        </Anchor>
                      </Box>
                    )
                  })}
                </Box>
                <Box>
                  <NavLink
                    c={"white"}
                    label={<Text size="sm">Profil</Text>}
                    rightSection={<IoMdArrowDropdown color={"white"} size={"15"} />}
                    variant="filled"
                  >
                    {navprofil.map((v, k) => {
                      return (
                        <Box key={k}>
                          <Anchor underline="never">
                            <Text c={"white"}>{v.text}</Text>
                          </Anchor>
                        </Box>
                      )
                    })}

                  </NavLink>
                </Box>
                <Box>
                  <Anchor underline="never">
                    <Text size="sm" c={"white"}>Super Tim</Text>
                  </Anchor>
                </Box>
                <Box>
                  <NavLink
                    label={<Text size="sm">Informasi</Text>}
                    bg={"#12615200"}
                    c={"white"}
                    rightSection={<IoMdArrowDropdown color={"white"} size={"15"} />}
                  >
                    {navinformasi.map((v, k) => {
                      return (
                        <Box key={k}>
                          <Anchor underline="never">
                            <Text c={"white"}>{v.text}</Text>
                          </Anchor>
                        </Box>
                      )
                    })}
                  </NavLink>
                </Box>
                <Anchor underline="never">
                  <Text size="sm" c={"white"} >
                    Berita
                  </Text>
                </Anchor>
                <Anchor underline="never">
                  <Text size="sm" c={"white"}>
                    Testimoni
                  </Text>
                </Anchor>
                <Anchor underline="never">
                  <Text size="sm" c={"white"}>
                    Kontak
                  </Text>
                </Anchor>
              </Flex>
            </Box>
            <Button size="compact-xs" c={"dark"} bg={"#c3f063"} radius={"lg"}>
              PPDB 2024
            </Button>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
}
export function Box1() {
  return (
    <Box >
      <Stack>
        <Box>
          <Group>
            <Card bg={"#FFFFFF40"} radius={"xl"} p={10}>
              <Text c={"white"} fz={"xs"} ta={"center"}>SMP BUSTANUL MAKMUR BANYUWANGI</Text>
            </Card>
          </Group>
        </Box>
      </Stack>
    </Box>
  )
}
export function Box2() {
  return (
    <Box pos={"relative"}>
      <Flex>
        <Group>
          <Box mt={20}>
            <Box>
              <Flex direction={"column"} >
                <Text c={"white"} fw={"bold"} fz={70}>We Lead You to </Text>
                <Text c={"#c3f063"} fw={"bold"} fz={70}>an Educational</Text>
                <Text c={"white"} fw={"bold"} fz={70}>Character</Text>
              </Flex>
            </Box>
            <Box>
              <Flex direction={"column"} >
                <Text c={"white"} fz={"md"}>SMP Bustanul Makmur mewujudkan kualitas lulusan yang unggul dalam</Text>
                <Text c={"white"} fz={"md"}>IMTAQ, handal dalam IPTEK, tangguh dalam kepribadian dan</Text>
                <Text c={"white"} fz={"md"}>berwawasan kebangsaan</Text>
              </Flex>
            </Box>
            <Box mt={20}>
              <Flex direction={"row"} gap={100} >
                <Button ta={"center"} radius={"lg"} bg={"#c3f063"} c={"dark"}>PPDB 2025-2026 Telah dibuka!!!</Button>
                <Paper pl={4} mt={10} pt={3} pb={5} radius={50} bg={"#FFFFFF40"}>
                  <Flex direction={"row"} gap={"md"} pr={20}>
                    <ActionIcon bg={"dark"} radius={"xl"} size={60}>
                      <FaUserGroup size={25} />
                    </ActionIcon>
                    <Flex direction={"column"} justify={"center"}>
                      <Text fw={"bold"} c={"white"}>3500+</Text>
                      <Text fw={"inherit"} c={"white"}>SISWA BAHAGIA</Text>
                    </Flex>
                  </Flex>
                </Paper>
              </Flex>
            </Box>
            <Box>
              <Button variant="transparent" leftSection={<FaGraduationCap size={15} color="white" />}>
                <Text fw={"bold"} fz={"xs"} c={"white"}>
                  TESTIMONI ALUMNI SUKSES KAMI
                </Text>
              </Button>
            </Box>
            <Box mt={15} pb={20}>
              <Flex direction={"row"} gap={30} align={"center"} >
                <AvatarGroup>
                  <Avatar src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/06/dzaky-1.png"} radius={"xl"} w={45} h={45} alt="" />
                  <Avatar src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/06/emilda-1.png"} radius={"xl"} w={45} h={45} alt="" />
                  <Avatar src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/06/inas-1.png"} radius={"xl"} w={45} h={45} alt="" />
                  <Avatar src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/06/ghani-1.png"} radius={"xl"} w={45} h={45} alt="" />
                </AvatarGroup>
                <Flex direction={"column"}>
                  <Group gap={"xs"}>
                    <IoStar size={20} color="yellow" />
                    <IoStar size={20} color="yellow" />
                    <IoStar size={20} color="yellow" />
                    <IoStar size={20} color="yellow" />
                    <IoStar size={20} color="yellow" />
                  </Group>
                  <Anchor underline="never">
                    <Text tw="bold" c={"white"} size="sm">Lihat Testimoni Alumni Kami</Text>
                  </Anchor>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Group>
      </Flex>
    </Box >
  )
}
export function Box3() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Box bg={"white"} pos={"relative"} pb={5}>
      <Container size={"lg"}>
        <Stack>
          <Group justify='center'>
            <Box mt={50}>
              <Card pt={5} pb={5} bg={"#5acbcb"} radius={"xl"} >
                <Text c={"white"} ta={"center"} fz={"xs"}>KABAR SEKOLAH</Text>
              </Card>
            </Box>
          </Group>
          <Box>
            <Group mt={10} justify='center' >
              <Text fz={"40"} fw={"bold"} c={"black"} ta={"center"}>Kabar<Text ml={5} ta={"center"} fw={"bold"} fz={"40"} span c={"#5acbcb"}>Sekolah</Text></Text>
            </Group>
            <Text size='sm' c={"dark"} ta={"center"}>Kabar Terbaru SMP Bustanul Makmur</Text>
          </Box>
          <Box bg={"white"}>
            <Box p={20}>
              <Carousel
                loop
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                plugins={[autoplay.current]}
                slideGap={0}
                nextControlIcon={<IconArrowRight color="white" style={{ width: rem(16), height: rem(16) }} />}
                previousControlIcon={<IconArrowLeft color="white" style={{ width: rem(16), height: rem(16) }} />}
                styles={{
                  indicator: {
                    backgroundColor: 'blue',
                    width: 12,
                    height: 12,
                    transition: 'width 250ms ease',
                    '&[data-active]': {
                      backgroundColor: 'red',
                      width: 16,
                    },
                  },
                }}
              >
                <CarouselSlide >
                  <Flex direction={"row"} gap={"xs"}>
                    <Card pl={50} bg={"white"}>
                      <BackgroundImage radius={"md"} src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/08/Sosialisasi-Program-Sekolah-dan-Pesantren-SMP-Bustanul-Makmur.jpg"} w={345} h={230}>
                        <Group>
                          <Paper mt={10} pt={3} pb={3} pr={10} pl={10} ml={10} bg={"#5acbcb"} radius={"lg"}>
                            <Text size='sm' ta={"center"} c={"white"} fz={"xs"}>Berita</Text>
                          </Paper>
                        </Group>
                      </BackgroundImage>
                      <Avatar bg={"white"} bottom={20} left={280} radius={"xl"} size={35}>
                        <ActionIcon radius={"xl"} bg={"#5acbcb"} size={25}>
                          <IoDocumentTextOutline size={20} color={"white"} />
                        </ActionIcon>
                      </Avatar>
                      <Flex pl={10} direction={"row"} align={"center"} gap={5}>
                        <IoCalendarOutline size={15} color={"#8d99ae"} />
                        <Text c={"#8d99ae"} fz={"xs"}>August 13, 2024</Text>
                      </Flex>
                      <Box>
                        <Text pl={10} fw={"bold"} ta={"justify"} c={"black"} fz={"xs"}>Sosialisasi Program Sekolah dan Pesantren Bersama</Text>
                        <Text pl={10} fw={"bold"} ta={"justify"} c={"black"} fz={"xs"}>Wali Siswa Baru</Text>
                      </Box>
                      <Box pt={10} pl={10}>
                        <Text c={"#8d99ae"} fz={"xs"}>WWW.SMPBUSTANULMAKMUR.SCH.ID - Dalam rangka</Text>
                        <Text c={"#8d99ae"} fz={"xs"}>mengenalkan program sekolah dan pesantren yang</Text>
                      </Box>
                    </Card>
                    <Card bg={"white"}>
                      <BackgroundImage radius={"md"} src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/08/Sosialisasi-Program-Sekolah-dan-Pesantren-SMP-Bustanul-Makmur.jpg"} w={345} h={230}>
                        <Group>
                          <Paper mt={10} pt={3} pb={3} pr={10} pl={10} ml={10} bg={"#5acbcb"} radius={"lg"}>
                            <Text size='sm' ta={"center"} c={"white"} fz={"xs"}>Berita</Text>
                          </Paper>
                        </Group>
                      </BackgroundImage>
                      <Avatar bg={"white"} bottom={20} left={280} radius={"xl"} size={35}>
                        <ActionIcon radius={"xl"} bg={"#5acbcb"} size={25}>
                          <IoDocumentTextOutline size={20} color={"white"} />
                        </ActionIcon>
                      </Avatar>
                      <Flex pl={10} direction={"row"} align={"center"} gap={5}>
                        <IoCalendarOutline size={15} color={"#8d99ae"} />
                        <Text c={"#8d99ae"} fz={"xs"}>August 13, 2024</Text>
                      </Flex>
                      <Box>
                        <Text pl={10} fw={"bold"} ta={"justify"} c={"black"} fz={"xs"}>Sosialisasi Program Sekolah dan Pesantren Bersama</Text>
                        <Text pl={10} fw={"bold"} ta={"justify"} c={"black"} fz={"xs"}>Wali Siswa Baru</Text>
                      </Box>
                      <Box pt={10} pl={10}>
                        <Text c={"#8d99ae"} fz={"xs"}>WWW.SMPBUSTANULMAKMUR.SCH.ID - Dalam rangka</Text>
                        <Text c={"#8d99ae"} fz={"xs"}>mengenalkan program sekolah dan pesantren yang</Text>
                      </Box>
                    </Card>
                    <Card bg={"white"}>
                      <BackgroundImage radius={"md"} src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/08/Sosialisasi-Program-Sekolah-dan-Pesantren-SMP-Bustanul-Makmur.jpg"} w={345} h={230}>
                        <Group>
                          <Paper mt={10} pt={3} pb={3} pr={10} pl={10} ml={10} bg={"#5acbcb"} radius={"lg"}>
                            <Text size='sm' ta={"center"} c={"white"} fz={"xs"}>Berita</Text>
                          </Paper>
                        </Group>
                      </BackgroundImage>
                      <Avatar bg={"white"} bottom={20} left={280} radius={"xl"} size={35}>
                        <ActionIcon radius={"xl"} bg={"#5acbcb"} size={25}>
                          <IoDocumentTextOutline size={20} color={"white"} />
                        </ActionIcon>
                      </Avatar>
                      <Flex pl={10} direction={"row"} align={"center"} gap={5}>
                        <IoCalendarOutline size={15} color={"#8d99ae"} />
                        <Text c={"#8d99ae"} fz={"xs"}>August 13, 2024</Text>
                      </Flex>
                      <Box>
                        <Text pl={10} fw={"bold"} ta={"justify"} c={"black"} fz={"xs"}>Sosialisasi Program Sekolah dan Pesantren Bersama</Text>
                        <Text pl={10} fw={"bold"} ta={"justify"} c={"black"} fz={"xs"}>Wali Siswa Baru</Text>
                      </Box>
                      <Box pt={10} pl={10}>
                        <Text c={"#8d99ae"} fz={"xs"}>WWW.SMPBUSTANULMAKMUR.SCH.ID - Dalam rangka</Text>
                        <Text c={"#8d99ae"} fz={"xs"}>mengenalkan program sekolah dan pesantren yang</Text>
                      </Box>
                    </Card>
                  </Flex>
                </CarouselSlide>
                <CarouselSlide >
                  <Flex direction={"row"}>
                    <Card bg={"white"}>
                      <BackgroundImage radius={"md"} src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/08/Sosialisasi-Program-Sekolah-dan-Pesantren-SMP-Bustanul-Makmur.jpg"} w={345} h={230}>
                        <Group>
                          <Paper mt={10} pt={3} pb={3} pr={10} pl={10} ml={10} bg={"#5acbcb"} radius={"lg"}>
                            <Text size='sm' ta={"center"} c={"white"} fz={"xs"}>Berita</Text>
                          </Paper>
                        </Group>
                      </BackgroundImage>
                      <Avatar bg={"white"} bottom={20} left={280} radius={"xl"} size={35}>
                        <ActionIcon radius={"xl"} bg={"#5acbcb"} size={25}>
                          <IoDocumentTextOutline size={20} color={"white"} />
                        </ActionIcon>
                      </Avatar>
                      <Flex pl={10} direction={"row"} align={"center"} gap={5}>
                        <IoCalendarOutline size={15} color={"#8d99ae"} />
                        <Text c={"#8d99ae"} fz={"xs"}>August 13, 2024</Text>
                      </Flex>
                      <Box>
                        <Text pl={10} fw={"bold"} ta={"justify"} c={"black"} fz={"xs"}>Sosialisasi Program Sekolah dan Pesantren Bersama</Text>
                        <Text pl={10} fw={"bold"} ta={"justify"} c={"black"} fz={"xs"}>Wali Siswa Baru</Text>
                      </Box>
                      <Box pt={10} pl={10}>
                        <Text c={"#8d99ae"} fz={"xs"}>WWW.SMPBUSTANULMAKMUR.SCH.ID - Dalam rangka</Text>
                        <Text c={"#8d99ae"} fz={"xs"}>mengenalkan program sekolah dan pesantren yang</Text>
                      </Box>
                    </Card>
                    <Card bg={"white"}>
                      <BackgroundImage radius={"md"} src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/08/Sosialisasi-Program-Sekolah-dan-Pesantren-SMP-Bustanul-Makmur.jpg"} w={345} h={230}>
                        <Group>
                          <Paper mt={10} pt={3} pb={3} pr={10} pl={10} ml={10} bg={"#5acbcb"} radius={"lg"}>
                            <Text size='sm' ta={"center"} c={"white"} fz={"xs"}>Berita</Text>
                          </Paper>
                        </Group>
                      </BackgroundImage>
                      <Avatar bg={"white"} bottom={20} left={280} radius={"xl"} size={35}>
                        <ActionIcon radius={"xl"} bg={"#5acbcb"} size={25}>
                          <IoDocumentTextOutline size={20} color={"white"} />
                        </ActionIcon>
                      </Avatar>
                      <Flex pl={10} direction={"row"} align={"center"} gap={5}>
                        <IoCalendarOutline size={15} color={"#8d99ae"} />
                        <Text c={"#8d99ae"} fz={"xs"}>August 13, 2024</Text>
                      </Flex>
                      <Box>
                        <Text pl={10} fw={"bold"} ta={"justify"} c={"black"} fz={"xs"}>Sosialisasi Program Sekolah dan Pesantren Bersama</Text>
                        <Text pl={10} fw={"bold"} ta={"justify"} c={"black"} fz={"xs"}>Wali Siswa Baru</Text>
                      </Box>
                      <Box pt={10} pl={10}>
                        <Text c={"#8d99ae"} fz={"xs"}>WWW.SMPBUSTANULMAKMUR.SCH.ID - Dalam rangka</Text>
                        <Text c={"#8d99ae"} fz={"xs"}>mengenalkan program sekolah dan pesantren yang</Text>
                      </Box>
                    </Card>
                    <Card bg={"white"}>
                      <BackgroundImage radius={"md"} src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/08/Sosialisasi-Program-Sekolah-dan-Pesantren-SMP-Bustanul-Makmur.jpg"} w={345} h={230}>
                        <Group>
                          <Paper mt={10} pt={3} pb={3} pr={10} pl={10} ml={10} bg={"#5acbcb"} radius={"lg"}>
                            <Text size='sm' ta={"center"} c={"white"} fz={"xs"}>Berita</Text>
                          </Paper>
                        </Group>
                      </BackgroundImage>
                      <Avatar bg={"white"} bottom={20} left={280} radius={"xl"} size={35}>
                        <ActionIcon radius={"xl"} bg={"#5acbcb"} size={25}>
                          <IoDocumentTextOutline size={20} color={"white"} />
                        </ActionIcon>
                      </Avatar>
                      <Flex pl={10} direction={"row"} align={"center"} gap={5}>
                        <IoCalendarOutline size={15} color={"#8d99ae"} />
                        <Text c={"#8d99ae"} fz={"xs"}>August 13, 2024</Text>
                      </Flex>
                      <Box>
                        <Text pl={10} fw={"bold"} ta={"justify"} c={"black"} fz={"xs"}>Sosialisasi Program Sekolah dan Pesantren Bersama</Text>
                        <Text pl={10} fw={"bold"} ta={"justify"} c={"black"} fz={"xs"}>Wali Siswa Baru</Text>
                      </Box>
                      <Box pt={10} pl={10}>
                        <Text c={"#8d99ae"} fz={"xs"}>WWW.SMPBUSTANULMAKMUR.SCH.ID - Dalam rangka</Text>
                        <Text c={"#8d99ae"} fz={"xs"}>mengenalkan program sekolah dan pesantren yang</Text>
                      </Box>
                    </Card>
                  </Flex>
                </CarouselSlide>

              </Carousel>
            </Box>
          </Box>
        </Stack>
      </Container>

    </Box >
  )
}
export function Box4() {
  return (
    <Box>
      <Stack>
        <BackgroundImage src="/assets/image/bg/bg.png" radius={0} pb={90}>
          <Container>
            <Box pt={80}>
              <Text ta={"center"} fw={"bolder"} c={"white"} fz="35">Prestasi Siswa</Text>
            </Box>
            <Box pb={10}>
              <Text size='sm' c={"white"} ta={"center"}>Prestasi SMP Bustanul Makmur</Text>
            </Box>

            <Box>
              <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 2 }}
              >
                <Group>
                  <Box>
                    <Card bg={"white"}>
                      <Flex direction={"row"} gap={10} align={"center"}>
                        <Image src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/10/Selamat-Nazwa-Zhana-600x600.jpg"} alt='' w={100} h={100} />
                        <Box>
                          <Flex direction={"column"}>
                            <Text c={"dark"} fw={"bold"} fz={"lg"}>Juara 2 Baca Geguritan Bahasa Jawa Festival Sastra 2024 Kab. Banyuwangi</Text>
                            <Box pt={10}>
                              <Flex direction={"row"} gap={5} align={"center"}>
                                < IoCalendarOutline size={'15'} color='#8d99ae' />
                                <Text c={"#8d99ae"} fz={"xs"}>October 2, 2024</Text>
                              </Flex>
                            </Box>
                          </Flex>
                        </Box>
                      </Flex>
                    </Card>
                  </Box>
                </Group>
                <Group>
                  <Box>
                    <Card bg={"white"}>
                      <Flex direction={"row"} gap={10} align={"center"}>
                        <Image src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/10/Selamat-Nazwa-Zhana-600x600.jpg"} alt='' w={100} h={100} />
                        <Box>
                          <Flex direction={"column"}>
                            <Text c={"dark"} fw={"bold"} fz={"lg"}>Juara 2 Baca Geguritan Bahasa Jawa Festival Sastra 2024 Kab. Banyuwangi</Text>
                            <Box pt={10}>
                              <Flex direction={"row"} gap={5} align={"center"}>
                                < IoCalendarOutline size={'15'} color='#8d99ae' />
                                <Text c={"#8d99ae"} fz={"xs"}>October 2, 2024</Text>
                              </Flex>
                            </Box>
                          </Flex>
                        </Box>
                      </Flex>
                    </Card>
                  </Box>
                </Group>
                <Group>
                  <Box>
                    <Card bg={"white"}>
                      <Flex direction={"row"} gap={10} align={"center"}>
                        <Image src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/10/Selamat-Nazwa-Zhana-600x600.jpg"} alt='' w={100} h={100} />
                        <Box>
                          <Flex direction={"column"}>
                            <Text c={"dark"} fw={"bold"} fz={"lg"}>Juara 2 Baca Geguritan Bahasa Jawa Festival Sastra 2024 Kab. Banyuwangi</Text>
                            <Box pt={10}>
                              <Flex direction={"row"} gap={5} align={"center"}>
                                < IoCalendarOutline size={'15'} color='#8d99ae' />
                                <Text c={"#8d99ae"} fz={"xs"}>October 2, 2024</Text>
                              </Flex>
                            </Box>
                          </Flex>
                        </Box>
                      </Flex>
                    </Card>
                  </Box>
                </Group>
                <Group>
                  <Box>
                    <Card bg={"white"}>
                      <Flex direction={"row"} gap={10} align={"center"}>
                        <Image src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/10/Selamat-Nazwa-Zhana-600x600.jpg"} alt='' w={100} h={100} />
                        <Box>
                          <Flex direction={"column"}>
                            <Text c={"dark"} fw={"bold"} fz={"lg"}>Juara 2 Baca Geguritan Bahasa Jawa Festival Sastra 2024 Kab. Banyuwangi</Text>
                            <Box pt={10}>
                              <Flex direction={"row"} gap={5} align={"center"}>
                                < IoCalendarOutline size={'15'} color='#8d99ae' />
                                <Text c={"#8d99ae"} fz={"xs"}>October 2, 2024</Text>
                              </Flex>
                            </Box>
                          </Flex>
                        </Box>
                      </Flex>
                    </Card>
                  </Box>
                </Group>
                <Group>
                  <Box>
                    <Card bg={"white"}>
                      <Flex direction={"row"} gap={10} align={"center"}>
                        <Image src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/10/Selamat-Nazwa-Zhana-600x600.jpg"} alt='' w={100} h={100} />
                        <Box>
                          <Flex direction={"column"}>
                            <Text c={"dark"} fw={"bold"} fz={"lg"}>Juara 2 Baca Geguritan Bahasa Jawa Festival Sastra 2024 Kab. Banyuwangi</Text>
                            <Box pt={10}>
                              <Flex direction={"row"} gap={5} align={"center"}>
                                < IoCalendarOutline size={'15'} color='#8d99ae' />
                                <Text c={"#8d99ae"} fz={"xs"}>October 2, 2024</Text>
                              </Flex>
                            </Box>
                          </Flex>
                        </Box>
                      </Flex>
                    </Card>
                  </Box>
                </Group>
                <Group>
                  <Box>
                    <Card bg={"white"}>
                      <Flex direction={"row"} gap={10} align={"center"}>
                        <Image src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/10/Selamat-Nazwa-Zhana-600x600.jpg"} alt='' w={100} h={100} />
                        <Box>
                          <Flex direction={"column"}>
                            <Text c={"dark"} fw={"bold"} fz={"lg"}>Juara 2 Baca Geguritan Bahasa Jawa Festival Sastra 2024 Kab. Banyuwangi</Text>
                            <Box pt={10}>
                              <Flex direction={"row"} gap={5} align={"center"}>
                                < IoCalendarOutline size={'15'} color='#8d99ae' />
                                <Text c={"#8d99ae"} fz={"xs"}>October 2, 2024</Text>
                              </Flex>
                            </Box>
                          </Flex>
                        </Box>
                      </Flex>
                    </Card>
                  </Box>
                </Group>
              </SimpleGrid>
            </Box>

          </Container>
        </BackgroundImage>
      </Stack>
    </Box>
  )
}
export function Box5({ opened }: { opened: boolean }) {
  return (
    <Box bg={"#F1EFEFFF"}>
      <Container size={"md"}>
        <Stack>
          <Box pt={90}>
            <Group>
              <Paper pl={10} pr={10} pt={5} pb={5} radius={"xl"} bg={"#68EDED4B"}>
                <Text c={"#008989E6"} fz={"11"}>NILAI LEBIH KAMI</Text>
              </Paper>
            </Group>
            <Box pb={50}>
              <Flex direction={"row"} align={"center"} gap={"60"}>
                <Text pt={10} pl={10} c={"#008989E6"} fw={"bolder"} fz={"25"} ta={"left"}> <Text span fw={"bolder"} fz={"25"} c={"black"}>Mengembangkan Wawasan</Text> Keislaman, Kebangsaan Dan Kecendikiaan</Text>
                <Text c={"dark"} fz={"sm"} ta={"inherit"}>SMP  Bustanul Makmur Genteng  berdiri sejak 2003, bertujuan mencetak manusia Indonesia yang unggul (berkualitas tinggi) seperti yang tercantum dalam tujuan Pendidikan Nasional</Text>
              </Flex>
            </Box>
          </Box>
          <Box pb={50}>
            <Group>
              <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 4 }}
              >
                <Transition
                  mounted={opened}
                  transition={"fade-up"}
                  duration={400}
                  timingFunction='ease'
                >
                  {(styles) => <Card style={styles} radius={"xl"} bg={"white"} pl={30} pt={50} pb={50} >
                    <Group justify='center'>
                      <ActionIcon right={50} size={"80"} bg={"white"} style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", borderColor: "#008989E6", borderWidth: 3, transform: "rotate(45deg)" }}>
                        <HiOutlineHome style={{ transform: "rotate(-45deg)" }} size={"50"} color='#008989E6' />
                      </ActionIcon>
                    </Group>
                    <Text pt={20} c={"black"} fw={"bold"} fz={"lg"}>Boarding School</Text>
                    <Text pt={20} c={"black"} fz={"md"} ta={"left"}>Sistem pendidikan boarding school yang berpusat pada masjid, sekolah, dan asrama.</Text>
                  </Card>}
                </Transition>
                <Transition
                  mounted={opened}
                  transition={"fade-up"}
                  duration={400}
                  timingFunction='ease'
                >
                  {(styles) => <Card style={styles} radius={"xl"} bg={"white"} pl={20} pt={50} pb={50} >
                    <Group justify='center'>
                      <ActionIcon right={50} size={"80"} bg={"white"} style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", borderColor: "#008989E6", borderWidth: 3, transform: "rotate(45deg)" }}>
                        <HiOutlineHome style={{ transform: "rotate(-45deg)" }} size={"50"} color='#008989E6' />
                      </ActionIcon>
                    </Group>
                    <Text pt={20} c={"black"} fw={"bold"} fz={"lg"}>Boarding School</Text>
                    <Text pt={20} c={"black"} fz={"md"} ta={"left"}>Sistem pendidikan boarding school yang berpusat pada masjid, sekolah, dan asrama.</Text>
                  </Card>}
                </Transition>
                <Transition
                  mounted={opened}
                  transition={"fade-up"}
                  duration={400}
                  timingFunction='ease'
                >
                  {(styles) => <Card style={styles} bg={"#008989E6"} radius={"xl"} pl={30} pt={50} pb={50} >
                    <Group>
                      <ActionIcon size={"80"} bg={"#008989E6"} style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", borderColor: "white", borderWidth: 3, transform: "rotate(45deg)" }}>
                        <HiOutlineHome style={{ transform: "rotate(-45deg)" }} size={"50"} color='white' />
                      </ActionIcon>
                    </Group>
                    <Text pt={20} c={"white"} fw={"bold"} fz={"lg"}>Boarding School</Text>
                    <Text pt={20} c={"white"} fz={"md"} ta={"left"}>Sistem pendidikan boarding school yang berpusat pada masjid, sekolah, dan asrama.</Text>
                  </Card>}
                </Transition>
                <Transition
                  mounted={opened}
                  transition={"fade-up"}
                  duration={400}
                  timingFunction='ease'
                >
                  {(styles) => <Card style={styles} radius={"xl"} bg={"white"} pl={30} pt={50} pb={50} >
                    <Group>
                      <ActionIcon right={4} size={"80"} bg={"white"} style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", borderColor: "#008989E6", borderWidth: 3, transform: "rotate(45deg)" }}>
                        <HiOutlineHome style={{ transform: "rotate(-45deg)" }} size={"50"} color='#008989E6' />
                      </ActionIcon>
                    </Group>
                    <Text pt={20} c={"black"} fw={"bold"} fz={"lg"}>Boarding School</Text>
                    <Text pt={20} c={"black"} fz={"md"} ta={"left"}>Sistem pendidikan boarding school yang berpusat pada masjid, sekolah, dan asrama.</Text>
                  </Card>}
                </Transition>
              </SimpleGrid>
            </Group>
          </Box>
          <Box pb={80}>
            <Group justify='center'>
              <Paper bg={"#F1EFEFFF"} withBorder radius={"xl"} pt={10} pb={10} pl={20} pr={20}>
                <Flex direction={"row"} gap={"xl"} align={"center"}>
                  <Text c={"dark"}>dan masih banyak lagi kelebihan kami</Text>
                  <Button c={"dark"} bg={"#44F608E6"} radius={"lg"}>Selengkapnya</Button>
                </Flex>
              </Paper>
            </Group>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
export function Box6() {
  return (
    <Box bg={"white"}>
      <Container size={"sm"}>
        <Stack>
          <Box pt={80} pb={80}>
            <Flex direction={"row"} gap={"xl"} justify={"center"}>
              <Image radius={"xl"} src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/05/Upacara-1.jpg"} alt='' w={293} />
              <Stack>
                <Group>
                  <Paper bg={"#00898929"} radius={"xl"} pl={10} pr={10} pt={5} pb={5}>
                    <Box>
                      <Text c={"#008989E6"} fz={"xs"}>Selayang Pandang</Text>
                    </Box>
                  </Paper>
                </Group>
                <Box>
                  <Text c={"black"} fw={"bold"} ta={"justify"} fz={"h1"}>Mencetak Generasi </Text>
                  <Text fw={"bold"} fz={'h1'} c={"#008989E6"}>Unggul <Text span c={"black"} fw={"bold"} ta={"justify"} fz={"h1"}>& Berakhlakul</Text></Text>
                  <Text c={"black"} fw={"bold"} ta={"left"} fz={"h1"}>Karimah</Text>
                  <Text pt={20} fz={"13"} ta={"left"} c={"dark"}>SMP Bustanul Makmur Genteng sangat memperhatikan kebutuhan siswa tidak saja dalam aktivitas pembelajaran, namun juga diasah nalar kritisnya serta disediakan kegiatan rekreatif dalam bentuk olah raga dan seni.</Text>
                </Box>
                <Flex direction={"row"} gap={"15"}>
                  <Box pt={10}>
                    <Flex direction={"row"} gap={"xs"} align={"center"}>
                      <FaCheckCircle size={18} color='black' />
                      <Text c={"dark"} fz={"sm"} fw={"bold"}>Berkomitmen Keagamaan</Text>
                    </Flex>
                    <Flex pt={5} direction={"row"} gap={"xs"} align={"center"}>
                      <FaCheckCircle size={18} color='black' />
                      <Text c={"dark"} fz={"sm"} fw={"bold"}>Berkomitmen Kebangsaan</Text>
                    </Flex>
                    <Flex pt={5} direction={"row"} gap={"xs"} align={"center"}>
                      <FaCheckCircle size={18} color='black' />
                      <Text c={"dark"} fz={"sm"} fw={"bold"}>Berkomitmen Kecendiaakan</Text>
                    </Flex>
                  </Box>
                  <Box>
                    <Card radius={"lg"} bg={"#008989E6"}>
                      <Flex direction={"column"} gap={1} align={"center"}>

                        <Text c={"white"} fw={"bold"}>21</Text>
                        <Text c={"white"} fw={"bold"}>Tahun</Text>
                        <Text c={"white"} fw={"bold"}>Pengalaman</Text>
                      </Flex>
                    </Card>
                  </Box>
                </Flex>
                <Flex pt={20} direction={"row"} gap={"5"} align={"center"} justify={"center"}>
                  <Card bg={"#AAFE61E6"} radius={"xl"} pb={10} pt={10} pl={15} pr={15}>
                    <Group>
                      <Text fw={"bold"} c={"black"} fz={"xs"}>KENALI KAMI</Text>
                    </Group>
                  </Card>
                  <RxDividerVertical size={45} />
                  <Box>
                    <Text c={"black"}>H. Imamudin</Text>
                    <Text c={"#777777FF"}>KEPALA SEKOLAH</Text>
                  </Box>
                </Flex>
              </Stack>
            </Flex>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
export function Box7() {
  return (
    <Box >
      <BackgroundImage src="/assets/image/bg/bg.png" radius={0} pt={100} pb={100}>
        <Container size={"md"}>
          <Box pb={20}>
            <Group justify='center'>
              <Paper style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} radius={"xl"} bg={"#5acbcb"} pt={5} pb={5} pl={10} pr={10}>
                <Text fz={"xs"} c={"white"}>TUJUAN PENDIDIKAN</Text>
              </Paper>
            </Group>
          </Box>
          <Box pb={10}>
            <Text ta={"center"} fw={"bold"} c={"white"} fz={"h1"}>Unggul dalam <Text span fw={"bold"} c={"#AAFE61E6"} fz={"h1"}>IMTAQ dan IPTEK</Text></Text>
            <Text ta={"center"} fw={"bold"} c={"white"} fz={"h1"}>dan Berkepribadian <Text span fw={"bold"} c={"#AAFE61E6"} fz={"h1"}>Islami</Text></Text>
          </Box>
          <Box pb={50}>
            <Text ta={"center"} c={"white"} fz={"md"}>
              SMP Bustanul Makmur bertujuan menghasilkan lulusan yang memiliki standart mutu pendidikan. Pembiasaan dan pengembangan diri siswa dilayani seoptimal mungkin dengan didampingi tenaga pendidik dan praktisi dalam mengembangkan bakat minat dalam berbagai kegiatan ekstrakurikuler.
            </Text>
          </Box>
          <Box>
            <Flex direction={"row"} align={"center"} gap={"100"}>
              <Box>
                <Flex direction={"column"} align={"center"} gap={"10"}>
                  <Card bg={"#5ACBCB56"} withBorder style={{ borderColor: "white", transform: "rotate(45deg)" }}>
                    <IoMoonOutline style={{ transform: "rotate(-45deg)" }} size={30} color='white' />
                  </Card>
                  <Text ta={"center"} c={"white"} fw={"bold"}>Komitmen Keislaman</Text>
                  <Text ta={"center"} c={"white"}>Siswa memiliki pemahaman yang luas dan benar tentang ajaran islam</Text>
                  <Box pt={100}>
                    <Flex direction={"column"} align={"center"} gap={"10"} >
                      <Card bg={"#5ACBCB56"} withBorder style={{ borderColor: "white", transform: "rotate(45deg)" }}>
                        <GrFlag style={{ transform: "rotate(-45deg)" }} size={30} color='white' />
                      </Card>
                      <Text ta={"center"} c={"white"} fw={"bold"}>Komitmen Kebangsaan</Text>
                      <Text ta={"center"} c={"white"}>Siswa memiliki pemahaman yang luas dan keyakinan yang benar serta tentang falsafah dan budaya bangsa</Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box >
                <Image
                  src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/05/Nabila-Zara-Web-1.png"}
                  alt=''
                  w={455}
                  pos={"absolute"}
                  style={{ zIndex: 99, }}
                  left={450}
                  top={4200}
                />
              </Box>
              <Box pl={130}>
                <Flex direction={"column"} align={"center"} gap={"10"}>
                  <Card bg={"#5ACBCB56"} withBorder style={{ borderColor: "white", transform: "rotate(45deg)" }}>
                    <HiOutlineLightBulb style={{ transform: "rotate(-45deg)" }} size={30} color='white' />
                  </Card>
                  <Text ta={"center"} c={"white"} fw={"bold"}>Komitmen Kecendikiaan</Text>
                  <Text ta={"center"} c={"white"}>Siswa memiliki keseimbangan antara kecerdasan intelektual, emosional dan spiritual</Text>
                </Flex>
                <Box pt={100}>
                  <Flex direction={"column"} align={"center"} gap={"10"}>
                    <Card bg={"#5ACBCB56"} withBorder style={{ borderColor: "white", transform: "rotate(45deg)" }}>
                      <RiThumbUpLine style={{ transform: "rotate(-45deg)" }} size={30} color='white' />
                    </Card>
                    <Text ta={"center"} c={"white"} fz={"h3"} fw={"bold"}>Smart, Creative, Self Confidence And Peace</Text>
                  </Flex>
                </Box>
              </Box>
            </Flex>
            <Box pt={20} pos={"absolute"} style={{ zIndex: 100 }}>
              <Paper radius={"xl"} bg={"#5ACBCBFF"} p={50}>
                <Flex justify={"center"} direction={"row"} align={"center"} gap={"110"}>
                  <Box>
                    <Text fw={"bold"} fz={"50"} c={"white"}>3k+</Text>
                    <Text ta={"center"} fz={"sm"} c={"white"}>Alumni Sukses</Text>
                  </Box>
                  <Box>
                    <Text fw={"bold"} fz={"50"} c={"white"}>50+</Text>
                    <Text ta={"center"} fz={"sm"} c={"white"}>Tenaga Pendidikan</Text>
                  </Box>
                  <Box>
                    <Text fw={"bold"} fz={"50"} c={"white"}>570+</Text>
                    <Text ta={"center"} fz={"sm"} c={"white"}>Siswa Bahagia</Text>
                  </Box>
                  <Box>
                    <Text fw={"bold"} fz={"50"} c={"white"}>1,000+</Text>
                    <Text ta={"center"} fz={"sm"} c={"white"}>Prestasi Membanggakan</Text>
                  </Box>
                </Flex>
              </Paper>
            </Box>
          </Box>
        </Container>
      </BackgroundImage>
    </Box>
  )
}
export function Box8() {
  return (
    <Box bg={"#F1EFEFFF"} pt={200}>
      <Container size={"md"}>
        <Box>
          <Group>
            <Paper bg={"#00898927"} pl={10} pr={10} pt={5} pb={5} radius={"xl"}>
              <Text c={"#008989E6"} fz={"11"}>VISI & MISI KAMI</Text>
            </Paper>
          </Group>
          <Box pt={20} pb={50}>
            <Flex direction={"row"} align={"center"} gap={"100"} >
              <Box>
                <Group>
                  <Text c={"black"} fw={"bold"} fz={"h1"}><Text span c={"#008989E6"} fw={"bold"} fz={"h1"}>Visi</Text> dan <Text span c={"#008989E6"} fw={"bold"} fz={"h1"}>Misi</Text> SMP</Text>
                  <Text c={"black"} fw={"bold"} fz={"h1"}>Bustanul Makmur</Text>
                </Group>
              </Box>
              <Text fz={"sm"} c={"#585858E6"}>
                “Terwujudnya kualitas lulusan yang unggul dalam IMTAQ, handal dalam IPTEK, tangguh dalam kepribadian dan berwawasan kebangsaan“
              </Text>
            </Flex>
          </Box>
          <Box>
            <Flex direction={"row"} align={"center"} gap={"50"} >
              <Box>
                <Flex direction={"column"} gap={"xl"}>
                  <Card p={20} bg={"white"} radius={"xl"}>
                    <Text c={"black"} fz={"h3"} fw={"bold"}>
                      Kembangkan
                    </Text>
                    <Text c={"black"} fz={"h3"} fw={"bold"}>
                      Wawasan Keislaman
                    </Text>
                    <Text fz={"sm"} pt={5} c={"black"} >
                      Mengembangkan wawasan
                    </Text>
                    <Text fz={"sm"} c={"black"} >
                      keislaman, kebangsaan dan
                    </Text>
                    <Text fz={"sm"} c={"black"} >
                      kecendiakaan
                    </Text>
                    <Image pt={10} radius={"xl"} src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/05/Pengajian-Kitab.jpg"} alt='' w={232} />
                    <Avatar bottom={35} left={190} bg={"white"}>
                      <ActionIcon radius={"xl"} bg={"#008989E6"}>
                        <IoIosArrowForward color='white' size={"25"} />
                      </ActionIcon>
                    </Avatar>
                  </Card>
                  <Card p={20} bg={"white"} radius={"xl"}>
                    <Text c={"black"} fz={"h3"} fw={"bold"}>
                      Kembangkan
                    </Text>
                    <Text c={"black"} fz={"h3"} fw={"bold"}>
                      Wawasan Keislaman
                    </Text>
                    <Text fz={"sm"} pt={5} c={"black"} >
                      Mengembangkan wawasan
                    </Text>
                    <Text fz={"sm"} c={"black"} >
                      keislaman, kebangsaan dan
                    </Text>
                    <Text fz={"sm"} c={"black"} >
                      kecendiakaan
                    </Text>
                    <Image pt={10} radius={"xl"} src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/05/Pengajian-Kitab.jpg"} alt='' w={232} />
                    <Avatar bottom={35} left={190} bg={"white"}>
                      <ActionIcon radius={"xl"} bg={"#008989E6"}>
                        <IoIosArrowForward color='white' size={"25"} />
                      </ActionIcon>
                    </Avatar>
                  </Card>
                </Flex>
              </Box>
              <Box>
                <Flex direction={"column"} gap={"xl"}>
                  <Card p={20} bg={"white"} radius={"xl"}>
                    <Text c={"black"} fz={"h3"} fw={"bold"}>
                      Kembangkan
                    </Text>
                    <Text c={"black"} fz={"h3"} fw={"bold"}>
                      Wawasan Keislaman
                    </Text>
                    <Text fz={"sm"} pt={5} c={"black"} >
                      Mengembangkan wawasan
                    </Text>
                    <Text fz={"sm"} c={"black"} >
                      keislaman, kebangsaan dan
                    </Text>
                    <Text fz={"sm"} c={"black"} >
                      kecendiakaan
                    </Text>
                    <Image pt={10} radius={"xl"} src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/05/Pengajian-Kitab.jpg"} alt='' w={232} />
                    <Avatar bottom={35} left={190} bg={"white"}>
                      <ActionIcon radius={"xl"} bg={"#008989E6"}>
                        <IoIosArrowForward color='white' size={"25"} />
                      </ActionIcon>
                    </Avatar>
                  </Card>
                  <Group justify='center'>
                    <Button radius={"xl"} bg={"#008989E6"} size={"md"}>
                      <Text>Lihat Kegiatan Kami</Text>
                    </Button>
                  </Group>
                </Flex>
              </Box>
              <Box>
                <Flex direction={"column"} gap={"xl"}>
                  <Card p={20} bg={"white"} radius={"xl"}>
                    <Text c={"black"} fz={"h3"} fw={"bold"}>
                      Kembangkan
                    </Text>
                    <Text c={"black"} fz={"h3"} fw={"bold"}>
                      Wawasan Keislaman
                    </Text>
                    <Text fz={"sm"} pt={5} c={"black"} >
                      Mengembangkan wawasan
                    </Text>
                    <Text fz={"sm"} c={"black"} >
                      keislaman, kebangsaan dan
                    </Text>
                    <Text fz={"sm"} c={"black"} >
                      kecendiakaan
                    </Text>
                    <Image pt={10} radius={"xl"} src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/05/Pengajian-Kitab.jpg"} alt='' w={232} />
                    <Avatar bottom={35} left={190} bg={"white"}>
                      <ActionIcon radius={"xl"} bg={"#008989E6"}>
                        <IoIosArrowForward color='white' size={"25"} />
                      </ActionIcon>
                    </Avatar>
                  </Card>
                  <Card p={20} bg={"white"} radius={"xl"}>
                    <Text c={"black"} fz={"h3"} fw={"bold"}>
                      Kembangkan
                    </Text>
                    <Text c={"black"} fz={"h3"} fw={"bold"}>
                      Wawasan Keislaman
                    </Text>
                    <Text fz={"sm"} pt={5} c={"black"} >
                      Mengembangkan wawasan
                    </Text>
                    <Text fz={"sm"} c={"black"} >
                      keislaman, kebangsaan dan
                    </Text>
                    <Text fz={"sm"} c={"black"} >
                      kecendiakaan
                    </Text>
                    <Image pt={10} radius={"xl"} src={"https://smpbustanulmakmur.sch.id/wp-content/uploads/2024/05/Pengajian-Kitab.jpg"} alt='' w={232} />
                    <Avatar bottom={35} left={190} bg={"white"}>
                      <ActionIcon radius={"xl"} bg={"#008989E6"}>
                        <IoIosArrowForward color='white' size={"25"} />
                      </ActionIcon>
                    </Avatar>
                  </Card>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}