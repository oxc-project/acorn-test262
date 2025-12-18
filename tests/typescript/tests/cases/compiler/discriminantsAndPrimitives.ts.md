__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 39,
    "end": 48,
    "range": [
      39,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 49,
    "end": 52,
    "range": [
      49,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 59,
    "end": 63,
    "range": [
      59,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 65,
    "end": 70,
    "range": [
      65,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 76,
    "end": 80,
    "range": [
      76,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 82,
    "end": 88,
    "range": [
      82,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 93,
    "end": 102,
    "range": [
      93,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 103,
    "end": 106,
    "range": [
      103,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 113,
    "end": 117,
    "range": [
      113,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 119,
    "end": 124,
    "range": [
      119,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 130,
    "end": 136,
    "range": [
      130,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 138,
    "end": 144,
    "range": [
      138,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 149,
    "end": 157,
    "range": [
      149,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 158,
    "end": 160,
    "range": [
      158,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 164,
    "end": 167,
    "range": [
      164,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 170,
    "end": 173,
    "range": [
      170,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 176,
    "end": 182,
    "range": [
      176,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 190,
    "end": 192,
    "range": [
      190,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 194,
    "end": 200,
    "range": [
      194,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 203,
    "end": 206,
    "range": [
      203,
      206
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 207,
    "end": 215,
    "range": [
      207,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 227,
    "end": 233,
    "range": [
      227,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 236,
    "end": 240,
    "range": [
      236,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 256,
    "end": 260,
    "range": [
      256,
      260
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 261,
    "end": 266,
    "range": [
      261,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 286,
    "end": 290,
    "range": [
      286,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 311,
    "end": 319,
    "range": [
      311,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 320,
    "end": 322,
    "range": [
      320,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 326,
    "end": 329,
    "range": [
      326,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 332,
    "end": 335,
    "range": [
      332,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 338,
    "end": 344,
    "range": [
      338,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 347,
    "end": 356,
    "range": [
      347,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 364,
    "end": 366,
    "range": [
      364,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 368,
    "end": 374,
    "range": [
      368,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 377,
    "end": 380,
    "range": [
      377,
      380
    ]
  },
  {
    "type": "String",
    "value": "\"object\"",
    "start": 381,
    "end": 389,
    "range": [
      381,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 401,
    "end": 407,
    "range": [
      401,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 410,
    "end": 414,
    "range": [
      410,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 430,
    "end": 434,
    "range": [
      430,
      434
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 435,
    "end": 440,
    "range": [
      435,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 460,
    "end": 464,
    "range": [
      460,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 485,
    "end": 493,
    "range": [
      485,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 494,
    "end": 496,
    "range": [
      494,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 500,
    "end": 503,
    "range": [
      500,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 506,
    "end": 509,
    "range": [
      506,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 512,
    "end": 518,
    "range": [
      512,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 521,
    "end": 525,
    "range": [
      521,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 533,
    "end": 535,
    "range": [
      533,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 539,
    "end": 541,
    "range": [
      539,
      541
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 542,
    "end": 548,
    "range": [
      542,
      548
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 551,
    "end": 554,
    "range": [
      551,
      554
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 555,
    "end": 563,
    "range": [
      555,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 575,
    "end": 581,
    "range": [
      575,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 584,
    "end": 588,
    "range": [
      584,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 604,
    "end": 608,
    "range": [
      604,
      608
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 609,
    "end": 614,
    "range": [
      609,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 634,
    "end": 638,
    "range": [
      634,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 659,
    "end": 667,
    "range": [
      659,
      667
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 668,
    "end": 670,
    "range": [
      668,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 674,
    "end": 677,
    "range": [
      674,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 680,
    "end": 683,
    "range": [
      680,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 686,
    "end": 692,
    "range": [
      686,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 695,
    "end": 701,
    "range": [
      695,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 704,
    "end": 708,
    "range": [
      704,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 716,
    "end": 718,
    "range": [
      716,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 722,
    "end": 724,
    "range": [
      722,
      724
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 725,
    "end": 731,
    "range": [
      725,
      731
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 734,
    "end": 737,
    "range": [
      734,
      737
    ]
  },
  {
    "type": "String",
    "value": "\"object\"",
    "start": 738,
    "end": 746,
    "range": [
      738,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 758,
    "end": 764,
    "range": [
      758,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 767,
    "end": 771,
    "range": [
      767,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 787,
    "end": 791,
    "range": [
      787,
      791
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 792,
    "end": 797,
    "range": [
      792,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 817,
    "end": 821,
    "range": [
      817,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 864,
    "end": 869,
    "range": [
      864,
      869
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 870,
    "end": 874,
    "range": [
      870,
      874
    ]
  },
  {
    "type": "Identifier",
    "value": "EnumTypeNode",
    "start": 875,
    "end": 887,
    "range": [
      875,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Identifier",
    "value": "Pattern",
    "start": 894,
    "end": 901,
    "range": [
      894,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "String",
    "value": "\"Pattern\"",
    "start": 904,
    "end": 913,
    "range": [
      904,
      913
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Identifier",
    "value": "Disjunction",
    "start": 919,
    "end": 930,
    "range": [
      919,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "String",
    "value": "\"Disjunction\"",
    "start": 933,
    "end": 946,
    "range": [
      933,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 951,
    "end": 955,
    "range": [
      951,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "NodeA",
    "start": 956,
    "end": 961,
    "range": [
      956,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Identifier",
    "value": "Disjunction",
    "start": 964,
    "end": 975,
    "range": [
      964,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Identifier",
    "value": "Pattern",
    "start": 978,
    "end": 985,
    "range": [
      978,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 988,
    "end": 997,
    "range": [
      988,
      997
    ]
  },
  {
    "type": "Identifier",
    "value": "NodeBase",
    "start": 998,
    "end": 1006,
    "range": [
      998,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1013,
    "end": 1017,
    "range": [
      1013,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Identifier",
    "value": "NodeA",
    "start": 1019,
    "end": 1024,
    "range": [
      1019,
      1024
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1024,
    "end": 1025,
    "range": [
      1024,
      1025
    ]
  },
  {
    "type": "String",
    "value": "\"type\"",
    "start": 1025,
    "end": 1031,
    "range": [
      1025,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1036,
    "end": 1045,
    "range": [
      1036,
      1045
    ]
  },
  {
    "type": "Identifier",
    "value": "Disjunction",
    "start": 1046,
    "end": 1057,
    "range": [
      1046,
      1057
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1058,
    "end": 1065,
    "range": [
      1058,
      1065
    ]
  },
  {
    "type": "Identifier",
    "value": "NodeBase",
    "start": 1066,
    "end": 1074,
    "range": [
      1066,
      1074
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1081,
    "end": 1085,
    "range": [
      1081,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Identifier",
    "value": "EnumTypeNode",
    "start": 1087,
    "end": 1099,
    "range": [
      1087,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Identifier",
    "value": "Disjunction",
    "start": 1100,
    "end": 1111,
    "range": [
      1100,
      1111
    ]
  },
  {
    "type": "Identifier",
    "value": "alternatives",
    "start": 1116,
    "end": 1128,
    "range": [
      1116,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1130,
    "end": 1136,
    "range": [
      1130,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1142,
    "end": 1151,
    "range": [
      1142,
      1151
    ]
  },
  {
    "type": "Identifier",
    "value": "Pattern",
    "start": 1152,
    "end": 1159,
    "range": [
      1152,
      1159
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1160,
    "end": 1167,
    "range": [
      1160,
      1167
    ]
  },
  {
    "type": "Identifier",
    "value": "NodeBase",
    "start": 1168,
    "end": 1176,
    "range": [
      1168,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1183,
    "end": 1187,
    "range": [
      1183,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1187,
    "end": 1188,
    "range": [
      1187,
      1188
    ]
  },
  {
    "type": "Identifier",
    "value": "EnumTypeNode",
    "start": 1189,
    "end": 1201,
    "range": [
      1189,
      1201
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1201,
    "end": 1202,
    "range": [
      1201,
      1202
    ]
  },
  {
    "type": "Identifier",
    "value": "Pattern",
    "start": 1202,
    "end": 1209,
    "range": [
      1202,
      1209
    ]
  },
  {
    "type": "Identifier",
    "value": "elements",
    "start": 1214,
    "end": 1222,
    "range": [
      1214,
      1222
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1224,
    "end": 1230,
    "range": [
      1224,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1230,
    "end": 1231,
    "range": [
      1230,
      1231
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1236,
    "end": 1239,
    "range": [
      1236,
      1239
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "Identifier",
    "value": "NodeA",
    "start": 1244,
    "end": 1249,
    "range": [
      1244,
      1249
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1251,
    "end": 1253,
    "range": [
      1251,
      1253
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1257,
    "end": 1261,
    "range": [
      1257,
      1261
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1262,
    "end": 1265,
    "range": [
      1262,
      1265
    ]
  },
  {
    "type": "String",
    "value": "\"Disjunction\"",
    "start": 1266,
    "end": 1279,
    "range": [
      1266,
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
    "value": "{",
    "start": 1281,
    "end": 1282,
    "range": [
      1281,
      1282
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Identifier",
    "value": "alternatives",
    "start": 1289,
    "end": 1301,
    "range": [
      1289,
      1301
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1301,
    "end": 1302,
    "range": [
      1301,
      1302
    ]
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 1302,
    "end": 1307,
    "range": [
      1302,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1312,
    "end": 1316,
    "range": [
      1312,
      1316
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1323,
    "end": 1324,
    "range": [
      1323,
      1324
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1324,
    "end": 1325,
    "range": [
      1324,
      1325
    ]
  },
  {
    "type": "Identifier",
    "value": "elements",
    "start": 1325,
    "end": 1333,
    "range": [
      1325,
      1333
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 1334,
    "end": 1339,
    "range": [
      1334,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1377,
    "end": 1378,
    "range": [
      1377,
      1378
    ]
  }
]
```
