import React from 'react';
import { StyleSheet, Button, Text, View, Dimensions, Image, Animated, PanResponder, Alert } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
// import Icon from 'react-native-vector-icons/Ionicons'
const Users = [
  { id: "1", uri: require('../assets2/1.jpg'), desc: "Artist: Caravaggio, Year: 1607, Saint Andrew’s efforts to introduce Christianity to Greece in the first century AD were met with hostility from local authorities. He was sentenced to die on the cross because he refused to acknowledge pagan gods. For two days, Andrew preached from his martyr’s station to an increasingly sympathetic crowd. Bowing to public demand, Andrew’s would-be executioners attempted to untie him, but their hands were mysteriously paralyzed. Andrew’s desire for martyrdom was thus fulfilled and he died enveloped in divine light. Caravaggio’s innovative interpretation involves the viewer more closely in the event by presenting the crucifixion as intimate and private, rather than as a gruesome public spectacle. Bold contrasts of light and dark suggest the presence of God. A masterpiece of Baroque painting, Caravaggio’s Crucifixion of Saint Andrew is the only altarpiece by the artist in America.", title: "The Crucifixion of Saint Andrew" },
  { id: "2", uri: require('../assets2/2.jpg'), desc: "Artist: Sakai Hoitsu, Year: Late 1700s, It is curious that although the existence of numerous two-fold byōbu (screen) in Japan and the West tells us of their popularity during the Edo period, few narrative paintings of the same era illustrate them. In depicting daily life in Kyoto or Edo, such genre scenes provide telling information about the customs, appearance, and behavior of those urban dwellers. In interior settings, particularly of the Yoshiwara (Edo's entertainment district), byōbu are shown being used within large rooms to create more intimate areas for guests and hosts. Yet among the two-fold screens that one can see illustrated, beginning in the latter seventeenth century, Rinpa compositions, like this example, are difficult to locate. Invariably Chinese-style ink paintings and/or calligraphic panels are portrayed, thereby identifying the prevailing taste of the entertainment house owners and their customers. Hōitsu, the son of a prominent daimyō family west of present-day Osaka in Himeji, was well educated and essentially unburdened by financial or political responsibilities. He studied literature and painting in his youth, embracing both monochromatic ink and highly colorful, realistic Chinese-style painting in his studies, as well as Japanese ukiyo-e (subjects of everyday life) formulations. Thus as a colorist he was well disposed toward his initial encounter with Kōrin's works in the Kyoto collections he visited around 1800. In fact, recording and studying Kōrin's powerful, highly sophisticated compositions became Hōitsu's life pursuit as he continued to paint, altering his style completely in an effort to produce Kōrin-style (Rinpa) paintings. By 1815, Hōitsu's art historical work enabled him to print a catalogue of Kōrin's oeuvre. This compilation allows modern researchers to attribute works more accurately to both the master and his followers, such as Hōitsu, who produced compositions based upon its illustrations. Hōitsu's compositions tend to conform to two patterns well associated with Kōrin's oeuvre: ink paintings often done with a modified tarashikomi (diffused ink) technique, and brilliantly colorful, daringly spare paintings set against gold or silver surfaces. Here the artist has settled on a brash, tightly focused, and gently abridged combination of familiar landscape elements whose presence is heightened by sparse setting and dramatic alignments. This latter feature offers viewers an insight into one of Hōitsu's contributions to later Rinpa painting traditions.", title: "Paulownias and Chrysanthemums" },
  { id: "3", uri: require('../assets2/3.jpg'), desc: "Artist: Kitagawa Utamaro, Year: 1793, The pose in which Utamaro presents this beauty is typical of Japanese painting and prints. The three-quarter face is rendered with the simple outline of the eyebrow and cheek, a single line for the nose, narrow eyes, and half-parted, petal-like lips. Not the likeness of a specific individual, the print instead portrays a particular mood or character. The pink mica background was created by covering the image of the woman with a stencil and then brushing mica mixed with pink color and an adhesive onto the background. The print comes from a series that represents women from different classes.", title: "Woman Drying Her Hands (from the series Ten Aspects of the Physiognomy of Women)" },
  { id: "4", uri: require('../assets2/4.jpg'), desc: "Artist: Claude Monet, Year: 1915-1926, Monet spent the last thirty years of his life painting the lily pond at his home in Giverny, a small town on the river Seine, just north of Paris. While his initial exploration of the water lily theme (1902-8) produced smaller works more descriptive of a garden setting, the later paintings focus on the water's shimmering surface, indicating the surrounding trees and lush bank only through reflections. Here reflection and reality merge in strokes of blue, violet, and green. Fronds of water plants sway underwater and passing clouds are reflected above. By 1915 Monet had conceived a plan, called his Grande Décoration, for arranging a series of monumental water lily paintings in an oval room, thus creating a continuous panorama that would surround and enclose the viewer in an environment of pure color. That installation is located in two oval rooms in the Musée de l'Orangerie in Paris. Cleveland's painting is the left panel of a three-part variation on this water lily theme. Its companions are now in the St. Louis Art Museum and the Nelson-Atkins Museum in Kansas City, Missouri.", title: "Water Lilies (Agapanthus)" },
  { id: "5", uri: require('../assets2/5.jpg'), desc: "Artist: Hans Burgkmair, Year: 1508, Presented in full profile, the Holy Roman Emperor Maximilian I (reigned 1486–1519) and his mount emulate a classical equestrian portrait statue. The Latin abbreviations inscribed at the top of the page describe him as “August Emperor Caesar Maximilian,” a title conceptually equating him with the leaders of the ancient Roman Empire. The two-headed eagle on the banner is the emblem of his dynastic family, the Hapsburgs. This exceptionally rare chiaroscuro woodcut— printed with black and white inks on paper prepared with tinted wash—represents one of the earliest experiments with this technique. Of the two surviving impressions printed on hand-colored paper, this is the only one that is blue.", title: "Equestrian Portrait of the Emperor Maximilian" },
  { id: "6", uri: require('../assets2/6.jpg'), desc: "Artist: Titian, Year: 1515, Because woodcuts emulate the artist's drawing style, prints after Titian's designs are very different from those of the German master Albrecht Dürer. Whereas Dürer's woodcuts exemplify control—crosshatching and parallel lines of shading are precise and uniform—Titian's lines in the Venetian manner are drawn with vigorous strokes that are bold, expressive, and irregular. An enormous, complex design, The Submersion of Pharaoh's Army in the Red Sea reflects the strength of Titian's drawing, which propels the narrative across several woodblocks to achieve a remarkable unity. The rolling clouds and turbulent sea culminate in the solid gravity of the magnificent cliff that overhangs the shore. Only a fragment exists from the first edition published in 1515, so the print is known solely in examples from the second edition of 1549. Probably inspired by Jacopo de Barbari's mural-sized map of Venice, Titian's monumental print was also conceived as a wall decoration and may have served as propaganda. Titian perhaps identified the Egyptians, drowned in the Red Sea as they pursued the fleeing Israelites, with the League of Cambrai, a military alliance formed by the major powers in southern Europe and a menace to Venice.", title: "The Submersion of Pharaoh's Army in the Red Sea" },
  { id: "7", uri: require('../assets2/7.jpg'), desc: "Artist: Japan, Momoyama period, Year: c. 1600, These screens show European merchants arriving in Japan. Almost certainly the persons represented are Portuguese, since they are accompanied by Roman Catholic priests. Early in the seventeenth century the Portuguese were forced out of Japan, chiefly because of internal difficulties caused by their missionaries. Later between 1641 and 1853 the Dutch were the only Europeans permitted to trade with Japan, but their presence was restricted to a port town in far western Japan, near present day Nagasaki.", title: "Arrival of the Southern Barbarians" },
  { id: "8", uri: require('../assets2/8.jpg'), desc: "Artist: Diego Velázquez, Year: 1632, Calabazas, a jester in the court of King Philip IV of Spain, had physical and mental disabilities, a state that the artist emphasizes, rather than tries to hide. While the Spanish court prized and doted upon people with disabilities such as Calabazas, Velázquez transformed their depiction in portraiture. This startling work uses the format of the formal, full-length court portrait to present a type of person who was generally perceived as marginal at this point in history and profoundly humanizes him.", title: "Portrait of the Jester Calabazas" },
  { id: "9", uri: require('../assets2/9.jpg'), desc: "Artist: Edgar Degas, Year: 1858, Degas traveled to Florence, Italy, in July 1858, where he made this sheet of studies. The featured imagery is fragmented and dissociated, suggesting the young artist's engagement with art of the past. The refined female head drawn at center in graphite was copied from a drawing then attributed to Leonardo da Vinco in the Uffizi Gallery's collection. Other sketches record Degas's responses to Florentine sculpture. At upper right, he sketched an informal portrait of his cousin Giulia Bellelli, probably from life.", title: "Sheet of Studies and Sketches" },
  { id: "10", uri: require('../assets2/10.jpg'), desc: "Artist: Gustave Courbet, Year: 1877, Courbet was still working on this large landscape, intended for the Paris Universal Exposition of 1879, when he died in December 1877. He painted it during his exile in Switzerland, where he had fled after being condemned for subversive activities in the Paris Commune of 1871. The view looks south over Lake Geneva toward the mountains called Les Dents du Midi. While some areas are heavily worked with a palette knife, the lower right remains unfinished.", title: "Panoramic View of the Alps, Les Dents du Midi" },
  { id: "11", uri: require('../assets2/11.jpg'), desc: "Artist: Jean Lecomte du Nouÿ, Year: 1874, This painting, inspired by Charles Montesquieu's Persian Letters (published in 1721), depicts a eunuch who wanted to marry a harem slave. He experienced a vision of her while smoking his opium pipe, but her little companion holding a knife dripping with blood reminds us that the eunuch's anatomy precludes the fulfillment of his dream. The outline of a hand next to the signature is a khamsa, a symbol used to ward off evil.", title: "A Eunuch's Dream" },
  { id: "12", uri: require('../assets2/12.jpg'), desc: "Artist: Du Jin 杜堇, Year: late 1400s, A figure with a staff walks at a leisurely pace in deep concentration. This is the image of the Northern Song poet Lin Bu, a hermit withdrawing from prestigious government services to retreat by the West Lake in Hangzhou. He was known for having a plum tree as his spouse and a crane as his child. The ideal described by Lin Bu in his poetry sparked the cultural imagination of the people of the Northern Song dynasty.", title: "The Poet Lin Bu Wandering in the Moonlight" },
  { id: "13", uri: require('../assets2/13.jpg'), desc: "Artist: William Blake, Year: 1799, The energy and awe with which the evangelist Saint Matthew responds to the angel presenting the divinely inspired text echoes William Blake’s attitude toward artistic inspiration. From childhood Blake experienced visions that are reflected in the otherworldliness of his work. While Blake was not embraced by the fine art establishment, a small group of patrons believed in his genius and commissioned works in which his unusual visions had free rein.", title: "St. Matthew" },
  { id: "14", uri: require('../assets2/14.jpg'), desc: "Artist: Claude Monet, Year: 1868–73, This painting depicts Monet's first wife, Camille, outside on a snowy day passing by the French doors of their home at Argenteuil. Her face is rendered in a radically bold Impressionist technique of mere daubs of paint quickly applied, just as the snow and trees are defined by broad, broken strokes of pure white and green.", title: "The Red Kerchief" },
  { id: "15", uri: require('../assets2/15.jpg'), desc: "Artist: Frans Hals, Year: 1634, An extremely wealthy linen and silk merchant in Haarlem, Tieleman Roosterman was 36 years old when Frans Hals painted his portrait. Unlike many Dutch painters of the period, Hals favored strong, visible brushstrokes that convey the vitality of his sitters. Roosterman strikes a confident pose, his costume sober but luxurious: his sleeves are decorated with braid and buttons, and ribbon rosettes encircle the waist of his doublet. The rich black of his suit is offset by the broad linen collar and lace-edged cuffs—fashionable details befitting a successful cloth merchant.", title: "Portrait of Tieleman Roosterman" },
  { id: "16", uri: require('../assets2/16.jpg'), desc: "Artist: Thomas Lawrence, Year: 1794, Catherine Gray, Lady Manners, rejected this portrait representing her as the goddess Juno, symbolized here by the peacock. To make up for the loss of sale, Lawrence exhibited the painting at the Royal Academy in 1794 "to be disposed of." It did not sell and remained in his collection until after his death. Despite the rejection, the painting displays all the hallmarks of Lawrence’s flamboyant style, dazzling brushwork, and innovative use of color that helped secure his role as successor to Joshua Reynolds", title: "Portrait of Catherine Grey, Lady Manners" },
  { id: "17", uri: require('../assets2/17.jpg'), desc: "Artist: Joseph Mallord William Turner, Year: 1835, On the night of October 16, 1834, fire consumed the Houses of Parliament in London. Londoners gathered along the banks of the river Thames to gaze in awe at the horrifying spectacle. Initially, a low tide made it difficult to pump water to fire-fighting equipment on land; likewise, it hampered steamers towing fire-fighting equipment up the river. Although the tides eventually shifted, the effort was futile, as the fire burned uncontrollably for hours. Turner records this as the steamers in the lower-right corner head toward the flames.Although Turner based the painting on an actual event, he used the disaster as the starting point to express man’s helplessness when confronted with the destructive powers of nature, here dissolved in brilliant swaths of color and variable atmospheric effects that border on abstraction.", title: "The Burning of the Houses of Lords and Commons, 16 October 1834" },
  { id: "18", uri: require('../assets2/18.jpg'), desc: "Artist: Edgar Degas, Year: 1890, Spontaneously executed because the media dries quickly, monotypes reflect the artist’s first impulse. Printing also presents an element of chance, as the pressure of transferring the design blurs it, creating softened edges. Degas utilized the technique to construct forms with shadow and light by building broad tonal areas without relying on line. Inspired by a trip through the Burgundy countryside in 1890, he produced a group of relatively large monotypes using colored inks for the first time. Manipulating oil color with a rag, he fabricated vague landscape designs from his imagination, letting colored masses represent earth, vegetation, and sky, creating an almost abstract visionary and evocative scene like in Estérel Village.", title: "Estérel Village" },
  { id: "19", uri: require('../assets2/19.jpg'), desc: "Artist: China, probably Shaanxi province, Xi'an, Tang dynasty, Year: early 700s, With their fierce expressions and exaggerated physical features, these two fantastic guardian creatures were intended to guard the entrance to a tomb, warding off evil as well as keeping the soul of the deceased from wandering. Known as "earth spirits" or qitou, they are markedly different in appearance: one has an animal face and a pair of antlers growing above its eyebrows; the other sports a human face with huge protruding ears and a short horn surrounded by fiery, twisting hair. Their many elongated spikes heighten the fearful intensity.", title: "Tomb Guardian with Animal Head" },
  { id: "20", uri: require('../assets2/20.jpg'), desc: "Artist: South India, Tamil Nadu, Chola period, Year: 1000s, One of the most celebrated sculptural forms in the history of Indian art, this elegant and dynamic figure embodies some of Hinduism’s most fundamental tenets. According to Hindu thought, time is cyclical; the world is created, maintained, preserved for a time, then destroyed, only to be created again an infinite number of times. For those Hindus who view Shiva to be the all-powerful creator divinity, he is responsible for both creation and destruction. The ring of fire and the tongue of flame he holds in his left hand refer to destruction, and the drum in his raised right hand refers to the relentless beat of time as it moves inevitably forward. His lower right hand, held up with the palm facing out, signals to his devotees not to be afraid of the impending destruction; they can be liberated from the cycles of birth and death through devotion to him, which he indicates by pointing to his upraised foot. With every step in his dance, he lands on a dwarfish figure personifying ignorance.", title: "Nataraja, Shiva as the Lord of Dance" },
  { id: "21", uri: require('../assets2/21.jpg'), desc: "Artist: Tilman Riemenschneider, Year: 1495, Said to have come from the Benedictine abbey church of Saint Peter in Erfurt, Germany, this statue depicts the church father Saint Jerome as he removes a thorn from the paw of a lion, a legendary account of the saint’s kindness. Following the common iconography of the scene, Jerome is dressed in the traditional robes of a Roman cardinal, with the cowl draped over his tonsured head and the broad-brimmed hat on his right leg. Traces of polychromy and gilding suggest that it was once brightly colored. Drill holes in the hat further indicate that cords and tassels of fabric, typical of a cardinal’s hat, would once have decorated the sculpture. Whether the statue was originally commissioned for an altar in a private chapel or for its artistic value remains unknown. Its alleged provenance from a church in Erfurt and Jerome’s popularity as a patron saint of humanists and scholars make either scenario likely. Riemenschneider’s Saint Jerome is not only one of the artist’s more important early sculptures, it is also his only work in alabaster in a collection in the US.", title: "Saint Jerome and the Lion (From the former Church of St. Peter in Erfurt)" },
  { id: "22", uri: require('../assets2/22.jpg'), desc: "Artist: Egypt, Thebes, Third Intermediate Period, late Dynasty 21 (1069-945 BC) to early Dynasty 22, Year: c. 976-889 BC, Egyptian coffins told stories and illustrated spells to help the deceased transition safely to the afterlife. Inside Nesykhonsu's coffin there are two jackals, one facing right and the other left, near the top. Here, the jackal represents the powerful deity Anubis, the god of the afterlife and embalming.", title: "Coffin of Nesykhonsu" },
  { id: "23", uri: require('../assets2/23.jpg'), desc: "Artist: Mexico, Olmec, 1200-300 BC, Year: c. 900-300 BC, This sensual head fragment may come from a seated or standing figure like those shown nearby, though much larger. The carving is exceptionally fine, from the slight under-eye puffiness to the delineation of the fleshy lips and the teeth. The profile face of supernatural being is incised just in front of each ear, perhaps indicating that the subject had special power.", title: "Head Fragment" },
  { id: "24", uri: require('../assets2/24.jpg'), desc: "Artist: Jacob van Hulsdonck, Year: c. 1615–20, Jacob van Hulsdonck depicted a colorful array of foods, and tablewares ranging from an earthenware trencher to delicate Chinese porcelain—an expensive luxury made possible by international trade. For seventeenth-century viewers, the quantity and variety of foods would have represented a utopian world without scarcity or hunger. Partially eaten food and an overturned glass suggest that diners have just departed, leaving insects to explore the remains.", title: "Still Life with Meat, Fish, Vegetables and Fruit" },
  { id: "25", uri: require('../assets2/25.jpg'), desc: "Artist: Rembrandt van Rijn, Year: 1653-c.1660, Like Christ Presented to the People, Rembrandt’s Christ Crucified Between the Two Thieves is also executed entirely in drypoint. Because of the delicacy of the technique, the copper plate was worn after the artist printed about 40 impressions of the first three states. In order to continue using the plate, Rembrandt reworked it, changing the image somewhat. In the fourth state, slashing strokes obscure the spectators visible in the earlier version, creating a tenebrous setting that focuses attention on Christ bathed in celestial light. Although drypoint is an inherently linear medium, Rembrandt used it to obtain tonal qualities associated with painting. The blackness becomes an active force that threatens to extinguish the light of Christ—a literal illustration of the Evangelist Luke’s description of the event that brought "a darkness over all the earth."", title: "Christ Crucified Between the Two Thieves: 'The Three Crosses'" },
  { id: "26", uri: require('../assets2/26.jpg'), desc: "Artist: Africa, Guinea Coast, Ivory Coast, Senufo people, Year: 1800s-1900s, This sculpture is used to symbolize the power, independence, and social roles of women in ceremonies and festivals of the Tyekpa society, a social subgroup of the Senufo people. Mother and child figures pay homage to and honor the memory of an elder tyekpa "mother." The mother’s nurturing act affirms women’s life-giving qualities.", title: "Mother-and-Child Figure" },
  { id: "27", uri: require('../assets2/27.jpg'), desc: "Artist: Japan, Kamakura period, Year: 1200s, This Buddhist monk is known as En no Gyōja, or “En the Ascetic” (legendarily 634–701), who is said to have founded Shugendō, a style of religious practice focused on performing challenging, rigorous tests of courage and devotion in mountainous settings.", title: "En no Gyoja" },
  { id: "28", uri: require('../assets2/28.jpg'), desc: "Artist: Tibet, 13th century, Year: c. 1260s, This work of stunning refinement is in the Nepalese style of the early central Tibetan painting tradition. It is distinguished by its jewel-like use of color, delicate shading, exquisite detailing, and most of all a lilting, confident quality of the line drawing that imparts an unparalleled elegance and clarity to the overall composition. Some scholars attribute this painting to Aniko, a celebrated Newari artist who traveled from Nepal to Tibet during the 13th century. The central figure is a popular female emanation from the Buddha Amoghasiddhi who presides over the south and is green in color as well. Her left hand is held up in the gesture indicating that she is a source for transmitting Buddhist teachings, and the stem of a blue lotus winds gracefully through her fingers. Her hair is arranged asymmetrically with a big bun over her left shoulder and long loose curls falling behind her right. Delicate curls of hair are arranged symmetrically over her forehead.", title: "Green Tara" },
  { id: "29", uri: require('../assets2/29.jpg'), desc: "Artist: Japan, Asuka period, Year: late 600s, Buddhism was introduced to Japan in the sixth century. For early Japanese devotees, Buddhism offered the promise of salvation through faith in the Buddha of the Future, who would appear at the end of the world. The concept of eternal salvation held particular resonance with the Japanese aristocracy, who became the staunchest supporters of this new faith. Small sculptures like this one, with its gentle grace and powerful presence, were popular devotional objects.", title: "Buddha of the Future (Miroku Bosatsu)" },
  { id: "30", uri: require('../assets2/30.jpg'), desc: "Artist: Henri de Toulouse-Lautrec, Year: 1893, The sitter, perhaps a certain Mr. Bolleau, must have been a friend of Lautrec, who dedicated this work to him at the upper left. He may have been the iron merchant-heavy set and wearing a bowler hat-who also appears in a line drawing by the artist. This drawing, the first by the artist to enter an American museum collection, is a prime example of Lautrec's ability to capture the atmosphere of Paris café life.", title: "Monsieur Boileau at the Café" },
]

