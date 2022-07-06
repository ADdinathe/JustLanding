import collarImg from 'pages/OnboardingPage/img/collar.png';
import Dog from 'pages/OnboardingPage/img/dog.png';
import collaredDog from 'pages/OnboardingPage/img/dogChocker.png';
import glassedDog from 'pages/OnboardingPage/img/dogGlasses.png';
import jetpackedDog from 'pages/OnboardingPage/img/dogJetpack.png';
import podedDog from 'pages/OnboardingPage/img/dogPods.png';
import glassesImg from 'pages/OnboardingPage/img/glasses.png';
import jetpackImg from 'pages/OnboardingPage/img/jetpack.png';
import podsImg from 'pages/OnboardingPage/img/pods.png';

export enum DogSkinsEnum {
  simpleDog = 'simpleDog',
  glassesDog = 'glassesDog',
  podsDog = 'podsDog',
  collarDog = 'collarDog',
  jetpackDog = 'jetpackDog',
}

export enum DogGadgetsEnum {
  glasses = 'glassesDog',
  pods = 'podsDog',
  collar = 'collarDog',
  jetpack = 'jetpackDog',
}

export const dogSkins = {
  [DogSkinsEnum.simpleDog]: Dog,
  [DogSkinsEnum.glassesDog]: glassedDog,
  [DogSkinsEnum.podsDog]: podedDog,
  [DogSkinsEnum.collarDog]: collaredDog,
  [DogSkinsEnum.jetpackDog]: jetpackedDog,
};

export const dogGadgets = {
  [DogGadgetsEnum.jetpack]: {
    gadget: jetpackImg,
    label: 'Комбез-джет',
  },
  [DogGadgetsEnum.pods]: {
    gadget: podsImg,
    label: 'Спайподс',
  },
  [DogGadgetsEnum.collar]: {
    gadget: collarImg,
    label: 'Усилитель рыка',
  },
  [DogGadgetsEnum.glasses]: {
    gadget: glassesImg,
    label: 'Котовизор',
  },
};
