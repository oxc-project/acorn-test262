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
        "name": "privateClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 18
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 19,
        "end": 22
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 48
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 49,
          "end": 52
        },
        "abstract": false,
        "declare": false,
        "start": 31,
        "end": 52
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 24,
      "end": 52
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPrivateGetAccessorTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 109
        },
        "typeParameters": null,
        "superClass": null,
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
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 147
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
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 163
                    },
                    "typeArguments": null,
                    "start": 151,
                    "end": 163
                  },
                  "start": 149,
                  "end": 163
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 190,
                        "end": 194
                      },
                      "start": 183,
                      "end": 195
                    }
                  ],
                  "start": 164,
                  "end": 201
                },
                "expression": false,
                "start": 147,
                "end": 201
              },
              "kind": "get",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 116,
              "end": 201
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 246
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
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 250,
                      "end": 262
                    },
                    "typeArguments": null,
                    "start": 250,
                    "end": 262
                  },
                  "start": 248,
                  "end": 262
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 280,
                        "end": 284
                      },
                      "start": 273,
                      "end": 285
                    }
                  ],
                  "start": 263,
                  "end": 291
                },
                "expression": false,
                "start": 246,
                "end": 291
              },
              "kind": "get",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 206,
              "end": 291
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 300,
                "end": 314
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
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 318,
                      "end": 330
                    },
                    "typeArguments": null,
                    "start": 318,
                    "end": 330
                  },
                  "start": 316,
                  "end": 330
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 357,
                        "end": 361
                      },
                      "start": 350,
                      "end": 362
                    }
                  ],
                  "start": 331,
                  "end": 368
                },
                "expression": false,
                "start": 314,
                "end": 368
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 296,
              "end": 368
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 385,
                "end": 400
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
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 404,
                      "end": 416
                    },
                    "typeArguments": null,
                    "start": 404,
                    "end": 416
                  },
                  "start": 402,
                  "end": 416
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 434,
                        "end": 438
                      },
                      "start": 427,
                      "end": 439
                    }
                  ],
                  "start": 417,
                  "end": 445
                },
                "expression": false,
                "start": 400,
                "end": 445
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 373,
              "end": 445
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicStaticMethod1",
                "optional": false,
                "typeAnnotation": null,
                "start": 461,
                "end": 482
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 515,
                          "end": 527
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 511,
                        "end": 529
                      },
                      "start": 504,
                      "end": 530
                    }
                  ],
                  "start": 485,
                  "end": 536
                },
                "expression": false,
                "start": 482,
                "end": 536
              },
              "kind": "get",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 450,
              "end": 536
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticMethod1",
                "optional": false,
                "typeAnnotation": null,
                "start": 560,
                "end": 582
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 606,
                          "end": 618
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 602,
                        "end": 620
                      },
                      "start": 595,
                      "end": 621
                    }
                  ],
                  "start": 585,
                  "end": 627
                },
                "expression": false,
                "start": 582,
                "end": 627
              },
              "kind": "get",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 541,
              "end": 627
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicMethod1",
                "optional": false,
                "typeAnnotation": null,
                "start": 636,
                "end": 651
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 684,
                          "end": 696
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 680,
                        "end": 698
                      },
                      "start": 673,
                      "end": 699
                    }
                  ],
                  "start": 654,
                  "end": 705
                },
                "expression": false,
                "start": 651,
                "end": 705
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 632,
              "end": 705
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateMethod1",
                "optional": false,
                "typeAnnotation": null,
                "start": 722,
                "end": 738
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 762,
                          "end": 774
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 758,
                        "end": 776
                      },
                      "start": 751,
                      "end": 777
                    }
                  ],
                  "start": 741,
                  "end": 783
                },
                "expression": false,
                "start": 738,
                "end": 783
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 710,
              "end": 783
            }
          ],
          "start": 110,
          "end": 785
        },
        "abstract": false,
        "declare": false,
        "start": 61,
        "end": 785
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 54,
      "end": 785
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPublicGetAccessorTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 800,
          "end": 841
        },
        "typeParameters": null,
        "superClass": null,
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
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 859,
                "end": 879
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
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 883,
                      "end": 894
                    },
                    "typeArguments": null,
                    "start": 883,
                    "end": 894
                  },
                  "start": 881,
                  "end": 894
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 912,
                        "end": 916
                      },
                      "start": 905,
                      "end": 917
                    }
                  ],
                  "start": 895,
                  "end": 923
                },
                "expression": false,
                "start": 879,
                "end": 923
              },
              "kind": "get",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 848,
              "end": 923
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 947,
                "end": 968
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
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 972,
                      "end": 983
                    },
                    "typeArguments": null,
                    "start": 972,
                    "end": 983
                  },
                  "start": 970,
                  "end": 983
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 1001,
                        "end": 1005
                      },
                      "start": 994,
                      "end": 1006
                    }
                  ],
                  "start": 984,
                  "end": 1012
                },
                "expression": false,
                "start": 968,
                "end": 1012
              },
              "kind": "get",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 928,
              "end": 1012
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 1021,
                "end": 1035
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
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1039,
                      "end": 1050
                    },
                    "typeArguments": null,
                    "start": 1039,
                    "end": 1050
                  },
                  "start": 1037,
                  "end": 1050
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 1068,
                        "end": 1072
                      },
                      "start": 1061,
                      "end": 1073
                    }
                  ],
                  "start": 1051,
                  "end": 1079
                },
                "expression": false,
                "start": 1035,
                "end": 1079
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1017,
              "end": 1079
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 1096,
                "end": 1111
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
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1115,
                      "end": 1126
                    },
                    "typeArguments": null,
                    "start": 1115,
                    "end": 1126
                  },
                  "start": 1113,
                  "end": 1126
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 1144,
                        "end": 1148
                      },
                      "start": 1137,
                      "end": 1149
                    }
                  ],
                  "start": 1127,
                  "end": 1155
                },
                "expression": false,
                "start": 1111,
                "end": 1155
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1084,
              "end": 1155
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicStaticMethod1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1171,
                "end": 1192
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1216,
                          "end": 1227
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 1212,
                        "end": 1229
                      },
                      "start": 1205,
                      "end": 1230
                    }
                  ],
                  "start": 1195,
                  "end": 1236
                },
                "expression": false,
                "start": 1192,
                "end": 1236
              },
              "kind": "get",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1160,
              "end": 1236
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticMethod1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1260,
                "end": 1282
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1306,
                          "end": 1317
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 1302,
                        "end": 1319
                      },
                      "start": 1295,
                      "end": 1320
                    }
                  ],
                  "start": 1285,
                  "end": 1326
                },
                "expression": false,
                "start": 1282,
                "end": 1326
              },
              "kind": "get",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1241,
              "end": 1326
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicMethod1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1335,
                "end": 1350
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1374,
                          "end": 1385
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 1370,
                        "end": 1387
                      },
                      "start": 1363,
                      "end": 1388
                    }
                  ],
                  "start": 1353,
                  "end": 1394
                },
                "expression": false,
                "start": 1350,
                "end": 1394
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1331,
              "end": 1394
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateMethod1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1411,
                "end": 1427
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1451,
                          "end": 1462
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 1447,
                        "end": 1464
                      },
                      "start": 1440,
                      "end": 1465
                    }
                  ],
                  "start": 1430,
                  "end": 1471
                },
                "expression": false,
                "start": 1427,
                "end": 1471
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1399,
              "end": 1471
            }
          ],
          "start": 842,
          "end": 1473
        },
        "abstract": false,
        "declare": false,
        "start": 794,
        "end": 1473
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 787,
      "end": 1473
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPrivateGetAccessorTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 1481,
        "end": 1524
      },
      "typeParameters": null,
      "superClass": null,
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
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1542,
              "end": 1562
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
                    "name": "privateClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1566,
                    "end": 1578
                  },
                  "typeArguments": null,
                  "start": 1566,
                  "end": 1578
                },
                "start": 1564,
                "end": 1578
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 1596,
                      "end": 1600
                    },
                    "start": 1589,
                    "end": 1601
                  }
                ],
                "start": 1579,
                "end": 1607
              },
              "expression": false,
              "start": 1562,
              "end": 1607
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1531,
            "end": 1607
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1631,
              "end": 1652
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
                    "name": "privateClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1656,
                    "end": 1668
                  },
                  "typeArguments": null,
                  "start": 1656,
                  "end": 1668
                },
                "start": 1654,
                "end": 1668
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 1686,
                      "end": 1690
                    },
                    "start": 1679,
                    "end": 1691
                  }
                ],
                "start": 1669,
                "end": 1697
              },
              "expression": false,
              "start": 1652,
              "end": 1697
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1612,
            "end": 1697
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1706,
              "end": 1720
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
                    "name": "privateClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1724,
                    "end": 1736
                  },
                  "typeArguments": null,
                  "start": 1724,
                  "end": 1736
                },
                "start": 1722,
                "end": 1736
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 1754,
                      "end": 1758
                    },
                    "start": 1747,
                    "end": 1759
                  }
                ],
                "start": 1737,
                "end": 1765
              },
              "expression": false,
              "start": 1720,
              "end": 1765
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1702,
            "end": 1765
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1782,
              "end": 1797
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
                    "name": "privateClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1801,
                    "end": 1813
                  },
                  "typeArguments": null,
                  "start": 1801,
                  "end": 1813
                },
                "start": 1799,
                "end": 1813
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 1831,
                      "end": 1835
                    },
                    "start": 1824,
                    "end": 1836
                  }
                ],
                "start": 1814,
                "end": 1842
              },
              "expression": false,
              "start": 1797,
              "end": 1842
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1770,
            "end": 1842
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicStaticMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1858,
              "end": 1879
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1903,
                        "end": 1915
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1899,
                      "end": 1917
                    },
                    "start": 1892,
                    "end": 1918
                  }
                ],
                "start": 1882,
                "end": 1924
              },
              "expression": false,
              "start": 1879,
              "end": 1924
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1847,
            "end": 1924
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1948,
              "end": 1970
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1994,
                        "end": 2006
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1990,
                      "end": 2008
                    },
                    "start": 1983,
                    "end": 2009
                  }
                ],
                "start": 1973,
                "end": 2015
              },
              "expression": false,
              "start": 1970,
              "end": 2015
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1929,
            "end": 2015
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2024,
              "end": 2039
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2063,
                        "end": 2075
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2059,
                      "end": 2077
                    },
                    "start": 2052,
                    "end": 2078
                  }
                ],
                "start": 2042,
                "end": 2084
              },
              "expression": false,
              "start": 2039,
              "end": 2084
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2020,
            "end": 2084
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2101,
              "end": 2117
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2141,
                        "end": 2153
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2137,
                      "end": 2155
                    },
                    "start": 2130,
                    "end": 2156
                  }
                ],
                "start": 2120,
                "end": 2162
              },
              "expression": false,
              "start": 2117,
              "end": 2162
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2089,
            "end": 2162
          }
        ],
        "start": 1525,
        "end": 2164
      },
      "abstract": false,
      "declare": false,
      "start": 1475,
      "end": 2164
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPublicGetAccessorTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 2172,
        "end": 2214
      },
      "typeParameters": null,
      "superClass": null,
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
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 2232,
              "end": 2252
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
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2256,
                    "end": 2267
                  },
                  "typeArguments": null,
                  "start": 2256,
                  "end": 2267
                },
                "start": 2254,
                "end": 2267
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 2285,
                      "end": 2289
                    },
                    "start": 2278,
                    "end": 2290
                  }
                ],
                "start": 2268,
                "end": 2296
              },
              "expression": false,
              "start": 2252,
              "end": 2296
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2221,
            "end": 2296
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 2320,
              "end": 2341
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
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2345,
                    "end": 2356
                  },
                  "typeArguments": null,
                  "start": 2345,
                  "end": 2356
                },
                "start": 2343,
                "end": 2356
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 2374,
                      "end": 2378
                    },
                    "start": 2367,
                    "end": 2379
                  }
                ],
                "start": 2357,
                "end": 2385
              },
              "expression": false,
              "start": 2341,
              "end": 2385
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2301,
            "end": 2385
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 2394,
              "end": 2408
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
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2412,
                    "end": 2423
                  },
                  "typeArguments": null,
                  "start": 2412,
                  "end": 2423
                },
                "start": 2410,
                "end": 2423
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 2441,
                      "end": 2445
                    },
                    "start": 2434,
                    "end": 2446
                  }
                ],
                "start": 2424,
                "end": 2452
              },
              "expression": false,
              "start": 2408,
              "end": 2452
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2390,
            "end": 2452
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 2469,
              "end": 2484
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
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2488,
                    "end": 2499
                  },
                  "typeArguments": null,
                  "start": 2488,
                  "end": 2499
                },
                "start": 2486,
                "end": 2499
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 2517,
                      "end": 2521
                    },
                    "start": 2510,
                    "end": 2522
                  }
                ],
                "start": 2500,
                "end": 2528
              },
              "expression": false,
              "start": 2484,
              "end": 2528
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2457,
            "end": 2528
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicStaticMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2544,
              "end": 2565
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2589,
                        "end": 2600
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2585,
                      "end": 2602
                    },
                    "start": 2578,
                    "end": 2603
                  }
                ],
                "start": 2568,
                "end": 2609
              },
              "expression": false,
              "start": 2565,
              "end": 2609
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2533,
            "end": 2609
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2633,
              "end": 2655
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2679,
                        "end": 2690
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2675,
                      "end": 2692
                    },
                    "start": 2668,
                    "end": 2693
                  }
                ],
                "start": 2658,
                "end": 2699
              },
              "expression": false,
              "start": 2655,
              "end": 2699
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2614,
            "end": 2699
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2708,
              "end": 2723
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2747,
                        "end": 2758
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2743,
                      "end": 2760
                    },
                    "start": 2736,
                    "end": 2761
                  }
                ],
                "start": 2726,
                "end": 2767
              },
              "expression": false,
              "start": 2723,
              "end": 2767
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2704,
            "end": 2767
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2784,
              "end": 2800
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2824,
                        "end": 2835
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2820,
                      "end": 2837
                    },
                    "start": 2813,
                    "end": 2838
                  }
                ],
                "start": 2803,
                "end": 2844
              },
              "expression": false,
              "start": 2800,
              "end": 2844
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2772,
            "end": 2844
          }
        ],
        "start": 2215,
        "end": 2846
      },
      "abstract": false,
      "declare": false,
      "start": 2166,
      "end": 2846
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPrivateSetAccessorTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 2861,
          "end": 2903
        },
        "typeParameters": null,
        "superClass": null,
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
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 2921,
                "end": 2941
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
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2949,
                          "end": 2961
                        },
                        "typeArguments": null,
                        "start": 2949,
                        "end": 2961
                      },
                      "start": 2947,
                      "end": 2961
                    },
                    "start": 2942,
                    "end": 2961
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 2963,
                  "end": 2979
                },
                "expression": false,
                "start": 2941,
                "end": 2979
              },
              "kind": "set",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2910,
              "end": 2979
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 3003,
                "end": 3024
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
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3032,
                          "end": 3044
                        },
                        "typeArguments": null,
                        "start": 3032,
                        "end": 3044
                      },
                      "start": 3030,
                      "end": 3044
                    },
                    "start": 3025,
                    "end": 3044
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3046,
                  "end": 3053
                },
                "expression": false,
                "start": 3024,
                "end": 3053
              },
              "kind": "set",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 2984,
              "end": 3053
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 3062,
                "end": 3076
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
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3084,
                          "end": 3096
                        },
                        "typeArguments": null,
                        "start": 3084,
                        "end": 3096
                      },
                      "start": 3082,
                      "end": 3096
                    },
                    "start": 3077,
                    "end": 3096
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3098,
                  "end": 3114
                },
                "expression": false,
                "start": 3076,
                "end": 3114
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3058,
              "end": 3114
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 3131,
                "end": 3146
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
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3154,
                          "end": 3166
                        },
                        "typeArguments": null,
                        "start": 3154,
                        "end": 3166
                      },
                      "start": 3152,
                      "end": 3166
                    },
                    "start": 3147,
                    "end": 3166
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3168,
                  "end": 3175
                },
                "expression": false,
                "start": 3146,
                "end": 3175
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 3119,
              "end": 3175
            }
          ],
          "start": 2904,
          "end": 3177
        },
        "abstract": false,
        "declare": false,
        "start": 2855,
        "end": 3177
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2848,
      "end": 3177
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPublicSetAccessorTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 3192,
          "end": 3233
        },
        "typeParameters": null,
        "superClass": null,
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
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 3251,
                "end": 3271
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
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3279,
                          "end": 3290
                        },
                        "typeArguments": null,
                        "start": 3279,
                        "end": 3290
                      },
                      "start": 3277,
                      "end": 3290
                    },
                    "start": 3272,
                    "end": 3290
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3292,
                  "end": 3299
                },
                "expression": false,
                "start": 3271,
                "end": 3299
              },
              "kind": "set",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3240,
              "end": 3299
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 3323,
                "end": 3344
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
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3352,
                          "end": 3363
                        },
                        "typeArguments": null,
                        "start": 3352,
                        "end": 3363
                      },
                      "start": 3350,
                      "end": 3363
                    },
                    "start": 3345,
                    "end": 3363
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3365,
                  "end": 3372
                },
                "expression": false,
                "start": 3344,
                "end": 3372
              },
              "kind": "set",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 3304,
              "end": 3372
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 3381,
                "end": 3395
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
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3403,
                          "end": 3414
                        },
                        "typeArguments": null,
                        "start": 3403,
                        "end": 3414
                      },
                      "start": 3401,
                      "end": 3414
                    },
                    "start": 3396,
                    "end": 3414
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3416,
                  "end": 3423
                },
                "expression": false,
                "start": 3395,
                "end": 3423
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3377,
              "end": 3423
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 3440,
                "end": 3455
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
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3463,
                          "end": 3474
                        },
                        "typeArguments": null,
                        "start": 3463,
                        "end": 3474
                      },
                      "start": 3461,
                      "end": 3474
                    },
                    "start": 3456,
                    "end": 3474
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3476,
                  "end": 3483
                },
                "expression": false,
                "start": 3455,
                "end": 3483
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 3428,
              "end": 3483
            }
          ],
          "start": 3234,
          "end": 3485
        },
        "abstract": false,
        "declare": false,
        "start": 3186,
        "end": 3485
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3179,
      "end": 3485
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPrivateSetAccessorTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 3493,
        "end": 3536
      },
      "typeParameters": null,
      "superClass": null,
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
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 3554,
              "end": 3574
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3582,
                        "end": 3594
                      },
                      "typeArguments": null,
                      "start": 3582,
                      "end": 3594
                    },
                    "start": 3580,
                    "end": 3594
                  },
                  "start": 3575,
                  "end": 3594
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3596,
                "end": 3603
              },
              "expression": false,
              "start": 3574,
              "end": 3603
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3543,
            "end": 3603
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 3627,
              "end": 3648
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3656,
                        "end": 3668
                      },
                      "typeArguments": null,
                      "start": 3656,
                      "end": 3668
                    },
                    "start": 3654,
                    "end": 3668
                  },
                  "start": 3649,
                  "end": 3668
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3670,
                "end": 3677
              },
              "expression": false,
              "start": 3648,
              "end": 3677
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3608,
            "end": 3677
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 3686,
              "end": 3700
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3708,
                        "end": 3720
                      },
                      "typeArguments": null,
                      "start": 3708,
                      "end": 3720
                    },
                    "start": 3706,
                    "end": 3720
                  },
                  "start": 3701,
                  "end": 3720
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3722,
                "end": 3730
              },
              "expression": false,
              "start": 3700,
              "end": 3730
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3682,
            "end": 3730
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 3747,
              "end": 3762
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3770,
                        "end": 3782
                      },
                      "typeArguments": null,
                      "start": 3770,
                      "end": 3782
                    },
                    "start": 3768,
                    "end": 3782
                  },
                  "start": 3763,
                  "end": 3782
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3784,
                "end": 3791
              },
              "expression": false,
              "start": 3762,
              "end": 3791
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3735,
            "end": 3791
          }
        ],
        "start": 3537,
        "end": 3793
      },
      "abstract": false,
      "declare": false,
      "start": 3487,
      "end": 3793
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPublicSetAccessorTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 3801,
        "end": 3843
      },
      "typeParameters": null,
      "superClass": null,
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
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 3861,
              "end": 3881
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3889,
                        "end": 3900
                      },
                      "typeArguments": null,
                      "start": 3889,
                      "end": 3900
                    },
                    "start": 3887,
                    "end": 3900
                  },
                  "start": 3882,
                  "end": 3900
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3902,
                "end": 3909
              },
              "expression": false,
              "start": 3881,
              "end": 3909
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3850,
            "end": 3909
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 3933,
              "end": 3954
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3962,
                        "end": 3973
                      },
                      "typeArguments": null,
                      "start": 3962,
                      "end": 3973
                    },
                    "start": 3960,
                    "end": 3973
                  },
                  "start": 3955,
                  "end": 3973
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3975,
                "end": 3982
              },
              "expression": false,
              "start": 3954,
              "end": 3982
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3914,
            "end": 3982
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 3991,
              "end": 4005
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4013,
                        "end": 4024
                      },
                      "typeArguments": null,
                      "start": 4013,
                      "end": 4024
                    },
                    "start": 4011,
                    "end": 4024
                  },
                  "start": 4006,
                  "end": 4024
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 4026,
                "end": 4033
              },
              "expression": false,
              "start": 4005,
              "end": 4033
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3987,
            "end": 4033
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 4050,
              "end": 4065
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4073,
                        "end": 4084
                      },
                      "typeArguments": null,
                      "start": 4073,
                      "end": 4084
                    },
                    "start": 4071,
                    "end": 4084
                  },
                  "start": 4066,
                  "end": 4084
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 4086,
                "end": 4093
              },
              "expression": false,
              "start": 4065,
              "end": 4093
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 4038,
            "end": 4093
          }
        ],
        "start": 3844,
        "end": 4095
      },
      "abstract": false,
      "declare": false,
      "start": 3795,
      "end": 4095
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithPrivateModuleGetAccessorTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 4110,
          "end": 4154
        },
        "typeParameters": null,
        "superClass": null,
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
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 4172,
                "end": 4192
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
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4196,
                        "end": 4209
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4210,
                        "end": 4221
                      },
                      "start": 4196,
                      "end": 4221
                    },
                    "typeArguments": null,
                    "start": 4196,
                    "end": 4221
                  },
                  "start": 4194,
                  "end": 4221
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 4248,
                        "end": 4252
                      },
                      "start": 4241,
                      "end": 4253
                    }
                  ],
                  "start": 4222,
                  "end": 4259
                },
                "expression": false,
                "start": 4192,
                "end": 4259
              },
              "kind": "get",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4161,
              "end": 4259
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 4268,
                "end": 4282
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
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4286,
                        "end": 4299
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4300,
                        "end": 4311
                      },
                      "start": 4286,
                      "end": 4311
                    },
                    "typeArguments": null,
                    "start": 4286,
                    "end": 4311
                  },
                  "start": 4284,
                  "end": 4311
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 4338,
                        "end": 4342
                      },
                      "start": 4331,
                      "end": 4343
                    }
                  ],
                  "start": 4312,
                  "end": 4349
                },
                "expression": false,
                "start": 4282,
                "end": 4349
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4264,
              "end": 4349
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicStaticMethod1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4365,
                "end": 4386
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4419,
                            "end": 4432
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4433,
                            "end": 4444
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4419,
                          "end": 4444
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 4415,
                        "end": 4446
                      },
                      "start": 4408,
                      "end": 4447
                    }
                  ],
                  "start": 4389,
                  "end": 4453
                },
                "expression": false,
                "start": 4386,
                "end": 4453
              },
              "kind": "get",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4354,
              "end": 4453
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicMethod1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4462,
                "end": 4477
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4510,
                            "end": 4523
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4524,
                            "end": 4535
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4510,
                          "end": 4535
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 4506,
                        "end": 4537
                      },
                      "start": 4499,
                      "end": 4538
                    }
                  ],
                  "start": 4480,
                  "end": 4544
                },
                "expression": false,
                "start": 4477,
                "end": 4544
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4458,
              "end": 4544
            }
          ],
          "start": 4155,
          "end": 4546
        },
        "abstract": false,
        "declare": false,
        "start": 4104,
        "end": 4546
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4097,
      "end": 4546
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithPrivateModuleSetAccessorTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 4561,
          "end": 4605
        },
        "typeParameters": null,
        "superClass": null,
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
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 4623,
                "end": 4643
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
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4651,
                            "end": 4664
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4665,
                            "end": 4676
                          },
                          "start": 4651,
                          "end": 4676
                        },
                        "typeArguments": null,
                        "start": 4651,
                        "end": 4676
                      },
                      "start": 4649,
                      "end": 4676
                    },
                    "start": 4644,
                    "end": 4676
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4678,
                  "end": 4694
                },
                "expression": false,
                "start": 4643,
                "end": 4694
              },
              "kind": "set",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4612,
              "end": 4694
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 4703,
                "end": 4717
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
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4725,
                            "end": 4738
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4739,
                            "end": 4750
                          },
                          "start": 4725,
                          "end": 4750
                        },
                        "typeArguments": null,
                        "start": 4725,
                        "end": 4750
                      },
                      "start": 4723,
                      "end": 4750
                    },
                    "start": 4718,
                    "end": 4750
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 4752,
                  "end": 4768
                },
                "expression": false,
                "start": 4717,
                "end": 4768
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4699,
              "end": 4768
            }
          ],
          "start": 4606,
          "end": 4770
        },
        "abstract": false,
        "declare": false,
        "start": 4555,
        "end": 4770
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4548,
      "end": 4770
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithPrivateModuleGetAccessorTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 4778,
        "end": 4823
      },
      "typeParameters": null,
      "superClass": null,
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
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 4841,
              "end": 4861
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
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4865,
                      "end": 4878
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4879,
                      "end": 4890
                    },
                    "start": 4865,
                    "end": 4890
                  },
                  "typeArguments": null,
                  "start": 4865,
                  "end": 4890
                },
                "start": 4863,
                "end": 4890
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 4908,
                      "end": 4912
                    },
                    "start": 4901,
                    "end": 4913
                  }
                ],
                "start": 4891,
                "end": 4919
              },
              "expression": false,
              "start": 4861,
              "end": 4919
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4830,
            "end": 4919
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 4928,
              "end": 4942
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
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4946,
                      "end": 4959
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4960,
                      "end": 4971
                    },
                    "start": 4946,
                    "end": 4971
                  },
                  "typeArguments": null,
                  "start": 4946,
                  "end": 4971
                },
                "start": 4944,
                "end": 4971
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 4989,
                      "end": 4993
                    },
                    "start": 4982,
                    "end": 4994
                  }
                ],
                "start": 4972,
                "end": 5000
              },
              "expression": false,
              "start": 4942,
              "end": 5000
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4924,
            "end": 5000
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicStaticMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 5016,
              "end": 5037
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5061,
                          "end": 5074
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5075,
                          "end": 5086
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5061,
                        "end": 5086
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 5057,
                      "end": 5088
                    },
                    "start": 5050,
                    "end": 5089
                  }
                ],
                "start": 5040,
                "end": 5095
              },
              "expression": false,
              "start": 5037,
              "end": 5095
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5005,
            "end": 5095
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 5104,
              "end": 5119
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5143,
                          "end": 5156
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5157,
                          "end": 5168
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5143,
                        "end": 5168
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 5139,
                      "end": 5170
                    },
                    "start": 5132,
                    "end": 5171
                  }
                ],
                "start": 5122,
                "end": 5177
              },
              "expression": false,
              "start": 5119,
              "end": 5177
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5100,
            "end": 5177
          }
        ],
        "start": 4824,
        "end": 5179
      },
      "abstract": false,
      "declare": false,
      "start": 4772,
      "end": 5179
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithPrivateModuleSetAccessorTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 5187,
        "end": 5232
      },
      "typeParameters": null,
      "superClass": null,
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
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 5250,
              "end": 5270
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5278,
                          "end": 5291
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5292,
                          "end": 5303
                        },
                        "start": 5278,
                        "end": 5303
                      },
                      "typeArguments": null,
                      "start": 5278,
                      "end": 5303
                    },
                    "start": 5276,
                    "end": 5303
                  },
                  "start": 5271,
                  "end": 5303
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 5305,
                "end": 5312
              },
              "expression": false,
              "start": 5270,
              "end": 5312
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5239,
            "end": 5312
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 5321,
              "end": 5335
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5343,
                          "end": 5356
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5357,
                          "end": 5368
                        },
                        "start": 5343,
                        "end": 5368
                      },
                      "typeArguments": null,
                      "start": 5343,
                      "end": 5368
                    },
                    "start": 5341,
                    "end": 5368
                  },
                  "start": 5336,
                  "end": 5368
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 5370,
                "end": 5377
              },
              "expression": false,
              "start": 5335,
              "end": 5377
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5317,
            "end": 5377
          }
        ],
        "start": 5233,
        "end": 5379
      },
      "abstract": false,
      "declare": false,
      "start": 5181,
      "end": 5379
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicModule",
          "optional": false,
          "typeAnnotation": null,
          "start": 5395,
          "end": 5407
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 5420,
                "end": 5432
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 5433,
                "end": 5440
              },
              "abstract": false,
              "declare": false,
              "start": 5414,
              "end": 5440
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5459,
                  "end": 5470
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 5471,
                  "end": 5478
                },
                "abstract": false,
                "declare": false,
                "start": 5453,
                "end": 5478
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 5446,
              "end": 5478
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithWithPrivateGetAccessorTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5496,
                  "end": 5538
                },
                "typeParameters": null,
                "superClass": null,
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
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5560,
                        "end": 5580
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
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5584,
                              "end": 5596
                            },
                            "typeArguments": null,
                            "start": 5584,
                            "end": 5596
                          },
                          "start": 5582,
                          "end": 5596
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 5627,
                                "end": 5631
                              },
                              "start": 5620,
                              "end": 5632
                            }
                          ],
                          "start": 5597,
                          "end": 5642
                        },
                        "expression": false,
                        "start": 5580,
                        "end": 5642
                      },
                      "kind": "get",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 5549,
                      "end": 5642
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateStaticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5670,
                        "end": 5691
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
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5695,
                              "end": 5707
                            },
                            "typeArguments": null,
                            "start": 5695,
                            "end": 5707
                          },
                          "start": 5693,
                          "end": 5707
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 5729,
                                "end": 5733
                              },
                              "start": 5722,
                              "end": 5734
                            }
                          ],
                          "start": 5708,
                          "end": 5744
                        },
                        "expression": false,
                        "start": 5691,
                        "end": 5744
                      },
                      "kind": "get",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 5651,
                      "end": 5744
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5757,
                        "end": 5771
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
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5775,
                              "end": 5787
                            },
                            "typeArguments": null,
                            "start": 5775,
                            "end": 5787
                          },
                          "start": 5773,
                          "end": 5787
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 5818,
                                "end": 5822
                              },
                              "start": 5811,
                              "end": 5823
                            }
                          ],
                          "start": 5788,
                          "end": 5833
                        },
                        "expression": false,
                        "start": 5771,
                        "end": 5833
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 5753,
                      "end": 5833
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5854,
                        "end": 5869
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
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5873,
                              "end": 5885
                            },
                            "typeArguments": null,
                            "start": 5873,
                            "end": 5885
                          },
                          "start": 5871,
                          "end": 5885
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 5907,
                                "end": 5911
                              },
                              "start": 5900,
                              "end": 5912
                            }
                          ],
                          "start": 5886,
                          "end": 5922
                        },
                        "expression": false,
                        "start": 5869,
                        "end": 5922
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 5842,
                      "end": 5922
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicStaticMethod1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5942,
                        "end": 5963
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
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6000,
                                  "end": 6012
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 5996,
                                "end": 6014
                              },
                              "start": 5989,
                              "end": 6015
                            }
                          ],
                          "start": 5966,
                          "end": 6025
                        },
                        "expression": false,
                        "start": 5963,
                        "end": 6025
                      },
                      "kind": "get",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 5931,
                      "end": 6025
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateStaticMethod1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6053,
                        "end": 6075
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
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6103,
                                  "end": 6115
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 6099,
                                "end": 6117
                              },
                              "start": 6092,
                              "end": 6118
                            }
                          ],
                          "start": 6078,
                          "end": 6128
                        },
                        "expression": false,
                        "start": 6075,
                        "end": 6128
                      },
                      "kind": "get",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 6034,
                      "end": 6128
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicMethod1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6141,
                        "end": 6156
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
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6193,
                                  "end": 6205
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 6189,
                                "end": 6207
                              },
                              "start": 6182,
                              "end": 6208
                            }
                          ],
                          "start": 6159,
                          "end": 6218
                        },
                        "expression": false,
                        "start": 6156,
                        "end": 6218
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6137,
                      "end": 6218
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateMethod1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6239,
                        "end": 6255
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
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6283,
                                  "end": 6295
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 6279,
                                "end": 6297
                              },
                              "start": 6272,
                              "end": 6298
                            }
                          ],
                          "start": 6258,
                          "end": 6308
                        },
                        "expression": false,
                        "start": 6255,
                        "end": 6308
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 6227,
                      "end": 6308
                    }
                  ],
                  "start": 5539,
                  "end": 6314
                },
                "abstract": false,
                "declare": false,
                "start": 5490,
                "end": 6314
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 5483,
              "end": 6314
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithWithPublicGetAccessorTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6333,
                  "end": 6374
                },
                "typeParameters": null,
                "superClass": null,
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
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6396,
                        "end": 6416
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
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6420,
                              "end": 6431
                            },
                            "typeArguments": null,
                            "start": 6420,
                            "end": 6431
                          },
                          "start": 6418,
                          "end": 6431
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 6453,
                                "end": 6457
                              },
                              "start": 6446,
                              "end": 6458
                            }
                          ],
                          "start": 6432,
                          "end": 6468
                        },
                        "expression": false,
                        "start": 6416,
                        "end": 6468
                      },
                      "kind": "get",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6385,
                      "end": 6468
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateStaticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6496,
                        "end": 6517
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
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6521,
                              "end": 6532
                            },
                            "typeArguments": null,
                            "start": 6521,
                            "end": 6532
                          },
                          "start": 6519,
                          "end": 6532
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 6554,
                                "end": 6558
                              },
                              "start": 6547,
                              "end": 6559
                            }
                          ],
                          "start": 6533,
                          "end": 6569
                        },
                        "expression": false,
                        "start": 6517,
                        "end": 6569
                      },
                      "kind": "get",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 6477,
                      "end": 6569
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6582,
                        "end": 6596
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
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6600,
                              "end": 6611
                            },
                            "typeArguments": null,
                            "start": 6600,
                            "end": 6611
                          },
                          "start": 6598,
                          "end": 6611
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 6633,
                                "end": 6637
                              },
                              "start": 6626,
                              "end": 6638
                            }
                          ],
                          "start": 6612,
                          "end": 6648
                        },
                        "expression": false,
                        "start": 6596,
                        "end": 6648
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6578,
                      "end": 6648
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6669,
                        "end": 6684
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
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6688,
                              "end": 6699
                            },
                            "typeArguments": null,
                            "start": 6688,
                            "end": 6699
                          },
                          "start": 6686,
                          "end": 6699
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 6721,
                                "end": 6725
                              },
                              "start": 6714,
                              "end": 6726
                            }
                          ],
                          "start": 6700,
                          "end": 6736
                        },
                        "expression": false,
                        "start": 6684,
                        "end": 6736
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 6657,
                      "end": 6736
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicStaticMethod1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6756,
                        "end": 6777
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
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6805,
                                  "end": 6816
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 6801,
                                "end": 6818
                              },
                              "start": 6794,
                              "end": 6819
                            }
                          ],
                          "start": 6780,
                          "end": 6829
                        },
                        "expression": false,
                        "start": 6777,
                        "end": 6829
                      },
                      "kind": "get",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6745,
                      "end": 6829
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateStaticMethod1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6857,
                        "end": 6879
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
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6907,
                                  "end": 6918
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 6903,
                                "end": 6920
                              },
                              "start": 6896,
                              "end": 6921
                            }
                          ],
                          "start": 6882,
                          "end": 6931
                        },
                        "expression": false,
                        "start": 6879,
                        "end": 6931
                      },
                      "kind": "get",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 6838,
                      "end": 6931
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicMethod1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6944,
                        "end": 6959
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
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6987,
                                  "end": 6998
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 6983,
                                "end": 7000
                              },
                              "start": 6976,
                              "end": 7001
                            }
                          ],
                          "start": 6962,
                          "end": 7011
                        },
                        "expression": false,
                        "start": 6959,
                        "end": 7011
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6940,
                      "end": 7011
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateMethod1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7032,
                        "end": 7048
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
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7076,
                                  "end": 7087
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 7072,
                                "end": 7089
                              },
                              "start": 7065,
                              "end": 7090
                            }
                          ],
                          "start": 7051,
                          "end": 7100
                        },
                        "expression": false,
                        "start": 7048,
                        "end": 7100
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 7020,
                      "end": 7100
                    }
                  ],
                  "start": 6375,
                  "end": 7106
                },
                "abstract": false,
                "declare": false,
                "start": 6327,
                "end": 7106
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6320,
              "end": 7106
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithWithPrivateGetAccessorTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 7118,
                "end": 7161
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7183,
                      "end": 7203
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
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7207,
                            "end": 7219
                          },
                          "typeArguments": null,
                          "start": 7207,
                          "end": 7219
                        },
                        "start": 7205,
                        "end": 7219
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 7241,
                              "end": 7245
                            },
                            "start": 7234,
                            "end": 7246
                          }
                        ],
                        "start": 7220,
                        "end": 7256
                      },
                      "expression": false,
                      "start": 7203,
                      "end": 7256
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7172,
                    "end": 7256
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7284,
                      "end": 7305
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
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7309,
                            "end": 7321
                          },
                          "typeArguments": null,
                          "start": 7309,
                          "end": 7321
                        },
                        "start": 7307,
                        "end": 7321
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 7343,
                              "end": 7347
                            },
                            "start": 7336,
                            "end": 7348
                          }
                        ],
                        "start": 7322,
                        "end": 7358
                      },
                      "expression": false,
                      "start": 7305,
                      "end": 7358
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 7265,
                    "end": 7358
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7371,
                      "end": 7385
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
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7389,
                            "end": 7401
                          },
                          "typeArguments": null,
                          "start": 7389,
                          "end": 7401
                        },
                        "start": 7387,
                        "end": 7401
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 7423,
                              "end": 7427
                            },
                            "start": 7416,
                            "end": 7428
                          }
                        ],
                        "start": 7402,
                        "end": 7438
                      },
                      "expression": false,
                      "start": 7385,
                      "end": 7438
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7367,
                    "end": 7438
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7459,
                      "end": 7474
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
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7478,
                            "end": 7490
                          },
                          "typeArguments": null,
                          "start": 7478,
                          "end": 7490
                        },
                        "start": 7476,
                        "end": 7490
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 7512,
                              "end": 7516
                            },
                            "start": 7505,
                            "end": 7517
                          }
                        ],
                        "start": 7491,
                        "end": 7527
                      },
                      "expression": false,
                      "start": 7474,
                      "end": 7527
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 7447,
                    "end": 7527
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7547,
                      "end": 7568
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7596,
                                "end": 7608
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 7592,
                              "end": 7610
                            },
                            "start": 7585,
                            "end": 7611
                          }
                        ],
                        "start": 7571,
                        "end": 7621
                      },
                      "expression": false,
                      "start": 7568,
                      "end": 7621
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7536,
                    "end": 7621
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7649,
                      "end": 7671
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7699,
                                "end": 7711
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 7695,
                              "end": 7713
                            },
                            "start": 7688,
                            "end": 7714
                          }
                        ],
                        "start": 7674,
                        "end": 7724
                      },
                      "expression": false,
                      "start": 7671,
                      "end": 7724
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 7630,
                    "end": 7724
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7737,
                      "end": 7752
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7780,
                                "end": 7792
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 7776,
                              "end": 7794
                            },
                            "start": 7769,
                            "end": 7795
                          }
                        ],
                        "start": 7755,
                        "end": 7805
                      },
                      "expression": false,
                      "start": 7752,
                      "end": 7805
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7733,
                    "end": 7805
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7826,
                      "end": 7842
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7870,
                                "end": 7882
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 7866,
                              "end": 7884
                            },
                            "start": 7859,
                            "end": 7885
                          }
                        ],
                        "start": 7845,
                        "end": 7895
                      },
                      "expression": false,
                      "start": 7842,
                      "end": 7895
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 7814,
                    "end": 7895
                  }
                ],
                "start": 7162,
                "end": 7901
              },
              "abstract": false,
              "declare": false,
              "start": 7112,
              "end": 7901
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithWithPublicGetAccessorTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 7913,
                "end": 7955
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7977,
                      "end": 7997
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
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8001,
                            "end": 8012
                          },
                          "typeArguments": null,
                          "start": 8001,
                          "end": 8012
                        },
                        "start": 7999,
                        "end": 8012
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 8034,
                              "end": 8038
                            },
                            "start": 8027,
                            "end": 8039
                          }
                        ],
                        "start": 8013,
                        "end": 8049
                      },
                      "expression": false,
                      "start": 7997,
                      "end": 8049
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7966,
                    "end": 8049
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8077,
                      "end": 8098
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
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8102,
                            "end": 8113
                          },
                          "typeArguments": null,
                          "start": 8102,
                          "end": 8113
                        },
                        "start": 8100,
                        "end": 8113
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 8135,
                              "end": 8139
                            },
                            "start": 8128,
                            "end": 8140
                          }
                        ],
                        "start": 8114,
                        "end": 8150
                      },
                      "expression": false,
                      "start": 8098,
                      "end": 8150
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 8058,
                    "end": 8150
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8163,
                      "end": 8177
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
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8181,
                            "end": 8192
                          },
                          "typeArguments": null,
                          "start": 8181,
                          "end": 8192
                        },
                        "start": 8179,
                        "end": 8192
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 8214,
                              "end": 8218
                            },
                            "start": 8207,
                            "end": 8219
                          }
                        ],
                        "start": 8193,
                        "end": 8229
                      },
                      "expression": false,
                      "start": 8177,
                      "end": 8229
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8159,
                    "end": 8229
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8250,
                      "end": 8265
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
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8269,
                            "end": 8280
                          },
                          "typeArguments": null,
                          "start": 8269,
                          "end": 8280
                        },
                        "start": 8267,
                        "end": 8280
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 8302,
                              "end": 8306
                            },
                            "start": 8295,
                            "end": 8307
                          }
                        ],
                        "start": 8281,
                        "end": 8317
                      },
                      "expression": false,
                      "start": 8265,
                      "end": 8317
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 8238,
                    "end": 8317
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8337,
                      "end": 8358
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8386,
                                "end": 8397
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 8382,
                              "end": 8399
                            },
                            "start": 8375,
                            "end": 8400
                          }
                        ],
                        "start": 8361,
                        "end": 8410
                      },
                      "expression": false,
                      "start": 8358,
                      "end": 8410
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8326,
                    "end": 8410
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8438,
                      "end": 8460
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8488,
                                "end": 8499
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 8484,
                              "end": 8501
                            },
                            "start": 8477,
                            "end": 8502
                          }
                        ],
                        "start": 8463,
                        "end": 8512
                      },
                      "expression": false,
                      "start": 8460,
                      "end": 8512
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 8419,
                    "end": 8512
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8525,
                      "end": 8540
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8568,
                                "end": 8579
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 8564,
                              "end": 8581
                            },
                            "start": 8557,
                            "end": 8582
                          }
                        ],
                        "start": 8543,
                        "end": 8592
                      },
                      "expression": false,
                      "start": 8540,
                      "end": 8592
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8521,
                    "end": 8592
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8613,
                      "end": 8629
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8657,
                                "end": 8668
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 8653,
                              "end": 8670
                            },
                            "start": 8646,
                            "end": 8671
                          }
                        ],
                        "start": 8632,
                        "end": 8681
                      },
                      "expression": false,
                      "start": 8629,
                      "end": 8681
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 8601,
                    "end": 8681
                  }
                ],
                "start": 7956,
                "end": 8687
              },
              "abstract": false,
              "declare": false,
              "start": 7907,
              "end": 8687
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithWithPrivateSetAccessorTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8706,
                  "end": 8748
                },
                "typeParameters": null,
                "superClass": null,
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
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8770,
                        "end": 8790
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
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8798,
                                  "end": 8810
                                },
                                "typeArguments": null,
                                "start": 8798,
                                "end": 8810
                              },
                              "start": 8796,
                              "end": 8810
                            },
                            "start": 8791,
                            "end": 8810
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 8812,
                          "end": 8832
                        },
                        "expression": false,
                        "start": 8790,
                        "end": 8832
                      },
                      "kind": "set",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 8759,
                      "end": 8832
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateStaticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8860,
                        "end": 8881
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
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8889,
                                  "end": 8901
                                },
                                "typeArguments": null,
                                "start": 8889,
                                "end": 8901
                              },
                              "start": 8887,
                              "end": 8901
                            },
                            "start": 8882,
                            "end": 8901
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 8903,
                          "end": 8914
                        },
                        "expression": false,
                        "start": 8881,
                        "end": 8914
                      },
                      "kind": "set",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 8841,
                      "end": 8914
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8927,
                        "end": 8941
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
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8949,
                                  "end": 8961
                                },
                                "typeArguments": null,
                                "start": 8949,
                                "end": 8961
                              },
                              "start": 8947,
                              "end": 8961
                            },
                            "start": 8942,
                            "end": 8961
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 8963,
                          "end": 8983
                        },
                        "expression": false,
                        "start": 8941,
                        "end": 8983
                      },
                      "kind": "set",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 8923,
                      "end": 8983
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9004,
                        "end": 9019
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
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9027,
                                  "end": 9039
                                },
                                "typeArguments": null,
                                "start": 9027,
                                "end": 9039
                              },
                              "start": 9025,
                              "end": 9039
                            },
                            "start": 9020,
                            "end": 9039
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 9041,
                          "end": 9052
                        },
                        "expression": false,
                        "start": 9019,
                        "end": 9052
                      },
                      "kind": "set",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 8992,
                      "end": 9052
                    }
                  ],
                  "start": 8749,
                  "end": 9058
                },
                "abstract": false,
                "declare": false,
                "start": 8700,
                "end": 9058
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 8693,
              "end": 9058
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithWithPublicSetAccessorTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9077,
                  "end": 9118
                },
                "typeParameters": null,
                "superClass": null,
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
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9140,
                        "end": 9160
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
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9168,
                                  "end": 9179
                                },
                                "typeArguments": null,
                                "start": 9168,
                                "end": 9179
                              },
                              "start": 9166,
                              "end": 9179
                            },
                            "start": 9161,
                            "end": 9179
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 9181,
                          "end": 9192
                        },
                        "expression": false,
                        "start": 9160,
                        "end": 9192
                      },
                      "kind": "set",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 9129,
                      "end": 9192
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateStaticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9220,
                        "end": 9241
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
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9249,
                                  "end": 9260
                                },
                                "typeArguments": null,
                                "start": 9249,
                                "end": 9260
                              },
                              "start": 9247,
                              "end": 9260
                            },
                            "start": 9242,
                            "end": 9260
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 9262,
                          "end": 9273
                        },
                        "expression": false,
                        "start": 9241,
                        "end": 9273
                      },
                      "kind": "set",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 9201,
                      "end": 9273
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9286,
                        "end": 9300
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
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9308,
                                  "end": 9319
                                },
                                "typeArguments": null,
                                "start": 9308,
                                "end": 9319
                              },
                              "start": 9306,
                              "end": 9319
                            },
                            "start": 9301,
                            "end": 9319
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 9321,
                          "end": 9332
                        },
                        "expression": false,
                        "start": 9300,
                        "end": 9332
                      },
                      "kind": "set",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 9282,
                      "end": 9332
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9353,
                        "end": 9368
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
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9376,
                                  "end": 9387
                                },
                                "typeArguments": null,
                                "start": 9376,
                                "end": 9387
                              },
                              "start": 9374,
                              "end": 9387
                            },
                            "start": 9369,
                            "end": 9387
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 9389,
                          "end": 9400
                        },
                        "expression": false,
                        "start": 9368,
                        "end": 9400
                      },
                      "kind": "set",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 9341,
                      "end": 9400
                    }
                  ],
                  "start": 9119,
                  "end": 9406
                },
                "abstract": false,
                "declare": false,
                "start": 9071,
                "end": 9406
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 9064,
              "end": 9406
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithWithPrivateSetAccessorTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 9418,
                "end": 9461
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9483,
                      "end": 9503
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9511,
                                "end": 9523
                              },
                              "typeArguments": null,
                              "start": 9511,
                              "end": 9523
                            },
                            "start": 9509,
                            "end": 9523
                          },
                          "start": 9504,
                          "end": 9523
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9525,
                        "end": 9536
                      },
                      "expression": false,
                      "start": 9503,
                      "end": 9536
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9472,
                    "end": 9536
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9564,
                      "end": 9585
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9593,
                                "end": 9605
                              },
                              "typeArguments": null,
                              "start": 9593,
                              "end": 9605
                            },
                            "start": 9591,
                            "end": 9605
                          },
                          "start": 9586,
                          "end": 9605
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9607,
                        "end": 9618
                      },
                      "expression": false,
                      "start": 9585,
                      "end": 9618
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 9545,
                    "end": 9618
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9631,
                      "end": 9645
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9653,
                                "end": 9665
                              },
                              "typeArguments": null,
                              "start": 9653,
                              "end": 9665
                            },
                            "start": 9651,
                            "end": 9665
                          },
                          "start": 9646,
                          "end": 9665
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9667,
                        "end": 9678
                      },
                      "expression": false,
                      "start": 9645,
                      "end": 9678
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9627,
                    "end": 9678
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9699,
                      "end": 9714
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9722,
                                "end": 9734
                              },
                              "typeArguments": null,
                              "start": 9722,
                              "end": 9734
                            },
                            "start": 9720,
                            "end": 9734
                          },
                          "start": 9715,
                          "end": 9734
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9736,
                        "end": 9747
                      },
                      "expression": false,
                      "start": 9714,
                      "end": 9747
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 9687,
                    "end": 9747
                  }
                ],
                "start": 9462,
                "end": 9753
              },
              "abstract": false,
              "declare": false,
              "start": 9412,
              "end": 9753
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithWithPublicSetAccessorTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 9765,
                "end": 9807
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9829,
                      "end": 9849
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9857,
                                "end": 9868
                              },
                              "typeArguments": null,
                              "start": 9857,
                              "end": 9868
                            },
                            "start": 9855,
                            "end": 9868
                          },
                          "start": 9850,
                          "end": 9868
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9870,
                        "end": 9881
                      },
                      "expression": false,
                      "start": 9849,
                      "end": 9881
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9818,
                    "end": 9881
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9909,
                      "end": 9930
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9938,
                                "end": 9949
                              },
                              "typeArguments": null,
                              "start": 9938,
                              "end": 9949
                            },
                            "start": 9936,
                            "end": 9949
                          },
                          "start": 9931,
                          "end": 9949
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9951,
                        "end": 9962
                      },
                      "expression": false,
                      "start": 9930,
                      "end": 9962
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 9890,
                    "end": 9962
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9975,
                      "end": 9989
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9997,
                                "end": 10008
                              },
                              "typeArguments": null,
                              "start": 9997,
                              "end": 10008
                            },
                            "start": 9995,
                            "end": 10008
                          },
                          "start": 9990,
                          "end": 10008
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 10010,
                        "end": 10021
                      },
                      "expression": false,
                      "start": 9989,
                      "end": 10021
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9971,
                    "end": 10021
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10042,
                      "end": 10057
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10065,
                                "end": 10076
                              },
                              "typeArguments": null,
                              "start": 10065,
                              "end": 10076
                            },
                            "start": 10063,
                            "end": 10076
                          },
                          "start": 10058,
                          "end": 10076
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 10078,
                        "end": 10089
                      },
                      "expression": false,
                      "start": 10057,
                      "end": 10089
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 10030,
                    "end": 10089
                  }
                ],
                "start": 9808,
                "end": 10095
              },
              "abstract": false,
              "declare": false,
              "start": 9759,
              "end": 10095
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithPrivateModuleGetAccessorTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10114,
                  "end": 10158
                },
                "typeParameters": null,
                "superClass": null,
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
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10180,
                        "end": 10200
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
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10204,
                                "end": 10217
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10218,
                                "end": 10229
                              },
                              "start": 10204,
                              "end": 10229
                            },
                            "typeArguments": null,
                            "start": 10204,
                            "end": 10229
                          },
                          "start": 10202,
                          "end": 10229
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 10260,
                                "end": 10264
                              },
                              "start": 10253,
                              "end": 10265
                            }
                          ],
                          "start": 10230,
                          "end": 10275
                        },
                        "expression": false,
                        "start": 10200,
                        "end": 10275
                      },
                      "kind": "get",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 10169,
                      "end": 10275
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10288,
                        "end": 10302
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
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10306,
                                "end": 10319
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10320,
                                "end": 10331
                              },
                              "start": 10306,
                              "end": 10331
                            },
                            "typeArguments": null,
                            "start": 10306,
                            "end": 10331
                          },
                          "start": 10304,
                          "end": 10331
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 10362,
                                "end": 10366
                              },
                              "start": 10355,
                              "end": 10367
                            }
                          ],
                          "start": 10332,
                          "end": 10377
                        },
                        "expression": false,
                        "start": 10302,
                        "end": 10377
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 10284,
                      "end": 10377
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicStaticMethod1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10397,
                        "end": 10418
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
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10455,
                                    "end": 10468
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10469,
                                    "end": 10480
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 10455,
                                  "end": 10480
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 10451,
                                "end": 10482
                              },
                              "start": 10444,
                              "end": 10483
                            }
                          ],
                          "start": 10421,
                          "end": 10493
                        },
                        "expression": false,
                        "start": 10418,
                        "end": 10493
                      },
                      "kind": "get",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 10386,
                      "end": 10493
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicMethod1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10506,
                        "end": 10521
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
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10558,
                                    "end": 10571
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10572,
                                    "end": 10583
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 10558,
                                  "end": 10583
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 10554,
                                "end": 10585
                              },
                              "start": 10547,
                              "end": 10586
                            }
                          ],
                          "start": 10524,
                          "end": 10596
                        },
                        "expression": false,
                        "start": 10521,
                        "end": 10596
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 10502,
                      "end": 10596
                    }
                  ],
                  "start": 10159,
                  "end": 10602
                },
                "abstract": false,
                "declare": false,
                "start": 10108,
                "end": 10602
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 10101,
              "end": 10602
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithPrivateModuleSetAccessorTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10621,
                  "end": 10665
                },
                "typeParameters": null,
                "superClass": null,
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
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10687,
                        "end": 10707
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
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10715,
                                    "end": 10728
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10729,
                                    "end": 10740
                                  },
                                  "start": 10715,
                                  "end": 10740
                                },
                                "typeArguments": null,
                                "start": 10715,
                                "end": 10740
                              },
                              "start": 10713,
                              "end": 10740
                            },
                            "start": 10708,
                            "end": 10740
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 10742,
                          "end": 10762
                        },
                        "expression": false,
                        "start": 10707,
                        "end": 10762
                      },
                      "kind": "set",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 10676,
                      "end": 10762
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10775,
                        "end": 10789
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
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10797,
                                    "end": 10810
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10811,
                                    "end": 10822
                                  },
                                  "start": 10797,
                                  "end": 10822
                                },
                                "typeArguments": null,
                                "start": 10797,
                                "end": 10822
                              },
                              "start": 10795,
                              "end": 10822
                            },
                            "start": 10790,
                            "end": 10822
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 10824,
                          "end": 10844
                        },
                        "expression": false,
                        "start": 10789,
                        "end": 10844
                      },
                      "kind": "set",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 10771,
                      "end": 10844
                    }
                  ],
                  "start": 10666,
                  "end": 10850
                },
                "abstract": false,
                "declare": false,
                "start": 10615,
                "end": 10850
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 10608,
              "end": 10850
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithPrivateModuleGetAccessorTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 10862,
                "end": 10907
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10929,
                      "end": 10949
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
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10953,
                              "end": 10966
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10967,
                              "end": 10978
                            },
                            "start": 10953,
                            "end": 10978
                          },
                          "typeArguments": null,
                          "start": 10953,
                          "end": 10978
                        },
                        "start": 10951,
                        "end": 10978
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 11000,
                              "end": 11004
                            },
                            "start": 10993,
                            "end": 11005
                          }
                        ],
                        "start": 10979,
                        "end": 11015
                      },
                      "expression": false,
                      "start": 10949,
                      "end": 11015
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 10918,
                    "end": 11015
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11028,
                      "end": 11042
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
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11046,
                              "end": 11059
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11060,
                              "end": 11071
                            },
                            "start": 11046,
                            "end": 11071
                          },
                          "typeArguments": null,
                          "start": 11046,
                          "end": 11071
                        },
                        "start": 11044,
                        "end": 11071
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 11093,
                              "end": 11097
                            },
                            "start": 11086,
                            "end": 11098
                          }
                        ],
                        "start": 11072,
                        "end": 11108
                      },
                      "expression": false,
                      "start": 11042,
                      "end": 11108
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11024,
                    "end": 11108
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11128,
                      "end": 11149
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11177,
                                  "end": 11190
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11191,
                                  "end": 11202
                                },
                                "optional": false,
                                "computed": false,
                                "start": 11177,
                                "end": 11202
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 11173,
                              "end": 11204
                            },
                            "start": 11166,
                            "end": 11205
                          }
                        ],
                        "start": 11152,
                        "end": 11215
                      },
                      "expression": false,
                      "start": 11149,
                      "end": 11215
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11117,
                    "end": 11215
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11228,
                      "end": 11243
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11271,
                                  "end": 11284
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11285,
                                  "end": 11296
                                },
                                "optional": false,
                                "computed": false,
                                "start": 11271,
                                "end": 11296
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 11267,
                              "end": 11298
                            },
                            "start": 11260,
                            "end": 11299
                          }
                        ],
                        "start": 11246,
                        "end": 11309
                      },
                      "expression": false,
                      "start": 11243,
                      "end": 11309
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11224,
                    "end": 11309
                  }
                ],
                "start": 10908,
                "end": 11315
              },
              "abstract": false,
              "declare": false,
              "start": 10856,
              "end": 11315
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithPrivateModuleSetAccessorTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 11327,
                "end": 11372
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11394,
                      "end": 11414
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11422,
                                  "end": 11435
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11436,
                                  "end": 11447
                                },
                                "start": 11422,
                                "end": 11447
                              },
                              "typeArguments": null,
                              "start": 11422,
                              "end": 11447
                            },
                            "start": 11420,
                            "end": 11447
                          },
                          "start": 11415,
                          "end": 11447
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11449,
                        "end": 11460
                      },
                      "expression": false,
                      "start": 11414,
                      "end": 11460
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11383,
                    "end": 11460
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11473,
                      "end": 11487
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11495,
                                  "end": 11508
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11509,
                                  "end": 11520
                                },
                                "start": 11495,
                                "end": 11520
                              },
                              "typeArguments": null,
                              "start": 11495,
                              "end": 11520
                            },
                            "start": 11493,
                            "end": 11520
                          },
                          "start": 11488,
                          "end": 11520
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11522,
                        "end": 11533
                      },
                      "expression": false,
                      "start": 11487,
                      "end": 11533
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11469,
                    "end": 11533
                  }
                ],
                "start": 11373,
                "end": 11539
              },
              "abstract": false,
              "declare": false,
              "start": 11321,
              "end": 11539
            }
          ],
          "start": 5408,
          "end": 11541
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 5388,
        "end": 11541
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5381,
      "end": 11541
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 11550,
        "end": 11563
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 11576,
              "end": 11588
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 11589,
              "end": 11596
            },
            "abstract": false,
            "declare": false,
            "start": 11570,
            "end": 11596
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 11615,
                "end": 11626
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 11627,
                "end": 11634
              },
              "abstract": false,
              "declare": false,
              "start": 11609,
              "end": 11634
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 11602,
            "end": 11634
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPrivateGetAccessorTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 11652,
                "end": 11694
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11716,
                      "end": 11736
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
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 11740,
                            "end": 11752
                          },
                          "typeArguments": null,
                          "start": 11740,
                          "end": 11752
                        },
                        "start": 11738,
                        "end": 11752
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 11775,
                              "end": 11779
                            },
                            "start": 11768,
                            "end": 11780
                          }
                        ],
                        "start": 11753,
                        "end": 11790
                      },
                      "expression": false,
                      "start": 11736,
                      "end": 11790
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11705,
                    "end": 11790
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11818,
                      "end": 11839
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
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 11843,
                            "end": 11855
                          },
                          "typeArguments": null,
                          "start": 11843,
                          "end": 11855
                        },
                        "start": 11841,
                        "end": 11855
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 11877,
                              "end": 11881
                            },
                            "start": 11870,
                            "end": 11882
                          }
                        ],
                        "start": 11856,
                        "end": 11892
                      },
                      "expression": false,
                      "start": 11839,
                      "end": 11892
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11799,
                    "end": 11892
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11905,
                      "end": 11919
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
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 11923,
                            "end": 11935
                          },
                          "typeArguments": null,
                          "start": 11923,
                          "end": 11935
                        },
                        "start": 11921,
                        "end": 11935
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 11958,
                              "end": 11962
                            },
                            "start": 11951,
                            "end": 11963
                          }
                        ],
                        "start": 11936,
                        "end": 11973
                      },
                      "expression": false,
                      "start": 11919,
                      "end": 11973
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11901,
                    "end": 11973
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11994,
                      "end": 12009
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
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 12013,
                            "end": 12025
                          },
                          "typeArguments": null,
                          "start": 12013,
                          "end": 12025
                        },
                        "start": 12011,
                        "end": 12025
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 12047,
                              "end": 12051
                            },
                            "start": 12040,
                            "end": 12052
                          }
                        ],
                        "start": 12026,
                        "end": 12062
                      },
                      "expression": false,
                      "start": 12009,
                      "end": 12062
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11982,
                    "end": 12062
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12082,
                      "end": 12103
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 12132,
                                "end": 12144
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 12128,
                              "end": 12146
                            },
                            "start": 12121,
                            "end": 12147
                          }
                        ],
                        "start": 12106,
                        "end": 12157
                      },
                      "expression": false,
                      "start": 12103,
                      "end": 12157
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 12071,
                    "end": 12157
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12185,
                      "end": 12207
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 12235,
                                "end": 12247
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 12231,
                              "end": 12249
                            },
                            "start": 12224,
                            "end": 12250
                          }
                        ],
                        "start": 12210,
                        "end": 12260
                      },
                      "expression": false,
                      "start": 12207,
                      "end": 12260
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 12166,
                    "end": 12260
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12273,
                      "end": 12288
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 12317,
                                "end": 12329
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 12313,
                              "end": 12331
                            },
                            "start": 12306,
                            "end": 12332
                          }
                        ],
                        "start": 12291,
                        "end": 12342
                      },
                      "expression": false,
                      "start": 12288,
                      "end": 12342
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 12269,
                    "end": 12342
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12363,
                      "end": 12379
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 12407,
                                "end": 12419
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 12403,
                              "end": 12421
                            },
                            "start": 12396,
                            "end": 12422
                          }
                        ],
                        "start": 12382,
                        "end": 12432
                      },
                      "expression": false,
                      "start": 12379,
                      "end": 12432
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 12351,
                    "end": 12432
                  }
                ],
                "start": 11695,
                "end": 12438
              },
              "abstract": false,
              "declare": false,
              "start": 11646,
              "end": 12438
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 11639,
            "end": 12438
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPublicGetAccessorTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 12457,
                "end": 12498
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12520,
                      "end": 12540
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
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 12544,
                            "end": 12555
                          },
                          "typeArguments": null,
                          "start": 12544,
                          "end": 12555
                        },
                        "start": 12542,
                        "end": 12555
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 12577,
                              "end": 12581
                            },
                            "start": 12570,
                            "end": 12582
                          }
                        ],
                        "start": 12556,
                        "end": 12592
                      },
                      "expression": false,
                      "start": 12540,
                      "end": 12592
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 12509,
                    "end": 12592
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12620,
                      "end": 12641
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
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 12645,
                            "end": 12656
                          },
                          "typeArguments": null,
                          "start": 12645,
                          "end": 12656
                        },
                        "start": 12643,
                        "end": 12656
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 12678,
                              "end": 12682
                            },
                            "start": 12671,
                            "end": 12683
                          }
                        ],
                        "start": 12657,
                        "end": 12693
                      },
                      "expression": false,
                      "start": 12641,
                      "end": 12693
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 12601,
                    "end": 12693
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12706,
                      "end": 12720
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
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 12724,
                            "end": 12735
                          },
                          "typeArguments": null,
                          "start": 12724,
                          "end": 12735
                        },
                        "start": 12722,
                        "end": 12735
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 12757,
                              "end": 12761
                            },
                            "start": 12750,
                            "end": 12762
                          }
                        ],
                        "start": 12736,
                        "end": 12772
                      },
                      "expression": false,
                      "start": 12720,
                      "end": 12772
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 12702,
                    "end": 12772
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12793,
                      "end": 12808
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
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 12812,
                            "end": 12823
                          },
                          "typeArguments": null,
                          "start": 12812,
                          "end": 12823
                        },
                        "start": 12810,
                        "end": 12823
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 12845,
                              "end": 12849
                            },
                            "start": 12838,
                            "end": 12850
                          }
                        ],
                        "start": 12824,
                        "end": 12860
                      },
                      "expression": false,
                      "start": 12808,
                      "end": 12860
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 12781,
                    "end": 12860
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12880,
                      "end": 12901
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 12929,
                                "end": 12940
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 12925,
                              "end": 12942
                            },
                            "start": 12918,
                            "end": 12943
                          }
                        ],
                        "start": 12904,
                        "end": 12953
                      },
                      "expression": false,
                      "start": 12901,
                      "end": 12953
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 12869,
                    "end": 12953
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12981,
                      "end": 13003
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13031,
                                "end": 13042
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 13027,
                              "end": 13044
                            },
                            "start": 13020,
                            "end": 13045
                          }
                        ],
                        "start": 13006,
                        "end": 13055
                      },
                      "expression": false,
                      "start": 13003,
                      "end": 13055
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 12962,
                    "end": 13055
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 13068,
                      "end": 13083
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13111,
                                "end": 13122
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 13107,
                              "end": 13124
                            },
                            "start": 13100,
                            "end": 13125
                          }
                        ],
                        "start": 13086,
                        "end": 13135
                      },
                      "expression": false,
                      "start": 13083,
                      "end": 13135
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 13064,
                    "end": 13135
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 13156,
                      "end": 13172
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13200,
                                "end": 13211
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 13196,
                              "end": 13213
                            },
                            "start": 13189,
                            "end": 13214
                          }
                        ],
                        "start": 13175,
                        "end": 13224
                      },
                      "expression": false,
                      "start": 13172,
                      "end": 13224
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 13144,
                    "end": 13224
                  }
                ],
                "start": 12499,
                "end": 13230
              },
              "abstract": false,
              "declare": false,
              "start": 12451,
              "end": 13230
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 12444,
            "end": 13230
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPrivateGetAccessorTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 13242,
              "end": 13285
            },
            "typeParameters": null,
            "superClass": null,
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
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13307,
                    "end": 13327
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
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13331,
                          "end": 13343
                        },
                        "typeArguments": null,
                        "start": 13331,
                        "end": 13343
                      },
                      "start": 13329,
                      "end": 13343
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 13365,
                            "end": 13369
                          },
                          "start": 13358,
                          "end": 13370
                        }
                      ],
                      "start": 13344,
                      "end": 13380
                    },
                    "expression": false,
                    "start": 13327,
                    "end": 13380
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 13296,
                  "end": 13380
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13408,
                    "end": 13429
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
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13433,
                          "end": 13445
                        },
                        "typeArguments": null,
                        "start": 13433,
                        "end": 13445
                      },
                      "start": 13431,
                      "end": 13445
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 13467,
                            "end": 13471
                          },
                          "start": 13460,
                          "end": 13472
                        }
                      ],
                      "start": 13446,
                      "end": 13482
                    },
                    "expression": false,
                    "start": 13429,
                    "end": 13482
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 13389,
                  "end": 13482
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13495,
                    "end": 13509
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
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13513,
                          "end": 13525
                        },
                        "typeArguments": null,
                        "start": 13513,
                        "end": 13525
                      },
                      "start": 13511,
                      "end": 13525
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 13547,
                            "end": 13551
                          },
                          "start": 13540,
                          "end": 13552
                        }
                      ],
                      "start": 13526,
                      "end": 13562
                    },
                    "expression": false,
                    "start": 13509,
                    "end": 13562
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 13491,
                  "end": 13562
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13583,
                    "end": 13598
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
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13602,
                          "end": 13614
                        },
                        "typeArguments": null,
                        "start": 13602,
                        "end": 13614
                      },
                      "start": 13600,
                      "end": 13614
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 13636,
                            "end": 13640
                          },
                          "start": 13629,
                          "end": 13641
                        }
                      ],
                      "start": 13615,
                      "end": 13651
                    },
                    "expression": false,
                    "start": 13598,
                    "end": 13651
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 13571,
                  "end": 13651
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13671,
                    "end": 13692
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13720,
                              "end": 13732
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 13716,
                            "end": 13734
                          },
                          "start": 13709,
                          "end": 13735
                        }
                      ],
                      "start": 13695,
                      "end": 13745
                    },
                    "expression": false,
                    "start": 13692,
                    "end": 13745
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 13660,
                  "end": 13745
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13773,
                    "end": 13795
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13823,
                              "end": 13835
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 13819,
                            "end": 13837
                          },
                          "start": 13812,
                          "end": 13838
                        }
                      ],
                      "start": 13798,
                      "end": 13848
                    },
                    "expression": false,
                    "start": 13795,
                    "end": 13848
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 13754,
                  "end": 13848
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13861,
                    "end": 13876
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13904,
                              "end": 13916
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 13900,
                            "end": 13918
                          },
                          "start": 13893,
                          "end": 13919
                        }
                      ],
                      "start": 13879,
                      "end": 13929
                    },
                    "expression": false,
                    "start": 13876,
                    "end": 13929
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 13857,
                  "end": 13929
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13950,
                    "end": 13966
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 13994,
                              "end": 14006
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 13990,
                            "end": 14008
                          },
                          "start": 13983,
                          "end": 14009
                        }
                      ],
                      "start": 13969,
                      "end": 14019
                    },
                    "expression": false,
                    "start": 13966,
                    "end": 14019
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 13938,
                  "end": 14019
                }
              ],
              "start": 13286,
              "end": 14025
            },
            "abstract": false,
            "declare": false,
            "start": 13236,
            "end": 14025
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPublicGetAccessorTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 14037,
              "end": 14079
            },
            "typeParameters": null,
            "superClass": null,
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
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14101,
                    "end": 14121
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
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14125,
                          "end": 14136
                        },
                        "typeArguments": null,
                        "start": 14125,
                        "end": 14136
                      },
                      "start": 14123,
                      "end": 14136
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 14158,
                            "end": 14162
                          },
                          "start": 14151,
                          "end": 14163
                        }
                      ],
                      "start": 14137,
                      "end": 14173
                    },
                    "expression": false,
                    "start": 14121,
                    "end": 14173
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 14090,
                  "end": 14173
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14201,
                    "end": 14222
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
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14226,
                          "end": 14237
                        },
                        "typeArguments": null,
                        "start": 14226,
                        "end": 14237
                      },
                      "start": 14224,
                      "end": 14237
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 14259,
                            "end": 14263
                          },
                          "start": 14252,
                          "end": 14264
                        }
                      ],
                      "start": 14238,
                      "end": 14274
                    },
                    "expression": false,
                    "start": 14222,
                    "end": 14274
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 14182,
                  "end": 14274
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14287,
                    "end": 14301
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
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14305,
                          "end": 14316
                        },
                        "typeArguments": null,
                        "start": 14305,
                        "end": 14316
                      },
                      "start": 14303,
                      "end": 14316
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 14338,
                            "end": 14342
                          },
                          "start": 14331,
                          "end": 14343
                        }
                      ],
                      "start": 14317,
                      "end": 14353
                    },
                    "expression": false,
                    "start": 14301,
                    "end": 14353
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 14283,
                  "end": 14353
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14374,
                    "end": 14389
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
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 14393,
                          "end": 14404
                        },
                        "typeArguments": null,
                        "start": 14393,
                        "end": 14404
                      },
                      "start": 14391,
                      "end": 14404
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 14426,
                            "end": 14430
                          },
                          "start": 14419,
                          "end": 14431
                        }
                      ],
                      "start": 14405,
                      "end": 14441
                    },
                    "expression": false,
                    "start": 14389,
                    "end": 14441
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 14362,
                  "end": 14441
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14461,
                    "end": 14482
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 14510,
                              "end": 14521
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 14506,
                            "end": 14523
                          },
                          "start": 14499,
                          "end": 14524
                        }
                      ],
                      "start": 14485,
                      "end": 14534
                    },
                    "expression": false,
                    "start": 14482,
                    "end": 14534
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 14450,
                  "end": 14534
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14562,
                    "end": 14584
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 14612,
                              "end": 14623
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 14608,
                            "end": 14625
                          },
                          "start": 14601,
                          "end": 14626
                        }
                      ],
                      "start": 14587,
                      "end": 14636
                    },
                    "expression": false,
                    "start": 14584,
                    "end": 14636
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 14543,
                  "end": 14636
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14649,
                    "end": 14664
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 14692,
                              "end": 14703
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 14688,
                            "end": 14705
                          },
                          "start": 14681,
                          "end": 14706
                        }
                      ],
                      "start": 14667,
                      "end": 14716
                    },
                    "expression": false,
                    "start": 14664,
                    "end": 14716
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 14645,
                  "end": 14716
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14737,
                    "end": 14753
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 14781,
                              "end": 14792
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 14777,
                            "end": 14794
                          },
                          "start": 14770,
                          "end": 14795
                        }
                      ],
                      "start": 14756,
                      "end": 14805
                    },
                    "expression": false,
                    "start": 14753,
                    "end": 14805
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 14725,
                  "end": 14805
                }
              ],
              "start": 14080,
              "end": 14811
            },
            "abstract": false,
            "declare": false,
            "start": 14031,
            "end": 14811
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPrivateSetAccessorTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 14830,
                "end": 14872
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 14894,
                      "end": 14914
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 14922,
                                "end": 14934
                              },
                              "typeArguments": null,
                              "start": 14922,
                              "end": 14934
                            },
                            "start": 14920,
                            "end": 14934
                          },
                          "start": 14915,
                          "end": 14934
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 14936,
                        "end": 14948
                      },
                      "expression": false,
                      "start": 14914,
                      "end": 14948
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 14883,
                    "end": 14948
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 14976,
                      "end": 14997
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 15005,
                                "end": 15017
                              },
                              "typeArguments": null,
                              "start": 15005,
                              "end": 15017
                            },
                            "start": 15003,
                            "end": 15017
                          },
                          "start": 14998,
                          "end": 15017
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 15019,
                        "end": 15030
                      },
                      "expression": false,
                      "start": 14997,
                      "end": 15030
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 14957,
                    "end": 15030
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 15043,
                      "end": 15057
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 15065,
                                "end": 15077
                              },
                              "typeArguments": null,
                              "start": 15065,
                              "end": 15077
                            },
                            "start": 15063,
                            "end": 15077
                          },
                          "start": 15058,
                          "end": 15077
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 15079,
                        "end": 15091
                      },
                      "expression": false,
                      "start": 15057,
                      "end": 15091
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 15039,
                    "end": 15091
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 15112,
                      "end": 15127
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 15135,
                                "end": 15147
                              },
                              "typeArguments": null,
                              "start": 15135,
                              "end": 15147
                            },
                            "start": 15133,
                            "end": 15147
                          },
                          "start": 15128,
                          "end": 15147
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 15149,
                        "end": 15160
                      },
                      "expression": false,
                      "start": 15127,
                      "end": 15160
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 15100,
                    "end": 15160
                  }
                ],
                "start": 14873,
                "end": 15166
              },
              "abstract": false,
              "declare": false,
              "start": 14824,
              "end": 15166
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 14817,
            "end": 15166
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPublicSetAccessorTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 15185,
                "end": 15226
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 15248,
                      "end": 15268
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 15276,
                                "end": 15287
                              },
                              "typeArguments": null,
                              "start": 15276,
                              "end": 15287
                            },
                            "start": 15274,
                            "end": 15287
                          },
                          "start": 15269,
                          "end": 15287
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 15289,
                        "end": 15300
                      },
                      "expression": false,
                      "start": 15268,
                      "end": 15300
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 15237,
                    "end": 15300
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 15328,
                      "end": 15349
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 15357,
                                "end": 15368
                              },
                              "typeArguments": null,
                              "start": 15357,
                              "end": 15368
                            },
                            "start": 15355,
                            "end": 15368
                          },
                          "start": 15350,
                          "end": 15368
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 15370,
                        "end": 15381
                      },
                      "expression": false,
                      "start": 15349,
                      "end": 15381
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 15309,
                    "end": 15381
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 15394,
                      "end": 15408
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 15416,
                                "end": 15427
                              },
                              "typeArguments": null,
                              "start": 15416,
                              "end": 15427
                            },
                            "start": 15414,
                            "end": 15427
                          },
                          "start": 15409,
                          "end": 15427
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 15429,
                        "end": 15440
                      },
                      "expression": false,
                      "start": 15408,
                      "end": 15440
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 15390,
                    "end": 15440
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 15461,
                      "end": 15476
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 15484,
                                "end": 15495
                              },
                              "typeArguments": null,
                              "start": 15484,
                              "end": 15495
                            },
                            "start": 15482,
                            "end": 15495
                          },
                          "start": 15477,
                          "end": 15495
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 15497,
                        "end": 15508
                      },
                      "expression": false,
                      "start": 15476,
                      "end": 15508
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 15449,
                    "end": 15508
                  }
                ],
                "start": 15227,
                "end": 15514
              },
              "abstract": false,
              "declare": false,
              "start": 15179,
              "end": 15514
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15172,
            "end": 15514
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPrivateSetAccessorTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 15526,
              "end": 15569
            },
            "typeParameters": null,
            "superClass": null,
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
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15591,
                    "end": 15611
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
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 15619,
                              "end": 15631
                            },
                            "typeArguments": null,
                            "start": 15619,
                            "end": 15631
                          },
                          "start": 15617,
                          "end": 15631
                        },
                        "start": 15612,
                        "end": 15631
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 15633,
                      "end": 15644
                    },
                    "expression": false,
                    "start": 15611,
                    "end": 15644
                  },
                  "kind": "set",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 15580,
                  "end": 15644
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15672,
                    "end": 15693
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
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 15701,
                              "end": 15713
                            },
                            "typeArguments": null,
                            "start": 15701,
                            "end": 15713
                          },
                          "start": 15699,
                          "end": 15713
                        },
                        "start": 15694,
                        "end": 15713
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 15715,
                      "end": 15726
                    },
                    "expression": false,
                    "start": 15693,
                    "end": 15726
                  },
                  "kind": "set",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 15653,
                  "end": 15726
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15739,
                    "end": 15753
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
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 15761,
                              "end": 15773
                            },
                            "typeArguments": null,
                            "start": 15761,
                            "end": 15773
                          },
                          "start": 15759,
                          "end": 15773
                        },
                        "start": 15754,
                        "end": 15773
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 15775,
                      "end": 15786
                    },
                    "expression": false,
                    "start": 15753,
                    "end": 15786
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 15735,
                  "end": 15786
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15807,
                    "end": 15822
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
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 15830,
                              "end": 15842
                            },
                            "typeArguments": null,
                            "start": 15830,
                            "end": 15842
                          },
                          "start": 15828,
                          "end": 15842
                        },
                        "start": 15823,
                        "end": 15842
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 15844,
                      "end": 15855
                    },
                    "expression": false,
                    "start": 15822,
                    "end": 15855
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 15795,
                  "end": 15855
                }
              ],
              "start": 15570,
              "end": 15861
            },
            "abstract": false,
            "declare": false,
            "start": 15520,
            "end": 15861
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPublicSetAccessorTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 15873,
              "end": 15915
            },
            "typeParameters": null,
            "superClass": null,
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
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15937,
                    "end": 15957
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
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 15965,
                              "end": 15976
                            },
                            "typeArguments": null,
                            "start": 15965,
                            "end": 15976
                          },
                          "start": 15963,
                          "end": 15976
                        },
                        "start": 15958,
                        "end": 15976
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 15978,
                      "end": 15989
                    },
                    "expression": false,
                    "start": 15957,
                    "end": 15989
                  },
                  "kind": "set",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 15926,
                  "end": 15989
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 16017,
                    "end": 16038
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
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 16046,
                              "end": 16057
                            },
                            "typeArguments": null,
                            "start": 16046,
                            "end": 16057
                          },
                          "start": 16044,
                          "end": 16057
                        },
                        "start": 16039,
                        "end": 16057
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 16059,
                      "end": 16070
                    },
                    "expression": false,
                    "start": 16038,
                    "end": 16070
                  },
                  "kind": "set",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 15998,
                  "end": 16070
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 16083,
                    "end": 16097
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
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 16105,
                              "end": 16116
                            },
                            "typeArguments": null,
                            "start": 16105,
                            "end": 16116
                          },
                          "start": 16103,
                          "end": 16116
                        },
                        "start": 16098,
                        "end": 16116
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 16118,
                      "end": 16129
                    },
                    "expression": false,
                    "start": 16097,
                    "end": 16129
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 16079,
                  "end": 16129
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 16150,
                    "end": 16165
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
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 16173,
                              "end": 16184
                            },
                            "typeArguments": null,
                            "start": 16173,
                            "end": 16184
                          },
                          "start": 16171,
                          "end": 16184
                        },
                        "start": 16166,
                        "end": 16184
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 16186,
                      "end": 16197
                    },
                    "expression": false,
                    "start": 16165,
                    "end": 16197
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 16138,
                  "end": 16197
                }
              ],
              "start": 15916,
              "end": 16203
            },
            "abstract": false,
            "declare": false,
            "start": 15867,
            "end": 16203
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithPrivateModuleGetAccessorTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 16222,
                "end": 16266
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 16288,
                      "end": 16308
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
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 16312,
                              "end": 16325
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 16326,
                              "end": 16337
                            },
                            "start": 16312,
                            "end": 16337
                          },
                          "typeArguments": null,
                          "start": 16312,
                          "end": 16337
                        },
                        "start": 16310,
                        "end": 16337
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 16360,
                              "end": 16364
                            },
                            "start": 16353,
                            "end": 16365
                          }
                        ],
                        "start": 16338,
                        "end": 16375
                      },
                      "expression": false,
                      "start": 16308,
                      "end": 16375
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 16277,
                    "end": 16375
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 16388,
                      "end": 16402
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
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 16406,
                              "end": 16419
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 16420,
                              "end": 16431
                            },
                            "start": 16406,
                            "end": 16431
                          },
                          "typeArguments": null,
                          "start": 16406,
                          "end": 16431
                        },
                        "start": 16404,
                        "end": 16431
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 16454,
                              "end": 16458
                            },
                            "start": 16447,
                            "end": 16459
                          }
                        ],
                        "start": 16432,
                        "end": 16469
                      },
                      "expression": false,
                      "start": 16402,
                      "end": 16469
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 16384,
                    "end": 16469
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 16489,
                      "end": 16510
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 16539,
                                  "end": 16552
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 16553,
                                  "end": 16564
                                },
                                "optional": false,
                                "computed": false,
                                "start": 16539,
                                "end": 16564
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 16535,
                              "end": 16566
                            },
                            "start": 16528,
                            "end": 16567
                          }
                        ],
                        "start": 16513,
                        "end": 16577
                      },
                      "expression": false,
                      "start": 16510,
                      "end": 16577
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 16478,
                    "end": 16577
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 16590,
                      "end": 16605
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 16634,
                                  "end": 16647
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 16648,
                                  "end": 16659
                                },
                                "optional": false,
                                "computed": false,
                                "start": 16634,
                                "end": 16659
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 16630,
                              "end": 16661
                            },
                            "start": 16623,
                            "end": 16662
                          }
                        ],
                        "start": 16608,
                        "end": 16672
                      },
                      "expression": false,
                      "start": 16605,
                      "end": 16672
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 16586,
                    "end": 16672
                  }
                ],
                "start": 16267,
                "end": 16678
              },
              "abstract": false,
              "declare": false,
              "start": 16216,
              "end": 16678
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16209,
            "end": 16678
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithPrivateModuleSetAccessorTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 16697,
                "end": 16741
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 16763,
                      "end": 16783
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 16791,
                                  "end": 16804
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 16805,
                                  "end": 16816
                                },
                                "start": 16791,
                                "end": 16816
                              },
                              "typeArguments": null,
                              "start": 16791,
                              "end": 16816
                            },
                            "start": 16789,
                            "end": 16816
                          },
                          "start": 16784,
                          "end": 16816
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 16818,
                        "end": 16830
                      },
                      "expression": false,
                      "start": 16783,
                      "end": 16830
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 16752,
                    "end": 16830
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 16843,
                      "end": 16857
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 16865,
                                  "end": 16878
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 16879,
                                  "end": 16890
                                },
                                "start": 16865,
                                "end": 16890
                              },
                              "typeArguments": null,
                              "start": 16865,
                              "end": 16890
                            },
                            "start": 16863,
                            "end": 16890
                          },
                          "start": 16858,
                          "end": 16890
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 16892,
                        "end": 16904
                      },
                      "expression": false,
                      "start": 16857,
                      "end": 16904
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 16839,
                    "end": 16904
                  }
                ],
                "start": 16742,
                "end": 16910
              },
              "abstract": false,
              "declare": false,
              "start": 16691,
              "end": 16910
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16684,
            "end": 16910
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithPrivateModuleGetAccessorTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 16922,
              "end": 16967
            },
            "typeParameters": null,
            "superClass": null,
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
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 16989,
                    "end": 17009
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
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 17013,
                            "end": 17026
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 17027,
                            "end": 17038
                          },
                          "start": 17013,
                          "end": 17038
                        },
                        "typeArguments": null,
                        "start": 17013,
                        "end": 17038
                      },
                      "start": 17011,
                      "end": 17038
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 17060,
                            "end": 17064
                          },
                          "start": 17053,
                          "end": 17065
                        }
                      ],
                      "start": 17039,
                      "end": 17075
                    },
                    "expression": false,
                    "start": 17009,
                    "end": 17075
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 16978,
                  "end": 17075
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 17088,
                    "end": 17102
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
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 17106,
                            "end": 17119
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 17120,
                            "end": 17131
                          },
                          "start": 17106,
                          "end": 17131
                        },
                        "typeArguments": null,
                        "start": 17106,
                        "end": 17131
                      },
                      "start": 17104,
                      "end": 17131
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 17153,
                            "end": 17157
                          },
                          "start": 17146,
                          "end": 17158
                        }
                      ],
                      "start": 17132,
                      "end": 17168
                    },
                    "expression": false,
                    "start": 17102,
                    "end": 17168
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 17084,
                  "end": 17168
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 17188,
                    "end": 17209
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17237,
                                "end": 17250
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17251,
                                "end": 17262
                              },
                              "optional": false,
                              "computed": false,
                              "start": 17237,
                              "end": 17262
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 17233,
                            "end": 17264
                          },
                          "start": 17226,
                          "end": 17265
                        }
                      ],
                      "start": 17212,
                      "end": 17275
                    },
                    "expression": false,
                    "start": 17209,
                    "end": 17275
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 17177,
                  "end": 17275
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 17288,
                    "end": 17303
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17331,
                                "end": 17344
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17345,
                                "end": 17356
                              },
                              "optional": false,
                              "computed": false,
                              "start": 17331,
                              "end": 17356
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 17327,
                            "end": 17358
                          },
                          "start": 17320,
                          "end": 17359
                        }
                      ],
                      "start": 17306,
                      "end": 17369
                    },
                    "expression": false,
                    "start": 17303,
                    "end": 17369
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 17284,
                  "end": 17369
                }
              ],
              "start": 16968,
              "end": 17375
            },
            "abstract": false,
            "declare": false,
            "start": 16916,
            "end": 17375
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithPrivateModuleSetAccessorTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 17387,
              "end": 17432
            },
            "typeParameters": null,
            "superClass": null,
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
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 17454,
                    "end": 17474
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
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17482,
                                "end": 17495
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17496,
                                "end": 17507
                              },
                              "start": 17482,
                              "end": 17507
                            },
                            "typeArguments": null,
                            "start": 17482,
                            "end": 17507
                          },
                          "start": 17480,
                          "end": 17507
                        },
                        "start": 17475,
                        "end": 17507
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 17509,
                      "end": 17520
                    },
                    "expression": false,
                    "start": 17474,
                    "end": 17520
                  },
                  "kind": "set",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 17443,
                  "end": 17520
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 17533,
                    "end": 17547
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
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17555,
                                "end": 17568
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17569,
                                "end": 17580
                              },
                              "start": 17555,
                              "end": 17580
                            },
                            "typeArguments": null,
                            "start": 17555,
                            "end": 17580
                          },
                          "start": 17553,
                          "end": 17580
                        },
                        "start": 17548,
                        "end": 17580
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 17582,
                      "end": 17593
                    },
                    "expression": false,
                    "start": 17547,
                    "end": 17593
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 17529,
                  "end": 17593
                }
              ],
              "start": 17433,
              "end": 17599
            },
            "abstract": false,
            "declare": false,
            "start": 17381,
            "end": 17599
          }
        ],
        "start": 11564,
        "end": 17601
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 11543,
      "end": 17601
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 17602
}
```
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
        "name": "publicClassInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 25
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 26,
        "end": 29
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicClassInGlobalWithPublicGetAccessorTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 82
      },
      "typeParameters": null,
      "superClass": null,
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
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 120
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
                    "name": "publicClassInGlobal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 143
                  },
                  "typeArguments": null,
                  "start": 124,
                  "end": 143
                },
                "start": 122,
                "end": 143
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 161,
                      "end": 165
                    },
                    "start": 154,
                    "end": 166
                  }
                ],
                "start": 144,
                "end": 172
              },
              "expression": false,
              "start": 120,
              "end": 172
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 89,
            "end": 172
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 217
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
                    "name": "publicClassInGlobal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 221,
                    "end": 240
                  },
                  "typeArguments": null,
                  "start": 221,
                  "end": 240
                },
                "start": 219,
                "end": 240
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 258,
                      "end": 262
                    },
                    "start": 251,
                    "end": 263
                  }
                ],
                "start": 241,
                "end": 269
              },
              "expression": false,
              "start": 217,
              "end": 269
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 177,
            "end": 269
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 292
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
                    "name": "publicClassInGlobal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 296,
                    "end": 315
                  },
                  "typeArguments": null,
                  "start": 296,
                  "end": 315
                },
                "start": 294,
                "end": 315
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 333,
                      "end": 337
                    },
                    "start": 326,
                    "end": 338
                  }
                ],
                "start": 316,
                "end": 344
              },
              "expression": false,
              "start": 292,
              "end": 344
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 274,
            "end": 344
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 376
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
                    "name": "publicClassInGlobal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 380,
                    "end": 399
                  },
                  "typeArguments": null,
                  "start": 380,
                  "end": 399
                },
                "start": 378,
                "end": 399
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 417,
                      "end": 421
                    },
                    "start": 410,
                    "end": 422
                  }
                ],
                "start": 400,
                "end": 428
              },
              "expression": false,
              "start": 376,
              "end": 428
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 349,
            "end": 428
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicStaticMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 444,
              "end": 465
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInGlobal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 489,
                        "end": 508
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 485,
                      "end": 510
                    },
                    "start": 478,
                    "end": 511
                  }
                ],
                "start": 468,
                "end": 517
              },
              "expression": false,
              "start": 465,
              "end": 517
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 433,
            "end": 517
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 541,
              "end": 563
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInGlobal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 587,
                        "end": 606
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 583,
                      "end": 608
                    },
                    "start": 576,
                    "end": 609
                  }
                ],
                "start": 566,
                "end": 615
              },
              "expression": false,
              "start": 563,
              "end": 615
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 522,
            "end": 615
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 624,
              "end": 639
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInGlobal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 663,
                        "end": 682
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 659,
                      "end": 684
                    },
                    "start": 652,
                    "end": 685
                  }
                ],
                "start": 642,
                "end": 691
              },
              "expression": false,
              "start": 639,
              "end": 691
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 620,
            "end": 691
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 708,
              "end": 724
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInGlobal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 748,
                        "end": 767
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 744,
                      "end": 769
                    },
                    "start": 737,
                    "end": 770
                  }
                ],
                "start": 727,
                "end": 776
              },
              "expression": false,
              "start": 724,
              "end": 776
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 696,
            "end": 776
          }
        ],
        "start": 83,
        "end": 778
      },
      "abstract": false,
      "declare": false,
      "start": 31,
      "end": 778
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicClassInGlobalWithWithPublicSetAccessorTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 786,
        "end": 835
      },
      "typeParameters": null,
      "superClass": null,
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
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 853,
              "end": 873
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInGlobal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 881,
                        "end": 900
                      },
                      "typeArguments": null,
                      "start": 881,
                      "end": 900
                    },
                    "start": 879,
                    "end": 900
                  },
                  "start": 874,
                  "end": 900
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 902,
                "end": 909
              },
              "expression": false,
              "start": 873,
              "end": 909
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 842,
            "end": 909
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 933,
              "end": 954
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInGlobal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 962,
                        "end": 981
                      },
                      "typeArguments": null,
                      "start": 962,
                      "end": 981
                    },
                    "start": 960,
                    "end": 981
                  },
                  "start": 955,
                  "end": 981
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 983,
                "end": 990
              },
              "expression": false,
              "start": 954,
              "end": 990
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 914,
            "end": 990
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 999,
              "end": 1013
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInGlobal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1021,
                        "end": 1040
                      },
                      "typeArguments": null,
                      "start": 1021,
                      "end": 1040
                    },
                    "start": 1019,
                    "end": 1040
                  },
                  "start": 1014,
                  "end": 1040
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1042,
                "end": 1049
              },
              "expression": false,
              "start": 1013,
              "end": 1049
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 995,
            "end": 1049
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1066,
              "end": 1081
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInGlobal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1089,
                        "end": 1108
                      },
                      "typeArguments": null,
                      "start": 1089,
                      "end": 1108
                    },
                    "start": 1087,
                    "end": 1108
                  },
                  "start": 1082,
                  "end": 1108
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1110,
                "end": 1117
              },
              "expression": false,
              "start": 1081,
              "end": 1117
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1054,
            "end": 1117
          }
        ],
        "start": 836,
        "end": 1119
      },
      "abstract": false,
      "declare": false,
      "start": 780,
      "end": 1119
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicModuleInGlobal",
        "optional": false,
        "typeAnnotation": null,
        "start": 1128,
        "end": 1148
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 1161,
              "end": 1173
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1174,
              "end": 1181
            },
            "abstract": false,
            "declare": false,
            "start": 1155,
            "end": 1181
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 1200,
                "end": 1211
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1212,
                "end": 1219
              },
              "abstract": false,
              "declare": false,
              "start": 1194,
              "end": 1219
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1187,
            "end": 1219
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1232,
              "end": 1245
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1262,
                    "end": 1274
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 1275,
                    "end": 1286
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 1256,
                  "end": 1286
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1309,
                      "end": 1320
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 1321,
                      "end": 1332
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1303,
                    "end": 1332
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1296,
                  "end": 1332
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassWithWithPrivateGetAccessorTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1354,
                      "end": 1396
                    },
                    "typeParameters": null,
                    "superClass": null,
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
                            "name": "myPublicStaticMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1422,
                            "end": 1442
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
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1446,
                                  "end": 1458
                                },
                                "typeArguments": null,
                                "start": 1446,
                                "end": 1458
                              },
                              "start": 1444,
                              "end": 1458
                            },
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 1484,
                                    "end": 1488
                                  },
                                  "start": 1477,
                                  "end": 1489
                                }
                              ],
                              "start": 1459,
                              "end": 1503
                            },
                            "expression": false,
                            "start": 1442,
                            "end": 1503
                          },
                          "kind": "get",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 1411,
                          "end": 1503
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateStaticMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1535,
                            "end": 1556
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
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1560,
                                  "end": 1572
                                },
                                "typeArguments": null,
                                "start": 1560,
                                "end": 1572
                              },
                              "start": 1558,
                              "end": 1572
                            },
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 1598,
                                    "end": 1602
                                  },
                                  "start": 1591,
                                  "end": 1603
                                }
                              ],
                              "start": 1573,
                              "end": 1617
                            },
                            "expression": false,
                            "start": 1556,
                            "end": 1617
                          },
                          "kind": "get",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 1516,
                          "end": 1617
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1634,
                            "end": 1648
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
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1652,
                                  "end": 1664
                                },
                                "typeArguments": null,
                                "start": 1652,
                                "end": 1664
                              },
                              "start": 1650,
                              "end": 1664
                            },
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 1690,
                                    "end": 1694
                                  },
                                  "start": 1683,
                                  "end": 1695
                                }
                              ],
                              "start": 1665,
                              "end": 1709
                            },
                            "expression": false,
                            "start": 1648,
                            "end": 1709
                          },
                          "kind": "get",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 1630,
                          "end": 1709
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1734,
                            "end": 1749
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
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1753,
                                  "end": 1765
                                },
                                "typeArguments": null,
                                "start": 1753,
                                "end": 1765
                              },
                              "start": 1751,
                              "end": 1765
                            },
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 1791,
                                    "end": 1795
                                  },
                                  "start": 1784,
                                  "end": 1796
                                }
                              ],
                              "start": 1766,
                              "end": 1810
                            },
                            "expression": false,
                            "start": 1749,
                            "end": 1810
                          },
                          "kind": "get",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 1722,
                          "end": 1810
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicStaticMethod1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1834,
                            "end": 1855
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
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1887,
                                      "end": 1899
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 1883,
                                    "end": 1901
                                  },
                                  "start": 1876,
                                  "end": 1902
                                }
                              ],
                              "start": 1858,
                              "end": 1916
                            },
                            "expression": false,
                            "start": 1855,
                            "end": 1916
                          },
                          "kind": "get",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 1823,
                          "end": 1916
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateStaticMethod1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1948,
                            "end": 1970
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
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2002,
                                      "end": 2014
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 1998,
                                    "end": 2016
                                  },
                                  "start": 1991,
                                  "end": 2017
                                }
                              ],
                              "start": 1973,
                              "end": 2031
                            },
                            "expression": false,
                            "start": 1970,
                            "end": 2031
                          },
                          "kind": "get",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 1929,
                          "end": 2031
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicMethod1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2048,
                            "end": 2063
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
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2095,
                                      "end": 2107
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 2091,
                                    "end": 2109
                                  },
                                  "start": 2084,
                                  "end": 2110
                                }
                              ],
                              "start": 2066,
                              "end": 2124
                            },
                            "expression": false,
                            "start": 2063,
                            "end": 2124
                          },
                          "kind": "get",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2044,
                          "end": 2124
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateMethod1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2149,
                            "end": 2165
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
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2197,
                                      "end": 2209
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 2193,
                                    "end": 2211
                                  },
                                  "start": 2186,
                                  "end": 2212
                                }
                              ],
                              "start": 2168,
                              "end": 2226
                            },
                            "expression": false,
                            "start": 2165,
                            "end": 2226
                          },
                          "kind": "get",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 2137,
                          "end": 2226
                        }
                      ],
                      "start": 1397,
                      "end": 2236
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1348,
                    "end": 2236
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1341,
                  "end": 2236
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassWithWithPublicGetAccessorTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2259,
                      "end": 2300
                    },
                    "typeParameters": null,
                    "superClass": null,
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
                            "name": "myPublicStaticMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2326,
                            "end": 2346
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
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2350,
                                  "end": 2361
                                },
                                "typeArguments": null,
                                "start": 2350,
                                "end": 2361
                              },
                              "start": 2348,
                              "end": 2361
                            },
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 2387,
                                    "end": 2391
                                  },
                                  "start": 2380,
                                  "end": 2392
                                }
                              ],
                              "start": 2362,
                              "end": 2406
                            },
                            "expression": false,
                            "start": 2346,
                            "end": 2406
                          },
                          "kind": "get",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2315,
                          "end": 2406
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateStaticMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2438,
                            "end": 2459
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
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2463,
                                  "end": 2474
                                },
                                "typeArguments": null,
                                "start": 2463,
                                "end": 2474
                              },
                              "start": 2461,
                              "end": 2474
                            },
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 2500,
                                    "end": 2504
                                  },
                                  "start": 2493,
                                  "end": 2505
                                }
                              ],
                              "start": 2475,
                              "end": 2519
                            },
                            "expression": false,
                            "start": 2459,
                            "end": 2519
                          },
                          "kind": "get",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 2419,
                          "end": 2519
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2536,
                            "end": 2550
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
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2554,
                                  "end": 2565
                                },
                                "typeArguments": null,
                                "start": 2554,
                                "end": 2565
                              },
                              "start": 2552,
                              "end": 2565
                            },
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 2591,
                                    "end": 2595
                                  },
                                  "start": 2584,
                                  "end": 2596
                                }
                              ],
                              "start": 2566,
                              "end": 2610
                            },
                            "expression": false,
                            "start": 2550,
                            "end": 2610
                          },
                          "kind": "get",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2532,
                          "end": 2610
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2635,
                            "end": 2650
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
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2654,
                                  "end": 2665
                                },
                                "typeArguments": null,
                                "start": 2654,
                                "end": 2665
                              },
                              "start": 2652,
                              "end": 2665
                            },
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 2691,
                                    "end": 2695
                                  },
                                  "start": 2684,
                                  "end": 2696
                                }
                              ],
                              "start": 2666,
                              "end": 2710
                            },
                            "expression": false,
                            "start": 2650,
                            "end": 2710
                          },
                          "kind": "get",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 2623,
                          "end": 2710
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicStaticMethod1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2734,
                            "end": 2755
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
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2787,
                                      "end": 2798
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 2783,
                                    "end": 2800
                                  },
                                  "start": 2776,
                                  "end": 2801
                                }
                              ],
                              "start": 2758,
                              "end": 2815
                            },
                            "expression": false,
                            "start": 2755,
                            "end": 2815
                          },
                          "kind": "get",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2723,
                          "end": 2815
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateStaticMethod1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2847,
                            "end": 2869
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
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2901,
                                      "end": 2912
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 2897,
                                    "end": 2914
                                  },
                                  "start": 2890,
                                  "end": 2915
                                }
                              ],
                              "start": 2872,
                              "end": 2929
                            },
                            "expression": false,
                            "start": 2869,
                            "end": 2929
                          },
                          "kind": "get",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 2828,
                          "end": 2929
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicMethod1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2946,
                            "end": 2961
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
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2993,
                                      "end": 3004
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 2989,
                                    "end": 3006
                                  },
                                  "start": 2982,
                                  "end": 3007
                                }
                              ],
                              "start": 2964,
                              "end": 3021
                            },
                            "expression": false,
                            "start": 2961,
                            "end": 3021
                          },
                          "kind": "get",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2942,
                          "end": 3021
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateMethod1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3046,
                            "end": 3062
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
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3094,
                                      "end": 3105
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 3090,
                                    "end": 3107
                                  },
                                  "start": 3083,
                                  "end": 3108
                                }
                              ],
                              "start": 3065,
                              "end": 3122
                            },
                            "expression": false,
                            "start": 3062,
                            "end": 3122
                          },
                          "kind": "get",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 3034,
                          "end": 3122
                        }
                      ],
                      "start": 2301,
                      "end": 3132
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 2253,
                    "end": 3132
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 2246,
                  "end": 3132
                },
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClassWithWithPrivateGetAccessorTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3148,
                    "end": 3191
                  },
                  "typeParameters": null,
                  "superClass": null,
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
                          "name": "myPublicStaticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3217,
                          "end": 3237
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
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3241,
                                "end": 3253
                              },
                              "typeArguments": null,
                              "start": 3241,
                              "end": 3253
                            },
                            "start": 3239,
                            "end": 3253
                          },
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 3279,
                                  "end": 3283
                                },
                                "start": 3272,
                                "end": 3284
                              }
                            ],
                            "start": 3254,
                            "end": 3298
                          },
                          "expression": false,
                          "start": 3237,
                          "end": 3298
                        },
                        "kind": "get",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 3206,
                        "end": 3298
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateStaticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3330,
                          "end": 3351
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
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3355,
                                "end": 3367
                              },
                              "typeArguments": null,
                              "start": 3355,
                              "end": 3367
                            },
                            "start": 3353,
                            "end": 3367
                          },
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 3393,
                                  "end": 3397
                                },
                                "start": 3386,
                                "end": 3398
                              }
                            ],
                            "start": 3368,
                            "end": 3412
                          },
                          "expression": false,
                          "start": 3351,
                          "end": 3412
                        },
                        "kind": "get",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 3311,
                        "end": 3412
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3429,
                          "end": 3443
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
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3447,
                                "end": 3459
                              },
                              "typeArguments": null,
                              "start": 3447,
                              "end": 3459
                            },
                            "start": 3445,
                            "end": 3459
                          },
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 3485,
                                  "end": 3489
                                },
                                "start": 3478,
                                "end": 3490
                              }
                            ],
                            "start": 3460,
                            "end": 3504
                          },
                          "expression": false,
                          "start": 3443,
                          "end": 3504
                        },
                        "kind": "get",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 3425,
                        "end": 3504
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3529,
                          "end": 3544
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
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3548,
                                "end": 3560
                              },
                              "typeArguments": null,
                              "start": 3548,
                              "end": 3560
                            },
                            "start": 3546,
                            "end": 3560
                          },
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 3586,
                                  "end": 3590
                                },
                                "start": 3579,
                                "end": 3591
                              }
                            ],
                            "start": 3561,
                            "end": 3605
                          },
                          "expression": false,
                          "start": 3544,
                          "end": 3605
                        },
                        "kind": "get",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 3517,
                        "end": 3605
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicStaticMethod1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3629,
                          "end": 3650
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
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3682,
                                    "end": 3694
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 3678,
                                  "end": 3696
                                },
                                "start": 3671,
                                "end": 3697
                              }
                            ],
                            "start": 3653,
                            "end": 3711
                          },
                          "expression": false,
                          "start": 3650,
                          "end": 3711
                        },
                        "kind": "get",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 3618,
                        "end": 3711
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateStaticMethod1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3743,
                          "end": 3765
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
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3797,
                                    "end": 3809
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 3793,
                                  "end": 3811
                                },
                                "start": 3786,
                                "end": 3812
                              }
                            ],
                            "start": 3768,
                            "end": 3826
                          },
                          "expression": false,
                          "start": 3765,
                          "end": 3826
                        },
                        "kind": "get",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 3724,
                        "end": 3826
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicMethod1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3843,
                          "end": 3858
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
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3890,
                                    "end": 3902
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 3886,
                                  "end": 3904
                                },
                                "start": 3879,
                                "end": 3905
                              }
                            ],
                            "start": 3861,
                            "end": 3919
                          },
                          "expression": false,
                          "start": 3858,
                          "end": 3919
                        },
                        "kind": "get",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 3839,
                        "end": 3919
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateMethod1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3944,
                          "end": 3960
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
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3992,
                                    "end": 4004
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 3988,
                                  "end": 4006
                                },
                                "start": 3981,
                                "end": 4007
                              }
                            ],
                            "start": 3963,
                            "end": 4021
                          },
                          "expression": false,
                          "start": 3960,
                          "end": 4021
                        },
                        "kind": "get",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 3932,
                        "end": 4021
                      }
                    ],
                    "start": 3192,
                    "end": 4031
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 3142,
                  "end": 4031
                },
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClassWithWithPublicGetAccessorTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4047,
                    "end": 4089
                  },
                  "typeParameters": null,
                  "superClass": null,
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
                          "name": "myPublicStaticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4115,
                          "end": 4135
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
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4139,
                                "end": 4150
                              },
                              "typeArguments": null,
                              "start": 4139,
                              "end": 4150
                            },
                            "start": 4137,
                            "end": 4150
                          },
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 4176,
                                  "end": 4180
                                },
                                "start": 4169,
                                "end": 4181
                              }
                            ],
                            "start": 4151,
                            "end": 4195
                          },
                          "expression": false,
                          "start": 4135,
                          "end": 4195
                        },
                        "kind": "get",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 4104,
                        "end": 4195
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateStaticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4227,
                          "end": 4248
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
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4252,
                                "end": 4263
                              },
                              "typeArguments": null,
                              "start": 4252,
                              "end": 4263
                            },
                            "start": 4250,
                            "end": 4263
                          },
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 4289,
                                  "end": 4293
                                },
                                "start": 4282,
                                "end": 4294
                              }
                            ],
                            "start": 4264,
                            "end": 4308
                          },
                          "expression": false,
                          "start": 4248,
                          "end": 4308
                        },
                        "kind": "get",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 4208,
                        "end": 4308
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4325,
                          "end": 4339
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
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4343,
                                "end": 4354
                              },
                              "typeArguments": null,
                              "start": 4343,
                              "end": 4354
                            },
                            "start": 4341,
                            "end": 4354
                          },
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 4380,
                                  "end": 4384
                                },
                                "start": 4373,
                                "end": 4385
                              }
                            ],
                            "start": 4355,
                            "end": 4399
                          },
                          "expression": false,
                          "start": 4339,
                          "end": 4399
                        },
                        "kind": "get",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 4321,
                        "end": 4399
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4424,
                          "end": 4439
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
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4443,
                                "end": 4454
                              },
                              "typeArguments": null,
                              "start": 4443,
                              "end": 4454
                            },
                            "start": 4441,
                            "end": 4454
                          },
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 4480,
                                  "end": 4484
                                },
                                "start": 4473,
                                "end": 4485
                              }
                            ],
                            "start": 4455,
                            "end": 4499
                          },
                          "expression": false,
                          "start": 4439,
                          "end": 4499
                        },
                        "kind": "get",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 4412,
                        "end": 4499
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicStaticMethod1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4523,
                          "end": 4544
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
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4576,
                                    "end": 4587
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 4572,
                                  "end": 4589
                                },
                                "start": 4565,
                                "end": 4590
                              }
                            ],
                            "start": 4547,
                            "end": 4604
                          },
                          "expression": false,
                          "start": 4544,
                          "end": 4604
                        },
                        "kind": "get",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 4512,
                        "end": 4604
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateStaticMethod1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4636,
                          "end": 4658
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
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4690,
                                    "end": 4701
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 4686,
                                  "end": 4703
                                },
                                "start": 4679,
                                "end": 4704
                              }
                            ],
                            "start": 4661,
                            "end": 4718
                          },
                          "expression": false,
                          "start": 4658,
                          "end": 4718
                        },
                        "kind": "get",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 4617,
                        "end": 4718
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicMethod1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4735,
                          "end": 4750
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
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4782,
                                    "end": 4793
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 4778,
                                  "end": 4795
                                },
                                "start": 4771,
                                "end": 4796
                              }
                            ],
                            "start": 4753,
                            "end": 4810
                          },
                          "expression": false,
                          "start": 4750,
                          "end": 4810
                        },
                        "kind": "get",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 4731,
                        "end": 4810
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateMethod1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4835,
                          "end": 4851
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
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4883,
                                    "end": 4894
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 4879,
                                  "end": 4896
                                },
                                "start": 4872,
                                "end": 4897
                              }
                            ],
                            "start": 4854,
                            "end": 4911
                          },
                          "expression": false,
                          "start": 4851,
                          "end": 4911
                        },
                        "kind": "get",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 4823,
                        "end": 4911
                      }
                    ],
                    "start": 4090,
                    "end": 4921
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 4041,
                  "end": 4921
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassWithWithPrivateSetAccessorTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4944,
                      "end": 4986
                    },
                    "typeParameters": null,
                    "superClass": null,
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
                            "name": "myPublicStaticMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5012,
                            "end": 5032
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
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5040,
                                      "end": 5052
                                    },
                                    "typeArguments": null,
                                    "start": 5040,
                                    "end": 5052
                                  },
                                  "start": 5038,
                                  "end": 5052
                                },
                                "start": 5033,
                                "end": 5052
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 5054,
                              "end": 5069
                            },
                            "expression": false,
                            "start": 5032,
                            "end": 5069
                          },
                          "kind": "set",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 5001,
                          "end": 5069
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateStaticMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5101,
                            "end": 5122
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
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5130,
                                      "end": 5142
                                    },
                                    "typeArguments": null,
                                    "start": 5130,
                                    "end": 5142
                                  },
                                  "start": 5128,
                                  "end": 5142
                                },
                                "start": 5123,
                                "end": 5142
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 5144,
                              "end": 5159
                            },
                            "expression": false,
                            "start": 5122,
                            "end": 5159
                          },
                          "kind": "set",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 5082,
                          "end": 5159
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5176,
                            "end": 5190
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
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5198,
                                      "end": 5210
                                    },
                                    "typeArguments": null,
                                    "start": 5198,
                                    "end": 5210
                                  },
                                  "start": 5196,
                                  "end": 5210
                                },
                                "start": 5191,
                                "end": 5210
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 5212,
                              "end": 5227
                            },
                            "expression": false,
                            "start": 5190,
                            "end": 5227
                          },
                          "kind": "set",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 5172,
                          "end": 5227
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5252,
                            "end": 5267
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
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5275,
                                      "end": 5287
                                    },
                                    "typeArguments": null,
                                    "start": 5275,
                                    "end": 5287
                                  },
                                  "start": 5273,
                                  "end": 5287
                                },
                                "start": 5268,
                                "end": 5287
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 5289,
                              "end": 5304
                            },
                            "expression": false,
                            "start": 5267,
                            "end": 5304
                          },
                          "kind": "set",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 5240,
                          "end": 5304
                        }
                      ],
                      "start": 4987,
                      "end": 5314
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 4938,
                    "end": 5314
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 4931,
                  "end": 5314
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassWithWithPublicSetAccessorTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5337,
                      "end": 5378
                    },
                    "typeParameters": null,
                    "superClass": null,
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
                            "name": "myPublicStaticMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5404,
                            "end": 5424
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
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5432,
                                      "end": 5443
                                    },
                                    "typeArguments": null,
                                    "start": 5432,
                                    "end": 5443
                                  },
                                  "start": 5430,
                                  "end": 5443
                                },
                                "start": 5425,
                                "end": 5443
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 5445,
                              "end": 5460
                            },
                            "expression": false,
                            "start": 5424,
                            "end": 5460
                          },
                          "kind": "set",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 5393,
                          "end": 5460
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateStaticMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5492,
                            "end": 5513
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
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5521,
                                      "end": 5532
                                    },
                                    "typeArguments": null,
                                    "start": 5521,
                                    "end": 5532
                                  },
                                  "start": 5519,
                                  "end": 5532
                                },
                                "start": 5514,
                                "end": 5532
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 5534,
                              "end": 5549
                            },
                            "expression": false,
                            "start": 5513,
                            "end": 5549
                          },
                          "kind": "set",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 5473,
                          "end": 5549
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5566,
                            "end": 5580
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
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5588,
                                      "end": 5599
                                    },
                                    "typeArguments": null,
                                    "start": 5588,
                                    "end": 5599
                                  },
                                  "start": 5586,
                                  "end": 5599
                                },
                                "start": 5581,
                                "end": 5599
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 5601,
                              "end": 5616
                            },
                            "expression": false,
                            "start": 5580,
                            "end": 5616
                          },
                          "kind": "set",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 5562,
                          "end": 5616
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPrivateMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5641,
                            "end": 5656
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
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5664,
                                      "end": 5675
                                    },
                                    "typeArguments": null,
                                    "start": 5664,
                                    "end": 5675
                                  },
                                  "start": 5662,
                                  "end": 5675
                                },
                                "start": 5657,
                                "end": 5675
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 5677,
                              "end": 5692
                            },
                            "expression": false,
                            "start": 5656,
                            "end": 5692
                          },
                          "kind": "set",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 5629,
                          "end": 5692
                        }
                      ],
                      "start": 5379,
                      "end": 5702
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 5331,
                    "end": 5702
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 5324,
                  "end": 5702
                },
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClassWithWithPrivateSetAccessorTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5718,
                    "end": 5761
                  },
                  "typeParameters": null,
                  "superClass": null,
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
                          "name": "myPublicStaticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5787,
                          "end": 5807
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
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5815,
                                    "end": 5827
                                  },
                                  "typeArguments": null,
                                  "start": 5815,
                                  "end": 5827
                                },
                                "start": 5813,
                                "end": 5827
                              },
                              "start": 5808,
                              "end": 5827
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 5829,
                            "end": 5844
                          },
                          "expression": false,
                          "start": 5807,
                          "end": 5844
                        },
                        "kind": "set",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 5776,
                        "end": 5844
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateStaticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5876,
                          "end": 5897
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
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5905,
                                    "end": 5917
                                  },
                                  "typeArguments": null,
                                  "start": 5905,
                                  "end": 5917
                                },
                                "start": 5903,
                                "end": 5917
                              },
                              "start": 5898,
                              "end": 5917
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 5919,
                            "end": 5934
                          },
                          "expression": false,
                          "start": 5897,
                          "end": 5934
                        },
                        "kind": "set",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 5857,
                        "end": 5934
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5951,
                          "end": 5965
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
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5973,
                                    "end": 5985
                                  },
                                  "typeArguments": null,
                                  "start": 5973,
                                  "end": 5985
                                },
                                "start": 5971,
                                "end": 5985
                              },
                              "start": 5966,
                              "end": 5985
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 5987,
                            "end": 6002
                          },
                          "expression": false,
                          "start": 5965,
                          "end": 6002
                        },
                        "kind": "set",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 5947,
                        "end": 6002
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6027,
                          "end": 6042
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
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6050,
                                    "end": 6062
                                  },
                                  "typeArguments": null,
                                  "start": 6050,
                                  "end": 6062
                                },
                                "start": 6048,
                                "end": 6062
                              },
                              "start": 6043,
                              "end": 6062
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 6064,
                            "end": 6079
                          },
                          "expression": false,
                          "start": 6042,
                          "end": 6079
                        },
                        "kind": "set",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 6015,
                        "end": 6079
                      }
                    ],
                    "start": 5762,
                    "end": 6089
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 5712,
                  "end": 6089
                },
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClassWithWithPublicSetAccessorTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6105,
                    "end": 6147
                  },
                  "typeParameters": null,
                  "superClass": null,
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
                          "name": "myPublicStaticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6173,
                          "end": 6193
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
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6201,
                                    "end": 6212
                                  },
                                  "typeArguments": null,
                                  "start": 6201,
                                  "end": 6212
                                },
                                "start": 6199,
                                "end": 6212
                              },
                              "start": 6194,
                              "end": 6212
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 6214,
                            "end": 6229
                          },
                          "expression": false,
                          "start": 6193,
                          "end": 6229
                        },
                        "kind": "set",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 6162,
                        "end": 6229
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateStaticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6261,
                          "end": 6282
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
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6290,
                                    "end": 6301
                                  },
                                  "typeArguments": null,
                                  "start": 6290,
                                  "end": 6301
                                },
                                "start": 6288,
                                "end": 6301
                              },
                              "start": 6283,
                              "end": 6301
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 6303,
                            "end": 6318
                          },
                          "expression": false,
                          "start": 6282,
                          "end": 6318
                        },
                        "kind": "set",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 6242,
                        "end": 6318
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6335,
                          "end": 6349
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
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6357,
                                    "end": 6368
                                  },
                                  "typeArguments": null,
                                  "start": 6357,
                                  "end": 6368
                                },
                                "start": 6355,
                                "end": 6368
                              },
                              "start": 6350,
                              "end": 6368
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 6370,
                            "end": 6385
                          },
                          "expression": false,
                          "start": 6349,
                          "end": 6385
                        },
                        "kind": "set",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 6331,
                        "end": 6385
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPrivateMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6410,
                          "end": 6425
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
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6433,
                                    "end": 6444
                                  },
                                  "typeArguments": null,
                                  "start": 6433,
                                  "end": 6444
                                },
                                "start": 6431,
                                "end": 6444
                              },
                              "start": 6426,
                              "end": 6444
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 6446,
                            "end": 6461
                          },
                          "expression": false,
                          "start": 6425,
                          "end": 6461
                        },
                        "kind": "set",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 6398,
                        "end": 6461
                      }
                    ],
                    "start": 6148,
                    "end": 6471
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 6099,
                  "end": 6471
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassWithPrivateModuleGetAccessorTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6494,
                      "end": 6538
                    },
                    "typeParameters": null,
                    "superClass": null,
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
                            "name": "myPublicStaticMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6564,
                            "end": 6584
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
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6588,
                                    "end": 6601
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6602,
                                    "end": 6613
                                  },
                                  "start": 6588,
                                  "end": 6613
                                },
                                "typeArguments": null,
                                "start": 6588,
                                "end": 6613
                              },
                              "start": 6586,
                              "end": 6613
                            },
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 6639,
                                    "end": 6643
                                  },
                                  "start": 6632,
                                  "end": 6644
                                }
                              ],
                              "start": 6614,
                              "end": 6658
                            },
                            "expression": false,
                            "start": 6584,
                            "end": 6658
                          },
                          "kind": "get",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 6553,
                          "end": 6658
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6675,
                            "end": 6689
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
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6693,
                                    "end": 6706
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6707,
                                    "end": 6718
                                  },
                                  "start": 6693,
                                  "end": 6718
                                },
                                "typeArguments": null,
                                "start": 6693,
                                "end": 6718
                              },
                              "start": 6691,
                              "end": 6718
                            },
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 6744,
                                    "end": 6748
                                  },
                                  "start": 6737,
                                  "end": 6749
                                }
                              ],
                              "start": 6719,
                              "end": 6763
                            },
                            "expression": false,
                            "start": 6689,
                            "end": 6763
                          },
                          "kind": "get",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 6671,
                          "end": 6763
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicStaticMethod1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6787,
                            "end": 6808
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
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "privateModule",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 6840,
                                        "end": 6853
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 6854,
                                        "end": 6865
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 6840,
                                      "end": 6865
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 6836,
                                    "end": 6867
                                  },
                                  "start": 6829,
                                  "end": 6868
                                }
                              ],
                              "start": 6811,
                              "end": 6882
                            },
                            "expression": false,
                            "start": 6808,
                            "end": 6882
                          },
                          "kind": "get",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 6776,
                          "end": 6882
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicMethod1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6899,
                            "end": 6914
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
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "privateModule",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 6946,
                                        "end": 6959
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 6960,
                                        "end": 6971
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 6946,
                                      "end": 6971
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 6942,
                                    "end": 6973
                                  },
                                  "start": 6935,
                                  "end": 6974
                                }
                              ],
                              "start": 6917,
                              "end": 6988
                            },
                            "expression": false,
                            "start": 6914,
                            "end": 6988
                          },
                          "kind": "get",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 6895,
                          "end": 6988
                        }
                      ],
                      "start": 6539,
                      "end": 6998
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 6488,
                    "end": 6998
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 6481,
                  "end": 6998
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassWithPrivateModuleSetAccessorTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7021,
                      "end": 7065
                    },
                    "typeParameters": null,
                    "superClass": null,
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
                            "name": "myPublicStaticMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7091,
                            "end": 7111
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
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "privateModule",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 7119,
                                        "end": 7132
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 7133,
                                        "end": 7144
                                      },
                                      "start": 7119,
                                      "end": 7144
                                    },
                                    "typeArguments": null,
                                    "start": 7119,
                                    "end": 7144
                                  },
                                  "start": 7117,
                                  "end": 7144
                                },
                                "start": 7112,
                                "end": 7144
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 7146,
                              "end": 7161
                            },
                            "expression": false,
                            "start": 7111,
                            "end": 7161
                          },
                          "kind": "set",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 7080,
                          "end": 7161
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myPublicMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7178,
                            "end": 7192
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
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "privateModule",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 7200,
                                        "end": 7213
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 7214,
                                        "end": 7225
                                      },
                                      "start": 7200,
                                      "end": 7225
                                    },
                                    "typeArguments": null,
                                    "start": 7200,
                                    "end": 7225
                                  },
                                  "start": 7198,
                                  "end": 7225
                                },
                                "start": 7193,
                                "end": 7225
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 7227,
                              "end": 7242
                            },
                            "expression": false,
                            "start": 7192,
                            "end": 7242
                          },
                          "kind": "set",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 7174,
                          "end": 7242
                        }
                      ],
                      "start": 7066,
                      "end": 7252
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 7015,
                    "end": 7252
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 7008,
                  "end": 7252
                },
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClassWithPrivateModuleGetAccessorTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7268,
                    "end": 7313
                  },
                  "typeParameters": null,
                  "superClass": null,
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
                          "name": "myPublicStaticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7339,
                          "end": 7359
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
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7363,
                                  "end": 7376
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7377,
                                  "end": 7388
                                },
                                "start": 7363,
                                "end": 7388
                              },
                              "typeArguments": null,
                              "start": 7363,
                              "end": 7388
                            },
                            "start": 7361,
                            "end": 7388
                          },
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 7414,
                                  "end": 7418
                                },
                                "start": 7407,
                                "end": 7419
                              }
                            ],
                            "start": 7389,
                            "end": 7433
                          },
                          "expression": false,
                          "start": 7359,
                          "end": 7433
                        },
                        "kind": "get",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 7328,
                        "end": 7433
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7450,
                          "end": 7464
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
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7468,
                                  "end": 7481
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7482,
                                  "end": 7493
                                },
                                "start": 7468,
                                "end": 7493
                              },
                              "typeArguments": null,
                              "start": 7468,
                              "end": 7493
                            },
                            "start": 7466,
                            "end": 7493
                          },
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 7519,
                                  "end": 7523
                                },
                                "start": 7512,
                                "end": 7524
                              }
                            ],
                            "start": 7494,
                            "end": 7538
                          },
                          "expression": false,
                          "start": 7464,
                          "end": 7538
                        },
                        "kind": "get",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 7446,
                        "end": 7538
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicStaticMethod1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7562,
                          "end": 7583
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
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateModule",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 7615,
                                      "end": 7628
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 7629,
                                      "end": 7640
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 7615,
                                    "end": 7640
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 7611,
                                  "end": 7642
                                },
                                "start": 7604,
                                "end": 7643
                              }
                            ],
                            "start": 7586,
                            "end": 7657
                          },
                          "expression": false,
                          "start": 7583,
                          "end": 7657
                        },
                        "kind": "get",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 7551,
                        "end": 7657
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicMethod1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7674,
                          "end": 7689
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
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateModule",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 7721,
                                      "end": 7734
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 7735,
                                      "end": 7746
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 7721,
                                    "end": 7746
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 7717,
                                  "end": 7748
                                },
                                "start": 7710,
                                "end": 7749
                              }
                            ],
                            "start": 7692,
                            "end": 7763
                          },
                          "expression": false,
                          "start": 7689,
                          "end": 7763
                        },
                        "kind": "get",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 7670,
                        "end": 7763
                      }
                    ],
                    "start": 7314,
                    "end": 7773
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 7262,
                  "end": 7773
                },
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClassWithPrivateModuleSetAccessorTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7789,
                    "end": 7834
                  },
                  "typeParameters": null,
                  "superClass": null,
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
                          "name": "myPublicStaticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7860,
                          "end": 7880
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
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateModule",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 7888,
                                      "end": 7901
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 7902,
                                      "end": 7913
                                    },
                                    "start": 7888,
                                    "end": 7913
                                  },
                                  "typeArguments": null,
                                  "start": 7888,
                                  "end": 7913
                                },
                                "start": 7886,
                                "end": 7913
                              },
                              "start": 7881,
                              "end": 7913
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 7915,
                            "end": 7930
                          },
                          "expression": false,
                          "start": 7880,
                          "end": 7930
                        },
                        "kind": "set",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 7849,
                        "end": 7930
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myPublicMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7947,
                          "end": 7961
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
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "privateModule",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 7969,
                                      "end": 7982
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 7983,
                                      "end": 7994
                                    },
                                    "start": 7969,
                                    "end": 7994
                                  },
                                  "typeArguments": null,
                                  "start": 7969,
                                  "end": 7994
                                },
                                "start": 7967,
                                "end": 7994
                              },
                              "start": 7962,
                              "end": 7994
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 7996,
                            "end": 8011
                          },
                          "expression": false,
                          "start": 7961,
                          "end": 8011
                        },
                        "kind": "set",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 7943,
                        "end": 8011
                      }
                    ],
                    "start": 7835,
                    "end": 8021
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 7783,
                  "end": 8021
                }
              ],
              "start": 1246,
              "end": 8027
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 1225,
            "end": 8027
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPrivateGetAccessorTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 8046,
                "end": 8088
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8110,
                      "end": 8130
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
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8134,
                            "end": 8146
                          },
                          "typeArguments": null,
                          "start": 8134,
                          "end": 8146
                        },
                        "start": 8132,
                        "end": 8146
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 8177,
                              "end": 8181
                            },
                            "start": 8170,
                            "end": 8182
                          }
                        ],
                        "start": 8147,
                        "end": 8192
                      },
                      "expression": false,
                      "start": 8130,
                      "end": 8192
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8099,
                    "end": 8192
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8220,
                      "end": 8241
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
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8245,
                            "end": 8257
                          },
                          "typeArguments": null,
                          "start": 8245,
                          "end": 8257
                        },
                        "start": 8243,
                        "end": 8257
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 8279,
                              "end": 8283
                            },
                            "start": 8272,
                            "end": 8284
                          }
                        ],
                        "start": 8258,
                        "end": 8294
                      },
                      "expression": false,
                      "start": 8241,
                      "end": 8294
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 8201,
                    "end": 8294
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8307,
                      "end": 8321
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
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8325,
                            "end": 8337
                          },
                          "typeArguments": null,
                          "start": 8325,
                          "end": 8337
                        },
                        "start": 8323,
                        "end": 8337
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 8368,
                              "end": 8372
                            },
                            "start": 8361,
                            "end": 8373
                          }
                        ],
                        "start": 8338,
                        "end": 8383
                      },
                      "expression": false,
                      "start": 8321,
                      "end": 8383
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8303,
                    "end": 8383
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8404,
                      "end": 8419
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
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8423,
                            "end": 8435
                          },
                          "typeArguments": null,
                          "start": 8423,
                          "end": 8435
                        },
                        "start": 8421,
                        "end": 8435
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 8457,
                              "end": 8461
                            },
                            "start": 8450,
                            "end": 8462
                          }
                        ],
                        "start": 8436,
                        "end": 8472
                      },
                      "expression": false,
                      "start": 8419,
                      "end": 8472
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 8392,
                    "end": 8472
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8492,
                      "end": 8513
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8550,
                                "end": 8562
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 8546,
                              "end": 8564
                            },
                            "start": 8539,
                            "end": 8565
                          }
                        ],
                        "start": 8516,
                        "end": 8575
                      },
                      "expression": false,
                      "start": 8513,
                      "end": 8575
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8481,
                    "end": 8575
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8603,
                      "end": 8625
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8653,
                                "end": 8665
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 8649,
                              "end": 8667
                            },
                            "start": 8642,
                            "end": 8668
                          }
                        ],
                        "start": 8628,
                        "end": 8678
                      },
                      "expression": false,
                      "start": 8625,
                      "end": 8678
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 8584,
                    "end": 8678
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8691,
                      "end": 8706
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8743,
                                "end": 8755
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 8739,
                              "end": 8757
                            },
                            "start": 8732,
                            "end": 8758
                          }
                        ],
                        "start": 8709,
                        "end": 8768
                      },
                      "expression": false,
                      "start": 8706,
                      "end": 8768
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8687,
                    "end": 8768
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8789,
                      "end": 8805
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8833,
                                "end": 8845
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 8829,
                              "end": 8847
                            },
                            "start": 8822,
                            "end": 8848
                          }
                        ],
                        "start": 8808,
                        "end": 8858
                      },
                      "expression": false,
                      "start": 8805,
                      "end": 8858
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 8777,
                    "end": 8858
                  }
                ],
                "start": 8089,
                "end": 8864
              },
              "abstract": false,
              "declare": false,
              "start": 8040,
              "end": 8864
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 8033,
            "end": 8864
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPublicGetAccessorTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 8883,
                "end": 8924
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8946,
                      "end": 8966
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
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8970,
                            "end": 8981
                          },
                          "typeArguments": null,
                          "start": 8970,
                          "end": 8981
                        },
                        "start": 8968,
                        "end": 8981
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 9003,
                              "end": 9007
                            },
                            "start": 8996,
                            "end": 9008
                          }
                        ],
                        "start": 8982,
                        "end": 9018
                      },
                      "expression": false,
                      "start": 8966,
                      "end": 9018
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8935,
                    "end": 9018
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9046,
                      "end": 9067
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
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9071,
                            "end": 9082
                          },
                          "typeArguments": null,
                          "start": 9071,
                          "end": 9082
                        },
                        "start": 9069,
                        "end": 9082
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 9104,
                              "end": 9108
                            },
                            "start": 9097,
                            "end": 9109
                          }
                        ],
                        "start": 9083,
                        "end": 9119
                      },
                      "expression": false,
                      "start": 9067,
                      "end": 9119
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 9027,
                    "end": 9119
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9132,
                      "end": 9146
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
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9150,
                            "end": 9161
                          },
                          "typeArguments": null,
                          "start": 9150,
                          "end": 9161
                        },
                        "start": 9148,
                        "end": 9161
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 9183,
                              "end": 9187
                            },
                            "start": 9176,
                            "end": 9188
                          }
                        ],
                        "start": 9162,
                        "end": 9198
                      },
                      "expression": false,
                      "start": 9146,
                      "end": 9198
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9128,
                    "end": 9198
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9219,
                      "end": 9234
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
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9238,
                            "end": 9249
                          },
                          "typeArguments": null,
                          "start": 9238,
                          "end": 9249
                        },
                        "start": 9236,
                        "end": 9249
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 9271,
                              "end": 9275
                            },
                            "start": 9264,
                            "end": 9276
                          }
                        ],
                        "start": 9250,
                        "end": 9286
                      },
                      "expression": false,
                      "start": 9234,
                      "end": 9286
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 9207,
                    "end": 9286
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9306,
                      "end": 9327
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9355,
                                "end": 9366
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 9351,
                              "end": 9368
                            },
                            "start": 9344,
                            "end": 9369
                          }
                        ],
                        "start": 9330,
                        "end": 9379
                      },
                      "expression": false,
                      "start": 9327,
                      "end": 9379
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9295,
                    "end": 9379
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9407,
                      "end": 9429
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9457,
                                "end": 9468
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 9453,
                              "end": 9470
                            },
                            "start": 9446,
                            "end": 9471
                          }
                        ],
                        "start": 9432,
                        "end": 9481
                      },
                      "expression": false,
                      "start": 9429,
                      "end": 9481
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 9388,
                    "end": 9481
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9494,
                      "end": 9509
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9537,
                                "end": 9548
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 9533,
                              "end": 9550
                            },
                            "start": 9526,
                            "end": 9551
                          }
                        ],
                        "start": 9512,
                        "end": 9561
                      },
                      "expression": false,
                      "start": 9509,
                      "end": 9561
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9490,
                    "end": 9561
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9582,
                      "end": 9598
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9626,
                                "end": 9637
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 9622,
                              "end": 9639
                            },
                            "start": 9615,
                            "end": 9640
                          }
                        ],
                        "start": 9601,
                        "end": 9650
                      },
                      "expression": false,
                      "start": 9598,
                      "end": 9650
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 9570,
                    "end": 9650
                  }
                ],
                "start": 8925,
                "end": 9656
              },
              "abstract": false,
              "declare": false,
              "start": 8877,
              "end": 9656
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 8870,
            "end": 9656
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPrivateGetAccessorTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 9668,
              "end": 9711
            },
            "typeParameters": null,
            "superClass": null,
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
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9733,
                    "end": 9753
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
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9757,
                          "end": 9769
                        },
                        "typeArguments": null,
                        "start": 9757,
                        "end": 9769
                      },
                      "start": 9755,
                      "end": 9769
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 9791,
                            "end": 9795
                          },
                          "start": 9784,
                          "end": 9796
                        }
                      ],
                      "start": 9770,
                      "end": 9806
                    },
                    "expression": false,
                    "start": 9753,
                    "end": 9806
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 9722,
                  "end": 9806
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9834,
                    "end": 9855
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
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9859,
                          "end": 9871
                        },
                        "typeArguments": null,
                        "start": 9859,
                        "end": 9871
                      },
                      "start": 9857,
                      "end": 9871
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 9893,
                            "end": 9897
                          },
                          "start": 9886,
                          "end": 9898
                        }
                      ],
                      "start": 9872,
                      "end": 9908
                    },
                    "expression": false,
                    "start": 9855,
                    "end": 9908
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 9815,
                  "end": 9908
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9921,
                    "end": 9935
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
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9939,
                          "end": 9951
                        },
                        "typeArguments": null,
                        "start": 9939,
                        "end": 9951
                      },
                      "start": 9937,
                      "end": 9951
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 9973,
                            "end": 9977
                          },
                          "start": 9966,
                          "end": 9978
                        }
                      ],
                      "start": 9952,
                      "end": 9988
                    },
                    "expression": false,
                    "start": 9935,
                    "end": 9988
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 9917,
                  "end": 9988
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10009,
                    "end": 10024
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
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10028,
                          "end": 10040
                        },
                        "typeArguments": null,
                        "start": 10028,
                        "end": 10040
                      },
                      "start": 10026,
                      "end": 10040
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 10062,
                            "end": 10066
                          },
                          "start": 10055,
                          "end": 10067
                        }
                      ],
                      "start": 10041,
                      "end": 10077
                    },
                    "expression": false,
                    "start": 10024,
                    "end": 10077
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 9997,
                  "end": 10077
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10097,
                    "end": 10118
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10146,
                              "end": 10158
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 10142,
                            "end": 10160
                          },
                          "start": 10135,
                          "end": 10161
                        }
                      ],
                      "start": 10121,
                      "end": 10171
                    },
                    "expression": false,
                    "start": 10118,
                    "end": 10171
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 10086,
                  "end": 10171
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10199,
                    "end": 10221
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10249,
                              "end": 10261
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 10245,
                            "end": 10263
                          },
                          "start": 10238,
                          "end": 10264
                        }
                      ],
                      "start": 10224,
                      "end": 10274
                    },
                    "expression": false,
                    "start": 10221,
                    "end": 10274
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 10180,
                  "end": 10274
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10287,
                    "end": 10302
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10330,
                              "end": 10342
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 10326,
                            "end": 10344
                          },
                          "start": 10319,
                          "end": 10345
                        }
                      ],
                      "start": 10305,
                      "end": 10355
                    },
                    "expression": false,
                    "start": 10302,
                    "end": 10355
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 10283,
                  "end": 10355
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10376,
                    "end": 10392
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10420,
                              "end": 10432
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 10416,
                            "end": 10434
                          },
                          "start": 10409,
                          "end": 10435
                        }
                      ],
                      "start": 10395,
                      "end": 10445
                    },
                    "expression": false,
                    "start": 10392,
                    "end": 10445
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 10364,
                  "end": 10445
                }
              ],
              "start": 9712,
              "end": 10451
            },
            "abstract": false,
            "declare": false,
            "start": 9662,
            "end": 10451
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPublicGetAccessorTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 10463,
              "end": 10505
            },
            "typeParameters": null,
            "superClass": null,
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
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10527,
                    "end": 10547
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
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10551,
                          "end": 10562
                        },
                        "typeArguments": null,
                        "start": 10551,
                        "end": 10562
                      },
                      "start": 10549,
                      "end": 10562
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 10584,
                            "end": 10588
                          },
                          "start": 10577,
                          "end": 10589
                        }
                      ],
                      "start": 10563,
                      "end": 10599
                    },
                    "expression": false,
                    "start": 10547,
                    "end": 10599
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 10516,
                  "end": 10599
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10627,
                    "end": 10648
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
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10652,
                          "end": 10663
                        },
                        "typeArguments": null,
                        "start": 10652,
                        "end": 10663
                      },
                      "start": 10650,
                      "end": 10663
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 10685,
                            "end": 10689
                          },
                          "start": 10678,
                          "end": 10690
                        }
                      ],
                      "start": 10664,
                      "end": 10700
                    },
                    "expression": false,
                    "start": 10648,
                    "end": 10700
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 10608,
                  "end": 10700
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10713,
                    "end": 10727
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
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10731,
                          "end": 10742
                        },
                        "typeArguments": null,
                        "start": 10731,
                        "end": 10742
                      },
                      "start": 10729,
                      "end": 10742
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 10764,
                            "end": 10768
                          },
                          "start": 10757,
                          "end": 10769
                        }
                      ],
                      "start": 10743,
                      "end": 10779
                    },
                    "expression": false,
                    "start": 10727,
                    "end": 10779
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 10709,
                  "end": 10779
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10800,
                    "end": 10815
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
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10819,
                          "end": 10830
                        },
                        "typeArguments": null,
                        "start": 10819,
                        "end": 10830
                      },
                      "start": 10817,
                      "end": 10830
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 10852,
                            "end": 10856
                          },
                          "start": 10845,
                          "end": 10857
                        }
                      ],
                      "start": 10831,
                      "end": 10867
                    },
                    "expression": false,
                    "start": 10815,
                    "end": 10867
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 10788,
                  "end": 10867
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10887,
                    "end": 10908
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10936,
                              "end": 10947
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 10932,
                            "end": 10949
                          },
                          "start": 10925,
                          "end": 10950
                        }
                      ],
                      "start": 10911,
                      "end": 10960
                    },
                    "expression": false,
                    "start": 10908,
                    "end": 10960
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 10876,
                  "end": 10960
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10988,
                    "end": 11010
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11038,
                              "end": 11049
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 11034,
                            "end": 11051
                          },
                          "start": 11027,
                          "end": 11052
                        }
                      ],
                      "start": 11013,
                      "end": 11062
                    },
                    "expression": false,
                    "start": 11010,
                    "end": 11062
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 10969,
                  "end": 11062
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11075,
                    "end": 11090
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11118,
                              "end": 11129
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 11114,
                            "end": 11131
                          },
                          "start": 11107,
                          "end": 11132
                        }
                      ],
                      "start": 11093,
                      "end": 11142
                    },
                    "expression": false,
                    "start": 11090,
                    "end": 11142
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 11071,
                  "end": 11142
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11163,
                    "end": 11179
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11207,
                              "end": 11218
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 11203,
                            "end": 11220
                          },
                          "start": 11196,
                          "end": 11221
                        }
                      ],
                      "start": 11182,
                      "end": 11231
                    },
                    "expression": false,
                    "start": 11179,
                    "end": 11231
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 11151,
                  "end": 11231
                }
              ],
              "start": 10506,
              "end": 11237
            },
            "abstract": false,
            "declare": false,
            "start": 10457,
            "end": 11237
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPrivateSetAccessorTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 11256,
                "end": 11298
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11320,
                      "end": 11340
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11348,
                                "end": 11360
                              },
                              "typeArguments": null,
                              "start": 11348,
                              "end": 11360
                            },
                            "start": 11346,
                            "end": 11360
                          },
                          "start": 11341,
                          "end": 11360
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11362,
                        "end": 11382
                      },
                      "expression": false,
                      "start": 11340,
                      "end": 11382
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11309,
                    "end": 11382
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11410,
                      "end": 11431
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11439,
                                "end": 11451
                              },
                              "typeArguments": null,
                              "start": 11439,
                              "end": 11451
                            },
                            "start": 11437,
                            "end": 11451
                          },
                          "start": 11432,
                          "end": 11451
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11453,
                        "end": 11464
                      },
                      "expression": false,
                      "start": 11431,
                      "end": 11464
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11391,
                    "end": 11464
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11477,
                      "end": 11491
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11499,
                                "end": 11511
                              },
                              "typeArguments": null,
                              "start": 11499,
                              "end": 11511
                            },
                            "start": 11497,
                            "end": 11511
                          },
                          "start": 11492,
                          "end": 11511
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11513,
                        "end": 11533
                      },
                      "expression": false,
                      "start": 11491,
                      "end": 11533
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11473,
                    "end": 11533
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11554,
                      "end": 11569
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11577,
                                "end": 11589
                              },
                              "typeArguments": null,
                              "start": 11577,
                              "end": 11589
                            },
                            "start": 11575,
                            "end": 11589
                          },
                          "start": 11570,
                          "end": 11589
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11591,
                        "end": 11602
                      },
                      "expression": false,
                      "start": 11569,
                      "end": 11602
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11542,
                    "end": 11602
                  }
                ],
                "start": 11299,
                "end": 11608
              },
              "abstract": false,
              "declare": false,
              "start": 11250,
              "end": 11608
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 11243,
            "end": 11608
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPublicSetAccessorTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 11627,
                "end": 11668
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11690,
                      "end": 11710
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11718,
                                "end": 11729
                              },
                              "typeArguments": null,
                              "start": 11718,
                              "end": 11729
                            },
                            "start": 11716,
                            "end": 11729
                          },
                          "start": 11711,
                          "end": 11729
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11731,
                        "end": 11742
                      },
                      "expression": false,
                      "start": 11710,
                      "end": 11742
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11679,
                    "end": 11742
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11770,
                      "end": 11791
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11799,
                                "end": 11810
                              },
                              "typeArguments": null,
                              "start": 11799,
                              "end": 11810
                            },
                            "start": 11797,
                            "end": 11810
                          },
                          "start": 11792,
                          "end": 11810
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11812,
                        "end": 11823
                      },
                      "expression": false,
                      "start": 11791,
                      "end": 11823
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11751,
                    "end": 11823
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11836,
                      "end": 11850
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11858,
                                "end": 11869
                              },
                              "typeArguments": null,
                              "start": 11858,
                              "end": 11869
                            },
                            "start": 11856,
                            "end": 11869
                          },
                          "start": 11851,
                          "end": 11869
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11871,
                        "end": 11882
                      },
                      "expression": false,
                      "start": 11850,
                      "end": 11882
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11832,
                    "end": 11882
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11903,
                      "end": 11918
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11926,
                                "end": 11937
                              },
                              "typeArguments": null,
                              "start": 11926,
                              "end": 11937
                            },
                            "start": 11924,
                            "end": 11937
                          },
                          "start": 11919,
                          "end": 11937
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11939,
                        "end": 11950
                      },
                      "expression": false,
                      "start": 11918,
                      "end": 11950
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11891,
                    "end": 11950
                  }
                ],
                "start": 11669,
                "end": 11956
              },
              "abstract": false,
              "declare": false,
              "start": 11621,
              "end": 11956
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 11614,
            "end": 11956
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPrivateSetAccessorTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 11968,
              "end": 12011
            },
            "typeParameters": null,
            "superClass": null,
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
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12033,
                    "end": 12053
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
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12061,
                              "end": 12073
                            },
                            "typeArguments": null,
                            "start": 12061,
                            "end": 12073
                          },
                          "start": 12059,
                          "end": 12073
                        },
                        "start": 12054,
                        "end": 12073
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12075,
                      "end": 12086
                    },
                    "expression": false,
                    "start": 12053,
                    "end": 12086
                  },
                  "kind": "set",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 12022,
                  "end": 12086
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12114,
                    "end": 12135
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
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12143,
                              "end": 12155
                            },
                            "typeArguments": null,
                            "start": 12143,
                            "end": 12155
                          },
                          "start": 12141,
                          "end": 12155
                        },
                        "start": 12136,
                        "end": 12155
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12157,
                      "end": 12168
                    },
                    "expression": false,
                    "start": 12135,
                    "end": 12168
                  },
                  "kind": "set",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 12095,
                  "end": 12168
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12181,
                    "end": 12195
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
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12203,
                              "end": 12215
                            },
                            "typeArguments": null,
                            "start": 12203,
                            "end": 12215
                          },
                          "start": 12201,
                          "end": 12215
                        },
                        "start": 12196,
                        "end": 12215
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12217,
                      "end": 12228
                    },
                    "expression": false,
                    "start": 12195,
                    "end": 12228
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 12177,
                  "end": 12228
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12249,
                    "end": 12264
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
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12272,
                              "end": 12284
                            },
                            "typeArguments": null,
                            "start": 12272,
                            "end": 12284
                          },
                          "start": 12270,
                          "end": 12284
                        },
                        "start": 12265,
                        "end": 12284
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12286,
                      "end": 12297
                    },
                    "expression": false,
                    "start": 12264,
                    "end": 12297
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 12237,
                  "end": 12297
                }
              ],
              "start": 12012,
              "end": 12303
            },
            "abstract": false,
            "declare": false,
            "start": 11962,
            "end": 12303
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPublicSetAccessorTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 12315,
              "end": 12357
            },
            "typeParameters": null,
            "superClass": null,
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
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12379,
                    "end": 12399
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
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12407,
                              "end": 12418
                            },
                            "typeArguments": null,
                            "start": 12407,
                            "end": 12418
                          },
                          "start": 12405,
                          "end": 12418
                        },
                        "start": 12400,
                        "end": 12418
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12420,
                      "end": 12431
                    },
                    "expression": false,
                    "start": 12399,
                    "end": 12431
                  },
                  "kind": "set",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 12368,
                  "end": 12431
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12459,
                    "end": 12480
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
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12488,
                              "end": 12499
                            },
                            "typeArguments": null,
                            "start": 12488,
                            "end": 12499
                          },
                          "start": 12486,
                          "end": 12499
                        },
                        "start": 12481,
                        "end": 12499
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12501,
                      "end": 12512
                    },
                    "expression": false,
                    "start": 12480,
                    "end": 12512
                  },
                  "kind": "set",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 12440,
                  "end": 12512
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12525,
                    "end": 12539
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
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12547,
                              "end": 12558
                            },
                            "typeArguments": null,
                            "start": 12547,
                            "end": 12558
                          },
                          "start": 12545,
                          "end": 12558
                        },
                        "start": 12540,
                        "end": 12558
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12560,
                      "end": 12571
                    },
                    "expression": false,
                    "start": 12539,
                    "end": 12571
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 12521,
                  "end": 12571
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12592,
                    "end": 12607
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
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12615,
                              "end": 12626
                            },
                            "typeArguments": null,
                            "start": 12615,
                            "end": 12626
                          },
                          "start": 12613,
                          "end": 12626
                        },
                        "start": 12608,
                        "end": 12626
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12628,
                      "end": 12639
                    },
                    "expression": false,
                    "start": 12607,
                    "end": 12639
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 12580,
                  "end": 12639
                }
              ],
              "start": 12358,
              "end": 12645
            },
            "abstract": false,
            "declare": false,
            "start": 12309,
            "end": 12645
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithPrivateModuleGetAccessorTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 12664,
                "end": 12708
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12730,
                      "end": 12750
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
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12754,
                              "end": 12767
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12768,
                              "end": 12779
                            },
                            "start": 12754,
                            "end": 12779
                          },
                          "typeArguments": null,
                          "start": 12754,
                          "end": 12779
                        },
                        "start": 12752,
                        "end": 12779
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 12810,
                              "end": 12814
                            },
                            "start": 12803,
                            "end": 12815
                          }
                        ],
                        "start": 12780,
                        "end": 12825
                      },
                      "expression": false,
                      "start": 12750,
                      "end": 12825
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 12719,
                    "end": 12825
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12838,
                      "end": 12852
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
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12856,
                              "end": 12869
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12870,
                              "end": 12881
                            },
                            "start": 12856,
                            "end": 12881
                          },
                          "typeArguments": null,
                          "start": 12856,
                          "end": 12881
                        },
                        "start": 12854,
                        "end": 12881
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 12912,
                              "end": 12916
                            },
                            "start": 12905,
                            "end": 12917
                          }
                        ],
                        "start": 12882,
                        "end": 12927
                      },
                      "expression": false,
                      "start": 12852,
                      "end": 12927
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 12834,
                    "end": 12927
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12947,
                      "end": 12968
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13005,
                                  "end": 13018
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13019,
                                  "end": 13030
                                },
                                "optional": false,
                                "computed": false,
                                "start": 13005,
                                "end": 13030
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 13001,
                              "end": 13032
                            },
                            "start": 12994,
                            "end": 13033
                          }
                        ],
                        "start": 12971,
                        "end": 13043
                      },
                      "expression": false,
                      "start": 12968,
                      "end": 13043
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 12936,
                    "end": 13043
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 13056,
                      "end": 13071
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13108,
                                  "end": 13121
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13122,
                                  "end": 13133
                                },
                                "optional": false,
                                "computed": false,
                                "start": 13108,
                                "end": 13133
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 13104,
                              "end": 13135
                            },
                            "start": 13097,
                            "end": 13136
                          }
                        ],
                        "start": 13074,
                        "end": 13146
                      },
                      "expression": false,
                      "start": 13071,
                      "end": 13146
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 13052,
                    "end": 13146
                  }
                ],
                "start": 12709,
                "end": 13152
              },
              "abstract": false,
              "declare": false,
              "start": 12658,
              "end": 13152
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 12651,
            "end": 13152
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithPrivateModuleSetAccessorTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 13171,
                "end": 13215
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 13237,
                      "end": 13257
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13265,
                                  "end": 13278
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13279,
                                  "end": 13290
                                },
                                "start": 13265,
                                "end": 13290
                              },
                              "typeArguments": null,
                              "start": 13265,
                              "end": 13290
                            },
                            "start": 13263,
                            "end": 13290
                          },
                          "start": 13258,
                          "end": 13290
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 13292,
                        "end": 13312
                      },
                      "expression": false,
                      "start": 13257,
                      "end": 13312
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 13226,
                    "end": 13312
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 13325,
                      "end": 13339
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13347,
                                  "end": 13360
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13361,
                                  "end": 13372
                                },
                                "start": 13347,
                                "end": 13372
                              },
                              "typeArguments": null,
                              "start": 13347,
                              "end": 13372
                            },
                            "start": 13345,
                            "end": 13372
                          },
                          "start": 13340,
                          "end": 13372
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 13374,
                        "end": 13394
                      },
                      "expression": false,
                      "start": 13339,
                      "end": 13394
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 13321,
                    "end": 13394
                  }
                ],
                "start": 13216,
                "end": 13400
              },
              "abstract": false,
              "declare": false,
              "start": 13165,
              "end": 13400
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 13158,
            "end": 13400
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithPrivateModuleGetAccessorTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 13412,
              "end": 13457
            },
            "typeParameters": null,
            "superClass": null,
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
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13479,
                    "end": 13499
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
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13503,
                            "end": 13516
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13517,
                            "end": 13528
                          },
                          "start": 13503,
                          "end": 13528
                        },
                        "typeArguments": null,
                        "start": 13503,
                        "end": 13528
                      },
                      "start": 13501,
                      "end": 13528
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 13550,
                            "end": 13554
                          },
                          "start": 13543,
                          "end": 13555
                        }
                      ],
                      "start": 13529,
                      "end": 13565
                    },
                    "expression": false,
                    "start": 13499,
                    "end": 13565
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 13468,
                  "end": 13565
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13578,
                    "end": 13592
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
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13596,
                            "end": 13609
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13610,
                            "end": 13621
                          },
                          "start": 13596,
                          "end": 13621
                        },
                        "typeArguments": null,
                        "start": 13596,
                        "end": 13621
                      },
                      "start": 13594,
                      "end": 13621
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 13643,
                            "end": 13647
                          },
                          "start": 13636,
                          "end": 13648
                        }
                      ],
                      "start": 13622,
                      "end": 13658
                    },
                    "expression": false,
                    "start": 13592,
                    "end": 13658
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 13574,
                  "end": 13658
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicStaticMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13678,
                    "end": 13699
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13727,
                                "end": 13740
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13741,
                                "end": 13752
                              },
                              "optional": false,
                              "computed": false,
                              "start": 13727,
                              "end": 13752
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 13723,
                            "end": 13754
                          },
                          "start": 13716,
                          "end": 13755
                        }
                      ],
                      "start": 13702,
                      "end": 13765
                    },
                    "expression": false,
                    "start": 13699,
                    "end": 13765
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 13667,
                  "end": 13765
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13778,
                    "end": 13793
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13821,
                                "end": 13834
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13835,
                                "end": 13846
                              },
                              "optional": false,
                              "computed": false,
                              "start": 13821,
                              "end": 13846
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 13817,
                            "end": 13848
                          },
                          "start": 13810,
                          "end": 13849
                        }
                      ],
                      "start": 13796,
                      "end": 13859
                    },
                    "expression": false,
                    "start": 13793,
                    "end": 13859
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 13774,
                  "end": 13859
                }
              ],
              "start": 13458,
              "end": 13865
            },
            "abstract": false,
            "declare": false,
            "start": 13406,
            "end": 13865
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithPrivateModuleSetAccessorTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 13877,
              "end": 13922
            },
            "typeParameters": null,
            "superClass": null,
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
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13944,
                    "end": 13964
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
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13972,
                                "end": 13985
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13986,
                                "end": 13997
                              },
                              "start": 13972,
                              "end": 13997
                            },
                            "typeArguments": null,
                            "start": 13972,
                            "end": 13997
                          },
                          "start": 13970,
                          "end": 13997
                        },
                        "start": 13965,
                        "end": 13997
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 13999,
                      "end": 14010
                    },
                    "expression": false,
                    "start": 13964,
                    "end": 14010
                  },
                  "kind": "set",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 13933,
                  "end": 14010
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14023,
                    "end": 14037
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
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 14045,
                                "end": 14058
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 14059,
                                "end": 14070
                              },
                              "start": 14045,
                              "end": 14070
                            },
                            "typeArguments": null,
                            "start": 14045,
                            "end": 14070
                          },
                          "start": 14043,
                          "end": 14070
                        },
                        "start": 14038,
                        "end": 14070
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 14072,
                      "end": 14083
                    },
                    "expression": false,
                    "start": 14037,
                    "end": 14083
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 14019,
                  "end": 14083
                }
              ],
              "start": 13923,
              "end": 14089
            },
            "abstract": false,
            "declare": false,
            "start": 13871,
            "end": 14089
          }
        ],
        "start": 1149,
        "end": 14091
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1121,
      "end": 14091
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 14091
}
```
