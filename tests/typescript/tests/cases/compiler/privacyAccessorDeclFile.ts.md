__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 17602,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 22,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 22,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 18,
        "decorators": [],
        "name": "privateClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 52,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 31,
        "end": 52,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 49,
          "end": 52,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 37,
          "end": 48,
          "decorators": [],
          "name": "publicClass",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 54,
      "end": 785,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 61,
        "end": 785,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 110,
          "end": 785,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 116,
              "end": 201,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 127,
                "end": 147,
                "decorators": [],
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 147,
                "end": 201,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 164,
                  "end": 201,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 183,
                      "end": 195,
                      "argument": {
                        "type": "Literal",
                        "start": 190,
                        "end": 194,
                        "raw": "null",
                        "value": null
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
                  "start": 149,
                  "end": 163,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 151,
                    "end": 163,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 163,
                      "decorators": [],
                      "name": "privateClass",
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
              "start": 206,
              "end": 291,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 225,
                "end": 246,
                "decorators": [],
                "name": "myPrivateStaticMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 246,
                "end": 291,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 263,
                  "end": 291,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 273,
                      "end": 285,
                      "argument": {
                        "type": "Literal",
                        "start": 280,
                        "end": 284,
                        "raw": "null",
                        "value": null
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
                  "start": 248,
                  "end": 262,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 250,
                    "end": 262,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 250,
                      "end": 262,
                      "decorators": [],
                      "name": "privateClass",
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
              "start": 296,
              "end": 368,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 300,
                "end": 314,
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 314,
                "end": 368,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 331,
                  "end": 368,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 350,
                      "end": 362,
                      "argument": {
                        "type": "Literal",
                        "start": 357,
                        "end": 361,
                        "raw": "null",
                        "value": null
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
                  "start": 316,
                  "end": 330,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 318,
                    "end": 330,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 318,
                      "end": 330,
                      "decorators": [],
                      "name": "privateClass",
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
              "start": 373,
              "end": 445,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 385,
                "end": 400,
                "decorators": [],
                "name": "myPrivateMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 400,
                "end": 445,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 417,
                  "end": 445,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 427,
                      "end": 439,
                      "argument": {
                        "type": "Literal",
                        "start": 434,
                        "end": 438,
                        "raw": "null",
                        "value": null
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
                  "start": 402,
                  "end": 416,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 404,
                    "end": 416,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 416,
                      "decorators": [],
                      "name": "privateClass",
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
              "start": 450,
              "end": 536,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 461,
                "end": 482,
                "decorators": [],
                "name": "myPublicStaticMethod1",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 482,
                "end": 536,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 485,
                  "end": 536,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 504,
                      "end": 530,
                      "argument": {
                        "type": "NewExpression",
                        "start": 511,
                        "end": 529,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 515,
                          "end": 527,
                          "decorators": [],
                          "name": "privateClass",
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
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 541,
              "end": 627,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 560,
                "end": 582,
                "decorators": [],
                "name": "myPrivateStaticMethod1",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 582,
                "end": 627,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 585,
                  "end": 627,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 595,
                      "end": 621,
                      "argument": {
                        "type": "NewExpression",
                        "start": 602,
                        "end": 620,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 606,
                          "end": 618,
                          "decorators": [],
                          "name": "privateClass",
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
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 632,
              "end": 705,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 636,
                "end": 651,
                "decorators": [],
                "name": "myPublicMethod1",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 651,
                "end": 705,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 654,
                  "end": 705,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 673,
                      "end": 699,
                      "argument": {
                        "type": "NewExpression",
                        "start": 680,
                        "end": 698,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 684,
                          "end": 696,
                          "decorators": [],
                          "name": "privateClass",
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
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 710,
              "end": 783,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 722,
                "end": 738,
                "decorators": [],
                "name": "myPrivateMethod1",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 738,
                "end": 783,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 741,
                  "end": 783,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 751,
                      "end": 777,
                      "argument": {
                        "type": "NewExpression",
                        "start": 758,
                        "end": 776,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 762,
                          "end": 774,
                          "decorators": [],
                          "name": "privateClass",
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
          "start": 67,
          "end": 109,
          "decorators": [],
          "name": "publicClassWithWithPrivateGetAccessorTypes",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 787,
      "end": 1473,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 794,
        "end": 1473,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 842,
          "end": 1473,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 848,
              "end": 923,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 859,
                "end": 879,
                "decorators": [],
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 879,
                "end": 923,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 895,
                  "end": 923,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 905,
                      "end": 917,
                      "argument": {
                        "type": "Literal",
                        "start": 912,
                        "end": 916,
                        "raw": "null",
                        "value": null
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
                  "start": 881,
                  "end": 894,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 883,
                    "end": 894,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 883,
                      "end": 894,
                      "decorators": [],
                      "name": "publicClass",
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
              "start": 928,
              "end": 1012,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 947,
                "end": 968,
                "decorators": [],
                "name": "myPrivateStaticMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 968,
                "end": 1012,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 984,
                  "end": 1012,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 994,
                      "end": 1006,
                      "argument": {
                        "type": "Literal",
                        "start": 1001,
                        "end": 1005,
                        "raw": "null",
                        "value": null
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
                  "start": 970,
                  "end": 983,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 972,
                    "end": 983,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 972,
                      "end": 983,
                      "decorators": [],
                      "name": "publicClass",
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
              "start": 1017,
              "end": 1079,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1021,
                "end": 1035,
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1035,
                "end": 1079,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1051,
                  "end": 1079,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1061,
                      "end": 1073,
                      "argument": {
                        "type": "Literal",
                        "start": 1068,
                        "end": 1072,
                        "raw": "null",
                        "value": null
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
                  "start": 1037,
                  "end": 1050,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1039,
                    "end": 1050,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1039,
                      "end": 1050,
                      "decorators": [],
                      "name": "publicClass",
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
              "start": 1084,
              "end": 1155,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1096,
                "end": 1111,
                "decorators": [],
                "name": "myPrivateMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1111,
                "end": 1155,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1127,
                  "end": 1155,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1137,
                      "end": 1149,
                      "argument": {
                        "type": "Literal",
                        "start": 1144,
                        "end": 1148,
                        "raw": "null",
                        "value": null
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
                  "start": 1113,
                  "end": 1126,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1115,
                    "end": 1126,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1115,
                      "end": 1126,
                      "decorators": [],
                      "name": "publicClass",
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
              "start": 1160,
              "end": 1236,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1171,
                "end": 1192,
                "decorators": [],
                "name": "myPublicStaticMethod1",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 1192,
                "end": 1236,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1195,
                  "end": 1236,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1205,
                      "end": 1230,
                      "argument": {
                        "type": "NewExpression",
                        "start": 1212,
                        "end": 1229,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 1216,
                          "end": 1227,
                          "decorators": [],
                          "name": "publicClass",
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
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1241,
              "end": 1326,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1260,
                "end": 1282,
                "decorators": [],
                "name": "myPrivateStaticMethod1",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 1282,
                "end": 1326,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1285,
                  "end": 1326,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1295,
                      "end": 1320,
                      "argument": {
                        "type": "NewExpression",
                        "start": 1302,
                        "end": 1319,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 1306,
                          "end": 1317,
                          "decorators": [],
                          "name": "publicClass",
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
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1331,
              "end": 1394,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1335,
                "end": 1350,
                "decorators": [],
                "name": "myPublicMethod1",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1350,
                "end": 1394,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1353,
                  "end": 1394,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1363,
                      "end": 1388,
                      "argument": {
                        "type": "NewExpression",
                        "start": 1370,
                        "end": 1387,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 1374,
                          "end": 1385,
                          "decorators": [],
                          "name": "publicClass",
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
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1399,
              "end": 1471,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1411,
                "end": 1427,
                "decorators": [],
                "name": "myPrivateMethod1",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1427,
                "end": 1471,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1430,
                  "end": 1471,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1440,
                      "end": 1465,
                      "argument": {
                        "type": "NewExpression",
                        "start": 1447,
                        "end": 1464,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 1451,
                          "end": 1462,
                          "decorators": [],
                          "name": "publicClass",
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
          "start": 800,
          "end": 841,
          "decorators": [],
          "name": "publicClassWithWithPublicGetAccessorTypes",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 1475,
      "end": 2164,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1525,
        "end": 2164,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1531,
            "end": 1607,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1542,
              "end": 1562,
              "decorators": [],
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1562,
              "end": 1607,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1579,
                "end": 1607,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1589,
                    "end": 1601,
                    "argument": {
                      "type": "Literal",
                      "start": 1596,
                      "end": 1600,
                      "raw": "null",
                      "value": null
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
                "start": 1564,
                "end": 1578,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1566,
                  "end": 1578,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1566,
                    "end": 1578,
                    "decorators": [],
                    "name": "privateClass",
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
            "start": 1612,
            "end": 1697,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1631,
              "end": 1652,
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1652,
              "end": 1697,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1669,
                "end": 1697,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1679,
                    "end": 1691,
                    "argument": {
                      "type": "Literal",
                      "start": 1686,
                      "end": 1690,
                      "raw": "null",
                      "value": null
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
                "start": 1654,
                "end": 1668,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1656,
                  "end": 1668,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1656,
                    "end": 1668,
                    "decorators": [],
                    "name": "privateClass",
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
            "start": 1702,
            "end": 1765,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1706,
              "end": 1720,
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1720,
              "end": 1765,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1737,
                "end": 1765,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1747,
                    "end": 1759,
                    "argument": {
                      "type": "Literal",
                      "start": 1754,
                      "end": 1758,
                      "raw": "null",
                      "value": null
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
                "start": 1722,
                "end": 1736,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1724,
                  "end": 1736,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1724,
                    "end": 1736,
                    "decorators": [],
                    "name": "privateClass",
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
            "start": 1770,
            "end": 1842,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1782,
              "end": 1797,
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1797,
              "end": 1842,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1814,
                "end": 1842,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1824,
                    "end": 1836,
                    "argument": {
                      "type": "Literal",
                      "start": 1831,
                      "end": 1835,
                      "raw": "null",
                      "value": null
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
                "start": 1799,
                "end": 1813,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1801,
                  "end": 1813,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1801,
                    "end": 1813,
                    "decorators": [],
                    "name": "privateClass",
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
            "start": 1847,
            "end": 1924,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1858,
              "end": 1879,
              "decorators": [],
              "name": "myPublicStaticMethod1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1879,
              "end": 1924,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1882,
                "end": 1924,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1892,
                    "end": 1918,
                    "argument": {
                      "type": "NewExpression",
                      "start": 1899,
                      "end": 1917,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 1903,
                        "end": 1915,
                        "decorators": [],
                        "name": "privateClass",
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
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1929,
            "end": 2015,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1948,
              "end": 1970,
              "decorators": [],
              "name": "myPrivateStaticMethod1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1970,
              "end": 2015,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1973,
                "end": 2015,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1983,
                    "end": 2009,
                    "argument": {
                      "type": "NewExpression",
                      "start": 1990,
                      "end": 2008,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 1994,
                        "end": 2006,
                        "decorators": [],
                        "name": "privateClass",
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
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2020,
            "end": 2084,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2024,
              "end": 2039,
              "decorators": [],
              "name": "myPublicMethod1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2039,
              "end": 2084,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2042,
                "end": 2084,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2052,
                    "end": 2078,
                    "argument": {
                      "type": "NewExpression",
                      "start": 2059,
                      "end": 2077,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 2063,
                        "end": 2075,
                        "decorators": [],
                        "name": "privateClass",
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
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2089,
            "end": 2162,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2101,
              "end": 2117,
              "decorators": [],
              "name": "myPrivateMethod1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2117,
              "end": 2162,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2120,
                "end": 2162,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2130,
                    "end": 2156,
                    "argument": {
                      "type": "NewExpression",
                      "start": 2137,
                      "end": 2155,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 2141,
                        "end": 2153,
                        "decorators": [],
                        "name": "privateClass",
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
        "start": 1481,
        "end": 1524,
        "decorators": [],
        "name": "privateClassWithWithPrivateGetAccessorTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2166,
      "end": 2846,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2215,
        "end": 2846,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2221,
            "end": 2296,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2232,
              "end": 2252,
              "decorators": [],
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 2252,
              "end": 2296,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2268,
                "end": 2296,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2278,
                    "end": 2290,
                    "argument": {
                      "type": "Literal",
                      "start": 2285,
                      "end": 2289,
                      "raw": "null",
                      "value": null
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
                "start": 2254,
                "end": 2267,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2256,
                  "end": 2267,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2256,
                    "end": 2267,
                    "decorators": [],
                    "name": "publicClass",
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
            "start": 2301,
            "end": 2385,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2320,
              "end": 2341,
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 2341,
              "end": 2385,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2357,
                "end": 2385,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2367,
                    "end": 2379,
                    "argument": {
                      "type": "Literal",
                      "start": 2374,
                      "end": 2378,
                      "raw": "null",
                      "value": null
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
                "start": 2343,
                "end": 2356,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2345,
                  "end": 2356,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2345,
                    "end": 2356,
                    "decorators": [],
                    "name": "publicClass",
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
            "start": 2390,
            "end": 2452,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2394,
              "end": 2408,
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2408,
              "end": 2452,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2424,
                "end": 2452,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2434,
                    "end": 2446,
                    "argument": {
                      "type": "Literal",
                      "start": 2441,
                      "end": 2445,
                      "raw": "null",
                      "value": null
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
                "start": 2410,
                "end": 2423,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2412,
                  "end": 2423,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2412,
                    "end": 2423,
                    "decorators": [],
                    "name": "publicClass",
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
            "start": 2457,
            "end": 2528,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2469,
              "end": 2484,
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2484,
              "end": 2528,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2500,
                "end": 2528,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2510,
                    "end": 2522,
                    "argument": {
                      "type": "Literal",
                      "start": 2517,
                      "end": 2521,
                      "raw": "null",
                      "value": null
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
                "start": 2486,
                "end": 2499,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2488,
                  "end": 2499,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2488,
                    "end": 2499,
                    "decorators": [],
                    "name": "publicClass",
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
            "start": 2533,
            "end": 2609,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2544,
              "end": 2565,
              "decorators": [],
              "name": "myPublicStaticMethod1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 2565,
              "end": 2609,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2568,
                "end": 2609,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2578,
                    "end": 2603,
                    "argument": {
                      "type": "NewExpression",
                      "start": 2585,
                      "end": 2602,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 2589,
                        "end": 2600,
                        "decorators": [],
                        "name": "publicClass",
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
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2614,
            "end": 2699,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2633,
              "end": 2655,
              "decorators": [],
              "name": "myPrivateStaticMethod1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 2655,
              "end": 2699,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2658,
                "end": 2699,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2668,
                    "end": 2693,
                    "argument": {
                      "type": "NewExpression",
                      "start": 2675,
                      "end": 2692,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 2679,
                        "end": 2690,
                        "decorators": [],
                        "name": "publicClass",
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
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2704,
            "end": 2767,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2708,
              "end": 2723,
              "decorators": [],
              "name": "myPublicMethod1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2723,
              "end": 2767,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2726,
                "end": 2767,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2736,
                    "end": 2761,
                    "argument": {
                      "type": "NewExpression",
                      "start": 2743,
                      "end": 2760,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 2747,
                        "end": 2758,
                        "decorators": [],
                        "name": "publicClass",
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
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2772,
            "end": 2844,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2784,
              "end": 2800,
              "decorators": [],
              "name": "myPrivateMethod1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2800,
              "end": 2844,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2803,
                "end": 2844,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2813,
                    "end": 2838,
                    "argument": {
                      "type": "NewExpression",
                      "start": 2820,
                      "end": 2837,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 2824,
                        "end": 2835,
                        "decorators": [],
                        "name": "publicClass",
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
        "start": 2172,
        "end": 2214,
        "decorators": [],
        "name": "privateClassWithWithPublicGetAccessorTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2848,
      "end": 3177,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2855,
        "end": 3177,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 2904,
          "end": 3177,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 2910,
              "end": 2979,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2921,
                "end": 2941,
                "decorators": [],
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 2941,
                "end": 2979,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 2963,
                  "end": 2979,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2942,
                    "end": 2961,
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2947,
                      "end": 2961,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2949,
                        "end": 2961,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2949,
                          "end": 2961,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 2984,
              "end": 3053,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3003,
                "end": 3024,
                "decorators": [],
                "name": "myPrivateStaticMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 3024,
                "end": 3053,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3046,
                  "end": 3053,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3025,
                    "end": 3044,
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3030,
                      "end": 3044,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3032,
                        "end": 3044,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3032,
                          "end": 3044,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3058,
              "end": 3114,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3062,
                "end": 3076,
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 3076,
                "end": 3114,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3098,
                  "end": 3114,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3077,
                    "end": 3096,
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3082,
                      "end": 3096,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3084,
                        "end": 3096,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3084,
                          "end": 3096,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3119,
              "end": 3175,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3131,
                "end": 3146,
                "decorators": [],
                "name": "myPrivateMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 3146,
                "end": 3175,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3168,
                  "end": 3175,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3147,
                    "end": 3166,
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3152,
                      "end": 3166,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3154,
                        "end": 3166,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3154,
                          "end": 3166,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
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
          "start": 2861,
          "end": 2903,
          "decorators": [],
          "name": "publicClassWithWithPrivateSetAccessorTypes",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3179,
      "end": 3485,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 3186,
        "end": 3485,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 3234,
          "end": 3485,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 3240,
              "end": 3299,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3251,
                "end": 3271,
                "decorators": [],
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 3271,
                "end": 3299,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3292,
                  "end": 3299,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3272,
                    "end": 3290,
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3277,
                      "end": 3290,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3279,
                        "end": 3290,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3279,
                          "end": 3290,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3304,
              "end": 3372,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3323,
                "end": 3344,
                "decorators": [],
                "name": "myPrivateStaticMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 3344,
                "end": 3372,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3365,
                  "end": 3372,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3345,
                    "end": 3363,
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3350,
                      "end": 3363,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3352,
                        "end": 3363,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3352,
                          "end": 3363,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3377,
              "end": 3423,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3381,
                "end": 3395,
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 3395,
                "end": 3423,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3416,
                  "end": 3423,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3396,
                    "end": 3414,
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3401,
                      "end": 3414,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3403,
                        "end": 3414,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3403,
                          "end": 3414,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3428,
              "end": 3483,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3440,
                "end": 3455,
                "decorators": [],
                "name": "myPrivateMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 3455,
                "end": 3483,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3476,
                  "end": 3483,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3456,
                    "end": 3474,
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3461,
                      "end": 3474,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3463,
                        "end": 3474,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3463,
                          "end": 3474,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
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
          "start": 3192,
          "end": 3233,
          "decorators": [],
          "name": "publicClassWithWithPublicSetAccessorTypes",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 3487,
      "end": 3793,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 3537,
        "end": 3793,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 3543,
            "end": 3603,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3554,
              "end": 3574,
              "decorators": [],
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 3574,
              "end": 3603,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3596,
                "end": 3603,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3575,
                  "end": 3594,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3580,
                    "end": 3594,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3582,
                      "end": 3594,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3582,
                        "end": 3594,
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3608,
            "end": 3677,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3627,
              "end": 3648,
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 3648,
              "end": 3677,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3670,
                "end": 3677,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3649,
                  "end": 3668,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3654,
                    "end": 3668,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3656,
                      "end": 3668,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3656,
                        "end": 3668,
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3682,
            "end": 3730,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3686,
              "end": 3700,
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 3700,
              "end": 3730,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3722,
                "end": 3730,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3701,
                  "end": 3720,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3706,
                    "end": 3720,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3708,
                      "end": 3720,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3708,
                        "end": 3720,
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3735,
            "end": 3791,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3747,
              "end": 3762,
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 3762,
              "end": 3791,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3784,
                "end": 3791,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3763,
                  "end": 3782,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3768,
                    "end": 3782,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3770,
                      "end": 3782,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3770,
                        "end": 3782,
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
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
        "start": 3493,
        "end": 3536,
        "decorators": [],
        "name": "privateClassWithWithPrivateSetAccessorTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 3795,
      "end": 4095,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 3844,
        "end": 4095,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 3850,
            "end": 3909,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3861,
              "end": 3881,
              "decorators": [],
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 3881,
              "end": 3909,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3902,
                "end": 3909,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3882,
                  "end": 3900,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3887,
                    "end": 3900,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3889,
                      "end": 3900,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3889,
                        "end": 3900,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3914,
            "end": 3982,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3933,
              "end": 3954,
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 3954,
              "end": 3982,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3975,
                "end": 3982,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3955,
                  "end": 3973,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3960,
                    "end": 3973,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3962,
                      "end": 3973,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3962,
                        "end": 3973,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3987,
            "end": 4033,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3991,
              "end": 4005,
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4005,
              "end": 4033,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4026,
                "end": 4033,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4006,
                  "end": 4024,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4011,
                    "end": 4024,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4013,
                      "end": 4024,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4013,
                        "end": 4024,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4038,
            "end": 4093,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4050,
              "end": 4065,
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4065,
              "end": 4093,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4086,
                "end": 4093,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4066,
                  "end": 4084,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4071,
                    "end": 4084,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4073,
                      "end": 4084,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4073,
                        "end": 4084,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
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
        "start": 3801,
        "end": 3843,
        "decorators": [],
        "name": "privateClassWithWithPublicSetAccessorTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4097,
      "end": 4546,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 4104,
        "end": 4546,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 4155,
          "end": 4546,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 4161,
              "end": 4259,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 4172,
                "end": 4192,
                "decorators": [],
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 4192,
                "end": 4259,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4222,
                  "end": 4259,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 4241,
                      "end": 4253,
                      "argument": {
                        "type": "Literal",
                        "start": 4248,
                        "end": 4252,
                        "raw": "null",
                        "value": null
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
                  "start": 4194,
                  "end": 4221,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4196,
                    "end": 4221,
                    "typeArguments": null,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 4196,
                      "end": 4221,
                      "left": {
                        "type": "Identifier",
                        "start": 4196,
                        "end": 4209,
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 4210,
                        "end": 4221,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 4264,
              "end": 4349,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 4268,
                "end": 4282,
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 4282,
                "end": 4349,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4312,
                  "end": 4349,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 4331,
                      "end": 4343,
                      "argument": {
                        "type": "Literal",
                        "start": 4338,
                        "end": 4342,
                        "raw": "null",
                        "value": null
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
                  "start": 4284,
                  "end": 4311,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4286,
                    "end": 4311,
                    "typeArguments": null,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 4286,
                      "end": 4311,
                      "left": {
                        "type": "Identifier",
                        "start": 4286,
                        "end": 4299,
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 4300,
                        "end": 4311,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 4354,
              "end": 4453,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 4365,
                "end": 4386,
                "decorators": [],
                "name": "myPublicStaticMethod1",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 4386,
                "end": 4453,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4389,
                  "end": 4453,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 4408,
                      "end": 4447,
                      "argument": {
                        "type": "NewExpression",
                        "start": 4415,
                        "end": 4446,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 4419,
                          "end": 4444,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 4419,
                            "end": 4432,
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 4433,
                            "end": 4444,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          }
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
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 4458,
              "end": 4544,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 4462,
                "end": 4477,
                "decorators": [],
                "name": "myPublicMethod1",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 4477,
                "end": 4544,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4480,
                  "end": 4544,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 4499,
                      "end": 4538,
                      "argument": {
                        "type": "NewExpression",
                        "start": 4506,
                        "end": 4537,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 4510,
                          "end": 4535,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 4510,
                            "end": 4523,
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 4524,
                            "end": 4535,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          }
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
          "start": 4110,
          "end": 4154,
          "decorators": [],
          "name": "publicClassWithPrivateModuleGetAccessorTypes",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4548,
      "end": 4770,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 4555,
        "end": 4770,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 4606,
          "end": 4770,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 4612,
              "end": 4694,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 4623,
                "end": 4643,
                "decorators": [],
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 4643,
                "end": 4694,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4678,
                  "end": 4694,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4644,
                    "end": 4676,
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4649,
                      "end": 4676,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4651,
                        "end": 4676,
                        "typeArguments": null,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 4651,
                          "end": 4676,
                          "left": {
                            "type": "Identifier",
                            "start": 4651,
                            "end": 4664,
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 4665,
                            "end": 4676,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 4699,
              "end": 4768,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 4703,
                "end": 4717,
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 4717,
                "end": 4768,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4752,
                  "end": 4768,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4718,
                    "end": 4750,
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4723,
                      "end": 4750,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4725,
                        "end": 4750,
                        "typeArguments": null,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 4725,
                          "end": 4750,
                          "left": {
                            "type": "Identifier",
                            "start": 4725,
                            "end": 4738,
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 4739,
                            "end": 4750,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ],
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
          "start": 4561,
          "end": 4605,
          "decorators": [],
          "name": "publicClassWithPrivateModuleSetAccessorTypes",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 4772,
      "end": 5179,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 4824,
        "end": 5179,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 4830,
            "end": 4919,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4841,
              "end": 4861,
              "decorators": [],
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 4861,
              "end": 4919,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4891,
                "end": 4919,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4901,
                    "end": 4913,
                    "argument": {
                      "type": "Literal",
                      "start": 4908,
                      "end": 4912,
                      "raw": "null",
                      "value": null
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
                "start": 4863,
                "end": 4890,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4865,
                  "end": 4890,
                  "typeArguments": null,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 4865,
                    "end": 4890,
                    "left": {
                      "type": "Identifier",
                      "start": 4865,
                      "end": 4878,
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 4879,
                      "end": 4890,
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4924,
            "end": 5000,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4928,
              "end": 4942,
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4942,
              "end": 5000,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4972,
                "end": 5000,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4982,
                    "end": 4994,
                    "argument": {
                      "type": "Literal",
                      "start": 4989,
                      "end": 4993,
                      "raw": "null",
                      "value": null
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
                "start": 4944,
                "end": 4971,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4946,
                  "end": 4971,
                  "typeArguments": null,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 4946,
                    "end": 4971,
                    "left": {
                      "type": "Identifier",
                      "start": 4946,
                      "end": 4959,
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 4960,
                      "end": 4971,
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 5005,
            "end": 5095,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5016,
              "end": 5037,
              "decorators": [],
              "name": "myPublicStaticMethod1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 5037,
              "end": 5095,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 5040,
                "end": 5095,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 5050,
                    "end": 5089,
                    "argument": {
                      "type": "NewExpression",
                      "start": 5057,
                      "end": 5088,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 5061,
                        "end": 5086,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 5061,
                          "end": 5074,
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 5075,
                          "end": 5086,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 5100,
            "end": 5177,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5104,
              "end": 5119,
              "decorators": [],
              "name": "myPublicMethod1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 5119,
              "end": 5177,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 5122,
                "end": 5177,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 5132,
                    "end": 5171,
                    "argument": {
                      "type": "NewExpression",
                      "start": 5139,
                      "end": 5170,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 5143,
                        "end": 5168,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 5143,
                          "end": 5156,
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 5157,
                          "end": 5168,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
        "start": 4778,
        "end": 4823,
        "decorators": [],
        "name": "privateClassWithPrivateModuleGetAccessorTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 5181,
      "end": 5379,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 5233,
        "end": 5379,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 5239,
            "end": 5312,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5250,
              "end": 5270,
              "decorators": [],
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 5270,
              "end": 5312,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 5305,
                "end": 5312,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 5271,
                  "end": 5303,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5276,
                    "end": 5303,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5278,
                      "end": 5303,
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 5278,
                        "end": 5303,
                        "left": {
                          "type": "Identifier",
                          "start": 5278,
                          "end": 5291,
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 5292,
                          "end": 5303,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 5317,
            "end": 5377,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5321,
              "end": 5335,
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 5335,
              "end": 5377,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 5370,
                "end": 5377,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 5336,
                  "end": 5368,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5341,
                    "end": 5368,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5343,
                      "end": 5368,
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 5343,
                        "end": 5368,
                        "left": {
                          "type": "Identifier",
                          "start": 5343,
                          "end": 5356,
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 5357,
                          "end": 5368,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                }
              ],
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
        "start": 5187,
        "end": 5232,
        "decorators": [],
        "name": "privateClassWithPrivateModuleSetAccessorTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 5381,
      "end": 11541,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 5388,
        "end": 11541,
        "body": {
          "type": "TSModuleBlock",
          "start": 5408,
          "end": 11541,
          "body": [
            {
              "type": "ClassDeclaration",
              "start": 5414,
              "end": 5440,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 5433,
                "end": 5440,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 5420,
                "end": 5432,
                "decorators": [],
                "name": "privateClass",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 5446,
              "end": 5478,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 5453,
                "end": 5478,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 5471,
                  "end": 5478,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 5459,
                  "end": 5470,
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [],
                "superClass": null,
                "superTypeArguments": null,
                "typeParameters": null
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 5483,
              "end": 6314,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 5490,
                "end": 6314,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 5539,
                  "end": 6314,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 5549,
                      "end": 5642,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 5560,
                        "end": 5580,
                        "decorators": [],
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": true,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 5580,
                        "end": 5642,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 5597,
                          "end": 5642,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 5620,
                              "end": 5632,
                              "argument": {
                                "type": "Literal",
                                "start": 5627,
                                "end": 5631,
                                "raw": "null",
                                "value": null
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
                          "start": 5582,
                          "end": 5596,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5584,
                            "end": 5596,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5584,
                              "end": 5596,
                              "decorators": [],
                              "name": "privateClass",
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
                      "start": 5651,
                      "end": 5744,
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 5670,
                        "end": 5691,
                        "decorators": [],
                        "name": "myPrivateStaticMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": true,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 5691,
                        "end": 5744,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 5708,
                          "end": 5744,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 5722,
                              "end": 5734,
                              "argument": {
                                "type": "Literal",
                                "start": 5729,
                                "end": 5733,
                                "raw": "null",
                                "value": null
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
                          "start": 5693,
                          "end": 5707,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5695,
                            "end": 5707,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5695,
                              "end": 5707,
                              "decorators": [],
                              "name": "privateClass",
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
                      "start": 5753,
                      "end": 5833,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 5757,
                        "end": 5771,
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 5771,
                        "end": 5833,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 5788,
                          "end": 5833,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 5811,
                              "end": 5823,
                              "argument": {
                                "type": "Literal",
                                "start": 5818,
                                "end": 5822,
                                "raw": "null",
                                "value": null
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
                          "start": 5773,
                          "end": 5787,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5775,
                            "end": 5787,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5775,
                              "end": 5787,
                              "decorators": [],
                              "name": "privateClass",
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
                      "start": 5842,
                      "end": 5922,
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 5854,
                        "end": 5869,
                        "decorators": [],
                        "name": "myPrivateMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 5869,
                        "end": 5922,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 5886,
                          "end": 5922,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 5900,
                              "end": 5912,
                              "argument": {
                                "type": "Literal",
                                "start": 5907,
                                "end": 5911,
                                "raw": "null",
                                "value": null
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
                          "start": 5871,
                          "end": 5885,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5873,
                            "end": 5885,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5873,
                              "end": 5885,
                              "decorators": [],
                              "name": "privateClass",
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
                      "start": 5931,
                      "end": 6025,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 5942,
                        "end": 5963,
                        "decorators": [],
                        "name": "myPublicStaticMethod1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": true,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 5963,
                        "end": 6025,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 5966,
                          "end": 6025,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 5989,
                              "end": 6015,
                              "argument": {
                                "type": "NewExpression",
                                "start": 5996,
                                "end": 6014,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 6000,
                                  "end": 6012,
                                  "decorators": [],
                                  "name": "privateClass",
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
                        "returnType": null,
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 6034,
                      "end": 6128,
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 6053,
                        "end": 6075,
                        "decorators": [],
                        "name": "myPrivateStaticMethod1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": true,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6075,
                        "end": 6128,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 6078,
                          "end": 6128,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 6092,
                              "end": 6118,
                              "argument": {
                                "type": "NewExpression",
                                "start": 6099,
                                "end": 6117,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 6103,
                                  "end": 6115,
                                  "decorators": [],
                                  "name": "privateClass",
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
                        "returnType": null,
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 6137,
                      "end": 6218,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 6141,
                        "end": 6156,
                        "decorators": [],
                        "name": "myPublicMethod1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6156,
                        "end": 6218,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 6159,
                          "end": 6218,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 6182,
                              "end": 6208,
                              "argument": {
                                "type": "NewExpression",
                                "start": 6189,
                                "end": 6207,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 6193,
                                  "end": 6205,
                                  "decorators": [],
                                  "name": "privateClass",
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
                        "returnType": null,
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 6227,
                      "end": 6308,
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 6239,
                        "end": 6255,
                        "decorators": [],
                        "name": "myPrivateMethod1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6255,
                        "end": 6308,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 6258,
                          "end": 6308,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 6272,
                              "end": 6298,
                              "argument": {
                                "type": "NewExpression",
                                "start": 6279,
                                "end": 6297,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 6283,
                                  "end": 6295,
                                  "decorators": [],
                                  "name": "privateClass",
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
                  "start": 5496,
                  "end": 5538,
                  "decorators": [],
                  "name": "publicClassWithWithPrivateGetAccessorTypes",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [],
                "superClass": null,
                "superTypeArguments": null,
                "typeParameters": null
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 6320,
              "end": 7106,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 6327,
                "end": 7106,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 6375,
                  "end": 7106,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 6385,
                      "end": 6468,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 6396,
                        "end": 6416,
                        "decorators": [],
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": true,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6416,
                        "end": 6468,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 6432,
                          "end": 6468,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 6446,
                              "end": 6458,
                              "argument": {
                                "type": "Literal",
                                "start": 6453,
                                "end": 6457,
                                "raw": "null",
                                "value": null
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
                          "start": 6418,
                          "end": 6431,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6420,
                            "end": 6431,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6420,
                              "end": 6431,
                              "decorators": [],
                              "name": "publicClass",
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
                      "start": 6477,
                      "end": 6569,
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 6496,
                        "end": 6517,
                        "decorators": [],
                        "name": "myPrivateStaticMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": true,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6517,
                        "end": 6569,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 6533,
                          "end": 6569,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 6547,
                              "end": 6559,
                              "argument": {
                                "type": "Literal",
                                "start": 6554,
                                "end": 6558,
                                "raw": "null",
                                "value": null
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
                          "start": 6519,
                          "end": 6532,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6521,
                            "end": 6532,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6521,
                              "end": 6532,
                              "decorators": [],
                              "name": "publicClass",
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
                      "start": 6578,
                      "end": 6648,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 6582,
                        "end": 6596,
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6596,
                        "end": 6648,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 6612,
                          "end": 6648,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 6626,
                              "end": 6638,
                              "argument": {
                                "type": "Literal",
                                "start": 6633,
                                "end": 6637,
                                "raw": "null",
                                "value": null
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
                          "start": 6598,
                          "end": 6611,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6600,
                            "end": 6611,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6600,
                              "end": 6611,
                              "decorators": [],
                              "name": "publicClass",
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
                      "start": 6657,
                      "end": 6736,
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 6669,
                        "end": 6684,
                        "decorators": [],
                        "name": "myPrivateMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6684,
                        "end": 6736,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 6700,
                          "end": 6736,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 6714,
                              "end": 6726,
                              "argument": {
                                "type": "Literal",
                                "start": 6721,
                                "end": 6725,
                                "raw": "null",
                                "value": null
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
                          "start": 6686,
                          "end": 6699,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6688,
                            "end": 6699,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6688,
                              "end": 6699,
                              "decorators": [],
                              "name": "publicClass",
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
                      "start": 6745,
                      "end": 6829,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 6756,
                        "end": 6777,
                        "decorators": [],
                        "name": "myPublicStaticMethod1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": true,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6777,
                        "end": 6829,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 6780,
                          "end": 6829,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 6794,
                              "end": 6819,
                              "argument": {
                                "type": "NewExpression",
                                "start": 6801,
                                "end": 6818,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 6805,
                                  "end": 6816,
                                  "decorators": [],
                                  "name": "publicClass",
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
                        "returnType": null,
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 6838,
                      "end": 6931,
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 6857,
                        "end": 6879,
                        "decorators": [],
                        "name": "myPrivateStaticMethod1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": true,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6879,
                        "end": 6931,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 6882,
                          "end": 6931,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 6896,
                              "end": 6921,
                              "argument": {
                                "type": "NewExpression",
                                "start": 6903,
                                "end": 6920,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 6907,
                                  "end": 6918,
                                  "decorators": [],
                                  "name": "publicClass",
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
                        "returnType": null,
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 6940,
                      "end": 7011,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 6944,
                        "end": 6959,
                        "decorators": [],
                        "name": "myPublicMethod1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6959,
                        "end": 7011,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 6962,
                          "end": 7011,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 6976,
                              "end": 7001,
                              "argument": {
                                "type": "NewExpression",
                                "start": 6983,
                                "end": 7000,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 6987,
                                  "end": 6998,
                                  "decorators": [],
                                  "name": "publicClass",
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
                        "returnType": null,
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 7020,
                      "end": 7100,
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 7032,
                        "end": 7048,
                        "decorators": [],
                        "name": "myPrivateMethod1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 7048,
                        "end": 7100,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 7051,
                          "end": 7100,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 7065,
                              "end": 7090,
                              "argument": {
                                "type": "NewExpression",
                                "start": 7072,
                                "end": 7089,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 7076,
                                  "end": 7087,
                                  "decorators": [],
                                  "name": "publicClass",
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
                  "start": 6333,
                  "end": 6374,
                  "decorators": [],
                  "name": "publicClassWithWithPublicGetAccessorTypes",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [],
                "superClass": null,
                "superTypeArguments": null,
                "typeParameters": null
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ClassDeclaration",
              "start": 7112,
              "end": 7901,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 7162,
                "end": 7901,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 7172,
                    "end": 7256,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 7183,
                      "end": 7203,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7203,
                      "end": 7256,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 7220,
                        "end": 7256,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 7234,
                            "end": 7246,
                            "argument": {
                              "type": "Literal",
                              "start": 7241,
                              "end": 7245,
                              "raw": "null",
                              "value": null
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
                        "start": 7205,
                        "end": 7219,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7207,
                          "end": 7219,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7207,
                            "end": 7219,
                            "decorators": [],
                            "name": "privateClass",
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
                    "start": 7265,
                    "end": 7358,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 7284,
                      "end": 7305,
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7305,
                      "end": 7358,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 7322,
                        "end": 7358,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 7336,
                            "end": 7348,
                            "argument": {
                              "type": "Literal",
                              "start": 7343,
                              "end": 7347,
                              "raw": "null",
                              "value": null
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
                        "start": 7307,
                        "end": 7321,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7309,
                          "end": 7321,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7309,
                            "end": 7321,
                            "decorators": [],
                            "name": "privateClass",
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
                    "start": 7367,
                    "end": 7438,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 7371,
                      "end": 7385,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7385,
                      "end": 7438,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 7402,
                        "end": 7438,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 7416,
                            "end": 7428,
                            "argument": {
                              "type": "Literal",
                              "start": 7423,
                              "end": 7427,
                              "raw": "null",
                              "value": null
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
                        "start": 7387,
                        "end": 7401,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7389,
                          "end": 7401,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7389,
                            "end": 7401,
                            "decorators": [],
                            "name": "privateClass",
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
                    "start": 7447,
                    "end": 7527,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 7459,
                      "end": 7474,
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7474,
                      "end": 7527,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 7491,
                        "end": 7527,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 7505,
                            "end": 7517,
                            "argument": {
                              "type": "Literal",
                              "start": 7512,
                              "end": 7516,
                              "raw": "null",
                              "value": null
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
                        "start": 7476,
                        "end": 7490,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7478,
                          "end": 7490,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7478,
                            "end": 7490,
                            "decorators": [],
                            "name": "privateClass",
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
                    "start": 7536,
                    "end": 7621,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 7547,
                      "end": 7568,
                      "decorators": [],
                      "name": "myPublicStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7568,
                      "end": 7621,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 7571,
                        "end": 7621,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 7585,
                            "end": 7611,
                            "argument": {
                              "type": "NewExpression",
                              "start": 7592,
                              "end": 7610,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 7596,
                                "end": 7608,
                                "decorators": [],
                                "name": "privateClass",
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
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 7630,
                    "end": 7724,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 7649,
                      "end": 7671,
                      "decorators": [],
                      "name": "myPrivateStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7671,
                      "end": 7724,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 7674,
                        "end": 7724,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 7688,
                            "end": 7714,
                            "argument": {
                              "type": "NewExpression",
                              "start": 7695,
                              "end": 7713,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 7699,
                                "end": 7711,
                                "decorators": [],
                                "name": "privateClass",
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
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 7733,
                    "end": 7805,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 7737,
                      "end": 7752,
                      "decorators": [],
                      "name": "myPublicMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7752,
                      "end": 7805,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 7755,
                        "end": 7805,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 7769,
                            "end": 7795,
                            "argument": {
                              "type": "NewExpression",
                              "start": 7776,
                              "end": 7794,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 7780,
                                "end": 7792,
                                "decorators": [],
                                "name": "privateClass",
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
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 7814,
                    "end": 7895,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 7826,
                      "end": 7842,
                      "decorators": [],
                      "name": "myPrivateMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7842,
                      "end": 7895,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 7845,
                        "end": 7895,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 7859,
                            "end": 7885,
                            "argument": {
                              "type": "NewExpression",
                              "start": 7866,
                              "end": 7884,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 7870,
                                "end": 7882,
                                "decorators": [],
                                "name": "privateClass",
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
                "start": 7118,
                "end": 7161,
                "decorators": [],
                "name": "privateClassWithWithPrivateGetAccessorTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            {
              "type": "ClassDeclaration",
              "start": 7907,
              "end": 8687,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 7956,
                "end": 8687,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 7966,
                    "end": 8049,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 7977,
                      "end": 7997,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7997,
                      "end": 8049,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 8013,
                        "end": 8049,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 8027,
                            "end": 8039,
                            "argument": {
                              "type": "Literal",
                              "start": 8034,
                              "end": 8038,
                              "raw": "null",
                              "value": null
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
                        "start": 7999,
                        "end": 8012,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8001,
                          "end": 8012,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8001,
                            "end": 8012,
                            "decorators": [],
                            "name": "publicClass",
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
                    "start": 8058,
                    "end": 8150,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 8077,
                      "end": 8098,
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8098,
                      "end": 8150,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 8114,
                        "end": 8150,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 8128,
                            "end": 8140,
                            "argument": {
                              "type": "Literal",
                              "start": 8135,
                              "end": 8139,
                              "raw": "null",
                              "value": null
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
                        "start": 8100,
                        "end": 8113,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8102,
                          "end": 8113,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8102,
                            "end": 8113,
                            "decorators": [],
                            "name": "publicClass",
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
                    "start": 8159,
                    "end": 8229,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 8163,
                      "end": 8177,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8177,
                      "end": 8229,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 8193,
                        "end": 8229,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 8207,
                            "end": 8219,
                            "argument": {
                              "type": "Literal",
                              "start": 8214,
                              "end": 8218,
                              "raw": "null",
                              "value": null
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
                        "start": 8179,
                        "end": 8192,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8181,
                          "end": 8192,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8181,
                            "end": 8192,
                            "decorators": [],
                            "name": "publicClass",
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
                    "start": 8238,
                    "end": 8317,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 8250,
                      "end": 8265,
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8265,
                      "end": 8317,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 8281,
                        "end": 8317,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 8295,
                            "end": 8307,
                            "argument": {
                              "type": "Literal",
                              "start": 8302,
                              "end": 8306,
                              "raw": "null",
                              "value": null
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
                        "start": 8267,
                        "end": 8280,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8269,
                          "end": 8280,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8269,
                            "end": 8280,
                            "decorators": [],
                            "name": "publicClass",
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
                    "start": 8326,
                    "end": 8410,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 8337,
                      "end": 8358,
                      "decorators": [],
                      "name": "myPublicStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8358,
                      "end": 8410,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 8361,
                        "end": 8410,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 8375,
                            "end": 8400,
                            "argument": {
                              "type": "NewExpression",
                              "start": 8382,
                              "end": 8399,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 8386,
                                "end": 8397,
                                "decorators": [],
                                "name": "publicClass",
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
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 8419,
                    "end": 8512,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 8438,
                      "end": 8460,
                      "decorators": [],
                      "name": "myPrivateStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8460,
                      "end": 8512,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 8463,
                        "end": 8512,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 8477,
                            "end": 8502,
                            "argument": {
                              "type": "NewExpression",
                              "start": 8484,
                              "end": 8501,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 8488,
                                "end": 8499,
                                "decorators": [],
                                "name": "publicClass",
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
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 8521,
                    "end": 8592,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 8525,
                      "end": 8540,
                      "decorators": [],
                      "name": "myPublicMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8540,
                      "end": 8592,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 8543,
                        "end": 8592,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 8557,
                            "end": 8582,
                            "argument": {
                              "type": "NewExpression",
                              "start": 8564,
                              "end": 8581,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 8568,
                                "end": 8579,
                                "decorators": [],
                                "name": "publicClass",
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
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 8601,
                    "end": 8681,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 8613,
                      "end": 8629,
                      "decorators": [],
                      "name": "myPrivateMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8629,
                      "end": 8681,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 8632,
                        "end": 8681,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 8646,
                            "end": 8671,
                            "argument": {
                              "type": "NewExpression",
                              "start": 8653,
                              "end": 8670,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 8657,
                                "end": 8668,
                                "decorators": [],
                                "name": "publicClass",
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
                "start": 7913,
                "end": 7955,
                "decorators": [],
                "name": "privateClassWithWithPublicGetAccessorTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 8693,
              "end": 9058,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 8700,
                "end": 9058,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 8749,
                  "end": 9058,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 8759,
                      "end": 8832,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 8770,
                        "end": 8790,
                        "decorators": [],
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "set",
                      "optional": false,
                      "override": false,
                      "static": true,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 8790,
                        "end": 8832,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 8812,
                          "end": 8832,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 8791,
                            "end": 8810,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8796,
                              "end": 8810,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 8798,
                                "end": 8810,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8798,
                                  "end": 8810,
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 8841,
                      "end": 8914,
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 8860,
                        "end": 8881,
                        "decorators": [],
                        "name": "myPrivateStaticMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "set",
                      "optional": false,
                      "override": false,
                      "static": true,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 8881,
                        "end": 8914,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 8903,
                          "end": 8914,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 8882,
                            "end": 8901,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8887,
                              "end": 8901,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 8889,
                                "end": 8901,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8889,
                                  "end": 8901,
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 8923,
                      "end": 8983,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 8927,
                        "end": 8941,
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "set",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 8941,
                        "end": 8983,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 8963,
                          "end": 8983,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 8942,
                            "end": 8961,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8947,
                              "end": 8961,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 8949,
                                "end": 8961,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8949,
                                  "end": 8961,
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 8992,
                      "end": 9052,
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 9004,
                        "end": 9019,
                        "decorators": [],
                        "name": "myPrivateMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "set",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 9019,
                        "end": 9052,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 9041,
                          "end": 9052,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 9020,
                            "end": 9039,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 9025,
                              "end": 9039,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 9027,
                                "end": 9039,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 9027,
                                  "end": 9039,
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ],
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
                  "start": 8706,
                  "end": 8748,
                  "decorators": [],
                  "name": "publicClassWithWithPrivateSetAccessorTypes",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [],
                "superClass": null,
                "superTypeArguments": null,
                "typeParameters": null
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 9064,
              "end": 9406,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 9071,
                "end": 9406,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 9119,
                  "end": 9406,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 9129,
                      "end": 9192,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 9140,
                        "end": 9160,
                        "decorators": [],
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "set",
                      "optional": false,
                      "override": false,
                      "static": true,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 9160,
                        "end": 9192,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 9181,
                          "end": 9192,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 9161,
                            "end": 9179,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 9166,
                              "end": 9179,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 9168,
                                "end": 9179,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 9168,
                                  "end": 9179,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 9201,
                      "end": 9273,
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 9220,
                        "end": 9241,
                        "decorators": [],
                        "name": "myPrivateStaticMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "set",
                      "optional": false,
                      "override": false,
                      "static": true,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 9241,
                        "end": 9273,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 9262,
                          "end": 9273,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 9242,
                            "end": 9260,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 9247,
                              "end": 9260,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 9249,
                                "end": 9260,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 9249,
                                  "end": 9260,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 9282,
                      "end": 9332,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 9286,
                        "end": 9300,
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "set",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 9300,
                        "end": 9332,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 9321,
                          "end": 9332,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 9301,
                            "end": 9319,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 9306,
                              "end": 9319,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 9308,
                                "end": 9319,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 9308,
                                  "end": 9319,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 9341,
                      "end": 9400,
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 9353,
                        "end": 9368,
                        "decorators": [],
                        "name": "myPrivateMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "set",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 9368,
                        "end": 9400,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 9389,
                          "end": 9400,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 9369,
                            "end": 9387,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 9374,
                              "end": 9387,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 9376,
                                "end": 9387,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 9376,
                                  "end": 9387,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ],
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
                  "start": 9077,
                  "end": 9118,
                  "decorators": [],
                  "name": "publicClassWithWithPublicSetAccessorTypes",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [],
                "superClass": null,
                "superTypeArguments": null,
                "typeParameters": null
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ClassDeclaration",
              "start": 9412,
              "end": 9753,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 9462,
                "end": 9753,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 9472,
                    "end": 9536,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 9483,
                      "end": 9503,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9503,
                      "end": 9536,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 9525,
                        "end": 9536,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 9504,
                          "end": 9523,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 9509,
                            "end": 9523,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 9511,
                              "end": 9523,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 9511,
                                "end": 9523,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 9545,
                    "end": 9618,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 9564,
                      "end": 9585,
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9585,
                      "end": 9618,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 9607,
                        "end": 9618,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 9586,
                          "end": 9605,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 9591,
                            "end": 9605,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 9593,
                              "end": 9605,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 9593,
                                "end": 9605,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 9627,
                    "end": 9678,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 9631,
                      "end": 9645,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9645,
                      "end": 9678,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 9667,
                        "end": 9678,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 9646,
                          "end": 9665,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 9651,
                            "end": 9665,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 9653,
                              "end": 9665,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 9653,
                                "end": 9665,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 9687,
                    "end": 9747,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 9699,
                      "end": 9714,
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9714,
                      "end": 9747,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 9736,
                        "end": 9747,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 9715,
                          "end": 9734,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 9720,
                            "end": 9734,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 9722,
                              "end": 9734,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 9722,
                                "end": 9734,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
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
                "start": 9418,
                "end": 9461,
                "decorators": [],
                "name": "privateClassWithWithPrivateSetAccessorTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            {
              "type": "ClassDeclaration",
              "start": 9759,
              "end": 10095,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 9808,
                "end": 10095,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 9818,
                    "end": 9881,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 9829,
                      "end": 9849,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9849,
                      "end": 9881,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 9870,
                        "end": 9881,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 9850,
                          "end": 9868,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 9855,
                            "end": 9868,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 9857,
                              "end": 9868,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 9857,
                                "end": 9868,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 9890,
                    "end": 9962,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 9909,
                      "end": 9930,
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9930,
                      "end": 9962,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 9951,
                        "end": 9962,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 9931,
                          "end": 9949,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 9936,
                            "end": 9949,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 9938,
                              "end": 9949,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 9938,
                                "end": 9949,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 9971,
                    "end": 10021,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 9975,
                      "end": 9989,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9989,
                      "end": 10021,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 10010,
                        "end": 10021,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 9990,
                          "end": 10008,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 9995,
                            "end": 10008,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 9997,
                              "end": 10008,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 9997,
                                "end": 10008,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 10030,
                    "end": 10089,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 10042,
                      "end": 10057,
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 10057,
                      "end": 10089,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 10078,
                        "end": 10089,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 10058,
                          "end": 10076,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 10063,
                            "end": 10076,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 10065,
                              "end": 10076,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 10065,
                                "end": 10076,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
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
                "start": 9765,
                "end": 9807,
                "decorators": [],
                "name": "privateClassWithWithPublicSetAccessorTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 10101,
              "end": 10602,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 10108,
                "end": 10602,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 10159,
                  "end": 10602,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 10169,
                      "end": 10275,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 10180,
                        "end": 10200,
                        "decorators": [],
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": true,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 10200,
                        "end": 10275,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 10230,
                          "end": 10275,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 10253,
                              "end": 10265,
                              "argument": {
                                "type": "Literal",
                                "start": 10260,
                                "end": 10264,
                                "raw": "null",
                                "value": null
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
                          "start": 10202,
                          "end": 10229,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 10204,
                            "end": 10229,
                            "typeArguments": null,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 10204,
                              "end": 10229,
                              "left": {
                                "type": "Identifier",
                                "start": 10204,
                                "end": 10217,
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 10218,
                                "end": 10229,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 10284,
                      "end": 10377,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 10288,
                        "end": 10302,
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 10302,
                        "end": 10377,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 10332,
                          "end": 10377,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 10355,
                              "end": 10367,
                              "argument": {
                                "type": "Literal",
                                "start": 10362,
                                "end": 10366,
                                "raw": "null",
                                "value": null
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
                          "start": 10304,
                          "end": 10331,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 10306,
                            "end": 10331,
                            "typeArguments": null,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 10306,
                              "end": 10331,
                              "left": {
                                "type": "Identifier",
                                "start": 10306,
                                "end": 10319,
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 10320,
                                "end": 10331,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 10386,
                      "end": 10493,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 10397,
                        "end": 10418,
                        "decorators": [],
                        "name": "myPublicStaticMethod1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": true,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 10418,
                        "end": 10493,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 10421,
                          "end": 10493,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 10444,
                              "end": 10483,
                              "argument": {
                                "type": "NewExpression",
                                "start": 10451,
                                "end": 10482,
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 10455,
                                  "end": 10480,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 10455,
                                    "end": 10468,
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 10469,
                                    "end": 10480,
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
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
                        "returnType": null,
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 10502,
                      "end": 10596,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 10506,
                        "end": 10521,
                        "decorators": [],
                        "name": "myPublicMethod1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 10521,
                        "end": 10596,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 10524,
                          "end": 10596,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 10547,
                              "end": 10586,
                              "argument": {
                                "type": "NewExpression",
                                "start": 10554,
                                "end": 10585,
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 10558,
                                  "end": 10583,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 10558,
                                    "end": 10571,
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 10572,
                                    "end": 10583,
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
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
                  "start": 10114,
                  "end": 10158,
                  "decorators": [],
                  "name": "publicClassWithPrivateModuleGetAccessorTypes",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [],
                "superClass": null,
                "superTypeArguments": null,
                "typeParameters": null
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 10608,
              "end": 10850,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 10615,
                "end": 10850,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 10666,
                  "end": 10850,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 10676,
                      "end": 10762,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 10687,
                        "end": 10707,
                        "decorators": [],
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "set",
                      "optional": false,
                      "override": false,
                      "static": true,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 10707,
                        "end": 10762,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 10742,
                          "end": 10762,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 10708,
                            "end": 10740,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 10713,
                              "end": 10740,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 10715,
                                "end": 10740,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 10715,
                                  "end": 10740,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 10715,
                                    "end": 10728,
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 10729,
                                    "end": 10740,
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 10771,
                      "end": 10844,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 10775,
                        "end": 10789,
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "set",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 10789,
                        "end": 10844,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 10824,
                          "end": 10844,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 10790,
                            "end": 10822,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 10795,
                              "end": 10822,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 10797,
                                "end": 10822,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 10797,
                                  "end": 10822,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 10797,
                                    "end": 10810,
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 10811,
                                    "end": 10822,
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          }
                        ],
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
                  "start": 10621,
                  "end": 10665,
                  "decorators": [],
                  "name": "publicClassWithPrivateModuleSetAccessorTypes",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [],
                "superClass": null,
                "superTypeArguments": null,
                "typeParameters": null
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ClassDeclaration",
              "start": 10856,
              "end": 11315,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 10908,
                "end": 11315,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 10918,
                    "end": 11015,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 10929,
                      "end": 10949,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 10949,
                      "end": 11015,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 10979,
                        "end": 11015,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 10993,
                            "end": 11005,
                            "argument": {
                              "type": "Literal",
                              "start": 11000,
                              "end": 11004,
                              "raw": "null",
                              "value": null
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
                        "start": 10951,
                        "end": 10978,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 10953,
                          "end": 10978,
                          "typeArguments": null,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 10953,
                            "end": 10978,
                            "left": {
                              "type": "Identifier",
                              "start": 10953,
                              "end": 10966,
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 10967,
                              "end": 10978,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11024,
                    "end": 11108,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11028,
                      "end": 11042,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11042,
                      "end": 11108,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11072,
                        "end": 11108,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 11086,
                            "end": 11098,
                            "argument": {
                              "type": "Literal",
                              "start": 11093,
                              "end": 11097,
                              "raw": "null",
                              "value": null
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
                        "start": 11044,
                        "end": 11071,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 11046,
                          "end": 11071,
                          "typeArguments": null,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 11046,
                            "end": 11071,
                            "left": {
                              "type": "Identifier",
                              "start": 11046,
                              "end": 11059,
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 11060,
                              "end": 11071,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11117,
                    "end": 11215,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11128,
                      "end": 11149,
                      "decorators": [],
                      "name": "myPublicStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11149,
                      "end": 11215,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11152,
                        "end": 11215,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 11166,
                            "end": 11205,
                            "argument": {
                              "type": "NewExpression",
                              "start": 11173,
                              "end": 11204,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 11177,
                                "end": 11202,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 11177,
                                  "end": 11190,
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 11191,
                                  "end": 11202,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
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
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11224,
                    "end": 11309,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11228,
                      "end": 11243,
                      "decorators": [],
                      "name": "myPublicMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11243,
                      "end": 11309,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11246,
                        "end": 11309,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 11260,
                            "end": 11299,
                            "argument": {
                              "type": "NewExpression",
                              "start": 11267,
                              "end": 11298,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 11271,
                                "end": 11296,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 11271,
                                  "end": 11284,
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 11285,
                                  "end": 11296,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
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
                "start": 10862,
                "end": 10907,
                "decorators": [],
                "name": "privateClassWithPrivateModuleGetAccessorTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            {
              "type": "ClassDeclaration",
              "start": 11321,
              "end": 11539,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 11373,
                "end": 11539,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 11383,
                    "end": 11460,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11394,
                      "end": 11414,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11414,
                      "end": 11460,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11449,
                        "end": 11460,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11415,
                          "end": 11447,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11420,
                            "end": 11447,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11422,
                              "end": 11447,
                              "typeArguments": null,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 11422,
                                "end": 11447,
                                "left": {
                                  "type": "Identifier",
                                  "start": 11422,
                                  "end": 11435,
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 11436,
                                  "end": 11447,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11469,
                    "end": 11533,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11473,
                      "end": 11487,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11487,
                      "end": 11533,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11522,
                        "end": 11533,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11488,
                          "end": 11520,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11493,
                            "end": 11520,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11495,
                              "end": 11520,
                              "typeArguments": null,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 11495,
                                "end": 11520,
                                "left": {
                                  "type": "Identifier",
                                  "start": 11495,
                                  "end": 11508,
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 11509,
                                  "end": 11520,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        }
                      ],
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
                "start": 11327,
                "end": 11372,
                "decorators": [],
                "name": "privateClassWithPrivateModuleSetAccessorTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 5395,
          "end": 5407,
          "decorators": [],
          "name": "publicModule",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11543,
      "end": 17601,
      "body": {
        "type": "TSModuleBlock",
        "start": 11564,
        "end": 17601,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 11570,
            "end": 11596,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 11589,
              "end": 11596,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 11576,
              "end": 11588,
              "decorators": [],
              "name": "privateClass",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 11602,
            "end": 11634,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 11609,
              "end": 11634,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 11627,
                "end": 11634,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 11615,
                "end": 11626,
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 11639,
            "end": 12438,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 11646,
              "end": 12438,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 11695,
                "end": 12438,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 11705,
                    "end": 11790,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11716,
                      "end": 11736,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11736,
                      "end": 11790,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11753,
                        "end": 11790,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 11768,
                            "end": 11780,
                            "argument": {
                              "type": "Literal",
                              "start": 11775,
                              "end": 11779,
                              "raw": "null",
                              "value": null
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
                        "start": 11738,
                        "end": 11752,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 11740,
                          "end": 11752,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 11740,
                            "end": 11752,
                            "decorators": [],
                            "name": "privateClass",
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
                    "start": 11799,
                    "end": 11892,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11818,
                      "end": 11839,
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11839,
                      "end": 11892,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11856,
                        "end": 11892,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 11870,
                            "end": 11882,
                            "argument": {
                              "type": "Literal",
                              "start": 11877,
                              "end": 11881,
                              "raw": "null",
                              "value": null
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
                        "start": 11841,
                        "end": 11855,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 11843,
                          "end": 11855,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 11843,
                            "end": 11855,
                            "decorators": [],
                            "name": "privateClass",
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
                    "start": 11901,
                    "end": 11973,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11905,
                      "end": 11919,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11919,
                      "end": 11973,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11936,
                        "end": 11973,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 11951,
                            "end": 11963,
                            "argument": {
                              "type": "Literal",
                              "start": 11958,
                              "end": 11962,
                              "raw": "null",
                              "value": null
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
                        "start": 11921,
                        "end": 11935,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 11923,
                          "end": 11935,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 11923,
                            "end": 11935,
                            "decorators": [],
                            "name": "privateClass",
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
                    "start": 11982,
                    "end": 12062,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11994,
                      "end": 12009,
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12009,
                      "end": 12062,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 12026,
                        "end": 12062,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 12040,
                            "end": 12052,
                            "argument": {
                              "type": "Literal",
                              "start": 12047,
                              "end": 12051,
                              "raw": "null",
                              "value": null
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
                        "start": 12011,
                        "end": 12025,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 12013,
                          "end": 12025,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 12013,
                            "end": 12025,
                            "decorators": [],
                            "name": "privateClass",
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
                    "start": 12071,
                    "end": 12157,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 12082,
                      "end": 12103,
                      "decorators": [],
                      "name": "myPublicStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12103,
                      "end": 12157,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 12106,
                        "end": 12157,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 12121,
                            "end": 12147,
                            "argument": {
                              "type": "NewExpression",
                              "start": 12128,
                              "end": 12146,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 12132,
                                "end": 12144,
                                "decorators": [],
                                "name": "privateClass",
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
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 12166,
                    "end": 12260,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 12185,
                      "end": 12207,
                      "decorators": [],
                      "name": "myPrivateStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12207,
                      "end": 12260,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 12210,
                        "end": 12260,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 12224,
                            "end": 12250,
                            "argument": {
                              "type": "NewExpression",
                              "start": 12231,
                              "end": 12249,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 12235,
                                "end": 12247,
                                "decorators": [],
                                "name": "privateClass",
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
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 12269,
                    "end": 12342,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 12273,
                      "end": 12288,
                      "decorators": [],
                      "name": "myPublicMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12288,
                      "end": 12342,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 12291,
                        "end": 12342,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 12306,
                            "end": 12332,
                            "argument": {
                              "type": "NewExpression",
                              "start": 12313,
                              "end": 12331,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 12317,
                                "end": 12329,
                                "decorators": [],
                                "name": "privateClass",
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
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 12351,
                    "end": 12432,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 12363,
                      "end": 12379,
                      "decorators": [],
                      "name": "myPrivateMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12379,
                      "end": 12432,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 12382,
                        "end": 12432,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 12396,
                            "end": 12422,
                            "argument": {
                              "type": "NewExpression",
                              "start": 12403,
                              "end": 12421,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 12407,
                                "end": 12419,
                                "decorators": [],
                                "name": "privateClass",
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
                "start": 11652,
                "end": 11694,
                "decorators": [],
                "name": "publicClassWithWithPrivateGetAccessorTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 12444,
            "end": 13230,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 12451,
              "end": 13230,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 12499,
                "end": 13230,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 12509,
                    "end": 12592,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 12520,
                      "end": 12540,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12540,
                      "end": 12592,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 12556,
                        "end": 12592,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 12570,
                            "end": 12582,
                            "argument": {
                              "type": "Literal",
                              "start": 12577,
                              "end": 12581,
                              "raw": "null",
                              "value": null
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
                        "start": 12542,
                        "end": 12555,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 12544,
                          "end": 12555,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 12544,
                            "end": 12555,
                            "decorators": [],
                            "name": "publicClass",
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
                    "start": 12601,
                    "end": 12693,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 12620,
                      "end": 12641,
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12641,
                      "end": 12693,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 12657,
                        "end": 12693,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 12671,
                            "end": 12683,
                            "argument": {
                              "type": "Literal",
                              "start": 12678,
                              "end": 12682,
                              "raw": "null",
                              "value": null
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
                        "start": 12643,
                        "end": 12656,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 12645,
                          "end": 12656,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 12645,
                            "end": 12656,
                            "decorators": [],
                            "name": "publicClass",
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
                    "start": 12702,
                    "end": 12772,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 12706,
                      "end": 12720,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12720,
                      "end": 12772,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 12736,
                        "end": 12772,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 12750,
                            "end": 12762,
                            "argument": {
                              "type": "Literal",
                              "start": 12757,
                              "end": 12761,
                              "raw": "null",
                              "value": null
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
                        "start": 12722,
                        "end": 12735,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 12724,
                          "end": 12735,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 12724,
                            "end": 12735,
                            "decorators": [],
                            "name": "publicClass",
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
                    "start": 12781,
                    "end": 12860,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 12793,
                      "end": 12808,
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12808,
                      "end": 12860,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 12824,
                        "end": 12860,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 12838,
                            "end": 12850,
                            "argument": {
                              "type": "Literal",
                              "start": 12845,
                              "end": 12849,
                              "raw": "null",
                              "value": null
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
                        "start": 12810,
                        "end": 12823,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 12812,
                          "end": 12823,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 12812,
                            "end": 12823,
                            "decorators": [],
                            "name": "publicClass",
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
                    "start": 12869,
                    "end": 12953,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 12880,
                      "end": 12901,
                      "decorators": [],
                      "name": "myPublicStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12901,
                      "end": 12953,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 12904,
                        "end": 12953,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 12918,
                            "end": 12943,
                            "argument": {
                              "type": "NewExpression",
                              "start": 12925,
                              "end": 12942,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 12929,
                                "end": 12940,
                                "decorators": [],
                                "name": "publicClass",
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
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 12962,
                    "end": 13055,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 12981,
                      "end": 13003,
                      "decorators": [],
                      "name": "myPrivateStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 13003,
                      "end": 13055,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 13006,
                        "end": 13055,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 13020,
                            "end": 13045,
                            "argument": {
                              "type": "NewExpression",
                              "start": 13027,
                              "end": 13044,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 13031,
                                "end": 13042,
                                "decorators": [],
                                "name": "publicClass",
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
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 13064,
                    "end": 13135,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 13068,
                      "end": 13083,
                      "decorators": [],
                      "name": "myPublicMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 13083,
                      "end": 13135,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 13086,
                        "end": 13135,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 13100,
                            "end": 13125,
                            "argument": {
                              "type": "NewExpression",
                              "start": 13107,
                              "end": 13124,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 13111,
                                "end": 13122,
                                "decorators": [],
                                "name": "publicClass",
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
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 13144,
                    "end": 13224,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 13156,
                      "end": 13172,
                      "decorators": [],
                      "name": "myPrivateMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 13172,
                      "end": 13224,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 13175,
                        "end": 13224,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 13189,
                            "end": 13214,
                            "argument": {
                              "type": "NewExpression",
                              "start": 13196,
                              "end": 13213,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 13200,
                                "end": 13211,
                                "decorators": [],
                                "name": "publicClass",
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
                "start": 12457,
                "end": 12498,
                "decorators": [],
                "name": "publicClassWithWithPublicGetAccessorTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ClassDeclaration",
            "start": 13236,
            "end": 14025,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 13286,
              "end": 14025,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 13296,
                  "end": 13380,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 13307,
                    "end": 13327,
                    "decorators": [],
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13327,
                    "end": 13380,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 13344,
                      "end": 13380,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 13358,
                          "end": 13370,
                          "argument": {
                            "type": "Literal",
                            "start": 13365,
                            "end": 13369,
                            "raw": "null",
                            "value": null
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
                      "start": 13329,
                      "end": 13343,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 13331,
                        "end": 13343,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 13331,
                          "end": 13343,
                          "decorators": [],
                          "name": "privateClass",
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
                  "start": 13389,
                  "end": 13482,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 13408,
                    "end": 13429,
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13429,
                    "end": 13482,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 13446,
                      "end": 13482,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 13460,
                          "end": 13472,
                          "argument": {
                            "type": "Literal",
                            "start": 13467,
                            "end": 13471,
                            "raw": "null",
                            "value": null
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
                      "start": 13431,
                      "end": 13445,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 13433,
                        "end": 13445,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 13433,
                          "end": 13445,
                          "decorators": [],
                          "name": "privateClass",
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
                  "start": 13491,
                  "end": 13562,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 13495,
                    "end": 13509,
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13509,
                    "end": 13562,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 13526,
                      "end": 13562,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 13540,
                          "end": 13552,
                          "argument": {
                            "type": "Literal",
                            "start": 13547,
                            "end": 13551,
                            "raw": "null",
                            "value": null
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
                      "start": 13511,
                      "end": 13525,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 13513,
                        "end": 13525,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 13513,
                          "end": 13525,
                          "decorators": [],
                          "name": "privateClass",
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
                  "start": 13571,
                  "end": 13651,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 13583,
                    "end": 13598,
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13598,
                    "end": 13651,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 13615,
                      "end": 13651,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 13629,
                          "end": 13641,
                          "argument": {
                            "type": "Literal",
                            "start": 13636,
                            "end": 13640,
                            "raw": "null",
                            "value": null
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
                      "start": 13600,
                      "end": 13614,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 13602,
                        "end": 13614,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 13602,
                          "end": 13614,
                          "decorators": [],
                          "name": "privateClass",
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
                  "start": 13660,
                  "end": 13745,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 13671,
                    "end": 13692,
                    "decorators": [],
                    "name": "myPublicStaticMethod1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13692,
                    "end": 13745,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 13695,
                      "end": 13745,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 13709,
                          "end": 13735,
                          "argument": {
                            "type": "NewExpression",
                            "start": 13716,
                            "end": 13734,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 13720,
                              "end": 13732,
                              "decorators": [],
                              "name": "privateClass",
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
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 13754,
                  "end": 13848,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 13773,
                    "end": 13795,
                    "decorators": [],
                    "name": "myPrivateStaticMethod1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13795,
                    "end": 13848,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 13798,
                      "end": 13848,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 13812,
                          "end": 13838,
                          "argument": {
                            "type": "NewExpression",
                            "start": 13819,
                            "end": 13837,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 13823,
                              "end": 13835,
                              "decorators": [],
                              "name": "privateClass",
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
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 13857,
                  "end": 13929,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 13861,
                    "end": 13876,
                    "decorators": [],
                    "name": "myPublicMethod1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13876,
                    "end": 13929,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 13879,
                      "end": 13929,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 13893,
                          "end": 13919,
                          "argument": {
                            "type": "NewExpression",
                            "start": 13900,
                            "end": 13918,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 13904,
                              "end": 13916,
                              "decorators": [],
                              "name": "privateClass",
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
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 13938,
                  "end": 14019,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 13950,
                    "end": 13966,
                    "decorators": [],
                    "name": "myPrivateMethod1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13966,
                    "end": 14019,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 13969,
                      "end": 14019,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 13983,
                          "end": 14009,
                          "argument": {
                            "type": "NewExpression",
                            "start": 13990,
                            "end": 14008,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 13994,
                              "end": 14006,
                              "decorators": [],
                              "name": "privateClass",
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
              "start": 13242,
              "end": 13285,
              "decorators": [],
              "name": "privateClassWithWithPrivateGetAccessorTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 14031,
            "end": 14811,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 14080,
              "end": 14811,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 14090,
                  "end": 14173,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 14101,
                    "end": 14121,
                    "decorators": [],
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 14121,
                    "end": 14173,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 14137,
                      "end": 14173,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 14151,
                          "end": 14163,
                          "argument": {
                            "type": "Literal",
                            "start": 14158,
                            "end": 14162,
                            "raw": "null",
                            "value": null
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
                      "start": 14123,
                      "end": 14136,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 14125,
                        "end": 14136,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 14125,
                          "end": 14136,
                          "decorators": [],
                          "name": "publicClass",
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
                  "start": 14182,
                  "end": 14274,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 14201,
                    "end": 14222,
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 14222,
                    "end": 14274,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 14238,
                      "end": 14274,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 14252,
                          "end": 14264,
                          "argument": {
                            "type": "Literal",
                            "start": 14259,
                            "end": 14263,
                            "raw": "null",
                            "value": null
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
                      "start": 14224,
                      "end": 14237,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 14226,
                        "end": 14237,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 14226,
                          "end": 14237,
                          "decorators": [],
                          "name": "publicClass",
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
                  "start": 14283,
                  "end": 14353,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 14287,
                    "end": 14301,
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 14301,
                    "end": 14353,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 14317,
                      "end": 14353,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 14331,
                          "end": 14343,
                          "argument": {
                            "type": "Literal",
                            "start": 14338,
                            "end": 14342,
                            "raw": "null",
                            "value": null
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
                      "start": 14303,
                      "end": 14316,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 14305,
                        "end": 14316,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 14305,
                          "end": 14316,
                          "decorators": [],
                          "name": "publicClass",
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
                  "start": 14362,
                  "end": 14441,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 14374,
                    "end": 14389,
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 14389,
                    "end": 14441,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 14405,
                      "end": 14441,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 14419,
                          "end": 14431,
                          "argument": {
                            "type": "Literal",
                            "start": 14426,
                            "end": 14430,
                            "raw": "null",
                            "value": null
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
                      "start": 14391,
                      "end": 14404,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 14393,
                        "end": 14404,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 14393,
                          "end": 14404,
                          "decorators": [],
                          "name": "publicClass",
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
                  "start": 14450,
                  "end": 14534,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 14461,
                    "end": 14482,
                    "decorators": [],
                    "name": "myPublicStaticMethod1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 14482,
                    "end": 14534,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 14485,
                      "end": 14534,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 14499,
                          "end": 14524,
                          "argument": {
                            "type": "NewExpression",
                            "start": 14506,
                            "end": 14523,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 14510,
                              "end": 14521,
                              "decorators": [],
                              "name": "publicClass",
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
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 14543,
                  "end": 14636,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 14562,
                    "end": 14584,
                    "decorators": [],
                    "name": "myPrivateStaticMethod1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 14584,
                    "end": 14636,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 14587,
                      "end": 14636,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 14601,
                          "end": 14626,
                          "argument": {
                            "type": "NewExpression",
                            "start": 14608,
                            "end": 14625,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 14612,
                              "end": 14623,
                              "decorators": [],
                              "name": "publicClass",
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
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 14645,
                  "end": 14716,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 14649,
                    "end": 14664,
                    "decorators": [],
                    "name": "myPublicMethod1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 14664,
                    "end": 14716,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 14667,
                      "end": 14716,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 14681,
                          "end": 14706,
                          "argument": {
                            "type": "NewExpression",
                            "start": 14688,
                            "end": 14705,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 14692,
                              "end": 14703,
                              "decorators": [],
                              "name": "publicClass",
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
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 14725,
                  "end": 14805,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 14737,
                    "end": 14753,
                    "decorators": [],
                    "name": "myPrivateMethod1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 14753,
                    "end": 14805,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 14756,
                      "end": 14805,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 14770,
                          "end": 14795,
                          "argument": {
                            "type": "NewExpression",
                            "start": 14777,
                            "end": 14794,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 14781,
                              "end": 14792,
                              "decorators": [],
                              "name": "publicClass",
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
              "start": 14037,
              "end": 14079,
              "decorators": [],
              "name": "privateClassWithWithPublicGetAccessorTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 14817,
            "end": 15166,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 14824,
              "end": 15166,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 14873,
                "end": 15166,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 14883,
                    "end": 14948,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 14894,
                      "end": 14914,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 14914,
                      "end": 14948,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 14936,
                        "end": 14948,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 14915,
                          "end": 14934,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 14920,
                            "end": 14934,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 14922,
                              "end": 14934,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 14922,
                                "end": 14934,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 14957,
                    "end": 15030,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 14976,
                      "end": 14997,
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 14997,
                      "end": 15030,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 15019,
                        "end": 15030,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 14998,
                          "end": 15017,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 15003,
                            "end": 15017,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 15005,
                              "end": 15017,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 15005,
                                "end": 15017,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 15039,
                    "end": 15091,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 15043,
                      "end": 15057,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 15057,
                      "end": 15091,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 15079,
                        "end": 15091,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 15058,
                          "end": 15077,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 15063,
                            "end": 15077,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 15065,
                              "end": 15077,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 15065,
                                "end": 15077,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 15100,
                    "end": 15160,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 15112,
                      "end": 15127,
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 15127,
                      "end": 15160,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 15149,
                        "end": 15160,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 15128,
                          "end": 15147,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 15133,
                            "end": 15147,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 15135,
                              "end": 15147,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 15135,
                                "end": 15147,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
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
                "start": 14830,
                "end": 14872,
                "decorators": [],
                "name": "publicClassWithWithPrivateSetAccessorTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 15172,
            "end": 15514,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 15179,
              "end": 15514,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 15227,
                "end": 15514,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 15237,
                    "end": 15300,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 15248,
                      "end": 15268,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 15268,
                      "end": 15300,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 15289,
                        "end": 15300,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 15269,
                          "end": 15287,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 15274,
                            "end": 15287,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 15276,
                              "end": 15287,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 15276,
                                "end": 15287,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 15309,
                    "end": 15381,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 15328,
                      "end": 15349,
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 15349,
                      "end": 15381,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 15370,
                        "end": 15381,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 15350,
                          "end": 15368,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 15355,
                            "end": 15368,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 15357,
                              "end": 15368,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 15357,
                                "end": 15368,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 15390,
                    "end": 15440,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 15394,
                      "end": 15408,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 15408,
                      "end": 15440,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 15429,
                        "end": 15440,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 15409,
                          "end": 15427,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 15414,
                            "end": 15427,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 15416,
                              "end": 15427,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 15416,
                                "end": 15427,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 15449,
                    "end": 15508,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 15461,
                      "end": 15476,
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 15476,
                      "end": 15508,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 15497,
                        "end": 15508,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 15477,
                          "end": 15495,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 15482,
                            "end": 15495,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 15484,
                              "end": 15495,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 15484,
                                "end": 15495,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
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
                "start": 15185,
                "end": 15226,
                "decorators": [],
                "name": "publicClassWithWithPublicSetAccessorTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ClassDeclaration",
            "start": 15520,
            "end": 15861,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 15570,
              "end": 15861,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 15580,
                  "end": 15644,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 15591,
                    "end": 15611,
                    "decorators": [],
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 15611,
                    "end": 15644,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 15633,
                      "end": 15644,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 15612,
                        "end": 15631,
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 15617,
                          "end": 15631,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 15619,
                            "end": 15631,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 15619,
                              "end": 15631,
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 15653,
                  "end": 15726,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 15672,
                    "end": 15693,
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 15693,
                    "end": 15726,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 15715,
                      "end": 15726,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 15694,
                        "end": 15713,
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 15699,
                          "end": 15713,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 15701,
                            "end": 15713,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 15701,
                              "end": 15713,
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 15735,
                  "end": 15786,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 15739,
                    "end": 15753,
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 15753,
                    "end": 15786,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 15775,
                      "end": 15786,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 15754,
                        "end": 15773,
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 15759,
                          "end": 15773,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 15761,
                            "end": 15773,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 15761,
                              "end": 15773,
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 15795,
                  "end": 15855,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 15807,
                    "end": 15822,
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 15822,
                    "end": 15855,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 15844,
                      "end": 15855,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 15823,
                        "end": 15842,
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 15828,
                          "end": 15842,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 15830,
                            "end": 15842,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 15830,
                              "end": 15842,
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
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
              "start": 15526,
              "end": 15569,
              "decorators": [],
              "name": "privateClassWithWithPrivateSetAccessorTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 15867,
            "end": 16203,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 15916,
              "end": 16203,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 15926,
                  "end": 15989,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 15937,
                    "end": 15957,
                    "decorators": [],
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 15957,
                    "end": 15989,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 15978,
                      "end": 15989,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 15958,
                        "end": 15976,
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 15963,
                          "end": 15976,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 15965,
                            "end": 15976,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 15965,
                              "end": 15976,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 15998,
                  "end": 16070,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 16017,
                    "end": 16038,
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 16038,
                    "end": 16070,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 16059,
                      "end": 16070,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 16039,
                        "end": 16057,
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 16044,
                          "end": 16057,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 16046,
                            "end": 16057,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 16046,
                              "end": 16057,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 16079,
                  "end": 16129,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 16083,
                    "end": 16097,
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 16097,
                    "end": 16129,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 16118,
                      "end": 16129,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 16098,
                        "end": 16116,
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 16103,
                          "end": 16116,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 16105,
                            "end": 16116,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 16105,
                              "end": 16116,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 16138,
                  "end": 16197,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 16150,
                    "end": 16165,
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 16165,
                    "end": 16197,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 16186,
                      "end": 16197,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 16166,
                        "end": 16184,
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 16171,
                          "end": 16184,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 16173,
                            "end": 16184,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 16173,
                              "end": 16184,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
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
              "start": 15873,
              "end": 15915,
              "decorators": [],
              "name": "privateClassWithWithPublicSetAccessorTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 16209,
            "end": 16678,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 16216,
              "end": 16678,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 16267,
                "end": 16678,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 16277,
                    "end": 16375,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 16288,
                      "end": 16308,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 16308,
                      "end": 16375,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 16338,
                        "end": 16375,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 16353,
                            "end": 16365,
                            "argument": {
                              "type": "Literal",
                              "start": 16360,
                              "end": 16364,
                              "raw": "null",
                              "value": null
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
                        "start": 16310,
                        "end": 16337,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 16312,
                          "end": 16337,
                          "typeArguments": null,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 16312,
                            "end": 16337,
                            "left": {
                              "type": "Identifier",
                              "start": 16312,
                              "end": 16325,
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 16326,
                              "end": 16337,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 16384,
                    "end": 16469,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 16388,
                      "end": 16402,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 16402,
                      "end": 16469,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 16432,
                        "end": 16469,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 16447,
                            "end": 16459,
                            "argument": {
                              "type": "Literal",
                              "start": 16454,
                              "end": 16458,
                              "raw": "null",
                              "value": null
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
                        "start": 16404,
                        "end": 16431,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 16406,
                          "end": 16431,
                          "typeArguments": null,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 16406,
                            "end": 16431,
                            "left": {
                              "type": "Identifier",
                              "start": 16406,
                              "end": 16419,
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 16420,
                              "end": 16431,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 16478,
                    "end": 16577,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 16489,
                      "end": 16510,
                      "decorators": [],
                      "name": "myPublicStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 16510,
                      "end": 16577,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 16513,
                        "end": 16577,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 16528,
                            "end": 16567,
                            "argument": {
                              "type": "NewExpression",
                              "start": 16535,
                              "end": 16566,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 16539,
                                "end": 16564,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 16539,
                                  "end": 16552,
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 16553,
                                  "end": 16564,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
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
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 16586,
                    "end": 16672,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 16590,
                      "end": 16605,
                      "decorators": [],
                      "name": "myPublicMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 16605,
                      "end": 16672,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 16608,
                        "end": 16672,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 16623,
                            "end": 16662,
                            "argument": {
                              "type": "NewExpression",
                              "start": 16630,
                              "end": 16661,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 16634,
                                "end": 16659,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 16634,
                                  "end": 16647,
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 16648,
                                  "end": 16659,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
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
                "start": 16222,
                "end": 16266,
                "decorators": [],
                "name": "publicClassWithPrivateModuleGetAccessorTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 16684,
            "end": 16910,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 16691,
              "end": 16910,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 16742,
                "end": 16910,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 16752,
                    "end": 16830,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 16763,
                      "end": 16783,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 16783,
                      "end": 16830,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 16818,
                        "end": 16830,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 16784,
                          "end": 16816,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 16789,
                            "end": 16816,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 16791,
                              "end": 16816,
                              "typeArguments": null,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 16791,
                                "end": 16816,
                                "left": {
                                  "type": "Identifier",
                                  "start": 16791,
                                  "end": 16804,
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 16805,
                                  "end": 16816,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 16839,
                    "end": 16904,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 16843,
                      "end": 16857,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 16857,
                      "end": 16904,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 16892,
                        "end": 16904,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 16858,
                          "end": 16890,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 16863,
                            "end": 16890,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 16865,
                              "end": 16890,
                              "typeArguments": null,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 16865,
                                "end": 16890,
                                "left": {
                                  "type": "Identifier",
                                  "start": 16865,
                                  "end": 16878,
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 16879,
                                  "end": 16890,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        }
                      ],
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
                "start": 16697,
                "end": 16741,
                "decorators": [],
                "name": "publicClassWithPrivateModuleSetAccessorTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ClassDeclaration",
            "start": 16916,
            "end": 17375,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 16968,
              "end": 17375,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 16978,
                  "end": 17075,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 16989,
                    "end": 17009,
                    "decorators": [],
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 17009,
                    "end": 17075,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 17039,
                      "end": 17075,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 17053,
                          "end": 17065,
                          "argument": {
                            "type": "Literal",
                            "start": 17060,
                            "end": 17064,
                            "raw": "null",
                            "value": null
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
                      "start": 17011,
                      "end": 17038,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 17013,
                        "end": 17038,
                        "typeArguments": null,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 17013,
                          "end": 17038,
                          "left": {
                            "type": "Identifier",
                            "start": 17013,
                            "end": 17026,
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 17027,
                            "end": 17038,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 17084,
                  "end": 17168,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 17088,
                    "end": 17102,
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 17102,
                    "end": 17168,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 17132,
                      "end": 17168,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 17146,
                          "end": 17158,
                          "argument": {
                            "type": "Literal",
                            "start": 17153,
                            "end": 17157,
                            "raw": "null",
                            "value": null
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
                      "start": 17104,
                      "end": 17131,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 17106,
                        "end": 17131,
                        "typeArguments": null,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 17106,
                          "end": 17131,
                          "left": {
                            "type": "Identifier",
                            "start": 17106,
                            "end": 17119,
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 17120,
                            "end": 17131,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 17177,
                  "end": 17275,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 17188,
                    "end": 17209,
                    "decorators": [],
                    "name": "myPublicStaticMethod1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 17209,
                    "end": 17275,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 17212,
                      "end": 17275,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 17226,
                          "end": 17265,
                          "argument": {
                            "type": "NewExpression",
                            "start": 17233,
                            "end": 17264,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 17237,
                              "end": 17262,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 17237,
                                "end": 17250,
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 17251,
                                "end": 17262,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
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
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 17284,
                  "end": 17369,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 17288,
                    "end": 17303,
                    "decorators": [],
                    "name": "myPublicMethod1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 17303,
                    "end": 17369,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 17306,
                      "end": 17369,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 17320,
                          "end": 17359,
                          "argument": {
                            "type": "NewExpression",
                            "start": 17327,
                            "end": 17358,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 17331,
                              "end": 17356,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 17331,
                                "end": 17344,
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 17345,
                                "end": 17356,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
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
              "start": 16922,
              "end": 16967,
              "decorators": [],
              "name": "privateClassWithPrivateModuleGetAccessorTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 17381,
            "end": 17599,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 17433,
              "end": 17599,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 17443,
                  "end": 17520,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 17454,
                    "end": 17474,
                    "decorators": [],
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 17474,
                    "end": 17520,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 17509,
                      "end": 17520,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 17475,
                        "end": 17507,
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 17480,
                          "end": 17507,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 17482,
                            "end": 17507,
                            "typeArguments": null,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 17482,
                              "end": 17507,
                              "left": {
                                "type": "Identifier",
                                "start": 17482,
                                "end": 17495,
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 17496,
                                "end": 17507,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 17529,
                  "end": 17593,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 17533,
                    "end": 17547,
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 17547,
                    "end": 17593,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 17582,
                      "end": 17593,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 17548,
                        "end": 17580,
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 17553,
                          "end": 17580,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 17555,
                            "end": 17580,
                            "typeArguments": null,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 17555,
                              "end": 17580,
                              "left": {
                                "type": "Identifier",
                                "start": 17555,
                                "end": 17568,
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 17569,
                                "end": 17580,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      }
                    ],
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
              "start": 17387,
              "end": 17432,
              "decorators": [],
              "name": "privateClassWithPrivateModuleSetAccessorTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 11550,
        "end": 11563,
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 14091,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 29,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 29,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 25,
        "decorators": [],
        "name": "publicClassInGlobal",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 31,
      "end": 778,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 83,
        "end": 778,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 89,
            "end": 172,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 120,
              "decorators": [],
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 120,
              "end": 172,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 144,
                "end": 172,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 154,
                    "end": 166,
                    "argument": {
                      "type": "Literal",
                      "start": 161,
                      "end": 165,
                      "raw": "null",
                      "value": null
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
                "start": 122,
                "end": 143,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 124,
                  "end": 143,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 143,
                    "decorators": [],
                    "name": "publicClassInGlobal",
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
            "start": 177,
            "end": 269,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 217,
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 217,
              "end": 269,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 241,
                "end": 269,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 251,
                    "end": 263,
                    "argument": {
                      "type": "Literal",
                      "start": 258,
                      "end": 262,
                      "raw": "null",
                      "value": null
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
                "start": 219,
                "end": 240,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 221,
                  "end": 240,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 240,
                    "decorators": [],
                    "name": "publicClassInGlobal",
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
            "start": 274,
            "end": 344,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 278,
              "end": 292,
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 292,
              "end": 344,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 316,
                "end": 344,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 326,
                    "end": 338,
                    "argument": {
                      "type": "Literal",
                      "start": 333,
                      "end": 337,
                      "raw": "null",
                      "value": null
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
                "start": 294,
                "end": 315,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 296,
                  "end": 315,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 315,
                    "decorators": [],
                    "name": "publicClassInGlobal",
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
            "start": 349,
            "end": 428,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 361,
              "end": 376,
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 376,
              "end": 428,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 400,
                "end": 428,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 410,
                    "end": 422,
                    "argument": {
                      "type": "Literal",
                      "start": 417,
                      "end": 421,
                      "raw": "null",
                      "value": null
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
                "start": 378,
                "end": 399,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 380,
                  "end": 399,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 380,
                    "end": 399,
                    "decorators": [],
                    "name": "publicClassInGlobal",
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
            "start": 433,
            "end": 517,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 444,
              "end": 465,
              "decorators": [],
              "name": "myPublicStaticMethod1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 465,
              "end": 517,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 468,
                "end": 517,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 478,
                    "end": 511,
                    "argument": {
                      "type": "NewExpression",
                      "start": 485,
                      "end": 510,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 489,
                        "end": 508,
                        "decorators": [],
                        "name": "publicClassInGlobal",
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
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 522,
            "end": 615,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 541,
              "end": 563,
              "decorators": [],
              "name": "myPrivateStaticMethod1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 563,
              "end": 615,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 566,
                "end": 615,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 576,
                    "end": 609,
                    "argument": {
                      "type": "NewExpression",
                      "start": 583,
                      "end": 608,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 587,
                        "end": 606,
                        "decorators": [],
                        "name": "publicClassInGlobal",
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
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 620,
            "end": 691,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 624,
              "end": 639,
              "decorators": [],
              "name": "myPublicMethod1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 639,
              "end": 691,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 642,
                "end": 691,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 652,
                    "end": 685,
                    "argument": {
                      "type": "NewExpression",
                      "start": 659,
                      "end": 684,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 663,
                        "end": 682,
                        "decorators": [],
                        "name": "publicClassInGlobal",
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
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 696,
            "end": 776,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 708,
              "end": 724,
              "decorators": [],
              "name": "myPrivateMethod1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 724,
              "end": 776,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 727,
                "end": 776,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 737,
                    "end": 770,
                    "argument": {
                      "type": "NewExpression",
                      "start": 744,
                      "end": 769,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 748,
                        "end": 767,
                        "decorators": [],
                        "name": "publicClassInGlobal",
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
        "start": 37,
        "end": 82,
        "decorators": [],
        "name": "publicClassInGlobalWithPublicGetAccessorTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 780,
      "end": 1119,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 836,
        "end": 1119,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 842,
            "end": 909,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 853,
              "end": 873,
              "decorators": [],
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 873,
              "end": 909,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 902,
                "end": 909,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 874,
                  "end": 900,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 879,
                    "end": 900,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 881,
                      "end": 900,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 881,
                        "end": 900,
                        "decorators": [],
                        "name": "publicClassInGlobal",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 914,
            "end": 990,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 933,
              "end": 954,
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 954,
              "end": 990,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 983,
                "end": 990,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 955,
                  "end": 981,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 960,
                    "end": 981,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 962,
                      "end": 981,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 962,
                        "end": 981,
                        "decorators": [],
                        "name": "publicClassInGlobal",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 995,
            "end": 1049,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 999,
              "end": 1013,
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1013,
              "end": 1049,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1042,
                "end": 1049,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1014,
                  "end": 1040,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1019,
                    "end": 1040,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1021,
                      "end": 1040,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1021,
                        "end": 1040,
                        "decorators": [],
                        "name": "publicClassInGlobal",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1054,
            "end": 1117,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1066,
              "end": 1081,
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1081,
              "end": 1117,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1110,
                "end": 1117,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1082,
                  "end": 1108,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1087,
                    "end": 1108,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1089,
                      "end": 1108,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1089,
                        "end": 1108,
                        "decorators": [],
                        "name": "publicClassInGlobal",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
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
        "start": 786,
        "end": 835,
        "decorators": [],
        "name": "publicClassInGlobalWithWithPublicSetAccessorTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1121,
      "end": 14091,
      "body": {
        "type": "TSModuleBlock",
        "start": 1149,
        "end": 14091,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 1155,
            "end": 1181,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1174,
              "end": 1181,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1161,
              "end": 1173,
              "decorators": [],
              "name": "privateClass",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1187,
            "end": 1219,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1194,
              "end": 1219,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 1212,
                "end": 1219,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1200,
                "end": 1211,
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "TSModuleDeclaration",
            "start": 1225,
            "end": 8027,
            "body": {
              "type": "TSModuleBlock",
              "start": 1246,
              "end": 8027,
              "body": [
                {
                  "type": "ClassDeclaration",
                  "start": 1256,
                  "end": 1286,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 1275,
                    "end": 1286,
                    "body": []
                  },
                  "declare": false,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 1262,
                    "end": 1274,
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "implements": [],
                  "superClass": null,
                  "superTypeArguments": null,
                  "typeParameters": null
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 1296,
                  "end": 1332,
                  "attributes": [],
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 1303,
                    "end": 1332,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 1321,
                      "end": 1332,
                      "body": []
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 1309,
                      "end": 1320,
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "implements": [],
                    "superClass": null,
                    "superTypeArguments": null,
                    "typeParameters": null
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 1341,
                  "end": 2236,
                  "attributes": [],
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 1348,
                    "end": 2236,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 1397,
                      "end": 2236,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 1411,
                          "end": 1503,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 1422,
                            "end": 1442,
                            "decorators": [],
                            "name": "myPublicStaticMethod",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "get",
                          "optional": false,
                          "override": false,
                          "static": true,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 1442,
                            "end": 1503,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 1459,
                              "end": 1503,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 1477,
                                  "end": 1489,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 1484,
                                    "end": 1488,
                                    "raw": "null",
                                    "value": null
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
                              "start": 1444,
                              "end": 1458,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1446,
                                "end": 1458,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1446,
                                  "end": 1458,
                                  "decorators": [],
                                  "name": "privateClass",
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
                          "start": 1516,
                          "end": 1617,
                          "accessibility": "private",
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 1535,
                            "end": 1556,
                            "decorators": [],
                            "name": "myPrivateStaticMethod",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "get",
                          "optional": false,
                          "override": false,
                          "static": true,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 1556,
                            "end": 1617,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 1573,
                              "end": 1617,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 1591,
                                  "end": 1603,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 1598,
                                    "end": 1602,
                                    "raw": "null",
                                    "value": null
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
                              "start": 1558,
                              "end": 1572,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1560,
                                "end": 1572,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1560,
                                  "end": 1572,
                                  "decorators": [],
                                  "name": "privateClass",
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
                          "start": 1630,
                          "end": 1709,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 1634,
                            "end": 1648,
                            "decorators": [],
                            "name": "myPublicMethod",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "get",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 1648,
                            "end": 1709,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 1665,
                              "end": 1709,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 1683,
                                  "end": 1695,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 1690,
                                    "end": 1694,
                                    "raw": "null",
                                    "value": null
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
                              "start": 1650,
                              "end": 1664,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1652,
                                "end": 1664,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1652,
                                  "end": 1664,
                                  "decorators": [],
                                  "name": "privateClass",
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
                          "start": 1722,
                          "end": 1810,
                          "accessibility": "private",
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 1734,
                            "end": 1749,
                            "decorators": [],
                            "name": "myPrivateMethod",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "get",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 1749,
                            "end": 1810,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 1766,
                              "end": 1810,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 1784,
                                  "end": 1796,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 1791,
                                    "end": 1795,
                                    "raw": "null",
                                    "value": null
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
                              "start": 1751,
                              "end": 1765,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1753,
                                "end": 1765,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1753,
                                  "end": 1765,
                                  "decorators": [],
                                  "name": "privateClass",
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
                          "start": 1823,
                          "end": 1916,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 1834,
                            "end": 1855,
                            "decorators": [],
                            "name": "myPublicStaticMethod1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "get",
                          "optional": false,
                          "override": false,
                          "static": true,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 1855,
                            "end": 1916,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 1858,
                              "end": 1916,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 1876,
                                  "end": 1902,
                                  "argument": {
                                    "type": "NewExpression",
                                    "start": 1883,
                                    "end": 1901,
                                    "arguments": [],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 1887,
                                      "end": 1899,
                                      "decorators": [],
                                      "name": "privateClass",
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
                            "returnType": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 1929,
                          "end": 2031,
                          "accessibility": "private",
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 1948,
                            "end": 1970,
                            "decorators": [],
                            "name": "myPrivateStaticMethod1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "get",
                          "optional": false,
                          "override": false,
                          "static": true,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 1970,
                            "end": 2031,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 1973,
                              "end": 2031,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 1991,
                                  "end": 2017,
                                  "argument": {
                                    "type": "NewExpression",
                                    "start": 1998,
                                    "end": 2016,
                                    "arguments": [],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 2002,
                                      "end": 2014,
                                      "decorators": [],
                                      "name": "privateClass",
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
                            "returnType": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 2044,
                          "end": 2124,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 2048,
                            "end": 2063,
                            "decorators": [],
                            "name": "myPublicMethod1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "get",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2063,
                            "end": 2124,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 2066,
                              "end": 2124,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 2084,
                                  "end": 2110,
                                  "argument": {
                                    "type": "NewExpression",
                                    "start": 2091,
                                    "end": 2109,
                                    "arguments": [],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 2095,
                                      "end": 2107,
                                      "decorators": [],
                                      "name": "privateClass",
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
                            "returnType": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 2137,
                          "end": 2226,
                          "accessibility": "private",
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 2149,
                            "end": 2165,
                            "decorators": [],
                            "name": "myPrivateMethod1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "get",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2165,
                            "end": 2226,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 2168,
                              "end": 2226,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 2186,
                                  "end": 2212,
                                  "argument": {
                                    "type": "NewExpression",
                                    "start": 2193,
                                    "end": 2211,
                                    "arguments": [],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 2197,
                                      "end": 2209,
                                      "decorators": [],
                                      "name": "privateClass",
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
                      "start": 1354,
                      "end": 1396,
                      "decorators": [],
                      "name": "publicClassWithWithPrivateGetAccessorTypes",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "implements": [],
                    "superClass": null,
                    "superTypeArguments": null,
                    "typeParameters": null
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 2246,
                  "end": 3132,
                  "attributes": [],
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 2253,
                    "end": 3132,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 2301,
                      "end": 3132,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 2315,
                          "end": 2406,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 2326,
                            "end": 2346,
                            "decorators": [],
                            "name": "myPublicStaticMethod",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "get",
                          "optional": false,
                          "override": false,
                          "static": true,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2346,
                            "end": 2406,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 2362,
                              "end": 2406,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 2380,
                                  "end": 2392,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 2387,
                                    "end": 2391,
                                    "raw": "null",
                                    "value": null
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
                              "start": 2348,
                              "end": 2361,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2350,
                                "end": 2361,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2350,
                                  "end": 2361,
                                  "decorators": [],
                                  "name": "publicClass",
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
                          "start": 2419,
                          "end": 2519,
                          "accessibility": "private",
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 2438,
                            "end": 2459,
                            "decorators": [],
                            "name": "myPrivateStaticMethod",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "get",
                          "optional": false,
                          "override": false,
                          "static": true,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2459,
                            "end": 2519,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 2475,
                              "end": 2519,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 2493,
                                  "end": 2505,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 2500,
                                    "end": 2504,
                                    "raw": "null",
                                    "value": null
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
                              "start": 2461,
                              "end": 2474,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2463,
                                "end": 2474,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2463,
                                  "end": 2474,
                                  "decorators": [],
                                  "name": "publicClass",
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
                          "start": 2532,
                          "end": 2610,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 2536,
                            "end": 2550,
                            "decorators": [],
                            "name": "myPublicMethod",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "get",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2550,
                            "end": 2610,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 2566,
                              "end": 2610,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 2584,
                                  "end": 2596,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 2591,
                                    "end": 2595,
                                    "raw": "null",
                                    "value": null
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
                              "start": 2552,
                              "end": 2565,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2554,
                                "end": 2565,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2554,
                                  "end": 2565,
                                  "decorators": [],
                                  "name": "publicClass",
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
                          "start": 2623,
                          "end": 2710,
                          "accessibility": "private",
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 2635,
                            "end": 2650,
                            "decorators": [],
                            "name": "myPrivateMethod",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "get",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2650,
                            "end": 2710,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 2666,
                              "end": 2710,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 2684,
                                  "end": 2696,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 2691,
                                    "end": 2695,
                                    "raw": "null",
                                    "value": null
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
                              "start": 2652,
                              "end": 2665,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2654,
                                "end": 2665,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2654,
                                  "end": 2665,
                                  "decorators": [],
                                  "name": "publicClass",
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
                          "start": 2723,
                          "end": 2815,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 2734,
                            "end": 2755,
                            "decorators": [],
                            "name": "myPublicStaticMethod1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "get",
                          "optional": false,
                          "override": false,
                          "static": true,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2755,
                            "end": 2815,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 2758,
                              "end": 2815,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 2776,
                                  "end": 2801,
                                  "argument": {
                                    "type": "NewExpression",
                                    "start": 2783,
                                    "end": 2800,
                                    "arguments": [],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 2787,
                                      "end": 2798,
                                      "decorators": [],
                                      "name": "publicClass",
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
                            "returnType": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 2828,
                          "end": 2929,
                          "accessibility": "private",
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 2847,
                            "end": 2869,
                            "decorators": [],
                            "name": "myPrivateStaticMethod1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "get",
                          "optional": false,
                          "override": false,
                          "static": true,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2869,
                            "end": 2929,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 2872,
                              "end": 2929,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 2890,
                                  "end": 2915,
                                  "argument": {
                                    "type": "NewExpression",
                                    "start": 2897,
                                    "end": 2914,
                                    "arguments": [],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 2901,
                                      "end": 2912,
                                      "decorators": [],
                                      "name": "publicClass",
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
                            "returnType": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 2942,
                          "end": 3021,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 2946,
                            "end": 2961,
                            "decorators": [],
                            "name": "myPublicMethod1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "get",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2961,
                            "end": 3021,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 2964,
                              "end": 3021,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 2982,
                                  "end": 3007,
                                  "argument": {
                                    "type": "NewExpression",
                                    "start": 2989,
                                    "end": 3006,
                                    "arguments": [],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 2993,
                                      "end": 3004,
                                      "decorators": [],
                                      "name": "publicClass",
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
                            "returnType": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 3034,
                          "end": 3122,
                          "accessibility": "private",
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 3046,
                            "end": 3062,
                            "decorators": [],
                            "name": "myPrivateMethod1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "get",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 3062,
                            "end": 3122,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 3065,
                              "end": 3122,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 3083,
                                  "end": 3108,
                                  "argument": {
                                    "type": "NewExpression",
                                    "start": 3090,
                                    "end": 3107,
                                    "arguments": [],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 3094,
                                      "end": 3105,
                                      "decorators": [],
                                      "name": "publicClass",
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
                      "start": 2259,
                      "end": 2300,
                      "decorators": [],
                      "name": "publicClassWithWithPublicGetAccessorTypes",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "implements": [],
                    "superClass": null,
                    "superTypeArguments": null,
                    "typeParameters": null
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                },
                {
                  "type": "ClassDeclaration",
                  "start": 3142,
                  "end": 4031,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 3192,
                    "end": 4031,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 3206,
                        "end": 3298,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 3217,
                          "end": 3237,
                          "decorators": [],
                          "name": "myPublicStaticMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "get",
                        "optional": false,
                        "override": false,
                        "static": true,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3237,
                          "end": 3298,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 3254,
                            "end": 3298,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 3272,
                                "end": 3284,
                                "argument": {
                                  "type": "Literal",
                                  "start": 3279,
                                  "end": 3283,
                                  "raw": "null",
                                  "value": null
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
                            "start": 3239,
                            "end": 3253,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3241,
                              "end": 3253,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3241,
                                "end": 3253,
                                "decorators": [],
                                "name": "privateClass",
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
                        "start": 3311,
                        "end": 3412,
                        "accessibility": "private",
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 3330,
                          "end": 3351,
                          "decorators": [],
                          "name": "myPrivateStaticMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "get",
                        "optional": false,
                        "override": false,
                        "static": true,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3351,
                          "end": 3412,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 3368,
                            "end": 3412,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 3386,
                                "end": 3398,
                                "argument": {
                                  "type": "Literal",
                                  "start": 3393,
                                  "end": 3397,
                                  "raw": "null",
                                  "value": null
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
                            "start": 3353,
                            "end": 3367,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3355,
                              "end": 3367,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3355,
                                "end": 3367,
                                "decorators": [],
                                "name": "privateClass",
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
                        "start": 3425,
                        "end": 3504,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 3429,
                          "end": 3443,
                          "decorators": [],
                          "name": "myPublicMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "get",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3443,
                          "end": 3504,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 3460,
                            "end": 3504,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 3478,
                                "end": 3490,
                                "argument": {
                                  "type": "Literal",
                                  "start": 3485,
                                  "end": 3489,
                                  "raw": "null",
                                  "value": null
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
                            "start": 3445,
                            "end": 3459,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3447,
                              "end": 3459,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3447,
                                "end": 3459,
                                "decorators": [],
                                "name": "privateClass",
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
                        "start": 3517,
                        "end": 3605,
                        "accessibility": "private",
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 3529,
                          "end": 3544,
                          "decorators": [],
                          "name": "myPrivateMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "get",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3544,
                          "end": 3605,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 3561,
                            "end": 3605,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 3579,
                                "end": 3591,
                                "argument": {
                                  "type": "Literal",
                                  "start": 3586,
                                  "end": 3590,
                                  "raw": "null",
                                  "value": null
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
                            "start": 3546,
                            "end": 3560,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3548,
                              "end": 3560,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3548,
                                "end": 3560,
                                "decorators": [],
                                "name": "privateClass",
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
                        "start": 3618,
                        "end": 3711,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 3629,
                          "end": 3650,
                          "decorators": [],
                          "name": "myPublicStaticMethod1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "get",
                        "optional": false,
                        "override": false,
                        "static": true,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3650,
                          "end": 3711,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 3653,
                            "end": 3711,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 3671,
                                "end": 3697,
                                "argument": {
                                  "type": "NewExpression",
                                  "start": 3678,
                                  "end": 3696,
                                  "arguments": [],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 3682,
                                    "end": 3694,
                                    "decorators": [],
                                    "name": "privateClass",
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
                          "returnType": null,
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 3724,
                        "end": 3826,
                        "accessibility": "private",
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 3743,
                          "end": 3765,
                          "decorators": [],
                          "name": "myPrivateStaticMethod1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "get",
                        "optional": false,
                        "override": false,
                        "static": true,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3765,
                          "end": 3826,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 3768,
                            "end": 3826,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 3786,
                                "end": 3812,
                                "argument": {
                                  "type": "NewExpression",
                                  "start": 3793,
                                  "end": 3811,
                                  "arguments": [],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 3797,
                                    "end": 3809,
                                    "decorators": [],
                                    "name": "privateClass",
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
                          "returnType": null,
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 3839,
                        "end": 3919,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 3843,
                          "end": 3858,
                          "decorators": [],
                          "name": "myPublicMethod1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "get",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3858,
                          "end": 3919,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 3861,
                            "end": 3919,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 3879,
                                "end": 3905,
                                "argument": {
                                  "type": "NewExpression",
                                  "start": 3886,
                                  "end": 3904,
                                  "arguments": [],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 3890,
                                    "end": 3902,
                                    "decorators": [],
                                    "name": "privateClass",
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
                          "returnType": null,
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 3932,
                        "end": 4021,
                        "accessibility": "private",
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 3944,
                          "end": 3960,
                          "decorators": [],
                          "name": "myPrivateMethod1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "get",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3960,
                          "end": 4021,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 3963,
                            "end": 4021,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 3981,
                                "end": 4007,
                                "argument": {
                                  "type": "NewExpression",
                                  "start": 3988,
                                  "end": 4006,
                                  "arguments": [],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 3992,
                                    "end": 4004,
                                    "decorators": [],
                                    "name": "privateClass",
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
                    "start": 3148,
                    "end": 3191,
                    "decorators": [],
                    "name": "privateClassWithWithPrivateGetAccessorTypes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "implements": [],
                  "superClass": null,
                  "superTypeArguments": null,
                  "typeParameters": null
                },
                {
                  "type": "ClassDeclaration",
                  "start": 4041,
                  "end": 4921,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 4090,
                    "end": 4921,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 4104,
                        "end": 4195,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 4115,
                          "end": 4135,
                          "decorators": [],
                          "name": "myPublicStaticMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "get",
                        "optional": false,
                        "override": false,
                        "static": true,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 4135,
                          "end": 4195,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 4151,
                            "end": 4195,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 4169,
                                "end": 4181,
                                "argument": {
                                  "type": "Literal",
                                  "start": 4176,
                                  "end": 4180,
                                  "raw": "null",
                                  "value": null
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
                            "start": 4137,
                            "end": 4150,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4139,
                              "end": 4150,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4139,
                                "end": 4150,
                                "decorators": [],
                                "name": "publicClass",
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
                        "start": 4208,
                        "end": 4308,
                        "accessibility": "private",
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 4227,
                          "end": 4248,
                          "decorators": [],
                          "name": "myPrivateStaticMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "get",
                        "optional": false,
                        "override": false,
                        "static": true,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 4248,
                          "end": 4308,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 4264,
                            "end": 4308,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 4282,
                                "end": 4294,
                                "argument": {
                                  "type": "Literal",
                                  "start": 4289,
                                  "end": 4293,
                                  "raw": "null",
                                  "value": null
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
                            "start": 4250,
                            "end": 4263,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4252,
                              "end": 4263,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4252,
                                "end": 4263,
                                "decorators": [],
                                "name": "publicClass",
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
                        "start": 4321,
                        "end": 4399,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 4325,
                          "end": 4339,
                          "decorators": [],
                          "name": "myPublicMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "get",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 4339,
                          "end": 4399,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 4355,
                            "end": 4399,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 4373,
                                "end": 4385,
                                "argument": {
                                  "type": "Literal",
                                  "start": 4380,
                                  "end": 4384,
                                  "raw": "null",
                                  "value": null
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
                            "start": 4341,
                            "end": 4354,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4343,
                              "end": 4354,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4343,
                                "end": 4354,
                                "decorators": [],
                                "name": "publicClass",
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
                        "start": 4412,
                        "end": 4499,
                        "accessibility": "private",
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 4424,
                          "end": 4439,
                          "decorators": [],
                          "name": "myPrivateMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "get",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 4439,
                          "end": 4499,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 4455,
                            "end": 4499,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 4473,
                                "end": 4485,
                                "argument": {
                                  "type": "Literal",
                                  "start": 4480,
                                  "end": 4484,
                                  "raw": "null",
                                  "value": null
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
                            "start": 4441,
                            "end": 4454,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4443,
                              "end": 4454,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4443,
                                "end": 4454,
                                "decorators": [],
                                "name": "publicClass",
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
                        "start": 4512,
                        "end": 4604,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 4523,
                          "end": 4544,
                          "decorators": [],
                          "name": "myPublicStaticMethod1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "get",
                        "optional": false,
                        "override": false,
                        "static": true,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 4544,
                          "end": 4604,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 4547,
                            "end": 4604,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 4565,
                                "end": 4590,
                                "argument": {
                                  "type": "NewExpression",
                                  "start": 4572,
                                  "end": 4589,
                                  "arguments": [],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 4576,
                                    "end": 4587,
                                    "decorators": [],
                                    "name": "publicClass",
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
                          "returnType": null,
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 4617,
                        "end": 4718,
                        "accessibility": "private",
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 4636,
                          "end": 4658,
                          "decorators": [],
                          "name": "myPrivateStaticMethod1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "get",
                        "optional": false,
                        "override": false,
                        "static": true,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 4658,
                          "end": 4718,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 4661,
                            "end": 4718,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 4679,
                                "end": 4704,
                                "argument": {
                                  "type": "NewExpression",
                                  "start": 4686,
                                  "end": 4703,
                                  "arguments": [],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 4690,
                                    "end": 4701,
                                    "decorators": [],
                                    "name": "publicClass",
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
                          "returnType": null,
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 4731,
                        "end": 4810,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 4735,
                          "end": 4750,
                          "decorators": [],
                          "name": "myPublicMethod1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "get",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 4750,
                          "end": 4810,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 4753,
                            "end": 4810,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 4771,
                                "end": 4796,
                                "argument": {
                                  "type": "NewExpression",
                                  "start": 4778,
                                  "end": 4795,
                                  "arguments": [],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 4782,
                                    "end": 4793,
                                    "decorators": [],
                                    "name": "publicClass",
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
                          "returnType": null,
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 4823,
                        "end": 4911,
                        "accessibility": "private",
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 4835,
                          "end": 4851,
                          "decorators": [],
                          "name": "myPrivateMethod1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "get",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 4851,
                          "end": 4911,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 4854,
                            "end": 4911,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 4872,
                                "end": 4897,
                                "argument": {
                                  "type": "NewExpression",
                                  "start": 4879,
                                  "end": 4896,
                                  "arguments": [],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 4883,
                                    "end": 4894,
                                    "decorators": [],
                                    "name": "publicClass",
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
                    "start": 4047,
                    "end": 4089,
                    "decorators": [],
                    "name": "privateClassWithWithPublicGetAccessorTypes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "implements": [],
                  "superClass": null,
                  "superTypeArguments": null,
                  "typeParameters": null
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 4931,
                  "end": 5314,
                  "attributes": [],
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 4938,
                    "end": 5314,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 4987,
                      "end": 5314,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 5001,
                          "end": 5069,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 5012,
                            "end": 5032,
                            "decorators": [],
                            "name": "myPublicStaticMethod",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "set",
                          "optional": false,
                          "override": false,
                          "static": true,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 5032,
                            "end": 5069,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 5054,
                              "end": 5069,
                              "body": []
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 5033,
                                "end": 5052,
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 5038,
                                  "end": 5052,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 5040,
                                    "end": 5052,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 5040,
                                      "end": 5052,
                                      "decorators": [],
                                      "name": "privateClass",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 5082,
                          "end": 5159,
                          "accessibility": "private",
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 5101,
                            "end": 5122,
                            "decorators": [],
                            "name": "myPrivateStaticMethod",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "set",
                          "optional": false,
                          "override": false,
                          "static": true,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 5122,
                            "end": 5159,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 5144,
                              "end": 5159,
                              "body": []
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 5123,
                                "end": 5142,
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 5128,
                                  "end": 5142,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 5130,
                                    "end": 5142,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 5130,
                                      "end": 5142,
                                      "decorators": [],
                                      "name": "privateClass",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 5172,
                          "end": 5227,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 5176,
                            "end": 5190,
                            "decorators": [],
                            "name": "myPublicMethod",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "set",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 5190,
                            "end": 5227,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 5212,
                              "end": 5227,
                              "body": []
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 5191,
                                "end": 5210,
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 5196,
                                  "end": 5210,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 5198,
                                    "end": 5210,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 5198,
                                      "end": 5210,
                                      "decorators": [],
                                      "name": "privateClass",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 5240,
                          "end": 5304,
                          "accessibility": "private",
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 5252,
                            "end": 5267,
                            "decorators": [],
                            "name": "myPrivateMethod",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "set",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 5267,
                            "end": 5304,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 5289,
                              "end": 5304,
                              "body": []
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 5268,
                                "end": 5287,
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 5273,
                                  "end": 5287,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 5275,
                                    "end": 5287,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 5275,
                                      "end": 5287,
                                      "decorators": [],
                                      "name": "privateClass",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            ],
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
                      "start": 4944,
                      "end": 4986,
                      "decorators": [],
                      "name": "publicClassWithWithPrivateSetAccessorTypes",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "implements": [],
                    "superClass": null,
                    "superTypeArguments": null,
                    "typeParameters": null
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 5324,
                  "end": 5702,
                  "attributes": [],
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 5331,
                    "end": 5702,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 5379,
                      "end": 5702,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 5393,
                          "end": 5460,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 5404,
                            "end": 5424,
                            "decorators": [],
                            "name": "myPublicStaticMethod",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "set",
                          "optional": false,
                          "override": false,
                          "static": true,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 5424,
                            "end": 5460,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 5445,
                              "end": 5460,
                              "body": []
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 5425,
                                "end": 5443,
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 5430,
                                  "end": 5443,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 5432,
                                    "end": 5443,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 5432,
                                      "end": 5443,
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 5473,
                          "end": 5549,
                          "accessibility": "private",
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 5492,
                            "end": 5513,
                            "decorators": [],
                            "name": "myPrivateStaticMethod",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "set",
                          "optional": false,
                          "override": false,
                          "static": true,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 5513,
                            "end": 5549,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 5534,
                              "end": 5549,
                              "body": []
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 5514,
                                "end": 5532,
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 5519,
                                  "end": 5532,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 5521,
                                    "end": 5532,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 5521,
                                      "end": 5532,
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 5562,
                          "end": 5616,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 5566,
                            "end": 5580,
                            "decorators": [],
                            "name": "myPublicMethod",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "set",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 5580,
                            "end": 5616,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 5601,
                              "end": 5616,
                              "body": []
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 5581,
                                "end": 5599,
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 5586,
                                  "end": 5599,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 5588,
                                    "end": 5599,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 5588,
                                      "end": 5599,
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 5629,
                          "end": 5692,
                          "accessibility": "private",
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 5641,
                            "end": 5656,
                            "decorators": [],
                            "name": "myPrivateMethod",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "set",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 5656,
                            "end": 5692,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 5677,
                              "end": 5692,
                              "body": []
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 5657,
                                "end": 5675,
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 5662,
                                  "end": 5675,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 5664,
                                    "end": 5675,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 5664,
                                      "end": 5675,
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            ],
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
                      "start": 5337,
                      "end": 5378,
                      "decorators": [],
                      "name": "publicClassWithWithPublicSetAccessorTypes",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "implements": [],
                    "superClass": null,
                    "superTypeArguments": null,
                    "typeParameters": null
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                },
                {
                  "type": "ClassDeclaration",
                  "start": 5712,
                  "end": 6089,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 5762,
                    "end": 6089,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 5776,
                        "end": 5844,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 5787,
                          "end": 5807,
                          "decorators": [],
                          "name": "myPublicStaticMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "set",
                        "optional": false,
                        "override": false,
                        "static": true,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 5807,
                          "end": 5844,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 5829,
                            "end": 5844,
                            "body": []
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 5808,
                              "end": 5827,
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 5813,
                                "end": 5827,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 5815,
                                  "end": 5827,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5815,
                                    "end": 5827,
                                    "decorators": [],
                                    "name": "privateClass",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 5857,
                        "end": 5934,
                        "accessibility": "private",
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 5876,
                          "end": 5897,
                          "decorators": [],
                          "name": "myPrivateStaticMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "set",
                        "optional": false,
                        "override": false,
                        "static": true,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 5897,
                          "end": 5934,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 5919,
                            "end": 5934,
                            "body": []
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 5898,
                              "end": 5917,
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 5903,
                                "end": 5917,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 5905,
                                  "end": 5917,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5905,
                                    "end": 5917,
                                    "decorators": [],
                                    "name": "privateClass",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 5947,
                        "end": 6002,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 5951,
                          "end": 5965,
                          "decorators": [],
                          "name": "myPublicMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "set",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 5965,
                          "end": 6002,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 5987,
                            "end": 6002,
                            "body": []
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 5966,
                              "end": 5985,
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 5971,
                                "end": 5985,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 5973,
                                  "end": 5985,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5973,
                                    "end": 5985,
                                    "decorators": [],
                                    "name": "privateClass",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 6015,
                        "end": 6079,
                        "accessibility": "private",
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 6027,
                          "end": 6042,
                          "decorators": [],
                          "name": "myPrivateMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "set",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 6042,
                          "end": 6079,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 6064,
                            "end": 6079,
                            "body": []
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 6043,
                              "end": 6062,
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 6048,
                                "end": 6062,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 6050,
                                  "end": 6062,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 6050,
                                    "end": 6062,
                                    "decorators": [],
                                    "name": "privateClass",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
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
                    "start": 5718,
                    "end": 5761,
                    "decorators": [],
                    "name": "privateClassWithWithPrivateSetAccessorTypes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "implements": [],
                  "superClass": null,
                  "superTypeArguments": null,
                  "typeParameters": null
                },
                {
                  "type": "ClassDeclaration",
                  "start": 6099,
                  "end": 6471,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 6148,
                    "end": 6471,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 6162,
                        "end": 6229,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 6173,
                          "end": 6193,
                          "decorators": [],
                          "name": "myPublicStaticMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "set",
                        "optional": false,
                        "override": false,
                        "static": true,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 6193,
                          "end": 6229,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 6214,
                            "end": 6229,
                            "body": []
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 6194,
                              "end": 6212,
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 6199,
                                "end": 6212,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 6201,
                                  "end": 6212,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 6201,
                                    "end": 6212,
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 6242,
                        "end": 6318,
                        "accessibility": "private",
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 6261,
                          "end": 6282,
                          "decorators": [],
                          "name": "myPrivateStaticMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "set",
                        "optional": false,
                        "override": false,
                        "static": true,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 6282,
                          "end": 6318,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 6303,
                            "end": 6318,
                            "body": []
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 6283,
                              "end": 6301,
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 6288,
                                "end": 6301,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 6290,
                                  "end": 6301,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 6290,
                                    "end": 6301,
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 6331,
                        "end": 6385,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 6335,
                          "end": 6349,
                          "decorators": [],
                          "name": "myPublicMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "set",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 6349,
                          "end": 6385,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 6370,
                            "end": 6385,
                            "body": []
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 6350,
                              "end": 6368,
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 6355,
                                "end": 6368,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 6357,
                                  "end": 6368,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 6357,
                                    "end": 6368,
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 6398,
                        "end": 6461,
                        "accessibility": "private",
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 6410,
                          "end": 6425,
                          "decorators": [],
                          "name": "myPrivateMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "set",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 6425,
                          "end": 6461,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 6446,
                            "end": 6461,
                            "body": []
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 6426,
                              "end": 6444,
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 6431,
                                "end": 6444,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 6433,
                                  "end": 6444,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 6433,
                                    "end": 6444,
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
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
                    "start": 6105,
                    "end": 6147,
                    "decorators": [],
                    "name": "privateClassWithWithPublicSetAccessorTypes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "implements": [],
                  "superClass": null,
                  "superTypeArguments": null,
                  "typeParameters": null
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 6481,
                  "end": 6998,
                  "attributes": [],
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 6488,
                    "end": 6998,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 6539,
                      "end": 6998,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 6553,
                          "end": 6658,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 6564,
                            "end": 6584,
                            "decorators": [],
                            "name": "myPublicStaticMethod",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "get",
                          "optional": false,
                          "override": false,
                          "static": true,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 6584,
                            "end": 6658,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 6614,
                              "end": 6658,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 6632,
                                  "end": 6644,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 6639,
                                    "end": 6643,
                                    "raw": "null",
                                    "value": null
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
                              "start": 6586,
                              "end": 6613,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6588,
                                "end": 6613,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 6588,
                                  "end": 6613,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 6588,
                                    "end": 6601,
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 6602,
                                    "end": 6613,
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            },
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 6671,
                          "end": 6763,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 6675,
                            "end": 6689,
                            "decorators": [],
                            "name": "myPublicMethod",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "get",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 6689,
                            "end": 6763,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 6719,
                              "end": 6763,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 6737,
                                  "end": 6749,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 6744,
                                    "end": 6748,
                                    "raw": "null",
                                    "value": null
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
                              "start": 6691,
                              "end": 6718,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6693,
                                "end": 6718,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 6693,
                                  "end": 6718,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 6693,
                                    "end": 6706,
                                    "decorators": [],
                                    "name": "privateModule",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 6707,
                                    "end": 6718,
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            },
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 6776,
                          "end": 6882,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 6787,
                            "end": 6808,
                            "decorators": [],
                            "name": "myPublicStaticMethod1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "get",
                          "optional": false,
                          "override": false,
                          "static": true,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 6808,
                            "end": 6882,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 6811,
                              "end": 6882,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 6829,
                                  "end": 6868,
                                  "argument": {
                                    "type": "NewExpression",
                                    "start": 6836,
                                    "end": 6867,
                                    "arguments": [],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 6840,
                                      "end": 6865,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 6840,
                                        "end": 6853,
                                        "decorators": [],
                                        "name": "privateModule",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 6854,
                                        "end": 6865,
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
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
                            "returnType": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 6895,
                          "end": 6988,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 6899,
                            "end": 6914,
                            "decorators": [],
                            "name": "myPublicMethod1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "get",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 6914,
                            "end": 6988,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 6917,
                              "end": 6988,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 6935,
                                  "end": 6974,
                                  "argument": {
                                    "type": "NewExpression",
                                    "start": 6942,
                                    "end": 6973,
                                    "arguments": [],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 6946,
                                      "end": 6971,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 6946,
                                        "end": 6959,
                                        "decorators": [],
                                        "name": "privateModule",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 6960,
                                        "end": 6971,
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
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
                      "start": 6494,
                      "end": 6538,
                      "decorators": [],
                      "name": "publicClassWithPrivateModuleGetAccessorTypes",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "implements": [],
                    "superClass": null,
                    "superTypeArguments": null,
                    "typeParameters": null
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 7008,
                  "end": 7252,
                  "attributes": [],
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 7015,
                    "end": 7252,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 7066,
                      "end": 7252,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 7080,
                          "end": 7161,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 7091,
                            "end": 7111,
                            "decorators": [],
                            "name": "myPublicStaticMethod",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "set",
                          "optional": false,
                          "override": false,
                          "static": true,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 7111,
                            "end": 7161,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 7146,
                              "end": 7161,
                              "body": []
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 7112,
                                "end": 7144,
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 7117,
                                  "end": 7144,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 7119,
                                    "end": 7144,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "start": 7119,
                                      "end": 7144,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 7119,
                                        "end": 7132,
                                        "decorators": [],
                                        "name": "privateModule",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 7133,
                                        "end": 7144,
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 7174,
                          "end": 7242,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 7178,
                            "end": 7192,
                            "decorators": [],
                            "name": "myPublicMethod",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "set",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 7192,
                            "end": 7242,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 7227,
                              "end": 7242,
                              "body": []
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 7193,
                                "end": 7225,
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 7198,
                                  "end": 7225,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 7200,
                                    "end": 7225,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "start": 7200,
                                      "end": 7225,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 7200,
                                        "end": 7213,
                                        "decorators": [],
                                        "name": "privateModule",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 7214,
                                        "end": 7225,
                                        "decorators": [],
                                        "name": "publicClass",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                }
                              }
                            ],
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
                      "start": 7021,
                      "end": 7065,
                      "decorators": [],
                      "name": "publicClassWithPrivateModuleSetAccessorTypes",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "implements": [],
                    "superClass": null,
                    "superTypeArguments": null,
                    "typeParameters": null
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                },
                {
                  "type": "ClassDeclaration",
                  "start": 7262,
                  "end": 7773,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 7314,
                    "end": 7773,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 7328,
                        "end": 7433,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 7339,
                          "end": 7359,
                          "decorators": [],
                          "name": "myPublicStaticMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "get",
                        "optional": false,
                        "override": false,
                        "static": true,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 7359,
                          "end": 7433,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 7389,
                            "end": 7433,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 7407,
                                "end": 7419,
                                "argument": {
                                  "type": "Literal",
                                  "start": 7414,
                                  "end": 7418,
                                  "raw": "null",
                                  "value": null
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
                            "start": 7361,
                            "end": 7388,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 7363,
                              "end": 7388,
                              "typeArguments": null,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 7363,
                                "end": 7388,
                                "left": {
                                  "type": "Identifier",
                                  "start": 7363,
                                  "end": 7376,
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 7377,
                                  "end": 7388,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 7446,
                        "end": 7538,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 7450,
                          "end": 7464,
                          "decorators": [],
                          "name": "myPublicMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "get",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 7464,
                          "end": 7538,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 7494,
                            "end": 7538,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 7512,
                                "end": 7524,
                                "argument": {
                                  "type": "Literal",
                                  "start": 7519,
                                  "end": 7523,
                                  "raw": "null",
                                  "value": null
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
                            "start": 7466,
                            "end": 7493,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 7468,
                              "end": 7493,
                              "typeArguments": null,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 7468,
                                "end": 7493,
                                "left": {
                                  "type": "Identifier",
                                  "start": 7468,
                                  "end": 7481,
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 7482,
                                  "end": 7493,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 7551,
                        "end": 7657,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 7562,
                          "end": 7583,
                          "decorators": [],
                          "name": "myPublicStaticMethod1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "get",
                        "optional": false,
                        "override": false,
                        "static": true,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 7583,
                          "end": 7657,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 7586,
                            "end": 7657,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 7604,
                                "end": 7643,
                                "argument": {
                                  "type": "NewExpression",
                                  "start": 7611,
                                  "end": 7642,
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 7615,
                                    "end": 7640,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 7615,
                                      "end": 7628,
                                      "decorators": [],
                                      "name": "privateModule",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 7629,
                                      "end": 7640,
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
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
                          "returnType": null,
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 7670,
                        "end": 7763,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 7674,
                          "end": 7689,
                          "decorators": [],
                          "name": "myPublicMethod1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "get",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 7689,
                          "end": 7763,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 7692,
                            "end": 7763,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 7710,
                                "end": 7749,
                                "argument": {
                                  "type": "NewExpression",
                                  "start": 7717,
                                  "end": 7748,
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 7721,
                                    "end": 7746,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 7721,
                                      "end": 7734,
                                      "decorators": [],
                                      "name": "privateModule",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 7735,
                                      "end": 7746,
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
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
                    "start": 7268,
                    "end": 7313,
                    "decorators": [],
                    "name": "privateClassWithPrivateModuleGetAccessorTypes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "implements": [],
                  "superClass": null,
                  "superTypeArguments": null,
                  "typeParameters": null
                },
                {
                  "type": "ClassDeclaration",
                  "start": 7783,
                  "end": 8021,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 7835,
                    "end": 8021,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 7849,
                        "end": 7930,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 7860,
                          "end": 7880,
                          "decorators": [],
                          "name": "myPublicStaticMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "set",
                        "optional": false,
                        "override": false,
                        "static": true,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 7880,
                          "end": 7930,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 7915,
                            "end": 7930,
                            "body": []
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 7881,
                              "end": 7913,
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 7886,
                                "end": 7913,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 7888,
                                  "end": 7913,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 7888,
                                    "end": 7913,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 7888,
                                      "end": 7901,
                                      "decorators": [],
                                      "name": "privateModule",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 7902,
                                      "end": 7913,
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 7943,
                        "end": 8011,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 7947,
                          "end": 7961,
                          "decorators": [],
                          "name": "myPublicMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "set",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 7961,
                          "end": 8011,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 7996,
                            "end": 8011,
                            "body": []
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 7962,
                              "end": 7994,
                              "decorators": [],
                              "name": "param",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 7967,
                                "end": 7994,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 7969,
                                  "end": 7994,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 7969,
                                    "end": 7994,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 7969,
                                      "end": 7982,
                                      "decorators": [],
                                      "name": "privateModule",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 7983,
                                      "end": 7994,
                                      "decorators": [],
                                      "name": "publicClass",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            }
                          ],
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
                    "start": 7789,
                    "end": 7834,
                    "decorators": [],
                    "name": "privateClassWithPrivateModuleSetAccessorTypes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "implements": [],
                  "superClass": null,
                  "superTypeArguments": null,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 1232,
              "end": 1245,
              "decorators": [],
              "name": "privateModule",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "module"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 8033,
            "end": 8864,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 8040,
              "end": 8864,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 8089,
                "end": 8864,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 8099,
                    "end": 8192,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 8110,
                      "end": 8130,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8130,
                      "end": 8192,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 8147,
                        "end": 8192,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 8170,
                            "end": 8182,
                            "argument": {
                              "type": "Literal",
                              "start": 8177,
                              "end": 8181,
                              "raw": "null",
                              "value": null
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
                        "start": 8132,
                        "end": 8146,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8134,
                          "end": 8146,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8134,
                            "end": 8146,
                            "decorators": [],
                            "name": "privateClass",
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
                    "start": 8201,
                    "end": 8294,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 8220,
                      "end": 8241,
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8241,
                      "end": 8294,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 8258,
                        "end": 8294,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 8272,
                            "end": 8284,
                            "argument": {
                              "type": "Literal",
                              "start": 8279,
                              "end": 8283,
                              "raw": "null",
                              "value": null
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
                        "start": 8243,
                        "end": 8257,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8245,
                          "end": 8257,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8245,
                            "end": 8257,
                            "decorators": [],
                            "name": "privateClass",
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
                    "start": 8303,
                    "end": 8383,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 8307,
                      "end": 8321,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8321,
                      "end": 8383,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 8338,
                        "end": 8383,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 8361,
                            "end": 8373,
                            "argument": {
                              "type": "Literal",
                              "start": 8368,
                              "end": 8372,
                              "raw": "null",
                              "value": null
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
                        "start": 8323,
                        "end": 8337,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8325,
                          "end": 8337,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8325,
                            "end": 8337,
                            "decorators": [],
                            "name": "privateClass",
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
                    "start": 8392,
                    "end": 8472,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 8404,
                      "end": 8419,
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8419,
                      "end": 8472,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 8436,
                        "end": 8472,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 8450,
                            "end": 8462,
                            "argument": {
                              "type": "Literal",
                              "start": 8457,
                              "end": 8461,
                              "raw": "null",
                              "value": null
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
                        "start": 8421,
                        "end": 8435,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8423,
                          "end": 8435,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8423,
                            "end": 8435,
                            "decorators": [],
                            "name": "privateClass",
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
                    "start": 8481,
                    "end": 8575,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 8492,
                      "end": 8513,
                      "decorators": [],
                      "name": "myPublicStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8513,
                      "end": 8575,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 8516,
                        "end": 8575,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 8539,
                            "end": 8565,
                            "argument": {
                              "type": "NewExpression",
                              "start": 8546,
                              "end": 8564,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 8550,
                                "end": 8562,
                                "decorators": [],
                                "name": "privateClass",
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
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 8584,
                    "end": 8678,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 8603,
                      "end": 8625,
                      "decorators": [],
                      "name": "myPrivateStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8625,
                      "end": 8678,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 8628,
                        "end": 8678,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 8642,
                            "end": 8668,
                            "argument": {
                              "type": "NewExpression",
                              "start": 8649,
                              "end": 8667,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 8653,
                                "end": 8665,
                                "decorators": [],
                                "name": "privateClass",
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
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 8687,
                    "end": 8768,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 8691,
                      "end": 8706,
                      "decorators": [],
                      "name": "myPublicMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8706,
                      "end": 8768,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 8709,
                        "end": 8768,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 8732,
                            "end": 8758,
                            "argument": {
                              "type": "NewExpression",
                              "start": 8739,
                              "end": 8757,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 8743,
                                "end": 8755,
                                "decorators": [],
                                "name": "privateClass",
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
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 8777,
                    "end": 8858,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 8789,
                      "end": 8805,
                      "decorators": [],
                      "name": "myPrivateMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8805,
                      "end": 8858,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 8808,
                        "end": 8858,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 8822,
                            "end": 8848,
                            "argument": {
                              "type": "NewExpression",
                              "start": 8829,
                              "end": 8847,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 8833,
                                "end": 8845,
                                "decorators": [],
                                "name": "privateClass",
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
                "start": 8046,
                "end": 8088,
                "decorators": [],
                "name": "publicClassWithWithPrivateGetAccessorTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 8870,
            "end": 9656,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 8877,
              "end": 9656,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 8925,
                "end": 9656,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 8935,
                    "end": 9018,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 8946,
                      "end": 8966,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8966,
                      "end": 9018,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 8982,
                        "end": 9018,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 8996,
                            "end": 9008,
                            "argument": {
                              "type": "Literal",
                              "start": 9003,
                              "end": 9007,
                              "raw": "null",
                              "value": null
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
                        "start": 8968,
                        "end": 8981,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8970,
                          "end": 8981,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8970,
                            "end": 8981,
                            "decorators": [],
                            "name": "publicClass",
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
                    "start": 9027,
                    "end": 9119,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 9046,
                      "end": 9067,
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9067,
                      "end": 9119,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 9083,
                        "end": 9119,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 9097,
                            "end": 9109,
                            "argument": {
                              "type": "Literal",
                              "start": 9104,
                              "end": 9108,
                              "raw": "null",
                              "value": null
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
                        "start": 9069,
                        "end": 9082,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 9071,
                          "end": 9082,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 9071,
                            "end": 9082,
                            "decorators": [],
                            "name": "publicClass",
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
                    "start": 9128,
                    "end": 9198,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 9132,
                      "end": 9146,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9146,
                      "end": 9198,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 9162,
                        "end": 9198,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 9176,
                            "end": 9188,
                            "argument": {
                              "type": "Literal",
                              "start": 9183,
                              "end": 9187,
                              "raw": "null",
                              "value": null
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
                        "start": 9148,
                        "end": 9161,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 9150,
                          "end": 9161,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 9150,
                            "end": 9161,
                            "decorators": [],
                            "name": "publicClass",
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
                    "start": 9207,
                    "end": 9286,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 9219,
                      "end": 9234,
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9234,
                      "end": 9286,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 9250,
                        "end": 9286,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 9264,
                            "end": 9276,
                            "argument": {
                              "type": "Literal",
                              "start": 9271,
                              "end": 9275,
                              "raw": "null",
                              "value": null
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
                        "start": 9236,
                        "end": 9249,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 9238,
                          "end": 9249,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 9238,
                            "end": 9249,
                            "decorators": [],
                            "name": "publicClass",
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
                    "start": 9295,
                    "end": 9379,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 9306,
                      "end": 9327,
                      "decorators": [],
                      "name": "myPublicStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9327,
                      "end": 9379,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 9330,
                        "end": 9379,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 9344,
                            "end": 9369,
                            "argument": {
                              "type": "NewExpression",
                              "start": 9351,
                              "end": 9368,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 9355,
                                "end": 9366,
                                "decorators": [],
                                "name": "publicClass",
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
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 9388,
                    "end": 9481,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 9407,
                      "end": 9429,
                      "decorators": [],
                      "name": "myPrivateStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9429,
                      "end": 9481,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 9432,
                        "end": 9481,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 9446,
                            "end": 9471,
                            "argument": {
                              "type": "NewExpression",
                              "start": 9453,
                              "end": 9470,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 9457,
                                "end": 9468,
                                "decorators": [],
                                "name": "publicClass",
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
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 9490,
                    "end": 9561,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 9494,
                      "end": 9509,
                      "decorators": [],
                      "name": "myPublicMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9509,
                      "end": 9561,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 9512,
                        "end": 9561,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 9526,
                            "end": 9551,
                            "argument": {
                              "type": "NewExpression",
                              "start": 9533,
                              "end": 9550,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 9537,
                                "end": 9548,
                                "decorators": [],
                                "name": "publicClass",
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
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 9570,
                    "end": 9650,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 9582,
                      "end": 9598,
                      "decorators": [],
                      "name": "myPrivateMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9598,
                      "end": 9650,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 9601,
                        "end": 9650,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 9615,
                            "end": 9640,
                            "argument": {
                              "type": "NewExpression",
                              "start": 9622,
                              "end": 9639,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 9626,
                                "end": 9637,
                                "decorators": [],
                                "name": "publicClass",
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
                "start": 8883,
                "end": 8924,
                "decorators": [],
                "name": "publicClassWithWithPublicGetAccessorTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ClassDeclaration",
            "start": 9662,
            "end": 10451,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 9712,
              "end": 10451,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 9722,
                  "end": 9806,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 9733,
                    "end": 9753,
                    "decorators": [],
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 9753,
                    "end": 9806,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 9770,
                      "end": 9806,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 9784,
                          "end": 9796,
                          "argument": {
                            "type": "Literal",
                            "start": 9791,
                            "end": 9795,
                            "raw": "null",
                            "value": null
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
                      "start": 9755,
                      "end": 9769,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 9757,
                        "end": 9769,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 9757,
                          "end": 9769,
                          "decorators": [],
                          "name": "privateClass",
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
                  "start": 9815,
                  "end": 9908,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 9834,
                    "end": 9855,
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 9855,
                    "end": 9908,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 9872,
                      "end": 9908,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 9886,
                          "end": 9898,
                          "argument": {
                            "type": "Literal",
                            "start": 9893,
                            "end": 9897,
                            "raw": "null",
                            "value": null
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
                      "start": 9857,
                      "end": 9871,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 9859,
                        "end": 9871,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 9859,
                          "end": 9871,
                          "decorators": [],
                          "name": "privateClass",
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
                  "start": 9917,
                  "end": 9988,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 9921,
                    "end": 9935,
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 9935,
                    "end": 9988,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 9952,
                      "end": 9988,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 9966,
                          "end": 9978,
                          "argument": {
                            "type": "Literal",
                            "start": 9973,
                            "end": 9977,
                            "raw": "null",
                            "value": null
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
                      "start": 9937,
                      "end": 9951,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 9939,
                        "end": 9951,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 9939,
                          "end": 9951,
                          "decorators": [],
                          "name": "privateClass",
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
                  "start": 9997,
                  "end": 10077,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 10009,
                    "end": 10024,
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 10024,
                    "end": 10077,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 10041,
                      "end": 10077,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 10055,
                          "end": 10067,
                          "argument": {
                            "type": "Literal",
                            "start": 10062,
                            "end": 10066,
                            "raw": "null",
                            "value": null
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
                      "start": 10026,
                      "end": 10040,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10028,
                        "end": 10040,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10028,
                          "end": 10040,
                          "decorators": [],
                          "name": "privateClass",
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
                  "start": 10086,
                  "end": 10171,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 10097,
                    "end": 10118,
                    "decorators": [],
                    "name": "myPublicStaticMethod1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 10118,
                    "end": 10171,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 10121,
                      "end": 10171,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 10135,
                          "end": 10161,
                          "argument": {
                            "type": "NewExpression",
                            "start": 10142,
                            "end": 10160,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 10146,
                              "end": 10158,
                              "decorators": [],
                              "name": "privateClass",
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
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 10180,
                  "end": 10274,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 10199,
                    "end": 10221,
                    "decorators": [],
                    "name": "myPrivateStaticMethod1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 10221,
                    "end": 10274,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 10224,
                      "end": 10274,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 10238,
                          "end": 10264,
                          "argument": {
                            "type": "NewExpression",
                            "start": 10245,
                            "end": 10263,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 10249,
                              "end": 10261,
                              "decorators": [],
                              "name": "privateClass",
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
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 10283,
                  "end": 10355,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 10287,
                    "end": 10302,
                    "decorators": [],
                    "name": "myPublicMethod1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 10302,
                    "end": 10355,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 10305,
                      "end": 10355,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 10319,
                          "end": 10345,
                          "argument": {
                            "type": "NewExpression",
                            "start": 10326,
                            "end": 10344,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 10330,
                              "end": 10342,
                              "decorators": [],
                              "name": "privateClass",
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
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 10364,
                  "end": 10445,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 10376,
                    "end": 10392,
                    "decorators": [],
                    "name": "myPrivateMethod1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 10392,
                    "end": 10445,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 10395,
                      "end": 10445,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 10409,
                          "end": 10435,
                          "argument": {
                            "type": "NewExpression",
                            "start": 10416,
                            "end": 10434,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 10420,
                              "end": 10432,
                              "decorators": [],
                              "name": "privateClass",
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
              "start": 9668,
              "end": 9711,
              "decorators": [],
              "name": "privateClassWithWithPrivateGetAccessorTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 10457,
            "end": 11237,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 10506,
              "end": 11237,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 10516,
                  "end": 10599,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 10527,
                    "end": 10547,
                    "decorators": [],
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 10547,
                    "end": 10599,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 10563,
                      "end": 10599,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 10577,
                          "end": 10589,
                          "argument": {
                            "type": "Literal",
                            "start": 10584,
                            "end": 10588,
                            "raw": "null",
                            "value": null
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
                      "start": 10549,
                      "end": 10562,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10551,
                        "end": 10562,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10551,
                          "end": 10562,
                          "decorators": [],
                          "name": "publicClass",
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
                  "start": 10608,
                  "end": 10700,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 10627,
                    "end": 10648,
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 10648,
                    "end": 10700,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 10664,
                      "end": 10700,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 10678,
                          "end": 10690,
                          "argument": {
                            "type": "Literal",
                            "start": 10685,
                            "end": 10689,
                            "raw": "null",
                            "value": null
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
                      "start": 10650,
                      "end": 10663,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10652,
                        "end": 10663,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10652,
                          "end": 10663,
                          "decorators": [],
                          "name": "publicClass",
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
                  "start": 10709,
                  "end": 10779,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 10713,
                    "end": 10727,
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 10727,
                    "end": 10779,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 10743,
                      "end": 10779,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 10757,
                          "end": 10769,
                          "argument": {
                            "type": "Literal",
                            "start": 10764,
                            "end": 10768,
                            "raw": "null",
                            "value": null
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
                      "start": 10729,
                      "end": 10742,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10731,
                        "end": 10742,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10731,
                          "end": 10742,
                          "decorators": [],
                          "name": "publicClass",
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
                  "start": 10788,
                  "end": 10867,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 10800,
                    "end": 10815,
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 10815,
                    "end": 10867,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 10831,
                      "end": 10867,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 10845,
                          "end": 10857,
                          "argument": {
                            "type": "Literal",
                            "start": 10852,
                            "end": 10856,
                            "raw": "null",
                            "value": null
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
                      "start": 10817,
                      "end": 10830,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10819,
                        "end": 10830,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10819,
                          "end": 10830,
                          "decorators": [],
                          "name": "publicClass",
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
                  "start": 10876,
                  "end": 10960,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 10887,
                    "end": 10908,
                    "decorators": [],
                    "name": "myPublicStaticMethod1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 10908,
                    "end": 10960,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 10911,
                      "end": 10960,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 10925,
                          "end": 10950,
                          "argument": {
                            "type": "NewExpression",
                            "start": 10932,
                            "end": 10949,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 10936,
                              "end": 10947,
                              "decorators": [],
                              "name": "publicClass",
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
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 10969,
                  "end": 11062,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 10988,
                    "end": 11010,
                    "decorators": [],
                    "name": "myPrivateStaticMethod1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 11010,
                    "end": 11062,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 11013,
                      "end": 11062,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 11027,
                          "end": 11052,
                          "argument": {
                            "type": "NewExpression",
                            "start": 11034,
                            "end": 11051,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 11038,
                              "end": 11049,
                              "decorators": [],
                              "name": "publicClass",
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
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 11071,
                  "end": 11142,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 11075,
                    "end": 11090,
                    "decorators": [],
                    "name": "myPublicMethod1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 11090,
                    "end": 11142,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 11093,
                      "end": 11142,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 11107,
                          "end": 11132,
                          "argument": {
                            "type": "NewExpression",
                            "start": 11114,
                            "end": 11131,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 11118,
                              "end": 11129,
                              "decorators": [],
                              "name": "publicClass",
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
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 11151,
                  "end": 11231,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 11163,
                    "end": 11179,
                    "decorators": [],
                    "name": "myPrivateMethod1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 11179,
                    "end": 11231,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 11182,
                      "end": 11231,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 11196,
                          "end": 11221,
                          "argument": {
                            "type": "NewExpression",
                            "start": 11203,
                            "end": 11220,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 11207,
                              "end": 11218,
                              "decorators": [],
                              "name": "publicClass",
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
              "start": 10463,
              "end": 10505,
              "decorators": [],
              "name": "privateClassWithWithPublicGetAccessorTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 11243,
            "end": 11608,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 11250,
              "end": 11608,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 11299,
                "end": 11608,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 11309,
                    "end": 11382,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11320,
                      "end": 11340,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11340,
                      "end": 11382,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11362,
                        "end": 11382,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11341,
                          "end": 11360,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11346,
                            "end": 11360,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11348,
                              "end": 11360,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11348,
                                "end": 11360,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11391,
                    "end": 11464,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11410,
                      "end": 11431,
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11431,
                      "end": 11464,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11453,
                        "end": 11464,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11432,
                          "end": 11451,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11437,
                            "end": 11451,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11439,
                              "end": 11451,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11439,
                                "end": 11451,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11473,
                    "end": 11533,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11477,
                      "end": 11491,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11491,
                      "end": 11533,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11513,
                        "end": 11533,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11492,
                          "end": 11511,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11497,
                            "end": 11511,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11499,
                              "end": 11511,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11499,
                                "end": 11511,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11542,
                    "end": 11602,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11554,
                      "end": 11569,
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11569,
                      "end": 11602,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11591,
                        "end": 11602,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11570,
                          "end": 11589,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11575,
                            "end": 11589,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11577,
                              "end": 11589,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11577,
                                "end": 11589,
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
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
                "start": 11256,
                "end": 11298,
                "decorators": [],
                "name": "publicClassWithWithPrivateSetAccessorTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 11614,
            "end": 11956,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 11621,
              "end": 11956,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 11669,
                "end": 11956,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 11679,
                    "end": 11742,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11690,
                      "end": 11710,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11710,
                      "end": 11742,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11731,
                        "end": 11742,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11711,
                          "end": 11729,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11716,
                            "end": 11729,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11718,
                              "end": 11729,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11718,
                                "end": 11729,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11751,
                    "end": 11823,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11770,
                      "end": 11791,
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11791,
                      "end": 11823,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11812,
                        "end": 11823,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11792,
                          "end": 11810,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11797,
                            "end": 11810,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11799,
                              "end": 11810,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11799,
                                "end": 11810,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11832,
                    "end": 11882,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11836,
                      "end": 11850,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11850,
                      "end": 11882,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11871,
                        "end": 11882,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11851,
                          "end": 11869,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11856,
                            "end": 11869,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11858,
                              "end": 11869,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11858,
                                "end": 11869,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11891,
                    "end": 11950,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 11903,
                      "end": 11918,
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11918,
                      "end": 11950,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 11939,
                        "end": 11950,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11919,
                          "end": 11937,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11924,
                            "end": 11937,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11926,
                              "end": 11937,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11926,
                                "end": 11937,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
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
                "start": 11627,
                "end": 11668,
                "decorators": [],
                "name": "publicClassWithWithPublicSetAccessorTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ClassDeclaration",
            "start": 11962,
            "end": 12303,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 12012,
              "end": 12303,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 12022,
                  "end": 12086,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 12033,
                    "end": 12053,
                    "decorators": [],
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12053,
                    "end": 12086,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 12075,
                      "end": 12086,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12054,
                        "end": 12073,
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12059,
                          "end": 12073,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12061,
                            "end": 12073,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12061,
                              "end": 12073,
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 12095,
                  "end": 12168,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 12114,
                    "end": 12135,
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12135,
                    "end": 12168,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 12157,
                      "end": 12168,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12136,
                        "end": 12155,
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12141,
                          "end": 12155,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12143,
                            "end": 12155,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12143,
                              "end": 12155,
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 12177,
                  "end": 12228,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 12181,
                    "end": 12195,
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12195,
                    "end": 12228,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 12217,
                      "end": 12228,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12196,
                        "end": 12215,
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12201,
                          "end": 12215,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12203,
                            "end": 12215,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12203,
                              "end": 12215,
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 12237,
                  "end": 12297,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 12249,
                    "end": 12264,
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12264,
                    "end": 12297,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 12286,
                      "end": 12297,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12265,
                        "end": 12284,
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12270,
                          "end": 12284,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12272,
                            "end": 12284,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12272,
                              "end": 12284,
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
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
              "start": 11968,
              "end": 12011,
              "decorators": [],
              "name": "privateClassWithWithPrivateSetAccessorTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 12309,
            "end": 12645,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 12358,
              "end": 12645,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 12368,
                  "end": 12431,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 12379,
                    "end": 12399,
                    "decorators": [],
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12399,
                    "end": 12431,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 12420,
                      "end": 12431,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12400,
                        "end": 12418,
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12405,
                          "end": 12418,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12407,
                            "end": 12418,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12407,
                              "end": 12418,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 12440,
                  "end": 12512,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 12459,
                    "end": 12480,
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12480,
                    "end": 12512,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 12501,
                      "end": 12512,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12481,
                        "end": 12499,
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12486,
                          "end": 12499,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12488,
                            "end": 12499,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12488,
                              "end": 12499,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 12521,
                  "end": 12571,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 12525,
                    "end": 12539,
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12539,
                    "end": 12571,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 12560,
                      "end": 12571,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12540,
                        "end": 12558,
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12545,
                          "end": 12558,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12547,
                            "end": 12558,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12547,
                              "end": 12558,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 12580,
                  "end": 12639,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 12592,
                    "end": 12607,
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12607,
                    "end": 12639,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 12628,
                      "end": 12639,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12608,
                        "end": 12626,
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12613,
                          "end": 12626,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12615,
                            "end": 12626,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12615,
                              "end": 12626,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
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
              "start": 12315,
              "end": 12357,
              "decorators": [],
              "name": "privateClassWithWithPublicSetAccessorTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 12651,
            "end": 13152,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 12658,
              "end": 13152,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 12709,
                "end": 13152,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 12719,
                    "end": 12825,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 12730,
                      "end": 12750,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12750,
                      "end": 12825,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 12780,
                        "end": 12825,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 12803,
                            "end": 12815,
                            "argument": {
                              "type": "Literal",
                              "start": 12810,
                              "end": 12814,
                              "raw": "null",
                              "value": null
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
                        "start": 12752,
                        "end": 12779,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 12754,
                          "end": 12779,
                          "typeArguments": null,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 12754,
                            "end": 12779,
                            "left": {
                              "type": "Identifier",
                              "start": 12754,
                              "end": 12767,
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 12768,
                              "end": 12779,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 12834,
                    "end": 12927,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 12838,
                      "end": 12852,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12852,
                      "end": 12927,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 12882,
                        "end": 12927,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 12905,
                            "end": 12917,
                            "argument": {
                              "type": "Literal",
                              "start": 12912,
                              "end": 12916,
                              "raw": "null",
                              "value": null
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
                        "start": 12854,
                        "end": 12881,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 12856,
                          "end": 12881,
                          "typeArguments": null,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 12856,
                            "end": 12881,
                            "left": {
                              "type": "Identifier",
                              "start": 12856,
                              "end": 12869,
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 12870,
                              "end": 12881,
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 12936,
                    "end": 13043,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 12947,
                      "end": 12968,
                      "decorators": [],
                      "name": "myPublicStaticMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12968,
                      "end": 13043,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 12971,
                        "end": 13043,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 12994,
                            "end": 13033,
                            "argument": {
                              "type": "NewExpression",
                              "start": 13001,
                              "end": 13032,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 13005,
                                "end": 13030,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 13005,
                                  "end": 13018,
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 13019,
                                  "end": 13030,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
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
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 13052,
                    "end": 13146,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 13056,
                      "end": 13071,
                      "decorators": [],
                      "name": "myPublicMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 13071,
                      "end": 13146,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 13074,
                        "end": 13146,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 13097,
                            "end": 13136,
                            "argument": {
                              "type": "NewExpression",
                              "start": 13104,
                              "end": 13135,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 13108,
                                "end": 13133,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 13108,
                                  "end": 13121,
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 13122,
                                  "end": 13133,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
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
                "start": 12664,
                "end": 12708,
                "decorators": [],
                "name": "publicClassWithPrivateModuleGetAccessorTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 13158,
            "end": 13400,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 13165,
              "end": 13400,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 13216,
                "end": 13400,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 13226,
                    "end": 13312,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 13237,
                      "end": 13257,
                      "decorators": [],
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 13257,
                      "end": 13312,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 13292,
                        "end": 13312,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 13258,
                          "end": 13290,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 13263,
                            "end": 13290,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 13265,
                              "end": 13290,
                              "typeArguments": null,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 13265,
                                "end": 13290,
                                "left": {
                                  "type": "Identifier",
                                  "start": 13265,
                                  "end": 13278,
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 13279,
                                  "end": 13290,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 13321,
                    "end": 13394,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 13325,
                      "end": 13339,
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 13339,
                      "end": 13394,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 13374,
                        "end": 13394,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 13340,
                          "end": 13372,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 13345,
                            "end": 13372,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 13347,
                              "end": 13372,
                              "typeArguments": null,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 13347,
                                "end": 13372,
                                "left": {
                                  "type": "Identifier",
                                  "start": 13347,
                                  "end": 13360,
                                  "decorators": [],
                                  "name": "privateModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 13361,
                                  "end": 13372,
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        }
                      ],
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
                "start": 13171,
                "end": 13215,
                "decorators": [],
                "name": "publicClassWithPrivateModuleSetAccessorTypes",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ClassDeclaration",
            "start": 13406,
            "end": 13865,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 13458,
              "end": 13865,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 13468,
                  "end": 13565,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 13479,
                    "end": 13499,
                    "decorators": [],
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13499,
                    "end": 13565,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 13529,
                      "end": 13565,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 13543,
                          "end": 13555,
                          "argument": {
                            "type": "Literal",
                            "start": 13550,
                            "end": 13554,
                            "raw": "null",
                            "value": null
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
                      "start": 13501,
                      "end": 13528,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 13503,
                        "end": 13528,
                        "typeArguments": null,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 13503,
                          "end": 13528,
                          "left": {
                            "type": "Identifier",
                            "start": 13503,
                            "end": 13516,
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 13517,
                            "end": 13528,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 13574,
                  "end": 13658,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 13578,
                    "end": 13592,
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13592,
                    "end": 13658,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 13622,
                      "end": 13658,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 13636,
                          "end": 13648,
                          "argument": {
                            "type": "Literal",
                            "start": 13643,
                            "end": 13647,
                            "raw": "null",
                            "value": null
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
                      "start": 13594,
                      "end": 13621,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 13596,
                        "end": 13621,
                        "typeArguments": null,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 13596,
                          "end": 13621,
                          "left": {
                            "type": "Identifier",
                            "start": 13596,
                            "end": 13609,
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 13610,
                            "end": 13621,
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 13667,
                  "end": 13765,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 13678,
                    "end": 13699,
                    "decorators": [],
                    "name": "myPublicStaticMethod1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13699,
                    "end": 13765,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 13702,
                      "end": 13765,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 13716,
                          "end": 13755,
                          "argument": {
                            "type": "NewExpression",
                            "start": 13723,
                            "end": 13754,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 13727,
                              "end": 13752,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 13727,
                                "end": 13740,
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 13741,
                                "end": 13752,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
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
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 13774,
                  "end": 13859,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 13778,
                    "end": 13793,
                    "decorators": [],
                    "name": "myPublicMethod1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13793,
                    "end": 13859,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 13796,
                      "end": 13859,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 13810,
                          "end": 13849,
                          "argument": {
                            "type": "NewExpression",
                            "start": 13817,
                            "end": 13848,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 13821,
                              "end": 13846,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 13821,
                                "end": 13834,
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 13835,
                                "end": 13846,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
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
              "start": 13412,
              "end": 13457,
              "decorators": [],
              "name": "privateClassWithPrivateModuleGetAccessorTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 13871,
            "end": 14089,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 13923,
              "end": 14089,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 13933,
                  "end": 14010,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 13944,
                    "end": 13964,
                    "decorators": [],
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13964,
                    "end": 14010,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 13999,
                      "end": 14010,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 13965,
                        "end": 13997,
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 13970,
                          "end": 13997,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 13972,
                            "end": 13997,
                            "typeArguments": null,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 13972,
                              "end": 13997,
                              "left": {
                                "type": "Identifier",
                                "start": 13972,
                                "end": 13985,
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 13986,
                                "end": 13997,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 14019,
                  "end": 14083,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 14023,
                    "end": 14037,
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 14037,
                    "end": 14083,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 14072,
                      "end": 14083,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 14038,
                        "end": 14070,
                        "decorators": [],
                        "name": "param",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 14043,
                          "end": 14070,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 14045,
                            "end": 14070,
                            "typeArguments": null,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 14045,
                              "end": 14070,
                              "left": {
                                "type": "Identifier",
                                "start": 14045,
                                "end": 14058,
                                "decorators": [],
                                "name": "privateModule",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 14059,
                                "end": 14070,
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      }
                    ],
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
              "start": 13877,
              "end": 13922,
              "decorators": [],
              "name": "privateClassWithPrivateModuleSetAccessorTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1128,
        "end": 1148,
        "decorators": [],
        "name": "publicModuleInGlobal",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
