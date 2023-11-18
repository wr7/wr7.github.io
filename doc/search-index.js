var searchIndex = JSON.parse('{\
"bitmap32":{"doc":"bitmap32 is a library that provides the <code>BitMap</code> type and …","t":"SIDCDSSLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLKLLLLLKLLLLLLLLLLALLLLLLLLKLLLLLKLLLLLLLLLLLDDDDLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL","n":["BITS","BitBlock","BitMap","BitSlice","LE","UPSTREAM_ONE","ZERO","as_mut","as_mut","as_mut","as_ref","as_ref","as_ref","bit_index_from_block_index","bit_index_from_block_index","bitand","bitand_assign","bitor","bitor_assign","borrow","borrow","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","cmp","default","deref","deref_mut","eq","equivalent","fmt","fmt","from","from","from","from_raw","from_raw_le","get_block_index","get_block_index","hash","hash","into","into","leading_ones","leading_ones","leading_ones","leading_ones","leading_ones","leading_ones","leading_zeros","leading_zeros","leading_zeros","leading_zeros","leading_zeros","leading_zeros","new","not","ones_mask","ones_mask","partial_cmp","slice","to_owned","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","wrapping_shift_downstream","wrapping_shift_downstream","wrapping_shift_downstream","wrapping_shift_downstream","wrapping_shift_downstream","wrapping_shift_downstream","wrapping_shift_upstream","wrapping_shift_upstream","wrapping_shift_upstream","wrapping_shift_upstream","wrapping_shift_upstream","wrapping_shift_upstream","wrapping_test_bit","wrapping_test_bit","wrapping_with_bit","wrapping_with_bit","wrapping_without_bit","wrapping_without_bit","BitSlice","Bits","Ones","Zeros","as_mut","as_ref","bit_or_assign","bit_or_assign_iter","bit_or_assign_raw","bits","blocks","blocks_mut","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clear","fill_ones_checked","fill_ones_unchecked","fill_zeros_checked","fill_zeros_unchecked","fmt","from","from","from","get_blocks","get_blocks_mut","hash","hash","hash","hash","into","into","into","into_iter","into_iter","into_iter","len_bits","len_blocks","next","next","next","ones","reset_checked","reset_unchecked","set_checked","set_unchecked","test","test_unchecked","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","type_id","zeros"],"q":[[0,"bitmap32"],[90,"bitmap32::slice"]],"d":["Represents the number of bits in a block. It is generally …","Represents a copyable container of bits (usually an …","A bitmap that is internally represented as <code>[B; BLOCKS]</code>.","","<code>BitBlock</code>s that use Little Endian order instead of Big …","As of now, this value is not <code>1</code> for unsigned integers …","","","","","","","","Returns the index of the first bit in the block at <code>idx</code>..","Returns the index of the first bit in the block at <code>idx</code>..","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","","Returns the argument unchanged.","Same as <code>raw.into()</code> but usable in const contexts;","Convenience function for creating little endian bitmaps. …","Returns the index of the block holding the bit at the …","Returns the index of the block holding the bit at the …","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Gets the leading ones in the indexing direction.","","","","","","Gets the leading zeros in the indexing direction.","","","","","","Creates a zero-initialized bitmap","","Returns a bit mask of ones at <code>position</code> (wrapped) with a …","Returns a bit mask of ones at <code>position</code> (wrapped) with a …","","","","","","","","","","","Shifts <code>self</code> <code>n</code> bits in the indexing direction.","","","","","","Shifts <code>self</code> <code>n</code> bits against the indexing direction.","","","","","","Returns true if the bit at <code>idx</code> is <code>1</code>.","Returns true if the bit at <code>idx</code> is <code>1</code>.","Returns <code>self</code> with the bit at <code>idx</code> set to <code>1</code>.","Returns <code>self</code> with the bit at <code>idx</code> set to <code>1</code>.","Returns <code>self</code> with the bit at <code>idx</code> set to <code>0</code>.","Returns <code>self</code> with the bit at <code>idx</code> set to <code>0</code>.","Represents a slice of bits. <code>B</code> is the internal …","Iterator created by <code>BitSlice::bits</code>","Iterator created by <code>BitSlice::ones</code>","Iterator created by <code>BitSlice::zeros</code>","","","Does a <code>BitOrAssign</code> between <code>rhs</code> and <code>self</code>. If <code>rhs</code> is bigger …","Does a <code>BitOrAssign</code> between <code>rhs</code> and <code>self</code>. If <code>rhs</code> is bigger …","Does a <code>BitOrAssign</code> between <code>rhs</code> and <code>self</code>. If <code>rhs</code> is bigger …","Iterates over the bits in <code>self</code>.","Iterates over the blocks in <code>Self</code>","Mutable iterates over the blocks in <code>Self</code>","","","","","","","","","Zeros all of the bits in <code>self</code>.","","Fills a region starting at bit index <code>start</code> with <code>1</code>s. TODO: …","","Fills a region starting at bit index <code>start</code> with <code>0</code>s. TODO: …","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","Returns the length of <code>self</code> in bits.","Returns the length of <code>self</code> in blocks.","","","","Iterates over the indices of the <code>1</code>s in <code>self</code>. This is …","Sets the bit at <code>idx</code> to <code>0</code>. If <code>idx</code> is out of range, <code>false</code> is …","Sets the bit at <code>idx</code> to <code>0</code>","Sets the bit at <code>idx</code> to <code>1</code>. If <code>idx</code> is out of range, <code>false</code> is …","Sets the bit at <code>idx</code> to <code>1</code>.","Returns true if the bit at <code>idx</code> is a <code>1</code>. If <code>idx</code> is out of …","Returns <code>true</code> if the bit at <code>idx</code> is <code>1</code>.","","","","","","","","","","","Iterates over the indices of the <code>0</code>s in <code>self</code>. This is …"],"i":[1,0,0,0,0,1,1,2,2,2,2,2,2,1,1,7,7,7,7,2,7,2,7,2,7,2,7,7,2,2,2,7,7,2,7,2,2,7,2,2,1,1,2,7,2,7,1,7,7,7,7,7,1,7,7,7,7,7,2,7,1,1,7,0,2,7,2,7,2,7,2,7,1,7,7,7,7,7,1,7,7,7,7,7,1,1,1,1,1,1,0,0,0,0,5,5,5,5,5,5,5,5,29,33,34,5,29,33,34,5,5,5,5,5,5,5,29,33,34,5,5,29,33,34,5,29,33,34,29,33,34,5,5,29,33,34,5,5,5,5,5,5,5,29,33,34,29,33,34,29,33,34,5,5],"f":[0,0,0,0,0,0,0,[[[2,[1]]],[[3,[1]]]],[[[2,[1]]],[[4,[1]]]],[[[2,[1]]],[[5,[1]]]],[[[2,[1]]],[[4,[1]]]],[[[2,[1]]],[[3,[1]]]],[[[2,[1]]],[[5,[1]]]],[6,6],[6,6],[[[7,[1]],[7,[1]]]],[[[7,[1]],[7,[1]]]],[[[7,[1]],[7,[1]]]],[[[7,[1]],[7,[1]]]],[[]],[[]],[[]],[[]],[[[2,[[0,[8,1]]]]],[[2,[[0,[8,1]]]]]],[[[7,[[0,[8,1]]]]],[[7,[[0,[8,1]]]]]],[[]],[[]],[[[7,[[0,[9,1]]]],[7,[[0,[9,1]]]]],10],[[],[[2,[1]]]],[[[2,[1]]]],[[[2,[1]]]],[[[7,[[0,[11,1]]]],[7,[[0,[11,1]]]]],12],[[],12],[[[2,[1]],13],14],[[[7,[[0,[15,1]]]],13],14],[[]],[[[3,[1]]],[[2,[1]]]],[[]],[[[3,[1]]],[[2,[1]]]],[[[3,[1]]],[[2,[[7,[1]]]]]],[6,6],[6,6],[[[2,[[0,[16,1]]]],17]],[[[7,[[0,[16,1]]]],17]],[[]],[[]],[[],6],[[[7,[18]]],6],[[[7,[19]]],6],[[[7,[20]]],6],[[[7,[21]]],6],[[[7,[22]]],6],[[],6],[[[7,[20]]],6],[[[7,[18]]],6],[[[7,[19]]],6],[[[7,[21]]],6],[[[7,[22]]],6],[[],[[2,[1]]]],[[[7,[1]]]],[[6,23]],[[6,23]],[[[7,[[0,[24,1]]]],[7,[[0,[24,1]]]]],[[25,[10]]]],0,[[]],[[]],[[],26],[[],26],[[],26],[[],26],[[],27],[[],27],[6],[[[7,[19]],6],[[7,[19]]]],[[[7,[21]],6],[[7,[21]]]],[[[7,[18]],6],[[7,[18]]]],[[[7,[20]],6],[[7,[20]]]],[[[7,[22]],6],[[7,[22]]]],[6],[[[7,[18]],6],[[7,[18]]]],[[[7,[22]],6],[[7,[22]]]],[[[7,[21]],6],[[7,[21]]]],[[[7,[19]],6],[[7,[19]]]],[[[7,[20]],6],[[7,[20]]]],[6,12],[6,12],[6],[6],[6],[6],0,0,0,0,[[[5,[1]]],[[4,[1]]]],[[[5,[1]]],[[4,[1]]]],[[[5,[1]],[5,[1]]]],[[[5,[1]],28]],[[[5,[1]],28]],[[[5,[1]]],[[29,[1]]]],[[[5,[1]]],[[30,[1]]]],[[[5,[1]]],[[31,[1]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[[5,[1]]]],[[[5,[1]],6,23],12],[[[5,[1]],6,23]],[[[5,[1]],6,23],12],[[[5,[1]],6,23]],[[[5,[1]],13],14],[[]],[[]],[[]],[[[5,[1]],[32,[[4,[1]]]]],25],[[[5,[1]],[32,[[4,[1]]]]],25],[[[29,[[0,[16,1]]]],17]],[[[33,[[0,[16,1]]]],17]],[[[34,[[0,[16,1]]]],17]],[[[5,[[0,[16,1]]]],17]],[[]],[[]],[[]],[[]],[[]],[[]],[[[5,[1]]],6],[[[5,[1]]],6],[[[29,[1]]],25],[[[33,[1]]],25],[[[34,[1]]],25],[[[5,[1]]],[[33,[1]]]],[[[5,[1]],6],12],[[[5,[1]],6]],[[[5,[1]],6],12],[[[5,[1]],6]],[[[5,[1]],6],[[25,[12]]]],[[[5,[1]],6],12],[[],26],[[],26],[[],26],[[],26],[[],26],[[],26],[[],27],[[],27],[[],27],[[],27],[[[5,[1]]],[[34,[1]]]]],"c":[],"p":[[8,"BitBlock"],[3,"BitMap"],[15,"array"],[15,"slice"],[3,"BitSlice"],[15,"usize"],[3,"LE"],[8,"Clone"],[8,"Ord"],[4,"Ordering"],[8,"PartialEq"],[15,"bool"],[3,"Formatter"],[6,"Result"],[8,"Debug"],[8,"Hash"],[8,"Hasher"],[15,"u16"],[15,"u8"],[15,"u32"],[15,"u128"],[15,"u64"],[3,"NonZeroUsize"],[8,"PartialOrd"],[4,"Option"],[4,"Result"],[3,"TypeId"],[8,"IntoIterator"],[3,"Bits"],[3,"Iter"],[3,"IterMut"],[8,"SliceIndex"],[3,"Ones"],[3,"Zeros"]]},\
"calc":{"doc":"The <code>calc</code> crate contains all the drawing and button-press …","t":"DLLLLAALLAMCLMLLLLLGFFFFFDDLLLLLLLLLLLLLLLLLLLLLLDLLLLLLFLLLLLL","n":["CalculatorState","borrow","borrow_mut","default","draw","drawing","evaluation_menu","from","into","math","msg","number_to_chars","on_button_press","screen","transmute_from","transmute_into","try_from","try_into","type_id","ScreenBuffer","draw_hline","draw_sprite_at","draw_text_at","draw_xor_rectangle","get_text_width","EvaluationMenuPersistentData","EvaluationMenuState","borrow","borrow","borrow_mut","borrow_mut","default","default","draw","from","from","into","into","on_button_press","transmute_from","transmute_from","transmute_into","transmute_into","try_from","try_from","try_into","try_into","type_id","type_id","CalcEvaluator","add_digit","borrow","borrow_mut","evaluate","from","into","number_to_chars","transmute_from","transmute_into","try_from","try_into","type_id","zero"],"q":[[0,"calc"],[19,"calc::drawing"],[25,"calc::evaluation_menu"],[49,"calc::math"]],"d":["Represents the state of the calculator","","","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","",""],"i":[0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,13,14,13,14,13,14,14,13,14,13,14,14,13,14,13,14,13,14,13,14,13,14,0,20,20,20,20,20,20,0,20,20,20,20,20,20],"f":[0,[[]],[[]],[[],1],[1],0,0,[[]],[[]],0,0,0,[[1,2]],0,[[]],[[]],[[],3],[[],3],[[],4],0,[[5,6,6,6]],[[5,[8,[7]],6,6]],[[5,[10,[[9,[7]]]],6,6]],[[5,11,11]],[[[10,[[9,[7]]]]],12],0,0,[[]],[[]],[[]],[[]],[[],13],[[],14],[[14,5,13]],[[]],[[]],[[]],[[]],[[14,5,2,13]],[[]],[[]],[[]],[[]],[[],3],[[],3],[[],3],[[],3],[[],4],[[],4],0,[15],[[]],[[]],[16,3],[[]],[[]],[17,[[19,[18]]]],[[]],[[]],[[],3],[[],3],[[],4],[[]]],"c":[],"p":[[3,"CalculatorState"],[3,"Button"],[4,"Result"],[3,"TypeId"],[6,"ScreenBuffer"],[15,"u16"],[19,"DrawableCharacter"],[8,"Into"],[8,"TransmutableInto"],[15,"slice"],[3,"Point"],[15,"usize"],[3,"EvaluationMenuPersistentData"],[3,"EvaluationMenuState"],[15,"u8"],[3,"Expression"],[15,"i32"],[4,"Character"],[3,"Vec"],[3,"CalcEvaluator"]]},\
"calc_alloc":{"doc":"The memory allocator for calc-rs","t":"DLLLLLLLLLL","n":["B64Allocator","alloc","borrow","borrow_mut","dealloc","from","into","new","try_from","try_into","type_id"],"q":[[0,"calc_alloc"]],"d":["An allocator that only aligns things to 8 byte boundries …","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","",""],"i":[0,1,1,1,1,1,1,1,1,1,1],"f":[0,[[1,2],3],[[]],[[]],[[1,3,2]],[[]],[[]],[[],1],[[],4],[[],4],[[],5]],"c":[],"p":[[3,"B64Allocator"],[3,"Layout"],[15,"u8"],[4,"Result"],[3,"TypeId"]]},\
"calc_common":{"doc":"Contains shared types for the <code>calc-rs</code> project.","t":"NNNNDNNENNNNNNNNTNNNENNNNNEENNNNNNNNNENNNRRRRNNNNNNDNNNNNNNNNNNNNNNNNNNLLLLLLLLLLLLLLLLLLLLMLLLLLLLLLLLMLLLLLLLLLLLLLLLLLLLLLLLLLLALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLAMMCDDQIIILLLLLLLLLLLLLLKLLKLLLLLLLLLLLLKK","n":["A","Alt","B","Back","Button","C","Caret","Character","Character","Character","Clear","CloseParen","Cursor","D","Dot","Down","DrawableCharacter","E","Eight","Enter","ExtendedCharacter","ExtendedCharacter","F","Five","Four","G","GetButton","GetDrawableCharacter","H","I","J","K","L","Left","M","Menu","Meta","MetaButton","Minus","Multiply","N","NUM_BUTTON_CHARS","NUM_CHARS","NUM_ECHARS","NUM_META_BUTTONS","Nine","O","One","OpenParen","P","Plus","Point","Q","R","Right","S","Seven","Six","Slash","Space","T","Three","Two","U","Up","V","W","X","Y","Z","Zero","as_mut","as_mut","as_ref","as_ref","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","character","clone","clone","clone","clone","clone","clone","clone","eq","eq","eq","eq","extended_character","from","from","from","from","from","from","from","from","from","from","from","from","from_digit","from_raw","from_raw_unchecked","get","get","id","into","into","into","into","into","into","into","into","prelude","transmute_from","transmute_from","transmute_from","transmute_from","transmute_from","transmute_from","transmute_from","transmute_from","transmute_from","transmute_from","transmute_into","transmute_into","transmute_into","transmute_into","transmute_into","transmute_into","transmute_into","transmute_into","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","util","x","y","SliceExt","ArrayChunks","ArrayChunksMut","Item","SliceExt","TransmutableFrom","TransmutableInto","borrow","borrow","borrow_mut","borrow_mut","from","from","into","into","into_iter","into_iter","into_remainder","next","next","remainder","transmute_from","transmute_from","transmute_from","transmute_into","transmute_into","transmute_into","transmute_slice_from","transmute_slice_from_mut","transmute_slice_into","transmute_slice_into_mut","try_from","try_from","try_into","try_into","type_id","type_id","uarray_chunks","uarray_chunks_mut"],"q":[[0,"calc_common"],[176,"calc_common::prelude"],[177,"calc_common::util"]],"d":["","","","","A compact, one byte representation of a button. Can be …","","","Represents a character that can be put into an expression.","","","","","","","","","Represents either a Character or an ExtendedCharacter","","","","Represents a charactor or symbol that cannot be put into …","","","","","","Returned by Button::get. Represents a Character or a …","Represents either a Character or an ExtendedCharacter. …","","","","","","","","","","A button that isn’t a Character (eg <code>Enter</code>)","","","","The number of characters with their own dedicated buttons","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","Returns the argument unchanged.","Returns the argument unchanged.","","","Returns the argument unchanged.","Returns the argument unchanged.","","Gets the button corresponding to the given ID (see …","See Button::from_raw","Gets <code>self</code> as either a Character or an ExtendedCharacter","Gets the button as either a Character or a MetaButton","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Trait that says that T can be safely transmuted into F","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","Returns an iterator over <code>N</code> elements of the slice at a …","Returns an iterator over <code>N</code> elements of the slice at a …"],"i":[1,5,1,5,0,1,1,0,11,7,5,1,3,1,1,5,0,1,1,5,0,11,1,1,1,1,0,0,1,1,1,1,1,5,1,5,7,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,5,1,1,1,1,3,1,1,1,1,5,1,1,1,1,1,1,1,3,1,3,11,4,1,3,2,5,6,7,11,4,1,3,2,5,6,7,2,4,1,3,2,5,6,7,1,2,5,6,2,11,4,1,3,2,2,2,5,6,6,6,7,1,6,6,2,6,2,11,4,1,3,2,5,6,7,0,11,4,1,3,2,2,2,5,6,7,11,4,1,3,2,5,6,7,11,4,1,3,2,5,6,7,11,4,1,3,2,5,6,7,11,4,1,3,2,5,6,7,0,4,4,0,0,0,17,0,0,0,16,14,16,14,16,14,16,14,16,14,14,16,14,16,18,16,14,19,16,14,18,18,19,19,16,14,16,14,16,14,17,17],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[1,2],[3,2],[1,2],[3,2],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],0,[4,4],[1,1],[3,3],[2,2],[5,5],[6,6],[7,7],[[1,1],8],[[2,2],8],[[5,5],8],[[6,6],8],0,[[]],[[]],[[]],[[]],[1,2],[3,2],[[]],[[]],[1,6],[5,6],[[]],[[]],[9,[[10,[1]]]],[9,[[10,[6]]]],[9,6],[2,11],[6,7],[2,9],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],0,[[]],[[]],[[]],[[]],[3,2],[[]],[1,2],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],13],[[],13],[[],13],[[],13],[[],13],[[],13],[[],13],[[],13],0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[14,15],[16,10],[14,10],[16,15],[[]],[[]],[[]],[[]],[[]],[[]],[15,15],[15,15],[15,15],[15,15],[[],12],[[],12],[[],12],[[],12],[[],13],[[],13],[[],16],[[],14]],"c":[],"p":[[4,"Character"],[19,"DrawableCharacter"],[4,"ExtendedCharacter"],[3,"Point"],[4,"MetaButton"],[3,"Button"],[4,"GetButton"],[15,"bool"],[15,"u8"],[4,"Option"],[4,"GetDrawableCharacter"],[4,"Result"],[3,"TypeId"],[3,"ArrayChunksMut"],[15,"slice"],[3,"ArrayChunks"],[8,"SliceExt"],[8,"TransmutableFrom"],[8,"TransmutableInto"]]},\
"calc_keyboard":{"doc":"A crate for converting keyboard matrix states into …","t":"DLLMMLLLLLLLLLL","n":["ButtonEvent","borrow","borrow_mut","button","button_down","clone","eq","from","from_keyboard_state","into","transmute_from","transmute_into","try_from","try_into","type_id"],"q":[[0,"calc_keyboard"]],"d":["","","","","","","","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","","","","",""],"i":[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"f":[0,[[]],[[]],0,0,[1,1],[[1,1],2],[[]],[[],[[3,[1]]]],[[]],[[]],[[]],[[],4],[[],4],[[],5]],"c":[],"p":[[3,"ButtonEvent"],[15,"bool"],[4,"Option"],[4,"Result"],[3,"TypeId"]]},\
"calc_macros":{"doc":"Crate for the proc_macros used in the <code>calc-rs</code> project","t":"O","n":["drawable_char_string"],"q":[[0,"calc_macros"]],"d":["Creates a <code>[DrawableCharacter]</code> or <code>[DrawableCharacter; _]</code> …"],"i":[0],"f":[0],"c":[],"p":[]},\
"calc_parser":{"doc":"Crate for tokenizing, lexing, and parsing for the <code>calc</code> …","t":"NNQINDQNDENKLLLLLLLLKMLLLLLLLLLLAMFLMLLLLLLLLLLLLLLLLLKNDNNNELLLLLLLLLLLLLLLLLLLLLL","n":["Add","Divide","Error","Evaluator","Exponentiate","Expression","Item","Multiply","NumberTooLarge","Operator","Subtract","add_digit","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clone","clone_into","evaluate","first_argument","fmt","fmt","from","from","from","from_char","into","into","into","is_priority_left_to_right","lexer","operator","parse_and_evaluate","priority","second_argument","should_be_evaluated_before","to_owned","transmute_from","transmute_from","transmute_from","transmute_into","transmute_into","transmute_into","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","zero","ClosingParenthesis","Lexer","Number","OpenParenthesis","Operator","Token","borrow","borrow","borrow_mut","borrow_mut","fmt","from","from","into","into","into_iter","new","next","transmute_from","transmute_from","transmute_into","transmute_into","try_from","try_from","try_into","try_into","type_id","type_id"],"q":[[0,"calc_parser"],[55,"calc_parser::lexer"]],"d":["","","","A trait for Zero-Sized-Types that can evaluate expressions","","Represents a simple expression eg. <code>9+10</code> or <code>-5</code>","The number type to be evaluated","","An error for when a number is too large to fit into a …","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","Parses and evaluates the expression defined by <code>token_stream</code>…","","","","","","","","","","","","","","","","","","","","","","An iterator over the <code>Token</code>s in a stream of characters","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","",""],"i":[2,2,13,0,2,0,13,2,0,0,2,13,15,2,3,15,2,3,2,2,13,3,2,3,15,2,3,2,15,2,3,2,0,3,0,2,3,2,2,15,2,3,15,2,3,15,2,3,15,2,3,15,2,3,13,12,0,12,12,12,0,14,12,14,12,12,14,12,14,12,14,14,14,14,12,14,12,14,12,14,12,14,12],"f":[0,0,0,0,0,0,0,0,0,0,0,[1],[[]],[[]],[[]],[[]],[[]],[[]],[2,2],[[]],[3,4],0,[[2,5],6],[[[3,[7]],5],6],[[]],[[]],[[]],[1,[[8,[2]]]],[[]],[[]],[[]],[1,9],0,0,[10,[[4,[0]]]],[2,1],0,[[2,[8,[2]]],9],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],11],[[],11],[[],11],[[]],0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[[12,[7]],5],6],[[]],[[]],[[]],[[]],[[]],[10,[[14,[13,10]]]],[[[14,[13,10]]],[[8,[12]]]],[[]],[[]],[[]],[[]],[[],4],[[],4],[[],4],[[],4],[[],11],[[],11]],"c":[],"p":[[15,"u8"],[4,"Operator"],[3,"Expression"],[4,"Result"],[3,"Formatter"],[6,"Result"],[8,"Debug"],[4,"Option"],[15,"bool"],[8,"Iterator"],[3,"TypeId"],[4,"Token"],[8,"Evaluator"],[3,"Lexer"],[3,"NumberTooLarge"]]},\
"calc_rs":{"doc":"","t":"HHFFFFFAFFHFFFFFFFFFFFFFFFFFFFFFFFFFFHF","n":["COUNTER","PENDING_BUTTONS","Tim6Interrupt","__cortex_m_rt_main","get_row_column_state","pop_button_event","psuedo_wait","runtime","update_screen","ADCInterrupt","ALLOCATOR","DMACh1Interrupt","DMACh2_3Interrupt","DMACh4_5Interrupt","EXTI0_1Interrupt","EXTI2_3Interrupt","EXTI4_15Interrupt","FlashInterrupt","I2C1Interrupt","I2C2Interrupt","RCCInterrupt","RTCInterrupt","SPI1Interrupt","SPI2Interrupt","Tim14Interrupt","Tim15Interrupt","Tim16Interrupt","Tim17Interrupt","Tim1BrkUpTrgCOMInterrupt","Tim1CCInterrupt","Tim3Interrupt","Tim6Interrupt","USART1Interrupt","USART2Interrupt","USART3_4_5_6Interrupt","USBInterrupt","WindowWatchdogInterrupt","__INTERRUPTS","panic"],"q":[[0,"calc_rs"],[9,"calc_rs::runtime"]],"d":["","","","","","","","Includes basic things needed to run rust code. This …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"f":[0,0,[[]],[[],1],[[]],[[],[[3,[2]]]],[[]],0,[[4,[6,[5]]],7],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[8,1]],"c":[],"p":[[15,"never"],[3,"ButtonEvent"],[4,"Option"],[3,"I2C2"],[15,"u32"],[3,"BitMap"],[15,"bool"],[3,"PanicInfo"]]},\
"calc_simulator":{"doc":"A crate for running/simulating the <code>calc-rs</code> project on …","t":"RFFF","n":["PIXEL_SIZE","draw","main","map_to_button"],"q":[[0,"calc_simulator"]],"d":["","","",""],"i":[0,0,0,0],"f":[0,[[[2,[1]],[3,[1]]]],[[]],[4,[[6,[5]]]]],"c":[],"p":[[3,"CalculatorState"],[3,"WWindState"],[3,"Window"],[15,"u32"],[3,"Button"],[4,"Option"]]},\
"stm_util":{"doc":"A hardware abstraction layer for the STM32F070CBT6 MCU for …","t":"DALLFFFLFFLLFAALALALLLAFRRRRRRRNNNNNNNNNENDDENNNNNEENNENLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLDDLLLLLLLFFLLLLLLLLLLLLILDLLLLLLLLLDLLLLLLLLLLLLL","n":["CriticalSection","address","borrow","borrow_mut","clear_pending_interrupt","data_memory_barrier","disable_interrupts","drop","enable_interrupt","enable_interrupts","end","from","get_primask","gpio","i2c","into","prelude","start","timer","try_from","try_into","type_id","util","wait_for_interrupt","GPIOA","GPIO_REG_SIZE","I2C2","RCC","RCC_APB1ENR","RCC_APB1RSTR","TIM6","A","AF0","AF1","AF2","AF3","AF4","AF5","AF6","AF7","AlternateFunction","B","GPIOConfiguration","GPIOPin","GPIOPort","High","Low","Medium","None","OpenDrain","PinSpeed","PinType","PullDown","PullUp","PullUpPullDownResistor","PushPull","alternate_function","analog","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone","clone","clone","configure","enable","from","from","from","from","from","from","from","get_all_pins","get_pins","input","into","into","into","into","into","into","into","is_high","new","new_unchecked","output","port","set","set_alternate_function","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_new","type_id","type_id","type_id","type_id","type_id","type_id","type_id","I2C2","I2CFrame","borrow","borrow","borrow_mut","borrow_mut","drop","from","from","i2c_send","initialize_i2c2","into","into","send_data","start_frame","stop","transmit","try_from","try_from","try_into","try_into","type_id","type_id","IterExt","twice_peekable","Timer6","borrow","borrow_mut","clear_interrupt","from","initialize","into","try_from","try_into","type_id","TwicePeekable","borrow","borrow_mut","from","into","into_iter","new","next","peek","peek_twice","size_hint","try_from","try_into","type_id"],"q":[[0,"stm_util"],[24,"stm_util::address"],[31,"stm_util::gpio"],[126,"stm_util::i2c"],[149,"stm_util::prelude"],[151,"stm_util::timer"],[161,"stm_util::util"]],"d":["","","","","Clears the pending status of the interupt with an IRQ …","Waits until previous memory accesses are done before doing …","","","Enabled the interrupt with the number <code>interrupt</code> Safety: …","","","Returns the argument unchanged.","","","","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Note: before using this function, the corresponding GPIO …","Enables the specified GPIO port. This must be done before …","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","Safety","","","Note: before using this function, <code>self</code> must be <code>configure</code>d. …","Before this, the specified pin must be configured as an …","","","","","","","","","","","","","","","Returns Some if the specified pin is a valid pin","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","I2C2 should not be initialized twice","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Sends <code>data</code> to <code>addr</code> in one I2C frame. Does nothing and …","Starts an i2c frame. Note: if the frame isn’t stopped or …","Ends the current communication. Equivalent to <code>self.drop()</code>.","Blocks and transmits <code>byte</code>. SCL is stretched low between …","","","","","","","","","","","","Clears the interrupt pending bit so that the interrupt isn…","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","","","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","","","",""],"i":[0,0,2,2,0,0,0,2,0,0,2,2,0,0,0,2,0,2,0,2,2,2,0,0,0,0,0,0,0,0,0,10,11,11,11,11,11,11,11,11,0,10,0,0,0,7,7,7,8,6,0,0,8,8,0,6,9,9,9,8,10,7,6,11,12,9,8,10,7,6,11,12,8,10,7,6,11,12,12,10,9,8,10,7,6,11,12,10,10,9,9,8,10,7,6,11,12,12,12,12,9,12,12,12,9,8,10,7,6,11,12,9,8,10,7,6,11,12,12,9,8,10,7,6,11,12,0,0,19,17,19,17,17,19,17,0,0,19,17,19,19,17,17,19,17,19,17,19,17,0,23,0,21,21,21,21,21,21,21,21,21,0,20,20,20,20,20,20,20,20,20,20,20,20,20],"f":[0,0,[[]],[[]],[1],[[]],[[]],[2],[1],[[]],[2],[[]],[[],3],0,0,[[]],0,[[],2],0,[[],4],[[],4],[[],5],0,[[]],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[6,7,8],9],[[],9],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[8,8],[10,10],[7,7],[6,6],[11,11],[12,12],[[12,9]],[10],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[10,13],[[10,[14,[1]]],13],[8,9],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[12,15],[[10,1],12],[[10,1],12],[[6,7,8],9],[12,10],[[12,15]],[[12,11]],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[],4],[[10,1],[[16,[12]]]],[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],[[],5],0,0,[[]],[[]],[[]],[[]],[17],[[]],[[]],[[1,18],15],[[],19],[[]],[[]],[[19,1,18],15],[[19,1,1],[[16,[17]]]],[17],[[17,1],15],[[],4],[[],4],[[],4],[[],4],[[],5],[[],5],0,[[],20],0,[[]],[[]],[[]],[[]],[[],21],[[]],[[],4],[[],4],[[],5],0,[[]],[[]],[[]],[[]],[[]],[22,[[20,[22]]]],[[[20,[22]]],16],[[[20,[22]]],16],[[[20,[22]]],16],[[[20,[22]]]],[[],4],[[],4],[[],5]],"c":[],"p":[[15,"u8"],[3,"CriticalSection"],[15,"u32"],[4,"Result"],[3,"TypeId"],[4,"PinType"],[4,"PinSpeed"],[4,"PullUpPullDownResistor"],[3,"GPIOConfiguration"],[4,"GPIOPort"],[4,"AlternateFunction"],[3,"GPIOPin"],[15,"u16"],[3,"Range"],[15,"bool"],[4,"Option"],[3,"I2CFrame"],[8,"IntoIterator"],[3,"I2C2"],[3,"TwicePeekable"],[3,"Timer6"],[8,"Iterator"],[8,"IterExt"]]},\
"wwind":{"doc":"wwind is a cross-platform Rust UI library that is meant to …","t":"DDDDDDDLLLMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMMLLLLLLLLLLLMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMMM","n":["Color","DrawingContext","RectRegion","WWindInitState","WWindInstance","WWindState","Window","add_window","as_mut","as_ref","blue","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","deref","deref_mut","do_windows_exist","draw_line","draw_rectangle","fmt","fmt","from","from","from","from","from","from","from","from","from","from_hex","from_rgb","get_bottom_y","get_drawing_context","get_right_x","get_size","green","height","into","into","into","into","into","into","into","new","on_keydown","on_redraw","on_window_close","red","run","schedule_exit","schedule_window_destruction","set_draw_color","to_owned","to_owned","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","userdata","userdata_mut","width","x","y"],"q":[[0,"wwind"]],"d":["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,0,0,0,0,0,1,6,6,7,10,6,1,5,16,7,8,10,6,1,5,16,7,8,7,8,7,8,6,6,1,10,10,7,8,10,6,1,1,5,16,7,7,8,7,7,8,5,8,5,7,8,10,6,1,5,16,7,8,16,5,5,5,7,16,1,5,10,7,8,10,6,1,5,16,7,8,10,6,1,5,16,7,8,10,6,1,5,16,7,8,6,6,8,8,8],"f":[0,0,0,0,0,0,0,[[1,2,2,3,3,4],5],[6,1],[6,1],0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[7,7],[8,8],[[]],[[]],[6],[6],[1,9],[[10,3,3,3,3]],[[10,8]],[[7,11],12],[[8,11],12],[[]],[[]],[6,1],[[]],[[]],[[]],[13,7],[[]],[[]],[13,7],[[14,14,14],7],[8,3],[5,10],[8,3],[5],0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[15,[[17,[[16,[15]]]]]],[[5,18]],[[5,18]],[[5,18]],0,[[[16,[15]]]],[1],[5],[[10,7]],[[]],[[]],[[],19],[[],19],[[],19],[[],19],[[],19],[[],19],[[],19],[[],19],[[],19],[[],19],[[],19],[[],19],[[],19],[[],19],[[],20],[[],20],[[],20],[[],20],[[],20],[[],20],[[],20],[6],[6],0,0,0],"c":[],"p":[[3,"WWindInitState"],[15,"i16"],[15,"u16"],[15,"str"],[3,"Window"],[3,"WWindState"],[3,"Color"],[3,"RectRegion"],[15,"bool"],[3,"DrawingContext"],[3,"Formatter"],[6,"Result"],[15,"u32"],[15,"u8"],[8,"FnOnce"],[3,"WWindInstance"],[4,"Option"],[8,"FnMut"],[4,"Result"],[3,"TypeId"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
