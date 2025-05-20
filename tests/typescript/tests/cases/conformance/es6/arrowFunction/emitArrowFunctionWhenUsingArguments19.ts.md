__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 425,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 425,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 425,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 19,
            "end": 369,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 32,
              "end": 369,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 42,
                  "end": 62,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 46,
                      "end": 61,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 46,
                        "end": 56,
                        "decorators": [],
                        "name": "_arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 59,
                        "end": 61,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "FunctionDeclaration",
                  "start": 124,
                  "end": 363,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 137,
                    "end": 363,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 151,
                        "end": 181,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 155,
                            "end": 180,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 155,
                              "end": 162,
                              "decorators": [],
                              "name": "capture",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "ArrowFunctionExpression",
                              "start": 165,
                              "end": 180,
                              "async": false,
                              "body": {
                                "type": "Identifier",
                                "start": 171,
                                "end": 180,
                                "decorators": [],
                                "name": "arguments",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "expression": true,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "returnType": null,
                              "typeParameters": null
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var"
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 255,
                        "end": 271,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 255,
                          "end": 270,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 259,
                              "end": 269,
                              "decorators": [],
                              "name": "_arguments",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 255,
                            "end": 258,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 134,
                    "decorators": [],
                    "name": "h",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 375,
            "end": 423,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 396,
              "end": 423,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 406,
                  "end": 417,
                  "argument": {
                    "type": "Literal",
                    "start": 413,
                    "end": 416,
                    "raw": "100",
                    "value": 100
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 384,
              "end": 387,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 388,
                "end": 394,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 389,
                  "end": 394,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 391,
                    "end": 394
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
