__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 49
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 56,
                      "end": 62
                    },
                    "start": 54,
                    "end": 62
                  },
                  "start": 53,
                  "end": 62
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 155,
                            "end": 158
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": false,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 164,
                                    "end": 170
                                  },
                                  "start": 162,
                                  "end": 170
                                },
                                "start": 161,
                                "end": 170
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 175,
                              "end": 177
                            },
                            "id": null,
                            "generator": false,
                            "start": 160,
                            "end": 177
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 155,
                          "end": 177
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 252,
                            "end": 256
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
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 260,
                                    "end": 266
                                  },
                                  "start": 258,
                                  "end": 266
                                },
                                "start": 257,
                                "end": 266
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 268,
                              "end": 270
                            },
                            "expression": false,
                            "start": 256,
                            "end": 270
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 252,
                          "end": 270
                        }
                      ],
                      "start": 80,
                      "end": 277
                    },
                    "start": 73,
                    "end": 277
                  }
                ],
                "start": 67,
                "end": 279
              },
              "id": null,
              "generator": false,
              "start": 52,
              "end": 279
            },
            "definite": false,
            "start": 46,
            "end": 279
          }
        ],
        "declare": false,
        "start": 40,
        "end": 279
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 33,
      "end": 279
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 294,
          "end": 297
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
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 354,
                "end": 357
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 361,
                        "end": 367
                      },
                      "start": 359,
                      "end": 367
                    },
                    "start": 358,
                    "end": 367
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 369,
                  "end": 376
                },
                "expression": false,
                "start": 357,
                "end": 376
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 354,
              "end": 376
            }
          ],
          "start": 298,
          "end": 378
        },
        "abstract": false,
        "declare": false,
        "start": 288,
        "end": 378
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 281,
      "end": 378
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "someMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 427,
                    "end": 437
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "someMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 427,
                    "end": 437
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 427,
                  "end": 437
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 439
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 442,
                "end": 446
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 450,
                "end": 453
              },
              "start": 442,
              "end": 453
            },
            "definite": false,
            "start": 391,
            "end": 453
          }
        ],
        "declare": false,
        "start": 387,
        "end": 454
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 380,
      "end": 454
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 464,
        "end": 470
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ExtFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 487,
              "end": 494
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "someMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 547,
                    "end": 557
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "collection",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 570,
                            "end": 573
                          },
                          "start": 570,
                          "end": 575
                        },
                        "start": 568,
                        "end": 575
                      },
                      "start": 558,
                      "end": 575
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 578,
                      "end": 585
                    },
                    "start": 576,
                    "end": 585
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 547,
                  "end": 586
                }
              ],
              "start": 495,
              "end": 592
            },
            "declare": false,
            "start": 477,
            "end": 592
          }
        ],
        "start": 471,
        "end": 594
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 456,
      "end": 594
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 33,
  "end": 594
}
```
