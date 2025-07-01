__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wagon",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 68
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "numberOxen",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 79
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 87,
                  "end": 91
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberOxen",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 102
                },
                "optional": false,
                "computed": false,
                "start": 87,
                "end": 102
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberOxen",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 115
              },
              "start": 87,
              "end": 115
            },
            "directive": null,
            "start": 87,
            "end": 115
          }
        ],
        "start": 81,
        "end": 117
      },
      "expression": false,
      "start": 54,
      "end": 117
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wagon",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 155
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "circle",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 162
          },
          "optional": false,
          "computed": false,
          "start": 150,
          "end": 162
        },
        "right": {
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
              "name": "wagons",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 181
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "wagons",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 196,
                    "end": 202
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wagons",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 205,
                      "end": 211
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 212,
                      "end": 218
                    },
                    "optional": false,
                    "computed": false,
                    "start": 205,
                    "end": 218
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": 3.14,
                    "raw": "3.14",
                    "start": 221,
                    "end": 225
                  },
                  "start": 196,
                  "end": 225
                },
                "start": 189,
                "end": 226
              }
            ],
            "start": 183,
            "end": 228
          },
          "expression": false,
          "start": 165,
          "end": 228
        },
        "start": 150,
        "end": 228
      },
      "directive": null,
      "start": 150,
      "end": 228
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Wagon",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 292
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 302
            },
            "optional": false,
            "computed": false,
            "start": 287,
            "end": 302
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "load",
            "optional": false,
            "typeAnnotation": null,
            "start": 303,
            "end": 307
          },
          "optional": false,
          "computed": false,
          "start": 287,
          "end": 307
        },
        "right": {
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
              "name": "supplies",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 328
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 330,
            "end": 333
          },
          "expression": false,
          "start": 310,
          "end": 333
        },
        "start": 287,
        "end": 333
      },
      "directive": null,
      "start": 287,
      "end": 333
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Wagon",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 395
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 396,
              "end": 405
            },
            "optional": false,
            "computed": false,
            "start": 390,
            "end": 405
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "weight",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 412
          },
          "optional": false,
          "computed": false,
          "start": 390,
          "end": 412
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "supplies",
              "optional": false,
              "typeAnnotation": null,
              "start": 415,
              "end": 423
            }
          ],
          "returnType": null,
          "body": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "supplies",
              "optional": false,
              "typeAnnotation": null,
              "start": 427,
              "end": 435
            },
            "consequent": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "supplies",
                "optional": false,
                "typeAnnotation": null,
                "start": 438,
                "end": 446
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 447,
                "end": 453
              },
              "optional": false,
              "computed": false,
              "start": 438,
              "end": 453
            },
            "alternate": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 457,
                "end": 458
              },
              "prefix": true,
              "start": 456,
              "end": 458
            },
            "start": 427,
            "end": 458
          },
          "id": null,
          "generator": false,
          "start": 415,
          "end": 458
        },
        "start": 390,
        "end": 458
      },
      "directive": null,
      "start": 390,
      "end": 458
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Wagon",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 464
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 465,
              "end": 474
            },
            "optional": false,
            "computed": false,
            "start": 459,
            "end": 474
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "speed",
            "optional": false,
            "typeAnnotation": null,
            "start": 475,
            "end": 480
          },
          "optional": false,
          "computed": false,
          "start": 459,
          "end": 480
        },
        "right": {
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
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 508,
                      "end": 512
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "numberOxen",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 513,
                      "end": 523
                    },
                    "optional": false,
                    "computed": false,
                    "start": 508,
                    "end": 523
                  },
                  "operator": "/",
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 526,
                        "end": 530
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "weight",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 531,
                        "end": 537
                      },
                      "optional": false,
                      "computed": false,
                      "start": 526,
                      "end": 537
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 526,
                    "end": 539
                  },
                  "start": 508,
                  "end": 539
                },
                "start": 501,
                "end": 539
              }
            ],
            "start": 495,
            "end": 541
          },
          "expression": false,
          "start": 483,
          "end": 541
        },
        "start": 459,
        "end": 541
      },
      "directive": null,
      "start": 459,
      "end": 541
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sql",
        "optional": false,
        "typeAnnotation": null,
        "start": 554,
        "end": 557
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wagon",
        "optional": false,
        "typeAnnotation": null,
        "start": 566,
        "end": 571
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 589
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 602,
                        "end": 607
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 602,
                      "end": 609
                    },
                    "directive": null,
                    "start": 602,
                    "end": 610
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 650,
                          "end": 654
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foonly",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 655,
                          "end": 661
                        },
                        "optional": false,
                        "computed": false,
                        "start": 650,
                        "end": 661
                      },
                      "right": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 664,
                        "end": 666
                      },
                      "start": 650,
                      "end": 666
                    },
                    "directive": null,
                    "start": 650,
                    "end": 666
                  }
                ],
                "start": 592,
                "end": 672
              },
              "expression": false,
              "start": 589,
              "end": 672
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 578,
            "end": 672
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "load",
              "optional": false,
              "typeAnnotation": null,
              "start": 843,
              "end": 847
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
                  "name": "files",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 848,
                  "end": 853
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "format",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 855,
                  "end": 861
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "format",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 877,
                        "end": 883
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "xmlolololol",
                        "raw": "\"xmlolololol\"",
                        "start": 888,
                        "end": 901
                      },
                      "start": 877,
                      "end": 901
                    },
                    "consequent": {
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
                              "start": 927,
                              "end": 932
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "please do not use XML. It was a joke.",
                                "raw": "\"please do not use XML. It was a joke.\"",
                                "start": 933,
                                "end": 972
                              }
                            ],
                            "start": 923,
                            "end": 973
                          },
                          "start": 917,
                          "end": 974
                        }
                      ],
                      "start": 903,
                      "end": 984
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 1012,
                                "end": 1017
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "speed",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1018,
                                "end": 1023
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1012,
                              "end": 1023
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1012,
                            "end": 1025
                          },
                          "directive": null,
                          "start": 1012,
                          "end": 1025
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 1056,
                                  "end": 1061
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "weight",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1062,
                                  "end": 1068
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1056,
                                "end": 1068
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1056,
                              "end": 1070
                            },
                            "operator": "<",
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1073,
                              "end": 1074
                            },
                            "start": 1056,
                            "end": 1074
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 1076,
                            "end": 1135
                          },
                          "alternate": null,
                          "start": 1052,
                          "end": 1135
                        }
                      ],
                      "start": 998,
                      "end": 1145
                    },
                    "start": 873,
                    "end": 1145
                  }
                ],
                "start": 863,
                "end": 1151
              },
              "expression": false,
              "start": 847,
              "end": 1151
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 843,
            "end": 1151
          }
        ],
        "start": 572,
        "end": 1153
      },
      "abstract": false,
      "declare": false,
      "start": 548,
      "end": 1153
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
            "name": "db",
            "optional": false,
            "typeAnnotation": null,
            "start": 1158,
            "end": 1160
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Sql",
              "optional": false,
              "typeAnnotation": null,
              "start": 1167,
              "end": 1170
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1163,
            "end": 1172
          },
          "definite": false,
          "start": 1158,
          "end": 1172
        }
      ],
      "declare": false,
      "start": 1154,
      "end": 1173
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "db",
            "optional": false,
            "typeAnnotation": null,
            "start": 1174,
            "end": 1176
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOxen",
            "optional": false,
            "typeAnnotation": null,
            "start": 1177,
            "end": 1187
          },
          "optional": false,
          "computed": false,
          "start": 1174,
          "end": 1187
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "db",
            "optional": false,
            "typeAnnotation": null,
            "start": 1190,
            "end": 1192
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 1193,
            "end": 1199
          },
          "optional": false,
          "computed": false,
          "start": 1190,
          "end": 1199
        },
        "start": 1174,
        "end": 1199
      },
      "directive": null,
      "start": 1174,
      "end": 1199
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Drakkhen",
        "optional": false,
        "typeAnnotation": null,
        "start": 1256,
        "end": 1264
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dragon",
        "optional": false,
        "typeAnnotation": null,
        "start": 1273,
        "end": 1279
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1280,
        "end": 1284
      },
      "abstract": false,
      "declare": false,
      "start": 1250,
      "end": 1284
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 54,
  "end": 1285
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dragon",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 39
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "numberEaten",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 53,
              "end": 59
            },
            "start": 51,
            "end": 59
          },
          "start": 40,
          "end": 59
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 67,
                  "end": 71
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberEaten",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 83
                },
                "optional": false,
                "computed": false,
                "start": 67,
                "end": 83
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberEaten",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 97
              },
              "start": 67,
              "end": 97
            },
            "directive": null,
            "start": 67,
            "end": 97
          }
        ],
        "start": 61,
        "end": 99
      },
      "expression": false,
      "start": 24,
      "end": 99
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Firedrake",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 125
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dragon",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 140
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 158
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 171,
                        "end": 176
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 171,
                      "end": 178
                    },
                    "directive": null,
                    "start": 171,
                    "end": 179
                  }
                ],
                "start": 161,
                "end": 185
              },
              "expression": false,
              "start": 158,
              "end": 185
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 147,
            "end": 185
          }
        ],
        "start": 141,
        "end": 187
      },
      "abstract": false,
      "declare": false,
      "start": 110,
      "end": 187
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Conestoga",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 209
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wagon",
        "optional": false,
        "typeAnnotation": null,
        "start": 218,
        "end": 223
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 230,
              "end": 241
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "drunkOO",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 258,
                          "end": 262
                        },
                        "start": 258,
                        "end": 262
                      },
                      "start": 256,
                      "end": 262
                    },
                    "start": 249,
                    "end": 262
                  },
                  "readonly": false,
                  "static": false,
                  "start": 242,
                  "end": 262
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 303,
                        "end": 308
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "nope",
                          "raw": "'nope'",
                          "start": 309,
                          "end": 315
                        }
                      ],
                      "optional": false,
                      "start": 303,
                      "end": 316
                    },
                    "directive": null,
                    "start": 303,
                    "end": 317
                  }
                ],
                "start": 264,
                "end": 323
              },
              "expression": false,
              "start": 241,
              "end": 323
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 230,
            "end": 323
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "circle",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 390
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
                  "name": "others",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Wagon",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 407,
                          "end": 412
                        },
                        "typeArguments": null,
                        "start": 400,
                        "end": 412
                      },
                      "start": 399,
                      "end": 415
                    },
                    "start": 397,
                    "end": 415
                  },
                  "start": 391,
                  "end": 415
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "others",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 434,
                        "end": 440
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 441,
                        "end": 447
                      },
                      "optional": false,
                      "computed": false,
                      "start": 434,
                      "end": 447
                    },
                    "start": 427,
                    "end": 447
                  }
                ],
                "start": 417,
                "end": 453
              },
              "expression": false,
              "start": 390,
              "end": 453
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 377,
            "end": 453
          }
        ],
        "start": 224,
        "end": 455
      },
      "abstract": false,
      "declare": false,
      "start": 194,
      "end": 455
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 460,
            "end": 461
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Conestoga",
              "optional": false,
              "typeAnnotation": null,
              "start": 468,
              "end": 477
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 478,
                "end": 482
              }
            ],
            "start": 464,
            "end": 483
          },
          "definite": false,
          "start": 460,
          "end": 483
        }
      ],
      "declare": false,
      "start": 456,
      "end": 484
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 485,
          "end": 486
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "drunkOO",
          "optional": false,
          "typeAnnotation": null,
          "start": 487,
          "end": 494
        },
        "optional": false,
        "computed": false,
        "start": 485,
        "end": 494
      },
      "directive": null,
      "start": 485,
      "end": 494
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 495,
          "end": 496
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "numberOxen",
          "optional": false,
          "typeAnnotation": null,
          "start": 497,
          "end": 507
        },
        "optional": false,
        "computed": false,
        "start": 495,
        "end": 507
      },
      "directive": null,
      "start": 495,
      "end": 507
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 24,
  "end": 508
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Soup",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 58
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "flavour",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 66
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 74,
                  "end": 78
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "flavour",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 86
                },
                "optional": false,
                "computed": false,
                "start": 74,
                "end": 86
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "flavour",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 96
              },
              "start": 74,
              "end": 96
            },
            "directive": null,
            "start": 74,
            "end": 96
          }
        ],
        "start": 68,
        "end": 98
      },
      "expression": false,
      "start": 45,
      "end": 98
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Chowder",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 172
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Soup",
        "optional": false,
        "typeAnnotation": null,
        "start": 181,
        "end": 185
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
              "name": "log",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 195
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 215,
                        "end": 219
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "flavour",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 220,
                        "end": 227
                      },
                      "optional": false,
                      "computed": false,
                      "start": 215,
                      "end": 227
                    },
                    "start": 208,
                    "end": 227
                  }
                ],
                "start": 198,
                "end": 233
              },
              "expression": false,
              "start": 195,
              "end": 233
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 192,
            "end": 233
          }
        ],
        "start": 186,
        "end": 235
      },
      "abstract": false,
      "declare": false,
      "start": 159,
      "end": 235
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
            "name": "soup",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 245
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Soup",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 256
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 257,
                "end": 258
              }
            ],
            "start": 248,
            "end": 259
          },
          "definite": false,
          "start": 241,
          "end": 259
        }
      ],
      "declare": false,
      "start": 237,
      "end": 260
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "soup",
          "optional": false,
          "typeAnnotation": null,
          "start": 261,
          "end": 265
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "flavour",
          "optional": false,
          "typeAnnotation": null,
          "start": 266,
          "end": 273
        },
        "optional": false,
        "computed": false,
        "start": 261,
        "end": 273
      },
      "directive": null,
      "start": 261,
      "end": 273
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
            "name": "chowder",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 285
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Chowder",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 299
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "claim",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 302,
                      "end": 307
                    },
                    "value": {
                      "type": "Literal",
                      "value": "ignorant",
                      "raw": "\"ignorant\"",
                      "start": 309,
                      "end": 319
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 302,
                    "end": 319
                  }
                ],
                "start": 300,
                "end": 321
              }
            ],
            "start": 288,
            "end": 322
          },
          "definite": false,
          "start": 278,
          "end": 322
        }
      ],
      "declare": false,
      "start": 274,
      "end": 323
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "chowder",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 331
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "flavour",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 339
          },
          "optional": false,
          "computed": false,
          "start": 324,
          "end": 339
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "claim",
          "optional": false,
          "typeAnnotation": null,
          "start": 340,
          "end": 345
        },
        "optional": false,
        "computed": false,
        "start": 324,
        "end": 345
      },
      "directive": null,
      "start": 324,
      "end": 345
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
            "name": "errorNoArgs",
            "optional": false,
            "typeAnnotation": null,
            "start": 350,
            "end": 361
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Chowder",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 375
            },
            "typeArguments": null,
            "arguments": [],
            "start": 364,
            "end": 377
          },
          "definite": false,
          "start": 350,
          "end": 377
        }
      ],
      "declare": false,
      "start": 346,
      "end": 378
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
            "name": "errorArgType",
            "optional": false,
            "typeAnnotation": null,
            "start": 383,
            "end": 395
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Chowder",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 409
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 410,
                "end": 411
              }
            ],
            "start": 398,
            "end": 412
          },
          "definite": false,
          "start": 383,
          "end": 412
        }
      ],
      "declare": false,
      "start": 379,
      "end": 413
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 414
}
```
