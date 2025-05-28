__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2193,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 810,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 810,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 26,
          "decorators": [],
          "name": "publicModule",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 27,
          "end": 810,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 33,
              "end": 112,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 40,
                "end": 112,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 71,
                  "decorators": [],
                  "name": "publicClassInPublicModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 72,
                  "end": 112,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 82,
                      "end": 106,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 92,
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 92,
                        "end": 106,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 95,
                          "end": 106,
                          "body": []
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private"
                    }
                  ]
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
              "start": 118,
              "end": 158,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 124,
                "end": 150,
                "decorators": [],
                "name": "privateClassInPublicModule",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 151,
                "end": 158,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            {
              "type": "ClassDeclaration",
              "start": 164,
              "end": 252,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 170,
                "end": 210,
                "decorators": [],
                "name": "privateClassExtendingPublicClassInModule",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 219,
                "end": 244,
                "decorators": [],
                "name": "publicClassInPublicModule",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 245,
                "end": 252,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            {
              "type": "ClassDeclaration",
              "start": 257,
              "end": 347,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 263,
                "end": 304,
                "decorators": [],
                "name": "privateClassExtendingPrivateClassInModule",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 313,
                "end": 339,
                "decorators": [],
                "name": "privateClassInPublicModule",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 340,
                "end": 347,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 352,
              "end": 446,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 359,
                "end": 446,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 365,
                  "end": 404,
                  "decorators": [],
                  "name": "publicClassExtendingPublicClassInModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 438,
                  "decorators": [],
                  "name": "publicClassInPublicModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 439,
                  "end": 446,
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
              "type": "ExportNamedDeclaration",
              "start": 451,
              "end": 563,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 458,
                "end": 563,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 504,
                  "decorators": [],
                  "name": "publicClassExtendingPrivateClassInModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 539,
                  "decorators": [],
                  "name": "privateClassInPublicModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 540,
                  "end": 563,
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
              "start": 569,
              "end": 675,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 575,
                "end": 618,
                "decorators": [],
                "name": "privateClassExtendingFromPrivateModuleClass",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "MemberExpression",
                "start": 627,
                "end": 667,
                "object": {
                  "type": "Identifier",
                  "start": 627,
                  "end": 640,
                  "decorators": [],
                  "name": "privateModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 641,
                  "end": 667,
                  "decorators": [],
                  "name": "publicClassInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 668,
                "end": 675,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 680,
              "end": 808,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 687,
                "end": 808,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 693,
                  "end": 735,
                  "decorators": [],
                  "name": "publicClassExtendingFromPrivateModuleClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": {
                  "type": "MemberExpression",
                  "start": 744,
                  "end": 784,
                  "object": {
                    "type": "Identifier",
                    "start": 744,
                    "end": 757,
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 758,
                    "end": 784,
                    "decorators": [],
                    "name": "publicClassInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 785,
                  "end": 808,
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 812,
      "end": 1591,
      "id": {
        "type": "Identifier",
        "start": 819,
        "end": 832,
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 833,
        "end": 1591,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 839,
            "end": 919,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 846,
              "end": 919,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 852,
                "end": 878,
                "decorators": [],
                "name": "publicClassInPrivateModule",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 879,
                "end": 919,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 889,
                    "end": 913,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 897,
                      "end": 899,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 899,
                      "end": 913,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 902,
                        "end": 913,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  }
                ]
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
            "start": 925,
            "end": 966,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 931,
              "end": 958,
              "decorators": [],
              "name": "privateClassInPrivateModule",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 959,
              "end": 966,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 972,
            "end": 1061,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 978,
              "end": 1018,
              "decorators": [],
              "name": "privateClassExtendingPublicClassInModule",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 1027,
              "end": 1053,
              "decorators": [],
              "name": "publicClassInPrivateModule",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 1054,
              "end": 1061,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 1066,
            "end": 1157,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1072,
              "end": 1113,
              "decorators": [],
              "name": "privateClassExtendingPrivateClassInModule",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 1122,
              "end": 1149,
              "decorators": [],
              "name": "privateClassInPrivateModule",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 1150,
              "end": 1157,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1162,
            "end": 1257,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1169,
              "end": 1257,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1175,
                "end": 1214,
                "decorators": [],
                "name": "publicClassExtendingPublicClassInModule",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 1223,
                "end": 1249,
                "decorators": [],
                "name": "publicClassInPrivateModule",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 1250,
                "end": 1257,
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
            "type": "ExportNamedDeclaration",
            "start": 1262,
            "end": 1360,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1269,
              "end": 1360,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1275,
                "end": 1315,
                "decorators": [],
                "name": "publicClassExtendingPrivateClassInModule",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 1324,
                "end": 1351,
                "decorators": [],
                "name": "privateClassInPrivateModule",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 1352,
                "end": 1360,
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
            "start": 1366,
            "end": 1472,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1372,
              "end": 1415,
              "decorators": [],
              "name": "privateClassExtendingFromPrivateModuleClass",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "MemberExpression",
              "start": 1424,
              "end": 1464,
              "object": {
                "type": "Identifier",
                "start": 1424,
                "end": 1437,
                "decorators": [],
                "name": "privateModule",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1438,
                "end": 1464,
                "decorators": [],
                "name": "publicClassInPrivateModule",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 1465,
              "end": 1472,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1477,
            "end": 1589,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1484,
              "end": 1589,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1490,
                "end": 1532,
                "decorators": [],
                "name": "publicClassExtendingFromPrivateModuleClass",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "MemberExpression",
                "start": 1541,
                "end": 1581,
                "object": {
                  "type": "Identifier",
                  "start": 1541,
                  "end": 1554,
                  "decorators": [],
                  "name": "privateModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1555,
                  "end": 1581,
                  "decorators": [],
                  "name": "publicClassInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 1582,
                "end": 1589,
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
      "type": "ExportNamedDeclaration",
      "start": 1593,
      "end": 1646,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 1600,
        "end": 1646,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 1606,
          "end": 1617,
          "decorators": [],
          "name": "publicClass",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 1618,
          "end": 1646,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 1624,
              "end": 1644,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1632,
                "end": 1634,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 1634,
                "end": 1644,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 1637,
                  "end": 1644,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private"
            }
          ]
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
      "start": 1648,
      "end": 1670,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1654,
        "end": 1666,
        "decorators": [],
        "name": "privateClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1667,
        "end": 1670,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1672,
      "end": 1734,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1678,
        "end": 1710,
        "decorators": [],
        "name": "privateClassExtendingPublicClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1719,
        "end": 1730,
        "decorators": [],
        "name": "publicClass",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1731,
        "end": 1734,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1735,
      "end": 1807,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1741,
        "end": 1782,
        "decorators": [],
        "name": "privateClassExtendingPrivateClassInModule",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1791,
        "end": 1803,
        "decorators": [],
        "name": "privateClass",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1804,
        "end": 1807,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1808,
      "end": 1876,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 1815,
        "end": 1876,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 1821,
          "end": 1852,
          "decorators": [],
          "name": "publicClassExtendingPublicClass",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "start": 1861,
          "end": 1872,
          "decorators": [],
          "name": "publicClass",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 1873,
          "end": 1876,
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
      "type": "ExportNamedDeclaration",
      "start": 1877,
      "end": 1963,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 1884,
        "end": 1963,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 1890,
          "end": 1922,
          "decorators": [],
          "name": "publicClassExtendingPrivateClass",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "start": 1931,
          "end": 1943,
          "decorators": [],
          "name": "privateClass",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 1944,
          "end": 1963,
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
      "start": 1965,
      "end": 2067,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1971,
        "end": 2014,
        "decorators": [],
        "name": "privateClassExtendingFromPrivateModuleClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 2023,
        "end": 2063,
        "object": {
          "type": "Identifier",
          "start": 2023,
          "end": 2036,
          "decorators": [],
          "name": "privateModule",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 2037,
          "end": 2063,
          "decorators": [],
          "name": "publicClassInPrivateModule",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2064,
        "end": 2067,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2068,
      "end": 2192,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2075,
        "end": 2192,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 2081,
          "end": 2123,
          "decorators": [],
          "name": "publicClassExtendingFromPrivateModuleClass",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "start": 2132,
          "end": 2172,
          "object": {
            "type": "Identifier",
            "start": 2132,
            "end": 2145,
            "decorators": [],
            "name": "privateModule",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2146,
            "end": 2172,
            "decorators": [],
            "name": "publicClassInPrivateModule",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 2173,
          "end": 2192,
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 674,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 566,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 27,
        "decorators": [],
        "name": "publicModuleInGlobal",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 28,
        "end": 566,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 34,
            "end": 113,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 41,
              "end": 113,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 47,
                "end": 72,
                "decorators": [],
                "name": "publicClassInPublicModule",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 73,
                "end": 113,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 83,
                    "end": 107,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 93,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 93,
                      "end": 107,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 96,
                        "end": 107,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  }
                ]
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
            "start": 119,
            "end": 159,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 125,
              "end": 151,
              "decorators": [],
              "name": "privateClassInPublicModule",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 152,
              "end": 159,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 165,
            "end": 253,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 171,
              "end": 211,
              "decorators": [],
              "name": "privateClassExtendingPublicClassInModule",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 220,
              "end": 245,
              "decorators": [],
              "name": "publicClassInPublicModule",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 246,
              "end": 253,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 258,
            "end": 348,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 264,
              "end": 305,
              "decorators": [],
              "name": "privateClassExtendingPrivateClassInModule",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 314,
              "end": 340,
              "decorators": [],
              "name": "privateClassInPublicModule",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 341,
              "end": 348,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 353,
            "end": 447,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 360,
              "end": 447,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 366,
                "end": 405,
                "decorators": [],
                "name": "publicClassExtendingPublicClassInModule",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 414,
                "end": 439,
                "decorators": [],
                "name": "publicClassInPublicModule",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 440,
                "end": 447,
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
            "type": "ExportNamedDeclaration",
            "start": 452,
            "end": 564,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 459,
              "end": 564,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 465,
                "end": 505,
                "decorators": [],
                "name": "publicClassExtendingPrivateClassInModule",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 514,
                "end": 540,
                "decorators": [],
                "name": "privateClassInPublicModule",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 541,
                "end": 564,
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
      "type": "ClassDeclaration",
      "start": 567,
      "end": 596,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 573,
        "end": 592,
        "decorators": [],
        "name": "publicClassInGlobal",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 593,
        "end": 596,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 597,
      "end": 674,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 603,
        "end": 642,
        "decorators": [],
        "name": "publicClassExtendingPublicClassInGlobal",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 651,
        "end": 670,
        "decorators": [],
        "name": "publicClassInGlobal",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 671,
        "end": 674,
        "body": []
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
