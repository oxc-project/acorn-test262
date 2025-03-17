__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 497,
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
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 39,
        "name": "Boxify",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 39,
        "end": 42,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 40,
            "end": 41,
            "name": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
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
        "start": 45,
        "end": 74,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 48,
          "end": 60,
          "name": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 53,
            "end": 60,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 59,
              "end": 60,
              "typeName": {
                "type": "Identifier",
                "start": 59,
                "end": 60,
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
          "start": 63,
          "end": 72,
          "typeName": {
            "type": "Identifier",
            "start": 63,
            "end": 66,
            "name": "Box",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 66,
            "end": 72,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 67,
                "end": 71,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 67,
                  "end": 68,
                  "typeName": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 69,
                  "end": 70,
                  "typeName": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 70,
                    "name": "K",
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
          "start": 53,
          "end": 60,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 59,
            "end": 60,
            "typeName": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
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
          "start": 48,
          "end": 49,
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
      "start": 77,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 84,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 87,
        "end": 103,
        "typeName": {
          "type": "Identifier",
          "start": 87,
          "end": 93,
          "name": "Boxify",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 93,
          "end": 103,
          "params": [
            {
              "type": "TSArrayType",
              "start": 94,
              "end": 102,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 94,
                "end": 100
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 105,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 112,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 115,
        "end": 139,
        "typeName": {
          "type": "Identifier",
          "start": 115,
          "end": 121,
          "name": "Boxify",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 121,
          "end": 139,
          "params": [
            {
              "type": "TSTupleType",
              "start": 122,
              "end": 138,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 123,
                  "end": 129
                },
                {
                  "type": "TSStringKeyword",
                  "start": 131,
                  "end": 137
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
      "start": 141,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 148,
        "name": "T3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 151,
        "end": 179,
        "typeName": {
          "type": "Identifier",
          "start": 151,
          "end": 157,
          "name": "Boxify",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 157,
          "end": 179,
          "params": [
            {
              "type": "TSIntersectionType",
              "start": 158,
              "end": 178,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 158,
                  "end": 166,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 158,
                    "end": 164
                  }
                },
                {
                  "type": "TSArrayType",
                  "start": 169,
                  "end": 178,
                  "elementType": {
                    "type": "TSUnknownKeyword",
                    "start": 169,
                    "end": 176
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
      "start": 181,
      "end": 227,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 188,
        "name": "T4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 191,
        "end": 226,
        "typeName": {
          "type": "Identifier",
          "start": 191,
          "end": 197,
          "name": "Boxify",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 197,
          "end": 226,
          "params": [
            {
              "type": "TSIntersectionType",
              "start": 198,
              "end": 225,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 198,
                  "end": 206,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 198,
                    "end": 204
                  }
                },
                {
                  "type": "TSTupleType",
                  "start": 209,
                  "end": 225,
                  "elementTypes": [
                    {
                      "type": "TSStringKeyword",
                      "start": 210,
                      "end": 216
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 218,
                      "end": 224
                    }
                  ]
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
      "start": 228,
      "end": 271,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 235,
        "name": "T5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 238,
        "end": 270,
        "typeName": {
          "type": "Identifier",
          "start": 238,
          "end": 244,
          "name": "Boxify",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 244,
          "end": 270,
          "params": [
            {
              "type": "TSIntersectionType",
              "start": 245,
              "end": 269,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 245,
                  "end": 253,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 245,
                    "end": 251
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 256,
                  "end": 269,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 258,
                      "end": 267,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 258,
                        "end": 259,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 259,
                        "end": 267,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 261,
                          "end": 267
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
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
      "start": 330,
      "end": 368,
      "id": {
        "type": "Identifier",
        "start": 335,
        "end": 346,
        "name": "MustBeArray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 346,
        "end": 363,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 347,
            "end": 362,
            "name": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 357,
              "end": 362,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 357,
                "end": 360
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
        "start": 366,
        "end": 367,
        "typeName": {
          "type": "Identifier",
          "start": 366,
          "end": 367,
          "name": "T",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 370,
      "end": 470,
      "id": {
        "type": "Identifier",
        "start": 375,
        "end": 378,
        "name": "Hmm",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 378,
        "end": 395,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 379,
            "end": 394,
            "name": {
              "type": "Identifier",
              "start": 379,
              "end": 380,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 389,
              "end": 394,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 389,
                "end": 392
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
        "type": "TSConditionalType",
        "start": 398,
        "end": 469,
        "checkType": {
          "type": "TSTypeReference",
          "start": 398,
          "end": 399,
          "typeName": {
            "type": "Identifier",
            "start": 398,
            "end": 399,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSArrayType",
          "start": 408,
          "end": 416,
          "elementType": {
            "type": "TSNumberKeyword",
            "start": 408,
            "end": 414
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 423,
          "end": 457,
          "typeName": {
            "type": "Identifier",
            "start": 423,
            "end": 434,
            "name": "MustBeArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 434,
            "end": 457,
            "params": [
              {
                "type": "TSMappedType",
                "start": 435,
                "end": 456,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 438,
                  "end": 450,
                  "name": {
                    "type": "Identifier",
                    "start": 438,
                    "end": 439,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 443,
                    "end": 450,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 449,
                      "end": 450,
                      "typeName": {
                        "type": "Identifier",
                        "start": 449,
                        "end": 450,
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
                  "type": "TSLiteralType",
                  "start": 453,
                  "end": 454,
                  "literal": {
                    "type": "Literal",
                    "start": 453,
                    "end": 454,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "optional": null,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 443,
                  "end": 450,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 449,
                    "end": 450,
                    "typeName": {
                      "type": "Identifier",
                      "start": 449,
                      "end": 450,
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
                  "start": 438,
                  "end": 439,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 464,
          "end": 469
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 472,
      "end": 496,
      "id": {
        "type": "Identifier",
        "start": 477,
        "end": 478,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 481,
        "end": 495,
        "typeName": {
          "type": "Identifier",
          "start": 481,
          "end": 484,
          "name": "Hmm",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 484,
          "end": 495,
          "params": [
            {
              "type": "TSTupleType",
              "start": 485,
              "end": 494,
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "start": 486,
                  "end": 487,
                  "literal": {
                    "type": "Literal",
                    "start": 486,
                    "end": 487,
                    "value": 3,
                    "raw": "3"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 489,
                  "end": 490,
                  "literal": {
                    "type": "Literal",
                    "start": 489,
                    "end": 490,
                    "value": 4,
                    "raw": "4"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 492,
                  "end": 493,
                  "literal": {
                    "type": "Literal",
                    "start": 492,
                    "end": 493,
                    "value": 5,
                    "raw": "5"
                  }
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
