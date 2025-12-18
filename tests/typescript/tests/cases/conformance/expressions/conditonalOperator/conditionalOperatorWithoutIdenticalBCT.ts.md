__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 83
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
              "name": "propertyX",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 95
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 97,
                "end": 100
              },
              "start": 95,
              "end": 100
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
            "start": 86,
            "end": 101
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propertyX1",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 112
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 114,
                "end": 120
              },
              "start": 112,
              "end": 120
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
            "start": 102,
            "end": 121
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propertyX2",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 132
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 134,
                "end": 140
              },
              "start": 132,
              "end": 140
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
            "start": 122,
            "end": 140
          }
        ],
        "start": 84,
        "end": 142
      },
      "abstract": false,
      "declare": false,
      "start": 76,
      "end": 142
    },
    {
      "type": "EmptyStatement",
      "start": 142,
      "end": 143
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
        "start": 150,
        "end": 151
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 161
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
              "name": "propertyA",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 164,
            "end": 181
          }
        ],
        "start": 162,
        "end": 183
      },
      "abstract": false,
      "declare": false,
      "start": 144,
      "end": 183
    },
    {
      "type": "EmptyStatement",
      "start": 183,
      "end": 184
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
        "start": 191,
        "end": 192
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 202
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
              "name": "propertyB",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 214
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 216,
                "end": 222
              },
              "start": 214,
              "end": 222
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
            "start": 205,
            "end": 222
          }
        ],
        "start": 203,
        "end": 224
      },
      "abstract": false,
      "declare": false,
      "start": 185,
      "end": 224
    },
    {
      "type": "EmptyStatement",
      "start": 224,
      "end": 225
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
                  "start": 234,
                  "end": 235
                },
                "typeArguments": null,
                "start": 234,
                "end": 235
              },
              "start": 232,
              "end": 235
            },
            "start": 231,
            "end": 235
          },
          "init": null,
          "definite": false,
          "start": 231,
          "end": 235
        }
      ],
      "declare": false,
      "start": 227,
      "end": 236
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 245
                },
                "typeArguments": null,
                "start": 244,
                "end": 245
              },
              "start": 242,
              "end": 245
            },
            "start": 241,
            "end": 245
          },
          "init": null,
          "definite": false,
          "start": 241,
          "end": 245
        }
      ],
      "declare": false,
      "start": 237,
      "end": 246
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 254,
                  "end": 255
                },
                "typeArguments": null,
                "start": 254,
                "end": 255
              },
              "start": 252,
              "end": 255
            },
            "start": 251,
            "end": 255
          },
          "init": null,
          "definite": false,
          "start": 251,
          "end": 255
        }
      ],
      "declare": false,
      "start": 247,
      "end": 256
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 297,
          "end": 301
        },
        "consequent": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 304,
          "end": 305
        },
        "alternate": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 308,
          "end": 309
        },
        "start": 297,
        "end": 309
      },
      "directive": null,
      "start": 297,
      "end": 310
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
            "name": "result1",
            "optional": false,
            "typeAnnotation": null,
            "start": 315,
            "end": 322
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 325,
              "end": 329
            },
            "consequent": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 333
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 336,
              "end": 337
            },
            "start": 325,
            "end": 337
          },
          "definite": false,
          "start": 315,
          "end": 337
        }
      ],
      "declare": false,
      "start": 311,
      "end": 338
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 469,
                  "end": 470
                },
                "typeArguments": null,
                "start": 469,
                "end": 470
              },
              "start": 467,
              "end": 470
            },
            "start": 460,
            "end": 470
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 473,
              "end": 477
            },
            "consequent": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 480,
              "end": 481
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 484,
              "end": 485
            },
            "start": 473,
            "end": 485
          },
          "definite": false,
          "start": 460,
          "end": 485
        }
      ],
      "declare": false,
      "start": 456,
      "end": 486
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
            "name": "result3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 500,
                  "end": 501
                },
                "typeArguments": null,
                "start": 500,
                "end": 501
              },
              "start": 498,
              "end": 501
            },
            "start": 491,
            "end": 501
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 504,
              "end": 508
            },
            "consequent": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 511,
              "end": 512
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 516
            },
            "start": 504,
            "end": 516
          },
          "definite": false,
          "start": 491,
          "end": 516
        }
      ],
      "declare": false,
      "start": 487,
      "end": 517
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
            "name": "result31",
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
                      "start": 532,
                      "end": 533
                    },
                    "typeArguments": null,
                    "start": 532,
                    "end": 533
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 536,
                      "end": 537
                    },
                    "typeArguments": null,
                    "start": 536,
                    "end": 537
                  }
                ],
                "start": 532,
                "end": 537
              },
              "start": 530,
              "end": 537
            },
            "start": 522,
            "end": 537
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 540,
              "end": 544
            },
            "consequent": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 547,
              "end": 548
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 551,
              "end": 552
            },
            "start": 540,
            "end": 552
          },
          "definite": false,
          "start": 522,
          "end": 552
        }
      ],
      "declare": false,
      "start": 518,
      "end": 553
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
            "name": "result4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
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
                          "start": 572,
                          "end": 573
                        },
                        "typeArguments": null,
                        "start": 572,
                        "end": 573
                      },
                      "start": 570,
                      "end": 573
                    },
                    "start": 569,
                    "end": 573
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 578,
                    "end": 584
                  },
                  "start": 575,
                  "end": 584
                },
                "start": 568,
                "end": 584
              },
              "start": 566,
              "end": 584
            },
            "start": 559,
            "end": 584
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 587,
              "end": 591
            },
            "consequent": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 595,
                  "end": 596
                }
              ],
              "returnType": null,
              "body": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 601,
                  "end": 602
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propertyX1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 603,
                  "end": 613
                },
                "optional": false,
                "computed": false,
                "start": 601,
                "end": 613
              },
              "id": null,
              "generator": false,
              "start": 594,
              "end": 613
            },
            "alternate": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 617,
                  "end": 618
                }
              ],
              "returnType": null,
              "body": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 623,
                  "end": 624
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propertyX2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 625,
                  "end": 635
                },
                "optional": false,
                "computed": false,
                "start": 623,
                "end": 635
              },
              "id": null,
              "generator": false,
              "start": 616,
              "end": 635
            },
            "start": 587,
            "end": 635
          },
          "definite": false,
          "start": 559,
          "end": 635
        }
      ],
      "declare": false,
      "start": 555,
      "end": 636
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
            "name": "result5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
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
                          "start": 654,
                          "end": 655
                        },
                        "typeArguments": null,
                        "start": 654,
                        "end": 655
                      },
                      "start": 652,
                      "end": 655
                    },
                    "start": 651,
                    "end": 655
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 660,
                    "end": 666
                  },
                  "start": 657,
                  "end": 666
                },
                "start": 650,
                "end": 666
              },
              "start": 648,
              "end": 666
            },
            "start": 641,
            "end": 666
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 669,
              "end": 673
            },
            "consequent": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 677,
                  "end": 678
                }
              ],
              "returnType": null,
              "body": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 683,
                  "end": 684
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propertyX1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 685,
                  "end": 695
                },
                "optional": false,
                "computed": false,
                "start": 683,
                "end": 695
              },
              "id": null,
              "generator": false,
              "start": 676,
              "end": 695
            },
            "alternate": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 699,
                  "end": 700
                }
              ],
              "returnType": null,
              "body": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 705,
                  "end": 706
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propertyX2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 707,
                  "end": 717
                },
                "optional": false,
                "computed": false,
                "start": 705,
                "end": 717
              },
              "id": null,
              "generator": false,
              "start": 698,
              "end": 717
            },
            "start": 669,
            "end": 717
          },
          "definite": false,
          "start": 641,
          "end": 717
        }
      ],
      "declare": false,
      "start": 637,
      "end": 718
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
            "name": "result6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
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
                          "start": 736,
                          "end": 737
                        },
                        "typeArguments": null,
                        "start": 736,
                        "end": 737
                      },
                      "start": 734,
                      "end": 737
                    },
                    "start": 733,
                    "end": 737
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 742,
                    "end": 749
                  },
                  "start": 739,
                  "end": 749
                },
                "start": 732,
                "end": 749
              },
              "start": 730,
              "end": 749
            },
            "start": 723,
            "end": 749
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 752,
              "end": 756
            },
            "consequent": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 760,
                  "end": 761
                }
              ],
              "returnType": null,
              "body": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 766,
                  "end": 767
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propertyX1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 768,
                  "end": 778
                },
                "optional": false,
                "computed": false,
                "start": 766,
                "end": 778
              },
              "id": null,
              "generator": false,
              "start": 759,
              "end": 778
            },
            "alternate": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 782,
                  "end": 783
                }
              ],
              "returnType": null,
              "body": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 788,
                  "end": 789
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propertyX2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 790,
                  "end": 800
                },
                "optional": false,
                "computed": false,
                "start": 788,
                "end": 800
              },
              "id": null,
              "generator": false,
              "start": 781,
              "end": 800
            },
            "start": 752,
            "end": 800
          },
          "definite": false,
          "start": 723,
          "end": 800
        }
      ],
      "declare": false,
      "start": 719,
      "end": 801
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
            "name": "result61",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
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
                          "start": 820,
                          "end": 821
                        },
                        "typeArguments": null,
                        "start": 820,
                        "end": 821
                      },
                      "start": 818,
                      "end": 821
                    },
                    "start": 817,
                    "end": 821
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 826,
                        "end": 832
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 834,
                        "end": 840
                      }
                    ],
                    "start": 826,
                    "end": 840
                  },
                  "start": 823,
                  "end": 840
                },
                "start": 816,
                "end": 840
              },
              "start": 814,
              "end": 840
            },
            "start": 806,
            "end": 840
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 843,
              "end": 847
            },
            "consequent": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 851,
                  "end": 852
                }
              ],
              "returnType": null,
              "body": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 857,
                  "end": 858
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propertyX1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 859,
                  "end": 869
                },
                "optional": false,
                "computed": false,
                "start": 857,
                "end": 869
              },
              "id": null,
              "generator": false,
              "start": 850,
              "end": 869
            },
            "alternate": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 873,
                  "end": 874
                }
              ],
              "returnType": null,
              "body": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 879,
                  "end": 880
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propertyX2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 881,
                  "end": 891
                },
                "optional": false,
                "computed": false,
                "start": 879,
                "end": 891
              },
              "id": null,
              "generator": false,
              "start": 872,
              "end": 891
            },
            "start": 843,
            "end": 891
          },
          "definite": false,
          "start": 806,
          "end": 891
        }
      ],
      "declare": false,
      "start": 802,
      "end": 892
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 76,
  "end": 892
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 76,
    "end": 81,
    "range": [
      76,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "propertyX",
    "start": 86,
    "end": 95,
    "range": [
      86,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 97,
    "end": 100,
    "range": [
      97,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "propertyX1",
    "start": 102,
    "end": 112,
    "range": [
      102,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 114,
    "end": 120,
    "range": [
      114,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "propertyX2",
    "start": 122,
    "end": 132,
    "range": [
      122,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 134,
    "end": 140,
    "range": [
      134,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 144,
    "end": 149,
    "range": [
      144,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 152,
    "end": 159,
    "range": [
      152,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "propertyA",
    "start": 164,
    "end": 173,
    "range": [
      164,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 175,
    "end": 181,
    "range": [
      175,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 185,
    "end": 190,
    "range": [
      185,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 193,
    "end": 200,
    "range": [
      193,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "propertyB",
    "start": 205,
    "end": 214,
    "range": [
      205,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 216,
    "end": 222,
    "range": [
      216,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 227,
    "end": 230,
    "range": [
      227,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 237,
    "end": 240,
    "range": [
      237,
      240
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 247,
    "end": 250,
    "range": [
      247,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 297,
    "end": 301,
    "range": [
      297,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 311,
    "end": 314,
    "range": [
      311,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "result1",
    "start": 315,
    "end": 322,
    "range": [
      315,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 325,
    "end": 329,
    "range": [
      325,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 456,
    "end": 459,
    "range": [
      456,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "result2",
    "start": 460,
    "end": 467,
    "range": [
      460,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 473,
    "end": 477,
    "range": [
      473,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 487,
    "end": 490,
    "range": [
      487,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "result3",
    "start": 491,
    "end": 498,
    "range": [
      491,
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
    "value": "B",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 504,
    "end": 508,
    "range": [
      504,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 518,
    "end": 521,
    "range": [
      518,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "result31",
    "start": 522,
    "end": 530,
    "range": [
      522,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 540,
    "end": 544,
    "range": [
      540,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 555,
    "end": 558,
    "range": [
      555,
      558
    ]
  },
  {
    "type": "Identifier",
    "value": "result4",
    "start": 559,
    "end": 566,
    "range": [
      559,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 575,
    "end": 577,
    "range": [
      575,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 578,
    "end": 584,
    "range": [
      578,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 587,
    "end": 591,
    "range": [
      587,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 598,
    "end": 600,
    "range": [
      598,
      600
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 601,
    "end": 602,
    "range": [
      601,
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
    "value": "propertyX1",
    "start": 603,
    "end": 613,
    "range": [
      603,
      613
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
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 620,
    "end": 622,
    "range": [
      620,
      622
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Identifier",
    "value": "propertyX2",
    "start": 625,
    "end": 635,
    "range": [
      625,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 637,
    "end": 640,
    "range": [
      637,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "result5",
    "start": 641,
    "end": 648,
    "range": [
      641,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 657,
    "end": 659,
    "range": [
      657,
      659
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 660,
    "end": 666,
    "range": [
      660,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 669,
    "end": 673,
    "range": [
      669,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 680,
    "end": 682,
    "range": [
      680,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "propertyX1",
    "start": 685,
    "end": 695,
    "range": [
      685,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 702,
    "end": 704,
    "range": [
      702,
      704
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Identifier",
    "value": "propertyX2",
    "start": 707,
    "end": 717,
    "range": [
      707,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 719,
    "end": 722,
    "range": [
      719,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "result6",
    "start": 723,
    "end": 730,
    "range": [
      723,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 739,
    "end": 741,
    "range": [
      739,
      741
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 742,
    "end": 749,
    "range": [
      742,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 752,
    "end": 756,
    "range": [
      752,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 763,
    "end": 765,
    "range": [
      763,
      765
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 766,
    "end": 767,
    "range": [
      766,
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
    "value": "propertyX1",
    "start": 768,
    "end": 778,
    "range": [
      768,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 785,
    "end": 787,
    "range": [
      785,
      787
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Identifier",
    "value": "propertyX2",
    "start": 790,
    "end": 800,
    "range": [
      790,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 802,
    "end": 805,
    "range": [
      802,
      805
    ]
  },
  {
    "type": "Identifier",
    "value": "result61",
    "start": 806,
    "end": 814,
    "range": [
      806,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 823,
    "end": 825,
    "range": [
      823,
      825
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 826,
    "end": 832,
    "range": [
      826,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 834,
    "end": 840,
    "range": [
      834,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 843,
    "end": 847,
    "range": [
      843,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
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
    "value": "m",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 854,
    "end": 856,
    "range": [
      854,
      856
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Identifier",
    "value": "propertyX1",
    "start": 859,
    "end": 869,
    "range": [
      859,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 873,
    "end": 874,
    "range": [
      873,
      874
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 876,
    "end": 878,
    "range": [
      876,
      878
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Identifier",
    "value": "propertyX2",
    "start": 881,
    "end": 891,
    "range": [
      881,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  }
]
```
