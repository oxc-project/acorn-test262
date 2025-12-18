__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 34
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 38,
                    "end": 41
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 42,
                        "end": 48
                      }
                    ],
                    "start": 41,
                    "end": 49
                  },
                  "start": 38,
                  "end": 49
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 55
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 56,
                        "end": 62
                      }
                    ],
                    "start": 55,
                    "end": 63
                  },
                  "start": 52,
                  "end": 63
                }
              ],
              "start": 38,
              "end": 63
            },
            "start": 36,
            "end": 63
          },
          "start": 35,
          "end": 63
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 72
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 82
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 83,
                      "end": 89
                    }
                  ],
                  "start": 82,
                  "end": 90
                },
                "arguments": [],
                "start": 75,
                "end": 92
              },
              "start": 71,
              "end": 92
            },
            "directive": null,
            "start": 71,
            "end": 93
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 99
            },
            "directive": null,
            "start": 98,
            "end": 100
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 126
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Set",
                "optional": false,
                "typeAnnotation": null,
                "start": 138,
                "end": 141
              },
              "start": 125,
              "end": 141
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 154
                  },
                  "directive": null,
                  "start": 153,
                  "end": 155
                }
              ],
              "start": 143,
              "end": 177
            },
            "alternate": null,
            "start": 121,
            "end": 177
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 183
            },
            "directive": null,
            "start": 182,
            "end": 184
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 205,
                  "end": 206
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "add",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 210
                },
                "optional": false,
                "computed": false,
                "start": 205,
                "end": 210
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 211,
                  "end": 213
                }
              ],
              "optional": false,
              "start": 205,
              "end": 214
            },
            "directive": null,
            "start": 205,
            "end": 215
          }
        ],
        "start": 65,
        "end": 217
      },
      "expression": false,
      "start": 23,
      "end": 217
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 230
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 234,
                    "end": 237
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 238,
                        "end": 244
                      }
                    ],
                    "start": 237,
                    "end": 245
                  },
                  "start": 234,
                  "end": 245
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 248,
                    "end": 251
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 252,
                        "end": 258
                      }
                    ],
                    "start": 251,
                    "end": 259
                  },
                  "start": 248,
                  "end": 259
                }
              ],
              "start": 234,
              "end": 259
            },
            "start": 232,
            "end": 259
          },
          "start": 231,
          "end": 259
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 268
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 278
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 279,
                      "end": 285
                    }
                  ],
                  "start": 278,
                  "end": 286
                },
                "arguments": [],
                "start": 271,
                "end": 288
              },
              "start": 267,
              "end": 288
            },
            "directive": null,
            "start": 267,
            "end": 289
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 294,
              "end": 295
            },
            "directive": null,
            "start": 294,
            "end": 296
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 322
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 334,
                "end": 341
              },
              "start": 321,
              "end": 341
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 353,
                    "end": 354
                  },
                  "directive": null,
                  "start": 353,
                  "end": 355
                }
              ],
              "start": 343,
              "end": 392
            },
            "alternate": null,
            "start": 317,
            "end": 392
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 398
            },
            "directive": null,
            "start": 397,
            "end": 399
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
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
                  "name": "add",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 422,
                  "end": 425
                },
                "optional": false,
                "computed": false,
                "start": 420,
                "end": 425
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 426,
                  "end": 428
                }
              ],
              "optional": false,
              "start": 420,
              "end": 429
            },
            "directive": null,
            "start": 420,
            "end": 430
          }
        ],
        "start": 261,
        "end": 432
      },
      "expression": false,
      "start": 219,
      "end": 432
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 443,
        "end": 445
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 449,
                    "end": 452
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 453,
                        "end": 459
                      }
                    ],
                    "start": 452,
                    "end": 460
                  },
                  "start": 449,
                  "end": 460
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 463,
                    "end": 466
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 467,
                        "end": 473
                      }
                    ],
                    "start": 466,
                    "end": 474
                  },
                  "start": 463,
                  "end": 474
                }
              ],
              "start": 449,
              "end": 474
            },
            "start": 447,
            "end": 474
          },
          "start": 446,
          "end": 474
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 482,
              "end": 483
            },
            "directive": null,
            "start": 482,
            "end": 484
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 523,
                "end": 524
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Set",
                "optional": false,
                "typeAnnotation": null,
                "start": 536,
                "end": 539
              },
              "start": 523,
              "end": 539
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 551,
                    "end": 552
                  },
                  "directive": null,
                  "start": 551,
                  "end": 553
                }
              ],
              "start": 541,
              "end": 589
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 609,
                    "end": 610
                  },
                  "directive": null,
                  "start": 609,
                  "end": 611
                }
              ],
              "start": 599,
              "end": 627
            },
            "start": 519,
            "end": 627
          }
        ],
        "start": 476,
        "end": 629
      },
      "expression": false,
      "start": 434,
      "end": 629
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 640,
        "end": 642
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 646,
                    "end": 649
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 650,
                        "end": 656
                      }
                    ],
                    "start": 649,
                    "end": 657
                  },
                  "start": 646,
                  "end": 657
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 660,
                    "end": 663
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 664,
                        "end": 670
                      }
                    ],
                    "start": 663,
                    "end": 671
                  },
                  "start": 660,
                  "end": 671
                }
              ],
              "start": 646,
              "end": 671
            },
            "start": 644,
            "end": 671
          },
          "start": 643,
          "end": 671
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 679,
                "end": 680
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 687,
                  "end": 690
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 691,
                      "end": 697
                    }
                  ],
                  "start": 690,
                  "end": 698
                },
                "arguments": [],
                "start": 683,
                "end": 700
              },
              "start": 679,
              "end": 700
            },
            "directive": null,
            "start": 679,
            "end": 701
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 706,
              "end": 707
            },
            "directive": null,
            "start": 706,
            "end": 708
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 733,
                "end": 734
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Set",
                "optional": false,
                "typeAnnotation": null,
                "start": 746,
                "end": 749
              },
              "start": 733,
              "end": 749
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 761,
                    "end": 762
                  },
                  "directive": null,
                  "start": 761,
                  "end": 763
                }
              ],
              "start": 751,
              "end": 785
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 805,
                    "end": 806
                  },
                  "directive": null,
                  "start": 805,
                  "end": 807
                }
              ],
              "start": 795,
              "end": 823
            },
            "start": 729,
            "end": 823
          }
        ],
        "start": 673,
        "end": 825
      },
      "expression": false,
      "start": 631,
      "end": 825
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 848,
        "end": 849
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 852,
              "end": 853
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 855,
                "end": 861
              },
              "start": 853,
              "end": 861
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 852,
            "end": 861
          }
        ],
        "start": 850,
        "end": 863
      },
      "abstract": false,
      "declare": false,
      "start": 842,
      "end": 863
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 870,
        "end": 871
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 880,
        "end": 881
      },
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 884,
              "end": 885
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 887,
                "end": 893
              },
              "start": 885,
              "end": 893
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 884,
            "end": 893
          }
        ],
        "start": 882,
        "end": 895
      },
      "abstract": false,
      "declare": false,
      "start": 864,
      "end": 895
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 902,
        "end": 903
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 912,
        "end": 913
      },
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 916,
              "end": 917
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 919,
                "end": 925
              },
              "start": 917,
              "end": 925
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 916,
            "end": 925
          }
        ],
        "start": 914,
        "end": 927
      },
      "abstract": false,
      "declare": false,
      "start": 896,
      "end": 927
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 938,
        "end": 941
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 945,
                    "end": 946
                  },
                  "typeArguments": null,
                  "start": 945,
                  "end": 946
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 949,
                  "end": 958
                }
              ],
              "start": 945,
              "end": 958
            },
            "start": 943,
            "end": 958
          },
          "start": 942,
          "end": 958
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 966,
              "end": 967
            },
            "directive": null,
            "start": 966,
            "end": 968
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 995,
                  "end": 996
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1008,
                  "end": 1009
                },
                "start": 995,
                "end": 1009
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1013,
                  "end": 1014
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1026,
                  "end": 1027
                },
                "start": 1013,
                "end": 1027
              },
              "start": 995,
              "end": 1027
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1039,
                    "end": 1040
                  },
                  "directive": null,
                  "start": 1039,
                  "end": 1041
                }
              ],
              "start": 1029,
              "end": 1057
            },
            "alternate": null,
            "start": 991,
            "end": 1057
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1062,
              "end": 1063
            },
            "directive": null,
            "start": 1062,
            "end": 1064
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1091,
                  "end": 1092
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1104,
                  "end": 1105
                },
                "start": 1091,
                "end": 1105
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1109,
                  "end": 1110
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1122,
                  "end": 1123
                },
                "start": 1109,
                "end": 1123
              },
              "start": 1091,
              "end": 1123
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1135,
                    "end": 1136
                  },
                  "directive": null,
                  "start": 1135,
                  "end": 1137
                }
              ],
              "start": 1125,
              "end": 1153
            },
            "alternate": null,
            "start": 1087,
            "end": 1153
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1158,
              "end": 1159
            },
            "directive": null,
            "start": 1158,
            "end": 1160
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1188,
                "end": 1189
              },
              "prefix": true,
              "start": 1187,
              "end": 1189
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 1201,
                  "end": 1208
                }
              ],
              "start": 1191,
              "end": 1214
            },
            "alternate": null,
            "start": 1183,
            "end": 1214
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1219,
              "end": 1220
            },
            "directive": null,
            "start": 1219,
            "end": 1221
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1236,
                "end": 1237
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1249,
                "end": 1250
              },
              "start": 1236,
              "end": 1250
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1262,
                    "end": 1263
                  },
                  "directive": null,
                  "start": 1262,
                  "end": 1264
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1283,
                      "end": 1284
                    },
                    "operator": "instanceof",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1296,
                      "end": 1297
                    },
                    "start": 1283,
                    "end": 1297
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1313,
                          "end": 1314
                        },
                        "directive": null,
                        "start": 1313,
                        "end": 1315
                      }
                    ],
                    "start": 1299,
                    "end": 1335
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1363,
                          "end": 1364
                        },
                        "directive": null,
                        "start": 1363,
                        "end": 1365
                      }
                    ],
                    "start": 1349,
                    "end": 1381
                  },
                  "start": 1279,
                  "end": 1381
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1390,
                    "end": 1391
                  },
                  "directive": null,
                  "start": 1390,
                  "end": 1392
                }
              ],
              "start": 1252,
              "end": 1404
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1424,
                    "end": 1425
                  },
                  "directive": null,
                  "start": 1424,
                  "end": 1426
                }
              ],
              "start": 1414,
              "end": 1438
            },
            "start": 1232,
            "end": 1438
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1443,
              "end": 1444
            },
            "directive": null,
            "start": 1443,
            "end": 1445
          }
        ],
        "start": 960,
        "end": 1453
      },
      "expression": false,
      "start": 929,
      "end": 1453
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 1565,
        "end": 1566
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1573,
              "end": 1574
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1577,
                "end": 1583
              },
              "start": 1575,
              "end": 1583
            },
            "accessibility": null,
            "static": false,
            "start": 1573,
            "end": 1584
          }
        ],
        "start": 1567,
        "end": 1586
      },
      "declare": false,
      "start": 1555,
      "end": 1586
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 1594,
        "end": 1595
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1602,
              "end": 1603
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1605,
                "end": 1611
              },
              "start": 1603,
              "end": 1611
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1602,
            "end": 1612
          }
        ],
        "start": 1596,
        "end": 1614
      },
      "abstract": false,
      "declare": false,
      "start": 1588,
      "end": 1614
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "goo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1625,
        "end": 1628
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 1632,
                "end": 1633
              },
              "typeArguments": null,
              "start": 1632,
              "end": 1633
            },
            "start": 1630,
            "end": 1633
          },
          "start": 1629,
          "end": 1633
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1641,
              "end": 1642
            },
            "directive": null,
            "start": 1641,
            "end": 1643
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1652,
                "end": 1653
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1665,
                "end": 1666
              },
              "start": 1652,
              "end": 1666
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
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
                      "start": 1678,
                      "end": 1679
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1680,
                      "end": 1681
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1678,
                    "end": 1681
                  },
                  "directive": null,
                  "start": 1678,
                  "end": 1682
                }
              ],
              "start": 1668,
              "end": 1688
            },
            "alternate": null,
            "start": 1648,
            "end": 1688
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1693,
              "end": 1694
            },
            "directive": null,
            "start": 1693,
            "end": 1695
          }
        ],
        "start": 1635,
        "end": 1697
      },
      "expression": false,
      "start": 1616,
      "end": 1697
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
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
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1745,
                        "end": 1749
                      },
                      "start": 1742,
                      "end": 1749
                    },
                    "start": 1739,
                    "end": 1749
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 1751,
                    "end": 1755
                  }
                ],
                "start": 1738,
                "end": 1755
              },
              "start": 1736,
              "end": 1755
            },
            "start": 1735,
            "end": 1755
          },
          "init": null,
          "definite": false,
          "start": 1735,
          "end": 1755
        }
      ],
      "declare": true,
      "start": 1721,
      "end": 1756
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ctor",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1777,
                  "end": 1785
                },
                "typeArguments": null,
                "start": 1777,
                "end": 1785
              },
              "start": 1775,
              "end": 1785
            },
            "start": 1771,
            "end": 1785
          },
          "init": null,
          "definite": false,
          "start": 1771,
          "end": 1785
        }
      ],
      "declare": true,
      "start": 1757,
      "end": 1786
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1792,
          "end": 1793
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ctor",
          "optional": false,
          "typeAnnotation": null,
          "start": 1805,
          "end": 1809
        },
        "start": 1792,
        "end": 1809
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1817,
                "end": 1818
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1817,
              "end": 1820
            },
            "directive": null,
            "start": 1817,
            "end": 1821
          }
        ],
        "start": 1811,
        "end": 1823
      },
      "alternate": null,
      "start": 1788,
      "end": 1823
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 23,
  "end": 1868
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 23,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 38,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 52,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 75,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 79,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 121,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 127,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 138,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 207,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 211,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 219,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 228,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 234,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 252,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 271,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 275,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 279,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 317,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 323,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 334,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 422,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 425,
    "end": 426
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 426,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 434,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 443,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 449,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 453,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 463,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 467,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 519,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 523,
    "end": 524
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 525,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 536,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 588,
    "end": 589
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 594,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 631,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 640,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 646,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 650,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 660,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 664,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 683,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 687,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 691,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 729,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 733,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 735,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 746,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 784,
    "end": 785
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 790,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 824,
    "end": 825
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 842,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 855,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 862,
    "end": 863
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 864,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 870,
    "end": 871
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 872,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 887,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 894,
    "end": 895
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 896,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 902,
    "end": 903
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 904,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 919,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 926,
    "end": 927
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 929,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 938,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 949,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 967,
    "end": 968
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 991,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 995,
    "end": 996
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 997,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1010,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1015,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1087,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1093,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1106,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1111,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1183,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1201,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1232,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1238,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1279,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1285,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1344,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1409,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1555,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1577,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1588,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1605,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1616,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "goo",
    "start": 1625,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1648,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1654,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1721,
    "end": 1728
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1729,
    "end": 1734
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1742,
    "end": 1744
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1745,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1751,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1757,
    "end": 1764
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1765,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "ctor",
    "start": 1771,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 1777,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1788,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1794,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "ctor",
    "start": 1805,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1822,
    "end": 1823
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AtTop",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 34
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "val",
          "optional": false,
          "typeAnnotation": null,
          "start": 35,
          "end": 38
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 42,
                  "end": 46
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 47,
                  "end": 50
                },
                "optional": false,
                "computed": false,
                "start": 42,
                "end": 50
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 56
              },
              "start": 42,
              "end": 56
            },
            "directive": null,
            "start": 42,
            "end": 56
          }
        ],
        "start": 40,
        "end": 58
      },
      "expression": false,
      "start": 20,
      "end": 58
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 81
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 84,
            "end": 85
          },
          "definite": false,
          "start": 80,
          "end": 85
        }
      ],
      "declare": false,
      "start": 76,
      "end": 86
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 92
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "AtTop",
          "optional": false,
          "typeAnnotation": null,
          "start": 104,
          "end": 109
        },
        "start": 91,
        "end": 109
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 118
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 122
              },
              "optional": false,
              "computed": false,
              "start": 117,
              "end": 122
            },
            "directive": null,
            "start": 117,
            "end": 122
          }
        ],
        "start": 111,
        "end": 124
      },
      "alternate": null,
      "start": 87,
      "end": 124
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 20,
  "end": 124
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 20,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "AtTop",
    "start": 29,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 35,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 47,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 53,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 76,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 82,
    "end": 83
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 87,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 93,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "AtTop",
    "start": 104,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  }
]
```
