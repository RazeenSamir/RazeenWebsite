// App.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Button, ScrollView, TouchableOpacity, Image, TextInput, Alert, Linking, Platform } from "react-native";
import styles, { colors } from "./styles";
import ErrorBoundary from "./ErrorBoundary";

const Stack = createNativeStackNavigator();

function NavHeader({ navigation }) {
  const handleNavigation = (routeName) => {
    try {
      navigation.navigate(routeName);
    } catch (error) {
      console.error('Navigation failed:', error);
    }
  };

  return (
    <View style={styles.navContainer}>
      <View style={styles.navContent}>
        <TouchableOpacity accessibilityLabel="Home" onPress={() => handleNavigation("Home")} style={styles.brand}>
          <View style={{ width: 24, height: 24, borderRadius: 6, backgroundColor: colors.accent }} />
          <Text style={styles.brandText}>Razeen Samir</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <TouchableOpacity onPress={() => handleNavigation("Home")} style={{
            ...styles.button,
            borderWidth: 1,
            borderColor: 'rgba(240,196,60,0.35)',
            backgroundColor: 'rgba(13,17,22,0.90)',
            shadowColor: '#f0c43c',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 12,
            elevation: 4,
          }}><Text style={styles.buttonText}>Home</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation("Projects")} style={{
            ...styles.button,
            borderWidth: 1,
            borderColor: 'rgba(240,196,60,0.35)',
            backgroundColor: 'rgba(13,17,22,0.90)',
            shadowColor: '#f0c43c',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 12,
            elevation: 4,
          }}><Text style={styles.buttonText}>Projects</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation("Experience")} style={{
            ...styles.button,
            borderWidth: 1,
            borderColor: 'rgba(240,196,60,0.35)',
            backgroundColor: 'rgba(13,17,22,0.90)',
            shadowColor: '#f0c43c',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 12,
            elevation: 4,
          }}><Text style={styles.buttonText}>Experience</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation("Sports")} style={{
            ...styles.button,
            borderWidth: 1,
            borderColor: 'rgba(240,196,60,0.35)',
            backgroundColor: 'rgba(13,17,22,0.90)',
            shadowColor: '#f0c43c',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 12,
            elevation: 4,
          }}><Text style={styles.buttonText}>Sports</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation("Contact")} style={{
            ...styles.button,
            borderWidth: 1,
            borderColor: 'rgba(240,196,60,0.35)',
            backgroundColor: 'rgba(13,17,22,0.90)',
            shadowColor: '#f0c43c',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 12,
            elevation: 4,
          }}><Text style={styles.buttonText}>Contact</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <View style={{ borderTopWidth: 1, borderTopColor: "rgba(255,255,255,0.06)", paddingVertical: 24, marginTop: 40 }}>
      <View style={[styles.contentContainer, { paddingVertical: 0 }]}> 
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <Text style={styles.text}>© {year} Razeen Samir</Text>
          <View style={styles.meta}>
            <TouchableOpacity onPress={() => Linking.openURL("https://github.com/RazeenSamir")}><Text style={styles.metaText}>GitHub</Text></TouchableOpacity>
            <Text style={styles.metaText}>•</Text>
            <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/razeen-samir-367748232/")}><Text style={styles.metaText}>LinkedIn</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

