__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 30
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 73,
                        "end": 79
                      },
                      "start": 71,
                      "end": 79
                    },
                    "start": 70,
                    "end": 79
                  },
                  "init": null,
                  "definite": false,
                  "start": 70,
                  "end": 79
                }
              ],
              "declare": false,
              "start": 66,
              "end": 80
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 59,
            "end": 80
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 121
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 141,
                    "end": 142
                  },
                  "start": 134,
                  "end": 143
                }
              ],
              "start": 124,
              "end": 149
            },
            "expression": false,
            "start": 109,
            "end": 149
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 192
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 245,
                        "end": 246
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 247,
                        "end": 258
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 239,
                      "end": 258
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 232,
                    "end": 258
                  },
                  {
                    "type": "EmptyStatement",
                    "start": 258,
                    "end": 259
                  },
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
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 295,
                            "end": 296
                          },
                          "init": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 303,
                              "end": 304
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 299,
                            "end": 306
                          },
                          "definite": false,
                          "start": 295,
                          "end": 306
                        }
                      ],
                      "declare": false,
                      "start": 291,
                      "end": 307
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 284,
                    "end": 307
                  }
                ],
                "start": 193,
                "end": 313
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 183,
              "end": 313
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 176,
            "end": 313
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooExport",
                "optional": false,
                "typeAnnotation": null,
                "start": 362,
                "end": 371
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 391,
                        "end": 394
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 391,
                      "end": 396
                    },
                    "start": 384,
                    "end": 397
                  }
                ],
                "start": 374,
                "end": 403
              },
              "expression": false,
              "start": 353,
              "end": 403
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 346,
            "end": 403
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2Export",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 459
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 471,
                      "end": 477
                    },
                    "start": 469,
                    "end": 477
                  },
                  "start": 468,
                  "end": 477
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 479,
                "end": 486
              },
              "expression": false,
              "start": 440,
              "end": 486
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 433,
            "end": 486
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo3Export",
                "optional": false,
                "typeAnnotation": null,
                "start": 550,
                "end": 560
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
                "start": 563,
                "end": 570
              },
              "expression": false,
              "start": 541,
              "end": 570
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 534,
            "end": 570
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4Export",
              "optional": false,
              "typeAnnotation": null,
              "start": 627,
              "end": 637
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
              "start": 640,
              "end": 647
            },
            "expression": false,
            "start": 618,
            "end": 647
          }
        ],
        "start": 31,
        "end": 649
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 21,
      "end": 649
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
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 677,
            "end": 679
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooExport",
            "optional": false,
            "typeAnnotation": null,
            "start": 680,
            "end": 689
          },
          "optional": false,
          "computed": false,
          "start": 677,
          "end": 689
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 677,
        "end": 691
      },
      "directive": null,
      "start": 677,
      "end": 692
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
            "name": "myvar",
            "optional": false,
            "typeAnnotation": null,
            "start": 697,
            "end": 702
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 709,
                  "end": 711
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 712,
                  "end": 714
                },
                "optional": false,
                "computed": false,
                "start": 709,
                "end": 714
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 715,
                "end": 716
              },
              "optional": false,
              "computed": false,
              "start": 709,
              "end": 716
            },
            "typeArguments": null,
            "arguments": [],
            "start": 705,
            "end": 718
          },
          "definite": false,
          "start": 697,
          "end": 718
        }
      ],
      "declare": false,
      "start": 693,
      "end": 719
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m2",
          "optional": false,
          "typeAnnotation": null,
          "start": 757,
          "end": 759
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": null,
          "start": 760,
          "end": 762
        },
        "start": 757,
        "end": 762
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 815,
                "end": 816
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 817,
                "end": 824
              },
              "abstract": false,
              "declare": false,
              "start": 809,
              "end": 824
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 802,
            "end": 824
          }
        ],
        "start": 763,
        "end": 826
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 750,
      "end": 826
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 867,
              "end": 869
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 870,
              "end": 872
            },
            "optional": false,
            "computed": false,
            "start": 867,
            "end": 872
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 873,
            "end": 874
          },
          "optional": false,
          "computed": false,
          "start": 867,
          "end": 874
        },
        "typeArguments": null,
        "arguments": [],
        "start": 863,
        "end": 876
      },
      "directive": null,
      "start": 863,
      "end": 877
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m3",
            "optional": false,
            "typeAnnotation": null,
            "start": 918,
            "end": 920
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "m4",
            "optional": false,
            "typeAnnotation": null,
            "start": 921,
            "end": 923
          },
          "start": 918,
          "end": 923
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "m5",
          "optional": false,
          "typeAnnotation": null,
          "start": 924,
          "end": 926
        },
        "start": 918,
        "end": 926
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 979,
                "end": 980
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 981,
                "end": 988
              },
              "abstract": false,
              "declare": false,
              "start": 973,
              "end": 988
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 966,
            "end": 988
          }
        ],
        "start": 927,
        "end": 990
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 911,
      "end": 990
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1023,
                "end": 1025
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1026,
                "end": 1028
              },
              "optional": false,
              "computed": false,
              "start": 1023,
              "end": 1028
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "m5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1029,
              "end": 1031
            },
            "optional": false,
            "computed": false,
            "start": 1023,
            "end": 1031
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1032,
            "end": 1033
          },
          "optional": false,
          "computed": false,
          "start": 1023,
          "end": 1033
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1019,
        "end": 1035
      },
      "directive": null,
      "start": 1019,
      "end": 1036
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1077,
            "end": 1079
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "m5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1080,
            "end": 1082
          },
          "start": 1077,
          "end": 1082
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "m6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1083,
          "end": 1085
        },
        "start": 1077,
        "end": 1085
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m7",
                "optional": false,
                "typeAnnotation": null,
                "start": 1106,
                "end": 1108
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1169,
                        "end": 1170
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 1171,
                        "end": 1182
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 1163,
                      "end": 1182
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1156,
                    "end": 1182
                  }
                ],
                "start": 1109,
                "end": 1188
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 1099,
              "end": 1188
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1092,
            "end": 1188
          }
        ],
        "start": 1086,
        "end": 1241
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1070,
      "end": 1241
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1246,
                  "end": 1248
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1249,
                  "end": 1251
                },
                "optional": false,
                "computed": false,
                "start": 1246,
                "end": 1251
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1252,
                "end": 1254
              },
              "optional": false,
              "computed": false,
              "start": 1246,
              "end": 1254
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "m7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1255,
              "end": 1257
            },
            "optional": false,
            "computed": false,
            "start": 1246,
            "end": 1257
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1258,
            "end": 1259
          },
          "optional": false,
          "computed": false,
          "start": 1246,
          "end": 1259
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1242,
        "end": 1261
      },
      "directive": null,
      "start": 1242,
      "end": 1262
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1303,
            "end": 1305
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "m6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1306,
            "end": 1308
          },
          "start": 1303,
          "end": 1308
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "m7",
          "optional": false,
          "typeAnnotation": null,
          "start": 1309,
          "end": 1311
        },
        "start": 1303,
        "end": 1311
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m8",
                "optional": false,
                "typeAnnotation": null,
                "start": 1360,
                "end": 1362
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1423,
                        "end": 1424
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 1425,
                        "end": 1436
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 1417,
                      "end": 1436
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1410,
                    "end": 1436
                  }
                ],
                "start": 1363,
                "end": 1442
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 1353,
              "end": 1442
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1346,
            "end": 1442
          }
        ],
        "start": 1312,
        "end": 1444
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1296,
      "end": 1444
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1449,
                  "end": 1451
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1452,
                  "end": 1454
                },
                "optional": false,
                "computed": false,
                "start": 1449,
                "end": 1454
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m7",
                "optional": false,
                "typeAnnotation": null,
                "start": 1455,
                "end": 1457
              },
              "optional": false,
              "computed": false,
              "start": 1449,
              "end": 1457
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "m8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1458,
              "end": 1460
            },
            "optional": false,
            "computed": false,
            "start": 1449,
            "end": 1460
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1461,
            "end": 1462
          },
          "optional": false,
          "computed": false,
          "start": 1449,
          "end": 1462
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1445,
        "end": 1464
      },
      "directive": null,
      "start": 1445,
      "end": 1465
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1473,
          "end": 1475
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "m7",
          "optional": false,
          "typeAnnotation": null,
          "start": 1476,
          "end": 1478
        },
        "start": 1473,
        "end": 1478
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m8",
                "optional": false,
                "typeAnnotation": null,
                "start": 1499,
                "end": 1501
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1562,
                        "end": 1563
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 1564,
                        "end": 1575
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 1556,
                      "end": 1575
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1549,
                    "end": 1575
                  }
                ],
                "start": 1502,
                "end": 1581
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 1492,
              "end": 1581
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1485,
            "end": 1581
          }
        ],
        "start": 1479,
        "end": 1583
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1466,
      "end": 1583
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1588,
                "end": 1590
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m7",
                "optional": false,
                "typeAnnotation": null,
                "start": 1591,
                "end": 1593
              },
              "optional": false,
              "computed": false,
              "start": 1588,
              "end": 1593
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "m8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1594,
              "end": 1596
            },
            "optional": false,
            "computed": false,
            "start": 1588,
            "end": 1596
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1597,
            "end": 1598
          },
          "optional": false,
          "computed": false,
          "start": 1588,
          "end": 1598
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1584,
        "end": 1600
      },
      "directive": null,
      "start": 1584,
      "end": 1601
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m7",
          "optional": false,
          "typeAnnotation": null,
          "start": 1609,
          "end": 1611
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "m8",
          "optional": false,
          "typeAnnotation": null,
          "start": 1612,
          "end": 1614
        },
        "start": 1609,
        "end": 1614
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m9",
                "optional": false,
                "typeAnnotation": null,
                "start": 1663,
                "end": 1665
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1726,
                        "end": 1727
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 1728,
                        "end": 1739
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 1720,
                      "end": 1739
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1713,
                    "end": 1739
                  },
                  {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1778,
                      "end": 1779
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 1780,
                      "end": 1791
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1772,
                    "end": 1791
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1833,
                        "end": 1834
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 1835,
                        "end": 1846
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 1827,
                      "end": 1846
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1820,
                    "end": 1846
                  }
                ],
                "start": 1666,
                "end": 1852
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 1656,
              "end": 1852
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1649,
            "end": 1852
          }
        ],
        "start": 1615,
        "end": 1854
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1602,
      "end": 1854
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m7",
                "optional": false,
                "typeAnnotation": null,
                "start": 1859,
                "end": 1861
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m8",
                "optional": false,
                "typeAnnotation": null,
                "start": 1862,
                "end": 1864
              },
              "optional": false,
              "computed": false,
              "start": 1859,
              "end": 1864
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "m9",
              "optional": false,
              "typeAnnotation": null,
              "start": 1865,
              "end": 1867
            },
            "optional": false,
            "computed": false,
            "start": 1859,
            "end": 1867
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1868,
            "end": 1869
          },
          "optional": false,
          "computed": false,
          "start": 1859,
          "end": 1869
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1855,
        "end": 1871
      },
      "directive": null,
      "start": 1855,
      "end": 1872
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 1872
}
```
