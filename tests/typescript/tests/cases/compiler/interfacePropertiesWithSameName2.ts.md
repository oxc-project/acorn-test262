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
        "start": 241,
        "end": 257
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
                "start": 277,
                "end": 282
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
                      "start": 293,
                      "end": 297
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
                          "start": 301,
                          "end": 305
                        },
                        "start": 299,
                        "end": 305
                      },
                      "body": null,
                      "expression": false,
                      "start": 297,
                      "end": 306
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 293,
                    "end": 306
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
                      "start": 315,
                      "end": 324
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
                                "start": 330,
                                "end": 335
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 337,
                                  "end": 343
                                },
                                "start": 335,
                                "end": 343
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 330,
                              "end": 344
                            }
                          ],
                          "start": 328,
                          "end": 346
                        },
                        "start": 326,
                        "end": 346
                      },
                      "body": null,
                      "expression": false,
                      "start": 324,
                      "end": 347
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 315,
                    "end": 347
                  }
                ],
                "start": 283,
                "end": 353
              },
              "abstract": false,
              "declare": false,
              "start": 271,
              "end": 353
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 264,
            "end": 353
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
                "start": 375,
                "end": 381
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
                      "start": 392,
                      "end": 397
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
                        "start": 401,
                        "end": 405
                      },
                      "start": 399,
                      "end": 405
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 392,
                    "end": 406
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getStatus",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 415,
                      "end": 424
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
                              "start": 430,
                              "end": 439
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 441,
                                "end": 447
                              },
                              "start": 439,
                              "end": 447
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 430,
                            "end": 448
                          }
                        ],
                        "start": 428,
                        "end": 450
                      },
                      "start": 426,
                      "end": 450
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 415,
                    "end": 451
                  }
                ],
                "start": 382,
                "end": 457
              },
              "declare": false,
              "start": 365,
              "end": 457
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 358,
            "end": 457
          }
        ],
        "start": 258,
        "end": 459
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 226,
      "end": 459
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MoverShaker2",
        "optional": false,
        "typeAnnotation": null,
        "start": 471,
        "end": 483
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
              "start": 492,
              "end": 508
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Mover",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 514
            },
            "optional": false,
            "computed": false,
            "start": 492,
            "end": 514
          },
          "typeArguments": null,
          "start": 492,
          "end": 514
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
              "start": 516,
              "end": 532
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Shaker",
              "optional": false,
              "typeAnnotation": null,
              "start": 533,
              "end": 539
            },
            "optional": false,
            "computed": false,
            "start": 516,
            "end": 539
          },
          "typeArguments": null,
          "start": 516,
          "end": 539
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 540,
        "end": 543
      },
      "declare": false,
      "start": 461,
      "end": 543
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MoverShaker3",
        "optional": false,
        "typeAnnotation": null,
        "start": 564,
        "end": 576
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
              "start": 585,
              "end": 601
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Mover",
              "optional": false,
              "typeAnnotation": null,
              "start": 602,
              "end": 607
            },
            "optional": false,
            "computed": false,
            "start": 585,
            "end": 607
          },
          "typeArguments": null,
          "start": 585,
          "end": 607
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
              "start": 609,
              "end": 625
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Shaker",
              "optional": false,
              "typeAnnotation": null,
              "start": 626,
              "end": 632
            },
            "optional": false,
            "computed": false,
            "start": 609,
            "end": 632
          },
          "typeArguments": null,
          "start": 609,
          "end": 632
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
              "start": 639,
              "end": 648
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
                      "start": 654,
                      "end": 659
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 661,
                        "end": 667
                      },
                      "start": 659,
                      "end": 667
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 654,
                    "end": 668
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
                      "start": 669,
                      "end": 678
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 680,
                        "end": 686
                      },
                      "start": 678,
                      "end": 686
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 669,
                    "end": 687
                  }
                ],
                "start": 652,
                "end": 689
              },
              "start": 650,
              "end": 689
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 639,
            "end": 690
          }
        ],
        "start": 633,
        "end": 758
      },
      "declare": false,
      "start": 554,
      "end": 758
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 758
}
```
