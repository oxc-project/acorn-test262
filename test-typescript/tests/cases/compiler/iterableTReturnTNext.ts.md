__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2475,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 38,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 38,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 19,
                "end": 38,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 22,
                  "decorators": [],
                  "name": "Map",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 70,
            "decorators": [],
            "name": "set",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 70,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 59,
                "end": 70,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 62,
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 380,
            "end": 390,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 382,
              "end": 390,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 384,
                "end": 390
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 393,
            "end": 418,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 393,
              "end": 412,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 393,
                "end": 410,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 393,
                  "end": 405,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 393,
                    "end": 403,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 393,
                      "end": 396,
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 397,
                      "end": 403,
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 406,
                  "end": 410,
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 413,
              "end": 418,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 638,
      "end": 709,
      "body": {
        "type": "TSInterfaceBody",
        "start": 656,
        "end": 709,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 662,
            "end": 685,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 671,
              "end": 675,
              "decorators": [],
              "name": "done",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 676,
              "end": 685,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 678,
                "end": 685
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 690,
            "end": 707,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 699,
              "end": 704,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 704,
              "end": 707,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 706,
                "end": 707,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 706,
                  "end": 707,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 648,
        "end": 652,
        "decorators": [],
        "name": "Next",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 652,
        "end": 655,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 653,
            "end": 654,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 653,
              "end": 654,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 716,
            "end": 732,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 718,
              "end": 732,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 720,
                "end": 732,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 720,
                  "end": 724,
                  "decorators": [],
                  "name": "Next",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 735,
            "end": 754,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 735,
              "end": 752,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 735,
                "end": 747,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 735,
                  "end": 745,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 735,
                    "end": 738,
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 739,
                    "end": 745,
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 748,
                "end": 752,
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1018,
      "end": 1073,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1043,
        "end": 1073,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1045,
            "end": 1053,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 1045,
              "end": 1052,
              "argument": {
                "type": "Literal",
                "start": 1051,
                "end": 1052,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              "delegate": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1054,
            "end": 1062,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 1054,
              "end": 1061,
              "argument": {
                "type": "Literal",
                "start": 1060,
                "end": 1061,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              },
              "delegate": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1063,
            "end": 1071,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 1063,
              "end": 1070,
              "argument": {
                "type": "Literal",
                "start": 1069,
                "end": 1070,
                "raw": "3",
                "value": 3,
                "regex": null,
                "bigint": null
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 1034,
        "end": 1040,
        "decorators": [],
        "name": "source",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1080,
            "end": 1087,
            "decorators": [],
            "name": "doubles",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1090,
            "end": 1098,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1090,
              "end": 1096,
              "decorators": [],
              "name": "source",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1100,
      "end": 1117,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1100,
        "end": 1116,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 1100,
          "end": 1114,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1100,
            "end": 1107,
            "decorators": [],
            "name": "doubles",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1108,
            "end": 1114,
            "decorators": [],
            "name": "return",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1278,
            "end": 1300,
            "decorators": [],
            "name": "r3",
            "optional": false,
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
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 1303,
            "end": 1328,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 1303,
              "end": 1322,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 1303,
                "end": 1320,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 1303,
                  "end": 1315,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1303,
                    "end": 1313,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1303,
                      "end": 1306,
                      "decorators": [],
                      "name": "set",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1307,
                      "end": 1313,
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1316,
                  "end": 1320,
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1323,
              "end": 1328,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 1462,
      "end": 2475,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1505,
        "end": 2475,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1511,
            "end": 1543,
            "accessibility": "private",
            "computed": false,
            "declare": true,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1527,
              "end": 1532,
              "decorators": [],
              "name": "_keys",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1548,
            "end": 1582,
            "accessibility": "private",
            "computed": false,
            "declare": true,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1564,
              "end": 1571,
              "decorators": [],
              "name": "_values",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1587,
            "end": 1608,
            "accessibility": null,
            "computed": false,
            "declare": true,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1595,
              "end": 1599,
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1613,
            "end": 1650,
            "accessibility": null,
            "computed": true,
            "declare": true,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 1622,
              "end": 1640,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1622,
                "end": 1628,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1629,
                "end": 1640,
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 1656,
            "end": 1673,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1656,
              "end": 1661,
              "decorators": [],
              "name": "clear",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1661,
              "end": 1673,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1670,
                "end": 1673,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1663,
                "end": 1669,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1665,
                  "end": 1669
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1678,
            "end": 1724,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1678,
              "end": 1684,
              "decorators": [],
              "name": "delete",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1684,
              "end": 1724,
              "async": false,
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
                      "raw": "false",
                      "value": false,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1685,
                  "end": 1696,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1688,
                    "end": 1696,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1690,
                      "end": 1696
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1697,
                "end": 1706,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1699,
                  "end": 1706
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1729,
            "end": 1837,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1729,
              "end": 1736,
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1736,
              "end": 1837,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1834,
                "end": 1837,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1737,
                  "end": 1811,
                  "decorators": [],
                  "name": "callbackfn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1747,
                    "end": 1811,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1749,
                      "end": 1811,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1750,
                          "end": 1763,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1755,
                            "end": 1763,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1757,
                              "end": 1763
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 1765,
                          "end": 1776,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1768,
                            "end": 1776,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1770,
                              "end": 1776
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 1778,
                          "end": 1802,
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1781,
                            "end": 1802,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1783,
                              "end": 1802,
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
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 1783,
                                "end": 1786,
                                "decorators": [],
                                "name": "Map",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
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
                      },
                      "typeParameters": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1813,
                  "end": 1826,
                  "decorators": [],
                  "name": "thisArg",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1821,
                    "end": 1826,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1823,
                      "end": 1826
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1827,
                "end": 1833,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1829,
                  "end": 1833
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1842,
            "end": 1900,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1842,
              "end": 1845,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1845,
              "end": 1900,
              "async": false,
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
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1846,
                  "end": 1857,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1849,
                    "end": 1857,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1851,
                      "end": 1857
                    }
                  }
                }
              ],
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
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1905,
            "end": 1948,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1905,
              "end": 1908,
              "decorators": [],
              "name": "has",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1908,
              "end": 1948,
              "async": false,
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
                      "raw": "false",
                      "value": false,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1909,
                  "end": 1920,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1912,
                    "end": 1920,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1914,
                      "end": 1920
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1921,
                "end": 1930,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1923,
                  "end": 1930
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1953,
            "end": 2007,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1953,
              "end": 1956,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1956,
              "end": 2007,
              "async": false,
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
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1957,
                  "end": 1968,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1960,
                    "end": 1968,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1962,
                      "end": 1968
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1970,
                  "end": 1983,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1975,
                    "end": 1983,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1977,
                      "end": 1983
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1984,
                "end": 1990,
                "typeAnnotation": {
                  "type": "TSThisType",
                  "start": 1986,
                  "end": 1990
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2012,
            "end": 2100,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2012,
              "end": 2019,
              "decorators": [],
              "name": "entries",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2019,
              "end": 2100,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 2071,
                          "end": 2096,
                          "raw": "\"Method not implemented.\"",
                          "value": "Method not implemented.",
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 2065,
                        "end": 2070,
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2021,
                "end": 2052,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2023,
                  "end": 2052,
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
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 2023,
                    "end": 2034,
                    "decorators": [],
                    "name": "MapIterator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2105,
            "end": 2180,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2105,
              "end": 2109,
              "decorators": [],
              "name": "keys",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2109,
              "end": 2180,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 2151,
                          "end": 2176,
                          "raw": "\"Method not implemented.\"",
                          "value": "Method not implemented.",
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 2145,
                        "end": 2150,
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2111,
                "end": 2132,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2113,
                  "end": 2132,
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
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 2113,
                    "end": 2124,
                    "decorators": [],
                    "name": "MapIterator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2185,
            "end": 2283,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 2186,
              "end": 2201,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2186,
                "end": 2192,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2193,
                "end": 2201,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2202,
              "end": 2283,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 2254,
                          "end": 2279,
                          "raw": "\"Method not implemented.\"",
                          "value": "Method not implemented.",
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 2248,
                        "end": 2253,
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2204,
                "end": 2235,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2206,
                  "end": 2235,
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
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 2206,
                    "end": 2217,
                    "decorators": [],
                    "name": "MapIterator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2426,
            "end": 2473,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2428,
              "end": 2434,
              "decorators": [],
              "name": "values",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2434,
              "end": 2473,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2437,
                "end": 2473,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2447,
                    "end": 2467,
                    "directive": null,
                    "expression": {
                      "type": "YieldExpression",
                      "start": 2447,
                      "end": 2466,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 2454,
                        "end": 2466,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2454,
                          "end": 2458
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2459,
                          "end": 2466,
                          "decorators": [],
                          "name": "_values",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "delegate": true
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": true,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1468,
        "end": 1473,
        "decorators": [],
        "name": "MyMap",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 1485,
          "end": 1504,
          "expression": {
            "type": "Identifier",
            "start": 1485,
            "end": 1488,
            "decorators": [],
            "name": "Map",
            "optional": false,
            "typeAnnotation": null
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
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
