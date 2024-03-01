// Laboratoire/src/components/api_whisper.js
import OpenAI from "openai";
console.log(process.env.REACT_APP_OPENAI_API_KEY)
const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

const status = ['Waiting','in-progress','Terminated']

const isExpensive=true

export default async function whisperApi(audio_file) {
  console.log(`WhisperApi status: ${status[1]} \n`)
   try{
     const completion = await openai.audio.transcriptions.create({
     file: audio_file,
     model: "whisper-1",
     language: "fr"
   });
     console.log(`WhisperApi status : ${status[2]} \n ` )
     console.log(`\nTranscritption vocale : \n ${completion.text}\n`);
     return completion.text;
   } 
   catch (error) {
     console.error("Erreur lors de l'appel à l'API OpenAI Audio Transcription:", error);
     return "Erreur dans la transcription audio.";
     }
  
  const completion = `Donc, mes actualités, c'est quoi de neuf dans les traitements périopératoires des cancers du poumon. Je vous ai remis sur cette diapo des recommandations anciennes avant ces actualités. Les cancers à gauche, donc ressecables, ressequés R0 jusqu'à présent, c'était une chimiothérapie adjuvante dès que la tumeur faisait plus de 4 cm, donc elle était N1 et N2. Ça, c'était R0, puis R1, c'était chimiothérapie, puis à droite, c'est les non-opérés. Alors, qu'est-ce qui s'est passé depuis ? Eh bien, déjà, il y a les thérapies ciblées en adjuvante. La première, c'est les TKBGFR, le TAGRISO, qui a une AMM et un remboursement. Chez les patients ayant un cancer du poumon qui a été opéré, de stade 1 à 3, et après une chimiothérapie adjuvante, c'est 3 ans de TAGRISO. Ça repose sur l'étude ADORA qui comparait TAGRISO à un placebo pendant 3 ans. L'actualité, c'est les données de survie globale. Le premier objectif, c'était la survie sans récidive. On a eu les données de survie globale à l'ASCO, donc en juin 2023. Vous avez ici les courbes de survie globales. En bleu, c'est le bras TAGRISO. En orange, c'est le bras placebo, à un hasard ratio à 0,49. Aujourd'hui, chez tout patient ayant ce stade opéré R0 qui a eu sa chimiothérapie adjuvante, il faut discuter de ce traitement qui est prescrit quand même pour 3 ans. L'autre thérapie ciblée pour laquelle on aura peut-être une AMM dans le futur ou un accès précoce, c'est l'aléctinib pour les patients réarrangés ALC. On a eu à l'ESMO en 2023, donc en octobre, les résultats de la phase 3 ALENA. Des patients opérés, stade 1 à 3, R0. Cette fois-ci, c'est une randomisation chimio versus aléctinib pendant 2 ans. A l'ESMO, on a eu les résultats de la survie sans récidive. Une amplitude de bénéfice très importante pour la survie sans récidive, pour le bras aléctinib, un hasard ratio à 0,24. Les données de survie globale ne sont pas matures. Ensuite, on arrive dans le domaine du néoadjuvant, donc avant la chirurgie, avec la phase 3 CHECMED 816 qui comparaît niveaux, niveaux lumab, plus chimio versus chimio en néoadjuvant pour des patients, là encore, stade 1 à 3A. Et donc là, avec le projet d'être complètement reséqué, d'être opérable, il devait être EGFR et ALK négatif. Et dans l'étude, c'était stratifié sur le PDL1. Vous le savez, les deux premiers objectifs de cette étude sont positifs. C'est la réponse histologique complète. C'est le schéma de gauche. Vous voyez en vert la barre. Un quart des patients ont une réponse histologique complète. Plus aucune cellule tumorale sur la pièce opératoire versus 2% dans le bras chimio. Et les courbes, ce n'est pas les courbes de survie sans récidive, c'est les courbes de survie sans événements, parce qu'on s'intéresse aussi à ce qui se passe avant la survie, sous chimio, chimie luminaute, progression toxique. Et vous voyez qu'on est en faveur du vert, donc du bras au niveau chimio. Donc ça, c'était connu. On a eu une mise à jour à 3 ans des courbes de survie. Ce n'est pas encore significatif selon les seuils statistiques de l'étude, mais vous voyez qu'on a quand même des survies, des courbes qui se décrochent avec le niveau lumable, niveau chimio versus chimio. Donc probablement que cette survie globale sera significative. Et donc aujourd'hui, on a accès au niveau lumable associé à la chimio. C'est un accès précoce de type 2. Il y a eu une AMR. Il y a un avis favorable au remboursement. Et donc pour pouvoir prescrire niveau chimio en néoadjuvant, il faut que le patient ait une tumeur EGFR négative, ALK négative et PDL1 supérieur à 1%. Même si ce n'était pas des all commerce dans le design de cette étude, il y avait une amplitude de bénéfice chez les PDL1 positifs. Et donc c'est l'indication aujourd'hui. Donc tout ça pour vous dire que sur la biopsie, il faut faire un diagnostic préop des cancers. Il faut faire EGFR et ALK sur la biopsie. Il faut faire PDL1 sur la biopsie pour savoir si on est dans les clous pour avoir cet accès précoce, puis ensuite ce remboursement. L'autre actualité, c'est Keynote 671. Ça concerne aussi l'immunothérapie périopératoire. Et là, on n'est plus simplement dans le domaine du néoadjuvant. On est dans le périopératoire. Dans cette étude, c'est pain pour les humains, qui est associé à la chimiothérapie à base de platine. Et c'est du cisplatine, 4 cycles avant la chirurgie versus 4 cycles de chimiosol avant la chirurgie. Mais à la différence de l'étude précédente, on rajoute un an de pain pour les humains derrière versus placémo. C'est toujours les mêmes patients, des stades 1 à 3. EGFR et ALK négatif, pas dans celle-là, mais dans la plupart, et très bon PS. Stratification sur PDL1. Il y a 4 autres études de phase 3 avec le même design, avec le DURVAL-UMAB, EDGEAN, avec le NIVOL-UMAB, CHECKMED-77T, avec un autre anti-PDL1, NEOTORCH. Ces 3 autres études sont positives sur la survie sans événement et sur la réponse histologique. Celle avec l'athésolésumab n'est pas encore, on n'a pas encore les résultats, celle avec l'athésolésumab. Je vous présente celle-là et pas les 4 autres, parce que pour celle-là, et c'est la première, on a un bénéfice de survie globale significatif. Quand vous faites Chimio, Pimbro, 4 cycles, puis Pimbro en consolidation, on a un bénéfice de survie globale avec un hasard ratio à 0,73. Ce sont des résultats aussi de cette année. Le dossier pour une demande d'accès précoce est en cours, on devrait avoir des nouvelles en février. Le libellé de l'AMM européenne est en cours de discussion. Les stades localisés, il y a des actualités qui sont riches, avec la nécessité de repenser le parcours patient, la nécessité d'avoir un diagnostic pré-os, EGFR, ALK pré-op, PDL1 pré-op pour essayer de prescrire une immunothérapie avec un bénéfice de survie globale, on le sait maintenant. Pour les patients avec addiction, on s'oriente avec des stratégies de thérapie ciblée en adjuvant, qui vont se discuter au cas par cas, et pour lequel on a aussi des résultats de survie globale. Je vous remercie.`
  console.log(`WhisperApi status : ${status[2]} \n `)
  console.log(`\nTranscritption vocale : \n ${completion}\n`);
  return completion
}
