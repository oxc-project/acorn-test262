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
        "name": "Square",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 27
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "square",
                  "raw": "\"square\"",
                  "start": 29,
                  "end": 37
                },
                "start": 29,
                "end": 37
              },
              "start": 27,
              "end": 37
            },
            "accessibility": null,
            "static": false,
            "start": 23,
            "end": 38
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 47
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 49,
                "end": 55
              },
              "start": 47,
              "end": 55
            },
            "accessibility": null,
            "static": false,
            "start": 43,
            "end": 56
          }
        ],
        "start": 17,
        "end": 58
      },
      "declare": false,
      "start": 0,
      "end": 58
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rectangle",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 79
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 90
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "rectangle",
                  "raw": "\"rectangle\"",
                  "start": 92,
                  "end": 103
                },
                "start": 92,
                "end": 103
              },
              "start": 90,
              "end": 103
            },
            "accessibility": null,
            "static": false,
            "start": 86,
            "end": 104
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "width",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 114
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 116,
                "end": 122
              },
              "start": 114,
              "end": 122
            },
            "accessibility": null,
            "static": false,
            "start": 109,
            "end": 123
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "height",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 134
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 136,
                "end": 142
              },
              "start": 134,
              "end": 142
            },
            "accessibility": null,
            "static": false,
            "start": 128,
            "end": 143
          }
        ],
        "start": 80,
        "end": 145
      },
      "declare": false,
      "start": 60,
      "end": 145
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Circle",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 163
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 174
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "circle",
                  "raw": "\"circle\"",
                  "start": 176,
                  "end": 184
                },
                "start": 176,
                "end": 184
              },
              "start": 174,
              "end": 184
            },
            "accessibility": null,
            "static": false,
            "start": 170,
            "end": 185
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "radius",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 196
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 198,
                "end": 204
              },
              "start": 196,
              "end": 204
            },
            "accessibility": null,
            "static": false,
            "start": 190,
            "end": 205
          }
        ],
        "start": 164,
        "end": 207
      },
      "declare": false,
      "start": 147,
      "end": 207
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 219
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Square",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 228
            },
            "typeArguments": null,
            "start": 222,
            "end": 228
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Rectangle",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 240
            },
            "typeArguments": null,
            "start": 231,
            "end": 240
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Circle",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 249
            },
            "typeArguments": null,
            "start": 243,
            "end": 249
          }
        ],
        "start": 222,
        "end": 249
      },
      "declare": false,
      "start": 209,
      "end": 250
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "area1",
        "optional": false,
        "typeAnnotation": null,
        "start": 261,
        "end": 266
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 275
              },
              "typeArguments": null,
              "start": 270,
              "end": 275
            },
            "start": 268,
            "end": 275
          },
          "start": 267,
          "end": 275
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 288
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 289,
                  "end": 293
                },
                "optional": false,
                "computed": false,
                "start": 287,
                "end": 293
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "square",
                "raw": "\"square\"",
                "start": 298,
                "end": 306
              },
              "start": 287,
              "end": 306
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 325,
                        "end": 326
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "size",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 327,
                        "end": 331
                      },
                      "optional": false,
                      "computed": false,
                      "start": 325,
                      "end": 331
                    },
                    "operator": "*",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 334,
                        "end": 335
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "size",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 336,
                        "end": 340
                      },
                      "optional": false,
                      "computed": false,
                      "start": 334,
                      "end": 340
                    },
                    "start": 325,
                    "end": 340
                  },
                  "start": 318,
                  "end": 341
                }
              ],
              "start": 308,
              "end": 347
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 361,
                    "end": 362
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 363,
                    "end": 367
                  },
                  "optional": false,
                  "computed": false,
                  "start": 361,
                  "end": 367
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "circle",
                  "raw": "\"circle\"",
                  "start": 372,
                  "end": 380
                },
                "start": 361,
                "end": 380
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 399,
                            "end": 403
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PI",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 404,
                            "end": 406
                          },
                          "optional": false,
                          "computed": false,
                          "start": 399,
                          "end": 406
                        },
                        "operator": "*",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 409,
                            "end": 410
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "radius",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 411,
                            "end": 417
                          },
                          "optional": false,
                          "computed": false,
                          "start": 409,
                          "end": 417
                        },
                        "start": 399,
                        "end": 417
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 420,
                          "end": 421
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "radius",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 422,
                          "end": 428
                        },
                        "optional": false,
                        "computed": false,
                        "start": 420,
                        "end": 428
                      },
                      "start": 399,
                      "end": 428
                    },
                    "start": 392,
                    "end": 429
                  }
                ],
                "start": 382,
                "end": 435
              },
              "alternate": {
                "type": "IfStatement",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 449,
                      "end": 450
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 451,
                      "end": 455
                    },
                    "optional": false,
                    "computed": false,
                    "start": 449,
                    "end": 455
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "rectangle",
                    "raw": "\"rectangle\"",
                    "start": 460,
                    "end": 471
                  },
                  "start": 449,
                  "end": 471
                },
                "consequent": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 490,
                            "end": 491
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "width",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 492,
                            "end": 497
                          },
                          "optional": false,
                          "computed": false,
                          "start": 490,
                          "end": 497
                        },
                        "operator": "*",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 500,
                            "end": 501
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "height",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 502,
                            "end": 508
                          },
                          "optional": false,
                          "computed": false,
                          "start": 500,
                          "end": 508
                        },
                        "start": 490,
                        "end": 508
                      },
                      "start": 483,
                      "end": 509
                    }
                  ],
                  "start": 473,
                  "end": 515
                },
                "alternate": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 542,
                        "end": 543
                      },
                      "start": 535,
                      "end": 544
                    }
                  ],
                  "start": 525,
                  "end": 550
                },
                "start": 445,
                "end": 550
              },
              "start": 357,
              "end": 550
            },
            "start": 283,
            "end": 550
          }
        ],
        "start": 277,
        "end": 552
      },
      "expression": false,
      "start": 252,
      "end": 552
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "area2",
        "optional": false,
        "typeAnnotation": null,
        "start": 563,
        "end": 568
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 577
              },
              "typeArguments": null,
              "start": 572,
              "end": 577
            },
            "start": 570,
            "end": 577
          },
          "start": 569,
          "end": 577
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 593,
                "end": 594
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 595,
                "end": 599
              },
              "optional": false,
              "computed": false,
              "start": 593,
              "end": 599
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "square",
                  "raw": "\"square\"",
                  "start": 616,
                  "end": 624
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 633,
                          "end": 634
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 635,
                          "end": 639
                        },
                        "optional": false,
                        "computed": false,
                        "start": 633,
                        "end": 639
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 642,
                          "end": 643
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 644,
                          "end": 648
                        },
                        "optional": false,
                        "computed": false,
                        "start": 642,
                        "end": 648
                      },
                      "start": 633,
                      "end": 648
                    },
                    "start": 626,
                    "end": 649
                  }
                ],
                "start": 611,
                "end": 649
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "rectangle",
                  "raw": "\"rectangle\"",
                  "start": 663,
                  "end": 674
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 683,
                          "end": 684
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "width",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 685,
                          "end": 690
                        },
                        "optional": false,
                        "computed": false,
                        "start": 683,
                        "end": 690
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 693,
                          "end": 694
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "height",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 695,
                          "end": 701
                        },
                        "optional": false,
                        "computed": false,
                        "start": 693,
                        "end": 701
                      },
                      "start": 683,
                      "end": 701
                    },
                    "start": 676,
                    "end": 702
                  }
                ],
                "start": 658,
                "end": 702
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "circle",
                  "raw": "\"circle\"",
                  "start": 716,
                  "end": 724
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 733,
                            "end": 737
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PI",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 738,
                            "end": 740
                          },
                          "optional": false,
                          "computed": false,
                          "start": 733,
                          "end": 740
                        },
                        "operator": "*",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 743,
                            "end": 744
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "radius",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 745,
                            "end": 751
                          },
                          "optional": false,
                          "computed": false,
                          "start": 743,
                          "end": 751
                        },
                        "start": 733,
                        "end": 751
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 754,
                          "end": 755
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "radius",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 756,
                          "end": 762
                        },
                        "optional": false,
                        "computed": false,
                        "start": 754,
                        "end": 762
                      },
                      "start": 733,
                      "end": 762
                    },
                    "start": 726,
                    "end": 763
                  }
                ],
                "start": 711,
                "end": 763
              }
            ],
            "start": 585,
            "end": 769
          }
        ],
        "start": 579,
        "end": 771
      },
      "expression": false,
      "start": 554,
      "end": 771
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertNever",
        "optional": false,
        "typeAnnotation": null,
        "start": 782,
        "end": 793
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 797,
              "end": 802
            },
            "start": 795,
            "end": 802
          },
          "start": 794,
          "end": 802
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 805,
          "end": 810
        },
        "start": 803,
        "end": 810
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 827,
                "end": 832
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "Unexpected object: ",
                    "raw": "\"Unexpected object: \"",
                    "start": 833,
                    "end": 854
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 857,
                    "end": 858
                  },
                  "start": 833,
                  "end": 858
                }
              ],
              "start": 823,
              "end": 859
            },
            "start": 817,
            "end": 860
          }
        ],
        "start": 811,
        "end": 862
      },
      "expression": false,
      "start": 773,
      "end": 862
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "area3",
        "optional": false,
        "typeAnnotation": null,
        "start": 873,
        "end": 878
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 882,
                "end": 887
              },
              "typeArguments": null,
              "start": 882,
              "end": 887
            },
            "start": 880,
            "end": 887
          },
          "start": 879,
          "end": 887
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 903,
                "end": 904
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 905,
                "end": 909
              },
              "optional": false,
              "computed": false,
              "start": 903,
              "end": 909
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "square",
                  "raw": "\"square\"",
                  "start": 926,
                  "end": 934
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 943,
                          "end": 944
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 945,
                          "end": 949
                        },
                        "optional": false,
                        "computed": false,
                        "start": 943,
                        "end": 949
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 952,
                          "end": 953
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 954,
                          "end": 958
                        },
                        "optional": false,
                        "computed": false,
                        "start": 952,
                        "end": 958
                      },
                      "start": 943,
                      "end": 958
                    },
                    "start": 936,
                    "end": 959
                  }
                ],
                "start": 921,
                "end": 959
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "rectangle",
                  "raw": "\"rectangle\"",
                  "start": 973,
                  "end": 984
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 993,
                          "end": 994
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "width",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 995,
                          "end": 1000
                        },
                        "optional": false,
                        "computed": false,
                        "start": 993,
                        "end": 1000
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1003,
                          "end": 1004
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "height",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1005,
                          "end": 1011
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1003,
                        "end": 1011
                      },
                      "start": 993,
                      "end": 1011
                    },
                    "start": 986,
                    "end": 1012
                  }
                ],
                "start": 968,
                "end": 1012
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "circle",
                  "raw": "\"circle\"",
                  "start": 1026,
                  "end": 1034
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1043,
                            "end": 1047
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PI",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1048,
                            "end": 1050
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1043,
                          "end": 1050
                        },
                        "operator": "*",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1053,
                            "end": 1054
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "radius",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1055,
                            "end": 1061
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1053,
                          "end": 1061
                        },
                        "start": 1043,
                        "end": 1061
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1064,
                          "end": 1065
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "radius",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1066,
                          "end": 1072
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1064,
                        "end": 1072
                      },
                      "start": 1043,
                      "end": 1072
                    },
                    "start": 1036,
                    "end": 1073
                  }
                ],
                "start": 1021,
                "end": 1073
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1098,
                        "end": 1109
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1110,
                          "end": 1111
                        }
                      ],
                      "optional": false,
                      "start": 1098,
                      "end": 1112
                    },
                    "start": 1091,
                    "end": 1113
                  }
                ],
                "start": 1082,
                "end": 1113
              }
            ],
            "start": 895,
            "end": 1119
          }
        ],
        "start": 889,
        "end": 1121
      },
      "expression": false,
      "start": 864,
      "end": 1121
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "area4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1132,
        "end": 1137
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 1141,
                "end": 1146
              },
              "typeArguments": null,
              "start": 1141,
              "end": 1146
            },
            "start": 1139,
            "end": 1146
          },
          "start": 1138,
          "end": 1146
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1162,
                "end": 1163
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1164,
                "end": 1168
              },
              "optional": false,
              "computed": false,
              "start": 1162,
              "end": 1168
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "square",
                  "raw": "\"square\"",
                  "start": 1185,
                  "end": 1193
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1202,
                          "end": 1203
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1204,
                          "end": 1208
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1202,
                        "end": 1208
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1211,
                          "end": 1212
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1213,
                          "end": 1217
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1211,
                        "end": 1217
                      },
                      "start": 1202,
                      "end": 1217
                    },
                    "start": 1195,
                    "end": 1218
                  }
                ],
                "start": 1180,
                "end": 1218
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "rectangle",
                  "raw": "\"rectangle\"",
                  "start": 1232,
                  "end": 1243
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1252,
                          "end": 1253
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "width",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1254,
                          "end": 1259
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1252,
                        "end": 1259
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1262,
                          "end": 1263
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "height",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1264,
                          "end": 1270
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1262,
                        "end": 1270
                      },
                      "start": 1252,
                      "end": 1270
                    },
                    "start": 1245,
                    "end": 1271
                  }
                ],
                "start": 1227,
                "end": 1271
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "circle",
                  "raw": "\"circle\"",
                  "start": 1285,
                  "end": 1293
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1302,
                            "end": 1306
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PI",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1307,
                            "end": 1309
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1302,
                          "end": 1309
                        },
                        "operator": "*",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1312,
                            "end": 1313
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "radius",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1314,
                            "end": 1320
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1312,
                          "end": 1320
                        },
                        "start": 1302,
                        "end": 1320
                      },
                      "operator": "*",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1323,
                          "end": 1324
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "radius",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1325,
                          "end": 1331
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1323,
                        "end": 1331
                      },
                      "start": 1302,
                      "end": 1331
                    },
                    "start": 1295,
                    "end": 1332
                  }
                ],
                "start": 1280,
                "end": 1332
              }
            ],
            "start": 1154,
            "end": 1338
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "typeAnnotation": null,
                "start": 1350,
                "end": 1361
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1362,
                  "end": 1363
                }
              ],
              "optional": false,
              "start": 1350,
              "end": 1364
            },
            "start": 1343,
            "end": 1365
          }
        ],
        "start": 1148,
        "end": 1367
      },
      "expression": false,
      "start": 1123,
      "end": 1367
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Message",
        "optional": false,
        "typeAnnotation": null,
        "start": 1374,
        "end": 1381
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1390,
                  "end": 1394
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 1396,
                      "end": 1399
                    },
                    "start": 1396,
                    "end": 1399
                  },
                  "start": 1394,
                  "end": 1399
                },
                "accessibility": null,
                "static": false,
                "start": 1390,
                "end": 1400
              },
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
                  "start": 1401,
                  "end": 1402
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1404,
                    "end": 1410
                  },
                  "start": 1402,
                  "end": 1410
                },
                "accessibility": null,
                "static": false,
                "start": 1401,
                "end": 1410
              }
            ],
            "start": 1388,
            "end": 1412
          },
          {
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1421,
                  "end": 1425
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "B",
                          "raw": "\"B\"",
                          "start": 1427,
                          "end": 1430
                        },
                        "start": 1427,
                        "end": 1430
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "C",
                          "raw": "\"C\"",
                          "start": 1433,
                          "end": 1436
                        },
                        "start": 1433,
                        "end": 1436
                      }
                    ],
                    "start": 1427,
                    "end": 1436
                  },
                  "start": 1425,
                  "end": 1436
                },
                "accessibility": null,
                "static": false,
                "start": 1421,
                "end": 1437
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1438,
                  "end": 1439
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1441,
                    "end": 1447
                  },
                  "start": 1439,
                  "end": 1447
                },
                "accessibility": null,
                "static": false,
                "start": 1438,
                "end": 1447
              }
            ],
            "start": 1419,
            "end": 1449
          },
          {
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1458,
                  "end": 1462
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "D",
                      "raw": "\"D\"",
                      "start": 1464,
                      "end": 1467
                    },
                    "start": 1464,
                    "end": 1467
                  },
                  "start": 1462,
                  "end": 1467
                },
                "accessibility": null,
                "static": false,
                "start": 1458,
                "end": 1467
              }
            ],
            "start": 1456,
            "end": 1469
          }
        ],
        "start": 1388,
        "end": 1469
      },
      "declare": false,
      "start": 1369,
      "end": 1470
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1481,
        "end": 1483
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 1487,
                "end": 1494
              },
              "typeArguments": null,
              "start": 1487,
              "end": 1494
            },
            "start": 1485,
            "end": 1494
          },
          "start": 1484,
          "end": 1494
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1506,
                  "end": 1507
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1508,
                  "end": 1512
                },
                "optional": false,
                "computed": false,
                "start": 1506,
                "end": 1512
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 1517,
                "end": 1520
              },
              "start": 1506,
              "end": 1520
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1532,
                    "end": 1533
                  },
                  "directive": null,
                  "start": 1532,
                  "end": 1534
                }
              ],
              "start": 1522,
              "end": 1569
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1583,
                    "end": 1584
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1585,
                    "end": 1589
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1583,
                  "end": 1589
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "D",
                  "raw": "\"D\"",
                  "start": 1594,
                  "end": 1597
                },
                "start": 1583,
                "end": 1597
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1609,
                      "end": 1610
                    },
                    "directive": null,
                    "start": 1609,
                    "end": 1611
                  }
                ],
                "start": 1599,
                "end": 1635
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1655,
                      "end": 1656
                    },
                    "directive": null,
                    "start": 1655,
                    "end": 1657
                  }
                ],
                "start": 1645,
                "end": 1698
              },
              "start": 1579,
              "end": 1698
            },
            "start": 1502,
            "end": 1698
          }
        ],
        "start": 1496,
        "end": 1700
      },
      "expression": false,
      "start": 1472,
      "end": 1700
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1711,
        "end": 1713
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 1717,
                "end": 1724
              },
              "typeArguments": null,
              "start": 1717,
              "end": 1724
            },
            "start": 1715,
            "end": 1724
          },
          "start": 1714,
          "end": 1724
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1736,
                  "end": 1737
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1738,
                  "end": 1742
                },
                "optional": false,
                "computed": false,
                "start": 1736,
                "end": 1742
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 1747,
                "end": 1750
              },
              "start": 1736,
              "end": 1750
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 1762,
                  "end": 1769
                }
              ],
              "start": 1752,
              "end": 1775
            },
            "alternate": null,
            "start": 1732,
            "end": 1775
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 1780,
              "end": 1781
            },
            "directive": null,
            "start": 1780,
            "end": 1782
          }
        ],
        "start": 1726,
        "end": 1835
      },
      "expression": false,
      "start": 1702,
      "end": 1835
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1846,
        "end": 1848
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 1852,
                "end": 1859
              },
              "typeArguments": null,
              "start": 1852,
              "end": 1859
            },
            "start": 1850,
            "end": 1859
          },
          "start": 1849,
          "end": 1859
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1871,
                  "end": 1872
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1873,
                  "end": 1877
                },
                "optional": false,
                "computed": false,
                "start": 1871,
                "end": 1877
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "X",
                "raw": "\"X\"",
                "start": 1882,
                "end": 1885
              },
              "start": 1871,
              "end": 1885
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1897,
                    "end": 1898
                  },
                  "directive": null,
                  "start": 1897,
                  "end": 1899
                }
              ],
              "start": 1887,
              "end": 1915
            },
            "alternate": null,
            "start": 1867,
            "end": 1915
          }
        ],
        "start": 1861,
        "end": 1917
      },
      "expression": false,
      "start": 1837,
      "end": 1917
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1928,
        "end": 1930
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 1934,
                "end": 1941
              },
              "typeArguments": null,
              "start": 1934,
              "end": 1941
            },
            "start": 1932,
            "end": 1941
          },
          "start": 1931,
          "end": 1941
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "A",
                    "raw": "\"A\"",
                    "start": 1946,
                    "end": 1949
                  },
                  "start": 1946,
                  "end": 1949
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "D",
                    "raw": "\"D\"",
                    "start": 1952,
                    "end": 1955
                  },
                  "start": 1952,
                  "end": 1955
                }
              ],
              "start": 1946,
              "end": 1955
            },
            "start": 1944,
            "end": 1955
          },
          "start": 1943,
          "end": 1955
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1967,
                  "end": 1968
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1969,
                  "end": 1973
                },
                "optional": false,
                "computed": false,
                "start": 1967,
                "end": 1973
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1977,
                "end": 1978
              },
              "start": 1967,
              "end": 1978
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1990,
                    "end": 1991
                  },
                  "directive": null,
                  "start": 1990,
                  "end": 1992
                }
              ],
              "start": 1980,
              "end": 2043
            },
            "alternate": null,
            "start": 1963,
            "end": 2043
          }
        ],
        "start": 1957,
        "end": 2045
      },
      "expression": false,
      "start": 1919,
      "end": 2045
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2056,
        "end": 2058
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 2062,
                "end": 2069
              },
              "typeArguments": null,
              "start": 2062,
              "end": 2069
            },
            "start": 2060,
            "end": 2069
          },
          "start": 2059,
          "end": 2069
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 2085,
                "end": 2086
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2087,
                "end": 2091
              },
              "optional": false,
              "computed": false,
              "start": 2085,
              "end": 2091
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 2108,
                  "end": 2111
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2125,
                      "end": 2126
                    },
                    "directive": null,
                    "start": 2125,
                    "end": 2127
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2169,
                    "end": 2175
                  }
                ],
                "start": 2103,
                "end": 2175
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "D",
                  "raw": "\"D\"",
                  "start": 2189,
                  "end": 2192
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2206,
                      "end": 2207
                    },
                    "directive": null,
                    "start": 2206,
                    "end": 2208
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2239,
                    "end": 2245
                  }
                ],
                "start": 2184,
                "end": 2245
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2275,
                      "end": 2276
                    },
                    "directive": null,
                    "start": 2275,
                    "end": 2277
                  }
                ],
                "start": 2254,
                "end": 2277
              }
            ],
            "start": 2077,
            "end": 2318
          }
        ],
        "start": 2071,
        "end": 2320
      },
      "expression": false,
      "start": 2047,
      "end": 2320
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2331,
        "end": 2333
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 2337,
                "end": 2344
              },
              "typeArguments": null,
              "start": 2337,
              "end": 2344
            },
            "start": 2335,
            "end": 2344
          },
          "start": 2334,
          "end": 2344
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 2360,
                "end": 2361
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2362,
                "end": 2366
              },
              "optional": false,
              "computed": false,
              "start": 2360,
              "end": 2366
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 2383,
                  "end": 2386
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2400,
                      "end": 2401
                    },
                    "directive": null,
                    "start": 2400,
                    "end": 2402
                  }
                ],
                "start": 2378,
                "end": 2402
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "D",
                  "raw": "\"D\"",
                  "start": 2445,
                  "end": 2448
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2462,
                      "end": 2463
                    },
                    "directive": null,
                    "start": 2462,
                    "end": 2464
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2522,
                    "end": 2528
                  }
                ],
                "start": 2440,
                "end": 2528
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2558,
                      "end": 2559
                    },
                    "directive": null,
                    "start": 2558,
                    "end": 2560
                  }
                ],
                "start": 2537,
                "end": 2560
              }
            ],
            "start": 2352,
            "end": 2601
          }
        ],
        "start": 2346,
        "end": 2603
      },
      "expression": false,
      "start": 2322,
      "end": 2603
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2614,
        "end": 2616
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 2620,
                "end": 2627
              },
              "typeArguments": null,
              "start": 2620,
              "end": 2627
            },
            "start": 2618,
            "end": 2627
          },
          "start": 2617,
          "end": 2627
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 2643,
                "end": 2644
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2645,
                "end": 2649
              },
              "optional": false,
              "computed": false,
              "start": 2643,
              "end": 2649
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 2666,
                  "end": 2669
                },
                "consequent": [],
                "start": 2661,
                "end": 2670
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 2684,
                  "end": 2687
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2701,
                    "end": 2708
                  }
                ],
                "start": 2679,
                "end": 2708
              }
            ],
            "start": 2635,
            "end": 2714
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 2719,
              "end": 2720
            },
            "directive": null,
            "start": 2719,
            "end": 2721
          }
        ],
        "start": 2629,
        "end": 2774
      },
      "expression": false,
      "start": 2605,
      "end": 2774
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2785,
        "end": 2787
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 2791,
                "end": 2798
              },
              "typeArguments": null,
              "start": 2791,
              "end": 2798
            },
            "start": 2789,
            "end": 2798
          },
          "start": 2788,
          "end": 2798
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 2814,
                "end": 2815
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2816,
                "end": 2820
              },
              "optional": false,
              "computed": false,
              "start": 2814,
              "end": 2820
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 2837,
                  "end": 2840
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2854,
                    "end": 2861
                  }
                ],
                "start": 2832,
                "end": 2861
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "D",
                  "raw": "\"D\"",
                  "start": 2875,
                  "end": 2878
                },
                "consequent": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2902,
                        "end": 2907
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2898,
                      "end": 2909
                    },
                    "start": 2892,
                    "end": 2910
                  }
                ],
                "start": 2870,
                "end": 2910
              }
            ],
            "start": 2806,
            "end": 2916
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 2921,
              "end": 2922
            },
            "directive": null,
            "start": 2921,
            "end": 2923
          }
        ],
        "start": 2800,
        "end": 2960
      },
      "expression": false,
      "start": 2776,
      "end": 2960
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2960
}
```
