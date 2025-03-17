__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 819,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "name": "Narrowable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "Narrow",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "A",
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
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "Narrowable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 117,
              "end": 129,
              "name": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "name": "A",
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
              "start": 132,
              "end": 144,
              "typeName": {
                "type": "Identifier",
                "start": 132,
                "end": 138,
                "name": "Narrow",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 249,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 166,
            "name": "satisfies",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 171,
            "end": 249,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 187,
              "end": 249,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 211,
                  "end": 234,
                  "name": "narrow",
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
                        "name": "Narrow",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "TNarrow",
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
                "type": "Identifier",
                "start": 243,
                "end": 249,
                "name": "narrow",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "TNarrow",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 204,
                      "end": 209,
                      "typeName": {
                        "type": "Identifier",
                        "start": 204,
                        "end": 209,
                        "name": "TWide",
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
                  }
                ]
              },
              "returnType": null
            },
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
                    "name": "TWide",
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 334,
      "end": 404,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 340,
          "end": 403,
          "id": {
            "type": "Identifier",
            "start": 340,
            "end": 349,
            "name": "isNotNull",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 352,
            "end": 403,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 357,
                "end": 372,
                "name": "value",
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 389,
              "end": 403,
              "left": {
                "type": "Identifier",
                "start": 389,
                "end": 394,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "Item",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 451,
          "end": 492,
          "id": {
            "type": "Identifier",
            "start": 451,
            "end": 456,
            "name": "item1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "satisfies",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
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
                      "name": "Item",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 479,
                      "end": 484,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 486,
                      "end": 489,
                      "value": "1",
                      "raw": "\"1\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 494,
      "end": 542,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 500,
          "end": 541,
          "id": {
            "type": "Identifier",
            "start": 500,
            "end": 505,
            "name": "item2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "satisfies",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
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
                      "name": "Item",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 528,
                      "end": 533,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 535,
                      "end": 538,
                      "value": "2",
                      "raw": "\"2\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 543,
      "end": 592,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 549,
          "end": 591,
          "id": {
            "type": "Identifier",
            "start": 549,
            "end": 554,
            "name": "item3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "satisfies",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
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
                      "name": "Item",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 577,
                      "end": 582,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 584,
                      "end": 588,
                      "value": null,
                      "raw": "null"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 594,
      "end": 652,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 600,
          "end": 651,
          "id": {
            "type": "Identifier",
            "start": 600,
            "end": 632,
            "name": "values2",
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
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 653,
      "end": 703,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 659,
          "end": 702,
          "id": {
            "type": "Identifier",
            "start": 659,
            "end": 674,
            "name": "filteredValues2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "values2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 685,
                "end": 691,
                "name": "filter",
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
                "start": 692,
                "end": 701,
                "name": "isNotNull",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 705,
      "end": 767,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 711,
          "end": 766,
          "id": {
            "type": "Identifier",
            "start": 711,
            "end": 718,
            "name": "values1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                    "name": "item1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 729,
                    "end": 734,
                    "name": "item2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 736,
                    "end": 741,
                    "name": "item3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 743,
                "end": 746,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 747,
                "end": 765,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 747,
                    "end": 751,
                    "name": "item",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "MemberExpression",
                  "start": 755,
                  "end": 765,
                  "object": {
                    "type": "Identifier",
                    "start": 755,
                    "end": 759,
                    "name": "item",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 760,
                    "end": 765,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 768,
      "end": 818,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 774,
          "end": 817,
          "id": {
            "type": "Identifier",
            "start": 774,
            "end": 789,
            "name": "filteredValues1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "values1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 800,
                "end": 806,
                "name": "filter",
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
                "start": 807,
                "end": 816,
                "name": "isNotNull",
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
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
