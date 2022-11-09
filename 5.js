function numberToStringIndonesian(number) {
	let str = ``;
	if (number > 0 && number <= 100) {
		if (number === 1) {
			return (str = `satu`);
		} else if (number === 2) {
			return (str = `dua`);
		} else if (number === 3) {
			return (str = `tiga`);
		} else if (number === 4) {
			return (str = `empat`);
		} else if (number === 5) {
			return (str = `lima`);
		} else if (number === 6) {
			return (str = `enam`);
		} else if (number === 7) {
			return (str = `tujuh`);
		} else if (number === 8) {
			return (str = `delapan`);
		} else if (number === 9) {
			return (str = `sembilan`);
		} else if (number === 10) {
			return (str = `sepuluh`);
		} else if (number === 11) {
			return (str = `sebelas`);
		} else if (number > 11 && number < 20) {
			str = "belas";
			for (let i = 0; i < number; i++) {
				if (number === 12) {
					return (str = `dua ${str}`);
				} else if (number === 13) {
					return (str = `tiga ${str}`);
				} else if (number === 14) {
					return (str = `empat ${str}`);
				} else if (number === 15) {
					return (str = `lima ${str}`);
				} else if (number === 16) {
					return (str = `enam ${str}`);
				} else if (number === 17) {
					return (str = `tujuh ${str}`);
				} else if (number === 18) {
					return (str = `delapan ${str}`);
				} else if (number === 19) {
					return (str = `sembilan ${str}`);
				}
			}
		} else if (number >= 20 && number < 30) {
			str = "dua puluh";
			for (let i = 0; i < number; i++) {
				if (number === 20) {
					return str;
				} else if (number === 21) {
					return (str = ` ${str} satu`);
				} else if (number === 22) {
					return (str = `${str} dua`);
				} else if (number === 23) {
					return (str = `${str} tiga`);
				} else if (number === 24) {
					return (str = `${str} empat`);
				} else if (number === 25) {
					return (str = `${str} lima`);
				} else if (number === 26) {
					return (str = `${str} enam`);
				} else if (number === 27) {
					return (str = `${str} tujuh`);
				} else if (number === 28) {
					return (str = `${str} delapan`);
				} else if (number === 29) {
					return (str = `${str} sembilan`);
				}
			}
		} else if (number >= 30 && number < 40) {
			str = "tiga puluh";
			for (let i = 0; i < number; i++) {
				if (number === 30) {
					return str;
				} else if (number === 31) {
					return (str = ` ${str} satu`);
				} else if (number === 32) {
					return (str = `${str} dua`);
				} else if (number === 33) {
					return (str = `${str} tiga`);
				} else if (number === 34) {
					return (str = `${str} empat`);
				} else if (number === 35) {
					return (str = `${str} lima`);
				} else if (number === 36) {
					return (str = `${str} enam`);
				} else if (number === 37) {
					return (str = `${str} tujuh`);
				} else if (number === 38) {
					return (str = `${str} delapan`);
				} else if (number === 39) {
					return (str = `${str} sembilan`);
				}
			}
		} else if (number >= 40 && number < 50) {
			str = "empat puluh";
			for (let i = 0; i < number; i++) {
				if (number === 40) {
					return str;
				} else if (number === 41) {
					return (str = ` ${str} satu`);
				} else if (number === 42) {
					return (str = `${str} dua`);
				} else if (number === 43) {
					return (str = `${str} tiga`);
				} else if (number === 44) {
					return (str = `${str} empat`);
				} else if (number === 45) {
					return (str = `${str} lima`);
				} else if (number === 46) {
					return (str = `${str} enam`);
				} else if (number === 47) {
					return (str = `${str} tujuh`);
				} else if (number === 48) {
					return (str = `${str} delapan`);
				} else if (number === 49) {
					return (str = `${str} sembilan`);
				}
			}
		} else if (number >= 50 && number < 60) {
			str = "lima puluh";
			for (let i = 0; i < number; i++) {
				if (number === 50) {
					return str;
				} else if (number === 51) {
					return (str = ` ${str} satu`);
				} else if (number === 52) {
					return (str = `${str} dua`);
				} else if (number === 53) {
					return (str = `${str} tiga`);
				} else if (number === 54) {
					return (str = `${str} empat`);
				} else if (number === 55) {
					return (str = `${str} lima`);
				} else if (number === 56) {
					return (str = `${str} enam`);
				} else if (number === 57) {
					return (str = `${str} tujuh`);
				} else if (number === 58) {
					return (str = `${str} delapan`);
				} else if (number === 59) {
					return (str = `${str} sembilan`);
				}
			}
		} else if (number >= 60 && number < 70) {
			str = "enam puluh";
			for (let i = 0; i < number; i++) {
				if (number === 60) {
					return str;
				} else if (number === 61) {
					return (str = ` ${str} satu`);
				} else if (number === 62) {
					return (str = `${str} dua`);
				} else if (number === 63) {
					return (str = `${str} tiga`);
				} else if (number === 64) {
					return (str = `${str} empat`);
				} else if (number === 65) {
					return (str = `${str} lima`);
				} else if (number === 66) {
					return (str = `${str} enam`);
				} else if (number === 67) {
					return (str = `${str} tujuh`);
				} else if (number === 68) {
					return (str = `${str} delapan`);
				} else if (number === 69) {
					return (str = `${str} sembilan`);
				}
			}
		} else if (number >= 70 && number < 80) {
			str = "tujuh puluh";
			for (let i = 0; i < number; i++) {
				if (number === 70) {
					return str;
				} else if (number === 71) {
					return (str = ` ${str} satu`);
				} else if (number === 72) {
					return (str = `${str} dua`);
				} else if (number === 73) {
					return (str = `${str} tiga`);
				} else if (number === 74) {
					return (str = `${str} empat`);
				} else if (number === 75) {
					return (str = `${str} lima`);
				} else if (number === 76) {
					return (str = `${str} enam`);
				} else if (number === 77) {
					return (str = `${str} tujuh`);
				} else if (number === 78) {
					return (str = `${str} delapan`);
				} else if (number === 79) {
					return (str = `${str} sembilan`);
				}
			}
		} else if (number >= 80 && number < 90) {
			str = "delapan puluh";
			for (let i = 0; i < number; i++) {
				if (number === 80) {
					return str;
				} else if (number === 81) {
					return (str = ` ${str} satu`);
				} else if (number === 82) {
					return (str = `${str} dua`);
				} else if (number === 83) {
					return (str = `${str} tiga`);
				} else if (number === 84) {
					return (str = `${str} empat`);
				} else if (number === 85) {
					return (str = `${str} lima`);
				} else if (number === 86) {
					return (str = `${str} enam`);
				} else if (number === 87) {
					return (str = `${str} tujuh`);
				} else if (number === 88) {
					return (str = `${str} delapan`);
				} else if (number === 89) {
					return (str = `${str} sembilan`);
				}
			}
		} else if (number >= 90 && number < 100) {
			str = "sembilan puluh";
			for (let i = 0; i < number; i++) {
				if (number === 90) {
					return str;
				} else if (number === 91) {
					return (str = ` ${str} satu`);
				} else if (number === 92) {
					return (str = `${str} dua`);
				} else if (number === 93) {
					return (str = `${str} tiga`);
				} else if (number === 94) {
					return (str = `${str} empat`);
				} else if (number === 95) {
					return (str = `${str} lima`);
				} else if (number === 96) {
					return (str = `${str} enam`);
				} else if (number === 97) {
					return (str = `${str} tujuh`);
				} else if (number === 98) {
					return (str = `${str} delapan`);
				} else if (number === 99) {
					return (str = `${str} sembilan`);
				}
			}
		} else if (number === 100) {
			return (str = `seratus`);
		}
	} else {
		return "Silakan masukkan bilangan bilangan 1-100";
	}
}

const result = numberToStringIndonesian(20);
console.log(result);