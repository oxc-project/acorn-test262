__ESTREE_TEST__:PASS:
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
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "value": "use strict",
        "raw": "'use strict'"
      },
      "directive": "use strict"
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
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 21,
            "end": 26,
            "left": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "value": 1,
              "raw": "1"
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
      "start": 28,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 45,
          "id": {
            "type": "ArrayPattern",
            "start": 32,
            "end": 36,
            "elements": [
              {
                "type": "Identifier",
                "start": 33,
                "end": 35,
                "name": "x1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 39,
            "end": 45,
            "left": {
              "type": "Identifier",
              "start": 39,
              "end": 41,
              "name": "x1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 44,
              "end": 45,
              "value": 1,
              "raw": "1"
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
      "start": 47,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 62,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 57,
            "end": 62,
            "left": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 61,
              "end": 62,
              "value": 2,
              "raw": "2"
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "ArrayPattern",
            "start": 70,
            "end": 74,
            "elements": [
              {
                "type": "Identifier",
                "start": 71,
                "end": 73,
                "name": "y1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 77,
            "end": 83,
            "left": {
              "type": "Identifier",
              "start": 77,
              "end": 79,
              "name": "y1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 82,
              "end": 83,
              "value": 1,
              "raw": "1"
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ForStatement",
      "start": 85,
      "end": 108,
      "init": {
        "type": "VariableDeclaration",
        "start": 90,
        "end": 99,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 94,
            "end": 99,
            "id": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 105,
        "end": 108,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 109,
      "end": 133,
      "init": {
        "type": "VariableDeclaration",
        "start": 114,
        "end": 125,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 118,
            "end": 125,
            "id": {
              "type": "ArrayPattern",
              "start": 118,
              "end": 121,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 130,
        "end": 133,
        "body": []
      }
    },
    {
      "type": "ForInStatement",
      "start": 134,
      "end": 154,
      "left": {
        "type": "VariableDeclaration",
        "start": 139,
        "end": 144,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 143,
            "end": 144,
            "id": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 148,
        "end": 149,
        "name": "v",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 151,
        "end": 154,
        "body": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 155,
      "end": 175,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 160,
        "end": 165,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 164,
            "end": 165,
            "id": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 169,
        "end": 170,
        "name": "v",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 172,
        "end": 175,
        "body": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 176,
      "end": 198,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 181,
        "end": 188,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 185,
            "end": 188,
            "id": {
              "type": "ArrayPattern",
              "start": 185,
              "end": 188,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 186,
                  "end": 187,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 192,
        "end": 193,
        "name": "v",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 195,
        "end": 198,
        "body": []
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
          "id": {
            "type": "ArrayPattern",
            "start": 203,
            "end": 212,
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 204,
                "end": 211,
                "left": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 206,
                  "name": "x2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 211,
                  "name": "x2",
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
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 215,
            "end": 217,
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
      "start": 218,
      "end": 236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 235,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 224,
            "name": "z0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 227,
            "end": 235,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 233,
              "end": 235,
              "name": "z0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 243,
            "name": "z1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 246,
            "end": 272,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                    "name": "z1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 277,
            "end": 279,
            "name": "z2",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 285,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 285,
                  "end": 301,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "name": "z2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
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
