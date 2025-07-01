__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 79
      },
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
              "start": 80,
              "end": 81
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 80,
            "end": 81
          }
        ],
        "start": 79,
        "end": 82
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 92
            },
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
                  "start": 94,
                  "end": 95
                },
                "typeArguments": null,
                "start": 94,
                "end": 95
              },
              "start": 92,
              "end": 95
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 89,
            "end": 96
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 104
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 105,
                      "end": 106
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 121,
                          "end": 122
                        },
                        "typeArguments": null,
                        "start": 121,
                        "end": 122
                      },
                      "start": 115,
                      "end": 122
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 105,
                    "end": 122
                  }
                ],
                "start": 104,
                "end": 123
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 127,
                        "end": 128
                      },
                      "typeArguments": null,
                      "start": 127,
                      "end": 128
                    },
                    "start": 125,
                    "end": 128
                  },
                  "start": 124,
                  "end": 128
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 131,
                      "end": 132
                    },
                    "typeArguments": null,
                    "start": 131,
                    "end": 132
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 133,
                      "end": 134
                    },
                    "typeArguments": null,
                    "start": 133,
                    "end": 134
                  },
                  "start": 131,
                  "end": 135
                },
                "start": 129,
                "end": 135
              },
              "body": null,
              "expression": false,
              "start": 104,
              "end": 136
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 101,
            "end": 136
          }
        ],
        "start": 83,
        "end": 138
      },
      "abstract": false,
      "declare": true,
      "start": 61,
      "end": 138
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 151
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 155
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 157,
                  "end": 160
                },
                "start": 157,
                "end": 160
              },
              "start": 155,
              "end": 160
            },
            "accessibility": null,
            "static": false,
            "start": 154,
            "end": 160
          }
        ],
        "start": 152,
        "end": 162
      },
      "declare": false,
      "start": 140,
      "end": 162
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 174
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 178
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 180,
                  "end": 183
                },
                "start": 180,
                "end": 183
              },
              "start": 178,
              "end": 183
            },
            "accessibility": null,
            "static": false,
            "start": 177,
            "end": 183
          }
        ],
        "start": 175,
        "end": 185
      },
      "declare": false,
      "start": 163,
      "end": 185
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
            "name": "tmp",
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
                      "name": "Test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 206,
                      "end": 210
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 211,
                            "end": 212
                          },
                          "typeArguments": null,
                          "start": 211,
                          "end": 212
                        }
                      ],
                      "start": 210,
                      "end": 213
                    },
                    "start": 206,
                    "end": 213
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 216,
                      "end": 220
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 221,
                            "end": 222
                          },
                          "typeArguments": null,
                          "start": 221,
                          "end": 222
                        }
                      ],
                      "start": 220,
                      "end": 223
                    },
                    "start": 216,
                    "end": 223
                  }
                ],
                "start": 206,
                "end": 223
              },
              "start": 204,
              "end": 223
            },
            "start": 201,
            "end": 223
          },
          "init": null,
          "definite": false,
          "start": 201,
          "end": 223
        }
      ],
      "declare": true,
      "start": 187,
      "end": 224
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "tmp",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 237
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "get",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 241
          },
          "optional": false,
          "computed": false,
          "start": 234,
          "end": 241
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "t",
            "raw": "'t'",
            "start": 242,
            "end": 245
          }
        ],
        "optional": false,
        "start": 234,
        "end": 246
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "A",
            "raw": "'A'",
            "start": 259,
            "end": 262
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 264,
              "end": 270
            }
          ],
          "start": 254,
          "end": 270
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "B",
            "raw": "'B'",
            "start": 280,
            "end": 283
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 285,
              "end": 291
            }
          ],
          "start": 275,
          "end": 291
        }
      ],
      "start": 226,
      "end": 293
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 368,
                      "end": 374
                    },
                    "start": 368,
                    "end": 376
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 379,
                      "end": 385
                    },
                    "start": 379,
                    "end": 387
                  }
                ],
                "start": 368,
                "end": 387
              },
              "start": 366,
              "end": 387
            },
            "start": 363,
            "end": 387
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 390,
            "end": 392
          },
          "definite": false,
          "start": 363,
          "end": 392
        }
      ],
      "declare": false,
      "start": 357,
      "end": 393
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
            "name": "arr1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 444,
                  "end": 450
                },
                "start": 444,
                "end": 452
              },
              "start": 442,
              "end": 452
            },
            "start": 438,
            "end": 452
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 456,
            "end": 458
          },
          "definite": false,
          "start": 438,
          "end": 458
        }
      ],
      "declare": false,
      "start": 432,
      "end": 459
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
            "name": "arr2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 473,
                  "end": 479
                },
                "start": 473,
                "end": 481
              },
              "start": 470,
              "end": 481
            },
            "start": 466,
            "end": 481
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 484,
            "end": 486
          },
          "definite": false,
          "start": 466,
          "end": 486
        }
      ],
      "declare": false,
      "start": 460,
      "end": 487
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 489,
            "end": 492
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 493,
            "end": 496
          },
          "optional": false,
          "computed": false,
          "start": 489,
          "end": 496
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 501,
                        "end": 507
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 510,
                        "end": 516
                      }
                    ],
                    "start": 501,
                    "end": 516
                  },
                  "start": 499,
                  "end": 516
                },
                "start": 498,
                "end": 516
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 525,
                    "end": 531
                  },
                  "start": 523,
                  "end": 531
                },
                "start": 518,
                "end": 531
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 550,
                    "end": 555
                  },
                  "start": 543,
                  "end": 555
                }
              ],
              "start": 536,
              "end": 557
            },
            "id": null,
            "generator": false,
            "start": 497,
            "end": 557
          }
        ],
        "optional": false,
        "start": 489,
        "end": 558
      },
      "directive": null,
      "start": 489,
      "end": 558
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 635,
            "end": 638
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null,
            "start": 639,
            "end": 645
          },
          "optional": false,
          "computed": false,
          "start": 635,
          "end": 645
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "acc",
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
                      "start": 652,
                      "end": 657
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 658,
                          "end": 664
                        }
                      ],
                      "start": 657,
                      "end": 665
                    },
                    "start": 652,
                    "end": 665
                  },
                  "start": 650,
                  "end": 665
                },
                "start": 647,
                "end": 665
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 670,
                        "end": 676
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 679,
                        "end": 685
                      }
                    ],
                    "start": 670,
                    "end": 685
                  },
                  "start": 668,
                  "end": 685
                },
                "start": 667,
                "end": 685
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 694,
                    "end": 700
                  },
                  "start": 692,
                  "end": 700
                },
                "start": 687,
                "end": 700
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 719,
                    "end": 721
                  },
                  "start": 712,
                  "end": 721
                }
              ],
              "start": 705,
              "end": 723
            },
            "id": null,
            "generator": false,
            "start": 646,
            "end": 723
          },
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 725,
            "end": 727
          }
        ],
        "optional": false,
        "start": 635,
        "end": 728
      },
      "directive": null,
      "start": 635,
      "end": 728
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 730,
            "end": 733
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null,
            "start": 734,
            "end": 741
          },
          "optional": false,
          "computed": false,
          "start": 730,
          "end": 741
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 746,
                        "end": 752
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 755,
                        "end": 761
                      }
                    ],
                    "start": 746,
                    "end": 761
                  },
                  "start": 744,
                  "end": 761
                },
                "start": 743,
                "end": 761
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 770,
                    "end": 776
                  },
                  "start": 768,
                  "end": 776
                },
                "start": 763,
                "end": 776
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 795,
                    "end": 800
                  },
                  "start": 788,
                  "end": 800
                }
              ],
              "start": 781,
              "end": 802
            },
            "id": null,
            "generator": false,
            "start": 742,
            "end": 802
          }
        ],
        "optional": false,
        "start": 730,
        "end": 803
      },
      "directive": null,
      "start": 730,
      "end": 803
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr1",
            "optional": false,
            "typeAnnotation": null,
            "start": 805,
            "end": 809
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 810,
            "end": 813
          },
          "optional": false,
          "computed": false,
          "start": 805,
          "end": 813
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 818,
                    "end": 824
                  },
                  "start": 816,
                  "end": 824
                },
                "start": 815,
                "end": 824
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 833,
                    "end": 839
                  },
                  "start": 831,
                  "end": 839
                },
                "start": 826,
                "end": 839
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 858,
                    "end": 863
                  },
                  "start": 851,
                  "end": 863
                }
              ],
              "start": 844,
              "end": 865
            },
            "id": null,
            "generator": false,
            "start": 814,
            "end": 865
          }
        ],
        "optional": false,
        "start": 805,
        "end": 866
      },
      "directive": null,
      "start": 805,
      "end": 866
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr1",
            "optional": false,
            "typeAnnotation": null,
            "start": 868,
            "end": 872
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null,
            "start": 873,
            "end": 879
          },
          "optional": false,
          "computed": false,
          "start": 868,
          "end": 879
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "acc",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 886,
                      "end": 892
                    },
                    "start": 886,
                    "end": 894
                  },
                  "start": 884,
                  "end": 894
                },
                "start": 881,
                "end": 894
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 899,
                    "end": 905
                  },
                  "start": 897,
                  "end": 905
                },
                "start": 896,
                "end": 905
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 914,
                    "end": 920
                  },
                  "start": 912,
                  "end": 920
                },
                "start": 907,
                "end": 920
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 940,
                        "end": 941
                      }
                    ],
                    "start": 939,
                    "end": 942
                  },
                  "start": 932,
                  "end": 942
                }
              ],
              "start": 925,
              "end": 944
            },
            "id": null,
            "generator": false,
            "start": 880,
            "end": 944
          },
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 946,
            "end": 948
          }
        ],
        "optional": false,
        "start": 868,
        "end": 949
      },
      "directive": null,
      "start": 868,
      "end": 949
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr1",
            "optional": false,
            "typeAnnotation": null,
            "start": 951,
            "end": 955
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null,
            "start": 956,
            "end": 963
          },
          "optional": false,
          "computed": false,
          "start": 951,
          "end": 963
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 968,
                    "end": 974
                  },
                  "start": 966,
                  "end": 974
                },
                "start": 965,
                "end": 974
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 983,
                    "end": 989
                  },
                  "start": 981,
                  "end": 989
                },
                "start": 976,
                "end": 989
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1008,
                    "end": 1013
                  },
                  "start": 1001,
                  "end": 1013
                }
              ],
              "start": 994,
              "end": 1015
            },
            "id": null,
            "generator": false,
            "start": 964,
            "end": 1015
          }
        ],
        "optional": false,
        "start": 951,
        "end": 1016
      },
      "directive": null,
      "start": 951,
      "end": 1016
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1017,
            "end": 1021
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 1022,
            "end": 1025
          },
          "optional": false,
          "computed": false,
          "start": 1017,
          "end": 1025
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1031,
                    "end": 1037
                  },
                  "start": 1028,
                  "end": 1037
                },
                "start": 1027,
                "end": 1037
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1046,
                    "end": 1052
                  },
                  "start": 1044,
                  "end": 1052
                },
                "start": 1039,
                "end": 1052
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1071,
                    "end": 1076
                  },
                  "start": 1064,
                  "end": 1076
                }
              ],
              "start": 1057,
              "end": 1078
            },
            "id": null,
            "generator": false,
            "start": 1026,
            "end": 1078
          }
        ],
        "optional": false,
        "start": 1017,
        "end": 1079
      },
      "directive": null,
      "start": 1017,
      "end": 1079
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1081,
            "end": 1085
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null,
            "start": 1086,
            "end": 1092
          },
          "optional": false,
          "computed": false,
          "start": 1081,
          "end": 1092
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "acc",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1099,
                      "end": 1105
                    },
                    "start": 1099,
                    "end": 1107
                  },
                  "start": 1097,
                  "end": 1107
                },
                "start": 1094,
                "end": 1107
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1112,
                    "end": 1118
                  },
                  "start": 1110,
                  "end": 1118
                },
                "start": 1109,
                "end": 1118
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1127,
                    "end": 1133
                  },
                  "start": 1125,
                  "end": 1133
                },
                "start": 1120,
                "end": 1133
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 1152,
                    "end": 1154
                  },
                  "start": 1145,
                  "end": 1154
                }
              ],
              "start": 1138,
              "end": 1156
            },
            "id": null,
            "generator": false,
            "start": 1093,
            "end": 1156
          },
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 1158,
            "end": 1160
          }
        ],
        "optional": false,
        "start": 1081,
        "end": 1161
      },
      "directive": null,
      "start": 1081,
      "end": 1161
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1163,
            "end": 1167
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null,
            "start": 1168,
            "end": 1175
          },
          "optional": false,
          "computed": false,
          "start": 1163,
          "end": 1175
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1180,
                    "end": 1186
                  },
                  "start": 1178,
                  "end": 1186
                },
                "start": 1177,
                "end": 1186
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1195,
                    "end": 1201
                  },
                  "start": 1193,
                  "end": 1201
                },
                "start": 1188,
                "end": 1201
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1220,
                    "end": 1225
                  },
                  "start": 1213,
                  "end": 1225
                }
              ],
              "start": 1206,
              "end": 1227
            },
            "id": null,
            "generator": false,
            "start": 1176,
            "end": 1227
          }
        ],
        "optional": false,
        "start": 1163,
        "end": 1228
      },
      "directive": null,
      "start": 1163,
      "end": 1228
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1306,
        "end": 1309
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doThing",
              "optional": false,
              "typeAnnotation": null,
              "start": 1316,
              "end": 1323
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1327,
                    "end": 1334
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSThisType",
                        "start": 1335,
                        "end": 1339
                      }
                    ],
                    "start": 1334,
                    "end": 1340
                  },
                  "start": 1327,
                  "end": 1340
                },
                "start": 1325,
                "end": 1340
              },
              "body": null,
              "expression": false,
              "start": 1323,
              "end": 1340
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1316,
            "end": 1340
          }
        ],
        "start": 1310,
        "end": 1342
      },
      "abstract": false,
      "declare": true,
      "start": 1292,
      "end": 1342
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 1358,
        "end": 1361
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1370,
        "end": 1373
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1380,
              "end": 1383
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1385,
                "end": 1391
              },
              "start": 1383,
              "end": 1391
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1380,
            "end": 1392
          }
        ],
        "start": 1374,
        "end": 1394
      },
      "abstract": false,
      "declare": true,
      "start": 1344,
      "end": 1394
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 1409,
        "end": 1412
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1421,
        "end": 1424
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 1431,
              "end": 1434
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1436,
                "end": 1442
              },
              "start": 1434,
              "end": 1442
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1431,
            "end": 1443
          }
        ],
        "start": 1425,
        "end": 1445
      },
      "abstract": false,
      "declare": true,
      "start": 1395,
      "end": 1445
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
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
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1462,
                      "end": 1465
                    },
                    "typeArguments": null,
                    "start": 1462,
                    "end": 1465
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1468,
                      "end": 1471
                    },
                    "typeArguments": null,
                    "start": 1468,
                    "end": 1471
                  }
                ],
                "start": 1462,
                "end": 1471
              },
              "start": 1460,
              "end": 1471
            },
            "start": 1459,
            "end": 1471
          },
          "init": null,
          "definite": false,
          "start": 1459,
          "end": 1471
        }
      ],
      "declare": true,
      "start": 1447,
      "end": 1472
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1517,
                "end": 1518
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "doThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 1519,
                "end": 1526
              },
              "optional": false,
              "computed": false,
              "start": 1517,
              "end": 1526
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1517,
            "end": 1528
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 1529,
            "end": 1533
          },
          "optional": false,
          "computed": false,
          "start": 1517,
          "end": 1533
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
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
                          "name": "Bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1543,
                          "end": 1546
                        },
                        "typeArguments": null,
                        "start": 1543,
                        "end": 1546
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Baz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1549,
                          "end": 1552
                        },
                        "typeArguments": null,
                        "start": 1549,
                        "end": 1552
                      }
                    ],
                    "start": 1543,
                    "end": 1552
                  },
                  "start": 1541,
                  "end": 1552
                },
                "start": 1535,
                "end": 1552
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1557,
              "end": 1573
            },
            "id": null,
            "generator": false,
            "start": 1534,
            "end": 1573
          }
        ],
        "optional": false,
        "start": 1517,
        "end": 1574
      },
      "directive": null,
      "start": 1517,
      "end": 1575
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 61,
  "end": 1575
}
```
