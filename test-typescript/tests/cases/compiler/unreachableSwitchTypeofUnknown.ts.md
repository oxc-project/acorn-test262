__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 346,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 346,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 346,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 17,
            "name": "unreachable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 20,
            "end": 346,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 21,
                "end": 31,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 22,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 24,
                    "end": 31
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 44,
              "end": 346,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 50,
                  "end": 337,
                  "discriminant": {
                    "type": "UnaryExpression",
                    "start": 58,
                    "end": 66,
                    "operator": "typeof",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 66,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 78,
                      "end": 101,
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 93,
                          "end": 101,
                          "argument": {
                            "type": "Literal",
                            "start": 100,
                            "end": 101,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 83,
                        "end": 91,
                        "value": "string",
                        "raw": "'string'"
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "start": 110,
                      "end": 133,
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 125,
                          "end": 133,
                          "argument": {
                            "type": "Literal",
                            "start": 132,
                            "end": 133,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 115,
                        "end": 123,
                        "value": "number",
                        "raw": "'number'"
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "start": 142,
                      "end": 165,
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 157,
                          "end": 165,
                          "argument": {
                            "type": "Literal",
                            "start": 164,
                            "end": 165,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 147,
                        "end": 155,
                        "value": "bigint",
                        "raw": "'bigint'"
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "start": 174,
                      "end": 198,
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 190,
                          "end": 198,
                          "argument": {
                            "type": "Literal",
                            "start": 197,
                            "end": 198,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 179,
                        "end": 188,
                        "value": "boolean",
                        "raw": "'boolean'"
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "start": 207,
                      "end": 230,
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 222,
                          "end": 230,
                          "argument": {
                            "type": "Literal",
                            "start": 229,
                            "end": 230,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 212,
                        "end": 220,
                        "value": "symbol",
                        "raw": "'symbol'"
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "start": 239,
                      "end": 265,
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 257,
                          "end": 265,
                          "argument": {
                            "type": "Literal",
                            "start": 264,
                            "end": 265,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 244,
                        "end": 255,
                        "value": "undefined",
                        "raw": "'undefined'"
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "start": 274,
                      "end": 297,
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 289,
                          "end": 297,
                          "argument": {
                            "type": "Literal",
                            "start": 296,
                            "end": 297,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 279,
                        "end": 287,
                        "value": "object",
                        "raw": "'object'"
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "start": 306,
                      "end": 331,
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 323,
                          "end": 331,
                          "argument": {
                            "type": "Literal",
                            "start": 330,
                            "end": 331,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 311,
                        "end": 321,
                        "value": "function",
                        "raw": "'function'"
                      }
                    }
                  ]
                },
                {
                  "type": "ExpressionStatement",
                  "start": 342,
                  "end": 344,
                  "expression": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 343,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
