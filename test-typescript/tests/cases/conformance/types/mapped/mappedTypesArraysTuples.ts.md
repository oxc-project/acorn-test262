__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3145,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "Box",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 21,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 24,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 23,
                "end": 24,
                "typeName": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 28,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 41,
        "name": "Boxified",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 47,
        "end": 76,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 50,
          "end": 62,
          "name": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 55,
            "end": 62,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 61,
              "end": 62,
              "typeName": {
                "type": "Identifier",
                "start": 61,
                "end": 62,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 65,
          "end": 74,
          "typeName": {
            "type": "Identifier",
            "start": 65,
            "end": 68,
            "name": "Box",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 68,
            "end": 74,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 69,
                "end": 73,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 69,
                  "end": 70,
                  "typeName": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 70,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 71,
                  "end": 72,
                  "typeName": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 72,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 55,
          "end": 62,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 61,
            "end": 62,
            "typeName": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 50,
          "end": 51,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 79,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 87,
        "name": "T00",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 90,
        "end": 131,
        "typeName": {
          "type": "Identifier",
          "start": 90,
          "end": 98,
          "name": "Boxified",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 133,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 141,
        "name": "T01",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 144,
        "end": 184,
        "typeName": {
          "type": "Identifier",
          "start": 144,
          "end": 151,
          "name": "Partial",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 186,
      "end": 239,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 194,
        "name": "T02",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 197,
        "end": 238,
        "typeName": {
          "type": "Identifier",
          "start": 197,
          "end": 205,
          "name": "Required",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 241,
      "end": 271,
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 249,
        "name": "T10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 252,
        "end": 270,
        "typeName": {
          "type": "Identifier",
          "start": 252,
          "end": 260,
          "name": "Boxified",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 272,
      "end": 301,
      "id": {
        "type": "Identifier",
        "start": 277,
        "end": 280,
        "name": "T11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 283,
        "end": 300,
        "typeName": {
          "type": "Identifier",
          "start": 283,
          "end": 290,
          "name": "Partial",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 302,
      "end": 332,
      "id": {
        "type": "Identifier",
        "start": 307,
        "end": 310,
        "name": "T12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 313,
        "end": 331,
        "typeName": {
          "type": "Identifier",
          "start": 313,
          "end": 321,
          "name": "Required",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 333,
      "end": 376,
      "id": {
        "type": "Identifier",
        "start": 338,
        "end": 341,
        "name": "T13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 344,
        "end": 375,
        "typeName": {
          "type": "Identifier",
          "start": 344,
          "end": 352,
          "name": "Boxified",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 352,
          "end": 375,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 353,
              "end": 374,
              "typeName": {
                "type": "Identifier",
                "start": 353,
                "end": 366,
                "name": "ReadonlyArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 377,
      "end": 419,
      "id": {
        "type": "Identifier",
        "start": 382,
        "end": 385,
        "name": "T14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 388,
        "end": 418,
        "typeName": {
          "type": "Identifier",
          "start": 388,
          "end": 395,
          "name": "Partial",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 395,
          "end": 418,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 396,
              "end": 417,
              "typeName": {
                "type": "Identifier",
                "start": 396,
                "end": 409,
                "name": "ReadonlyArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 420,
      "end": 463,
      "id": {
        "type": "Identifier",
        "start": 425,
        "end": 428,
        "name": "T15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 431,
        "end": 462,
        "typeName": {
          "type": "Identifier",
          "start": 431,
          "end": 439,
          "name": "Required",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 439,
          "end": 462,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 440,
              "end": 461,
              "typeName": {
                "type": "Identifier",
                "start": 440,
                "end": 453,
                "name": "ReadonlyArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 465,
      "end": 509,
      "id": {
        "type": "Identifier",
        "start": 470,
        "end": 473,
        "name": "T20",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 476,
        "end": 508,
        "typeName": {
          "type": "Identifier",
          "start": 476,
          "end": 484,
          "name": "Boxified",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 510,
      "end": 553,
      "id": {
        "type": "Identifier",
        "start": 515,
        "end": 518,
        "name": "T21",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 521,
        "end": 552,
        "typeName": {
          "type": "Identifier",
          "start": 521,
          "end": 528,
          "name": "Partial",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 554,
      "end": 598,
      "id": {
        "type": "Identifier",
        "start": 559,
        "end": 562,
        "name": "T22",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 565,
        "end": 597,
        "typeName": {
          "type": "Identifier",
          "start": 565,
          "end": 573,
          "name": "Required",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 599,
      "end": 654,
      "id": {
        "type": "Identifier",
        "start": 604,
        "end": 607,
        "name": "T23",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 610,
        "end": 653,
        "typeName": {
          "type": "Identifier",
          "start": 610,
          "end": 618,
          "name": "Boxified",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 618,
          "end": 653,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 619,
              "end": 652,
              "typeName": {
                "type": "Identifier",
                "start": 619,
                "end": 632,
                "name": "ReadonlyArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 655,
      "end": 709,
      "id": {
        "type": "Identifier",
        "start": 660,
        "end": 663,
        "name": "T24",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 666,
        "end": 708,
        "typeName": {
          "type": "Identifier",
          "start": 666,
          "end": 673,
          "name": "Partial",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 673,
          "end": 708,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 674,
              "end": 707,
              "typeName": {
                "type": "Identifier",
                "start": 674,
                "end": 687,
                "name": "ReadonlyArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 710,
      "end": 765,
      "id": {
        "type": "Identifier",
        "start": 715,
        "end": 718,
        "name": "T25",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 721,
        "end": 764,
        "typeName": {
          "type": "Identifier",
          "start": 721,
          "end": 729,
          "name": "Required",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 729,
          "end": 764,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 730,
              "end": 763,
              "typeName": {
                "type": "Identifier",
                "start": 730,
                "end": 743,
                "name": "ReadonlyArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 767,
      "end": 806,
      "id": {
        "type": "Identifier",
        "start": 772,
        "end": 775,
        "name": "T30",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 778,
        "end": 805,
        "typeName": {
          "type": "Identifier",
          "start": 778,
          "end": 786,
          "name": "Boxified",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 786,
          "end": 805,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 787,
              "end": 804,
              "typeName": {
                "type": "Identifier",
                "start": 787,
                "end": 794,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 807,
      "end": 846,
      "id": {
        "type": "Identifier",
        "start": 812,
        "end": 815,
        "name": "T31",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 818,
        "end": 845,
        "typeName": {
          "type": "Identifier",
          "start": 818,
          "end": 825,
          "name": "Partial",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 825,
          "end": 845,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 826,
              "end": 844,
              "typeName": {
                "type": "Identifier",
                "start": 826,
                "end": 834,
                "name": "Boxified",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 848,
      "end": 871,
      "id": {
        "type": "Identifier",
        "start": 853,
        "end": 854,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 857,
        "end": 870,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 859,
            "end": 868,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 859,
              "end": 860,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 860,
              "end": 868,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 862,
                "end": 868
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 872,
      "end": 895,
      "id": {
        "type": "Identifier",
        "start": 877,
        "end": 878,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 881,
        "end": 894,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 883,
            "end": 892,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 883,
              "end": 884,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 884,
              "end": 892,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 886,
                "end": 892
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 897,
      "end": 974,
      "id": {
        "type": "Identifier",
        "start": 902,
        "end": 905,
        "name": "T40",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 908,
        "end": 973,
        "typeName": {
          "type": "Identifier",
          "start": 908,
          "end": 916,
          "name": "Boxified",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 917,
                    "end": 918,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSArrayType",
                  "start": 921,
                  "end": 924,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 921,
                    "end": 922,
                    "typeName": {
                      "type": "Identifier",
                      "start": 921,
                      "end": 922,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 927,
                  "end": 943,
                  "typeName": {
                    "type": "Identifier",
                    "start": 927,
                    "end": 940,
                    "name": "ReadonlyArray",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 940,
                    "end": 943,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 941,
                        "end": 942,
                        "typeName": {
                          "type": "Identifier",
                          "start": 941,
                          "end": 942,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 947,
                        "end": 948,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 950,
                      "end": 951,
                      "typeName": {
                        "type": "Identifier",
                        "start": 950,
                        "end": 951,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 976,
      "end": 1032,
      "id": {
        "type": "Identifier",
        "start": 981,
        "end": 990,
        "name": "ReadWrite",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 991,
              "end": 992,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 996,
        "end": 1031,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 1009,
          "end": 1021,
          "name": {
            "type": "Identifier",
            "start": 1009,
            "end": 1010,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1014,
            "end": 1021,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1020,
              "end": 1021,
              "typeName": {
                "type": "Identifier",
                "start": 1020,
                "end": 1021,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 1025,
          "end": 1029,
          "objectType": {
            "type": "TSTypeReference",
            "start": 1025,
            "end": 1026,
            "typeName": {
              "type": "Identifier",
              "start": 1025,
              "end": 1026,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 1027,
            "end": 1028,
            "typeName": {
              "type": "Identifier",
              "start": 1027,
              "end": 1028,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": "-",
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1014,
          "end": 1021,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1020,
            "end": 1021,
            "typeName": {
              "type": "Identifier",
              "start": 1020,
              "end": 1021,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1009,
          "end": 1010,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1034,
      "end": 1064,
      "id": {
        "type": "Identifier",
        "start": 1039,
        "end": 1042,
        "name": "T50",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1045,
        "end": 1063,
        "typeName": {
          "type": "Identifier",
          "start": 1045,
          "end": 1053,
          "name": "Readonly",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1065,
      "end": 1103,
      "id": {
        "type": "Identifier",
        "start": 1070,
        "end": 1073,
        "name": "T51",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1076,
        "end": 1102,
        "typeName": {
          "type": "Identifier",
          "start": 1076,
          "end": 1084,
          "name": "Readonly",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1104,
      "end": 1143,
      "id": {
        "type": "Identifier",
        "start": 1109,
        "end": 1112,
        "name": "T52",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1115,
        "end": 1142,
        "typeName": {
          "type": "Identifier",
          "start": 1115,
          "end": 1122,
          "name": "Partial",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1122,
          "end": 1142,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1123,
              "end": 1141,
              "typeName": {
                "type": "Identifier",
                "start": 1123,
                "end": 1131,
                "name": "Readonly",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1144,
      "end": 1183,
      "id": {
        "type": "Identifier",
        "start": 1149,
        "end": 1152,
        "name": "T53",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1155,
        "end": 1182,
        "typeName": {
          "type": "Identifier",
          "start": 1155,
          "end": 1163,
          "name": "Readonly",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1163,
          "end": 1182,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1164,
              "end": 1181,
              "typeName": {
                "type": "Identifier",
                "start": 1164,
                "end": 1171,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1184,
      "end": 1220,
      "id": {
        "type": "Identifier",
        "start": 1189,
        "end": 1192,
        "name": "T54",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1195,
        "end": 1219,
        "typeName": {
          "type": "Identifier",
          "start": 1195,
          "end": 1204,
          "name": "ReadWrite",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1204,
          "end": 1219,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1205,
              "end": 1218,
              "typeName": {
                "type": "Identifier",
                "start": 1205,
                "end": 1213,
                "name": "Required",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1213,
                "end": 1218,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1214,
                    "end": 1217,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1214,
                      "end": 1217,
                      "name": "T53",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
    {
      "type": "TSDeclareFunction",
      "start": 1222,
      "end": 1270,
      "id": {
        "type": "Identifier",
        "start": 1239,
        "end": 1247,
        "name": "unboxify",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1251,
          "end": 1265,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1252,
            "end": 1265,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1254,
              "end": 1265,
              "typeName": {
                "type": "Identifier",
                "start": 1254,
                "end": 1262,
                "name": "Boxified",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1262,
                "end": 1265,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1263,
                    "end": 1264,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1263,
                      "end": 1264,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1247,
        "end": 1250,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1248,
            "end": 1249,
            "name": {
              "type": "Identifier",
              "start": 1248,
              "end": 1249,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1266,
        "end": 1269,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1268,
          "end": 1269,
          "typeName": {
            "type": "Identifier",
            "start": 1268,
            "end": 1269,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 1284,
            "end": 1334,
            "name": "x10",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 1290,
                      "end": 1293,
                      "name": "Box",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1303,
                    "end": 1314,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1303,
                      "end": 1306,
                      "name": "Box",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 1319,
                          "end": 1322,
                          "name": "Box",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                        }
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 1340,
            "end": 1343,
            "name": "y10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1346,
            "end": 1359,
            "callee": {
              "type": "Identifier",
              "start": 1346,
              "end": 1354,
              "name": "unboxify",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1355,
                "end": 1358,
                "name": "x10",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1374,
            "end": 1392,
            "name": "x11",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 1379,
                    "end": 1382,
                    "name": "Box",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 1398,
            "end": 1401,
            "name": "y11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1404,
            "end": 1417,
            "callee": {
              "type": "Identifier",
              "start": 1404,
              "end": 1412,
              "name": "unboxify",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1413,
                "end": 1416,
                "name": "x11",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1432,
            "end": 1473,
            "name": "x12",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1439,
                      "end": 1440,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1440,
                      "end": 1453,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1442,
                        "end": 1453,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1442,
                          "end": 1445,
                          "name": "Box",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1455,
                    "end": 1471,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1455,
                      "end": 1456,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1456,
                      "end": 1471,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1458,
                        "end": 1471,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1458,
                          "end": 1461,
                          "name": "Box",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 1479,
            "end": 1482,
            "name": "y12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1485,
            "end": 1498,
            "callee": {
              "type": "Identifier",
              "start": 1485,
              "end": 1493,
              "name": "unboxify",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1494,
                "end": 1497,
                "name": "x12",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1501,
      "end": 1550,
      "id": {
        "type": "Identifier",
        "start": 1518,
        "end": 1528,
        "name": "nonpartial",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1532,
          "end": 1545,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1533,
            "end": 1545,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1535,
              "end": 1545,
              "typeName": {
                "type": "Identifier",
                "start": 1535,
                "end": 1542,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1542,
                "end": 1545,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1543,
                    "end": 1544,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1543,
                      "end": 1544,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1528,
        "end": 1531,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1529,
            "end": 1530,
            "name": {
              "type": "Identifier",
              "start": 1529,
              "end": 1530,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1546,
        "end": 1549,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1548,
          "end": 1549,
          "typeName": {
            "type": "Identifier",
            "start": 1548,
            "end": 1549,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 1564,
            "end": 1612,
            "name": "x20",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 1618,
            "end": 1621,
            "name": "y20",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1624,
            "end": 1639,
            "callee": {
              "type": "Identifier",
              "start": 1624,
              "end": 1634,
              "name": "nonpartial",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1635,
                "end": 1638,
                "name": "x20",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1654,
            "end": 1681,
            "name": "x21",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 1687,
            "end": 1690,
            "name": "y21",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1693,
            "end": 1708,
            "callee": {
              "type": "Identifier",
              "start": 1693,
              "end": 1703,
              "name": "nonpartial",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1704,
                "end": 1707,
                "name": "x21",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1723,
            "end": 1767,
            "name": "x22",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1730,
                      "end": 1731,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1753,
                    "end": 1765,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1753,
                      "end": 1754,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 1773,
            "end": 1776,
            "name": "y22",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1779,
            "end": 1794,
            "callee": {
              "type": "Identifier",
              "start": 1779,
              "end": 1789,
              "name": "nonpartial",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1790,
                "end": 1793,
                "name": "x22",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1797,
      "end": 1856,
      "id": {
        "type": "Identifier",
        "start": 1802,
        "end": 1811,
        "name": "__Awaited",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 1812,
              "end": 1813,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1817,
        "end": 1855,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1817,
          "end": 1818,
          "typeName": {
            "type": "Identifier",
            "start": 1817,
            "end": 1818,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 1827,
          "end": 1847,
          "typeName": {
            "type": "Identifier",
            "start": 1827,
            "end": 1838,
            "name": "PromiseLike",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": {
                    "type": "Identifier",
                    "start": 1845,
                    "end": 1846,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            ]
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 1850,
          "end": 1851,
          "typeName": {
            "type": "Identifier",
            "start": 1850,
            "end": 1851,
            "name": "U",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 1854,
          "end": 1855,
          "typeName": {
            "type": "Identifier",
            "start": 1854,
            "end": 1855,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1857,
      "end": 1914,
      "id": {
        "type": "Identifier",
        "start": 1862,
        "end": 1872,
        "name": "Awaitified",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 1873,
              "end": 1874,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1878,
        "end": 1913,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 1881,
          "end": 1893,
          "name": {
            "type": "Identifier",
            "start": 1881,
            "end": 1882,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1886,
            "end": 1893,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1892,
              "end": 1893,
              "typeName": {
                "type": "Identifier",
                "start": 1892,
                "end": 1893,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1896,
          "end": 1911,
          "typeName": {
            "type": "Identifier",
            "start": 1896,
            "end": 1905,
            "name": "__Awaited",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1905,
            "end": 1911,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1906,
                "end": 1910,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1906,
                  "end": 1907,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1906,
                    "end": 1907,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1908,
                  "end": 1909,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1908,
                    "end": 1909,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1886,
          "end": 1893,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1892,
            "end": 1893,
            "typeName": {
              "type": "Identifier",
              "start": 1892,
              "end": 1893,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1881,
          "end": 1882,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1916,
      "end": 1992,
      "id": {
        "type": "Identifier",
        "start": 1933,
        "end": 1936,
        "name": "all",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 1954,
          "end": 1966,
          "argument": {
            "type": "Identifier",
            "start": 1957,
            "end": 1963,
            "name": "values",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
              "typeName": {
                "type": "Identifier",
                "start": 1965,
                "end": 1966,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1936,
        "end": 1953,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1937,
            "end": 1952,
            "name": {
              "type": "Identifier",
              "start": 1937,
              "end": 1938,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1967,
        "end": 1991,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1969,
          "end": 1991,
          "typeName": {
            "type": "Identifier",
            "start": 1969,
            "end": 1976,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1976,
            "end": 1991,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1977,
                "end": 1990,
                "typeName": {
                  "type": "Identifier",
                  "start": 1977,
                  "end": 1987,
                  "name": "Awaitified",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1987,
                  "end": 1990,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1988,
                      "end": 1989,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1988,
                        "end": 1989,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1994,
      "end": 2177,
      "id": {
        "type": "Identifier",
        "start": 2003,
        "end": 2005,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2006,
          "end": 2015,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2007,
            "end": 2015,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2009,
              "end": 2015
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 2017,
          "end": 2035,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2018,
            "end": 2035,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2020,
              "end": 2035,
              "typeName": {
                "type": "Identifier",
                "start": 2020,
                "end": 2027,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 2037,
          "end": 2048,
          "name": "c",
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
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 2050,
          "end": 2070,
          "name": "d",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2051,
            "end": 2070,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2053,
              "end": 2070,
              "typeName": {
                "type": "Identifier",
                "start": 2053,
                "end": 2060,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 2082,
                  "end": 2084,
                  "name": "x1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2087,
                  "end": 2093,
                  "callee": {
                    "type": "Identifier",
                    "start": 2087,
                    "end": 2090,
                    "name": "all",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2091,
                      "end": 2092,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 2103,
                  "end": 2105,
                  "name": "x2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2108,
                  "end": 2117,
                  "callee": {
                    "type": "Identifier",
                    "start": 2108,
                    "end": 2111,
                    "name": "all",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2112,
                      "end": 2113,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2115,
                      "end": 2116,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 2127,
                  "end": 2129,
                  "name": "x3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2132,
                  "end": 2144,
                  "callee": {
                    "type": "Identifier",
                    "start": 2132,
                    "end": 2135,
                    "name": "all",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2136,
                      "end": 2137,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2139,
                      "end": 2140,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2142,
                      "end": 2143,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 2154,
                  "end": 2156,
                  "name": "x4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2159,
                  "end": 2174,
                  "callee": {
                    "type": "Identifier",
                    "start": 2159,
                    "end": 2162,
                    "name": "all",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2163,
                      "end": 2164,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2166,
                      "end": 2167,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2169,
                      "end": 2170,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2172,
                      "end": 2173,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2179,
      "end": 2307,
      "id": {
        "type": "Identifier",
        "start": 2188,
        "end": 2190,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2208,
          "end": 2222,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2209,
            "end": 2222,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2211,
              "end": 2222,
              "typeName": {
                "type": "Identifier",
                "start": 2211,
                "end": 2219,
                "name": "Boxified",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2219,
                "end": 2222,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2220,
                    "end": 2221,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2220,
                      "end": 2221,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 2234,
                  "end": 2257,
                  "name": "x",
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 2237,
                            "end": 2240,
                            "name": "Box",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 2248,
                          "end": 2257
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2260,
                  "end": 2267,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2260,
                    "end": 2265,
                    "object": {
                      "type": "Identifier",
                      "start": 2260,
                      "end": 2261,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2262,
                      "end": 2265,
                      "name": "pop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 2277,
                  "end": 2290,
                  "name": "y",
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 2280,
                          "end": 2283,
                          "name": "Box",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2293,
                  "end": 2304,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2293,
                    "end": 2301,
                    "object": {
                      "type": "Identifier",
                      "start": 2293,
                      "end": 2294,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2295,
                      "end": 2301,
                      "name": "concat",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2302,
                      "end": 2303,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2190,
        "end": 2207,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2191,
            "end": 2206,
            "name": {
              "type": "Identifier",
              "start": 2191,
              "end": 2192,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2331,
      "end": 2390,
      "id": {
        "type": "Identifier",
        "start": 2336,
        "end": 2347,
        "name": "ElementType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 2348,
              "end": 2349,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2353,
        "end": 2389,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2353,
          "end": 2354,
          "typeName": {
            "type": "Identifier",
            "start": 2353,
            "end": 2354,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 2363,
          "end": 2377,
          "typeName": {
            "type": "Identifier",
            "start": 2363,
            "end": 2368,
            "name": "Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": {
                    "type": "Identifier",
                    "start": 2375,
                    "end": 2376,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            ]
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 2380,
          "end": 2381,
          "typeName": {
            "type": "Identifier",
            "start": 2380,
            "end": 2381,
            "name": "U",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2384,
          "end": 2389
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2391,
      "end": 2433,
      "id": {
        "type": "Identifier",
        "start": 2396,
        "end": 2402,
        "name": "Mapped",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 2403,
              "end": 2404,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 2408,
        "end": 2432,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 2411,
          "end": 2423,
          "name": {
            "type": "Identifier",
            "start": 2411,
            "end": 2412,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 2416,
            "end": 2423,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2422,
              "end": 2423,
              "typeName": {
                "type": "Identifier",
                "start": 2422,
                "end": 2423,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 2426,
          "end": 2430,
          "objectType": {
            "type": "TSTypeReference",
            "start": 2426,
            "end": 2427,
            "typeName": {
              "type": "Identifier",
              "start": 2426,
              "end": 2427,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 2428,
            "end": 2429,
            "typeName": {
              "type": "Identifier",
              "start": 2428,
              "end": 2429,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 2416,
          "end": 2423,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2422,
            "end": 2423,
            "typeName": {
              "type": "Identifier",
              "start": 2422,
              "end": 2423,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 2411,
          "end": 2412,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2435,
      "end": 2470,
      "id": {
        "type": "Identifier",
        "start": 2440,
        "end": 2441,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 2442,
              "end": 2443,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2447,
        "end": 2469,
        "typeName": {
          "type": "Identifier",
          "start": 2447,
          "end": 2458,
          "name": "ElementType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2458,
          "end": 2469,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 2459,
              "end": 2468,
              "typeName": {
                "type": "Identifier",
                "start": 2459,
                "end": 2465,
                "name": "Mapped",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2465,
                "end": 2468,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2466,
                    "end": 2467,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2466,
                      "end": 2467,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2471,
      "end": 2510,
      "id": {
        "type": "Identifier",
        "start": 2476,
        "end": 2478,
        "name": "R1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2481,
        "end": 2509,
        "typeName": {
          "type": "Identifier",
          "start": 2481,
          "end": 2482,
          "name": "F",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2541,
      "end": 2598,
      "id": {
        "type": "Identifier",
        "start": 2546,
        "end": 2548,
        "name": "R2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2551,
        "end": 2597,
        "typeName": {
          "type": "Identifier",
          "start": 2551,
          "end": 2562,
          "name": "ElementType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2562,
          "end": 2597,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 2563,
              "end": 2596,
              "typeName": {
                "type": "Identifier",
                "start": 2563,
                "end": 2569,
                "name": "Mapped",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2652,
      "end": 2699,
      "id": {
        "type": "Identifier",
        "start": 2669,
        "end": 2680,
        "name": "acceptArray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2681,
          "end": 2691,
          "name": "arr",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2692,
        "end": 2698,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2694,
          "end": 2698
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2700,
      "end": 2762,
      "id": {
        "type": "Identifier",
        "start": 2717,
        "end": 2725,
        "name": "mapArray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2743,
          "end": 2749,
          "name": "arr",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2746,
            "end": 2749,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2748,
              "end": 2749,
              "typeName": {
                "type": "Identifier",
                "start": 2748,
                "end": 2749,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2725,
        "end": 2742,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2726,
            "end": 2741,
            "name": {
              "type": "Identifier",
              "start": 2726,
              "end": 2727,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2750,
        "end": 2761,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2752,
          "end": 2761,
          "typeName": {
            "type": "Identifier",
            "start": 2752,
            "end": 2758,
            "name": "Mapped",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2758,
            "end": 2761,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2759,
                "end": 2760,
                "typeName": {
                  "type": "Identifier",
                  "start": 2759,
                  "end": 2760,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2763,
      "end": 2850,
      "id": {
        "type": "Identifier",
        "start": 2772,
        "end": 2789,
        "name": "acceptMappedArray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2807,
          "end": 2813,
          "name": "arr",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2810,
            "end": 2813,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2812,
              "end": 2813,
              "typeName": {
                "type": "Identifier",
                "start": 2812,
                "end": 2813,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2815,
        "end": 2850,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2821,
            "end": 2848,
            "expression": {
              "type": "CallExpression",
              "start": 2821,
              "end": 2847,
              "callee": {
                "type": "Identifier",
                "start": 2821,
                "end": 2832,
                "name": "acceptArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 2833,
                  "end": 2846,
                  "callee": {
                    "type": "Identifier",
                    "start": 2833,
                    "end": 2841,
                    "name": "mapArray",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2842,
                      "end": 2845,
                      "name": "arr",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2789,
        "end": 2806,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2790,
            "end": 2805,
            "name": {
              "type": "Identifier",
              "start": 2790,
              "end": 2791,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2874,
      "end": 2921,
      "id": {
        "type": "Identifier",
        "start": 2879,
        "end": 2892,
        "name": "Unconstrained",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 2893,
              "end": 2894,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2898,
        "end": 2920,
        "typeName": {
          "type": "Identifier",
          "start": 2898,
          "end": 2909,
          "name": "ElementType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2909,
          "end": 2920,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 2910,
              "end": 2919,
              "typeName": {
                "type": "Identifier",
                "start": 2910,
                "end": 2916,
                "name": "Mapped",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2916,
                "end": 2919,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2917,
                    "end": 2918,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2917,
                      "end": 2918,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2922,
      "end": 2973,
      "id": {
        "type": "Identifier",
        "start": 2927,
        "end": 2929,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2932,
        "end": 2972,
        "typeName": {
          "type": "Identifier",
          "start": 2932,
          "end": 2945,
          "name": "Unconstrained",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3005,
      "end": 3064,
      "id": {
        "type": "Identifier",
        "start": 3010,
        "end": 3021,
        "name": "Constrained",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 3022,
              "end": 3023,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3041,
        "end": 3063,
        "typeName": {
          "type": "Identifier",
          "start": 3041,
          "end": 3052,
          "name": "ElementType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3052,
          "end": 3063,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 3053,
              "end": 3062,
              "typeName": {
                "type": "Identifier",
                "start": 3053,
                "end": 3059,
                "name": "Mapped",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3059,
                "end": 3062,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3060,
                    "end": 3061,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3060,
                      "end": 3061,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3065,
      "end": 3114,
      "id": {
        "type": "Identifier",
        "start": 3070,
        "end": 3072,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3075,
        "end": 3113,
        "typeName": {
          "type": "Identifier",
          "start": 3075,
          "end": 3086,
          "name": "Constrained",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
