__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3458,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 420,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "QQ",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 27,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 26,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 18,
              "end": 26,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 18,
                "end": 24
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 34,
        "end": 419,
        "types": [
          {
            "type": "TSUnionType",
            "start": 37,
            "end": 47,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 37,
                "end": 40,
                "literal": {
                  "type": "Literal",
                  "start": 37,
                  "end": 40,
                  "value": "a",
                  "raw": "\"a\""
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 43,
                "end": 47,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 43,
                  "end": 44,
                  "typeName": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 44,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 45,
                  "end": 46,
                  "literal": {
                    "type": "Literal",
                    "start": 45,
                    "end": 46,
                    "value": 0,
                    "raw": "0"
                  }
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 56,
            "end": 66,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 56,
                "end": 59,
                "literal": {
                  "type": "Literal",
                  "start": 56,
                  "end": 59,
                  "value": "b",
                  "raw": "\"b\""
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 62,
                "end": 66,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 62,
                  "end": 63,
                  "typeName": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 63,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 64,
                  "end": 65,
                  "literal": {
                    "type": "Literal",
                    "start": 64,
                    "end": 65,
                    "value": 1,
                    "raw": "1"
                  }
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 75,
            "end": 85,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 75,
                "end": 78,
                "literal": {
                  "type": "Literal",
                  "start": 75,
                  "end": 78,
                  "value": "c",
                  "raw": "\"c\""
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 81,
                "end": 85,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 81,
                  "end": 82,
                  "typeName": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 83,
                  "end": 84,
                  "literal": {
                    "type": "Literal",
                    "start": 83,
                    "end": 84,
                    "value": 2,
                    "raw": "2"
                  }
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 94,
            "end": 104,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 94,
                "end": 97,
                "literal": {
                  "type": "Literal",
                  "start": 94,
                  "end": 97,
                  "value": "d",
                  "raw": "\"d\""
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 100,
                "end": 104,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 100,
                  "end": 101,
                  "typeName": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 102,
                  "end": 103,
                  "literal": {
                    "type": "Literal",
                    "start": 102,
                    "end": 103,
                    "value": 3,
                    "raw": "3"
                  }
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 113,
            "end": 123,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 113,
                "end": 116,
                "literal": {
                  "type": "Literal",
                  "start": 113,
                  "end": 116,
                  "value": "e",
                  "raw": "\"e\""
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 119,
                "end": 123,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 119,
                  "end": 120,
                  "typeName": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 120,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 121,
                  "end": 122,
                  "literal": {
                    "type": "Literal",
                    "start": 121,
                    "end": 122,
                    "value": 4,
                    "raw": "4"
                  }
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 132,
            "end": 142,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 132,
                "end": 135,
                "literal": {
                  "type": "Literal",
                  "start": 132,
                  "end": 135,
                  "value": "f",
                  "raw": "\"f\""
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 138,
                "end": 142,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 138,
                  "end": 139,
                  "typeName": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 139,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 140,
                  "end": 141,
                  "literal": {
                    "type": "Literal",
                    "start": 140,
                    "end": 141,
                    "value": 5,
                    "raw": "5"
                  }
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 151,
            "end": 161,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 151,
                "end": 154,
                "literal": {
                  "type": "Literal",
                  "start": 151,
                  "end": 154,
                  "value": "g",
                  "raw": "\"g\""
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 157,
                "end": 161,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 157,
                  "end": 158,
                  "typeName": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 158,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 159,
                  "end": 160,
                  "literal": {
                    "type": "Literal",
                    "start": 159,
                    "end": 160,
                    "value": 6,
                    "raw": "6"
                  }
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 170,
            "end": 180,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 170,
                "end": 173,
                "literal": {
                  "type": "Literal",
                  "start": 170,
                  "end": 173,
                  "value": "h",
                  "raw": "\"h\""
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 176,
                "end": 180,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 176,
                  "end": 177,
                  "typeName": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 177,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 178,
                  "end": 179,
                  "literal": {
                    "type": "Literal",
                    "start": 178,
                    "end": 179,
                    "value": 7,
                    "raw": "7"
                  }
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 189,
            "end": 199,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 189,
                "end": 192,
                "literal": {
                  "type": "Literal",
                  "start": 189,
                  "end": 192,
                  "value": "i",
                  "raw": "\"i\""
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 195,
                "end": 199,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 195,
                  "end": 196,
                  "typeName": {
                    "type": "Identifier",
                    "start": 195,
                    "end": 196,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 197,
                  "end": 198,
                  "literal": {
                    "type": "Literal",
                    "start": 197,
                    "end": 198,
                    "value": 8,
                    "raw": "8"
                  }
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 208,
            "end": 218,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 208,
                "end": 211,
                "literal": {
                  "type": "Literal",
                  "start": 208,
                  "end": 211,
                  "value": "j",
                  "raw": "\"j\""
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 214,
                "end": 218,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 214,
                  "end": 215,
                  "typeName": {
                    "type": "Identifier",
                    "start": 214,
                    "end": 215,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 216,
                  "end": 217,
                  "literal": {
                    "type": "Literal",
                    "start": 216,
                    "end": 217,
                    "value": 9,
                    "raw": "9"
                  }
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 227,
            "end": 238,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 227,
                "end": 230,
                "literal": {
                  "type": "Literal",
                  "start": 227,
                  "end": 230,
                  "value": "k",
                  "raw": "\"k\""
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 233,
                "end": 238,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 233,
                  "end": 234,
                  "typeName": {
                    "type": "Identifier",
                    "start": 233,
                    "end": 234,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 235,
                  "end": 237,
                  "literal": {
                    "type": "Literal",
                    "start": 235,
                    "end": 237,
                    "value": 10,
                    "raw": "10"
                  }
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 247,
            "end": 258,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 247,
                "end": 250,
                "literal": {
                  "type": "Literal",
                  "start": 247,
                  "end": 250,
                  "value": "l",
                  "raw": "\"l\""
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 253,
                "end": 258,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 253,
                  "end": 254,
                  "typeName": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 254,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 255,
                  "end": 257,
                  "literal": {
                    "type": "Literal",
                    "start": 255,
                    "end": 257,
                    "value": 11,
                    "raw": "11"
                  }
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 267,
            "end": 278,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 267,
                "end": 270,
                "literal": {
                  "type": "Literal",
                  "start": 267,
                  "end": 270,
                  "value": "m",
                  "raw": "\"m\""
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 273,
                "end": 278,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 273,
                  "end": 274,
                  "typeName": {
                    "type": "Identifier",
                    "start": 273,
                    "end": 274,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 275,
                  "end": 277,
                  "literal": {
                    "type": "Literal",
                    "start": 275,
                    "end": 277,
                    "value": 12,
                    "raw": "12"
                  }
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 287,
            "end": 298,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 287,
                "end": 290,
                "literal": {
                  "type": "Literal",
                  "start": 287,
                  "end": 290,
                  "value": "n",
                  "raw": "\"n\""
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 293,
                "end": 298,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 293,
                  "end": 294,
                  "typeName": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 294,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 295,
                  "end": 297,
                  "literal": {
                    "type": "Literal",
                    "start": 295,
                    "end": 297,
                    "value": 13,
                    "raw": "13"
                  }
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 307,
            "end": 318,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 307,
                "end": 310,
                "literal": {
                  "type": "Literal",
                  "start": 307,
                  "end": 310,
                  "value": "q",
                  "raw": "\"q\""
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 313,
                "end": 318,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 313,
                  "end": 314,
                  "typeName": {
                    "type": "Identifier",
                    "start": 313,
                    "end": 314,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 315,
                  "end": 317,
                  "literal": {
                    "type": "Literal",
                    "start": 315,
                    "end": 317,
                    "value": 14,
                    "raw": "14"
                  }
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 327,
            "end": 338,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 327,
                "end": 330,
                "literal": {
                  "type": "Literal",
                  "start": 327,
                  "end": 330,
                  "value": "p",
                  "raw": "\"p\""
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 333,
                "end": 338,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 333,
                  "end": 334,
                  "typeName": {
                    "type": "Identifier",
                    "start": 333,
                    "end": 334,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 335,
                  "end": 337,
                  "literal": {
                    "type": "Literal",
                    "start": 335,
                    "end": 337,
                    "value": 15,
                    "raw": "15"
                  }
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 347,
            "end": 358,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 347,
                "end": 350,
                "literal": {
                  "type": "Literal",
                  "start": 347,
                  "end": 350,
                  "value": "q",
                  "raw": "\"q\""
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 353,
                "end": 358,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 353,
                  "end": 354,
                  "typeName": {
                    "type": "Identifier",
                    "start": 353,
                    "end": 354,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 355,
                  "end": 357,
                  "literal": {
                    "type": "Literal",
                    "start": 355,
                    "end": 357,
                    "value": 16,
                    "raw": "16"
                  }
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 367,
            "end": 378,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 367,
                "end": 370,
                "literal": {
                  "type": "Literal",
                  "start": 367,
                  "end": 370,
                  "value": "r",
                  "raw": "\"r\""
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 373,
                "end": 378,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 373,
                  "end": 374,
                  "typeName": {
                    "type": "Identifier",
                    "start": 373,
                    "end": 374,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 375,
                  "end": 377,
                  "literal": {
                    "type": "Literal",
                    "start": 375,
                    "end": 377,
                    "value": 17,
                    "raw": "17"
                  }
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 387,
            "end": 398,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 387,
                "end": 390,
                "literal": {
                  "type": "Literal",
                  "start": 387,
                  "end": 390,
                  "value": "s",
                  "raw": "\"s\""
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 393,
                "end": 398,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 393,
                  "end": 394,
                  "typeName": {
                    "type": "Identifier",
                    "start": 393,
                    "end": 394,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 395,
                  "end": 397,
                  "literal": {
                    "type": "Literal",
                    "start": 395,
                    "end": 397,
                    "value": 18,
                    "raw": "18"
                  }
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 407,
            "end": 418,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 407,
                "end": 410,
                "literal": {
                  "type": "Literal",
                  "start": 407,
                  "end": 410,
                  "value": "t",
                  "raw": "\"t\""
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 413,
                "end": 418,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 413,
                  "end": 414,
                  "typeName": {
                    "type": "Identifier",
                    "start": 413,
                    "end": 414,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 415,
                  "end": 417,
                  "literal": {
                    "type": "Literal",
                    "start": 415,
                    "end": 417,
                    "value": 19,
                    "raw": "19"
                  }
                }
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 444,
      "end": 1379,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 451,
        "end": 1379,
        "id": {
          "type": "Identifier",
          "start": 461,
          "end": 467,
          "decorators": [],
          "name": "Update",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 468,
          "end": 1379,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 474,
              "end": 492,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 474,
                "end": 483,
                "decorators": [],
                "name": "update_id",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 483,
                "end": 491,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 485,
                  "end": 491
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 498,
              "end": 528,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 498,
                "end": 505,
                "decorators": [],
                "name": "message",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 506,
                "end": 527,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 508,
                  "end": 527,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 510,
                      "end": 525,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 510,
                        "end": 517,
                        "decorators": [],
                        "name": "message",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 517,
                        "end": 525,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 519,
                          "end": 525
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 533,
              "end": 577,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 533,
                "end": 547,
                "decorators": [],
                "name": "edited_message",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 548,
                "end": 576,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 550,
                  "end": 576,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 552,
                      "end": 574,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 552,
                        "end": 566,
                        "decorators": [],
                        "name": "edited_message",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 566,
                        "end": 574,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 568,
                          "end": 574
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 582,
              "end": 622,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 582,
                "end": 594,
                "decorators": [],
                "name": "channel_post",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 595,
                "end": 621,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 597,
                  "end": 621,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 599,
                      "end": 619,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 599,
                        "end": 611,
                        "decorators": [],
                        "name": "channel_post",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 611,
                        "end": 619,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 613,
                          "end": 619
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 627,
              "end": 681,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 627,
                "end": 646,
                "decorators": [],
                "name": "edited_channel_post",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 647,
                "end": 680,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 649,
                  "end": 680,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 651,
                      "end": 678,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 651,
                        "end": 670,
                        "decorators": [],
                        "name": "edited_channel_post",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 670,
                        "end": 678,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 672,
                          "end": 678
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 686,
              "end": 734,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 686,
                "end": 702,
                "decorators": [],
                "name": "message_reaction",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 703,
                "end": 733,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 705,
                  "end": 733,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 707,
                      "end": 731,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 707,
                        "end": 723,
                        "decorators": [],
                        "name": "message_reaction",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 723,
                        "end": 731,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 725,
                          "end": 731
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 739,
              "end": 799,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 739,
                "end": 761,
                "decorators": [],
                "name": "message_reaction_count",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 762,
                "end": 798,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 764,
                  "end": 798,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 766,
                      "end": 796,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 766,
                        "end": 788,
                        "decorators": [],
                        "name": "message_reaction_count",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 788,
                        "end": 796,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 790,
                          "end": 796
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 804,
              "end": 844,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 804,
                "end": 816,
                "decorators": [],
                "name": "inline_query",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 817,
                "end": 843,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 819,
                  "end": 843,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 821,
                      "end": 841,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 821,
                        "end": 833,
                        "decorators": [],
                        "name": "inline_query",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 833,
                        "end": 841,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 835,
                          "end": 841
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 849,
              "end": 905,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 849,
                "end": 869,
                "decorators": [],
                "name": "chosen_inline_result",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 870,
                "end": 904,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 872,
                  "end": 904,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 874,
                      "end": 902,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 874,
                        "end": 894,
                        "decorators": [],
                        "name": "chosen_inline_result",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 894,
                        "end": 902,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 896,
                          "end": 902
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 910,
              "end": 954,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 910,
                "end": 924,
                "decorators": [],
                "name": "callback_query",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 925,
                "end": 953,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 927,
                  "end": 953,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 929,
                      "end": 951,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 929,
                        "end": 943,
                        "decorators": [],
                        "name": "callback_query",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 943,
                        "end": 951,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 945,
                          "end": 951
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 959,
              "end": 1003,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 959,
                "end": 973,
                "decorators": [],
                "name": "shipping_query",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 974,
                "end": 1002,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 976,
                  "end": 1002,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 978,
                      "end": 1000,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 978,
                        "end": 992,
                        "decorators": [],
                        "name": "shipping_query",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 992,
                        "end": 1000,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 994,
                          "end": 1000
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 1008,
              "end": 1060,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1008,
                "end": 1026,
                "decorators": [],
                "name": "pre_checkout_query",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1027,
                "end": 1059,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 1029,
                  "end": 1059,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1031,
                      "end": 1057,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1031,
                        "end": 1049,
                        "decorators": [],
                        "name": "pre_checkout_query",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1049,
                        "end": 1057,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1051,
                          "end": 1057
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 1065,
              "end": 1089,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1065,
                "end": 1069,
                "decorators": [],
                "name": "poll",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1070,
                "end": 1088,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 1072,
                  "end": 1088,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1074,
                      "end": 1086,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1074,
                        "end": 1078,
                        "decorators": [],
                        "name": "poll",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1078,
                        "end": 1086,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1080,
                          "end": 1086
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 1094,
              "end": 1132,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1094,
                "end": 1105,
                "decorators": [],
                "name": "poll_answer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1106,
                "end": 1131,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 1108,
                  "end": 1131,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1110,
                      "end": 1129,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1110,
                        "end": 1121,
                        "decorators": [],
                        "name": "poll_answer",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1121,
                        "end": 1129,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1123,
                          "end": 1129
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 1137,
              "end": 1181,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1137,
                "end": 1151,
                "decorators": [],
                "name": "my_chat_member",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1152,
                "end": 1180,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 1154,
                  "end": 1180,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1156,
                      "end": 1178,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1156,
                        "end": 1170,
                        "decorators": [],
                        "name": "my_chat_member",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1170,
                        "end": 1178,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1172,
                          "end": 1178
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 1186,
              "end": 1224,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1186,
                "end": 1197,
                "decorators": [],
                "name": "chat_member",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1198,
                "end": 1223,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 1200,
                  "end": 1223,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1202,
                      "end": 1221,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1202,
                        "end": 1213,
                        "decorators": [],
                        "name": "chat_member",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1213,
                        "end": 1221,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1215,
                          "end": 1221
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 1229,
              "end": 1279,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1229,
                "end": 1246,
                "decorators": [],
                "name": "chat_join_request",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1247,
                "end": 1278,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 1249,
                  "end": 1278,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1251,
                      "end": 1276,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1251,
                        "end": 1268,
                        "decorators": [],
                        "name": "chat_join_request",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1268,
                        "end": 1276,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1270,
                          "end": 1276
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 1284,
              "end": 1320,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1284,
                "end": 1294,
                "decorators": [],
                "name": "chat_boost",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1295,
                "end": 1319,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 1297,
                  "end": 1319,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1299,
                      "end": 1317,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1299,
                        "end": 1309,
                        "decorators": [],
                        "name": "chat_boost",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1309,
                        "end": 1317,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1311,
                          "end": 1317
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 1325,
              "end": 1377,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1325,
                "end": 1343,
                "decorators": [],
                "name": "removed_chat_boost",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1344,
                "end": 1376,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 1346,
                  "end": 1376,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1348,
                      "end": 1374,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1348,
                        "end": 1366,
                        "decorators": [],
                        "name": "removed_chat_boost",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1366,
                        "end": 1374,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1368,
                          "end": 1374
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1381,
      "end": 1453,
      "id": {
        "type": "Identifier",
        "start": 1386,
        "end": 1400,
        "decorators": [],
        "name": "FilterFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1400,
        "end": 1431,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1401,
            "end": 1417,
            "name": {
              "type": "Identifier",
              "start": 1401,
              "end": 1402,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1411,
              "end": 1417,
              "typeName": {
                "type": "Identifier",
                "start": 1411,
                "end": 1417,
                "decorators": [],
                "name": "Update",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1419,
            "end": 1430,
            "name": {
              "type": "Identifier",
              "start": 1419,
              "end": 1420,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1429,
              "end": 1430,
              "typeName": {
                "type": "Identifier",
                "start": 1429,
                "end": 1430,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 1434,
        "end": 1452,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 1435,
            "end": 1440,
            "decorators": [],
            "name": "up",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1437,
              "end": 1440,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1439,
                "end": 1440,
                "typeName": {
                  "type": "Identifier",
                  "start": 1439,
                  "end": 1440,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1442,
          "end": 1452,
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "start": 1445,
            "end": 1452,
            "parameterName": {
              "type": "Identifier",
              "start": 1445,
              "end": 1447,
              "decorators": [],
              "name": "up",
              "optional": false,
              "typeAnnotation": null
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1451,
              "end": 1452,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1451,
                "end": 1452,
                "typeName": {
                  "type": "Identifier",
                  "start": 1451,
                  "end": 1452,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1455,
      "end": 1687,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 1462,
        "end": 1687,
        "id": {
          "type": "Identifier",
          "start": 1471,
          "end": 1482,
          "decorators": [],
          "name": "matchFilter",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1482,
          "end": 1523,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1483,
              "end": 1499,
              "name": {
                "type": "Identifier",
                "start": 1483,
                "end": 1484,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 1493,
                "end": 1499,
                "typeName": {
                  "type": "Identifier",
                  "start": 1493,
                  "end": 1499,
                  "decorators": [],
                  "name": "Update",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1501,
              "end": 1522,
              "name": {
                "type": "Identifier",
                "start": 1501,
                "end": 1502,
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 1511,
                "end": 1522,
                "typeName": {
                  "type": "Identifier",
                  "start": 1511,
                  "end": 1522,
                  "decorators": [],
                  "name": "FilterQuery",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "params": [
          {
            "type": "Identifier",
            "start": 1529,
            "end": 1544,
            "decorators": [],
            "name": "filter",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1535,
              "end": 1544,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1537,
                "end": 1544,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1537,
                    "end": 1538,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1537,
                      "end": 1538,
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSArrayType",
                    "start": 1541,
                    "end": 1544,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1541,
                      "end": 1542,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1541,
                        "end": 1542,
                        "decorators": [],
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1547,
          "end": 1580,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1549,
            "end": 1580,
            "typeName": {
              "type": "Identifier",
              "start": 1549,
              "end": 1563,
              "decorators": [],
              "name": "FilterFunction",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1563,
              "end": 1580,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1564,
                  "end": 1565,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1564,
                    "end": 1565,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1567,
                  "end": 1579,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1567,
                    "end": 1573,
                    "decorators": [],
                    "name": "Filter",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1573,
                    "end": 1579,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1574,
                        "end": 1575,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1574,
                          "end": 1575,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 1577,
                        "end": 1578,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1577,
                          "end": 1578,
                          "decorators": [],
                          "name": "Q",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 1581,
          "end": 1687,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 1605,
              "end": 1637,
              "expression": {
                "type": "CallExpression",
                "start": 1605,
                "end": 1636,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1605,
                  "end": 1616,
                  "object": {
                    "type": "Identifier",
                    "start": 1605,
                    "end": 1612,
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1613,
                    "end": 1616,
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 1617,
                    "end": 1627,
                    "value": "Matching",
                    "raw": "\"Matching\""
                  },
                  {
                    "type": "Identifier",
                    "start": 1629,
                    "end": 1635,
                    "decorators": [],
                    "name": "filter",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "directive": null
            },
            {
              "type": "ReturnStatement",
              "start": 1642,
              "end": 1685,
              "argument": {
                "type": "ArrowFunctionExpression",
                "start": 1649,
                "end": 1684,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1650,
                    "end": 1655,
                    "decorators": [],
                    "name": "up",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1652,
                      "end": 1655,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1654,
                        "end": 1655,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1654,
                          "end": 1655,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1656,
                  "end": 1676,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 1658,
                    "end": 1676,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 1658,
                      "end": 1660,
                      "decorators": [],
                      "name": "up",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "asserts": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1664,
                      "end": 1676,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1664,
                        "end": 1676,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1664,
                          "end": 1670,
                          "decorators": [],
                          "name": "Filter",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1670,
                          "end": 1676,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1671,
                              "end": 1672,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1671,
                                "end": 1672,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 1674,
                              "end": 1675,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1674,
                                "end": 1675,
                                "decorators": [],
                                "name": "Q",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  }
                },
                "body": {
                  "type": "UnaryExpression",
                  "start": 1680,
                  "end": 1684,
                  "operator": "!",
                  "argument": {
                    "type": "UnaryExpression",
                    "start": 1681,
                    "end": 1684,
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "start": 1682,
                      "end": 1684,
                      "decorators": [],
                      "name": "up",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "prefix": true
                },
                "id": null,
                "generator": false
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1757,
      "end": 1815,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1764,
        "end": 1815,
        "id": {
          "type": "Identifier",
          "start": 1769,
          "end": 1780,
          "decorators": [],
          "name": "FilterQuery",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "start": 1783,
          "end": 1814,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1789,
            "end": 1814,
            "typeName": {
              "type": "Identifier",
              "start": 1789,
              "end": 1793,
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1793,
              "end": 1814,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1794,
                  "end": 1800,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1794,
                    "end": 1800,
                    "decorators": [],
                    "name": "Update",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSLiteralType",
                  "start": 1802,
                  "end": 1813,
                  "literal": {
                    "type": "Literal",
                    "start": 1802,
                    "end": 1813,
                    "value": "update_id",
                    "raw": "\"update_id\""
                  }
                }
              ]
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1877,
      "end": 1978,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1884,
        "end": 1978,
        "id": {
          "type": "Identifier",
          "start": 1889,
          "end": 1895,
          "decorators": [],
          "name": "Filter",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1895,
          "end": 1936,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1896,
              "end": 1912,
              "name": {
                "type": "Identifier",
                "start": 1896,
                "end": 1897,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 1906,
                "end": 1912,
                "typeName": {
                  "type": "Identifier",
                  "start": 1906,
                  "end": 1912,
                  "decorators": [],
                  "name": "Update",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1914,
              "end": 1935,
              "name": {
                "type": "Identifier",
                "start": 1914,
                "end": 1915,
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 1924,
                "end": 1935,
                "typeName": {
                  "type": "Identifier",
                  "start": 1924,
                  "end": 1935,
                  "decorators": [],
                  "name": "FilterQuery",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1939,
          "end": 1977,
          "typeName": {
            "type": "Identifier",
            "start": 1939,
            "end": 1951,
            "decorators": [],
            "name": "PerformQuery",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1951,
            "end": 1977,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1957,
                "end": 1958,
                "typeName": {
                  "type": "Identifier",
                  "start": 1957,
                  "end": 1958,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 1964,
                "end": 1975,
                "typeName": {
                  "type": "Identifier",
                  "start": 1964,
                  "end": 1972,
                  "decorators": [],
                  "name": "RunQuery",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1972,
                  "end": 1975,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1973,
                      "end": 1974,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1973,
                        "end": 1974,
                        "decorators": [],
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2069,
      "end": 2129,
      "id": {
        "type": "Identifier",
        "start": 2074,
        "end": 2082,
        "decorators": [],
        "name": "RunQuery",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2082,
        "end": 2100,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2083,
            "end": 2099,
            "name": {
              "type": "Identifier",
              "start": 2083,
              "end": 2084,
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2093,
              "end": 2099
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2103,
        "end": 2128,
        "typeName": {
          "type": "Identifier",
          "start": 2103,
          "end": 2110,
          "decorators": [],
          "name": "Combine",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2110,
          "end": 2128,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 2111,
              "end": 2124,
              "typeName": {
                "type": "Identifier",
                "start": 2111,
                "end": 2121,
                "decorators": [],
                "name": "L1Fragment",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2121,
                "end": 2124,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2122,
                    "end": 2123,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2122,
                      "end": 2123,
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 2126,
              "end": 2127,
              "typeName": {
                "type": "Identifier",
                "start": 2126,
                "end": 2127,
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2194,
      "end": 2280,
      "id": {
        "type": "Identifier",
        "start": 2199,
        "end": 2209,
        "decorators": [],
        "name": "L1Fragment",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2209,
        "end": 2227,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2210,
            "end": 2226,
            "name": {
              "type": "Identifier",
              "start": 2210,
              "end": 2211,
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2220,
              "end": 2226
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2230,
        "end": 2279,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2230,
          "end": 2231,
          "typeName": {
            "type": "Identifier",
            "start": 2230,
            "end": 2231,
            "decorators": [],
            "name": "Q",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSUnknownKeyword",
          "start": 2240,
          "end": 2247
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 2250,
          "end": 2267,
          "typeName": {
            "type": "Identifier",
            "start": 2250,
            "end": 2256,
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2256,
            "end": 2267,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2257,
                "end": 2258,
                "typeName": {
                  "type": "Identifier",
                  "start": 2257,
                  "end": 2258,
                  "decorators": [],
                  "name": "Q",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSObjectKeyword",
                "start": 2260,
                "end": 2266
              }
            ]
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2274,
          "end": 2279
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2350,
      "end": 2474,
      "id": {
        "type": "Identifier",
        "start": 2355,
        "end": 2362,
        "decorators": [],
        "name": "Combine",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2362,
        "end": 2383,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2363,
            "end": 2364,
            "name": {
              "type": "Identifier",
              "start": 2363,
              "end": 2364,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2366,
            "end": 2382,
            "name": {
              "type": "Identifier",
              "start": 2366,
              "end": 2367,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2376,
              "end": 2382
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2386,
        "end": 2473,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2386,
          "end": 2387,
          "typeName": {
            "type": "Identifier",
            "start": 2386,
            "end": 2387,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSUnknownKeyword",
          "start": 2396,
          "end": 2403
        },
        "trueType": {
          "type": "TSIntersectionType",
          "start": 2410,
          "end": 2461,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 2410,
              "end": 2411,
              "typeName": {
                "type": "Identifier",
                "start": 2410,
                "end": 2411,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 2414,
              "end": 2461,
              "typeName": {
                "type": "Identifier",
                "start": 2414,
                "end": 2421,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2421,
                "end": 2461,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2422,
                    "end": 2460,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2422,
                      "end": 2428,
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2428,
                      "end": 2460,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 2429,
                          "end": 2448,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2429,
                            "end": 2436,
                            "decorators": [],
                            "name": "Exclude",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2436,
                            "end": 2448,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2437,
                                "end": 2438,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2437,
                                  "end": 2438,
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeOperator",
                                "start": 2440,
                                "end": 2447,
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 2446,
                                  "end": 2447,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2446,
                                    "end": 2447,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            ]
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 2450,
                          "end": 2459
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2468,
          "end": 2473
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2593,
      "end": 2714,
      "id": {
        "type": "Identifier",
        "start": 2598,
        "end": 2610,
        "decorators": [],
        "name": "PerformQuery",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2610,
        "end": 2646,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2611,
            "end": 2627,
            "name": {
              "type": "Identifier",
              "start": 2611,
              "end": 2612,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2621,
              "end": 2627,
              "typeName": {
                "type": "Identifier",
                "start": 2621,
                "end": 2627,
                "decorators": [],
                "name": "Update",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2629,
            "end": 2645,
            "name": {
              "type": "Identifier",
              "start": 2629,
              "end": 2630,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 2639,
              "end": 2645
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2649,
        "end": 2713,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2649,
          "end": 2650,
          "typeName": {
            "type": "Identifier",
            "start": 2649,
            "end": 2650,
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSUnknownKeyword",
          "start": 2659,
          "end": 2666
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 2673,
          "end": 2701,
          "typeName": {
            "type": "Identifier",
            "start": 2673,
            "end": 2686,
            "decorators": [],
            "name": "FilteredEvent",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2686,
            "end": 2701,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2687,
                "end": 2688,
                "typeName": {
                  "type": "Identifier",
                  "start": 2687,
                  "end": 2688,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSIntersectionType",
                "start": 2690,
                "end": 2700,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2690,
                    "end": 2696,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2690,
                      "end": 2696,
                      "decorators": [],
                      "name": "Update",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2699,
                    "end": 2700,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2699,
                      "end": 2700,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            ]
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2708,
          "end": 2713
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2784,
      "end": 2876,
      "id": {
        "type": "Identifier",
        "start": 2789,
        "end": 2802,
        "decorators": [],
        "name": "FilteredEvent",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2802,
        "end": 2838,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2803,
            "end": 2819,
            "name": {
              "type": "Identifier",
              "start": 2803,
              "end": 2804,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2813,
              "end": 2819,
              "typeName": {
                "type": "Identifier",
                "start": 2813,
                "end": 2819,
                "decorators": [],
                "name": "Update",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2821,
            "end": 2837,
            "name": {
              "type": "Identifier",
              "start": 2821,
              "end": 2822,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2831,
              "end": 2837,
              "typeName": {
                "type": "Identifier",
                "start": 2831,
                "end": 2837,
                "decorators": [],
                "name": "Update",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 2845,
        "end": 2875,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 2847,
            "end": 2848,
            "typeName": {
              "type": "Identifier",
              "start": 2847,
              "end": 2848,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 2855,
            "end": 2875,
            "typeName": {
              "type": "Identifier",
              "start": 2855,
              "end": 2859,
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2859,
              "end": 2875,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2860,
                  "end": 2861,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2860,
                    "end": 2861,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSLiteralType",
                  "start": 2863,
                  "end": 2874,
                  "literal": {
                    "type": "Literal",
                    "start": 2863,
                    "end": 2874,
                    "value": "update_id",
                    "raw": "\"update_id\""
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2878,
      "end": 2953,
      "id": {
        "type": "Identifier",
        "start": 2883,
        "end": 2893,
        "decorators": [],
        "name": "Middleware",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2893,
        "end": 2911,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2894,
            "end": 2910,
            "name": {
              "type": "Identifier",
              "start": 2894,
              "end": 2895,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2904,
              "end": 2910,
              "typeName": {
                "type": "Identifier",
                "start": 2904,
                "end": 2910,
                "decorators": [],
                "name": "Update",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 2914,
        "end": 2952,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 2915,
            "end": 2921,
            "decorators": [],
            "name": "ctx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2918,
              "end": 2921,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2920,
                "end": 2921,
                "typeName": {
                  "type": "Identifier",
                  "start": 2920,
                  "end": 2921,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 2923,
          "end": 2952,
          "typeAnnotation": {
            "type": "TSUnionType",
            "start": 2926,
            "end": 2952,
            "types": [
              {
                "type": "TSUnknownKeyword",
                "start": 2926,
                "end": 2933
              },
              {
                "type": "TSTypeReference",
                "start": 2936,
                "end": 2952,
                "typeName": {
                  "type": "Identifier",
                  "start": 2936,
                  "end": 2943,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2943,
                  "end": 2952,
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 2944,
                      "end": 2951
                    }
                  ]
                }
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 2954,
      "end": 3458,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2960,
        "end": 2968,
        "decorators": [],
        "name": "EventHub",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2968,
        "end": 2986,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2969,
            "end": 2985,
            "name": {
              "type": "Identifier",
              "start": 2969,
              "end": 2970,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2979,
              "end": 2985,
              "typeName": {
                "type": "Identifier",
                "start": 2979,
                "end": 2985,
                "decorators": [],
                "name": "Update",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2987,
        "end": 3458,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2993,
            "end": 3145,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2993,
              "end": 2996,
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2996,
              "end": 3145,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 2997,
                  "end": 3032,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 3000,
                    "end": 3010,
                    "decorators": [],
                    "name": "middleware",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3010,
                    "end": 3032,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3012,
                      "end": 3032,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3012,
                        "end": 3017,
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 3017,
                        "end": 3032,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 3018,
                            "end": 3031,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3018,
                              "end": 3028,
                              "decorators": [],
                              "name": "Middleware",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 3028,
                              "end": 3031,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 3029,
                                  "end": 3030,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3029,
                                    "end": 3030,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3033,
                "end": 3046,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3035,
                  "end": 3046,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3035,
                    "end": 3043,
                    "decorators": [],
                    "name": "EventHub",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3043,
                    "end": 3046,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3044,
                        "end": 3045,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3044,
                          "end": 3045,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 3047,
                "end": 3145,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3057,
                    "end": 3118,
                    "expression": {
                      "type": "CallExpression",
                      "start": 3057,
                      "end": 3117,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3057,
                        "end": 3068,
                        "object": {
                          "type": "Identifier",
                          "start": 3057,
                          "end": 3064,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3065,
                          "end": 3068,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 3069,
                          "end": 3077,
                          "value": "Adding",
                          "raw": "\"Adding\""
                        },
                        {
                          "type": "MemberExpression",
                          "start": 3079,
                          "end": 3096,
                          "object": {
                            "type": "Identifier",
                            "start": 3079,
                            "end": 3089,
                            "decorators": [],
                            "name": "middleware",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3090,
                            "end": 3096,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        {
                          "type": "Literal",
                          "start": 3098,
                          "end": 3116,
                          "value": "generic handlers",
                          "raw": "\"generic handlers\""
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 3127,
                    "end": 3139,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 3134,
                      "end": 3138
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 3150,
            "end": 3456,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3150,
              "end": 3152,
              "decorators": [],
              "name": "on",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 3152,
              "end": 3456,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3152,
                "end": 3175,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3153,
                    "end": 3174,
                    "name": {
                      "type": "Identifier",
                      "start": 3153,
                      "end": 3154,
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 3163,
                      "end": 3174,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3163,
                        "end": 3174,
                        "decorators": [],
                        "name": "FilterQuery",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 3185,
                  "end": 3200,
                  "decorators": [],
                  "name": "filter",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3191,
                    "end": 3200,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 3193,
                      "end": 3200,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 3193,
                          "end": 3194,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3193,
                            "end": 3194,
                            "decorators": [],
                            "name": "Q",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSArrayType",
                          "start": 3197,
                          "end": 3200,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 3197,
                            "end": 3198,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3197,
                              "end": 3198,
                              "decorators": [],
                              "name": "Q",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 3210,
                  "end": 3256,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 3213,
                    "end": 3223,
                    "decorators": [],
                    "name": "middleware",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3223,
                    "end": 3256,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3225,
                      "end": 3256,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3225,
                        "end": 3230,
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 3230,
                        "end": 3256,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 3231,
                            "end": 3255,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3231,
                              "end": 3241,
                              "decorators": [],
                              "name": "Middleware",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 3241,
                              "end": 3255,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 3242,
                                  "end": 3254,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3242,
                                    "end": 3248,
                                    "decorators": [],
                                    "name": "Filter",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 3248,
                                    "end": 3254,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 3249,
                                        "end": 3250,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3249,
                                          "end": 3250,
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 3252,
                                        "end": 3253,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3252,
                                          "end": 3253,
                                          "decorators": [],
                                          "name": "Q",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3305,
                "end": 3329,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3307,
                  "end": 3329,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3307,
                    "end": 3315,
                    "decorators": [],
                    "name": "EventHub",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3315,
                    "end": 3329,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3316,
                        "end": 3328,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3316,
                          "end": 3322,
                          "decorators": [],
                          "name": "Filter",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3322,
                          "end": 3328,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3323,
                              "end": 3324,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3323,
                                "end": 3324,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 3326,
                              "end": 3327,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3326,
                                "end": 3327,
                                "decorators": [],
                                "name": "Q",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 3330,
                "end": 3456,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3340,
                    "end": 3405,
                    "expression": {
                      "type": "CallExpression",
                      "start": 3340,
                      "end": 3404,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3340,
                        "end": 3351,
                        "object": {
                          "type": "Identifier",
                          "start": 3340,
                          "end": 3347,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3348,
                          "end": 3351,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 3352,
                          "end": 3360,
                          "value": "Adding",
                          "raw": "\"Adding\""
                        },
                        {
                          "type": "MemberExpression",
                          "start": 3362,
                          "end": 3379,
                          "object": {
                            "type": "Identifier",
                            "start": 3362,
                            "end": 3372,
                            "decorators": [],
                            "name": "middleware",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3373,
                            "end": 3379,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        {
                          "type": "Literal",
                          "start": 3381,
                          "end": 3395,
                          "value": "handlers for",
                          "raw": "\"handlers for\""
                        },
                        {
                          "type": "Identifier",
                          "start": 3397,
                          "end": 3403,
                          "decorators": [],
                          "name": "filter",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 3414,
                    "end": 3450,
                    "argument": {
                      "type": "NewExpression",
                      "start": 3421,
                      "end": 3449,
                      "callee": {
                        "type": "Identifier",
                        "start": 3425,
                        "end": 3433,
                        "decorators": [],
                        "name": "EventHub",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 3433,
                        "end": 3447,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 3434,
                            "end": 3446,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3434,
                              "end": 3440,
                              "decorators": [],
                              "name": "Filter",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 3440,
                              "end": 3446,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 3441,
                                  "end": 3442,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3441,
                                    "end": 3442,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 3444,
                                  "end": 3445,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3444,
                                    "end": 3445,
                                    "decorators": [],
                                    "name": "Q",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "arguments": []
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
