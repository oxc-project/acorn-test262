__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 20,
            "end": 22,
            "value": 20,
            "raw": "20"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 38,
                "end": 39,
                "value": 1,
                "raw": "1"
              },
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
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
              "id": {
                "type": "Identifier",
                "start": 49,
                "end": 50,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 53,
                "end": 54,
                "value": 2,
                "raw": "2"
              },
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 60,
          "end": 74,
          "expression": {
            "type": "CallExpression",
            "start": 60,
            "end": 74,
            "callee": {
              "type": "MemberExpression",
              "start": 60,
              "end": 71,
              "object": {
                "type": "Identifier",
                "start": 60,
                "end": 67,
                "name": "console",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 68,
                "end": 71,
                "name": "log",
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
                "start": 72,
                "end": 73,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "directive": null
        },
        {
          "type": "SwitchStatement",
          "start": 79,
          "end": 138,
          "discriminant": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                      "id": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 126,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 129,
                        "end": 131,
                        "value": 20,
                        "raw": "20"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ],
              "test": {
                "type": "Literal",
                "start": 105,
                "end": 107,
                "value": 10,
                "raw": "10"
              }
            }
          ]
        },
        {
          "type": "SwitchStatement",
          "start": 143,
          "end": 202,
          "discriminant": {
            "type": "Identifier",
            "start": 151,
            "end": 152,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                      "id": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 190,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 193,
                        "end": 195,
                        "value": 20,
                        "raw": "20"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ],
              "test": {
                "type": "Literal",
                "start": 169,
                "end": 171,
                "value": 10,
                "raw": "10"
              }
            }
          ]
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
              "id": {
                "type": "Identifier",
                "start": 218,
                "end": 219,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 222,
                "end": 223,
                "value": 1,
                "raw": "1"
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
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
              "id": {
                "type": "Identifier",
                "start": 235,
                "end": 236,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 239,
                "end": 240,
                "value": 2,
                "raw": "2"
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 246,
          "end": 260,
          "expression": {
            "type": "CallExpression",
            "start": 246,
            "end": 260,
            "callee": {
              "type": "MemberExpression",
              "start": 246,
              "end": 257,
              "object": {
                "type": "Identifier",
                "start": 246,
                "end": 253,
                "name": "console",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 254,
                "end": 257,
                "name": "log",
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
                "start": 258,
                "end": 259,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "directive": null
        },
        {
          "type": "SwitchStatement",
          "start": 265,
          "end": 326,
          "discriminant": {
            "type": "Identifier",
            "start": 273,
            "end": 274,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                      "id": {
                        "type": "Identifier",
                        "start": 313,
                        "end": 314,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 317,
                        "end": 319,
                        "value": 20,
                        "raw": "20"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                }
              ],
              "test": {
                "type": "Literal",
                "start": 291,
                "end": 293,
                "value": 10,
                "raw": "10"
              }
            }
          ]
        },
        {
          "type": "SwitchStatement",
          "start": 331,
          "end": 392,
          "discriminant": {
            "type": "Identifier",
            "start": 339,
            "end": 340,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                      "id": {
                        "type": "Identifier",
                        "start": 379,
                        "end": 380,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 383,
                        "end": 385,
                        "value": 20,
                        "raw": "20"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                }
              ],
              "test": {
                "type": "Literal",
                "start": 357,
                "end": 359,
                "value": 10,
                "raw": "10"
              }
            }
          ]
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
