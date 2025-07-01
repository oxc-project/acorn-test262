__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "User",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sayHello",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 25
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 28,
                "end": 35
              },
              "expression": false,
              "start": 25,
              "end": 35
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 17,
            "end": 35
          }
        ],
        "start": 11,
        "end": 37
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RegisteredUser",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 59
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "User",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 72
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
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
                              "name": "inner",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 122,
                              "end": 127
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
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Super",
                                        "start": 148,
                                        "end": 153
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "sayHello",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 154,
                                        "end": 162
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 148,
                                      "end": 162
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 148,
                                    "end": 164
                                  },
                                  "directive": null,
                                  "start": 148,
                                  "end": 165
                                }
                              ],
                              "start": 130,
                              "end": 179
                            },
                            "expression": false,
                            "start": 113,
                            "end": 179
                          }
                        ],
                        "start": 99,
                        "end": 189
                      },
                      "id": null,
                      "generator": false,
                      "start": 93,
                      "end": 189
                    },
                    "directive": null,
                    "start": 93,
                    "end": 190
                  }
                ],
                "start": 83,
                "end": 196
              },
              "expression": false,
              "start": 80,
              "end": 196
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 79,
            "end": 196
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 201,
              "end": 202
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 224,
                      "end": 229
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "ArrowFunctionExpression",
                            "expression": false,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Super",
                                        "start": 270,
                                        "end": 275
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "sayHello",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 276,
                                        "end": 284
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 270,
                                      "end": 284
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 270,
                                    "end": 286
                                  },
                                  "directive": null,
                                  "start": 270,
                                  "end": 287
                                }
                              ],
                              "start": 252,
                              "end": 301
                            },
                            "id": null,
                            "generator": false,
                            "start": 246,
                            "end": 301
                          },
                          "directive": null,
                          "start": 246,
                          "end": 301
                        }
                      ],
                      "start": 232,
                      "end": 311
                    },
                    "expression": false,
                    "start": 215,
                    "end": 311
                  }
                ],
                "start": 205,
                "end": 317
              },
              "expression": false,
              "start": 202,
              "end": 317
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 201,
            "end": 317
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 322,
              "end": 323
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 350
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 367,
                                "end": 372
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sayHello",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 373,
                                "end": 381
                              },
                              "optional": false,
                              "computed": false,
                              "start": 367,
                              "end": 381
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 367,
                            "end": 383
                          },
                          "directive": null,
                          "start": 367,
                          "end": 384
                        }
                      ],
                      "start": 353,
                      "end": 394
                    },
                    "expression": false,
                    "start": 336,
                    "end": 394
                  }
                ],
                "start": 326,
                "end": 400
              },
              "expression": false,
              "start": 323,
              "end": 400
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 322,
            "end": 400
          }
        ],
        "start": 73,
        "end": 402
      },
      "abstract": false,
      "declare": false,
      "start": 39,
      "end": 402
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 402
}
```
