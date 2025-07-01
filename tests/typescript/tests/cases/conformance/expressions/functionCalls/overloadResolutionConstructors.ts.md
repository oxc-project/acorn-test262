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
