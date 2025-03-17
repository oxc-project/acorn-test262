__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 1130,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 11,
      "end": 133,
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 26,
        "name": "BuildTuple",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 26,
        "end": 69,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 43,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "name": "L",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 37,
              "end": 43
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 45,
            "end": 68,
            "name": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 55,
              "end": 60,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 55,
                "end": 58
              }
            },
            "default": {
              "type": "TSTupleType",
              "start": 63,
              "end": 68,
              "elementTypes": [
                {
                  "type": "TSAnyKeyword",
                  "start": 64,
                  "end": 67
                }
              ]
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 77,
        "end": 132,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 77,
          "end": 88,
          "objectType": {
            "type": "TSTypeReference",
            "start": 77,
            "end": 78,
            "typeName": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSLiteralType",
            "start": 79,
            "end": 87,
            "literal": {
              "type": "Literal",
              "start": 79,
              "end": 87,
              "value": "length",
              "raw": "'length'"
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 97,
          "end": 98,
          "typeName": {
            "type": "Identifier",
            "start": 97,
            "end": 98,
            "name": "L",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 101,
          "end": 102,
          "typeName": {
            "type": "Identifier",
            "start": 101,
            "end": 102,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 105,
          "end": 132,
          "typeName": {
            "type": "Identifier",
            "start": 105,
            "end": 115,
            "name": "BuildTuple",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 115,
            "end": 132,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 116,
                "end": 117,
                "typeName": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
                  "name": "L",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTupleType",
                "start": 119,
                "end": 131,
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "start": 120,
                    "end": 124,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 123,
                      "end": 124,
                      "typeName": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 124,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSRestType",
                    "start": 126,
                    "end": 130,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 129,
                      "end": 130,
                      "typeName": {
                        "type": "Identifier",
                        "start": 129,
                        "end": 130,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 135,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 141,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 144,
        "end": 157,
        "typeName": {
          "type": "Identifier",
          "start": 144,
          "end": 154,
          "name": "BuildTuple",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 154,
          "end": 157,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 155,
              "end": 156,
              "literal": {
                "type": "Literal",
                "start": 155,
                "end": 156,
                "value": 3,
                "raw": "3"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 159,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 166,
        "name": "T0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 169,
        "end": 174,
        "elementTypes": [
          {
            "type": "TSAnyKeyword",
            "start": 170,
            "end": 173
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 176,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 181,
        "end": 183,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 186,
        "end": 200,
        "elementTypes": [
          {
            "type": "TSRestType",
            "start": 187,
            "end": 192,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 190,
              "end": 192,
              "typeName": {
                "type": "Identifier",
                "start": 190,
                "end": 192,
                "name": "T0",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSRestType",
            "start": 194,
            "end": 199,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 197,
              "end": 199,
              "typeName": {
                "type": "Identifier",
                "start": 197,
                "end": 199,
                "name": "T0",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 202,
      "end": 227,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 209,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 212,
        "end": 226,
        "elementTypes": [
          {
            "type": "TSRestType",
            "start": 213,
            "end": 218,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 216,
              "end": 218,
              "typeName": {
                "type": "Identifier",
                "start": 216,
                "end": 218,
                "name": "T1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSRestType",
            "start": 220,
            "end": 225,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 223,
              "end": 225,
              "typeName": {
                "type": "Identifier",
                "start": 223,
                "end": 225,
                "name": "T1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 228,
      "end": 253,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 235,
        "name": "T3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 238,
        "end": 252,
        "elementTypes": [
          {
            "type": "TSRestType",
            "start": 239,
            "end": 244,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 242,
              "end": 244,
              "typeName": {
                "type": "Identifier",
                "start": 242,
                "end": 244,
                "name": "T2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSRestType",
            "start": 246,
            "end": 251,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 249,
              "end": 251,
              "typeName": {
                "type": "Identifier",
                "start": 249,
                "end": 251,
                "name": "T2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 254,
      "end": 279,
      "id": {
        "type": "Identifier",
        "start": 259,
        "end": 261,
        "name": "T4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 264,
        "end": 278,
        "elementTypes": [
          {
            "type": "TSRestType",
            "start": 265,
            "end": 270,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 268,
              "end": 270,
              "typeName": {
                "type": "Identifier",
                "start": 268,
                "end": 270,
                "name": "T3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSRestType",
            "start": 272,
            "end": 277,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 275,
              "end": 277,
              "typeName": {
                "type": "Identifier",
                "start": 275,
                "end": 277,
                "name": "T3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 280,
      "end": 305,
      "id": {
        "type": "Identifier",
        "start": 285,
        "end": 287,
        "name": "T5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 290,
        "end": 304,
        "elementTypes": [
          {
            "type": "TSRestType",
            "start": 291,
            "end": 296,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 294,
              "end": 296,
              "typeName": {
                "type": "Identifier",
                "start": 294,
                "end": 296,
                "name": "T4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSRestType",
            "start": 298,
            "end": 303,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 301,
              "end": 303,
              "typeName": {
                "type": "Identifier",
                "start": 301,
                "end": 303,
                "name": "T4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 306,
      "end": 331,
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 313,
        "name": "T6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 316,
        "end": 330,
        "elementTypes": [
          {
            "type": "TSRestType",
            "start": 317,
            "end": 322,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 320,
              "end": 322,
              "typeName": {
                "type": "Identifier",
                "start": 320,
                "end": 322,
                "name": "T5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSRestType",
            "start": 324,
            "end": 329,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 327,
              "end": 329,
              "typeName": {
                "type": "Identifier",
                "start": 327,
                "end": 329,
                "name": "T5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 332,
      "end": 357,
      "id": {
        "type": "Identifier",
        "start": 337,
        "end": 339,
        "name": "T7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 342,
        "end": 356,
        "elementTypes": [
          {
            "type": "TSRestType",
            "start": 343,
            "end": 348,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 346,
              "end": 348,
              "typeName": {
                "type": "Identifier",
                "start": 346,
                "end": 348,
                "name": "T6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSRestType",
            "start": 350,
            "end": 355,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 353,
              "end": 355,
              "typeName": {
                "type": "Identifier",
                "start": 353,
                "end": 355,
                "name": "T6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 358,
      "end": 383,
      "id": {
        "type": "Identifier",
        "start": 363,
        "end": 365,
        "name": "T8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 368,
        "end": 382,
        "elementTypes": [
          {
            "type": "TSRestType",
            "start": 369,
            "end": 374,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 372,
              "end": 374,
              "typeName": {
                "type": "Identifier",
                "start": 372,
                "end": 374,
                "name": "T7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSRestType",
            "start": 376,
            "end": 381,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 379,
              "end": 381,
              "typeName": {
                "type": "Identifier",
                "start": 379,
                "end": 381,
                "name": "T7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 384,
      "end": 409,
      "id": {
        "type": "Identifier",
        "start": 389,
        "end": 391,
        "name": "T9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 394,
        "end": 408,
        "elementTypes": [
          {
            "type": "TSRestType",
            "start": 395,
            "end": 400,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 398,
              "end": 400,
              "typeName": {
                "type": "Identifier",
                "start": 398,
                "end": 400,
                "name": "T8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSRestType",
            "start": 402,
            "end": 407,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 405,
              "end": 407,
              "typeName": {
                "type": "Identifier",
                "start": 405,
                "end": 407,
                "name": "T8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 410,
      "end": 436,
      "id": {
        "type": "Identifier",
        "start": 415,
        "end": 418,
        "name": "T10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 421,
        "end": 435,
        "elementTypes": [
          {
            "type": "TSRestType",
            "start": 422,
            "end": 427,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 425,
              "end": 427,
              "typeName": {
                "type": "Identifier",
                "start": 425,
                "end": 427,
                "name": "T9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSRestType",
            "start": 429,
            "end": 434,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 432,
              "end": 434,
              "typeName": {
                "type": "Identifier",
                "start": 432,
                "end": 434,
                "name": "T9",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 437,
      "end": 465,
      "id": {
        "type": "Identifier",
        "start": 442,
        "end": 445,
        "name": "T11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 448,
        "end": 464,
        "elementTypes": [
          {
            "type": "TSRestType",
            "start": 449,
            "end": 455,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 452,
              "end": 455,
              "typeName": {
                "type": "Identifier",
                "start": 452,
                "end": 455,
                "name": "T10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSRestType",
            "start": 457,
            "end": 463,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 460,
              "end": 463,
              "typeName": {
                "type": "Identifier",
                "start": 460,
                "end": 463,
                "name": "T10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 466,
      "end": 494,
      "id": {
        "type": "Identifier",
        "start": 471,
        "end": 474,
        "name": "T12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 477,
        "end": 493,
        "elementTypes": [
          {
            "type": "TSRestType",
            "start": 478,
            "end": 484,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 481,
              "end": 484,
              "typeName": {
                "type": "Identifier",
                "start": 481,
                "end": 484,
                "name": "T11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSRestType",
            "start": 486,
            "end": 492,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 489,
              "end": 492,
              "typeName": {
                "type": "Identifier",
                "start": 489,
                "end": 492,
                "name": "T11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 495,
      "end": 523,
      "id": {
        "type": "Identifier",
        "start": 500,
        "end": 503,
        "name": "T13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 506,
        "end": 522,
        "elementTypes": [
          {
            "type": "TSRestType",
            "start": 507,
            "end": 513,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 510,
              "end": 513,
              "typeName": {
                "type": "Identifier",
                "start": 510,
                "end": 513,
                "name": "T12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSRestType",
            "start": 515,
            "end": 521,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 518,
              "end": 521,
              "typeName": {
                "type": "Identifier",
                "start": 518,
                "end": 521,
                "name": "T12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 524,
      "end": 552,
      "id": {
        "type": "Identifier",
        "start": 529,
        "end": 532,
        "name": "T14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 535,
        "end": 551,
        "elementTypes": [
          {
            "type": "TSRestType",
            "start": 536,
            "end": 542,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 539,
              "end": 542,
              "typeName": {
                "type": "Identifier",
                "start": 539,
                "end": 542,
                "name": "T13",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSRestType",
            "start": 544,
            "end": 550,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 547,
              "end": 550,
              "typeName": {
                "type": "Identifier",
                "start": 547,
                "end": 550,
                "name": "T13",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 571,
      "end": 595,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 577,
          "end": 594,
          "id": {
            "type": "Identifier",
            "start": 577,
            "end": 579,
            "name": "a0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 582,
            "end": 594,
            "expression": {
              "type": "ArrayExpression",
              "start": 582,
              "end": 585,
              "elements": [
                {
                  "type": "Literal",
                  "start": 583,
                  "end": 584,
                  "value": 0,
                  "raw": "0"
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 589,
              "end": 594,
              "typeName": {
                "type": "Identifier",
                "start": 589,
                "end": 594,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 596,
      "end": 631,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 602,
          "end": 630,
          "id": {
            "type": "Identifier",
            "start": 602,
            "end": 604,
            "name": "a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 607,
            "end": 630,
            "expression": {
              "type": "ArrayExpression",
              "start": 607,
              "end": 621,
              "elements": [
                {
                  "type": "SpreadElement",
                  "start": 608,
                  "end": 613,
                  "argument": {
                    "type": "Identifier",
                    "start": 611,
                    "end": 613,
                    "name": "a0",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 615,
                  "end": 620,
                  "argument": {
                    "type": "Identifier",
                    "start": 618,
                    "end": 620,
                    "name": "a0",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 625,
              "end": 630,
              "typeName": {
                "type": "Identifier",
                "start": 625,
                "end": 630,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 632,
      "end": 667,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 638,
          "end": 666,
          "id": {
            "type": "Identifier",
            "start": 638,
            "end": 640,
            "name": "a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 643,
            "end": 666,
            "expression": {
              "type": "ArrayExpression",
              "start": 643,
              "end": 657,
              "elements": [
                {
                  "type": "SpreadElement",
                  "start": 644,
                  "end": 649,
                  "argument": {
                    "type": "Identifier",
                    "start": 647,
                    "end": 649,
                    "name": "a1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 651,
                  "end": 656,
                  "argument": {
                    "type": "Identifier",
                    "start": 654,
                    "end": 656,
                    "name": "a1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 661,
              "end": 666,
              "typeName": {
                "type": "Identifier",
                "start": 661,
                "end": 666,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 668,
      "end": 703,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 674,
          "end": 702,
          "id": {
            "type": "Identifier",
            "start": 674,
            "end": 676,
            "name": "a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 679,
            "end": 702,
            "expression": {
              "type": "ArrayExpression",
              "start": 679,
              "end": 693,
              "elements": [
                {
                  "type": "SpreadElement",
                  "start": 680,
                  "end": 685,
                  "argument": {
                    "type": "Identifier",
                    "start": 683,
                    "end": 685,
                    "name": "a2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 687,
                  "end": 692,
                  "argument": {
                    "type": "Identifier",
                    "start": 690,
                    "end": 692,
                    "name": "a2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 697,
              "end": 702,
              "typeName": {
                "type": "Identifier",
                "start": 697,
                "end": 702,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 704,
      "end": 739,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 710,
          "end": 738,
          "id": {
            "type": "Identifier",
            "start": 710,
            "end": 712,
            "name": "a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 715,
            "end": 738,
            "expression": {
              "type": "ArrayExpression",
              "start": 715,
              "end": 729,
              "elements": [
                {
                  "type": "SpreadElement",
                  "start": 716,
                  "end": 721,
                  "argument": {
                    "type": "Identifier",
                    "start": 719,
                    "end": 721,
                    "name": "a3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 723,
                  "end": 728,
                  "argument": {
                    "type": "Identifier",
                    "start": 726,
                    "end": 728,
                    "name": "a3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 733,
              "end": 738,
              "typeName": {
                "type": "Identifier",
                "start": 733,
                "end": 738,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 740,
      "end": 775,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 746,
          "end": 774,
          "id": {
            "type": "Identifier",
            "start": 746,
            "end": 748,
            "name": "a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 751,
            "end": 774,
            "expression": {
              "type": "ArrayExpression",
              "start": 751,
              "end": 765,
              "elements": [
                {
                  "type": "SpreadElement",
                  "start": 752,
                  "end": 757,
                  "argument": {
                    "type": "Identifier",
                    "start": 755,
                    "end": 757,
                    "name": "a4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 759,
                  "end": 764,
                  "argument": {
                    "type": "Identifier",
                    "start": 762,
                    "end": 764,
                    "name": "a4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 769,
              "end": 774,
              "typeName": {
                "type": "Identifier",
                "start": 769,
                "end": 774,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 776,
      "end": 811,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 782,
          "end": 810,
          "id": {
            "type": "Identifier",
            "start": 782,
            "end": 784,
            "name": "a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 787,
            "end": 810,
            "expression": {
              "type": "ArrayExpression",
              "start": 787,
              "end": 801,
              "elements": [
                {
                  "type": "SpreadElement",
                  "start": 788,
                  "end": 793,
                  "argument": {
                    "type": "Identifier",
                    "start": 791,
                    "end": 793,
                    "name": "a5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 795,
                  "end": 800,
                  "argument": {
                    "type": "Identifier",
                    "start": 798,
                    "end": 800,
                    "name": "a5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 805,
              "end": 810,
              "typeName": {
                "type": "Identifier",
                "start": 805,
                "end": 810,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 812,
      "end": 847,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 818,
          "end": 846,
          "id": {
            "type": "Identifier",
            "start": 818,
            "end": 820,
            "name": "a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 823,
            "end": 846,
            "expression": {
              "type": "ArrayExpression",
              "start": 823,
              "end": 837,
              "elements": [
                {
                  "type": "SpreadElement",
                  "start": 824,
                  "end": 829,
                  "argument": {
                    "type": "Identifier",
                    "start": 827,
                    "end": 829,
                    "name": "a6",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 831,
                  "end": 836,
                  "argument": {
                    "type": "Identifier",
                    "start": 834,
                    "end": 836,
                    "name": "a6",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 841,
              "end": 846,
              "typeName": {
                "type": "Identifier",
                "start": 841,
                "end": 846,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 848,
      "end": 883,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 854,
          "end": 882,
          "id": {
            "type": "Identifier",
            "start": 854,
            "end": 856,
            "name": "a8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 859,
            "end": 882,
            "expression": {
              "type": "ArrayExpression",
              "start": 859,
              "end": 873,
              "elements": [
                {
                  "type": "SpreadElement",
                  "start": 860,
                  "end": 865,
                  "argument": {
                    "type": "Identifier",
                    "start": 863,
                    "end": 865,
                    "name": "a7",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 867,
                  "end": 872,
                  "argument": {
                    "type": "Identifier",
                    "start": 870,
                    "end": 872,
                    "name": "a7",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 877,
              "end": 882,
              "typeName": {
                "type": "Identifier",
                "start": 877,
                "end": 882,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 884,
      "end": 919,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 890,
          "end": 918,
          "id": {
            "type": "Identifier",
            "start": 890,
            "end": 892,
            "name": "a9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 895,
            "end": 918,
            "expression": {
              "type": "ArrayExpression",
              "start": 895,
              "end": 909,
              "elements": [
                {
                  "type": "SpreadElement",
                  "start": 896,
                  "end": 901,
                  "argument": {
                    "type": "Identifier",
                    "start": 899,
                    "end": 901,
                    "name": "a8",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 903,
                  "end": 908,
                  "argument": {
                    "type": "Identifier",
                    "start": 906,
                    "end": 908,
                    "name": "a8",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 913,
              "end": 918,
              "typeName": {
                "type": "Identifier",
                "start": 913,
                "end": 918,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 920,
      "end": 956,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 926,
          "end": 955,
          "id": {
            "type": "Identifier",
            "start": 926,
            "end": 929,
            "name": "a10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 932,
            "end": 955,
            "expression": {
              "type": "ArrayExpression",
              "start": 932,
              "end": 946,
              "elements": [
                {
                  "type": "SpreadElement",
                  "start": 933,
                  "end": 938,
                  "argument": {
                    "type": "Identifier",
                    "start": 936,
                    "end": 938,
                    "name": "a9",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 940,
                  "end": 945,
                  "argument": {
                    "type": "Identifier",
                    "start": 943,
                    "end": 945,
                    "name": "a9",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 950,
              "end": 955,
              "typeName": {
                "type": "Identifier",
                "start": 950,
                "end": 955,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 957,
      "end": 995,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 963,
          "end": 994,
          "id": {
            "type": "Identifier",
            "start": 963,
            "end": 966,
            "name": "a11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 969,
            "end": 994,
            "expression": {
              "type": "ArrayExpression",
              "start": 969,
              "end": 985,
              "elements": [
                {
                  "type": "SpreadElement",
                  "start": 970,
                  "end": 976,
                  "argument": {
                    "type": "Identifier",
                    "start": 973,
                    "end": 976,
                    "name": "a10",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 978,
                  "end": 984,
                  "argument": {
                    "type": "Identifier",
                    "start": 981,
                    "end": 984,
                    "name": "a10",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 989,
              "end": 994,
              "typeName": {
                "type": "Identifier",
                "start": 989,
                "end": 994,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 996,
      "end": 1034,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1002,
          "end": 1033,
          "id": {
            "type": "Identifier",
            "start": 1002,
            "end": 1005,
            "name": "a12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1008,
            "end": 1033,
            "expression": {
              "type": "ArrayExpression",
              "start": 1008,
              "end": 1024,
              "elements": [
                {
                  "type": "SpreadElement",
                  "start": 1009,
                  "end": 1015,
                  "argument": {
                    "type": "Identifier",
                    "start": 1012,
                    "end": 1015,
                    "name": "a11",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 1017,
                  "end": 1023,
                  "argument": {
                    "type": "Identifier",
                    "start": 1020,
                    "end": 1023,
                    "name": "a11",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1028,
              "end": 1033,
              "typeName": {
                "type": "Identifier",
                "start": 1028,
                "end": 1033,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1035,
      "end": 1073,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1041,
          "end": 1072,
          "id": {
            "type": "Identifier",
            "start": 1041,
            "end": 1044,
            "name": "a13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1047,
            "end": 1072,
            "expression": {
              "type": "ArrayExpression",
              "start": 1047,
              "end": 1063,
              "elements": [
                {
                  "type": "SpreadElement",
                  "start": 1048,
                  "end": 1054,
                  "argument": {
                    "type": "Identifier",
                    "start": 1051,
                    "end": 1054,
                    "name": "a12",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 1056,
                  "end": 1062,
                  "argument": {
                    "type": "Identifier",
                    "start": 1059,
                    "end": 1062,
                    "name": "a12",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1067,
              "end": 1072,
              "typeName": {
                "type": "Identifier",
                "start": 1067,
                "end": 1072,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1074,
      "end": 1112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1080,
          "end": 1111,
          "id": {
            "type": "Identifier",
            "start": 1080,
            "end": 1083,
            "name": "a14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 1086,
            "end": 1111,
            "expression": {
              "type": "ArrayExpression",
              "start": 1086,
              "end": 1102,
              "elements": [
                {
                  "type": "SpreadElement",
                  "start": 1087,
                  "end": 1093,
                  "argument": {
                    "type": "Identifier",
                    "start": 1090,
                    "end": 1093,
                    "name": "a13",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 1095,
                  "end": 1101,
                  "argument": {
                    "type": "Identifier",
                    "start": 1098,
                    "end": 1101,
                    "name": "a13",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1106,
              "end": 1111,
              "typeName": {
                "type": "Identifier",
                "start": 1106,
                "end": 1111,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
