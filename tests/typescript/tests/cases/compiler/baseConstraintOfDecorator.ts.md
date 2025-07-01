__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "classExtender",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 29
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 39
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 30,
              "end": 39
            }
          ],
          "start": 29,
          "end": 40
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "superClass",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 62
                },
                "typeArguments": null,
                "start": 53,
                "end": 62
              },
              "start": 51,
              "end": 62
            },
            "start": 41,
            "end": 62
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_instanceModifier",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "instance",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 94,
                        "end": 97
                      },
                      "start": 92,
                      "end": 97
                    },
                    "start": 84,
                    "end": 97
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 105,
                          "end": 108
                        },
                        "start": 105,
                        "end": 110
                      },
                      "start": 103,
                      "end": 110
                    },
                    "start": 99,
                    "end": 110
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 115,
                    "end": 119
                  },
                  "start": 112,
                  "end": 119
                },
                "start": 83,
                "end": 119
              },
              "start": 81,
              "end": 119
            },
            "start": 64,
            "end": 119
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 131
            },
            "typeArguments": null,
            "start": 122,
            "end": 131
          },
          "start": 120,
          "end": 131
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ClassExpression",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "decoratorFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 164
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "superClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 183
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
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 194,
                        "end": 205
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
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "args",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 209,
                              "end": 213
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 215,
                                  "end": 218
                                },
                                "start": 215,
                                "end": 220
                              },
                              "start": 213,
                              "end": 220
                            },
                            "value": null,
                            "start": 206,
                            "end": 220
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
                                  "type": "Super",
                                  "start": 236,
                                  "end": 241
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "SpreadElement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 245,
                                      "end": 249
                                    },
                                    "start": 242,
                                    "end": 249
                                  }
                                ],
                                "optional": false,
                                "start": 236,
                                "end": 250
                              },
                              "directive": null,
                              "start": 236,
                              "end": 251
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_instanceModifier",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 264,
                                  "end": 281
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ThisExpression",
                                    "start": 282,
                                    "end": 286
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 288,
                                    "end": 292
                                  }
                                ],
                                "optional": false,
                                "start": 264,
                                "end": 293
                              },
                              "directive": null,
                              "start": 264,
                              "end": 294
                            }
                          ],
                          "start": 222,
                          "end": 304
                        },
                        "expression": false,
                        "start": 205,
                        "end": 304
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 194,
                      "end": 304
                    }
                  ],
                  "start": 184,
                  "end": 310
                },
                "abstract": false,
                "declare": false,
                "start": 145,
                "end": 310
              },
              "start": 138,
              "end": 311
            }
          ],
          "start": 132,
          "end": 313
        },
        "expression": false,
        "start": 7,
        "end": 313
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 313
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 321,
        "end": 328
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
              "start": 339,
              "end": 340
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 331,
            "end": 341
          }
        ],
        "start": 329,
        "end": 343
      },
      "abstract": false,
      "declare": false,
      "start": 315,
      "end": 343
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "classExtender2",
          "optional": false,
          "typeAnnotation": null,
          "start": 360,
          "end": 374
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 384
              },
              "constraint": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 401,
                      "end": 405
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 407,
                          "end": 413
                        },
                        "start": 407,
                        "end": 415
                      },
                      "start": 405,
                      "end": 415
                    },
                    "value": null,
                    "start": 398,
                    "end": 415
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 420,
                      "end": 427
                    },
                    "typeArguments": null,
                    "start": 420,
                    "end": 427
                  },
                  "start": 417,
                  "end": 427
                },
                "start": 393,
                "end": 427
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 375,
              "end": 427
            }
          ],
          "start": 374,
          "end": 428
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "superClass",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 441,
                  "end": 450
                },
                "typeArguments": null,
                "start": 441,
                "end": 450
              },
              "start": 439,
              "end": 450
            },
            "start": 429,
            "end": 450
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_instanceModifier",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "instance",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 482,
                        "end": 485
                      },
                      "start": 480,
                      "end": 485
                    },
                    "start": 472,
                    "end": 485
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 493,
                          "end": 496
                        },
                        "start": 493,
                        "end": 498
                      },
                      "start": 491,
                      "end": 498
                    },
                    "start": 487,
                    "end": 498
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 503,
                    "end": 507
                  },
                  "start": 500,
                  "end": 507
                },
                "start": 471,
                "end": 507
              },
              "start": 469,
              "end": 507
            },
            "start": 452,
            "end": 507
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 510,
              "end": 519
            },
            "typeArguments": null,
            "start": 510,
            "end": 519
          },
          "start": 508,
          "end": 519
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ClassExpression",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "decoratorFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 539,
                  "end": 552
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "superClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 561,
                  "end": 571
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
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 582,
                        "end": 593
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
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "args",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 597,
                              "end": 601
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 603,
                                  "end": 606
                                },
                                "start": 603,
                                "end": 608
                              },
                              "start": 601,
                              "end": 608
                            },
                            "value": null,
                            "start": 594,
                            "end": 608
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
                                  "type": "Super",
                                  "start": 624,
                                  "end": 629
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "SpreadElement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 633,
                                      "end": 637
                                    },
                                    "start": 630,
                                    "end": 637
                                  }
                                ],
                                "optional": false,
                                "start": 624,
                                "end": 638
                              },
                              "directive": null,
                              "start": 624,
                              "end": 639
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_instanceModifier",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 652,
                                  "end": 669
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ThisExpression",
                                    "start": 670,
                                    "end": 674
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 676,
                                    "end": 680
                                  }
                                ],
                                "optional": false,
                                "start": 652,
                                "end": 681
                              },
                              "directive": null,
                              "start": 652,
                              "end": 682
                            }
                          ],
                          "start": 610,
                          "end": 692
                        },
                        "expression": false,
                        "start": 593,
                        "end": 692
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 582,
                      "end": 692
                    }
                  ],
                  "start": 572,
                  "end": 698
                },
                "abstract": false,
                "declare": false,
                "start": 533,
                "end": 698
              },
              "start": 526,
              "end": 699
            }
          ],
          "start": 520,
          "end": 701
        },
        "expression": false,
        "start": 351,
        "end": 701
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 344,
      "end": 701
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 701
}
```
