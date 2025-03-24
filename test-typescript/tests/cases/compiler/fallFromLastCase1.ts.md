__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 330,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "use",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 30,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 30,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 24,
              "end": 30
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 47,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 48,
          "end": 57,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 49,
            "end": 57,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 51,
              "end": 57
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 180,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 65,
            "end": 178,
            "discriminant": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 86,
                "end": 134,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 106,
                    "end": 115,
                    "expression": {
                      "type": "CallExpression",
                      "start": 106,
                      "end": 114,
                      "callee": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 109,
                        "name": "use",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 110,
                          "end": 113,
                          "value": "1",
                          "raw": "\"1\""
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 128,
                    "end": 134,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 91,
                  "end": 92,
                  "value": 1,
                  "raw": "1"
                }
              },
              {
                "type": "SwitchCase",
                "start": 143,
                "end": 172,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 163,
                    "end": 172,
                    "expression": {
                      "type": "CallExpression",
                      "start": 163,
                      "end": 171,
                      "callee": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 166,
                        "name": "use",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 167,
                          "end": 170,
                          "value": "2",
                          "raw": "\"2\""
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 148,
                  "end": 149,
                  "value": 2,
                  "raw": "2"
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 183,
      "end": 330,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 196,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 197,
          "end": 206,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 198,
            "end": 206,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 200,
              "end": 206
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 208,
        "end": 330,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 214,
            "end": 328,
            "discriminant": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 235,
                "end": 283,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 255,
                    "end": 264,
                    "expression": {
                      "type": "CallExpression",
                      "start": 255,
                      "end": 263,
                      "callee": {
                        "type": "Identifier",
                        "start": 255,
                        "end": 258,
                        "name": "use",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 259,
                          "end": 262,
                          "value": "1",
                          "raw": "\"1\""
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 277,
                    "end": 283,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 240,
                  "end": 241,
                  "value": 1,
                  "raw": "1"
                }
              },
              {
                "type": "SwitchCase",
                "start": 292,
                "end": 322,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 313,
                    "end": 322,
                    "expression": {
                      "type": "CallExpression",
                      "start": 313,
                      "end": 321,
                      "callee": {
                        "type": "Identifier",
                        "start": 313,
                        "end": 316,
                        "name": "use",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 317,
                          "end": 320,
                          "value": "2",
                          "raw": "\"2\""
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ],
                "test": null
              }
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
