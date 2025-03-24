__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3144,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 27,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 14,
        "end": 26,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 24,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 21,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 24,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 23,
                "end": 24,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 11,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 10,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 28,
      "end": 77,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 41,
        "decorators": [],
        "name": "Boxified",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 47,
        "end": 76,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 55,
          "end": 62,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 61,
            "end": 62,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 50,
          "end": 51,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 65,
          "end": 74,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 68,
            "end": 74,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 69,
                "end": 73,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 71,
                  "end": 72,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 72,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 69,
                  "end": 70,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 70,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 65,
            "end": 68,
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 41,
        "end": 44,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 42,
            "end": 43,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 79,
      "end": 132,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 87,
        "decorators": [],
        "name": "T00",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 90,
        "end": 131,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 98,
          "end": 131,
          "params": [
            {
              "type": "TSTupleType",
              "start": 99,
              "end": 130,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 100,
                  "end": 106
                },
                {
                  "type": "TSOptionalType",
                  "start": 108,
                  "end": 115,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 108,
                    "end": 114
                  }
                },
                {
                  "type": "TSRestType",
                  "start": 117,
                  "end": 129,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 120,
                    "end": 129,
                    "elementType": {
                      "type": "TSBooleanKeyword",
                      "start": 120,
                      "end": 127
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 90,
          "end": 98,
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 133,
      "end": 185,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 141,
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 144,
        "end": 184,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 151,
          "end": 184,
          "params": [
            {
              "type": "TSTupleType",
              "start": 152,
              "end": 183,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 153,
                  "end": 159
                },
                {
                  "type": "TSOptionalType",
                  "start": 161,
                  "end": 168,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 161,
                    "end": 167
                  }
                },
                {
                  "type": "TSRestType",
                  "start": 170,
                  "end": 182,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 173,
                    "end": 182,
                    "elementType": {
                      "type": "TSBooleanKeyword",
                      "start": 173,
                      "end": 180
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 144,
          "end": 151,
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 186,
      "end": 239,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 194,
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 197,
        "end": 238,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 205,
          "end": 238,
          "params": [
            {
              "type": "TSTupleType",
              "start": 206,
              "end": 237,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 207,
                  "end": 213
                },
                {
                  "type": "TSOptionalType",
                  "start": 215,
                  "end": 222,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 215,
                    "end": 221
                  }
                },
                {
                  "type": "TSRestType",
                  "start": 224,
                  "end": 236,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 227,
                    "end": 236,
                    "elementType": {
                      "type": "TSBooleanKeyword",
                      "start": 227,
                      "end": 234
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 197,
          "end": 205,
          "decorators": [],
          "name": "Required",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 241,
      "end": 271,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 249,
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 252,
        "end": 270,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 260,
          "end": 270,
          "params": [
            {
              "type": "TSArrayType",
              "start": 261,
              "end": 269,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 261,
                "end": 267
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 252,
          "end": 260,
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 272,
      "end": 301,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 277,
        "end": 280,
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 283,
        "end": 300,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 290,
          "end": 300,
          "params": [
            {
              "type": "TSArrayType",
              "start": 291,
              "end": 299,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 291,
                "end": 297
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 283,
          "end": 290,
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 302,
      "end": 332,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 307,
        "end": 310,
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 313,
        "end": 331,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 321,
          "end": 331,
          "params": [
            {
              "type": "TSArrayType",
              "start": 322,
              "end": 330,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 322,
                "end": 328
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 313,
          "end": 321,
          "decorators": [],
          "name": "Required",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 333,
      "end": 376,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 338,
        "end": 341,
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 344,
        "end": 375,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 352,
          "end": 375,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 353,
              "end": 374,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 366,
                "end": 374,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 367,
                    "end": 373
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 353,
                "end": 366,
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 344,
          "end": 352,
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 377,
      "end": 419,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 382,
        "end": 385,
        "decorators": [],
        "name": "T14",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 388,
        "end": 418,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 395,
          "end": 418,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 396,
              "end": 417,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 409,
                "end": 417,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 410,
                    "end": 416
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 396,
                "end": 409,
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 388,
          "end": 395,
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 420,
      "end": 463,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 425,
        "end": 428,
        "decorators": [],
        "name": "T15",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 431,
        "end": 462,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 439,
          "end": 462,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 440,
              "end": 461,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 453,
                "end": 461,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 454,
                    "end": 460
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 440,
                "end": 453,
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 431,
          "end": 439,
          "decorators": [],
          "name": "Required",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 465,
      "end": 509,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 470,
        "end": 473,
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 476,
        "end": 508,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 484,
          "end": 508,
          "params": [
            {
              "type": "TSArrayType",
              "start": 485,
              "end": 507,
              "elementType": {
                "type": "TSUnionType",
                "start": 486,
                "end": 504,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 486,
                    "end": 492
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 495,
                    "end": 504
                  }
                ]
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 476,
          "end": 484,
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 510,
      "end": 553,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 515,
        "end": 518,
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 521,
        "end": 552,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 528,
          "end": 552,
          "params": [
            {
              "type": "TSArrayType",
              "start": 529,
              "end": 551,
              "elementType": {
                "type": "TSUnionType",
                "start": 530,
                "end": 548,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 530,
                    "end": 536
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 539,
                    "end": 548
                  }
                ]
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 521,
          "end": 528,
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 554,
      "end": 598,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 559,
        "end": 562,
        "decorators": [],
        "name": "T22",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 565,
        "end": 597,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 573,
          "end": 597,
          "params": [
            {
              "type": "TSArrayType",
              "start": 574,
              "end": 596,
              "elementType": {
                "type": "TSUnionType",
                "start": 575,
                "end": 593,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 575,
                    "end": 581
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 584,
                    "end": 593
                  }
                ]
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 565,
          "end": 573,
          "decorators": [],
          "name": "Required",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 599,
      "end": 654,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 604,
        "end": 607,
        "decorators": [],
        "name": "T23",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 610,
        "end": 653,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 618,
          "end": 653,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 619,
              "end": 652,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 632,
                "end": 652,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 633,
                    "end": 651,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 633,
                        "end": 639
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 642,
                        "end": 651
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 619,
                "end": 632,
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 610,
          "end": 618,
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 655,
      "end": 709,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 660,
        "end": 663,
        "decorators": [],
        "name": "T24",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 666,
        "end": 708,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 673,
          "end": 708,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 674,
              "end": 707,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 687,
                "end": 707,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 688,
                    "end": 706,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 688,
                        "end": 694
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 697,
                        "end": 706
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 674,
                "end": 687,
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 666,
          "end": 673,
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 710,
      "end": 765,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 715,
        "end": 718,
        "decorators": [],
        "name": "T25",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 721,
        "end": 764,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 729,
          "end": 764,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 730,
              "end": 763,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 743,
                "end": 763,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 744,
                    "end": 762,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 744,
                        "end": 750
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 753,
                        "end": 762
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 730,
                "end": 743,
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 721,
          "end": 729,
          "decorators": [],
          "name": "Required",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 767,
      "end": 806,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 772,
        "end": 775,
        "decorators": [],
        "name": "T30",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 778,
        "end": 805,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 786,
          "end": 805,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 787,
              "end": 804,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 794,
                "end": 804,
                "params": [
                  {
                    "type": "TSArrayType",
                    "start": 795,
                    "end": 803,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 795,
                      "end": 801
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 787,
                "end": 794,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 778,
          "end": 786,
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 807,
      "end": 846,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 812,
        "end": 815,
        "decorators": [],
        "name": "T31",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 818,
        "end": 845,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 825,
          "end": 845,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 826,
              "end": 844,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 834,
                "end": 844,
                "params": [
                  {
                    "type": "TSArrayType",
                    "start": 835,
                    "end": 843,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 835,
                      "end": 841
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 826,
                "end": 834,
                "decorators": [],
                "name": "Boxified",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 818,
          "end": 825,
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 848,
      "end": 871,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 853,
        "end": 854,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 857,
        "end": 870,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 859,
            "end": 868,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 859,
              "end": 860,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 860,
              "end": 868,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 862,
                "end": 868
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 872,
      "end": 895,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 877,
        "end": 878,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 881,
        "end": 894,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 883,
            "end": 892,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 883,
              "end": 884,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 884,
              "end": 892,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 886,
                "end": 892
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 897,
      "end": 974,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 902,
        "end": 905,
        "decorators": [],
        "name": "T40",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 908,
        "end": 973,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 916,
          "end": 973,
          "params": [
            {
              "type": "TSUnionType",
              "start": 917,
              "end": 972,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 917,
                  "end": 918,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 917,
                    "end": 918,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSArrayType",
                  "start": 921,
                  "end": 924,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 921,
                    "end": 922,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 921,
                      "end": 922,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 927,
                  "end": 943,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 940,
                    "end": 943,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 941,
                        "end": 942,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 941,
                          "end": 942,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 927,
                    "end": 940,
                    "decorators": [],
                    "name": "ReadonlyArray",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTupleType",
                  "start": 946,
                  "end": 952,
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "start": 947,
                      "end": 948,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 947,
                        "end": 948,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 950,
                      "end": 951,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 950,
                        "end": 951,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                {
                  "type": "TSStringKeyword",
                  "start": 955,
                  "end": 961
                },
                {
                  "type": "TSArrayType",
                  "start": 964,
                  "end": 972,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 964,
                    "end": 970
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 908,
          "end": 916,
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 976,
      "end": 1032,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 981,
        "end": 990,
        "decorators": [],
        "name": "ReadWrite",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 996,
        "end": 1031,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1014,
          "end": 1021,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1020,
            "end": 1021,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1020,
              "end": 1021,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1009,
          "end": 1010,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": "-",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 1025,
          "end": 1029,
          "indexType": {
            "type": "TSTypeReference",
            "start": 1027,
            "end": 1028,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1027,
              "end": 1028,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 1025,
            "end": 1026,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1025,
              "end": 1026,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 990,
        "end": 993,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 991,
            "end": 992,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 991,
              "end": 992,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1034,
      "end": 1064,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1039,
        "end": 1042,
        "decorators": [],
        "name": "T50",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1045,
        "end": 1063,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1053,
          "end": 1063,
          "params": [
            {
              "type": "TSArrayType",
              "start": 1054,
              "end": 1062,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1054,
                "end": 1060
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1045,
          "end": 1053,
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1065,
      "end": 1103,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1070,
        "end": 1073,
        "decorators": [],
        "name": "T51",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1076,
        "end": 1102,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1084,
          "end": 1102,
          "params": [
            {
              "type": "TSTupleType",
              "start": 1085,
              "end": 1101,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1086,
                  "end": 1092
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1094,
                  "end": 1100
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1076,
          "end": 1084,
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1104,
      "end": 1143,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1109,
        "end": 1112,
        "decorators": [],
        "name": "T52",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1115,
        "end": 1142,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1122,
          "end": 1142,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1123,
              "end": 1141,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1131,
                "end": 1141,
                "params": [
                  {
                    "type": "TSArrayType",
                    "start": 1132,
                    "end": 1140,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1132,
                      "end": 1138
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1123,
                "end": 1131,
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1115,
          "end": 1122,
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1144,
      "end": 1183,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1149,
        "end": 1152,
        "decorators": [],
        "name": "T53",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1155,
        "end": 1182,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1163,
          "end": 1182,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1164,
              "end": 1181,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1171,
                "end": 1181,
                "params": [
                  {
                    "type": "TSArrayType",
                    "start": 1172,
                    "end": 1180,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1172,
                      "end": 1178
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1164,
                "end": 1171,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1155,
          "end": 1163,
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1184,
      "end": 1220,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1189,
        "end": 1192,
        "decorators": [],
        "name": "T54",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1195,
        "end": 1219,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1204,
          "end": 1219,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1205,
              "end": 1218,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1213,
                "end": 1218,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1214,
                    "end": 1217,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1214,
                      "end": 1217,
                      "decorators": [],
                      "name": "T53",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1205,
                "end": 1213,
                "decorators": [],
                "name": "Required",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1195,
          "end": 1204,
          "decorators": [],
          "name": "ReadWrite",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1222,
      "end": 1270,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1239,
        "end": 1247,
        "decorators": [],
        "name": "unboxify",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1251,
          "end": 1265,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1252,
            "end": 1265,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1254,
              "end": 1265,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1262,
                "end": 1265,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1263,
                    "end": 1264,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1263,
                      "end": 1264,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1254,
                "end": 1262,
                "decorators": [],
                "name": "Boxified",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1266,
        "end": 1269,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1268,
          "end": 1269,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1268,
            "end": 1269,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1247,
        "end": 1250,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1248,
            "end": 1249,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1248,
              "end": 1249,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1272,
      "end": 1335,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1284,
          "end": 1334,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1284,
            "end": 1334,
            "decorators": [],
            "name": "x10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1287,
              "end": 1334,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 1289,
                "end": 1334,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 1290,
                    "end": 1301,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1293,
                      "end": 1301,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1294,
                          "end": 1300
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1290,
                      "end": 1293,
                      "decorators": [],
                      "name": "Box",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1303,
                    "end": 1314,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1306,
                      "end": 1314,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1307,
                          "end": 1313
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1303,
                      "end": 1306,
                      "decorators": [],
                      "name": "Box",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSRestType",
                    "start": 1316,
                    "end": 1333,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1319,
                      "end": 1333,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 1319,
                        "end": 1331,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1322,
                          "end": 1331,
                          "params": [
                            {
                              "type": "TSBooleanKeyword",
                              "start": 1323,
                              "end": 1330
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 1319,
                          "end": 1322,
                          "decorators": [],
                          "name": "Box",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1336,
      "end": 1360,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1340,
          "end": 1359,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1340,
            "end": 1343,
            "decorators": [],
            "name": "y10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1346,
            "end": 1359,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1355,
                "end": 1358,
                "decorators": [],
                "name": "x10",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1346,
              "end": 1354,
              "decorators": [],
              "name": "unboxify",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1362,
      "end": 1393,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1374,
          "end": 1392,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1374,
            "end": 1392,
            "decorators": [],
            "name": "x11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1377,
              "end": 1392,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1379,
                "end": 1392,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 1379,
                  "end": 1390,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1382,
                    "end": 1390,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 1383,
                        "end": 1389
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1379,
                    "end": 1382,
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1394,
      "end": 1418,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1398,
          "end": 1417,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1398,
            "end": 1401,
            "decorators": [],
            "name": "y11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1404,
            "end": 1417,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1413,
                "end": 1416,
                "decorators": [],
                "name": "x11",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1404,
              "end": 1412,
              "decorators": [],
              "name": "unboxify",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1420,
      "end": 1474,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1432,
          "end": 1473,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1432,
            "end": 1473,
            "decorators": [],
            "name": "x12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1435,
              "end": 1473,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1437,
                "end": 1473,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1439,
                    "end": 1454,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1439,
                      "end": 1440,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1440,
                      "end": 1453,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1442,
                        "end": 1453,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1445,
                          "end": 1453,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1446,
                              "end": 1452
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 1442,
                          "end": 1445,
                          "decorators": [],
                          "name": "Box",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1455,
                    "end": 1471,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1455,
                      "end": 1456,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1456,
                      "end": 1471,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1458,
                        "end": 1471,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1461,
                          "end": 1471,
                          "params": [
                            {
                              "type": "TSArrayType",
                              "start": 1462,
                              "end": 1470,
                              "elementType": {
                                "type": "TSStringKeyword",
                                "start": 1462,
                                "end": 1468
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 1458,
                          "end": 1461,
                          "decorators": [],
                          "name": "Box",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1475,
      "end": 1499,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1479,
          "end": 1498,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1479,
            "end": 1482,
            "decorators": [],
            "name": "y12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1485,
            "end": 1498,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1494,
                "end": 1497,
                "decorators": [],
                "name": "x12",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1485,
              "end": 1493,
              "decorators": [],
              "name": "unboxify",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSDeclareFunction",
      "start": 1501,
      "end": 1550,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1518,
        "end": 1528,
        "decorators": [],
        "name": "nonpartial",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1532,
          "end": 1545,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1533,
            "end": 1545,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1535,
              "end": 1545,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1542,
                "end": 1545,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1543,
                    "end": 1544,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1543,
                      "end": 1544,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1535,
                "end": 1542,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1546,
        "end": 1549,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1548,
          "end": 1549,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1548,
            "end": 1549,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1528,
        "end": 1531,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1529,
            "end": 1530,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1529,
              "end": 1530,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1552,
      "end": 1613,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1564,
          "end": 1612,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1564,
            "end": 1612,
            "decorators": [],
            "name": "x20",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1567,
              "end": 1612,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 1569,
                "end": 1612,
                "elementTypes": [
                  {
                    "type": "TSUnionType",
                    "start": 1570,
                    "end": 1588,
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 1570,
                        "end": 1576
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1579,
                        "end": 1588
                      }
                    ]
                  },
                  {
                    "type": "TSOptionalType",
                    "start": 1590,
                    "end": 1597,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1590,
                      "end": 1596
                    }
                  },
                  {
                    "type": "TSRestType",
                    "start": 1599,
                    "end": 1611,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1602,
                      "end": 1611,
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 1602,
                        "end": 1609
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1614,
      "end": 1640,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1618,
          "end": 1639,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1618,
            "end": 1621,
            "decorators": [],
            "name": "y20",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1624,
            "end": 1639,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1635,
                "end": 1638,
                "decorators": [],
                "name": "x20",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1624,
              "end": 1634,
              "decorators": [],
              "name": "nonpartial",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1642,
      "end": 1682,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1654,
          "end": 1681,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1654,
            "end": 1681,
            "decorators": [],
            "name": "x21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1657,
              "end": 1681,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1659,
                "end": 1681,
                "elementType": {
                  "type": "TSUnionType",
                  "start": 1660,
                  "end": 1678,
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1660,
                      "end": 1666
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 1669,
                      "end": 1678
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1683,
      "end": 1709,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1687,
          "end": 1708,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1687,
            "end": 1690,
            "decorators": [],
            "name": "y21",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1693,
            "end": 1708,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1704,
                "end": 1707,
                "decorators": [],
                "name": "x21",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1693,
              "end": 1703,
              "decorators": [],
              "name": "nonpartial",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1711,
      "end": 1768,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1723,
          "end": 1767,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1723,
            "end": 1767,
            "decorators": [],
            "name": "x22",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1726,
              "end": 1767,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1728,
                "end": 1767,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1730,
                    "end": 1752,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1730,
                      "end": 1731,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1731,
                      "end": 1751,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 1733,
                        "end": 1751,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1733,
                            "end": 1739
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 1742,
                            "end": 1751
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1753,
                    "end": 1765,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1753,
                      "end": 1754,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1755,
                      "end": 1765,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1757,
                        "end": 1765,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1757,
                          "end": 1763
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 1769,
      "end": 1795,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1773,
          "end": 1794,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1773,
            "end": 1776,
            "decorators": [],
            "name": "y22",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1779,
            "end": 1794,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1790,
                "end": 1793,
                "decorators": [],
                "name": "x22",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1779,
              "end": 1789,
              "decorators": [],
              "name": "nonpartial",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1797,
      "end": 1856,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1802,
        "end": 1811,
        "decorators": [],
        "name": "__Awaited",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1817,
        "end": 1855,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1817,
          "end": 1818,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1817,
            "end": 1818,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 1827,
          "end": 1847,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1838,
            "end": 1847,
            "params": [
              {
                "type": "TSInferType",
                "start": 1839,
                "end": 1846,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 1845,
                  "end": 1846,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1845,
                    "end": 1846,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1827,
            "end": 1838,
            "decorators": [],
            "name": "PromiseLike",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 1854,
          "end": 1855,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1854,
            "end": 1855,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 1850,
          "end": 1851,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1850,
            "end": 1851,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1811,
        "end": 1814,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1812,
            "end": 1813,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1812,
              "end": 1813,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1857,
      "end": 1914,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1862,
        "end": 1872,
        "decorators": [],
        "name": "Awaitified",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1878,
        "end": 1913,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1886,
          "end": 1893,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1892,
            "end": 1893,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1892,
              "end": 1893,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1881,
          "end": 1882,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1896,
          "end": 1911,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1905,
            "end": 1911,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1906,
                "end": 1910,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1908,
                  "end": 1909,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1908,
                    "end": 1909,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1906,
                  "end": 1907,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1906,
                    "end": 1907,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1896,
            "end": 1905,
            "decorators": [],
            "name": "__Awaited",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1872,
        "end": 1875,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1873,
            "end": 1874,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1873,
              "end": 1874,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1916,
      "end": 1992,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1933,
        "end": 1936,
        "decorators": [],
        "name": "all",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 1954,
          "end": 1966,
          "argument": {
            "type": "Identifier",
            "start": 1957,
            "end": 1963,
            "decorators": [],
            "name": "values",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1963,
            "end": 1966,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1965,
              "end": 1966,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1965,
                "end": 1966,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1967,
        "end": 1991,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1969,
          "end": 1991,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1976,
            "end": 1991,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1977,
                "end": 1990,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1987,
                  "end": 1990,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1988,
                      "end": 1989,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1988,
                        "end": 1989,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1977,
                  "end": 1987,
                  "decorators": [],
                  "name": "Awaitified",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1969,
            "end": 1976,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1936,
        "end": 1953,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1937,
            "end": 1952,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 1947,
              "end": 1952,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1947,
                "end": 1950
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1937,
              "end": 1938,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1994,
      "end": 2177,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2072,
        "end": 2177,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2078,
            "end": 2094,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2082,
                "end": 2093,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2082,
                  "end": 2084,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2087,
                  "end": 2093,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2091,
                      "end": 2092,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 2087,
                    "end": 2090,
                    "decorators": [],
                    "name": "all",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 2099,
            "end": 2118,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2103,
                "end": 2117,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2103,
                  "end": 2105,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2108,
                  "end": 2117,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2112,
                      "end": 2113,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2115,
                      "end": 2116,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 2108,
                    "end": 2111,
                    "decorators": [],
                    "name": "all",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 2123,
            "end": 2145,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2127,
                "end": 2144,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2127,
                  "end": 2129,
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2132,
                  "end": 2144,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2136,
                      "end": 2137,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2139,
                      "end": 2140,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2142,
                      "end": 2143,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 2132,
                    "end": 2135,
                    "decorators": [],
                    "name": "all",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 2150,
            "end": 2175,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2154,
                "end": 2174,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2154,
                  "end": 2156,
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2159,
                  "end": 2174,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2163,
                      "end": 2164,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2166,
                      "end": 2167,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2169,
                      "end": 2170,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2172,
                      "end": 2173,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 2159,
                    "end": 2162,
                    "decorators": [],
                    "name": "all",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2003,
        "end": 2005,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2006,
          "end": 2015,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2007,
            "end": 2015,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2009,
              "end": 2015
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2017,
          "end": 2035,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2018,
            "end": 2035,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2020,
              "end": 2035,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2027,
                "end": 2035,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2028,
                    "end": 2034
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2020,
                "end": 2027,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2037,
          "end": 2048,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2038,
            "end": 2048,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 2040,
              "end": 2048,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 2040,
                "end": 2046
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2050,
          "end": 2070,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2051,
            "end": 2070,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2053,
              "end": 2070,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2060,
                "end": 2070,
                "params": [
                  {
                    "type": "TSArrayType",
                    "start": 2061,
                    "end": 2069,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 2061,
                      "end": 2067
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2053,
                "end": 2060,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2179,
      "end": 2307,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2224,
        "end": 2307,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2230,
            "end": 2268,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2234,
                "end": 2267,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2234,
                  "end": 2257,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2235,
                    "end": 2257,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2237,
                      "end": 2257,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 2237,
                          "end": 2245,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2240,
                            "end": 2245,
                            "params": [
                              {
                                "type": "TSAnyKeyword",
                                "start": 2241,
                                "end": 2244
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 2237,
                            "end": 2240,
                            "decorators": [],
                            "name": "Box",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 2248,
                          "end": 2257
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2260,
                  "end": 2267,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2260,
                    "end": 2265,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2260,
                      "end": 2261,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2262,
                      "end": 2265,
                      "decorators": [],
                      "name": "pop",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 2273,
            "end": 2305,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2277,
                "end": 2304,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2277,
                  "end": 2290,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2278,
                    "end": 2290,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2280,
                      "end": 2290,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 2280,
                        "end": 2288,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2283,
                          "end": 2288,
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 2284,
                              "end": 2287
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 2280,
                          "end": 2283,
                          "decorators": [],
                          "name": "Box",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2293,
                  "end": 2304,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2302,
                      "end": 2303,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2293,
                    "end": 2301,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2293,
                      "end": 2294,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2295,
                      "end": 2301,
                      "decorators": [],
                      "name": "concat",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2188,
        "end": 2190,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2208,
          "end": 2222,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2209,
            "end": 2222,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2211,
              "end": 2222,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2219,
                "end": 2222,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2220,
                    "end": 2221,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2220,
                      "end": 2221,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2211,
                "end": 2219,
                "decorators": [],
                "name": "Boxified",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2190,
        "end": 2207,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2191,
            "end": 2206,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 2201,
              "end": 2206,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 2201,
                "end": 2204
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2191,
              "end": 2192,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2331,
      "end": 2390,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2336,
        "end": 2347,
        "decorators": [],
        "name": "ElementType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2353,
        "end": 2389,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2353,
          "end": 2354,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 2353,
            "end": 2354,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 2363,
          "end": 2377,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2368,
            "end": 2377,
            "params": [
              {
                "type": "TSInferType",
                "start": 2369,
                "end": 2376,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 2375,
                  "end": 2376,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2375,
                    "end": 2376,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2363,
            "end": 2368,
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2384,
          "end": 2389
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 2380,
          "end": 2381,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 2380,
            "end": 2381,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2347,
        "end": 2350,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2348,
            "end": 2349,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2348,
              "end": 2349,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2391,
      "end": 2433,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2396,
        "end": 2402,
        "decorators": [],
        "name": "Mapped",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 2408,
        "end": 2432,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 2416,
          "end": 2423,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2422,
            "end": 2423,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 2422,
              "end": 2423,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 2411,
          "end": 2412,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 2426,
          "end": 2430,
          "indexType": {
            "type": "TSTypeReference",
            "start": 2428,
            "end": 2429,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 2428,
              "end": 2429,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 2426,
            "end": 2427,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 2426,
              "end": 2427,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2402,
        "end": 2405,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2403,
            "end": 2404,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2403,
              "end": 2404,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2435,
      "end": 2470,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2440,
        "end": 2441,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2447,
        "end": 2469,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2458,
          "end": 2469,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 2459,
              "end": 2468,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2465,
                "end": 2468,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2466,
                    "end": 2467,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2466,
                      "end": 2467,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2459,
                "end": 2465,
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2447,
          "end": 2458,
          "decorators": [],
          "name": "ElementType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2441,
        "end": 2444,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2442,
            "end": 2443,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2442,
              "end": 2443,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2471,
      "end": 2510,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2476,
        "end": 2478,
        "decorators": [],
        "name": "R1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2481,
        "end": 2509,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2482,
          "end": 2509,
          "params": [
            {
              "type": "TSTupleType",
              "start": 2483,
              "end": 2508,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 2484,
                  "end": 2490
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 2492,
                  "end": 2498
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 2500,
                  "end": 2507
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2481,
          "end": 2482,
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2541,
      "end": 2598,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2546,
        "end": 2548,
        "decorators": [],
        "name": "R2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2551,
        "end": 2597,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2562,
          "end": 2597,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 2563,
              "end": 2596,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2569,
                "end": 2596,
                "params": [
                  {
                    "type": "TSTupleType",
                    "start": 2570,
                    "end": 2595,
                    "elementTypes": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2571,
                        "end": 2577
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 2579,
                        "end": 2585
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 2587,
                        "end": 2594
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2563,
                "end": 2569,
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2551,
          "end": 2562,
          "decorators": [],
          "name": "ElementType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2652,
      "end": 2699,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2669,
        "end": 2680,
        "decorators": [],
        "name": "acceptArray",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2681,
          "end": 2691,
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2684,
            "end": 2691,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 2686,
              "end": 2691,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 2686,
                "end": 2689
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2692,
        "end": 2698,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2694,
          "end": 2698
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2700,
      "end": 2762,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2717,
        "end": 2725,
        "decorators": [],
        "name": "mapArray",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2743,
          "end": 2749,
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2746,
            "end": 2749,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2748,
              "end": 2749,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2748,
                "end": 2749,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2750,
        "end": 2761,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2752,
          "end": 2761,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2758,
            "end": 2761,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2759,
                "end": 2760,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2759,
                  "end": 2760,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2752,
            "end": 2758,
            "decorators": [],
            "name": "Mapped",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2725,
        "end": 2742,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2726,
            "end": 2741,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 2736,
              "end": 2741,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 2736,
                "end": 2739
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2726,
              "end": 2727,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2763,
      "end": 2850,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2815,
        "end": 2850,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2821,
            "end": 2848,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2821,
              "end": 2847,
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 2833,
                  "end": 2846,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2842,
                      "end": 2845,
                      "decorators": [],
                      "name": "arr",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 2833,
                    "end": 2841,
                    "decorators": [],
                    "name": "mapArray",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 2821,
                "end": 2832,
                "decorators": [],
                "name": "acceptArray",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2772,
        "end": 2789,
        "decorators": [],
        "name": "acceptMappedArray",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2807,
          "end": 2813,
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2810,
            "end": 2813,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2812,
              "end": 2813,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2812,
                "end": 2813,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2789,
        "end": 2806,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2790,
            "end": 2805,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 2800,
              "end": 2805,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 2800,
                "end": 2803
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2790,
              "end": 2791,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2874,
      "end": 2921,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2879,
        "end": 2892,
        "decorators": [],
        "name": "Unconstrained",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2898,
        "end": 2920,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2909,
          "end": 2920,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 2910,
              "end": 2919,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2916,
                "end": 2919,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2917,
                    "end": 2918,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2917,
                      "end": 2918,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2910,
                "end": 2916,
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2898,
          "end": 2909,
          "decorators": [],
          "name": "ElementType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2892,
        "end": 2895,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2893,
            "end": 2894,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2893,
              "end": 2894,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2922,
      "end": 2973,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2927,
        "end": 2929,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2932,
        "end": 2972,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2945,
          "end": 2972,
          "params": [
            {
              "type": "TSTupleType",
              "start": 2946,
              "end": 2971,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 2947,
                  "end": 2953
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 2955,
                  "end": 2961
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 2963,
                  "end": 2970
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2932,
          "end": 2945,
          "decorators": [],
          "name": "Unconstrained",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3005,
      "end": 3064,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3010,
        "end": 3021,
        "decorators": [],
        "name": "Constrained",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3041,
        "end": 3063,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3052,
          "end": 3063,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 3053,
              "end": 3062,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3059,
                "end": 3062,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3060,
                    "end": 3061,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3060,
                      "end": 3061,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3053,
                "end": 3059,
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 3041,
          "end": 3052,
          "decorators": [],
          "name": "ElementType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3021,
        "end": 3038,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3022,
            "end": 3037,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 3032,
              "end": 3037,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 3032,
                "end": 3035
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3022,
              "end": 3023,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3065,
      "end": 3114,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3070,
        "end": 3072,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3075,
        "end": 3113,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3086,
          "end": 3113,
          "params": [
            {
              "type": "TSTupleType",
              "start": 3087,
              "end": 3112,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 3088,
                  "end": 3094
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 3096,
                  "end": 3102
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 3104,
                  "end": 3111
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 3075,
          "end": 3086,
          "decorators": [],
          "name": "Constrained",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
