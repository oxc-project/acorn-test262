__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 35,
    "end": 38,
    "range": [
      35,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 39,
    "end": 45,
    "range": [
      39,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 47,
    "end": 53,
    "range": [
      47,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 55,
    "end": 58,
    "range": [
      55,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "NUMBER1",
    "start": 59,
    "end": 66,
    "range": [
      59,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 68,
    "end": 74,
    "range": [
      68,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 88,
    "end": 96,
    "range": [
      88,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 97,
    "end": 100,
    "range": [
      97,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 104,
    "end": 110,
    "range": [
      104,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 113,
    "end": 119,
    "range": [
      113,
      119
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 126,
    "end": 131,
    "range": [
      126,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 140,
    "end": 146,
    "range": [
      140,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 150,
    "end": 156,
    "range": [
      150,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 162,
    "end": 168,
    "range": [
      162,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 169,
    "end": 172,
    "range": [
      169,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 177,
    "end": 183,
    "range": [
      177,
      183
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 191,
    "end": 200,
    "range": [
      191,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
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
    "type": "Keyword",
    "value": "export",
    "start": 209,
    "end": 215,
    "range": [
      209,
      215
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 216,
    "end": 219,
    "range": [
      216,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 223,
    "end": 229,
    "range": [
      223,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 234,
    "end": 237,
    "range": [
      234,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 238,
    "end": 242,
    "range": [
      238,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 245,
    "end": 248,
    "range": [
      245,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 274,
    "end": 277,
    "range": [
      274,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean1",
    "start": 278,
    "end": 294,
    "range": [
      278,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 297,
    "end": 303,
    "range": [
      297,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 304,
    "end": 310,
    "range": [
      304,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 312,
    "end": 315,
    "range": [
      312,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean2",
    "start": 316,
    "end": 332,
    "range": [
      316,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 335,
    "end": 341,
    "range": [
      335,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "NUMBER1",
    "start": 342,
    "end": 349,
    "range": [
      342,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 375,
    "end": 378,
    "range": [
      375,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean3",
    "start": 379,
    "end": 395,
    "range": [
      379,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 398,
    "end": 404,
    "range": [
      398,
      404
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 408,
    "end": 411,
    "range": [
      408,
      411
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean4",
    "start": 412,
    "end": 428,
    "range": [
      412,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 431,
    "end": 437,
    "range": [
      431,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 453,
    "end": 456,
    "range": [
      453,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean5",
    "start": 457,
    "end": 473,
    "range": [
      457,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 476,
    "end": 482,
    "range": [
      476,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 498,
    "end": 504,
    "range": [
      498,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 506,
    "end": 508,
    "range": [
      506,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 511,
    "end": 517,
    "range": [
      511,
      517
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 554,
    "end": 557,
    "range": [
      554,
      557
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean6",
    "start": 558,
    "end": 574,
    "range": [
      558,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 577,
    "end": 583,
    "range": [
      577,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 584,
    "end": 588,
    "range": [
      584,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 592,
    "end": 595,
    "range": [
      592,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean7",
    "start": 596,
    "end": 612,
    "range": [
      596,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 615,
    "end": 621,
    "range": [
      615,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 627,
    "end": 630,
    "range": [
      627,
      630
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean8",
    "start": 631,
    "end": 647,
    "range": [
      631,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 650,
    "end": 656,
    "range": [
      650,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "NUMBER1",
    "start": 657,
    "end": 664,
    "range": [
      657,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 669,
    "end": 672,
    "range": [
      669,
      672
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean9",
    "start": 673,
    "end": 689,
    "range": [
      673,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 692,
    "end": 698,
    "range": [
      692,
      698
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 699,
    "end": 702,
    "range": [
      699,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 706,
    "end": 709,
    "range": [
      706,
      709
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean10",
    "start": 710,
    "end": 727,
    "range": [
      710,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 730,
    "end": 736,
    "range": [
      730,
      736
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 739,
    "end": 742,
    "range": [
      739,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 746,
    "end": 749,
    "range": [
      746,
      749
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean11",
    "start": 750,
    "end": 767,
    "range": [
      750,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 770,
    "end": 776,
    "range": [
      770,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 778,
    "end": 784,
    "range": [
      778,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 787,
    "end": 793,
    "range": [
      787,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 826,
    "end": 829,
    "range": [
      826,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean12",
    "start": 830,
    "end": 847,
    "range": [
      830,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 850,
    "end": 856,
    "range": [
      850,
      856
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 857,
    "end": 863,
    "range": [
      857,
      863
    ]
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 864,
    "end": 870,
    "range": [
      864,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 872,
    "end": 875,
    "range": [
      872,
      875
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean13",
    "start": 876,
    "end": 893,
    "range": [
      876,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 896,
    "end": 902,
    "range": [
      896,
      902
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 903,
    "end": 909,
    "range": [
      903,
      909
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 910,
    "end": 916,
    "range": [
      910,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 918,
    "end": 924,
    "range": [
      918,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 927,
    "end": 933,
    "range": [
      927,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 966,
    "end": 972,
    "range": [
      966,
      972
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 976,
    "end": 982,
    "range": [
      976,
      982
    ]
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 983,
    "end": 989,
    "range": [
      983,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 991,
    "end": 997,
    "range": [
      991,
      997
    ]
  },
  {
    "type": "Identifier",
    "value": "NUMBER1",
    "start": 998,
    "end": 1005,
    "range": [
      998,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1007,
    "end": 1013,
    "range": [
      1007,
      1013
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1014,
    "end": 1017,
    "range": [
      1014,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1021,
    "end": 1027,
    "range": [
      1021,
      1027
    ]
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 1028,
    "end": 1032,
    "range": [
      1028,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1036,
    "end": 1042,
    "range": [
      1036,
      1042
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1048,
    "end": 1054,
    "range": [
      1048,
      1054
    ]
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 1055,
    "end": 1059,
    "range": [
      1055,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1061,
    "end": 1062,
    "range": [
      1061,
      1062
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  }
]
```
