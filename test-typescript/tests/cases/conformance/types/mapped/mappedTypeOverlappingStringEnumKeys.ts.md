__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 612,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 11,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 38,
        "name": "TerrestrialAnimalTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 43,
          "end": 54,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 46,
            "name": "CAT",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "DOG",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      ],
      "const": false,
      "declare": false,
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
              "name": "CAT",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "DOG",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 95,
        "name": "AlienAnimalTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 100,
          "end": 111,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 103,
            "name": "CAT",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      ],
      "const": false,
      "declare": false,
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
              "name": "CAT",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 133,
        "name": "AnimalTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "TerrestrialAnimalTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "AlienAnimalTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "TerrestrialCat",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "TerrestrialAnimalTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 238,
                    "end": 241,
                    "name": "CAT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "name": "address",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "AlienCat",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "AlienAnimalTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 311,
                    "end": 314,
                    "name": "CAT",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "name": "planet",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "Cats",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "TerrestrialCat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "AlienCat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "CatMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 390,
        "end": 444,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 395,
          "end": 411,
          "name": {
            "type": "Identifier",
            "start": 395,
            "end": 396,
            "name": "V",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 400,
            "end": 411,
            "typeName": {
              "type": "Identifier",
              "start": 400,
              "end": 411,
              "name": "AnimalTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
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
              "name": "Extract",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "Cats",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "type",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                            "name": "V",
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
                }
              ]
            }
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 400,
          "end": 411,
          "typeName": {
            "type": "Identifier",
            "start": 400,
            "end": 411,
            "name": "AnimalTypes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "key": {
          "type": "Identifier",
          "start": 395,
          "end": 396,
          "name": "V",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 453,
            "end": 467,
            "name": "catMap",
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
                  "name": "CatMap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 477,
                  "name": "cat",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 487,
                            "end": 491,
                            "name": "type",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "MemberExpression",
                            "start": 493,
                            "end": 519,
                            "object": {
                              "type": "Identifier",
                              "start": 493,
                              "end": 515,
                              "name": "TerrestrialAnimalTypes",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 516,
                              "end": 519,
                              "name": "CAT",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 521,
                          "end": 532,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 521,
                            "end": 528,
                            "name": "address",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 530,
                            "end": 532,
                            "value": "",
                            "raw": "\"\""
                          },
                          "kind": "init",
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 542,
                            "end": 546,
                            "name": "type",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "MemberExpression",
                            "start": 548,
                            "end": 568,
                            "object": {
                              "type": "Identifier",
                              "start": 548,
                              "end": 564,
                              "name": "AlienAnimalTypes",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 565,
                              "end": 568,
                              "name": "CAT",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 570,
                          "end": 580,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 570,
                            "end": 576,
                            "name": "planet",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 578,
                            "end": 580,
                            "value": "",
                            "raw": "\"\""
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 590,
                "end": 608,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 590,
                  "end": 593,
                  "name": "dog",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                "kind": "init",
                "optional": false
              }
            ]
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
