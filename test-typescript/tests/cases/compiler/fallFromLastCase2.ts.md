__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 406,
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
      "end": 218,
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
        "end": 218,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 65,
            "end": 216,
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
              },
              {
                "type": "SwitchCase",
                "start": 181,
                "end": 210,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 201,
                    "end": 210,
                    "expression": {
                      "type": "CallExpression",
                      "start": 201,
                      "end": 209,
                      "callee": {
                        "type": "Identifier",
                        "start": 201,
                        "end": 204,
                        "name": "use",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 205,
                          "end": 208,
                          "value": "3",
                          "raw": "\"3\""
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
                  "start": 186,
                  "end": 187,
                  "value": 3,
                  "raw": "3"
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
      "start": 221,
      "end": 406,
      "id": {
        "type": "Identifier",
        "start": 230,
        "end": 234,
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
          "start": 235,
          "end": 244,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 236,
            "end": 244,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 238,
              "end": 244
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 246,
        "end": 406,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 252,
            "end": 404,
            "discriminant": {
              "type": "Identifier",
              "start": 260,
              "end": 261,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 273,
                "end": 321,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 293,
                    "end": 302,
                    "expression": {
                      "type": "CallExpression",
                      "start": 293,
                      "end": 301,
                      "callee": {
                        "type": "Identifier",
                        "start": 293,
                        "end": 296,
                        "name": "use",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 297,
                          "end": 300,
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
                    "start": 315,
                    "end": 321,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 278,
                  "end": 279,
                  "value": 1,
                  "raw": "1"
                }
              },
              {
                "type": "SwitchCase",
                "start": 330,
                "end": 360,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 351,
                    "end": 360,
                    "expression": {
                      "type": "CallExpression",
                      "start": 351,
                      "end": 359,
                      "callee": {
                        "type": "Identifier",
                        "start": 351,
                        "end": 354,
                        "name": "use",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 355,
                          "end": 358,
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
              },
              {
                "type": "SwitchCase",
                "start": 369,
                "end": 398,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 389,
                    "end": 398,
                    "expression": {
                      "type": "CallExpression",
                      "start": 389,
                      "end": 397,
                      "callee": {
                        "type": "Identifier",
                        "start": 389,
                        "end": 392,
                        "name": "use",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 393,
                          "end": 396,
                          "value": "3",
                          "raw": "\"3\""
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
                  "start": 374,
                  "end": 375,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