export default class SwipeTest extends React.Component {

    constructor() {
        super()

        this.position = new Animated.ValueXY()
        this.state = {
          currentIndex: 0
        }

        this.rotate = this.position.x.interpolate({
          inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
          outputRange: ['-10deg', '0deg', '10deg'],
          extrapolate: 'clamp'
        })

        this.rotateAndTranslate = {
          transform: [{
            rotate: this.rotate
          },
          ...this.position.getTranslateTransform()
          ]
        }

        this.likeOpacity = this.position.x.interpolate({
          inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
          outputRange: [0, 0, 1],
          extrapolate: 'clamp'
        })
        this.dislikeOpacity = this.position.x.interpolate({
          inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
          outputRange: [1, 0, 0],
          extrapolate: 'clamp'
        })

        this.nextCardOpacity = this.position.x.interpolate({
          inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
          outputRange: [1, 0, 1],
          extrapolate: 'clamp'
        })
        this.nextCardScale = this.position.x.interpolate({
          inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
          outputRange: [1, 0.8, 1],
          extrapolate: 'clamp'
        })

      }
      componentWillMount() {
        this.PanResponder = PanResponder.create({

          onStartShouldSetPanResponder: (evt, gestureState) => true,
          onPanResponderMove: (evt, gestureState) => {

            this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
          },
          onPanResponderRelease: (evt, gestureState) => {

            if (gestureState.dx > 120) {
              Animated.spring(this.position, {
                toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
              }).start(() => {
                this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                  this.position.setValue({ x: 0, y: 0 })
                })
              })
            }
            else if (gestureState.dx < -120) {
              Animated.spring(this.position, {
                toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
              }).start(() => {
                this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                  this.position.setValue({ x: 0, y: 0 })
                })
              })
            }
            else {
              Animated.spring(this.position, {
                toValue: { x: 0, y: 0 },
                friction: 4
              }).start()
            }
          }
        })
      }

      renderUsers = () => {

        return Users.map((item, i) => {


          if (i < this.state.currentIndex) {
            return null
          }
          else if (i == this.state.currentIndex) {

            return (
              <Animated.View
                {...this.PanResponder.panHandlers}
                key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>
                <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                  <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>

                </Animated.View>

                <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                  <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>

                </Animated.View>

                <Text>Title: {item.title}</Text>

                <Image
                  style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
                  source={item.uri} />

                <Button title="INFO" onPress={() => Alert.alert(item.desc)}/>

              </Animated.View>
            )
          }
          else {
            return (
              <Animated.View

                key={item.id} style={[{
                  opacity: this.nextCardOpacity,
                  transform: [{ scale: this.nextCardScale }],
                  height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
                }]}>
                <Animated.View style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                  <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>

                </Animated.View>

                <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                  <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>

                </Animated.View>

                <Text>Title: {item.title}</Text>

                <Image
                  style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
                  source={item.uri} />

                <Button title="INFO" onPress={() => Alert.alert(item.desc)}/>

              </Animated.View>
            )
          }
        }).reverse()
      }

      render() {
        return (
          <View style={{ flex: 1 }}>
            <View style={{ height: 5 }}>

            </View>
            <View style={{ flex: 1 }}>
              {this.renderUsers()}
            </View>
            <View style={{ height: 60 }}>

            </View>


          </View>

        );
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
