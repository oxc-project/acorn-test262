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
          "start": 14,
          "end": 26
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
                  "start": 46,
                  "end": 71
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
                        "start": 90,
                        "end": 92
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
                          "start": 95,
                          "end": 106
                        },
                        "expression": false,
                        "start": 92,
                        "end": 106
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 82,
                      "end": 106
                    }
                  ],
                  "start": 72,
                  "end": 112
                },
                "abstract": false,
                "declare": false,
                "start": 40,
                "end": 112
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 33,
              "end": 112
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
                "start": 124,
                "end": 150
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 151,
                "end": 158
              },
              "abstract": false,
              "declare": false,
              "start": 118,
              "end": 158
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
                "start": 170,
                "end": 210
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 244
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 245,
                "end": 252
              },
              "abstract": false,
              "declare": false,
              "start": 164,
              "end": 252
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
                "start": 263,
                "end": 304
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 339
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 340,
                "end": 347
              },
              "abstract": false,
              "declare": false,
              "start": 257,
              "end": 347
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
                  "start": 365,
                  "end": 404
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInPublicModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 413,
                  "end": 438
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 439,
                  "end": 446
                },
                "abstract": false,
                "declare": false,
                "start": 359,
                "end": 446
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 352,
              "end": 446
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
                  "start": 464,
                  "end": 504
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClassInPublicModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 513,
                  "end": 539
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 540,
                  "end": 563
                },
                "abstract": false,
                "declare": false,
                "start": 458,
                "end": 563
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 451,
              "end": 563
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
                "start": 575,
                "end": 618
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
                  "start": 627,
                  "end": 640
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 641,
                  "end": 667
                },
                "optional": false,
                "computed": false,
                "start": 627,
                "end": 667
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 668,
                "end": 675
              },
              "abstract": false,
              "declare": false,
              "start": 569,
              "end": 675
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
                  "start": 693,
                  "end": 735
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
                    "start": 744,
                    "end": 757
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClassInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 758,
                    "end": 784
                  },
                  "optional": false,
                  "computed": false,
                  "start": 744,
                  "end": 784
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 785,
                  "end": 808
                },
                "abstract": false,
                "declare": false,
                "start": 687,
                "end": 808
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 680,
              "end": 808
            }
          ],
          "start": 27,
          "end": 810
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 810
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 810
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 819,
        "end": 832
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
                "start": 852,
                "end": 878
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
                      "start": 897,
                      "end": 899
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
                        "start": 902,
                        "end": 913
                      },
                      "expression": false,
                      "start": 899,
                      "end": 913
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 889,
                    "end": 913
                  }
                ],
                "start": 879,
                "end": 919
              },
              "abstract": false,
              "declare": false,
              "start": 846,
              "end": 919
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 839,
            "end": 919
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
              "start": 931,
              "end": 958
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 959,
              "end": 966
            },
            "abstract": false,
            "declare": false,
            "start": 925,
            "end": 966
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
              "start": 978,
              "end": 1018
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicClassInPrivateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1027,
              "end": 1053
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1054,
              "end": 1061
            },
            "abstract": false,
            "declare": false,
            "start": 972,
            "end": 1061
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
              "start": 1072,
              "end": 1113
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassInPrivateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1122,
              "end": 1149
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1150,
              "end": 1157
            },
            "abstract": false,
            "declare": false,
            "start": 1066,
            "end": 1157
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
                "start": 1175,
                "end": 1214
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassInPrivateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1223,
                "end": 1249
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1250,
                "end": 1257
              },
              "abstract": false,
              "declare": false,
              "start": 1169,
              "end": 1257
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1162,
            "end": 1257
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
                "start": 1275,
                "end": 1315
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassInPrivateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1324,
                "end": 1351
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1352,
                "end": 1360
              },
              "abstract": false,
              "declare": false,
              "start": 1269,
              "end": 1360
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1262,
            "end": 1360
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
              "start": 1372,
              "end": 1415
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
                "start": 1424,
                "end": 1437
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassInPrivateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1438,
                "end": 1464
              },
              "optional": false,
              "computed": false,
              "start": 1424,
              "end": 1464
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1465,
              "end": 1472
            },
            "abstract": false,
            "declare": false,
            "start": 1366,
            "end": 1472
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
                "start": 1490,
                "end": 1532
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
                  "start": 1541,
                  "end": 1554
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1555,
                  "end": 1581
                },
                "optional": false,
                "computed": false,
                "start": 1541,
                "end": 1581
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1582,
                "end": 1589
              },
              "abstract": false,
              "declare": false,
              "start": 1484,
              "end": 1589
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1477,
            "end": 1589
          }
        ],
        "start": 833,
        "end": 1591
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 812,
      "end": 1591
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
          "start": 1606,
          "end": 1617
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
                "start": 1632,
                "end": 1634
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
                  "start": 1637,
                  "end": 1644
                },
                "expression": false,
                "start": 1634,
                "end": 1644
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1624,
              "end": 1644
            }
          ],
          "start": 1618,
          "end": 1646
        },
        "abstract": false,
        "declare": false,
        "start": 1600,
        "end": 1646
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1593,
      "end": 1646
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
        "start": 1654,
        "end": 1666
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1667,
        "end": 1670
      },
      "abstract": false,
      "declare": false,
      "start": 1648,
      "end": 1670
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
        "start": 1678,
        "end": 1710
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1719,
        "end": 1730
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1731,
        "end": 1734
      },
      "abstract": false,
      "declare": false,
      "start": 1672,
      "end": 1734
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
        "start": 1741,
        "end": 1782
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1791,
        "end": 1803
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1804,
        "end": 1807
      },
      "abstract": false,
      "declare": false,
      "start": 1735,
      "end": 1807
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
          "start": 1821,
          "end": 1852
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1861,
          "end": 1872
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 1873,
          "end": 1876
        },
        "abstract": false,
        "declare": false,
        "start": 1815,
        "end": 1876
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1808,
      "end": 1876
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
          "start": 1890,
          "end": 1922
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "privateClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1931,
          "end": 1943
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 1944,
          "end": 1963
        },
        "abstract": false,
        "declare": false,
        "start": 1884,
        "end": 1963
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1877,
      "end": 1963
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
        "start": 1971,
        "end": 2014
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
          "start": 2023,
          "end": 2036
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassInPrivateModule",
          "optional": false,
          "typeAnnotation": null,
          "start": 2037,
          "end": 2063
        },
        "optional": false,
        "computed": false,
        "start": 2023,
        "end": 2063
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2064,
        "end": 2067
      },
      "abstract": false,
      "declare": false,
      "start": 1965,
      "end": 2067
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
          "start": 2081,
          "end": 2123
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
            "start": 2132,
            "end": 2145
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "publicClassInPrivateModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 2146,
            "end": 2172
          },
          "optional": false,
          "computed": false,
          "start": 2132,
          "end": 2172
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2173,
          "end": 2192
        },
        "abstract": false,
        "declare": false,
        "start": 2075,
        "end": 2192
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2068,
      "end": 2192
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2193
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
        "start": 7,
        "end": 27
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
                "start": 47,
                "end": 72
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
                      "start": 91,
                      "end": 93
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
                        "start": 96,
                        "end": 107
                      },
                      "expression": false,
                      "start": 93,
                      "end": 107
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 83,
                    "end": 107
                  }
                ],
                "start": 73,
                "end": 113
              },
              "abstract": false,
              "declare": false,
              "start": 41,
              "end": 113
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 34,
            "end": 113
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
              "start": 125,
              "end": 151
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 152,
              "end": 159
            },
            "abstract": false,
            "declare": false,
            "start": 119,
            "end": 159
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
              "start": 171,
              "end": 211
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicClassInPublicModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 245
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 246,
              "end": 253
            },
            "abstract": false,
            "declare": false,
            "start": 165,
            "end": 253
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
              "start": 264,
              "end": 305
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassInPublicModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 340
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 341,
              "end": 348
            },
            "abstract": false,
            "declare": false,
            "start": 258,
            "end": 348
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
                "start": 366,
                "end": 405
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 414,
                "end": 439
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 440,
                "end": 447
              },
              "abstract": false,
              "declare": false,
              "start": 360,
              "end": 447
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 353,
            "end": 447
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
                "start": 465,
                "end": 505
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 540
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 541,
                "end": 564
              },
              "abstract": false,
              "declare": false,
              "start": 459,
              "end": 564
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 452,
            "end": 564
          }
        ],
        "start": 28,
        "end": 566
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 566
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
        "start": 573,
        "end": 592
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 593,
        "end": 596
      },
      "abstract": false,
      "declare": false,
      "start": 567,
      "end": 596
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
        "start": 603,
        "end": 642
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicClassInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 651,
        "end": 670
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 671,
        "end": 674
      },
      "abstract": false,
      "declare": false,
      "start": 597,
      "end": 674
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 674
}
```
