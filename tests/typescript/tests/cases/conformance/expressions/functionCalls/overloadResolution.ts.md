__ESTREE_TEST__:PASS:
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
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 14
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 30
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 21,
            "end": 31
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
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
            "start": 37,
            "end": 54
          }
        ],
        "start": 15,
        "end": 56
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 56
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeDerived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 75
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 92
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 108
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 99,
            "end": 109
          }
        ],
        "start": 93,
        "end": 111
      },
      "abstract": false,
      "declare": false,
      "start": 57,
      "end": 111
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeDerived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 130
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 147
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 163
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 154,
            "end": 164
          }
        ],
        "start": 148,
        "end": 166
      },
      "abstract": false,
      "declare": false,
      "start": 112,
      "end": 166
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeDerived3",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 185
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 218
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 209,
            "end": 219
          }
        ],
        "start": 203,
        "end": 221
      },
      "abstract": false,
      "declare": false,
      "start": 167,
      "end": 221
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 297,
        "end": 300
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
              "type": "TSStringKeyword",
              "start": 304,
              "end": 310
            },
            "start": 302,
            "end": 310
          },
          "start": 301,
          "end": 310
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 313,
          "end": 319
        },
        "start": 311,
        "end": 319
      },
      "body": null,
      "expression": false,
      "start": 288,
      "end": 320
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 330,
        "end": 333
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
              "type": "TSNumberKeyword",
              "start": 337,
              "end": 343
            },
            "start": 335,
            "end": 343
          },
          "start": 334,
          "end": 343
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 346,
          "end": 352
        },
        "start": 344,
        "end": 352
      },
      "body": null,
      "expression": false,
      "start": 321,
      "end": 353
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 363,
        "end": 366
      },
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
              "value": null,
              "raw": "null",
              "start": 378,
              "end": 382
            },
            "start": 371,
            "end": 383
          }
        ],
        "start": 369,
        "end": 385
      },
      "expression": false,
      "start": 354,
      "end": 385
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 392
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 395,
              "end": 398
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 399,
                "end": 408
              }
            ],
            "optional": false,
            "start": 395,
            "end": 409
          },
          "definite": false,
          "start": 391,
          "end": 409
        }
      ],
      "declare": false,
      "start": 387,
      "end": 410
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 418,
                "end": 424
              },
              "start": 416,
              "end": 424
            },
            "start": 415,
            "end": 424
          },
          "init": null,
          "definite": false,
          "start": 415,
          "end": 424
        }
      ],
      "declare": false,
      "start": 411,
      "end": 425
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null,
          "start": 460,
          "end": 463
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 464,
            "end": 466
          }
        ],
        "optional": false,
        "start": 460,
        "end": 467
      },
      "directive": null,
      "start": 460,
      "end": 468
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 603,
        "end": 606
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
              "type": "TSStringKeyword",
              "start": 610,
              "end": 616
            },
            "start": 608,
            "end": 616
          },
          "start": 607,
          "end": 616
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 621,
              "end": 627
            },
            "start": 619,
            "end": 627
          },
          "start": 618,
          "end": 627
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 630,
          "end": 636
        },
        "start": 628,
        "end": 636
      },
      "body": null,
      "expression": false,
      "start": 594,
      "end": 637
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 647,
        "end": 650
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 651,
              "end": 652
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 651,
            "end": 652
          }
        ],
        "start": 650,
        "end": 653
      },
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
              "start": 657,
              "end": 663
            },
            "start": 655,
            "end": 663
          },
          "start": 654,
          "end": 663
        },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 668,
                "end": 669
              },
              "typeArguments": null,
              "start": 668,
              "end": 669
            },
            "start": 666,
            "end": 669
          },
          "start": 665,
          "end": 669
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 672,
            "end": 673
          },
          "typeArguments": null,
          "start": 672,
          "end": 673
        },
        "start": 670,
        "end": 673
      },
      "body": null,
      "expression": false,
      "start": 638,
      "end": 674
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 684,
        "end": 687
      },
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
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 708
            },
            "start": 692,
            "end": 709
          }
        ],
        "start": 690,
        "end": 711
      },
      "expression": false,
      "start": 675,
      "end": 711
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 717,
            "end": 718
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 721,
              "end": 724
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 725,
                    "end": 729
                  },
                  "typeArguments": null,
                  "start": 725,
                  "end": 729
                }
              ],
              "start": 724,
              "end": 730
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 731,
                "end": 732
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 734,
                "end": 743
              }
            ],
            "optional": false,
            "start": 721,
            "end": 744
          },
          "definite": false,
          "start": 717,
          "end": 744
        }
      ],
      "declare": false,
      "start": 713,
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 753,
                  "end": 757
                },
                "typeArguments": null,
                "start": 753,
                "end": 757
              },
              "start": 751,
              "end": 757
            },
            "start": 750,
            "end": 757
          },
          "init": null,
          "definite": false,
          "start": 750,
          "end": 757
        }
      ],
      "declare": false,
      "start": 746,
      "end": 758
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 882,
            "end": 883
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 886,
              "end": 889
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 890,
                "end": 891
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 893,
                "end": 895
              }
            ],
            "optional": false,
            "start": 886,
            "end": 896
          },
          "definite": false,
          "start": 882,
          "end": 896
        }
      ],
      "declare": false,
      "start": 878,
      "end": 897
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1020,
          "end": 1023
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 1024,
                "end": 1028
              },
              "typeArguments": null,
              "start": 1024,
              "end": 1028
            }
          ],
          "start": 1023,
          "end": 1029
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1030,
            "end": 1032
          },
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1034,
            "end": 1035
          }
        ],
        "optional": false,
        "start": 1020,
        "end": 1036
      },
      "directive": null,
      "start": 1020,
      "end": 1037
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1172,
          "end": 1175
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1176,
            "end": 1178
          },
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1180,
            "end": 1181
          }
        ],
        "optional": false,
        "start": 1172,
        "end": 1182
      },
      "directive": null,
      "start": 1172,
      "end": 1183
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1272,
        "end": 1275
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1276,
              "end": 1277
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1276,
            "end": 1277
          }
        ],
        "start": 1275,
        "end": 1278
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1282,
                "end": 1283
              },
              "typeArguments": null,
              "start": 1282,
              "end": 1283
            },
            "start": 1280,
            "end": 1283
          },
          "start": 1279,
          "end": 1283
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1286,
          "end": 1292
        },
        "start": 1284,
        "end": 1292
      },
      "body": null,
      "expression": false,
      "start": 1263,
      "end": 1293
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1303,
        "end": 1306
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1307,
              "end": 1308
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1307,
            "end": 1308
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1310,
              "end": 1311
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1310,
            "end": 1311
          }
        ],
        "start": 1306,
        "end": 1312
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1316,
              "end": 1322
            },
            "start": 1314,
            "end": 1322
          },
          "start": 1313,
          "end": 1322
        },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1327,
                "end": 1328
              },
              "typeArguments": null,
              "start": 1327,
              "end": 1328
            },
            "start": 1325,
            "end": 1328
          },
          "start": 1324,
          "end": 1328
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1333,
                "end": 1334
              },
              "typeArguments": null,
              "start": 1333,
              "end": 1334
            },
            "start": 1331,
            "end": 1334
          },
          "start": 1330,
          "end": 1334
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 1337,
            "end": 1338
          },
          "typeArguments": null,
          "start": 1337,
          "end": 1338
        },
        "start": 1335,
        "end": 1338
      },
      "body": null,
      "expression": false,
      "start": 1294,
      "end": 1339
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1349,
        "end": 1352
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1353,
              "end": 1354
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1353,
            "end": 1354
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1356,
              "end": 1357
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1356,
            "end": 1357
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1359,
              "end": 1360
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1359,
            "end": 1360
          }
        ],
        "start": 1352,
        "end": 1361
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 1365,
                "end": 1366
              },
              "typeArguments": null,
              "start": 1365,
              "end": 1366
            },
            "start": 1363,
            "end": 1366
          },
          "start": 1362,
          "end": 1366
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1371,
                "end": 1372
              },
              "typeArguments": null,
              "start": 1371,
              "end": 1372
            },
            "start": 1369,
            "end": 1372
          },
          "start": 1368,
          "end": 1372
        },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1377,
                "end": 1378
              },
              "typeArguments": null,
              "start": 1377,
              "end": 1378
            },
            "start": 1375,
            "end": 1378
          },
          "start": 1374,
          "end": 1378
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1381,
          "end": 1387
        },
        "start": 1379,
        "end": 1387
      },
      "body": null,
      "expression": false,
      "start": 1340,
      "end": 1388
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1398,
        "end": 1401
      },
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
              "value": null,
              "raw": "null",
              "start": 1413,
              "end": 1417
            },
            "start": 1406,
            "end": 1418
          }
        ],
        "start": 1404,
        "end": 1420
      },
      "expression": false,
      "start": 1389,
      "end": 1420
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 1426,
            "end": 1427
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1430,
              "end": 1433
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1434,
                "end": 1435
              }
            ],
            "optional": false,
            "start": 1430,
            "end": 1436
          },
          "definite": false,
          "start": 1426,
          "end": 1436
        }
      ],
      "declare": false,
      "start": 1422,
      "end": 1437
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 1442,
            "end": 1443
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1446,
              "end": 1449
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1450,
                "end": 1452
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1454,
                "end": 1455
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1457,
                "end": 1459
              }
            ],
            "optional": false,
            "start": 1446,
            "end": 1460
          },
          "definite": false,
          "start": 1442,
          "end": 1460
        }
      ],
      "declare": false,
      "start": 1438,
      "end": 1461
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1466,
            "end": 1467
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1470,
              "end": 1473
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 1474,
                "end": 1475
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 1477,
                "end": 1478
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 1480,
                "end": 1481
              }
            ],
            "optional": false,
            "start": 1470,
            "end": 1482
          },
          "definite": false,
          "start": 1466,
          "end": 1482
        }
      ],
      "declare": false,
      "start": 1462,
      "end": 1483
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1491,
                "end": 1497
              },
              "start": 1489,
              "end": 1497
            },
            "start": 1488,
            "end": 1497
          },
          "init": null,
          "definite": false,
          "start": 1488,
          "end": 1497
        }
      ],
      "declare": false,
      "start": 1484,
      "end": 1498
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 1617,
            "end": 1618
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1621,
              "end": 1624
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1625,
                  "end": 1631
                }
              ],
              "start": 1624,
              "end": 1632
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 1633,
                "end": 1634
              }
            ],
            "optional": false,
            "start": 1621,
            "end": 1635
          },
          "definite": false,
          "start": 1617,
          "end": 1635
        }
      ],
      "declare": false,
      "start": 1613,
      "end": 1636
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 1641,
            "end": 1642
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1645,
              "end": 1648
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 1649,
                  "end": 1655
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1657,
                  "end": 1663
                }
              ],
              "start": 1648,
              "end": 1664
            },
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1665,
                "end": 1667
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1669,
                "end": 1671
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1673,
                "end": 1675
              }
            ],
            "optional": false,
            "start": 1645,
            "end": 1676
          },
          "definite": false,
          "start": 1641,
          "end": 1676
        }
      ],
      "declare": false,
      "start": 1637,
      "end": 1677
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1682,
            "end": 1683
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1686,
              "end": 1689
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1690,
                  "end": 1696
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1698,
                  "end": 1704
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1706,
                  "end": 1712
                }
              ],
              "start": 1689,
              "end": 1713
            },
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1714,
                "end": 1716
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1718,
                "end": 1720
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1722,
                "end": 1723
              }
            ],
            "optional": false,
            "start": 1686,
            "end": 1724
          },
          "definite": false,
          "start": 1682,
          "end": 1724
        }
      ],
      "declare": false,
      "start": 1678,
      "end": 1725
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1833,
          "end": 1836
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1837,
              "end": 1843
            },
            {
              "type": "TSNumberKeyword",
              "start": 1845,
              "end": 1851
            },
            {
              "type": "TSNumberKeyword",
              "start": 1853,
              "end": 1859
            },
            {
              "type": "TSNumberKeyword",
              "start": 1861,
              "end": 1867
            }
          ],
          "start": 1836,
          "end": 1868
        },
        "arguments": [],
        "optional": false,
        "start": 1833,
        "end": 1870
      },
      "directive": null,
      "start": 1833,
      "end": 1871
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1985,
        "end": 1988
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1989,
              "end": 1990
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1999,
              "end": 2005
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1989,
            "end": 2005
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2007,
              "end": 2008
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2017,
              "end": 2023
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2007,
            "end": 2023
          }
        ],
        "start": 1988,
        "end": 2024
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2028,
                "end": 2029
              },
              "typeArguments": null,
              "start": 2028,
              "end": 2029
            },
            "start": 2026,
            "end": 2029
          },
          "start": 2025,
          "end": 2029
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2034,
                "end": 2035
              },
              "typeArguments": null,
              "start": 2034,
              "end": 2035
            },
            "start": 2032,
            "end": 2035
          },
          "start": 2031,
          "end": 2035
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1976,
      "end": 2037
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2047,
        "end": 2050
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2051,
              "end": 2052
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2061,
              "end": 2067
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2051,
            "end": 2067
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2069,
              "end": 2070
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2079,
              "end": 2085
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2069,
            "end": 2085
          }
        ],
        "start": 2050,
        "end": 2086
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2090,
                "end": 2091
              },
              "typeArguments": null,
              "start": 2090,
              "end": 2091
            },
            "start": 2088,
            "end": 2091
          },
          "start": 2087,
          "end": 2091
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2096,
                "end": 2097
              },
              "typeArguments": null,
              "start": 2096,
              "end": 2097
            },
            "start": 2094,
            "end": 2097
          },
          "start": 2093,
          "end": 2097
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2038,
      "end": 2099
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2109,
        "end": 2112
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2115,
        "end": 2118
      },
      "expression": false,
      "start": 2100,
      "end": 2118
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2119,
          "end": 2122
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2123,
              "end": 2129
            },
            {
              "type": "TSNumberKeyword",
              "start": 2131,
              "end": 2137
            }
          ],
          "start": 2122,
          "end": 2138
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2139,
            "end": 2141
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2143,
            "end": 2144
          }
        ],
        "optional": false,
        "start": 2119,
        "end": 2145
      },
      "directive": null,
      "start": 2119,
      "end": 2146
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2147,
          "end": 2150
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2151,
              "end": 2157
            },
            {
              "type": "TSNumberKeyword",
              "start": 2159,
              "end": 2165
            }
          ],
          "start": 2150,
          "end": 2166
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2167,
            "end": 2168
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2170,
            "end": 2172
          }
        ],
        "optional": false,
        "start": 2147,
        "end": 2173
      },
      "directive": null,
      "start": 2147,
      "end": 2174
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2184,
          "end": 2187
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2188,
              "end": 2194
            },
            {
              "type": "TSStringKeyword",
              "start": 2196,
              "end": 2202
            }
          ],
          "start": 2187,
          "end": 2203
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2204,
            "end": 2206
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2208,
            "end": 2209
          }
        ],
        "optional": false,
        "start": 2184,
        "end": 2210
      },
      "directive": null,
      "start": 2184,
      "end": 2211
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2221,
          "end": 2224
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2225,
              "end": 2231
            },
            {
              "type": "TSStringKeyword",
              "start": 2233,
              "end": 2239
            }
          ],
          "start": 2224,
          "end": 2240
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2241,
            "end": 2242
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2244,
            "end": 2246
          }
        ],
        "optional": false,
        "start": 2221,
        "end": 2247
      },
      "directive": null,
      "start": 2221,
      "end": 2248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2363,
          "end": 2366
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2367,
            "end": 2369
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2371,
            "end": 2372
          }
        ],
        "optional": false,
        "start": 2363,
        "end": 2373
      },
      "directive": null,
      "start": 2363,
      "end": 2374
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2375,
          "end": 2378
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2379,
            "end": 2380
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2382,
            "end": 2384
          }
        ],
        "optional": false,
        "start": 2375,
        "end": 2385
      },
      "directive": null,
      "start": 2375,
      "end": 2386
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2387,
          "end": 2390
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2391,
            "end": 2392
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 2394,
            "end": 2403
          }
        ],
        "optional": false,
        "start": 2387,
        "end": 2404
      },
      "directive": null,
      "start": 2387,
      "end": 2405
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2406,
          "end": 2409
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2410,
            "end": 2412
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2414,
            "end": 2418
          }
        ],
        "optional": false,
        "start": 2406,
        "end": 2419
      },
      "directive": null,
      "start": 2406,
      "end": 2420
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2523,
          "end": 2526
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSBooleanKeyword",
              "start": 2527,
              "end": 2534
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 2536,
                "end": 2540
              },
              "typeArguments": null,
              "start": 2536,
              "end": 2540
            }
          ],
          "start": 2526,
          "end": 2541
        },
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2542,
            "end": 2546
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2548,
            "end": 2552
          }
        ],
        "optional": false,
        "start": 2523,
        "end": 2553
      },
      "directive": null,
      "start": 2523,
      "end": 2554
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2684,
          "end": 2687
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 2688,
            "end": 2692
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2694,
            "end": 2698
          }
        ],
        "optional": false,
        "start": 2684,
        "end": 2699
      },
      "directive": null,
      "start": 2684,
      "end": 2700
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2710,
          "end": 2713
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2714,
            "end": 2718
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 2720,
            "end": 2724
          }
        ],
        "optional": false,
        "start": 2710,
        "end": 2725
      },
      "directive": null,
      "start": 2710,
      "end": 2726
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2830,
        "end": 2833
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2841,
                      "end": 2847
                    },
                    "start": 2839,
                    "end": 2847
                  },
                  "start": 2838,
                  "end": 2847
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2852,
                  "end": 2856
                },
                "start": 2849,
                "end": 2856
              },
              "start": 2837,
              "end": 2856
            },
            "start": 2835,
            "end": 2856
          },
          "start": 2834,
          "end": 2856
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2859,
          "end": 2865
        },
        "start": 2857,
        "end": 2865
      },
      "body": null,
      "expression": false,
      "start": 2821,
      "end": 2866
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2876,
        "end": 2879
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2887,
                      "end": 2893
                    },
                    "start": 2885,
                    "end": 2893
                  },
                  "start": 2884,
                  "end": 2893
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2898,
                  "end": 2902
                },
                "start": 2895,
                "end": 2902
              },
              "start": 2883,
              "end": 2902
            },
            "start": 2881,
            "end": 2902
          },
          "start": 2880,
          "end": 2902
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2905,
          "end": 2911
        },
        "start": 2903,
        "end": 2911
      },
      "body": null,
      "expression": false,
      "start": 2867,
      "end": 2912
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2922,
        "end": 2925
      },
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
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 2937,
              "end": 2946
            },
            "start": 2930,
            "end": 2947
          }
        ],
        "start": 2928,
        "end": 2949
      },
      "expression": false,
      "start": 2913,
      "end": 2949
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 2954,
            "end": 2955
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2958,
              "end": 2961
            },
            "typeArguments": null,
            "arguments": [
              {
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
                    "start": 2963,
                    "end": 2964
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2969,
                      "end": 2970
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toFixed",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2971,
                      "end": 2978
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2969,
                    "end": 2978
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2969,
                  "end": 2980
                },
                "id": null,
                "generator": false,
                "start": 2962,
                "end": 2980
              }
            ],
            "optional": false,
            "start": 2958,
            "end": 2981
          },
          "definite": false,
          "start": 2954,
          "end": 2981
        }
      ],
      "declare": false,
      "start": 2950,
      "end": 2982
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 2987,
            "end": 2988
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2991,
              "end": 2994
            },
            "typeArguments": null,
            "arguments": [
              {
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
                    "start": 2996,
                    "end": 2997
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3002,
                      "end": 3003
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "substr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3004,
                      "end": 3010
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3002,
                    "end": 3010
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 3011,
                      "end": 3012
                    }
                  ],
                  "optional": false,
                  "start": 3002,
                  "end": 3013
                },
                "id": null,
                "generator": false,
                "start": 2995,
                "end": 3013
              }
            ],
            "optional": false,
            "start": 2991,
            "end": 3014
          },
          "definite": false,
          "start": 2987,
          "end": 3014
        }
      ],
      "declare": false,
      "start": 2983,
      "end": 3015
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3016
}
```
