__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 54,
  "end": 1285,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 54,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 68,
        "decorators": [],
        "name": "Wagon",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 69,
          "end": 79,
          "decorators": [],
          "name": "numberOxen",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 81,
        "end": 117,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 87,
            "end": 115,
            "expression": {
              "type": "AssignmentExpression",
              "start": 87,
              "end": 115,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 87,
                "end": 102,
                "object": {
                  "type": "ThisExpression",
                  "start": 87,
                  "end": 91
                },
                "property": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 102,
                  "decorators": [],
                  "name": "numberOxen",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Identifier",
                "start": 105,
                "end": 115,
                "decorators": [],
                "name": "numberOxen",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 150,
      "end": 228,
      "expression": {
        "type": "AssignmentExpression",
        "start": 150,
        "end": 228,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 150,
          "end": 162,
          "object": {
            "type": "Identifier",
            "start": 150,
            "end": 155,
            "decorators": [],
            "name": "Wagon",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 156,
            "end": 162,
            "decorators": [],
            "name": "circle",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 165,
          "end": 228,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 175,
              "end": 181,
              "decorators": [],
              "name": "wagons",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 183,
            "end": 228,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 189,
                "end": 226,
                "argument": {
                  "type": "ConditionalExpression",
                  "start": 196,
                  "end": 225,
                  "test": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 202,
                    "decorators": [],
                    "name": "wagons",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "start": 205,
                    "end": 218,
                    "object": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 211,
                      "decorators": [],
                      "name": "wagons",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 212,
                      "end": 218,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 221,
                    "end": 225,
                    "value": 3.14,
                    "raw": "3.14"
                  }
                }
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 287,
      "end": 333,
      "expression": {
        "type": "AssignmentExpression",
        "start": 287,
        "end": 333,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 287,
          "end": 307,
          "object": {
            "type": "MemberExpression",
            "start": 287,
            "end": 302,
            "object": {
              "type": "Identifier",
              "start": 287,
              "end": 292,
              "decorators": [],
              "name": "Wagon",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 293,
              "end": 302,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 303,
            "end": 307,
            "decorators": [],
            "name": "load",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 310,
          "end": 333,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 320,
              "end": 328,
              "decorators": [],
              "name": "supplies",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 330,
            "end": 333,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 390,
      "end": 458,
      "expression": {
        "type": "AssignmentExpression",
        "start": 390,
        "end": 458,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 390,
          "end": 412,
          "object": {
            "type": "MemberExpression",
            "start": 390,
            "end": 405,
            "object": {
              "type": "Identifier",
              "start": 390,
              "end": 395,
              "decorators": [],
              "name": "Wagon",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 396,
              "end": 405,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 406,
            "end": 412,
            "decorators": [],
            "name": "weight",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 415,
          "end": 458,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 415,
              "end": 423,
              "decorators": [],
              "name": "supplies",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "ConditionalExpression",
            "start": 427,
            "end": 458,
            "test": {
              "type": "Identifier",
              "start": 427,
              "end": 435,
              "decorators": [],
              "name": "supplies",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "MemberExpression",
              "start": 438,
              "end": 453,
              "object": {
                "type": "Identifier",
                "start": 438,
                "end": 446,
                "decorators": [],
                "name": "supplies",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 447,
                "end": 453,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "alternate": {
              "type": "UnaryExpression",
              "start": 456,
              "end": 458,
              "operator": "-",
              "argument": {
                "type": "Literal",
                "start": 457,
                "end": 458,
                "value": 1,
                "raw": "1"
              },
              "prefix": true
            }
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 459,
      "end": 541,
      "expression": {
        "type": "AssignmentExpression",
        "start": 459,
        "end": 541,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 459,
          "end": 480,
          "object": {
            "type": "MemberExpression",
            "start": 459,
            "end": 474,
            "object": {
              "type": "Identifier",
              "start": 459,
              "end": 464,
              "decorators": [],
              "name": "Wagon",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 465,
              "end": 474,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 475,
            "end": 480,
            "decorators": [],
            "name": "speed",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 483,
          "end": 541,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 495,
            "end": 541,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 501,
                "end": 539,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 508,
                  "end": 539,
                  "left": {
                    "type": "MemberExpression",
                    "start": 508,
                    "end": 523,
                    "object": {
                      "type": "ThisExpression",
                      "start": 508,
                      "end": 512
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 513,
                      "end": 523,
                      "decorators": [],
                      "name": "numberOxen",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "operator": "/",
                  "right": {
                    "type": "CallExpression",
                    "start": 526,
                    "end": 539,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 526,
                      "end": 537,
                      "object": {
                        "type": "ThisExpression",
                        "start": 526,
                        "end": 530
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 531,
                        "end": 537,
                        "decorators": [],
                        "name": "weight",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  }
                }
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 548,
      "end": 1153,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 554,
        "end": 557,
        "decorators": [],
        "name": "Sql",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 566,
        "end": 571,
        "decorators": [],
        "name": "Wagon",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 572,
        "end": 1153,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 578,
            "end": 672,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 578,
              "end": 589,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 589,
              "end": 672,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 592,
                "end": 672,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 602,
                    "end": 610,
                    "expression": {
                      "type": "CallExpression",
                      "start": 602,
                      "end": 609,
                      "callee": {
                        "type": "Super",
                        "start": 602,
                        "end": 607
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 650,
                    "end": 666,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 650,
                      "end": 666,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 650,
                        "end": 661,
                        "object": {
                          "type": "ThisExpression",
                          "start": 650,
                          "end": 654
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 655,
                          "end": 661,
                          "decorators": [],
                          "name": "foonly",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 664,
                        "end": 666,
                        "value": 12,
                        "raw": "12"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 843,
            "end": 1151,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 843,
              "end": 847,
              "decorators": [],
              "name": "load",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 847,
              "end": 1151,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 848,
                  "end": 853,
                  "decorators": [],
                  "name": "files",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 855,
                  "end": 861,
                  "decorators": [],
                  "name": "format",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 863,
                "end": 1151,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 873,
                    "end": 1145,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 877,
                      "end": 901,
                      "left": {
                        "type": "Identifier",
                        "start": 877,
                        "end": 883,
                        "decorators": [],
                        "name": "format",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 888,
                        "end": 901,
                        "value": "xmlolololol",
                        "raw": "\"xmlolololol\""
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 903,
                      "end": 984,
                      "body": [
                        {
                          "type": "ThrowStatement",
                          "start": 917,
                          "end": 974,
                          "argument": {
                            "type": "NewExpression",
                            "start": 923,
                            "end": 973,
                            "callee": {
                              "type": "Identifier",
                              "start": 927,
                              "end": 932,
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 933,
                                "end": 972,
                                "value": "please do not use XML. It was a joke.",
                                "raw": "\"please do not use XML. It was a joke.\""
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 998,
                      "end": 1145,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1012,
                          "end": 1025,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1012,
                            "end": 1025,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1012,
                              "end": 1023,
                              "object": {
                                "type": "Super",
                                "start": 1012,
                                "end": 1017
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1018,
                                "end": 1023,
                                "decorators": [],
                                "name": "speed",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          },
                          "directive": null
                        },
                        {
                          "type": "IfStatement",
                          "start": 1052,
                          "end": 1135,
                          "test": {
                            "type": "BinaryExpression",
                            "start": 1056,
                            "end": 1074,
                            "left": {
                              "type": "CallExpression",
                              "start": 1056,
                              "end": 1070,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1056,
                                "end": 1068,
                                "object": {
                                  "type": "Super",
                                  "start": 1056,
                                  "end": 1061
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1062,
                                  "end": 1068,
                                  "decorators": [],
                                  "name": "weight",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false
                            },
                            "operator": "<",
                            "right": {
                              "type": "Literal",
                              "start": 1073,
                              "end": 1074,
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 1076,
                            "end": 1135,
                            "body": []
                          },
                          "alternate": null
                        }
                      ]
                    }
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
      "start": 1154,
      "end": 1173,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1158,
          "end": 1172,
          "id": {
            "type": "Identifier",
            "start": 1158,
            "end": 1160,
            "decorators": [],
            "name": "db",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1163,
            "end": 1172,
            "callee": {
              "type": "Identifier",
              "start": 1167,
              "end": 1170,
              "decorators": [],
              "name": "Sql",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1174,
      "end": 1199,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1174,
        "end": 1199,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1174,
          "end": 1187,
          "object": {
            "type": "Identifier",
            "start": 1174,
            "end": 1176,
            "decorators": [],
            "name": "db",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1177,
            "end": 1187,
            "decorators": [],
            "name": "numberOxen",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 1190,
          "end": 1199,
          "object": {
            "type": "Identifier",
            "start": 1190,
            "end": 1192,
            "decorators": [],
            "name": "db",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1193,
            "end": 1199,
            "decorators": [],
            "name": "foonly",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1250,
      "end": 1284,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1256,
        "end": 1264,
        "decorators": [],
        "name": "Drakkhen",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1273,
        "end": 1279,
        "decorators": [],
        "name": "Dragon",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1280,
        "end": 1284,
        "body": []
      },
      "abstract": false,
      "declare": false
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
  "start": 24,
  "end": 508,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 24,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 39,
        "decorators": [],
        "name": "Dragon",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 40,
          "end": 59,
          "decorators": [],
          "name": "numberEaten",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 51,
            "end": 59,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 53,
              "end": 59
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 61,
        "end": 99,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 67,
            "end": 97,
            "expression": {
              "type": "AssignmentExpression",
              "start": 67,
              "end": 97,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 67,
                "end": 83,
                "object": {
                  "type": "ThisExpression",
                  "start": 67,
                  "end": 71
                },
                "property": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 83,
                  "decorators": [],
                  "name": "numberEaten",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Identifier",
                "start": 86,
                "end": 97,
                "decorators": [],
                "name": "numberEaten",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 110,
      "end": 187,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 125,
        "decorators": [],
        "name": "Firedrake",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 134,
        "end": 140,
        "decorators": [],
        "name": "Dragon",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 187,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 147,
            "end": 185,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 158,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 158,
              "end": 185,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 161,
                "end": 185,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 171,
                    "end": 179,
                    "expression": {
                      "type": "CallExpression",
                      "start": 171,
                      "end": 178,
                      "callee": {
                        "type": "Super",
                        "start": 171,
                        "end": 176
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "start": 194,
      "end": 455,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 209,
        "decorators": [],
        "name": "Conestoga",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 218,
        "end": 223,
        "decorators": [],
        "name": "Wagon",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 224,
        "end": 455,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 230,
            "end": 323,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 230,
              "end": 241,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 241,
              "end": 323,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 242,
                  "end": 262,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 249,
                    "end": 262,
                    "decorators": [],
                    "name": "drunkOO",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 256,
                      "end": 262,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 258,
                        "end": 262,
                        "literal": {
                          "type": "Literal",
                          "start": 258,
                          "end": 262,
                          "value": true,
                          "raw": "true"
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 264,
                "end": 323,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 303,
                    "end": 317,
                    "expression": {
                      "type": "CallExpression",
                      "start": 303,
                      "end": 316,
                      "callee": {
                        "type": "Super",
                        "start": 303,
                        "end": 308
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 309,
                          "end": 315,
                          "value": "nope",
                          "raw": "'nope'"
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 377,
            "end": 453,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 384,
              "end": 390,
              "decorators": [],
              "name": "circle",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 390,
              "end": 453,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 391,
                  "end": 415,
                  "decorators": [],
                  "name": "others",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 397,
                    "end": 415,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 399,
                      "end": 415,
                      "elementType": {
                        "type": "TSTypeQuery",
                        "start": 400,
                        "end": 412,
                        "exprName": {
                          "type": "Identifier",
                          "start": 407,
                          "end": 412,
                          "decorators": [],
                          "name": "Wagon",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 417,
                "end": 453,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 427,
                    "end": 447,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 434,
                      "end": 447,
                      "object": {
                        "type": "Identifier",
                        "start": 434,
                        "end": 440,
                        "decorators": [],
                        "name": "others",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 441,
                        "end": 447,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
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
      "start": 456,
      "end": 484,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 460,
          "end": 483,
          "id": {
            "type": "Identifier",
            "start": 460,
            "end": 461,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 464,
            "end": 483,
            "callee": {
              "type": "Identifier",
              "start": 468,
              "end": 477,
              "decorators": [],
              "name": "Conestoga",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 478,
                "end": 482,
                "value": true,
                "raw": "true"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 485,
      "end": 494,
      "expression": {
        "type": "MemberExpression",
        "start": 485,
        "end": 494,
        "object": {
          "type": "Identifier",
          "start": 485,
          "end": 486,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 487,
          "end": 494,
          "decorators": [],
          "name": "drunkOO",
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
      "start": 495,
      "end": 507,
      "expression": {
        "type": "MemberExpression",
        "start": 495,
        "end": 507,
        "object": {
          "type": "Identifier",
          "start": 495,
          "end": 496,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 497,
          "end": 507,
          "decorators": [],
          "name": "numberOxen",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
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
  "start": 45,
  "end": 414,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 45,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 58,
        "decorators": [],
        "name": "Soup",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 59,
          "end": 66,
          "decorators": [],
          "name": "flavour",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 68,
        "end": 98,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 74,
            "end": 96,
            "expression": {
              "type": "AssignmentExpression",
              "start": 74,
              "end": 96,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 74,
                "end": 86,
                "object": {
                  "type": "ThisExpression",
                  "start": 74,
                  "end": 78
                },
                "property": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 86,
                  "decorators": [],
                  "name": "flavour",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Identifier",
                "start": 89,
                "end": 96,
                "decorators": [],
                "name": "flavour",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 159,
      "end": 235,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 172,
        "decorators": [],
        "name": "Chowder",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 181,
        "end": 185,
        "decorators": [],
        "name": "Soup",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 186,
        "end": 235,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 192,
            "end": 233,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 195,
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 195,
              "end": 233,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 198,
                "end": 233,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 208,
                    "end": 227,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 215,
                      "end": 227,
                      "object": {
                        "type": "ThisExpression",
                        "start": 215,
                        "end": 219
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 220,
                        "end": 227,
                        "decorators": [],
                        "name": "flavour",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
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
      "start": 237,
      "end": 260,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 259,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 245,
            "decorators": [],
            "name": "soup",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 248,
            "end": 259,
            "callee": {
              "type": "Identifier",
              "start": 252,
              "end": 256,
              "decorators": [],
              "name": "Soup",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 257,
                "end": 258,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 261,
      "end": 273,
      "expression": {
        "type": "MemberExpression",
        "start": 261,
        "end": 273,
        "object": {
          "type": "Identifier",
          "start": 261,
          "end": 265,
          "decorators": [],
          "name": "soup",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 266,
          "end": 273,
          "decorators": [],
          "name": "flavour",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 274,
      "end": 323,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 322,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 285,
            "decorators": [],
            "name": "chowder",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 288,
            "end": 322,
            "callee": {
              "type": "Identifier",
              "start": 292,
              "end": 299,
              "decorators": [],
              "name": "Chowder",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 300,
                "end": 321,
                "properties": [
                  {
                    "type": "Property",
                    "start": 302,
                    "end": 319,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 307,
                      "decorators": [],
                      "name": "claim",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 309,
                      "end": 319,
                      "value": "ignorant",
                      "raw": "\"ignorant\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 324,
      "end": 345,
      "expression": {
        "type": "MemberExpression",
        "start": 324,
        "end": 345,
        "object": {
          "type": "MemberExpression",
          "start": 324,
          "end": 339,
          "object": {
            "type": "Identifier",
            "start": 324,
            "end": 331,
            "decorators": [],
            "name": "chowder",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 332,
            "end": 339,
            "decorators": [],
            "name": "flavour",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "property": {
          "type": "Identifier",
          "start": 340,
          "end": 345,
          "decorators": [],
          "name": "claim",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 346,
      "end": 378,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 350,
          "end": 377,
          "id": {
            "type": "Identifier",
            "start": 350,
            "end": 361,
            "decorators": [],
            "name": "errorNoArgs",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 364,
            "end": 377,
            "callee": {
              "type": "Identifier",
              "start": 368,
              "end": 375,
              "decorators": [],
              "name": "Chowder",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 379,
      "end": 413,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 383,
          "end": 412,
          "id": {
            "type": "Identifier",
            "start": 383,
            "end": 395,
            "decorators": [],
            "name": "errorArgType",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 398,
            "end": 412,
            "callee": {
              "type": "Identifier",
              "start": 402,
              "end": 409,
              "decorators": [],
              "name": "Chowder",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 410,
                "end": 411,
                "value": 0,
                "raw": "0"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
