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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 425,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 19,
            "end": 369,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 32,
              "end": 369,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 42,
                  "end": 62,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 46,
                      "end": 61,
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
                        "value": 10,
                        "raw": "10"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "FunctionDeclaration",
                  "start": 124,
                  "end": 363,
                  "id": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 134,
                    "decorators": [],
                    "name": "h",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 137,
                    "end": 363,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 151,
                        "end": 181,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 155,
                            "end": 180,
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
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "start": 171,
                                "end": 180,
                                "decorators": [],
                                "name": "arguments",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "id": null,
                              "generator": false
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 255,
                        "end": 271,
                        "expression": {
                          "type": "CallExpression",
                          "start": 255,
                          "end": 270,
                          "callee": {
                            "type": "Identifier",
                            "start": 255,
                            "end": 258,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
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
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                }
              ]
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 375,
            "end": 423,
            "id": {
              "type": "Identifier",
              "start": 384,
              "end": 387,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
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
                    "value": 100,
                    "raw": "100"
                  }
                }
              ]
            },
            "expression": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
