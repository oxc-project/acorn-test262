__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicModule",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 29
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
                  "name": "publicClassInPublicModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 74
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
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 93,
                        "end": 95
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
                          "start": 98,
                          "end": 109
                        },
                        "expression": false,
                        "start": 95,
                        "end": 109
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 85,
                      "end": 109
                    }
                  ],
                  "start": 75,
                  "end": 115
                },
                "abstract": false,
                "declare": false,
                "start": 43,
                "end": 115
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 36,
              "end": 115
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 153
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 154,
                "end": 161
              },
              "abstract": false,
              "declare": false,
              "start": 121,
              "end": 161
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassExtendingPublicClassInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 213
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 247
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 248,
                "end": 255
              },
              "abstract": false,
              "declare": false,
              "start": 167,
              "end": 255
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassExtendingPrivateClassInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 307
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 316,
                "end": 342
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 343,
                "end": 350
              },
              "abstract": false,
              "declare": false,
              "start": 260,
              "end": 350
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassExtendingPublicClassInModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 368,
                  "end": 407
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInPublicModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 416,
                  "end": 441
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 442,
                  "end": 449
                },
                "abstract": false,
                "declare": false,
                "start": 362,
                "end": 449
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 355,
              "end": 449
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassExtendingPrivateClassInModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 467,
                  "end": 507
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClassInPublicModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 516,
                  "end": 542
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 543,
                  "end": 566
                },
                "abstract": false,
                "declare": false,
                "start": 461,
                "end": 566
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 454,
              "end": 566
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassExtendingFromPrivateModuleClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 621
              },
              "typeParameters": null,
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 643
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 644,
                  "end": 670
                },
                "optional": false,
                "computed": false,
                "start": 630,
                "end": 670
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 671,
                "end": 678
              },
              "abstract": false,
              "declare": false,
              "start": 572,
              "end": 678
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassExtendingFromPrivateModuleClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 696,
                  "end": 738
                },
                "typeParameters": null,
                "superClass": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 747,
                    "end": 760
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClassInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 761,
                    "end": 787
                  },
                  "optional": false,
                  "computed": false,
                  "start": 747,
                  "end": 787
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 788,
                  "end": 811
                },
                "abstract": false,
                "declare": false,
                "start": 690,
                "end": 811
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 683,
              "end": 811
            }
          ],
          "start": 30,
          "end": 813
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 813
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 813
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 825,
        "end": 838
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
                "name": "publicClassInPrivateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 858,
                "end": 884
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
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 903,
                      "end": 905
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
                        "start": 908,
                        "end": 919
                      },
                      "expression": false,
                      "start": 905,
                      "end": 919
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 895,
                    "end": 919
                  }
                ],
                "start": 885,
                "end": 925
              },
              "abstract": false,
              "declare": false,
              "start": 852,
              "end": 925
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 845,
            "end": 925
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassInPrivateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 937,
              "end": 964
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 965,
              "end": 972
            },
            "abstract": false,
            "declare": false,
            "start": 931,
            "end": 972
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassExtendingPublicClassInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 984,
              "end": 1024
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicClassInPrivateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1033,
              "end": 1059
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1060,
              "end": 1067
            },
            "abstract": false,
            "declare": false,
            "start": 978,
            "end": 1067
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassExtendingPrivateClassInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1078,
              "end": 1119
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassInPrivateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1128,
              "end": 1155
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1156,
              "end": 1163
            },
            "abstract": false,
            "declare": false,
            "start": 1072,
            "end": 1163
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassExtendingPublicClassInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1181,
                "end": 1220
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassInPrivateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1229,
                "end": 1255
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1256,
                "end": 1263
              },
              "abstract": false,
              "declare": false,
              "start": 1175,
              "end": 1263
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1168,
            "end": 1263
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassExtendingPrivateClassInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1281,
                "end": 1321
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassInPrivateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1330,
                "end": 1357
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1358,
                "end": 1366
              },
              "abstract": false,
              "declare": false,
              "start": 1275,
              "end": 1366
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1268,
            "end": 1366
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassExtendingFromPrivateModuleClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 1378,
              "end": 1421
            },
            "typeParameters": null,
            "superClass": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1430,
                "end": 1443
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassInPrivateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1444,
                "end": 1470
              },
              "optional": false,
              "computed": false,
              "start": 1430,
              "end": 1470
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1471,
              "end": 1478
            },
            "abstract": false,
            "declare": false,
            "start": 1372,
            "end": 1478
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassExtendingFromPrivateModuleClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 1496,
                "end": 1538
              },
              "typeParameters": null,
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1547,
                  "end": 1560
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1561,
                  "end": 1587
                },
                "optional": false,
                "computed": false,
                "start": 1547,
                "end": 1587
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1588,
                "end": 1595
              },
              "abstract": false,
              "declare": false,
              "start": 1490,
              "end": 1595
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1483,
            "end": 1595
          }
        ],
        "start": 839,
        "end": 1597
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 815,
      "end": 1597
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1612,
          "end": 1623
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
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1638,
                "end": 1640
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
                  "start": 1643,
                  "end": 1650
                },
                "expression": false,
                "start": 1640,
                "end": 1650
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1630,
              "end": 1650
            }
          ],
          "start": 1624,
          "end": 1652
        },
        "abstract": false,
        "declare": false,
        "start": 1606,
        "end": 1652
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1599,
      "end": 1652
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1660,
        "end": 1672
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1673,
        "end": 1676
      },
      "abstract": false,
      "declare": false,
      "start": 1654,
      "end": 1676
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassExtendingPublicClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1684,
        "end": 1716
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1725,
        "end": 1736
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1737,
        "end": 1740
      },
      "abstract": false,
      "declare": false,
      "start": 1678,
      "end": 1740
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassExtendingPrivateClassInModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 1747,
        "end": 1788
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1797,
        "end": 1809
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1810,
        "end": 1813
      },
      "abstract": false,
      "declare": false,
      "start": 1741,
      "end": 1813
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassExtendingPublicClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1827,
          "end": 1858
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1867,
          "end": 1878
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 1879,
          "end": 1882
        },
        "abstract": false,
        "declare": false,
        "start": 1821,
        "end": 1882
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1814,
      "end": 1882
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassExtendingPrivateClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1896,
          "end": 1928
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "privateClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1937,
          "end": 1949
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 1950,
          "end": 1969
        },
        "abstract": false,
        "declare": false,
        "start": 1890,
        "end": 1969
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1883,
      "end": 1969
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassExtendingFromPrivateModuleClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1977,
        "end": 2020
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "privateModule",
          "optional": false,
          "typeAnnotation": null,
          "start": 2029,
          "end": 2042
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassInPrivateModule",
          "optional": false,
          "typeAnnotation": null,
          "start": 2043,
          "end": 2069
        },
        "optional": false,
        "computed": false,
        "start": 2029,
        "end": 2069
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2070,
        "end": 2073
      },
      "abstract": false,
      "declare": false,
      "start": 1971,
      "end": 2073
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassExtendingFromPrivateModuleClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 2087,
          "end": 2129
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "privateModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 2138,
            "end": 2151
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "publicClassInPrivateModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 2152,
            "end": 2178
          },
          "optional": false,
          "computed": false,
          "start": 2138,
          "end": 2178
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2179,
          "end": 2198
        },
        "abstract": false,
        "declare": false,
        "start": 2081,
        "end": 2198
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2074,
      "end": 2198
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2199
}
```
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
        "name": "publicModuleInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 30
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
                "name": "publicClassInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 75
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
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 94,
                      "end": 96
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
                        "start": 99,
                        "end": 110
                      },
                      "expression": false,
                      "start": 96,
                      "end": 110
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 86,
                    "end": 110
                  }
                ],
                "start": 76,
                "end": 116
              },
              "abstract": false,
              "declare": false,
              "start": 44,
              "end": 116
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 37,
            "end": 116
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassInPublicModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 154
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 155,
              "end": 162
            },
            "abstract": false,
            "declare": false,
            "start": 122,
            "end": 162
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassExtendingPublicClassInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 214
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicClassInPublicModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 248
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 249,
              "end": 256
            },
            "abstract": false,
            "declare": false,
            "start": 168,
            "end": 256
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassExtendingPrivateClassInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 308
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassInPublicModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 343
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 344,
              "end": 351
            },
            "abstract": false,
            "declare": false,
            "start": 261,
            "end": 351
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassExtendingPublicClassInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 408
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 417,
                "end": 442
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 443,
                "end": 450
              },
              "abstract": false,
              "declare": false,
              "start": 363,
              "end": 450
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 356,
            "end": 450
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassExtendingPrivateClassInModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 508
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 517,
                "end": 543
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 544,
                "end": 567
              },
              "abstract": false,
              "declare": false,
              "start": 462,
              "end": 567
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 455,
            "end": 567
          }
        ],
        "start": 31,
        "end": 569
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 569
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicClassInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 576,
        "end": 595
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 596,
        "end": 599
      },
      "abstract": false,
      "declare": false,
      "start": 570,
      "end": 599
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicClassExtendingPublicClassInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 606,
        "end": 645
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicClassInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 654,
        "end": 673
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 674,
        "end": 677
      },
      "abstract": false,
      "declare": false,
      "start": 600,
      "end": 677
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 677
}
```
