/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  const visitor = {
    name, 
    age, 
    ticketId
  };
  return visitor;
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  visitor.ticketId = null; 
  return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  // if (tickets[ticketId] === null ) return 'not sold'; 
  // else if (tickets[ticketId] === undefined) return 'unknown ticket id'; 
  // else return `sold to ${tickets[ticketId]}`; 
 
  //resolução da gabe
  if (!tickets.hasOwnProperty(ticketId)) { //hasOwnProperty verifica se é undefined - igual foi checado na linha 41
    return "unknown ticket id"
  } else return tickets[ticketId] ? 'sold to ' + tickets[ticketId] : 'not sold'; 

  
  // com operadores nullish ?? não faz sentido! 

}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? 'invalid ticket !!!'  //nullish operator
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  return visitor.gtc?.version; 
}
