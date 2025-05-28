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
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 38,
        "decorators": [],
        "name": "TerrestrialAnimalTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 39,
        "end": 71,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 43,
            "end": 54,
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
              "value": "cat",
              "raw": "\"cat\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 58,
            "end": 69,
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
              "value": "dog",
              "raw": "\"dog\""
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
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
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 95,
        "decorators": [],
        "name": "AlienAnimalTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 96,
        "end": 114,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 100,
            "end": 111,
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
              "value": "cat",
              "raw": "\"cat\""
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
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
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 133,
        "decorators": [],
        "name": "AnimalTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 136,
        "end": 177,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 136,
            "end": 158,
            "typeName": {
              "type": "Identifier",
              "start": 136,
              "end": 158,
              "decorators": [],
              "name": "TerrestrialAnimalTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 161,
            "end": 177,
            "typeName": {
              "type": "Identifier",
              "start": 161,
              "end": 177,
              "decorators": [],
              "name": "AlienAnimalTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 180,
      "end": 263,
      "id": {
        "type": "Identifier",
        "start": 190,
        "end": 204,
        "decorators": [],
        "name": "TerrestrialCat",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 205,
        "end": 263,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 209,
            "end": 242,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 213,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 213,
              "end": 241,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 215,
                "end": 241,
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
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 245,
            "end": 261,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 245,
              "end": 252,
              "decorators": [],
              "name": "address",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 252,
              "end": 260,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 254,
                "end": 260
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
      "type": "TSInterfaceDeclaration",
      "start": 265,
      "end": 334,
      "id": {
        "type": "Identifier",
        "start": 275,
        "end": 283,
        "decorators": [],
        "name": "AlienCat",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 284,
        "end": 334,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 288,
            "end": 314,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 288,
              "end": 292,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 314,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 294,
                "end": 314,
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
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 317,
            "end": 332,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 323,
              "decorators": [],
              "name": "planet",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 323,
              "end": 331,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 325,
                "end": 331
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
      "start": 336,
      "end": 374,
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 345,
        "decorators": [],
        "name": "Cats",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 348,
        "end": 373,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 348,
            "end": 362,
            "typeName": {
              "type": "Identifier",
              "start": 348,
              "end": 362,
              "decorators": [],
              "name": "TerrestrialCat",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 365,
            "end": 373,
            "typeName": {
              "type": "Identifier",
              "start": 365,
              "end": 373,
              "decorators": [],
              "name": "AlienCat",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 376,
      "end": 445,
      "id": {
        "type": "Identifier",
        "start": 381,
        "end": 387,
        "decorators": [],
        "name": "CatMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 390,
        "end": 444,
        "key": {
          "type": "Identifier",
          "start": 395,
          "end": 396,
          "decorators": [],
          "name": "V",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 400,
          "end": 411,
          "typeName": {
            "type": "Identifier",
            "start": 400,
            "end": 411,
            "decorators": [],
            "name": "AnimalTypes",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 414,
          "end": 442,
          "elementType": {
            "type": "TSTypeReference",
            "start": 414,
            "end": 440,
            "typeName": {
              "type": "Identifier",
              "start": 414,
              "end": 421,
              "decorators": [],
              "name": "Extract",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 421,
              "end": 440,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 422,
                  "end": 426,
                  "typeName": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 426,
                    "decorators": [],
                    "name": "Cats",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 430,
                        "end": 434,
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 434,
                        "end": 437,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 436,
                          "end": 437,
                          "typeName": {
                            "type": "Identifier",
                            "start": 436,
                            "end": 437,
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 447,
      "end": 611,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 453,
          "end": 610,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 461,
                  "end": 467,
                  "decorators": [],
                  "name": "CatMap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 477,
                  "decorators": [],
                  "name": "cat",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 487,
                            "end": 491,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "MemberExpression",
                            "start": 493,
                            "end": 519,
                            "object": {
                              "type": "Identifier",
                              "start": 493,
                              "end": 515,
                              "decorators": [],
                              "name": "TerrestrialAnimalTypes",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 516,
                              "end": 519,
                              "decorators": [],
                              "name": "CAT",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 521,
                          "end": 532,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 521,
                            "end": 528,
                            "decorators": [],
                            "name": "address",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 530,
                            "end": 532,
                            "value": "",
                            "raw": "\"\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 542,
                            "end": 546,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "MemberExpression",
                            "start": 548,
                            "end": 568,
                            "object": {
                              "type": "Identifier",
                              "start": 548,
                              "end": 564,
                              "decorators": [],
                              "name": "AlienAnimalTypes",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 565,
                              "end": 568,
                              "decorators": [],
                              "name": "CAT",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 570,
                          "end": 580,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 570,
                            "end": 576,
                            "decorators": [],
                            "name": "planet",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 578,
                            "end": 580,
                            "value": "",
                            "raw": "\"\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 590,
                "end": 608,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 590,
                  "end": 593,
                  "decorators": [],
                  "name": "dog",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
