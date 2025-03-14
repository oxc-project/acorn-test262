recursiveLetConst.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 302,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 12,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "raw": "'use strict'",
        "value": "use strict"
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 21,
            "end": 26,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 45,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 32,
            "end": 36,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 33,
                "end": 35,
                "decorators": [],
                "name": "x1",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 39,
            "end": 45,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 39,
              "end": 41,
              "decorators": [],
              "name": "x1",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 44,
              "end": 45,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 62,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 57,
            "end": 62,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 61,
              "end": 62,
              "raw": "2",
              "value": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 64,
      "end": 84,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 83,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 70,
            "end": 74,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 71,
                "end": 73,
                "decorators": [],
                "name": "y1",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 77,
            "end": 83,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 77,
              "end": 79,
              "decorators": [],
              "name": "y1",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 82,
              "end": 83,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ForStatement",
      "start": 85,
      "end": 108,
      "body": {
        "type": "BlockStatement",
        "start": 105,
        "end": 108,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 90,
        "end": 99,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 94,
            "end": 99,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "v",
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 109,
      "end": 133,
      "body": {
        "type": "BlockStatement",
        "start": 130,
        "end": 133,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 114,
        "end": 125,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 118,
            "end": 125,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 118,
              "end": 121,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                }
              ],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "decorators": [],
              "name": "v",
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForInStatement",
      "start": 134,
      "end": 154,
      "body": {
        "type": "BlockStatement",
        "start": 151,
        "end": 154,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 139,
        "end": 144,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 143,
            "end": 144,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 148,
        "end": 149,
        "decorators": [],
        "name": "v",
        "optional": false
      }
    },
    {
      "type": "ForOfStatement",
      "start": 155,
      "end": 175,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 172,
        "end": 175,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 160,
        "end": 165,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 164,
            "end": 165,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 169,
        "end": 170,
        "decorators": [],
        "name": "v",
        "optional": false
      }
    },
    {
      "type": "ForOfStatement",
      "start": 176,
      "end": 198,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 195,
        "end": 198,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 181,
        "end": 188,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 185,
            "end": 188,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 185,
              "end": 188,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 186,
                  "end": 187,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                }
              ],
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 192,
        "end": 193,
        "decorators": [],
        "name": "v",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 199,
      "end": 217,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 217,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 203,
            "end": 212,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 204,
                "end": 211,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 206,
                  "decorators": [],
                  "name": "x2",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 211,
                  "decorators": [],
                  "name": "x2",
                  "optional": false
                }
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 215,
            "end": 217,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 218,
      "end": 236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 235,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 224,
            "decorators": [],
            "name": "z0",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 227,
            "end": 235,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 233,
              "end": 235,
              "decorators": [],
              "name": "z0",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 272,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 272,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 243,
            "decorators": [],
            "name": "z1",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 246,
            "end": 272,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 258,
              "end": 272,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 260,
                  "end": 270,
                  "argument": {
                    "type": "Identifier",
                    "start": 267,
                    "end": 269,
                    "decorators": [],
                    "name": "z1",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 273,
      "end": 302,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 277,
          "end": 302,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 277,
            "end": 279,
            "decorators": [],
            "name": "z2",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 282,
            "end": 302,
            "properties": [
              {
                "type": "Property",
                "start": 284,
                "end": 301,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 285,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 285,
                  "end": 301,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 288,
                    "end": 301,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 290,
                        "end": 300,
                        "argument": {
                          "type": "Identifier",
                          "start": 297,
                          "end": 299,
                          "decorators": [],
                          "name": "z2",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
