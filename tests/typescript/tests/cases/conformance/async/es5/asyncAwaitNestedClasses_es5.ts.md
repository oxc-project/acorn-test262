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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 63
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 78
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 88
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
                      "name": "func2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 106,
                      "end": 111
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 115,
                            "end": 122
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSVoidKeyword",
                                "start": 123,
                                "end": 127
                              }
                            ],
                            "start": 122,
                            "end": 128
                          },
                          "start": 115,
                          "end": 128
                        },
                        "start": 113,
                        "end": 128
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 154,
                                "end": 161
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "expression": false,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "resolve",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 163,
                                      "end": 170
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "resolve",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 177,
                                            "end": 184
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Literal",
                                              "value": null,
                                              "raw": "null",
                                              "start": 185,
                                              "end": 189
                                            }
                                          ],
                                          "optional": false,
                                          "start": 177,
                                          "end": 190
                                        },
                                        "directive": null,
                                        "start": 177,
                                        "end": 191
                                      }
                                    ],
                                    "start": 175,
                                    "end": 193
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 162,
                                  "end": 193
                                }
                              ],
                              "start": 150,
                              "end": 194
                            },
                            "start": 143,
                            "end": 195
                          }
                        ],
                        "start": 129,
                        "end": 205
                      },
                      "expression": false,
                      "start": 111,
                      "end": 205
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 99,
                    "end": 205
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 221,
                      "end": 222
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "ClassExpression",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 231,
                        "end": 232
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
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 260,
                              "end": 264
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "id": null,
                              "generator": false,
                              "async": true,
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
                                      "type": "AwaitExpression",
                                      "argument": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "B",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 291,
                                            "end": 292
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "func2",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 293,
                                            "end": 298
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 291,
                                          "end": 298
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 291,
                                        "end": 300
                                      },
                                      "start": 285,
                                      "end": 300
                                    },
                                    "directive": null,
                                    "start": 285,
                                    "end": 301
                                  }
                                ],
                                "start": 267,
                                "end": 315
                              },
                              "expression": false,
                              "start": 264,
                              "end": 315
                            },
                            "kind": "method",
                            "computed": false,
                            "static": true,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 247,
                            "end": 315
                          }
                        ],
                        "start": 233,
                        "end": 325
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 225,
                      "end": 325
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 214,
                    "end": 325
                  }
                ],
                "start": 89,
                "end": 331
              },
              "abstract": false,
              "declare": false,
              "start": 81,
              "end": 331
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 70,
            "end": 331
          }
        ],
        "start": 64,
        "end": 333
      },
      "abstract": false,
      "declare": false,
      "start": 56,
      "end": 333
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 335,
                "end": 336
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 337,
                "end": 338
              },
              "optional": false,
              "computed": false,
              "start": 335,
              "end": 338
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 340
            },
            "optional": false,
            "computed": false,
            "start": 335,
            "end": 340
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": null,
            "start": 341,
            "end": 345
          },
          "optional": false,
          "computed": false,
          "start": 335,
          "end": 345
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 335,
        "end": 347
      },
      "directive": null,
      "start": 335,
      "end": 348
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 348
}
```
