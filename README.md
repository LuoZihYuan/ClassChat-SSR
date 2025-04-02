# ClassChat-SSR
ClassChat is a real-time web-based chatroom designed to facilitate communication between students in a class.


## Usage

1. Install [pnpm](https://pnpm.io/installation)
2. Clone this repostiory to your local computer.
3. Open your preferred terminal and `cd` into the repository.
4. Build with `pnpm init;pnpm run build;`.
5. Start the server with `pnpm run start`

## Business Requirements
### Functional Requirements

- Users can access the chatroom via a web browser.
- Upon connection, The chatroom assigns each user a random nickname generated from predefined lists.
- Users can send text-based chat messages.
- The chatroom broadcasts each chat message to all connected clients in real time.
- Notifications are generated and broadcast when users join or leave the chat.

### Non-Functional Requirements (Rules)

- The chatroom ensures real-time communication with minimal latency using Socket.IO.
- The chat interface is responsive and optimized for various screen sizes.
- The chatroom supports a small to moderate number of concurrent connections in a single public chat room.=
- The server is built using Node.js, Express, and Socket.IO, and listens on port 3000.
- The application is deployable in a standard Node.js hosting environment.
- The codebase remains focused on the core chat functionality to ensure ease of maintenance.

## Q&A (Challenges)

1. Why is there no option for sending private messages between users in the chatroom?
    > The current MVP roadmap is focused on delivering a streamlined, public chat experience. Private messaging is planned for future releases once the core real-time functionality is stable.

2. Why don't we see any user authentication or profile management features in the chatroom?
    > A: The MVP prioritizes ease of access by eliminating complex authentication steps. Roadmap planning has deferred user profiles and authentication until after the essential messaging features have been successfully implemented.

3. Why is there no persistent chat history available for users after reloading the page?
    > A: Maintaining real-time interactions is the primary goal of the MVP. Persistent chat history is not included in the initial roadmap but is scheduled as an enhancement for future updates once the basic functionality is proven and user feedback is gathered.

## Classes & Attributes Declaration

1. User
    - Attributes: nickname: string, browser: WebBrowser
    - Methods: sendMessage(content: string): ChatMessage
    - Associations: belongs to Chatroom, uses WebBrowser

2. Chatroom
    - Attributes: connectedUsers: User[], messages: ChatMessage[], notifications: Notification[], nicknameGenerator: RandomNicknameGenerator
    - Methods: assignNickname(user: User): void, broadcastMessage(message: ChatMessage): void, generateNotification(user: User, eventType: "join" | "leave"): Notification
    - Associations: contains multiple Users, contains multiple ChatMessages, contains multiple Notifications, utilizes RandomNicknameGenerator

3. ChatMessage
    - Attributes: content: string, sender: User, timestamp: Date
    - Associations: belongs to User, managed by Chatroom

4. Notification
    - Attributes: message: string, type: "join" | "leave", timestamp: Date
    - Associations: managed by Chatroom, related to a User event

5. RandomNicknameGenerator
    - Attributes: adjectives: string[], animals: string[]
    - Methods: generate(): string
    - Associations: utilized by Chatroom

6. WebBrowser
    - Attributes: browserType: string, version: string
    - Associations: used by User

## Target Audiences
- Casual Users: Individuals looking for a fun, spontaneous, and engaging way to interact in real time.

- Community Groups: Small online communities or clubs needing a simple public chatroom for group discussions.

- Developers & Tech Enthusiasts: People interested in a lightweight, real-time chat implementation for learning or prototyping purposes.

- Event Organizers: Hosts and organizers who require an easily deployable chatroom for interactive sessions during events or meetups.

## User Personas & User Stories

1. Casual Chat Participant
    - Background: 

      A user who enjoys a quick and simple online interaction during free time without needing advanced technical skills.

    - Dimensions:
        - Digital Literacy / Technical Proficiency: Low
        - Social Engagement Orientation: Low

    - User Stories:
        1. As a casual chat participant, I want to join the chatroom quickly so that I can start chatting without any complications.
        2. As a casual chat participant, I want to receive a random nickname automatically so that I don't have to choose or create one.
        3. As a casual chat participant, I want to see clear notifications when users join or leave so that I can follow the conversation flow easily.

2. Community Organizer
    - Background: An individual responsible for managing and engaging community groups who needs clear and efficient communication tools.

    - Dimensions:
        - Digital Literacy / Technical Proficiency: Moderate
        - Social Engagement Orientation: High

    - User Stories:
        1. As a community organizer, I want to invite members to join the chatroom easily so that I can coordinate group discussions effectively.
        2. As a community organizer, I want real-time notifications of user join and leave events so that I can monitor and manage participation.
        3. As a community organizer, I want a straightforward interface that allows me to broadcast messages to all users so that I can share important updates during events.

3. Tech-Savvy Developer
    - Background: A developer or technical enthusiast interested in real-time applications who values efficient and extendable systems.

    - Dimensions:
        - Digital Literacy / Technical Proficiency: High
        - Social Engagement Orientation: Moderate

    - User Stories:

        1. As a tech-savvy developer, I want to review the chatroom's code and architecture so that I can learn and possibly contribute improvements.
        2. As a tech-savvy developer, I want a modular and clean design so that I can easily extend the functionality of the chat application.
        3. As a tech-savvy developer, I want detailed documentation of the event-handling processes so that I can troubleshoot and optimize real-time messaging.

4. Event Attendee
    - Background: A participant in online events who actively engages in live discussions and values dynamic and responsive interactions.

    - Dimensions:
        - Digital Literacy / Technical Proficiency: Moderate
        - Social Engagement Orientation: High

    - User Stories:
        1. As an event attendee, I want to join the chatroom seamlessly during live sessions so that I can participate in discussions without delays.
        2. As an event attendee, I want immediate real-time updates so that I can keep up with fast-paced conversations.
        3. As an event attendee, I want a visually engaging interface with dynamic notifications so that my participation feels lively and integrated with the event atmosphere.

## Creative Addition
### Nickname

The nickname function works by randomly selecting one adjective from a list of adjectives and one animal from a list of animals, then combining them to create a unique and playful nickname for each user. When a user connects to the chatroom, this function is triggered to assign them a fun identity without requiring any input from the user. This approach not only simplifies the user experience but also adds a creative and engaging touch to the chat environment, making every interaction feel personalized and lively.

## Disclaimer: Use of Large Language Models (LLMs)
This project includes the use of Large Language Models (LLMs), such as OpenAI's ChatGPT, to support the development process. LLMs were used for tasks including:

- Brainstorming and refining ideas
- Debugging and optimizing code
- Generating code snippets or documentation templates
- Explaining technical concepts

All AI-generated content was carefully reviewed, tested, and adapted to ensure correctness and relevance. The final implementation reflects my own understanding and effort, in accordance with the academic integrity guidelines of the course.

### LLM Usage Details

|  Model  | Version | Prompt |
| :-----: | :-----: | :----- |
| ChatGPT | 4-o3-mini | Create business requirements based on my attached code. Beware not to exceed the scope of the project. I want two categories, functional, and non-functional requirements |
| ChatGPT | 4-o3-mini | Give me three Q&A s, the questions should be about real world users not being find certain functionalities on the chatroom, and the answers should be answering due to roadmap planning. |
| ChatGPT | 4-o3-mini | Create business requirements based on my attached code. Beware not to exceed the scope of the project. I want two categories, functional, and non-functional requirements |
| ChatGPT | 4-o3-mini | Based on the functional requirements defined above, identify the verbs and nouns, and create a declaration of classes / attributes / association rules across each class. |
| ChatGPT | 4-o3-mini | Define the target audiences for the project. |
| ChatGPT | 4-o3-mini | Define two most important dimensions of our target audiences. Then, give me 4 user personas for the project, each containing the background, which dimension the user belongs to, and 3 user stories. |