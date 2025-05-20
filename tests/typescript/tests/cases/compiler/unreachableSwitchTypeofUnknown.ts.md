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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 17,
            "decorators": [],
            "name": "unreachable",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 20,
            "end": 346,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 44,
              "end": 346,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 50,
                  "end": 337,
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
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 83,
                        "end": 91,
                        "raw": "'string'",
                        "value": "string"
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
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 115,
                        "end": 123,
                        "raw": "'number'",
                        "value": "number"
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
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 147,
                        "end": 155,
                        "raw": "'bigint'",
                        "value": "bigint"
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
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 179,
                        "end": 188,
                        "raw": "'boolean'",
                        "value": "boolean"
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
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 212,
                        "end": 220,
                        "raw": "'symbol'",
                        "value": "symbol"
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
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 244,
                        "end": 255,
                        "raw": "'undefined'",
                        "value": "undefined"
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
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 279,
                        "end": 287,
                        "raw": "'object'",
                        "value": "object"
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
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 311,
                        "end": 321,
                        "raw": "'function'",
                        "value": "function"
                      }
                    }
                  ],
                  "discriminant": {
                    "type": "UnaryExpression",
                    "start": 58,
                    "end": 66,
                    "argument": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 66,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "typeof",
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 342,
                  "end": 344,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 343,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 21,
                "end": 31,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 22,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 24,
                    "end": 31
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
