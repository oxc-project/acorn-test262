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
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 49,
                "end": 56
              },
              "start": 47,
              "end": 56
            },
            "start": 40,
            "end": 56
          },
          "init": null,
          "definite": false,
          "start": 40,
          "end": 56
        }
      ],
      "declare": false,
      "start": 36,
      "end": 57
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 71
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 75,
          "end": 82
        },
        "start": 73,
        "end": 82
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 92,
              "end": 96
            },
            "start": 85,
            "end": 97
          }
        ],
        "start": 83,
        "end": 99
      },
      "expression": false,
      "start": 59,
      "end": 99
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
        "start": 107,
        "end": 108
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
              "start": 122,
              "end": 123
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 125,
                "end": 132
              },
              "start": 123,
              "end": 132
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
            "start": 115,
            "end": 133
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
              "start": 145,
              "end": 148
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
                      "value": false,
                      "raw": "false",
                      "start": 160,
                      "end": 165
                    },
                    "start": 153,
                    "end": 166
                  }
                ],
                "start": 151,
                "end": 168
              },
              "expression": false,
              "start": 148,
              "end": 168
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 138,
            "end": 168
          }
        ],
        "start": 109,
        "end": 170
      },
      "abstract": false,
      "declare": false,
      "start": 101,
      "end": 170
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 179
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
                        "type": "TSBooleanKeyword",
                        "start": 200,
                        "end": 207
                      },
                      "start": 198,
                      "end": 207
                    },
                    "start": 197,
                    "end": 207
                  },
                  "init": null,
                  "definite": false,
                  "start": 197,
                  "end": 207
                }
              ],
              "declare": false,
              "start": 193,
              "end": 208
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 186,
            "end": 208
          }
        ],
        "start": 180,
        "end": 210
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 171,
      "end": 210
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
            "start": 216,
            "end": 220
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 228
            },
            "typeArguments": null,
            "arguments": [],
            "start": 223,
            "end": 230
          },
          "definite": false,
          "start": 216,
          "end": 230
        }
      ],
      "declare": false,
      "start": 212,
      "end": 231
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
            "name": "ResultIsString1",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 272
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 289
            },
            "prefix": true,
            "start": 275,
            "end": 289
          },
          "definite": false,
          "start": 257,
          "end": 289
        }
      ],
      "declare": false,
      "start": 253,
      "end": 290
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
            "name": "ResultIsString2",
            "optional": false,
            "typeAnnotation": null,
            "start": 320,
            "end": 335
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 345,
              "end": 349
            },
            "prefix": true,
            "start": 338,
            "end": 349
          },
          "definite": false,
          "start": 320,
          "end": 349
        }
      ],
      "declare": false,
      "start": 316,
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
            "name": "ResultIsString3",
            "optional": false,
            "typeAnnotation": null,
            "start": 355,
            "end": 370
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
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
                    "start": 382,
                    "end": 383
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 385,
                    "end": 389
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 382,
                  "end": 389
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
                    "start": 391,
                    "end": 392
                  },
                  "value": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 394,
                    "end": 399
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 391,
                  "end": 399
                }
              ],
              "start": 380,
              "end": 401
            },
            "prefix": true,
            "start": 373,
            "end": 401
          },
          "definite": false,
          "start": 355,
          "end": 401
        }
      ],
      "declare": false,
      "start": 351,
      "end": 402
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
            "name": "ResultIsString4",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 451
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 461,
                "end": 465
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 466,
                "end": 467
              },
              "optional": false,
              "computed": false,
              "start": 461,
              "end": 467
            },
            "prefix": true,
            "start": 454,
            "end": 467
          },
          "definite": false,
          "start": 436,
          "end": 467
        }
      ],
      "declare": false,
      "start": 432,
      "end": 468
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
            "name": "ResultIsString5",
            "optional": false,
            "typeAnnotation": null,
            "start": 473,
            "end": 488
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 498,
                "end": 499
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 501
              },
              "optional": false,
              "computed": false,
              "start": 498,
              "end": 501
            },
            "prefix": true,
            "start": 491,
            "end": 501
          },
          "definite": false,
          "start": 473,
          "end": 501
        }
      ],
      "declare": false,
      "start": 469,
      "end": 502
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
            "name": "ResultIsString6",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 522
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 532,
                "end": 535
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 532,
              "end": 537
            },
            "prefix": true,
            "start": 525,
            "end": 537
          },
          "definite": false,
          "start": 507,
          "end": 537
        }
      ],
      "declare": false,
      "start": 503,
      "end": 538
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
            "name": "ResultIsString7",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 558
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
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
                  "start": 568,
                  "end": 569
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 570,
                  "end": 573
                },
                "optional": false,
                "computed": false,
                "start": 568,
                "end": 573
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 568,
              "end": 575
            },
            "prefix": true,
            "start": 561,
            "end": 575
          },
          "definite": false,
          "start": 543,
          "end": 575
        }
      ],
      "declare": false,
      "start": 539,
      "end": 576
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
            "name": "ResultIsString8",
            "optional": false,
            "typeAnnotation": null,
            "start": 611,
            "end": 626
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "typeAnnotation": null,
                "start": 643,
                "end": 650
              },
              "prefix": true,
              "start": 636,
              "end": 650
            },
            "prefix": true,
            "start": 629,
            "end": 650
          },
          "definite": false,
          "start": 611,
          "end": 650
        }
      ],
      "declare": false,
      "start": 607,
      "end": 651
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 689,
          "end": 693
        },
        "prefix": true,
        "start": 682,
        "end": 693
      },
      "directive": null,
      "start": 682,
      "end": 694
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "BOOLEAN",
          "optional": false,
          "typeAnnotation": null,
          "start": 702,
          "end": 709
        },
        "prefix": true,
        "start": 695,
        "end": 709
      },
      "directive": null,
      "start": 695,
      "end": 710
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 718,
            "end": 721
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 718,
          "end": 723
        },
        "prefix": true,
        "start": 711,
        "end": 723
      },
      "directive": null,
      "start": 711,
      "end": 724
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 732,
              "end": 736
            },
            "prefix": true,
            "start": 725,
            "end": 736
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 738,
            "end": 743
          }
        ],
        "start": 725,
        "end": 743
      },
      "directive": null,
      "start": 725,
      "end": 744
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 752,
            "end": 756
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 757,
            "end": 758
          },
          "optional": false,
          "computed": false,
          "start": 752,
          "end": 758
        },
        "prefix": true,
        "start": 745,
        "end": 758
      },
      "directive": null,
      "start": 745,
      "end": 759
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 767,
            "end": 768
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 769,
            "end": 770
          },
          "optional": false,
          "computed": false,
          "start": 767,
          "end": 770
        },
        "prefix": true,
        "start": 760,
        "end": 770
      },
      "directive": null,
      "start": 760,
      "end": 771
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 808,
                "end": 815
              },
              "start": 806,
              "end": 815
            },
            "start": 805,
            "end": 815
          },
          "init": null,
          "definite": false,
          "start": 805,
          "end": 815
        }
      ],
      "declare": false,
      "start": 801,
      "end": 816
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
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 824,
                  "end": 831
                },
                "start": 824,
                "end": 833
              },
              "start": 822,
              "end": 833
            },
            "start": 821,
            "end": 833
          },
          "init": null,
          "definite": false,
          "start": 821,
          "end": 833
        }
      ],
      "declare": false,
      "start": 817,
      "end": 834
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
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 848,
                    "end": 855
                  },
                  "start": 845,
                  "end": 855
                },
                "start": 842,
                "end": 855
              },
              "start": 840,
              "end": 855
            },
            "start": 839,
            "end": 855
          },
          "init": null,
          "definite": false,
          "start": 839,
          "end": 855
        }
      ],
      "declare": false,
      "start": 835,
      "end": 856
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 857,
        "end": 858
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": null,
            "start": 867,
            "end": 874
          },
          "prefix": true,
          "start": 860,
          "end": 874
        },
        "directive": null,
        "start": 860,
        "end": 875
      },
      "start": 857,
      "end": 875
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null,
        "start": 876,
        "end": 877
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 886,
            "end": 889
          },
          "prefix": true,
          "start": 879,
          "end": 889
        },
        "directive": null,
        "start": 879,
        "end": 890
      },
      "start": 876,
      "end": 890
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 895,
            "end": 896
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 901,
                  "end": 902
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 904,
                  "end": 908
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 901,
                "end": 908
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 910,
                  "end": 911
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 913,
                  "end": 918
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 910,
                "end": 918
              }
            ],
            "start": 899,
            "end": 919
          },
          "definite": false,
          "start": 895,
          "end": 919
        }
      ],
      "declare": false,
      "start": 891,
      "end": 920
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 921,
        "end": 922
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 931,
              "end": 932
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 933,
              "end": 934
            },
            "optional": false,
            "computed": false,
            "start": 931,
            "end": 934
          },
          "prefix": true,
          "start": 924,
          "end": 934
        },
        "directive": null,
        "start": 924,
        "end": 935
      },
      "start": 921,
      "end": 935
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 936,
        "end": 937
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "objA",
              "optional": false,
              "typeAnnotation": null,
              "start": 946,
              "end": 950
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 951,
              "end": 952
            },
            "optional": false,
            "computed": false,
            "start": 946,
            "end": 952
          },
          "prefix": true,
          "start": 939,
          "end": 952
        },
        "directive": null,
        "start": 939,
        "end": 953
      },
      "start": 936,
      "end": 953
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 954,
        "end": 955
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 964,
              "end": 965
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 966,
              "end": 969
            },
            "optional": false,
            "computed": false,
            "start": 964,
            "end": 969
          },
          "prefix": true,
          "start": 957,
          "end": 969
        },
        "directive": null,
        "start": 957,
        "end": 970
      },
      "start": 954,
      "end": 970
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 971,
        "end": 972
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 981,
              "end": 982
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 983,
              "end": 984
            },
            "optional": false,
            "computed": false,
            "start": 981,
            "end": 984
          },
          "prefix": true,
          "start": 974,
          "end": 984
        },
        "directive": null,
        "start": 974,
        "end": 985
      },
      "start": 971,
      "end": 985
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 36,
  "end": 985
}
```
