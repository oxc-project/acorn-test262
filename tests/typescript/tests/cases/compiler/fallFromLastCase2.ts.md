__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 24,
              "end": 30
            },
            "start": 22,
            "end": 30
          },
          "start": 21,
          "end": 30
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 0,
      "end": 32
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 47
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 51,
              "end": 57
            },
            "start": 49,
            "end": 57
          },
          "start": 48,
          "end": 57
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 74
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 91,
                  "end": 92
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 106,
                        "end": 109
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "1",
                          "raw": "\"1\"",
                          "start": 110,
                          "end": 113
                        }
                      ],
                      "optional": false,
                      "start": 106,
                      "end": 114
                    },
                    "directive": null,
                    "start": 106,
                    "end": 115
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 128,
                    "end": 134
                  }
                ],
                "start": 86,
                "end": 134
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 148,
                  "end": 149
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 163,
                        "end": 166
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "2",
                          "raw": "\"2\"",
                          "start": 167,
                          "end": 170
                        }
                      ],
                      "optional": false,
                      "start": 163,
                      "end": 171
                    },
                    "directive": null,
                    "start": 163,
                    "end": 172
                  }
                ],
                "start": 143,
                "end": 172
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 186,
                  "end": 187
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 201,
                        "end": 204
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "3",
                          "raw": "\"3\"",
                          "start": 205,
                          "end": 208
                        }
                      ],
                      "optional": false,
                      "start": 201,
                      "end": 209
                    },
                    "directive": null,
                    "start": 201,
                    "end": 210
                  }
                ],
                "start": 181,
                "end": 210
              }
            ],
            "start": 65,
            "end": 216
          }
        ],
        "start": 59,
        "end": 218
      },
      "expression": false,
      "start": 34,
      "end": 218
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 230,
        "end": 234
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 238,
              "end": 244
            },
            "start": 236,
            "end": 244
          },
          "start": 235,
          "end": 244
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 261
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 278,
                  "end": 279
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 293,
                        "end": 296
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "1",
                          "raw": "\"1\"",
                          "start": 297,
                          "end": 300
                        }
                      ],
                      "optional": false,
                      "start": 293,
                      "end": 301
                    },
                    "directive": null,
                    "start": 293,
                    "end": 302
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 315,
                    "end": 321
                  }
                ],
                "start": 273,
                "end": 321
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 351,
                        "end": 354
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "2",
                          "raw": "\"2\"",
                          "start": 355,
                          "end": 358
                        }
                      ],
                      "optional": false,
                      "start": 351,
                      "end": 359
                    },
                    "directive": null,
                    "start": 351,
                    "end": 360
                  }
                ],
                "start": 330,
                "end": 360
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 374,
                  "end": 375
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 389,
                        "end": 392
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "3",
                          "raw": "\"3\"",
                          "start": 393,
                          "end": 396
                        }
                      ],
                      "optional": false,
                      "start": 389,
                      "end": 397
                    },
                    "directive": null,
                    "start": 389,
                    "end": 398
                  }
                ],
                "start": 369,
                "end": 398
              }
            ],
            "start": 252,
            "end": 404
          }
        ],
        "start": 246,
        "end": 406
      },
      "expression": false,
      "start": 221,
      "end": 406
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 406
}
```
