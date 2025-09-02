// App.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Button, ScrollView, TouchableOpacity, Image, TextInput, Alert, Linking, Platform } from "react-native";
import styles, { colors } from "./styles";

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
          <TouchableOpacity onPress={() => handleNavigation("Home")} style={styles.button}><Text style={styles.buttonText}>Home</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation("Projects")} style={styles.button}><Text style={styles.buttonText}>Projects</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation("Experience")} style={styles.button}><Text style={styles.buttonText}>Experience</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation("Sports")} style={styles.button}><Text style={styles.buttonText}>Sports</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation("Other")} style={styles.button}><Text style={styles.buttonText}>Other</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation("Contact")} style={styles.button}><Text style={styles.buttonText}>Contact</Text></TouchableOpacity>
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
            <TouchableOpacity onPress={() => Linking.openURL("https://github.com/")}><Text style={styles.metaText}>GitHub</Text></TouchableOpacity>
            <Text style={styles.metaText}>•</Text>
            <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/")}><Text style={styles.metaText}>LinkedIn</Text></TouchableOpacity>
            <Text style={styles.metaText}>•</Text>
            <TouchableOpacity onPress={() => Linking.openURL("https://youtube.com/")}><Text style={styles.metaText}>YouTube</Text></TouchableOpacity>
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
        {/* Hero Section */}
        <View style={styles.hero}>
          <Text style={styles.kicker}>CS @ UW • Systems & XR</Text>
          <Text style={styles.h1}>
            I build practical systems: <Text style={styles.textAccent}>VR eye-tracking</Text>, mobile apps, and visual stories.
          </Text>
          <Text style={styles.lead}>
            Currently integrating a Vive Focus 3 pipeline with National Instruments, and shipping a sports-tech app with React Native. Open to Summer '26 SWE (systems/XR/product).
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
              style={[styles.button, styles.buttonGhost]}
              onPress={() => navigation.navigate("Projects")}
            >
              <Text style={styles.buttonText}>See Projects</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Featured Projects Grid */}
        <View style={styles.section}>
          <View style={styles.row}>
            {/* VR Eye-Tracking Project */}
            <View style={[styles.card, styles.cardPad, { flex: 1, minWidth: 250 }]}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Featured</Text>
              </View>
              <Text style={styles.h3}>VR Eye-Tracking + NI</Text>
              <Text style={[styles.lead, { fontSize: 15 }]}>
                Unity ↔ NI-DAQ pipeline enabling synchronized target/eye signals for a vestibular study.
              </Text>
              <View style={styles.meta}>
                <Text style={styles.metaText}>Unity</Text>
                <Text style={styles.metaText}>•</Text>
                <Text style={styles.metaText}>NI-DAQmx</Text>
                <Text style={styles.metaText}>•</Text>
                <Text style={styles.metaText}>Vive Focus 3</Text>
              </View>
              <View style={styles.marginTop}>
                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => navigation.navigate("Projects")}
                >
                  <Text style={styles.buttonText}>Read case study →</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Athlete-Sponsor App */}
            <View style={[styles.card, styles.cardPad, { flex: 1, minWidth: 250 }]}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Mobile</Text>
              </View>
              <Text style={styles.h3}>Athlete-Sponsor App</Text>
              <Text style={[styles.lead, { fontSize: 15 }]}>
                React Native MVP: profiles, matching, and messaging.
              </Text>
              <View style={styles.meta}>
                <Text style={styles.metaText}>Expo</Text>
                <Text style={styles.metaText}>•</Text>
                <Text style={styles.metaText}>Firestore</Text>
              </View>
              <View style={styles.marginTop}>
                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => navigation.navigate("Projects")}
                >
                  <Text style={styles.buttonText}>See details →</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* City of Kirkland */}
            <View style={[styles.card, styles.cardPad, { flex: 1, minWidth: 250 }]}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Media</Text>
              </View>
              <Text style={styles.h3}>City of Kirkland</Text>
              <Text style={[styles.lead, { fontSize: 15 }]}>
                Produced and edited videos; highlight reel and stats.
              </Text>
              <View style={styles.meta}>
                <Text style={styles.metaText}>Premiere Pro</Text>
                <Text style={styles.metaText}>•</Text>
                <Text style={styles.metaText}>Photoshop</Text>
              </View>
              <View style={styles.marginTop}>
                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => navigation.navigate("Projects")}
                >
                  <Text style={styles.buttonText}>Watch reel →</Text>
                </TouchableOpacity>
              </View>
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
        {/* Hero Section */}
        <View style={[styles.hero, { marginBottom: 22 }]}>
          <Text style={styles.kicker}>Selected Work</Text>
          <Text style={styles.h1}>Projects</Text>
          <Text style={styles.lead}>
            A curated set of systems, apps, and media. Outcomes first, stacks second.
          </Text>
        </View>

        {/* Projects Grid */}
        <View style={styles.row}>
          {/* VR Eye-Tracking Project */}
          <View style={[styles.card, styles.cardPad, { flex: 1, minWidth: 250 }]}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>VR • Systems</Text>
            </View>
            <Text style={styles.h3}>VR Eye-Tracking + NI</Text>
            <Text style={[styles.lead, { fontSize: 15 }]}>
              Unity ↔ NI-DAQ timing alignment within ±[X] ms at [Y] Hz.
            </Text>
            <View style={styles.meta}>
              <Text style={styles.metaText}>Unity</Text>
              <Text style={styles.metaText}>•</Text>
              <Text style={styles.metaText}>NI-DAQmx</Text>
              <Text style={styles.metaText}>•</Text>
              <Text style={styles.metaText}>Vive Focus 3</Text>
            </View>
            <View style={styles.marginTop}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Case study →</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Athlete-Sponsor App */}
          <View style={[styles.card, styles.cardPad, { flex: 1, minWidth: 250 }]}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Mobile</Text>
            </View>
            <Text style={styles.h3}>Athlete-Sponsor App</Text>
            <Text style={[styles.lead, { fontSize: 15 }]}>
              MVP with profiles, swipe matching, and messaging; onboarded [N] testers.
            </Text>
            <View style={styles.meta}>
              <Text style={styles.metaText}>React Native</Text>
              <Text style={styles.metaText}>•</Text>
              <Text style={styles.metaText}>Expo</Text>
              <Text style={styles.metaText}>•</Text>
              <Text style={styles.metaText}>Firestore</Text>
            </View>
            <View style={styles.marginTop}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Read more →</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* City of Kirkland Video */}
          <View style={[styles.card, styles.cardPad, { flex: 1, minWidth: 250 }]}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Media</Text>
            </View>
            <Text style={styles.h3}>City of Kirkland Video</Text>
            <Text style={[styles.lead, { fontSize: 15 }]}>
              [N] videos produced; best post [M] views; avg retention [K]%.
            </Text>
            <View style={styles.meta}>
              <Text style={styles.metaText}>Premiere Pro</Text>
              <Text style={styles.metaText}>•</Text>
              <Text style={styles.metaText}>Photoshop</Text>
            </View>
            <View style={styles.marginTop}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Watch reel →</Text>
              </TouchableOpacity>
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
        {/* Hero Section */}
        <View style={[styles.hero, { marginBottom: 22 }]}>
          <Text style={styles.kicker}>Sports & Tech</Text>
          <Text style={styles.h1}>Athlete-Sponsor ideas, training notes, and hot takes.</Text>
          <Text style={styles.lead}>
            Stuff I'm building and thinking about in sports performance and fan tech.
          </Text>
        </View>

        {/* Sports Grid */}
        <View style={styles.row}>
          {/* Athlete-Sponsor Matching */}
          <View style={[styles.card, styles.cardPad, { flex: 1, minWidth: 250 }]}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Product</Text>
            </View>
            <Text style={styles.h3}>Athlete-Sponsor Matching</Text>
            <Text style={[styles.lead, { fontSize: 15 }]}>
              Consumer app connecting athletes with sponsors; matching logic and messaging prototype.
            </Text>
            <View style={styles.meta}>
              <Text style={styles.metaText}>React Native</Text>
              <Text style={styles.metaText}>•</Text>
              <Text style={styles.metaText}>Firestore</Text>
            </View>
          </View>

          {/* Weekly Log */}
          <View style={[styles.card, styles.cardPad, { flex: 1, minWidth: 250 }]}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Training</Text>
            </View>
            <Text style={styles.h3}>Weekly Log</Text>
            <Text style={[styles.lead, { fontSize: 15 }]}>
              Basketball/conditioning highlights and progress markers.
            </Text>
            <View style={styles.meta}>
              <Text style={styles.metaText}>Updated monthly</Text>
            </View>
          </View>

          {/* Season Predictions */}
          <View style={[styles.card, styles.cardPad, { flex: 1, minWidth: 250 }]}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Takes</Text>
            </View>
            <Text style={styles.h3}>Season Predictions</Text>
            <Text style={[styles.lead, { fontSize: 15 }]}>
              A running list of predictions; receipts kept.
            </Text>
            <View style={styles.meta}>
              <Text style={styles.metaText}>Opinions</Text>
            </View>
          </View>
        </View>
        <SiteFooter />
      </View>
    </ScrollView>
  );
}

