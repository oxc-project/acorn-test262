__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "trace",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 67,
                  "end": 70
                },
                "start": 67,
                "end": 72
              },
              "start": 65,
              "end": 72
            },
            "start": 60,
            "end": 72
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 75,
            "end": 77
          },
          "definite": false,
          "start": 60,
          "end": 77
        }
      ],
      "declare": false,
      "start": 56,
      "end": 78
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "order",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 88
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 95,
                    "end": 98
                  },
                  "start": 93,
                  "end": 98
                },
                "start": 92,
                "end": 98
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 101,
                "end": 104
              },
              "start": 99,
              "end": 104
            },
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "trace",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 108,
                  "end": 113
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 118
                },
                "optional": false,
                "computed": false,
                "start": 108,
                "end": 118
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 120
                }
              ],
              "optional": false,
              "start": 108,
              "end": 121
            },
            "id": null,
            "generator": false,
            "start": 91,
            "end": 121
          },
          "definite": false,
          "start": 83,
          "end": 121
        }
      ],
      "declare": false,
      "start": 79,
      "end": 122
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "order",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 215,
                          "end": 220
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 221,
                            "end": 222
                          }
                        ],
                        "optional": false,
                        "start": 215,
                        "end": 223
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 226,
                        "end": 227
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 214,
                      "end": 227
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 212,
                  "end": 229
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "order",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 237
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 238,
                      "end": 239
                    }
                  ],
                  "optional": false,
                  "start": 232,
                  "end": 240
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 212,
                "end": 240
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 241
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 244,
            "end": 246
          },
          "definite": false,
          "start": 211,
          "end": 246
        }
      ],
      "declare": false,
      "start": 207,
      "end": 247
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "order",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 326,
                          "end": 331
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 332,
                            "end": 333
                          }
                        ],
                        "optional": false,
                        "start": 326,
                        "end": 334
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 337,
                        "end": 338
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 325,
                      "end": 338
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 323,
                  "end": 340
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "order",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 343,
                    "end": 348
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 349,
                      "end": 350
                    }
                  ],
                  "optional": false,
                  "start": 343,
                  "end": 351
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 323,
                "end": 351
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 322,
            "end": 352
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 356,
                "end": 358
              }
            ],
            "start": 355,
            "end": 359
          },
          "definite": false,
          "start": 322,
          "end": 359
        }
      ],
      "declare": false,
      "start": 318,
      "end": 360
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "order",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 601,
                    "end": 606
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 607,
                      "end": 608
                    }
                  ],
                  "optional": false,
                  "start": 601,
                  "end": 609
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "order",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 615,
                            "end": 620
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 621,
                              "end": 622
                            }
                          ],
                          "optional": false,
                          "start": 615,
                          "end": 623
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 626,
                          "end": 627
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "optional": false,
                        "start": 614,
                        "end": 627
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 612,
                    "end": 629
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "order",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 632,
                      "end": 637
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 638,
                        "end": 639
                      }
                    ],
                    "optional": false,
                    "start": 632,
                    "end": 640
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 612,
                  "end": 640
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 600,
                "end": 640
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 645,
                  "end": 646
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 642,
                "end": 646
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 598,
            "end": 648
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 651,
              "end": 653
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 657,
              "end": 660
            },
            "start": 651,
            "end": 660
          },
          "definite": false,
          "start": 598,
          "end": 660
        }
      ],
      "declare": false,
      "start": 594,
      "end": 661
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 781,
                      "end": 782
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 778,
                    "end": 782
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 776,
                "end": 784
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 786,
                  "end": 787
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 790,
                  "end": 791
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 786,
                "end": 791
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 794,
                  "end": 797
                },
                "start": 794,
                "end": 799
              },
              "start": 792,
              "end": 799
            },
            "start": 775,
            "end": 799
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 805,
                      "end": 806
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 808,
                      "end": 809
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 805,
                    "end": 809
                  }
                ],
                "start": 803,
                "end": 811
              }
            ],
            "start": 802,
            "end": 812
          },
          "definite": false,
          "start": 775,
          "end": 812
        }
      ],
      "declare": false,
      "start": 771,
      "end": 812
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 812
}
```
