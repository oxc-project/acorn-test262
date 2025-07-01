__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Narrowable",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
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
        ],
        "start": 18,
        "end": 52
      },
      "declare": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Narrow",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 66
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 68
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 67,
            "end": 68
          }
        ],
        "start": 66,
        "end": 69
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 73,
                "end": 74
              },
              "typeArguments": null,
              "start": 73,
              "end": 74
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Narrowable",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 93
              },
              "typeArguments": null,
              "start": 83,
              "end": 93
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 97
              },
              "typeArguments": null,
              "start": 96,
              "end": 97
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 100,
              "end": 105
            },
            "start": 73,
            "end": 105
          },
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 118
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 129
                },
                "typeArguments": null,
                "start": 128,
                "end": 129
              },
              "start": 122,
              "end": 129
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Narrow",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 138
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 139,
                        "end": 140
                      },
                      "typeArguments": null,
                      "start": 139,
                      "end": 140
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 141,
                        "end": 142
                      },
                      "typeArguments": null,
                      "start": 141,
                      "end": 142
                    },
                    "start": 139,
                    "end": 143
                  }
                ],
                "start": 138,
                "end": 144
              },
              "start": 132,
              "end": 144
            },
            "optional": false,
            "readonly": null,
            "start": 110,
            "end": 147
          }
        ],
        "start": 72,
        "end": 148
      },
      "declare": false,
      "start": 55,
      "end": 149
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "satisfies",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 166
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TWide",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 172,
                    "end": 177
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 172,
                  "end": 177
                }
              ],
              "start": 171,
              "end": 179
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TNarrow",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 188,
                      "end": 195
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TWide",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 204,
                        "end": 209
                      },
                      "typeArguments": null,
                      "start": 204,
                      "end": 209
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 188,
                    "end": 209
                  }
                ],
                "start": 187,
                "end": 210
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "narrow",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Narrow",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 219,
                        "end": 225
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TNarrow",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 226,
                              "end": 233
                            },
                            "typeArguments": null,
                            "start": 226,
                            "end": 233
                          }
                        ],
                        "start": 225,
                        "end": 234
                      },
                      "start": 219,
                      "end": 234
                    },
                    "start": 217,
                    "end": 234
                  },
                  "start": 211,
                  "end": 234
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "narrow",
                "optional": false,
                "typeAnnotation": null,
                "start": 243,
                "end": 249
              },
              "id": null,
              "generator": false,
              "start": 187,
              "end": 249
            },
            "id": null,
            "generator": false,
            "start": 171,
            "end": 249
          },
          "definite": false,
          "start": 157,
          "end": 249
        }
      ],
      "declare": false,
      "start": 151,
      "end": 250
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "isNotNull",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 349
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 353,
                    "end": 354
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 353,
                  "end": 354
                }
              ],
              "start": 352,
              "end": 356
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 364,
                          "end": 365
                        },
                        "typeArguments": null,
                        "start": 364,
                        "end": 365
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 368,
                        "end": 372
                      }
                    ],
                    "start": 364,
                    "end": 372
                  },
                  "start": 362,
                  "end": 372
                },
                "start": 357,
                "end": 372
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 375,
                  "end": 380
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 384,
                      "end": 385
                    },
                    "typeArguments": null,
                    "start": 384,
                    "end": 385
                  },
                  "start": 384,
                  "end": 385
                },
                "start": 375,
                "end": 385
              },
              "start": 373,
              "end": 385
            },
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 389,
                "end": 394
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 399,
                "end": 403
              },
              "start": 389,
              "end": 403
            },
            "id": null,
            "generator": false,
            "start": 352,
            "end": 403
          },
          "definite": false,
          "start": 340,
          "end": 403
        }
      ],
      "declare": false,
      "start": 334,
      "end": 404
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 411,
        "end": 415
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 425
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 427,
                "end": 440
              },
              "start": 425,
              "end": 440
            },
            "accessibility": null,
            "static": false,
            "start": 420,
            "end": 440
          }
        ],
        "start": 418,
        "end": 442
      },
      "declare": false,
      "start": 406,
      "end": 443
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "item1",
            "optional": false,
            "typeAnnotation": null,
            "start": 451,
            "end": 456
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "satisfies",
                "optional": false,
                "typeAnnotation": null,
                "start": 459,
                "end": 468
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 469,
                      "end": 473
                    },
                    "typeArguments": null,
                    "start": 469,
                    "end": 473
                  }
                ],
                "start": 468,
                "end": 474
              },
              "arguments": [],
              "optional": false,
              "start": 459,
              "end": 476
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 479,
                      "end": 484
                    },
                    "value": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 486,
                      "end": 489
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 479,
                    "end": 489
                  }
                ],
                "start": 477,
                "end": 491
              }
            ],
            "optional": false,
            "start": 459,
            "end": 492
          },
          "definite": false,
          "start": 451,
          "end": 492
        }
      ],
      "declare": false,
      "start": 445,
      "end": 493
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "item2",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 505
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "satisfies",
                "optional": false,
                "typeAnnotation": null,
                "start": 508,
                "end": 517
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 518,
                      "end": 522
                    },
                    "typeArguments": null,
                    "start": 518,
                    "end": 522
                  }
                ],
                "start": 517,
                "end": 523
              },
              "arguments": [],
              "optional": false,
              "start": 508,
              "end": 525
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 528,
                      "end": 533
                    },
                    "value": {
                      "type": "Literal",
                      "value": "2",
                      "raw": "\"2\"",
                      "start": 535,
                      "end": 538
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 528,
                    "end": 538
                  }
                ],
                "start": 526,
                "end": 540
              }
            ],
            "optional": false,
            "start": 508,
            "end": 541
          },
          "definite": false,
          "start": 500,
          "end": 541
        }
      ],
      "declare": false,
      "start": 494,
      "end": 542
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "item3",
            "optional": false,
            "typeAnnotation": null,
            "start": 549,
            "end": 554
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "satisfies",
                "optional": false,
                "typeAnnotation": null,
                "start": 557,
                "end": 566
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 567,
                      "end": 571
                    },
                    "typeArguments": null,
                    "start": 567,
                    "end": 571
                  }
                ],
                "start": 566,
                "end": 572
              },
              "arguments": [],
              "optional": false,
              "start": 557,
              "end": 574
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 577,
                      "end": 582
                    },
                    "value": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 584,
                      "end": 588
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 577,
                    "end": 588
                  }
                ],
                "start": 575,
                "end": 590
              }
            ],
            "optional": false,
            "start": 557,
            "end": 591
          },
          "definite": false,
          "start": 549,
          "end": 591
        }
      ],
      "declare": false,
      "start": 543,
      "end": 592
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "values2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 609,
                  "end": 614
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "1",
                            "raw": "\"1\"",
                            "start": 615,
                            "end": 618
                          },
                          "start": 615,
                          "end": 618
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "2",
                            "raw": "\"2\"",
                            "start": 621,
                            "end": 624
                          },
                          "start": 621,
                          "end": 624
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 627,
                          "end": 631
                        }
                      ],
                      "start": 615,
                      "end": 631
                    }
                  ],
                  "start": 614,
                  "end": 632
                },
                "start": 609,
                "end": 632
              },
              "start": 607,
              "end": 632
            },
            "start": 600,
            "end": 632
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 636,
                "end": 639
              },
              {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 641,
                "end": 644
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 646,
                "end": 650
              }
            ],
            "start": 635,
            "end": 651
          },
          "definite": false,
          "start": 600,
          "end": 651
        }
      ],
      "declare": false,
      "start": 594,
      "end": 652
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "filteredValues2",
            "optional": false,
            "typeAnnotation": null,
            "start": 659,
            "end": 674
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "values2",
                "optional": false,
                "typeAnnotation": null,
                "start": 677,
                "end": 684
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 685,
                "end": 691
              },
              "optional": false,
              "computed": false,
              "start": 677,
              "end": 691
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isNotNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 692,
                "end": 701
              }
            ],
            "optional": false,
            "start": 677,
            "end": 702
          },
          "definite": false,
          "start": 659,
          "end": 702
        }
      ],
      "declare": false,
      "start": 653,
      "end": 703
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "values1",
            "optional": false,
            "typeAnnotation": null,
            "start": 711,
            "end": 718
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 722,
                    "end": 727
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 729,
                    "end": 734
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 736,
                    "end": 741
                  }
                ],
                "start": 721,
                "end": 742
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 743,
                "end": 746
              },
              "optional": false,
              "computed": false,
              "start": 721,
              "end": 746
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 747,
                    "end": 751
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 755,
                    "end": 759
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 760,
                    "end": 765
                  },
                  "optional": false,
                  "computed": false,
                  "start": 755,
                  "end": 765
                },
                "id": null,
                "generator": false,
                "start": 747,
                "end": 765
              }
            ],
            "optional": false,
            "start": 721,
            "end": 766
          },
          "definite": false,
          "start": 711,
          "end": 766
        }
      ],
      "declare": false,
      "start": 705,
      "end": 767
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "filteredValues1",
            "optional": false,
            "typeAnnotation": null,
            "start": 774,
            "end": 789
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "values1",
                "optional": false,
                "typeAnnotation": null,
                "start": 792,
                "end": 799
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 800,
                "end": 806
              },
              "optional": false,
              "computed": false,
              "start": 792,
              "end": 806
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isNotNull",
                "optional": false,
                "typeAnnotation": null,
                "start": 807,
                "end": 816
              }
            ],
            "optional": false,
            "start": 792,
            "end": 817
          },
          "definite": false,
          "start": 774,
          "end": 817
        }
      ],
      "declare": false,
      "start": 768,
      "end": 818
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 818
}
```
