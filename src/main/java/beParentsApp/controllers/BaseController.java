package beParentsApp.controllers;

//@Controller
//public abstract class BaseController {
//	@Autowired
//	protected UserService userService;
//
//	protected User getLoggedInUser() {
//		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//		if (authentication != null && authentication.isAuthenticated()) {
//			Object principal = authentication.getPrincipal();
//			if (principal instanceof UserDetails) {
//				UserDetails userDetails = (UserDetails) principal;
//				// Ottieni l'utente dal tuo servizio utente in base all'email o a un
//				// identificatore univoco
//				User loggedInUser = userService.findByEmail(userDetails.getUsername());
//				return loggedInUser;
//			}
//		}
//		// Restituisci null se l'utente non è autenticato o se non è stato trovato
//		return null;
//	}
//}
