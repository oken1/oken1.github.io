$( document ).ready( () => {
	const grid = 32

	$( '.parts' ).each( ( index, element ) => {
		const rx = Math.floor( Math.random() * 24 )
		const ry = Math.floor( Math.random() * 16 )

		$( element ).css( { left: rx * grid + 'px', top: ry * grid + 'px' } )
		$( element ).attr( 'rotate', 0 )
		$( element ).attr( 'scale', 1 )
	} ).draggable(
		{
			grid: [grid, grid]
		}
	).on( 'wheel', ( event ) => {
		let r = parseInt( $( event.currentTarget ).attr( 'rotate' ), 10 )
		let s = parseInt( $( event.currentTarget ).attr( 'scale' ), 10 )

		if ( event.originalEvent.deltaY < 0 ) {
			r = ( r == 0 ) ? 270 : r - 90
		} else {
			r = ( r == 270 ) ? 0 : r + 90
		}

		$( event.currentTarget ).attr( 'rotate', r )
			.css( { transform: `scale(${s}, 1) rotate(${r}deg)` } )
	} ).on( 'contextmenu', ( event ) => {
		let r = parseInt( $( event.currentTarget ).attr( 'rotate' ), 10 )
		let s = parseInt( $( event.currentTarget ).attr( 'scale' ), 10 )
		s = ( s == 1 ) ? -1 : 1
	
		$( event.currentTarget ).attr( 'scale', s )
			.css( { transform: `scale(${s}, 1) rotate(${r}deg)` } )

		return false
	})
} )
