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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 23,
        "name": "define",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 24,
          "end": 35,
          "name": "constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 37,
          "end": 52,
          "name": "instanceMembers",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 54,
          "end": 67,
          "name": "staticMembers",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 489,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 83,
            "end": 128,
            "expression": {
              "type": "AssignmentExpression",
              "start": 83,
              "end": 127,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 83,
                "end": 94,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "LogicalExpression",
                "start": 97,
                "end": 127,
                "left": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 108,
                  "name": "constructor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "||",
                "right": {
                  "type": "FunctionExpression",
                  "start": 112,
                  "end": 127,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 124,
                    "end": 127,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 141,
            "end": 207,
            "expression": {
              "type": "CallExpression",
              "start": 141,
              "end": 206,
              "callee": {
                "type": "MemberExpression",
                "start": 141,
                "end": 193,
                "object": {
                  "type": "MemberExpression",
                  "start": 141,
                  "end": 166,
                  "object": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 156,
                    "name": "PluginUtilities",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 166,
                    "name": "Utilities",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 193,
                  "name": "markSupportedForProcessing",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 194,
                  "end": 205,
                  "name": "constructor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 220,
            "end": 334,
            "test": {
              "type": "Identifier",
              "start": 224,
              "end": 239,
              "name": "instanceMembers",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 241,
              "end": 334,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 259,
                  "end": 320,
                  "expression": {
                    "type": "CallExpression",
                    "start": 259,
                    "end": 319,
                    "callee": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 279,
                      "name": "initializeProperties",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 280,
                        "end": 301,
                        "object": {
                          "type": "Identifier",
                          "start": 280,
                          "end": 291,
                          "name": "constructor",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 292,
                          "end": 301,
                          "name": "prototype",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 303,
                        "end": 318,
                        "name": "instanceMembers",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 347,
            "end": 447,
            "test": {
              "type": "Identifier",
              "start": 351,
              "end": 364,
              "name": "staticMembers",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 366,
              "end": 447,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 384,
                  "end": 433,
                  "expression": {
                    "type": "CallExpression",
                    "start": 384,
                    "end": 432,
                    "callee": {
                      "type": "Identifier",
                      "start": 384,
                      "end": 404,
                      "name": "initializeProperties",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 405,
                        "end": 416,
                        "name": "constructor",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 418,
                        "end": 431,
                        "name": "staticMembers",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 460,
            "end": 479,
            "argument": {
              "type": "Identifier",
              "start": 467,
              "end": 478,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 499,
      "end": 1449,
      "id": {
        "type": "Identifier",
        "start": 508,
        "end": 514,
        "name": "derive",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 515,
          "end": 524,
          "name": "baseClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 526,
          "end": 537,
          "name": "constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 539,
          "end": 554,
          "name": "instanceMembers",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 556,
          "end": 569,
          "name": "staticMembers",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 571,
        "end": 1449,
        "body": [
          {
            "type": "IfStatement",
            "start": 585,
            "end": 1439,
            "test": {
              "type": "Identifier",
              "start": 589,
              "end": 598,
              "name": "baseClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 618,
                    "end": 662,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 618,
                      "end": 629,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "start": 632,
                      "end": 662,
                      "left": {
                        "type": "Identifier",
                        "start": 632,
                        "end": 643,
                        "name": "constructor",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "||",
                      "right": {
                        "type": "FunctionExpression",
                        "start": 647,
                        "end": 662,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 659,
                          "end": 662,
                          "body": []
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      }
                    }
                  },
                  "directive": null
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
                      "id": {
                        "type": "Identifier",
                        "start": 684,
                        "end": 697,
                        "name": "basePrototype",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 700,
                        "end": 719,
                        "object": {
                          "type": "Identifier",
                          "start": 700,
                          "end": 709,
                          "name": "baseClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 710,
                          "end": 719,
                          "name": "prototype",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 737,
                  "end": 790,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 737,
                    "end": 789,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 737,
                      "end": 758,
                      "object": {
                        "type": "Identifier",
                        "start": 737,
                        "end": 748,
                        "name": "constructor",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 749,
                        "end": 758,
                        "name": "prototype",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 761,
                      "end": 789,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 761,
                        "end": 774,
                        "object": {
                          "type": "Identifier",
                          "start": 761,
                          "end": 767,
                          "name": "Object",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 768,
                          "end": 774,
                          "name": "create",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 775,
                          "end": 788,
                          "name": "basePrototype",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 807,
                  "end": 873,
                  "expression": {
                    "type": "CallExpression",
                    "start": 807,
                    "end": 872,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 807,
                      "end": 859,
                      "object": {
                        "type": "MemberExpression",
                        "start": 807,
                        "end": 832,
                        "object": {
                          "type": "Identifier",
                          "start": 807,
                          "end": 822,
                          "name": "PluginUtilities",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 823,
                          "end": 832,
                          "name": "Utilities",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 833,
                        "end": 859,
                        "name": "markSupportedForProcessing",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 860,
                        "end": 871,
                        "name": "constructor",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 890,
                  "end": 1028,
                  "expression": {
                    "type": "CallExpression",
                    "start": 890,
                    "end": 1027,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 890,
                      "end": 911,
                      "object": {
                        "type": "Identifier",
                        "start": 890,
                        "end": 896,
                        "name": "Object",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 897,
                        "end": 911,
                        "name": "defineProperty",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 912,
                        "end": 933,
                        "object": {
                          "type": "Identifier",
                          "start": 912,
                          "end": 923,
                          "name": "constructor",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 924,
                          "end": 933,
                          "name": "prototype",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      {
                        "type": "Literal",
                        "start": 935,
                        "end": 948,
                        "value": "constructor",
                        "raw": "\"constructor\""
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
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 952,
                              "end": 957,
                              "name": "value",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 959,
                              "end": 970,
                              "name": "constructor",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 972,
                            "end": 986,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 972,
                              "end": 980,
                              "name": "writable",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 982,
                              "end": 986,
                              "value": true,
                              "raw": "true"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 988,
                            "end": 1006,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 988,
                              "end": 1000,
                              "name": "configurable",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1002,
                              "end": 1006,
                              "value": true,
                              "raw": "true"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 1008,
                            "end": 1024,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1008,
                              "end": 1018,
                              "name": "enumerable",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1020,
                              "end": 1024,
                              "value": true,
                              "raw": "true"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 1045,
                  "end": 1167,
                  "test": {
                    "type": "Identifier",
                    "start": 1049,
                    "end": 1064,
                    "name": "instanceMembers",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1066,
                    "end": 1167,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1088,
                        "end": 1149,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1088,
                          "end": 1148,
                          "callee": {
                            "type": "Identifier",
                            "start": 1088,
                            "end": 1108,
                            "name": "initializeProperties",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 1109,
                              "end": 1130,
                              "object": {
                                "type": "Identifier",
                                "start": 1109,
                                "end": 1120,
                                "name": "constructor",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1121,
                                "end": 1130,
                                "name": "prototype",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 1132,
                              "end": 1147,
                              "name": "instanceMembers",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "start": 1184,
                  "end": 1292,
                  "test": {
                    "type": "Identifier",
                    "start": 1188,
                    "end": 1201,
                    "name": "staticMembers",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1203,
                    "end": 1292,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1225,
                        "end": 1274,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1225,
                          "end": 1273,
                          "callee": {
                            "type": "Identifier",
                            "start": 1225,
                            "end": 1245,
                            "name": "initializeProperties",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1246,
                              "end": 1257,
                              "name": "constructor",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 1259,
                              "end": 1272,
                              "name": "staticMembers",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 1309,
                  "end": 1328,
                  "argument": {
                    "type": "Identifier",
                    "start": 1316,
                    "end": 1327,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
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
                    "callee": {
                      "type": "Identifier",
                      "start": 1373,
                      "end": 1379,
                      "name": "define",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1380,
                        "end": 1391,
                        "name": "constructor",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1393,
                        "end": 1408,
                        "name": "instanceMembers",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 1410,
                        "end": 1423,
                        "name": "staticMembers",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1459,
      "end": 1763,
      "id": {
        "type": "Identifier",
        "start": 1468,
        "end": 1471,
        "name": "mix",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1472,
          "end": 1483,
          "name": "constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1485,
        "end": 1763,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1499,
            "end": 1544,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1499,
              "end": 1543,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1499,
                "end": 1510,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "LogicalExpression",
                "start": 1513,
                "end": 1543,
                "left": {
                  "type": "Identifier",
                  "start": 1513,
                  "end": 1524,
                  "name": "constructor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "||",
                "right": {
                  "type": "FunctionExpression",
                  "start": 1528,
                  "end": 1543,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1540,
                    "end": 1543,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                }
              }
            },
            "directive": null
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
                "id": {
                  "type": "Identifier",
                  "start": 1561,
                  "end": 1562,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 1564,
                "end": 1567,
                "id": {
                  "type": "Identifier",
                  "start": 1564,
                  "end": 1567,
                  "name": "len",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ForStatement",
            "start": 1581,
            "end": 1721,
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
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1590,
                    "end": 1591,
                    "value": 1,
                    "raw": "1"
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
                    "name": "len",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 1599,
                    "end": 1615,
                    "object": {
                      "type": "Identifier",
                      "start": 1599,
                      "end": 1608,
                      "name": "arguments",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1609,
                      "end": 1615,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1617,
              "end": 1624,
              "left": {
                "type": "Identifier",
                "start": 1617,
                "end": 1618,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "start": 1621,
                "end": 1624,
                "name": "len",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 1626,
              "end": 1629,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 1626,
                "end": 1627,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 1631,
              "end": 1721,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1649,
                  "end": 1707,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1649,
                    "end": 1706,
                    "callee": {
                      "type": "Identifier",
                      "start": 1649,
                      "end": 1669,
                      "name": "initializeProperties",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 1670,
                        "end": 1691,
                        "object": {
                          "type": "Identifier",
                          "start": 1670,
                          "end": 1681,
                          "name": "constructor",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1682,
                          "end": 1691,
                          "name": "prototype",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      {
                        "type": "MemberExpression",
                        "start": 1693,
                        "end": 1705,
                        "object": {
                          "type": "Identifier",
                          "start": 1693,
                          "end": 1702,
                          "name": "arguments",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1703,
                          "end": 1704,
                          "name": "i",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
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
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
