__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4159,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 590,
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
        "end": 590,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 37,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 30,
                "end": 36
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 588,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 48,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 48,
              "end": 588,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 51,
                "end": 588,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 61,
                    "end": 73,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 65,
                        "end": 72,
                        "id": {
                          "type": "Identifier",
                          "start": 65,
                          "end": 72,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 66,
                            "end": 72,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 68,
                              "end": 72,
                              "typeName": {
                                "type": "Identifier",
                                "start": 68,
                                "end": 72,
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 82,
                    "end": 99,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 86,
                        "end": 98,
                        "id": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 98,
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 88,
                            "end": 98,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 90,
                              "end": 98,
                              "typeName": {
                                "type": "Identifier",
                                "start": 90,
                                "end": 98,
                                "decorators": [],
                                "name": "Derived1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 108,
                    "end": 125,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 112,
                        "end": 124,
                        "id": {
                          "type": "Identifier",
                          "start": 112,
                          "end": 124,
                          "decorators": [],
                          "name": "d2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 114,
                            "end": 124,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 116,
                              "end": 124,
                              "typeName": {
                                "type": "Identifier",
                                "start": 116,
                                "end": 124,
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 134,
                    "end": 151,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 138,
                        "end": 150,
                        "id": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 150,
                          "decorators": [],
                          "name": "d3",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 140,
                            "end": 150,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 142,
                              "end": 150,
                              "typeName": {
                                "type": "Identifier",
                                "start": 142,
                                "end": 150,
                                "decorators": [],
                                "name": "Derived3",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 160,
                    "end": 177,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 164,
                        "end": 176,
                        "id": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 176,
                          "decorators": [],
                          "name": "d4",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 166,
                            "end": 176,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 168,
                              "end": 176,
                              "typeName": {
                                "type": "Identifier",
                                "start": 168,
                                "end": 176,
                                "decorators": [],
                                "name": "Derived4",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 187,
                    "end": 191,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 187,
                      "end": 190,
                      "object": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 188,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 190,
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
                    "start": 256,
                    "end": 261,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 256,
                      "end": 260,
                      "object": {
                        "type": "Identifier",
                        "start": 256,
                        "end": 258,
                        "decorators": [],
                        "name": "d1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 259,
                        "end": 260,
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
                    "start": 325,
                    "end": 330,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 325,
                      "end": 329,
                      "object": {
                        "type": "Identifier",
                        "start": 325,
                        "end": 327,
                        "decorators": [],
                        "name": "d2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 328,
                        "end": 329,
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
                    "start": 394,
                    "end": 399,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 394,
                      "end": 398,
                      "object": {
                        "type": "Identifier",
                        "start": 394,
                        "end": 396,
                        "decorators": [],
                        "name": "d3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 397,
                        "end": 398,
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
                    "start": 522,
                    "end": 527,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 522,
                      "end": 526,
                      "object": {
                        "type": "Identifier",
                        "start": 522,
                        "end": 524,
                        "decorators": [],
                        "name": "d4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 525,
                        "end": 526,
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
            "static": false,
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
      "start": 592,
      "end": 1313,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 598,
        "end": 606,
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 615,
        "end": 619,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 620,
        "end": 1313,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 626,
            "end": 1311,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 626,
              "end": 633,
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 633,
              "end": 1311,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 636,
                "end": 1311,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 646,
                    "end": 658,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 650,
                        "end": 657,
                        "id": {
                          "type": "Identifier",
                          "start": 650,
                          "end": 657,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 651,
                            "end": 657,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 653,
                              "end": 657,
                              "typeName": {
                                "type": "Identifier",
                                "start": 653,
                                "end": 657,
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 667,
                    "end": 684,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 671,
                        "end": 683,
                        "id": {
                          "type": "Identifier",
                          "start": 671,
                          "end": 683,
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 673,
                            "end": 683,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 675,
                              "end": 683,
                              "typeName": {
                                "type": "Identifier",
                                "start": 675,
                                "end": 683,
                                "decorators": [],
                                "name": "Derived1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 693,
                    "end": 710,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 697,
                        "end": 709,
                        "id": {
                          "type": "Identifier",
                          "start": 697,
                          "end": 709,
                          "decorators": [],
                          "name": "d2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 699,
                            "end": 709,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 701,
                              "end": 709,
                              "typeName": {
                                "type": "Identifier",
                                "start": 701,
                                "end": 709,
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 719,
                    "end": 736,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 723,
                        "end": 735,
                        "id": {
                          "type": "Identifier",
                          "start": 723,
                          "end": 735,
                          "decorators": [],
                          "name": "d3",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 725,
                            "end": 735,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 727,
                              "end": 735,
                              "typeName": {
                                "type": "Identifier",
                                "start": 727,
                                "end": 735,
                                "decorators": [],
                                "name": "Derived3",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 745,
                    "end": 762,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 749,
                        "end": 761,
                        "id": {
                          "type": "Identifier",
                          "start": 749,
                          "end": 761,
                          "decorators": [],
                          "name": "d4",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 751,
                            "end": 761,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 753,
                              "end": 761,
                              "typeName": {
                                "type": "Identifier",
                                "start": 753,
                                "end": 761,
                                "decorators": [],
                                "name": "Derived4",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 772,
                    "end": 776,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 772,
                      "end": 775,
                      "object": {
                        "type": "Identifier",
                        "start": 772,
                        "end": 773,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 774,
                        "end": 775,
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
                    "start": 864,
                    "end": 869,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 864,
                      "end": 868,
                      "object": {
                        "type": "Identifier",
                        "start": 864,
                        "end": 866,
                        "decorators": [],
                        "name": "d1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 867,
                        "end": 868,
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
                    "start": 1002,
                    "end": 1007,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1002,
                      "end": 1006,
                      "object": {
                        "type": "Identifier",
                        "start": 1002,
                        "end": 1004,
                        "decorators": [],
                        "name": "d2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1005,
                        "end": 1006,
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
                    "start": 1094,
                    "end": 1099,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1094,
                      "end": 1098,
                      "object": {
                        "type": "Identifier",
                        "start": 1094,
                        "end": 1096,
                        "decorators": [],
                        "name": "d3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1097,
                        "end": 1098,
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
                    "start": 1222,
                    "end": 1227,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1222,
                      "end": 1226,
                      "object": {
                        "type": "Identifier",
                        "start": 1222,
                        "end": 1224,
                        "decorators": [],
                        "name": "d4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1225,
                        "end": 1226,
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
            "static": false,
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
      "start": 1315,
      "end": 2107,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1321,
        "end": 1329,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1338,
        "end": 1342,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1343,
        "end": 2107,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1349,
            "end": 2105,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1349,
              "end": 1356,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1356,
              "end": 2105,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1359,
                "end": 2105,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1369,
                    "end": 1381,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1373,
                        "end": 1380,
                        "id": {
                          "type": "Identifier",
                          "start": 1373,
                          "end": 1380,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1374,
                            "end": 1380,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1376,
                              "end": 1380,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1376,
                                "end": 1380,
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1390,
                    "end": 1407,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1394,
                        "end": 1406,
                        "id": {
                          "type": "Identifier",
                          "start": 1394,
                          "end": 1406,
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1396,
                            "end": 1406,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1398,
                              "end": 1406,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1398,
                                "end": 1406,
                                "decorators": [],
                                "name": "Derived1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1416,
                    "end": 1433,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1420,
                        "end": 1432,
                        "id": {
                          "type": "Identifier",
                          "start": 1420,
                          "end": 1432,
                          "decorators": [],
                          "name": "d2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1422,
                            "end": 1432,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1424,
                              "end": 1432,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1424,
                                "end": 1432,
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1442,
                    "end": 1459,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1446,
                        "end": 1458,
                        "id": {
                          "type": "Identifier",
                          "start": 1446,
                          "end": 1458,
                          "decorators": [],
                          "name": "d3",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1448,
                            "end": 1458,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1450,
                              "end": 1458,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1450,
                                "end": 1458,
                                "decorators": [],
                                "name": "Derived3",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1468,
                    "end": 1485,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1472,
                        "end": 1484,
                        "id": {
                          "type": "Identifier",
                          "start": 1472,
                          "end": 1484,
                          "decorators": [],
                          "name": "d4",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1474,
                            "end": 1484,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1476,
                              "end": 1484,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1476,
                                "end": 1484,
                                "decorators": [],
                                "name": "Derived4",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1495,
                    "end": 1499,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1495,
                      "end": 1498,
                      "object": {
                        "type": "Identifier",
                        "start": 1495,
                        "end": 1496,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1497,
                        "end": 1498,
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
                    "start": 1587,
                    "end": 1592,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1587,
                      "end": 1591,
                      "object": {
                        "type": "Identifier",
                        "start": 1587,
                        "end": 1589,
                        "decorators": [],
                        "name": "d1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1590,
                        "end": 1591,
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
                    "start": 1679,
                    "end": 1684,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1679,
                      "end": 1683,
                      "object": {
                        "type": "Identifier",
                        "start": 1679,
                        "end": 1681,
                        "decorators": [],
                        "name": "d2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1682,
                        "end": 1683,
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
                    "start": 1817,
                    "end": 1822,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1817,
                      "end": 1821,
                      "object": {
                        "type": "Identifier",
                        "start": 1817,
                        "end": 1819,
                        "decorators": [],
                        "name": "d3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1820,
                        "end": 1821,
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
                    "start": 1945,
                    "end": 1950,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1945,
                      "end": 1949,
                      "object": {
                        "type": "Identifier",
                        "start": 1945,
                        "end": 1947,
                        "decorators": [],
                        "name": "d4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1948,
                        "end": 1949,
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
            "static": false,
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
      "start": 2109,
      "end": 2754,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2115,
        "end": 2123,
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 2132,
        "end": 2140,
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2141,
        "end": 2754,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2147,
            "end": 2167,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2157,
              "end": 2158,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2158,
              "end": 2166,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2160,
                "end": 2166
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 2172,
            "end": 2752,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2172,
              "end": 2179,
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2179,
              "end": 2752,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2182,
                "end": 2752,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2192,
                    "end": 2204,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2196,
                        "end": 2203,
                        "id": {
                          "type": "Identifier",
                          "start": 2196,
                          "end": 2203,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2197,
                            "end": 2203,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2199,
                              "end": 2203,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2199,
                                "end": 2203,
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2213,
                    "end": 2230,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2217,
                        "end": 2229,
                        "id": {
                          "type": "Identifier",
                          "start": 2217,
                          "end": 2229,
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2219,
                            "end": 2229,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2221,
                              "end": 2229,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2221,
                                "end": 2229,
                                "decorators": [],
                                "name": "Derived1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2239,
                    "end": 2256,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2243,
                        "end": 2255,
                        "id": {
                          "type": "Identifier",
                          "start": 2243,
                          "end": 2255,
                          "decorators": [],
                          "name": "d2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2245,
                            "end": 2255,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2247,
                              "end": 2255,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2247,
                                "end": 2255,
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2265,
                    "end": 2282,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2269,
                        "end": 2281,
                        "id": {
                          "type": "Identifier",
                          "start": 2269,
                          "end": 2281,
                          "decorators": [],
                          "name": "d3",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2271,
                            "end": 2281,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2273,
                              "end": 2281,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2273,
                                "end": 2281,
                                "decorators": [],
                                "name": "Derived3",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2291,
                    "end": 2308,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2295,
                        "end": 2307,
                        "id": {
                          "type": "Identifier",
                          "start": 2295,
                          "end": 2307,
                          "decorators": [],
                          "name": "d4",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2297,
                            "end": 2307,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2299,
                              "end": 2307,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2299,
                                "end": 2307,
                                "decorators": [],
                                "name": "Derived4",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2318,
                    "end": 2322,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 2318,
                      "end": 2321,
                      "object": {
                        "type": "Identifier",
                        "start": 2318,
                        "end": 2319,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2320,
                        "end": 2321,
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
                    "start": 2410,
                    "end": 2415,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 2410,
                      "end": 2414,
                      "object": {
                        "type": "Identifier",
                        "start": 2410,
                        "end": 2412,
                        "decorators": [],
                        "name": "d1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2413,
                        "end": 2414,
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
                    "start": 2502,
                    "end": 2507,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 2502,
                      "end": 2506,
                      "object": {
                        "type": "Identifier",
                        "start": 2502,
                        "end": 2504,
                        "decorators": [],
                        "name": "d2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2505,
                        "end": 2506,
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
                    "start": 2594,
                    "end": 2599,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 2594,
                      "end": 2598,
                      "object": {
                        "type": "Identifier",
                        "start": 2594,
                        "end": 2596,
                        "decorators": [],
                        "name": "d3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2597,
                        "end": 2598,
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
                    "start": 2663,
                    "end": 2668,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 2663,
                      "end": 2667,
                      "object": {
                        "type": "Identifier",
                        "start": 2663,
                        "end": 2665,
                        "decorators": [],
                        "name": "d4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2666,
                        "end": 2667,
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
            "static": false,
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
      "start": 2756,
      "end": 3481,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2762,
        "end": 2770,
        "decorators": [],
        "name": "Derived4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 2779,
        "end": 2787,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2788,
        "end": 3481,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2794,
            "end": 3479,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2794,
              "end": 2801,
              "decorators": [],
              "name": "method4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2801,
              "end": 3479,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2804,
                "end": 3479,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2814,
                    "end": 2826,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2818,
                        "end": 2825,
                        "id": {
                          "type": "Identifier",
                          "start": 2818,
                          "end": 2825,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2819,
                            "end": 2825,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2821,
                              "end": 2825,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2821,
                                "end": 2825,
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2835,
                    "end": 2852,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2839,
                        "end": 2851,
                        "id": {
                          "type": "Identifier",
                          "start": 2839,
                          "end": 2851,
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2841,
                            "end": 2851,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2843,
                              "end": 2851,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2843,
                                "end": 2851,
                                "decorators": [],
                                "name": "Derived1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2861,
                    "end": 2878,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2865,
                        "end": 2877,
                        "id": {
                          "type": "Identifier",
                          "start": 2865,
                          "end": 2877,
                          "decorators": [],
                          "name": "d2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2867,
                            "end": 2877,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2869,
                              "end": 2877,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2869,
                                "end": 2877,
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2887,
                    "end": 2904,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2891,
                        "end": 2903,
                        "id": {
                          "type": "Identifier",
                          "start": 2891,
                          "end": 2903,
                          "decorators": [],
                          "name": "d3",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2893,
                            "end": 2903,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2895,
                              "end": 2903,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2895,
                                "end": 2903,
                                "decorators": [],
                                "name": "Derived3",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2913,
                    "end": 2930,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2917,
                        "end": 2929,
                        "id": {
                          "type": "Identifier",
                          "start": 2917,
                          "end": 2929,
                          "decorators": [],
                          "name": "d4",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2919,
                            "end": 2929,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2921,
                              "end": 2929,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2921,
                                "end": 2929,
                                "decorators": [],
                                "name": "Derived4",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2940,
                    "end": 2944,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 2940,
                      "end": 2943,
                      "object": {
                        "type": "Identifier",
                        "start": 2940,
                        "end": 2941,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2942,
                        "end": 2943,
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
                    "start": 3032,
                    "end": 3037,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 3032,
                      "end": 3036,
                      "object": {
                        "type": "Identifier",
                        "start": 3032,
                        "end": 3034,
                        "decorators": [],
                        "name": "d1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3035,
                        "end": 3036,
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
                    "start": 3124,
                    "end": 3129,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 3124,
                      "end": 3128,
                      "object": {
                        "type": "Identifier",
                        "start": 3124,
                        "end": 3126,
                        "decorators": [],
                        "name": "d2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3127,
                        "end": 3128,
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
                    "start": 3216,
                    "end": 3221,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 3216,
                      "end": 3220,
                      "object": {
                        "type": "Identifier",
                        "start": 3216,
                        "end": 3218,
                        "decorators": [],
                        "name": "d3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3219,
                        "end": 3220,
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
                    "start": 3344,
                    "end": 3349,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 3344,
                      "end": 3348,
                      "object": {
                        "type": "Identifier",
                        "start": 3344,
                        "end": 3346,
                        "decorators": [],
                        "name": "d4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3347,
                        "end": 3348,
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
            "static": false,
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
      "type": "VariableDeclaration",
      "start": 3484,
      "end": 3496,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3488,
          "end": 3495,
          "id": {
            "type": "Identifier",
            "start": 3488,
            "end": 3495,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3489,
              "end": 3495,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3491,
                "end": 3495,
                "typeName": {
                  "type": "Identifier",
                  "start": 3491,
                  "end": 3495,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3497,
      "end": 3514,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3501,
          "end": 3513,
          "id": {
            "type": "Identifier",
            "start": 3501,
            "end": 3513,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3503,
              "end": 3513,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3505,
                "end": 3513,
                "typeName": {
                  "type": "Identifier",
                  "start": 3505,
                  "end": 3513,
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3515,
      "end": 3532,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3519,
          "end": 3531,
          "id": {
            "type": "Identifier",
            "start": 3519,
            "end": 3531,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3521,
              "end": 3531,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3523,
                "end": 3531,
                "typeName": {
                  "type": "Identifier",
                  "start": 3523,
                  "end": 3531,
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3533,
      "end": 3550,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3537,
          "end": 3549,
          "id": {
            "type": "Identifier",
            "start": 3537,
            "end": 3549,
            "decorators": [],
            "name": "d3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3539,
              "end": 3549,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3541,
                "end": 3549,
                "typeName": {
                  "type": "Identifier",
                  "start": 3541,
                  "end": 3549,
                  "decorators": [],
                  "name": "Derived3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3551,
      "end": 3568,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3555,
          "end": 3567,
          "id": {
            "type": "Identifier",
            "start": 3555,
            "end": 3567,
            "decorators": [],
            "name": "d4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3557,
              "end": 3567,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3559,
                "end": 3567,
                "typeName": {
                  "type": "Identifier",
                  "start": 3559,
                  "end": 3567,
                  "decorators": [],
                  "name": "Derived4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 3570,
      "end": 3574,
      "expression": {
        "type": "MemberExpression",
        "start": 3570,
        "end": 3573,
        "object": {
          "type": "Identifier",
          "start": 3570,
          "end": 3571,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3572,
          "end": 3573,
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
      "start": 3688,
      "end": 3693,
      "expression": {
        "type": "MemberExpression",
        "start": 3688,
        "end": 3692,
        "object": {
          "type": "Identifier",
          "start": 3688,
          "end": 3690,
          "decorators": [],
          "name": "d1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3691,
          "end": 3692,
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
      "start": 3806,
      "end": 3811,
      "expression": {
        "type": "MemberExpression",
        "start": 3806,
        "end": 3810,
        "object": {
          "type": "Identifier",
          "start": 3806,
          "end": 3808,
          "decorators": [],
          "name": "d2",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3809,
          "end": 3810,
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
      "start": 3924,
      "end": 3929,
      "expression": {
        "type": "MemberExpression",
        "start": 3924,
        "end": 3928,
        "object": {
          "type": "Identifier",
          "start": 3924,
          "end": 3926,
          "decorators": [],
          "name": "d3",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 3927,
          "end": 3928,
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
      "start": 4042,
      "end": 4047,
      "expression": {
        "type": "MemberExpression",
        "start": 4042,
        "end": 4046,
        "object": {
          "type": "Identifier",
          "start": 4042,
          "end": 4044,
          "decorators": [],
          "name": "d4",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 4045,
          "end": 4046,
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
