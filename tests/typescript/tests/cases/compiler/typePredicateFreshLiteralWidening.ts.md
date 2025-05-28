__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 818,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "Narrowable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 18,
        "end": 52,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 18,
            "end": 24
          },
          {
            "type": "TSNumberKeyword",
            "start": 27,
            "end": 33
          },
          {
            "type": "TSBigIntKeyword",
            "start": 36,
            "end": 42
          },
          {
            "type": "TSBooleanKeyword",
            "start": 45,
            "end": 52
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 55,
      "end": 149,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 66,
        "decorators": [],
        "name": "Narrow",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 66,
        "end": 69,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 67,
            "end": 68,
            "name": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
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
        "type": "TSUnionType",
        "start": 72,
        "end": 148,
        "types": [
          {
            "type": "TSConditionalType",
            "start": 73,
            "end": 105,
            "checkType": {
              "type": "TSTypeReference",
              "start": 73,
              "end": 74,
              "typeName": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 83,
              "end": 93,
              "typeName": {
                "type": "Identifier",
                "start": 83,
                "end": 93,
                "decorators": [],
                "name": "Narrowable",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 96,
              "end": 97,
              "typeName": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 100,
              "end": 105
            }
          },
          {
            "type": "TSMappedType",
            "start": 110,
            "end": 147,
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 122,
              "end": 129,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 128,
                "end": 129,
                "typeName": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 129,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 132,
              "end": 144,
              "typeName": {
                "type": "Identifier",
                "start": 132,
                "end": 138,
                "decorators": [],
                "name": "Narrow",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 138,
                "end": 144,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 139,
                    "end": 143,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 139,
                      "end": 140,
                      "typeName": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 140,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 141,
                      "end": 142,
                      "typeName": {
                        "type": "Identifier",
                        "start": 141,
                        "end": 142,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            },
            "optional": false,
            "readonly": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 250,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 249,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 166,
            "decorators": [],
            "name": "satisfies",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 171,
            "end": 249,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 171,
              "end": 179,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 172,
                  "end": 177,
                  "name": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 177,
                    "decorators": [],
                    "name": "TWide",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 187,
              "end": 249,
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 187,
                "end": 210,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 188,
                    "end": 209,
                    "name": {
                      "type": "Identifier",
                      "start": 188,
                      "end": 195,
                      "decorators": [],
                      "name": "TNarrow",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 204,
                      "end": 209,
                      "typeName": {
                        "type": "Identifier",
                        "start": 204,
                        "end": 209,
                        "decorators": [],
                        "name": "TWide",
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
                  "start": 211,
                  "end": 234,
                  "decorators": [],
                  "name": "narrow",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 217,
                    "end": 234,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 219,
                      "end": 234,
                      "typeName": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 225,
                        "decorators": [],
                        "name": "Narrow",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 225,
                        "end": 234,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 226,
                            "end": 233,
                            "typeName": {
                              "type": "Identifier",
                              "start": 226,
                              "end": 233,
                              "decorators": [],
                              "name": "TNarrow",
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
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "start": 243,
                "end": 249,
                "decorators": [],
                "name": "narrow",
                "optional": false,
                "typeAnnotation": null
              },
              "id": null,
              "generator": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 334,
      "end": 404,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 340,
          "end": 403,
          "id": {
            "type": "Identifier",
            "start": 340,
            "end": 349,
            "decorators": [],
            "name": "isNotNull",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 352,
            "end": 403,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 352,
              "end": 356,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 353,
                  "end": 354,
                  "name": {
                    "type": "Identifier",
                    "start": 353,
                    "end": 354,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
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
                "start": 357,
                "end": 372,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 362,
                  "end": 372,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 364,
                    "end": 372,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 364,
                        "end": 365,
                        "typeName": {
                          "type": "Identifier",
                          "start": 364,
                          "end": 365,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 368,
                        "end": 372
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 373,
              "end": 385,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 375,
                "end": 385,
                "parameterName": {
                  "type": "Identifier",
                  "start": 375,
                  "end": 380,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 384,
                  "end": 385,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 384,
                    "end": 385,
                    "typeName": {
                      "type": "Identifier",
                      "start": 384,
                      "end": 385,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "body": {
              "type": "BinaryExpression",
              "start": 389,
              "end": 403,
              "left": {
                "type": "Identifier",
                "start": 389,
                "end": 394,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 399,
                "end": 403,
                "value": null,
                "raw": "null"
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 406,
      "end": 443,
      "id": {
        "type": "Identifier",
        "start": 411,
        "end": 415,
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 418,
        "end": 442,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 420,
            "end": 440,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 420,
              "end": 425,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 425,
              "end": 440,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 427,
                "end": 440,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 427,
                    "end": 433
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 436,
                    "end": 440
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
    {
      "type": "VariableDeclaration",
      "start": 445,
      "end": 493,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 451,
          "end": 492,
          "id": {
            "type": "Identifier",
            "start": 451,
            "end": 456,
            "decorators": [],
            "name": "item1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 459,
            "end": 492,
            "callee": {
              "type": "CallExpression",
              "start": 459,
              "end": 476,
              "callee": {
                "type": "Identifier",
                "start": 459,
                "end": 468,
                "decorators": [],
                "name": "satisfies",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 468,
                "end": 474,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 469,
                    "end": 473,
                    "typeName": {
                      "type": "Identifier",
                      "start": 469,
                      "end": 473,
                      "decorators": [],
                      "name": "Item",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              },
              "arguments": [],
              "optional": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 477,
                "end": 491,
                "properties": [
                  {
                    "type": "Property",
                    "start": 479,
                    "end": 489,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 479,
                      "end": 484,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 486,
                      "end": 489,
                      "value": "1",
                      "raw": "\"1\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 494,
      "end": 542,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 500,
          "end": 541,
          "id": {
            "type": "Identifier",
            "start": 500,
            "end": 505,
            "decorators": [],
            "name": "item2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 508,
            "end": 541,
            "callee": {
              "type": "CallExpression",
              "start": 508,
              "end": 525,
              "callee": {
                "type": "Identifier",
                "start": 508,
                "end": 517,
                "decorators": [],
                "name": "satisfies",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 517,
                "end": 523,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 518,
                    "end": 522,
                    "typeName": {
                      "type": "Identifier",
                      "start": 518,
                      "end": 522,
                      "decorators": [],
                      "name": "Item",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              },
              "arguments": [],
              "optional": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 526,
                "end": 540,
                "properties": [
                  {
                    "type": "Property",
                    "start": 528,
                    "end": 538,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 528,
                      "end": 533,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 535,
                      "end": 538,
                      "value": "2",
                      "raw": "\"2\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 543,
      "end": 592,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 549,
          "end": 591,
          "id": {
            "type": "Identifier",
            "start": 549,
            "end": 554,
            "decorators": [],
            "name": "item3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 557,
            "end": 591,
            "callee": {
              "type": "CallExpression",
              "start": 557,
              "end": 574,
              "callee": {
                "type": "Identifier",
                "start": 557,
                "end": 566,
                "decorators": [],
                "name": "satisfies",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 566,
                "end": 572,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 567,
                    "end": 571,
                    "typeName": {
                      "type": "Identifier",
                      "start": 567,
                      "end": 571,
                      "decorators": [],
                      "name": "Item",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              },
              "arguments": [],
              "optional": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 575,
                "end": 590,
                "properties": [
                  {
                    "type": "Property",
                    "start": 577,
                    "end": 588,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 577,
                      "end": 582,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 584,
                      "end": 588,
                      "value": null,
                      "raw": "null"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 594,
      "end": 652,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 600,
          "end": 651,
          "id": {
            "type": "Identifier",
            "start": 600,
            "end": 632,
            "decorators": [],
            "name": "values2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 607,
              "end": 632,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 609,
                "end": 632,
                "typeName": {
                  "type": "Identifier",
                  "start": 609,
                  "end": 614,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 614,
                  "end": 632,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 615,
                      "end": 631,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 615,
                          "end": 618,
                          "literal": {
                            "type": "Literal",
                            "start": 615,
                            "end": 618,
                            "value": "1",
                            "raw": "\"1\""
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 621,
                          "end": 624,
                          "literal": {
                            "type": "Literal",
                            "start": 621,
                            "end": 624,
                            "value": "2",
                            "raw": "\"2\""
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 627,
                          "end": 631
                        }
                      ]
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 635,
            "end": 651,
            "elements": [
              {
                "type": "Literal",
                "start": 636,
                "end": 639,
                "value": "1",
                "raw": "\"1\""
              },
              {
                "type": "Literal",
                "start": 641,
                "end": 644,
                "value": "2",
                "raw": "\"2\""
              },
              {
                "type": "Literal",
                "start": 646,
                "end": 650,
                "value": null,
                "raw": "null"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 653,
      "end": 703,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 659,
          "end": 702,
          "id": {
            "type": "Identifier",
            "start": 659,
            "end": 674,
            "decorators": [],
            "name": "filteredValues2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 677,
            "end": 702,
            "callee": {
              "type": "MemberExpression",
              "start": 677,
              "end": 691,
              "object": {
                "type": "Identifier",
                "start": 677,
                "end": 684,
                "decorators": [],
                "name": "values2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 685,
                "end": 691,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 692,
                "end": 701,
                "decorators": [],
                "name": "isNotNull",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 705,
      "end": 767,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 711,
          "end": 766,
          "id": {
            "type": "Identifier",
            "start": 711,
            "end": 718,
            "decorators": [],
            "name": "values1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 721,
            "end": 766,
            "callee": {
              "type": "MemberExpression",
              "start": 721,
              "end": 746,
              "object": {
                "type": "ArrayExpression",
                "start": 721,
                "end": 742,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 722,
                    "end": 727,
                    "decorators": [],
                    "name": "item1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 729,
                    "end": 734,
                    "decorators": [],
                    "name": "item2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 736,
                    "end": 741,
                    "decorators": [],
                    "name": "item3",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 743,
                "end": 746,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 747,
                "end": 765,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 747,
                    "end": 751,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "start": 755,
                  "end": 765,
                  "object": {
                    "type": "Identifier",
                    "start": 755,
                    "end": 759,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 760,
                    "end": 765,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 768,
      "end": 818,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 774,
          "end": 817,
          "id": {
            "type": "Identifier",
            "start": 774,
            "end": 789,
            "decorators": [],
            "name": "filteredValues1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 792,
            "end": 817,
            "callee": {
              "type": "MemberExpression",
              "start": 792,
              "end": 806,
              "object": {
                "type": "Identifier",
                "start": 792,
                "end": 799,
                "decorators": [],
                "name": "values1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 800,
                "end": 806,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 807,
                "end": 816,
                "decorators": [],
                "name": "isNotNull",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
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
