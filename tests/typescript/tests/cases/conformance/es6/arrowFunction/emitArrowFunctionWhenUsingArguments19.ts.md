__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 29
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "_arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 46,
                        "end": 56
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 59,
                        "end": 61
                      },
                      "definite": false,
                      "start": 46,
                      "end": 61
                    }
                  ],
                  "declare": false,
                  "start": 42,
                  "end": 62
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "h",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 133,
                    "end": 134
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
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
                              "name": "capture",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 155,
                              "end": 162
                            },
                            "init": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arguments",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 171,
                                "end": 180
                              },
                              "id": null,
                              "generator": false,
                              "start": 165,
                              "end": 180
                            },
                            "definite": false,
                            "start": 155,
                            "end": 180
                          }
                        ],
                        "declare": false,
                        "start": 151,
                        "end": 181
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 255,
                            "end": 258
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_arguments",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 259,
                              "end": 269
                            }
                          ],
                          "optional": false,
                          "start": 255,
                          "end": 270
                        },
                        "directive": null,
                        "start": 255,
                        "end": 271
                      }
                    ],
                    "start": 137,
                    "end": 363
                  },
                  "expression": false,
                  "start": 124,
                  "end": 363
                }
              ],
              "start": 32,
              "end": 369
            },
            "expression": false,
            "start": 19,
            "end": 369
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 387
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "type": "TSAnyKeyword",
                    "start": 391,
                    "end": 394
                  },
                  "start": 389,
                  "end": 394
                },
                "start": 388,
                "end": 394
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 100,
                    "raw": "100",
                    "start": 413,
                    "end": 416
                  },
                  "start": 406,
                  "end": 417
                }
              ],
              "start": 396,
              "end": 423
            },
            "expression": false,
            "start": 375,
            "end": 423
          }
        ],
        "start": 13,
        "end": 425
      },
      "expression": false,
      "start": 0,
      "end": 425
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 425
}
```
