__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ElementRef",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HTMLElement",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 28,
                      "end": 39
                    },
                    "typeArguments": null,
                    "start": 28,
                    "end": 39
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 42,
                    "end": 46
                  }
                ],
                "start": 28,
                "end": 46
              },
              "start": 26,
              "end": 46
            },
            "start": 19,
            "end": 46
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 51,
            "end": 55
          },
          "start": 48,
          "end": 55
        },
        "start": 18,
        "end": 55
      },
      "declare": false,
      "start": 0,
      "end": 56
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ThumbProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 73
      },
      "typeParameters": null,
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
              "name": "elementRef",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 92
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ElementRef",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 95,
                  "end": 105
                },
                "typeArguments": null,
                "start": 95,
                "end": 105
              },
              "start": 93,
              "end": 105
            },
            "accessibility": null,
            "static": false,
            "start": 82,
            "end": 106
          }
        ],
        "start": 76,
        "end": 108
      },
      "declare": false,
      "start": 58,
      "end": 108
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 129
      },
      "typeParameters": null,
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
              "name": "thumbYProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 149
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ThumbProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 162
                },
                "typeArguments": null,
                "start": 152,
                "end": 162
              },
              "start": 150,
              "end": 162
            },
            "accessibility": null,
            "static": false,
            "start": 138,
            "end": 163
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "thumbXProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 179
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ThumbProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 191
                },
                "typeArguments": null,
                "start": 181,
                "end": 191
              },
              "start": 179,
              "end": 191
            },
            "accessibility": null,
            "static": false,
            "start": 168,
            "end": 192
          }
        ],
        "start": 132,
        "end": 194
      },
      "declare": false,
      "start": 110,
      "end": 194
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 202,
        "end": 211
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
              "name": "props",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 223
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 240
                },
                "typeArguments": null,
                "start": 226,
                "end": 240
              },
              "start": 224,
              "end": 240
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 218,
            "end": 241
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "thumbYElementRef",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 269
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ref",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "HTMLElement",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 278,
                            "end": 289
                          },
                          "typeArguments": null,
                          "start": 278,
                          "end": 289
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 292,
                          "end": 296
                        }
                      ],
                      "start": 278,
                      "end": 296
                    },
                    "start": 276,
                    "end": 296
                  },
                  "start": 273,
                  "end": 296
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "TSNonNullExpression",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 318,
                                    "end": 322
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "props",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 323,
                                    "end": 328
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 318,
                                  "end": 328
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "thumbYProps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 329,
                                  "end": 340
                                },
                                "optional": false,
                                "computed": false,
                                "start": 318,
                                "end": 340
                              },
                              "start": 318,
                              "end": 341
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 342,
                              "end": 352
                            },
                            "optional": false,
                            "computed": false,
                            "start": 318,
                            "end": 352
                          },
                          "prefix": true,
                          "start": 311,
                          "end": 352
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "function",
                          "raw": "'function'",
                          "start": 357,
                          "end": 367
                        },
                        "start": 311,
                        "end": 367
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "TSNonNullExpression",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 371,
                                  "end": 375
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 376,
                                  "end": 381
                                },
                                "optional": false,
                                "computed": false,
                                "start": 371,
                                "end": 381
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "thumbYProps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 382,
                                "end": 393
                              },
                              "optional": false,
                              "computed": false,
                              "start": 371,
                              "end": 393
                            },
                            "start": 371,
                            "end": 394
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 395,
                            "end": 405
                          },
                          "optional": false,
                          "computed": false,
                          "start": 371,
                          "end": 405
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 406,
                            "end": 409
                          }
                        ],
                        "optional": false,
                        "start": 371,
                        "end": 410
                      },
                      "start": 311,
                      "end": 410
                    },
                    "directive": null,
                    "start": 311,
                    "end": 411
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "TSNonNullExpression",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 429,
                                    "end": 433
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "props",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 434,
                                    "end": 439
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 429,
                                  "end": 439
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "thumbYProps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 440,
                                  "end": 451
                                },
                                "optional": false,
                                "computed": false,
                                "start": 429,
                                "end": 451
                              },
                              "start": 429,
                              "end": 452
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 453,
                              "end": 463
                            },
                            "optional": false,
                            "computed": false,
                            "start": 429,
                            "end": 463
                          },
                          "prefix": true,
                          "start": 421,
                          "end": 464
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "function",
                          "raw": "'function'",
                          "start": 469,
                          "end": 479
                        },
                        "start": 421,
                        "end": 479
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "TSNonNullExpression",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 483,
                                  "end": 487
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 488,
                                  "end": 493
                                },
                                "optional": false,
                                "computed": false,
                                "start": 483,
                                "end": 493
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "thumbYProps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 494,
                                "end": 505
                              },
                              "optional": false,
                              "computed": false,
                              "start": 483,
                              "end": 505
                            },
                            "start": 483,
                            "end": 506
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 507,
                            "end": 517
                          },
                          "optional": false,
                          "computed": false,
                          "start": 483,
                          "end": 517
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 518,
                            "end": 521
                          }
                        ],
                        "optional": false,
                        "start": 483,
                        "end": 522
                      },
                      "start": 421,
                      "end": 522
                    },
                    "directive": null,
                    "start": 421,
                    "end": 523
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "TSNonNullExpression",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "TSNonNullExpression",
                                "expression": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 542,
                                      "end": 546
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "props",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 547,
                                      "end": 552
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 542,
                                    "end": 552
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "thumbYProps",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 554,
                                    "end": 565
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 541,
                                  "end": 565
                                },
                                "start": 541,
                                "end": 566
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "elementRef",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 567,
                                "end": 577
                              },
                              "optional": false,
                              "computed": false,
                              "start": 541,
                              "end": 577
                            },
                            "start": 540,
                            "end": 579
                          },
                          "prefix": true,
                          "start": 533,
                          "end": 579
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "function",
                          "raw": "'function'",
                          "start": 584,
                          "end": 594
                        },
                        "start": 533,
                        "end": 594
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "TSNonNullExpression",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 598,
                                  "end": 602
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 603,
                                  "end": 608
                                },
                                "optional": false,
                                "computed": false,
                                "start": 598,
                                "end": 608
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "thumbYProps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 609,
                                "end": 620
                              },
                              "optional": false,
                              "computed": false,
                              "start": 598,
                              "end": 620
                            },
                            "start": 598,
                            "end": 621
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 622,
                            "end": 632
                          },
                          "optional": false,
                          "computed": false,
                          "start": 598,
                          "end": 632
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 633,
                            "end": 636
                          }
                        ],
                        "optional": false,
                        "start": 598,
                        "end": 637
                      },
                      "start": 533,
                      "end": 637
                    },
                    "directive": null,
                    "start": 533,
                    "end": 638
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 655,
                                  "end": 659
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 660,
                                  "end": 665
                                },
                                "optional": false,
                                "computed": false,
                                "start": 655,
                                "end": 665
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 666,
                                "end": 677
                              },
                              "optional": false,
                              "computed": false,
                              "start": 655,
                              "end": 677
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 678,
                              "end": 688
                            },
                            "optional": false,
                            "computed": false,
                            "start": 655,
                            "end": 688
                          },
                          "prefix": true,
                          "start": 648,
                          "end": 688
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "function",
                          "raw": "'function'",
                          "start": 693,
                          "end": 703
                        },
                        "start": 648,
                        "end": 703
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 707,
                                "end": 711
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 712,
                                "end": 717
                              },
                              "optional": false,
                              "computed": false,
                              "start": 707,
                              "end": 717
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "thumbXProps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 718,
                              "end": 729
                            },
                            "optional": false,
                            "computed": false,
                            "start": 707,
                            "end": 729
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 730,
                            "end": 740
                          },
                          "optional": false,
                          "computed": false,
                          "start": 707,
                          "end": 740
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 741,
                            "end": 744
                          }
                        ],
                        "optional": false,
                        "start": 707,
                        "end": 745
                      },
                      "start": 648,
                      "end": 745
                    },
                    "directive": null,
                    "start": 648,
                    "end": 746
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 763,
                                  "end": 767
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 768,
                                  "end": 773
                                },
                                "optional": false,
                                "computed": false,
                                "start": 763,
                                "end": 773
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 774,
                                "end": 785
                              },
                              "optional": false,
                              "computed": false,
                              "start": 763,
                              "end": 785
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 786,
                              "end": 796
                            },
                            "optional": false,
                            "computed": false,
                            "start": 763,
                            "end": 796
                          },
                          "prefix": true,
                          "start": 756,
                          "end": 796
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "function",
                          "raw": "'function'",
                          "start": 801,
                          "end": 811
                        },
                        "start": 756,
                        "end": 811
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 816,
                                "end": 820
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 821,
                                "end": 826
                              },
                              "optional": false,
                              "computed": false,
                              "start": 816,
                              "end": 826
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "thumbXProps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 828,
                              "end": 839
                            },
                            "optional": false,
                            "computed": false,
                            "start": 815,
                            "end": 839
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 840,
                            "end": 850
                          },
                          "optional": false,
                          "computed": false,
                          "start": 815,
                          "end": 850
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 851,
                            "end": 854
                          }
                        ],
                        "optional": false,
                        "start": 815,
                        "end": 855
                      },
                      "start": 756,
                      "end": 855
                    },
                    "directive": null,
                    "start": 756,
                    "end": 856
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 873,
                                  "end": 877
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 878,
                                  "end": 883
                                },
                                "optional": false,
                                "computed": false,
                                "start": 873,
                                "end": 883
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 884,
                                "end": 895
                              },
                              "optional": false,
                              "computed": false,
                              "start": 873,
                              "end": 895
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 896,
                              "end": 906
                            },
                            "optional": false,
                            "computed": false,
                            "start": 873,
                            "end": 906
                          },
                          "prefix": true,
                          "start": 866,
                          "end": 906
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "function",
                          "raw": "'function'",
                          "start": 911,
                          "end": 921
                        },
                        "start": 866,
                        "end": 921
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 926,
                                "end": 930
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 931,
                                "end": 936
                              },
                              "optional": false,
                              "computed": false,
                              "start": 926,
                              "end": 936
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "thumbXProps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 937,
                              "end": 948
                            },
                            "optional": false,
                            "computed": false,
                            "start": 926,
                            "end": 948
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 950,
                            "end": 960
                          },
                          "optional": false,
                          "computed": false,
                          "start": 925,
                          "end": 960
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 961,
                            "end": 964
                          }
                        ],
                        "optional": false,
                        "start": 925,
                        "end": 965
                      },
                      "start": 866,
                      "end": 965
                    },
                    "directive": null,
                    "start": 866,
                    "end": 966
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 983,
                                  "end": 987
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 988,
                                  "end": 993
                                },
                                "optional": false,
                                "computed": false,
                                "start": 983,
                                "end": 993
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 994,
                                "end": 1005
                              },
                              "optional": false,
                              "computed": false,
                              "start": 983,
                              "end": 1005
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1006,
                              "end": 1016
                            },
                            "optional": false,
                            "computed": false,
                            "start": 983,
                            "end": 1016
                          },
                          "prefix": true,
                          "start": 976,
                          "end": 1016
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "function",
                          "raw": "'function'",
                          "start": 1021,
                          "end": 1031
                        },
                        "start": 976,
                        "end": 1031
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "TSNonNullExpression",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "TSNonNullExpression",
                                "expression": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1037,
                                    "end": 1041
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "props",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1042,
                                    "end": 1047
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1037,
                                  "end": 1047
                                },
                                "start": 1036,
                                "end": 1049
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1050,
                                "end": 1061
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1036,
                              "end": 1061
                            },
                            "start": 1035,
                            "end": 1063
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1064,
                            "end": 1074
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1035,
                          "end": 1074
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1075,
                            "end": 1078
                          }
                        ],
                        "optional": false,
                        "start": 1035,
                        "end": 1079
                      },
                      "start": 976,
                      "end": 1079
                    },
                    "directive": null,
                    "start": 976,
                    "end": 1080
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1098,
                                  "end": 1102
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1103,
                                  "end": 1108
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1098,
                                "end": 1108
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1109,
                                "end": 1120
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1098,
                              "end": 1120
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1122,
                              "end": 1132
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1097,
                            "end": 1132
                          },
                          "prefix": true,
                          "start": 1090,
                          "end": 1132
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "function",
                          "raw": "'function'",
                          "start": 1137,
                          "end": 1147
                        },
                        "start": 1090,
                        "end": 1147
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "TSNonNullExpression",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "TSNonNullExpression",
                                "expression": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1153,
                                    "end": 1157
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "props",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1158,
                                    "end": 1163
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1153,
                                  "end": 1163
                                },
                                "start": 1152,
                                "end": 1165
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1166,
                                "end": 1177
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1152,
                              "end": 1177
                            },
                            "start": 1151,
                            "end": 1179
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1180,
                            "end": 1190
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1151,
                          "end": 1190
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1191,
                            "end": 1194
                          }
                        ],
                        "optional": false,
                        "start": 1151,
                        "end": 1195
                      },
                      "start": 1090,
                      "end": 1195
                    },
                    "directive": null,
                    "start": 1090,
                    "end": 1196
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "TSNonNullExpression",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "TSNonNullExpression",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1213,
                                      "end": 1217
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "props",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1218,
                                      "end": 1223
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1213,
                                    "end": 1223
                                  },
                                  "start": 1213,
                                  "end": 1224
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "thumbXProps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1225,
                                  "end": 1236
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1213,
                                "end": 1236
                              },
                              "start": 1213,
                              "end": 1237
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "elementRef",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1238,
                              "end": 1248
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1213,
                            "end": 1248
                          },
                          "prefix": true,
                          "start": 1206,
                          "end": 1248
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "function",
                          "raw": "'function'",
                          "start": 1253,
                          "end": 1263
                        },
                        "start": 1206,
                        "end": 1263
                      },
                      "operator": "&&",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "TSNonNullExpression",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "TSNonNullExpression",
                                "expression": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1269,
                                    "end": 1273
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "props",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1274,
                                    "end": 1279
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1269,
                                  "end": 1279
                                },
                                "start": 1268,
                                "end": 1281
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "thumbXProps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1282,
                                "end": 1293
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1268,
                              "end": 1293
                            },
                            "start": 1267,
                            "end": 1295
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "elementRef",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1296,
                            "end": 1306
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1267,
                          "end": 1306
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1307,
                            "end": 1310
                          }
                        ],
                        "optional": false,
                        "start": 1267,
                        "end": 1311
                      },
                      "start": 1206,
                      "end": 1311
                    },
                    "directive": null,
                    "start": 1206,
                    "end": 1312
                  }
                ],
                "start": 301,
                "end": 1318
              },
              "id": null,
              "generator": false,
              "start": 272,
              "end": 1318
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 246,
            "end": 1319
          }
        ],
        "start": 212,
        "end": 1321
      },
      "abstract": false,
      "declare": false,
      "start": 196,
      "end": 1321
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1321
}
```
