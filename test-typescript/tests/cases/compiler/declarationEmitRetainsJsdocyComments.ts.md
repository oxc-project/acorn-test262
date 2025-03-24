__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 594,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 279,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 40,
        "end": 279,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 46,
            "end": 279,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 49,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 52,
              "end": 279,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 279,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 73,
                    "end": 277,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 80,
                      "end": 277,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 155,
                          "end": 177,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 155,
                            "end": 158,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 160,
                            "end": 177,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 175,
                              "end": 177,
                              "body": []
                            },
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 161,
                                "end": 170,
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 162,
                                  "end": 170,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 164,
                                    "end": 170
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 252,
                          "end": 270,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 252,
                            "end": 256,
                            "decorators": [],
                            "name": "bar2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": true,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 256,
                            "end": 270,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 268,
                              "end": 270,
                              "body": []
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 257,
                                "end": 266,
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 258,
                                  "end": 266,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 260,
                                    "end": 266
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 53,
                  "end": 62,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 54,
                    "end": 62,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 56,
                      "end": 62
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 281,
      "end": 378,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 288,
        "end": 378,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 298,
          "end": 378,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 354,
              "end": 376,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 354,
                "end": 357,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 357,
                "end": 376,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 369,
                  "end": 376,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 358,
                    "end": 367,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 359,
                      "end": 367,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 361,
                        "end": 367
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 294,
          "end": 297,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 380,
      "end": 454,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 387,
        "end": 454,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 391,
            "end": 453,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 391,
              "end": 439,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 427,
                  "end": 437,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 427,
                    "end": 437,
                    "decorators": [],
                    "name": "someMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "start": 427,
                    "end": 437,
                    "decorators": [],
                    "name": "someMethod",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": {
              "type": "TSAsExpression",
              "start": 442,
              "end": 453,
              "expression": {
                "type": "Literal",
                "start": 442,
                "end": 446,
                "raw": "null",
                "value": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 450,
                "end": 453
              }
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 456,
      "end": 594,
      "body": {
        "type": "TSModuleBlock",
        "start": 471,
        "end": 594,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 477,
            "end": 592,
            "body": {
              "type": "TSInterfaceBody",
              "start": 495,
              "end": 592,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 547,
                  "end": 586,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 547,
                    "end": 557,
                    "decorators": [],
                    "name": "someMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 558,
                      "end": 575,
                      "decorators": [],
                      "name": "collection",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 568,
                        "end": 575,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 570,
                          "end": 575,
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 570,
                            "end": 573
                          }
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 576,
                    "end": 585,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 578,
                      "end": 585
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 487,
              "end": 494,
              "decorators": [],
              "name": "ExtFunc",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 464,
        "end": 470,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "global"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
