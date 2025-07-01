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
        "name": "class1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 30
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 47,
                          "end": 49
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "doStuff",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 66,
                                "end": 73
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 76,
                                    "end": 84
                                  }
                                ],
                                "returnType": null,
                                "body": {
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
                                        "type": "VariableDeclaration",
                                        "kind": "var",
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "id": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "_this",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 117,
                                              "end": 122
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "value": 2,
                                              "raw": "2",
                                              "start": 125,
                                              "end": 126
                                            },
                                            "definite": false,
                                            "start": 117,
                                            "end": 126
                                          }
                                        ],
                                        "declare": false,
                                        "start": 113,
                                        "end": 127
                                      },
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 151,
                                            "end": 159
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 160,
                                              "end": 164
                                            }
                                          ],
                                          "optional": false,
                                          "start": 151,
                                          "end": 165
                                        },
                                        "start": 144,
                                        "end": 166
                                      }
                                    ],
                                    "start": 95,
                                    "end": 180
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 89,
                                  "end": 180
                                },
                                "id": null,
                                "generator": false,
                                "start": 75,
                                "end": 180
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 66,
                              "end": 180
                            }
                          ],
                          "start": 52,
                          "end": 190
                        },
                        "definite": false,
                        "start": 47,
                        "end": 190
                      }
                    ],
                    "declare": false,
                    "start": 43,
                    "end": 190
                  }
                ],
                "start": 33,
                "end": 196
              },
              "expression": false,
              "start": 30,
              "end": 196
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 19,
            "end": 196
          }
        ],
        "start": 13,
        "end": 198
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 198
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "class2",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 212
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 230
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 247,
                          "end": 252
                        },
                        "init": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 255,
                          "end": 256
                        },
                        "definite": false,
                        "start": 247,
                        "end": 256
                      }
                    ],
                    "declare": false,
                    "start": 243,
                    "end": 257
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 270,
                          "end": 272
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "doStuff",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 289,
                                "end": 296
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 299,
                                    "end": 307
                                  }
                                ],
                                "returnType": null,
                                "body": {
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
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 343,
                                            "end": 351
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 352,
                                              "end": 356
                                            }
                                          ],
                                          "optional": false,
                                          "start": 343,
                                          "end": 357
                                        },
                                        "start": 336,
                                        "end": 358
                                      }
                                    ],
                                    "start": 318,
                                    "end": 372
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 312,
                                  "end": 372
                                },
                                "id": null,
                                "generator": false,
                                "start": 298,
                                "end": 372
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 289,
                              "end": 372
                            }
                          ],
                          "start": 275,
                          "end": 382
                        },
                        "definite": false,
                        "start": 270,
                        "end": 382
                      }
                    ],
                    "declare": false,
                    "start": 266,
                    "end": 382
                  }
                ],
                "start": 233,
                "end": 388
              },
              "expression": false,
              "start": 230,
              "end": 388
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 219,
            "end": 388
          }
        ],
        "start": 213,
        "end": 390
      },
      "abstract": false,
      "declare": false,
      "start": 200,
      "end": 390
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 390
}
```
