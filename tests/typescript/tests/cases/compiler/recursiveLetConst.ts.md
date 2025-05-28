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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 21,
            "end": 26,
            "left": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 46,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 45,
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
                "optional": false,
                "typeAnnotation": null
              }
            ],
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
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 63,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 62,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 57,
            "end": 62,
            "left": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 64,
      "end": 84,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 83,
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
                "optional": false,
                "typeAnnotation": null
              }
            ],
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
              "decorators": [],
              "name": "y1",
              "optional": false,
              "typeAnnotation": null
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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 94,
            "end": 99,
            "id": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 118,
            "end": 125,
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
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 143,
            "end": 144,
            "id": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 148,
        "end": 149,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 164,
            "end": 165,
            "id": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 169,
        "end": 170,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 185,
            "end": 188,
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
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 192,
        "end": 193,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 217,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 211,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null
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
            "start": 215,
            "end": 217,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 218,
      "end": 236,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 235,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 224,
            "decorators": [],
            "name": "z0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 227,
            "end": 235,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 233,
              "end": 235,
              "decorators": [],
              "name": "z0",
              "optional": false,
              "typeAnnotation": null
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
      "start": 237,
      "end": 272,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 272,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 243,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 246,
            "end": 272,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
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
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 273,
      "end": 302,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 277,
          "end": 302,
          "id": {
            "type": "Identifier",
            "start": 277,
            "end": 279,
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 285,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 285,
                  "end": 301,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
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