function Other({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <NavHeader navigation={navigation} />
        {/* Hero Section */}
        <View style={[styles.hero, { marginBottom: 22 }]}>
          <Text style={styles.kicker}>Side Quests</Text>
          <Text style={styles.h1}>Other cool stuff about me</Text>
          <Text style={styles.lead}>
            A grab-bag of things I enjoy and build outside core work.
          </Text>
        </View>

        {/* Other Grid */}
        <View style={styles.row}>
          {/* Photography */}
          <View style={[styles.card, { flex: 1, minWidth: 250 }]}>
            <Image
              source={{ uri: "https://picsum.photos/640/360?random=1" }}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardInnerPad}>
              <Text style={styles.h3}>Photography</Text>
              <Text style={[styles.lead, { fontSize: 15 }]}>Event and street shots; a few favorites.</Text>
            </View>
          </View>

          {/* Design */}
          <View style={[styles.card, { flex: 1, minWidth: 250 }]}>
            <Image
              source={{ uri: "https://picsum.photos/640/360?random=2" }}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardInnerPad}>
              <Text style={styles.h3}>Design</Text>
              <Text style={[styles.lead, { fontSize: 15 }]}>Posters and thumbnails—Premiere + Photoshop workflow.</Text>
            </View>
          </View>

          {/* Writing */}
          <View style={[styles.card, { flex: 1, minWidth: 250 }]}>
            <Image
              source={{ uri: "https://picsum.photos/640/360?random=3" }}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardInnerPad}>
              <Text style={styles.h3}>Writing</Text>
              <Text style={[styles.lead, { fontSize: 15 }]}>Short notes on systems, VR, and habits.</Text>
            </View>
          </View>

          {/* Volunteering */}
          <View style={[styles.card, { flex: 1, minWidth: 250 }]}>
            <Image
              source={{ uri: "https://picsum.photos/640/360?random=4" }}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardInnerPad}>
              <Text style={styles.h3}>Volunteering</Text>
              <Text style={[styles.lead, { fontSize: 15 }]}>Community events and mentorship programs.</Text>
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
          borderRadius: 18,
          backgroundColor: '#0d1116',
          borderWidth: 1,
          borderColor: '#2a3442',
          height: 400,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.45,
          shadowRadius: 28,
          elevation: 8,
        }}>
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
            flex: 1,
            minWidth: 300,
            backgroundColor: '#141a22',
            borderWidth: 1,
            borderColor: '#2a3442',
            borderRadius: 18,
            padding: 18,
            minHeight: 180,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.45,
            shadowRadius: 28,
            elevation: 8,
          }}>
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
            flex: 1,
            minWidth: 300,
            backgroundColor: '#141a22',
            borderWidth: 1,
            borderColor: '#2a3442',
            borderRadius: 18,
            padding: 18,
            minHeight: 180,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.45,
            shadowRadius: 28,
            elevation: 8,
          }}>
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
            name="Other" 
            component={Other} 
            options={{ title: "Other" }}
          />
          <Stack.Screen 
            name="Contact" 
            component={Contact} 
            options={{ title: "Contact" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