function Home({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <NavHeader navigation={navigation} />
        {/* Hero Section with Batman Background */}
        <View style={{
          position: 'relative',
          paddingVertical: 60,
          marginBottom: 26,
          borderRadius: 20,
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: 'rgba(240,196,60,0.35)',
          backgroundColor: 'rgba(13,17,22,0.70)',
          shadowColor: '#f0c43c',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.25,
          shadowRadius: 24,
          elevation: 8,
        }}>
          {/* Batman Background Image */}
          <Image
            source={require('./assets/batman background.jpg')}
            style={{
              position: 'absolute',
              top: 0,
              left: -20,
              right: -20,
              bottom: -20,
              width: '100%',
              height: '200%',
              opacity: 0.3,
            }}
            resizeMode="cover"
          />
          
          {/* Dark Overlay for Text Readability */}
          <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
          }} />
          
          {/* Content with Relative Positioning */}
          <View style={{ position: 'relative', zIndex: 1, marginLeft: 40 }}>
            <Text style={styles.kicker}>CS @ UW Seattle • Research @ UW Medicine</Text>
            <Text style={styles.h1}>
              I like building and making an impact. I also like keeping up with the lastest technologies.
            </Text>
            <Text style={styles.lead}>
              Currently upgrading a VR Arduino based system for a research lab and also working on a sports-tech app with React Native. Looking for Summer '26 SWE roles.
            </Text>
            <View style={[styles.row, { marginTop: 18 }]}>
              <TouchableOpacity 
                style={[styles.button, styles.buttonPrimary]}
                onPress={() => {
                  if (Platform.OS === 'web') {
                    // For web, try multiple approaches
                    try {
                      // First try direct path to the computer science resume
                      const link = document.createElement('a');
                      link.href = './Razeen Samir Comp Sci Resume UPDATED.pdf';
                      link.target = '_blank';
                      link.rel = 'noopener noreferrer';
                      link.download = 'Razeen_Samir_Computer_Science_Resume.pdf';
                      link.click();
                    } catch (error) {
                      // Fallback to window.open
                      window.open('./Razeen Samir Comp Sci Resume UPDATED.pdf', '_blank');
                    }
                  } else {
                    // For mobile, use Linking
                    Linking.openURL('file:///assets/Razeen Samir Comp Sci Resume UPDATED.pdf');
                  }
                }}
              >
                <Text style={styles.buttonTextPrimary}>View Résumé</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={{
                  ...styles.button,
                  borderWidth: 1,
                  borderColor: 'rgba(240,196,60,0.35)',
                  backgroundColor: 'rgba(13,17,22,0.90)',
                  shadowColor: '#f0c43c',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.15,
                  shadowRadius: 12,
                  elevation: 4,
                }}
                onPress={() => navigation.navigate("Projects")}
              >
                <Text style={styles.buttonText}>See Projects</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* About Me and Image Grid */}
        <View style={styles.section}>
          <View style={styles.row}>
            {/* About Me Card */}
            <View style={{
              flex: 1,
              minWidth: 400,
              minHeight: 350,
              position: 'relative',
              overflow: 'hidden',
              borderWidth: 1,
              borderColor: 'rgba(240,196,60,0.35)',
              borderRadius: 16,
              backgroundColor: 'rgba(13,17,22,0.70)',
              padding: 20,
              shadowColor: '#f0c43c',
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.25,
              shadowRadius: 24,
              elevation: 8,
            }}>
              {/* Top Glow Bar */}
              <View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                backgroundColor: 'rgba(255,213,74,0.6)',
              }} />
              <View style={[styles.badge, { 
                paddingHorizontal: 16, 
                paddingVertical: 8,
                marginBottom: 20 
              }]}>
                <Text style={[styles.badgeText, { fontSize: 18, fontWeight: '700' }]}>About Me</Text>
              </View>

              
              <Text style={{
                fontSize: 32,
                lineHeight: 28,
                color: '#d6dde7',
                marginBottom: 30,
                textAlign: 'left',
                fontWeight: '500',
              }}>
                <Text style={{ color: '#ffd54a', fontWeight: '700' }}>Hello!</Text> My name is <Text style={{ color: '#ffd54a', fontWeight: '700' }}>Razeen</Text>, and I'm studying computer science at the <Text style={{ color: '#ffd54a', fontWeight: '700' }}>University of Washington</Text>. As you can tell, I'm a fan of <Text style={{ color: '#ffd54a', fontWeight: '700' }}>Batman</Text>, which is why the theme of this website is black and yellow.
              </Text>
              
              <Text style={{
                fontSize: 32,
                lineHeight: 28,
                color: '#d6dde7',
                marginBottom: 30,
                textAlign: 'left',
                fontWeight: '500',
              }}>
                Outside of school, I'm a huge <Text style={{ color: '#ffd54a', fontWeight: '700' }}>sports fan</Text> and love to play and watch sports, specifically American Football - Go Hawks! Check the sports tab for some of my takes (spoiler alert: I'm a Seahawks fan). If you want to contact me, click the contact tab and you should be able to send me an email.
              </Text>
              
              <Text style={{
                fontSize: 32,
                lineHeight: 28,
                color: '#d6dde7',
                marginBottom: 30,
                textAlign: 'left',
                fontWeight: '500',
              }}>
                As for why I like computer science, what really drew me to it was the ability to <Text style={{ color: '#ffd54a', fontWeight: '700' }}>build and make an impact</Text>. It's no secret that computer science is applicable in every field, whether that is athletics, medicine, or anything else. As a result, I love learning about new technologies and applying them to real-world problems.
              </Text>
              <View style={styles.meta}>
                <Text style={styles.metaText}>Computer Science</Text>
                <Text style={styles.metaText}>•</Text>
                <Text style={styles.metaText}>Research</Text>
                <Text style={styles.metaText}>•</Text>
                <Text style={styles.metaText}>Innovation</Text>
              </View>

            </View>

            {/* Image Display */}
            <View style={{ flex: 1, minWidth: 400, alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('./assets/image0.jpg')}
                style={{
                  width: '200%',
                  height: 700,
                  borderRadius: 16,
                }}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
        <SiteFooter />
      </View>
    </ScrollView>
  );
}

function About({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <NavHeader navigation={navigation} />
        <View style={styles.hero}>
          <Text style={styles.kicker}>About</Text>
          <Text style={styles.h1}>My Journey</Text>
          <Text style={styles.lead}>
            Dedicated to continuous learning and growth in software development.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.h2}>Experience</Text>
          <View style={styles.timeline}>
            <View style={styles.timelineItem}>
              <Text style={styles.timelineDate}>2024 - Present</Text>
              <Text style={styles.timelineRole}>Software Developer</Text>
            </View>
            <View style={styles.timelineItem}>
              <Text style={styles.timelineDate}>2023 - 2024</Text>
              <Text style={styles.timelineRole}>Student Developer</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.h2}>Goals</Text>
          <Text style={styles.text}>
            Aspiring to join Google as a Summer 2026 intern, bringing innovation 
            and technical excellence to impactful projects.
          </Text>
        </View>
        <SiteFooter />
      </View>
    </ScrollView>
  );
}

