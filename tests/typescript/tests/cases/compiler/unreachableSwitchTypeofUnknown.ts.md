__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "unreachable",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 17
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 24,
                    "end": 31
                  },
                  "start": 22,
                  "end": 31
                },
                "start": 21,
                "end": 31
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
              },
              "start": 32,
              "end": 40
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 66
                    },
                    "prefix": true,
                    "start": 58,
                    "end": 66
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "string",
                        "raw": "'string'",
                        "start": 83,
                        "end": 91
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 100,
                            "end": 101
                          },
                          "start": 93,
                          "end": 101
                        }
                      ],
                      "start": 78,
                      "end": 101
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "number",
                        "raw": "'number'",
                        "start": 115,
                        "end": 123
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 132,
                            "end": 133
                          },
                          "start": 125,
                          "end": 133
                        }
                      ],
                      "start": 110,
                      "end": 133
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "bigint",
                        "raw": "'bigint'",
                        "start": 147,
                        "end": 155
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 164,
                            "end": 165
                          },
                          "start": 157,
                          "end": 165
                        }
                      ],
                      "start": 142,
                      "end": 165
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "boolean",
                        "raw": "'boolean'",
                        "start": 179,
                        "end": 188
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 197,
                            "end": 198
                          },
                          "start": 190,
                          "end": 198
                        }
                      ],
                      "start": 174,
                      "end": 198
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "symbol",
                        "raw": "'symbol'",
                        "start": 212,
                        "end": 220
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 229,
                            "end": 230
                          },
                          "start": 222,
                          "end": 230
                        }
                      ],
                      "start": 207,
                      "end": 230
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "undefined",
                        "raw": "'undefined'",
                        "start": 244,
                        "end": 255
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 264,
                            "end": 265
                          },
                          "start": 257,
                          "end": 265
                        }
                      ],
                      "start": 239,
                      "end": 265
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "object",
                        "raw": "'object'",
                        "start": 279,
                        "end": 287
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 296,
                            "end": 297
                          },
                          "start": 289,
                          "end": 297
                        }
                      ],
                      "start": 274,
                      "end": 297
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "function",
                        "raw": "'function'",
                        "start": 311,
                        "end": 321
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 330,
                            "end": 331
                          },
                          "start": 323,
                          "end": 331
                        }
                      ],
                      "start": 306,
                      "end": 331
                    }
                  ],
                  "start": 50,
                  "end": 337
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 342,
                    "end": 343
                  },
                  "directive": null,
                  "start": 342,
                  "end": 344
                }
              ],
              "start": 44,
              "end": 346
            },
            "id": null,
            "generator": false,
            "start": 20,
            "end": 346
          },
          "definite": false,
          "start": 6,
          "end": 346
        }
      ],
      "declare": false,
      "start": 0,
      "end": 346
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 346
}
```
