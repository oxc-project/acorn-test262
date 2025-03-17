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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 415,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 44,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 49,
            "end": 413,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 68,
              "name": "staticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 68,
              "end": 413,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 87,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "Derived1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 159,
                        "end": 160,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "Derived2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 228,
                        "end": 229,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "Derived3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 297,
                        "end": 298,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 417,
      "end": 881,
      "id": {
        "type": "Identifier",
        "start": 423,
        "end": 431,
        "name": "Derived1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 440,
        "end": 444,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 445,
        "end": 881,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 451,
            "end": 879,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 458,
              "end": 471,
              "name": "staticMethod1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 471,
              "end": 879,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 489,
                        "end": 490,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "Derived1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 583,
                        "end": 584,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "Derived2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 673,
                        "end": 674,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "Derived3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 763,
                        "end": 764,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 883,
      "end": 1347,
      "id": {
        "type": "Identifier",
        "start": 889,
        "end": 897,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 906,
        "end": 910,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 911,
        "end": 1347,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 917,
            "end": 1345,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 924,
              "end": 937,
              "name": "staticMethod2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 937,
              "end": 1345,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 955,
                        "end": 956,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "Derived1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1049,
                        "end": 1050,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "Derived2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1139,
                        "end": 1140,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "Derived3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1229,
                        "end": 1230,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1349,
      "end": 1790,
      "id": {
        "type": "Identifier",
        "start": 1355,
        "end": 1363,
        "name": "Derived3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1372,
        "end": 1380,
        "name": "Derived1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1381,
        "end": 1790,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1387,
            "end": 1414,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1404,
              "end": 1405,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 1419,
            "end": 1788,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1426,
              "end": 1439,
              "name": "staticMethod3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1439,
              "end": 1788,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1457,
                        "end": 1458,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "Derived1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1551,
                        "end": 1552,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "Derived2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1641,
                        "end": 1642,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                        "name": "Derived3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1731,
                        "end": 1732,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "name": "Base",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1798,
          "end": 1799,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
          "name": "Derived1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1912,
          "end": 1913,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
          "name": "Derived2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 2022,
          "end": 2023,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
          "name": "Derived3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 2132,
          "end": 2133,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
