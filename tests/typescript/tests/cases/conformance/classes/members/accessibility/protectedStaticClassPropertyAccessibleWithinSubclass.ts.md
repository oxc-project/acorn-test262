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
    "value": "Base",
    "start": 6,
    "end": 10,
    "range": [
      6,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 17,
    "end": 26,
    "range": [
      17,
      26
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 27,
    "end": 33,
    "range": [
      27,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 37,
    "end": 43,
    "range": [
      37,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 49,
    "end": 55,
    "range": [
      49,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "staticMethod",
    "start": 56,
    "end": 68,
    "range": [
      56,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 81,
    "end": 85,
    "range": [
      81,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 150,
    "end": 158,
    "range": [
      150,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 219,
    "end": 227,
    "range": [
      219,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 288,
    "end": 296,
    "range": [
      288,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 417,
    "end": 422,
    "range": [
      417,
      422
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 423,
    "end": 431,
    "range": [
      423,
      431
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 432,
    "end": 439,
    "range": [
      432,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 440,
    "end": 444,
    "range": [
      440,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 451,
    "end": 457,
    "range": [
      451,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "staticMethod1",
    "start": 458,
    "end": 471,
    "range": [
      458,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 484,
    "end": 488,
    "range": [
      484,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 574,
    "end": 582,
    "range": [
      574,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 664,
    "end": 672,
    "range": [
      664,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 754,
    "end": 762,
    "range": [
      754,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 883,
    "end": 888,
    "range": [
      883,
      888
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 889,
    "end": 897,
    "range": [
      889,
      897
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 898,
    "end": 905,
    "range": [
      898,
      905
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 906,
    "end": 910,
    "range": [
      906,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 917,
    "end": 923,
    "range": [
      917,
      923
    ]
  },
  {
    "type": "Identifier",
    "value": "staticMethod2",
    "start": 924,
    "end": 937,
    "range": [
      924,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 950,
    "end": 954,
    "range": [
      950,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 1040,
    "end": 1048,
    "range": [
      1040,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1130,
    "end": 1138,
    "range": [
      1130,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 1220,
    "end": 1228,
    "range": [
      1220,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1230,
    "end": 1231,
    "range": [
      1230,
      1231
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1349,
    "end": 1354,
    "range": [
      1349,
      1354
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 1355,
    "end": 1363,
    "range": [
      1355,
      1363
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1364,
    "end": 1371,
    "range": [
      1364,
      1371
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 1372,
    "end": 1380,
    "range": [
      1372,
      1380
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1381,
    "end": 1382,
    "range": [
      1381,
      1382
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1387,
    "end": 1396,
    "range": [
      1387,
      1396
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1397,
    "end": 1403,
    "range": [
      1397,
      1403
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1404,
    "end": 1405,
    "range": [
      1404,
      1405
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1405,
    "end": 1406,
    "range": [
      1405,
      1406
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1407,
    "end": 1413,
    "range": [
      1407,
      1413
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1419,
    "end": 1425,
    "range": [
      1419,
      1425
    ]
  },
  {
    "type": "Identifier",
    "value": "staticMethod3",
    "start": 1426,
    "end": 1439,
    "range": [
      1426,
      1439
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1439,
    "end": 1440,
    "range": [
      1439,
      1440
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1440,
    "end": 1441,
    "range": [
      1440,
      1441
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1452,
    "end": 1456,
    "range": [
      1452,
      1456
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1456,
    "end": 1457,
    "range": [
      1456,
      1457
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1457,
    "end": 1458,
    "range": [
      1457,
      1458
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1458,
    "end": 1459,
    "range": [
      1458,
      1459
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 1542,
    "end": 1550,
    "range": [
      1542,
      1550
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1551,
    "end": 1552,
    "range": [
      1551,
      1552
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1552,
    "end": 1553,
    "range": [
      1552,
      1553
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1632,
    "end": 1640,
    "range": [
      1632,
      1640
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1641,
    "end": 1642,
    "range": [
      1641,
      1642
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1642,
    "end": 1643,
    "range": [
      1642,
      1643
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 1722,
    "end": 1730,
    "range": [
      1722,
      1730
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1730,
    "end": 1731,
    "range": [
      1730,
      1731
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1731,
    "end": 1732,
    "range": [
      1731,
      1732
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1732,
    "end": 1733,
    "range": [
      1732,
      1733
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1787,
    "end": 1788,
    "range": [
      1787,
      1788
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1789,
    "end": 1790,
    "range": [
      1789,
      1790
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1793,
    "end": 1797,
    "range": [
      1793,
      1797
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1799,
    "end": 1800,
    "range": [
      1799,
      1800
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 1903,
    "end": 1911,
    "range": [
      1903,
      1911
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1911,
    "end": 1912,
    "range": [
      1911,
      1912
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1912,
    "end": 1913,
    "range": [
      1912,
      1913
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1913,
    "end": 1914,
    "range": [
      1913,
      1914
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 2013,
    "end": 2021,
    "range": [
      2013,
      2021
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2021,
    "end": 2022,
    "range": [
      2021,
      2022
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2022,
    "end": 2023,
    "range": [
      2022,
      2023
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2023,
    "end": 2024,
    "range": [
      2023,
      2024
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 2123,
    "end": 2131,
    "range": [
      2123,
      2131
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2132,
    "end": 2133,
    "range": [
      2132,
      2133
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2133,
    "end": 2134,
    "range": [
      2133,
      2134
    ]
  }
]
```
