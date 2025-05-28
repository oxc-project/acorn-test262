__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 342,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 342,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 342,
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
            "end": 342,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 21,
                "end": 27,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 22,
                  "end": 27,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 24,
                    "end": 27
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 30,
                "end": 36
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 40,
              "end": 342,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 46,
                  "end": 333,
                  "discriminant": {
                    "type": "UnaryExpression",
                    "start": 54,
                    "end": 62,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 62,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 74,
                      "end": 97,
                      "test": {
                        "type": "Literal",
                        "start": 79,
                        "end": 87,
                        "value": "string",
                        "raw": "'string'"
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 89,
                          "end": 97,
                          "argument": {
                            "type": "Literal",
                            "start": 96,
                            "end": 97,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    },
                    {
                      "type": "SwitchCase",
                      "start": 106,
                      "end": 129,
                      "test": {
                        "type": "Literal",
                        "start": 111,
                        "end": 119,
                        "value": "number",
                        "raw": "'number'"
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 121,
                          "end": 129,
                          "argument": {
                            "type": "Literal",
                            "start": 128,
                            "end": 129,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    },
                    {
                      "type": "SwitchCase",
                      "start": 138,
                      "end": 161,
                      "test": {
                        "type": "Literal",
                        "start": 143,
                        "end": 151,
                        "value": "bigint",
                        "raw": "'bigint'"
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 153,
                          "end": 161,
                          "argument": {
                            "type": "Literal",
                            "start": 160,
                            "end": 161,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    },
                    {
                      "type": "SwitchCase",
                      "start": 170,
                      "end": 194,
                      "test": {
                        "type": "Literal",
                        "start": 175,
                        "end": 184,
                        "value": "boolean",
                        "raw": "'boolean'"
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 186,
                          "end": 194,
                          "argument": {
                            "type": "Literal",
                            "start": 193,
                            "end": 194,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    },
                    {
                      "type": "SwitchCase",
                      "start": 203,
                      "end": 226,
                      "test": {
                        "type": "Literal",
                        "start": 208,
                        "end": 216,
                        "value": "symbol",
                        "raw": "'symbol'"
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 218,
                          "end": 226,
                          "argument": {
                            "type": "Literal",
                            "start": 225,
                            "end": 226,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    },
                    {
                      "type": "SwitchCase",
                      "start": 235,
                      "end": 261,
                      "test": {
                        "type": "Literal",
                        "start": 240,
                        "end": 251,
                        "value": "undefined",
                        "raw": "'undefined'"
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 253,
                          "end": 261,
                          "argument": {
                            "type": "Literal",
                            "start": 260,
                            "end": 261,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    },
                    {
                      "type": "SwitchCase",
                      "start": 270,
                      "end": 293,
                      "test": {
                        "type": "Literal",
                        "start": 275,
                        "end": 283,
                        "value": "object",
                        "raw": "'object'"
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 285,
                          "end": 293,
                          "argument": {
                            "type": "Literal",
                            "start": 292,
                            "end": 293,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    },
                    {
                      "type": "SwitchCase",
                      "start": 302,
                      "end": 327,
                      "test": {
                        "type": "Literal",
                        "start": 307,
                        "end": 317,
                        "value": "function",
                        "raw": "'function'"
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 319,
                          "end": 327,
                          "argument": {
                            "type": "Literal",
                            "start": 326,
                            "end": 327,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "ExpressionStatement",
                  "start": 338,
                  "end": 340,
                  "expression": {
                    "type": "Identifier",
                    "start": 338,
                    "end": 339,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "id": null,
            "generator": false
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
