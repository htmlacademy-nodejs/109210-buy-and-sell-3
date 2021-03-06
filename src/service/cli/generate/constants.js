'use strict';

const DEFAULT_COUNT = 1;
const MAX_ADVERTS_COUNT = 1000;

const OfferType = {
  OFFER: `offer`,
  SALE: `sale`
};

const SumRestrict = {
  MIN: 1000,
  MAX: 100000
};

const PictureIdRestrict = {
  MIN: 1,
  MAX: 16
};

module.exports = {
  SumRestrict,
  OfferType,
  DEFAULT_COUNT,
  MAX_ADVERTS_COUNT,
  PictureIdRestrict,
};
