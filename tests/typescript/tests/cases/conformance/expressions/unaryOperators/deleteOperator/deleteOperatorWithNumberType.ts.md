__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "start": 39,
            "end": 53
          },
          "init": null,
          "definite": false,
          "start": 39,
          "end": 53
        }
      ],
      "declare": false,
      "start": 35,
      "end": 54
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
            "name": "NUMBER1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 68,
                  "end": 74
                },
                "start": 68,
                "end": 76
              },
              "start": 66,
              "end": 76
            },
            "start": 59,
            "end": 76
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 80,
                "end": 81
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 83,
                "end": 84
              }
            ],
            "start": 79,
            "end": 85
          },
          "definite": false,
          "start": 59,
          "end": 85
        }
      ],
      "declare": false,
      "start": 55,
      "end": 86
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 100
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 104,
          "end": 110
        },
        "start": 102,
        "end": 110
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 120,
              "end": 121
            },
            "start": 113,
            "end": 122
          }
        ],
        "start": 111,
        "end": 124
      },
      "expression": false,
      "start": 88,
      "end": 124
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
        "start": 132,
        "end": 133
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
              "start": 147,
              "end": 148
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 150,
                "end": 156
              },
              "start": 148,
              "end": 156
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 140,
            "end": 157
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 172
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 184,
                      "end": 185
                    },
                    "start": 177,
                    "end": 186
                  }
                ],
                "start": 175,
                "end": 188
              },
              "expression": false,
              "start": 172,
              "end": 188
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 162,
            "end": 188
          }
        ],
        "start": 134,
        "end": 190
      },
      "abstract": false,
      "declare": false,
      "start": 126,
      "end": 190
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 202
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
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
                        "type": "TSNumberKeyword",
                        "start": 223,
                        "end": 229
                      },
                      "start": 221,
                      "end": 229
                    },
                    "start": 220,
                    "end": 229
                  },
                  "init": null,
                  "definite": false,
                  "start": 220,
                  "end": 229
                }
              ],
              "declare": false,
              "start": 216,
              "end": 230
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 209,
            "end": 230
          }
        ],
        "start": 203,
        "end": 232
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 191,
      "end": 232
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
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 242
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 250
            },
            "typeArguments": null,
            "arguments": [],
            "start": 245,
            "end": 252
          },
          "definite": false,
          "start": 238,
          "end": 252
        }
      ],
      "declare": false,
      "start": 234,
      "end": 253
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
            "name": "ResultIsBoolean1",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 294
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 310
            },
            "prefix": true,
            "start": 297,
            "end": 310
          },
          "definite": false,
          "start": 278,
          "end": 310
        }
      ],
      "declare": false,
      "start": 274,
      "end": 311
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
            "name": "ResultIsBoolean2",
            "optional": false,
            "typeAnnotation": null,
            "start": 316,
            "end": 332
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER1",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 349
            },
            "prefix": true,
            "start": 335,
            "end": 349
          },
          "definite": false,
          "start": 316,
          "end": 349
        }
      ],
      "declare": false,
      "start": 312,
      "end": 350
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
            "name": "ResultIsBoolean3",
            "optional": false,
            "typeAnnotation": null,
            "start": 379,
            "end": 395
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 405,
              "end": 406
            },
            "prefix": true,
            "start": 398,
            "end": 406
          },
          "definite": false,
          "start": 379,
          "end": 406
        }
      ],
      "declare": false,
      "start": 375,
      "end": 407
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
            "name": "ResultIsBoolean4",
            "optional": false,
            "typeAnnotation": null,
            "start": 412,
            "end": 428
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 440,
                    "end": 441
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 443,
                    "end": 444
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 440,
                  "end": 444
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 446,
                    "end": 447
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 449,
                    "end": 450
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 446,
                  "end": 450
                }
              ],
              "start": 438,
              "end": 451
            },
            "prefix": true,
            "start": 431,
            "end": 451
          },
          "definite": false,
          "start": 412,
          "end": 451
        }
      ],
      "declare": false,
      "start": 408,
      "end": 452
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
            "name": "ResultIsBoolean5",
            "optional": false,
            "typeAnnotation": null,
            "start": 457,
            "end": 473
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 485,
                    "end": 486
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 488,
                    "end": 489
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 485,
                  "end": 489
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 491,
                    "end": 492
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
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
                            "type": "TSNumberKeyword",
                            "start": 498,
                            "end": 504
                          },
                          "start": 496,
                          "end": 504
                        },
                        "start": 495,
                        "end": 504
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 518,
                            "end": 519
                          },
                          "start": 511,
                          "end": 520
                        }
                      ],
                      "start": 509,
                      "end": 522
                    },
                    "id": null,
                    "generator": false,
                    "start": 494,
                    "end": 522
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 491,
                  "end": 522
                }
              ],
              "start": 483,
              "end": 524
            },
            "prefix": true,
            "start": 476,
            "end": 524
          },
          "definite": false,
          "start": 457,
          "end": 524
        }
      ],
      "declare": false,
      "start": 453,
      "end": 525
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
            "name": "ResultIsBoolean6",
            "optional": false,
            "typeAnnotation": null,
            "start": 558,
            "end": 574
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 584,
                "end": 588
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 589,
                "end": 590
              },
              "optional": false,
              "computed": false,
              "start": 584,
              "end": 590
            },
            "prefix": true,
            "start": 577,
            "end": 590
          },
          "definite": false,
          "start": 558,
          "end": 590
        }
      ],
      "declare": false,
      "start": 554,
      "end": 591
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
            "name": "ResultIsBoolean7",
            "optional": false,
            "typeAnnotation": null,
            "start": 596,
            "end": 612
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 622,
                "end": 623
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 624,
                "end": 625
              },
              "optional": false,
              "computed": false,
              "start": 622,
              "end": 625
            },
            "prefix": true,
            "start": 615,
            "end": 625
          },
          "definite": false,
          "start": 596,
          "end": 625
        }
      ],
      "declare": false,
      "start": 592,
      "end": 626
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
            "name": "ResultIsBoolean8",
            "optional": false,
            "typeAnnotation": null,
            "start": 631,
            "end": 647
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER1",
                "optional": false,
                "typeAnnotation": null,
                "start": 657,
                "end": 664
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 665,
                "end": 666
              },
              "optional": false,
              "computed": true,
              "start": 657,
              "end": 667
            },
            "prefix": true,
            "start": 650,
            "end": 667
          },
          "definite": false,
          "start": 631,
          "end": 667
        }
      ],
      "declare": false,
      "start": 627,
      "end": 668
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
            "name": "ResultIsBoolean9",
            "optional": false,
            "typeAnnotation": null,
            "start": 673,
            "end": 689
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 699,
                "end": 702
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 699,
              "end": 704
            },
            "prefix": true,
            "start": 692,
            "end": 704
          },
          "definite": false,
          "start": 673,
          "end": 704
        }
      ],
      "declare": false,
      "start": 669,
      "end": 705
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
            "name": "ResultIsBoolean10",
            "optional": false,
            "typeAnnotation": null,
            "start": 710,
            "end": 727
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 737,
                  "end": 738
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 739,
                  "end": 742
                },
                "optional": false,
                "computed": false,
                "start": 737,
                "end": 742
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 737,
              "end": 744
            },
            "prefix": true,
            "start": 730,
            "end": 744
          },
          "definite": false,
          "start": 710,
          "end": 744
        }
      ],
      "declare": false,
      "start": 706,
      "end": 745
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
            "name": "ResultIsBoolean11",
            "optional": false,
            "typeAnnotation": null,
            "start": 750,
            "end": 767
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 778,
                "end": 784
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 787,
                "end": 793
              },
              "start": 778,
              "end": 793
            },
            "prefix": true,
            "start": 770,
            "end": 794
          },
          "definite": false,
          "start": 750,
          "end": 794
        }
      ],
      "declare": false,
      "start": 746,
      "end": 795
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
            "name": "ResultIsBoolean12",
            "optional": false,
            "typeAnnotation": null,
            "start": 830,
            "end": 847
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "UnaryExpression",
              "operator": "delete",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 864,
                "end": 870
              },
              "prefix": true,
              "start": 857,
              "end": 870
            },
            "prefix": true,
            "start": 850,
            "end": 870
          },
          "definite": false,
          "start": 830,
          "end": 870
        }
      ],
      "declare": false,
      "start": 826,
      "end": 871
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
            "name": "ResultIsBoolean13",
            "optional": false,
            "typeAnnotation": null,
            "start": 876,
            "end": 893
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "UnaryExpression",
              "operator": "delete",
              "argument": {
                "type": "UnaryExpression",
                "operator": "delete",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 918,
                    "end": 924
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 927,
                    "end": 933
                  },
                  "start": 918,
                  "end": 933
                },
                "prefix": true,
                "start": 910,
                "end": 934
              },
              "prefix": true,
              "start": 903,
              "end": 934
            },
            "prefix": true,
            "start": 896,
            "end": 934
          },
          "definite": false,
          "start": 876,
          "end": 934
        }
      ],
      "declare": false,
      "start": 872,
      "end": 935
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 973,
          "end": 974
        },
        "prefix": true,
        "start": 966,
        "end": 974
      },
      "directive": null,
      "start": 966,
      "end": 975
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "NUMBER",
          "optional": false,
          "typeAnnotation": null,
          "start": 983,
          "end": 989
        },
        "prefix": true,
        "start": 976,
        "end": 989
      },
      "directive": null,
      "start": 976,
      "end": 990
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "NUMBER1",
          "optional": false,
          "typeAnnotation": null,
          "start": 998,
          "end": 1005
        },
        "prefix": true,
        "start": 991,
        "end": 1005
      },
      "directive": null,
      "start": 991,
      "end": 1006
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1014,
            "end": 1017
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1014,
          "end": 1019
        },
        "prefix": true,
        "start": 1007,
        "end": 1019
      },
      "directive": null,
      "start": 1007,
      "end": 1020
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1028,
            "end": 1032
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1033,
            "end": 1034
          },
          "optional": false,
          "computed": false,
          "start": 1028,
          "end": 1034
        },
        "prefix": true,
        "start": 1021,
        "end": 1034
      },
      "directive": null,
      "start": 1021,
      "end": 1035
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 1043,
            "end": 1044
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1045,
            "end": 1046
          },
          "optional": false,
          "computed": false,
          "start": 1043,
          "end": 1046
        },
        "prefix": true,
        "start": 1036,
        "end": 1046
      },
      "directive": null,
      "start": 1036,
      "end": 1047
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 1055,
                "end": 1059
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1060,
                "end": 1061
              },
              "optional": false,
              "computed": false,
              "start": 1055,
              "end": 1061
            },
            "prefix": true,
            "start": 1048,
            "end": 1061
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1063,
              "end": 1064
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1065,
              "end": 1066
            },
            "optional": false,
            "computed": false,
            "start": 1063,
            "end": 1066
          }
        ],
        "start": 1048,
        "end": 1066
      },
      "directive": null,
      "start": 1048,
      "end": 1067
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 1067
}
```
