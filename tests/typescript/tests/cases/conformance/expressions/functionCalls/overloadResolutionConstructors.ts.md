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
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 236
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 251,
                    "end": 257
                  },
                  "start": 249,
                  "end": 257
                },
                "start": 248,
                "end": 257
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 260,
                "end": 266
              },
              "start": 258,
              "end": 266
            },
            "start": 243,
            "end": 267
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 280,
                    "end": 286
                  },
                  "start": 278,
                  "end": 286
                },
                "start": 277,
                "end": 286
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 289,
                "end": 295
              },
              "start": 287,
              "end": 295
            },
            "start": 272,
            "end": 296
          }
        ],
        "start": 237,
        "end": 298
      },
      "declare": false,
      "start": 223,
      "end": 298
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
            "name": "fn1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 308,
                  "end": 311
                },
                "typeArguments": null,
                "start": 308,
                "end": 311
              },
              "start": 306,
              "end": 311
            },
            "start": 303,
            "end": 311
          },
          "init": null,
          "definite": false,
          "start": 303,
          "end": 311
        }
      ],
      "declare": false,
      "start": 299,
      "end": 312
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
            "start": 382,
            "end": 383
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 393
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 403
              }
            ],
            "start": 386,
            "end": 404
          },
          "definite": false,
          "start": 382,
          "end": 404
        }
      ],
      "declare": false,
      "start": 378,
      "end": 405
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
                "start": 413,
                "end": 419
              },
              "start": 411,
              "end": 419
            },
            "start": 410,
            "end": 419
          },
          "init": null,
          "definite": false,
          "start": 410,
          "end": 419
        }
      ],
      "declare": false,
      "start": 406,
      "end": 420
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
          "start": 458,
          "end": 461
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 462,
            "end": 464
          }
        ],
        "start": 454,
        "end": 465
      },
      "directive": null,
      "start": 454,
      "end": 466
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 602,
        "end": 605
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 620,
                    "end": 626
                  },
                  "start": 618,
                  "end": 626
                },
                "start": 617,
                "end": 626
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
                    "start": 631,
                    "end": 637
                  },
                  "start": 629,
                  "end": 637
                },
                "start": 628,
                "end": 637
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 640,
                "end": 646
              },
              "start": 638,
              "end": 646
            },
            "start": 612,
            "end": 647
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 657,
                    "end": 658
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 657,
                  "end": 658
                }
              ],
              "start": 656,
              "end": 659
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
                    "start": 663,
                    "end": 669
                  },
                  "start": 661,
                  "end": 669
                },
                "start": 660,
                "end": 669
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
                      "start": 674,
                      "end": 675
                    },
                    "typeArguments": null,
                    "start": 674,
                    "end": 675
                  },
                  "start": 672,
                  "end": 675
                },
                "start": 671,
                "end": 675
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
                  "start": 678,
                  "end": 679
                },
                "typeArguments": null,
                "start": 678,
                "end": 679
              },
              "start": 676,
              "end": 679
            },
            "start": 652,
            "end": 680
          }
        ],
        "start": 606,
        "end": 682
      },
      "declare": false,
      "start": 592,
      "end": 682
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
            "name": "fn2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 692,
                  "end": 695
                },
                "typeArguments": null,
                "start": 692,
                "end": 695
              },
              "start": 690,
              "end": 695
            },
            "start": 687,
            "end": 695
          },
          "init": null,
          "definite": false,
          "start": 687,
          "end": 695
        }
      ],
      "declare": false,
      "start": 683,
      "end": 696
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
            "start": 702,
            "end": 703
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 710,
              "end": 713
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
                    "start": 714,
                    "end": 718
                  },
                  "typeArguments": null,
                  "start": 714,
                  "end": 718
                }
              ],
              "start": 713,
              "end": 719
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 720,
                "end": 721
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 723,
                "end": 732
              }
            ],
            "start": 706,
            "end": 733
          },
          "definite": false,
          "start": 702,
          "end": 733
        }
      ],
      "declare": false,
      "start": 698,
      "end": 734
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
                  "start": 742,
                  "end": 746
                },
                "typeArguments": null,
                "start": 742,
                "end": 746
              },
              "start": 740,
              "end": 746
            },
            "start": 739,
            "end": 746
          },
          "init": null,
          "definite": false,
          "start": 739,
          "end": 746
        }
      ],
      "declare": false,
      "start": 735,
      "end": 747
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
            "start": 871,
            "end": 872
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 879,
              "end": 882
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 883,
                "end": 884
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 886,
                "end": 888
              }
            ],
            "start": 875,
            "end": 889
          },
          "definite": false,
          "start": 871,
          "end": 889
        }
      ],
      "declare": false,
      "start": 867,
      "end": 890
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
          "start": 1017,
          "end": 1020
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
                "start": 1021,
                "end": 1025
              },
              "typeArguments": null,
              "start": 1021,
              "end": 1025
            }
          ],
          "start": 1020,
          "end": 1026
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1027,
            "end": 1029
          },
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1031,
            "end": 1032
          }
        ],
        "start": 1013,
        "end": 1033
      },
      "directive": null,
      "start": 1013,
      "end": 1034
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
          "start": 1173,
          "end": 1176
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1177,
            "end": 1179
          },
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1181,
            "end": 1182
          }
        ],
        "start": 1169,
        "end": 1183
      },
      "directive": null,
      "start": 1169,
      "end": 1184
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1274,
        "end": 1277
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 1288,
                    "end": 1289
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1288,
                  "end": 1289
                }
              ],
              "start": 1287,
              "end": 1290
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
                      "start": 1294,
                      "end": 1295
                    },
                    "typeArguments": null,
                    "start": 1294,
                    "end": 1295
                  },
                  "start": 1292,
                  "end": 1295
                },
                "start": 1291,
                "end": 1295
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1298,
                "end": 1304
              },
              "start": 1296,
              "end": 1304
            },
            "start": 1284,
            "end": 1305
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 1314,
                    "end": 1315
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1314,
                  "end": 1315
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1317,
                    "end": 1318
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1317,
                  "end": 1318
                }
              ],
              "start": 1313,
              "end": 1319
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
                    "start": 1323,
                    "end": 1329
                  },
                  "start": 1321,
                  "end": 1329
                },
                "start": 1320,
                "end": 1329
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
                      "start": 1334,
                      "end": 1335
                    },
                    "typeArguments": null,
                    "start": 1334,
                    "end": 1335
                  },
                  "start": 1332,
                  "end": 1335
                },
                "start": 1331,
                "end": 1335
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
                      "start": 1340,
                      "end": 1341
                    },
                    "typeArguments": null,
                    "start": 1340,
                    "end": 1341
                  },
                  "start": 1338,
                  "end": 1341
                },
                "start": 1337,
                "end": 1341
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
            "start": 1310,
            "end": 1346
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 1355,
                    "end": 1356
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1355,
                  "end": 1356
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1358,
                    "end": 1359
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1358,
                  "end": 1359
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1361,
                    "end": 1362
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1361,
                  "end": 1362
                }
              ],
              "start": 1354,
              "end": 1363
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
                      "start": 1367,
                      "end": 1368
                    },
                    "typeArguments": null,
                    "start": 1367,
                    "end": 1368
                  },
                  "start": 1365,
                  "end": 1368
                },
                "start": 1364,
                "end": 1368
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
                      "start": 1373,
                      "end": 1374
                    },
                    "typeArguments": null,
                    "start": 1373,
                    "end": 1374
                  },
                  "start": 1371,
                  "end": 1374
                },
                "start": 1370,
                "end": 1374
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
                      "start": 1379,
                      "end": 1380
                    },
                    "typeArguments": null,
                    "start": 1379,
                    "end": 1380
                  },
                  "start": 1377,
                  "end": 1380
                },
                "start": 1376,
                "end": 1380
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1383,
                "end": 1389
              },
              "start": 1381,
              "end": 1389
            },
            "start": 1351,
            "end": 1390
          }
        ],
        "start": 1278,
        "end": 1392
      },
      "declare": false,
      "start": 1264,
      "end": 1392
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
            "name": "fn3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1402,
                  "end": 1405
                },
                "typeArguments": null,
                "start": 1402,
                "end": 1405
              },
              "start": 1400,
              "end": 1405
            },
            "start": 1397,
            "end": 1405
          },
          "init": null,
          "definite": false,
          "start": 1397,
          "end": 1405
        }
      ],
      "declare": false,
      "start": 1393,
      "end": 1406
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
            "start": 1412,
            "end": 1413
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1420,
              "end": 1423
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1424,
                "end": 1425
              }
            ],
            "start": 1416,
            "end": 1426
          },
          "definite": false,
          "start": 1412,
          "end": 1426
        }
      ],
      "declare": false,
      "start": 1408,
      "end": 1427
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
            "start": 1432,
            "end": 1433
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1440,
              "end": 1443
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1444,
                "end": 1446
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1448,
                "end": 1449
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1451,
                "end": 1453
              }
            ],
            "start": 1436,
            "end": 1454
          },
          "definite": false,
          "start": 1432,
          "end": 1454
        }
      ],
      "declare": false,
      "start": 1428,
      "end": 1455
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
            "start": 1460,
            "end": 1461
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1468,
              "end": 1471
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 1472,
                "end": 1473
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 1475,
                "end": 1476
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 1478,
                "end": 1479
              }
            ],
            "start": 1464,
            "end": 1480
          },
          "definite": false,
          "start": 1460,
          "end": 1480
        }
      ],
      "declare": false,
      "start": 1456,
      "end": 1481
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
                "start": 1489,
                "end": 1495
              },
              "start": 1487,
              "end": 1495
            },
            "start": 1486,
            "end": 1495
          },
          "init": null,
          "definite": false,
          "start": 1486,
          "end": 1495
        }
      ],
      "declare": false,
      "start": 1482,
      "end": 1496
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
            "start": 1615,
            "end": 1616
          },
          "init": {
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
                }
              ],
              "start": 1626,
              "end": 1634
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 1635,
                "end": 1636
              }
            ],
            "start": 1619,
            "end": 1637
          },
          "definite": false,
          "start": 1615,
          "end": 1637
        }
      ],
      "declare": false,
      "start": 1611,
      "end": 1638
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
            "start": 1643,
            "end": 1644
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1651,
              "end": 1654
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 1655,
                  "end": 1661
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1663,
                  "end": 1669
                }
              ],
              "start": 1654,
              "end": 1670
            },
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1671,
                "end": 1673
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1675,
                "end": 1677
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1679,
                "end": 1681
              }
            ],
            "start": 1647,
            "end": 1682
          },
          "definite": false,
          "start": 1643,
          "end": 1682
        }
      ],
      "declare": false,
      "start": 1639,
      "end": 1683
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
            "start": 1688,
            "end": 1689
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1696,
              "end": 1699
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1700,
                  "end": 1706
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1708,
                  "end": 1714
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1716,
                  "end": 1722
                }
              ],
              "start": 1699,
              "end": 1723
            },
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1724,
                "end": 1726
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1728,
                "end": 1730
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1732,
                "end": 1733
              }
            ],
            "start": 1692,
            "end": 1734
          },
          "definite": false,
          "start": 1688,
          "end": 1734
        }
      ],
      "declare": false,
      "start": 1684,
      "end": 1735
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
          "start": 1847,
          "end": 1850
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1851,
              "end": 1857
            },
            {
              "type": "TSNumberKeyword",
              "start": 1859,
              "end": 1865
            },
            {
              "type": "TSNumberKeyword",
              "start": 1867,
              "end": 1873
            },
            {
              "type": "TSNumberKeyword",
              "start": 1875,
              "end": 1881
            }
          ],
          "start": 1850,
          "end": 1882
        },
        "arguments": [],
        "start": 1843,
        "end": 1884
      },
      "directive": null,
      "start": 1843,
      "end": 1885
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2000,
        "end": 2003
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 2014,
                    "end": 2015
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 2024,
                    "end": 2030
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2014,
                  "end": 2030
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2032,
                    "end": 2033
                  },
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "start": 2042,
                    "end": 2048
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2032,
                  "end": 2048
                }
              ],
              "start": 2013,
              "end": 2049
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
                      "start": 2053,
                      "end": 2054
                    },
                    "typeArguments": null,
                    "start": 2053,
                    "end": 2054
                  },
                  "start": 2051,
                  "end": 2054
                },
                "start": 2050,
                "end": 2054
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
                      "start": 2059,
                      "end": 2060
                    },
                    "typeArguments": null,
                    "start": 2059,
                    "end": 2060
                  },
                  "start": 2057,
                  "end": 2060
                },
                "start": 2056,
                "end": 2060
              }
            ],
            "returnType": null,
            "start": 2010,
            "end": 2062
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 2071,
                    "end": 2072
                  },
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "start": 2081,
                    "end": 2087
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2071,
                  "end": 2087
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2089,
                    "end": 2090
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 2099,
                    "end": 2105
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2089,
                  "end": 2105
                }
              ],
              "start": 2070,
              "end": 2106
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
                      "start": 2110,
                      "end": 2111
                    },
                    "typeArguments": null,
                    "start": 2110,
                    "end": 2111
                  },
                  "start": 2108,
                  "end": 2111
                },
                "start": 2107,
                "end": 2111
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
                      "start": 2116,
                      "end": 2117
                    },
                    "typeArguments": null,
                    "start": 2116,
                    "end": 2117
                  },
                  "start": 2114,
                  "end": 2117
                },
                "start": 2113,
                "end": 2117
              }
            ],
            "returnType": null,
            "start": 2067,
            "end": 2119
          }
        ],
        "start": 2004,
        "end": 2121
      },
      "declare": false,
      "start": 1990,
      "end": 2121
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
            "name": "fn4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2131,
                  "end": 2134
                },
                "typeArguments": null,
                "start": 2131,
                "end": 2134
              },
              "start": 2129,
              "end": 2134
            },
            "start": 2126,
            "end": 2134
          },
          "init": null,
          "definite": false,
          "start": 2126,
          "end": 2134
        }
      ],
      "declare": false,
      "start": 2122,
      "end": 2135
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
          "start": 2141,
          "end": 2144
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2145,
              "end": 2151
            },
            {
              "type": "TSNumberKeyword",
              "start": 2153,
              "end": 2159
            }
          ],
          "start": 2144,
          "end": 2160
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2161,
            "end": 2163
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2165,
            "end": 2166
          }
        ],
        "start": 2137,
        "end": 2167
      },
      "directive": null,
      "start": 2137,
      "end": 2168
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
          "start": 2173,
          "end": 2176
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2177,
              "end": 2183
            },
            {
              "type": "TSNumberKeyword",
              "start": 2185,
              "end": 2191
            }
          ],
          "start": 2176,
          "end": 2192
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2193,
            "end": 2194
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2196,
            "end": 2198
          }
        ],
        "start": 2169,
        "end": 2199
      },
      "directive": null,
      "start": 2169,
      "end": 2200
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
          "start": 2214,
          "end": 2217
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2218,
              "end": 2224
            },
            {
              "type": "TSStringKeyword",
              "start": 2226,
              "end": 2232
            }
          ],
          "start": 2217,
          "end": 2233
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2234,
            "end": 2236
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2238,
            "end": 2239
          }
        ],
        "start": 2210,
        "end": 2240
      },
      "directive": null,
      "start": 2210,
      "end": 2241
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
          "start": 2255,
          "end": 2258
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2259,
              "end": 2265
            },
            {
              "type": "TSStringKeyword",
              "start": 2267,
              "end": 2273
            }
          ],
          "start": 2258,
          "end": 2274
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2275,
            "end": 2276
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2278,
            "end": 2280
          }
        ],
        "start": 2251,
        "end": 2281
      },
      "directive": null,
      "start": 2251,
      "end": 2282
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
          "start": 2401,
          "end": 2404
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2405,
            "end": 2407
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2409,
            "end": 2410
          }
        ],
        "start": 2397,
        "end": 2411
      },
      "directive": null,
      "start": 2397,
      "end": 2412
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
          "start": 2417,
          "end": 2420
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2421,
            "end": 2422
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2424,
            "end": 2426
          }
        ],
        "start": 2413,
        "end": 2427
      },
      "directive": null,
      "start": 2413,
      "end": 2428
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
          "start": 2433,
          "end": 2436
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 2437,
            "end": 2438
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 2440,
            "end": 2449
          }
        ],
        "start": 2429,
        "end": 2450
      },
      "directive": null,
      "start": 2429,
      "end": 2451
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
          "start": 2456,
          "end": 2459
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2460,
            "end": 2462
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2464,
            "end": 2468
          }
        ],
        "start": 2452,
        "end": 2469
      },
      "directive": null,
      "start": 2452,
      "end": 2470
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
          "start": 2577,
          "end": 2580
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSBooleanKeyword",
              "start": 2581,
              "end": 2588
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 2590,
                "end": 2594
              },
              "typeArguments": null,
              "start": 2590,
              "end": 2594
            }
          ],
          "start": 2580,
          "end": 2595
        },
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2596,
            "end": 2600
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2602,
            "end": 2606
          }
        ],
        "start": 2573,
        "end": 2607
      },
      "directive": null,
      "start": 2573,
      "end": 2608
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
          "start": 2742,
          "end": 2745
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 2746,
            "end": 2750
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2752,
            "end": 2756
          }
        ],
        "start": 2738,
        "end": 2757
      },
      "directive": null,
      "start": 2738,
      "end": 2758
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
          "start": 2772,
          "end": 2775
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2776,
            "end": 2780
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 2782,
            "end": 2786
          }
        ],
        "start": 2768,
        "end": 2787
      },
      "directive": null,
      "start": 2768,
      "end": 2788
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2893,
        "end": 2896
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                            "start": 2914,
                            "end": 2920
                          },
                          "start": 2912,
                          "end": 2920
                        },
                        "start": 2911,
                        "end": 2920
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2925,
                        "end": 2929
                      },
                      "start": 2922,
                      "end": 2929
                    },
                    "start": 2910,
                    "end": 2929
                  },
                  "start": 2908,
                  "end": 2929
                },
                "start": 2907,
                "end": 2929
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2932,
                "end": 2938
              },
              "start": 2930,
              "end": 2938
            },
            "start": 2903,
            "end": 2939
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                            "start": 2955,
                            "end": 2961
                          },
                          "start": 2953,
                          "end": 2961
                        },
                        "start": 2952,
                        "end": 2961
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2966,
                        "end": 2970
                      },
                      "start": 2963,
                      "end": 2970
                    },
                    "start": 2951,
                    "end": 2970
                  },
                  "start": 2949,
                  "end": 2970
                },
                "start": 2948,
                "end": 2970
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2973,
                "end": 2979
              },
              "start": 2971,
              "end": 2979
            },
            "start": 2944,
            "end": 2980
          }
        ],
        "start": 2897,
        "end": 2982
      },
      "declare": false,
      "start": 2883,
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
            "name": "fn5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2992,
                  "end": 2995
                },
                "typeArguments": null,
                "start": 2992,
                "end": 2995
              },
              "start": 2990,
              "end": 2995
            },
            "start": 2987,
            "end": 2995
          },
          "init": null,
          "definite": false,
          "start": 2987,
          "end": 2995
        }
      ],
      "declare": false,
      "start": 2983,
      "end": 2996
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
            "start": 3001,
            "end": 3002
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3009,
              "end": 3012
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
                    "start": 3014,
                    "end": 3015
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
                      "start": 3020,
                      "end": 3021
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toFixed",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3022,
                      "end": 3029
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3020,
                    "end": 3029
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 3020,
                  "end": 3031
                },
                "id": null,
                "generator": false,
                "start": 3013,
                "end": 3031
              }
            ],
            "start": 3005,
            "end": 3032
          },
          "definite": false,
          "start": 3001,
          "end": 3032
        }
      ],
      "declare": false,
      "start": 2997,
      "end": 3033
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
            "start": 3038,
            "end": 3039
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3046,
              "end": 3049
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
                    "start": 3051,
                    "end": 3052
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
                      "start": 3057,
                      "end": 3058
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "substr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3059,
                      "end": 3065
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3057,
                    "end": 3065
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 3066,
                      "end": 3067
                    }
                  ],
                  "optional": false,
                  "start": 3057,
                  "end": 3068
                },
                "id": null,
                "generator": false,
                "start": 3050,
                "end": 3068
              }
            ],
            "start": 3042,
            "end": 3069
          },
          "definite": false,
          "start": 3038,
          "end": 3069
        }
      ],
      "declare": false,
      "start": 3034,
      "end": 3070
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3070
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
    "value": "interface",
    "start": 223,
    "end": 232,
    "range": [
      223,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 233,
    "end": 236,
    "range": [
      233,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 243,
    "end": 246,
    "range": [
      243,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 251,
    "end": 257,
    "range": [
      251,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 260,
    "end": 266,
    "range": [
      260,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 272,
    "end": 275,
    "range": [
      272,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 280,
    "end": 286,
    "range": [
      280,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 289,
    "end": 295,
    "range": [
      289,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 299,
    "end": 302,
    "range": [
      299,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 303,
    "end": 306,
    "range": [
      303,
      306
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
    "value": "fn1",
    "start": 308,
    "end": 311,
    "range": [
      308,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 378,
    "end": 381,
    "range": [
      378,
      381
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 386,
    "end": 389,
    "range": [
      386,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 390,
    "end": 393,
    "range": [
      390,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 394,
    "end": 403,
    "range": [
      394,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 406,
    "end": 409,
    "range": [
      406,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 413,
    "end": 419,
    "range": [
      413,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 454,
    "end": 457,
    "range": [
      454,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 458,
    "end": 461,
    "range": [
      458,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 592,
    "end": 601,
    "range": [
      592,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 602,
    "end": 605,
    "range": [
      602,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 612,
    "end": 615,
    "range": [
      612,
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
    "value": "s",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 620,
    "end": 626,
    "range": [
      620,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 631,
    "end": 637,
    "range": [
      631,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 640,
    "end": 646,
    "range": [
      640,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 652,
    "end": 655,
    "range": [
      652,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 663,
    "end": 669,
    "range": [
      663,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
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
    "value": "T",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 683,
    "end": 686,
    "range": [
      683,
      686
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 687,
    "end": 690,
    "range": [
      687,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 692,
    "end": 695,
    "range": [
      692,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 698,
    "end": 701,
    "range": [
      698,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 706,
    "end": 709,
    "range": [
      706,
      709
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 710,
    "end": 713,
    "range": [
      710,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 714,
    "end": 718,
    "range": [
      714,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
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
    "type": "Numeric",
    "value": "0",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 723,
    "end": 732,
    "range": [
      723,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 735,
    "end": 738,
    "range": [
      735,
      738
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 742,
    "end": 746,
    "range": [
      742,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 867,
    "end": 870,
    "range": [
      867,
      870
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 873,
    "end": 874,
    "range": [
      873,
      874
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 875,
    "end": 878,
    "range": [
      875,
      878
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 879,
    "end": 882,
    "range": [
      879,
      882
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 886,
    "end": 888,
    "range": [
      886,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1013,
    "end": 1016,
    "range": [
      1013,
      1016
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 1017,
    "end": 1020,
    "range": [
      1017,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1021,
    "end": 1025,
    "range": [
      1021,
      1025
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1027,
    "end": 1029,
    "range": [
      1027,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1169,
    "end": 1172,
    "range": [
      1169,
      1172
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 1173,
    "end": 1176,
    "range": [
      1173,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1177,
    "end": 1179,
    "range": [
      1177,
      1179
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1264,
    "end": 1273,
    "range": [
      1264,
      1273
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1274,
    "end": 1277,
    "range": [
      1274,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1284,
    "end": 1287,
    "range": [
      1284,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1291,
    "end": 1292,
    "range": [
      1291,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1294,
    "end": 1295,
    "range": [
      1294,
      1295
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": ";",
    "start": 1304,
    "end": 1305,
    "range": [
      1304,
      1305
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1310,
    "end": 1313,
    "range": [
      1310,
      1313
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1315,
    "end": 1316,
    "range": [
      1315,
      1316
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1323,
    "end": 1329,
    "range": [
      1323,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1335,
    "end": 1336,
    "range": [
      1335,
      1336
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": ";",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1351,
    "end": 1354,
    "range": [
      1351,
      1354
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1354,
    "end": 1355,
    "range": [
      1354,
      1355
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1356,
    "end": 1357,
    "range": [
      1356,
      1357
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1359,
    "end": 1360,
    "range": [
      1359,
      1360
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1361,
    "end": 1362,
    "range": [
      1361,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1365,
    "end": 1366,
    "range": [
      1365,
      1366
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1367,
    "end": 1368,
    "range": [
      1367,
      1368
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1368,
    "end": 1369,
    "range": [
      1368,
      1369
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1376,
    "end": 1377,
    "range": [
      1376,
      1377
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1377,
    "end": 1378,
    "range": [
      1377,
      1378
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1380,
    "end": 1381,
    "range": [
      1380,
      1381
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1381,
    "end": 1382,
    "range": [
      1381,
      1382
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1383,
    "end": 1389,
    "range": [
      1383,
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
    "type": "Punctuator",
    "value": "}",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1393,
    "end": 1396,
    "range": [
      1393,
      1396
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1397,
    "end": 1400,
    "range": [
      1397,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1402,
    "end": 1405,
    "range": [
      1402,
      1405
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1405,
    "end": 1406,
    "range": [
      1405,
      1406
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1408,
    "end": 1411,
    "range": [
      1408,
      1411
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1416,
    "end": 1419,
    "range": [
      1416,
      1419
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1420,
    "end": 1423,
    "range": [
      1420,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1425,
    "end": 1426,
    "range": [
      1425,
      1426
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1426,
    "end": 1427,
    "range": [
      1426,
      1427
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1428,
    "end": 1431,
    "range": [
      1428,
      1431
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1436,
    "end": 1439,
    "range": [
      1436,
      1439
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1440,
    "end": 1443,
    "range": [
      1440,
      1443
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1443,
    "end": 1444,
    "range": [
      1443,
      1444
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1444,
    "end": 1446,
    "range": [
      1444,
      1446
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1451,
    "end": 1453,
    "range": [
      1451,
      1453
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1453,
    "end": 1454,
    "range": [
      1453,
      1454
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1456,
    "end": 1459,
    "range": [
      1456,
      1459
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1460,
    "end": 1461,
    "range": [
      1460,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1464,
    "end": 1467,
    "range": [
      1464,
      1467
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1468,
    "end": 1471,
    "range": [
      1468,
      1471
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1471,
    "end": 1472,
    "range": [
      1471,
      1472
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1475,
    "end": 1476,
    "range": [
      1475,
      1476
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1476,
    "end": 1477,
    "range": [
      1476,
      1477
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1478,
    "end": 1479,
    "range": [
      1478,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1479,
    "end": 1480,
    "range": [
      1479,
      1480
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1482,
    "end": 1485,
    "range": [
      1482,
      1485
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1486,
    "end": 1487,
    "range": [
      1486,
      1487
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1487,
    "end": 1488,
    "range": [
      1487,
      1488
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1489,
    "end": 1495,
    "range": [
      1489,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1611,
    "end": 1614,
    "range": [
      1611,
      1614
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
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
    "value": ">",
    "start": 1633,
    "end": 1634,
    "range": [
      1633,
      1634
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1634,
    "end": 1635,
    "range": [
      1634,
      1635
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1635,
    "end": 1636,
    "range": [
      1635,
      1636
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1636,
    "end": 1637,
    "range": [
      1636,
      1637
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1637,
    "end": 1638,
    "range": [
      1637,
      1638
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1639,
    "end": 1642,
    "range": [
      1639,
      1642
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1645,
    "end": 1646,
    "range": [
      1645,
      1646
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1647,
    "end": 1650,
    "range": [
      1647,
      1650
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1651,
    "end": 1654,
    "range": [
      1651,
      1654
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1654,
    "end": 1655,
    "range": [
      1654,
      1655
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1655,
    "end": 1661,
    "range": [
      1655,
      1661
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1661,
    "end": 1662,
    "range": [
      1661,
      1662
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1663,
    "end": 1669,
    "range": [
      1663,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1670,
    "end": 1671,
    "range": [
      1670,
      1671
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1671,
    "end": 1673,
    "range": [
      1671,
      1673
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1673,
    "end": 1674,
    "range": [
      1673,
      1674
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1675,
    "end": 1677,
    "range": [
      1675,
      1677
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1679,
    "end": 1681,
    "range": [
      1679,
      1681
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1682,
    "end": 1683,
    "range": [
      1682,
      1683
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1684,
    "end": 1687,
    "range": [
      1684,
      1687
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1692,
    "end": 1695,
    "range": [
      1692,
      1695
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1696,
    "end": 1699,
    "range": [
      1696,
      1699
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1700,
    "end": 1706,
    "range": [
      1700,
      1706
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1708,
    "end": 1714,
    "range": [
      1708,
      1714
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1714,
    "end": 1715,
    "range": [
      1714,
      1715
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1716,
    "end": 1722,
    "range": [
      1716,
      1722
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1724,
    "end": 1726,
    "range": [
      1724,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1726,
    "end": 1727,
    "range": [
      1726,
      1727
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1728,
    "end": 1730,
    "range": [
      1728,
      1730
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1730,
    "end": 1731,
    "range": [
      1730,
      1731
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1732,
    "end": 1733,
    "range": [
      1732,
      1733
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1733,
    "end": 1734,
    "range": [
      1733,
      1734
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1843,
    "end": 1846,
    "range": [
      1843,
      1846
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 1847,
    "end": 1850,
    "range": [
      1847,
      1850
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1850,
    "end": 1851,
    "range": [
      1850,
      1851
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1851,
    "end": 1857,
    "range": [
      1851,
      1857
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1859,
    "end": 1865,
    "range": [
      1859,
      1865
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1865,
    "end": 1866,
    "range": [
      1865,
      1866
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1867,
    "end": 1873,
    "range": [
      1867,
      1873
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1873,
    "end": 1874,
    "range": [
      1873,
      1874
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1875,
    "end": 1881,
    "range": [
      1875,
      1881
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1882,
    "end": 1883,
    "range": [
      1882,
      1883
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1883,
    "end": 1884,
    "range": [
      1883,
      1884
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1990,
    "end": 1999,
    "range": [
      1990,
      1999
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2000,
    "end": 2003,
    "range": [
      2000,
      2003
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2004,
    "end": 2005,
    "range": [
      2004,
      2005
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2010,
    "end": 2013,
    "range": [
      2010,
      2013
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2013,
    "end": 2014,
    "range": [
      2013,
      2014
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2014,
    "end": 2015,
    "range": [
      2014,
      2015
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2016,
    "end": 2023,
    "range": [
      2016,
      2023
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2024,
    "end": 2030,
    "range": [
      2024,
      2030
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2030,
    "end": 2031,
    "range": [
      2030,
      2031
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2032,
    "end": 2033,
    "range": [
      2032,
      2033
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2034,
    "end": 2041,
    "range": [
      2034,
      2041
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2042,
    "end": 2048,
    "range": [
      2042,
      2048
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2048,
    "end": 2049,
    "range": [
      2048,
      2049
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2049,
    "end": 2050,
    "range": [
      2049,
      2050
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2050,
    "end": 2051,
    "range": [
      2050,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2051,
    "end": 2052,
    "range": [
      2051,
      2052
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2053,
    "end": 2054,
    "range": [
      2053,
      2054
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2054,
    "end": 2055,
    "range": [
      2054,
      2055
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2056,
    "end": 2057,
    "range": [
      2056,
      2057
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2057,
    "end": 2058,
    "range": [
      2057,
      2058
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2059,
    "end": 2060,
    "range": [
      2059,
      2060
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2060,
    "end": 2061,
    "range": [
      2060,
      2061
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2061,
    "end": 2062,
    "range": [
      2061,
      2062
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2067,
    "end": 2070,
    "range": [
      2067,
      2070
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2070,
    "end": 2071,
    "range": [
      2070,
      2071
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2071,
    "end": 2072,
    "range": [
      2071,
      2072
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2073,
    "end": 2080,
    "range": [
      2073,
      2080
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2081,
    "end": 2087,
    "range": [
      2081,
      2087
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2087,
    "end": 2088,
    "range": [
      2087,
      2088
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2089,
    "end": 2090,
    "range": [
      2089,
      2090
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2091,
    "end": 2098,
    "range": [
      2091,
      2098
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2099,
    "end": 2105,
    "range": [
      2099,
      2105
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2105,
    "end": 2106,
    "range": [
      2105,
      2106
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2106,
    "end": 2107,
    "range": [
      2106,
      2107
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2107,
    "end": 2108,
    "range": [
      2107,
      2108
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2108,
    "end": 2109,
    "range": [
      2108,
      2109
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2110,
    "end": 2111,
    "range": [
      2110,
      2111
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2113,
    "end": 2114,
    "range": [
      2113,
      2114
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2114,
    "end": 2115,
    "range": [
      2114,
      2115
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2116,
    "end": 2117,
    "range": [
      2116,
      2117
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2117,
    "end": 2118,
    "range": [
      2117,
      2118
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2118,
    "end": 2119,
    "range": [
      2118,
      2119
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2120,
    "end": 2121,
    "range": [
      2120,
      2121
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2122,
    "end": 2125,
    "range": [
      2122,
      2125
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2126,
    "end": 2129,
    "range": [
      2126,
      2129
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2129,
    "end": 2130,
    "range": [
      2129,
      2130
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2131,
    "end": 2134,
    "range": [
      2131,
      2134
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2134,
    "end": 2135,
    "range": [
      2134,
      2135
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2137,
    "end": 2140,
    "range": [
      2137,
      2140
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2141,
    "end": 2144,
    "range": [
      2141,
      2144
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2144,
    "end": 2145,
    "range": [
      2144,
      2145
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2145,
    "end": 2151,
    "range": [
      2145,
      2151
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2151,
    "end": 2152,
    "range": [
      2151,
      2152
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2153,
    "end": 2159,
    "range": [
      2153,
      2159
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2160,
    "end": 2161,
    "range": [
      2160,
      2161
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 2161,
    "end": 2163,
    "range": [
      2161,
      2163
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2163,
    "end": 2164,
    "range": [
      2163,
      2164
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2165,
    "end": 2166,
    "range": [
      2165,
      2166
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2166,
    "end": 2167,
    "range": [
      2166,
      2167
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2167,
    "end": 2168,
    "range": [
      2167,
      2168
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2169,
    "end": 2172,
    "range": [
      2169,
      2172
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2173,
    "end": 2176,
    "range": [
      2173,
      2176
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2176,
    "end": 2177,
    "range": [
      2176,
      2177
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2177,
    "end": 2183,
    "range": [
      2177,
      2183
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2183,
    "end": 2184,
    "range": [
      2183,
      2184
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2185,
    "end": 2191,
    "range": [
      2185,
      2191
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2191,
    "end": 2192,
    "range": [
      2191,
      2192
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2192,
    "end": 2193,
    "range": [
      2192,
      2193
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2193,
    "end": 2194,
    "range": [
      2193,
      2194
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2194,
    "end": 2195,
    "range": [
      2194,
      2195
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 2196,
    "end": 2198,
    "range": [
      2196,
      2198
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2198,
    "end": 2199,
    "range": [
      2198,
      2199
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2199,
    "end": 2200,
    "range": [
      2199,
      2200
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2210,
    "end": 2213,
    "range": [
      2210,
      2213
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2214,
    "end": 2217,
    "range": [
      2214,
      2217
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2217,
    "end": 2218,
    "range": [
      2217,
      2218
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2218,
    "end": 2224,
    "range": [
      2218,
      2224
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2224,
    "end": 2225,
    "range": [
      2224,
      2225
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2226,
    "end": 2232,
    "range": [
      2226,
      2232
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2232,
    "end": 2233,
    "range": [
      2232,
      2233
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2233,
    "end": 2234,
    "range": [
      2233,
      2234
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 2234,
    "end": 2236,
    "range": [
      2234,
      2236
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2236,
    "end": 2237,
    "range": [
      2236,
      2237
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2238,
    "end": 2239,
    "range": [
      2238,
      2239
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2239,
    "end": 2240,
    "range": [
      2239,
      2240
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2240,
    "end": 2241,
    "range": [
      2240,
      2241
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2251,
    "end": 2254,
    "range": [
      2251,
      2254
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2255,
    "end": 2258,
    "range": [
      2255,
      2258
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2258,
    "end": 2259,
    "range": [
      2258,
      2259
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2259,
    "end": 2265,
    "range": [
      2259,
      2265
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2265,
    "end": 2266,
    "range": [
      2265,
      2266
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2267,
    "end": 2273,
    "range": [
      2267,
      2273
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2274,
    "end": 2275,
    "range": [
      2274,
      2275
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2275,
    "end": 2276,
    "range": [
      2275,
      2276
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2276,
    "end": 2277,
    "range": [
      2276,
      2277
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 2278,
    "end": 2280,
    "range": [
      2278,
      2280
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2280,
    "end": 2281,
    "range": [
      2280,
      2281
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2281,
    "end": 2282,
    "range": [
      2281,
      2282
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2397,
    "end": 2400,
    "range": [
      2397,
      2400
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2401,
    "end": 2404,
    "range": [
      2401,
      2404
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2404,
    "end": 2405,
    "range": [
      2404,
      2405
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 2405,
    "end": 2407,
    "range": [
      2405,
      2407
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2407,
    "end": 2408,
    "range": [
      2407,
      2408
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2409,
    "end": 2410,
    "range": [
      2409,
      2410
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2410,
    "end": 2411,
    "range": [
      2410,
      2411
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2411,
    "end": 2412,
    "range": [
      2411,
      2412
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2413,
    "end": 2416,
    "range": [
      2413,
      2416
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2417,
    "end": 2420,
    "range": [
      2417,
      2420
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2420,
    "end": 2421,
    "range": [
      2420,
      2421
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2421,
    "end": 2422,
    "range": [
      2421,
      2422
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2422,
    "end": 2423,
    "range": [
      2422,
      2423
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 2424,
    "end": 2426,
    "range": [
      2424,
      2426
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2426,
    "end": 2427,
    "range": [
      2426,
      2427
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2427,
    "end": 2428,
    "range": [
      2427,
      2428
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2429,
    "end": 2432,
    "range": [
      2429,
      2432
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2433,
    "end": 2436,
    "range": [
      2433,
      2436
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2436,
    "end": 2437,
    "range": [
      2436,
      2437
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2437,
    "end": 2438,
    "range": [
      2437,
      2438
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2438,
    "end": 2439,
    "range": [
      2438,
      2439
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2440,
    "end": 2449,
    "range": [
      2440,
      2449
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2449,
    "end": 2450,
    "range": [
      2449,
      2450
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2450,
    "end": 2451,
    "range": [
      2450,
      2451
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2452,
    "end": 2455,
    "range": [
      2452,
      2455
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2456,
    "end": 2459,
    "range": [
      2456,
      2459
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2459,
    "end": 2460,
    "range": [
      2459,
      2460
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 2460,
    "end": 2462,
    "range": [
      2460,
      2462
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2462,
    "end": 2463,
    "range": [
      2462,
      2463
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2464,
    "end": 2468,
    "range": [
      2464,
      2468
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2468,
    "end": 2469,
    "range": [
      2468,
      2469
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2469,
    "end": 2470,
    "range": [
      2469,
      2470
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2573,
    "end": 2576,
    "range": [
      2573,
      2576
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2577,
    "end": 2580,
    "range": [
      2577,
      2580
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2580,
    "end": 2581,
    "range": [
      2580,
      2581
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2581,
    "end": 2588,
    "range": [
      2581,
      2588
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2588,
    "end": 2589,
    "range": [
      2588,
      2589
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2590,
    "end": 2594,
    "range": [
      2590,
      2594
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2594,
    "end": 2595,
    "range": [
      2594,
      2595
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2595,
    "end": 2596,
    "range": [
      2595,
      2596
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2596,
    "end": 2600,
    "range": [
      2596,
      2600
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2600,
    "end": 2601,
    "range": [
      2600,
      2601
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2602,
    "end": 2606,
    "range": [
      2602,
      2606
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2606,
    "end": 2607,
    "range": [
      2606,
      2607
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2607,
    "end": 2608,
    "range": [
      2607,
      2608
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2738,
    "end": 2741,
    "range": [
      2738,
      2741
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2742,
    "end": 2745,
    "range": [
      2742,
      2745
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2745,
    "end": 2746,
    "range": [
      2745,
      2746
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2746,
    "end": 2750,
    "range": [
      2746,
      2750
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2750,
    "end": 2751,
    "range": [
      2750,
      2751
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2752,
    "end": 2756,
    "range": [
      2752,
      2756
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2756,
    "end": 2757,
    "range": [
      2756,
      2757
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2757,
    "end": 2758,
    "range": [
      2757,
      2758
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2768,
    "end": 2771,
    "range": [
      2768,
      2771
    ]
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 2772,
    "end": 2775,
    "range": [
      2772,
      2775
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2775,
    "end": 2776,
    "range": [
      2775,
      2776
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2776,
    "end": 2780,
    "range": [
      2776,
      2780
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2780,
    "end": 2781,
    "range": [
      2780,
      2781
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2782,
    "end": 2786,
    "range": [
      2782,
      2786
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2786,
    "end": 2787,
    "range": [
      2786,
      2787
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2787,
    "end": 2788,
    "range": [
      2787,
      2788
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2883,
    "end": 2892,
    "range": [
      2883,
      2892
    ]
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2893,
    "end": 2896,
    "range": [
      2893,
      2896
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2897,
    "end": 2898,
    "range": [
      2897,
      2898
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2903,
    "end": 2906,
    "range": [
      2903,
      2906
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2906,
    "end": 2907,
    "range": [
      2906,
      2907
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2907,
    "end": 2908,
    "range": [
      2907,
      2908
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2908,
    "end": 2909,
    "range": [
      2908,
      2909
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2910,
    "end": 2911,
    "range": [
      2910,
      2911
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2911,
    "end": 2912,
    "range": [
      2911,
      2912
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2912,
    "end": 2913,
    "range": [
      2912,
      2913
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2914,
    "end": 2920,
    "range": [
      2914,
      2920
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2920,
    "end": 2921,
    "range": [
      2920,
      2921
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2922,
    "end": 2924,
    "range": [
      2922,
      2924
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2925,
    "end": 2929,
    "range": [
      2925,
      2929
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2929,
    "end": 2930,
    "range": [
      2929,
      2930
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2930,
    "end": 2931,
    "range": [
      2930,
      2931
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2932,
    "end": 2938,
    "range": [
      2932,
      2938
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2938,
    "end": 2939,
    "range": [
      2938,
      2939
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2944,
    "end": 2947,
    "range": [
      2944,
      2947
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2947,
    "end": 2948,
    "range": [
      2947,
      2948
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2948,
    "end": 2949,
    "range": [
      2948,
      2949
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2949,
    "end": 2950,
    "range": [
      2949,
      2950
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2951,
    "end": 2952,
    "range": [
      2951,
      2952
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2952,
    "end": 2953,
    "range": [
      2952,
      2953
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2953,
    "end": 2954,
    "range": [
      2953,
      2954
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2955,
    "end": 2961,
    "range": [
      2955,
      2961
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2961,
    "end": 2962,
    "range": [
      2961,
      2962
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2963,
    "end": 2965,
    "range": [
      2963,
      2965
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2966,
    "end": 2970,
    "range": [
      2966,
      2970
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2970,
    "end": 2971,
    "range": [
      2970,
      2971
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2971,
    "end": 2972,
    "range": [
      2971,
      2972
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2973,
    "end": 2979,
    "range": [
      2973,
      2979
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2979,
    "end": 2980,
    "range": [
      2979,
      2980
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2981,
    "end": 2982,
    "range": [
      2981,
      2982
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2983,
    "end": 2986,
    "range": [
      2983,
      2986
    ]
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2987,
    "end": 2990,
    "range": [
      2987,
      2990
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2990,
    "end": 2991,
    "range": [
      2990,
      2991
    ]
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 2992,
    "end": 2995,
    "range": [
      2992,
      2995
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2995,
    "end": 2996,
    "range": [
      2995,
      2996
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2997,
    "end": 3000,
    "range": [
      2997,
      3000
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3001,
    "end": 3002,
    "range": [
      3001,
      3002
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3003,
    "end": 3004,
    "range": [
      3003,
      3004
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3005,
    "end": 3008,
    "range": [
      3005,
      3008
    ]
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 3009,
    "end": 3012,
    "range": [
      3009,
      3012
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3012,
    "end": 3013,
    "range": [
      3012,
      3013
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3013,
    "end": 3014,
    "range": [
      3013,
      3014
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3014,
    "end": 3015,
    "range": [
      3014,
      3015
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3015,
    "end": 3016,
    "range": [
      3015,
      3016
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3017,
    "end": 3019,
    "range": [
      3017,
      3019
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3020,
    "end": 3021,
    "range": [
      3020,
      3021
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3021,
    "end": 3022,
    "range": [
      3021,
      3022
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 3022,
    "end": 3029,
    "range": [
      3022,
      3029
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3029,
    "end": 3030,
    "range": [
      3029,
      3030
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3030,
    "end": 3031,
    "range": [
      3030,
      3031
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3031,
    "end": 3032,
    "range": [
      3031,
      3032
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3032,
    "end": 3033,
    "range": [
      3032,
      3033
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3034,
    "end": 3037,
    "range": [
      3034,
      3037
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3038,
    "end": 3039,
    "range": [
      3038,
      3039
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3040,
    "end": 3041,
    "range": [
      3040,
      3041
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3042,
    "end": 3045,
    "range": [
      3042,
      3045
    ]
  },
  {
    "type": "Identifier",
    "value": "fn5",
    "start": 3046,
    "end": 3049,
    "range": [
      3046,
      3049
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3049,
    "end": 3050,
    "range": [
      3049,
      3050
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3050,
    "end": 3051,
    "range": [
      3050,
      3051
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3051,
    "end": 3052,
    "range": [
      3051,
      3052
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3052,
    "end": 3053,
    "range": [
      3052,
      3053
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3054,
    "end": 3056,
    "range": [
      3054,
      3056
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3057,
    "end": 3058,
    "range": [
      3057,
      3058
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3058,
    "end": 3059,
    "range": [
      3058,
      3059
    ]
  },
  {
    "type": "Identifier",
    "value": "substr",
    "start": 3059,
    "end": 3065,
    "range": [
      3059,
      3065
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3065,
    "end": 3066,
    "range": [
      3065,
      3066
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3066,
    "end": 3067,
    "range": [
      3066,
      3067
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3067,
    "end": 3068,
    "range": [
      3067,
      3068
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3068,
    "end": 3069,
    "range": [
      3068,
      3069
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3069,
    "end": 3070,
    "range": [
      3069,
      3070
    ]
  }
]
```
