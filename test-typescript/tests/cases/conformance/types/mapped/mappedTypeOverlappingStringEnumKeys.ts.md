__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 611,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 11,
      "end": 71,
      "body": {
        "type": "TSEnumBody",
        "start": 39,
        "end": 71,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 43,
            "end": 54,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 46,
              "decorators": [],
              "name": "CAT",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 49,
              "end": 54,
              "raw": "\"cat\"",
              "value": "cat",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 58,
            "end": 69,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 58,
              "end": 61,
              "decorators": [],
              "name": "DOG",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 64,
              "end": 69,
              "raw": "\"dog\"",
              "value": "dog",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 38,
        "decorators": [],
        "name": "TerrestrialAnimalTypes",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "EmptyStatement",
      "start": 71,
      "end": 72
    },
    {
      "type": "TSEnumDeclaration",
      "start": 74,
      "end": 114,
      "body": {
        "type": "TSEnumBody",
        "start": 96,
        "end": 114,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 100,
            "end": 111,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 100,
              "end": 103,
              "decorators": [],
              "name": "CAT",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 106,
              "end": 111,
              "raw": "\"cat\"",
              "value": "cat",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 95,
        "decorators": [],
        "name": "AlienAnimalTypes",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "EmptyStatement",
      "start": 114,
      "end": 115
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 117,
      "end": 178,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 133,
        "decorators": [],
        "name": "AnimalTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 136,
        "end": 177,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 136,
            "end": 158,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 136,
              "end": 158,
              "decorators": [],
              "name": "TerrestrialAnimalTypes",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 161,
            "end": 177,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 161,
              "end": 177,
              "decorators": [],
              "name": "AlienAnimalTypes",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 180,
      "end": 263,
      "body": {
        "type": "TSInterfaceBody",
        "start": 205,
        "end": 263,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 209,
            "end": 242,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 213,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 213,
              "end": 241,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 215,
                "end": 241,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 215,
                  "end": 241,
                  "left": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 237,
                    "decorators": [],
                    "name": "TerrestrialAnimalTypes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 238,
                    "end": 241,
                    "decorators": [],
                    "name": "CAT",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 245,
            "end": 261,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 245,
              "end": 252,
              "decorators": [],
              "name": "address",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 252,
              "end": 260,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 254,
                "end": 260
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 190,
        "end": 204,
        "decorators": [],
        "name": "TerrestrialCat",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 265,
      "end": 334,
      "body": {
        "type": "TSInterfaceBody",
        "start": 284,
        "end": 334,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 288,
            "end": 314,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 288,
              "end": 292,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 314,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 294,
                "end": 314,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 294,
                  "end": 314,
                  "left": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 310,
                    "decorators": [],
                    "name": "AlienAnimalTypes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 311,
                    "end": 314,
                    "decorators": [],
                    "name": "CAT",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 317,
            "end": 332,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 323,
              "decorators": [],
              "name": "planet",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 323,
              "end": 331,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 325,
                "end": 331
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 275,
        "end": 283,
        "decorators": [],
        "name": "AlienCat",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 336,
      "end": 374,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 345,
        "decorators": [],
        "name": "Cats",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 348,
        "end": 373,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 348,
            "end": 362,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 348,
              "end": 362,
              "decorators": [],
              "name": "TerrestrialCat",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 365,
            "end": 373,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 365,
              "end": 373,
              "decorators": [],
              "name": "AlienCat",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 376,
      "end": 445,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 381,
        "end": 387,
        "decorators": [],
        "name": "CatMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 390,
        "end": 444,
        "constraint": {
          "type": "TSTypeReference",
          "start": 400,
          "end": 411,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 400,
            "end": 411,
            "decorators": [],
            "name": "AnimalTypes",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 395,
          "end": 396,
          "decorators": [],
          "name": "V",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 414,
          "end": 442,
          "elementType": {
            "type": "TSTypeReference",
            "start": 414,
            "end": 440,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 421,
              "end": 440,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 422,
                  "end": 426,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 426,
                    "decorators": [],
                    "name": "Cats",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 428,
                  "end": 439,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 430,
                      "end": 437,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 430,
                        "end": 434,
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 434,
                        "end": 437,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 436,
                          "end": 437,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 436,
                            "end": 437,
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 414,
              "end": 421,
              "decorators": [],
              "name": "Extract",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 447,
      "end": 611,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 453,
          "end": 610,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 453,
            "end": 467,
            "decorators": [],
            "name": "catMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 459,
              "end": 467,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 461,
                "end": 467,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 461,
                  "end": 467,
                  "decorators": [],
                  "name": "CatMap",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 470,
            "end": 610,
            "properties": [
              {
                "type": "Property",
                "start": 474,
                "end": 586,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 477,
                  "decorators": [],
                  "name": "cat",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayExpression",
                  "start": 479,
                  "end": 586,
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "start": 485,
                      "end": 534,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 487,
                          "end": 519,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 487,
                            "end": 491,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "MemberExpression",
                            "start": 493,
                            "end": 519,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 493,
                              "end": 515,
                              "decorators": [],
                              "name": "TerrestrialAnimalTypes",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 516,
                              "end": 519,
                              "decorators": [],
                              "name": "CAT",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "start": 521,
                          "end": 532,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 521,
                            "end": 528,
                            "decorators": [],
                            "name": "address",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 530,
                            "end": 532,
                            "raw": "\"\"",
                            "value": "",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 540,
                      "end": 582,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 542,
                          "end": 568,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 542,
                            "end": 546,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "MemberExpression",
                            "start": 548,
                            "end": 568,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 548,
                              "end": 564,
                              "decorators": [],
                              "name": "AlienAnimalTypes",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 565,
                              "end": 568,
                              "decorators": [],
                              "name": "CAT",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "start": 570,
                          "end": 580,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 570,
                            "end": 576,
                            "decorators": [],
                            "name": "planet",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 578,
                            "end": 580,
                            "raw": "\"\"",
                            "value": "",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 590,
                "end": 608,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 590,
                  "end": 593,
                  "decorators": [],
                  "name": "dog",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSAsExpression",
                  "start": 595,
                  "end": 608,
                  "expression": {
                    "type": "ArrayExpression",
                    "start": 595,
                    "end": 597,
                    "elements": []
                  },
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 601,
                    "end": 608,
                    "elementType": {
                      "type": "TSNeverKeyword",
                      "start": 601,
                      "end": 606
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
