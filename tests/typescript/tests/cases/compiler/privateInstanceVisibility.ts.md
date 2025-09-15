__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Example",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 43
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
                      "name": "someNumber",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 64,
                      "end": 74
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 76,
                        "end": 82
                      },
                      "start": 74,
                      "end": 82
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 56,
                    "end": 83
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "doSomething",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 122
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
                                  "name": "that",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 145,
                                  "end": 149
                                },
                                "init": {
                                  "type": "ThisExpression",
                                  "start": 152,
                                  "end": 156
                                },
                                "definite": false,
                                "start": 145,
                                "end": 156
                              }
                            ],
                            "declare": false,
                            "start": 141,
                            "end": 157
                          },
                          {
                            "type": "FunctionDeclaration",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "innerFunction",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 202,
                              "end": 215
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
                                        "name": "num",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 257,
                                        "end": 260
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "that",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 263,
                                          "end": 267
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "someNumber",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 268,
                                          "end": 278
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 263,
                                        "end": 278
                                      },
                                      "definite": false,
                                      "start": 257,
                                      "end": 278
                                    }
                                  ],
                                  "declare": false,
                                  "start": 253,
                                  "end": 279
                                }
                              ],
                              "start": 218,
                              "end": 295
                            },
                            "expression": false,
                            "start": 193,
                            "end": 295
                          }
                        ],
                        "start": 125,
                        "end": 307
                      },
                      "expression": false,
                      "start": 122,
                      "end": 307
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 104,
                    "end": 307
                  }
                ],
                "start": 44,
                "end": 322
              },
              "abstract": false,
              "declare": false,
              "start": 30,
              "end": 322
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 23,
            "end": 322
          }
        ],
        "start": 15,
        "end": 326
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 326
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 336,
        "end": 337
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 353,
              "end": 354
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 356,
                "end": 362
              },
              "start": 354,
              "end": 362
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 345,
            "end": 363
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getX",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 373
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 385,
                        "end": 389
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 390,
                        "end": 391
                      },
                      "optional": false,
                      "computed": false,
                      "start": 385,
                      "end": 391
                    },
                    "start": 378,
                    "end": 392
                  }
                ],
                "start": 376,
                "end": 394
              },
              "expression": false,
              "start": 373,
              "end": 394
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 369,
            "end": 394
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "clone",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 405
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 413,
                        "end": 414
                      },
                      "typeArguments": null,
                      "start": 413,
                      "end": 414
                    },
                    "start": 411,
                    "end": 414
                  },
                  "start": 406,
                  "end": 414
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 426,
                          "end": 430
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 431,
                          "end": 432
                        },
                        "optional": false,
                        "computed": false,
                        "start": 426,
                        "end": 432
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "other",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 435,
                          "end": 440
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 441,
                          "end": 442
                        },
                        "optional": false,
                        "computed": false,
                        "start": 435,
                        "end": 442
                      },
                      "start": 426,
                      "end": 442
                    },
                    "directive": null,
                    "start": 426,
                    "end": 443
                  }
                ],
                "start": 416,
                "end": 450
              },
              "expression": false,
              "start": 405,
              "end": 450
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 400,
            "end": 450
          }
        ],
        "start": 338,
        "end": 452
      },
      "abstract": false,
      "declare": false,
      "start": 330,
      "end": 452
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 452
}
```
