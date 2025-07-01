__ESTREE_TEST__:PASS:
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
