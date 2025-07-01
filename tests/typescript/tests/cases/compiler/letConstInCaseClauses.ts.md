__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 17
          },
          "init": {
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 20,
            "end": 22
          },
          "definite": false,
          "start": 16,
          "end": 22
        }
      ],
      "declare": false,
      "start": 12,
      "end": 23
    },
    {
      "type": "BlockStatement",
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 35
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 38,
                "end": 39
              },
              "definite": false,
              "start": 34,
              "end": 39
            }
          ],
          "declare": false,
          "start": 30,
          "end": 40
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
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 50
              },
              "init": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 53,
                "end": 54
              },
              "definite": false,
              "start": 49,
              "end": 54
            }
          ],
          "declare": false,
          "start": 45,
          "end": 55
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
                "name": "console",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 67
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "log",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 71
              },
              "optional": false,
              "computed": false,
              "start": 60,
              "end": 71
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 73
              }
            ],
            "optional": false,
            "start": 60,
            "end": 74
          },
          "directive": null,
          "start": 60,
          "end": 74
        },
        {
          "type": "SwitchStatement",
          "discriminant": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 88
          },
          "cases": [
            {
              "type": "SwitchCase",
              "test": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 105,
                "end": 107
              },
              "consequent": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 125,
                        "end": 126
                      },
                      "init": {
                        "type": "Literal",
                        "value": 20,
                        "raw": "20",
                        "start": 129,
                        "end": 131
                      },
                      "definite": false,
                      "start": 125,
                      "end": 131
                    }
                  ],
                  "declare": false,
                  "start": 121,
                  "end": 132
                }
              ],
              "start": 100,
              "end": 132
            }
          ],
          "start": 79,
          "end": 138
        },
        {
          "type": "SwitchStatement",
          "discriminant": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 152
          },
          "cases": [
            {
              "type": "SwitchCase",
              "test": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 169,
                "end": 171
              },
              "consequent": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 189,
                        "end": 190
                      },
                      "init": {
                        "type": "Literal",
                        "value": 20,
                        "raw": "20",
                        "start": 193,
                        "end": 195
                      },
                      "definite": false,
                      "start": 189,
                      "end": 195
                    }
                  ],
                  "declare": false,
                  "start": 185,
                  "end": 196
                }
              ],
              "start": 164,
              "end": 196
            }
          ],
          "start": 143,
          "end": 202
        }
      ],
      "start": 24,
      "end": 204
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 219
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 222,
                "end": 223
              },
              "definite": false,
              "start": 218,
              "end": 223
            }
          ],
          "declare": false,
          "start": 212,
          "end": 224
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
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 236
              },
              "init": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 239,
                "end": 240
              },
              "definite": false,
              "start": 235,
              "end": 240
            }
          ],
          "declare": false,
          "start": 229,
          "end": 241
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
                "name": "console",
                "optional": false,
                "typeAnnotation": null,
                "start": 246,
                "end": 253
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "log",
                "optional": false,
                "typeAnnotation": null,
                "start": 254,
                "end": 257
              },
              "optional": false,
              "computed": false,
              "start": 246,
              "end": 257
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 258,
                "end": 259
              }
            ],
            "optional": false,
            "start": 246,
            "end": 260
          },
          "directive": null,
          "start": 246,
          "end": 260
        },
        {
          "type": "SwitchStatement",
          "discriminant": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 274
          },
          "cases": [
            {
              "type": "SwitchCase",
              "test": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 291,
                "end": 293
              },
              "consequent": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 313,
                        "end": 314
                      },
                      "init": {
                        "type": "Literal",
                        "value": 20,
                        "raw": "20",
                        "start": 317,
                        "end": 319
                      },
                      "definite": false,
                      "start": 313,
                      "end": 319
                    }
                  ],
                  "declare": false,
                  "start": 307,
                  "end": 320
                }
              ],
              "start": 286,
              "end": 320
            }
          ],
          "start": 265,
          "end": 326
        },
        {
          "type": "SwitchStatement",
          "discriminant": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 339,
            "end": 340
          },
          "cases": [
            {
              "type": "SwitchCase",
              "test": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 357,
                "end": 359
              },
              "consequent": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 379,
                        "end": 380
                      },
                      "init": {
                        "type": "Literal",
                        "value": 20,
                        "raw": "20",
                        "start": 383,
                        "end": 385
                      },
                      "definite": false,
                      "start": 379,
                      "end": 385
                    }
                  ],
                  "declare": false,
                  "start": 373,
                  "end": 386
                }
              ],
              "start": 352,
              "end": 386
            }
          ],
          "start": 331,
          "end": 392
        }
      ],
      "start": 206,
      "end": 394
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 394
}
```
