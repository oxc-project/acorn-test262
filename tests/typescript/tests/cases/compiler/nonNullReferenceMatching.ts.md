__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "ElementRef",
    "start": 5,
    "end": 15,
    "range": [
      5,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 19,
    "end": 26,
    "range": [
      19,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 28,
    "end": 39,
    "range": [
      28,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 42,
    "end": 46,
    "range": [
      42,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 48,
    "end": 50,
    "range": [
      48,
      50
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 51,
    "end": 55,
    "range": [
      51,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 58,
    "end": 62,
    "range": [
      58,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "ThumbProps",
    "start": 63,
    "end": 73,
    "range": [
      63,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "elementRef",
    "start": 82,
    "end": 92,
    "range": [
      82,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "ElementRef",
    "start": 95,
    "end": 105,
    "range": [
      95,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 110,
    "end": 114,
    "range": [
      110,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentProps",
    "start": 115,
    "end": 129,
    "range": [
      115,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "thumbYProps",
    "start": 138,
    "end": 149,
    "range": [
      138,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "ThumbProps",
    "start": 152,
    "end": 162,
    "range": [
      152,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "thumbXProps",
    "start": 168,
    "end": 179,
    "range": [
      168,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "ThumbProps",
    "start": 181,
    "end": 191,
    "range": [
      181,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 196,
    "end": 201,
    "range": [
      196,
      201
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 202,
    "end": 211,
    "range": [
      202,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 218,
    "end": 223,
    "range": [
      218,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentProps",
    "start": 226,
    "end": 240,
    "range": [
      226,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 246,
    "end": 252,
    "range": [
      246,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "thumbYElementRef",
    "start": 253,
    "end": 269,
    "range": [
      253,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 273,
    "end": 276,
    "range": [
      273,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 278,
    "end": 289,
    "range": [
      278,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 292,
    "end": 296,
    "range": [
      292,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 298,
    "end": 300,
    "range": [
      298,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 311,
    "end": 317,
    "range": [
      311,
      317
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 318,
    "end": 322,
    "range": [
      318,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 323,
    "end": 328,
    "range": [
      323,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "thumbYProps",
    "start": 329,
    "end": 340,
    "range": [
      329,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "elementRef",
    "start": 342,
    "end": 352,
    "range": [
      342,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 353,
    "end": 356,
    "range": [
      353,
      356
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 357,
    "end": 367,
    "range": [
      357,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 368,
    "end": 370,
    "range": [
      368,
      370
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 371,
    "end": 375,
    "range": [
      371,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 376,
    "end": 381,
    "range": [
      376,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "thumbYProps",
    "start": 382,
    "end": 393,
    "range": [
      382,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Identifier",
    "value": "elementRef",
    "start": 395,
    "end": 405,
    "range": [
      395,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 406,
    "end": 409,
    "range": [
      406,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 421,
    "end": 427,
    "range": [
      421,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 429,
    "end": 433,
    "range": [
      429,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 434,
    "end": 439,
    "range": [
      434,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Identifier",
    "value": "thumbYProps",
    "start": 440,
    "end": 451,
    "range": [
      440,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "elementRef",
    "start": 453,
    "end": 463,
    "range": [
      453,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 465,
    "end": 468,
    "range": [
      465,
      468
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 469,
    "end": 479,
    "range": [
      469,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 480,
    "end": 482,
    "range": [
      480,
      482
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 483,
    "end": 487,
    "range": [
      483,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 488,
    "end": 493,
    "range": [
      488,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "thumbYProps",
    "start": 494,
    "end": 505,
    "range": [
      494,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "elementRef",
    "start": 507,
    "end": 517,
    "range": [
      507,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 518,
    "end": 521,
    "range": [
      518,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 533,
    "end": 539,
    "range": [
      533,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 542,
    "end": 546,
    "range": [
      542,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 547,
    "end": 552,
    "range": [
      547,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "thumbYProps",
    "start": 554,
    "end": 565,
    "range": [
      554,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Identifier",
    "value": "elementRef",
    "start": 567,
    "end": 577,
    "range": [
      567,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 580,
    "end": 583,
    "range": [
      580,
      583
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 584,
    "end": 594,
    "range": [
      584,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 595,
    "end": 597,
    "range": [
      595,
      597
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 598,
    "end": 602,
    "range": [
      598,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 603,
    "end": 608,
    "range": [
      603,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Identifier",
    "value": "thumbYProps",
    "start": 609,
    "end": 620,
    "range": [
      609,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Identifier",
    "value": "elementRef",
    "start": 622,
    "end": 632,
    "range": [
      622,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 633,
    "end": 636,
    "range": [
      633,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 648,
    "end": 654,
    "range": [
      648,
      654
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 655,
    "end": 659,
    "range": [
      655,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 660,
    "end": 665,
    "range": [
      660,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Identifier",
    "value": "thumbXProps",
    "start": 666,
    "end": 677,
    "range": [
      666,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Identifier",
    "value": "elementRef",
    "start": 678,
    "end": 688,
    "range": [
      678,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 689,
    "end": 692,
    "range": [
      689,
      692
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 693,
    "end": 703,
    "range": [
      693,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 704,
    "end": 706,
    "range": [
      704,
      706
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 707,
    "end": 711,
    "range": [
      707,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 712,
    "end": 717,
    "range": [
      712,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Identifier",
    "value": "thumbXProps",
    "start": 718,
    "end": 729,
    "range": [
      718,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Identifier",
    "value": "elementRef",
    "start": 730,
    "end": 740,
    "range": [
      730,
      740
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 741,
    "end": 744,
    "range": [
      741,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 756,
    "end": 762,
    "range": [
      756,
      762
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 763,
    "end": 767,
    "range": [
      763,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 768,
    "end": 773,
    "range": [
      768,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "thumbXProps",
    "start": 774,
    "end": 785,
    "range": [
      774,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "elementRef",
    "start": 786,
    "end": 796,
    "range": [
      786,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 797,
    "end": 800,
    "range": [
      797,
      800
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 801,
    "end": 811,
    "range": [
      801,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 812,
    "end": 814,
    "range": [
      812,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 816,
    "end": 820,
    "range": [
      816,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 821,
    "end": 826,
    "range": [
      821,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Identifier",
    "value": "thumbXProps",
    "start": 828,
    "end": 839,
    "range": [
      828,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Identifier",
    "value": "elementRef",
    "start": 840,
    "end": 850,
    "range": [
      840,
      850
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 851,
    "end": 854,
    "range": [
      851,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 866,
    "end": 872,
    "range": [
      866,
      872
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 873,
    "end": 877,
    "range": [
      873,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 878,
    "end": 883,
    "range": [
      878,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Identifier",
    "value": "thumbXProps",
    "start": 884,
    "end": 895,
    "range": [
      884,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Identifier",
    "value": "elementRef",
    "start": 896,
    "end": 906,
    "range": [
      896,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 907,
    "end": 910,
    "range": [
      907,
      910
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 911,
    "end": 921,
    "range": [
      911,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 922,
    "end": 924,
    "range": [
      922,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 926,
    "end": 930,
    "range": [
      926,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 931,
    "end": 936,
    "range": [
      931,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Identifier",
    "value": "thumbXProps",
    "start": 937,
    "end": 948,
    "range": [
      937,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 949,
    "end": 950,
    "range": [
      949,
      950
    ]
  },
  {
    "type": "Identifier",
    "value": "elementRef",
    "start": 950,
    "end": 960,
    "range": [
      950,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 961,
    "end": 964,
    "range": [
      961,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 976,
    "end": 982,
    "range": [
      976,
      982
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 983,
    "end": 987,
    "range": [
      983,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 988,
    "end": 993,
    "range": [
      988,
      993
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Identifier",
    "value": "thumbXProps",
    "start": 994,
    "end": 1005,
    "range": [
      994,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Identifier",
    "value": "elementRef",
    "start": 1006,
    "end": 1016,
    "range": [
      1006,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1017,
    "end": 1020,
    "range": [
      1017,
      1020
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 1021,
    "end": 1031,
    "range": [
      1021,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1032,
    "end": 1034,
    "range": [
      1032,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1037,
    "end": 1041,
    "range": [
      1037,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1042,
    "end": 1047,
    "range": [
      1042,
      1047
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Identifier",
    "value": "thumbXProps",
    "start": 1050,
    "end": 1061,
    "range": [
      1050,
      1061
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1061,
    "end": 1062,
    "range": [
      1061,
      1062
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1062,
    "end": 1063,
    "range": [
      1062,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Identifier",
    "value": "elementRef",
    "start": 1064,
    "end": 1074,
    "range": [
      1064,
      1074
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1075,
    "end": 1078,
    "range": [
      1075,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1090,
    "end": 1096,
    "range": [
      1090,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1098,
    "end": 1102,
    "range": [
      1098,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1103,
    "end": 1108,
    "range": [
      1103,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Identifier",
    "value": "thumbXProps",
    "start": 1109,
    "end": 1120,
    "range": [
      1109,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Identifier",
    "value": "elementRef",
    "start": 1122,
    "end": 1132,
    "range": [
      1122,
      1132
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1133,
    "end": 1136,
    "range": [
      1133,
      1136
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 1137,
    "end": 1147,
    "range": [
      1137,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1148,
    "end": 1150,
    "range": [
      1148,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1153,
    "end": 1157,
    "range": [
      1153,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1158,
    "end": 1163,
    "range": [
      1158,
      1163
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1164,
    "end": 1165,
    "range": [
      1164,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Identifier",
    "value": "thumbXProps",
    "start": 1166,
    "end": 1177,
    "range": [
      1166,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1178,
    "end": 1179,
    "range": [
      1178,
      1179
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Identifier",
    "value": "elementRef",
    "start": 1180,
    "end": 1190,
    "range": [
      1180,
      1190
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1191,
    "end": 1194,
    "range": [
      1191,
      1194
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1206,
    "end": 1212,
    "range": [
      1206,
      1212
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1213,
    "end": 1217,
    "range": [
      1213,
      1217
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1218,
    "end": 1223,
    "range": [
      1218,
      1223
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Identifier",
    "value": "thumbXProps",
    "start": 1225,
    "end": 1236,
    "range": [
      1225,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Identifier",
    "value": "elementRef",
    "start": 1238,
    "end": 1248,
    "range": [
      1238,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1249,
    "end": 1252,
    "range": [
      1249,
      1252
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 1253,
    "end": 1263,
    "range": [
      1253,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1264,
    "end": 1266,
    "range": [
      1264,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1267,
    "end": 1268,
    "range": [
      1267,
      1268
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1269,
    "end": 1273,
    "range": [
      1269,
      1273
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1274,
    "end": 1279,
    "range": [
      1274,
      1279
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1279,
    "end": 1280,
    "range": [
      1279,
      1280
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1280,
    "end": 1281,
    "range": [
      1280,
      1281
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1281,
    "end": 1282,
    "range": [
      1281,
      1282
    ]
  },
  {
    "type": "Identifier",
    "value": "thumbXProps",
    "start": 1282,
    "end": 1293,
    "range": [
      1282,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1294,
    "end": 1295,
    "range": [
      1294,
      1295
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "Identifier",
    "value": "elementRef",
    "start": 1296,
    "end": 1306,
    "range": [
      1296,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Identifier",
    "value": "ref",
    "start": 1307,
    "end": 1310,
    "range": [
      1307,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  }
]
```
