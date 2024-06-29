def get_player_choice(player_name):
    while True:
        user_choice = input(f"{player_name}, enter your choice (rock, paper, scissors): ").strip().lower()
        if user_choice in ['rock', 'paper', 'scissors']:
            return user_choice
        else:
            print("Invalid choice! Please enter 'rock', 'paper', or 'scissors'.")

def determine_winner(player1_choice, player2_choice):
    if player1_choice == player2_choice:
        return "It's a tie!"
    elif (player1_choice == 'rock' and player2_choice == 'scissors') or \
         (player1_choice == 'paper' and player2_choice == 'rock') or \
         (player1_choice == 'scissors' and player2_choice == 'paper'):
        return "Player 1 wins!"
    else:
        return "Player 2 wins!"

def main():
    print("Welcome to Rock, Paper, Scissors!")

    while True:
        player1_choice = get_player_choice("Player 1")
        player2_choice = get_player_choice("Player 2")

        print(f"\nPlayer 1 chose: {player1_choice}")
        print(f"Player 2 chose: {player2_choice}")

        result = determine_winner(player1_choice, player2_choice)
        print(result)

        play_again = input("\nDo you want to play again? (yes/no): ").strip().lower()
        if play_again != 'yes':
            break

    print("\nThanks for playing!")

if __name__ == "__main__":
    main()
