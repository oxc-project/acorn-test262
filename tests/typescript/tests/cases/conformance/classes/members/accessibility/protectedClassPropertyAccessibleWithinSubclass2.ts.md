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
              "start": 27,
              "end": 28
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 30,
                "end": 36
              },
              "start": 28,
              "end": 36
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 17,
            "end": 37
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 48
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 68,
                                "end": 72
                              },
                              "typeArguments": null,
                              "start": 68,
                              "end": 72
                            },
                            "start": 66,
                            "end": 72
                          },
                          "start": 65,
                          "end": 72
                        },
                        "init": null,
                        "definite": false,
                        "start": 65,
                        "end": 72
                      }
                    ],
                    "declare": false,
                    "start": 61,
                    "end": 73
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 90,
                                "end": 98
                              },
                              "typeArguments": null,
                              "start": 90,
                              "end": 98
                            },
                            "start": 88,
                            "end": 98
                          },
                          "start": 86,
                          "end": 98
                        },
                        "init": null,
                        "definite": false,
                        "start": 86,
                        "end": 98
                      }
                    ],
                    "declare": false,
                    "start": 82,
                    "end": 99
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 116,
                                "end": 124
                              },
                              "typeArguments": null,
                              "start": 116,
                              "end": 124
                            },
                            "start": 114,
                            "end": 124
                          },
                          "start": 112,
                          "end": 124
                        },
                        "init": null,
                        "definite": false,
                        "start": 112,
                        "end": 124
                      }
                    ],
                    "declare": false,
                    "start": 108,
                    "end": 125
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d3",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 142,
                                "end": 150
                              },
                              "typeArguments": null,
                              "start": 142,
                              "end": 150
                            },
                            "start": 140,
                            "end": 150
                          },
                          "start": 138,
                          "end": 150
                        },
                        "init": null,
                        "definite": false,
                        "start": 138,
                        "end": 150
                      }
                    ],
                    "declare": false,
                    "start": 134,
                    "end": 151
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d4",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 168,
                                "end": 176
                              },
                              "typeArguments": null,
                              "start": 168,
                              "end": 176
                            },
                            "start": 166,
                            "end": 176
                          },
                          "start": 164,
                          "end": 176
                        },
                        "init": null,
                        "definite": false,
                        "start": 164,
                        "end": 176
                      }
                    ],
                    "declare": false,
                    "start": 160,
                    "end": 177
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 187,
                        "end": 188
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 189,
                        "end": 190
                      },
                      "optional": false,
                      "computed": false,
                      "start": 187,
                      "end": 190
                    },
                    "directive": null,
                    "start": 187,
                    "end": 191
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 256,
                        "end": 258
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 259,
                        "end": 260
                      },
                      "optional": false,
                      "computed": false,
                      "start": 256,
                      "end": 260
                    },
                    "directive": null,
                    "start": 256,
                    "end": 261
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 325,
                        "end": 327
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 328,
                        "end": 329
                      },
                      "optional": false,
                      "computed": false,
                      "start": 325,
                      "end": 329
                    },
                    "directive": null,
                    "start": 325,
                    "end": 330
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 394,
                        "end": 396
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 397,
                        "end": 398
                      },
                      "optional": false,
                      "computed": false,
                      "start": 394,
                      "end": 398
                    },
                    "directive": null,
                    "start": 394,
                    "end": 399
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 522,
                        "end": 524
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 525,
                        "end": 526
                      },
                      "optional": false,
                      "computed": false,
                      "start": 522,
                      "end": 526
                    },
                    "directive": null,
                    "start": 522,
                    "end": 527
                  }
                ],
                "start": 51,
                "end": 588
              },
              "expression": false,
              "start": 48,
              "end": 588
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 42,
            "end": 588
          }
        ],
        "start": 11,
        "end": 590
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 590
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
        "start": 598,
        "end": 606
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 615,
        "end": 619
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
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 626,
              "end": 633
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 653,
                                "end": 657
                              },
                              "typeArguments": null,
                              "start": 653,
                              "end": 657
                            },
                            "start": 651,
                            "end": 657
                          },
                          "start": 650,
                          "end": 657
                        },
                        "init": null,
                        "definite": false,
                        "start": 650,
                        "end": 657
                      }
                    ],
                    "declare": false,
                    "start": 646,
                    "end": 658
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 675,
                                "end": 683
                              },
                              "typeArguments": null,
                              "start": 675,
                              "end": 683
                            },
                            "start": 673,
                            "end": 683
                          },
                          "start": 671,
                          "end": 683
                        },
                        "init": null,
                        "definite": false,
                        "start": 671,
                        "end": 683
                      }
                    ],
                    "declare": false,
                    "start": 667,
                    "end": 684
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 701,
                                "end": 709
                              },
                              "typeArguments": null,
                              "start": 701,
                              "end": 709
                            },
                            "start": 699,
                            "end": 709
                          },
                          "start": 697,
                          "end": 709
                        },
                        "init": null,
                        "definite": false,
                        "start": 697,
                        "end": 709
                      }
                    ],
                    "declare": false,
                    "start": 693,
                    "end": 710
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d3",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 727,
                                "end": 735
                              },
                              "typeArguments": null,
                              "start": 727,
                              "end": 735
                            },
                            "start": 725,
                            "end": 735
                          },
                          "start": 723,
                          "end": 735
                        },
                        "init": null,
                        "definite": false,
                        "start": 723,
                        "end": 735
                      }
                    ],
                    "declare": false,
                    "start": 719,
                    "end": 736
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d4",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 753,
                                "end": 761
                              },
                              "typeArguments": null,
                              "start": 753,
                              "end": 761
                            },
                            "start": 751,
                            "end": 761
                          },
                          "start": 749,
                          "end": 761
                        },
                        "init": null,
                        "definite": false,
                        "start": 749,
                        "end": 761
                      }
                    ],
                    "declare": false,
                    "start": 745,
                    "end": 762
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 772,
                        "end": 773
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 774,
                        "end": 775
                      },
                      "optional": false,
                      "computed": false,
                      "start": 772,
                      "end": 775
                    },
                    "directive": null,
                    "start": 772,
                    "end": 776
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 864,
                        "end": 866
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 867,
                        "end": 868
                      },
                      "optional": false,
                      "computed": false,
                      "start": 864,
                      "end": 868
                    },
                    "directive": null,
                    "start": 864,
                    "end": 869
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1002,
                        "end": 1004
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1005,
                        "end": 1006
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1002,
                      "end": 1006
                    },
                    "directive": null,
                    "start": 1002,
                    "end": 1007
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1094,
                        "end": 1096
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1097,
                        "end": 1098
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1094,
                      "end": 1098
                    },
                    "directive": null,
                    "start": 1094,
                    "end": 1099
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1222,
                        "end": 1224
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1225,
                        "end": 1226
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1222,
                      "end": 1226
                    },
                    "directive": null,
                    "start": 1222,
                    "end": 1227
                  }
                ],
                "start": 636,
                "end": 1311
              },
              "expression": false,
              "start": 633,
              "end": 1311
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 626,
            "end": 1311
          }
        ],
        "start": 620,
        "end": 1313
      },
      "abstract": false,
      "declare": false,
      "start": 592,
      "end": 1313
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
        "start": 1321,
        "end": 1329
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1338,
        "end": 1342
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
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1349,
              "end": 1356
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1376,
                                "end": 1380
                              },
                              "typeArguments": null,
                              "start": 1376,
                              "end": 1380
                            },
                            "start": 1374,
                            "end": 1380
                          },
                          "start": 1373,
                          "end": 1380
                        },
                        "init": null,
                        "definite": false,
                        "start": 1373,
                        "end": 1380
                      }
                    ],
                    "declare": false,
                    "start": 1369,
                    "end": 1381
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1398,
                                "end": 1406
                              },
                              "typeArguments": null,
                              "start": 1398,
                              "end": 1406
                            },
                            "start": 1396,
                            "end": 1406
                          },
                          "start": 1394,
                          "end": 1406
                        },
                        "init": null,
                        "definite": false,
                        "start": 1394,
                        "end": 1406
                      }
                    ],
                    "declare": false,
                    "start": 1390,
                    "end": 1407
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1424,
                                "end": 1432
                              },
                              "typeArguments": null,
                              "start": 1424,
                              "end": 1432
                            },
                            "start": 1422,
                            "end": 1432
                          },
                          "start": 1420,
                          "end": 1432
                        },
                        "init": null,
                        "definite": false,
                        "start": 1420,
                        "end": 1432
                      }
                    ],
                    "declare": false,
                    "start": 1416,
                    "end": 1433
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d3",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1450,
                                "end": 1458
                              },
                              "typeArguments": null,
                              "start": 1450,
                              "end": 1458
                            },
                            "start": 1448,
                            "end": 1458
                          },
                          "start": 1446,
                          "end": 1458
                        },
                        "init": null,
                        "definite": false,
                        "start": 1446,
                        "end": 1458
                      }
                    ],
                    "declare": false,
                    "start": 1442,
                    "end": 1459
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d4",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1476,
                                "end": 1484
                              },
                              "typeArguments": null,
                              "start": 1476,
                              "end": 1484
                            },
                            "start": 1474,
                            "end": 1484
                          },
                          "start": 1472,
                          "end": 1484
                        },
                        "init": null,
                        "definite": false,
                        "start": 1472,
                        "end": 1484
                      }
                    ],
                    "declare": false,
                    "start": 1468,
                    "end": 1485
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1495,
                        "end": 1496
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1497,
                        "end": 1498
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1495,
                      "end": 1498
                    },
                    "directive": null,
                    "start": 1495,
                    "end": 1499
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1587,
                        "end": 1589
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1590,
                        "end": 1591
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1587,
                      "end": 1591
                    },
                    "directive": null,
                    "start": 1587,
                    "end": 1592
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1679,
                        "end": 1681
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1682,
                        "end": 1683
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1679,
                      "end": 1683
                    },
                    "directive": null,
                    "start": 1679,
                    "end": 1684
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1817,
                        "end": 1819
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1820,
                        "end": 1821
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1817,
                      "end": 1821
                    },
                    "directive": null,
                    "start": 1817,
                    "end": 1822
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1945,
                        "end": 1947
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1948,
                        "end": 1949
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1945,
                      "end": 1949
                    },
                    "directive": null,
                    "start": 1945,
                    "end": 1950
                  }
                ],
                "start": 1359,
                "end": 2105
              },
              "expression": false,
              "start": 1356,
              "end": 2105
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1349,
            "end": 2105
          }
        ],
        "start": 1343,
        "end": 2107
      },
      "abstract": false,
      "declare": false,
      "start": 1315,
      "end": 2107
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
        "start": 2115,
        "end": 2123
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2132,
        "end": 2140
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
              "start": 2157,
              "end": 2158
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2160,
                "end": 2166
              },
              "start": 2158,
              "end": 2166
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 2147,
            "end": 2167
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2172,
              "end": 2179
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2199,
                                "end": 2203
                              },
                              "typeArguments": null,
                              "start": 2199,
                              "end": 2203
                            },
                            "start": 2197,
                            "end": 2203
                          },
                          "start": 2196,
                          "end": 2203
                        },
                        "init": null,
                        "definite": false,
                        "start": 2196,
                        "end": 2203
                      }
                    ],
                    "declare": false,
                    "start": 2192,
                    "end": 2204
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2221,
                                "end": 2229
                              },
                              "typeArguments": null,
                              "start": 2221,
                              "end": 2229
                            },
                            "start": 2219,
                            "end": 2229
                          },
                          "start": 2217,
                          "end": 2229
                        },
                        "init": null,
                        "definite": false,
                        "start": 2217,
                        "end": 2229
                      }
                    ],
                    "declare": false,
                    "start": 2213,
                    "end": 2230
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2247,
                                "end": 2255
                              },
                              "typeArguments": null,
                              "start": 2247,
                              "end": 2255
                            },
                            "start": 2245,
                            "end": 2255
                          },
                          "start": 2243,
                          "end": 2255
                        },
                        "init": null,
                        "definite": false,
                        "start": 2243,
                        "end": 2255
                      }
                    ],
                    "declare": false,
                    "start": 2239,
                    "end": 2256
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d3",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2273,
                                "end": 2281
                              },
                              "typeArguments": null,
                              "start": 2273,
                              "end": 2281
                            },
                            "start": 2271,
                            "end": 2281
                          },
                          "start": 2269,
                          "end": 2281
                        },
                        "init": null,
                        "definite": false,
                        "start": 2269,
                        "end": 2281
                      }
                    ],
                    "declare": false,
                    "start": 2265,
                    "end": 2282
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d4",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2299,
                                "end": 2307
                              },
                              "typeArguments": null,
                              "start": 2299,
                              "end": 2307
                            },
                            "start": 2297,
                            "end": 2307
                          },
                          "start": 2295,
                          "end": 2307
                        },
                        "init": null,
                        "definite": false,
                        "start": 2295,
                        "end": 2307
                      }
                    ],
                    "declare": false,
                    "start": 2291,
                    "end": 2308
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2318,
                        "end": 2319
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2320,
                        "end": 2321
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2318,
                      "end": 2321
                    },
                    "directive": null,
                    "start": 2318,
                    "end": 2322
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2410,
                        "end": 2412
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2413,
                        "end": 2414
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2410,
                      "end": 2414
                    },
                    "directive": null,
                    "start": 2410,
                    "end": 2415
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2502,
                        "end": 2504
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2505,
                        "end": 2506
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2502,
                      "end": 2506
                    },
                    "directive": null,
                    "start": 2502,
                    "end": 2507
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2594,
                        "end": 2596
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2597,
                        "end": 2598
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2594,
                      "end": 2598
                    },
                    "directive": null,
                    "start": 2594,
                    "end": 2599
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2663,
                        "end": 2665
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2666,
                        "end": 2667
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2663,
                      "end": 2667
                    },
                    "directive": null,
                    "start": 2663,
                    "end": 2668
                  }
                ],
                "start": 2182,
                "end": 2752
              },
              "expression": false,
              "start": 2179,
              "end": 2752
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2172,
            "end": 2752
          }
        ],
        "start": 2141,
        "end": 2754
      },
      "abstract": false,
      "declare": false,
      "start": 2109,
      "end": 2754
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2762,
        "end": 2770
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2779,
        "end": 2787
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
              "name": "method4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2794,
              "end": 2801
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2821,
                                "end": 2825
                              },
                              "typeArguments": null,
                              "start": 2821,
                              "end": 2825
                            },
                            "start": 2819,
                            "end": 2825
                          },
                          "start": 2818,
                          "end": 2825
                        },
                        "init": null,
                        "definite": false,
                        "start": 2818,
                        "end": 2825
                      }
                    ],
                    "declare": false,
                    "start": 2814,
                    "end": 2826
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2843,
                                "end": 2851
                              },
                              "typeArguments": null,
                              "start": 2843,
                              "end": 2851
                            },
                            "start": 2841,
                            "end": 2851
                          },
                          "start": 2839,
                          "end": 2851
                        },
                        "init": null,
                        "definite": false,
                        "start": 2839,
                        "end": 2851
                      }
                    ],
                    "declare": false,
                    "start": 2835,
                    "end": 2852
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2869,
                                "end": 2877
                              },
                              "typeArguments": null,
                              "start": 2869,
                              "end": 2877
                            },
                            "start": 2867,
                            "end": 2877
                          },
                          "start": 2865,
                          "end": 2877
                        },
                        "init": null,
                        "definite": false,
                        "start": 2865,
                        "end": 2877
                      }
                    ],
                    "declare": false,
                    "start": 2861,
                    "end": 2878
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d3",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2895,
                                "end": 2903
                              },
                              "typeArguments": null,
                              "start": 2895,
                              "end": 2903
                            },
                            "start": 2893,
                            "end": 2903
                          },
                          "start": 2891,
                          "end": 2903
                        },
                        "init": null,
                        "definite": false,
                        "start": 2891,
                        "end": 2903
                      }
                    ],
                    "declare": false,
                    "start": 2887,
                    "end": 2904
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d4",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2921,
                                "end": 2929
                              },
                              "typeArguments": null,
                              "start": 2921,
                              "end": 2929
                            },
                            "start": 2919,
                            "end": 2929
                          },
                          "start": 2917,
                          "end": 2929
                        },
                        "init": null,
                        "definite": false,
                        "start": 2917,
                        "end": 2929
                      }
                    ],
                    "declare": false,
                    "start": 2913,
                    "end": 2930
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2940,
                        "end": 2941
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2942,
                        "end": 2943
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2940,
                      "end": 2943
                    },
                    "directive": null,
                    "start": 2940,
                    "end": 2944
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3032,
                        "end": 3034
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3035,
                        "end": 3036
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3032,
                      "end": 3036
                    },
                    "directive": null,
                    "start": 3032,
                    "end": 3037
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3124,
                        "end": 3126
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3127,
                        "end": 3128
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3124,
                      "end": 3128
                    },
                    "directive": null,
                    "start": 3124,
                    "end": 3129
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3216,
                        "end": 3218
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3219,
                        "end": 3220
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3216,
                      "end": 3220
                    },
                    "directive": null,
                    "start": 3216,
                    "end": 3221
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3344,
                        "end": 3346
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3347,
                        "end": 3348
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3344,
                      "end": 3348
                    },
                    "directive": null,
                    "start": 3344,
                    "end": 3349
                  }
                ],
                "start": 2804,
                "end": 3479
              },
              "expression": false,
              "start": 2801,
              "end": 3479
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2794,
            "end": 3479
          }
        ],
        "start": 2788,
        "end": 3481
      },
      "abstract": false,
      "declare": false,
      "start": 2756,
      "end": 3481
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3491,
                  "end": 3495
                },
                "typeArguments": null,
                "start": 3491,
                "end": 3495
              },
              "start": 3489,
              "end": 3495
            },
            "start": 3488,
            "end": 3495
          },
          "init": null,
          "definite": false,
          "start": 3488,
          "end": 3495
        }
      ],
      "declare": false,
      "start": 3484,
      "end": 3496
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3505,
                  "end": 3513
                },
                "typeArguments": null,
                "start": 3505,
                "end": 3513
              },
              "start": 3503,
              "end": 3513
            },
            "start": 3501,
            "end": 3513
          },
          "init": null,
          "definite": false,
          "start": 3501,
          "end": 3513
        }
      ],
      "declare": false,
      "start": 3497,
      "end": 3514
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3523,
                  "end": 3531
                },
                "typeArguments": null,
                "start": 3523,
                "end": 3531
              },
              "start": 3521,
              "end": 3531
            },
            "start": 3519,
            "end": 3531
          },
          "init": null,
          "definite": false,
          "start": 3519,
          "end": 3531
        }
      ],
      "declare": false,
      "start": 3515,
      "end": 3532
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3541,
                  "end": 3549
                },
                "typeArguments": null,
                "start": 3541,
                "end": 3549
              },
              "start": 3539,
              "end": 3549
            },
            "start": 3537,
            "end": 3549
          },
          "init": null,
          "definite": false,
          "start": 3537,
          "end": 3549
        }
      ],
      "declare": false,
      "start": 3533,
      "end": 3550
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3559,
                  "end": 3567
                },
                "typeArguments": null,
                "start": 3559,
                "end": 3567
              },
              "start": 3557,
              "end": 3567
            },
            "start": 3555,
            "end": 3567
          },
          "init": null,
          "definite": false,
          "start": 3555,
          "end": 3567
        }
      ],
      "declare": false,
      "start": 3551,
      "end": 3568
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 3570,
          "end": 3571
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 3572,
          "end": 3573
        },
        "optional": false,
        "computed": false,
        "start": 3570,
        "end": 3573
      },
      "directive": null,
      "start": 3570,
      "end": 3574
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3688,
          "end": 3690
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 3691,
          "end": 3692
        },
        "optional": false,
        "computed": false,
        "start": 3688,
        "end": 3692
      },
      "directive": null,
      "start": 3688,
      "end": 3693
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3806,
          "end": 3808
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 3809,
          "end": 3810
        },
        "optional": false,
        "computed": false,
        "start": 3806,
        "end": 3810
      },
      "directive": null,
      "start": 3806,
      "end": 3811
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3924,
          "end": 3926
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 3927,
          "end": 3928
        },
        "optional": false,
        "computed": false,
        "start": 3924,
        "end": 3928
      },
      "directive": null,
      "start": 3924,
      "end": 3929
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d4",
          "optional": false,
          "typeAnnotation": null,
          "start": 4042,
          "end": 4044
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 4045,
          "end": 4046
        },
        "optional": false,
        "computed": false,
        "start": 4042,
        "end": 4046
      },
      "directive": null,
      "start": 4042,
      "end": 4047
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4159
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 17,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 61,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 68,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 82,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 86,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 90,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 108,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 112,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 116,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 134,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 138,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 142,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 160,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 164,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 168,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 256,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 325,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 394,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 522,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 592,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 598,
    "end": 606
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 607,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 615,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 626,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 636,
    "end": 637
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 646,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 653,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 667,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 671,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 675,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 683,
    "end": 684
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 693,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 697,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 701,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 719,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 723,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 727,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 745,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 749,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 753,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 864,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1002,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 1094,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 1222,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1315,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1321,
    "end": 1329
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1330,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1338,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 1349,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1369,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1376,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1390,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1394,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 1398,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1416,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1420,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1424,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1442,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 1446,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 1450,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1468,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 1472,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 1476,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1587,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1679,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 1817,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 1945,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2109,
    "end": 2114
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 2115,
    "end": 2123
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2124,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 2132,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 2147,
    "end": 2156
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2160,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Identifier",
    "value": "method3",
    "start": 2172,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2192,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2199,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2213,
    "end": 2216
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 2217,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 2221,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2239,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 2243,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 2247,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2265,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 2269,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 2273,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2291,
    "end": 2294
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 2295,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 2299,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 2410,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 2502,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2505,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 2594,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 2663,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2667,
    "end": 2668
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2756,
    "end": 2761
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 2762,
    "end": 2770
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2771,
    "end": 2778
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 2779,
    "end": 2787
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Identifier",
    "value": "method4",
    "start": 2794,
    "end": 2801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2814,
    "end": 2817
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2821,
    "end": 2825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2825,
    "end": 2826
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2835,
    "end": 2838
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 2839,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 2843,
    "end": 2851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2861,
    "end": 2864
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 2865,
    "end": 2867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 2869,
    "end": 2877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2877,
    "end": 2878
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2887,
    "end": 2890
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 2891,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 2895,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2913,
    "end": 2916
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 2917,
    "end": 2919
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 2921,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 3032,
    "end": 3034
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3034,
    "end": 3035
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3036,
    "end": 3037
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 3124,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3127,
    "end": 3128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 3216,
    "end": 3218
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3218,
    "end": 3219
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3220,
    "end": 3221
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 3344,
    "end": 3346
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3346,
    "end": 3347
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3347,
    "end": 3348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3348,
    "end": 3349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3478,
    "end": 3479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3480,
    "end": 3481
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3484,
    "end": 3487
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3488,
    "end": 3489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3491,
    "end": 3495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3495,
    "end": 3496
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3497,
    "end": 3500
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 3501,
    "end": 3503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3503,
    "end": 3504
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 3505,
    "end": 3513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3513,
    "end": 3514
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3515,
    "end": 3518
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 3519,
    "end": 3521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3521,
    "end": 3522
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 3523,
    "end": 3531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3531,
    "end": 3532
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3533,
    "end": 3536
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 3537,
    "end": 3539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 3541,
    "end": 3549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3549,
    "end": 3550
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3551,
    "end": 3554
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 3555,
    "end": 3557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3557,
    "end": 3558
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 3559,
    "end": 3567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3571,
    "end": 3572
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3572,
    "end": 3573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3573,
    "end": 3574
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 3688,
    "end": 3690
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3690,
    "end": 3691
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3691,
    "end": 3692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3692,
    "end": 3693
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 3806,
    "end": 3808
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3808,
    "end": 3809
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3809,
    "end": 3810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3810,
    "end": 3811
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 3924,
    "end": 3926
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3926,
    "end": 3927
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3927,
    "end": 3928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3928,
    "end": 3929
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 4042,
    "end": 4044
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4044,
    "end": 4045
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4045,
    "end": 4046
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4046,
    "end": 4047
  }
]
```
