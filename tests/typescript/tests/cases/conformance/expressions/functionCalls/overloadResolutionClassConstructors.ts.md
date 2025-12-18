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
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 294,
        "end": 297
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 315
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 319,
                      "end": 325
                    },
                    "start": 317,
                    "end": 325
                  },
                  "start": 316,
                  "end": 325
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 315,
              "end": 327
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 304,
            "end": 327
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 343
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 347,
                      "end": 353
                    },
                    "start": 345,
                    "end": 353
                  },
                  "start": 344,
                  "end": 353
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 343,
              "end": 355
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 332,
            "end": 355
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 360,
              "end": 371
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
                "body": [],
                "start": 374,
                "end": 377
              },
              "expression": false,
              "start": 371,
              "end": 377
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 360,
            "end": 377
          }
        ],
        "start": 298,
        "end": 379
      },
      "abstract": false,
      "declare": false,
      "start": 288,
      "end": 379
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null,
          "start": 385,
          "end": 388
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 389,
            "end": 398
          }
        ],
        "start": 381,
        "end": 399
      },
      "directive": null,
      "start": 381,
      "end": 400
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null,
          "start": 438,
          "end": 441
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 442,
            "end": 444
          }
        ],
        "start": 434,
        "end": 445
      },
      "directive": null,
      "start": 434,
      "end": 446
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 578,
        "end": 581
      },
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
              "start": 582,
              "end": 583
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 582,
            "end": 583
          }
        ],
        "start": 581,
        "end": 584
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 591,
              "end": 602
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 606,
                      "end": 612
                    },
                    "start": 604,
                    "end": 612
                  },
                  "start": 603,
                  "end": 612
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
                      "start": 617,
                      "end": 623
                    },
                    "start": 615,
                    "end": 623
                  },
                  "start": 614,
                  "end": 623
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 602,
              "end": 625
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 591,
            "end": 625
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 630,
              "end": 641
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 645,
                      "end": 651
                    },
                    "start": 643,
                    "end": 651
                  },
                  "start": 642,
                  "end": 651
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
                        "start": 656,
                        "end": 657
                      },
                      "typeArguments": null,
                      "start": 656,
                      "end": 657
                    },
                    "start": 654,
                    "end": 657
                  },
                  "start": 653,
                  "end": 657
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 641,
              "end": 659
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 630,
            "end": 659
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 664,
              "end": 675
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
                "body": [],
                "start": 678,
                "end": 681
              },
              "expression": false,
              "start": 675,
              "end": 681
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 664,
            "end": 681
          }
        ],
        "start": 585,
        "end": 683
      },
      "abstract": false,
      "declare": false,
      "start": 572,
      "end": 683
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
            "start": 689,
            "end": 690
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 697,
              "end": 700
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
                    "start": 701,
                    "end": 705
                  },
                  "typeArguments": null,
                  "start": 701,
                  "end": 705
                }
              ],
              "start": 700,
              "end": 706
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 707,
                "end": 708
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 710,
                "end": 719
              }
            ],
            "start": 693,
            "end": 720
          },
          "definite": false,
          "start": 689,
          "end": 720
        }
      ],
      "declare": false,
      "start": 685,
      "end": 721
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
            "start": 845,
            "end": 846
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 853,
              "end": 856
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 857,
                "end": 858
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 860,
                "end": 862
              }
            ],
            "start": 849,
            "end": 863
          },
          "definite": false,
          "start": 845,
          "end": 863
        }
      ],
      "declare": false,
      "start": 841,
      "end": 864
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 991,
          "end": 994
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
                "start": 995,
                "end": 999
              },
              "typeArguments": null,
              "start": 995,
              "end": 999
            }
          ],
          "start": 994,
          "end": 1000
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1001,
            "end": 1003
          },
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1005,
            "end": 1006
          }
        ],
        "start": 987,
        "end": 1007
      },
      "directive": null,
      "start": 987,
      "end": 1008
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1144,
          "end": 1147
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1148,
            "end": 1150
          },
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1152,
            "end": 1153
          }
        ],
        "start": 1140,
        "end": 1154
      },
      "directive": null,
      "start": 1140,
      "end": 1155
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1241,
        "end": 1244
      },
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
              "start": 1245,
              "end": 1246
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1245,
            "end": 1246
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1248,
              "end": 1249
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1248,
            "end": 1249
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1251,
              "end": 1252
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1251,
            "end": 1252
          }
        ],
        "start": 1244,
        "end": 1253
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1260,
              "end": 1271
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1275,
                        "end": 1276
                      },
                      "typeArguments": null,
                      "start": 1275,
                      "end": 1276
                    },
                    "start": 1273,
                    "end": 1276
                  },
                  "start": 1272,
                  "end": 1276
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1271,
              "end": 1278
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1260,
            "end": 1278
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1283,
              "end": 1294
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 1298,
                      "end": 1304
                    },
                    "start": 1296,
                    "end": 1304
                  },
                  "start": 1295,
                  "end": 1304
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
                        "start": 1309,
                        "end": 1310
                      },
                      "typeArguments": null,
                      "start": 1309,
                      "end": 1310
                    },
                    "start": 1307,
                    "end": 1310
                  },
                  "start": 1306,
                  "end": 1310
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
                        "start": 1315,
                        "end": 1316
                      },
                      "typeArguments": null,
                      "start": 1315,
                      "end": 1316
                    },
                    "start": 1313,
                    "end": 1316
                  },
                  "start": 1312,
                  "end": 1316
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1294,
              "end": 1318
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1283,
            "end": 1318
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1323,
              "end": 1334
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                        "start": 1338,
                        "end": 1339
                      },
                      "typeArguments": null,
                      "start": 1338,
                      "end": 1339
                    },
                    "start": 1336,
                    "end": 1339
                  },
                  "start": 1335,
                  "end": 1339
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
                        "start": 1344,
                        "end": 1345
                      },
                      "typeArguments": null,
                      "start": 1344,
                      "end": 1345
                    },
                    "start": 1342,
                    "end": 1345
                  },
                  "start": 1341,
                  "end": 1345
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
                        "start": 1350,
                        "end": 1351
                      },
                      "typeArguments": null,
                      "start": 1350,
                      "end": 1351
                    },
                    "start": 1348,
                    "end": 1351
                  },
                  "start": 1347,
                  "end": 1351
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1334,
              "end": 1353
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1323,
            "end": 1353
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1358,
              "end": 1369
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
                "body": [],
                "start": 1372,
                "end": 1375
              },
              "expression": false,
              "start": 1369,
              "end": 1375
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1358,
            "end": 1375
          }
        ],
        "start": 1254,
        "end": 1377
      },
      "abstract": false,
      "declare": false,
      "start": 1235,
      "end": 1377
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1383,
          "end": 1386
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 1387,
            "end": 1388
          }
        ],
        "start": 1379,
        "end": 1389
      },
      "directive": null,
      "start": 1379,
      "end": 1390
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1395,
          "end": 1398
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1399,
            "end": 1401
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 1403,
            "end": 1404
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1406,
            "end": 1408
          }
        ],
        "start": 1391,
        "end": 1409
      },
      "directive": null,
      "start": 1391,
      "end": 1410
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1415,
          "end": 1418
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 1419,
            "end": 1420
          },
          {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 1422,
            "end": 1423
          },
          {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 1425,
            "end": 1426
          }
        ],
        "start": 1411,
        "end": 1427
      },
      "directive": null,
      "start": 1411,
      "end": 1428
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1547,
          "end": 1550
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1551,
              "end": 1557
            }
          ],
          "start": 1550,
          "end": 1558
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1559,
            "end": 1560
          }
        ],
        "start": 1543,
        "end": 1561
      },
      "directive": null,
      "start": 1543,
      "end": 1562
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1576,
          "end": 1579
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 1580,
              "end": 1586
            },
            {
              "type": "TSStringKeyword",
              "start": 1588,
              "end": 1594
            }
          ],
          "start": 1579,
          "end": 1595
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1596,
            "end": 1598
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1600,
            "end": 1602
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1604,
            "end": 1606
          }
        ],
        "start": 1572,
        "end": 1607
      },
      "directive": null,
      "start": 1572,
      "end": 1608
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1623,
          "end": 1626
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1627,
              "end": 1633
            },
            {
              "type": "TSStringKeyword",
              "start": 1635,
              "end": 1641
            },
            {
              "type": "TSStringKeyword",
              "start": 1643,
              "end": 1649
            }
          ],
          "start": 1626,
          "end": 1650
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1651,
            "end": 1653
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1655,
            "end": 1657
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 1659,
            "end": 1660
          }
        ],
        "start": 1619,
        "end": 1661
      },
      "directive": null,
      "start": 1619,
      "end": 1662
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1774,
          "end": 1777
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1778,
              "end": 1784
            },
            {
              "type": "TSNumberKeyword",
              "start": 1786,
              "end": 1792
            },
            {
              "type": "TSNumberKeyword",
              "start": 1794,
              "end": 1800
            },
            {
              "type": "TSNumberKeyword",
              "start": 1802,
              "end": 1808
            }
          ],
          "start": 1777,
          "end": 1809
        },
        "arguments": [],
        "start": 1770,
        "end": 1811
      },
      "directive": null,
      "start": 1770,
      "end": 1812
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1923,
        "end": 1926
      },
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
              "start": 1927,
              "end": 1928
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1937,
              "end": 1943
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1927,
            "end": 1943
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1945,
              "end": 1946
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1955,
              "end": 1961
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1945,
            "end": 1961
          }
        ],
        "start": 1926,
        "end": 1962
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1969,
              "end": 1980
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1984,
                        "end": 1985
                      },
                      "typeArguments": null,
                      "start": 1984,
                      "end": 1985
                    },
                    "start": 1982,
                    "end": 1985
                  },
                  "start": 1981,
                  "end": 1985
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
                        "start": 1990,
                        "end": 1991
                      },
                      "typeArguments": null,
                      "start": 1990,
                      "end": 1991
                    },
                    "start": 1988,
                    "end": 1991
                  },
                  "start": 1987,
                  "end": 1991
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1980,
              "end": 1993
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1969,
            "end": 1993
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1998,
              "end": 2009
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
                "body": [],
                "start": 2012,
                "end": 2015
              },
              "expression": false,
              "start": 2009,
              "end": 2015
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1998,
            "end": 2015
          }
        ],
        "start": 1963,
        "end": 2017
      },
      "abstract": false,
      "declare": false,
      "start": 1917,
      "end": 2017
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2022,
          "end": 2025
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2026,
              "end": 2032
            },
            {
              "type": "TSNumberKeyword",
              "start": 2034,
              "end": 2040
            }
          ],
          "start": 2025,
          "end": 2041
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2042,
            "end": 2044
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2046,
            "end": 2047
          }
        ],
        "start": 2018,
        "end": 2048
      },
      "directive": null,
      "start": 2018,
      "end": 2049
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2054,
          "end": 2057
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2058,
              "end": 2064
            },
            {
              "type": "TSNumberKeyword",
              "start": 2066,
              "end": 2072
            }
          ],
          "start": 2057,
          "end": 2073
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2074,
            "end": 2075
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2077,
            "end": 2079
          }
        ],
        "start": 2050,
        "end": 2080
      },
      "directive": null,
      "start": 2050,
      "end": 2081
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2095,
          "end": 2098
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2099,
              "end": 2105
            },
            {
              "type": "TSStringKeyword",
              "start": 2107,
              "end": 2113
            }
          ],
          "start": 2098,
          "end": 2114
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2115,
            "end": 2117
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2119,
            "end": 2120
          }
        ],
        "start": 2091,
        "end": 2121
      },
      "directive": null,
      "start": 2091,
      "end": 2122
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2136,
          "end": 2139
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2140,
              "end": 2146
            },
            {
              "type": "TSStringKeyword",
              "start": 2148,
              "end": 2154
            }
          ],
          "start": 2139,
          "end": 2155
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2156,
            "end": 2157
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2159,
            "end": 2161
          }
        ],
        "start": 2132,
        "end": 2162
      },
      "directive": null,
      "start": 2132,
      "end": 2163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2290,
          "end": 2293
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2294,
            "end": 2296
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2298,
            "end": 2299
          }
        ],
        "start": 2286,
        "end": 2300
      },
      "directive": null,
      "start": 2286,
      "end": 2301
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2306,
          "end": 2309
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2310,
            "end": 2311
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2313,
            "end": 2315
          }
        ],
        "start": 2302,
        "end": 2316
      },
      "directive": null,
      "start": 2302,
      "end": 2317
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2331,
          "end": 2334
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2335,
            "end": 2336
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 2338,
            "end": 2347
          }
        ],
        "start": 2327,
        "end": 2348
      },
      "directive": null,
      "start": 2327,
      "end": 2349
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
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
            "value": null,
            "raw": "null",
            "start": 2371,
            "end": 2375
          }
        ],
        "start": 2359,
        "end": 2376
      },
      "directive": null,
      "start": 2359,
      "end": 2377
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2484,
          "end": 2487
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSBooleanKeyword",
              "start": 2488,
              "end": 2495
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 2497,
                "end": 2501
              },
              "typeArguments": null,
              "start": 2497,
              "end": 2501
            }
          ],
          "start": 2487,
          "end": 2502
        },
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2503,
            "end": 2507
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2509,
            "end": 2513
          }
        ],
        "start": 2480,
        "end": 2514
      },
      "directive": null,
      "start": 2480,
      "end": 2515
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2649,
          "end": 2652
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 2653,
            "end": 2657
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2659,
            "end": 2663
          }
        ],
        "start": 2645,
        "end": 2664
      },
      "directive": null,
      "start": 2645,
      "end": 2665
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2679,
          "end": 2682
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2683,
            "end": 2687
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 2689,
            "end": 2693
          }
        ],
        "start": 2675,
        "end": 2694
      },
      "directive": null,
      "start": 2675,
      "end": 2695
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2796,
        "end": 2799
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2806,
              "end": 2817
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                              "start": 2825,
                              "end": 2831
                            },
                            "start": 2823,
                            "end": 2831
                          },
                          "start": 2822,
                          "end": 2831
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 2836,
                          "end": 2840
                        },
                        "start": 2833,
                        "end": 2840
                      },
                      "start": 2821,
                      "end": 2840
                    },
                    "start": 2819,
                    "end": 2840
                  },
                  "start": 2818,
                  "end": 2840
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2817,
              "end": 2842
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2806,
            "end": 2842
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2847,
              "end": 2858
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                              "start": 2866,
                              "end": 2872
                            },
                            "start": 2864,
                            "end": 2872
                          },
                          "start": 2863,
                          "end": 2872
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 2877,
                          "end": 2881
                        },
                        "start": 2874,
                        "end": 2881
                      },
                      "start": 2862,
                      "end": 2881
                    },
                    "start": 2860,
                    "end": 2881
                  },
                  "start": 2859,
                  "end": 2881
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2858,
              "end": 2883
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2847,
            "end": 2883
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2888,
              "end": 2899
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2911,
                      "end": 2920
                    },
                    "start": 2904,
                    "end": 2921
                  }
                ],
                "start": 2902,
                "end": 2923
              },
              "expression": false,
              "start": 2899,
              "end": 2923
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2888,
            "end": 2923
          }
        ],
        "start": 2800,
        "end": 2925
      },
      "abstract": false,
      "declare": false,
      "start": 2790,
      "end": 2925
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2930,
          "end": 2933
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
                "start": 2935,
                "end": 2936
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
                  "start": 2941,
                  "end": 2942
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2943,
                  "end": 2950
                },
                "optional": false,
                "computed": false,
                "start": 2941,
                "end": 2950
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2941,
              "end": 2952
            },
            "id": null,
            "generator": false,
            "start": 2934,
            "end": 2952
          }
        ],
        "start": 2926,
        "end": 2953
      },
      "directive": null,
      "start": 2926,
      "end": 2954
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2959,
          "end": 2962
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
                "start": 2964,
                "end": 2965
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
                  "start": 2970,
                  "end": 2971
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "substr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2972,
                  "end": 2978
                },
                "optional": false,
                "computed": false,
                "start": 2970,
                "end": 2978
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2979,
                  "end": 2980
                }
              ],
              "optional": false,
              "start": 2970,
              "end": 2981
            },
            "id": null,
            "generator": false,
            "start": 2963,
            "end": 2981
          }
        ],
        "start": 2955,
        "end": 2982
      },
      "directive": null,
      "start": 2955,
      "end": 2983
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2988,
          "end": 2991
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
                "start": 2993,
                "end": 2994
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
                "start": 2999,
                "end": 3000
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "blah",
                "optional": false,
                "typeAnnotation": null,
                "start": 3001,
                "end": 3005
              },
              "optional": false,
              "computed": false,
              "start": 2999,
              "end": 3005
            },
            "id": null,
            "generator": false,
            "start": 2992,
            "end": 3005
          }
        ],
        "start": 2984,
        "end": 3006
      },
      "directive": null,
      "start": 2984,
      "end": 3007
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3018
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeBase",
    "start": 6,
    "end": 14,
    "range": [
      6,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 21,
    "end": 28,
    "range": [
      21,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 37,
    "end": 43,
    "range": [
      37,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 44,
    "end": 45,
    "range": [
      44,
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
    "value": "string",
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
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 57,
    "end": 62,
    "range": [
      57,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeDerived1",
    "start": 63,
    "end": 75,
    "range": [
      63,
      75
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 76,
    "end": 83,
    "range": [
      76,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeBase",
    "start": 84,
    "end": 92,
    "range": [
      84,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 99,
    "end": 106,
    "range": [
      99,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 112,
    "end": 117,
    "range": [
      112,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeDerived2",
    "start": 118,
    "end": 130,
    "range": [
      118,
      130
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 131,
    "end": 138,
    "range": [
      131,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeBase",
    "start": 139,
    "end": 147,
    "range": [
      139,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 154,
    "end": 161,
    "range": [
      154,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 167,
    "end": 172,
    "range": [
      167,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeDerived3",
    "start": 173,
    "end": 185,
    "range": [
      173,
      185
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 186,
    "end": 193,
    "range": [
      186,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeBase",
    "start": 194,
    "end": 202,
    "range": [
      194,
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
    "value": "private",
    "start": 209,
    "end": 216,
    "range": [
      209,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 288,
    "end": 293,
    "range": [
      288,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 294,
    "end": 297,
    "range": [
      294,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 304,
    "end": 315,
    "range": [
      304,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 319,
    "end": 325,
    "range": [
      319,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 332,
    "end": 343,
    "range": [
      332,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 347,
    "end": 353,
    "range": [
      347,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 360,
    "end": 371,
    "range": [
      360,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 381,
    "end": 384,
    "range": [
      381,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 385,
    "end": 388,
    "range": [
      385,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 389,
    "end": 398,
    "range": [
      389,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 434,
    "end": 437,
    "range": [
      434,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 438,
    "end": 441,
    "range": [
      438,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 572,
    "end": 577,
    "range": [
      572,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 578,
    "end": 581,
    "range": [
      578,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 591,
    "end": 602,
    "range": [
      591,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 606,
    "end": 612,
    "range": [
      606,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 617,
    "end": 623,
    "range": [
      617,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 630,
    "end": 641,
    "range": [
      630,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 645,
    "end": 651,
    "range": [
      645,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 664,
    "end": 675,
    "range": [
      664,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 685,
    "end": 688,
    "range": [
      685,
      688
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 693,
    "end": 696,
    "range": [
      693,
      696
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 697,
    "end": 700,
    "range": [
      697,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 701,
    "end": 705,
    "range": [
      701,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 710,
    "end": 719,
    "range": [
      710,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 841,
    "end": 844,
    "range": [
      841,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 849,
    "end": 852,
    "range": [
      849,
      852
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 853,
    "end": 856,
    "range": [
      853,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 860,
    "end": 862,
    "range": [
      860,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 987,
    "end": 990,
    "range": [
      987,
      990
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 991,
    "end": 994,
    "range": [
      991,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 995,
    "end": 999,
    "range": [
      995,
      999
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1001,
    "end": 1003,
    "range": [
      1001,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1140,
    "end": 1143,
    "range": [
      1140,
      1143
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 1144,
    "end": 1147,
    "range": [
      1144,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1148,
    "end": 1150,
    "range": [
      1148,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1235,
    "end": 1240,
    "range": [
      1235,
      1240
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1241,
    "end": 1244,
    "range": [
      1241,
      1244
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1245,
    "end": 1246,
    "range": [
      1245,
      1246
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1260,
    "end": 1271,
    "range": [
      1260,
      1271
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1275,
    "end": 1276,
    "range": [
      1275,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1283,
    "end": 1294,
    "range": [
      1283,
      1294
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1294,
    "end": 1295,
    "range": [
      1294,
      1295
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1298,
    "end": 1304,
    "range": [
      1298,
      1304
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1304,
    "end": 1305,
    "range": [
      1304,
      1305
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1315,
    "end": 1316,
    "range": [
      1315,
      1316
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1316,
    "end": 1317,
    "range": [
      1316,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1323,
    "end": 1334,
    "range": [
      1323,
      1334
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1335,
    "end": 1336,
    "range": [
      1335,
      1336
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1336,
    "end": 1337,
    "range": [
      1336,
      1337
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1341,
    "end": 1342,
    "range": [
      1341,
      1342
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1342,
    "end": 1343,
    "range": [
      1342,
      1343
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1350,
    "end": 1351,
    "range": [
      1350,
      1351
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1358,
    "end": 1369,
    "range": [
      1358,
      1369
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1369,
    "end": 1370,
    "range": [
      1369,
      1370
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1372,
    "end": 1373,
    "range": [
      1372,
      1373
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1376,
    "end": 1377,
    "range": [
      1376,
      1377
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1379,
    "end": 1382,
    "range": [
      1379,
      1382
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1383,
    "end": 1386,
    "range": [
      1383,
      1386
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1386,
    "end": 1387,
    "range": [
      1386,
      1387
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1387,
    "end": 1388,
    "range": [
      1387,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1391,
    "end": 1394,
    "range": [
      1391,
      1394
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1395,
    "end": 1398,
    "range": [
      1395,
      1398
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1399,
    "end": 1401,
    "range": [
      1399,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1404,
    "end": 1405,
    "range": [
      1404,
      1405
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1406,
    "end": 1408,
    "range": [
      1406,
      1408
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1411,
    "end": 1414,
    "range": [
      1411,
      1414
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1415,
    "end": 1418,
    "range": [
      1415,
      1418
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1418,
    "end": 1419,
    "range": [
      1418,
      1419
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1419,
    "end": 1420,
    "range": [
      1419,
      1420
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1420,
    "end": 1421,
    "range": [
      1420,
      1421
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1422,
    "end": 1423,
    "range": [
      1422,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1425,
    "end": 1426,
    "range": [
      1425,
      1426
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1426,
    "end": 1427,
    "range": [
      1426,
      1427
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1543,
    "end": 1546,
    "range": [
      1543,
      1546
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1547,
    "end": 1550,
    "range": [
      1547,
      1550
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1551,
    "end": 1557,
    "range": [
      1551,
      1557
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1557,
    "end": 1558,
    "range": [
      1557,
      1558
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1558,
    "end": 1559,
    "range": [
      1558,
      1559
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1559,
    "end": 1560,
    "range": [
      1559,
      1560
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1560,
    "end": 1561,
    "range": [
      1560,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1572,
    "end": 1575,
    "range": [
      1572,
      1575
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1576,
    "end": 1579,
    "range": [
      1576,
      1579
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1579,
    "end": 1580,
    "range": [
      1579,
      1580
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1580,
    "end": 1586,
    "range": [
      1580,
      1586
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1588,
    "end": 1594,
    "range": [
      1588,
      1594
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1594,
    "end": 1595,
    "range": [
      1594,
      1595
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1596,
    "end": 1598,
    "range": [
      1596,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1600,
    "end": 1602,
    "range": [
      1600,
      1602
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1602,
    "end": 1603,
    "range": [
      1602,
      1603
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1604,
    "end": 1606,
    "range": [
      1604,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1619,
    "end": 1622,
    "range": [
      1619,
      1622
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1623,
    "end": 1626,
    "range": [
      1623,
      1626
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1627,
    "end": 1633,
    "range": [
      1627,
      1633
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1633,
    "end": 1634,
    "range": [
      1633,
      1634
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1635,
    "end": 1641,
    "range": [
      1635,
      1641
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1641,
    "end": 1642,
    "range": [
      1641,
      1642
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1643,
    "end": 1649,
    "range": [
      1643,
      1649
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1651,
    "end": 1653,
    "range": [
      1651,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1653,
    "end": 1654,
    "range": [
      1653,
      1654
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1655,
    "end": 1657,
    "range": [
      1655,
      1657
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1657,
    "end": 1658,
    "range": [
      1657,
      1658
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1659,
    "end": 1660,
    "range": [
      1659,
      1660
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1660,
    "end": 1661,
    "range": [
      1660,
      1661
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1661,
    "end": 1662,
    "range": [
      1661,
      1662
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1770,
    "end": 1773,
    "range": [
      1770,
      1773
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1774,
    "end": 1777,
    "range": [
      1774,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1778,
    "end": 1784,
    "range": [
      1778,
      1784
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1784,
    "end": 1785,
    "range": [
      1784,
      1785
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1786,
    "end": 1792,
    "range": [
      1786,
      1792
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1792,
    "end": 1793,
    "range": [
      1792,
      1793
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1794,
    "end": 1800,
    "range": [
      1794,
      1800
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1802,
    "end": 1808,
    "range": [
      1802,
      1808
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1917,
    "end": 1922,
    "range": [
      1917,
      1922
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 1923,
    "end": 1926,
    "range": [
      1923,
      1926
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1926,
    "end": 1927,
    "range": [
      1926,
      1927
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1927,
    "end": 1928,
    "range": [
      1927,
      1928
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1929,
    "end": 1936,
    "range": [
      1929,
      1936
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1937,
    "end": 1943,
    "range": [
      1937,
      1943
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1943,
    "end": 1944,
    "range": [
      1943,
      1944
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1947,
    "end": 1954,
    "range": [
      1947,
      1954
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1955,
    "end": 1961,
    "range": [
      1955,
      1961
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1961,
    "end": 1962,
    "range": [
      1961,
      1962
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1963,
    "end": 1964,
    "range": [
      1963,
      1964
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1969,
    "end": 1980,
    "range": [
      1969,
      1980
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1980,
    "end": 1981,
    "range": [
      1980,
      1981
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1981,
    "end": 1982,
    "range": [
      1981,
      1982
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1982,
    "end": 1983,
    "range": [
      1982,
      1983
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1984,
    "end": 1985,
    "range": [
      1984,
      1985
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1985,
    "end": 1986,
    "range": [
      1985,
      1986
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1987,
    "end": 1988,
    "range": [
      1987,
      1988
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1988,
    "end": 1989,
    "range": [
      1988,
      1989
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1990,
    "end": 1991,
    "range": [
      1990,
      1991
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1991,
    "end": 1992,
    "range": [
      1991,
      1992
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1992,
    "end": 1993,
    "range": [
      1992,
      1993
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1998,
    "end": 2009,
    "range": [
      1998,
      2009
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2010,
    "end": 2011,
    "range": [
      2010,
      2011
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2012,
    "end": 2013,
    "range": [
      2012,
      2013
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2014,
    "end": 2015,
    "range": [
      2014,
      2015
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2016,
    "end": 2017,
    "range": [
      2016,
      2017
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2018,
    "end": 2021,
    "range": [
      2018,
      2021
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2022,
    "end": 2025,
    "range": [
      2022,
      2025
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2025,
    "end": 2026,
    "range": [
      2025,
      2026
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2026,
    "end": 2032,
    "range": [
      2026,
      2032
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2032,
    "end": 2033,
    "range": [
      2032,
      2033
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2034,
    "end": 2040,
    "range": [
      2034,
      2040
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2040,
    "end": 2041,
    "range": [
      2040,
      2041
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2041,
    "end": 2042,
    "range": [
      2041,
      2042
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 2042,
    "end": 2044,
    "range": [
      2042,
      2044
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2044,
    "end": 2045,
    "range": [
      2044,
      2045
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2046,
    "end": 2047,
    "range": [
      2046,
      2047
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2047,
    "end": 2048,
    "range": [
      2047,
      2048
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2048,
    "end": 2049,
    "range": [
      2048,
      2049
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2050,
    "end": 2053,
    "range": [
      2050,
      2053
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2054,
    "end": 2057,
    "range": [
      2054,
      2057
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2057,
    "end": 2058,
    "range": [
      2057,
      2058
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2058,
    "end": 2064,
    "range": [
      2058,
      2064
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2064,
    "end": 2065,
    "range": [
      2064,
      2065
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2066,
    "end": 2072,
    "range": [
      2066,
      2072
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2072,
    "end": 2073,
    "range": [
      2072,
      2073
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2073,
    "end": 2074,
    "range": [
      2073,
      2074
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2074,
    "end": 2075,
    "range": [
      2074,
      2075
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2075,
    "end": 2076,
    "range": [
      2075,
      2076
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 2077,
    "end": 2079,
    "range": [
      2077,
      2079
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2079,
    "end": 2080,
    "range": [
      2079,
      2080
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2080,
    "end": 2081,
    "range": [
      2080,
      2081
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2091,
    "end": 2094,
    "range": [
      2091,
      2094
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2095,
    "end": 2098,
    "range": [
      2095,
      2098
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2098,
    "end": 2099,
    "range": [
      2098,
      2099
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2099,
    "end": 2105,
    "range": [
      2099,
      2105
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2105,
    "end": 2106,
    "range": [
      2105,
      2106
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2107,
    "end": 2113,
    "range": [
      2107,
      2113
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2113,
    "end": 2114,
    "range": [
      2113,
      2114
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2114,
    "end": 2115,
    "range": [
      2114,
      2115
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 2115,
    "end": 2117,
    "range": [
      2115,
      2117
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2117,
    "end": 2118,
    "range": [
      2117,
      2118
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2119,
    "end": 2120,
    "range": [
      2119,
      2120
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2120,
    "end": 2121,
    "range": [
      2120,
      2121
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2121,
    "end": 2122,
    "range": [
      2121,
      2122
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2132,
    "end": 2135,
    "range": [
      2132,
      2135
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2136,
    "end": 2139,
    "range": [
      2136,
      2139
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2139,
    "end": 2140,
    "range": [
      2139,
      2140
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2140,
    "end": 2146,
    "range": [
      2140,
      2146
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2146,
    "end": 2147,
    "range": [
      2146,
      2147
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2148,
    "end": 2154,
    "range": [
      2148,
      2154
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2154,
    "end": 2155,
    "range": [
      2154,
      2155
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2155,
    "end": 2156,
    "range": [
      2155,
      2156
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2156,
    "end": 2157,
    "range": [
      2156,
      2157
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2157,
    "end": 2158,
    "range": [
      2157,
      2158
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 2159,
    "end": 2161,
    "range": [
      2159,
      2161
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2161,
    "end": 2162,
    "range": [
      2161,
      2162
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2162,
    "end": 2163,
    "range": [
      2162,
      2163
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2286,
    "end": 2289,
    "range": [
      2286,
      2289
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2290,
    "end": 2293,
    "range": [
      2290,
      2293
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2293,
    "end": 2294,
    "range": [
      2293,
      2294
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 2294,
    "end": 2296,
    "range": [
      2294,
      2296
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2296,
    "end": 2297,
    "range": [
      2296,
      2297
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2298,
    "end": 2299,
    "range": [
      2298,
      2299
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2299,
    "end": 2300,
    "range": [
      2299,
      2300
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2300,
    "end": 2301,
    "range": [
      2300,
      2301
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2302,
    "end": 2305,
    "range": [
      2302,
      2305
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2306,
    "end": 2309,
    "range": [
      2306,
      2309
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2309,
    "end": 2310,
    "range": [
      2309,
      2310
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2310,
    "end": 2311,
    "range": [
      2310,
      2311
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2311,
    "end": 2312,
    "range": [
      2311,
      2312
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 2313,
    "end": 2315,
    "range": [
      2313,
      2315
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2315,
    "end": 2316,
    "range": [
      2315,
      2316
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2316,
    "end": 2317,
    "range": [
      2316,
      2317
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2327,
    "end": 2330,
    "range": [
      2327,
      2330
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2331,
    "end": 2334,
    "range": [
      2331,
      2334
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2334,
    "end": 2335,
    "range": [
      2334,
      2335
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2335,
    "end": 2336,
    "range": [
      2335,
      2336
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2336,
    "end": 2337,
    "range": [
      2336,
      2337
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2338,
    "end": 2347,
    "range": [
      2338,
      2347
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2347,
    "end": 2348,
    "range": [
      2347,
      2348
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2348,
    "end": 2349,
    "range": [
      2348,
      2349
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2359,
    "end": 2362,
    "range": [
      2359,
      2362
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2363,
    "end": 2366,
    "range": [
      2363,
      2366
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2366,
    "end": 2367,
    "range": [
      2366,
      2367
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 2367,
    "end": 2369,
    "range": [
      2367,
      2369
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2369,
    "end": 2370,
    "range": [
      2369,
      2370
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2371,
    "end": 2375,
    "range": [
      2371,
      2375
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2375,
    "end": 2376,
    "range": [
      2375,
      2376
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2376,
    "end": 2377,
    "range": [
      2376,
      2377
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2480,
    "end": 2483,
    "range": [
      2480,
      2483
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2484,
    "end": 2487,
    "range": [
      2484,
      2487
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2487,
    "end": 2488,
    "range": [
      2487,
      2488
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2488,
    "end": 2495,
    "range": [
      2488,
      2495
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2495,
    "end": 2496,
    "range": [
      2495,
      2496
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2497,
    "end": 2501,
    "range": [
      2497,
      2501
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2501,
    "end": 2502,
    "range": [
      2501,
      2502
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2502,
    "end": 2503,
    "range": [
      2502,
      2503
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2503,
    "end": 2507,
    "range": [
      2503,
      2507
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2507,
    "end": 2508,
    "range": [
      2507,
      2508
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2509,
    "end": 2513,
    "range": [
      2509,
      2513
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2513,
    "end": 2514,
    "range": [
      2513,
      2514
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2514,
    "end": 2515,
    "range": [
      2514,
      2515
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2645,
    "end": 2648,
    "range": [
      2645,
      2648
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2649,
    "end": 2652,
    "range": [
      2649,
      2652
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2652,
    "end": 2653,
    "range": [
      2652,
      2653
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2653,
    "end": 2657,
    "range": [
      2653,
      2657
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2657,
    "end": 2658,
    "range": [
      2657,
      2658
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2659,
    "end": 2663,
    "range": [
      2659,
      2663
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2663,
    "end": 2664,
    "range": [
      2663,
      2664
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2664,
    "end": 2665,
    "range": [
      2664,
      2665
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2675,
    "end": 2678,
    "range": [
      2675,
      2678
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2679,
    "end": 2682,
    "range": [
      2679,
      2682
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2682,
    "end": 2683,
    "range": [
      2682,
      2683
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2683,
    "end": 2687,
    "range": [
      2683,
      2687
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2687,
    "end": 2688,
    "range": [
      2687,
      2688
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2689,
    "end": 2693,
    "range": [
      2689,
      2693
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2693,
    "end": 2694,
    "range": [
      2693,
      2694
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2694,
    "end": 2695,
    "range": [
      2694,
      2695
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2790,
    "end": 2795,
    "range": [
      2790,
      2795
    ]
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2796,
    "end": 2799,
    "range": [
      2796,
      2799
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2800,
    "end": 2801,
    "range": [
      2800,
      2801
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2806,
    "end": 2817,
    "range": [
      2806,
      2817
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2817,
    "end": 2818,
    "range": [
      2817,
      2818
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2818,
    "end": 2819,
    "range": [
      2818,
      2819
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2819,
    "end": 2820,
    "range": [
      2819,
      2820
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2821,
    "end": 2822,
    "range": [
      2821,
      2822
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2822,
    "end": 2823,
    "range": [
      2822,
      2823
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2823,
    "end": 2824,
    "range": [
      2823,
      2824
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2825,
    "end": 2831,
    "range": [
      2825,
      2831
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2831,
    "end": 2832,
    "range": [
      2831,
      2832
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2833,
    "end": 2835,
    "range": [
      2833,
      2835
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2836,
    "end": 2840,
    "range": [
      2836,
      2840
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2840,
    "end": 2841,
    "range": [
      2840,
      2841
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2841,
    "end": 2842,
    "range": [
      2841,
      2842
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2847,
    "end": 2858,
    "range": [
      2847,
      2858
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2858,
    "end": 2859,
    "range": [
      2858,
      2859
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2859,
    "end": 2860,
    "range": [
      2859,
      2860
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2860,
    "end": 2861,
    "range": [
      2860,
      2861
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2862,
    "end": 2863,
    "range": [
      2862,
      2863
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2863,
    "end": 2864,
    "range": [
      2863,
      2864
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2864,
    "end": 2865,
    "range": [
      2864,
      2865
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2866,
    "end": 2872,
    "range": [
      2866,
      2872
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2872,
    "end": 2873,
    "range": [
      2872,
      2873
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2874,
    "end": 2876,
    "range": [
      2874,
      2876
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2877,
    "end": 2881,
    "range": [
      2877,
      2881
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2881,
    "end": 2882,
    "range": [
      2881,
      2882
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2882,
    "end": 2883,
    "range": [
      2882,
      2883
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2888,
    "end": 2899,
    "range": [
      2888,
      2899
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2899,
    "end": 2900,
    "range": [
      2899,
      2900
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2900,
    "end": 2901,
    "range": [
      2900,
      2901
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2902,
    "end": 2903,
    "range": [
      2902,
      2903
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2904,
    "end": 2910,
    "range": [
      2904,
      2910
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2911,
    "end": 2920,
    "range": [
      2911,
      2920
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2920,
    "end": 2921,
    "range": [
      2920,
      2921
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2922,
    "end": 2923,
    "range": [
      2922,
      2923
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2924,
    "end": 2925,
    "range": [
      2924,
      2925
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2926,
    "end": 2929,
    "range": [
      2926,
      2929
    ]
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2930,
    "end": 2933,
    "range": [
      2930,
      2933
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2933,
    "end": 2934,
    "range": [
      2933,
      2934
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2934,
    "end": 2935,
    "range": [
      2934,
      2935
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2935,
    "end": 2936,
    "range": [
      2935,
      2936
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2936,
    "end": 2937,
    "range": [
      2936,
      2937
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2938,
    "end": 2940,
    "range": [
      2938,
      2940
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2941,
    "end": 2942,
    "range": [
      2941,
      2942
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2942,
    "end": 2943,
    "range": [
      2942,
      2943
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 2943,
    "end": 2950,
    "range": [
      2943,
      2950
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2950,
    "end": 2951,
    "range": [
      2950,
      2951
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2951,
    "end": 2952,
    "range": [
      2951,
      2952
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2952,
    "end": 2953,
    "range": [
      2952,
      2953
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2953,
    "end": 2954,
    "range": [
      2953,
      2954
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2955,
    "end": 2958,
    "range": [
      2955,
      2958
    ]
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2959,
    "end": 2962,
    "range": [
      2959,
      2962
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2962,
    "end": 2963,
    "range": [
      2962,
      2963
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2963,
    "end": 2964,
    "range": [
      2963,
      2964
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2964,
    "end": 2965,
    "range": [
      2964,
      2965
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2965,
    "end": 2966,
    "range": [
      2965,
      2966
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2967,
    "end": 2969,
    "range": [
      2967,
      2969
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2970,
    "end": 2971,
    "range": [
      2970,
      2971
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2971,
    "end": 2972,
    "range": [
      2971,
      2972
    ]
  },
  {
    "type": "Identifier",
    "value": "substr",
    "start": 2972,
    "end": 2978,
    "range": [
      2972,
      2978
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2978,
    "end": 2979,
    "range": [
      2978,
      2979
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2979,
    "end": 2980,
    "range": [
      2979,
      2980
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2980,
    "end": 2981,
    "range": [
      2980,
      2981
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2981,
    "end": 2982,
    "range": [
      2981,
      2982
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2982,
    "end": 2983,
    "range": [
      2982,
      2983
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2984,
    "end": 2987,
    "range": [
      2984,
      2987
    ]
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2988,
    "end": 2991,
    "range": [
      2988,
      2991
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2991,
    "end": 2992,
    "range": [
      2991,
      2992
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2992,
    "end": 2993,
    "range": [
      2992,
      2993
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2993,
    "end": 2994,
    "range": [
      2993,
      2994
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2994,
    "end": 2995,
    "range": [
      2994,
      2995
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2996,
    "end": 2998,
    "range": [
      2996,
      2998
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2999,
    "end": 3000,
    "range": [
      2999,
      3000
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3000,
    "end": 3001,
    "range": [
      3000,
      3001
    ]
  },
  {
    "type": "Identifier",
    "value": "blah",
    "start": 3001,
    "end": 3005,
    "range": [
      3001,
      3005
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3005,
    "end": 3006,
    "range": [
      3005,
      3006
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3006,
    "end": 3007,
    "range": [
      3006,
      3007
    ]
  }
]
```