function Projects({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <NavHeader navigation={navigation} />
        {/* Hero Section with Batcave Background */}
        <View style={{
          position: 'relative',
          paddingVertical: 60,
          marginBottom: 26,
          borderRadius: 20,
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: 'rgba(240,196,60,0.35)',
          backgroundColor: 'rgba(13,17,22,0.70)',
          shadowColor: '#f0c43c',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.25,
          shadowRadius: 24,
          elevation: 8,
        }}>
          {/* Batcave Background Image */}
          <Image
            source={require('./assets/batcave.jpg')}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              opacity: 0.3,
            }}
            resizeMode="cover"
          />
          
          {/* Dark Overlay for Text Readability */}
          <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
          }} />
          
          {/* Content with Relative Positioning */}
          <View style={{ position: 'relative', zIndex: 1, marginLeft: 40 }}>
            <Text style={styles.kicker}>Selected Work</Text>
            <Text style={styles.h1}>Projects</Text>
            <Text style={styles.lead}>
              Some of the projects I've worked on. For more of my projects, check my GitHub in the contact page or on the footer.
            </Text>
          </View>
        </View>

                {/* Projects Grid */}
        <View style={styles.row}>
              {/* Athlete-Sponsor App */}
              <View style={{
                flex: 1,
                minWidth: 400,
                minHeight: 350,
                position: 'relative',
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: 'rgba(240,196,60,0.35)',
                borderRadius: 16,
                backgroundColor: 'rgba(13,17,22,0.80)',
                padding: 20,
                shadowColor: '#f0c43c',
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.25,
                shadowRadius: 24,
                elevation: 8,
              }}>
                {/* Top Glow Bar */}
                <View style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  backgroundColor: 'rgba(255,213,74,0.6)',
                }} />
                
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>Mobile • Sports Tech</Text>
                </View>
                <Text style={styles.h3}>Athlete-Sponsor Matching App</Text>
                <Text style={[styles.lead, { fontSize: 16, lineHeight: 24 }]}>
                  A comprehensive mobile application that connects athletes with potential sponsors through a tinder-like swiping feature and seamless communication features. Built with React Native and Firebase, this app addresses the growing need for athletes to monetize their personal brand through sponsorships. Some pictures of the MVP can be seen on my LinkedIn post <a href="https://www.linkedin.com/feed/update/urn:li:activity:7334672480810242048/" style={{ color: '#ffd54a' }}>here</a>. Currently I am working on the algorithm for the matching system, improving the user interface, and adding a payment processing system so that contracts can be signed. My goal is to have it on the App Store and the Play Store, which is why I chose to use React Native.
                 
                  My reasoning behind making this was very simple. I had played high school football and understood the time commitment that goes into playing it, and could only imagine how much more time is needed to play in college. Now, when NIL became a thing recently, it strongly helped the top athletes, with some of them making multi million dollars and getting sponsorships from luxury companies such as Lamborghini. While that's great for them, the vast majority of college athletes don't make much money, and are spending the same amount of time training too. So, I thought it would make obtaining sponsorships significantly easier if there was a platform where athletes could connect with sponsors, tinder-style. My partner and I created this app with little
                  no experience in mobile development, but through the help of the CSEED Buildspace program, we were able to create a MVP that is functional and hook up Firebase so that users could create actual profiles and swipe between athletes and sponsors.
                </Text>
                <View style={styles.meta}>
                  <Text style={styles.metaText}>React Native</Text>
                  <Text style={styles.metaText}>•</Text>
                  <Text style={styles.metaText}>Expo</Text>
                  <Text style={styles.metaText}>•</Text>
                  <Text style={styles.metaText}>Firebase</Text>
                  <Text style={styles.metaText}>•</Text>
                  <Text style={styles.metaText}>TypeScript</Text>
                </View>
              </View>

              {/* Cyphers Encryption Project */}
              <View style={{
                flex: 1,
                minWidth: 400,
                minHeight: 350,
                position: 'relative',
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: 'rgba(240,196,60,0.35)',
                borderRadius: 16,
                backgroundColor: 'rgba(13,17,22,0.80)',
                padding: 20,
                shadowColor: '#f0c43c',
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.25,
                shadowRadius: 24,
                elevation: 8,
              }}>
                {/* Top Glow Bar */}
                <View style={{
                  position: 'absolute',
                  top: 0,
                  height: 2,
                  backgroundColor: 'rgba(255,213,74,0.6)',
                }} />
                
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>Security • Cryptography</Text>
                </View>
                <Text style={styles.h3}>Cyphers</Text>
                <Text style={[styles.lead, { fontSize: 16, lineHeight: 24 }]}>
                 For my Custom Encryption Algorithms project, I developed a suite of classical encryption methods in Java to explore the foundations of secure communication and data protection. I implemented Substitution Cipher, Caesar Shift, and Caesar Key Cipher, then designed a hybrid cipher that layered these ciphers together to strengthen resistance against brute-force and pattern-based attacks. The project emphasized object oriented design principles, making it easy to extend with additional cryptographic methods in the future. Through this work, I gained hands-on experience with core cryptography concepts, algorithm design, and the balance between simplicity and security. You can view the GitHub repo <a href="https://github.com/RazeenSamir/Ciphers" style={{ color: '#ffd54a' }}>here</a>.
                </Text>
                
                <View style={[styles.meta, { marginTop: 'auto', paddingTop: 20 }]}>
                  <Text style={styles.metaText}>Java</Text>
                  <Text style={styles.metaText}>•</Text>
                  <Text style={styles.metaText}>Cryptography</Text>
                  <Text style={styles.metaText}>•</Text>
                  <Text style={styles.metaText}>Security</Text>
                  <Text style={styles.metaText}>•</Text>
                  <Text style={styles.metaText}>Algorithms</Text>
                </View>
              </View>
            </View>
        <SiteFooter />
      </View>
    </ScrollView>
  );
}

