__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mover",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
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
              "name": "move",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 26
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 30,
                "end": 34
              },
              "start": 28,
              "end": 34
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 22,
            "end": 35
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getStatus",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 49
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "speed",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 55,
                      "end": 60
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 62,
                        "end": 68
                      },
                      "start": 60,
                      "end": 68
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 55,
                    "end": 69
                  }
                ],
                "start": 53,
                "end": 71
              },
              "start": 51,
              "end": 71
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 40,
            "end": 72
          }
        ],
        "start": 16,
        "end": 74
      },
      "declare": false,
      "start": 0,
      "end": 74
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shaker",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 91
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
              "name": "shake",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 103
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 107,
                "end": 111
              },
              "start": 105,
              "end": 111
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 98,
            "end": 112
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getStatus",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 126
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "frequency",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 132,
                      "end": 141
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 143,
                        "end": 149
                      },
                      "start": 141,
                      "end": 149
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 132,
                    "end": 150
                  }
                ],
                "start": 130,
                "end": 152
              },
              "start": 128,
              "end": 152
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 117,
            "end": 153
          }
        ],
        "start": 92,
        "end": 155
      },
      "declare": false,
      "start": 75,
      "end": 155
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MoverShaker",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 178
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Mover",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 192
          },
          "typeArguments": null,
          "start": 187,
          "end": 192
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Shaker",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 200
          },
          "typeArguments": null,
          "start": 194,
          "end": 200
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 201,
        "end": 205
      },
      "declare": false,
      "start": 157,
      "end": 205
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MoversAndShakers",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 260
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
                "name": "Mover",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 285
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
                      "name": "move",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 296,
                      "end": 300
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 304,
                          "end": 308
                        },
                        "start": 302,
                        "end": 308
                      },
                      "body": null,
                      "expression": false,
                      "start": 300,
                      "end": 309
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 296,
                    "end": 309
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getStatus",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 318,
                      "end": 327
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "speed",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 333,
                                "end": 338
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 340,
                                  "end": 346
                                },
                                "start": 338,
                                "end": 346
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 333,
                              "end": 347
                            }
                          ],
                          "start": 331,
                          "end": 349
                        },
                        "start": 329,
                        "end": 349
                      },
                      "body": null,
                      "expression": false,
                      "start": 327,
                      "end": 350
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 318,
                    "end": 350
                  }
                ],
                "start": 286,
                "end": 356
              },
              "abstract": false,
              "declare": false,
              "start": 274,
              "end": 356
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 267,
            "end": 356
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shaker",
                "optional": false,
                "typeAnnotation": null,
                "start": 378,
                "end": 384
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
                      "name": "shake",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 395,
                      "end": 400
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 404,
                        "end": 408
                      },
                      "start": 402,
                      "end": 408
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 395,
                    "end": 409
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getStatus",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 418,
                      "end": 427
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "frequency",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 433,
                              "end": 442
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 444,
                                "end": 450
                              },
                              "start": 442,
                              "end": 450
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 433,
                            "end": 451
                          }
                        ],
                        "start": 431,
                        "end": 453
                      },
                      "start": 429,
                      "end": 453
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 418,
                    "end": 454
                  }
                ],
                "start": 385,
                "end": 460
              },
              "declare": false,
              "start": 368,
              "end": 460
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 361,
            "end": 460
          }
        ],
        "start": 261,
        "end": 462
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 226,
      "end": 462
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MoverShaker2",
        "optional": false,
        "typeAnnotation": null,
        "start": 474,
        "end": 486
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "MoversAndShakers",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 511
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Mover",
              "optional": false,
              "typeAnnotation": null,
              "start": 512,
              "end": 517
            },
            "optional": false,
            "computed": false,
            "start": 495,
            "end": 517
          },
          "typeArguments": null,
          "start": 495,
          "end": 517
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "MoversAndShakers",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 535
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Shaker",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 542
            },
            "optional": false,
            "computed": false,
            "start": 519,
            "end": 542
          },
          "typeArguments": null,
          "start": 519,
          "end": 542
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 543,
        "end": 546
      },
      "declare": false,
      "start": 464,
      "end": 546
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MoverShaker3",
        "optional": false,
        "typeAnnotation": null,
        "start": 567,
        "end": 579
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "MoversAndShakers",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 604
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Mover",
              "optional": false,
              "typeAnnotation": null,
              "start": 605,
              "end": 610
            },
            "optional": false,
            "computed": false,
            "start": 588,
            "end": 610
          },
          "typeArguments": null,
          "start": 588,
          "end": 610
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "MoversAndShakers",
              "optional": false,
              "typeAnnotation": null,
              "start": 612,
              "end": 628
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Shaker",
              "optional": false,
              "typeAnnotation": null,
              "start": 629,
              "end": 635
            },
            "optional": false,
            "computed": false,
            "start": 612,
            "end": 635
          },
          "typeArguments": null,
          "start": 612,
          "end": 635
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getStatus",
              "optional": false,
              "typeAnnotation": null,
              "start": 642,
              "end": 651
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "speed",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 657,
                      "end": 662
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 664,
                        "end": 670
                      },
                      "start": 662,
                      "end": 670
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 657,
                    "end": 671
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "frequency",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 672,
                      "end": 681
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 683,
                        "end": 689
                      },
                      "start": 681,
                      "end": 689
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 672,
                    "end": 690
                  }
                ],
                "start": 655,
                "end": 692
              },
              "start": 653,
              "end": 692
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 642,
            "end": 693
          }
        ],
        "start": 636,
        "end": 761
      },
      "declare": false,
      "start": 557,
      "end": 761
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 761
}
```
