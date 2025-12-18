__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 19,
                  "end": 22
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
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
                  ],
                  "start": 22,
                  "end": 38
                },
                "start": 19,
                "end": 38
              },
              "start": 17,
              "end": 38
            },
            "start": 14,
            "end": 38
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 38
        }
      ],
      "declare": true,
      "start": 0,
      "end": 39
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "set",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 62
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 63,
                      "end": 69
                    }
                  ],
                  "start": 62,
                  "end": 70
                },
                "start": 59,
                "end": 70
              },
              "start": 57,
              "end": 70
            },
            "start": 54,
            "end": 70
          },
          "init": null,
          "definite": false,
          "start": 54,
          "end": 70
        }
      ],
      "declare": true,
      "start": 40,
      "end": 71
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 384,
                "end": 390
              },
              "start": 382,
              "end": 390
            },
            "start": 380,
            "end": 390
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 393,
                      "end": 396
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 397,
                      "end": 403
                    },
                    "optional": false,
                    "computed": false,
                    "start": 393,
                    "end": 403
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 393,
                  "end": 405
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 406,
                  "end": 410
                },
                "optional": false,
                "computed": false,
                "start": 393,
                "end": 410
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 393,
              "end": 412
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 413,
              "end": 418
            },
            "optional": false,
            "computed": false,
            "start": 393,
            "end": 418
          },
          "definite": false,
          "start": 380,
          "end": 418
        }
      ],
      "declare": false,
      "start": 374,
      "end": 419
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Next",
        "optional": false,
        "typeAnnotation": null,
        "start": 648,
        "end": 652
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 654
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 653,
            "end": 654
          }
        ],
        "start": 652,
        "end": 655
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "done",
              "optional": false,
              "typeAnnotation": null,
              "start": 671,
              "end": 675
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 678,
                "end": 685
              },
              "start": 676,
              "end": 685
            },
            "accessibility": null,
            "static": false,
            "start": 662,
            "end": 685
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 704
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 706,
                  "end": 707
                },
                "typeArguments": null,
                "start": 706,
                "end": 707
              },
              "start": 704,
              "end": 707
            },
            "accessibility": null,
            "static": false,
            "start": 690,
            "end": 707
          }
        ],
        "start": 656,
        "end": 709
      },
      "declare": false,
      "start": 638,
      "end": 709
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Next",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 724
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 725,
                      "end": 731
                    }
                  ],
                  "start": 724,
                  "end": 732
                },
                "start": 720,
                "end": 732
              },
              "start": 718,
              "end": 732
            },
            "start": 716,
            "end": 732
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 735,
                    "end": 738
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 739,
                    "end": 745
                  },
                  "optional": false,
                  "computed": false,
                  "start": 735,
                  "end": 745
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 735,
                "end": 747
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null,
                "start": 748,
                "end": 752
              },
              "optional": false,
              "computed": false,
              "start": 735,
              "end": 752
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 735,
            "end": 754
          },
          "definite": false,
          "start": 716,
          "end": 754
        }
      ],
      "declare": false,
      "start": 710,
      "end": 755
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "source",
        "optional": false,
        "typeAnnotation": null,
        "start": 1034,
        "end": 1040
      },
      "generator": true,
      "async": true,
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
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1051,
                "end": 1052
              },
              "start": 1045,
              "end": 1052
            },
            "directive": null,
            "start": 1045,
            "end": 1053
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1060,
                "end": 1061
              },
              "start": 1054,
              "end": 1061
            },
            "directive": null,
            "start": 1054,
            "end": 1062
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1069,
                "end": 1070
              },
              "start": 1063,
              "end": 1070
            },
            "directive": null,
            "start": 1063,
            "end": 1071
          }
        ],
        "start": 1043,
        "end": 1073
      },
      "expression": false,
      "start": 1018,
      "end": 1073
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "doubles",
            "optional": false,
            "typeAnnotation": null,
            "start": 1080,
            "end": 1087
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "source",
              "optional": false,
              "typeAnnotation": null,
              "start": 1090,
              "end": 1096
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1090,
            "end": 1098
          },
          "definite": false,
          "start": 1080,
          "end": 1098
        }
      ],
      "declare": false,
      "start": 1074,
      "end": 1099
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "doubles",
            "optional": false,
            "typeAnnotation": null,
            "start": 1100,
            "end": 1107
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "return",
            "optional": false,
            "typeAnnotation": null,
            "start": 1108,
            "end": 1114
          },
          "optional": false,
          "computed": false,
          "start": 1100,
          "end": 1114
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1100,
        "end": 1116
      },
      "directive": null,
      "start": 1100,
      "end": 1117
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 1282,
                "end": 1300
              },
              "start": 1280,
              "end": 1300
            },
            "start": 1278,
            "end": 1300
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "set",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1303,
                      "end": 1306
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1307,
                      "end": 1313
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1303,
                    "end": 1313
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1303,
                  "end": 1315
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1316,
                  "end": 1320
                },
                "optional": false,
                "computed": false,
                "start": 1303,
                "end": 1320
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1303,
              "end": 1322
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1323,
              "end": 1328
            },
            "optional": false,
            "computed": false,
            "start": 1303,
            "end": 1328
          },
          "definite": false,
          "start": 1278,
          "end": 1328
        }
      ],
      "declare": false,
      "start": 1272,
      "end": 1329
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 1468,
        "end": 1473
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Map",
            "optional": false,
            "typeAnnotation": null,
            "start": 1485,
            "end": 1488
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
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
            ],
            "start": 1488,
            "end": 1504
          },
          "start": 1485,
          "end": 1504
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_keys",
              "optional": false,
              "typeAnnotation": null,
              "start": 1527,
              "end": 1532
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1534,
                  "end": 1540
                },
                "start": 1534,
                "end": 1542
              },
              "start": 1532,
              "end": 1542
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 1511,
            "end": 1543
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_values",
              "optional": false,
              "typeAnnotation": null,
              "start": 1564,
              "end": 1571
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1573,
                  "end": 1579
                },
                "start": 1573,
                "end": 1581
              },
              "start": 1571,
              "end": 1581
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 1548,
            "end": 1582
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null,
              "start": 1595,
              "end": 1599
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1601,
                "end": 1607
              },
              "start": 1599,
              "end": 1607
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1587,
            "end": 1608
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1622,
                "end": 1628
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 1629,
                "end": 1640
              },
              "optional": false,
              "computed": false,
              "start": 1622,
              "end": 1640
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1643,
                "end": 1649
              },
              "start": 1641,
              "end": 1649
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1613,
            "end": 1650
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "clear",
              "optional": false,
              "typeAnnotation": null,
              "start": 1656,
              "end": 1661
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1665,
                  "end": 1669
                },
                "start": 1663,
                "end": 1669
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1670,
                "end": 1673
              },
              "expression": false,
              "start": 1661,
              "end": 1673
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1656,
            "end": 1673
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "delete",
              "optional": false,
              "typeAnnotation": null,
              "start": 1678,
              "end": 1684
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1690,
                      "end": 1696
                    },
                    "start": 1688,
                    "end": 1696
                  },
                  "start": 1685,
                  "end": 1696
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1699,
                  "end": 1706
                },
                "start": 1697,
                "end": 1706
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 1716,
                      "end": 1721
                    },
                    "start": 1709,
                    "end": 1722
                  }
                ],
                "start": 1707,
                "end": 1724
              },
              "expression": false,
              "start": 1684,
              "end": 1724
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1678,
            "end": 1724
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null,
              "start": 1729,
              "end": 1736
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callbackfn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1757,
                              "end": 1763
                            },
                            "start": 1755,
                            "end": 1763
                          },
                          "start": 1750,
                          "end": 1763
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1770,
                              "end": 1776
                            },
                            "start": 1768,
                            "end": 1776
                          },
                          "start": 1765,
                          "end": 1776
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Map",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1783,
                                "end": 1786
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
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
                                ],
                                "start": 1786,
                                "end": 1802
                              },
                              "start": 1783,
                              "end": 1802
                            },
                            "start": 1781,
                            "end": 1802
                          },
                          "start": 1778,
                          "end": 1802
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1807,
                          "end": 1811
                        },
                        "start": 1804,
                        "end": 1811
                      },
                      "start": 1749,
                      "end": 1811
                    },
                    "start": 1747,
                    "end": 1811
                  },
                  "start": 1737,
                  "end": 1811
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thisArg",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1823,
                      "end": 1826
                    },
                    "start": 1821,
                    "end": 1826
                  },
                  "start": 1813,
                  "end": 1826
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1829,
                  "end": 1833
                },
                "start": 1827,
                "end": 1833
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1834,
                "end": 1837
              },
              "expression": false,
              "start": 1736,
              "end": 1837
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1729,
            "end": 1837
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 1842,
              "end": 1845
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1851,
                      "end": 1857
                    },
                    "start": 1849,
                    "end": 1857
                  },
                  "start": 1846,
                  "end": 1857
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
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
                  ],
                  "start": 1860,
                  "end": 1878
                },
                "start": 1858,
                "end": 1878
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1888,
                      "end": 1897
                    },
                    "start": 1881,
                    "end": 1898
                  }
                ],
                "start": 1879,
                "end": 1900
              },
              "expression": false,
              "start": 1845,
              "end": 1900
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1842,
            "end": 1900
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "has",
              "optional": false,
              "typeAnnotation": null,
              "start": 1905,
              "end": 1908
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1914,
                      "end": 1920
                    },
                    "start": 1912,
                    "end": 1920
                  },
                  "start": 1909,
                  "end": 1920
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1923,
                  "end": 1930
                },
                "start": 1921,
                "end": 1930
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 1940,
                      "end": 1945
                    },
                    "start": 1933,
                    "end": 1946
                  }
                ],
                "start": 1931,
                "end": 1948
              },
              "expression": false,
              "start": 1908,
              "end": 1948
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1905,
            "end": 1948
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 1953,
              "end": 1956
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1962,
                      "end": 1968
                    },
                    "start": 1960,
                    "end": 1968
                  },
                  "start": 1957,
                  "end": 1968
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1977,
                      "end": 1983
                    },
                    "start": 1975,
                    "end": 1983
                  },
                  "start": 1970,
                  "end": 1983
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSThisType",
                  "start": 1986,
                  "end": 1990
                },
                "start": 1984,
                "end": 1990
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 2000,
                      "end": 2004
                    },
                    "start": 1993,
                    "end": 2005
                  }
                ],
                "start": 1991,
                "end": 2007
              },
              "expression": false,
              "start": 1956,
              "end": 2007
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1953,
            "end": 2007
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "entries",
              "optional": false,
              "typeAnnotation": null,
              "start": 2012,
              "end": 2019
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MapIterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2023,
                    "end": 2034
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTupleType",
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
                        ],
                        "start": 2035,
                        "end": 2051
                      }
                    ],
                    "start": 2034,
                    "end": 2052
                  },
                  "start": 2023,
                  "end": 2052
                },
                "start": 2021,
                "end": 2052
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2065,
                        "end": 2070
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Method not implemented.",
                          "raw": "\"Method not implemented.\"",
                          "start": 2071,
                          "end": 2096
                        }
                      ],
                      "start": 2061,
                      "end": 2097
                    },
                    "start": 2055,
                    "end": 2098
                  }
                ],
                "start": 2053,
                "end": 2100
              },
              "expression": false,
              "start": 2019,
              "end": 2100
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2012,
            "end": 2100
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "keys",
              "optional": false,
              "typeAnnotation": null,
              "start": 2105,
              "end": 2109
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MapIterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2113,
                    "end": 2124
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2125,
                        "end": 2131
                      }
                    ],
                    "start": 2124,
                    "end": 2132
                  },
                  "start": 2113,
                  "end": 2132
                },
                "start": 2111,
                "end": 2132
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2145,
                        "end": 2150
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Method not implemented.",
                          "raw": "\"Method not implemented.\"",
                          "start": 2151,
                          "end": 2176
                        }
                      ],
                      "start": 2141,
                      "end": 2177
                    },
                    "start": 2135,
                    "end": 2178
                  }
                ],
                "start": 2133,
                "end": 2180
              },
              "expression": false,
              "start": 2109,
              "end": 2180
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2105,
            "end": 2180
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2186,
                "end": 2192
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 2193,
                "end": 2201
              },
              "optional": false,
              "computed": false,
              "start": 2186,
              "end": 2201
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MapIterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2206,
                    "end": 2217
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTupleType",
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
                        ],
                        "start": 2218,
                        "end": 2234
                      }
                    ],
                    "start": 2217,
                    "end": 2235
                  },
                  "start": 2206,
                  "end": 2235
                },
                "start": 2204,
                "end": 2235
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2248,
                        "end": 2253
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Method not implemented.",
                          "raw": "\"Method not implemented.\"",
                          "start": 2254,
                          "end": 2279
                        }
                      ],
                      "start": 2244,
                      "end": 2280
                    },
                    "start": 2238,
                    "end": 2281
                  }
                ],
                "start": 2236,
                "end": 2283
              },
              "expression": false,
              "start": 2202,
              "end": 2283
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2185,
            "end": 2283
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "values",
              "optional": false,
              "typeAnnotation": null,
              "start": 2428,
              "end": 2434
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": true,
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
                      "type": "YieldExpression",
                      "delegate": true,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 2454,
                          "end": 2458
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_values",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2459,
                          "end": 2466
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2454,
                        "end": 2466
                      },
                      "start": 2447,
                      "end": 2466
                    },
                    "directive": null,
                    "start": 2447,
                    "end": 2467
                  }
                ],
                "start": 2437,
                "end": 2473
              },
              "expression": false,
              "start": 2434,
              "end": 2473
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2426,
            "end": 2473
          }
        ],
        "start": 1505,
        "end": 2475
      },
      "abstract": false,
      "declare": false,
      "start": 1462,
      "end": 2475
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2475
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13,
    "range": [
      8,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 14,
    "end": 17,
    "range": [
      14,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 19,
    "end": 22,
    "range": [
      19,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 23,
    "end": 29,
    "range": [
      23,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 31,
    "end": 37,
    "range": [
      31,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 40,
    "end": 47,
    "range": [
      40,
      47
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 48,
    "end": 53,
    "range": [
      48,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 54,
    "end": 57,
    "range": [
      54,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 59,
    "end": 62,
    "range": [
      59,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 63,
    "end": 69,
    "range": [
      63,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 374,
    "end": 379,
    "range": [
      374,
      379
    ]
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 380,
    "end": 382,
    "range": [
      380,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 384,
    "end": 390,
    "range": [
      384,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 393,
    "end": 396,
    "range": [
      393,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 397,
    "end": 403,
    "range": [
      397,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 406,
    "end": 410,
    "range": [
      406,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 413,
    "end": 418,
    "range": [
      413,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 638,
    "end": 647,
    "range": [
      638,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "Next",
    "start": 648,
    "end": 652,
    "range": [
      648,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 662,
    "end": 670,
    "range": [
      662,
      670
    ]
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 671,
    "end": 675,
    "range": [
      671,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 678,
    "end": 685,
    "range": [
      678,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 690,
    "end": 698,
    "range": [
      690,
      698
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 699,
    "end": 704,
    "range": [
      699,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 710,
    "end": 715,
    "range": [
      710,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 716,
    "end": 718,
    "range": [
      716,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Identifier",
    "value": "Next",
    "start": 720,
    "end": 724,
    "range": [
      720,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 725,
    "end": 731,
    "range": [
      725,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 735,
    "end": 738,
    "range": [
      735,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 739,
    "end": 745,
    "range": [
      739,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 748,
    "end": 752,
    "range": [
      748,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1018,
    "end": 1023,
    "range": [
      1018,
      1023
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1024,
    "end": 1032,
    "range": [
      1024,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 1034,
    "end": 1040,
    "range": [
      1034,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1045,
    "end": 1050,
    "range": [
      1045,
      1050
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1054,
    "end": 1059,
    "range": [
      1054,
      1059
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1061,
    "end": 1062,
    "range": [
      1061,
      1062
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1063,
    "end": 1068,
    "range": [
      1063,
      1068
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1074,
    "end": 1079,
    "range": [
      1074,
      1079
    ]
  },
  {
    "type": "Identifier",
    "value": "doubles",
    "start": 1080,
    "end": 1087,
    "range": [
      1080,
      1087
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 1090,
    "end": 1096,
    "range": [
      1090,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Identifier",
    "value": "doubles",
    "start": 1100,
    "end": 1107,
    "range": [
      1100,
      1107
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Identifier",
    "value": "return",
    "start": 1108,
    "end": 1114,
    "range": [
      1108,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1272,
    "end": 1277,
    "range": [
      1272,
      1277
    ]
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1278,
    "end": 1280,
    "range": [
      1278,
      1280
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1280,
    "end": 1281,
    "range": [
      1280,
      1281
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1282,
    "end": 1288,
    "range": [
      1282,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1291,
    "end": 1300,
    "range": [
      1291,
      1300
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1301,
    "end": 1302,
    "range": [
      1301,
      1302
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1303,
    "end": 1306,
    "range": [
      1303,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 1307,
    "end": 1313,
    "range": [
      1307,
      1313
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1315,
    "end": 1316,
    "range": [
      1315,
      1316
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1316,
    "end": 1320,
    "range": [
      1316,
      1320
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1322,
    "end": 1323,
    "range": [
      1322,
      1323
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1323,
    "end": 1328,
    "range": [
      1323,
      1328
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1462,
    "end": 1467,
    "range": [
      1462,
      1467
    ]
  },
  {
    "type": "Identifier",
    "value": "MyMap",
    "start": 1468,
    "end": 1473,
    "range": [
      1468,
      1473
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1474,
    "end": 1484,
    "range": [
      1474,
      1484
    ]
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 1485,
    "end": 1488,
    "range": [
      1485,
      1488
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1489,
    "end": 1495,
    "range": [
      1489,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1497,
    "end": 1503,
    "range": [
      1497,
      1503
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1511,
    "end": 1518,
    "range": [
      1511,
      1518
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1519,
    "end": 1526,
    "range": [
      1519,
      1526
    ]
  },
  {
    "type": "Identifier",
    "value": "_keys",
    "start": 1527,
    "end": 1532,
    "range": [
      1527,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1532,
    "end": 1533,
    "range": [
      1532,
      1533
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1534,
    "end": 1540,
    "range": [
      1534,
      1540
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1540,
    "end": 1541,
    "range": [
      1540,
      1541
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1541,
    "end": 1542,
    "range": [
      1541,
      1542
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1542,
    "end": 1543,
    "range": [
      1542,
      1543
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1548,
    "end": 1555,
    "range": [
      1548,
      1555
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1556,
    "end": 1563,
    "range": [
      1556,
      1563
    ]
  },
  {
    "type": "Identifier",
    "value": "_values",
    "start": 1564,
    "end": 1571,
    "range": [
      1564,
      1571
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1571,
    "end": 1572,
    "range": [
      1571,
      1572
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1573,
    "end": 1579,
    "range": [
      1573,
      1579
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1579,
    "end": 1580,
    "range": [
      1579,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1580,
    "end": 1581,
    "range": [
      1580,
      1581
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1587,
    "end": 1594,
    "range": [
      1587,
      1594
    ]
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 1595,
    "end": 1599,
    "range": [
      1595,
      1599
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1599,
    "end": 1600,
    "range": [
      1599,
      1600
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1601,
    "end": 1607,
    "range": [
      1601,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1613,
    "end": 1620,
    "range": [
      1613,
      1620
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1621,
    "end": 1622,
    "range": [
      1621,
      1622
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1622,
    "end": 1628,
    "range": [
      1622,
      1628
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1628,
    "end": 1629,
    "range": [
      1628,
      1629
    ]
  },
  {
    "type": "Identifier",
    "value": "toStringTag",
    "start": 1629,
    "end": 1640,
    "range": [
      1629,
      1640
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1641,
    "end": 1642,
    "range": [
      1641,
      1642
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1643,
    "end": 1649,
    "range": [
      1643,
      1649
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Identifier",
    "value": "clear",
    "start": 1656,
    "end": 1661,
    "range": [
      1656,
      1661
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1661,
    "end": 1662,
    "range": [
      1661,
      1662
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1663,
    "end": 1664,
    "range": [
      1663,
      1664
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1665,
    "end": 1669,
    "range": [
      1665,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1670,
    "end": 1671,
    "range": [
      1670,
      1671
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1672,
    "end": 1673,
    "range": [
      1672,
      1673
    ]
  },
  {
    "type": "Identifier",
    "value": "delete",
    "start": 1678,
    "end": 1684,
    "range": [
      1678,
      1684
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1684,
    "end": 1685,
    "range": [
      1684,
      1685
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1685,
    "end": 1688,
    "range": [
      1685,
      1688
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1690,
    "end": 1696,
    "range": [
      1690,
      1696
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1696,
    "end": 1697,
    "range": [
      1696,
      1697
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1697,
    "end": 1698,
    "range": [
      1697,
      1698
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1699,
    "end": 1706,
    "range": [
      1699,
      1706
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1707,
    "end": 1708,
    "range": [
      1707,
      1708
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1709,
    "end": 1715,
    "range": [
      1709,
      1715
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1716,
    "end": 1721,
    "range": [
      1716,
      1721
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1721,
    "end": 1722,
    "range": [
      1721,
      1722
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 1729,
    "end": 1736,
    "range": [
      1729,
      1736
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1736,
    "end": 1737,
    "range": [
      1736,
      1737
    ]
  },
  {
    "type": "Identifier",
    "value": "callbackfn",
    "start": 1737,
    "end": 1747,
    "range": [
      1737,
      1747
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1749,
    "end": 1750,
    "range": [
      1749,
      1750
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1750,
    "end": 1755,
    "range": [
      1750,
      1755
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1755,
    "end": 1756,
    "range": [
      1755,
      1756
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1757,
    "end": 1763,
    "range": [
      1757,
      1763
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1765,
    "end": 1768,
    "range": [
      1765,
      1768
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1768,
    "end": 1769,
    "range": [
      1768,
      1769
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1770,
    "end": 1776,
    "range": [
      1770,
      1776
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1778,
    "end": 1781,
    "range": [
      1778,
      1781
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 1783,
    "end": 1786,
    "range": [
      1783,
      1786
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1786,
    "end": 1787,
    "range": [
      1786,
      1787
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1787,
    "end": 1793,
    "range": [
      1787,
      1793
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1793,
    "end": 1794,
    "range": [
      1793,
      1794
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1795,
    "end": 1801,
    "range": [
      1795,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1801,
    "end": 1802,
    "range": [
      1801,
      1802
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1804,
    "end": 1806,
    "range": [
      1804,
      1806
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1807,
    "end": 1811,
    "range": [
      1807,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Identifier",
    "value": "thisArg",
    "start": 1813,
    "end": 1820,
    "range": [
      1813,
      1820
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1820,
    "end": 1821,
    "range": [
      1820,
      1821
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1821,
    "end": 1822,
    "range": [
      1821,
      1822
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1823,
    "end": 1826,
    "range": [
      1823,
      1826
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1826,
    "end": 1827,
    "range": [
      1826,
      1827
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1827,
    "end": 1828,
    "range": [
      1827,
      1828
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1829,
    "end": 1833,
    "range": [
      1829,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1836,
    "end": 1837,
    "range": [
      1836,
      1837
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1842,
    "end": 1845,
    "range": [
      1842,
      1845
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1845,
    "end": 1846,
    "range": [
      1845,
      1846
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1846,
    "end": 1849,
    "range": [
      1846,
      1849
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1849,
    "end": 1850,
    "range": [
      1849,
      1850
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1851,
    "end": 1857,
    "range": [
      1851,
      1857
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1858,
    "end": 1859,
    "range": [
      1858,
      1859
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1860,
    "end": 1866,
    "range": [
      1860,
      1866
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1867,
    "end": 1868,
    "range": [
      1867,
      1868
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1869,
    "end": 1878,
    "range": [
      1869,
      1878
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1879,
    "end": 1880,
    "range": [
      1879,
      1880
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1881,
    "end": 1887,
    "range": [
      1881,
      1887
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1888,
    "end": 1897,
    "range": [
      1888,
      1897
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1897,
    "end": 1898,
    "range": [
      1897,
      1898
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1899,
    "end": 1900,
    "range": [
      1899,
      1900
    ]
  },
  {
    "type": "Identifier",
    "value": "has",
    "start": 1905,
    "end": 1908,
    "range": [
      1905,
      1908
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1908,
    "end": 1909,
    "range": [
      1908,
      1909
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1909,
    "end": 1912,
    "range": [
      1909,
      1912
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1912,
    "end": 1913,
    "range": [
      1912,
      1913
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1914,
    "end": 1920,
    "range": [
      1914,
      1920
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1920,
    "end": 1921,
    "range": [
      1920,
      1921
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1921,
    "end": 1922,
    "range": [
      1921,
      1922
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1923,
    "end": 1930,
    "range": [
      1923,
      1930
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1933,
    "end": 1939,
    "range": [
      1933,
      1939
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1940,
    "end": 1945,
    "range": [
      1940,
      1945
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1947,
    "end": 1948,
    "range": [
      1947,
      1948
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1953,
    "end": 1956,
    "range": [
      1953,
      1956
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1956,
    "end": 1957,
    "range": [
      1956,
      1957
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1957,
    "end": 1960,
    "range": [
      1957,
      1960
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1960,
    "end": 1961,
    "range": [
      1960,
      1961
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1962,
    "end": 1968,
    "range": [
      1962,
      1968
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1968,
    "end": 1969,
    "range": [
      1968,
      1969
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1970,
    "end": 1975,
    "range": [
      1970,
      1975
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1975,
    "end": 1976,
    "range": [
      1975,
      1976
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1977,
    "end": 1983,
    "range": [
      1977,
      1983
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1983,
    "end": 1984,
    "range": [
      1983,
      1984
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1984,
    "end": 1985,
    "range": [
      1984,
      1985
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1986,
    "end": 1990,
    "range": [
      1986,
      1990
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1991,
    "end": 1992,
    "range": [
      1991,
      1992
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1993,
    "end": 1999,
    "range": [
      1993,
      1999
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2000,
    "end": 2004,
    "range": [
      2000,
      2004
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2004,
    "end": 2005,
    "range": [
      2004,
      2005
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2006,
    "end": 2007,
    "range": [
      2006,
      2007
    ]
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 2012,
    "end": 2019,
    "range": [
      2012,
      2019
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2019,
    "end": 2020,
    "range": [
      2019,
      2020
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2020,
    "end": 2021,
    "range": [
      2020,
      2021
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2021,
    "end": 2022,
    "range": [
      2021,
      2022
    ]
  },
  {
    "type": "Identifier",
    "value": "MapIterator",
    "start": 2023,
    "end": 2034,
    "range": [
      2023,
      2034
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2034,
    "end": 2035,
    "range": [
      2034,
      2035
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2035,
    "end": 2036,
    "range": [
      2035,
      2036
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2036,
    "end": 2042,
    "range": [
      2036,
      2042
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2042,
    "end": 2043,
    "range": [
      2042,
      2043
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2044,
    "end": 2050,
    "range": [
      2044,
      2050
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2050,
    "end": 2051,
    "range": [
      2050,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2051,
    "end": 2052,
    "range": [
      2051,
      2052
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2053,
    "end": 2054,
    "range": [
      2053,
      2054
    ]
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 2055,
    "end": 2060,
    "range": [
      2055,
      2060
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2061,
    "end": 2064,
    "range": [
      2061,
      2064
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 2065,
    "end": 2070,
    "range": [
      2065,
      2070
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2070,
    "end": 2071,
    "range": [
      2070,
      2071
    ]
  },
  {
    "type": "String",
    "value": "\"Method not implemented.\"",
    "start": 2071,
    "end": 2096,
    "range": [
      2071,
      2096
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2096,
    "end": 2097,
    "range": [
      2096,
      2097
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2097,
    "end": 2098,
    "range": [
      2097,
      2098
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2099,
    "end": 2100,
    "range": [
      2099,
      2100
    ]
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 2105,
    "end": 2109,
    "range": [
      2105,
      2109
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2109,
    "end": 2110,
    "range": [
      2109,
      2110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2110,
    "end": 2111,
    "range": [
      2110,
      2111
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "Identifier",
    "value": "MapIterator",
    "start": 2113,
    "end": 2124,
    "range": [
      2113,
      2124
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2124,
    "end": 2125,
    "range": [
      2124,
      2125
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2125,
    "end": 2131,
    "range": [
      2125,
      2131
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2133,
    "end": 2134,
    "range": [
      2133,
      2134
    ]
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 2135,
    "end": 2140,
    "range": [
      2135,
      2140
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2141,
    "end": 2144,
    "range": [
      2141,
      2144
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 2145,
    "end": 2150,
    "range": [
      2145,
      2150
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2150,
    "end": 2151,
    "range": [
      2150,
      2151
    ]
  },
  {
    "type": "String",
    "value": "\"Method not implemented.\"",
    "start": 2151,
    "end": 2176,
    "range": [
      2151,
      2176
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2176,
    "end": 2177,
    "range": [
      2176,
      2177
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2177,
    "end": 2178,
    "range": [
      2177,
      2178
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2179,
    "end": 2180,
    "range": [
      2179,
      2180
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2185,
    "end": 2186,
    "range": [
      2185,
      2186
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2186,
    "end": 2192,
    "range": [
      2186,
      2192
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2192,
    "end": 2193,
    "range": [
      2192,
      2193
    ]
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 2193,
    "end": 2201,
    "range": [
      2193,
      2201
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2201,
    "end": 2202,
    "range": [
      2201,
      2202
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2202,
    "end": 2203,
    "range": [
      2202,
      2203
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2203,
    "end": 2204,
    "range": [
      2203,
      2204
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2204,
    "end": 2205,
    "range": [
      2204,
      2205
    ]
  },
  {
    "type": "Identifier",
    "value": "MapIterator",
    "start": 2206,
    "end": 2217,
    "range": [
      2206,
      2217
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2217,
    "end": 2218,
    "range": [
      2217,
      2218
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2218,
    "end": 2219,
    "range": [
      2218,
      2219
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2219,
    "end": 2225,
    "range": [
      2219,
      2225
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2225,
    "end": 2226,
    "range": [
      2225,
      2226
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2227,
    "end": 2233,
    "range": [
      2227,
      2233
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2233,
    "end": 2234,
    "range": [
      2233,
      2234
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2234,
    "end": 2235,
    "range": [
      2234,
      2235
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2236,
    "end": 2237,
    "range": [
      2236,
      2237
    ]
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 2238,
    "end": 2243,
    "range": [
      2238,
      2243
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2244,
    "end": 2247,
    "range": [
      2244,
      2247
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 2248,
    "end": 2253,
    "range": [
      2248,
      2253
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2253,
    "end": 2254,
    "range": [
      2253,
      2254
    ]
  },
  {
    "type": "String",
    "value": "\"Method not implemented.\"",
    "start": 2254,
    "end": 2279,
    "range": [
      2254,
      2279
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2279,
    "end": 2280,
    "range": [
      2279,
      2280
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2280,
    "end": 2281,
    "range": [
      2280,
      2281
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2282,
    "end": 2283,
    "range": [
      2282,
      2283
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2426,
    "end": 2427,
    "range": [
      2426,
      2427
    ]
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 2428,
    "end": 2434,
    "range": [
      2428,
      2434
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2434,
    "end": 2435,
    "range": [
      2434,
      2435
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2435,
    "end": 2436,
    "range": [
      2435,
      2436
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2437,
    "end": 2438,
    "range": [
      2437,
      2438
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2447,
    "end": 2452,
    "range": [
      2447,
      2452
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2452,
    "end": 2453,
    "range": [
      2452,
      2453
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2454,
    "end": 2458,
    "range": [
      2454,
      2458
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2458,
    "end": 2459,
    "range": [
      2458,
      2459
    ]
  },
  {
    "type": "Identifier",
    "value": "_values",
    "start": 2459,
    "end": 2466,
    "range": [
      2459,
      2466
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2466,
    "end": 2467,
    "range": [
      2466,
      2467
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2472,
    "end": 2473,
    "range": [
      2472,
      2473
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2474,
    "end": 2475,
    "range": [
      2474,
      2475
    ]
  }
]
```