function Experience({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <NavHeader navigation={navigation} />
        {/* Hero Section with Gotham Glow */}
        <View style={{
          position: 'relative',
          paddingVertical: 60,
          marginBottom: 26,
        }}>
          {/* Glow Effect with Bat Symbol */}
          <View style={{
            position: 'absolute',
            right: '5%',
            top: -60,
            width: 420,
            height: 420,
            borderRadius: 210,
            backgroundColor: 'rgba(255,213,74,0.18)',
            opacity: 0.8,
            transform: [{ scale: 0.4 }],
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {/* Bat Symbol */}
            <Text style={{
              color: '#000000',
              fontSize: 80,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
              🦇
            </Text>
          </View>
          
          <Text style={{
            letterSpacing: 0.3,
            textTransform: 'uppercase',
            fontWeight: '700',
            color: '#ffd54a',
            fontSize: 12,
            marginBottom: 8,
          }}>
            My
          </Text>
          <Text style={{
            marginVertical: 12,
            fontSize: 42,
            lineHeight: 46,
            fontWeight: 'bold',
            color: '#d6dde7',
            marginBottom: 16,
          }}>
            Experience
          </Text>
          <Text style={{
            marginTop: 10,
            color: '#93a1b5',
            maxWidth: 640,
            fontSize: 16,
            lineHeight: 24,
          }}>
            So you can get to know me better.
          </Text>
        </View>

        {/* Timeline Section with Gotham Style */}
        <View style={{
          position: 'relative',
          marginTop: 26,
          paddingLeft: 36,
        }}>
          {/* Timeline Line */}
          <View style={{
            position: 'absolute',
            left: 12,
            top: 0,
            bottom: 0,
            width: 2,
            backgroundColor: 'rgba(255,213,74,0.8)',
          }} />

          {/* Research Intern Card */}
          <View style={{
            position: 'relative',
            overflow: 'hidden',
            borderWidth: 1,
            borderColor: 'rgba(240,196,60,0.35)',
            borderRadius: 16,
            backgroundColor: 'rgba(13,17,22,0.70)',
            padding: 20,
            marginVertical: 18,
            shadowColor: '#f0c43c',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.25,
            shadowRadius: 24,
            elevation: 8,
          }}>
            {/* Top Glow Bar */}
            <View style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              backgroundColor: 'rgba(255,213,74,0.6)',
            }} />
            
            <View style={{ flexDirection: 'row', gap: 14, alignItems: 'flex-start' }}>
              {/* Icon */}
              <View style={{
                flex: 0,
                marginTop: 2,
                padding: 10,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: '#252f3b',
                backgroundColor: 'rgba(255,213,74,0.08)',
                justifyContent: 'center',
                alignItems: 'center',
                width: 42,
                height: 42,
              }}>
                <Text style={{ color: '#ffd54a', fontSize: 16 }}>🔬</Text>
              </View>
              
              <View style={{ flex: 1 }}>
                <Text style={{
                  fontSize: 20,
                  fontWeight: '800',
                  color: '#d6dde7',
                  marginBottom: 4,
                }}>
                  Research Intern — VR Kojima Lab
                </Text>
                <Text style={{
                  color: '#93a1b5',
                  fontSize: 15,
                  marginBottom: 6,
                }}>
                  University of Washington
                </Text>
                <Text style={{
                  color: '#93a1b5',
                  fontSize: 13,
                  marginBottom: 12,
                }}>
                  May 2025 – Present • Seattle, WA
                </Text>
                
                <View style={{ marginTop: 12 }}>
                  <Text style={styles.bulletItem}>• Assisting in the development of a VR-based experimental platform to study covert saccades as a compensatory mechanism for vestibular disorders.</Text>
                  <Text style={styles.bulletItem}>• Utilizing Vive Focus 3, CED1401, and National Instruments DAQ hardware, replacing the previous Arduino setup, to collect synchronized real-time eye and head movement data.</Text>
                  <Text style={styles.bulletItem}>• Building Unity integrations with National Instruments APIs and custom wrappers, while also writing scripts in C++ and C# to enable precise data acquisition and signal communication.</Text>
                  <Text style={styles.bulletItem}>• Troubleshooting device connectivity, signal flow, and calibration issues to ensure reliable experimental performance.</Text>
                </View>
                
                {/* Tech Badges */}
                <View style={{ marginTop: 16, flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
                  <View style={{
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderWidth: 1,
                    borderColor: '#3a4656',
                    borderRadius: 999,
                    backgroundColor: 'rgba(255,255,255,0.02)',
                  }}>
                    <Text style={{ color: '#d6dde7', fontSize: 12 }}>Unity</Text>
                  </View>
                  <View style={{
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderWidth: 1,
                    borderColor: '#3a4656',
                    borderRadius: 999,
                    backgroundColor: 'rgba(255,255,255,0.02)',
                  }}>
                    <Text style={{ color: '#d6dde7', fontSize: 12 }}>C#</Text>
                  </View>
                  <View style={{
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderWidth: 1,
                    borderColor: '#3a4656',
                    borderRadius: 999,
                    backgroundColor: 'rgba(255,255,255,0.02)',
                  }}>
                    <Text style={{ color: '#d6dde7', fontSize: 12 }}>C++</Text>
                  </View>
                  <View style={{
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderWidth: 1,
                    borderColor: '#3a4656',
                    borderRadius: 999,
                    backgroundColor: 'rgba(255,255,255,0.02)',
                  }}>
                    <Text style={{ color: '#d6dde7', fontSize: 12 }}>Vive Focus 3</Text>
                  </View>
                  <View style={{
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderWidth: 1,
                    borderColor: '#3a4656',
                    borderRadius: 999,
                    backgroundColor: 'rgba(255,255,255,0.02)',
                  }}>
                    <Text style={{ color: '#d6dde7', fontSize: 12 }}>NI-DAQmx</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* CSEED Buildspace Card */}
          <View style={{
            position: 'relative',
            overflow: 'hidden',
            borderWidth: 1,
            borderColor: 'rgba(240,196,60,0.35)',
            borderRadius: 16,
            backgroundColor: 'rgba(13,17,22,0.70)',
            padding: 20,
            marginVertical: 18,
            shadowColor: '#f0c43c',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.25,
            shadowRadius: 24,
            elevation: 8,
          }}>
            {/* Top Glow Bar */}
            <View style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              backgroundColor: 'rgba(255,213,74,0.6)',
            }} />
            
            <View style={{ flexDirection: 'row', gap: 14, alignItems: 'flex-start' }}>
              {/* Icon */}
              <View style={{
                flex: 0,
                marginTop: 2,
                padding: 10,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: '#252f3b',
                backgroundColor: 'rgba(255,213,74,0.08)',
                justifyContent: 'center',
                alignItems: 'center',
                width: 42,
                height: 42,
              }}>
                <Text style={{ color: '#ffd54a', fontSize: 16 }}>🚀</Text>
              </View>
              
              <View style={{ flex: 1 }}>
                <Text style={{
                  fontSize: 20,
                  fontWeight: '800',
                  color: '#d6dde7',
                  marginBottom: 4,
                }}>
                  Buildspace C•Seed Member — Athlete–Sponsor Match
                </Text>
                <Text style={{
                  color: '#93a1b5',
                  fontSize: 15,
                  marginBottom: 6,
                }}>
                  Buildspace Cohort 3 (UW)
                </Text>
                <Text style={{
                  color: '#93a1b5',
                  fontSize: 13,
                  marginBottom: 12,
                }}>
                  Apr 2025 – May 2025 • Remote / Seattle, WA
                </Text>
                
                <View style={{ marginTop: 12 }}>
                  <Text style={styles.bulletItem}>• Selected as a member of CSEED Buildspace Cohort 3, a University of Washington program where builders design and ship ambitious projects in six weeks, presenting them at Demo Day in front of UW CSE faculty and the public.</Text>
                  <Text style={styles.bulletItem}>• Conceived, designed, and built a sports-tech mobile app that connects athletes with potential sponsors, enabling discovery, matching, and collaboration opportunities.</Text>
                  <Text style={styles.bulletItem}>• Leveraged React Native and Firebase to create a scalable and user-friendly platform, while also utilizing the Expo framework for streamlined development and deployment.</Text>
                  <Text style={styles.bulletItem}>• Built a dynamic matching system that allows athletes to swipe through potential sponsors, while also implementing a messaging feature to facilitate communication between athletes and sponsors.</Text>
                  <Text style={styles.bulletItem}>• Developed a comprehensive user profile system that allows athletes to showcase their skills, experiences, and achievements, while also allowing sponsors to view and evaluate potential athletes.</Text>
                </View>
                
                {/* Tech Badges */}
                <View style={{ marginTop: 16, flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
                  <View style={{
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    paddingVertical: 6,
                    borderWidth: 1,
                    borderColor: '#3a4656',
                    borderRadius: 999,
                    backgroundColor: 'rgba(255,255,255,0.02)',
                  }}>
                    <Text style={{ color: '#d6dde7', fontSize: 12 }}>React Native</Text>
                  </View>
                  <View style={{
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderWidth: 1,
                    borderColor: '#3a4656',
                    borderRadius: 999,
                    backgroundColor: 'rgba(255,255,255,0.02)',
                  }}>
                    <Text style={{ color: '#d6dde7', fontSize: 12 }}>Expo</Text>
                  </View>
                  <View style={{
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderWidth: 1,
                    borderColor: '#3a4656',
                    borderRadius: 999,
                    backgroundColor: 'rgba(255,255,255,0.02)',
                  }}>
                    <Text style={{ color: '#d6dde7', fontSize: 12 }}>Firebase</Text>
                  </View>
                  <View style={{
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderWidth: 1,
                    borderColor: '#3a4656',
                    borderRadius: 999,
                    backgroundColor: 'rgba(255,255,255,0.02)',
                  }}>
                    <Text style={{ color: '#d6dde7', fontSize: 12 }}>TypeScript</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Additional Info Grid */}
        <View style={styles.section}>
          <View style={styles.row}>
            {/* Leadership & Community */}
            <View style={{
              flex: 1,
              minWidth: 250,
              position: 'relative',
              overflow: 'hidden',
              borderWidth: 1,
              borderColor: 'rgba(240,196,60,0.35)',
              borderRadius: 16,
              backgroundColor: 'rgba(13,17,22,0.70)',
              padding: 20,
              shadowColor: '#f0c43c',
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.25,
              shadowRadius: 24,
              elevation: 8,
            }}>
              {/* Top Glow Bar */}
              <View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                backgroundColor: 'rgba(255,213,74,0.6)',
              }} />
              <Text style={styles.h3}>Leadership & Community</Text>
              <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>• Muslim Student Association PR Officer - communicating with the community, organizing events, running social media with over 4k followers. </Text>
                <Text style={styles.bulletItem}>• CSEED Club - member and cohort 3 builder.</Text>
                <Text style={styles.bulletItem}>• ASUW — student senator, proposed bills such as reduce parking bill and co-sponsored bill to ensure all students take a financial literacy course.</Text>
              </View>
            </View>

            {/* Education */}
            <View style={{
              flex: 1,
              minWidth: 250,
              position: 'relative',
              overflow: 'hidden',
              borderWidth: 1,
              borderColor: 'rgba(240,196,60,0.35)',
              borderRadius: 16,
              backgroundColor: 'rgba(13,17,22,0.70)',
              padding: 20,
              shadowColor: '#f0c43c',
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.25,
              shadowRadius: 24,
              elevation: 8,
            }}>
              {/* Top Glow Bar */}
              <View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                backgroundColor: 'rgba(255,213,74,0.6)',
              }} />
              <Text style={styles.h3}>Education</Text>
              <Text style={styles.text}>
                <Text style={styles.textBold}>University of Washington</Text> — B.S. Computer Science ('27)
              </Text>
              <Text style={styles.metaText}>Relevant: Data Structures, Hardware Software Interface, System and Software Tools,
                Software Design and Implementation, Discrete Math, Foundations of Computing.</Text>
            </View>

            {/* Skills */}
            <View style={{
              flex: 1,
              minWidth: 250,
              position: 'relative',
              overflow: 'hidden',
              borderWidth: 1,
              borderColor: 'rgba(240,196,60,0.35)',
              borderRadius: 16,
              backgroundColor: 'rgba(13,17,22,0.70)',
              padding: 20,
              shadowColor: '#f0c43c',
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.25,
              shadowRadius: 24,
              elevation: 8,
            }}>
              {/* Top Glow Bar */}
              <View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                backgroundColor: 'rgba(255,213,74,0.6)',
              }} />
              <Text style={styles.h3}>Skills</Text>
              <Text style={styles.metaText}>
                <Text style={styles.textBold}>Languages:</Text> Java, C/C++, JS/TS, C#, HTML, CSS, Node.js
              </Text>
              <Text style={styles.metaText}>
                <Text style={styles.textBold}>Tools:</Text> Unity, React Native, Firebase, NI-DAQmx, Expo, PowerShell, Bash, Git, Vim, Linux, Terminal
              </Text>
              <Text style={styles.metaText}>
                <Text style={styles.textBold}>Other:</Text> Microsoft Office, Adobe Suite, Canva, Leadership, Communication, Photography/Videography
              </Text>
            </View>
          </View>
        </View>
        <SiteFooter />
      </View>
    </ScrollView>
  );
}

