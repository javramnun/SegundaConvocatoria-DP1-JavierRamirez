package org.springframework.samples.petclinic.player;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/v1/players")
@Tag(name = "Players", description = "The Players management API")
@SecurityRequirement(name = "bearerAuth")
public class PlayerController {

    private final PlayerService playerService;

    @Autowired
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping
    public List<Player> findAllPlayers() {
        return playerService.findAll();
    }

    @GetMapping(value = "{playerId}")
    public Player findPlayerById(@PathVariable("playerId") int playerId) {
        return playerService.findPlayerById(playerId);
    }

    @GetMapping(value = "{username}")
    public Player findPlayerByUsername(@PathVariable("username") String username) {
        return playerService.findPlayerByUsername(username);
    }

    @PostMapping
    public Player savePlayer(Player player) {
        return playerService.save(player);
    }

    @PutMapping(value = "{playerId}")
    public void updatePlayer(@PathVariable("playerId") int playerId, Player player){
        playerService.update(player, playerId);
    }

    @DeleteMapping(value = "{playerId}")
    public void deletePlayerById(@PathVariable("playerId") int playerId) {
        playerService.deleteById(playerId);
    }
}
