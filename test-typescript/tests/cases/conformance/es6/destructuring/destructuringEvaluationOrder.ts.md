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
          "definite": false,
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
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 88,
            "decorators": [],
            "name": "order",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 91,
            "end": 121,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 108,
              "end": 121,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
                  "decorators": [],
                  "name": "n",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 108,
                "end": 118,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 113,
                  "decorators": [],
                  "name": "trace",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 118,
                  "decorators": [],
                  "name": "push",
                  "optional": false
                }
              },
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
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
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
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
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 214,
                      "end": 227,
                      "computed": true,
                      "key": {
                        "type": "CallExpression",
                        "start": 215,
                        "end": 223,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 221,
                            "end": 222,
                            "raw": "1",
                            "value": 1
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 215,
                          "end": 220,
                          "decorators": [],
                          "name": "order",
                          "optional": false
                        },
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 226,
                        "end": 227,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  ]
                },
                "optional": false,
                "right": {
                  "type": "CallExpression",
                  "start": 232,
                  "end": 240,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 238,
                      "end": 239,
                      "raw": "0",
                      "value": 0
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 237,
                    "decorators": [],
                    "name": "order",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 244,
            "end": 246,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
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
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 325,
                      "end": 338,
                      "computed": true,
                      "key": {
                        "type": "CallExpression",
                        "start": 326,
                        "end": 334,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 332,
                            "end": 333,
                            "raw": "1",
                            "value": 1
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 326,
                          "end": 331,
                          "decorators": [],
                          "name": "order",
                          "optional": false
                        },
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 338,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    }
                  ]
                },
                "optional": false,
                "right": {
                  "type": "CallExpression",
                  "start": 343,
                  "end": 351,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 349,
                      "end": 350,
                      "raw": "0",
                      "value": 0
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 343,
                    "end": 348,
                    "decorators": [],
                    "name": "order",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "optional": false
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
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 598,
            "end": 648,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 600,
                "end": 640,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 601,
                  "end": 609,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 607,
                      "end": 608,
                      "raw": "0",
                      "value": 0
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 601,
                    "end": 606,
                    "decorators": [],
                    "name": "order",
                    "optional": false
                  },
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
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
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 614,
                        "end": 627,
                        "computed": true,
                        "key": {
                          "type": "CallExpression",
                          "start": 615,
                          "end": 623,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 621,
                              "end": 622,
                              "raw": "2",
                              "value": 2
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 615,
                            "end": 620,
                            "decorators": [],
                            "name": "order",
                            "optional": false
                          },
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 626,
                          "end": 627,
                          "decorators": [],
                          "name": "z",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "optional": false,
                  "right": {
                    "type": "CallExpression",
                    "start": 632,
                    "end": 640,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 638,
                        "end": 639,
                        "raw": "1",
                        "value": 1
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 632,
                      "end": 637,
                      "decorators": [],
                      "name": "order",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 642,
                "end": 646,
                "argument": {
                  "type": "Identifier",
                  "start": 645,
                  "end": 646,
                  "decorators": [],
                  "name": "w",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
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
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
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
                "optional": false,
                "properties": [
                  {
                    "type": "RestElement",
                    "start": 778,
                    "end": 782,
                    "argument": {
                      "type": "Identifier",
                      "start": 781,
                      "end": 782,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false
                  }
                ]
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
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Identifier",
                  "start": 790,
                  "end": 791,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 805,
                      "end": 806,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 808,
                      "end": 809,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
