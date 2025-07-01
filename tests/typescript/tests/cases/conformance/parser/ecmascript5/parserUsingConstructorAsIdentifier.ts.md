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
        "name": "define",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 23
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 35
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "instanceMembers",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 52
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "staticMembers",
          "optional": false,
          "typeAnnotation": null,
          "start": 54,
          "end": 67
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
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 94
              },
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 108
                },
                "operator": "||",
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
                    "body": [],
                    "start": 124,
                    "end": 127
                  },
                  "expression": false,
                  "start": 112,
                  "end": 127
                },
                "start": 97,
                "end": 127
              },
              "start": 83,
              "end": 127
            },
            "directive": null,
            "start": 83,
            "end": 128
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PluginUtilities",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 141,
                    "end": 156
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Utilities",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 157,
                    "end": 166
                  },
                  "optional": false,
                  "computed": false,
                  "start": 141,
                  "end": 166
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "markSupportedForProcessing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 193
                },
                "optional": false,
                "computed": false,
                "start": 141,
                "end": 193
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 194,
                  "end": 205
                }
              ],
              "optional": false,
              "start": 141,
              "end": 206
            },
            "directive": null,
            "start": 141,
            "end": 207
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "instanceMembers",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 239
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "initializeProperties",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 259,
                      "end": 279
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 280,
                          "end": 291
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prototype",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 292,
                          "end": 301
                        },
                        "optional": false,
                        "computed": false,
                        "start": 280,
                        "end": 301
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "instanceMembers",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 303,
                        "end": 318
                      }
                    ],
                    "optional": false,
                    "start": 259,
                    "end": 319
                  },
                  "directive": null,
                  "start": 259,
                  "end": 320
                }
              ],
              "start": 241,
              "end": 334
            },
            "alternate": null,
            "start": 220,
            "end": 334
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticMembers",
              "optional": false,
              "typeAnnotation": null,
              "start": 351,
              "end": 364
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "initializeProperties",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 384,
                      "end": 404
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 405,
                        "end": 416
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticMembers",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 418,
                        "end": 431
                      }
                    ],
                    "optional": false,
                    "start": 384,
                    "end": 432
                  },
                  "directive": null,
                  "start": 384,
                  "end": 433
                }
              ],
              "start": 366,
              "end": 447
            },
            "alternate": null,
            "start": 347,
            "end": 447
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 478
            },
            "start": 460,
            "end": 479
          }
        ],
        "start": 69,
        "end": 489
      },
      "expression": false,
      "start": 8,
      "end": 489
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "derive",
        "optional": false,
        "typeAnnotation": null,
        "start": 508,
        "end": 514
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "baseClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 515,
          "end": 524
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 526,
          "end": 537
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "instanceMembers",
          "optional": false,
          "typeAnnotation": null,
          "start": 539,
          "end": 554
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "staticMembers",
          "optional": false,
          "typeAnnotation": null,
          "start": 556,
          "end": 569
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "baseClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 589,
              "end": 598
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 618,
                      "end": 629
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 632,
                        "end": 643
                      },
                      "operator": "||",
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
                          "body": [],
                          "start": 659,
                          "end": 662
                        },
                        "expression": false,
                        "start": 647,
                        "end": 662
                      },
                      "start": 632,
                      "end": 662
                    },
                    "start": 618,
                    "end": 662
                  },
                  "directive": null,
                  "start": 618,
                  "end": 663
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
                        "name": "basePrototype",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 684,
                        "end": 697
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "baseClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 700,
                          "end": 709
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prototype",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 710,
                          "end": 719
                        },
                        "optional": false,
                        "computed": false,
                        "start": 700,
                        "end": 719
                      },
                      "definite": false,
                      "start": 684,
                      "end": 719
                    }
                  ],
                  "declare": false,
                  "start": 680,
                  "end": 720
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
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 737,
                        "end": 748
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prototype",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 749,
                        "end": 758
                      },
                      "optional": false,
                      "computed": false,
                      "start": 737,
                      "end": 758
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 761,
                          "end": 767
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "create",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 768,
                          "end": 774
                        },
                        "optional": false,
                        "computed": false,
                        "start": 761,
                        "end": 774
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "basePrototype",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 775,
                          "end": 788
                        }
                      ],
                      "optional": false,
                      "start": 761,
                      "end": 789
                    },
                    "start": 737,
                    "end": 789
                  },
                  "directive": null,
                  "start": 737,
                  "end": 790
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PluginUtilities",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 807,
                          "end": 822
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Utilities",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 823,
                          "end": 832
                        },
                        "optional": false,
                        "computed": false,
                        "start": 807,
                        "end": 832
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "markSupportedForProcessing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 833,
                        "end": 859
                      },
                      "optional": false,
                      "computed": false,
                      "start": 807,
                      "end": 859
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 860,
                        "end": 871
                      }
                    ],
                    "optional": false,
                    "start": 807,
                    "end": 872
                  },
                  "directive": null,
                  "start": 807,
                  "end": 873
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 890,
                        "end": 896
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "defineProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 897,
                        "end": 911
                      },
                      "optional": false,
                      "computed": false,
                      "start": 890,
                      "end": 911
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 912,
                          "end": 923
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prototype",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 924,
                          "end": 933
                        },
                        "optional": false,
                        "computed": false,
                        "start": 912,
                        "end": 933
                      },
                      {
                        "type": "Literal",
                        "value": "constructor",
                        "raw": "\"constructor\"",
                        "start": 935,
                        "end": 948
                      },
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 952,
                              "end": 957
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "constructor",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 959,
                              "end": 970
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 952,
                            "end": 970
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "writable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 972,
                              "end": 980
                            },
                            "value": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 982,
                              "end": 986
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 972,
                            "end": 986
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "configurable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 988,
                              "end": 1000
                            },
                            "value": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 1002,
                              "end": 1006
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 988,
                            "end": 1006
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "enumerable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1008,
                              "end": 1018
                            },
                            "value": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 1020,
                              "end": 1024
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1008,
                            "end": 1024
                          }
                        ],
                        "start": 950,
                        "end": 1026
                      }
                    ],
                    "optional": false,
                    "start": 890,
                    "end": 1027
                  },
                  "directive": null,
                  "start": 890,
                  "end": 1028
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "instanceMembers",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1049,
                    "end": 1064
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "initializeProperties",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1088,
                            "end": 1108
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "constructor",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1109,
                                "end": 1120
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prototype",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1121,
                                "end": 1130
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1109,
                              "end": 1130
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "instanceMembers",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1132,
                              "end": 1147
                            }
                          ],
                          "optional": false,
                          "start": 1088,
                          "end": 1148
                        },
                        "directive": null,
                        "start": 1088,
                        "end": 1149
                      }
                    ],
                    "start": 1066,
                    "end": 1167
                  },
                  "alternate": null,
                  "start": 1045,
                  "end": 1167
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "staticMembers",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1188,
                    "end": 1201
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "initializeProperties",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1225,
                            "end": 1245
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "constructor",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1246,
                              "end": 1257
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "staticMembers",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1259,
                              "end": 1272
                            }
                          ],
                          "optional": false,
                          "start": 1225,
                          "end": 1273
                        },
                        "directive": null,
                        "start": 1225,
                        "end": 1274
                      }
                    ],
                    "start": 1203,
                    "end": 1292
                  },
                  "alternate": null,
                  "start": 1184,
                  "end": 1292
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1316,
                    "end": 1327
                  },
                  "start": 1309,
                  "end": 1328
                }
              ],
              "start": 600,
              "end": 1342
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "define",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1373,
                      "end": 1379
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1380,
                        "end": 1391
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "instanceMembers",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1393,
                        "end": 1408
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticMembers",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1410,
                        "end": 1423
                      }
                    ],
                    "optional": false,
                    "start": 1373,
                    "end": 1424
                  },
                  "start": 1366,
                  "end": 1425
                }
              ],
              "start": 1348,
              "end": 1439
            },
            "start": 585,
            "end": 1439
          }
        ],
        "start": 571,
        "end": 1449
      },
      "expression": false,
      "start": 499,
      "end": 1449
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mix",
        "optional": false,
        "typeAnnotation": null,
        "start": 1468,
        "end": 1471
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 1472,
          "end": 1483
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
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 1499,
                "end": 1510
              },
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1513,
                  "end": 1524
                },
                "operator": "||",
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
                    "body": [],
                    "start": 1540,
                    "end": 1543
                  },
                  "expression": false,
                  "start": 1528,
                  "end": 1543
                },
                "start": 1513,
                "end": 1543
              },
              "start": 1499,
              "end": 1543
            },
            "directive": null,
            "start": 1499,
            "end": 1544
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1561,
                  "end": 1562
                },
                "init": null,
                "definite": false,
                "start": 1561,
                "end": 1562
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "len",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1564,
                  "end": 1567
                },
                "init": null,
                "definite": false,
                "start": 1564,
                "end": 1567
              }
            ],
            "declare": false,
            "start": 1557,
            "end": 1568
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1586,
                    "end": 1587
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1590,
                    "end": 1591
                  },
                  "start": 1586,
                  "end": 1591
                },
                {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "len",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1593,
                    "end": 1596
                  },
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1599,
                      "end": 1608
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1609,
                      "end": 1615
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1599,
                    "end": 1615
                  },
                  "start": 1593,
                  "end": 1615
                }
              ],
              "start": 1586,
              "end": 1615
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1617,
                "end": 1618
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "len",
                "optional": false,
                "typeAnnotation": null,
                "start": 1621,
                "end": 1624
              },
              "start": 1617,
              "end": 1624
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1626,
                "end": 1627
              },
              "start": 1626,
              "end": 1629
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "initializeProperties",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1649,
                      "end": 1669
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1670,
                          "end": 1681
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prototype",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1682,
                          "end": 1691
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1670,
                        "end": 1691
                      },
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1693,
                          "end": 1702
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1703,
                          "end": 1704
                        },
                        "optional": false,
                        "computed": true,
                        "start": 1693,
                        "end": 1705
                      }
                    ],
                    "optional": false,
                    "start": 1649,
                    "end": 1706
                  },
                  "directive": null,
                  "start": 1649,
                  "end": 1707
                }
              ],
              "start": 1631,
              "end": 1721
            },
            "start": 1581,
            "end": 1721
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1741,
              "end": 1752
            },
            "start": 1734,
            "end": 1753
          }
        ],
        "start": 1485,
        "end": 1763
      },
      "expression": false,
      "start": 1459,
      "end": 1763
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 8,
  "end": 1763
}
```
