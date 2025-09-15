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
          "start": 5398,
          "end": 5410
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
                "start": 5423,
                "end": 5435
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 5436,
                "end": 5443
              },
              "abstract": false,
              "declare": false,
              "start": 5417,
              "end": 5443
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
                  "start": 5462,
                  "end": 5473
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 5474,
                  "end": 5481
                },
                "abstract": false,
                "declare": false,
                "start": 5456,
                "end": 5481
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 5449,
              "end": 5481
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
                  "start": 5499,
                  "end": 5541
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
                        "start": 5563,
                        "end": 5583
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
                              "start": 5587,
                              "end": 5599
                            },
                            "typeArguments": null,
                            "start": 5587,
                            "end": 5599
                          },
                          "start": 5585,
                          "end": 5599
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
                                "start": 5630,
                                "end": 5634
                              },
                              "start": 5623,
                              "end": 5635
                            }
                          ],
                          "start": 5600,
                          "end": 5645
                        },
                        "expression": false,
                        "start": 5583,
                        "end": 5645
                      },
                      "kind": "get",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 5552,
                      "end": 5645
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
                        "start": 5673,
                        "end": 5694
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
                              "start": 5698,
                              "end": 5710
                            },
                            "typeArguments": null,
                            "start": 5698,
                            "end": 5710
                          },
                          "start": 5696,
                          "end": 5710
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
                                "start": 5732,
                                "end": 5736
                              },
                              "start": 5725,
                              "end": 5737
                            }
                          ],
                          "start": 5711,
                          "end": 5747
                        },
                        "expression": false,
                        "start": 5694,
                        "end": 5747
                      },
                      "kind": "get",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 5654,
                      "end": 5747
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
                        "start": 5760,
                        "end": 5774
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
                              "start": 5778,
                              "end": 5790
                            },
                            "typeArguments": null,
                            "start": 5778,
                            "end": 5790
                          },
                          "start": 5776,
                          "end": 5790
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
                                "start": 5821,
                                "end": 5825
                              },
                              "start": 5814,
                              "end": 5826
                            }
                          ],
                          "start": 5791,
                          "end": 5836
                        },
                        "expression": false,
                        "start": 5774,
                        "end": 5836
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 5756,
                      "end": 5836
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
                        "start": 5857,
                        "end": 5872
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
                              "start": 5876,
                              "end": 5888
                            },
                            "typeArguments": null,
                            "start": 5876,
                            "end": 5888
                          },
                          "start": 5874,
                          "end": 5888
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
                                "start": 5910,
                                "end": 5914
                              },
                              "start": 5903,
                              "end": 5915
                            }
                          ],
                          "start": 5889,
                          "end": 5925
                        },
                        "expression": false,
                        "start": 5872,
                        "end": 5925
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 5845,
                      "end": 5925
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
                        "start": 5945,
                        "end": 5966
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
                                  "start": 6003,
                                  "end": 6015
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 5999,
                                "end": 6017
                              },
                              "start": 5992,
                              "end": 6018
                            }
                          ],
                          "start": 5969,
                          "end": 6028
                        },
                        "expression": false,
                        "start": 5966,
                        "end": 6028
                      },
                      "kind": "get",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 5934,
                      "end": 6028
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
                        "start": 6056,
                        "end": 6078
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
                                  "start": 6106,
                                  "end": 6118
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 6102,
                                "end": 6120
                              },
                              "start": 6095,
                              "end": 6121
                            }
                          ],
                          "start": 6081,
                          "end": 6131
                        },
                        "expression": false,
                        "start": 6078,
                        "end": 6131
                      },
                      "kind": "get",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 6037,
                      "end": 6131
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
                        "start": 6144,
                        "end": 6159
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
                                  "start": 6196,
                                  "end": 6208
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 6192,
                                "end": 6210
                              },
                              "start": 6185,
                              "end": 6211
                            }
                          ],
                          "start": 6162,
                          "end": 6221
                        },
                        "expression": false,
                        "start": 6159,
                        "end": 6221
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6140,
                      "end": 6221
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
                        "start": 6242,
                        "end": 6258
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
                                  "start": 6286,
                                  "end": 6298
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 6282,
                                "end": 6300
                              },
                              "start": 6275,
                              "end": 6301
                            }
                          ],
                          "start": 6261,
                          "end": 6311
                        },
                        "expression": false,
                        "start": 6258,
                        "end": 6311
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 6230,
                      "end": 6311
                    }
                  ],
                  "start": 5542,
                  "end": 6317
                },
                "abstract": false,
                "declare": false,
                "start": 5493,
                "end": 6317
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 5486,
              "end": 6317
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
                  "start": 6336,
                  "end": 6377
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
                        "start": 6399,
                        "end": 6419
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
                              "start": 6423,
                              "end": 6434
                            },
                            "typeArguments": null,
                            "start": 6423,
                            "end": 6434
                          },
                          "start": 6421,
                          "end": 6434
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
                                "start": 6456,
                                "end": 6460
                              },
                              "start": 6449,
                              "end": 6461
                            }
                          ],
                          "start": 6435,
                          "end": 6471
                        },
                        "expression": false,
                        "start": 6419,
                        "end": 6471
                      },
                      "kind": "get",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6388,
                      "end": 6471
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
                        "start": 6499,
                        "end": 6520
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
                              "start": 6524,
                              "end": 6535
                            },
                            "typeArguments": null,
                            "start": 6524,
                            "end": 6535
                          },
                          "start": 6522,
                          "end": 6535
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
                                "start": 6557,
                                "end": 6561
                              },
                              "start": 6550,
                              "end": 6562
                            }
                          ],
                          "start": 6536,
                          "end": 6572
                        },
                        "expression": false,
                        "start": 6520,
                        "end": 6572
                      },
                      "kind": "get",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 6480,
                      "end": 6572
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
                        "start": 6585,
                        "end": 6599
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
                              "start": 6603,
                              "end": 6614
                            },
                            "typeArguments": null,
                            "start": 6603,
                            "end": 6614
                          },
                          "start": 6601,
                          "end": 6614
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
                                "start": 6636,
                                "end": 6640
                              },
                              "start": 6629,
                              "end": 6641
                            }
                          ],
                          "start": 6615,
                          "end": 6651
                        },
                        "expression": false,
                        "start": 6599,
                        "end": 6651
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6581,
                      "end": 6651
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
                        "start": 6672,
                        "end": 6687
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
                              "start": 6691,
                              "end": 6702
                            },
                            "typeArguments": null,
                            "start": 6691,
                            "end": 6702
                          },
                          "start": 6689,
                          "end": 6702
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
                                "start": 6724,
                                "end": 6728
                              },
                              "start": 6717,
                              "end": 6729
                            }
                          ],
                          "start": 6703,
                          "end": 6739
                        },
                        "expression": false,
                        "start": 6687,
                        "end": 6739
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 6660,
                      "end": 6739
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
                        "start": 6759,
                        "end": 6780
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
                                  "start": 6808,
                                  "end": 6819
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 6804,
                                "end": 6821
                              },
                              "start": 6797,
                              "end": 6822
                            }
                          ],
                          "start": 6783,
                          "end": 6832
                        },
                        "expression": false,
                        "start": 6780,
                        "end": 6832
                      },
                      "kind": "get",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6748,
                      "end": 6832
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
                        "start": 6860,
                        "end": 6882
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
                                  "start": 6910,
                                  "end": 6921
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 6906,
                                "end": 6923
                              },
                              "start": 6899,
                              "end": 6924
                            }
                          ],
                          "start": 6885,
                          "end": 6934
                        },
                        "expression": false,
                        "start": 6882,
                        "end": 6934
                      },
                      "kind": "get",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 6841,
                      "end": 6934
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
                        "start": 6947,
                        "end": 6962
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
                                  "start": 6990,
                                  "end": 7001
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 6986,
                                "end": 7003
                              },
                              "start": 6979,
                              "end": 7004
                            }
                          ],
                          "start": 6965,
                          "end": 7014
                        },
                        "expression": false,
                        "start": 6962,
                        "end": 7014
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6943,
                      "end": 7014
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
                        "start": 7035,
                        "end": 7051
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
                                  "start": 7079,
                                  "end": 7090
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 7075,
                                "end": 7092
                              },
                              "start": 7068,
                              "end": 7093
                            }
                          ],
                          "start": 7054,
                          "end": 7103
                        },
                        "expression": false,
                        "start": 7051,
                        "end": 7103
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 7023,
                      "end": 7103
                    }
                  ],
                  "start": 6378,
                  "end": 7109
                },
                "abstract": false,
                "declare": false,
                "start": 6330,
                "end": 7109
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6323,
              "end": 7109
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
                "start": 7121,
                "end": 7164
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
                      "start": 7186,
                      "end": 7206
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
                            "start": 7210,
                            "end": 7222
                          },
                          "typeArguments": null,
                          "start": 7210,
                          "end": 7222
                        },
                        "start": 7208,
                        "end": 7222
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
                              "start": 7244,
                              "end": 7248
                            },
                            "start": 7237,
                            "end": 7249
                          }
                        ],
                        "start": 7223,
                        "end": 7259
                      },
                      "expression": false,
                      "start": 7206,
                      "end": 7259
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7175,
                    "end": 7259
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
                      "start": 7287,
                      "end": 7308
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
                            "start": 7312,
                            "end": 7324
                          },
                          "typeArguments": null,
                          "start": 7312,
                          "end": 7324
                        },
                        "start": 7310,
                        "end": 7324
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
                              "start": 7346,
                              "end": 7350
                            },
                            "start": 7339,
                            "end": 7351
                          }
                        ],
                        "start": 7325,
                        "end": 7361
                      },
                      "expression": false,
                      "start": 7308,
                      "end": 7361
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 7268,
                    "end": 7361
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
                      "start": 7374,
                      "end": 7388
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
                            "start": 7392,
                            "end": 7404
                          },
                          "typeArguments": null,
                          "start": 7392,
                          "end": 7404
                        },
                        "start": 7390,
                        "end": 7404
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
                              "start": 7426,
                              "end": 7430
                            },
                            "start": 7419,
                            "end": 7431
                          }
                        ],
                        "start": 7405,
                        "end": 7441
                      },
                      "expression": false,
                      "start": 7388,
                      "end": 7441
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7370,
                    "end": 7441
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
                      "start": 7462,
                      "end": 7477
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
                            "start": 7481,
                            "end": 7493
                          },
                          "typeArguments": null,
                          "start": 7481,
                          "end": 7493
                        },
                        "start": 7479,
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
                              "start": 7515,
                              "end": 7519
                            },
                            "start": 7508,
                            "end": 7520
                          }
                        ],
                        "start": 7494,
                        "end": 7530
                      },
                      "expression": false,
                      "start": 7477,
                      "end": 7530
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 7450,
                    "end": 7530
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
                      "start": 7550,
                      "end": 7571
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
                                "start": 7599,
                                "end": 7611
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 7595,
                              "end": 7613
                            },
                            "start": 7588,
                            "end": 7614
                          }
                        ],
                        "start": 7574,
                        "end": 7624
                      },
                      "expression": false,
                      "start": 7571,
                      "end": 7624
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7539,
                    "end": 7624
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
                      "start": 7652,
                      "end": 7674
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
                                "start": 7702,
                                "end": 7714
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 7698,
                              "end": 7716
                            },
                            "start": 7691,
                            "end": 7717
                          }
                        ],
                        "start": 7677,
                        "end": 7727
                      },
                      "expression": false,
                      "start": 7674,
                      "end": 7727
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 7633,
                    "end": 7727
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
                      "start": 7740,
                      "end": 7755
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
                                "start": 7783,
                                "end": 7795
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 7779,
                              "end": 7797
                            },
                            "start": 7772,
                            "end": 7798
                          }
                        ],
                        "start": 7758,
                        "end": 7808
                      },
                      "expression": false,
                      "start": 7755,
                      "end": 7808
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7736,
                    "end": 7808
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
                      "start": 7829,
                      "end": 7845
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
                                "start": 7873,
                                "end": 7885
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 7869,
                              "end": 7887
                            },
                            "start": 7862,
                            "end": 7888
                          }
                        ],
                        "start": 7848,
                        "end": 7898
                      },
                      "expression": false,
                      "start": 7845,
                      "end": 7898
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 7817,
                    "end": 7898
                  }
                ],
                "start": 7165,
                "end": 7904
              },
              "abstract": false,
              "declare": false,
              "start": 7115,
              "end": 7904
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
                "start": 7916,
                "end": 7958
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
                      "start": 7980,
                      "end": 8000
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
                            "start": 8004,
                            "end": 8015
                          },
                          "typeArguments": null,
                          "start": 8004,
                          "end": 8015
                        },
                        "start": 8002,
                        "end": 8015
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
                              "start": 8037,
                              "end": 8041
                            },
                            "start": 8030,
                            "end": 8042
                          }
                        ],
                        "start": 8016,
                        "end": 8052
                      },
                      "expression": false,
                      "start": 8000,
                      "end": 8052
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7969,
                    "end": 8052
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
                      "start": 8080,
                      "end": 8101
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
                            "start": 8105,
                            "end": 8116
                          },
                          "typeArguments": null,
                          "start": 8105,
                          "end": 8116
                        },
                        "start": 8103,
                        "end": 8116
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
                              "start": 8138,
                              "end": 8142
                            },
                            "start": 8131,
                            "end": 8143
                          }
                        ],
                        "start": 8117,
                        "end": 8153
                      },
                      "expression": false,
                      "start": 8101,
                      "end": 8153
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 8061,
                    "end": 8153
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
                      "start": 8166,
                      "end": 8180
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
                            "start": 8184,
                            "end": 8195
                          },
                          "typeArguments": null,
                          "start": 8184,
                          "end": 8195
                        },
                        "start": 8182,
                        "end": 8195
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
                              "start": 8217,
                              "end": 8221
                            },
                            "start": 8210,
                            "end": 8222
                          }
                        ],
                        "start": 8196,
                        "end": 8232
                      },
                      "expression": false,
                      "start": 8180,
                      "end": 8232
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8162,
                    "end": 8232
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
                      "start": 8253,
                      "end": 8268
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
                            "start": 8272,
                            "end": 8283
                          },
                          "typeArguments": null,
                          "start": 8272,
                          "end": 8283
                        },
                        "start": 8270,
                        "end": 8283
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
                              "start": 8305,
                              "end": 8309
                            },
                            "start": 8298,
                            "end": 8310
                          }
                        ],
                        "start": 8284,
                        "end": 8320
                      },
                      "expression": false,
                      "start": 8268,
                      "end": 8320
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 8241,
                    "end": 8320
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
                      "start": 8340,
                      "end": 8361
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
                                "start": 8389,
                                "end": 8400
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 8385,
                              "end": 8402
                            },
                            "start": 8378,
                            "end": 8403
                          }
                        ],
                        "start": 8364,
                        "end": 8413
                      },
                      "expression": false,
                      "start": 8361,
                      "end": 8413
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8329,
                    "end": 8413
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
                      "start": 8441,
                      "end": 8463
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
                                "start": 8491,
                                "end": 8502
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 8487,
                              "end": 8504
                            },
                            "start": 8480,
                            "end": 8505
                          }
                        ],
                        "start": 8466,
                        "end": 8515
                      },
                      "expression": false,
                      "start": 8463,
                      "end": 8515
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 8422,
                    "end": 8515
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
                      "start": 8528,
                      "end": 8543
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
                                "start": 8571,
                                "end": 8582
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 8567,
                              "end": 8584
                            },
                            "start": 8560,
                            "end": 8585
                          }
                        ],
                        "start": 8546,
                        "end": 8595
                      },
                      "expression": false,
                      "start": 8543,
                      "end": 8595
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8524,
                    "end": 8595
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
                      "start": 8616,
                      "end": 8632
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
                                "start": 8660,
                                "end": 8671
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 8656,
                              "end": 8673
                            },
                            "start": 8649,
                            "end": 8674
                          }
                        ],
                        "start": 8635,
                        "end": 8684
                      },
                      "expression": false,
                      "start": 8632,
                      "end": 8684
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 8604,
                    "end": 8684
                  }
                ],
                "start": 7959,
                "end": 8690
              },
              "abstract": false,
              "declare": false,
              "start": 7910,
              "end": 8690
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
                  "start": 8709,
                  "end": 8751
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
                        "start": 8773,
                        "end": 8793
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
                                  "start": 8801,
                                  "end": 8813
                                },
                                "typeArguments": null,
                                "start": 8801,
                                "end": 8813
                              },
                              "start": 8799,
                              "end": 8813
                            },
                            "start": 8794,
                            "end": 8813
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 8815,
                          "end": 8835
                        },
                        "expression": false,
                        "start": 8793,
                        "end": 8835
                      },
                      "kind": "set",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 8762,
                      "end": 8835
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
                        "start": 8863,
                        "end": 8884
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
                                  "start": 8892,
                                  "end": 8904
                                },
                                "typeArguments": null,
                                "start": 8892,
                                "end": 8904
                              },
                              "start": 8890,
                              "end": 8904
                            },
                            "start": 8885,
                            "end": 8904
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 8906,
                          "end": 8917
                        },
                        "expression": false,
                        "start": 8884,
                        "end": 8917
                      },
                      "kind": "set",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 8844,
                      "end": 8917
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
                        "start": 8930,
                        "end": 8944
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
                                  "start": 8952,
                                  "end": 8964
                                },
                                "typeArguments": null,
                                "start": 8952,
                                "end": 8964
                              },
                              "start": 8950,
                              "end": 8964
                            },
                            "start": 8945,
                            "end": 8964
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 8966,
                          "end": 8986
                        },
                        "expression": false,
                        "start": 8944,
                        "end": 8986
                      },
                      "kind": "set",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 8926,
                      "end": 8986
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
                        "start": 9007,
                        "end": 9022
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
                                  "start": 9030,
                                  "end": 9042
                                },
                                "typeArguments": null,
                                "start": 9030,
                                "end": 9042
                              },
                              "start": 9028,
                              "end": 9042
                            },
                            "start": 9023,
                            "end": 9042
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 9044,
                          "end": 9055
                        },
                        "expression": false,
                        "start": 9022,
                        "end": 9055
                      },
                      "kind": "set",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 8995,
                      "end": 9055
                    }
                  ],
                  "start": 8752,
                  "end": 9061
                },
                "abstract": false,
                "declare": false,
                "start": 8703,
                "end": 9061
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 8696,
              "end": 9061
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
                  "start": 9080,
                  "end": 9121
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
                        "start": 9143,
                        "end": 9163
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
                                  "start": 9171,
                                  "end": 9182
                                },
                                "typeArguments": null,
                                "start": 9171,
                                "end": 9182
                              },
                              "start": 9169,
                              "end": 9182
                            },
                            "start": 9164,
                            "end": 9182
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 9184,
                          "end": 9195
                        },
                        "expression": false,
                        "start": 9163,
                        "end": 9195
                      },
                      "kind": "set",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 9132,
                      "end": 9195
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
                        "start": 9223,
                        "end": 9244
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
                                  "start": 9252,
                                  "end": 9263
                                },
                                "typeArguments": null,
                                "start": 9252,
                                "end": 9263
                              },
                              "start": 9250,
                              "end": 9263
                            },
                            "start": 9245,
                            "end": 9263
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 9265,
                          "end": 9276
                        },
                        "expression": false,
                        "start": 9244,
                        "end": 9276
                      },
                      "kind": "set",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 9204,
                      "end": 9276
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
                        "start": 9289,
                        "end": 9303
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
                                  "start": 9311,
                                  "end": 9322
                                },
                                "typeArguments": null,
                                "start": 9311,
                                "end": 9322
                              },
                              "start": 9309,
                              "end": 9322
                            },
                            "start": 9304,
                            "end": 9322
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 9324,
                          "end": 9335
                        },
                        "expression": false,
                        "start": 9303,
                        "end": 9335
                      },
                      "kind": "set",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 9285,
                      "end": 9335
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
                        "start": 9356,
                        "end": 9371
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
                                  "start": 9379,
                                  "end": 9390
                                },
                                "typeArguments": null,
                                "start": 9379,
                                "end": 9390
                              },
                              "start": 9377,
                              "end": 9390
                            },
                            "start": 9372,
                            "end": 9390
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 9392,
                          "end": 9403
                        },
                        "expression": false,
                        "start": 9371,
                        "end": 9403
                      },
                      "kind": "set",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 9344,
                      "end": 9403
                    }
                  ],
                  "start": 9122,
                  "end": 9409
                },
                "abstract": false,
                "declare": false,
                "start": 9074,
                "end": 9409
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 9067,
              "end": 9409
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
                "start": 9421,
                "end": 9464
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
                      "start": 9486,
                      "end": 9506
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
                                "start": 9514,
                                "end": 9526
                              },
                              "typeArguments": null,
                              "start": 9514,
                              "end": 9526
                            },
                            "start": 9512,
                            "end": 9526
                          },
                          "start": 9507,
                          "end": 9526
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9528,
                        "end": 9539
                      },
                      "expression": false,
                      "start": 9506,
                      "end": 9539
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9475,
                    "end": 9539
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
                      "start": 9567,
                      "end": 9588
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
                                "start": 9596,
                                "end": 9608
                              },
                              "typeArguments": null,
                              "start": 9596,
                              "end": 9608
                            },
                            "start": 9594,
                            "end": 9608
                          },
                          "start": 9589,
                          "end": 9608
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9610,
                        "end": 9621
                      },
                      "expression": false,
                      "start": 9588,
                      "end": 9621
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 9548,
                    "end": 9621
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
                      "start": 9634,
                      "end": 9648
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
                                "start": 9656,
                                "end": 9668
                              },
                              "typeArguments": null,
                              "start": 9656,
                              "end": 9668
                            },
                            "start": 9654,
                            "end": 9668
                          },
                          "start": 9649,
                          "end": 9668
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9670,
                        "end": 9681
                      },
                      "expression": false,
                      "start": 9648,
                      "end": 9681
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9630,
                    "end": 9681
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
                      "start": 9702,
                      "end": 9717
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
                                "start": 9725,
                                "end": 9737
                              },
                              "typeArguments": null,
                              "start": 9725,
                              "end": 9737
                            },
                            "start": 9723,
                            "end": 9737
                          },
                          "start": 9718,
                          "end": 9737
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9739,
                        "end": 9750
                      },
                      "expression": false,
                      "start": 9717,
                      "end": 9750
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 9690,
                    "end": 9750
                  }
                ],
                "start": 9465,
                "end": 9756
              },
              "abstract": false,
              "declare": false,
              "start": 9415,
              "end": 9756
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
                "start": 9768,
                "end": 9810
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
                      "start": 9832,
                      "end": 9852
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
                                "start": 9860,
                                "end": 9871
                              },
                              "typeArguments": null,
                              "start": 9860,
                              "end": 9871
                            },
                            "start": 9858,
                            "end": 9871
                          },
                          "start": 9853,
                          "end": 9871
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9873,
                        "end": 9884
                      },
                      "expression": false,
                      "start": 9852,
                      "end": 9884
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9821,
                    "end": 9884
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
                      "start": 9912,
                      "end": 9933
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
                                "start": 9941,
                                "end": 9952
                              },
                              "typeArguments": null,
                              "start": 9941,
                              "end": 9952
                            },
                            "start": 9939,
                            "end": 9952
                          },
                          "start": 9934,
                          "end": 9952
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9954,
                        "end": 9965
                      },
                      "expression": false,
                      "start": 9933,
                      "end": 9965
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 9893,
                    "end": 9965
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
                      "start": 9978,
                      "end": 9992
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
                                "start": 10000,
                                "end": 10011
                              },
                              "typeArguments": null,
                              "start": 10000,
                              "end": 10011
                            },
                            "start": 9998,
                            "end": 10011
                          },
                          "start": 9993,
                          "end": 10011
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 10013,
                        "end": 10024
                      },
                      "expression": false,
                      "start": 9992,
                      "end": 10024
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9974,
                    "end": 10024
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
                      "start": 10045,
                      "end": 10060
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
                                "start": 10068,
                                "end": 10079
                              },
                              "typeArguments": null,
                              "start": 10068,
                              "end": 10079
                            },
                            "start": 10066,
                            "end": 10079
                          },
                          "start": 10061,
                          "end": 10079
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 10081,
                        "end": 10092
                      },
                      "expression": false,
                      "start": 10060,
                      "end": 10092
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 10033,
                    "end": 10092
                  }
                ],
                "start": 9811,
                "end": 10098
              },
              "abstract": false,
              "declare": false,
              "start": 9762,
              "end": 10098
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
                  "start": 10117,
                  "end": 10161
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
                        "start": 10183,
                        "end": 10203
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
                                "start": 10207,
                                "end": 10220
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10221,
                                "end": 10232
                              },
                              "start": 10207,
                              "end": 10232
                            },
                            "typeArguments": null,
                            "start": 10207,
                            "end": 10232
                          },
                          "start": 10205,
                          "end": 10232
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
                                "start": 10263,
                                "end": 10267
                              },
                              "start": 10256,
                              "end": 10268
                            }
                          ],
                          "start": 10233,
                          "end": 10278
                        },
                        "expression": false,
                        "start": 10203,
                        "end": 10278
                      },
                      "kind": "get",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 10172,
                      "end": 10278
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
                        "start": 10291,
                        "end": 10305
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
                                "start": 10309,
                                "end": 10322
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10323,
                                "end": 10334
                              },
                              "start": 10309,
                              "end": 10334
                            },
                            "typeArguments": null,
                            "start": 10309,
                            "end": 10334
                          },
                          "start": 10307,
                          "end": 10334
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
                                "start": 10365,
                                "end": 10369
                              },
                              "start": 10358,
                              "end": 10370
                            }
                          ],
                          "start": 10335,
                          "end": 10380
                        },
                        "expression": false,
                        "start": 10305,
                        "end": 10380
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 10287,
                      "end": 10380
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
                        "start": 10400,
                        "end": 10421
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
                                    "start": 10458,
                                    "end": 10471
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10472,
                                    "end": 10483
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 10458,
                                  "end": 10483
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 10454,
                                "end": 10485
                              },
                              "start": 10447,
                              "end": 10486
                            }
                          ],
                          "start": 10424,
                          "end": 10496
                        },
                        "expression": false,
                        "start": 10421,
                        "end": 10496
                      },
                      "kind": "get",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 10389,
                      "end": 10496
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
                        "start": 10509,
                        "end": 10524
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
                                    "start": 10561,
                                    "end": 10574
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10575,
                                    "end": 10586
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 10561,
                                  "end": 10586
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 10557,
                                "end": 10588
                              },
                              "start": 10550,
                              "end": 10589
                            }
                          ],
                          "start": 10527,
                          "end": 10599
                        },
                        "expression": false,
                        "start": 10524,
                        "end": 10599
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 10505,
                      "end": 10599
                    }
                  ],
                  "start": 10162,
                  "end": 10605
                },
                "abstract": false,
                "declare": false,
                "start": 10111,
                "end": 10605
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 10104,
              "end": 10605
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
                  "start": 10624,
                  "end": 10668
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
                        "start": 10690,
                        "end": 10710
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
                                    "start": 10718,
                                    "end": 10731
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10732,
                                    "end": 10743
                                  },
                                  "start": 10718,
                                  "end": 10743
                                },
                                "typeArguments": null,
                                "start": 10718,
                                "end": 10743
                              },
                              "start": 10716,
                              "end": 10743
                            },
                            "start": 10711,
                            "end": 10743
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 10745,
                          "end": 10765
                        },
                        "expression": false,
                        "start": 10710,
                        "end": 10765
                      },
                      "kind": "set",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 10679,
                      "end": 10765
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
                        "start": 10778,
                        "end": 10792
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
                                    "start": 10800,
                                    "end": 10813
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10814,
                                    "end": 10825
                                  },
                                  "start": 10800,
                                  "end": 10825
                                },
                                "typeArguments": null,
                                "start": 10800,
                                "end": 10825
                              },
                              "start": 10798,
                              "end": 10825
                            },
                            "start": 10793,
                            "end": 10825
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 10827,
                          "end": 10847
                        },
                        "expression": false,
                        "start": 10792,
                        "end": 10847
                      },
                      "kind": "set",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 10774,
                      "end": 10847
                    }
                  ],
                  "start": 10669,
                  "end": 10853
                },
                "abstract": false,
                "declare": false,
                "start": 10618,
                "end": 10853
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 10611,
              "end": 10853
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
                "start": 10865,
                "end": 10910
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
                      "start": 10932,
                      "end": 10952
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
                              "start": 10956,
                              "end": 10969
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10970,
                              "end": 10981
                            },
                            "start": 10956,
                            "end": 10981
                          },
                          "typeArguments": null,
                          "start": 10956,
                          "end": 10981
                        },
                        "start": 10954,
                        "end": 10981
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
                              "start": 11003,
                              "end": 11007
                            },
                            "start": 10996,
                            "end": 11008
                          }
                        ],
                        "start": 10982,
                        "end": 11018
                      },
                      "expression": false,
                      "start": 10952,
                      "end": 11018
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 10921,
                    "end": 11018
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
                      "start": 11031,
                      "end": 11045
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
                              "start": 11049,
                              "end": 11062
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11063,
                              "end": 11074
                            },
                            "start": 11049,
                            "end": 11074
                          },
                          "typeArguments": null,
                          "start": 11049,
                          "end": 11074
                        },
                        "start": 11047,
                        "end": 11074
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
                              "start": 11096,
                              "end": 11100
                            },
                            "start": 11089,
                            "end": 11101
                          }
                        ],
                        "start": 11075,
                        "end": 11111
                      },
                      "expression": false,
                      "start": 11045,
                      "end": 11111
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11027,
                    "end": 11111
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
                      "start": 11131,
                      "end": 11152
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
                                  "start": 11180,
                                  "end": 11193
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11194,
                                  "end": 11205
                                },
                                "optional": false,
                                "computed": false,
                                "start": 11180,
                                "end": 11205
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 11176,
                              "end": 11207
                            },
                            "start": 11169,
                            "end": 11208
                          }
                        ],
                        "start": 11155,
                        "end": 11218
                      },
                      "expression": false,
                      "start": 11152,
                      "end": 11218
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11120,
                    "end": 11218
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
                      "start": 11231,
                      "end": 11246
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
                                  "start": 11274,
                                  "end": 11287
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11288,
                                  "end": 11299
                                },
                                "optional": false,
                                "computed": false,
                                "start": 11274,
                                "end": 11299
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 11270,
                              "end": 11301
                            },
                            "start": 11263,
                            "end": 11302
                          }
                        ],
                        "start": 11249,
                        "end": 11312
                      },
                      "expression": false,
                      "start": 11246,
                      "end": 11312
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11227,
                    "end": 11312
                  }
                ],
                "start": 10911,
                "end": 11318
              },
              "abstract": false,
              "declare": false,
              "start": 10859,
              "end": 11318
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
                "start": 11330,
                "end": 11375
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
                      "start": 11397,
                      "end": 11417
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
                                  "start": 11425,
                                  "end": 11438
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11439,
                                  "end": 11450
                                },
                                "start": 11425,
                                "end": 11450
                              },
                              "typeArguments": null,
                              "start": 11425,
                              "end": 11450
                            },
                            "start": 11423,
                            "end": 11450
                          },
                          "start": 11418,
                          "end": 11450
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11452,
                        "end": 11463
                      },
                      "expression": false,
                      "start": 11417,
                      "end": 11463
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11386,
                    "end": 11463
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
                      "start": 11476,
                      "end": 11490
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
                                  "start": 11498,
                                  "end": 11511
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11512,
                                  "end": 11523
                                },
                                "start": 11498,
                                "end": 11523
                              },
                              "typeArguments": null,
                              "start": 11498,
                              "end": 11523
                            },
                            "start": 11496,
                            "end": 11523
                          },
                          "start": 11491,
                          "end": 11523
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11525,
                        "end": 11536
                      },
                      "expression": false,
                      "start": 11490,
                      "end": 11536
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11472,
                    "end": 11536
                  }
                ],
                "start": 11376,
                "end": 11542
              },
              "abstract": false,
              "declare": false,
              "start": 11324,
              "end": 11542
            }
          ],
          "start": 5411,
          "end": 11544
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 5388,
        "end": 11544
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 5381,
      "end": 11544
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 11556,
        "end": 11569
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
              "start": 11582,
              "end": 11594
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 11595,
              "end": 11602
            },
            "abstract": false,
            "declare": false,
            "start": 11576,
            "end": 11602
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
                "start": 11621,
                "end": 11632
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 11633,
                "end": 11640
              },
              "abstract": false,
              "declare": false,
              "start": 11615,
              "end": 11640
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 11608,
            "end": 11640
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
                "start": 11658,
                "end": 11700
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
                      "start": 11722,
                      "end": 11742
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
                            "start": 11746,
                            "end": 11758
                          },
                          "typeArguments": null,
                          "start": 11746,
                          "end": 11758
                        },
                        "start": 11744,
                        "end": 11758
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
                              "start": 11781,
                              "end": 11785
                            },
                            "start": 11774,
                            "end": 11786
                          }
                        ],
                        "start": 11759,
                        "end": 11796
                      },
                      "expression": false,
                      "start": 11742,
                      "end": 11796
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11711,
                    "end": 11796
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
                      "start": 11824,
                      "end": 11845
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
                            "start": 11849,
                            "end": 11861
                          },
                          "typeArguments": null,
                          "start": 11849,
                          "end": 11861
                        },
                        "start": 11847,
                        "end": 11861
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
                              "start": 11883,
                              "end": 11887
                            },
                            "start": 11876,
                            "end": 11888
                          }
                        ],
                        "start": 11862,
                        "end": 11898
                      },
                      "expression": false,
                      "start": 11845,
                      "end": 11898
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11805,
                    "end": 11898
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
                      "start": 11911,
                      "end": 11925
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
                            "start": 11929,
                            "end": 11941
                          },
                          "typeArguments": null,
                          "start": 11929,
                          "end": 11941
                        },
                        "start": 11927,
                        "end": 11941
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
                              "start": 11964,
                              "end": 11968
                            },
                            "start": 11957,
                            "end": 11969
                          }
                        ],
                        "start": 11942,
                        "end": 11979
                      },
                      "expression": false,
                      "start": 11925,
                      "end": 11979
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11907,
                    "end": 11979
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
                      "start": 12000,
                      "end": 12015
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
                            "start": 12019,
                            "end": 12031
                          },
                          "typeArguments": null,
                          "start": 12019,
                          "end": 12031
                        },
                        "start": 12017,
                        "end": 12031
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
                              "start": 12053,
                              "end": 12057
                            },
                            "start": 12046,
                            "end": 12058
                          }
                        ],
                        "start": 12032,
                        "end": 12068
                      },
                      "expression": false,
                      "start": 12015,
                      "end": 12068
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11988,
                    "end": 12068
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
                      "start": 12088,
                      "end": 12109
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
                                "start": 12138,
                                "end": 12150
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 12134,
                              "end": 12152
                            },
                            "start": 12127,
                            "end": 12153
                          }
                        ],
                        "start": 12112,
                        "end": 12163
                      },
                      "expression": false,
                      "start": 12109,
                      "end": 12163
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 12077,
                    "end": 12163
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
                      "start": 12191,
                      "end": 12213
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
                                "start": 12241,
                                "end": 12253
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 12237,
                              "end": 12255
                            },
                            "start": 12230,
                            "end": 12256
                          }
                        ],
                        "start": 12216,
                        "end": 12266
                      },
                      "expression": false,
                      "start": 12213,
                      "end": 12266
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 12172,
                    "end": 12266
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
                      "start": 12279,
                      "end": 12294
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
                                "start": 12323,
                                "end": 12335
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 12319,
                              "end": 12337
                            },
                            "start": 12312,
                            "end": 12338
                          }
                        ],
                        "start": 12297,
                        "end": 12348
                      },
                      "expression": false,
                      "start": 12294,
                      "end": 12348
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 12275,
                    "end": 12348
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
                      "start": 12369,
                      "end": 12385
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
                                "start": 12413,
                                "end": 12425
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 12409,
                              "end": 12427
                            },
                            "start": 12402,
                            "end": 12428
                          }
                        ],
                        "start": 12388,
                        "end": 12438
                      },
                      "expression": false,
                      "start": 12385,
                      "end": 12438
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 12357,
                    "end": 12438
                  }
                ],
                "start": 11701,
                "end": 12444
              },
              "abstract": false,
              "declare": false,
              "start": 11652,
              "end": 12444
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 11645,
            "end": 12444
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
                "start": 12463,
                "end": 12504
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
                      "start": 12526,
                      "end": 12546
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
                            "start": 12550,
                            "end": 12561
                          },
                          "typeArguments": null,
                          "start": 12550,
                          "end": 12561
                        },
                        "start": 12548,
                        "end": 12561
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
                              "start": 12583,
                              "end": 12587
                            },
                            "start": 12576,
                            "end": 12588
                          }
                        ],
                        "start": 12562,
                        "end": 12598
                      },
                      "expression": false,
                      "start": 12546,
                      "end": 12598
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 12515,
                    "end": 12598
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
                      "start": 12626,
                      "end": 12647
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
                            "start": 12651,
                            "end": 12662
                          },
                          "typeArguments": null,
                          "start": 12651,
                          "end": 12662
                        },
                        "start": 12649,
                        "end": 12662
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
                              "start": 12684,
                              "end": 12688
                            },
                            "start": 12677,
                            "end": 12689
                          }
                        ],
                        "start": 12663,
                        "end": 12699
                      },
                      "expression": false,
                      "start": 12647,
                      "end": 12699
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 12607,
                    "end": 12699
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
                      "start": 12712,
                      "end": 12726
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
                            "start": 12730,
                            "end": 12741
                          },
                          "typeArguments": null,
                          "start": 12730,
                          "end": 12741
                        },
                        "start": 12728,
                        "end": 12741
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
                              "start": 12763,
                              "end": 12767
                            },
                            "start": 12756,
                            "end": 12768
                          }
                        ],
                        "start": 12742,
                        "end": 12778
                      },
                      "expression": false,
                      "start": 12726,
                      "end": 12778
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 12708,
                    "end": 12778
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
                      "start": 12799,
                      "end": 12814
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
                            "start": 12818,
                            "end": 12829
                          },
                          "typeArguments": null,
                          "start": 12818,
                          "end": 12829
                        },
                        "start": 12816,
                        "end": 12829
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
                              "start": 12851,
                              "end": 12855
                            },
                            "start": 12844,
                            "end": 12856
                          }
                        ],
                        "start": 12830,
                        "end": 12866
                      },
                      "expression": false,
                      "start": 12814,
                      "end": 12866
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 12787,
                    "end": 12866
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
                      "start": 12886,
                      "end": 12907
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
                                "start": 12935,
                                "end": 12946
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 12931,
                              "end": 12948
                            },
                            "start": 12924,
                            "end": 12949
                          }
                        ],
                        "start": 12910,
                        "end": 12959
                      },
                      "expression": false,
                      "start": 12907,
                      "end": 12959
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 12875,
                    "end": 12959
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
                      "start": 12987,
                      "end": 13009
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
                                "start": 13037,
                                "end": 13048
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 13033,
                              "end": 13050
                            },
                            "start": 13026,
                            "end": 13051
                          }
                        ],
                        "start": 13012,
                        "end": 13061
                      },
                      "expression": false,
                      "start": 13009,
                      "end": 13061
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 12968,
                    "end": 13061
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
                      "start": 13074,
                      "end": 13089
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
                                "start": 13117,
                                "end": 13128
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 13113,
                              "end": 13130
                            },
                            "start": 13106,
                            "end": 13131
                          }
                        ],
                        "start": 13092,
                        "end": 13141
                      },
                      "expression": false,
                      "start": 13089,
                      "end": 13141
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 13070,
                    "end": 13141
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
                      "start": 13162,
                      "end": 13178
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
                                "start": 13206,
                                "end": 13217
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 13202,
                              "end": 13219
                            },
                            "start": 13195,
                            "end": 13220
                          }
                        ],
                        "start": 13181,
                        "end": 13230
                      },
                      "expression": false,
                      "start": 13178,
                      "end": 13230
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 13150,
                    "end": 13230
                  }
                ],
                "start": 12505,
                "end": 13236
              },
              "abstract": false,
              "declare": false,
              "start": 12457,
              "end": 13236
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 12450,
            "end": 13236
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
              "start": 13248,
              "end": 13291
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
                    "start": 13313,
                    "end": 13333
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
                          "start": 13337,
                          "end": 13349
                        },
                        "typeArguments": null,
                        "start": 13337,
                        "end": 13349
                      },
                      "start": 13335,
                      "end": 13349
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
                            "start": 13371,
                            "end": 13375
                          },
                          "start": 13364,
                          "end": 13376
                        }
                      ],
                      "start": 13350,
                      "end": 13386
                    },
                    "expression": false,
                    "start": 13333,
                    "end": 13386
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 13302,
                  "end": 13386
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
                    "start": 13414,
                    "end": 13435
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
                          "start": 13439,
                          "end": 13451
                        },
                        "typeArguments": null,
                        "start": 13439,
                        "end": 13451
                      },
                      "start": 13437,
                      "end": 13451
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
                            "start": 13473,
                            "end": 13477
                          },
                          "start": 13466,
                          "end": 13478
                        }
                      ],
                      "start": 13452,
                      "end": 13488
                    },
                    "expression": false,
                    "start": 13435,
                    "end": 13488
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 13395,
                  "end": 13488
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
                    "start": 13501,
                    "end": 13515
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
                          "start": 13519,
                          "end": 13531
                        },
                        "typeArguments": null,
                        "start": 13519,
                        "end": 13531
                      },
                      "start": 13517,
                      "end": 13531
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
                            "start": 13553,
                            "end": 13557
                          },
                          "start": 13546,
                          "end": 13558
                        }
                      ],
                      "start": 13532,
                      "end": 13568
                    },
                    "expression": false,
                    "start": 13515,
                    "end": 13568
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 13497,
                  "end": 13568
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
                    "start": 13589,
                    "end": 13604
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
                          "start": 13608,
                          "end": 13620
                        },
                        "typeArguments": null,
                        "start": 13608,
                        "end": 13620
                      },
                      "start": 13606,
                      "end": 13620
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
                            "start": 13642,
                            "end": 13646
                          },
                          "start": 13635,
                          "end": 13647
                        }
                      ],
                      "start": 13621,
                      "end": 13657
                    },
                    "expression": false,
                    "start": 13604,
                    "end": 13657
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 13577,
                  "end": 13657
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
                    "start": 13677,
                    "end": 13698
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
                              "start": 13726,
                              "end": 13738
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 13722,
                            "end": 13740
                          },
                          "start": 13715,
                          "end": 13741
                        }
                      ],
                      "start": 13701,
                      "end": 13751
                    },
                    "expression": false,
                    "start": 13698,
                    "end": 13751
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 13666,
                  "end": 13751
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
                    "start": 13779,
                    "end": 13801
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
                              "start": 13829,
                              "end": 13841
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 13825,
                            "end": 13843
                          },
                          "start": 13818,
                          "end": 13844
                        }
                      ],
                      "start": 13804,
                      "end": 13854
                    },
                    "expression": false,
                    "start": 13801,
                    "end": 13854
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 13760,
                  "end": 13854
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
                    "start": 13867,
                    "end": 13882
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
                              "start": 13910,
                              "end": 13922
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 13906,
                            "end": 13924
                          },
                          "start": 13899,
                          "end": 13925
                        }
                      ],
                      "start": 13885,
                      "end": 13935
                    },
                    "expression": false,
                    "start": 13882,
                    "end": 13935
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 13863,
                  "end": 13935
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
                    "start": 13956,
                    "end": 13972
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
                              "start": 14000,
                              "end": 14012
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 13996,
                            "end": 14014
                          },
                          "start": 13989,
                          "end": 14015
                        }
                      ],
                      "start": 13975,
                      "end": 14025
                    },
                    "expression": false,
                    "start": 13972,
                    "end": 14025
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 13944,
                  "end": 14025
                }
              ],
              "start": 13292,
              "end": 14031
            },
            "abstract": false,
            "declare": false,
            "start": 13242,
            "end": 14031
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
              "start": 14043,
              "end": 14085
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
                    "start": 14107,
                    "end": 14127
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
                          "start": 14131,
                          "end": 14142
                        },
                        "typeArguments": null,
                        "start": 14131,
                        "end": 14142
                      },
                      "start": 14129,
                      "end": 14142
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
                            "start": 14164,
                            "end": 14168
                          },
                          "start": 14157,
                          "end": 14169
                        }
                      ],
                      "start": 14143,
                      "end": 14179
                    },
                    "expression": false,
                    "start": 14127,
                    "end": 14179
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 14096,
                  "end": 14179
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
                    "start": 14207,
                    "end": 14228
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
                          "start": 14232,
                          "end": 14243
                        },
                        "typeArguments": null,
                        "start": 14232,
                        "end": 14243
                      },
                      "start": 14230,
                      "end": 14243
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
                            "start": 14265,
                            "end": 14269
                          },
                          "start": 14258,
                          "end": 14270
                        }
                      ],
                      "start": 14244,
                      "end": 14280
                    },
                    "expression": false,
                    "start": 14228,
                    "end": 14280
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 14188,
                  "end": 14280
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
                    "start": 14293,
                    "end": 14307
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
                          "start": 14311,
                          "end": 14322
                        },
                        "typeArguments": null,
                        "start": 14311,
                        "end": 14322
                      },
                      "start": 14309,
                      "end": 14322
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
                            "start": 14344,
                            "end": 14348
                          },
                          "start": 14337,
                          "end": 14349
                        }
                      ],
                      "start": 14323,
                      "end": 14359
                    },
                    "expression": false,
                    "start": 14307,
                    "end": 14359
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 14289,
                  "end": 14359
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
                    "start": 14380,
                    "end": 14395
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
                          "start": 14399,
                          "end": 14410
                        },
                        "typeArguments": null,
                        "start": 14399,
                        "end": 14410
                      },
                      "start": 14397,
                      "end": 14410
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
                            "start": 14432,
                            "end": 14436
                          },
                          "start": 14425,
                          "end": 14437
                        }
                      ],
                      "start": 14411,
                      "end": 14447
                    },
                    "expression": false,
                    "start": 14395,
                    "end": 14447
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 14368,
                  "end": 14447
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
                    "start": 14467,
                    "end": 14488
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
                              "start": 14516,
                              "end": 14527
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 14512,
                            "end": 14529
                          },
                          "start": 14505,
                          "end": 14530
                        }
                      ],
                      "start": 14491,
                      "end": 14540
                    },
                    "expression": false,
                    "start": 14488,
                    "end": 14540
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 14456,
                  "end": 14540
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
                    "start": 14568,
                    "end": 14590
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
                              "start": 14618,
                              "end": 14629
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 14614,
                            "end": 14631
                          },
                          "start": 14607,
                          "end": 14632
                        }
                      ],
                      "start": 14593,
                      "end": 14642
                    },
                    "expression": false,
                    "start": 14590,
                    "end": 14642
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 14549,
                  "end": 14642
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
                    "start": 14655,
                    "end": 14670
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
                              "start": 14698,
                              "end": 14709
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 14694,
                            "end": 14711
                          },
                          "start": 14687,
                          "end": 14712
                        }
                      ],
                      "start": 14673,
                      "end": 14722
                    },
                    "expression": false,
                    "start": 14670,
                    "end": 14722
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 14651,
                  "end": 14722
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
                    "start": 14743,
                    "end": 14759
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
                              "start": 14787,
                              "end": 14798
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 14783,
                            "end": 14800
                          },
                          "start": 14776,
                          "end": 14801
                        }
                      ],
                      "start": 14762,
                      "end": 14811
                    },
                    "expression": false,
                    "start": 14759,
                    "end": 14811
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 14731,
                  "end": 14811
                }
              ],
              "start": 14086,
              "end": 14817
            },
            "abstract": false,
            "declare": false,
            "start": 14037,
            "end": 14817
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
                "start": 14836,
                "end": 14878
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
                      "start": 14900,
                      "end": 14920
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
                                "start": 14928,
                                "end": 14940
                              },
                              "typeArguments": null,
                              "start": 14928,
                              "end": 14940
                            },
                            "start": 14926,
                            "end": 14940
                          },
                          "start": 14921,
                          "end": 14940
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 14942,
                        "end": 14954
                      },
                      "expression": false,
                      "start": 14920,
                      "end": 14954
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 14889,
                    "end": 14954
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
                      "start": 14982,
                      "end": 15003
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
                                "start": 15011,
                                "end": 15023
                              },
                              "typeArguments": null,
                              "start": 15011,
                              "end": 15023
                            },
                            "start": 15009,
                            "end": 15023
                          },
                          "start": 15004,
                          "end": 15023
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 15025,
                        "end": 15036
                      },
                      "expression": false,
                      "start": 15003,
                      "end": 15036
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 14963,
                    "end": 15036
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
                      "start": 15049,
                      "end": 15063
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
                                "start": 15071,
                                "end": 15083
                              },
                              "typeArguments": null,
                              "start": 15071,
                              "end": 15083
                            },
                            "start": 15069,
                            "end": 15083
                          },
                          "start": 15064,
                          "end": 15083
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 15085,
                        "end": 15097
                      },
                      "expression": false,
                      "start": 15063,
                      "end": 15097
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 15045,
                    "end": 15097
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
                      "start": 15118,
                      "end": 15133
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
                                "start": 15141,
                                "end": 15153
                              },
                              "typeArguments": null,
                              "start": 15141,
                              "end": 15153
                            },
                            "start": 15139,
                            "end": 15153
                          },
                          "start": 15134,
                          "end": 15153
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 15155,
                        "end": 15166
                      },
                      "expression": false,
                      "start": 15133,
                      "end": 15166
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 15106,
                    "end": 15166
                  }
                ],
                "start": 14879,
                "end": 15172
              },
              "abstract": false,
              "declare": false,
              "start": 14830,
              "end": 15172
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 14823,
            "end": 15172
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
                "start": 15191,
                "end": 15232
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
                      "start": 15254,
                      "end": 15274
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
                                "start": 15282,
                                "end": 15293
                              },
                              "typeArguments": null,
                              "start": 15282,
                              "end": 15293
                            },
                            "start": 15280,
                            "end": 15293
                          },
                          "start": 15275,
                          "end": 15293
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 15295,
                        "end": 15306
                      },
                      "expression": false,
                      "start": 15274,
                      "end": 15306
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 15243,
                    "end": 15306
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
                      "start": 15334,
                      "end": 15355
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
                                "start": 15363,
                                "end": 15374
                              },
                              "typeArguments": null,
                              "start": 15363,
                              "end": 15374
                            },
                            "start": 15361,
                            "end": 15374
                          },
                          "start": 15356,
                          "end": 15374
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 15376,
                        "end": 15387
                      },
                      "expression": false,
                      "start": 15355,
                      "end": 15387
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 15315,
                    "end": 15387
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
                      "start": 15400,
                      "end": 15414
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
                                "start": 15422,
                                "end": 15433
                              },
                              "typeArguments": null,
                              "start": 15422,
                              "end": 15433
                            },
                            "start": 15420,
                            "end": 15433
                          },
                          "start": 15415,
                          "end": 15433
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 15435,
                        "end": 15446
                      },
                      "expression": false,
                      "start": 15414,
                      "end": 15446
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 15396,
                    "end": 15446
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
                      "start": 15467,
                      "end": 15482
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
                                "start": 15490,
                                "end": 15501
                              },
                              "typeArguments": null,
                              "start": 15490,
                              "end": 15501
                            },
                            "start": 15488,
                            "end": 15501
                          },
                          "start": 15483,
                          "end": 15501
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 15503,
                        "end": 15514
                      },
                      "expression": false,
                      "start": 15482,
                      "end": 15514
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 15455,
                    "end": 15514
                  }
                ],
                "start": 15233,
                "end": 15520
              },
              "abstract": false,
              "declare": false,
              "start": 15185,
              "end": 15520
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15178,
            "end": 15520
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
              "start": 15532,
              "end": 15575
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
                    "start": 15597,
                    "end": 15617
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
                              "start": 15625,
                              "end": 15637
                            },
                            "typeArguments": null,
                            "start": 15625,
                            "end": 15637
                          },
                          "start": 15623,
                          "end": 15637
                        },
                        "start": 15618,
                        "end": 15637
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 15639,
                      "end": 15650
                    },
                    "expression": false,
                    "start": 15617,
                    "end": 15650
                  },
                  "kind": "set",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 15586,
                  "end": 15650
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
                    "start": 15678,
                    "end": 15699
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
                              "start": 15707,
                              "end": 15719
                            },
                            "typeArguments": null,
                            "start": 15707,
                            "end": 15719
                          },
                          "start": 15705,
                          "end": 15719
                        },
                        "start": 15700,
                        "end": 15719
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 15721,
                      "end": 15732
                    },
                    "expression": false,
                    "start": 15699,
                    "end": 15732
                  },
                  "kind": "set",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 15659,
                  "end": 15732
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
                    "start": 15745,
                    "end": 15759
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
                              "start": 15767,
                              "end": 15779
                            },
                            "typeArguments": null,
                            "start": 15767,
                            "end": 15779
                          },
                          "start": 15765,
                          "end": 15779
                        },
                        "start": 15760,
                        "end": 15779
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 15781,
                      "end": 15792
                    },
                    "expression": false,
                    "start": 15759,
                    "end": 15792
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 15741,
                  "end": 15792
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
                    "start": 15813,
                    "end": 15828
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
                              "start": 15836,
                              "end": 15848
                            },
                            "typeArguments": null,
                            "start": 15836,
                            "end": 15848
                          },
                          "start": 15834,
                          "end": 15848
                        },
                        "start": 15829,
                        "end": 15848
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 15850,
                      "end": 15861
                    },
                    "expression": false,
                    "start": 15828,
                    "end": 15861
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 15801,
                  "end": 15861
                }
              ],
              "start": 15576,
              "end": 15867
            },
            "abstract": false,
            "declare": false,
            "start": 15526,
            "end": 15867
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
              "start": 15879,
              "end": 15921
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
                    "start": 15943,
                    "end": 15963
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
                              "start": 15971,
                              "end": 15982
                            },
                            "typeArguments": null,
                            "start": 15971,
                            "end": 15982
                          },
                          "start": 15969,
                          "end": 15982
                        },
                        "start": 15964,
                        "end": 15982
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 15984,
                      "end": 15995
                    },
                    "expression": false,
                    "start": 15963,
                    "end": 15995
                  },
                  "kind": "set",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 15932,
                  "end": 15995
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
                    "start": 16023,
                    "end": 16044
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
                              "start": 16052,
                              "end": 16063
                            },
                            "typeArguments": null,
                            "start": 16052,
                            "end": 16063
                          },
                          "start": 16050,
                          "end": 16063
                        },
                        "start": 16045,
                        "end": 16063
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 16065,
                      "end": 16076
                    },
                    "expression": false,
                    "start": 16044,
                    "end": 16076
                  },
                  "kind": "set",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 16004,
                  "end": 16076
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
                    "start": 16089,
                    "end": 16103
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
                              "start": 16111,
                              "end": 16122
                            },
                            "typeArguments": null,
                            "start": 16111,
                            "end": 16122
                          },
                          "start": 16109,
                          "end": 16122
                        },
                        "start": 16104,
                        "end": 16122
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 16124,
                      "end": 16135
                    },
                    "expression": false,
                    "start": 16103,
                    "end": 16135
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 16085,
                  "end": 16135
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
                    "start": 16156,
                    "end": 16171
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
                              "start": 16179,
                              "end": 16190
                            },
                            "typeArguments": null,
                            "start": 16179,
                            "end": 16190
                          },
                          "start": 16177,
                          "end": 16190
                        },
                        "start": 16172,
                        "end": 16190
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 16192,
                      "end": 16203
                    },
                    "expression": false,
                    "start": 16171,
                    "end": 16203
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 16144,
                  "end": 16203
                }
              ],
              "start": 15922,
              "end": 16209
            },
            "abstract": false,
            "declare": false,
            "start": 15873,
            "end": 16209
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
                "start": 16228,
                "end": 16272
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
                      "start": 16294,
                      "end": 16314
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
                              "start": 16318,
                              "end": 16331
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 16332,
                              "end": 16343
                            },
                            "start": 16318,
                            "end": 16343
                          },
                          "typeArguments": null,
                          "start": 16318,
                          "end": 16343
                        },
                        "start": 16316,
                        "end": 16343
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
                              "start": 16366,
                              "end": 16370
                            },
                            "start": 16359,
                            "end": 16371
                          }
                        ],
                        "start": 16344,
                        "end": 16381
                      },
                      "expression": false,
                      "start": 16314,
                      "end": 16381
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 16283,
                    "end": 16381
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
                      "start": 16394,
                      "end": 16408
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
                              "start": 16412,
                              "end": 16425
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 16426,
                              "end": 16437
                            },
                            "start": 16412,
                            "end": 16437
                          },
                          "typeArguments": null,
                          "start": 16412,
                          "end": 16437
                        },
                        "start": 16410,
                        "end": 16437
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
                              "start": 16460,
                              "end": 16464
                            },
                            "start": 16453,
                            "end": 16465
                          }
                        ],
                        "start": 16438,
                        "end": 16475
                      },
                      "expression": false,
                      "start": 16408,
                      "end": 16475
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 16390,
                    "end": 16475
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
                      "start": 16495,
                      "end": 16516
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
                                  "start": 16545,
                                  "end": 16558
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 16559,
                                  "end": 16570
                                },
                                "optional": false,
                                "computed": false,
                                "start": 16545,
                                "end": 16570
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 16541,
                              "end": 16572
                            },
                            "start": 16534,
                            "end": 16573
                          }
                        ],
                        "start": 16519,
                        "end": 16583
                      },
                      "expression": false,
                      "start": 16516,
                      "end": 16583
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 16484,
                    "end": 16583
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
                      "start": 16596,
                      "end": 16611
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
                                  "start": 16640,
                                  "end": 16653
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 16654,
                                  "end": 16665
                                },
                                "optional": false,
                                "computed": false,
                                "start": 16640,
                                "end": 16665
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 16636,
                              "end": 16667
                            },
                            "start": 16629,
                            "end": 16668
                          }
                        ],
                        "start": 16614,
                        "end": 16678
                      },
                      "expression": false,
                      "start": 16611,
                      "end": 16678
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 16592,
                    "end": 16678
                  }
                ],
                "start": 16273,
                "end": 16684
              },
              "abstract": false,
              "declare": false,
              "start": 16222,
              "end": 16684
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16215,
            "end": 16684
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
                "start": 16703,
                "end": 16747
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
                      "start": 16769,
                      "end": 16789
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
                                  "start": 16797,
                                  "end": 16810
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 16811,
                                  "end": 16822
                                },
                                "start": 16797,
                                "end": 16822
                              },
                              "typeArguments": null,
                              "start": 16797,
                              "end": 16822
                            },
                            "start": 16795,
                            "end": 16822
                          },
                          "start": 16790,
                          "end": 16822
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 16824,
                        "end": 16836
                      },
                      "expression": false,
                      "start": 16789,
                      "end": 16836
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 16758,
                    "end": 16836
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
                      "start": 16849,
                      "end": 16863
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
                                  "start": 16871,
                                  "end": 16884
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 16885,
                                  "end": 16896
                                },
                                "start": 16871,
                                "end": 16896
                              },
                              "typeArguments": null,
                              "start": 16871,
                              "end": 16896
                            },
                            "start": 16869,
                            "end": 16896
                          },
                          "start": 16864,
                          "end": 16896
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 16898,
                        "end": 16910
                      },
                      "expression": false,
                      "start": 16863,
                      "end": 16910
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 16845,
                    "end": 16910
                  }
                ],
                "start": 16748,
                "end": 16916
              },
              "abstract": false,
              "declare": false,
              "start": 16697,
              "end": 16916
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16690,
            "end": 16916
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
              "start": 16928,
              "end": 16973
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
                    "start": 16995,
                    "end": 17015
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
                            "start": 17019,
                            "end": 17032
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 17033,
                            "end": 17044
                          },
                          "start": 17019,
                          "end": 17044
                        },
                        "typeArguments": null,
                        "start": 17019,
                        "end": 17044
                      },
                      "start": 17017,
                      "end": 17044
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
                            "start": 17066,
                            "end": 17070
                          },
                          "start": 17059,
                          "end": 17071
                        }
                      ],
                      "start": 17045,
                      "end": 17081
                    },
                    "expression": false,
                    "start": 17015,
                    "end": 17081
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 16984,
                  "end": 17081
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
                    "start": 17094,
                    "end": 17108
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
                            "start": 17112,
                            "end": 17125
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 17126,
                            "end": 17137
                          },
                          "start": 17112,
                          "end": 17137
                        },
                        "typeArguments": null,
                        "start": 17112,
                        "end": 17137
                      },
                      "start": 17110,
                      "end": 17137
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
                            "start": 17159,
                            "end": 17163
                          },
                          "start": 17152,
                          "end": 17164
                        }
                      ],
                      "start": 17138,
                      "end": 17174
                    },
                    "expression": false,
                    "start": 17108,
                    "end": 17174
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 17090,
                  "end": 17174
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
                    "start": 17194,
                    "end": 17215
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
                                "start": 17243,
                                "end": 17256
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17257,
                                "end": 17268
                              },
                              "optional": false,
                              "computed": false,
                              "start": 17243,
                              "end": 17268
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 17239,
                            "end": 17270
                          },
                          "start": 17232,
                          "end": 17271
                        }
                      ],
                      "start": 17218,
                      "end": 17281
                    },
                    "expression": false,
                    "start": 17215,
                    "end": 17281
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 17183,
                  "end": 17281
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
                    "start": 17294,
                    "end": 17309
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
                                "start": 17337,
                                "end": 17350
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17351,
                                "end": 17362
                              },
                              "optional": false,
                              "computed": false,
                              "start": 17337,
                              "end": 17362
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 17333,
                            "end": 17364
                          },
                          "start": 17326,
                          "end": 17365
                        }
                      ],
                      "start": 17312,
                      "end": 17375
                    },
                    "expression": false,
                    "start": 17309,
                    "end": 17375
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 17290,
                  "end": 17375
                }
              ],
              "start": 16974,
              "end": 17381
            },
            "abstract": false,
            "declare": false,
            "start": 16922,
            "end": 17381
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
              "start": 17393,
              "end": 17438
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
                    "start": 17460,
                    "end": 17480
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
                                "start": 17488,
                                "end": 17501
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17502,
                                "end": 17513
                              },
                              "start": 17488,
                              "end": 17513
                            },
                            "typeArguments": null,
                            "start": 17488,
                            "end": 17513
                          },
                          "start": 17486,
                          "end": 17513
                        },
                        "start": 17481,
                        "end": 17513
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 17515,
                      "end": 17526
                    },
                    "expression": false,
                    "start": 17480,
                    "end": 17526
                  },
                  "kind": "set",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 17449,
                  "end": 17526
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
                    "start": 17539,
                    "end": 17553
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
                                "start": 17561,
                                "end": 17574
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 17575,
                                "end": 17586
                              },
                              "start": 17561,
                              "end": 17586
                            },
                            "typeArguments": null,
                            "start": 17561,
                            "end": 17586
                          },
                          "start": 17559,
                          "end": 17586
                        },
                        "start": 17554,
                        "end": 17586
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 17588,
                      "end": 17599
                    },
                    "expression": false,
                    "start": 17553,
                    "end": 17599
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 17535,
                  "end": 17599
                }
              ],
              "start": 17439,
              "end": 17605
            },
            "abstract": false,
            "declare": false,
            "start": 17387,
            "end": 17605
          }
        ],
        "start": 11570,
        "end": 17607
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 11546,
      "end": 17607
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 17608
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
        "start": 1131,
        "end": 1151
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
              "start": 1164,
              "end": 1176
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1177,
              "end": 1184
            },
            "abstract": false,
            "declare": false,
            "start": 1158,
            "end": 1184
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
                "start": 1203,
                "end": 1214
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1215,
                "end": 1222
              },
              "abstract": false,
              "declare": false,
              "start": 1197,
              "end": 1222
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1190,
            "end": 1222
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 1238,
              "end": 1251
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
                    "start": 1268,
                    "end": 1280
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 1281,
                    "end": 1292
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 1262,
                  "end": 1292
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
                      "start": 1315,
                      "end": 1326
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 1327,
                      "end": 1338
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1309,
                    "end": 1338
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1302,
                  "end": 1338
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
                      "start": 1360,
                      "end": 1402
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
                            "start": 1428,
                            "end": 1448
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
                                  "start": 1452,
                                  "end": 1464
                                },
                                "typeArguments": null,
                                "start": 1452,
                                "end": 1464
                              },
                              "start": 1450,
                              "end": 1464
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
                                    "start": 1490,
                                    "end": 1494
                                  },
                                  "start": 1483,
                                  "end": 1495
                                }
                              ],
                              "start": 1465,
                              "end": 1509
                            },
                            "expression": false,
                            "start": 1448,
                            "end": 1509
                          },
                          "kind": "get",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 1417,
                          "end": 1509
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
                            "start": 1541,
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
                                    "start": 1604,
                                    "end": 1608
                                  },
                                  "start": 1597,
                                  "end": 1609
                                }
                              ],
                              "start": 1579,
                              "end": 1623
                            },
                            "expression": false,
                            "start": 1562,
                            "end": 1623
                          },
                          "kind": "get",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 1522,
                          "end": 1623
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
                            "start": 1640,
                            "end": 1654
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
                                  "start": 1658,
                                  "end": 1670
                                },
                                "typeArguments": null,
                                "start": 1658,
                                "end": 1670
                              },
                              "start": 1656,
                              "end": 1670
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
                                    "start": 1696,
                                    "end": 1700
                                  },
                                  "start": 1689,
                                  "end": 1701
                                }
                              ],
                              "start": 1671,
                              "end": 1715
                            },
                            "expression": false,
                            "start": 1654,
                            "end": 1715
                          },
                          "kind": "get",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 1636,
                          "end": 1715
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
                            "start": 1740,
                            "end": 1755
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
                                  "start": 1759,
                                  "end": 1771
                                },
                                "typeArguments": null,
                                "start": 1759,
                                "end": 1771
                              },
                              "start": 1757,
                              "end": 1771
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
                                    "start": 1797,
                                    "end": 1801
                                  },
                                  "start": 1790,
                                  "end": 1802
                                }
                              ],
                              "start": 1772,
                              "end": 1816
                            },
                            "expression": false,
                            "start": 1755,
                            "end": 1816
                          },
                          "kind": "get",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 1728,
                          "end": 1816
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
                            "start": 1840,
                            "end": 1861
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
                                      "start": 1893,
                                      "end": 1905
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 1889,
                                    "end": 1907
                                  },
                                  "start": 1882,
                                  "end": 1908
                                }
                              ],
                              "start": 1864,
                              "end": 1922
                            },
                            "expression": false,
                            "start": 1861,
                            "end": 1922
                          },
                          "kind": "get",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 1829,
                          "end": 1922
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
                            "start": 1954,
                            "end": 1976
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
                                      "start": 2008,
                                      "end": 2020
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 2004,
                                    "end": 2022
                                  },
                                  "start": 1997,
                                  "end": 2023
                                }
                              ],
                              "start": 1979,
                              "end": 2037
                            },
                            "expression": false,
                            "start": 1976,
                            "end": 2037
                          },
                          "kind": "get",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 1935,
                          "end": 2037
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
                            "start": 2054,
                            "end": 2069
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
                                      "start": 2101,
                                      "end": 2113
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 2097,
                                    "end": 2115
                                  },
                                  "start": 2090,
                                  "end": 2116
                                }
                              ],
                              "start": 2072,
                              "end": 2130
                            },
                            "expression": false,
                            "start": 2069,
                            "end": 2130
                          },
                          "kind": "get",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2050,
                          "end": 2130
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
                            "start": 2155,
                            "end": 2171
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
                                      "start": 2203,
                                      "end": 2215
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 2199,
                                    "end": 2217
                                  },
                                  "start": 2192,
                                  "end": 2218
                                }
                              ],
                              "start": 2174,
                              "end": 2232
                            },
                            "expression": false,
                            "start": 2171,
                            "end": 2232
                          },
                          "kind": "get",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 2143,
                          "end": 2232
                        }
                      ],
                      "start": 1403,
                      "end": 2242
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1354,
                    "end": 2242
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1347,
                  "end": 2242
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
                      "start": 2265,
                      "end": 2306
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
                            "start": 2332,
                            "end": 2352
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
                                  "start": 2356,
                                  "end": 2367
                                },
                                "typeArguments": null,
                                "start": 2356,
                                "end": 2367
                              },
                              "start": 2354,
                              "end": 2367
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
                                    "start": 2393,
                                    "end": 2397
                                  },
                                  "start": 2386,
                                  "end": 2398
                                }
                              ],
                              "start": 2368,
                              "end": 2412
                            },
                            "expression": false,
                            "start": 2352,
                            "end": 2412
                          },
                          "kind": "get",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2321,
                          "end": 2412
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
                            "start": 2444,
                            "end": 2465
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
                                  "start": 2469,
                                  "end": 2480
                                },
                                "typeArguments": null,
                                "start": 2469,
                                "end": 2480
                              },
                              "start": 2467,
                              "end": 2480
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
                                    "start": 2506,
                                    "end": 2510
                                  },
                                  "start": 2499,
                                  "end": 2511
                                }
                              ],
                              "start": 2481,
                              "end": 2525
                            },
                            "expression": false,
                            "start": 2465,
                            "end": 2525
                          },
                          "kind": "get",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 2425,
                          "end": 2525
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
                            "start": 2542,
                            "end": 2556
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
                                  "start": 2560,
                                  "end": 2571
                                },
                                "typeArguments": null,
                                "start": 2560,
                                "end": 2571
                              },
                              "start": 2558,
                              "end": 2571
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
                                    "start": 2597,
                                    "end": 2601
                                  },
                                  "start": 2590,
                                  "end": 2602
                                }
                              ],
                              "start": 2572,
                              "end": 2616
                            },
                            "expression": false,
                            "start": 2556,
                            "end": 2616
                          },
                          "kind": "get",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2538,
                          "end": 2616
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
                            "start": 2641,
                            "end": 2656
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
                                  "start": 2660,
                                  "end": 2671
                                },
                                "typeArguments": null,
                                "start": 2660,
                                "end": 2671
                              },
                              "start": 2658,
                              "end": 2671
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
                                    "start": 2697,
                                    "end": 2701
                                  },
                                  "start": 2690,
                                  "end": 2702
                                }
                              ],
                              "start": 2672,
                              "end": 2716
                            },
                            "expression": false,
                            "start": 2656,
                            "end": 2716
                          },
                          "kind": "get",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 2629,
                          "end": 2716
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
                            "start": 2740,
                            "end": 2761
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
                                      "start": 2793,
                                      "end": 2804
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 2789,
                                    "end": 2806
                                  },
                                  "start": 2782,
                                  "end": 2807
                                }
                              ],
                              "start": 2764,
                              "end": 2821
                            },
                            "expression": false,
                            "start": 2761,
                            "end": 2821
                          },
                          "kind": "get",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2729,
                          "end": 2821
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
                            "start": 2853,
                            "end": 2875
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
                                      "start": 2907,
                                      "end": 2918
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 2903,
                                    "end": 2920
                                  },
                                  "start": 2896,
                                  "end": 2921
                                }
                              ],
                              "start": 2878,
                              "end": 2935
                            },
                            "expression": false,
                            "start": 2875,
                            "end": 2935
                          },
                          "kind": "get",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 2834,
                          "end": 2935
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
                            "start": 2952,
                            "end": 2967
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
                                      "start": 2999,
                                      "end": 3010
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 2995,
                                    "end": 3012
                                  },
                                  "start": 2988,
                                  "end": 3013
                                }
                              ],
                              "start": 2970,
                              "end": 3027
                            },
                            "expression": false,
                            "start": 2967,
                            "end": 3027
                          },
                          "kind": "get",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2948,
                          "end": 3027
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
                            "start": 3052,
                            "end": 3068
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
                                      "start": 3100,
                                      "end": 3111
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 3096,
                                    "end": 3113
                                  },
                                  "start": 3089,
                                  "end": 3114
                                }
                              ],
                              "start": 3071,
                              "end": 3128
                            },
                            "expression": false,
                            "start": 3068,
                            "end": 3128
                          },
                          "kind": "get",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 3040,
                          "end": 3128
                        }
                      ],
                      "start": 2307,
                      "end": 3138
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 2259,
                    "end": 3138
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 2252,
                  "end": 3138
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
                    "start": 3154,
                    "end": 3197
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
                          "start": 3223,
                          "end": 3243
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
                                "start": 3247,
                                "end": 3259
                              },
                              "typeArguments": null,
                              "start": 3247,
                              "end": 3259
                            },
                            "start": 3245,
                            "end": 3259
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
                                  "start": 3285,
                                  "end": 3289
                                },
                                "start": 3278,
                                "end": 3290
                              }
                            ],
                            "start": 3260,
                            "end": 3304
                          },
                          "expression": false,
                          "start": 3243,
                          "end": 3304
                        },
                        "kind": "get",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 3212,
                        "end": 3304
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
                          "start": 3336,
                          "end": 3357
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
                                "start": 3361,
                                "end": 3373
                              },
                              "typeArguments": null,
                              "start": 3361,
                              "end": 3373
                            },
                            "start": 3359,
                            "end": 3373
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
                                  "start": 3399,
                                  "end": 3403
                                },
                                "start": 3392,
                                "end": 3404
                              }
                            ],
                            "start": 3374,
                            "end": 3418
                          },
                          "expression": false,
                          "start": 3357,
                          "end": 3418
                        },
                        "kind": "get",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 3317,
                        "end": 3418
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
                          "start": 3435,
                          "end": 3449
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
                                "start": 3453,
                                "end": 3465
                              },
                              "typeArguments": null,
                              "start": 3453,
                              "end": 3465
                            },
                            "start": 3451,
                            "end": 3465
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
                                  "start": 3491,
                                  "end": 3495
                                },
                                "start": 3484,
                                "end": 3496
                              }
                            ],
                            "start": 3466,
                            "end": 3510
                          },
                          "expression": false,
                          "start": 3449,
                          "end": 3510
                        },
                        "kind": "get",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 3431,
                        "end": 3510
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
                          "start": 3535,
                          "end": 3550
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
                                "start": 3554,
                                "end": 3566
                              },
                              "typeArguments": null,
                              "start": 3554,
                              "end": 3566
                            },
                            "start": 3552,
                            "end": 3566
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
                                  "start": 3592,
                                  "end": 3596
                                },
                                "start": 3585,
                                "end": 3597
                              }
                            ],
                            "start": 3567,
                            "end": 3611
                          },
                          "expression": false,
                          "start": 3550,
                          "end": 3611
                        },
                        "kind": "get",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 3523,
                        "end": 3611
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
                          "start": 3635,
                          "end": 3656
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
                                    "start": 3688,
                                    "end": 3700
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 3684,
                                  "end": 3702
                                },
                                "start": 3677,
                                "end": 3703
                              }
                            ],
                            "start": 3659,
                            "end": 3717
                          },
                          "expression": false,
                          "start": 3656,
                          "end": 3717
                        },
                        "kind": "get",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 3624,
                        "end": 3717
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
                          "start": 3749,
                          "end": 3771
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
                                    "start": 3803,
                                    "end": 3815
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 3799,
                                  "end": 3817
                                },
                                "start": 3792,
                                "end": 3818
                              }
                            ],
                            "start": 3774,
                            "end": 3832
                          },
                          "expression": false,
                          "start": 3771,
                          "end": 3832
                        },
                        "kind": "get",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 3730,
                        "end": 3832
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
                          "start": 3849,
                          "end": 3864
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
                                    "start": 3896,
                                    "end": 3908
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 3892,
                                  "end": 3910
                                },
                                "start": 3885,
                                "end": 3911
                              }
                            ],
                            "start": 3867,
                            "end": 3925
                          },
                          "expression": false,
                          "start": 3864,
                          "end": 3925
                        },
                        "kind": "get",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 3845,
                        "end": 3925
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
                          "start": 3950,
                          "end": 3966
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
                                    "start": 3998,
                                    "end": 4010
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 3994,
                                  "end": 4012
                                },
                                "start": 3987,
                                "end": 4013
                              }
                            ],
                            "start": 3969,
                            "end": 4027
                          },
                          "expression": false,
                          "start": 3966,
                          "end": 4027
                        },
                        "kind": "get",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 3938,
                        "end": 4027
                      }
                    ],
                    "start": 3198,
                    "end": 4037
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 3148,
                  "end": 4037
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
                    "start": 4053,
                    "end": 4095
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
                          "start": 4121,
                          "end": 4141
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
                                "start": 4145,
                                "end": 4156
                              },
                              "typeArguments": null,
                              "start": 4145,
                              "end": 4156
                            },
                            "start": 4143,
                            "end": 4156
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
                                  "start": 4182,
                                  "end": 4186
                                },
                                "start": 4175,
                                "end": 4187
                              }
                            ],
                            "start": 4157,
                            "end": 4201
                          },
                          "expression": false,
                          "start": 4141,
                          "end": 4201
                        },
                        "kind": "get",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 4110,
                        "end": 4201
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
                          "start": 4233,
                          "end": 4254
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
                                "start": 4258,
                                "end": 4269
                              },
                              "typeArguments": null,
                              "start": 4258,
                              "end": 4269
                            },
                            "start": 4256,
                            "end": 4269
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
                                  "start": 4295,
                                  "end": 4299
                                },
                                "start": 4288,
                                "end": 4300
                              }
                            ],
                            "start": 4270,
                            "end": 4314
                          },
                          "expression": false,
                          "start": 4254,
                          "end": 4314
                        },
                        "kind": "get",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 4214,
                        "end": 4314
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
                          "start": 4331,
                          "end": 4345
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
                                "start": 4349,
                                "end": 4360
                              },
                              "typeArguments": null,
                              "start": 4349,
                              "end": 4360
                            },
                            "start": 4347,
                            "end": 4360
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
                                  "start": 4386,
                                  "end": 4390
                                },
                                "start": 4379,
                                "end": 4391
                              }
                            ],
                            "start": 4361,
                            "end": 4405
                          },
                          "expression": false,
                          "start": 4345,
                          "end": 4405
                        },
                        "kind": "get",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 4327,
                        "end": 4405
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
                          "start": 4430,
                          "end": 4445
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
                                "start": 4449,
                                "end": 4460
                              },
                              "typeArguments": null,
                              "start": 4449,
                              "end": 4460
                            },
                            "start": 4447,
                            "end": 4460
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
                                  "start": 4486,
                                  "end": 4490
                                },
                                "start": 4479,
                                "end": 4491
                              }
                            ],
                            "start": 4461,
                            "end": 4505
                          },
                          "expression": false,
                          "start": 4445,
                          "end": 4505
                        },
                        "kind": "get",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 4418,
                        "end": 4505
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
                          "start": 4529,
                          "end": 4550
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
                                    "start": 4582,
                                    "end": 4593
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 4578,
                                  "end": 4595
                                },
                                "start": 4571,
                                "end": 4596
                              }
                            ],
                            "start": 4553,
                            "end": 4610
                          },
                          "expression": false,
                          "start": 4550,
                          "end": 4610
                        },
                        "kind": "get",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 4518,
                        "end": 4610
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
                          "start": 4642,
                          "end": 4664
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
                                    "start": 4696,
                                    "end": 4707
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 4692,
                                  "end": 4709
                                },
                                "start": 4685,
                                "end": 4710
                              }
                            ],
                            "start": 4667,
                            "end": 4724
                          },
                          "expression": false,
                          "start": 4664,
                          "end": 4724
                        },
                        "kind": "get",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 4623,
                        "end": 4724
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
                          "start": 4741,
                          "end": 4756
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
                                    "start": 4788,
                                    "end": 4799
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 4784,
                                  "end": 4801
                                },
                                "start": 4777,
                                "end": 4802
                              }
                            ],
                            "start": 4759,
                            "end": 4816
                          },
                          "expression": false,
                          "start": 4756,
                          "end": 4816
                        },
                        "kind": "get",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 4737,
                        "end": 4816
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
                          "start": 4841,
                          "end": 4857
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
                                    "start": 4889,
                                    "end": 4900
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 4885,
                                  "end": 4902
                                },
                                "start": 4878,
                                "end": 4903
                              }
                            ],
                            "start": 4860,
                            "end": 4917
                          },
                          "expression": false,
                          "start": 4857,
                          "end": 4917
                        },
                        "kind": "get",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 4829,
                        "end": 4917
                      }
                    ],
                    "start": 4096,
                    "end": 4927
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 4047,
                  "end": 4927
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
                      "start": 4950,
                      "end": 4992
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
                            "start": 5018,
                            "end": 5038
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
                                      "start": 5046,
                                      "end": 5058
                                    },
                                    "typeArguments": null,
                                    "start": 5046,
                                    "end": 5058
                                  },
                                  "start": 5044,
                                  "end": 5058
                                },
                                "start": 5039,
                                "end": 5058
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 5060,
                              "end": 5075
                            },
                            "expression": false,
                            "start": 5038,
                            "end": 5075
                          },
                          "kind": "set",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 5007,
                          "end": 5075
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
                            "start": 5107,
                            "end": 5128
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
                                      "start": 5136,
                                      "end": 5148
                                    },
                                    "typeArguments": null,
                                    "start": 5136,
                                    "end": 5148
                                  },
                                  "start": 5134,
                                  "end": 5148
                                },
                                "start": 5129,
                                "end": 5148
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 5150,
                              "end": 5165
                            },
                            "expression": false,
                            "start": 5128,
                            "end": 5165
                          },
                          "kind": "set",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 5088,
                          "end": 5165
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
                            "start": 5182,
                            "end": 5196
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
                                      "start": 5204,
                                      "end": 5216
                                    },
                                    "typeArguments": null,
                                    "start": 5204,
                                    "end": 5216
                                  },
                                  "start": 5202,
                                  "end": 5216
                                },
                                "start": 5197,
                                "end": 5216
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 5218,
                              "end": 5233
                            },
                            "expression": false,
                            "start": 5196,
                            "end": 5233
                          },
                          "kind": "set",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 5178,
                          "end": 5233
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
                            "start": 5258,
                            "end": 5273
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
                                      "start": 5281,
                                      "end": 5293
                                    },
                                    "typeArguments": null,
                                    "start": 5281,
                                    "end": 5293
                                  },
                                  "start": 5279,
                                  "end": 5293
                                },
                                "start": 5274,
                                "end": 5293
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 5295,
                              "end": 5310
                            },
                            "expression": false,
                            "start": 5273,
                            "end": 5310
                          },
                          "kind": "set",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 5246,
                          "end": 5310
                        }
                      ],
                      "start": 4993,
                      "end": 5320
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 4944,
                    "end": 5320
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 4937,
                  "end": 5320
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
                      "start": 5343,
                      "end": 5384
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
                            "start": 5410,
                            "end": 5430
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
                                      "start": 5438,
                                      "end": 5449
                                    },
                                    "typeArguments": null,
                                    "start": 5438,
                                    "end": 5449
                                  },
                                  "start": 5436,
                                  "end": 5449
                                },
                                "start": 5431,
                                "end": 5449
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 5451,
                              "end": 5466
                            },
                            "expression": false,
                            "start": 5430,
                            "end": 5466
                          },
                          "kind": "set",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 5399,
                          "end": 5466
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
                            "start": 5498,
                            "end": 5519
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
                                      "start": 5527,
                                      "end": 5538
                                    },
                                    "typeArguments": null,
                                    "start": 5527,
                                    "end": 5538
                                  },
                                  "start": 5525,
                                  "end": 5538
                                },
                                "start": 5520,
                                "end": 5538
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 5540,
                              "end": 5555
                            },
                            "expression": false,
                            "start": 5519,
                            "end": 5555
                          },
                          "kind": "set",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 5479,
                          "end": 5555
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
                            "start": 5572,
                            "end": 5586
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
                                      "start": 5594,
                                      "end": 5605
                                    },
                                    "typeArguments": null,
                                    "start": 5594,
                                    "end": 5605
                                  },
                                  "start": 5592,
                                  "end": 5605
                                },
                                "start": 5587,
                                "end": 5605
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 5607,
                              "end": 5622
                            },
                            "expression": false,
                            "start": 5586,
                            "end": 5622
                          },
                          "kind": "set",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 5568,
                          "end": 5622
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
                            "start": 5647,
                            "end": 5662
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
                                      "start": 5670,
                                      "end": 5681
                                    },
                                    "typeArguments": null,
                                    "start": 5670,
                                    "end": 5681
                                  },
                                  "start": 5668,
                                  "end": 5681
                                },
                                "start": 5663,
                                "end": 5681
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 5683,
                              "end": 5698
                            },
                            "expression": false,
                            "start": 5662,
                            "end": 5698
                          },
                          "kind": "set",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 5635,
                          "end": 5698
                        }
                      ],
                      "start": 5385,
                      "end": 5708
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 5337,
                    "end": 5708
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 5330,
                  "end": 5708
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
                    "start": 5724,
                    "end": 5767
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
                          "start": 5793,
                          "end": 5813
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
                                    "start": 5821,
                                    "end": 5833
                                  },
                                  "typeArguments": null,
                                  "start": 5821,
                                  "end": 5833
                                },
                                "start": 5819,
                                "end": 5833
                              },
                              "start": 5814,
                              "end": 5833
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 5835,
                            "end": 5850
                          },
                          "expression": false,
                          "start": 5813,
                          "end": 5850
                        },
                        "kind": "set",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 5782,
                        "end": 5850
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
                          "start": 5882,
                          "end": 5903
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
                                    "start": 5911,
                                    "end": 5923
                                  },
                                  "typeArguments": null,
                                  "start": 5911,
                                  "end": 5923
                                },
                                "start": 5909,
                                "end": 5923
                              },
                              "start": 5904,
                              "end": 5923
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 5925,
                            "end": 5940
                          },
                          "expression": false,
                          "start": 5903,
                          "end": 5940
                        },
                        "kind": "set",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 5863,
                        "end": 5940
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
                          "start": 5957,
                          "end": 5971
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
                                    "start": 5979,
                                    "end": 5991
                                  },
                                  "typeArguments": null,
                                  "start": 5979,
                                  "end": 5991
                                },
                                "start": 5977,
                                "end": 5991
                              },
                              "start": 5972,
                              "end": 5991
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 5993,
                            "end": 6008
                          },
                          "expression": false,
                          "start": 5971,
                          "end": 6008
                        },
                        "kind": "set",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 5953,
                        "end": 6008
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
                          "start": 6033,
                          "end": 6048
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
                                    "start": 6056,
                                    "end": 6068
                                  },
                                  "typeArguments": null,
                                  "start": 6056,
                                  "end": 6068
                                },
                                "start": 6054,
                                "end": 6068
                              },
                              "start": 6049,
                              "end": 6068
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 6070,
                            "end": 6085
                          },
                          "expression": false,
                          "start": 6048,
                          "end": 6085
                        },
                        "kind": "set",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 6021,
                        "end": 6085
                      }
                    ],
                    "start": 5768,
                    "end": 6095
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 5718,
                  "end": 6095
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
                    "start": 6111,
                    "end": 6153
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
                          "start": 6179,
                          "end": 6199
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
                                    "start": 6207,
                                    "end": 6218
                                  },
                                  "typeArguments": null,
                                  "start": 6207,
                                  "end": 6218
                                },
                                "start": 6205,
                                "end": 6218
                              },
                              "start": 6200,
                              "end": 6218
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 6220,
                            "end": 6235
                          },
                          "expression": false,
                          "start": 6199,
                          "end": 6235
                        },
                        "kind": "set",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 6168,
                        "end": 6235
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
                          "start": 6267,
                          "end": 6288
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
                                    "start": 6296,
                                    "end": 6307
                                  },
                                  "typeArguments": null,
                                  "start": 6296,
                                  "end": 6307
                                },
                                "start": 6294,
                                "end": 6307
                              },
                              "start": 6289,
                              "end": 6307
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 6309,
                            "end": 6324
                          },
                          "expression": false,
                          "start": 6288,
                          "end": 6324
                        },
                        "kind": "set",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 6248,
                        "end": 6324
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
                          "start": 6341,
                          "end": 6355
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
                                    "start": 6363,
                                    "end": 6374
                                  },
                                  "typeArguments": null,
                                  "start": 6363,
                                  "end": 6374
                                },
                                "start": 6361,
                                "end": 6374
                              },
                              "start": 6356,
                              "end": 6374
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 6376,
                            "end": 6391
                          },
                          "expression": false,
                          "start": 6355,
                          "end": 6391
                        },
                        "kind": "set",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 6337,
                        "end": 6391
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
                          "start": 6416,
                          "end": 6431
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
                                    "start": 6439,
                                    "end": 6450
                                  },
                                  "typeArguments": null,
                                  "start": 6439,
                                  "end": 6450
                                },
                                "start": 6437,
                                "end": 6450
                              },
                              "start": 6432,
                              "end": 6450
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 6452,
                            "end": 6467
                          },
                          "expression": false,
                          "start": 6431,
                          "end": 6467
                        },
                        "kind": "set",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": "private",
                        "start": 6404,
                        "end": 6467
                      }
                    ],
                    "start": 6154,
                    "end": 6477
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 6105,
                  "end": 6477
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
                      "start": 6500,
                      "end": 6544
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
                            "start": 6570,
                            "end": 6590
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
                                    "start": 6594,
                                    "end": 6607
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6608,
                                    "end": 6619
                                  },
                                  "start": 6594,
                                  "end": 6619
                                },
                                "typeArguments": null,
                                "start": 6594,
                                "end": 6619
                              },
                              "start": 6592,
                              "end": 6619
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
                                    "start": 6645,
                                    "end": 6649
                                  },
                                  "start": 6638,
                                  "end": 6650
                                }
                              ],
                              "start": 6620,
                              "end": 6664
                            },
                            "expression": false,
                            "start": 6590,
                            "end": 6664
                          },
                          "kind": "get",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 6559,
                          "end": 6664
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
                            "start": 6681,
                            "end": 6695
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
                                    "start": 6699,
                                    "end": 6712
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6713,
                                    "end": 6724
                                  },
                                  "start": 6699,
                                  "end": 6724
                                },
                                "typeArguments": null,
                                "start": 6699,
                                "end": 6724
                              },
                              "start": 6697,
                              "end": 6724
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
                                    "start": 6750,
                                    "end": 6754
                                  },
                                  "start": 6743,
                                  "end": 6755
                                }
                              ],
                              "start": 6725,
                              "end": 6769
                            },
                            "expression": false,
                            "start": 6695,
                            "end": 6769
                          },
                          "kind": "get",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 6677,
                          "end": 6769
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
                            "start": 6793,
                            "end": 6814
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
                                        "start": 6846,
                                        "end": 6859
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 6860,
                                        "end": 6871
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 6846,
                                      "end": 6871
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 6842,
                                    "end": 6873
                                  },
                                  "start": 6835,
                                  "end": 6874
                                }
                              ],
                              "start": 6817,
                              "end": 6888
                            },
                            "expression": false,
                            "start": 6814,
                            "end": 6888
                          },
                          "kind": "get",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 6782,
                          "end": 6888
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
                            "start": 6905,
                            "end": 6920
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
                                        "start": 6952,
                                        "end": 6965
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 6966,
                                        "end": 6977
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 6952,
                                      "end": 6977
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 6948,
                                    "end": 6979
                                  },
                                  "start": 6941,
                                  "end": 6980
                                }
                              ],
                              "start": 6923,
                              "end": 6994
                            },
                            "expression": false,
                            "start": 6920,
                            "end": 6994
                          },
                          "kind": "get",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 6901,
                          "end": 6994
                        }
                      ],
                      "start": 6545,
                      "end": 7004
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 6494,
                    "end": 7004
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 6487,
                  "end": 7004
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
                      "start": 7027,
                      "end": 7071
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
                            "start": 7097,
                            "end": 7117
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
                                        "start": 7125,
                                        "end": 7138
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 7139,
                                        "end": 7150
                                      },
                                      "start": 7125,
                                      "end": 7150
                                    },
                                    "typeArguments": null,
                                    "start": 7125,
                                    "end": 7150
                                  },
                                  "start": 7123,
                                  "end": 7150
                                },
                                "start": 7118,
                                "end": 7150
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 7152,
                              "end": 7167
                            },
                            "expression": false,
                            "start": 7117,
                            "end": 7167
                          },
                          "kind": "set",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 7086,
                          "end": 7167
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
                            "start": 7184,
                            "end": 7198
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
                                        "start": 7206,
                                        "end": 7219
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 7220,
                                        "end": 7231
                                      },
                                      "start": 7206,
                                      "end": 7231
                                    },
                                    "typeArguments": null,
                                    "start": 7206,
                                    "end": 7231
                                  },
                                  "start": 7204,
                                  "end": 7231
                                },
                                "start": 7199,
                                "end": 7231
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 7233,
                              "end": 7248
                            },
                            "expression": false,
                            "start": 7198,
                            "end": 7248
                          },
                          "kind": "set",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 7180,
                          "end": 7248
                        }
                      ],
                      "start": 7072,
                      "end": 7258
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 7021,
                    "end": 7258
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 7014,
                  "end": 7258
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
                    "start": 7274,
                    "end": 7319
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
                          "start": 7345,
                          "end": 7365
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
                                  "start": 7369,
                                  "end": 7382
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7383,
                                  "end": 7394
                                },
                                "start": 7369,
                                "end": 7394
                              },
                              "typeArguments": null,
                              "start": 7369,
                              "end": 7394
                            },
                            "start": 7367,
                            "end": 7394
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
                                  "start": 7420,
                                  "end": 7424
                                },
                                "start": 7413,
                                "end": 7425
                              }
                            ],
                            "start": 7395,
                            "end": 7439
                          },
                          "expression": false,
                          "start": 7365,
                          "end": 7439
                        },
                        "kind": "get",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 7334,
                        "end": 7439
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
                          "start": 7456,
                          "end": 7470
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
                                  "start": 7474,
                                  "end": 7487
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7488,
                                  "end": 7499
                                },
                                "start": 7474,
                                "end": 7499
                              },
                              "typeArguments": null,
                              "start": 7474,
                              "end": 7499
                            },
                            "start": 7472,
                            "end": 7499
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
                                  "start": 7525,
                                  "end": 7529
                                },
                                "start": 7518,
                                "end": 7530
                              }
                            ],
                            "start": 7500,
                            "end": 7544
                          },
                          "expression": false,
                          "start": 7470,
                          "end": 7544
                        },
                        "kind": "get",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 7452,
                        "end": 7544
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
                          "start": 7568,
                          "end": 7589
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
                                      "start": 7621,
                                      "end": 7634
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 7635,
                                      "end": 7646
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 7621,
                                    "end": 7646
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 7617,
                                  "end": 7648
                                },
                                "start": 7610,
                                "end": 7649
                              }
                            ],
                            "start": 7592,
                            "end": 7663
                          },
                          "expression": false,
                          "start": 7589,
                          "end": 7663
                        },
                        "kind": "get",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 7557,
                        "end": 7663
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
                          "start": 7680,
                          "end": 7695
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
                                      "start": 7727,
                                      "end": 7740
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 7741,
                                      "end": 7752
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 7727,
                                    "end": 7752
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 7723,
                                  "end": 7754
                                },
                                "start": 7716,
                                "end": 7755
                              }
                            ],
                            "start": 7698,
                            "end": 7769
                          },
                          "expression": false,
                          "start": 7695,
                          "end": 7769
                        },
                        "kind": "get",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 7676,
                        "end": 7769
                      }
                    ],
                    "start": 7320,
                    "end": 7779
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 7268,
                  "end": 7779
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
                    "start": 7795,
                    "end": 7840
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
                          "start": 7866,
                          "end": 7886
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
                                      "start": 7894,
                                      "end": 7907
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 7908,
                                      "end": 7919
                                    },
                                    "start": 7894,
                                    "end": 7919
                                  },
                                  "typeArguments": null,
                                  "start": 7894,
                                  "end": 7919
                                },
                                "start": 7892,
                                "end": 7919
                              },
                              "start": 7887,
                              "end": 7919
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 7921,
                            "end": 7936
                          },
                          "expression": false,
                          "start": 7886,
                          "end": 7936
                        },
                        "kind": "set",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 7855,
                        "end": 7936
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
                          "start": 7953,
                          "end": 7967
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
                                      "start": 7975,
                                      "end": 7988
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 7989,
                                      "end": 8000
                                    },
                                    "start": 7975,
                                    "end": 8000
                                  },
                                  "typeArguments": null,
                                  "start": 7975,
                                  "end": 8000
                                },
                                "start": 7973,
                                "end": 8000
                              },
                              "start": 7968,
                              "end": 8000
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 8002,
                            "end": 8017
                          },
                          "expression": false,
                          "start": 7967,
                          "end": 8017
                        },
                        "kind": "set",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 7949,
                        "end": 8017
                      }
                    ],
                    "start": 7841,
                    "end": 8027
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 7789,
                  "end": 8027
                }
              ],
              "start": 1252,
              "end": 8033
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 1228,
            "end": 8033
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
                "start": 8052,
                "end": 8094
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
                      "start": 8116,
                      "end": 8136
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
                            "start": 8140,
                            "end": 8152
                          },
                          "typeArguments": null,
                          "start": 8140,
                          "end": 8152
                        },
                        "start": 8138,
                        "end": 8152
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
                              "start": 8183,
                              "end": 8187
                            },
                            "start": 8176,
                            "end": 8188
                          }
                        ],
                        "start": 8153,
                        "end": 8198
                      },
                      "expression": false,
                      "start": 8136,
                      "end": 8198
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8105,
                    "end": 8198
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
                      "start": 8226,
                      "end": 8247
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
                            "start": 8251,
                            "end": 8263
                          },
                          "typeArguments": null,
                          "start": 8251,
                          "end": 8263
                        },
                        "start": 8249,
                        "end": 8263
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
                              "start": 8285,
                              "end": 8289
                            },
                            "start": 8278,
                            "end": 8290
                          }
                        ],
                        "start": 8264,
                        "end": 8300
                      },
                      "expression": false,
                      "start": 8247,
                      "end": 8300
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 8207,
                    "end": 8300
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
                      "start": 8313,
                      "end": 8327
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
                            "start": 8331,
                            "end": 8343
                          },
                          "typeArguments": null,
                          "start": 8331,
                          "end": 8343
                        },
                        "start": 8329,
                        "end": 8343
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
                              "start": 8374,
                              "end": 8378
                            },
                            "start": 8367,
                            "end": 8379
                          }
                        ],
                        "start": 8344,
                        "end": 8389
                      },
                      "expression": false,
                      "start": 8327,
                      "end": 8389
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8309,
                    "end": 8389
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
                      "start": 8410,
                      "end": 8425
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
                            "start": 8429,
                            "end": 8441
                          },
                          "typeArguments": null,
                          "start": 8429,
                          "end": 8441
                        },
                        "start": 8427,
                        "end": 8441
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
                              "start": 8463,
                              "end": 8467
                            },
                            "start": 8456,
                            "end": 8468
                          }
                        ],
                        "start": 8442,
                        "end": 8478
                      },
                      "expression": false,
                      "start": 8425,
                      "end": 8478
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 8398,
                    "end": 8478
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
                      "start": 8498,
                      "end": 8519
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
                                "start": 8556,
                                "end": 8568
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 8552,
                              "end": 8570
                            },
                            "start": 8545,
                            "end": 8571
                          }
                        ],
                        "start": 8522,
                        "end": 8581
                      },
                      "expression": false,
                      "start": 8519,
                      "end": 8581
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8487,
                    "end": 8581
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
                      "start": 8609,
                      "end": 8631
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
                                "start": 8659,
                                "end": 8671
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 8655,
                              "end": 8673
                            },
                            "start": 8648,
                            "end": 8674
                          }
                        ],
                        "start": 8634,
                        "end": 8684
                      },
                      "expression": false,
                      "start": 8631,
                      "end": 8684
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 8590,
                    "end": 8684
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
                      "start": 8697,
                      "end": 8712
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
                                "start": 8749,
                                "end": 8761
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 8745,
                              "end": 8763
                            },
                            "start": 8738,
                            "end": 8764
                          }
                        ],
                        "start": 8715,
                        "end": 8774
                      },
                      "expression": false,
                      "start": 8712,
                      "end": 8774
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8693,
                    "end": 8774
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
                      "start": 8795,
                      "end": 8811
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
                                "start": 8839,
                                "end": 8851
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 8835,
                              "end": 8853
                            },
                            "start": 8828,
                            "end": 8854
                          }
                        ],
                        "start": 8814,
                        "end": 8864
                      },
                      "expression": false,
                      "start": 8811,
                      "end": 8864
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 8783,
                    "end": 8864
                  }
                ],
                "start": 8095,
                "end": 8870
              },
              "abstract": false,
              "declare": false,
              "start": 8046,
              "end": 8870
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 8039,
            "end": 8870
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
                "start": 8889,
                "end": 8930
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
                      "start": 8952,
                      "end": 8972
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
                            "start": 8976,
                            "end": 8987
                          },
                          "typeArguments": null,
                          "start": 8976,
                          "end": 8987
                        },
                        "start": 8974,
                        "end": 8987
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
                              "start": 9009,
                              "end": 9013
                            },
                            "start": 9002,
                            "end": 9014
                          }
                        ],
                        "start": 8988,
                        "end": 9024
                      },
                      "expression": false,
                      "start": 8972,
                      "end": 9024
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8941,
                    "end": 9024
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
                      "start": 9052,
                      "end": 9073
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
                            "start": 9077,
                            "end": 9088
                          },
                          "typeArguments": null,
                          "start": 9077,
                          "end": 9088
                        },
                        "start": 9075,
                        "end": 9088
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
                              "start": 9110,
                              "end": 9114
                            },
                            "start": 9103,
                            "end": 9115
                          }
                        ],
                        "start": 9089,
                        "end": 9125
                      },
                      "expression": false,
                      "start": 9073,
                      "end": 9125
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 9033,
                    "end": 9125
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
                      "start": 9138,
                      "end": 9152
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
                            "start": 9156,
                            "end": 9167
                          },
                          "typeArguments": null,
                          "start": 9156,
                          "end": 9167
                        },
                        "start": 9154,
                        "end": 9167
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
                              "start": 9189,
                              "end": 9193
                            },
                            "start": 9182,
                            "end": 9194
                          }
                        ],
                        "start": 9168,
                        "end": 9204
                      },
                      "expression": false,
                      "start": 9152,
                      "end": 9204
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9134,
                    "end": 9204
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
                      "start": 9225,
                      "end": 9240
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
                            "start": 9244,
                            "end": 9255
                          },
                          "typeArguments": null,
                          "start": 9244,
                          "end": 9255
                        },
                        "start": 9242,
                        "end": 9255
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
                              "start": 9277,
                              "end": 9281
                            },
                            "start": 9270,
                            "end": 9282
                          }
                        ],
                        "start": 9256,
                        "end": 9292
                      },
                      "expression": false,
                      "start": 9240,
                      "end": 9292
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 9213,
                    "end": 9292
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
                      "start": 9312,
                      "end": 9333
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
                                "start": 9361,
                                "end": 9372
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 9357,
                              "end": 9374
                            },
                            "start": 9350,
                            "end": 9375
                          }
                        ],
                        "start": 9336,
                        "end": 9385
                      },
                      "expression": false,
                      "start": 9333,
                      "end": 9385
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9301,
                    "end": 9385
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
                      "start": 9413,
                      "end": 9435
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
                                "start": 9463,
                                "end": 9474
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 9459,
                              "end": 9476
                            },
                            "start": 9452,
                            "end": 9477
                          }
                        ],
                        "start": 9438,
                        "end": 9487
                      },
                      "expression": false,
                      "start": 9435,
                      "end": 9487
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 9394,
                    "end": 9487
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
                      "start": 9500,
                      "end": 9515
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
                                "start": 9543,
                                "end": 9554
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 9539,
                              "end": 9556
                            },
                            "start": 9532,
                            "end": 9557
                          }
                        ],
                        "start": 9518,
                        "end": 9567
                      },
                      "expression": false,
                      "start": 9515,
                      "end": 9567
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9496,
                    "end": 9567
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
                      "start": 9588,
                      "end": 9604
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
                                "start": 9632,
                                "end": 9643
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 9628,
                              "end": 9645
                            },
                            "start": 9621,
                            "end": 9646
                          }
                        ],
                        "start": 9607,
                        "end": 9656
                      },
                      "expression": false,
                      "start": 9604,
                      "end": 9656
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 9576,
                    "end": 9656
                  }
                ],
                "start": 8931,
                "end": 9662
              },
              "abstract": false,
              "declare": false,
              "start": 8883,
              "end": 9662
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 8876,
            "end": 9662
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
              "start": 9674,
              "end": 9717
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
                    "start": 9739,
                    "end": 9759
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
                          "start": 9763,
                          "end": 9775
                        },
                        "typeArguments": null,
                        "start": 9763,
                        "end": 9775
                      },
                      "start": 9761,
                      "end": 9775
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
                            "start": 9797,
                            "end": 9801
                          },
                          "start": 9790,
                          "end": 9802
                        }
                      ],
                      "start": 9776,
                      "end": 9812
                    },
                    "expression": false,
                    "start": 9759,
                    "end": 9812
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 9728,
                  "end": 9812
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
                    "start": 9840,
                    "end": 9861
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
                          "start": 9865,
                          "end": 9877
                        },
                        "typeArguments": null,
                        "start": 9865,
                        "end": 9877
                      },
                      "start": 9863,
                      "end": 9877
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
                            "start": 9899,
                            "end": 9903
                          },
                          "start": 9892,
                          "end": 9904
                        }
                      ],
                      "start": 9878,
                      "end": 9914
                    },
                    "expression": false,
                    "start": 9861,
                    "end": 9914
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 9821,
                  "end": 9914
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
                    "start": 9927,
                    "end": 9941
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
                          "start": 9945,
                          "end": 9957
                        },
                        "typeArguments": null,
                        "start": 9945,
                        "end": 9957
                      },
                      "start": 9943,
                      "end": 9957
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
                            "start": 9979,
                            "end": 9983
                          },
                          "start": 9972,
                          "end": 9984
                        }
                      ],
                      "start": 9958,
                      "end": 9994
                    },
                    "expression": false,
                    "start": 9941,
                    "end": 9994
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 9923,
                  "end": 9994
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
                    "start": 10015,
                    "end": 10030
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
                          "start": 10034,
                          "end": 10046
                        },
                        "typeArguments": null,
                        "start": 10034,
                        "end": 10046
                      },
                      "start": 10032,
                      "end": 10046
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
                            "start": 10068,
                            "end": 10072
                          },
                          "start": 10061,
                          "end": 10073
                        }
                      ],
                      "start": 10047,
                      "end": 10083
                    },
                    "expression": false,
                    "start": 10030,
                    "end": 10083
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 10003,
                  "end": 10083
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
                    "start": 10103,
                    "end": 10124
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
                              "start": 10152,
                              "end": 10164
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 10148,
                            "end": 10166
                          },
                          "start": 10141,
                          "end": 10167
                        }
                      ],
                      "start": 10127,
                      "end": 10177
                    },
                    "expression": false,
                    "start": 10124,
                    "end": 10177
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 10092,
                  "end": 10177
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
                    "start": 10205,
                    "end": 10227
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
                              "start": 10255,
                              "end": 10267
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 10251,
                            "end": 10269
                          },
                          "start": 10244,
                          "end": 10270
                        }
                      ],
                      "start": 10230,
                      "end": 10280
                    },
                    "expression": false,
                    "start": 10227,
                    "end": 10280
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 10186,
                  "end": 10280
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
                    "start": 10293,
                    "end": 10308
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
                              "start": 10336,
                              "end": 10348
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 10332,
                            "end": 10350
                          },
                          "start": 10325,
                          "end": 10351
                        }
                      ],
                      "start": 10311,
                      "end": 10361
                    },
                    "expression": false,
                    "start": 10308,
                    "end": 10361
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 10289,
                  "end": 10361
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
                    "start": 10382,
                    "end": 10398
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
                              "start": 10426,
                              "end": 10438
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 10422,
                            "end": 10440
                          },
                          "start": 10415,
                          "end": 10441
                        }
                      ],
                      "start": 10401,
                      "end": 10451
                    },
                    "expression": false,
                    "start": 10398,
                    "end": 10451
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 10370,
                  "end": 10451
                }
              ],
              "start": 9718,
              "end": 10457
            },
            "abstract": false,
            "declare": false,
            "start": 9668,
            "end": 10457
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
              "start": 10469,
              "end": 10511
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
                    "start": 10533,
                    "end": 10553
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
                          "start": 10557,
                          "end": 10568
                        },
                        "typeArguments": null,
                        "start": 10557,
                        "end": 10568
                      },
                      "start": 10555,
                      "end": 10568
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
                            "start": 10590,
                            "end": 10594
                          },
                          "start": 10583,
                          "end": 10595
                        }
                      ],
                      "start": 10569,
                      "end": 10605
                    },
                    "expression": false,
                    "start": 10553,
                    "end": 10605
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 10522,
                  "end": 10605
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
                    "start": 10633,
                    "end": 10654
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
                          "start": 10658,
                          "end": 10669
                        },
                        "typeArguments": null,
                        "start": 10658,
                        "end": 10669
                      },
                      "start": 10656,
                      "end": 10669
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
                            "start": 10691,
                            "end": 10695
                          },
                          "start": 10684,
                          "end": 10696
                        }
                      ],
                      "start": 10670,
                      "end": 10706
                    },
                    "expression": false,
                    "start": 10654,
                    "end": 10706
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 10614,
                  "end": 10706
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
                    "start": 10719,
                    "end": 10733
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
                          "start": 10737,
                          "end": 10748
                        },
                        "typeArguments": null,
                        "start": 10737,
                        "end": 10748
                      },
                      "start": 10735,
                      "end": 10748
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
                            "start": 10770,
                            "end": 10774
                          },
                          "start": 10763,
                          "end": 10775
                        }
                      ],
                      "start": 10749,
                      "end": 10785
                    },
                    "expression": false,
                    "start": 10733,
                    "end": 10785
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 10715,
                  "end": 10785
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
                    "start": 10806,
                    "end": 10821
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
                          "start": 10825,
                          "end": 10836
                        },
                        "typeArguments": null,
                        "start": 10825,
                        "end": 10836
                      },
                      "start": 10823,
                      "end": 10836
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
                            "start": 10858,
                            "end": 10862
                          },
                          "start": 10851,
                          "end": 10863
                        }
                      ],
                      "start": 10837,
                      "end": 10873
                    },
                    "expression": false,
                    "start": 10821,
                    "end": 10873
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 10794,
                  "end": 10873
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
                    "start": 10893,
                    "end": 10914
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
                              "start": 10942,
                              "end": 10953
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 10938,
                            "end": 10955
                          },
                          "start": 10931,
                          "end": 10956
                        }
                      ],
                      "start": 10917,
                      "end": 10966
                    },
                    "expression": false,
                    "start": 10914,
                    "end": 10966
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 10882,
                  "end": 10966
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
                    "start": 10994,
                    "end": 11016
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
                              "start": 11044,
                              "end": 11055
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 11040,
                            "end": 11057
                          },
                          "start": 11033,
                          "end": 11058
                        }
                      ],
                      "start": 11019,
                      "end": 11068
                    },
                    "expression": false,
                    "start": 11016,
                    "end": 11068
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 10975,
                  "end": 11068
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
                    "start": 11081,
                    "end": 11096
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
                              "start": 11124,
                              "end": 11135
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 11120,
                            "end": 11137
                          },
                          "start": 11113,
                          "end": 11138
                        }
                      ],
                      "start": 11099,
                      "end": 11148
                    },
                    "expression": false,
                    "start": 11096,
                    "end": 11148
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 11077,
                  "end": 11148
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
                    "start": 11169,
                    "end": 11185
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
                              "start": 11213,
                              "end": 11224
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 11209,
                            "end": 11226
                          },
                          "start": 11202,
                          "end": 11227
                        }
                      ],
                      "start": 11188,
                      "end": 11237
                    },
                    "expression": false,
                    "start": 11185,
                    "end": 11237
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 11157,
                  "end": 11237
                }
              ],
              "start": 10512,
              "end": 11243
            },
            "abstract": false,
            "declare": false,
            "start": 10463,
            "end": 11243
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
                "start": 11262,
                "end": 11304
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
                      "start": 11326,
                      "end": 11346
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
                                "start": 11354,
                                "end": 11366
                              },
                              "typeArguments": null,
                              "start": 11354,
                              "end": 11366
                            },
                            "start": 11352,
                            "end": 11366
                          },
                          "start": 11347,
                          "end": 11366
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11368,
                        "end": 11388
                      },
                      "expression": false,
                      "start": 11346,
                      "end": 11388
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11315,
                    "end": 11388
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
                      "start": 11416,
                      "end": 11437
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
                                "start": 11445,
                                "end": 11457
                              },
                              "typeArguments": null,
                              "start": 11445,
                              "end": 11457
                            },
                            "start": 11443,
                            "end": 11457
                          },
                          "start": 11438,
                          "end": 11457
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11459,
                        "end": 11470
                      },
                      "expression": false,
                      "start": 11437,
                      "end": 11470
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11397,
                    "end": 11470
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
                      "start": 11483,
                      "end": 11497
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
                                "start": 11505,
                                "end": 11517
                              },
                              "typeArguments": null,
                              "start": 11505,
                              "end": 11517
                            },
                            "start": 11503,
                            "end": 11517
                          },
                          "start": 11498,
                          "end": 11517
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11519,
                        "end": 11539
                      },
                      "expression": false,
                      "start": 11497,
                      "end": 11539
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11479,
                    "end": 11539
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
                      "start": 11560,
                      "end": 11575
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
                                "start": 11583,
                                "end": 11595
                              },
                              "typeArguments": null,
                              "start": 11583,
                              "end": 11595
                            },
                            "start": 11581,
                            "end": 11595
                          },
                          "start": 11576,
                          "end": 11595
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11597,
                        "end": 11608
                      },
                      "expression": false,
                      "start": 11575,
                      "end": 11608
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11548,
                    "end": 11608
                  }
                ],
                "start": 11305,
                "end": 11614
              },
              "abstract": false,
              "declare": false,
              "start": 11256,
              "end": 11614
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 11249,
            "end": 11614
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
                "start": 11633,
                "end": 11674
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
                      "start": 11696,
                      "end": 11716
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
                                "start": 11724,
                                "end": 11735
                              },
                              "typeArguments": null,
                              "start": 11724,
                              "end": 11735
                            },
                            "start": 11722,
                            "end": 11735
                          },
                          "start": 11717,
                          "end": 11735
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11737,
                        "end": 11748
                      },
                      "expression": false,
                      "start": 11716,
                      "end": 11748
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11685,
                    "end": 11748
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
                      "start": 11776,
                      "end": 11797
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
                                "start": 11805,
                                "end": 11816
                              },
                              "typeArguments": null,
                              "start": 11805,
                              "end": 11816
                            },
                            "start": 11803,
                            "end": 11816
                          },
                          "start": 11798,
                          "end": 11816
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11818,
                        "end": 11829
                      },
                      "expression": false,
                      "start": 11797,
                      "end": 11829
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11757,
                    "end": 11829
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
                      "start": 11842,
                      "end": 11856
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
                                "start": 11864,
                                "end": 11875
                              },
                              "typeArguments": null,
                              "start": 11864,
                              "end": 11875
                            },
                            "start": 11862,
                            "end": 11875
                          },
                          "start": 11857,
                          "end": 11875
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11877,
                        "end": 11888
                      },
                      "expression": false,
                      "start": 11856,
                      "end": 11888
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11838,
                    "end": 11888
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
                      "start": 11909,
                      "end": 11924
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
                                "start": 11932,
                                "end": 11943
                              },
                              "typeArguments": null,
                              "start": 11932,
                              "end": 11943
                            },
                            "start": 11930,
                            "end": 11943
                          },
                          "start": 11925,
                          "end": 11943
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11945,
                        "end": 11956
                      },
                      "expression": false,
                      "start": 11924,
                      "end": 11956
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11897,
                    "end": 11956
                  }
                ],
                "start": 11675,
                "end": 11962
              },
              "abstract": false,
              "declare": false,
              "start": 11627,
              "end": 11962
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 11620,
            "end": 11962
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
              "start": 11974,
              "end": 12017
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
                    "start": 12039,
                    "end": 12059
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
                              "start": 12067,
                              "end": 12079
                            },
                            "typeArguments": null,
                            "start": 12067,
                            "end": 12079
                          },
                          "start": 12065,
                          "end": 12079
                        },
                        "start": 12060,
                        "end": 12079
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12081,
                      "end": 12092
                    },
                    "expression": false,
                    "start": 12059,
                    "end": 12092
                  },
                  "kind": "set",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 12028,
                  "end": 12092
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
                    "start": 12120,
                    "end": 12141
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
                              "start": 12149,
                              "end": 12161
                            },
                            "typeArguments": null,
                            "start": 12149,
                            "end": 12161
                          },
                          "start": 12147,
                          "end": 12161
                        },
                        "start": 12142,
                        "end": 12161
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12163,
                      "end": 12174
                    },
                    "expression": false,
                    "start": 12141,
                    "end": 12174
                  },
                  "kind": "set",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 12101,
                  "end": 12174
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
                    "start": 12187,
                    "end": 12201
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
                              "start": 12209,
                              "end": 12221
                            },
                            "typeArguments": null,
                            "start": 12209,
                            "end": 12221
                          },
                          "start": 12207,
                          "end": 12221
                        },
                        "start": 12202,
                        "end": 12221
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12223,
                      "end": 12234
                    },
                    "expression": false,
                    "start": 12201,
                    "end": 12234
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 12183,
                  "end": 12234
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
                    "start": 12255,
                    "end": 12270
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
                              "start": 12278,
                              "end": 12290
                            },
                            "typeArguments": null,
                            "start": 12278,
                            "end": 12290
                          },
                          "start": 12276,
                          "end": 12290
                        },
                        "start": 12271,
                        "end": 12290
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12292,
                      "end": 12303
                    },
                    "expression": false,
                    "start": 12270,
                    "end": 12303
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 12243,
                  "end": 12303
                }
              ],
              "start": 12018,
              "end": 12309
            },
            "abstract": false,
            "declare": false,
            "start": 11968,
            "end": 12309
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
              "start": 12321,
              "end": 12363
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
                    "start": 12385,
                    "end": 12405
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
                              "start": 12413,
                              "end": 12424
                            },
                            "typeArguments": null,
                            "start": 12413,
                            "end": 12424
                          },
                          "start": 12411,
                          "end": 12424
                        },
                        "start": 12406,
                        "end": 12424
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12426,
                      "end": 12437
                    },
                    "expression": false,
                    "start": 12405,
                    "end": 12437
                  },
                  "kind": "set",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 12374,
                  "end": 12437
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
                    "start": 12465,
                    "end": 12486
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
                              "start": 12494,
                              "end": 12505
                            },
                            "typeArguments": null,
                            "start": 12494,
                            "end": 12505
                          },
                          "start": 12492,
                          "end": 12505
                        },
                        "start": 12487,
                        "end": 12505
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12507,
                      "end": 12518
                    },
                    "expression": false,
                    "start": 12486,
                    "end": 12518
                  },
                  "kind": "set",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 12446,
                  "end": 12518
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
                    "start": 12531,
                    "end": 12545
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
                              "start": 12553,
                              "end": 12564
                            },
                            "typeArguments": null,
                            "start": 12553,
                            "end": 12564
                          },
                          "start": 12551,
                          "end": 12564
                        },
                        "start": 12546,
                        "end": 12564
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12566,
                      "end": 12577
                    },
                    "expression": false,
                    "start": 12545,
                    "end": 12577
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 12527,
                  "end": 12577
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
                    "start": 12598,
                    "end": 12613
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
                              "start": 12621,
                              "end": 12632
                            },
                            "typeArguments": null,
                            "start": 12621,
                            "end": 12632
                          },
                          "start": 12619,
                          "end": 12632
                        },
                        "start": 12614,
                        "end": 12632
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12634,
                      "end": 12645
                    },
                    "expression": false,
                    "start": 12613,
                    "end": 12645
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 12586,
                  "end": 12645
                }
              ],
              "start": 12364,
              "end": 12651
            },
            "abstract": false,
            "declare": false,
            "start": 12315,
            "end": 12651
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
                "start": 12670,
                "end": 12714
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
                      "start": 12736,
                      "end": 12756
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
                              "start": 12760,
                              "end": 12773
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12774,
                              "end": 12785
                            },
                            "start": 12760,
                            "end": 12785
                          },
                          "typeArguments": null,
                          "start": 12760,
                          "end": 12785
                        },
                        "start": 12758,
                        "end": 12785
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
                              "start": 12816,
                              "end": 12820
                            },
                            "start": 12809,
                            "end": 12821
                          }
                        ],
                        "start": 12786,
                        "end": 12831
                      },
                      "expression": false,
                      "start": 12756,
                      "end": 12831
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 12725,
                    "end": 12831
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
                      "start": 12844,
                      "end": 12858
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
                              "start": 12862,
                              "end": 12875
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12876,
                              "end": 12887
                            },
                            "start": 12862,
                            "end": 12887
                          },
                          "typeArguments": null,
                          "start": 12862,
                          "end": 12887
                        },
                        "start": 12860,
                        "end": 12887
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
                              "start": 12918,
                              "end": 12922
                            },
                            "start": 12911,
                            "end": 12923
                          }
                        ],
                        "start": 12888,
                        "end": 12933
                      },
                      "expression": false,
                      "start": 12858,
                      "end": 12933
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 12840,
                    "end": 12933
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
                      "start": 12953,
                      "end": 12974
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
                                  "start": 13011,
                                  "end": 13024
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13025,
                                  "end": 13036
                                },
                                "optional": false,
                                "computed": false,
                                "start": 13011,
                                "end": 13036
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 13007,
                              "end": 13038
                            },
                            "start": 13000,
                            "end": 13039
                          }
                        ],
                        "start": 12977,
                        "end": 13049
                      },
                      "expression": false,
                      "start": 12974,
                      "end": 13049
                    },
                    "kind": "get",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 12942,
                    "end": 13049
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
                      "start": 13062,
                      "end": 13077
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
                                  "start": 13114,
                                  "end": 13127
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13128,
                                  "end": 13139
                                },
                                "optional": false,
                                "computed": false,
                                "start": 13114,
                                "end": 13139
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 13110,
                              "end": 13141
                            },
                            "start": 13103,
                            "end": 13142
                          }
                        ],
                        "start": 13080,
                        "end": 13152
                      },
                      "expression": false,
                      "start": 13077,
                      "end": 13152
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 13058,
                    "end": 13152
                  }
                ],
                "start": 12715,
                "end": 13158
              },
              "abstract": false,
              "declare": false,
              "start": 12664,
              "end": 13158
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 12657,
            "end": 13158
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
                "start": 13177,
                "end": 13221
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
                      "start": 13243,
                      "end": 13263
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
                                  "start": 13271,
                                  "end": 13284
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13285,
                                  "end": 13296
                                },
                                "start": 13271,
                                "end": 13296
                              },
                              "typeArguments": null,
                              "start": 13271,
                              "end": 13296
                            },
                            "start": 13269,
                            "end": 13296
                          },
                          "start": 13264,
                          "end": 13296
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 13298,
                        "end": 13318
                      },
                      "expression": false,
                      "start": 13263,
                      "end": 13318
                    },
                    "kind": "set",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 13232,
                    "end": 13318
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
                      "start": 13331,
                      "end": 13345
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
                                  "start": 13353,
                                  "end": 13366
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 13367,
                                  "end": 13378
                                },
                                "start": 13353,
                                "end": 13378
                              },
                              "typeArguments": null,
                              "start": 13353,
                              "end": 13378
                            },
                            "start": 13351,
                            "end": 13378
                          },
                          "start": 13346,
                          "end": 13378
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 13380,
                        "end": 13400
                      },
                      "expression": false,
                      "start": 13345,
                      "end": 13400
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 13327,
                    "end": 13400
                  }
                ],
                "start": 13222,
                "end": 13406
              },
              "abstract": false,
              "declare": false,
              "start": 13171,
              "end": 13406
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 13164,
            "end": 13406
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
              "start": 13418,
              "end": 13463
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
                    "start": 13485,
                    "end": 13505
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
                            "start": 13509,
                            "end": 13522
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13523,
                            "end": 13534
                          },
                          "start": 13509,
                          "end": 13534
                        },
                        "typeArguments": null,
                        "start": 13509,
                        "end": 13534
                      },
                      "start": 13507,
                      "end": 13534
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
                            "start": 13556,
                            "end": 13560
                          },
                          "start": 13549,
                          "end": 13561
                        }
                      ],
                      "start": 13535,
                      "end": 13571
                    },
                    "expression": false,
                    "start": 13505,
                    "end": 13571
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 13474,
                  "end": 13571
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
                    "start": 13584,
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
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13602,
                            "end": 13615
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 13616,
                            "end": 13627
                          },
                          "start": 13602,
                          "end": 13627
                        },
                        "typeArguments": null,
                        "start": 13602,
                        "end": 13627
                      },
                      "start": 13600,
                      "end": 13627
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
                            "start": 13649,
                            "end": 13653
                          },
                          "start": 13642,
                          "end": 13654
                        }
                      ],
                      "start": 13628,
                      "end": 13664
                    },
                    "expression": false,
                    "start": 13598,
                    "end": 13664
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 13580,
                  "end": 13664
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
                    "start": 13684,
                    "end": 13705
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
                                "start": 13733,
                                "end": 13746
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13747,
                                "end": 13758
                              },
                              "optional": false,
                              "computed": false,
                              "start": 13733,
                              "end": 13758
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 13729,
                            "end": 13760
                          },
                          "start": 13722,
                          "end": 13761
                        }
                      ],
                      "start": 13708,
                      "end": 13771
                    },
                    "expression": false,
                    "start": 13705,
                    "end": 13771
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 13673,
                  "end": 13771
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
                    "start": 13784,
                    "end": 13799
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
                                "start": 13827,
                                "end": 13840
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13841,
                                "end": 13852
                              },
                              "optional": false,
                              "computed": false,
                              "start": 13827,
                              "end": 13852
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 13823,
                            "end": 13854
                          },
                          "start": 13816,
                          "end": 13855
                        }
                      ],
                      "start": 13802,
                      "end": 13865
                    },
                    "expression": false,
                    "start": 13799,
                    "end": 13865
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 13780,
                  "end": 13865
                }
              ],
              "start": 13464,
              "end": 13871
            },
            "abstract": false,
            "declare": false,
            "start": 13412,
            "end": 13871
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
              "start": 13883,
              "end": 13928
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
                    "start": 13950,
                    "end": 13970
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
                                "start": 13978,
                                "end": 13991
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 13992,
                                "end": 14003
                              },
                              "start": 13978,
                              "end": 14003
                            },
                            "typeArguments": null,
                            "start": 13978,
                            "end": 14003
                          },
                          "start": 13976,
                          "end": 14003
                        },
                        "start": 13971,
                        "end": 14003
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 14005,
                      "end": 14016
                    },
                    "expression": false,
                    "start": 13970,
                    "end": 14016
                  },
                  "kind": "set",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 13939,
                  "end": 14016
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
                    "start": 14029,
                    "end": 14043
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
                                "start": 14051,
                                "end": 14064
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 14065,
                                "end": 14076
                              },
                              "start": 14051,
                              "end": 14076
                            },
                            "typeArguments": null,
                            "start": 14051,
                            "end": 14076
                          },
                          "start": 14049,
                          "end": 14076
                        },
                        "start": 14044,
                        "end": 14076
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 14078,
                      "end": 14089
                    },
                    "expression": false,
                    "start": 14043,
                    "end": 14089
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 14025,
                  "end": 14089
                }
              ],
              "start": 13929,
              "end": 14095
            },
            "abstract": false,
            "declare": false,
            "start": 13877,
            "end": 14095
          }
        ],
        "start": 1152,
        "end": 14097
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1121,
      "end": 14097
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 14097
}
```
