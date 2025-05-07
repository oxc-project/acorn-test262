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
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 30,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 30,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 24,
              "end": 30
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 180,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 180,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 65,
            "end": 178,
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
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 106,
                      "end": 114,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 110,
                          "end": 113,
                          "raw": "\"1\"",
                          "value": "1",
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 109,
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
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
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
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
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 163,
                      "end": 171,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 167,
                          "end": 170,
                          "raw": "\"2\"",
                          "value": "2",
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 166,
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 148,
                  "end": 149,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 47,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 48,
          "end": 57,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 49,
            "end": 57,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 51,
              "end": 57
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 183,
      "end": 330,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 208,
        "end": 330,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 214,
            "end": 328,
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
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 255,
                      "end": 263,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 259,
                          "end": 262,
                          "raw": "\"1\"",
                          "value": "1",
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 255,
                        "end": 258,
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
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
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
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
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 313,
                      "end": 321,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 317,
                          "end": 320,
                          "raw": "\"2\"",
                          "value": "2",
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 313,
                        "end": 316,
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ],
                "test": null
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 196,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 197,
          "end": 206,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 198,
            "end": 206,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 200,
              "end": 206
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
