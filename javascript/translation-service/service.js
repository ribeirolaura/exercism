/// <reference path="./global.d.ts" />
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

export class TranslationService {
  /**
   * Creates a new service
   * @param {ExternalApi} api the original api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Attempts to retrieve the translation for the given text.
   *
   * - Returns whichever translation can be retrieved, regardless the quality
   * - Forwards any error from the translation api
   *
   * @param {string} text
   * @returns {Promise<string>}
   */
   
  // EQUIVALENTE A LINHA 40 utilizando async / await
  // async free(text) {
  
  //   // let resultado; 
  //   // resultado = await this.api.fetch(text); 
  //   // return resultado.translation;


  // }

  free (text) {
    return new Promise ((resolve, reject) => {
      this.api.fetch(text)
              .then (result => resolve(result.translation))
              .catch(error => reject(error)); 
    })
  }

  /**
   * Batch translates the given texts using the free service.
   *
   * - Resolves all the translations (in the same order), if they all succeed
   * - Rejects with the first error that is encountered
   * - Rejects with a BatchIsEmpty error if no texts are given
   *
   * @param {string[]} texts
   * @returns {Promise<string[]>}
   */
  async batch(texts) {
    if (texts == null || texts.length === 0) {
      throw new BatchIsEmpty ();
    }
    let traduzido = []; 
    for (const texto of texts) {
      const traducao = await this.api.fetch(texto);
      traduzido.push(traducao.translation); 
    }
    return traduzido;
  }

  /**
   * Requests the service for some text to be translated.
   *
   * Note: the request service is flaky, and it may take up to three times for
   *       it to accept the request.
   *
   * @param {string} text
   * @returns {Promise<void>}
   */
  request(text) {
      return new Promise ((resolve, reject) => {
        this.api.request(text, error => {
          if (error == null){
            resolve(undefined);
          } 
          else {
            this.requestPromise(text)
                .then(resultado => resolve(undefined))
                .catch (error => {
                  this.requestPromise(text)
                    .then(resultado => resolve(undefined))
                    .catch (error => reject(error));
                });
          }
        })
      }); 
    }
    
  requestPromise (text) {
      return new Promise ((resolve, reject) => {
        this.api.request(text, error => {
          if (error == null){
            resolve(undefined);
          } else reject (error); 
        });
      });
  }





  /**
   * Retrieves the translation for the given text
   *
   * - Rejects with an error if the quality can not be met
   * - Requests a translation if the translation is not available, then retries
   *
   * @param {string} text
   * @param {number} minimumQuality
   * @returns {Promise<string>}
   */
  premium(text, minimumQuality) {
    throw new Error('Implement the premium function');
  }
}

/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim()
    );

    this.text = text;
  }
}

/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim()
    );
  }
}