function Sports({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <NavHeader navigation={navigation} />
                {/* Hero Section with Glow Effect */}
        <View style={{
          position: 'relative',
          overflow: 'hidden',
          marginVertical: 20,
          borderRadius: 20,
          backgroundColor: 'rgba(13,17,22,0.70)',
          borderWidth: 1,
          borderColor: 'rgba(240,196,60,0.35)',
          padding: 30,
          shadowColor: '#f0c43c',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.25,
          shadowRadius: 24,
          elevation: 8,
        }}>
          {/* Top Glow Bar */}
          <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            backgroundColor: 'rgba(255,213,74,0.6)',
          }} />
          
          <Text style={styles.kicker}>Sports</Text>
          <Text style={styles.h1}>My favorite hobby: Sports</Text>
          <Text style={styles.lead}>
            I'm a big fan of sports, whether it's playing them or watching them. Usually, computer science and sports don't mesh super well, but I'd like to say that is not the case for me.
            My favorite sports are football and basketball, as I used to play football and still play basketball from time to time. I've also been getting into F1 lately.
          </Text>
        </View>

        {/* Sports Grid */}
        <View style={styles.row}>
          {/* Football */}
          <View style={{
            position: 'relative',
            overflow: 'hidden',
            flex: 1,
            minWidth: 250,
            borderWidth: 1,
            borderColor: 'rgba(240,196,60,0.35)',
            borderRadius: 16,
            backgroundColor: 'rgba(13,17,22,0.70)',
            padding: 20,
            marginVertical: 18,
            shadowColor: '#f0c43c',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.25,
            shadowRadius: 24,
            elevation: 8,
          }}>
            {/* Top Glow Bar */}
            <View style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              backgroundColor: 'rgba(255,213,74,0.6)',
            }} />
            
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Football</Text>
            </View>
            <Text style={styles.h3}>Football</Text>
            <Text style={[styles.lead, { fontSize: 15 }]}>
              I played football all throughout high school, so that's what made me like the sport. I also love playing fantasy football, which is basically when you draft real life players
              and assemble a team of them, and go against other similarly assembled teams in a league of friends. Watching the NFL is another thing I enjoy, and my favorite team is obviously
              the Seattle Seahawks. Going to the University of Washington, our football team is pretty good, so I like going to their games as well. Michael Penix Jr is my favorite NFL player, as he is a UW alum.
            </Text>
            <View style={styles.meta}>
              <Text style={styles.metaText}>Seahawks</Text>
              <Text style={styles.metaText}>•</Text>
              <Text style={styles.metaText}>Michael Penix Jr</Text>
            </View>
          </View>

          {/* Basketball */}
          <View style={{
            position: 'relative',
            overflow: 'hidden',
            flex: 1,
            minWidth: 250,
            borderWidth: 1,
            borderColor: 'rgba(240,196,60,0.35)',
            borderRadius: 16,
            backgroundColor: 'rgba(13,17,22,0.70)',
            padding: 20,
            marginVertical: 18,
            shadowColor: '#f0c43c',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.25,
            shadowRadius: 24,
            elevation: 8,
          }}>
            {/* Top Glow Bar */}
            <View style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              backgroundColor: 'rgba(255,213,74,0.6)',
            }} />
            
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Basketball</Text>
            </View>
            <Text style={styles.h3}>Basketball</Text>
            <Text style={[styles.lead, { fontSize: 15 }]}>
              Basketball is the sport I have been playing the longest, since I was 9 years old. Unlike football, I am still able to play it now, and I try to play whenever I have the time. 
              Unfortunately Seattle's basketball team relocated to Oklahoma City a long time ago, but my favorite team is the Los Angeles Lakers and Kobe is my favorite player.
            </Text>
            <View style={styles.meta}>
              <Text style={styles.metaText}>Lakers</Text>
              <Text style={styles.metaText}>•</Text>
              <Text style={styles.metaText}>Kobe Bryant</Text>
            </View>
          </View>

          {/* Formula 1 */}
          <View style={{
            position: 'relative',
            overflow: 'hidden',
            flex: 1,
            minWidth: 250,
            borderWidth: 1,
            borderColor: 'rgba(240,196,60,0.35)',
            borderRadius: 16,
            backgroundColor: 'rgba(13,17,22,0.70)',
            padding: 20,
            marginVertical: 18,
            shadowColor: '#f0c43c',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.25,
            shadowRadius: 24,
            elevation: 8,
          }}>
            {/* Top Glow Bar */}
            <View style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              backgroundColor: 'rgba(255,213,74,0.6)',
            }} />
            
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Formula 1</Text>
            </View>
            <Text style={styles.h3}>Formula 1</Text>
            <Text style={[styles.lead, { fontSize: 15 }]}>
              I've only gotten into this sport recently. In fact, I really only became aware of this shortly before the F1 movie featuring Brad Pitt was released. My favorite F1 team is Ferrari,
              and my favorite driver is Lewis Hamilton. I would love to go to an F1 race, but I can't even watch most of them because they're at 6 AM usually.
            </Text>
            <View style={styles.meta}>
              <Text style={styles.metaText}>Racing</Text>
              <Text style={styles.metaText}>•</Text>
              <Text style={styles.metaText}>Ferrari</Text>
            </View>
          </View>
        </View>
        <SiteFooter />
      </View>
    </ScrollView>
  );
}



