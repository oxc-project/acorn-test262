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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 37,
                "end": 43
              },
              "start": 35,
              "end": 43
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 17,
            "end": 44
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 68
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 81,
                        "end": 85
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 86,
                        "end": 87
                      },
                      "optional": false,
                      "computed": false,
                      "start": 81,
                      "end": 87
                    },
                    "directive": null,
                    "start": 81,
                    "end": 88
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 150,
                        "end": 158
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 159,
                        "end": 160
                      },
                      "optional": false,
                      "computed": false,
                      "start": 150,
                      "end": 160
                    },
                    "directive": null,
                    "start": 150,
                    "end": 161
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 219,
                        "end": 227
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 228,
                        "end": 229
                      },
                      "optional": false,
                      "computed": false,
                      "start": 219,
                      "end": 229
                    },
                    "directive": null,
                    "start": 219,
                    "end": 230
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 288,
                        "end": 296
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 297,
                        "end": 298
                      },
                      "optional": false,
                      "computed": false,
                      "start": 288,
                      "end": 298
                    },
                    "directive": null,
                    "start": 288,
                    "end": 299
                  }
                ],
                "start": 71,
                "end": 413
              },
              "expression": false,
              "start": 68,
              "end": 413
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 49,
            "end": 413
          }
        ],
        "start": 11,
        "end": 415
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 415
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 423,
        "end": 431
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 440,
        "end": 444
      },
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
              "name": "staticMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 458,
              "end": 471
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 484,
                        "end": 488
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 489,
                        "end": 490
                      },
                      "optional": false,
                      "computed": false,
                      "start": 484,
                      "end": 490
                    },
                    "directive": null,
                    "start": 484,
                    "end": 491
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 574,
                        "end": 582
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 583,
                        "end": 584
                      },
                      "optional": false,
                      "computed": false,
                      "start": 574,
                      "end": 584
                    },
                    "directive": null,
                    "start": 574,
                    "end": 585
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 664,
                        "end": 672
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 673,
                        "end": 674
                      },
                      "optional": false,
                      "computed": false,
                      "start": 664,
                      "end": 674
                    },
                    "directive": null,
                    "start": 664,
                    "end": 675
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 754,
                        "end": 762
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 763,
                        "end": 764
                      },
                      "optional": false,
                      "computed": false,
                      "start": 754,
                      "end": 764
                    },
                    "directive": null,
                    "start": 754,
                    "end": 765
                  }
                ],
                "start": 474,
                "end": 879
              },
              "expression": false,
              "start": 471,
              "end": 879
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 451,
            "end": 879
          }
        ],
        "start": 445,
        "end": 881
      },
      "abstract": false,
      "declare": false,
      "start": 417,
      "end": 881
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 889,
        "end": 897
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 906,
        "end": 910
      },
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
              "name": "staticMethod2",
              "optional": false,
              "typeAnnotation": null,
              "start": 924,
              "end": 937
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 950,
                        "end": 954
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 955,
                        "end": 956
                      },
                      "optional": false,
                      "computed": false,
                      "start": 950,
                      "end": 956
                    },
                    "directive": null,
                    "start": 950,
                    "end": 957
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1040,
                        "end": 1048
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1049,
                        "end": 1050
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1040,
                      "end": 1050
                    },
                    "directive": null,
                    "start": 1040,
                    "end": 1051
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1130,
                        "end": 1138
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1139,
                        "end": 1140
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1130,
                      "end": 1140
                    },
                    "directive": null,
                    "start": 1130,
                    "end": 1141
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1220,
                        "end": 1228
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1229,
                        "end": 1230
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1220,
                      "end": 1230
                    },
                    "directive": null,
                    "start": 1220,
                    "end": 1231
                  }
                ],
                "start": 940,
                "end": 1345
              },
              "expression": false,
              "start": 937,
              "end": 1345
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 917,
            "end": 1345
          }
        ],
        "start": 911,
        "end": 1347
      },
      "abstract": false,
      "declare": false,
      "start": 883,
      "end": 1347
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1355,
        "end": 1363
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1372,
        "end": 1380
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1404,
              "end": 1405
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1407,
                "end": 1413
              },
              "start": 1405,
              "end": 1413
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 1387,
            "end": 1414
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticMethod3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1426,
              "end": 1439
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1452,
                        "end": 1456
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1457,
                        "end": 1458
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1452,
                      "end": 1458
                    },
                    "directive": null,
                    "start": 1452,
                    "end": 1459
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1542,
                        "end": 1550
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1551,
                        "end": 1552
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1542,
                      "end": 1552
                    },
                    "directive": null,
                    "start": 1542,
                    "end": 1553
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1632,
                        "end": 1640
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1641,
                        "end": 1642
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1632,
                      "end": 1642
                    },
                    "directive": null,
                    "start": 1632,
                    "end": 1643
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1722,
                        "end": 1730
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1731,
                        "end": 1732
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1722,
                      "end": 1732
                    },
                    "directive": null,
                    "start": 1722,
                    "end": 1733
                  }
                ],
                "start": 1442,
                "end": 1788
              },
              "expression": false,
              "start": 1439,
              "end": 1788
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1419,
            "end": 1788
          }
        ],
        "start": 1381,
        "end": 1790
      },
      "abstract": false,
      "declare": false,
      "start": 1349,
      "end": 1790
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null,
          "start": 1793,
          "end": 1797
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1798,
          "end": 1799
        },
        "optional": false,
        "computed": false,
        "start": 1793,
        "end": 1799
      },
      "directive": null,
      "start": 1793,
      "end": 1800
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1903,
          "end": 1911
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1912,
          "end": 1913
        },
        "optional": false,
        "computed": false,
        "start": 1903,
        "end": 1913
      },
      "directive": null,
      "start": 1903,
      "end": 1914
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2013,
          "end": 2021
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 2022,
          "end": 2023
        },
        "optional": false,
        "computed": false,
        "start": 2013,
        "end": 2023
      },
      "directive": null,
      "start": 2013,
      "end": 2024
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2123,
          "end": 2131
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 2132,
          "end": 2133
        },
        "optional": false,
        "computed": false,
        "start": 2123,
        "end": 2133
      },
      "directive": null,
      "start": 2123,
      "end": 2134
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2232
}
```
