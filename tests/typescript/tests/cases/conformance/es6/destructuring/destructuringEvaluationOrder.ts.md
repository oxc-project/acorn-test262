__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 812,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 78,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 77,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 72,
            "decorators": [],
            "name": "trace",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 72,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 67,
                "end": 72,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 67,
                  "end": 70
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 75,
            "end": 77,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 122,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 121,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 88,
            "decorators": [],
            "name": "order",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 91,
            "end": 121,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 92,
                "end": 98,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 93,
                  "end": 98,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 95,
                    "end": 98
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 104,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 101,
                "end": 104
              }
            },
            "body": {
              "type": "CallExpression",
              "start": 108,
              "end": 121,
              "callee": {
                "type": "MemberExpression",
                "start": 108,
                "end": 118,
                "object": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 113,
                  "decorators": [],
                  "name": "trace",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 118,
                  "decorators": [],
                  "name": "push",
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
                  "start": 119,
                  "end": 120,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
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
      "start": 207,
      "end": 247,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 246,
          "id": {
            "type": "ArrayPattern",
            "start": 211,
            "end": 241,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 212,
                "end": 240,
                "decorators": [],
                "left": {
                  "type": "ObjectPattern",
                  "start": 212,
                  "end": 229,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 214,
                      "end": 227,
                      "kind": "init",
                      "key": {
                        "type": "CallExpression",
                        "start": 215,
                        "end": 223,
                        "callee": {
                          "type": "Identifier",
                          "start": 215,
                          "end": 220,
                          "decorators": [],
                          "name": "order",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 221,
                            "end": 222,
                            "value": 1,
                            "raw": "1"
                          }
                        ],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 226,
                        "end": 227,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "CallExpression",
                  "start": 232,
                  "end": 240,
                  "callee": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 237,
                    "decorators": [],
                    "name": "order",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 238,
                      "end": 239,
                      "value": 0,
                      "raw": "0"
                    }
                  ],
                  "optional": false
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 244,
            "end": 246,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 318,
      "end": 360,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 359,
          "id": {
            "type": "ArrayPattern",
            "start": 322,
            "end": 352,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 323,
                "end": 351,
                "decorators": [],
                "left": {
                  "type": "ObjectPattern",
                  "start": 323,
                  "end": 340,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 325,
                      "end": 338,
                      "kind": "init",
                      "key": {
                        "type": "CallExpression",
                        "start": 326,
                        "end": 334,
                        "callee": {
                          "type": "Identifier",
                          "start": 326,
                          "end": 331,
                          "decorators": [],
                          "name": "order",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 332,
                            "end": 333,
                            "value": 1,
                            "raw": "1"
                          }
                        ],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 338,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "CallExpression",
                  "start": 343,
                  "end": 351,
                  "callee": {
                    "type": "Identifier",
                    "start": 343,
                    "end": 348,
                    "decorators": [],
                    "name": "order",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 349,
                      "end": 350,
                      "value": 0,
                      "raw": "0"
                    }
                  ],
                  "optional": false
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 355,
            "end": 359,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 356,
                "end": 358,
                "properties": []
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
      "start": 594,
      "end": 661,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 598,
          "end": 660,
          "id": {
            "type": "ObjectPattern",
            "start": 598,
            "end": 648,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 600,
                "end": 640,
                "kind": "init",
                "key": {
                  "type": "CallExpression",
                  "start": 601,
                  "end": 609,
                  "callee": {
                    "type": "Identifier",
                    "start": 601,
                    "end": 606,
                    "decorators": [],
                    "name": "order",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 607,
                      "end": 608,
                      "value": 0,
                      "raw": "0"
                    }
                  ],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 612,
                  "end": 640,
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "start": 612,
                    "end": 629,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 614,
                        "end": 627,
                        "kind": "init",
                        "key": {
                          "type": "CallExpression",
                          "start": 615,
                          "end": 623,
                          "callee": {
                            "type": "Identifier",
                            "start": 615,
                            "end": 620,
                            "decorators": [],
                            "name": "order",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 621,
                              "end": 622,
                              "value": 2,
                              "raw": "2"
                            }
                          ],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 626,
                          "end": 627,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 632,
                    "end": 640,
                    "callee": {
                      "type": "Identifier",
                      "start": 632,
                      "end": 637,
                      "decorators": [],
                      "name": "order",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 638,
                        "end": 639,
                        "value": 1,
                        "raw": "1"
                      }
                    ],
                    "optional": false
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 642,
                "end": 646,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 645,
                  "end": 646,
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 651,
            "end": 660,
            "expression": {
              "type": "ObjectExpression",
              "start": 651,
              "end": 653,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 657,
              "end": 660
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 771,
      "end": 812,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 775,
          "end": 812,
          "id": {
            "type": "ArrayPattern",
            "start": 775,
            "end": 799,
            "decorators": [],
            "elements": [
              {
                "type": "ObjectPattern",
                "start": 776,
                "end": 784,
                "decorators": [],
                "properties": [
                  {
                    "type": "RestElement",
                    "start": 778,
                    "end": 782,
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "start": 781,
                      "end": 782,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "AssignmentPattern",
                "start": 786,
                "end": 791,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 786,
                  "end": 787,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 790,
                  "end": 791,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 792,
              "end": 799,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 794,
                "end": 799,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 794,
                  "end": 797
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 802,
            "end": 812,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 803,
                "end": 811,
                "properties": [
                  {
                    "type": "Property",
                    "start": 805,
                    "end": 809,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 805,
                      "end": 806,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 808,
                      "end": 809,
                      "value": 1,
                      "raw": "1"
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
