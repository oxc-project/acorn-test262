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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 52
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
              "start": 59,
              "end": 63
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 65,
                  "end": 70
                },
                "start": 65,
                "end": 70
              },
              "start": 63,
              "end": 70
            },
            "accessibility": null,
            "static": false,
            "start": 59,
            "end": 71
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 80
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 82,
                "end": 88
              },
              "start": 80,
              "end": 88
            },
            "accessibility": null,
            "static": false,
            "start": 76,
            "end": 89
          }
        ],
        "start": 53,
        "end": 91
      },
      "declare": false,
      "start": 39,
      "end": 91
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 106
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
              "start": 113,
              "end": 117
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 119,
                  "end": 124
                },
                "start": 119,
                "end": 124
              },
              "start": 117,
              "end": 124
            },
            "accessibility": null,
            "static": false,
            "start": 113,
            "end": 125
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 136
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 138,
                "end": 144
              },
              "start": 136,
              "end": 144
            },
            "accessibility": null,
            "static": false,
            "start": 130,
            "end": 145
          }
        ],
        "start": 107,
        "end": 147
      },
      "declare": false,
      "start": 93,
      "end": 147
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 160
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 164,
                    "end": 167
                  },
                  "typeArguments": null,
                  "start": 164,
                  "end": 167
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 170,
                    "end": 173
                  },
                  "typeArguments": null,
                  "start": 170,
                  "end": 173
                },
                {
                  "type": "TSStringKeyword",
                  "start": 176,
                  "end": 182
                }
              ],
              "start": 164,
              "end": 182
            },
            "start": 162,
            "end": 182
          },
          "start": 161,
          "end": 182
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 202
                },
                "prefix": true,
                "start": 194,
                "end": 202
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 207,
                "end": 215
              },
              "start": 194,
              "end": 215
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 234,
                      "end": 235
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 236,
                      "end": 240
                    },
                    "optional": false,
                    "computed": false,
                    "start": 234,
                    "end": 240
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "'foo'",
                        "start": 261,
                        "end": 266
                      },
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 284,
                              "end": 285
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 286,
                              "end": 290
                            },
                            "optional": false,
                            "computed": false,
                            "start": 284,
                            "end": 290
                          },
                          "directive": null,
                          "start": 284,
                          "end": 291
                        }
                      ],
                      "start": 256,
                      "end": 291
                    }
                  ],
                  "start": 227,
                  "end": 301
                }
              ],
              "start": 217,
              "end": 307
            },
            "alternate": null,
            "start": 190,
            "end": 307
          }
        ],
        "start": 184,
        "end": 309
      },
      "expression": false,
      "start": 149,
      "end": 309
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 322
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 326,
                    "end": 329
                  },
                  "typeArguments": null,
                  "start": 326,
                  "end": 329
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 332,
                    "end": 335
                  },
                  "typeArguments": null,
                  "start": 332,
                  "end": 335
                },
                {
                  "type": "TSStringKeyword",
                  "start": 338,
                  "end": 344
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 347,
                  "end": 356
                }
              ],
              "start": 326,
              "end": 356
            },
            "start": 324,
            "end": 356
          },
          "start": 323,
          "end": 356
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 375,
                  "end": 376
                },
                "prefix": true,
                "start": 368,
                "end": 376
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "\"object\"",
                "start": 381,
                "end": 389
              },
              "start": 368,
              "end": 389
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 408,
                      "end": 409
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 410,
                      "end": 414
                    },
                    "optional": false,
                    "computed": false,
                    "start": 408,
                    "end": 414
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "'foo'",
                        "start": 435,
                        "end": 440
                      },
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 458,
                              "end": 459
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 460,
                              "end": 464
                            },
                            "optional": false,
                            "computed": false,
                            "start": 458,
                            "end": 464
                          },
                          "directive": null,
                          "start": 458,
                          "end": 465
                        }
                      ],
                      "start": 430,
                      "end": 465
                    }
                  ],
                  "start": 401,
                  "end": 475
                }
              ],
              "start": 391,
              "end": 481
            },
            "alternate": null,
            "start": 364,
            "end": 481
          }
        ],
        "start": 358,
        "end": 483
      },
      "expression": false,
      "start": 311,
      "end": 483
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 494,
        "end": 496
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 500,
                    "end": 503
                  },
                  "typeArguments": null,
                  "start": 500,
                  "end": 503
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 506,
                    "end": 509
                  },
                  "typeArguments": null,
                  "start": 506,
                  "end": 509
                },
                {
                  "type": "TSStringKeyword",
                  "start": 512,
                  "end": 518
                },
                {
                  "type": "TSNullKeyword",
                  "start": 521,
                  "end": 525
                }
              ],
              "start": 500,
              "end": 525
            },
            "start": 498,
            "end": 525
          },
          "start": 497,
          "end": 525
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 537,
                "end": 538
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 549,
                    "end": 550
                  },
                  "prefix": true,
                  "start": 542,
                  "end": 550
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 555,
                  "end": 563
                },
                "start": 542,
                "end": 563
              },
              "start": 537,
              "end": 563
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 582,
                      "end": 583
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 584,
                      "end": 588
                    },
                    "optional": false,
                    "computed": false,
                    "start": 582,
                    "end": 588
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "'foo'",
                        "start": 609,
                        "end": 614
                      },
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 632,
                              "end": 633
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 634,
                              "end": 638
                            },
                            "optional": false,
                            "computed": false,
                            "start": 632,
                            "end": 638
                          },
                          "directive": null,
                          "start": 632,
                          "end": 639
                        }
                      ],
                      "start": 604,
                      "end": 639
                    }
                  ],
                  "start": 575,
                  "end": 649
                }
              ],
              "start": 565,
              "end": 655
            },
            "alternate": null,
            "start": 533,
            "end": 655
          }
        ],
        "start": 527,
        "end": 657
      },
      "expression": false,
      "start": 485,
      "end": 657
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 668,
        "end": 670
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 674,
                    "end": 677
                  },
                  "typeArguments": null,
                  "start": 674,
                  "end": 677
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 680,
                    "end": 683
                  },
                  "typeArguments": null,
                  "start": 680,
                  "end": 683
                },
                {
                  "type": "TSStringKeyword",
                  "start": 686,
                  "end": 692
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 695,
                  "end": 701
                },
                {
                  "type": "TSNullKeyword",
                  "start": 704,
                  "end": 708
                }
              ],
              "start": 674,
              "end": 708
            },
            "start": 672,
            "end": 708
          },
          "start": 671,
          "end": 708
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 720,
                "end": 721
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 732,
                    "end": 733
                  },
                  "prefix": true,
                  "start": 725,
                  "end": 733
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "\"object\"",
                  "start": 738,
                  "end": 746
                },
                "start": 725,
                "end": 746
              },
              "start": 720,
              "end": 746
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 765,
                      "end": 766
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 767,
                      "end": 771
                    },
                    "optional": false,
                    "computed": false,
                    "start": 765,
                    "end": 771
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "'foo'",
                        "start": 792,
                        "end": 797
                      },
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 815,
                              "end": 816
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 817,
                              "end": 821
                            },
                            "optional": false,
                            "computed": false,
                            "start": 815,
                            "end": 821
                          },
                          "directive": null,
                          "start": 815,
                          "end": 822
                        }
                      ],
                      "start": 787,
                      "end": 822
                    }
                  ],
                  "start": 758,
                  "end": 832
                }
              ],
              "start": 748,
              "end": 838
            },
            "alternate": null,
            "start": 716,
            "end": 838
          }
        ],
        "start": 710,
        "end": 840
      },
      "expression": false,
      "start": 659,
      "end": 840
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EnumTypeNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 875,
        "end": 887
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Pattern",
              "optional": false,
              "typeAnnotation": null,
              "start": 894,
              "end": 901
            },
            "initializer": {
              "type": "Literal",
              "value": "Pattern",
              "raw": "\"Pattern\"",
              "start": 904,
              "end": 913
            },
            "computed": false,
            "start": 894,
            "end": 913
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Disjunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 919,
              "end": 930
            },
            "initializer": {
              "type": "Literal",
              "value": "Disjunction",
              "raw": "\"Disjunction\"",
              "start": 933,
              "end": 946
            },
            "computed": false,
            "start": 919,
            "end": 946
          }
        ],
        "start": 888,
        "end": 949
      },
      "const": true,
      "declare": false,
      "start": 864,
      "end": 949
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NodeA",
        "optional": false,
        "typeAnnotation": null,
        "start": 956,
        "end": 961
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
              "name": "Disjunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 964,
              "end": 975
            },
            "typeArguments": null,
            "start": 964,
            "end": 975
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Pattern",
              "optional": false,
              "typeAnnotation": null,
              "start": 978,
              "end": 985
            },
            "typeArguments": null,
            "start": 978,
            "end": 985
          }
        ],
        "start": 964,
        "end": 985
      },
      "declare": false,
      "start": 951,
      "end": 986
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NodeBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 998,
        "end": 1006
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1013,
              "end": 1017
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NodeA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1019,
                    "end": 1024
                  },
                  "typeArguments": null,
                  "start": 1019,
                  "end": 1024
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "type",
                    "raw": "\"type\"",
                    "start": 1025,
                    "end": 1031
                  },
                  "start": 1025,
                  "end": 1031
                },
                "start": 1019,
                "end": 1032
              },
              "start": 1017,
              "end": 1032
            },
            "accessibility": null,
            "static": false,
            "start": 1013,
            "end": 1032
          }
        ],
        "start": 1007,
        "end": 1034
      },
      "declare": false,
      "start": 988,
      "end": 1034
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Disjunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 1046,
        "end": 1057
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "NodeBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 1066,
            "end": 1074
          },
          "typeArguments": null,
          "start": 1066,
          "end": 1074
        }
      ],
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1081,
              "end": 1085
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EnumTypeNode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1087,
                    "end": 1099
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Disjunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1100,
                    "end": 1111
                  },
                  "start": 1087,
                  "end": 1111
                },
                "typeArguments": null,
                "start": 1087,
                "end": 1111
              },
              "start": 1085,
              "end": 1111
            },
            "accessibility": null,
            "static": false,
            "start": 1081,
            "end": 1111
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "alternatives",
              "optional": false,
              "typeAnnotation": null,
              "start": 1116,
              "end": 1128
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1130,
                  "end": 1136
                },
                "start": 1130,
                "end": 1138
              },
              "start": 1128,
              "end": 1138
            },
            "accessibility": null,
            "static": false,
            "start": 1116,
            "end": 1138
          }
        ],
        "start": 1075,
        "end": 1140
      },
      "declare": false,
      "start": 1036,
      "end": 1140
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Pattern",
        "optional": false,
        "typeAnnotation": null,
        "start": 1152,
        "end": 1159
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "NodeBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 1168,
            "end": 1176
          },
          "typeArguments": null,
          "start": 1168,
          "end": 1176
        }
      ],
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1183,
              "end": 1187
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EnumTypeNode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1189,
                    "end": 1201
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Pattern",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1202,
                    "end": 1209
                  },
                  "start": 1189,
                  "end": 1209
                },
                "typeArguments": null,
                "start": 1189,
                "end": 1209
              },
              "start": 1187,
              "end": 1209
            },
            "accessibility": null,
            "static": false,
            "start": 1183,
            "end": 1209
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "elements",
              "optional": false,
              "typeAnnotation": null,
              "start": 1214,
              "end": 1222
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1224,
                  "end": 1230
                },
                "start": 1224,
                "end": 1232
              },
              "start": 1222,
              "end": 1232
            },
            "accessibility": null,
            "static": false,
            "start": 1214,
            "end": 1232
          }
        ],
        "start": 1177,
        "end": 1234
      },
      "declare": false,
      "start": 1142,
      "end": 1234
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NodeA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1244,
                  "end": 1249
                },
                "typeArguments": null,
                "start": 1244,
                "end": 1249
              },
              "start": 1242,
              "end": 1249
            },
            "start": 1240,
            "end": 1249
          },
          "init": null,
          "definite": true,
          "start": 1240,
          "end": 1249
        }
      ],
      "declare": false,
      "start": 1236,
      "end": 1249
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1255,
            "end": 1256
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 1257,
            "end": 1261
          },
          "optional": false,
          "computed": false,
          "start": 1255,
          "end": 1261
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "Disjunction",
          "raw": "\"Disjunction\"",
          "start": 1266,
          "end": 1279
        },
        "start": 1255,
        "end": 1279
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1287,
                    "end": 1288
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "alternatives",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1289,
                    "end": 1301
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1287,
                  "end": 1301
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1302,
                  "end": 1307
                },
                "optional": false,
                "computed": false,
                "start": 1287,
                "end": 1307
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1287,
              "end": 1309
            },
            "directive": null,
            "start": 1287,
            "end": 1309
          }
        ],
        "start": 1281,
        "end": 1311
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1323,
                    "end": 1324
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "elements",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1325,
                    "end": 1333
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1323,
                  "end": 1333
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1334,
                  "end": 1339
                },
                "optional": false,
                "computed": false,
                "start": 1323,
                "end": 1339
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1323,
              "end": 1341
            },
            "directive": null,
            "start": 1323,
            "end": 1341
          }
        ],
        "start": 1317,
        "end": 1378
      },
      "start": 1251,
      "end": 1378
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 39,
  "end": 1378
}
```
