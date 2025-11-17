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
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 66
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
              "name": "TestA",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 74
            },
            "typeArguments": null,
            "start": 69,
            "end": 74
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestB",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 82
            },
            "typeArguments": null,
            "start": 77,
            "end": 82
          }
        ],
        "start": 69,
        "end": 82
      },
      "declare": false,
      "start": 57,
      "end": 83
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestA",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 100
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
              "start": 105,
              "end": 109
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 111,
                  "end": 114
                },
                "start": 111,
                "end": 114
              },
              "start": 109,
              "end": 114
            },
            "accessibility": null,
            "static": false,
            "start": 105,
            "end": 115
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
              "start": 118,
              "end": 122
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 124,
                "end": 130
              },
              "start": 122,
              "end": 130
            },
            "accessibility": null,
            "static": false,
            "start": 118,
            "end": 131
          }
        ],
        "start": 101,
        "end": 133
      },
      "declare": false,
      "start": 85,
      "end": 133
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestB",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 150
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
              "start": 155,
              "end": 159
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 161,
                  "end": 164
                },
                "start": 161,
                "end": 164
              },
              "start": 159,
              "end": 164
            },
            "accessibility": null,
            "static": false,
            "start": 155,
            "end": 165
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 173
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 175,
                "end": 181
              },
              "start": 173,
              "end": 181
            },
            "accessibility": null,
            "static": false,
            "start": 168,
            "end": 182
          }
        ],
        "start": 151,
        "end": 184
      },
      "declare": false,
      "start": 135,
      "end": 184
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_tcb1",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 200
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
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
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 209,
                    "end": 213
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 215,
                        "end": 219
                      },
                      "typeArguments": null,
                      "start": 215,
                      "end": 219
                    },
                    "start": 213,
                    "end": 219
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 209,
                  "end": 219
                }
              ],
              "start": 207,
              "end": 221
            },
            "start": 205,
            "end": 221
          },
          "start": 201,
          "end": 221
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 284
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 292,
                      "end": 296
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 298,
                      "end": 302
                    },
                    "optional": false,
                    "computed": false,
                    "start": 291,
                    "end": 302
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 305,
                    "end": 309
                  },
                  "optional": false,
                  "computed": false,
                  "start": 289,
                  "end": 309
                },
                "definite": false,
                "start": 281,
                "end": 311
              }
            ],
            "declare": false,
            "start": 275,
            "end": 312
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "_t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 322
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 327,
                "end": 330
              },
              "start": 319,
              "end": 330
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 343,
                        "end": 347
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 349,
                        "end": 353
                      },
                      "optional": false,
                      "computed": false,
                      "start": 342,
                      "end": 353
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 356,
                      "end": 360
                    },
                    "optional": false,
                    "computed": false,
                    "start": 340,
                    "end": 360
                  },
                  "directive": null,
                  "start": 338,
                  "end": 363
                }
              ],
              "start": 332,
              "end": 367
            },
            "alternate": null,
            "start": 315,
            "end": 367
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
                  "name": "_t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 421,
                  "end": 424
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 427,
                      "end": 431
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 432,
                      "end": 436
                    },
                    "optional": false,
                    "computed": false,
                    "start": 427,
                    "end": 436
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 437,
                    "end": 441
                  },
                  "optional": false,
                  "computed": false,
                  "start": 427,
                  "end": 441
                },
                "definite": false,
                "start": 421,
                "end": 441
              }
            ],
            "declare": false,
            "start": 415,
            "end": 442
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "_t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 452
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 457,
                "end": 460
              },
              "start": 449,
              "end": 460
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 473,
                        "end": 477
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 479,
                        "end": 483
                      },
                      "optional": false,
                      "computed": false,
                      "start": 472,
                      "end": 483
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 486,
                      "end": 490
                    },
                    "optional": false,
                    "computed": false,
                    "start": 470,
                    "end": 490
                  },
                  "directive": null,
                  "start": 468,
                  "end": 493
                }
              ],
              "start": 462,
              "end": 497
            },
            "alternate": null,
            "start": 445,
            "end": 497
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
                  "name": "testType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 561,
                  "end": 569
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 572,
                      "end": 576
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 577,
                      "end": 581
                    },
                    "optional": false,
                    "computed": false,
                    "start": 572,
                    "end": 581
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 582,
                    "end": 586
                  },
                  "optional": false,
                  "computed": false,
                  "start": 572,
                  "end": 586
                },
                "definite": false,
                "start": 561,
                "end": 586
              }
            ],
            "declare": false,
            "start": 555,
            "end": 587
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "testType",
                "optional": false,
                "typeAnnotation": null,
                "start": 594,
                "end": 602
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 607,
                "end": 610
              },
              "start": 594,
              "end": 610
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 618,
                        "end": 622
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 623,
                        "end": 627
                      },
                      "optional": false,
                      "computed": false,
                      "start": 618,
                      "end": 627
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 628,
                      "end": 632
                    },
                    "optional": false,
                    "computed": false,
                    "start": 618,
                    "end": 632
                  },
                  "directive": null,
                  "start": 618,
                  "end": 633
                }
              ],
              "start": 612,
              "end": 637
            },
            "alternate": null,
            "start": 590,
            "end": 637
          }
        ],
        "start": 223,
        "end": 639
      },
      "expression": false,
      "start": 186,
      "end": 639
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_tcb2",
        "optional": false,
        "typeAnnotation": null,
        "start": 650,
        "end": 655
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
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
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 664,
                    "end": 668
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 670,
                        "end": 674
                      },
                      "typeArguments": null,
                      "start": 670,
                      "end": 674
                    },
                    "start": 668,
                    "end": 674
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 664,
                  "end": 674
                }
              ],
              "start": 662,
              "end": 676
            },
            "start": 660,
            "end": 676
          },
          "start": 656,
          "end": 676
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 736,
                  "end": 739
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 747,
                      "end": 751
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 753,
                      "end": 757
                    },
                    "optional": false,
                    "computed": false,
                    "start": 746,
                    "end": 757
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 760,
                    "end": 764
                  },
                  "optional": false,
                  "computed": false,
                  "start": 744,
                  "end": 764
                },
                "definite": false,
                "start": 736,
                "end": 766
              }
            ],
            "declare": false,
            "start": 730,
            "end": 767
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 774,
                "end": 777
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "_t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 782,
                "end": 785
              },
              "start": 774,
              "end": 785
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 798,
                        "end": 802
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 804,
                        "end": 808
                      },
                      "optional": false,
                      "computed": false,
                      "start": 797,
                      "end": 808
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 811,
                      "end": 815
                    },
                    "optional": false,
                    "computed": false,
                    "start": 795,
                    "end": 815
                  },
                  "directive": null,
                  "start": 793,
                  "end": 818
                }
              ],
              "start": 787,
              "end": 822
            },
            "alternate": null,
            "start": 770,
            "end": 822
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
                  "name": "_t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 876,
                  "end": 879
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 882,
                      "end": 886
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 887,
                      "end": 891
                    },
                    "optional": false,
                    "computed": false,
                    "start": 882,
                    "end": 891
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 892,
                    "end": 896
                  },
                  "optional": false,
                  "computed": false,
                  "start": 882,
                  "end": 896
                },
                "definite": false,
                "start": 876,
                "end": 896
              }
            ],
            "declare": false,
            "start": 870,
            "end": 897
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 904,
                "end": 907
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "_t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 912,
                "end": 915
              },
              "start": 904,
              "end": 915
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 928,
                        "end": 932
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 934,
                        "end": 938
                      },
                      "optional": false,
                      "computed": false,
                      "start": 927,
                      "end": 938
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 941,
                      "end": 945
                    },
                    "optional": false,
                    "computed": false,
                    "start": 925,
                    "end": 945
                  },
                  "directive": null,
                  "start": 923,
                  "end": 948
                }
              ],
              "start": 917,
              "end": 952
            },
            "alternate": null,
            "start": 900,
            "end": 952
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
                  "name": "testType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1016,
                  "end": 1024
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 1027,
                      "end": 1031
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1032,
                      "end": 1036
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1027,
                    "end": 1036
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1037,
                    "end": 1041
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1027,
                  "end": 1041
                },
                "definite": false,
                "start": 1016,
                "end": 1041
              }
            ],
            "declare": false,
            "start": 1010,
            "end": 1042
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1049,
                "end": 1052
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "testType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1057,
                "end": 1065
              },
              "start": 1049,
              "end": 1065
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1073,
                        "end": 1077
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1078,
                        "end": 1082
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1073,
                      "end": 1082
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1083,
                      "end": 1087
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1073,
                    "end": 1087
                  },
                  "directive": null,
                  "start": 1073,
                  "end": 1088
                }
              ],
              "start": 1067,
              "end": 1092
            },
            "alternate": null,
            "start": 1045,
            "end": 1092
          }
        ],
        "start": 678,
        "end": 1094
      },
      "expression": false,
      "start": 641,
      "end": 1094
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_tcb3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1105,
        "end": 1110
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
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
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1119,
                    "end": 1123
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1125,
                        "end": 1129
                      },
                      "typeArguments": null,
                      "start": 1125,
                      "end": 1129
                    },
                    "start": 1123,
                    "end": 1129
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1119,
                  "end": 1129
                }
              ],
              "start": 1117,
              "end": 1131
            },
            "start": 1115,
            "end": 1131
          },
          "start": 1111,
          "end": 1131
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1145,
                        "end": 1149
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_t1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1151,
                        "end": 1154
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1145,
                      "end": 1154
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1143,
                  "end": 1156
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 1164,
                    "end": 1168
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1170,
                    "end": 1174
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1163,
                  "end": 1174
                },
                "definite": false,
                "start": 1143,
                "end": 1178
              }
            ],
            "declare": false,
            "start": 1137,
            "end": 1179
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "_t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1186,
                "end": 1189
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1194,
                "end": 1197
              },
              "start": 1186,
              "end": 1197
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1210,
                        "end": 1214
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1216,
                        "end": 1220
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1209,
                      "end": 1220
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1223,
                      "end": 1227
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1207,
                    "end": 1227
                  },
                  "directive": null,
                  "start": 1205,
                  "end": 1230
                }
              ],
              "start": 1199,
              "end": 1234
            },
            "alternate": null,
            "start": 1182,
            "end": 1234
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1290,
                        "end": 1294
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_t2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1296,
                        "end": 1299
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1290,
                      "end": 1299
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1288,
                  "end": 1301
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 1304,
                    "end": 1308
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1309,
                    "end": 1313
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1304,
                  "end": 1313
                },
                "definite": false,
                "start": 1288,
                "end": 1313
              }
            ],
            "declare": false,
            "start": 1282,
            "end": 1314
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "_t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1321,
                "end": 1324
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1329,
                "end": 1332
              },
              "start": 1321,
              "end": 1332
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1345,
                        "end": 1349
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1351,
                        "end": 1355
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1344,
                      "end": 1355
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1358,
                      "end": 1362
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1342,
                    "end": 1362
                  },
                  "directive": null,
                  "start": 1340,
                  "end": 1365
                }
              ],
              "start": 1334,
              "end": 1369
            },
            "alternate": null,
            "start": 1317,
            "end": 1369
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1435,
                        "end": 1439
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "testType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1441,
                        "end": 1449
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1435,
                      "end": 1449
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1433,
                  "end": 1451
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 1454,
                    "end": 1458
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1459,
                    "end": 1463
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1454,
                  "end": 1463
                },
                "definite": false,
                "start": 1433,
                "end": 1463
              }
            ],
            "declare": false,
            "start": 1427,
            "end": 1464
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "testType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1471,
                "end": 1479
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1484,
                "end": 1487
              },
              "start": 1471,
              "end": 1487
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1495,
                        "end": 1499
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1500,
                        "end": 1504
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1495,
                      "end": 1504
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1505,
                      "end": 1509
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1495,
                    "end": 1509
                  },
                  "directive": null,
                  "start": 1495,
                  "end": 1510
                }
              ],
              "start": 1489,
              "end": 1514
            },
            "alternate": null,
            "start": 1467,
            "end": 1514
          }
        ],
        "start": 1133,
        "end": 1516
      },
      "expression": false,
      "start": 1096,
      "end": 1516
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_tcb4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1527,
        "end": 1532
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
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
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1541,
                    "end": 1545
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1547,
                        "end": 1551
                      },
                      "typeArguments": null,
                      "start": 1547,
                      "end": 1551
                    },
                    "start": 1545,
                    "end": 1551
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1541,
                  "end": 1551
                }
              ],
              "start": 1539,
              "end": 1553
            },
            "start": 1537,
            "end": 1553
          },
          "start": 1533,
          "end": 1553
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1567,
                        "end": 1571
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_t1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1573,
                        "end": 1576
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1567,
                      "end": 1576
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1565,
                  "end": 1578
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 1586,
                    "end": 1590
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1592,
                    "end": 1596
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1585,
                  "end": 1596
                },
                "definite": false,
                "start": 1565,
                "end": 1600
              }
            ],
            "declare": false,
            "start": 1559,
            "end": 1601
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1608,
                "end": 1611
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "_t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1616,
                "end": 1619
              },
              "start": 1608,
              "end": 1619
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1632,
                        "end": 1636
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1638,
                        "end": 1642
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1631,
                      "end": 1642
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1645,
                      "end": 1649
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1629,
                    "end": 1649
                  },
                  "directive": null,
                  "start": 1627,
                  "end": 1652
                }
              ],
              "start": 1621,
              "end": 1656
            },
            "alternate": null,
            "start": 1604,
            "end": 1656
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1712,
                        "end": 1716
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_t2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1718,
                        "end": 1721
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1712,
                      "end": 1721
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1710,
                  "end": 1723
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 1726,
                    "end": 1730
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1731,
                    "end": 1735
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1726,
                  "end": 1735
                },
                "definite": false,
                "start": 1710,
                "end": 1735
              }
            ],
            "declare": false,
            "start": 1704,
            "end": 1736
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1743,
                "end": 1746
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "_t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1751,
                "end": 1754
              },
              "start": 1743,
              "end": 1754
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1767,
                        "end": 1771
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1773,
                        "end": 1777
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1766,
                      "end": 1777
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1780,
                      "end": 1784
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1764,
                    "end": 1784
                  },
                  "directive": null,
                  "start": 1762,
                  "end": 1787
                }
              ],
              "start": 1756,
              "end": 1791
            },
            "alternate": null,
            "start": 1739,
            "end": 1791
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1857,
                        "end": 1861
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "testType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1863,
                        "end": 1871
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1857,
                      "end": 1871
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1855,
                  "end": 1873
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 1876,
                    "end": 1880
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1881,
                    "end": 1885
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1876,
                  "end": 1885
                },
                "definite": false,
                "start": 1855,
                "end": 1885
              }
            ],
            "declare": false,
            "start": 1849,
            "end": 1886
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1893,
                "end": 1896
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "testType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1901,
                "end": 1909
              },
              "start": 1893,
              "end": 1909
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 1917,
                        "end": 1921
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1922,
                        "end": 1926
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1917,
                      "end": 1926
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1927,
                      "end": 1931
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1917,
                    "end": 1931
                  },
                  "directive": null,
                  "start": 1917,
                  "end": 1932
                }
              ],
              "start": 1911,
              "end": 1936
            },
            "alternate": null,
            "start": 1889,
            "end": 1936
          }
        ],
        "start": 1555,
        "end": 1938
      },
      "expression": false,
      "start": 1518,
      "end": 1938
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1940,
      "end": 1950
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 1950
}
```
