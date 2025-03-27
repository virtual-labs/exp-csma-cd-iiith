### Procedure

1. CSMA/CD Transmission Procedure
1 Carrier Sense (CS):

A device listens to the transmission medium (Ethernet cable).

If the medium is idle, the device starts transmitting.

If the medium is busy, the device waits until it becomes idle.

2 Transmission Begins:

The device sends its data frame onto the network.

The frame travels across the Ethernet cable.

3 Collision Detection (CD):

If two or more devices transmit at the same time, their signals interfere (voltage levels overlap).

Each device monitors the network voltage while transmitting.

If an unexpected voltage spike is detected, a collision has occurred.

4 Collision Handling:

Once a device detects a collision, it immediately stops transmission.

The device sends a jam signal (a short burst of data) to notify all other devices.

2. Backoff Algorithm (Binary Exponential Backoff) The backoff mechanism ensures that devices don’t transmit again immediately, reducing repeated collisions.

1 Initial Backoff Time Calculation:

Each colliding device waits for a random delay before retrying.


Slot Time in Ethernet (10 Mbps) = 512 bits = 51.2 µs

2 Increasing Wait Time with More Collisions:

If a second collision occurs, the range increases:

1st attempt → Random(0, 1) × 51.2 µs

2nd attempt → Random(0, 1, 2, 3) × 51.2 µs

3rd attempt → Random(0, 1, 2, 3, 4, 5, 6, 7) × 51.2 µs

This reduces congestion by spacing out retransmissions.

If the device reaches 16 collisions, it gives up and reports an error.

1. Minimum Packet Size for Collision Detection
Why Do We Need a Minimum Packet Size?

If a frame is too short, the sender might finish transmission before the collision is detected.

The Ethernet standard defines a minimum frame size so that signals travel across the entire network before transmission ends.

💡 Calculation of Minimum Frame Size:
1 Collision Window Calculation

The slot time in Ethernet (10 Mbps) is 512 bits (64 bytes).

This ensures that a device transmits for at least 51.2 µs, which is the round-trip propagation delay for a 2500m Ethernet cable.