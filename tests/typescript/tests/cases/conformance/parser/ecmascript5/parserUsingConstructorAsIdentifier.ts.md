__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 8,
  "end": 1763,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 8,
      "end": 489,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 489,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 83,
            "end": 128,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 83,
              "end": 127,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 83,
                "end": 94,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "LogicalExpression",
                "start": 97,
                "end": 127,
                "operator": "||",
                "left": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 108,
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "FunctionExpression",
                  "start": 112,
                  "end": 127,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 124,
                    "end": 127,
                    "body": []
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
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 141,
            "end": 207,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 141,
              "end": 206,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 194,
                  "end": 205,
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 141,
                "end": 193,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 141,
                  "end": 166,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 156,
                    "decorators": [],
                    "name": "PluginUtilities",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 166,
                    "decorators": [],
                    "name": "Utilities",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 193,
                  "decorators": [],
                  "name": "markSupportedForProcessing",
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
            "start": 220,
            "end": 334,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 241,
              "end": 334,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 259,
                  "end": 320,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 259,
                    "end": 319,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 280,
                        "end": 301,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 280,
                          "end": 291,
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 292,
                          "end": 301,
                          "decorators": [],
                          "name": "prototype",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 303,
                        "end": 318,
                        "decorators": [],
                        "name": "instanceMembers",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 279,
                      "decorators": [],
                      "name": "initializeProperties",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 224,
              "end": 239,
              "decorators": [],
              "name": "instanceMembers",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "IfStatement",
            "start": 347,
            "end": 447,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 366,
              "end": 447,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 384,
                  "end": 433,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 384,
                    "end": 432,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 405,
                        "end": 416,
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 418,
                        "end": 431,
                        "decorators": [],
                        "name": "staticMembers",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 384,
                      "end": 404,
                      "decorators": [],
                      "name": "initializeProperties",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 351,
              "end": 364,
              "decorators": [],
              "name": "staticMembers",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 460,
            "end": 479,
            "argument": {
              "type": "Identifier",
              "start": 467,
              "end": 478,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 23,
        "decorators": [],
        "name": "define",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 24,
          "end": 35,
          "decorators": [],
          "name": "constructor",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 37,
          "end": 52,
          "decorators": [],
          "name": "instanceMembers",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 54,
          "end": 67,
          "decorators": [],
          "name": "staticMembers",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 499,
      "end": 1449,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 571,
        "end": 1449,
        "body": [
          {
            "type": "IfStatement",
            "start": 585,
            "end": 1439,
            "alternate": {
              "type": "BlockStatement",
              "start": 1348,
              "end": 1439,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1366,
                  "end": 1425,
                  "argument": {
                    "type": "CallExpression",
                    "start": 1373,
                    "end": 1424,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1380,
                        "end": 1391,
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 1393,
                        "end": 1408,
                        "decorators": [],
                        "name": "instanceMembers",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 1410,
                        "end": 1423,
                        "decorators": [],
                        "name": "staticMembers",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1373,
                      "end": 1379,
                      "decorators": [],
                      "name": "define",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 600,
              "end": 1342,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 618,
                  "end": 663,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 618,
                    "end": 662,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 618,
                      "end": 629,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "start": 632,
                      "end": 662,
                      "operator": "||",
                      "left": {
                        "type": "Identifier",
                        "start": 632,
                        "end": 643,
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "FunctionExpression",
                        "start": 647,
                        "end": 662,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 659,
                          "end": 662,
                          "body": []
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
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 680,
                  "end": 720,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 684,
                      "end": 719,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 684,
                        "end": 697,
                        "decorators": [],
                        "name": "basePrototype",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 700,
                        "end": 719,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 700,
                          "end": 709,
                          "decorators": [],
                          "name": "baseClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 710,
                          "end": 719,
                          "decorators": [],
                          "name": "prototype",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 737,
                  "end": 790,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 737,
                    "end": 789,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 737,
                      "end": 758,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 737,
                        "end": 748,
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 749,
                        "end": 758,
                        "decorators": [],
                        "name": "prototype",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 761,
                      "end": 789,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 775,
                          "end": 788,
                          "decorators": [],
                          "name": "basePrototype",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 761,
                        "end": 774,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 761,
                          "end": 767,
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 768,
                          "end": 774,
                          "decorators": [],
                          "name": "create",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 807,
                  "end": 873,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 807,
                    "end": 872,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 860,
                        "end": 871,
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 807,
                      "end": 859,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 807,
                        "end": 832,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 807,
                          "end": 822,
                          "decorators": [],
                          "name": "PluginUtilities",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 823,
                          "end": 832,
                          "decorators": [],
                          "name": "Utilities",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 833,
                        "end": 859,
                        "decorators": [],
                        "name": "markSupportedForProcessing",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 890,
                  "end": 1028,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 890,
                    "end": 1027,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 912,
                        "end": 933,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 912,
                          "end": 923,
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 924,
                          "end": 933,
                          "decorators": [],
                          "name": "prototype",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "Literal",
                        "start": 935,
                        "end": 948,
                        "raw": "\"constructor\"",
                        "value": "constructor"
                      },
                      {
                        "type": "ObjectExpression",
                        "start": 950,
                        "end": 1026,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 952,
                            "end": 970,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 952,
                              "end": 957,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Identifier",
                              "start": 959,
                              "end": 970,
                              "decorators": [],
                              "name": "constructor",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "Property",
                            "start": 972,
                            "end": 986,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 972,
                              "end": 980,
                              "decorators": [],
                              "name": "writable",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 982,
                              "end": 986,
                              "raw": "true",
                              "value": true
                            }
                          },
                          {
                            "type": "Property",
                            "start": 988,
                            "end": 1006,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 988,
                              "end": 1000,
                              "decorators": [],
                              "name": "configurable",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 1002,
                              "end": 1006,
                              "raw": "true",
                              "value": true
                            }
                          },
                          {
                            "type": "Property",
                            "start": 1008,
                            "end": 1024,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1008,
                              "end": 1018,
                              "decorators": [],
                              "name": "enumerable",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 1020,
                              "end": 1024,
                              "raw": "true",
                              "value": true
                            }
                          }
                        ]
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 890,
                      "end": 911,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 890,
                        "end": 896,
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 897,
                        "end": 911,
                        "decorators": [],
                        "name": "defineProperty",
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
                  "start": 1045,
                  "end": 1167,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1066,
                    "end": 1167,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1088,
                        "end": 1149,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1088,
                          "end": 1148,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 1109,
                              "end": 1130,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 1109,
                                "end": 1120,
                                "decorators": [],
                                "name": "constructor",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1121,
                                "end": 1130,
                                "decorators": [],
                                "name": "prototype",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "Identifier",
                              "start": 1132,
                              "end": 1147,
                              "decorators": [],
                              "name": "instanceMembers",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 1088,
                            "end": 1108,
                            "decorators": [],
                            "name": "initializeProperties",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 1049,
                    "end": 1064,
                    "decorators": [],
                    "name": "instanceMembers",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 1184,
                  "end": 1292,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1203,
                    "end": 1292,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1225,
                        "end": 1274,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1225,
                          "end": 1273,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1246,
                              "end": 1257,
                              "decorators": [],
                              "name": "constructor",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Identifier",
                              "start": 1259,
                              "end": 1272,
                              "decorators": [],
                              "name": "staticMembers",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 1225,
                            "end": 1245,
                            "decorators": [],
                            "name": "initializeProperties",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 1188,
                    "end": 1201,
                    "decorators": [],
                    "name": "staticMembers",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 1309,
                  "end": 1328,
                  "argument": {
                    "type": "Identifier",
                    "start": 1316,
                    "end": 1327,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 589,
              "end": 598,
              "decorators": [],
              "name": "baseClass",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 508,
        "end": 514,
        "decorators": [],
        "name": "derive",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 515,
          "end": 524,
          "decorators": [],
          "name": "baseClass",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 526,
          "end": 537,
          "decorators": [],
          "name": "constructor",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 539,
          "end": 554,
          "decorators": [],
          "name": "instanceMembers",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 556,
          "end": 569,
          "decorators": [],
          "name": "staticMembers",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1459,
      "end": 1763,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1485,
        "end": 1763,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1499,
            "end": 1544,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1499,
              "end": 1543,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1499,
                "end": 1510,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "LogicalExpression",
                "start": 1513,
                "end": 1543,
                "operator": "||",
                "left": {
                  "type": "Identifier",
                  "start": 1513,
                  "end": 1524,
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "FunctionExpression",
                  "start": 1528,
                  "end": 1543,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1540,
                    "end": 1543,
                    "body": []
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
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1557,
            "end": 1568,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1561,
                "end": 1562,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1561,
                  "end": 1562,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 1564,
                "end": 1567,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1564,
                  "end": 1567,
                  "decorators": [],
                  "name": "len",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ForStatement",
            "start": 1581,
            "end": 1721,
            "body": {
              "type": "BlockStatement",
              "start": 1631,
              "end": 1721,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1649,
                  "end": 1707,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1649,
                    "end": 1706,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 1670,
                        "end": 1691,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1670,
                          "end": 1681,
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1682,
                          "end": 1691,
                          "decorators": [],
                          "name": "prototype",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "MemberExpression",
                        "start": 1693,
                        "end": 1705,
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 1693,
                          "end": 1702,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1703,
                          "end": 1704,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1649,
                      "end": 1669,
                      "decorators": [],
                      "name": "initializeProperties",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "init": {
              "type": "SequenceExpression",
              "start": 1586,
              "end": 1615,
              "expressions": [
                {
                  "type": "AssignmentExpression",
                  "start": 1586,
                  "end": 1591,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 1586,
                    "end": 1587,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1590,
                    "end": 1591,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "AssignmentExpression",
                  "start": 1593,
                  "end": 1615,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 1593,
                    "end": 1596,
                    "decorators": [],
                    "name": "len",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 1599,
                    "end": 1615,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1599,
                      "end": 1608,
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1609,
                      "end": 1615,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1617,
              "end": 1624,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 1617,
                "end": 1618,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1621,
                "end": 1624,
                "decorators": [],
                "name": "len",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 1626,
              "end": 1629,
              "argument": {
                "type": "Identifier",
                "start": 1626,
                "end": 1627,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 1734,
            "end": 1753,
            "argument": {
              "type": "Identifier",
              "start": 1741,
              "end": 1752,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1468,
        "end": 1471,
        "decorators": [],
        "name": "mix",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1472,
          "end": 1483,
          "decorators": [],
          "name": "constructor",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
