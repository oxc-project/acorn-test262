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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 40,
        "end": 279,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 46,
            "end": 279,
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
              "expression": false,
              "async": false,
              "typeParameters": null,
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 155,
                            "end": 158,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 160,
                            "end": 177,
                            "expression": false,
                            "async": false,
                            "typeParameters": null,
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
                            "body": {
                              "type": "BlockStatement",
                              "start": 175,
                              "end": 177,
                              "body": []
                            },
                            "id": null,
                            "generator": false
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 252,
                          "end": 270,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 252,
                            "end": 256,
                            "decorators": [],
                            "name": "bar2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 256,
                            "end": 270,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
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
                            "body": {
                              "type": "BlockStatement",
                              "start": 268,
                              "end": 270,
                              "body": []
                            },
                            "expression": false
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 281,
      "end": 378,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 288,
        "end": 378,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 298,
          "end": 378,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 354,
              "end": 376,
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
              "value": {
                "type": "FunctionExpression",
                "start": 357,
                "end": 376,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                "body": {
                  "type": "BlockStatement",
                  "start": 369,
                  "end": 376,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 380,
      "end": 454,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 387,
        "end": 454,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 391,
            "end": 453,
            "id": {
              "type": "ObjectPattern",
              "start": 391,
              "end": 439,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 427,
                  "end": 437,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 427,
                    "end": 437,
                    "decorators": [],
                    "name": "someMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 427,
                    "end": 437,
                    "decorators": [],
                    "name": "someMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
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
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 450,
                "end": 453
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 456,
      "end": 594,
      "id": {
        "type": "Identifier",
        "start": 464,
        "end": 470,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 471,
        "end": 594,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 477,
            "end": 592,
            "id": {
              "type": "Identifier",
              "start": 487,
              "end": 494,
              "decorators": [],
              "name": "ExtFunc",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 495,
              "end": 592,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 547,
                  "end": 586,
                  "key": {
                    "type": "Identifier",
                    "start": 547,
                    "end": 557,
                    "decorators": [],
                    "name": "someMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
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
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
