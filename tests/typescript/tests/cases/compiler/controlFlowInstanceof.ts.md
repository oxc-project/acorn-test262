__ESTREE_TEST__:PASS:
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
__ESTREE_TEST__:PASS:
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
