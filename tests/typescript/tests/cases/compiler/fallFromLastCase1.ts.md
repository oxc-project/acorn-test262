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
              }
            ],
            "start": 65,
            "end": 178
          }
        ],
        "start": 59,
        "end": 180
      },
      "expression": false,
      "start": 34,
      "end": 180
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 196
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
              "start": 200,
              "end": 206
            },
            "start": 198,
            "end": 206
          },
          "start": 197,
          "end": 206
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
              "start": 222,
              "end": 223
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 240,
                  "end": 241
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
                        "start": 255,
                        "end": 258
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "1",
                          "raw": "\"1\"",
                          "start": 259,
                          "end": 262
                        }
                      ],
                      "optional": false,
                      "start": 255,
                      "end": 263
                    },
                    "directive": null,
                    "start": 255,
                    "end": 264
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 277,
                    "end": 283
                  }
                ],
                "start": 235,
                "end": 283
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
                        "start": 313,
                        "end": 316
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "2",
                          "raw": "\"2\"",
                          "start": 317,
                          "end": 320
                        }
                      ],
                      "optional": false,
                      "start": 313,
                      "end": 321
                    },
                    "directive": null,
                    "start": 313,
                    "end": 322
                  }
                ],
                "start": 292,
                "end": 322
              }
            ],
            "start": 214,
            "end": 328
          }
        ],
        "start": 208,
        "end": 330
      },
      "expression": false,
      "start": 183,
      "end": 330
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 330
}
```
