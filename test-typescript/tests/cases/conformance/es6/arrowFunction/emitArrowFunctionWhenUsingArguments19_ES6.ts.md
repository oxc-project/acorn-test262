__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 443,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 443,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 443,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 37,
            "end": 387,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 50,
              "end": 387,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 60,
                  "end": 80,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 64,
                      "end": 79,
                      "id": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 74,
                        "name": "_arguments",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 77,
                        "end": 79,
                        "value": 10,
                        "raw": "10"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "FunctionDeclaration",
                  "start": 142,
                  "end": 381,
                  "id": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 152,
                    "name": "h",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 155,
                    "end": 381,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 169,
                        "end": 199,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 173,
                            "end": 198,
                            "id": {
                              "type": "Identifier",
                              "start": 173,
                              "end": 180,
                              "name": "capture",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "ArrowFunctionExpression",
                              "start": 183,
                              "end": 198,
                              "id": null,
                              "expression": true,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "Identifier",
                                "start": 189,
                                "end": 198,
                                "name": "arguments",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeParameters": null,
                              "returnType": null
                            },
                            "definite": false
                          }
                        ],
                        "kind": "var",
                        "declare": false
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 273,
                        "end": 289,
                        "expression": {
                          "type": "CallExpression",
                          "start": 273,
                          "end": 288,
                          "callee": {
                            "type": "Identifier",
                            "start": 273,
                            "end": 276,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 277,
                              "end": 287,
                              "name": "_arguments",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 393,
            "end": 441,
            "id": {
              "type": "Identifier",
              "start": 402,
              "end": 405,
              "name": "foo",
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
                "start": 406,
                "end": 412,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 407,
                  "end": 412,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 409,
                    "end": 412
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 414,
              "end": 441,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 424,
                  "end": 435,
                  "argument": {
                    "type": "Literal",
                    "start": 431,
                    "end": 434,
                    "value": 100,
                    "raw": "100"
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
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
