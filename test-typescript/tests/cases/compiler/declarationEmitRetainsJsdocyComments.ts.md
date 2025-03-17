__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 595,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 279,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 40,
        "end": 279,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 46,
            "end": 279,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 49,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 52,
              "end": 279,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 53,
                  "end": 62,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 54,
                    "end": 62,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 56,
                      "end": 62
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 155,
                            "end": 158,
                            "name": "bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 160,
                            "end": 177,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 161,
                                "end": 170,
                                "name": "s",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 162,
                                  "end": 170,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 164,
                                    "end": 170
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 175,
                              "end": 177,
                              "body": []
                            },
                            "typeParameters": null,
                            "returnType": null
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 252,
                          "end": 270,
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 252,
                            "end": 256,
                            "name": "bar2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 256,
                            "end": 270,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 257,
                                "end": 266,
                                "name": "s",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 258,
                                  "end": 266,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 260,
                                    "end": 266
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 268,
                              "end": 270,
                              "body": []
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 281,
      "end": 378,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 288,
        "end": 378,
        "id": {
          "type": "Identifier",
          "start": 294,
          "end": 297,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 298,
          "end": 378,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 354,
              "end": 376,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 354,
                "end": 357,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 357,
                "end": 376,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 358,
                    "end": 367,
                    "name": "s",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 359,
                      "end": 367,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 361,
                        "end": 367
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 369,
                  "end": 376,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 380,
      "end": 454,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 387,
        "end": 454,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 391,
            "end": 453,
            "id": {
              "type": "ObjectPattern",
              "start": 391,
              "end": 439,
              "properties": [
                {
                  "type": "Property",
                  "start": 427,
                  "end": 437,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 427,
                    "end": 437,
                    "name": "someMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 427,
                    "end": 437,
                    "name": "someMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
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
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 456,
      "end": 594,
      "id": {
        "type": "Identifier",
        "start": 464,
        "end": 470,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "ExtFunc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
                    "name": "someMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "name": "collection",
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
                      },
                      "decorators": [],
                      "optional": false
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
  "sourceType": "script",
  "hashbang": null
}
```
