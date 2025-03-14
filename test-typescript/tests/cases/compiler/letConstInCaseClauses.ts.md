letConstInCaseClauses.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 394,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 20,
            "end": 22,
            "raw": "20",
            "value": 20
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "BlockStatement",
      "start": 24,
      "end": 204,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 30,
          "end": 40,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 34,
              "end": 39,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 38,
                "end": 39,
                "raw": "1",
                "value": 1
              }
            }
          ],
          "declare": false,
          "kind": "let"
        },
        {
          "type": "VariableDeclaration",
          "start": 45,
          "end": 55,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 49,
              "end": 54,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 49,
                "end": 50,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 53,
                "end": 54,
                "raw": "2",
                "value": 2
              }
            }
          ],
          "declare": false,
          "kind": "let"
        },
        {
          "type": "ExpressionStatement",
          "start": 60,
          "end": 74,
          "expression": {
            "type": "CallExpression",
            "start": 60,
            "end": 74,
            "arguments": [
              {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 60,
              "end": 71,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 60,
                "end": 67,
                "decorators": [],
                "name": "console",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 68,
                "end": 71,
                "decorators": [],
                "name": "log",
                "optional": false
              }
            },
            "optional": false
          }
        },
        {
          "type": "SwitchStatement",
          "start": 79,
          "end": 138,
          "cases": [
            {
              "type": "SwitchCase",
              "start": 100,
              "end": 132,
              "consequent": [
                {
                  "type": "VariableDeclaration",
                  "start": 121,
                  "end": 132,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 125,
                      "end": 131,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 126,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 129,
                        "end": 131,
                        "raw": "20",
                        "value": 20
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ],
              "test": {
                "type": "Literal",
                "start": 105,
                "end": 107,
                "raw": "10",
                "value": 10
              }
            }
          ],
          "discriminant": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        {
          "type": "SwitchStatement",
          "start": 143,
          "end": 202,
          "cases": [
            {
              "type": "SwitchCase",
              "start": 164,
              "end": 196,
              "consequent": [
                {
                  "type": "VariableDeclaration",
                  "start": 185,
                  "end": 196,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 189,
                      "end": 195,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 190,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 193,
                        "end": 195,
                        "raw": "20",
                        "value": 20
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ],
              "test": {
                "type": "Literal",
                "start": 169,
                "end": 171,
                "raw": "10",
                "value": 10
              }
            }
          ],
          "discriminant": {
            "type": "Identifier",
            "start": 151,
            "end": 152,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 206,
      "end": 394,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 212,
          "end": 224,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 218,
              "end": 223,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 218,
                "end": 219,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 222,
                "end": 223,
                "raw": "1",
                "value": 1
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "VariableDeclaration",
          "start": 229,
          "end": 241,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 235,
              "end": 240,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 235,
                "end": 236,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 239,
                "end": 240,
                "raw": "2",
                "value": 2
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "ExpressionStatement",
          "start": 246,
          "end": 260,
          "expression": {
            "type": "CallExpression",
            "start": 246,
            "end": 260,
            "arguments": [
              {
                "type": "Identifier",
                "start": 258,
                "end": 259,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 246,
              "end": 257,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 246,
                "end": 253,
                "decorators": [],
                "name": "console",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 254,
                "end": 257,
                "decorators": [],
                "name": "log",
                "optional": false
              }
            },
            "optional": false
          }
        },
        {
          "type": "SwitchStatement",
          "start": 265,
          "end": 326,
          "cases": [
            {
              "type": "SwitchCase",
              "start": 286,
              "end": 320,
              "consequent": [
                {
                  "type": "VariableDeclaration",
                  "start": 307,
                  "end": 320,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 313,
                      "end": 319,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 313,
                        "end": 314,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 317,
                        "end": 319,
                        "raw": "20",
                        "value": 20
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ],
              "test": {
                "type": "Literal",
                "start": 291,
                "end": 293,
                "raw": "10",
                "value": 10
              }
            }
          ],
          "discriminant": {
            "type": "Identifier",
            "start": 273,
            "end": 274,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        {
          "type": "SwitchStatement",
          "start": 331,
          "end": 392,
          "cases": [
            {
              "type": "SwitchCase",
              "start": 352,
              "end": 386,
              "consequent": [
                {
                  "type": "VariableDeclaration",
                  "start": 373,
                  "end": 386,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 379,
                      "end": 385,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 379,
                        "end": 380,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 383,
                        "end": 385,
                        "raw": "20",
                        "value": 20
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ],
              "test": {
                "type": "Literal",
                "start": 357,
                "end": 359,
                "raw": "10",
                "value": 10
              }
            }
          ],
          "discriminant": {
            "type": "Identifier",
            "start": 339,
            "end": 340,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
