__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2476,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 38,
            "name": "map",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 38,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 19,
                "end": 38,
                "typeName": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 22,
                  "name": "Map",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 22,
                  "end": 38,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 23,
                      "end": 29
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 31,
                      "end": 37
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 70,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 70,
            "name": "set",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 70,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 59,
                "end": 70,
                "typeName": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 62,
                  "name": "Set",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 62,
                  "end": 70,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 63,
                      "end": 69
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 374,
      "end": 419,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 380,
          "end": 418,
          "id": {
            "type": "Identifier",
            "start": 380,
            "end": 390,
            "name": "r1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 382,
              "end": 390,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 384,
                "end": 390
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 393,
            "end": 418,
            "object": {
              "type": "CallExpression",
              "start": 393,
              "end": 412,
              "callee": {
                "type": "MemberExpression",
                "start": 393,
                "end": 410,
                "object": {
                  "type": "CallExpression",
                  "start": 393,
                  "end": 405,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 393,
                    "end": 403,
                    "object": {
                      "type": "Identifier",
                      "start": 393,
                      "end": 396,
                      "name": "map",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 397,
                      "end": 403,
                      "name": "values",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 406,
                  "end": 410,
                  "name": "next",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 413,
              "end": 418,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 638,
      "end": 709,
      "id": {
        "type": "Identifier",
        "start": 648,
        "end": 652,
        "name": "Next",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 652,
        "end": 655,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 653,
            "end": 654,
            "name": {
              "type": "Identifier",
              "start": 653,
              "end": 654,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 656,
        "end": 709,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 662,
            "end": 685,
            "computed": false,
            "optional": true,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 671,
              "end": 675,
              "name": "done",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 676,
              "end": 685,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 678,
                "end": 685
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 690,
            "end": 707,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 699,
              "end": 704,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 704,
              "end": 707,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 706,
                "end": 707,
                "typeName": {
                  "type": "Identifier",
                  "start": 706,
                  "end": 707,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 710,
      "end": 755,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 716,
          "end": 754,
          "id": {
            "type": "Identifier",
            "start": 716,
            "end": 732,
            "name": "r2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 718,
              "end": 732,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 720,
                "end": 732,
                "typeName": {
                  "type": "Identifier",
                  "start": 720,
                  "end": 724,
                  "name": "Next",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 724,
                  "end": 732,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 725,
                      "end": 731
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 735,
            "end": 754,
            "callee": {
              "type": "MemberExpression",
              "start": 735,
              "end": 752,
              "object": {
                "type": "CallExpression",
                "start": 735,
                "end": 747,
                "callee": {
                  "type": "MemberExpression",
                  "start": 735,
                  "end": 745,
                  "object": {
                    "type": "Identifier",
                    "start": 735,
                    "end": 738,
                    "name": "map",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 739,
                    "end": 745,
                    "name": "values",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 748,
                "end": 752,
                "name": "next",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1018,
      "end": 1073,
      "id": {
        "type": "Identifier",
        "start": 1034,
        "end": 1040,
        "name": "source",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1043,
        "end": 1073,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1045,
            "end": 1053,
            "expression": {
              "type": "YieldExpression",
              "start": 1045,
              "end": 1052,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 1051,
                "end": 1052,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1054,
            "end": 1062,
            "expression": {
              "type": "YieldExpression",
              "start": 1054,
              "end": 1061,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 1060,
                "end": 1061,
                "value": 2,
                "raw": "2"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1063,
            "end": 1071,
            "expression": {
              "type": "YieldExpression",
              "start": 1063,
              "end": 1070,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 1069,
                "end": 1070,
                "value": 3,
                "raw": "3"
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1074,
      "end": 1099,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1080,
          "end": 1098,
          "id": {
            "type": "Identifier",
            "start": 1080,
            "end": 1087,
            "name": "doubles",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1090,
            "end": 1098,
            "callee": {
              "type": "Identifier",
              "start": 1090,
              "end": 1096,
              "name": "source",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1100,
      "end": 1117,
      "expression": {
        "type": "CallExpression",
        "start": 1100,
        "end": 1116,
        "callee": {
          "type": "MemberExpression",
          "start": 1100,
          "end": 1114,
          "object": {
            "type": "Identifier",
            "start": 1100,
            "end": 1107,
            "name": "doubles",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1108,
            "end": 1114,
            "name": "return",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1272,
      "end": 1329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1278,
          "end": 1328,
          "id": {
            "type": "Identifier",
            "start": 1278,
            "end": 1300,
            "name": "r3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1280,
              "end": 1300,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1282,
                "end": 1300,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1282,
                    "end": 1288
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1291,
                    "end": 1300
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1303,
            "end": 1328,
            "object": {
              "type": "CallExpression",
              "start": 1303,
              "end": 1322,
              "callee": {
                "type": "MemberExpression",
                "start": 1303,
                "end": 1320,
                "object": {
                  "type": "CallExpression",
                  "start": 1303,
                  "end": 1315,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1303,
                    "end": 1313,
                    "object": {
                      "type": "Identifier",
                      "start": 1303,
                      "end": 1306,
                      "name": "set",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1307,
                      "end": 1313,
                      "name": "values",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1316,
                  "end": 1320,
                  "name": "next",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 1323,
              "end": 1328,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1462,
      "end": 2475,
      "id": {
        "type": "Identifier",
        "start": 1468,
        "end": 1473,
        "name": "MyMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1505,
        "end": 2475,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1511,
            "end": 1543,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1527,
              "end": 1532,
              "name": "_keys",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1532,
              "end": 1542,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1534,
                "end": 1542,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1534,
                  "end": 1540
                }
              }
            },
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 1548,
            "end": 1582,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1564,
              "end": 1571,
              "name": "_values",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1571,
              "end": 1581,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1573,
                "end": 1581,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1573,
                  "end": 1579
                }
              }
            },
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 1587,
            "end": 1608,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1595,
              "end": 1599,
              "name": "size",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1599,
              "end": 1607,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1601,
                "end": 1607
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1613,
            "end": 1650,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 1622,
              "end": 1640,
              "object": {
                "type": "Identifier",
                "start": 1622,
                "end": 1628,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1629,
                "end": 1640,
                "name": "toStringTag",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1641,
              "end": 1649,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1643,
                "end": 1649
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1656,
            "end": 1673,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1656,
              "end": 1661,
              "name": "clear",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1661,
              "end": 1673,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1670,
                "end": 1673,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1663,
                "end": 1669,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1665,
                  "end": 1669
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1678,
            "end": 1724,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1678,
              "end": 1684,
              "name": "delete",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1684,
              "end": 1724,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1685,
                  "end": 1696,
                  "name": "key",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1688,
                    "end": 1696,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1690,
                      "end": 1696
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1707,
                "end": 1724,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1709,
                    "end": 1722,
                    "argument": {
                      "type": "Literal",
                      "start": 1716,
                      "end": 1721,
                      "value": false,
                      "raw": "false"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1697,
                "end": 1706,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1699,
                  "end": 1706
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1729,
            "end": 1837,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1729,
              "end": 1736,
              "name": "forEach",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1736,
              "end": 1837,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1737,
                  "end": 1811,
                  "name": "callbackfn",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1747,
                    "end": 1811,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1749,
                      "end": 1811,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1750,
                          "end": 1763,
                          "name": "value",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1755,
                            "end": 1763,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1757,
                              "end": 1763
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 1765,
                          "end": 1776,
                          "name": "key",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1768,
                            "end": 1776,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1770,
                              "end": 1776
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 1778,
                          "end": 1802,
                          "name": "map",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1781,
                            "end": 1802,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1783,
                              "end": 1802,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1783,
                                "end": 1786,
                                "name": "Map",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1786,
                                "end": 1802,
                                "params": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 1787,
                                    "end": 1793
                                  },
                                  {
                                    "type": "TSNumberKeyword",
                                    "start": 1795,
                                    "end": 1801
                                  }
                                ]
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1804,
                        "end": 1811,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1807,
                          "end": 1811
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1813,
                  "end": 1826,
                  "name": "thisArg",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1821,
                    "end": 1826,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1823,
                      "end": 1826
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1834,
                "end": 1837,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1827,
                "end": 1833,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1829,
                  "end": 1833
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1842,
            "end": 1900,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1842,
              "end": 1845,
              "name": "get",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1845,
              "end": 1900,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1846,
                  "end": 1857,
                  "name": "key",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1849,
                    "end": 1857,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1851,
                      "end": 1857
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1879,
                "end": 1900,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1881,
                    "end": 1898,
                    "argument": {
                      "type": "Identifier",
                      "start": 1888,
                      "end": 1897,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1858,
                "end": 1878,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 1860,
                  "end": 1878,
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1860,
                      "end": 1866
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 1869,
                      "end": 1878
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1905,
            "end": 1948,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1905,
              "end": 1908,
              "name": "has",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1908,
              "end": 1948,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1909,
                  "end": 1920,
                  "name": "key",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1912,
                    "end": 1920,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1914,
                      "end": 1920
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1931,
                "end": 1948,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1933,
                    "end": 1946,
                    "argument": {
                      "type": "Literal",
                      "start": 1940,
                      "end": 1945,
                      "value": false,
                      "raw": "false"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1921,
                "end": 1930,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1923,
                  "end": 1930
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1953,
            "end": 2007,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1953,
              "end": 1956,
              "name": "set",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1956,
              "end": 2007,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1957,
                  "end": 1968,
                  "name": "key",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1960,
                    "end": 1968,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1962,
                      "end": 1968
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1970,
                  "end": 1983,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1975,
                    "end": 1983,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1977,
                      "end": 1983
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1991,
                "end": 2007,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1993,
                    "end": 2005,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 2000,
                      "end": 2004
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1984,
                "end": 1990,
                "typeAnnotation": {
                  "type": "TSThisType",
                  "start": 1986,
                  "end": 1990
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2012,
            "end": 2100,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2012,
              "end": 2019,
              "name": "entries",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2019,
              "end": 2100,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2053,
                "end": 2100,
                "body": [
                  {
                    "type": "ThrowStatement",
                    "start": 2055,
                    "end": 2098,
                    "argument": {
                      "type": "NewExpression",
                      "start": 2061,
                      "end": 2097,
                      "callee": {
                        "type": "Identifier",
                        "start": 2065,
                        "end": 2070,
                        "name": "Error",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 2071,
                          "end": 2096,
                          "value": "Method not implemented.",
                          "raw": "\"Method not implemented.\""
                        }
                      ],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2021,
                "end": 2052,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2023,
                  "end": 2052,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2023,
                    "end": 2034,
                    "name": "MapIterator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2034,
                    "end": 2052,
                    "params": [
                      {
                        "type": "TSTupleType",
                        "start": 2035,
                        "end": 2051,
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 2036,
                            "end": 2042
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 2044,
                            "end": 2050
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2105,
            "end": 2180,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2105,
              "end": 2109,
              "name": "keys",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2109,
              "end": 2180,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2133,
                "end": 2180,
                "body": [
                  {
                    "type": "ThrowStatement",
                    "start": 2135,
                    "end": 2178,
                    "argument": {
                      "type": "NewExpression",
                      "start": 2141,
                      "end": 2177,
                      "callee": {
                        "type": "Identifier",
                        "start": 2145,
                        "end": 2150,
                        "name": "Error",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 2151,
                          "end": 2176,
                          "value": "Method not implemented.",
                          "raw": "\"Method not implemented.\""
                        }
                      ],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2111,
                "end": 2132,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2113,
                  "end": 2132,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2113,
                    "end": 2124,
                    "name": "MapIterator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2124,
                    "end": 2132,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2125,
                        "end": 2131
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2185,
            "end": 2283,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 2186,
              "end": 2201,
              "object": {
                "type": "Identifier",
                "start": 2186,
                "end": 2192,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2193,
                "end": 2201,
                "name": "iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2202,
              "end": 2283,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2236,
                "end": 2283,
                "body": [
                  {
                    "type": "ThrowStatement",
                    "start": 2238,
                    "end": 2281,
                    "argument": {
                      "type": "NewExpression",
                      "start": 2244,
                      "end": 2280,
                      "callee": {
                        "type": "Identifier",
                        "start": 2248,
                        "end": 2253,
                        "name": "Error",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 2254,
                          "end": 2279,
                          "value": "Method not implemented.",
                          "raw": "\"Method not implemented.\""
                        }
                      ],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2204,
                "end": 2235,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2206,
                  "end": 2235,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2206,
                    "end": 2217,
                    "name": "MapIterator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2217,
                    "end": 2235,
                    "params": [
                      {
                        "type": "TSTupleType",
                        "start": 2218,
                        "end": 2234,
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 2219,
                            "end": 2225
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 2227,
                            "end": 2233
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2426,
            "end": 2473,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2428,
              "end": 2434,
              "name": "values",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2434,
              "end": 2473,
              "id": null,
              "expression": false,
              "generator": true,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2437,
                "end": 2473,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2447,
                    "end": 2467,
                    "expression": {
                      "type": "YieldExpression",
                      "start": 2447,
                      "end": 2466,
                      "delegate": true,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 2454,
                        "end": 2466,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2454,
                          "end": 2458
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2459,
                          "end": 2466,
                          "name": "_values",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 1485,
          "end": 1504,
          "expression": {
            "type": "Identifier",
            "start": 1485,
            "end": 1488,
            "name": "Map",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1488,
            "end": 1504,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1489,
                "end": 1495
              },
              {
                "type": "TSNumberKeyword",
                "start": 1497,
                "end": 1503
              }
            ]
          }
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
