__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 1872,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 21,
      "end": 649,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 30,
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 31,
        "end": 649,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 59,
            "end": 80,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 66,
              "end": 80,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 70,
                  "end": 79,
                  "id": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 79,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 71,
                      "end": 79,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 73,
                        "end": 79
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "FunctionDeclaration",
            "start": 109,
            "end": 149,
            "id": {
              "type": "Identifier",
              "start": 118,
              "end": 121,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 124,
              "end": 149,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 134,
                  "end": 143,
                  "argument": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 142,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 176,
            "end": 313,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 183,
              "end": 313,
              "id": {
                "type": "Identifier",
                "start": 190,
                "end": 192,
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 193,
                "end": 313,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 232,
                    "end": 258,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 239,
                      "end": 258,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 245,
                        "end": 246,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 247,
                        "end": 258,
                        "body": []
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "EmptyStatement",
                    "start": 258,
                    "end": 259
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 284,
                    "end": 307,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 291,
                      "end": 307,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 295,
                          "end": 306,
                          "id": {
                            "type": "Identifier",
                            "start": 295,
                            "end": 296,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "NewExpression",
                            "start": 299,
                            "end": 306,
                            "callee": {
                              "type": "Identifier",
                              "start": 303,
                              "end": 304,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": []
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 346,
            "end": 403,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 353,
              "end": 403,
              "id": {
                "type": "Identifier",
                "start": 362,
                "end": 371,
                "decorators": [],
                "name": "fooExport",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 374,
                "end": 403,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 384,
                    "end": 397,
                    "argument": {
                      "type": "CallExpression",
                      "start": 391,
                      "end": 396,
                      "callee": {
                        "type": "Identifier",
                        "start": 391,
                        "end": 394,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 433,
            "end": 486,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 440,
              "end": 486,
              "id": {
                "type": "Identifier",
                "start": 449,
                "end": 459,
                "decorators": [],
                "name": "foo2Export",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 468,
                  "end": 477,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 469,
                    "end": 477,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 471,
                      "end": 477
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 479,
                "end": 486,
                "body": []
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 534,
            "end": 570,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 541,
              "end": 570,
              "id": {
                "type": "Identifier",
                "start": 550,
                "end": 560,
                "decorators": [],
                "name": "foo3Export",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 563,
                "end": 570,
                "body": []
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "FunctionDeclaration",
            "start": 618,
            "end": 647,
            "id": {
              "type": "Identifier",
              "start": 627,
              "end": 637,
              "decorators": [],
              "name": "foo4Export",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 640,
              "end": 647,
              "body": []
            },
            "expression": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 677,
      "end": 692,
      "expression": {
        "type": "CallExpression",
        "start": 677,
        "end": 691,
        "callee": {
          "type": "MemberExpression",
          "start": 677,
          "end": 689,
          "object": {
            "type": "Identifier",
            "start": 677,
            "end": 679,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 680,
            "end": 689,
            "decorators": [],
            "name": "fooExport",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 693,
      "end": 719,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 697,
          "end": 718,
          "id": {
            "type": "Identifier",
            "start": 697,
            "end": 702,
            "decorators": [],
            "name": "myvar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 705,
            "end": 718,
            "callee": {
              "type": "MemberExpression",
              "start": 709,
              "end": 716,
              "object": {
                "type": "MemberExpression",
                "start": 709,
                "end": 714,
                "object": {
                  "type": "Identifier",
                  "start": 709,
                  "end": 711,
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 712,
                  "end": 714,
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 715,
                "end": 716,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 750,
      "end": 826,
      "id": {
        "type": "TSQualifiedName",
        "start": 757,
        "end": 762,
        "left": {
          "type": "Identifier",
          "start": 757,
          "end": 759,
          "decorators": [],
          "name": "m2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 760,
          "end": 762,
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 763,
        "end": 826,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 802,
            "end": 824,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 809,
              "end": 824,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 815,
                "end": 816,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 817,
                "end": 824,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 863,
      "end": 877,
      "expression": {
        "type": "NewExpression",
        "start": 863,
        "end": 876,
        "callee": {
          "type": "MemberExpression",
          "start": 867,
          "end": 874,
          "object": {
            "type": "MemberExpression",
            "start": 867,
            "end": 872,
            "object": {
              "type": "Identifier",
              "start": 867,
              "end": 869,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 870,
              "end": 872,
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 873,
            "end": 874,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": []
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 911,
      "end": 990,
      "id": {
        "type": "TSQualifiedName",
        "start": 918,
        "end": 926,
        "left": {
          "type": "TSQualifiedName",
          "start": 918,
          "end": 923,
          "left": {
            "type": "Identifier",
            "start": 918,
            "end": 920,
            "decorators": [],
            "name": "m3",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 921,
            "end": 923,
            "decorators": [],
            "name": "m4",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 924,
          "end": 926,
          "decorators": [],
          "name": "m5",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 927,
        "end": 990,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 966,
            "end": 988,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 973,
              "end": 988,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 979,
                "end": 980,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 981,
                "end": 988,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1019,
      "end": 1036,
      "expression": {
        "type": "NewExpression",
        "start": 1019,
        "end": 1035,
        "callee": {
          "type": "MemberExpression",
          "start": 1023,
          "end": 1033,
          "object": {
            "type": "MemberExpression",
            "start": 1023,
            "end": 1031,
            "object": {
              "type": "MemberExpression",
              "start": 1023,
              "end": 1028,
              "object": {
                "type": "Identifier",
                "start": 1023,
                "end": 1025,
                "decorators": [],
                "name": "m3",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1026,
                "end": 1028,
                "decorators": [],
                "name": "m4",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 1029,
              "end": 1031,
              "decorators": [],
              "name": "m5",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 1032,
            "end": 1033,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": []
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1070,
      "end": 1241,
      "id": {
        "type": "TSQualifiedName",
        "start": 1077,
        "end": 1085,
        "left": {
          "type": "TSQualifiedName",
          "start": 1077,
          "end": 1082,
          "left": {
            "type": "Identifier",
            "start": 1077,
            "end": 1079,
            "decorators": [],
            "name": "m4",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 1080,
            "end": 1082,
            "decorators": [],
            "name": "m5",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1083,
          "end": 1085,
          "decorators": [],
          "name": "m6",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1086,
        "end": 1241,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1092,
            "end": 1188,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 1099,
              "end": 1188,
              "id": {
                "type": "Identifier",
                "start": 1106,
                "end": 1108,
                "decorators": [],
                "name": "m7",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 1109,
                "end": 1188,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 1156,
                    "end": 1182,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 1163,
                      "end": 1182,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 1169,
                        "end": 1170,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 1171,
                        "end": 1182,
                        "body": []
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1242,
      "end": 1262,
      "expression": {
        "type": "NewExpression",
        "start": 1242,
        "end": 1261,
        "callee": {
          "type": "MemberExpression",
          "start": 1246,
          "end": 1259,
          "object": {
            "type": "MemberExpression",
            "start": 1246,
            "end": 1257,
            "object": {
              "type": "MemberExpression",
              "start": 1246,
              "end": 1254,
              "object": {
                "type": "MemberExpression",
                "start": 1246,
                "end": 1251,
                "object": {
                  "type": "Identifier",
                  "start": 1246,
                  "end": 1248,
                  "decorators": [],
                  "name": "m4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1249,
                  "end": 1251,
                  "decorators": [],
                  "name": "m5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 1252,
                "end": 1254,
                "decorators": [],
                "name": "m6",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 1255,
              "end": 1257,
              "decorators": [],
              "name": "m7",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 1258,
            "end": 1259,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": []
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1296,
      "end": 1444,
      "id": {
        "type": "TSQualifiedName",
        "start": 1303,
        "end": 1311,
        "left": {
          "type": "TSQualifiedName",
          "start": 1303,
          "end": 1308,
          "left": {
            "type": "Identifier",
            "start": 1303,
            "end": 1305,
            "decorators": [],
            "name": "m5",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 1306,
            "end": 1308,
            "decorators": [],
            "name": "m6",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1309,
          "end": 1311,
          "decorators": [],
          "name": "m7",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1312,
        "end": 1444,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1346,
            "end": 1442,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 1353,
              "end": 1442,
              "id": {
                "type": "Identifier",
                "start": 1360,
                "end": 1362,
                "decorators": [],
                "name": "m8",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 1363,
                "end": 1442,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 1410,
                    "end": 1436,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 1417,
                      "end": 1436,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 1423,
                        "end": 1424,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 1425,
                        "end": 1436,
                        "body": []
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1445,
      "end": 1465,
      "expression": {
        "type": "NewExpression",
        "start": 1445,
        "end": 1464,
        "callee": {
          "type": "MemberExpression",
          "start": 1449,
          "end": 1462,
          "object": {
            "type": "MemberExpression",
            "start": 1449,
            "end": 1460,
            "object": {
              "type": "MemberExpression",
              "start": 1449,
              "end": 1457,
              "object": {
                "type": "MemberExpression",
                "start": 1449,
                "end": 1454,
                "object": {
                  "type": "Identifier",
                  "start": 1449,
                  "end": 1451,
                  "decorators": [],
                  "name": "m5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1452,
                  "end": 1454,
                  "decorators": [],
                  "name": "m6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 1455,
                "end": 1457,
                "decorators": [],
                "name": "m7",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 1458,
              "end": 1460,
              "decorators": [],
              "name": "m8",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 1461,
            "end": 1462,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": []
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1466,
      "end": 1583,
      "id": {
        "type": "TSQualifiedName",
        "start": 1473,
        "end": 1478,
        "left": {
          "type": "Identifier",
          "start": 1473,
          "end": 1475,
          "decorators": [],
          "name": "m6",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1476,
          "end": 1478,
          "decorators": [],
          "name": "m7",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1479,
        "end": 1583,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1485,
            "end": 1581,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 1492,
              "end": 1581,
              "id": {
                "type": "Identifier",
                "start": 1499,
                "end": 1501,
                "decorators": [],
                "name": "m8",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 1502,
                "end": 1581,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 1549,
                    "end": 1575,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 1556,
                      "end": 1575,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 1562,
                        "end": 1563,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 1564,
                        "end": 1575,
                        "body": []
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1584,
      "end": 1601,
      "expression": {
        "type": "NewExpression",
        "start": 1584,
        "end": 1600,
        "callee": {
          "type": "MemberExpression",
          "start": 1588,
          "end": 1598,
          "object": {
            "type": "MemberExpression",
            "start": 1588,
            "end": 1596,
            "object": {
              "type": "MemberExpression",
              "start": 1588,
              "end": 1593,
              "object": {
                "type": "Identifier",
                "start": 1588,
                "end": 1590,
                "decorators": [],
                "name": "m6",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1591,
                "end": 1593,
                "decorators": [],
                "name": "m7",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 1594,
              "end": 1596,
              "decorators": [],
              "name": "m8",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 1597,
            "end": 1598,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": []
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1602,
      "end": 1854,
      "id": {
        "type": "TSQualifiedName",
        "start": 1609,
        "end": 1614,
        "left": {
          "type": "Identifier",
          "start": 1609,
          "end": 1611,
          "decorators": [],
          "name": "m7",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1612,
          "end": 1614,
          "decorators": [],
          "name": "m8",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1615,
        "end": 1854,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1649,
            "end": 1852,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 1656,
              "end": 1852,
              "id": {
                "type": "Identifier",
                "start": 1663,
                "end": 1665,
                "decorators": [],
                "name": "m9",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 1666,
                "end": 1852,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 1713,
                    "end": 1739,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 1720,
                      "end": 1739,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 1726,
                        "end": 1727,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 1728,
                        "end": 1739,
                        "body": []
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "ClassDeclaration",
                    "start": 1772,
                    "end": 1791,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 1778,
                      "end": 1779,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 1780,
                      "end": 1791,
                      "body": []
                    },
                    "abstract": false,
                    "declare": false
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 1820,
                    "end": 1846,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 1827,
                      "end": 1846,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 1833,
                        "end": 1834,
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 1835,
                        "end": 1846,
                        "body": []
                      },
                      "abstract": false,
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1855,
      "end": 1872,
      "expression": {
        "type": "NewExpression",
        "start": 1855,
        "end": 1871,
        "callee": {
          "type": "MemberExpression",
          "start": 1859,
          "end": 1869,
          "object": {
            "type": "MemberExpression",
            "start": 1859,
            "end": 1867,
            "object": {
              "type": "MemberExpression",
              "start": 1859,
              "end": 1864,
              "object": {
                "type": "Identifier",
                "start": 1859,
                "end": 1861,
                "decorators": [],
                "name": "m7",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1862,
                "end": 1864,
                "decorators": [],
                "name": "m8",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 1865,
              "end": 1867,
              "decorators": [],
              "name": "m9",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 1868,
            "end": 1869,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": []
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
