__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2232,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 415,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 415,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 44,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 43,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 37,
                "end": 43
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 49,
            "end": 413,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 68,
              "decorators": [],
              "name": "staticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 68,
              "end": 413,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 71,
                "end": 413,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 81,
                    "end": 88,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 81,
                      "end": 87,
                      "object": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 85,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 87,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 150,
                    "end": 161,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 150,
                      "end": 160,
                      "object": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 158,
                        "decorators": [],
                        "name": "Derived1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 159,
                        "end": 160,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 219,
                    "end": 230,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 219,
                      "end": 229,
                      "object": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 227,
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 228,
                        "end": 229,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 288,
                    "end": 299,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 288,
                      "end": 298,
                      "object": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 296,
                        "decorators": [],
                        "name": "Derived3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 297,
                        "end": 298,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 417,
      "end": 881,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 423,
        "end": 431,
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 440,
        "end": 444,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 445,
        "end": 881,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 451,
            "end": 879,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 458,
              "end": 471,
              "decorators": [],
              "name": "staticMethod1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 471,
              "end": 879,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 474,
                "end": 879,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 484,
                    "end": 491,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 484,
                      "end": 490,
                      "object": {
                        "type": "Identifier",
                        "start": 484,
                        "end": 488,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 489,
                        "end": 490,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 574,
                    "end": 585,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 574,
                      "end": 584,
                      "object": {
                        "type": "Identifier",
                        "start": 574,
                        "end": 582,
                        "decorators": [],
                        "name": "Derived1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 583,
                        "end": 584,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 664,
                    "end": 675,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 664,
                      "end": 674,
                      "object": {
                        "type": "Identifier",
                        "start": 664,
                        "end": 672,
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 673,
                        "end": 674,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 754,
                    "end": 765,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 754,
                      "end": 764,
                      "object": {
                        "type": "Identifier",
                        "start": 754,
                        "end": 762,
                        "decorators": [],
                        "name": "Derived3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 763,
                        "end": 764,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 883,
      "end": 1347,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 889,
        "end": 897,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 906,
        "end": 910,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 911,
        "end": 1347,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 917,
            "end": 1345,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 924,
              "end": 937,
              "decorators": [],
              "name": "staticMethod2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 937,
              "end": 1345,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 940,
                "end": 1345,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 950,
                    "end": 957,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 950,
                      "end": 956,
                      "object": {
                        "type": "Identifier",
                        "start": 950,
                        "end": 954,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 955,
                        "end": 956,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1040,
                    "end": 1051,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1040,
                      "end": 1050,
                      "object": {
                        "type": "Identifier",
                        "start": 1040,
                        "end": 1048,
                        "decorators": [],
                        "name": "Derived1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1049,
                        "end": 1050,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1130,
                    "end": 1141,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1130,
                      "end": 1140,
                      "object": {
                        "type": "Identifier",
                        "start": 1130,
                        "end": 1138,
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1139,
                        "end": 1140,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1220,
                    "end": 1231,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1220,
                      "end": 1230,
                      "object": {
                        "type": "Identifier",
                        "start": 1220,
                        "end": 1228,
                        "decorators": [],
                        "name": "Derived3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1229,
                        "end": 1230,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1349,
      "end": 1790,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1355,
        "end": 1363,
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1372,
        "end": 1380,
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1381,
        "end": 1790,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1387,
            "end": 1414,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1404,
              "end": 1405,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1405,
              "end": 1413,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1407,
                "end": 1413
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 1419,
            "end": 1788,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1426,
              "end": 1439,
              "decorators": [],
              "name": "staticMethod3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1439,
              "end": 1788,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1442,
                "end": 1788,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1452,
                    "end": 1459,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1452,
                      "end": 1458,
                      "object": {
                        "type": "Identifier",
                        "start": 1452,
                        "end": 1456,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1457,
                        "end": 1458,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1542,
                    "end": 1553,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1542,
                      "end": 1552,
                      "object": {
                        "type": "Identifier",
                        "start": 1542,
                        "end": 1550,
                        "decorators": [],
                        "name": "Derived1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1551,
                        "end": 1552,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1632,
                    "end": 1643,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1632,
                      "end": 1642,
                      "object": {
                        "type": "Identifier",
                        "start": 1632,
                        "end": 1640,
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1641,
                        "end": 1642,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1722,
                    "end": 1733,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1722,
                      "end": 1732,
                      "object": {
                        "type": "Identifier",
                        "start": 1722,
                        "end": 1730,
                        "decorators": [],
                        "name": "Derived3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1731,
                        "end": 1732,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1793,
      "end": 1800,
      "expression": {
        "type": "MemberExpression",
        "start": 1793,
        "end": 1799,
        "object": {
          "type": "Identifier",
          "start": 1793,
          "end": 1797,
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 1798,
          "end": 1799,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1903,
      "end": 1914,
      "expression": {
        "type": "MemberExpression",
        "start": 1903,
        "end": 1913,
        "object": {
          "type": "Identifier",
          "start": 1903,
          "end": 1911,
          "decorators": [],
          "name": "Derived1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 1912,
          "end": 1913,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2013,
      "end": 2024,
      "expression": {
        "type": "MemberExpression",
        "start": 2013,
        "end": 2023,
        "object": {
          "type": "Identifier",
          "start": 2013,
          "end": 2021,
          "decorators": [],
          "name": "Derived2",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 2022,
          "end": 2023,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2123,
      "end": 2134,
      "expression": {
        "type": "MemberExpression",
        "start": 2123,
        "end": 2133,
        "object": {
          "type": "Identifier",
          "start": 2123,
          "end": 2131,
          "decorators": [],
          "name": "Derived3",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 2132,
          "end": 2133,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
