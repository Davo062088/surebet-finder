const MatchesAggregator = require('./matches_aggregator');
const SurebetCalculator = require('./surebet_calculator');

class SurebetFinder {
  constructor(apiKey, config) {
    this.config = config;
    this.aggregator = new MatchesAggregator(apiKey, config);
    this.calculator = new SurebetCalculator(null, config);

    this.surebets = [];
    this.bets = [];

    console.log(config);
  }
  async run() {
    await this.aggregator.run();

    this.bets = this.aggregator.getBets();
    this.surebets = this.calculator.extract(this.bets);
  }

  getSurebets() {
    return this.surebets;
  }
}

module.exports = SurebetFinder;