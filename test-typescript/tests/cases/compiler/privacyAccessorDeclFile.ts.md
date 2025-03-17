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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 18,
        "name": "privateClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 22,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 52,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 31,
        "end": 52,
        "id": {
          "type": "Identifier",
          "start": 37,
          "end": 48,
          "name": "publicClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 49,
          "end": 52,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 54,
      "end": 785,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 61,
        "end": 785,
        "id": {
          "type": "Identifier",
          "start": 67,
          "end": 109,
          "name": "publicClassWithWithPrivateGetAccessorTypes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 110,
          "end": 785,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 116,
              "end": 201,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 127,
                "end": 147,
                "name": "myPublicStaticMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 147,
                "end": 201,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "value": null,
                        "raw": "null"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 149,
                  "end": 163,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 151,
                    "end": 163,
                    "typeName": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 163,
                      "name": "privateClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
              "start": 206,
              "end": 291,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 225,
                "end": 246,
                "name": "myPrivateStaticMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 246,
                "end": 291,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "value": null,
                        "raw": "null"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 248,
                  "end": 262,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 250,
                    "end": 262,
                    "typeName": {
                      "type": "Identifier",
                      "start": 250,
                      "end": 262,
                      "name": "privateClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 296,
              "end": 368,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 300,
                "end": 314,
                "name": "myPublicMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 314,
                "end": 368,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "value": null,
                        "raw": "null"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 316,
                  "end": 330,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 318,
                    "end": 330,
                    "typeName": {
                      "type": "Identifier",
                      "start": 318,
                      "end": 330,
                      "name": "privateClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
              "start": 373,
              "end": 445,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 385,
                "end": 400,
                "name": "myPrivateMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 400,
                "end": 445,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "value": null,
                        "raw": "null"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 402,
                  "end": 416,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 404,
                    "end": 416,
                    "typeName": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 416,
                      "name": "privateClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 450,
              "end": 536,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 461,
                "end": 482,
                "name": "myPublicStaticMethod1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 482,
                "end": 536,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 515,
                          "end": 527,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      }
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
            },
            {
              "type": "MethodDefinition",
              "start": 541,
              "end": 627,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 560,
                "end": 582,
                "name": "myPrivateStaticMethod1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 582,
                "end": 627,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 606,
                          "end": 618,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      }
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
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 632,
              "end": 705,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 636,
                "end": 651,
                "name": "myPublicMethod1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 651,
                "end": 705,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 684,
                          "end": 696,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      }
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
            },
            {
              "type": "MethodDefinition",
              "start": 710,
              "end": 783,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 722,
                "end": 738,
                "name": "myPrivateMethod1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 738,
                "end": 783,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 762,
                          "end": 774,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      }
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
              "accessibility": "private"
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 787,
      "end": 1473,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 794,
        "end": 1473,
        "id": {
          "type": "Identifier",
          "start": 800,
          "end": 841,
          "name": "publicClassWithWithPublicGetAccessorTypes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 842,
          "end": 1473,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 848,
              "end": 923,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 859,
                "end": 879,
                "name": "myPublicStaticMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 879,
                "end": 923,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "value": null,
                        "raw": "null"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 881,
                  "end": 894,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 883,
                    "end": 894,
                    "typeName": {
                      "type": "Identifier",
                      "start": 883,
                      "end": 894,
                      "name": "publicClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
              "start": 928,
              "end": 1012,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 947,
                "end": 968,
                "name": "myPrivateStaticMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 968,
                "end": 1012,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "value": null,
                        "raw": "null"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 970,
                  "end": 983,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 972,
                    "end": 983,
                    "typeName": {
                      "type": "Identifier",
                      "start": 972,
                      "end": 983,
                      "name": "publicClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 1017,
              "end": 1079,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1021,
                "end": 1035,
                "name": "myPublicMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 1035,
                "end": 1079,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "value": null,
                        "raw": "null"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1037,
                  "end": 1050,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1039,
                    "end": 1050,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1039,
                      "end": 1050,
                      "name": "publicClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
              "start": 1084,
              "end": 1155,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1096,
                "end": 1111,
                "name": "myPrivateMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 1111,
                "end": 1155,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "value": null,
                        "raw": "null"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1113,
                  "end": 1126,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1115,
                    "end": 1126,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1115,
                      "end": 1126,
                      "name": "publicClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 1160,
              "end": 1236,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1171,
                "end": 1192,
                "name": "myPublicStaticMethod1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 1192,
                "end": 1236,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 1216,
                          "end": 1227,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      }
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
            },
            {
              "type": "MethodDefinition",
              "start": 1241,
              "end": 1326,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1260,
                "end": 1282,
                "name": "myPrivateStaticMethod1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 1282,
                "end": 1326,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 1306,
                          "end": 1317,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      }
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
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 1331,
              "end": 1394,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1335,
                "end": 1350,
                "name": "myPublicMethod1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 1350,
                "end": 1394,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 1374,
                          "end": 1385,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      }
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
            },
            {
              "type": "MethodDefinition",
              "start": 1399,
              "end": 1471,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1411,
                "end": 1427,
                "name": "myPrivateMethod1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 1427,
                "end": 1471,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 1451,
                          "end": 1462,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      }
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
              "accessibility": "private"
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 1475,
      "end": 2164,
      "id": {
        "type": "Identifier",
        "start": 1481,
        "end": 1524,
        "name": "privateClassWithWithPrivateGetAccessorTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1525,
        "end": 2164,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1531,
            "end": 1607,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1542,
              "end": 1562,
              "name": "myPublicStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 1562,
              "end": 1607,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1564,
                "end": 1578,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1566,
                  "end": 1578,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1566,
                    "end": 1578,
                    "name": "privateClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
            "start": 1612,
            "end": 1697,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1631,
              "end": 1652,
              "name": "myPrivateStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 1652,
              "end": 1697,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1654,
                "end": 1668,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1656,
                  "end": 1668,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1656,
                    "end": 1668,
                    "name": "privateClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 1702,
            "end": 1765,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1706,
              "end": 1720,
              "name": "myPublicMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 1720,
              "end": 1765,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1722,
                "end": 1736,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1724,
                  "end": 1736,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1724,
                    "end": 1736,
                    "name": "privateClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
            "start": 1770,
            "end": 1842,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1782,
              "end": 1797,
              "name": "myPrivateMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 1797,
              "end": 1842,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1799,
                "end": 1813,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1801,
                  "end": 1813,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1801,
                    "end": 1813,
                    "name": "privateClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 1847,
            "end": 1924,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1858,
              "end": 1879,
              "name": "myPublicStaticMethod1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 1879,
              "end": 1924,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "Identifier",
                        "start": 1903,
                        "end": 1915,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 1929,
            "end": 2015,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1948,
              "end": 1970,
              "name": "myPrivateStaticMethod1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 1970,
              "end": 2015,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "Identifier",
                        "start": 1994,
                        "end": 2006,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 2020,
            "end": 2084,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2024,
              "end": 2039,
              "name": "myPublicMethod1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 2039,
              "end": 2084,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "Identifier",
                        "start": 2063,
                        "end": 2075,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 2089,
            "end": 2162,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2101,
              "end": 2117,
              "name": "myPrivateMethod1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 2117,
              "end": 2162,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "Identifier",
                        "start": 2141,
                        "end": 2153,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
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
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2166,
      "end": 2846,
      "id": {
        "type": "Identifier",
        "start": 2172,
        "end": 2214,
        "name": "privateClassWithWithPublicGetAccessorTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2215,
        "end": 2846,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2221,
            "end": 2296,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2232,
              "end": 2252,
              "name": "myPublicStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 2252,
              "end": 2296,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2254,
                "end": 2267,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2256,
                  "end": 2267,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2256,
                    "end": 2267,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
            "start": 2301,
            "end": 2385,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2320,
              "end": 2341,
              "name": "myPrivateStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 2341,
              "end": 2385,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2343,
                "end": 2356,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2345,
                  "end": 2356,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2345,
                    "end": 2356,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 2390,
            "end": 2452,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2394,
              "end": 2408,
              "name": "myPublicMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 2408,
              "end": 2452,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2410,
                "end": 2423,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2412,
                  "end": 2423,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2412,
                    "end": 2423,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
            "start": 2457,
            "end": 2528,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2469,
              "end": 2484,
              "name": "myPrivateMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 2484,
              "end": 2528,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2486,
                "end": 2499,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2488,
                  "end": 2499,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2488,
                    "end": 2499,
                    "name": "publicClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 2533,
            "end": 2609,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2544,
              "end": 2565,
              "name": "myPublicStaticMethod1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 2565,
              "end": 2609,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "Identifier",
                        "start": 2589,
                        "end": 2600,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 2614,
            "end": 2699,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2633,
              "end": 2655,
              "name": "myPrivateStaticMethod1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 2655,
              "end": 2699,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "Identifier",
                        "start": 2679,
                        "end": 2690,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 2704,
            "end": 2767,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2708,
              "end": 2723,
              "name": "myPublicMethod1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 2723,
              "end": 2767,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "Identifier",
                        "start": 2747,
                        "end": 2758,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 2772,
            "end": 2844,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2784,
              "end": 2800,
              "name": "myPrivateMethod1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 2800,
              "end": 2844,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "Identifier",
                        "start": 2824,
                        "end": 2835,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
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
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2848,
      "end": 3177,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2855,
        "end": 3177,
        "id": {
          "type": "Identifier",
          "start": 2861,
          "end": 2903,
          "name": "publicClassWithWithPrivateSetAccessorTypes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 2904,
          "end": 3177,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 2910,
              "end": 2979,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2921,
                "end": 2941,
                "name": "myPublicStaticMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 2941,
                "end": 2979,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2942,
                    "end": 2961,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2947,
                      "end": 2961,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2949,
                        "end": 2961,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2949,
                          "end": 2961,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 2963,
                  "end": 2979,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 2984,
              "end": 3053,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3003,
                "end": 3024,
                "name": "myPrivateStaticMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 3024,
                "end": 3053,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3025,
                    "end": 3044,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3030,
                      "end": 3044,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3032,
                        "end": 3044,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3032,
                          "end": 3044,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 3046,
                  "end": 3053,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 3058,
              "end": 3114,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3062,
                "end": 3076,
                "name": "myPublicMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 3076,
                "end": 3114,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3077,
                    "end": 3096,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3082,
                      "end": 3096,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3084,
                        "end": 3096,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3084,
                          "end": 3096,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 3098,
                  "end": 3114,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 3119,
              "end": 3175,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3131,
                "end": 3146,
                "name": "myPrivateMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 3146,
                "end": 3175,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3147,
                    "end": 3166,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3152,
                      "end": 3166,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3154,
                        "end": 3166,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3154,
                          "end": 3166,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 3168,
                  "end": 3175,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3179,
      "end": 3485,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 3186,
        "end": 3485,
        "id": {
          "type": "Identifier",
          "start": 3192,
          "end": 3233,
          "name": "publicClassWithWithPublicSetAccessorTypes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 3234,
          "end": 3485,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 3240,
              "end": 3299,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3251,
                "end": 3271,
                "name": "myPublicStaticMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 3271,
                "end": 3299,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3272,
                    "end": 3290,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3277,
                      "end": 3290,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3279,
                        "end": 3290,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3279,
                          "end": 3290,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 3292,
                  "end": 3299,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 3304,
              "end": 3372,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3323,
                "end": 3344,
                "name": "myPrivateStaticMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 3344,
                "end": 3372,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3345,
                    "end": 3363,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3350,
                      "end": 3363,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3352,
                        "end": 3363,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3352,
                          "end": 3363,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 3365,
                  "end": 3372,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            },
            {
              "type": "MethodDefinition",
              "start": 3377,
              "end": 3423,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3381,
                "end": 3395,
                "name": "myPublicMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 3395,
                "end": 3423,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3396,
                    "end": 3414,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3401,
                      "end": 3414,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3403,
                        "end": 3414,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3403,
                          "end": 3414,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 3416,
                  "end": 3423,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 3428,
              "end": 3483,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3440,
                "end": 3455,
                "name": "myPrivateMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 3455,
                "end": 3483,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3456,
                    "end": 3474,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3461,
                      "end": 3474,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3463,
                        "end": 3474,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3463,
                          "end": 3474,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 3476,
                  "end": 3483,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "private"
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 3487,
      "end": 3793,
      "id": {
        "type": "Identifier",
        "start": 3493,
        "end": 3536,
        "name": "privateClassWithWithPrivateSetAccessorTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 3537,
        "end": 3793,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 3543,
            "end": 3603,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3554,
              "end": 3574,
              "name": "myPublicStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 3574,
              "end": 3603,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3575,
                  "end": 3594,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3580,
                    "end": 3594,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3582,
                      "end": 3594,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3582,
                        "end": 3594,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 3596,
                "end": 3603,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 3608,
            "end": 3677,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3627,
              "end": 3648,
              "name": "myPrivateStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 3648,
              "end": 3677,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3649,
                  "end": 3668,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3654,
                    "end": 3668,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3656,
                      "end": 3668,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3656,
                        "end": 3668,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 3670,
                "end": 3677,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 3682,
            "end": 3730,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3686,
              "end": 3700,
              "name": "myPublicMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 3700,
              "end": 3730,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3701,
                  "end": 3720,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3706,
                    "end": 3720,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3708,
                      "end": 3720,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3708,
                        "end": 3720,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 3722,
                "end": 3730,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 3735,
            "end": 3791,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3747,
              "end": 3762,
              "name": "myPrivateMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 3762,
              "end": 3791,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3763,
                  "end": 3782,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3768,
                    "end": 3782,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3770,
                      "end": 3782,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3770,
                        "end": 3782,
                        "name": "privateClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 3784,
                "end": 3791,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 3795,
      "end": 4095,
      "id": {
        "type": "Identifier",
        "start": 3801,
        "end": 3843,
        "name": "privateClassWithWithPublicSetAccessorTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 3844,
        "end": 4095,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 3850,
            "end": 3909,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3861,
              "end": 3881,
              "name": "myPublicStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 3881,
              "end": 3909,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3882,
                  "end": 3900,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3887,
                    "end": 3900,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3889,
                      "end": 3900,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3889,
                        "end": 3900,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 3902,
                "end": 3909,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 3914,
            "end": 3982,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3933,
              "end": 3954,
              "name": "myPrivateStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 3954,
              "end": 3982,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3955,
                  "end": 3973,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3960,
                    "end": 3973,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3962,
                      "end": 3973,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3962,
                        "end": 3973,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 3975,
                "end": 3982,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 3987,
            "end": 4033,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3991,
              "end": 4005,
              "name": "myPublicMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 4005,
              "end": 4033,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4006,
                  "end": 4024,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4011,
                    "end": 4024,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4013,
                      "end": 4024,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4013,
                        "end": 4024,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 4026,
                "end": 4033,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4038,
            "end": 4093,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4050,
              "end": 4065,
              "name": "myPrivateMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 4065,
              "end": 4093,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4066,
                  "end": 4084,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4071,
                    "end": 4084,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4073,
                      "end": 4084,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4073,
                        "end": 4084,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 4086,
                "end": 4093,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4097,
      "end": 4546,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 4104,
        "end": 4546,
        "id": {
          "type": "Identifier",
          "start": 4110,
          "end": 4154,
          "name": "publicClassWithPrivateModuleGetAccessorTypes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 4155,
          "end": 4546,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 4161,
              "end": 4259,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 4172,
                "end": 4192,
                "name": "myPublicStaticMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 4192,
                "end": 4259,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "value": null,
                        "raw": "null"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4194,
                  "end": 4221,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4196,
                    "end": 4221,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 4196,
                      "end": 4221,
                      "left": {
                        "type": "Identifier",
                        "start": 4196,
                        "end": 4209,
                        "name": "privateModule",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 4210,
                        "end": 4221,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
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
              "start": 4264,
              "end": 4349,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 4268,
                "end": 4282,
                "name": "myPublicMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 4282,
                "end": 4349,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "value": null,
                        "raw": "null"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4284,
                  "end": 4311,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4286,
                    "end": 4311,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 4286,
                      "end": 4311,
                      "left": {
                        "type": "Identifier",
                        "start": 4286,
                        "end": 4299,
                        "name": "privateModule",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 4300,
                        "end": 4311,
                        "name": "publicClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
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
              "start": 4354,
              "end": 4453,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 4365,
                "end": 4386,
                "name": "myPublicStaticMethod1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 4386,
                "end": 4453,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "callee": {
                          "type": "MemberExpression",
                          "start": 4419,
                          "end": 4444,
                          "object": {
                            "type": "Identifier",
                            "start": 4419,
                            "end": 4432,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 4433,
                            "end": 4444,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      }
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
            },
            {
              "type": "MethodDefinition",
              "start": 4458,
              "end": 4544,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 4462,
                "end": 4477,
                "name": "myPublicMethod1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 4477,
                "end": 4544,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "callee": {
                          "type": "MemberExpression",
                          "start": 4510,
                          "end": 4535,
                          "object": {
                            "type": "Identifier",
                            "start": 4510,
                            "end": 4523,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 4524,
                            "end": 4535,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      }
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
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4548,
      "end": 4770,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 4555,
        "end": 4770,
        "id": {
          "type": "Identifier",
          "start": 4561,
          "end": 4605,
          "name": "publicClassWithPrivateModuleSetAccessorTypes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 4606,
          "end": 4770,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 4612,
              "end": 4694,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 4623,
                "end": 4643,
                "name": "myPublicStaticMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 4643,
                "end": 4694,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4644,
                    "end": 4676,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4649,
                      "end": 4676,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4651,
                        "end": 4676,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 4651,
                          "end": 4676,
                          "left": {
                            "type": "Identifier",
                            "start": 4651,
                            "end": 4664,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 4665,
                            "end": 4676,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 4678,
                  "end": 4694,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 4699,
              "end": 4768,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 4703,
                "end": 4717,
                "name": "myPublicMethod",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 4717,
                "end": 4768,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4718,
                    "end": 4750,
                    "name": "param",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4723,
                      "end": 4750,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4725,
                        "end": 4750,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 4725,
                          "end": 4750,
                          "left": {
                            "type": "Identifier",
                            "start": 4725,
                            "end": 4738,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 4739,
                            "end": 4750,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 4752,
                  "end": 4768,
                  "body": []
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
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 4772,
      "end": 5179,
      "id": {
        "type": "Identifier",
        "start": 4778,
        "end": 4823,
        "name": "privateClassWithPrivateModuleGetAccessorTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 4824,
        "end": 5179,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 4830,
            "end": 4919,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4841,
              "end": 4861,
              "name": "myPublicStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 4861,
              "end": 4919,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4863,
                "end": 4890,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4865,
                  "end": 4890,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 4865,
                    "end": 4890,
                    "left": {
                      "type": "Identifier",
                      "start": 4865,
                      "end": 4878,
                      "name": "privateModule",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 4879,
                      "end": 4890,
                      "name": "publicClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
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
            "start": 4924,
            "end": 5000,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4928,
              "end": 4942,
              "name": "myPublicMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 4942,
              "end": 5000,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4944,
                "end": 4971,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4946,
                  "end": 4971,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 4946,
                    "end": 4971,
                    "left": {
                      "type": "Identifier",
                      "start": 4946,
                      "end": 4959,
                      "name": "privateModule",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 4960,
                      "end": 4971,
                      "name": "publicClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
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
            "start": 5005,
            "end": 5095,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5016,
              "end": 5037,
              "name": "myPublicStaticMethod1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 5037,
              "end": 5095,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 5061,
                        "end": 5086,
                        "object": {
                          "type": "Identifier",
                          "start": 5061,
                          "end": 5074,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 5075,
                          "end": 5086,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 5100,
            "end": 5177,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5104,
              "end": 5119,
              "name": "myPublicMethod1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 5119,
              "end": 5177,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 5143,
                        "end": 5168,
                        "object": {
                          "type": "Identifier",
                          "start": 5143,
                          "end": 5156,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 5157,
                          "end": 5168,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 5181,
      "end": 5379,
      "id": {
        "type": "Identifier",
        "start": 5187,
        "end": 5232,
        "name": "privateClassWithPrivateModuleSetAccessorTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 5233,
        "end": 5379,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 5239,
            "end": 5312,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5250,
              "end": 5270,
              "name": "myPublicStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 5270,
              "end": 5312,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 5271,
                  "end": 5303,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5276,
                    "end": 5303,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5278,
                      "end": 5303,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 5278,
                        "end": 5303,
                        "left": {
                          "type": "Identifier",
                          "start": 5278,
                          "end": 5291,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 5292,
                          "end": 5303,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 5305,
                "end": 5312,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 5317,
            "end": 5377,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5321,
              "end": 5335,
              "name": "myPublicMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 5335,
              "end": 5377,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 5336,
                  "end": 5368,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5341,
                    "end": 5368,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 5343,
                      "end": 5368,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 5343,
                        "end": 5368,
                        "left": {
                          "type": "Identifier",
                          "start": 5343,
                          "end": 5356,
                          "name": "privateModule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 5357,
                          "end": 5368,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 5370,
                "end": 5377,
                "body": []
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 5381,
      "end": 11541,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 5388,
        "end": 11541,
        "id": {
          "type": "Identifier",
          "start": 5395,
          "end": 5407,
          "name": "publicModule",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 5408,
          "end": 11541,
          "body": [
            {
              "type": "ClassDeclaration",
              "start": 5414,
              "end": 5440,
              "id": {
                "type": "Identifier",
                "start": 5420,
                "end": 5432,
                "name": "privateClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 5433,
                "end": 5440,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 5446,
              "end": 5478,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 5453,
                "end": 5478,
                "id": {
                  "type": "Identifier",
                  "start": 5459,
                  "end": 5470,
                  "name": "publicClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 5471,
                  "end": 5478,
                  "body": []
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 5483,
              "end": 6314,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 5490,
                "end": 6314,
                "id": {
                  "type": "Identifier",
                  "start": 5496,
                  "end": 5538,
                  "name": "publicClassWithWithPrivateGetAccessorTypes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 5539,
                  "end": 6314,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 5549,
                      "end": 5642,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5560,
                        "end": 5580,
                        "name": "myPublicStaticMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 5580,
                        "end": 5642,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                "value": null,
                                "raw": "null"
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 5582,
                          "end": 5596,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5584,
                            "end": 5596,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5584,
                              "end": 5596,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
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
                      "start": 5651,
                      "end": 5744,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5670,
                        "end": 5691,
                        "name": "myPrivateStaticMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 5691,
                        "end": 5744,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                "value": null,
                                "raw": "null"
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 5693,
                          "end": 5707,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5695,
                            "end": 5707,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5695,
                              "end": 5707,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": "private"
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 5753,
                      "end": 5833,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5757,
                        "end": 5771,
                        "name": "myPublicMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 5771,
                        "end": 5833,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                "value": null,
                                "raw": "null"
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 5773,
                          "end": 5787,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5775,
                            "end": 5787,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5775,
                              "end": 5787,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
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
                      "start": 5842,
                      "end": 5922,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5854,
                        "end": 5869,
                        "name": "myPrivateMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 5869,
                        "end": 5922,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                "value": null,
                                "raw": "null"
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 5871,
                          "end": 5885,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5873,
                            "end": 5885,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5873,
                              "end": 5885,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": "private"
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 5931,
                      "end": 6025,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5942,
                        "end": 5963,
                        "name": "myPublicStaticMethod1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 5963,
                        "end": 6025,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                "callee": {
                                  "type": "Identifier",
                                  "start": 6000,
                                  "end": 6012,
                                  "name": "privateClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [],
                                "typeArguments": null
                              }
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
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 6034,
                      "end": 6128,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 6053,
                        "end": 6075,
                        "name": "myPrivateStaticMethod1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6075,
                        "end": 6128,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                "callee": {
                                  "type": "Identifier",
                                  "start": 6103,
                                  "end": 6115,
                                  "name": "privateClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [],
                                "typeArguments": null
                              }
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
                      "accessibility": "private"
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 6137,
                      "end": 6218,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 6141,
                        "end": 6156,
                        "name": "myPublicMethod1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6156,
                        "end": 6218,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                "callee": {
                                  "type": "Identifier",
                                  "start": 6193,
                                  "end": 6205,
                                  "name": "privateClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [],
                                "typeArguments": null
                              }
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
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 6227,
                      "end": 6308,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 6239,
                        "end": 6255,
                        "name": "myPrivateMethod1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6255,
                        "end": 6308,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                "callee": {
                                  "type": "Identifier",
                                  "start": 6283,
                                  "end": 6295,
                                  "name": "privateClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [],
                                "typeArguments": null
                              }
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
                      "accessibility": "private"
                    }
                  ]
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 6320,
              "end": 7106,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 6327,
                "end": 7106,
                "id": {
                  "type": "Identifier",
                  "start": 6333,
                  "end": 6374,
                  "name": "publicClassWithWithPublicGetAccessorTypes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 6375,
                  "end": 7106,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 6385,
                      "end": 6468,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 6396,
                        "end": 6416,
                        "name": "myPublicStaticMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6416,
                        "end": 6468,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                "value": null,
                                "raw": "null"
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 6418,
                          "end": 6431,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6420,
                            "end": 6431,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6420,
                              "end": 6431,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
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
                      "start": 6477,
                      "end": 6569,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 6496,
                        "end": 6517,
                        "name": "myPrivateStaticMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6517,
                        "end": 6569,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                "value": null,
                                "raw": "null"
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 6519,
                          "end": 6532,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6521,
                            "end": 6532,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6521,
                              "end": 6532,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": "private"
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 6578,
                      "end": 6648,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 6582,
                        "end": 6596,
                        "name": "myPublicMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6596,
                        "end": 6648,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                "value": null,
                                "raw": "null"
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 6598,
                          "end": 6611,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6600,
                            "end": 6611,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6600,
                              "end": 6611,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
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
                      "start": 6657,
                      "end": 6736,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 6669,
                        "end": 6684,
                        "name": "myPrivateMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6684,
                        "end": 6736,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                "value": null,
                                "raw": "null"
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 6686,
                          "end": 6699,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 6688,
                            "end": 6699,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6688,
                              "end": 6699,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": "private"
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 6745,
                      "end": 6829,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 6756,
                        "end": 6777,
                        "name": "myPublicStaticMethod1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6777,
                        "end": 6829,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                "callee": {
                                  "type": "Identifier",
                                  "start": 6805,
                                  "end": 6816,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [],
                                "typeArguments": null
                              }
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
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 6838,
                      "end": 6931,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 6857,
                        "end": 6879,
                        "name": "myPrivateStaticMethod1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6879,
                        "end": 6931,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                "callee": {
                                  "type": "Identifier",
                                  "start": 6907,
                                  "end": 6918,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [],
                                "typeArguments": null
                              }
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
                      "accessibility": "private"
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 6940,
                      "end": 7011,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 6944,
                        "end": 6959,
                        "name": "myPublicMethod1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6959,
                        "end": 7011,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                "callee": {
                                  "type": "Identifier",
                                  "start": 6987,
                                  "end": 6998,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [],
                                "typeArguments": null
                              }
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
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 7020,
                      "end": 7100,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 7032,
                        "end": 7048,
                        "name": "myPrivateMethod1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 7048,
                        "end": 7100,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                "callee": {
                                  "type": "Identifier",
                                  "start": 7076,
                                  "end": 7087,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [],
                                "typeArguments": null
                              }
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
                      "accessibility": "private"
                    }
                  ]
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ClassDeclaration",
              "start": 7112,
              "end": 7901,
              "id": {
                "type": "Identifier",
                "start": 7118,
                "end": 7161,
                "name": "privateClassWithWithPrivateGetAccessorTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 7162,
                "end": 7901,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 7172,
                    "end": 7256,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7183,
                      "end": 7203,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7203,
                      "end": 7256,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 7205,
                        "end": 7219,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7207,
                          "end": 7219,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7207,
                            "end": 7219,
                            "name": "privateClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                    "start": 7265,
                    "end": 7358,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7284,
                      "end": 7305,
                      "name": "myPrivateStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7305,
                      "end": 7358,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 7307,
                        "end": 7321,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7309,
                          "end": 7321,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7309,
                            "end": 7321,
                            "name": "privateClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 7367,
                    "end": 7438,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7371,
                      "end": 7385,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7385,
                      "end": 7438,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 7387,
                        "end": 7401,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7389,
                          "end": 7401,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7389,
                            "end": 7401,
                            "name": "privateClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                    "start": 7447,
                    "end": 7527,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7459,
                      "end": 7474,
                      "name": "myPrivateMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7474,
                      "end": 7527,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 7476,
                        "end": 7490,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7478,
                          "end": 7490,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7478,
                            "end": 7490,
                            "name": "privateClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 7536,
                    "end": 7621,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7547,
                      "end": 7568,
                      "name": "myPublicStaticMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7568,
                      "end": 7621,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 7596,
                                "end": 7608,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 7630,
                    "end": 7724,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7649,
                      "end": 7671,
                      "name": "myPrivateStaticMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7671,
                      "end": 7724,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 7699,
                                "end": 7711,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 7733,
                    "end": 7805,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7737,
                      "end": 7752,
                      "name": "myPublicMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7752,
                      "end": 7805,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 7780,
                                "end": 7792,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 7814,
                    "end": 7895,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7826,
                      "end": 7842,
                      "name": "myPrivateMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7842,
                      "end": 7895,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 7870,
                                "end": 7882,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                    "accessibility": "private"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            {
              "type": "ClassDeclaration",
              "start": 7907,
              "end": 8687,
              "id": {
                "type": "Identifier",
                "start": 7913,
                "end": 7955,
                "name": "privateClassWithWithPublicGetAccessorTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 7956,
                "end": 8687,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 7966,
                    "end": 8049,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7977,
                      "end": 7997,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 7997,
                      "end": 8049,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 7999,
                        "end": 8012,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8001,
                          "end": 8012,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8001,
                            "end": 8012,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                    "start": 8058,
                    "end": 8150,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8077,
                      "end": 8098,
                      "name": "myPrivateStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8098,
                      "end": 8150,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 8100,
                        "end": 8113,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8102,
                          "end": 8113,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8102,
                            "end": 8113,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 8159,
                    "end": 8229,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8163,
                      "end": 8177,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8177,
                      "end": 8229,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 8179,
                        "end": 8192,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8181,
                          "end": 8192,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8181,
                            "end": 8192,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                    "start": 8238,
                    "end": 8317,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8250,
                      "end": 8265,
                      "name": "myPrivateMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8265,
                      "end": 8317,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 8267,
                        "end": 8280,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8269,
                          "end": 8280,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8269,
                            "end": 8280,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 8326,
                    "end": 8410,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8337,
                      "end": 8358,
                      "name": "myPublicStaticMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8358,
                      "end": 8410,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 8386,
                                "end": 8397,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 8419,
                    "end": 8512,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8438,
                      "end": 8460,
                      "name": "myPrivateStaticMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8460,
                      "end": 8512,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 8488,
                                "end": 8499,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 8521,
                    "end": 8592,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8525,
                      "end": 8540,
                      "name": "myPublicMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8540,
                      "end": 8592,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 8568,
                                "end": 8579,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 8601,
                    "end": 8681,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8613,
                      "end": 8629,
                      "name": "myPrivateMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8629,
                      "end": 8681,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 8657,
                                "end": 8668,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                    "accessibility": "private"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 8693,
              "end": 9058,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 8700,
                "end": 9058,
                "id": {
                  "type": "Identifier",
                  "start": 8706,
                  "end": 8748,
                  "name": "publicClassWithWithPrivateSetAccessorTypes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 8749,
                  "end": 9058,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 8759,
                      "end": 8832,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 8770,
                        "end": 8790,
                        "name": "myPublicStaticMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "set",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 8790,
                        "end": 8832,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 8791,
                            "end": 8810,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8796,
                              "end": 8810,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 8798,
                                "end": 8810,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8798,
                                  "end": 8810,
                                  "name": "privateClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 8812,
                          "end": 8832,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 8841,
                      "end": 8914,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 8860,
                        "end": 8881,
                        "name": "myPrivateStaticMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "set",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 8881,
                        "end": 8914,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 8882,
                            "end": 8901,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8887,
                              "end": 8901,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 8889,
                                "end": 8901,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8889,
                                  "end": 8901,
                                  "name": "privateClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 8903,
                          "end": 8914,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": "private"
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 8923,
                      "end": 8983,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 8927,
                        "end": 8941,
                        "name": "myPublicMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "set",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 8941,
                        "end": 8983,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 8942,
                            "end": 8961,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 8947,
                              "end": 8961,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 8949,
                                "end": 8961,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8949,
                                  "end": 8961,
                                  "name": "privateClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 8963,
                          "end": 8983,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 8992,
                      "end": 9052,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 9004,
                        "end": 9019,
                        "name": "myPrivateMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "set",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 9019,
                        "end": 9052,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 9020,
                            "end": 9039,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 9025,
                              "end": 9039,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 9027,
                                "end": 9039,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 9027,
                                  "end": 9039,
                                  "name": "privateClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 9041,
                          "end": 9052,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": "private"
                    }
                  ]
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 9064,
              "end": 9406,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 9071,
                "end": 9406,
                "id": {
                  "type": "Identifier",
                  "start": 9077,
                  "end": 9118,
                  "name": "publicClassWithWithPublicSetAccessorTypes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 9119,
                  "end": 9406,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 9129,
                      "end": 9192,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 9140,
                        "end": 9160,
                        "name": "myPublicStaticMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "set",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 9160,
                        "end": 9192,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 9161,
                            "end": 9179,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 9166,
                              "end": 9179,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 9168,
                                "end": 9179,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 9168,
                                  "end": 9179,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 9181,
                          "end": 9192,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 9201,
                      "end": 9273,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 9220,
                        "end": 9241,
                        "name": "myPrivateStaticMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "set",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 9241,
                        "end": 9273,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 9242,
                            "end": 9260,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 9247,
                              "end": 9260,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 9249,
                                "end": 9260,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 9249,
                                  "end": 9260,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 9262,
                          "end": 9273,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": "private"
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 9282,
                      "end": 9332,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 9286,
                        "end": 9300,
                        "name": "myPublicMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "set",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 9300,
                        "end": 9332,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 9301,
                            "end": 9319,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 9306,
                              "end": 9319,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 9308,
                                "end": 9319,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 9308,
                                  "end": 9319,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 9321,
                          "end": 9332,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 9341,
                      "end": 9400,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 9353,
                        "end": 9368,
                        "name": "myPrivateMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "set",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 9368,
                        "end": 9400,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 9369,
                            "end": 9387,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 9374,
                              "end": 9387,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 9376,
                                "end": 9387,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 9376,
                                  "end": 9387,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 9389,
                          "end": 9400,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": "private"
                    }
                  ]
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ClassDeclaration",
              "start": 9412,
              "end": 9753,
              "id": {
                "type": "Identifier",
                "start": 9418,
                "end": 9461,
                "name": "privateClassWithWithPrivateSetAccessorTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 9462,
                "end": 9753,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 9472,
                    "end": 9536,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9483,
                      "end": 9503,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9503,
                      "end": 9536,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 9504,
                          "end": 9523,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 9509,
                            "end": 9523,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 9511,
                              "end": 9523,
                              "typeName": {
                                "type": "Identifier",
                                "start": 9511,
                                "end": 9523,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 9525,
                        "end": 9536,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 9545,
                    "end": 9618,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9564,
                      "end": 9585,
                      "name": "myPrivateStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9585,
                      "end": 9618,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 9586,
                          "end": 9605,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 9591,
                            "end": 9605,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 9593,
                              "end": 9605,
                              "typeName": {
                                "type": "Identifier",
                                "start": 9593,
                                "end": 9605,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 9607,
                        "end": 9618,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 9627,
                    "end": 9678,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9631,
                      "end": 9645,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9645,
                      "end": 9678,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 9646,
                          "end": 9665,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 9651,
                            "end": 9665,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 9653,
                              "end": 9665,
                              "typeName": {
                                "type": "Identifier",
                                "start": 9653,
                                "end": 9665,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 9667,
                        "end": 9678,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 9687,
                    "end": 9747,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9699,
                      "end": 9714,
                      "name": "myPrivateMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9714,
                      "end": 9747,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 9715,
                          "end": 9734,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 9720,
                            "end": 9734,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 9722,
                              "end": 9734,
                              "typeName": {
                                "type": "Identifier",
                                "start": 9722,
                                "end": 9734,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 9736,
                        "end": 9747,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            {
              "type": "ClassDeclaration",
              "start": 9759,
              "end": 10095,
              "id": {
                "type": "Identifier",
                "start": 9765,
                "end": 9807,
                "name": "privateClassWithWithPublicSetAccessorTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 9808,
                "end": 10095,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 9818,
                    "end": 9881,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9829,
                      "end": 9849,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9849,
                      "end": 9881,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 9850,
                          "end": 9868,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 9855,
                            "end": 9868,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 9857,
                              "end": 9868,
                              "typeName": {
                                "type": "Identifier",
                                "start": 9857,
                                "end": 9868,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 9870,
                        "end": 9881,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 9890,
                    "end": 9962,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9909,
                      "end": 9930,
                      "name": "myPrivateStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9930,
                      "end": 9962,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 9931,
                          "end": 9949,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 9936,
                            "end": 9949,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 9938,
                              "end": 9949,
                              "typeName": {
                                "type": "Identifier",
                                "start": 9938,
                                "end": 9949,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 9951,
                        "end": 9962,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 9971,
                    "end": 10021,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9975,
                      "end": 9989,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9989,
                      "end": 10021,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 9990,
                          "end": 10008,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 9995,
                            "end": 10008,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 9997,
                              "end": 10008,
                              "typeName": {
                                "type": "Identifier",
                                "start": 9997,
                                "end": 10008,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 10010,
                        "end": 10021,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 10030,
                    "end": 10089,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 10042,
                      "end": 10057,
                      "name": "myPrivateMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 10057,
                      "end": 10089,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 10058,
                          "end": 10076,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 10063,
                            "end": 10076,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 10065,
                              "end": 10076,
                              "typeName": {
                                "type": "Identifier",
                                "start": 10065,
                                "end": 10076,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 10078,
                        "end": 10089,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 10101,
              "end": 10602,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 10108,
                "end": 10602,
                "id": {
                  "type": "Identifier",
                  "start": 10114,
                  "end": 10158,
                  "name": "publicClassWithPrivateModuleGetAccessorTypes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 10159,
                  "end": 10602,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 10169,
                      "end": 10275,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 10180,
                        "end": 10200,
                        "name": "myPublicStaticMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 10200,
                        "end": 10275,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                "value": null,
                                "raw": "null"
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 10202,
                          "end": 10229,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 10204,
                            "end": 10229,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 10204,
                              "end": 10229,
                              "left": {
                                "type": "Identifier",
                                "start": 10204,
                                "end": 10217,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 10218,
                                "end": 10229,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
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
                      "start": 10284,
                      "end": 10377,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 10288,
                        "end": 10302,
                        "name": "myPublicMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 10302,
                        "end": 10377,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                "value": null,
                                "raw": "null"
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 10304,
                          "end": 10331,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 10306,
                            "end": 10331,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 10306,
                              "end": 10331,
                              "left": {
                                "type": "Identifier",
                                "start": 10306,
                                "end": 10319,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 10320,
                                "end": 10331,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
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
                      "start": 10386,
                      "end": 10493,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 10397,
                        "end": 10418,
                        "name": "myPublicStaticMethod1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 10418,
                        "end": 10493,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 10455,
                                  "end": 10480,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 10455,
                                    "end": 10468,
                                    "name": "privateModule",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 10469,
                                    "end": 10480,
                                    "name": "publicClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "arguments": [],
                                "typeArguments": null
                              }
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
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 10502,
                      "end": 10596,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 10506,
                        "end": 10521,
                        "name": "myPublicMethod1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "get",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 10521,
                        "end": 10596,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 10558,
                                  "end": 10583,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 10558,
                                    "end": 10571,
                                    "name": "privateModule",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 10572,
                                    "end": 10583,
                                    "name": "publicClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "arguments": [],
                                "typeArguments": null
                              }
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
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 10608,
              "end": 10850,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 10615,
                "end": 10850,
                "id": {
                  "type": "Identifier",
                  "start": 10621,
                  "end": 10665,
                  "name": "publicClassWithPrivateModuleSetAccessorTypes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 10666,
                  "end": 10850,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 10676,
                      "end": 10762,
                      "static": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 10687,
                        "end": 10707,
                        "name": "myPublicStaticMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "set",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 10707,
                        "end": 10762,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 10708,
                            "end": 10740,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 10713,
                              "end": 10740,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 10715,
                                "end": 10740,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 10715,
                                  "end": 10740,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 10715,
                                    "end": 10728,
                                    "name": "privateModule",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 10729,
                                    "end": 10740,
                                    "name": "publicClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 10742,
                          "end": 10762,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "decorators": [],
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 10771,
                      "end": 10844,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 10775,
                        "end": 10789,
                        "name": "myPublicMethod",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "set",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 10789,
                        "end": 10844,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 10790,
                            "end": 10822,
                            "name": "param",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 10795,
                              "end": 10822,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 10797,
                                "end": 10822,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 10797,
                                  "end": 10822,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 10797,
                                    "end": 10810,
                                    "name": "privateModule",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 10811,
                                    "end": 10822,
                                    "name": "publicClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 10824,
                          "end": 10844,
                          "body": []
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
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ClassDeclaration",
              "start": 10856,
              "end": 11315,
              "id": {
                "type": "Identifier",
                "start": 10862,
                "end": 10907,
                "name": "privateClassWithPrivateModuleGetAccessorTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 10908,
                "end": 11315,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 10918,
                    "end": 11015,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 10929,
                      "end": 10949,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 10949,
                      "end": 11015,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 10951,
                        "end": 10978,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 10953,
                          "end": 10978,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 10953,
                            "end": 10978,
                            "left": {
                              "type": "Identifier",
                              "start": 10953,
                              "end": 10966,
                              "name": "privateModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 10967,
                              "end": 10978,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
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
                    "start": 11024,
                    "end": 11108,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11028,
                      "end": 11042,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11042,
                      "end": 11108,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 11044,
                        "end": 11071,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 11046,
                          "end": 11071,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 11046,
                            "end": 11071,
                            "left": {
                              "type": "Identifier",
                              "start": 11046,
                              "end": 11059,
                              "name": "privateModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 11060,
                              "end": 11071,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
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
                    "start": 11117,
                    "end": 11215,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11128,
                      "end": 11149,
                      "name": "myPublicStaticMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11149,
                      "end": 11215,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "MemberExpression",
                                "start": 11177,
                                "end": 11202,
                                "object": {
                                  "type": "Identifier",
                                  "start": 11177,
                                  "end": 11190,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 11191,
                                  "end": 11202,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11224,
                    "end": 11309,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11228,
                      "end": 11243,
                      "name": "myPublicMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11243,
                      "end": 11309,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "MemberExpression",
                                "start": 11271,
                                "end": 11296,
                                "object": {
                                  "type": "Identifier",
                                  "start": 11271,
                                  "end": 11284,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 11285,
                                  "end": 11296,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            {
              "type": "ClassDeclaration",
              "start": 11321,
              "end": 11539,
              "id": {
                "type": "Identifier",
                "start": 11327,
                "end": 11372,
                "name": "privateClassWithPrivateModuleSetAccessorTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 11373,
                "end": 11539,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 11383,
                    "end": 11460,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11394,
                      "end": 11414,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11414,
                      "end": 11460,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11415,
                          "end": 11447,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11420,
                            "end": 11447,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11422,
                              "end": 11447,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 11422,
                                "end": 11447,
                                "left": {
                                  "type": "Identifier",
                                  "start": 11422,
                                  "end": 11435,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 11436,
                                  "end": 11447,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 11449,
                        "end": 11460,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11469,
                    "end": 11533,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11473,
                      "end": 11487,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11487,
                      "end": 11533,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11488,
                          "end": 11520,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11493,
                            "end": 11520,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11495,
                              "end": 11520,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 11495,
                                "end": 11520,
                                "left": {
                                  "type": "Identifier",
                                  "start": 11495,
                                  "end": 11508,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 11509,
                                  "end": 11520,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 11522,
                        "end": 11533,
                        "body": []
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
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11543,
      "end": 17601,
      "id": {
        "type": "Identifier",
        "start": 11550,
        "end": 11563,
        "name": "privateModule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11564,
        "end": 17601,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 11570,
            "end": 11596,
            "id": {
              "type": "Identifier",
              "start": 11576,
              "end": 11588,
              "name": "privateClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 11589,
              "end": 11596,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 11602,
            "end": 11634,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 11609,
              "end": 11634,
              "id": {
                "type": "Identifier",
                "start": 11615,
                "end": 11626,
                "name": "publicClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 11627,
                "end": 11634,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 11639,
            "end": 12438,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 11646,
              "end": 12438,
              "id": {
                "type": "Identifier",
                "start": 11652,
                "end": 11694,
                "name": "publicClassWithWithPrivateGetAccessorTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 11695,
                "end": 12438,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 11705,
                    "end": 11790,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11716,
                      "end": 11736,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11736,
                      "end": 11790,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 11738,
                        "end": 11752,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 11740,
                          "end": 11752,
                          "typeName": {
                            "type": "Identifier",
                            "start": 11740,
                            "end": 11752,
                            "name": "privateClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                    "start": 11799,
                    "end": 11892,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11818,
                      "end": 11839,
                      "name": "myPrivateStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11839,
                      "end": 11892,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 11841,
                        "end": 11855,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 11843,
                          "end": 11855,
                          "typeName": {
                            "type": "Identifier",
                            "start": 11843,
                            "end": 11855,
                            "name": "privateClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11901,
                    "end": 11973,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11905,
                      "end": 11919,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11919,
                      "end": 11973,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 11921,
                        "end": 11935,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 11923,
                          "end": 11935,
                          "typeName": {
                            "type": "Identifier",
                            "start": 11923,
                            "end": 11935,
                            "name": "privateClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                    "start": 11982,
                    "end": 12062,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11994,
                      "end": 12009,
                      "name": "myPrivateMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12009,
                      "end": 12062,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 12011,
                        "end": 12025,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 12013,
                          "end": 12025,
                          "typeName": {
                            "type": "Identifier",
                            "start": 12013,
                            "end": 12025,
                            "name": "privateClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 12071,
                    "end": 12157,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 12082,
                      "end": 12103,
                      "name": "myPublicStaticMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12103,
                      "end": 12157,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 12132,
                                "end": 12144,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 12166,
                    "end": 12260,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 12185,
                      "end": 12207,
                      "name": "myPrivateStaticMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12207,
                      "end": 12260,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 12235,
                                "end": 12247,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 12269,
                    "end": 12342,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 12273,
                      "end": 12288,
                      "name": "myPublicMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12288,
                      "end": 12342,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 12317,
                                "end": 12329,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 12351,
                    "end": 12432,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 12363,
                      "end": 12379,
                      "name": "myPrivateMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12379,
                      "end": 12432,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 12407,
                                "end": 12419,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                    "accessibility": "private"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 12444,
            "end": 13230,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 12451,
              "end": 13230,
              "id": {
                "type": "Identifier",
                "start": 12457,
                "end": 12498,
                "name": "publicClassWithWithPublicGetAccessorTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 12499,
                "end": 13230,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 12509,
                    "end": 12592,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 12520,
                      "end": 12540,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12540,
                      "end": 12592,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 12542,
                        "end": 12555,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 12544,
                          "end": 12555,
                          "typeName": {
                            "type": "Identifier",
                            "start": 12544,
                            "end": 12555,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                    "start": 12601,
                    "end": 12693,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 12620,
                      "end": 12641,
                      "name": "myPrivateStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12641,
                      "end": 12693,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 12643,
                        "end": 12656,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 12645,
                          "end": 12656,
                          "typeName": {
                            "type": "Identifier",
                            "start": 12645,
                            "end": 12656,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 12702,
                    "end": 12772,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 12706,
                      "end": 12720,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12720,
                      "end": 12772,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 12722,
                        "end": 12735,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 12724,
                          "end": 12735,
                          "typeName": {
                            "type": "Identifier",
                            "start": 12724,
                            "end": 12735,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                    "start": 12781,
                    "end": 12860,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 12793,
                      "end": 12808,
                      "name": "myPrivateMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12808,
                      "end": 12860,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 12810,
                        "end": 12823,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 12812,
                          "end": 12823,
                          "typeName": {
                            "type": "Identifier",
                            "start": 12812,
                            "end": 12823,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 12869,
                    "end": 12953,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 12880,
                      "end": 12901,
                      "name": "myPublicStaticMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12901,
                      "end": 12953,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 12929,
                                "end": 12940,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 12962,
                    "end": 13055,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 12981,
                      "end": 13003,
                      "name": "myPrivateStaticMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 13003,
                      "end": 13055,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 13031,
                                "end": 13042,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 13064,
                    "end": 13135,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 13068,
                      "end": 13083,
                      "name": "myPublicMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 13083,
                      "end": 13135,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 13111,
                                "end": 13122,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 13144,
                    "end": 13224,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 13156,
                      "end": 13172,
                      "name": "myPrivateMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 13172,
                      "end": 13224,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 13200,
                                "end": 13211,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                    "accessibility": "private"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 13236,
            "end": 14025,
            "id": {
              "type": "Identifier",
              "start": 13242,
              "end": 13285,
              "name": "privateClassWithWithPrivateGetAccessorTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 13286,
              "end": 14025,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 13296,
                  "end": 13380,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 13307,
                    "end": 13327,
                    "name": "myPublicStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13327,
                    "end": 13380,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 13329,
                      "end": 13343,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 13331,
                        "end": 13343,
                        "typeName": {
                          "type": "Identifier",
                          "start": 13331,
                          "end": 13343,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
                  "start": 13389,
                  "end": 13482,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 13408,
                    "end": 13429,
                    "name": "myPrivateStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13429,
                    "end": 13482,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 13431,
                      "end": 13445,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 13433,
                        "end": 13445,
                        "typeName": {
                          "type": "Identifier",
                          "start": 13433,
                          "end": 13445,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 13491,
                  "end": 13562,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 13495,
                    "end": 13509,
                    "name": "myPublicMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13509,
                    "end": 13562,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 13511,
                      "end": 13525,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 13513,
                        "end": 13525,
                        "typeName": {
                          "type": "Identifier",
                          "start": 13513,
                          "end": 13525,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
                  "start": 13571,
                  "end": 13651,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 13583,
                    "end": 13598,
                    "name": "myPrivateMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13598,
                    "end": 13651,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 13600,
                      "end": 13614,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 13602,
                        "end": 13614,
                        "typeName": {
                          "type": "Identifier",
                          "start": 13602,
                          "end": 13614,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 13660,
                  "end": 13745,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 13671,
                    "end": 13692,
                    "name": "myPublicStaticMethod1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13692,
                    "end": 13745,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "callee": {
                              "type": "Identifier",
                              "start": 13720,
                              "end": 13732,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
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
                },
                {
                  "type": "MethodDefinition",
                  "start": 13754,
                  "end": 13848,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 13773,
                    "end": 13795,
                    "name": "myPrivateStaticMethod1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13795,
                    "end": 13848,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "callee": {
                              "type": "Identifier",
                              "start": 13823,
                              "end": 13835,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
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
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 13857,
                  "end": 13929,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 13861,
                    "end": 13876,
                    "name": "myPublicMethod1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13876,
                    "end": 13929,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "callee": {
                              "type": "Identifier",
                              "start": 13904,
                              "end": 13916,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
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
                },
                {
                  "type": "MethodDefinition",
                  "start": 13938,
                  "end": 14019,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 13950,
                    "end": 13966,
                    "name": "myPrivateMethod1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13966,
                    "end": 14019,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "callee": {
                              "type": "Identifier",
                              "start": 13994,
                              "end": 14006,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
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
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 14031,
            "end": 14811,
            "id": {
              "type": "Identifier",
              "start": 14037,
              "end": 14079,
              "name": "privateClassWithWithPublicGetAccessorTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 14080,
              "end": 14811,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 14090,
                  "end": 14173,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 14101,
                    "end": 14121,
                    "name": "myPublicStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 14121,
                    "end": 14173,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 14123,
                      "end": 14136,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 14125,
                        "end": 14136,
                        "typeName": {
                          "type": "Identifier",
                          "start": 14125,
                          "end": 14136,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
                  "start": 14182,
                  "end": 14274,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 14201,
                    "end": 14222,
                    "name": "myPrivateStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 14222,
                    "end": 14274,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 14224,
                      "end": 14237,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 14226,
                        "end": 14237,
                        "typeName": {
                          "type": "Identifier",
                          "start": 14226,
                          "end": 14237,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 14283,
                  "end": 14353,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 14287,
                    "end": 14301,
                    "name": "myPublicMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 14301,
                    "end": 14353,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 14303,
                      "end": 14316,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 14305,
                        "end": 14316,
                        "typeName": {
                          "type": "Identifier",
                          "start": 14305,
                          "end": 14316,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
                  "start": 14362,
                  "end": 14441,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 14374,
                    "end": 14389,
                    "name": "myPrivateMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 14389,
                    "end": 14441,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 14391,
                      "end": 14404,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 14393,
                        "end": 14404,
                        "typeName": {
                          "type": "Identifier",
                          "start": 14393,
                          "end": 14404,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 14450,
                  "end": 14534,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 14461,
                    "end": 14482,
                    "name": "myPublicStaticMethod1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 14482,
                    "end": 14534,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "callee": {
                              "type": "Identifier",
                              "start": 14510,
                              "end": 14521,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
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
                },
                {
                  "type": "MethodDefinition",
                  "start": 14543,
                  "end": 14636,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 14562,
                    "end": 14584,
                    "name": "myPrivateStaticMethod1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 14584,
                    "end": 14636,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "callee": {
                              "type": "Identifier",
                              "start": 14612,
                              "end": 14623,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
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
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 14645,
                  "end": 14716,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 14649,
                    "end": 14664,
                    "name": "myPublicMethod1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 14664,
                    "end": 14716,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "callee": {
                              "type": "Identifier",
                              "start": 14692,
                              "end": 14703,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
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
                },
                {
                  "type": "MethodDefinition",
                  "start": 14725,
                  "end": 14805,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 14737,
                    "end": 14753,
                    "name": "myPrivateMethod1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 14753,
                    "end": 14805,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "callee": {
                              "type": "Identifier",
                              "start": 14781,
                              "end": 14792,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
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
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 14817,
            "end": 15166,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 14824,
              "end": 15166,
              "id": {
                "type": "Identifier",
                "start": 14830,
                "end": 14872,
                "name": "publicClassWithWithPrivateSetAccessorTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 14873,
                "end": 15166,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 14883,
                    "end": 14948,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 14894,
                      "end": 14914,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 14914,
                      "end": 14948,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 14915,
                          "end": 14934,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 14920,
                            "end": 14934,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 14922,
                              "end": 14934,
                              "typeName": {
                                "type": "Identifier",
                                "start": 14922,
                                "end": 14934,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 14936,
                        "end": 14948,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 14957,
                    "end": 15030,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 14976,
                      "end": 14997,
                      "name": "myPrivateStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 14997,
                      "end": 15030,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 14998,
                          "end": 15017,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 15003,
                            "end": 15017,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 15005,
                              "end": 15017,
                              "typeName": {
                                "type": "Identifier",
                                "start": 15005,
                                "end": 15017,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 15019,
                        "end": 15030,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 15039,
                    "end": 15091,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 15043,
                      "end": 15057,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 15057,
                      "end": 15091,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 15058,
                          "end": 15077,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 15063,
                            "end": 15077,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 15065,
                              "end": 15077,
                              "typeName": {
                                "type": "Identifier",
                                "start": 15065,
                                "end": 15077,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 15079,
                        "end": 15091,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 15100,
                    "end": 15160,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 15112,
                      "end": 15127,
                      "name": "myPrivateMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 15127,
                      "end": 15160,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 15128,
                          "end": 15147,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 15133,
                            "end": 15147,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 15135,
                              "end": 15147,
                              "typeName": {
                                "type": "Identifier",
                                "start": 15135,
                                "end": 15147,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 15149,
                        "end": 15160,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 15172,
            "end": 15514,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 15179,
              "end": 15514,
              "id": {
                "type": "Identifier",
                "start": 15185,
                "end": 15226,
                "name": "publicClassWithWithPublicSetAccessorTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 15227,
                "end": 15514,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 15237,
                    "end": 15300,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 15248,
                      "end": 15268,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 15268,
                      "end": 15300,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 15269,
                          "end": 15287,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 15274,
                            "end": 15287,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 15276,
                              "end": 15287,
                              "typeName": {
                                "type": "Identifier",
                                "start": 15276,
                                "end": 15287,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 15289,
                        "end": 15300,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 15309,
                    "end": 15381,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 15328,
                      "end": 15349,
                      "name": "myPrivateStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 15349,
                      "end": 15381,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 15350,
                          "end": 15368,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 15355,
                            "end": 15368,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 15357,
                              "end": 15368,
                              "typeName": {
                                "type": "Identifier",
                                "start": 15357,
                                "end": 15368,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 15370,
                        "end": 15381,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 15390,
                    "end": 15440,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 15394,
                      "end": 15408,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 15408,
                      "end": 15440,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 15409,
                          "end": 15427,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 15414,
                            "end": 15427,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 15416,
                              "end": 15427,
                              "typeName": {
                                "type": "Identifier",
                                "start": 15416,
                                "end": 15427,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 15429,
                        "end": 15440,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 15449,
                    "end": 15508,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 15461,
                      "end": 15476,
                      "name": "myPrivateMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 15476,
                      "end": 15508,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 15477,
                          "end": 15495,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 15482,
                            "end": 15495,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 15484,
                              "end": 15495,
                              "typeName": {
                                "type": "Identifier",
                                "start": 15484,
                                "end": 15495,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 15497,
                        "end": 15508,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 15520,
            "end": 15861,
            "id": {
              "type": "Identifier",
              "start": 15526,
              "end": 15569,
              "name": "privateClassWithWithPrivateSetAccessorTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 15570,
              "end": 15861,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 15580,
                  "end": 15644,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 15591,
                    "end": 15611,
                    "name": "myPublicStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 15611,
                    "end": 15644,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 15612,
                        "end": 15631,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 15617,
                          "end": 15631,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 15619,
                            "end": 15631,
                            "typeName": {
                              "type": "Identifier",
                              "start": 15619,
                              "end": 15631,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 15633,
                      "end": 15644,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 15653,
                  "end": 15726,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 15672,
                    "end": 15693,
                    "name": "myPrivateStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 15693,
                    "end": 15726,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 15694,
                        "end": 15713,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 15699,
                          "end": 15713,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 15701,
                            "end": 15713,
                            "typeName": {
                              "type": "Identifier",
                              "start": 15701,
                              "end": 15713,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 15715,
                      "end": 15726,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 15735,
                  "end": 15786,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 15739,
                    "end": 15753,
                    "name": "myPublicMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 15753,
                    "end": 15786,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 15754,
                        "end": 15773,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 15759,
                          "end": 15773,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 15761,
                            "end": 15773,
                            "typeName": {
                              "type": "Identifier",
                              "start": 15761,
                              "end": 15773,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 15775,
                      "end": 15786,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 15795,
                  "end": 15855,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 15807,
                    "end": 15822,
                    "name": "myPrivateMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 15822,
                    "end": 15855,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 15823,
                        "end": 15842,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 15828,
                          "end": 15842,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 15830,
                            "end": 15842,
                            "typeName": {
                              "type": "Identifier",
                              "start": 15830,
                              "end": 15842,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 15844,
                      "end": 15855,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 15867,
            "end": 16203,
            "id": {
              "type": "Identifier",
              "start": 15873,
              "end": 15915,
              "name": "privateClassWithWithPublicSetAccessorTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 15916,
              "end": 16203,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 15926,
                  "end": 15989,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 15937,
                    "end": 15957,
                    "name": "myPublicStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 15957,
                    "end": 15989,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 15958,
                        "end": 15976,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 15963,
                          "end": 15976,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 15965,
                            "end": 15976,
                            "typeName": {
                              "type": "Identifier",
                              "start": 15965,
                              "end": 15976,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 15978,
                      "end": 15989,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 15998,
                  "end": 16070,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 16017,
                    "end": 16038,
                    "name": "myPrivateStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 16038,
                    "end": 16070,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 16039,
                        "end": 16057,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 16044,
                          "end": 16057,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 16046,
                            "end": 16057,
                            "typeName": {
                              "type": "Identifier",
                              "start": 16046,
                              "end": 16057,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 16059,
                      "end": 16070,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 16079,
                  "end": 16129,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 16083,
                    "end": 16097,
                    "name": "myPublicMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 16097,
                    "end": 16129,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 16098,
                        "end": 16116,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 16103,
                          "end": 16116,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 16105,
                            "end": 16116,
                            "typeName": {
                              "type": "Identifier",
                              "start": 16105,
                              "end": 16116,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 16118,
                      "end": 16129,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 16138,
                  "end": 16197,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 16150,
                    "end": 16165,
                    "name": "myPrivateMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 16165,
                    "end": 16197,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 16166,
                        "end": 16184,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 16171,
                          "end": 16184,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 16173,
                            "end": 16184,
                            "typeName": {
                              "type": "Identifier",
                              "start": 16173,
                              "end": 16184,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 16186,
                      "end": 16197,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 16209,
            "end": 16678,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 16216,
              "end": 16678,
              "id": {
                "type": "Identifier",
                "start": 16222,
                "end": 16266,
                "name": "publicClassWithPrivateModuleGetAccessorTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 16267,
                "end": 16678,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 16277,
                    "end": 16375,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 16288,
                      "end": 16308,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 16308,
                      "end": 16375,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 16310,
                        "end": 16337,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 16312,
                          "end": 16337,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 16312,
                            "end": 16337,
                            "left": {
                              "type": "Identifier",
                              "start": 16312,
                              "end": 16325,
                              "name": "privateModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 16326,
                              "end": 16337,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
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
                    "start": 16384,
                    "end": 16469,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 16388,
                      "end": 16402,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 16402,
                      "end": 16469,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 16404,
                        "end": 16431,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 16406,
                          "end": 16431,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 16406,
                            "end": 16431,
                            "left": {
                              "type": "Identifier",
                              "start": 16406,
                              "end": 16419,
                              "name": "privateModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 16420,
                              "end": 16431,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
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
                    "start": 16478,
                    "end": 16577,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 16489,
                      "end": 16510,
                      "name": "myPublicStaticMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 16510,
                      "end": 16577,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "MemberExpression",
                                "start": 16539,
                                "end": 16564,
                                "object": {
                                  "type": "Identifier",
                                  "start": 16539,
                                  "end": 16552,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 16553,
                                  "end": 16564,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 16586,
                    "end": 16672,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 16590,
                      "end": 16605,
                      "name": "myPublicMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 16605,
                      "end": 16672,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "MemberExpression",
                                "start": 16634,
                                "end": 16659,
                                "object": {
                                  "type": "Identifier",
                                  "start": 16634,
                                  "end": 16647,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 16648,
                                  "end": 16659,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 16684,
            "end": 16910,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 16691,
              "end": 16910,
              "id": {
                "type": "Identifier",
                "start": 16697,
                "end": 16741,
                "name": "publicClassWithPrivateModuleSetAccessorTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 16742,
                "end": 16910,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 16752,
                    "end": 16830,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 16763,
                      "end": 16783,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 16783,
                      "end": 16830,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 16784,
                          "end": 16816,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 16789,
                            "end": 16816,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 16791,
                              "end": 16816,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 16791,
                                "end": 16816,
                                "left": {
                                  "type": "Identifier",
                                  "start": 16791,
                                  "end": 16804,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 16805,
                                  "end": 16816,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 16818,
                        "end": 16830,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 16839,
                    "end": 16904,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 16843,
                      "end": 16857,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 16857,
                      "end": 16904,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 16858,
                          "end": 16890,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 16863,
                            "end": 16890,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 16865,
                              "end": 16890,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 16865,
                                "end": 16890,
                                "left": {
                                  "type": "Identifier",
                                  "start": 16865,
                                  "end": 16878,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 16879,
                                  "end": 16890,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 16892,
                        "end": 16904,
                        "body": []
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
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 16916,
            "end": 17375,
            "id": {
              "type": "Identifier",
              "start": 16922,
              "end": 16967,
              "name": "privateClassWithPrivateModuleGetAccessorTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 16968,
              "end": 17375,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 16978,
                  "end": 17075,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 16989,
                    "end": 17009,
                    "name": "myPublicStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 17009,
                    "end": 17075,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 17011,
                      "end": 17038,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 17013,
                        "end": 17038,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 17013,
                          "end": 17038,
                          "left": {
                            "type": "Identifier",
                            "start": 17013,
                            "end": 17026,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 17027,
                            "end": 17038,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
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
                  "start": 17084,
                  "end": 17168,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 17088,
                    "end": 17102,
                    "name": "myPublicMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 17102,
                    "end": 17168,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 17104,
                      "end": 17131,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 17106,
                        "end": 17131,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 17106,
                          "end": 17131,
                          "left": {
                            "type": "Identifier",
                            "start": 17106,
                            "end": 17119,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 17120,
                            "end": 17131,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
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
                  "start": 17177,
                  "end": 17275,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 17188,
                    "end": 17209,
                    "name": "myPublicStaticMethod1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 17209,
                    "end": 17275,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "callee": {
                              "type": "MemberExpression",
                              "start": 17237,
                              "end": 17262,
                              "object": {
                                "type": "Identifier",
                                "start": 17237,
                                "end": 17250,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 17251,
                                "end": 17262,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
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
                },
                {
                  "type": "MethodDefinition",
                  "start": 17284,
                  "end": 17369,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 17288,
                    "end": 17303,
                    "name": "myPublicMethod1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 17303,
                    "end": 17369,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "callee": {
                              "type": "MemberExpression",
                              "start": 17331,
                              "end": 17356,
                              "object": {
                                "type": "Identifier",
                                "start": 17331,
                                "end": 17344,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 17345,
                                "end": 17356,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
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
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 17381,
            "end": 17599,
            "id": {
              "type": "Identifier",
              "start": 17387,
              "end": 17432,
              "name": "privateClassWithPrivateModuleSetAccessorTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 17433,
              "end": 17599,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 17443,
                  "end": 17520,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 17454,
                    "end": 17474,
                    "name": "myPublicStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 17474,
                    "end": 17520,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 17475,
                        "end": 17507,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 17480,
                          "end": 17507,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 17482,
                            "end": 17507,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 17482,
                              "end": 17507,
                              "left": {
                                "type": "Identifier",
                                "start": 17482,
                                "end": 17495,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 17496,
                                "end": 17507,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 17509,
                      "end": 17520,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 17529,
                  "end": 17593,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 17533,
                    "end": 17547,
                    "name": "myPublicMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 17547,
                    "end": 17593,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 17548,
                        "end": 17580,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 17553,
                          "end": 17580,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 17555,
                            "end": 17580,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 17555,
                              "end": 17580,
                              "left": {
                                "type": "Identifier",
                                "start": 17555,
                                "end": 17568,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 17569,
                                "end": 17580,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 17582,
                      "end": 17593,
                      "body": []
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
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 25,
        "name": "publicClassInGlobal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 29,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 31,
      "end": 778,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 82,
        "name": "publicClassInGlobalWithPublicGetAccessorTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 83,
        "end": 778,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 89,
            "end": 172,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 120,
              "name": "myPublicStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 120,
              "end": 172,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 122,
                "end": 143,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 124,
                  "end": 143,
                  "typeName": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 143,
                    "name": "publicClassInGlobal",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
            "start": 177,
            "end": 269,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 217,
              "name": "myPrivateStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 217,
              "end": 269,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 219,
                "end": 240,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 221,
                  "end": 240,
                  "typeName": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 240,
                    "name": "publicClassInGlobal",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 274,
            "end": 344,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 278,
              "end": 292,
              "name": "myPublicMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 292,
              "end": 344,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 294,
                "end": 315,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 296,
                  "end": 315,
                  "typeName": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 315,
                    "name": "publicClassInGlobal",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
            "start": 349,
            "end": 428,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 361,
              "end": 376,
              "name": "myPrivateMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 376,
              "end": 428,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 378,
                "end": 399,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 380,
                  "end": 399,
                  "typeName": {
                    "type": "Identifier",
                    "start": 380,
                    "end": 399,
                    "name": "publicClassInGlobal",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 433,
            "end": 517,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 444,
              "end": 465,
              "name": "myPublicStaticMethod1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 465,
              "end": 517,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "Identifier",
                        "start": 489,
                        "end": 508,
                        "name": "publicClassInGlobal",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 522,
            "end": 615,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 541,
              "end": 563,
              "name": "myPrivateStaticMethod1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 563,
              "end": 615,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "Identifier",
                        "start": 587,
                        "end": 606,
                        "name": "publicClassInGlobal",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 620,
            "end": 691,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 624,
              "end": 639,
              "name": "myPublicMethod1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 639,
              "end": 691,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "Identifier",
                        "start": 663,
                        "end": 682,
                        "name": "publicClassInGlobal",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 696,
            "end": 776,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 708,
              "end": 724,
              "name": "myPrivateMethod1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 724,
              "end": 776,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "Identifier",
                        "start": 748,
                        "end": 767,
                        "name": "publicClassInGlobal",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
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
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 780,
      "end": 1119,
      "id": {
        "type": "Identifier",
        "start": 786,
        "end": 835,
        "name": "publicClassInGlobalWithWithPublicSetAccessorTypes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 836,
        "end": 1119,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 842,
            "end": 909,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 853,
              "end": 873,
              "name": "myPublicStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 873,
              "end": 909,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 874,
                  "end": 900,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 879,
                    "end": 900,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 881,
                      "end": 900,
                      "typeName": {
                        "type": "Identifier",
                        "start": 881,
                        "end": 900,
                        "name": "publicClassInGlobal",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 902,
                "end": 909,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 914,
            "end": 990,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 933,
              "end": 954,
              "name": "myPrivateStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 954,
              "end": 990,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 955,
                  "end": 981,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 960,
                    "end": 981,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 962,
                      "end": 981,
                      "typeName": {
                        "type": "Identifier",
                        "start": 962,
                        "end": 981,
                        "name": "publicClassInGlobal",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 983,
                "end": 990,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 995,
            "end": 1049,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 999,
              "end": 1013,
              "name": "myPublicMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 1013,
              "end": 1049,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1014,
                  "end": 1040,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1019,
                    "end": 1040,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1021,
                      "end": 1040,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1021,
                        "end": 1040,
                        "name": "publicClassInGlobal",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1042,
                "end": 1049,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1054,
            "end": 1117,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1066,
              "end": 1081,
              "name": "myPrivateMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 1081,
              "end": 1117,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1082,
                  "end": 1108,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1087,
                    "end": 1108,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1089,
                      "end": 1108,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1089,
                        "end": 1108,
                        "name": "publicClassInGlobal",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1110,
                "end": 1117,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1121,
      "end": 14091,
      "id": {
        "type": "Identifier",
        "start": 1128,
        "end": 1148,
        "name": "publicModuleInGlobal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1149,
        "end": 14091,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 1155,
            "end": 1181,
            "id": {
              "type": "Identifier",
              "start": 1161,
              "end": 1173,
              "name": "privateClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 1174,
              "end": 1181,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1187,
            "end": 1219,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1194,
              "end": 1219,
              "id": {
                "type": "Identifier",
                "start": 1200,
                "end": 1211,
                "name": "publicClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 1212,
                "end": 1219,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 1225,
            "end": 8027,
            "id": {
              "type": "Identifier",
              "start": 1232,
              "end": 1245,
              "name": "privateModule",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 1246,
              "end": 8027,
              "body": [
                {
                  "type": "ClassDeclaration",
                  "start": 1256,
                  "end": 1286,
                  "id": {
                    "type": "Identifier",
                    "start": 1262,
                    "end": 1274,
                    "name": "privateClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 1275,
                    "end": 1286,
                    "body": []
                  },
                  "decorators": [],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 1296,
                  "end": 1332,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 1303,
                    "end": 1332,
                    "id": {
                      "type": "Identifier",
                      "start": 1309,
                      "end": 1320,
                      "name": "publicClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 1321,
                      "end": 1332,
                      "body": []
                    },
                    "decorators": [],
                    "typeParameters": null,
                    "implements": [],
                    "abstract": false,
                    "declare": false,
                    "superTypeArguments": null
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 1341,
                  "end": 2236,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 1348,
                    "end": 2236,
                    "id": {
                      "type": "Identifier",
                      "start": 1354,
                      "end": 1396,
                      "name": "publicClassWithWithPrivateGetAccessorTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 1397,
                      "end": 2236,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 1411,
                          "end": 1503,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1422,
                            "end": 1442,
                            "name": "myPublicStaticMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "get",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 1442,
                            "end": 1503,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                    "value": null,
                                    "raw": "null"
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1444,
                              "end": 1458,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1446,
                                "end": 1458,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1446,
                                  "end": 1458,
                                  "name": "privateClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
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
                          "start": 1516,
                          "end": 1617,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1535,
                            "end": 1556,
                            "name": "myPrivateStaticMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "get",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 1556,
                            "end": 1617,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                    "value": null,
                                    "raw": "null"
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1558,
                              "end": 1572,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1560,
                                "end": 1572,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1560,
                                  "end": 1572,
                                  "name": "privateClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "decorators": [],
                          "override": false,
                          "optional": false,
                          "accessibility": "private"
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 1630,
                          "end": 1709,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1634,
                            "end": 1648,
                            "name": "myPublicMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "get",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 1648,
                            "end": 1709,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                    "value": null,
                                    "raw": "null"
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1650,
                              "end": 1664,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1652,
                                "end": 1664,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1652,
                                  "end": 1664,
                                  "name": "privateClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
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
                          "start": 1722,
                          "end": 1810,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1734,
                            "end": 1749,
                            "name": "myPrivateMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "get",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 1749,
                            "end": 1810,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                    "value": null,
                                    "raw": "null"
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1751,
                              "end": 1765,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1753,
                                "end": 1765,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1753,
                                  "end": 1765,
                                  "name": "privateClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "decorators": [],
                          "override": false,
                          "optional": false,
                          "accessibility": "private"
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 1823,
                          "end": 1916,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1834,
                            "end": 1855,
                            "name": "myPublicStaticMethod1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "get",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 1855,
                            "end": 1916,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 1887,
                                      "end": 1899,
                                      "name": "privateClass",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "arguments": [],
                                    "typeArguments": null
                                  }
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
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 1929,
                          "end": 2031,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1948,
                            "end": 1970,
                            "name": "myPrivateStaticMethod1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "get",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 1970,
                            "end": 2031,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 2002,
                                      "end": 2014,
                                      "name": "privateClass",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "arguments": [],
                                    "typeArguments": null
                                  }
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
                          "accessibility": "private"
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 2044,
                          "end": 2124,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2048,
                            "end": 2063,
                            "name": "myPublicMethod1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "get",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2063,
                            "end": 2124,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 2095,
                                      "end": 2107,
                                      "name": "privateClass",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "arguments": [],
                                    "typeArguments": null
                                  }
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
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 2137,
                          "end": 2226,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2149,
                            "end": 2165,
                            "name": "myPrivateMethod1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "get",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2165,
                            "end": 2226,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 2197,
                                      "end": 2209,
                                      "name": "privateClass",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "arguments": [],
                                    "typeArguments": null
                                  }
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
                          "accessibility": "private"
                        }
                      ]
                    },
                    "decorators": [],
                    "typeParameters": null,
                    "implements": [],
                    "abstract": false,
                    "declare": false,
                    "superTypeArguments": null
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 2246,
                  "end": 3132,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 2253,
                    "end": 3132,
                    "id": {
                      "type": "Identifier",
                      "start": 2259,
                      "end": 2300,
                      "name": "publicClassWithWithPublicGetAccessorTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 2301,
                      "end": 3132,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 2315,
                          "end": 2406,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2326,
                            "end": 2346,
                            "name": "myPublicStaticMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "get",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2346,
                            "end": 2406,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                    "value": null,
                                    "raw": "null"
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2348,
                              "end": 2361,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2350,
                                "end": 2361,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2350,
                                  "end": 2361,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
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
                          "start": 2419,
                          "end": 2519,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2438,
                            "end": 2459,
                            "name": "myPrivateStaticMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "get",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2459,
                            "end": 2519,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                    "value": null,
                                    "raw": "null"
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2461,
                              "end": 2474,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2463,
                                "end": 2474,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2463,
                                  "end": 2474,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "decorators": [],
                          "override": false,
                          "optional": false,
                          "accessibility": "private"
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 2532,
                          "end": 2610,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2536,
                            "end": 2550,
                            "name": "myPublicMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "get",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2550,
                            "end": 2610,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                    "value": null,
                                    "raw": "null"
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2552,
                              "end": 2565,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2554,
                                "end": 2565,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2554,
                                  "end": 2565,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
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
                          "start": 2623,
                          "end": 2710,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2635,
                            "end": 2650,
                            "name": "myPrivateMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "get",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2650,
                            "end": 2710,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                    "value": null,
                                    "raw": "null"
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2652,
                              "end": 2665,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2654,
                                "end": 2665,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2654,
                                  "end": 2665,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "decorators": [],
                          "override": false,
                          "optional": false,
                          "accessibility": "private"
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 2723,
                          "end": 2815,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2734,
                            "end": 2755,
                            "name": "myPublicStaticMethod1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "get",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2755,
                            "end": 2815,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 2787,
                                      "end": 2798,
                                      "name": "publicClass",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "arguments": [],
                                    "typeArguments": null
                                  }
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
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 2828,
                          "end": 2929,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2847,
                            "end": 2869,
                            "name": "myPrivateStaticMethod1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "get",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2869,
                            "end": 2929,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 2901,
                                      "end": 2912,
                                      "name": "publicClass",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "arguments": [],
                                    "typeArguments": null
                                  }
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
                          "accessibility": "private"
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 2942,
                          "end": 3021,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2946,
                            "end": 2961,
                            "name": "myPublicMethod1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "get",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2961,
                            "end": 3021,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 2993,
                                      "end": 3004,
                                      "name": "publicClass",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "arguments": [],
                                    "typeArguments": null
                                  }
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
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 3034,
                          "end": 3122,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3046,
                            "end": 3062,
                            "name": "myPrivateMethod1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "get",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 3062,
                            "end": 3122,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 3094,
                                      "end": 3105,
                                      "name": "publicClass",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "arguments": [],
                                    "typeArguments": null
                                  }
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
                          "accessibility": "private"
                        }
                      ]
                    },
                    "decorators": [],
                    "typeParameters": null,
                    "implements": [],
                    "abstract": false,
                    "declare": false,
                    "superTypeArguments": null
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "ClassDeclaration",
                  "start": 3142,
                  "end": 4031,
                  "id": {
                    "type": "Identifier",
                    "start": 3148,
                    "end": 3191,
                    "name": "privateClassWithWithPrivateGetAccessorTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 3192,
                    "end": 4031,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 3206,
                        "end": 3298,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3217,
                          "end": 3237,
                          "name": "myPublicStaticMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "get",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3237,
                          "end": 3298,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "value": null,
                                  "raw": "null"
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 3239,
                            "end": 3253,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3241,
                              "end": 3253,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3241,
                                "end": 3253,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
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
                        "start": 3311,
                        "end": 3412,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3330,
                          "end": 3351,
                          "name": "myPrivateStaticMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "get",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3351,
                          "end": 3412,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "value": null,
                                  "raw": "null"
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 3353,
                            "end": 3367,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3355,
                              "end": 3367,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3355,
                                "end": 3367,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "decorators": [],
                        "override": false,
                        "optional": false,
                        "accessibility": "private"
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 3425,
                        "end": 3504,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3429,
                          "end": 3443,
                          "name": "myPublicMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "get",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3443,
                          "end": 3504,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "value": null,
                                  "raw": "null"
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 3445,
                            "end": 3459,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3447,
                              "end": 3459,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3447,
                                "end": 3459,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
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
                        "start": 3517,
                        "end": 3605,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3529,
                          "end": 3544,
                          "name": "myPrivateMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "get",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3544,
                          "end": 3605,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "value": null,
                                  "raw": "null"
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 3546,
                            "end": 3560,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3548,
                              "end": 3560,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3548,
                                "end": 3560,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "decorators": [],
                        "override": false,
                        "optional": false,
                        "accessibility": "private"
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 3618,
                        "end": 3711,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3629,
                          "end": 3650,
                          "name": "myPublicStaticMethod1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "get",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3650,
                          "end": 3711,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 3682,
                                    "end": 3694,
                                    "name": "privateClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [],
                                  "typeArguments": null
                                }
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
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 3724,
                        "end": 3826,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3743,
                          "end": 3765,
                          "name": "myPrivateStaticMethod1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "get",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3765,
                          "end": 3826,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 3797,
                                    "end": 3809,
                                    "name": "privateClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [],
                                  "typeArguments": null
                                }
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
                        "accessibility": "private"
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 3839,
                        "end": 3919,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3843,
                          "end": 3858,
                          "name": "myPublicMethod1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "get",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3858,
                          "end": 3919,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 3890,
                                    "end": 3902,
                                    "name": "privateClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [],
                                  "typeArguments": null
                                }
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
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 3932,
                        "end": 4021,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3944,
                          "end": 3960,
                          "name": "myPrivateMethod1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "get",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 3960,
                          "end": 4021,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 3992,
                                    "end": 4004,
                                    "name": "privateClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [],
                                  "typeArguments": null
                                }
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
                        "accessibility": "private"
                      }
                    ]
                  },
                  "decorators": [],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                },
                {
                  "type": "ClassDeclaration",
                  "start": 4041,
                  "end": 4921,
                  "id": {
                    "type": "Identifier",
                    "start": 4047,
                    "end": 4089,
                    "name": "privateClassWithWithPublicGetAccessorTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 4090,
                    "end": 4921,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 4104,
                        "end": 4195,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 4115,
                          "end": 4135,
                          "name": "myPublicStaticMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "get",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 4135,
                          "end": 4195,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "value": null,
                                  "raw": "null"
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 4137,
                            "end": 4150,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4139,
                              "end": 4150,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4139,
                                "end": 4150,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
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
                        "start": 4208,
                        "end": 4308,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 4227,
                          "end": 4248,
                          "name": "myPrivateStaticMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "get",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 4248,
                          "end": 4308,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "value": null,
                                  "raw": "null"
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 4250,
                            "end": 4263,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4252,
                              "end": 4263,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4252,
                                "end": 4263,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "decorators": [],
                        "override": false,
                        "optional": false,
                        "accessibility": "private"
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 4321,
                        "end": 4399,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 4325,
                          "end": 4339,
                          "name": "myPublicMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "get",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 4339,
                          "end": 4399,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "value": null,
                                  "raw": "null"
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 4341,
                            "end": 4354,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4343,
                              "end": 4354,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4343,
                                "end": 4354,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
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
                        "start": 4412,
                        "end": 4499,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 4424,
                          "end": 4439,
                          "name": "myPrivateMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "get",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 4439,
                          "end": 4499,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "value": null,
                                  "raw": "null"
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 4441,
                            "end": 4454,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4443,
                              "end": 4454,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4443,
                                "end": 4454,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "decorators": [],
                        "override": false,
                        "optional": false,
                        "accessibility": "private"
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 4512,
                        "end": 4604,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 4523,
                          "end": 4544,
                          "name": "myPublicStaticMethod1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "get",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 4544,
                          "end": 4604,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 4576,
                                    "end": 4587,
                                    "name": "publicClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [],
                                  "typeArguments": null
                                }
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
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 4617,
                        "end": 4718,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 4636,
                          "end": 4658,
                          "name": "myPrivateStaticMethod1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "get",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 4658,
                          "end": 4718,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 4690,
                                    "end": 4701,
                                    "name": "publicClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [],
                                  "typeArguments": null
                                }
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
                        "accessibility": "private"
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 4731,
                        "end": 4810,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 4735,
                          "end": 4750,
                          "name": "myPublicMethod1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "get",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 4750,
                          "end": 4810,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 4782,
                                    "end": 4793,
                                    "name": "publicClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [],
                                  "typeArguments": null
                                }
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
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 4823,
                        "end": 4911,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 4835,
                          "end": 4851,
                          "name": "myPrivateMethod1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "get",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 4851,
                          "end": 4911,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 4883,
                                    "end": 4894,
                                    "name": "publicClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [],
                                  "typeArguments": null
                                }
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
                        "accessibility": "private"
                      }
                    ]
                  },
                  "decorators": [],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 4931,
                  "end": 5314,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 4938,
                    "end": 5314,
                    "id": {
                      "type": "Identifier",
                      "start": 4944,
                      "end": 4986,
                      "name": "publicClassWithWithPrivateSetAccessorTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 4987,
                      "end": 5314,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 5001,
                          "end": 5069,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 5012,
                            "end": 5032,
                            "name": "myPublicStaticMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "set",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 5032,
                            "end": 5069,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 5033,
                                "end": 5052,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 5038,
                                  "end": 5052,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 5040,
                                    "end": 5052,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 5040,
                                      "end": 5052,
                                      "name": "privateClass",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 5054,
                              "end": 5069,
                              "body": []
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "decorators": [],
                          "override": false,
                          "optional": false,
                          "accessibility": null
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 5082,
                          "end": 5159,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 5101,
                            "end": 5122,
                            "name": "myPrivateStaticMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "set",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 5122,
                            "end": 5159,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 5123,
                                "end": 5142,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 5128,
                                  "end": 5142,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 5130,
                                    "end": 5142,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 5130,
                                      "end": 5142,
                                      "name": "privateClass",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 5144,
                              "end": 5159,
                              "body": []
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "decorators": [],
                          "override": false,
                          "optional": false,
                          "accessibility": "private"
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 5172,
                          "end": 5227,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 5176,
                            "end": 5190,
                            "name": "myPublicMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "set",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 5190,
                            "end": 5227,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 5191,
                                "end": 5210,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 5196,
                                  "end": 5210,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 5198,
                                    "end": 5210,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 5198,
                                      "end": 5210,
                                      "name": "privateClass",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 5212,
                              "end": 5227,
                              "body": []
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "decorators": [],
                          "override": false,
                          "optional": false,
                          "accessibility": null
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 5240,
                          "end": 5304,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 5252,
                            "end": 5267,
                            "name": "myPrivateMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "set",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 5267,
                            "end": 5304,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 5268,
                                "end": 5287,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 5273,
                                  "end": 5287,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 5275,
                                    "end": 5287,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 5275,
                                      "end": 5287,
                                      "name": "privateClass",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 5289,
                              "end": 5304,
                              "body": []
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "decorators": [],
                          "override": false,
                          "optional": false,
                          "accessibility": "private"
                        }
                      ]
                    },
                    "decorators": [],
                    "typeParameters": null,
                    "implements": [],
                    "abstract": false,
                    "declare": false,
                    "superTypeArguments": null
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 5324,
                  "end": 5702,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 5331,
                    "end": 5702,
                    "id": {
                      "type": "Identifier",
                      "start": 5337,
                      "end": 5378,
                      "name": "publicClassWithWithPublicSetAccessorTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 5379,
                      "end": 5702,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 5393,
                          "end": 5460,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 5404,
                            "end": 5424,
                            "name": "myPublicStaticMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "set",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 5424,
                            "end": 5460,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 5425,
                                "end": 5443,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 5430,
                                  "end": 5443,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 5432,
                                    "end": 5443,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 5432,
                                      "end": 5443,
                                      "name": "publicClass",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 5445,
                              "end": 5460,
                              "body": []
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "decorators": [],
                          "override": false,
                          "optional": false,
                          "accessibility": null
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 5473,
                          "end": 5549,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 5492,
                            "end": 5513,
                            "name": "myPrivateStaticMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "set",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 5513,
                            "end": 5549,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 5514,
                                "end": 5532,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 5519,
                                  "end": 5532,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 5521,
                                    "end": 5532,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 5521,
                                      "end": 5532,
                                      "name": "publicClass",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 5534,
                              "end": 5549,
                              "body": []
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "decorators": [],
                          "override": false,
                          "optional": false,
                          "accessibility": "private"
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 5562,
                          "end": 5616,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 5566,
                            "end": 5580,
                            "name": "myPublicMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "set",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 5580,
                            "end": 5616,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 5581,
                                "end": 5599,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 5586,
                                  "end": 5599,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 5588,
                                    "end": 5599,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 5588,
                                      "end": 5599,
                                      "name": "publicClass",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 5601,
                              "end": 5616,
                              "body": []
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "decorators": [],
                          "override": false,
                          "optional": false,
                          "accessibility": null
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 5629,
                          "end": 5692,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 5641,
                            "end": 5656,
                            "name": "myPrivateMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "set",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 5656,
                            "end": 5692,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 5657,
                                "end": 5675,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 5662,
                                  "end": 5675,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 5664,
                                    "end": 5675,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 5664,
                                      "end": 5675,
                                      "name": "publicClass",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 5677,
                              "end": 5692,
                              "body": []
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "decorators": [],
                          "override": false,
                          "optional": false,
                          "accessibility": "private"
                        }
                      ]
                    },
                    "decorators": [],
                    "typeParameters": null,
                    "implements": [],
                    "abstract": false,
                    "declare": false,
                    "superTypeArguments": null
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "ClassDeclaration",
                  "start": 5712,
                  "end": 6089,
                  "id": {
                    "type": "Identifier",
                    "start": 5718,
                    "end": 5761,
                    "name": "privateClassWithWithPrivateSetAccessorTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 5762,
                    "end": 6089,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 5776,
                        "end": 5844,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 5787,
                          "end": 5807,
                          "name": "myPublicStaticMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "set",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 5807,
                          "end": 5844,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 5808,
                              "end": 5827,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 5813,
                                "end": 5827,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 5815,
                                  "end": 5827,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5815,
                                    "end": 5827,
                                    "name": "privateClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 5829,
                            "end": 5844,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "decorators": [],
                        "override": false,
                        "optional": false,
                        "accessibility": null
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 5857,
                        "end": 5934,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 5876,
                          "end": 5897,
                          "name": "myPrivateStaticMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "set",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 5897,
                          "end": 5934,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 5898,
                              "end": 5917,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 5903,
                                "end": 5917,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 5905,
                                  "end": 5917,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5905,
                                    "end": 5917,
                                    "name": "privateClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 5919,
                            "end": 5934,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "decorators": [],
                        "override": false,
                        "optional": false,
                        "accessibility": "private"
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 5947,
                        "end": 6002,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 5951,
                          "end": 5965,
                          "name": "myPublicMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "set",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 5965,
                          "end": 6002,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 5966,
                              "end": 5985,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 5971,
                                "end": 5985,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 5973,
                                  "end": 5985,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 5973,
                                    "end": 5985,
                                    "name": "privateClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 5987,
                            "end": 6002,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "decorators": [],
                        "override": false,
                        "optional": false,
                        "accessibility": null
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 6015,
                        "end": 6079,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 6027,
                          "end": 6042,
                          "name": "myPrivateMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "set",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 6042,
                          "end": 6079,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 6043,
                              "end": 6062,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 6048,
                                "end": 6062,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 6050,
                                  "end": 6062,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 6050,
                                    "end": 6062,
                                    "name": "privateClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 6064,
                            "end": 6079,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "decorators": [],
                        "override": false,
                        "optional": false,
                        "accessibility": "private"
                      }
                    ]
                  },
                  "decorators": [],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                },
                {
                  "type": "ClassDeclaration",
                  "start": 6099,
                  "end": 6471,
                  "id": {
                    "type": "Identifier",
                    "start": 6105,
                    "end": 6147,
                    "name": "privateClassWithWithPublicSetAccessorTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 6148,
                    "end": 6471,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 6162,
                        "end": 6229,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 6173,
                          "end": 6193,
                          "name": "myPublicStaticMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "set",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 6193,
                          "end": 6229,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 6194,
                              "end": 6212,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 6199,
                                "end": 6212,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 6201,
                                  "end": 6212,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 6201,
                                    "end": 6212,
                                    "name": "publicClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 6214,
                            "end": 6229,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "decorators": [],
                        "override": false,
                        "optional": false,
                        "accessibility": null
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 6242,
                        "end": 6318,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 6261,
                          "end": 6282,
                          "name": "myPrivateStaticMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "set",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 6282,
                          "end": 6318,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 6283,
                              "end": 6301,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 6288,
                                "end": 6301,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 6290,
                                  "end": 6301,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 6290,
                                    "end": 6301,
                                    "name": "publicClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 6303,
                            "end": 6318,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "decorators": [],
                        "override": false,
                        "optional": false,
                        "accessibility": "private"
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 6331,
                        "end": 6385,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 6335,
                          "end": 6349,
                          "name": "myPublicMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "set",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 6349,
                          "end": 6385,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 6350,
                              "end": 6368,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 6355,
                                "end": 6368,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 6357,
                                  "end": 6368,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 6357,
                                    "end": 6368,
                                    "name": "publicClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 6370,
                            "end": 6385,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "decorators": [],
                        "override": false,
                        "optional": false,
                        "accessibility": null
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 6398,
                        "end": 6461,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 6410,
                          "end": 6425,
                          "name": "myPrivateMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "set",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 6425,
                          "end": 6461,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 6426,
                              "end": 6444,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 6431,
                                "end": 6444,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 6433,
                                  "end": 6444,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 6433,
                                    "end": 6444,
                                    "name": "publicClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 6446,
                            "end": 6461,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "decorators": [],
                        "override": false,
                        "optional": false,
                        "accessibility": "private"
                      }
                    ]
                  },
                  "decorators": [],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 6481,
                  "end": 6998,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 6488,
                    "end": 6998,
                    "id": {
                      "type": "Identifier",
                      "start": 6494,
                      "end": 6538,
                      "name": "publicClassWithPrivateModuleGetAccessorTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 6539,
                      "end": 6998,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 6553,
                          "end": 6658,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 6564,
                            "end": 6584,
                            "name": "myPublicStaticMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "get",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 6584,
                            "end": 6658,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                    "value": null,
                                    "raw": "null"
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 6586,
                              "end": 6613,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6588,
                                "end": 6613,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 6588,
                                  "end": 6613,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 6588,
                                    "end": 6601,
                                    "name": "privateModule",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 6602,
                                    "end": 6613,
                                    "name": "publicClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "typeArguments": null
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
                          "start": 6671,
                          "end": 6763,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 6675,
                            "end": 6689,
                            "name": "myPublicMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "get",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 6689,
                            "end": 6763,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                    "value": null,
                                    "raw": "null"
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 6691,
                              "end": 6718,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 6693,
                                "end": 6718,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 6693,
                                  "end": 6718,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 6693,
                                    "end": 6706,
                                    "name": "privateModule",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 6707,
                                    "end": 6718,
                                    "name": "publicClass",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "typeArguments": null
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
                          "start": 6776,
                          "end": 6882,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 6787,
                            "end": 6808,
                            "name": "myPublicStaticMethod1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "get",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 6808,
                            "end": 6882,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 6840,
                                      "end": 6865,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 6840,
                                        "end": 6853,
                                        "name": "privateModule",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 6854,
                                        "end": 6865,
                                        "name": "publicClass",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "arguments": [],
                                    "typeArguments": null
                                  }
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
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 6895,
                          "end": 6988,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 6899,
                            "end": 6914,
                            "name": "myPublicMethod1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "get",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 6914,
                            "end": 6988,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 6946,
                                      "end": 6971,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 6946,
                                        "end": 6959,
                                        "name": "privateModule",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 6960,
                                        "end": 6971,
                                        "name": "publicClass",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "arguments": [],
                                    "typeArguments": null
                                  }
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
                    "implements": [],
                    "abstract": false,
                    "declare": false,
                    "superTypeArguments": null
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 7008,
                  "end": 7252,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 7015,
                    "end": 7252,
                    "id": {
                      "type": "Identifier",
                      "start": 7021,
                      "end": 7065,
                      "name": "publicClassWithPrivateModuleSetAccessorTypes",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 7066,
                      "end": 7252,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 7080,
                          "end": 7161,
                          "static": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 7091,
                            "end": 7111,
                            "name": "myPublicStaticMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "set",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 7111,
                            "end": 7161,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 7112,
                                "end": 7144,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 7117,
                                  "end": 7144,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 7119,
                                    "end": 7144,
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "start": 7119,
                                      "end": 7144,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 7119,
                                        "end": 7132,
                                        "name": "privateModule",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 7133,
                                        "end": 7144,
                                        "name": "publicClass",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 7146,
                              "end": 7161,
                              "body": []
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "decorators": [],
                          "override": false,
                          "optional": false,
                          "accessibility": null
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 7174,
                          "end": 7242,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 7178,
                            "end": 7192,
                            "name": "myPublicMethod",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "set",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 7192,
                            "end": 7242,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 7193,
                                "end": 7225,
                                "name": "param",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 7198,
                                  "end": 7225,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 7200,
                                    "end": 7225,
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "start": 7200,
                                      "end": 7225,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 7200,
                                        "end": 7213,
                                        "name": "privateModule",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 7214,
                                        "end": 7225,
                                        "name": "publicClass",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 7227,
                              "end": 7242,
                              "body": []
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
                    "implements": [],
                    "abstract": false,
                    "declare": false,
                    "superTypeArguments": null
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "ClassDeclaration",
                  "start": 7262,
                  "end": 7773,
                  "id": {
                    "type": "Identifier",
                    "start": 7268,
                    "end": 7313,
                    "name": "privateClassWithPrivateModuleGetAccessorTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 7314,
                    "end": 7773,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 7328,
                        "end": 7433,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 7339,
                          "end": 7359,
                          "name": "myPublicStaticMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "get",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 7359,
                          "end": 7433,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "value": null,
                                  "raw": "null"
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 7361,
                            "end": 7388,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 7363,
                              "end": 7388,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 7363,
                                "end": 7388,
                                "left": {
                                  "type": "Identifier",
                                  "start": 7363,
                                  "end": 7376,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 7377,
                                  "end": 7388,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
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
                        "start": 7446,
                        "end": 7538,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 7450,
                          "end": 7464,
                          "name": "myPublicMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "get",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 7464,
                          "end": 7538,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "value": null,
                                  "raw": "null"
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 7466,
                            "end": 7493,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 7468,
                              "end": 7493,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 7468,
                                "end": 7493,
                                "left": {
                                  "type": "Identifier",
                                  "start": 7468,
                                  "end": 7481,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 7482,
                                  "end": 7493,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
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
                        "start": 7551,
                        "end": 7657,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 7562,
                          "end": 7583,
                          "name": "myPublicStaticMethod1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "get",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 7583,
                          "end": 7657,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 7615,
                                    "end": 7640,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 7615,
                                      "end": 7628,
                                      "name": "privateModule",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 7629,
                                      "end": 7640,
                                      "name": "publicClass",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [],
                                  "typeArguments": null
                                }
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
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 7670,
                        "end": 7763,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 7674,
                          "end": 7689,
                          "name": "myPublicMethod1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "get",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 7689,
                          "end": 7763,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 7721,
                                    "end": 7746,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 7721,
                                      "end": 7734,
                                      "name": "privateModule",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 7735,
                                      "end": 7746,
                                      "name": "publicClass",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [],
                                  "typeArguments": null
                                }
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
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                },
                {
                  "type": "ClassDeclaration",
                  "start": 7783,
                  "end": 8021,
                  "id": {
                    "type": "Identifier",
                    "start": 7789,
                    "end": 7834,
                    "name": "privateClassWithPrivateModuleSetAccessorTypes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 7835,
                    "end": 8021,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 7849,
                        "end": 7930,
                        "static": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 7860,
                          "end": 7880,
                          "name": "myPublicStaticMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "set",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 7880,
                          "end": 7930,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 7881,
                              "end": 7913,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 7886,
                                "end": 7913,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 7888,
                                  "end": 7913,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 7888,
                                    "end": 7913,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 7888,
                                      "end": 7901,
                                      "name": "privateModule",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 7902,
                                      "end": 7913,
                                      "name": "publicClass",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 7915,
                            "end": 7930,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "decorators": [],
                        "override": false,
                        "optional": false,
                        "accessibility": null
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 7943,
                        "end": 8011,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 7947,
                          "end": 7961,
                          "name": "myPublicMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "set",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 7961,
                          "end": 8011,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 7962,
                              "end": 7994,
                              "name": "param",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 7967,
                                "end": 7994,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 7969,
                                  "end": 7994,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 7969,
                                    "end": 7994,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 7969,
                                      "end": 7982,
                                      "name": "privateModule",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 7983,
                                      "end": 7994,
                                      "name": "publicClass",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 7996,
                            "end": 8011,
                            "body": []
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
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 8033,
            "end": 8864,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 8040,
              "end": 8864,
              "id": {
                "type": "Identifier",
                "start": 8046,
                "end": 8088,
                "name": "publicClassWithWithPrivateGetAccessorTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 8089,
                "end": 8864,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 8099,
                    "end": 8192,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8110,
                      "end": 8130,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8130,
                      "end": 8192,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 8132,
                        "end": 8146,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8134,
                          "end": 8146,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8134,
                            "end": 8146,
                            "name": "privateClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                    "start": 8201,
                    "end": 8294,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8220,
                      "end": 8241,
                      "name": "myPrivateStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8241,
                      "end": 8294,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 8243,
                        "end": 8257,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8245,
                          "end": 8257,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8245,
                            "end": 8257,
                            "name": "privateClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 8303,
                    "end": 8383,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8307,
                      "end": 8321,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8321,
                      "end": 8383,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 8323,
                        "end": 8337,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8325,
                          "end": 8337,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8325,
                            "end": 8337,
                            "name": "privateClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                    "start": 8392,
                    "end": 8472,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8404,
                      "end": 8419,
                      "name": "myPrivateMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8419,
                      "end": 8472,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 8421,
                        "end": 8435,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8423,
                          "end": 8435,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8423,
                            "end": 8435,
                            "name": "privateClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 8481,
                    "end": 8575,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8492,
                      "end": 8513,
                      "name": "myPublicStaticMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8513,
                      "end": 8575,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 8550,
                                "end": 8562,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 8584,
                    "end": 8678,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8603,
                      "end": 8625,
                      "name": "myPrivateStaticMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8625,
                      "end": 8678,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 8653,
                                "end": 8665,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 8687,
                    "end": 8768,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8691,
                      "end": 8706,
                      "name": "myPublicMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8706,
                      "end": 8768,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 8743,
                                "end": 8755,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 8777,
                    "end": 8858,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8789,
                      "end": 8805,
                      "name": "myPrivateMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8805,
                      "end": 8858,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 8833,
                                "end": 8845,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                    "accessibility": "private"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 8870,
            "end": 9656,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 8877,
              "end": 9656,
              "id": {
                "type": "Identifier",
                "start": 8883,
                "end": 8924,
                "name": "publicClassWithWithPublicGetAccessorTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 8925,
                "end": 9656,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 8935,
                    "end": 9018,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8946,
                      "end": 8966,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 8966,
                      "end": 9018,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 8968,
                        "end": 8981,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 8970,
                          "end": 8981,
                          "typeName": {
                            "type": "Identifier",
                            "start": 8970,
                            "end": 8981,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                    "start": 9027,
                    "end": 9119,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9046,
                      "end": 9067,
                      "name": "myPrivateStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9067,
                      "end": 9119,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 9069,
                        "end": 9082,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 9071,
                          "end": 9082,
                          "typeName": {
                            "type": "Identifier",
                            "start": 9071,
                            "end": 9082,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 9128,
                    "end": 9198,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9132,
                      "end": 9146,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9146,
                      "end": 9198,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 9148,
                        "end": 9161,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 9150,
                          "end": 9161,
                          "typeName": {
                            "type": "Identifier",
                            "start": 9150,
                            "end": 9161,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                    "start": 9207,
                    "end": 9286,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9219,
                      "end": 9234,
                      "name": "myPrivateMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9234,
                      "end": 9286,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 9236,
                        "end": 9249,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 9238,
                          "end": 9249,
                          "typeName": {
                            "type": "Identifier",
                            "start": 9238,
                            "end": 9249,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 9295,
                    "end": 9379,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9306,
                      "end": 9327,
                      "name": "myPublicStaticMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9327,
                      "end": 9379,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 9355,
                                "end": 9366,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 9388,
                    "end": 9481,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9407,
                      "end": 9429,
                      "name": "myPrivateStaticMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9429,
                      "end": 9481,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 9457,
                                "end": 9468,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 9490,
                    "end": 9561,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9494,
                      "end": 9509,
                      "name": "myPublicMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9509,
                      "end": 9561,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 9537,
                                "end": 9548,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 9570,
                    "end": 9650,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9582,
                      "end": 9598,
                      "name": "myPrivateMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 9598,
                      "end": 9650,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 9626,
                                "end": 9637,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                    "accessibility": "private"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 9662,
            "end": 10451,
            "id": {
              "type": "Identifier",
              "start": 9668,
              "end": 9711,
              "name": "privateClassWithWithPrivateGetAccessorTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 9712,
              "end": 10451,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 9722,
                  "end": 9806,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 9733,
                    "end": 9753,
                    "name": "myPublicStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 9753,
                    "end": 9806,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 9755,
                      "end": 9769,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 9757,
                        "end": 9769,
                        "typeName": {
                          "type": "Identifier",
                          "start": 9757,
                          "end": 9769,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
                  "start": 9815,
                  "end": 9908,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 9834,
                    "end": 9855,
                    "name": "myPrivateStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 9855,
                    "end": 9908,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 9857,
                      "end": 9871,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 9859,
                        "end": 9871,
                        "typeName": {
                          "type": "Identifier",
                          "start": 9859,
                          "end": 9871,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 9917,
                  "end": 9988,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 9921,
                    "end": 9935,
                    "name": "myPublicMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 9935,
                    "end": 9988,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 9937,
                      "end": 9951,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 9939,
                        "end": 9951,
                        "typeName": {
                          "type": "Identifier",
                          "start": 9939,
                          "end": 9951,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
                  "start": 9997,
                  "end": 10077,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 10009,
                    "end": 10024,
                    "name": "myPrivateMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 10024,
                    "end": 10077,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 10026,
                      "end": 10040,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10028,
                        "end": 10040,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10028,
                          "end": 10040,
                          "name": "privateClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 10086,
                  "end": 10171,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 10097,
                    "end": 10118,
                    "name": "myPublicStaticMethod1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 10118,
                    "end": 10171,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "callee": {
                              "type": "Identifier",
                              "start": 10146,
                              "end": 10158,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
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
                },
                {
                  "type": "MethodDefinition",
                  "start": 10180,
                  "end": 10274,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 10199,
                    "end": 10221,
                    "name": "myPrivateStaticMethod1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 10221,
                    "end": 10274,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "callee": {
                              "type": "Identifier",
                              "start": 10249,
                              "end": 10261,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
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
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 10283,
                  "end": 10355,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 10287,
                    "end": 10302,
                    "name": "myPublicMethod1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 10302,
                    "end": 10355,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "callee": {
                              "type": "Identifier",
                              "start": 10330,
                              "end": 10342,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
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
                },
                {
                  "type": "MethodDefinition",
                  "start": 10364,
                  "end": 10445,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 10376,
                    "end": 10392,
                    "name": "myPrivateMethod1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 10392,
                    "end": 10445,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "callee": {
                              "type": "Identifier",
                              "start": 10420,
                              "end": 10432,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
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
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 10457,
            "end": 11237,
            "id": {
              "type": "Identifier",
              "start": 10463,
              "end": 10505,
              "name": "privateClassWithWithPublicGetAccessorTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 10506,
              "end": 11237,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 10516,
                  "end": 10599,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 10527,
                    "end": 10547,
                    "name": "myPublicStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 10547,
                    "end": 10599,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 10549,
                      "end": 10562,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10551,
                        "end": 10562,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10551,
                          "end": 10562,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
                  "start": 10608,
                  "end": 10700,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 10627,
                    "end": 10648,
                    "name": "myPrivateStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 10648,
                    "end": 10700,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 10650,
                      "end": 10663,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10652,
                        "end": 10663,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10652,
                          "end": 10663,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 10709,
                  "end": 10779,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 10713,
                    "end": 10727,
                    "name": "myPublicMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 10727,
                    "end": 10779,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 10729,
                      "end": 10742,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10731,
                        "end": 10742,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10731,
                          "end": 10742,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
                  "start": 10788,
                  "end": 10867,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 10800,
                    "end": 10815,
                    "name": "myPrivateMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 10815,
                    "end": 10867,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 10817,
                      "end": 10830,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 10819,
                        "end": 10830,
                        "typeName": {
                          "type": "Identifier",
                          "start": 10819,
                          "end": 10830,
                          "name": "publicClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 10876,
                  "end": 10960,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 10887,
                    "end": 10908,
                    "name": "myPublicStaticMethod1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 10908,
                    "end": 10960,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "callee": {
                              "type": "Identifier",
                              "start": 10936,
                              "end": 10947,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
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
                },
                {
                  "type": "MethodDefinition",
                  "start": 10969,
                  "end": 11062,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 10988,
                    "end": 11010,
                    "name": "myPrivateStaticMethod1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 11010,
                    "end": 11062,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "callee": {
                              "type": "Identifier",
                              "start": 11038,
                              "end": 11049,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
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
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 11071,
                  "end": 11142,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 11075,
                    "end": 11090,
                    "name": "myPublicMethod1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 11090,
                    "end": 11142,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "callee": {
                              "type": "Identifier",
                              "start": 11118,
                              "end": 11129,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
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
                },
                {
                  "type": "MethodDefinition",
                  "start": 11151,
                  "end": 11231,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 11163,
                    "end": 11179,
                    "name": "myPrivateMethod1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 11179,
                    "end": 11231,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "callee": {
                              "type": "Identifier",
                              "start": 11207,
                              "end": 11218,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
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
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 11243,
            "end": 11608,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 11250,
              "end": 11608,
              "id": {
                "type": "Identifier",
                "start": 11256,
                "end": 11298,
                "name": "publicClassWithWithPrivateSetAccessorTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 11299,
                "end": 11608,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 11309,
                    "end": 11382,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11320,
                      "end": 11340,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11340,
                      "end": 11382,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11341,
                          "end": 11360,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11346,
                            "end": 11360,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11348,
                              "end": 11360,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11348,
                                "end": 11360,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 11362,
                        "end": 11382,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11391,
                    "end": 11464,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11410,
                      "end": 11431,
                      "name": "myPrivateStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11431,
                      "end": 11464,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11432,
                          "end": 11451,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11437,
                            "end": 11451,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11439,
                              "end": 11451,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11439,
                                "end": 11451,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 11453,
                        "end": 11464,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11473,
                    "end": 11533,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11477,
                      "end": 11491,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11491,
                      "end": 11533,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11492,
                          "end": 11511,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11497,
                            "end": 11511,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11499,
                              "end": 11511,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11499,
                                "end": 11511,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 11513,
                        "end": 11533,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11542,
                    "end": 11602,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11554,
                      "end": 11569,
                      "name": "myPrivateMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11569,
                      "end": 11602,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11570,
                          "end": 11589,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11575,
                            "end": 11589,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11577,
                              "end": 11589,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11577,
                                "end": 11589,
                                "name": "privateClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 11591,
                        "end": 11602,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 11614,
            "end": 11956,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 11621,
              "end": 11956,
              "id": {
                "type": "Identifier",
                "start": 11627,
                "end": 11668,
                "name": "publicClassWithWithPublicSetAccessorTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 11669,
                "end": 11956,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 11679,
                    "end": 11742,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11690,
                      "end": 11710,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11710,
                      "end": 11742,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11711,
                          "end": 11729,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11716,
                            "end": 11729,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11718,
                              "end": 11729,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11718,
                                "end": 11729,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 11731,
                        "end": 11742,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11751,
                    "end": 11823,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11770,
                      "end": 11791,
                      "name": "myPrivateStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11791,
                      "end": 11823,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11792,
                          "end": 11810,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11797,
                            "end": 11810,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11799,
                              "end": 11810,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11799,
                                "end": 11810,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 11812,
                        "end": 11823,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11832,
                    "end": 11882,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11836,
                      "end": 11850,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11850,
                      "end": 11882,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11851,
                          "end": 11869,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11856,
                            "end": 11869,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11858,
                              "end": 11869,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11858,
                                "end": 11869,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 11871,
                        "end": 11882,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 11891,
                    "end": 11950,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11903,
                      "end": 11918,
                      "name": "myPrivateMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 11918,
                      "end": 11950,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 11919,
                          "end": 11937,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 11924,
                            "end": 11937,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 11926,
                              "end": 11937,
                              "typeName": {
                                "type": "Identifier",
                                "start": 11926,
                                "end": 11937,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 11939,
                        "end": 11950,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 11962,
            "end": 12303,
            "id": {
              "type": "Identifier",
              "start": 11968,
              "end": 12011,
              "name": "privateClassWithWithPrivateSetAccessorTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 12012,
              "end": 12303,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 12022,
                  "end": 12086,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 12033,
                    "end": 12053,
                    "name": "myPublicStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12053,
                    "end": 12086,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12054,
                        "end": 12073,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12059,
                          "end": 12073,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12061,
                            "end": 12073,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12061,
                              "end": 12073,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 12075,
                      "end": 12086,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 12095,
                  "end": 12168,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 12114,
                    "end": 12135,
                    "name": "myPrivateStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12135,
                    "end": 12168,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12136,
                        "end": 12155,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12141,
                          "end": 12155,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12143,
                            "end": 12155,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12143,
                              "end": 12155,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 12157,
                      "end": 12168,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 12177,
                  "end": 12228,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 12181,
                    "end": 12195,
                    "name": "myPublicMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12195,
                    "end": 12228,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12196,
                        "end": 12215,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12201,
                          "end": 12215,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12203,
                            "end": 12215,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12203,
                              "end": 12215,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 12217,
                      "end": 12228,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 12237,
                  "end": 12297,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 12249,
                    "end": 12264,
                    "name": "myPrivateMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12264,
                    "end": 12297,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12265,
                        "end": 12284,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12270,
                          "end": 12284,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12272,
                            "end": 12284,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12272,
                              "end": 12284,
                              "name": "privateClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 12286,
                      "end": 12297,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 12309,
            "end": 12645,
            "id": {
              "type": "Identifier",
              "start": 12315,
              "end": 12357,
              "name": "privateClassWithWithPublicSetAccessorTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 12358,
              "end": 12645,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 12368,
                  "end": 12431,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 12379,
                    "end": 12399,
                    "name": "myPublicStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12399,
                    "end": 12431,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12400,
                        "end": 12418,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12405,
                          "end": 12418,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12407,
                            "end": 12418,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12407,
                              "end": 12418,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 12420,
                      "end": 12431,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 12440,
                  "end": 12512,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 12459,
                    "end": 12480,
                    "name": "myPrivateStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12480,
                    "end": 12512,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12481,
                        "end": 12499,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12486,
                          "end": 12499,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12488,
                            "end": 12499,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12488,
                              "end": 12499,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 12501,
                      "end": 12512,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 12521,
                  "end": 12571,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 12525,
                    "end": 12539,
                    "name": "myPublicMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12539,
                    "end": 12571,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12540,
                        "end": 12558,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12545,
                          "end": 12558,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12547,
                            "end": 12558,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12547,
                              "end": 12558,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 12560,
                      "end": 12571,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 12580,
                  "end": 12639,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 12592,
                    "end": 12607,
                    "name": "myPrivateMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 12607,
                    "end": 12639,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 12608,
                        "end": 12626,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 12613,
                          "end": 12626,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 12615,
                            "end": 12626,
                            "typeName": {
                              "type": "Identifier",
                              "start": 12615,
                              "end": 12626,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 12628,
                      "end": 12639,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 12651,
            "end": 13152,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 12658,
              "end": 13152,
              "id": {
                "type": "Identifier",
                "start": 12664,
                "end": 12708,
                "name": "publicClassWithPrivateModuleGetAccessorTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 12709,
                "end": 13152,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 12719,
                    "end": 12825,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 12730,
                      "end": 12750,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12750,
                      "end": 12825,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 12752,
                        "end": 12779,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 12754,
                          "end": 12779,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 12754,
                            "end": 12779,
                            "left": {
                              "type": "Identifier",
                              "start": 12754,
                              "end": 12767,
                              "name": "privateModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 12768,
                              "end": 12779,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
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
                    "start": 12834,
                    "end": 12927,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 12838,
                      "end": 12852,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12852,
                      "end": 12927,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 12854,
                        "end": 12881,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 12856,
                          "end": 12881,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 12856,
                            "end": 12881,
                            "left": {
                              "type": "Identifier",
                              "start": 12856,
                              "end": 12869,
                              "name": "privateModule",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 12870,
                              "end": 12881,
                              "name": "publicClass",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
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
                    "start": 12936,
                    "end": 13043,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 12947,
                      "end": 12968,
                      "name": "myPublicStaticMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 12968,
                      "end": 13043,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "MemberExpression",
                                "start": 13005,
                                "end": 13030,
                                "object": {
                                  "type": "Identifier",
                                  "start": 13005,
                                  "end": 13018,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 13019,
                                  "end": 13030,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 13052,
                    "end": 13146,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 13056,
                      "end": 13071,
                      "name": "myPublicMethod1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 13071,
                      "end": 13146,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "callee": {
                                "type": "MemberExpression",
                                "start": 13108,
                                "end": 13133,
                                "object": {
                                  "type": "Identifier",
                                  "start": 13108,
                                  "end": 13121,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 13122,
                                  "end": 13133,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
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
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 13158,
            "end": 13400,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 13165,
              "end": 13400,
              "id": {
                "type": "Identifier",
                "start": 13171,
                "end": 13215,
                "name": "publicClassWithPrivateModuleSetAccessorTypes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 13216,
                "end": 13400,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 13226,
                    "end": 13312,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 13237,
                      "end": 13257,
                      "name": "myPublicStaticMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 13257,
                      "end": 13312,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 13258,
                          "end": 13290,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 13263,
                            "end": 13290,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 13265,
                              "end": 13290,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 13265,
                                "end": 13290,
                                "left": {
                                  "type": "Identifier",
                                  "start": 13265,
                                  "end": 13278,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 13279,
                                  "end": 13290,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 13292,
                        "end": 13312,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 13321,
                    "end": 13394,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 13325,
                      "end": 13339,
                      "name": "myPublicMethod",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 13339,
                      "end": 13394,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 13340,
                          "end": 13372,
                          "name": "param",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 13345,
                            "end": 13372,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 13347,
                              "end": 13372,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 13347,
                                "end": 13372,
                                "left": {
                                  "type": "Identifier",
                                  "start": 13347,
                                  "end": 13360,
                                  "name": "privateModule",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 13361,
                                  "end": 13372,
                                  "name": "publicClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 13374,
                        "end": 13394,
                        "body": []
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
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 13406,
            "end": 13865,
            "id": {
              "type": "Identifier",
              "start": 13412,
              "end": 13457,
              "name": "privateClassWithPrivateModuleGetAccessorTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 13458,
              "end": 13865,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 13468,
                  "end": 13565,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 13479,
                    "end": 13499,
                    "name": "myPublicStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13499,
                    "end": 13565,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 13501,
                      "end": 13528,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 13503,
                        "end": 13528,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 13503,
                          "end": 13528,
                          "left": {
                            "type": "Identifier",
                            "start": 13503,
                            "end": 13516,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 13517,
                            "end": 13528,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
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
                  "start": 13574,
                  "end": 13658,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 13578,
                    "end": 13592,
                    "name": "myPublicMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13592,
                    "end": 13658,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 13594,
                      "end": 13621,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 13596,
                        "end": 13621,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 13596,
                          "end": 13621,
                          "left": {
                            "type": "Identifier",
                            "start": 13596,
                            "end": 13609,
                            "name": "privateModule",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 13610,
                            "end": 13621,
                            "name": "publicClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
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
                  "start": 13667,
                  "end": 13765,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 13678,
                    "end": 13699,
                    "name": "myPublicStaticMethod1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13699,
                    "end": 13765,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "callee": {
                              "type": "MemberExpression",
                              "start": 13727,
                              "end": 13752,
                              "object": {
                                "type": "Identifier",
                                "start": 13727,
                                "end": 13740,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 13741,
                                "end": 13752,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
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
                },
                {
                  "type": "MethodDefinition",
                  "start": 13774,
                  "end": 13859,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 13778,
                    "end": 13793,
                    "name": "myPublicMethod1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13793,
                    "end": 13859,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "callee": {
                              "type": "MemberExpression",
                              "start": 13821,
                              "end": 13846,
                              "object": {
                                "type": "Identifier",
                                "start": 13821,
                                "end": 13834,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 13835,
                                "end": 13846,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
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
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 13871,
            "end": 14089,
            "id": {
              "type": "Identifier",
              "start": 13877,
              "end": 13922,
              "name": "privateClassWithPrivateModuleSetAccessorTypes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 13923,
              "end": 14089,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 13933,
                  "end": 14010,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 13944,
                    "end": 13964,
                    "name": "myPublicStaticMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 13964,
                    "end": 14010,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 13965,
                        "end": 13997,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 13970,
                          "end": 13997,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 13972,
                            "end": 13997,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 13972,
                              "end": 13997,
                              "left": {
                                "type": "Identifier",
                                "start": 13972,
                                "end": 13985,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 13986,
                                "end": 13997,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 13999,
                      "end": 14010,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 14019,
                  "end": 14083,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 14023,
                    "end": 14037,
                    "name": "myPublicMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 14037,
                    "end": 14083,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 14038,
                        "end": 14070,
                        "name": "param",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 14043,
                          "end": 14070,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 14045,
                            "end": 14070,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 14045,
                              "end": 14070,
                              "left": {
                                "type": "Identifier",
                                "start": 14045,
                                "end": 14058,
                                "name": "privateModule",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 14059,
                                "end": 14070,
                                "name": "publicClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 14072,
                      "end": 14083,
                      "body": []
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
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
