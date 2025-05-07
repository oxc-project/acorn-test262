__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 496,
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
      "end": 75,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 39,
        "decorators": [],
        "name": "Boxify",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 45,
        "end": 74,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 53,
          "end": 60,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 59,
            "end": 60,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 48,
          "end": 49,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 63,
          "end": 72,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 66,
            "end": 72,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 67,
                "end": 71,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 69,
                  "end": 70,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 70,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 67,
                  "end": 68,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
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
            "start": 63,
            "end": 66,
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null
          }
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
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
      "start": 77,
      "end": 104,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 84,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 87,
        "end": 103,
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
        },
        "typeName": {
          "type": "Identifier",
          "start": 87,
          "end": 93,
          "decorators": [],
          "name": "Boxify",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 105,
      "end": 140,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 112,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 115,
        "end": 139,
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
        },
        "typeName": {
          "type": "Identifier",
          "start": 115,
          "end": 121,
          "decorators": [],
          "name": "Boxify",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 141,
      "end": 180,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 148,
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 151,
        "end": 179,
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
        },
        "typeName": {
          "type": "Identifier",
          "start": 151,
          "end": 157,
          "decorators": [],
          "name": "Boxify",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 181,
      "end": 227,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 188,
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 191,
        "end": 226,
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
        },
        "typeName": {
          "type": "Identifier",
          "start": 191,
          "end": 197,
          "decorators": [],
          "name": "Boxify",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 228,
      "end": 271,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 235,
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 238,
        "end": 270,
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 258,
                        "end": 259,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 259,
                        "end": 267,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 261,
                          "end": 267
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 238,
          "end": 244,
          "decorators": [],
          "name": "Boxify",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 330,
      "end": 368,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 335,
        "end": 346,
        "decorators": [],
        "name": "MustBeArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 366,
        "end": 367,
        "typeArguments": null,
        "typeName": {
          "type": "Identifier",
          "start": 366,
          "end": 367,
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null
        }
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
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
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
      "start": 370,
      "end": 470,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 375,
        "end": 378,
        "decorators": [],
        "name": "Hmm",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 398,
        "end": 469,
        "checkType": {
          "type": "TSTypeReference",
          "start": 398,
          "end": 399,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 398,
            "end": 399,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
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
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 464,
          "end": 469
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 423,
          "end": 457,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 434,
            "end": 457,
            "params": [
              {
                "type": "TSMappedType",
                "start": 435,
                "end": 456,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 443,
                  "end": 450,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 449,
                    "end": 450,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 449,
                      "end": 450,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 438,
                  "end": 439,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "nameType": null,
                "optional": false,
                "readonly": null,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 453,
                  "end": 454,
                  "literal": {
                    "type": "Literal",
                    "start": 453,
                    "end": 454,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 423,
            "end": 434,
            "decorators": [],
            "name": "MustBeArray",
            "optional": false,
            "typeAnnotation": null
          }
        }
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
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 379,
              "end": 380,
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
      "start": 472,
      "end": 496,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 477,
        "end": 478,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 481,
        "end": 495,
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
                    "raw": "3",
                    "value": 3,
                    "regex": null,
                    "bigint": null
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
                    "raw": "4",
                    "value": 4,
                    "regex": null,
                    "bigint": null
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
                    "raw": "5",
                    "value": 5,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 481,
          "end": 484,
          "decorators": [],
          "name": "Hmm",
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
