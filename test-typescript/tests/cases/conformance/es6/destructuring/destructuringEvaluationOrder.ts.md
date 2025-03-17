__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 813,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 77,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 72,
            "name": "trace",
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
            },
            "decorators": [],
            "optional": false
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 121,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 88,
            "name": "order",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 91,
            "end": 121,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 92,
                "end": 98,
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 93,
                  "end": 98,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 95,
                    "end": 98
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                  "name": "trace",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 118,
                  "name": "push",
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
                  "start": 119,
                  "end": 120,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 104,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 101,
                "end": 104
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 207,
      "end": 247,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 246,
          "id": {
            "type": "ArrayPattern",
            "start": 211,
            "end": 241,
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 212,
                "end": 240,
                "left": {
                  "type": "ObjectPattern",
                  "start": 212,
                  "end": 229,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 214,
                      "end": 227,
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "key": {
                        "type": "CallExpression",
                        "start": 215,
                        "end": 223,
                        "callee": {
                          "type": "Identifier",
                          "start": 215,
                          "end": 220,
                          "name": "order",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 221,
                            "end": 222,
                            "value": 1,
                            "raw": "1"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 226,
                        "end": 227,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
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
                    "name": "order",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 238,
                      "end": 239,
                      "value": 0,
                      "raw": "0"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 318,
      "end": 360,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 359,
          "id": {
            "type": "ArrayPattern",
            "start": 322,
            "end": 352,
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 323,
                "end": 351,
                "left": {
                  "type": "ObjectPattern",
                  "start": 323,
                  "end": 340,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 325,
                      "end": 338,
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "key": {
                        "type": "CallExpression",
                        "start": 326,
                        "end": 334,
                        "callee": {
                          "type": "Identifier",
                          "start": 326,
                          "end": 331,
                          "name": "order",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 332,
                            "end": 333,
                            "value": 1,
                            "raw": "1"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 338,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
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
                    "name": "order",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 349,
                      "end": 350,
                      "value": 0,
                      "raw": "0"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 594,
      "end": 661,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 598,
          "end": 660,
          "id": {
            "type": "ObjectPattern",
            "start": 598,
            "end": 648,
            "properties": [
              {
                "type": "Property",
                "start": 600,
                "end": 640,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 601,
                  "end": 609,
                  "callee": {
                    "type": "Identifier",
                    "start": 601,
                    "end": 606,
                    "name": "order",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 607,
                      "end": 608,
                      "value": 0,
                      "raw": "0"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 612,
                  "end": 640,
                  "left": {
                    "type": "ObjectPattern",
                    "start": 612,
                    "end": 629,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 614,
                        "end": 627,
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "key": {
                          "type": "CallExpression",
                          "start": 615,
                          "end": 623,
                          "callee": {
                            "type": "Identifier",
                            "start": 615,
                            "end": 620,
                            "name": "order",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 621,
                              "end": 622,
                              "value": 2,
                              "raw": "2"
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 626,
                          "end": 627,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
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
                      "name": "order",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 638,
                        "end": 639,
                        "value": 1,
                        "raw": "1"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 642,
                "end": 646,
                "argument": {
                  "type": "Identifier",
                  "start": 645,
                  "end": 646,
                  "name": "w",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "decorators": [],
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 771,
      "end": 812,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 775,
          "end": 812,
          "id": {
            "type": "ArrayPattern",
            "start": 775,
            "end": 799,
            "elements": [
              {
                "type": "ObjectPattern",
                "start": 776,
                "end": 784,
                "properties": [
                  {
                    "type": "RestElement",
                    "start": 778,
                    "end": 782,
                    "argument": {
                      "type": "Identifier",
                      "start": 781,
                      "end": 782,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "AssignmentPattern",
                "start": 786,
                "end": 791,
                "left": {
                  "type": "Identifier",
                  "start": 786,
                  "end": 787,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 790,
                  "end": 791,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 805,
                      "end": 806,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 808,
                      "end": 809,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
