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
        "start": 7,
        "end": 11
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
                "start": 33,
                "end": 40
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
                      "start": 61,
                      "end": 71
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 73,
                        "end": 79
                      },
                      "start": 71,
                      "end": 79
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
                    "start": 53,
                    "end": 80
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
                      "start": 108,
                      "end": 119
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
                                  "start": 142,
                                  "end": 146
                                },
                                "init": {
                                  "type": "ThisExpression",
                                  "start": 149,
                                  "end": 153
                                },
                                "definite": false,
                                "start": 142,
                                "end": 153
                              }
                            ],
                            "declare": false,
                            "start": 138,
                            "end": 154
                          },
                          {
                            "type": "FunctionDeclaration",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "innerFunction",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 199,
                              "end": 212
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
                                        "start": 254,
                                        "end": 257
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "that",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 260,
                                          "end": 264
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "someNumber",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 265,
                                          "end": 275
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 260,
                                        "end": 275
                                      },
                                      "definite": false,
                                      "start": 254,
                                      "end": 275
                                    }
                                  ],
                                  "declare": false,
                                  "start": 250,
                                  "end": 276
                                }
                              ],
                              "start": 215,
                              "end": 292
                            },
                            "expression": false,
                            "start": 190,
                            "end": 292
                          }
                        ],
                        "start": 122,
                        "end": 304
                      },
                      "expression": false,
                      "start": 119,
                      "end": 304
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 101,
                    "end": 304
                  }
                ],
                "start": 41,
                "end": 319
              },
              "abstract": false,
              "declare": false,
              "start": 27,
              "end": 319
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 20,
            "end": 319
          }
        ],
        "start": 12,
        "end": 323
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 323
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
        "start": 333,
        "end": 334
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
              "start": 350,
              "end": 351
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 353,
                "end": 359
              },
              "start": 351,
              "end": 359
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
            "start": 342,
            "end": 360
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
              "start": 366,
              "end": 370
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
                        "start": 382,
                        "end": 386
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 387,
                        "end": 388
                      },
                      "optional": false,
                      "computed": false,
                      "start": 382,
                      "end": 388
                    },
                    "start": 375,
                    "end": 389
                  }
                ],
                "start": 373,
                "end": 391
              },
              "expression": false,
              "start": 370,
              "end": 391
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 366,
            "end": 391
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
              "start": 397,
              "end": 402
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
                        "start": 410,
                        "end": 411
                      },
                      "typeArguments": null,
                      "start": 410,
                      "end": 411
                    },
                    "start": 408,
                    "end": 411
                  },
                  "start": 403,
                  "end": 411
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
                          "start": 423,
                          "end": 427
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 428,
                          "end": 429
                        },
                        "optional": false,
                        "computed": false,
                        "start": 423,
                        "end": 429
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "other",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 432,
                          "end": 437
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 438,
                          "end": 439
                        },
                        "optional": false,
                        "computed": false,
                        "start": 432,
                        "end": 439
                      },
                      "start": 423,
                      "end": 439
                    },
                    "directive": null,
                    "start": 423,
                    "end": 440
                  }
                ],
                "start": 413,
                "end": 447
              },
              "expression": false,
              "start": 402,
              "end": 447
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 397,
            "end": 447
          }
        ],
        "start": 335,
        "end": 449
      },
      "abstract": false,
      "declare": false,
      "start": 327,
      "end": 449
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 449
}
```
