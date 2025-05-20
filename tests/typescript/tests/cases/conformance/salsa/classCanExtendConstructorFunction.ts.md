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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 81,
        "end": 117,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 87,
            "end": 115,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 87,
              "end": 115,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 87,
                "end": 102,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 87,
                  "end": 91
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 102,
                  "decorators": [],
                  "name": "numberOxen",
                  "optional": false,
                  "typeAnnotation": null
                }
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
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 68,
        "decorators": [],
        "name": "Wagon",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 150,
      "end": 228,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 150,
        "end": 228,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 150,
          "end": 162,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 150,
            "end": 155,
            "decorators": [],
            "name": "Wagon",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 156,
            "end": 162,
            "decorators": [],
            "name": "circle",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 165,
          "end": 228,
          "async": false,
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
                  "alternate": {
                    "type": "Literal",
                    "start": 221,
                    "end": 225,
                    "raw": "3.14",
                    "value": 3.14
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "start": 205,
                    "end": 218,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 211,
                      "decorators": [],
                      "name": "wagons",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 212,
                      "end": 218,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 202,
                    "decorators": [],
                    "name": "wagons",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
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
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 287,
      "end": 333,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 287,
        "end": 333,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 287,
          "end": 307,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 287,
            "end": 302,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 287,
              "end": 292,
              "decorators": [],
              "name": "Wagon",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 293,
              "end": 302,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 303,
            "end": 307,
            "decorators": [],
            "name": "load",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 310,
          "end": 333,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 330,
            "end": 333,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
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
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 390,
      "end": 458,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 390,
        "end": 458,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 390,
          "end": 412,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 390,
            "end": 405,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 390,
              "end": 395,
              "decorators": [],
              "name": "Wagon",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 396,
              "end": 405,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 406,
            "end": 412,
            "decorators": [],
            "name": "weight",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 415,
          "end": 458,
          "async": false,
          "body": {
            "type": "ConditionalExpression",
            "start": 427,
            "end": 458,
            "alternate": {
              "type": "UnaryExpression",
              "start": 456,
              "end": 458,
              "argument": {
                "type": "Literal",
                "start": 457,
                "end": 458,
                "raw": "1",
                "value": 1
              },
              "operator": "-",
              "prefix": true
            },
            "consequent": {
              "type": "MemberExpression",
              "start": 438,
              "end": 453,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 438,
                "end": 446,
                "decorators": [],
                "name": "supplies",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 447,
                "end": 453,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "test": {
              "type": "Identifier",
              "start": 427,
              "end": 435,
              "decorators": [],
              "name": "supplies",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
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
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 459,
      "end": 541,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 459,
        "end": 541,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 459,
          "end": 480,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 459,
            "end": 474,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 459,
              "end": 464,
              "decorators": [],
              "name": "Wagon",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 465,
              "end": 474,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 475,
            "end": 480,
            "decorators": [],
            "name": "speed",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 483,
          "end": 541,
          "async": false,
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
                  "operator": "/",
                  "left": {
                    "type": "MemberExpression",
                    "start": 508,
                    "end": 523,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 508,
                      "end": 512
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 513,
                      "end": 523,
                      "decorators": [],
                      "name": "numberOxen",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 526,
                    "end": 539,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 526,
                      "end": 537,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 526,
                        "end": 530
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 531,
                        "end": 537,
                        "decorators": [],
                        "name": "weight",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
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
    },
    {
      "type": "ClassDeclaration",
      "start": 548,
      "end": 1153,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 572,
        "end": 1153,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 578,
            "end": 672,
            "accessibility": null,
            "computed": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 589,
              "end": 672,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 592,
                "end": 672,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 602,
                    "end": 610,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 602,
                      "end": 609,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 602,
                        "end": 607
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 650,
                    "end": 666,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 650,
                      "end": 666,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 650,
                        "end": 661,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 650,
                          "end": 654
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 655,
                          "end": 661,
                          "decorators": [],
                          "name": "foonly",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 664,
                        "end": 666,
                        "raw": "12",
                        "value": 12
                      }
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
            "start": 843,
            "end": 1151,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 847,
              "end": 1151,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 863,
                "end": 1151,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 873,
                    "end": 1145,
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 998,
                      "end": 1145,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1012,
                          "end": 1025,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1012,
                            "end": 1025,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1012,
                              "end": 1023,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 1012,
                                "end": 1017
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1018,
                                "end": 1023,
                                "decorators": [],
                                "name": "speed",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        {
                          "type": "IfStatement",
                          "start": 1052,
                          "end": 1135,
                          "alternate": null,
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 1076,
                            "end": 1135,
                            "body": []
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "start": 1056,
                            "end": 1074,
                            "operator": "<",
                            "left": {
                              "type": "CallExpression",
                              "start": 1056,
                              "end": 1070,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1056,
                                "end": 1068,
                                "computed": false,
                                "object": {
                                  "type": "Super",
                                  "start": 1056,
                                  "end": 1061
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1062,
                                  "end": 1068,
                                  "decorators": [],
                                  "name": "weight",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1073,
                              "end": 1074,
                              "raw": "0",
                              "value": 0
                            }
                          }
                        }
                      ]
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
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 933,
                                "end": 972,
                                "raw": "\"please do not use XML. It was a joke.\"",
                                "value": "please do not use XML. It was a joke."
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 927,
                              "end": 932,
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 877,
                      "end": 901,
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "start": 877,
                        "end": 883,
                        "decorators": [],
                        "name": "format",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 888,
                        "end": 901,
                        "raw": "\"xmlolololol\"",
                        "value": "xmlolololol"
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
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
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1154,
      "end": 1173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1158,
          "end": 1172,
          "definite": false,
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
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1167,
              "end": 1170,
              "decorators": [],
              "name": "Sql",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1174,
      "end": 1199,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1174,
        "end": 1199,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1174,
          "end": 1187,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1174,
            "end": 1176,
            "decorators": [],
            "name": "db",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1177,
            "end": 1187,
            "decorators": [],
            "name": "numberOxen",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 1190,
          "end": 1199,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1190,
            "end": 1192,
            "decorators": [],
            "name": "db",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1193,
            "end": 1199,
            "decorators": [],
            "name": "foonly",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1250,
      "end": 1284,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1280,
        "end": 1284,
        "body": []
      },
      "declare": false,
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
      "implements": [],
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
      "typeParameters": null
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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 61,
        "end": 99,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 67,
            "end": 97,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 67,
              "end": 97,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 67,
                "end": 83,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 67,
                  "end": 71
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 83,
                  "decorators": [],
                  "name": "numberEaten",
                  "optional": false,
                  "typeAnnotation": null
                }
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
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 39,
        "decorators": [],
        "name": "Dragon",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 110,
      "end": 187,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 187,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 147,
            "end": 185,
            "accessibility": null,
            "computed": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 158,
              "end": 185,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 161,
                "end": 185,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 171,
                    "end": 179,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 171,
                      "end": 178,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 171,
                        "end": 176
                      },
                      "optional": false,
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
        "start": 116,
        "end": 125,
        "decorators": [],
        "name": "Firedrake",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
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
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 194,
      "end": 455,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 224,
        "end": 455,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 230,
            "end": 323,
            "accessibility": null,
            "computed": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 241,
              "end": 323,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 264,
                "end": 323,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 303,
                    "end": 317,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 303,
                      "end": 316,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 309,
                          "end": 315,
                          "raw": "'nope'",
                          "value": "nope"
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 303,
                        "end": 308
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                          "raw": "true",
                          "value": true
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 377,
            "end": 453,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 390,
              "end": 453,
              "async": false,
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
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 434,
                        "end": 440,
                        "decorators": [],
                        "name": "others",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 441,
                        "end": 447,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
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
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 456,
      "end": 484,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 460,
          "end": 483,
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 478,
                "end": 482,
                "raw": "true",
                "value": true
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 468,
              "end": 477,
              "decorators": [],
              "name": "Conestoga",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 485,
      "end": 494,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 485,
        "end": 494,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 485,
          "end": 486,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 487,
          "end": 494,
          "decorators": [],
          "name": "drunkOO",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 495,
      "end": 507,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 495,
        "end": 507,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 495,
          "end": 496,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 497,
          "end": 507,
          "decorators": [],
          "name": "numberOxen",
          "optional": false,
          "typeAnnotation": null
        }
      }
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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 68,
        "end": 98,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 74,
            "end": 96,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 74,
              "end": 96,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 74,
                "end": 86,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 74,
                  "end": 78
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 86,
                  "decorators": [],
                  "name": "flavour",
                  "optional": false,
                  "typeAnnotation": null
                }
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
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 58,
        "decorators": [],
        "name": "Soup",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 159,
      "end": 235,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 186,
        "end": 235,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 192,
            "end": 233,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 195,
              "end": 233,
              "async": false,
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
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 215,
                        "end": 219
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 220,
                        "end": 227,
                        "decorators": [],
                        "name": "flavour",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
        "start": 165,
        "end": 172,
        "decorators": [],
        "name": "Chowder",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
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
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 259,
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 257,
                "end": 258,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 252,
              "end": 256,
              "decorators": [],
              "name": "Soup",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 261,
      "end": 273,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 261,
        "end": 273,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 261,
          "end": 265,
          "decorators": [],
          "name": "soup",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 266,
          "end": 273,
          "decorators": [],
          "name": "flavour",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 274,
      "end": 323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 322,
          "definite": false,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 307,
                      "decorators": [],
                      "name": "claim",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 309,
                      "end": 319,
                      "raw": "\"ignorant\"",
                      "value": "ignorant"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 292,
              "end": 299,
              "decorators": [],
              "name": "Chowder",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 324,
      "end": 345,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 324,
        "end": 345,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 324,
          "end": 339,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 324,
            "end": 331,
            "decorators": [],
            "name": "chowder",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 332,
            "end": 339,
            "decorators": [],
            "name": "flavour",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 340,
          "end": 345,
          "decorators": [],
          "name": "claim",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 346,
      "end": 378,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 350,
          "end": 377,
          "definite": false,
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
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 368,
              "end": 375,
              "decorators": [],
              "name": "Chowder",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 379,
      "end": 413,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 383,
          "end": 412,
          "definite": false,
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
            "arguments": [
              {
                "type": "Literal",
                "start": 410,
                "end": 411,
                "raw": "0",
                "value": 0
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 402,
              "end": 409,
              "decorators": [],
              "name": "Chowder",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