function Contact({ navigation }) {
  const handleEmail = () => Linking.openURL("mailto:rsamir9@hotmail.com");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <NavHeader navigation={navigation} />
        
        {/* Gotham Skyline Hero Section */}
        <View style={{
          position: 'relative',
          overflow: 'hidden',
          marginVertical: 20,
          borderRadius: 20,
          backgroundColor: 'rgba(13,17,22,0.70)',
          borderWidth: 1,
          borderColor: 'rgba(240,196,60,0.35)',
          height: 400,
          shadowColor: '#f0c43c',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.25,
          shadowRadius: 24,
          elevation: 8,
        }}>
          {/* Top Glow Bar */}
          <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            backgroundColor: 'rgba(255,213,74,0.6)',
            zIndex: 2,
          }} />
          {/* Gotham Cityscape Background */}
          <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#0d1116',
          }}>
            {/* Gotham Cityscape with Bat-Signal Background */}
            <Image
              source={require('./assets/Batman skyline.png')}
              style={{
                width: '115%',
                height: '280%',
                position: 'absolute',
                top: '0%',
                left: '-10%',
                resizeMode: 'cover',
              }}
            />
            
            {/* Dark Overlay for Text Readability */}
            <View style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(9,12,16,0.5)',
            }} />
            
            {/* Subtle Gold Glow Overlay */}
            <View style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(240,196,60,0.1) 0%, transparent 50%, rgba(240,196,60,0.05) 100%)',
            }} />
          </View>
          
          {/* Hero Content */}
          <View style={{
            position: 'relative',
            zIndex: 1,
            padding: 32,
            maxWidth: 600,
            height: '100%',
            justifyContent: 'center',
          }}>
            <Text style={{
              letterSpacing: 0.12,
              color: '#f0c43c',
              fontWeight: '800',
              fontSize: 12,
              marginBottom: 8,
            }}>
              SAY HELLO
            </Text>
            <Text style={{
              marginVertical: 6,
              fontSize: 44,
              lineHeight: 48,
              fontWeight: 'bold',
              color: '#e7edf7',
              marginBottom: 16,
            }}>
              Contact
            </Text>
            <Text style={{
              marginBottom: 20,
              color: '#a9b3c3',
              fontSize: 16,
              lineHeight: 24,
            }}>
              Email is best. I usually reply within a couple days.
            </Text>
            
            {/* Gold Email Button */}
            <TouchableOpacity 
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
                paddingVertical: 12,
                paddingHorizontal: 16,
                borderRadius: 12,
                fontWeight: '700',
                color: '#111',
                backgroundColor: 'linear-gradient(180deg, #ffd75a, #f0c43c)',
                shadowColor: '#f0c43c',
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.25,
                shadowRadius: 24,
                elevation: 8,
                borderWidth: 1,
                borderColor: '#cda434',
                alignSelf: 'flex-start',
              }}
              onPress={handleEmail}
            >
              <Text style={{
                color: '#111',
                fontWeight: '700',
                fontSize: 14,
              }}>
                Email Me
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Contact Grid */}
        <View style={styles.row}>
          {/* Social Links Card */}
          <View style={{
            position: 'relative',
            overflow: 'hidden',
            flex: 1,
            minWidth: 300,
            backgroundColor: 'rgba(13,17,22,0.70)',
            borderWidth: 1,
            borderColor: 'rgba(240,196,60,0.35)',
            borderRadius: 18,
            padding: 18,
            minHeight: 180,
            shadowColor: '#f0c43c',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.25,
            shadowRadius: 24,
            elevation: 8,
          }}>
            {/* Top Glow Bar */}
            <View style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              backgroundColor: 'rgba(255,213,74,0.6)',
            }} />
            <Text style={{
              marginBottom: 6,
              fontSize: 18,
              fontWeight: 'bold',
              color: '#e7edf7',
            }}>
              Connect
            </Text>
            <Text style={{
              color: '#a9b3c3',
              fontSize: 14,
              marginBottom: 14,
              lineHeight: 20,
            }}>
              Find me on these platforms for collaboration and updates.
            </Text>
            
            {/* GitHub Button */}
            <TouchableOpacity 
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 12,
                paddingHorizontal: 14,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'rgba(240,196,60,0.35)',
                backgroundColor: 'linear-gradient(180deg, #11161d, #0e131a)',
                marginTop: 10,
                shadowColor: '#f0c43c',
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.25,
                shadowRadius: 24,
                elevation: 8,
              }}
              onPress={() => Linking.openURL("https://github.com/RazeenSamir")}
            >
              <Text style={{
                color: '#e7edf7',
                fontWeight: '700',
                fontSize: 14,
              }}>
                GitHub →
              </Text>
            </TouchableOpacity>
            
            {/* LinkedIn Button */}
            <TouchableOpacity 
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 12,
                paddingHorizontal: 14,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'rgba(240,196,60,0.35)',
                backgroundColor: 'linear-gradient(180deg, #11161d, #0e131a)',
                marginTop: 8,
                shadowColor: '#f0c43c',
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.25,
                shadowRadius: 24,
                elevation: 8,
              }}
              onPress={() => Linking.openURL("https://www.linkedin.com/in/razeen-samir-367748232/")}
            >
              <Text style={{
                color: '#e7edf7',
                fontWeight: '700',
                fontSize: 14,
              }}>
                LinkedIn →
              </Text>
            </TouchableOpacity>
          </View>

          {/* Resume Card */}
          <View style={{
            position: 'relative',
            overflow: 'hidden',
            flex: 1,
            minWidth: 300,
            backgroundColor: 'rgba(13,17,22,0.70)',
            borderWidth: 1,
            borderColor: 'rgba(240,196,60,0.35)',
            borderRadius: 18,
            padding: 18,
            minHeight: 180,
            shadowColor: '#f0c43c',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.25,
            shadowRadius: 24,
            elevation: 8,
          }}>
            {/* Top Glow Bar */}
            <View style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              backgroundColor: 'rgba(255,213,74,0.6)',
            }} />
            <Text style={{
              marginBottom: 6,
              fontSize: 18,
              fontWeight: 'bold',
              color: '#e7edf7',
            }}>
              Résumé
            </Text>
            <Text style={{
              color: '#a9b3c3',
              fontSize: 14,
              marginBottom: 14,
              lineHeight: 20,
            }}>
              One-click access to my latest résumé and professional background.
            </Text>
            
            {/* Resume Button */}
            <TouchableOpacity 
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 12,
                paddingHorizontal: 14,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'rgba(240,196,60,0.35)',
                backgroundColor: 'linear-gradient(180deg, #11161d, #0e131a)',
                marginTop: 10,
                shadowColor: '#f0c43c',
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.25,
                shadowRadius: 24,
                elevation: 8,
              }}
              onPress={() => {
                if (Platform.OS === 'web') {
                  // For web, try multiple approaches
                  try {
                    // First try direct path to the computer science resume
                    const link = document.createElement('a');
                    link.href = './Razeen Samir Comp Sci Resume UPDATED.pdf';
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                    link.download = 'Razeen_Samir_Computer_Science_Resume.pdf';
                    link.click();
                  } catch (error) {
                    // Fallback to window.open
                    window.open('./Razeen Samir Comp Sci Resume UPDATED.pdf', '_blank');
                  }
                } else {
                  // For mobile, use Linking
                  Linking.openURL('file:///assets/Razeen Samir Comp Sci Resume UPDATED.pdf');
                }
              }}
            >
              <Text style={{
                color: '#e7edf7',
                fontWeight: '700',
                fontSize: 14,
              }}>
                Open PDF →
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <SiteFooter />
      </View>
    </ScrollView>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: colors.panel,
              },
              headerTintColor: colors.text,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              cardStyle: {
                backgroundColor: colors.bg,
              },
            }}
          >
            <Stack.Screen 
              name="Home" 
              component={Home} 
              options={{ title: "Razeen Samir" }}
            />
            <Stack.Screen 
              name="About" 
              component={About} 
              options={{ title: "About" }}
            />
            <Stack.Screen 
              name="Projects" 
              component={Projects} 
              options={{ title: "Projects" }}
            />
            <Stack.Screen 
              name="Experience" 
              component={Experience} 
              options={{ title: "Experience" }}
            />
            <Stack.Screen 
              name="Sports" 
              component={Sports} 
              options={{ title: "Sports" }}
            />

            <Stack.Screen 
              name="Contact" 
              component={Contact} 
              options={{ title: "Contact" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </ErrorBoundary>
  );
}
