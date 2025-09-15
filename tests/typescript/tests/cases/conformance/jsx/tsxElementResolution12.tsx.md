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
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 25,
            "end": 46
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ElementAttributesProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 83
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 86,
                    "end": 88
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    },
                    "start": 88,
                    "end": 93
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 86,
                  "end": 94
                }
              ],
              "start": 84,
              "end": 96
            },
            "declare": false,
            "start": 48,
            "end": 96
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 125
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 126,
              "end": 129
            },
            "declare": false,
            "start": 98,
            "end": 129
          }
        ],
        "start": 22,
        "end": 131
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 131
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj1type",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 151
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 162,
                    "end": 168
                  },
                  "start": 160,
                  "end": 168
                },
                "start": 159,
                "end": 168
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 171,
                "end": 174
              },
              "start": 169,
              "end": 174
            },
            "start": 155,
            "end": 175
          }
        ],
        "start": 152,
        "end": 177
      },
      "declare": false,
      "start": 133,
      "end": 177
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj1type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 188,
                  "end": 196
                },
                "typeArguments": null,
                "start": 188,
                "end": 196
              },
              "start": 186,
              "end": 196
            },
            "start": 182,
            "end": 196
          },
          "init": null,
          "definite": false,
          "start": 182,
          "end": 196
        }
      ],
      "declare": false,
      "start": 178,
      "end": 197
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Obj1",
            "start": 199,
            "end": 203
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 204,
                "end": 205
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 207,
                  "end": 209
                },
                "start": 206,
                "end": 210
              },
              "start": 204,
              "end": 210
            }
          ],
          "selfClosing": true,
          "start": 198,
          "end": 213
        },
        "children": [],
        "closingElement": null,
        "start": 198,
        "end": 213
      },
      "directive": null,
      "start": 198,
      "end": 214
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj2type",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 240
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 251,
                    "end": 257
                  },
                  "start": 249,
                  "end": 257
                },
                "start": 248,
                "end": 257
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 262,
                      "end": 263
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 266,
                        "end": 272
                      },
                      "start": 264,
                      "end": 272
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 262,
                    "end": 273
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 274,
                      "end": 276
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 278,
                        "end": 281
                      },
                      "start": 276,
                      "end": 281
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 274,
                    "end": 281
                  }
                ],
                "start": 260,
                "end": 283
              },
              "start": 258,
              "end": 283
            },
            "start": 244,
            "end": 284
          }
        ],
        "start": 241,
        "end": 286
      },
      "declare": false,
      "start": 222,
      "end": 286
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj2type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 305
                },
                "typeArguments": null,
                "start": 297,
                "end": 305
              },
              "start": 295,
              "end": 305
            },
            "start": 291,
            "end": 305
          },
          "init": null,
          "definite": false,
          "start": 291,
          "end": 305
        }
      ],
      "declare": false,
      "start": 287,
      "end": 306
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Obj2",
            "start": 308,
            "end": 312
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 313,
                "end": 314
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 316,
                  "end": 318
                },
                "start": 315,
                "end": 319
              },
              "start": 313,
              "end": 319
            }
          ],
          "selfClosing": true,
          "start": 307,
          "end": 322
        },
        "children": [],
        "closingElement": null,
        "start": 307,
        "end": 322
      },
      "directive": null,
      "start": 307,
      "end": 323
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj3type",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 349
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 360,
                    "end": 366
                  },
                  "start": 358,
                  "end": 366
                },
                "start": 357,
                "end": 366
              }
            ],
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 371,
                      "end": 372
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 374,
                        "end": 380
                      },
                      "start": 372,
                      "end": 380
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 371,
                    "end": 381
                  }
                ],
                "start": 369,
                "end": 383
              },
              "start": 367,
              "end": 383
            },
            "start": 353,
            "end": 384
          }
        ],
        "start": 350,
        "end": 386
      },
      "declare": false,
      "start": 331,
      "end": 386
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Obj3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj3type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 397,
                  "end": 405
                },
                "typeArguments": null,
                "start": 397,
                "end": 405
              },
              "start": 395,
              "end": 405
            },
            "start": 391,
            "end": 405
          },
          "init": null,
          "definite": false,
          "start": 391,
          "end": 405
        }
      ],
      "declare": false,
      "start": 387,
      "end": 406
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Obj3",
            "start": 408,
            "end": 412
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 413,
                "end": 414
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 416,
                  "end": 418
                },
                "start": 415,
                "end": 419
              },
              "start": 413,
              "end": 419
            }
          ],
          "selfClosing": true,
          "start": 407,
          "end": 422
        },
        "children": [],
        "closingElement": null,
        "start": 407,
        "end": 422
      },
      "directive": null,
      "start": 407,
      "end": 423
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "attributes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 449,
                "end": 452
              },
              "start": 447,
              "end": 452
            },
            "start": 437,
            "end": 452
          },
          "init": null,
          "definite": false,
          "start": 437,
          "end": 452
        }
      ],
      "declare": false,
      "start": 433,
      "end": 453
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Obj3",
            "start": 455,
            "end": 459
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "attributes",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 474
              },
              "start": 460,
              "end": 475
            }
          ],
          "selfClosing": true,
          "start": 454,
          "end": 478
        },
        "children": [],
        "closingElement": null,
        "start": 454,
        "end": 478
      },
      "directive": null,
      "start": 454,
      "end": 479
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Obj3",
            "start": 490,
            "end": 494
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 499,
                "end": 501
              },
              "start": 495,
              "end": 502
            }
          ],
          "selfClosing": true,
          "start": 489,
          "end": 505
        },
        "children": [],
        "closingElement": null,
        "start": 489,
        "end": 505
      },
      "directive": null,
      "start": 489,
      "end": 506
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj4type",
        "optional": false,
        "typeAnnotation": null,
        "start": 524,
        "end": 532
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 543,
                    "end": 549
                  },
                  "start": 541,
                  "end": 549
                },
                "start": 540,
                "end": 549
              }
            ],
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 554,
                      "end": 555
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 557,
                        "end": 563
                      },
                      "start": 555,
                      "end": 563
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 554,
                    "end": 564
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 565,
                      "end": 567
                    },
                    "typeAnnotation": {
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 571,
                              "end": 572
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 574,
                                "end": 580
                              },
                              "start": 572,
                              "end": 580
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 571,
                            "end": 581
                          }
                        ],
                        "start": 569,
                        "end": 583
                      },
                      "start": 567,
                      "end": 583
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 565,
                    "end": 583
                  }
                ],
                "start": 552,
                "end": 585
              },
              "start": 550,
              "end": 585
            },
            "start": 536,
            "end": 586
          }
        ],
        "start": 533,
        "end": 588
      },
      "declare": false,
      "start": 514,
      "end": 588
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Obj4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj4type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 599,
                  "end": 607
                },
                "typeArguments": null,
                "start": 599,
                "end": 607
              },
              "start": 597,
              "end": 607
            },
            "start": 593,
            "end": 607
          },
          "init": null,
          "definite": false,
          "start": 593,
          "end": 607
        }
      ],
      "declare": false,
      "start": 589,
      "end": 608
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Obj4",
            "start": 610,
            "end": 614
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 615,
                "end": 616
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 618,
                  "end": 620
                },
                "start": 617,
                "end": 621
              },
              "start": 615,
              "end": 621
            }
          ],
          "selfClosing": true,
          "start": 609,
          "end": 624
        },
        "children": [],
        "closingElement": null,
        "start": 609,
        "end": 624
      },
      "directive": null,
      "start": 609,
      "end": 625
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Obj4",
            "start": 633,
            "end": 637
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 638,
                "end": 639
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "10",
                  "raw": "'10'",
                  "start": 641,
                  "end": 645
                },
                "start": 640,
                "end": 646
              },
              "start": 638,
              "end": 646
            }
          ],
          "selfClosing": true,
          "start": 632,
          "end": 649
        },
        "children": [],
        "closingElement": null,
        "start": 632,
        "end": 649
      },
      "directive": null,
      "start": 632,
      "end": 650
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 659
}
```
