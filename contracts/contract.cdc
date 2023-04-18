pub contract MyToken {

    // Public variables
    pub let name: String
    pub let symbol: String
    pub let decimals: UInt32
    pub var totalSupply: UInt64

    // Mappings to keep track of token balances and allowances
    pub var balances: {Address: UInt64}
    pub var allowances: {Address: {Address: UInt64}}

    // Events to emit when tokens are transferred or approved
    pub event Transfer(from: Address, to: Address, value: UInt64)
    pub event Approval(owner: Address, spender: Address, value: UInt64)

    // Initialize the contract with the initial token supply
    init() {
        self.name = "AirCoin"
        self.symbol = "AC"
        self.decimals = 18
        self.totalSupply = 500
        self.balances = {Address.zero(): totalSupply}
    }

    // Mint new tokens and add to the balance of the recipient
    pub fun mint(to: Address, amount: UInt64) {
        assert(to == 0x123...) // Add address of the minter
        assert(self.totalSupply + amount <= 500)
        self.balances[to] += amount
        self.totalSupply += amount
    }

    // Approve the spender to spend a certain amount of tokens on behalf of the owner
    pub fun approve(spender: Address, amount: UInt64) {
        self.allowances[AuthAccount.id][spender] = amount
        emit Approval(owner: AuthAccount.id, spender: spender, value: amount)
    }

    // Transfer tokens from the sender's balance to the recipient's balance
    pub fun transfer(to: Address, amount: UInt64) {
        let from = AuthAccount.id
        assert(self.balances[from] >= amount, message: "Not enough tokens")
        self.balances[from] -= amount
        self.balances[to] += amount
        emit Transfer(from: from, to: to, value: amount)
    }

    // Transfer tokens from one account to another on behalf of the sender, provided the sender has been approved
    pub fun transferFrom(from: Address, to: Address, amount: UInt64) {
        let spender = AuthAccount.id
        assert(self.balances[from] >= amount, message: "Not enough tokens")
        assert(self.allowances[from][spender] >= amount, message: "Not allowed to transfer")
        self.balances[from] -= amount
        self.balances[to] += amount
        self.allowances[from][spender] -= amount
        emit Transfer(from: from, to: to, value: amount)
    }
}