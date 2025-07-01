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
        "start": 15,
        "end": 18
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
              "start": 32,
              "end": 39
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 40,
              "end": 43
            },
            "declare": false,
            "start": 22,
            "end": 43
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ElementAttributesProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 80
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
                    "start": 83,
                    "end": 85
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 87,
                      "end": 90
                    },
                    "start": 85,
                    "end": 90
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 83,
                  "end": 91
                }
              ],
              "start": 81,
              "end": 93
            },
            "declare": false,
            "start": 45,
            "end": 93
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 122
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 123,
              "end": 126
            },
            "declare": false,
            "start": 95,
            "end": 126
          }
        ],
        "start": 19,
        "end": 128
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 128
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj1type",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 148
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
                    "start": 159,
                    "end": 165
                  },
                  "start": 157,
                  "end": 165
                },
                "start": 156,
                "end": 165
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 168,
                "end": 171
              },
              "start": 166,
              "end": 171
            },
            "start": 152,
            "end": 172
          }
        ],
        "start": 149,
        "end": 174
      },
      "declare": false,
      "start": 130,
      "end": 174
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
                  "start": 185,
                  "end": 193
                },
                "typeArguments": null,
                "start": 185,
                "end": 193
              },
              "start": 183,
              "end": 193
            },
            "start": 179,
            "end": 193
          },
          "init": null,
          "definite": false,
          "start": 179,
          "end": 193
        }
      ],
      "declare": false,
      "start": 175,
      "end": 194
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
            "start": 196,
            "end": 200
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 201,
                "end": 202
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 204,
                  "end": 206
                },
                "start": 203,
                "end": 207
              },
              "start": 201,
              "end": 207
            }
          ],
          "selfClosing": true,
          "start": 195,
          "end": 210
        },
        "children": [],
        "closingElement": null,
        "start": 195,
        "end": 210
      },
      "directive": null,
      "start": 195,
      "end": 211
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj2type",
        "optional": false,
        "typeAnnotation": null,
        "start": 229,
        "end": 237
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
                    "start": 248,
                    "end": 254
                  },
                  "start": 246,
                  "end": 254
                },
                "start": 245,
                "end": 254
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
                      "start": 259,
                      "end": 260
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 263,
                        "end": 269
                      },
                      "start": 261,
                      "end": 269
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 259,
                    "end": 270
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
                      "start": 271,
                      "end": 273
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 275,
                        "end": 278
                      },
                      "start": 273,
                      "end": 278
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 271,
                    "end": 278
                  }
                ],
                "start": 257,
                "end": 280
              },
              "start": 255,
              "end": 280
            },
            "start": 241,
            "end": 281
          }
        ],
        "start": 238,
        "end": 283
      },
      "declare": false,
      "start": 219,
      "end": 283
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
                  "start": 294,
                  "end": 302
                },
                "typeArguments": null,
                "start": 294,
                "end": 302
              },
              "start": 292,
              "end": 302
            },
            "start": 288,
            "end": 302
          },
          "init": null,
          "definite": false,
          "start": 288,
          "end": 302
        }
      ],
      "declare": false,
      "start": 284,
      "end": 303
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
            "start": 305,
            "end": 309
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 310,
                "end": 311
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 313,
                  "end": 315
                },
                "start": 312,
                "end": 316
              },
              "start": 310,
              "end": 316
            }
          ],
          "selfClosing": true,
          "start": 304,
          "end": 319
        },
        "children": [],
        "closingElement": null,
        "start": 304,
        "end": 319
      },
      "directive": null,
      "start": 304,
      "end": 320
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj3type",
        "optional": false,
        "typeAnnotation": null,
        "start": 338,
        "end": 346
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
                    "start": 357,
                    "end": 363
                  },
                  "start": 355,
                  "end": 363
                },
                "start": 354,
                "end": 363
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
                      "start": 368,
                      "end": 369
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 371,
                        "end": 377
                      },
                      "start": 369,
                      "end": 377
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 368,
                    "end": 378
                  }
                ],
                "start": 366,
                "end": 380
              },
              "start": 364,
              "end": 380
            },
            "start": 350,
            "end": 381
          }
        ],
        "start": 347,
        "end": 383
      },
      "declare": false,
      "start": 328,
      "end": 383
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
                  "start": 394,
                  "end": 402
                },
                "typeArguments": null,
                "start": 394,
                "end": 402
              },
              "start": 392,
              "end": 402
            },
            "start": 388,
            "end": 402
          },
          "init": null,
          "definite": false,
          "start": 388,
          "end": 402
        }
      ],
      "declare": false,
      "start": 384,
      "end": 403
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
            "start": 405,
            "end": 409
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 410,
                "end": 411
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 413,
                  "end": 415
                },
                "start": 412,
                "end": 416
              },
              "start": 410,
              "end": 416
            }
          ],
          "selfClosing": true,
          "start": 404,
          "end": 419
        },
        "children": [],
        "closingElement": null,
        "start": 404,
        "end": 419
      },
      "directive": null,
      "start": 404,
      "end": 420
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
                "start": 446,
                "end": 449
              },
              "start": 444,
              "end": 449
            },
            "start": 434,
            "end": 449
          },
          "init": null,
          "definite": false,
          "start": 434,
          "end": 449
        }
      ],
      "declare": false,
      "start": 430,
      "end": 450
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
            "start": 452,
            "end": 456
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
                "start": 461,
                "end": 471
              },
              "start": 457,
              "end": 472
            }
          ],
          "selfClosing": true,
          "start": 451,
          "end": 475
        },
        "children": [],
        "closingElement": null,
        "start": 451,
        "end": 475
      },
      "directive": null,
      "start": 451,
      "end": 476
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
            "start": 487,
            "end": 491
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 496,
                "end": 498
              },
              "start": 492,
              "end": 499
            }
          ],
          "selfClosing": true,
          "start": 486,
          "end": 502
        },
        "children": [],
        "closingElement": null,
        "start": 486,
        "end": 502
      },
      "directive": null,
      "start": 486,
      "end": 503
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj4type",
        "optional": false,
        "typeAnnotation": null,
        "start": 521,
        "end": 529
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
                    "start": 540,
                    "end": 546
                  },
                  "start": 538,
                  "end": 546
                },
                "start": 537,
                "end": 546
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
                      "start": 551,
                      "end": 552
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 554,
                        "end": 560
                      },
                      "start": 552,
                      "end": 560
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 551,
                    "end": 561
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
                      "start": 562,
                      "end": 564
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
                              "start": 568,
                              "end": 569
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 571,
                                "end": 577
                              },
                              "start": 569,
                              "end": 577
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 568,
                            "end": 578
                          }
                        ],
                        "start": 566,
                        "end": 580
                      },
                      "start": 564,
                      "end": 580
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 562,
                    "end": 580
                  }
                ],
                "start": 549,
                "end": 582
              },
              "start": 547,
              "end": 582
            },
            "start": 533,
            "end": 583
          }
        ],
        "start": 530,
        "end": 585
      },
      "declare": false,
      "start": 511,
      "end": 585
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
                  "start": 596,
                  "end": 604
                },
                "typeArguments": null,
                "start": 596,
                "end": 604
              },
              "start": 594,
              "end": 604
            },
            "start": 590,
            "end": 604
          },
          "init": null,
          "definite": false,
          "start": 590,
          "end": 604
        }
      ],
      "declare": false,
      "start": 586,
      "end": 605
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
            "start": 607,
            "end": 611
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 612,
                "end": 613
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 615,
                  "end": 617
                },
                "start": 614,
                "end": 618
              },
              "start": 612,
              "end": 618
            }
          ],
          "selfClosing": true,
          "start": 606,
          "end": 621
        },
        "children": [],
        "closingElement": null,
        "start": 606,
        "end": 621
      },
      "directive": null,
      "start": 606,
      "end": 622
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
            "start": 630,
            "end": 634
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 635,
                "end": 636
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "10",
                  "raw": "'10'",
                  "start": 638,
                  "end": 642
                },
                "start": 637,
                "end": 643
              },
              "start": 635,
              "end": 643
            }
          ],
          "selfClosing": true,
          "start": 629,
          "end": 646
        },
        "children": [],
        "closingElement": null,
        "start": 629,
        "end": 646
      },
      "directive": null,
      "start": 629,
      "end": 647
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 656
}
```
