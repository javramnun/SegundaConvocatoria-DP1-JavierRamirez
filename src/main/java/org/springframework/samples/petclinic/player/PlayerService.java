package org.springframework.samples.petclinic.player;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PlayerService {
    private PlayerRepository playerRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    @Transactional(readOnly = true)
    public List<Player> findAll() {
        return (List<Player>) playerRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Player findPlayerById(int playerId) {
        return playerRepository.findById(playerId).orElse(null);
    }

    @Transactional(readOnly = true)
    public Player findPlayerByUsername(String username) {
        return playerRepository.findPlayerByUsername(username);
    }

    @Transactional
    public Player save(Player player) {
        playerRepository.save(player);
        return player;
    }

    @Transactional
    public void update(Player player, int playerId) {
        Player p= findPlayerById(playerId);
        BeanUtils.copyProperties(player, p, "id");
        playerRepository.save(p);
    }

    @Transactional
    public void delete(Player player) {
        playerRepository.delete(player);
    }

    @Transactional
    public void deleteById(int playerId) {
        playerRepository.deleteById(playerId);
    }
}
