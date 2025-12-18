__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16,
    "range": [
      8,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "define",
    "start": 17,
    "end": 23,
    "range": [
      17,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 24,
    "end": 35,
    "range": [
      24,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "instanceMembers",
    "start": 37,
    "end": 52,
    "range": [
      37,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "staticMembers",
    "start": 54,
    "end": 67,
    "range": [
      54,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 83,
    "end": 94,
    "range": [
      83,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 97,
    "end": 108,
    "range": [
      97,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 109,
    "end": 111,
    "range": [
      109,
      111
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 112,
    "end": 120,
    "range": [
      112,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "PluginUtilities",
    "start": 141,
    "end": 156,
    "range": [
      141,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "Utilities",
    "start": 157,
    "end": 166,
    "range": [
      157,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "markSupportedForProcessing",
    "start": 167,
    "end": 193,
    "range": [
      167,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 194,
    "end": 205,
    "range": [
      194,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 220,
    "end": 222,
    "range": [
      220,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "instanceMembers",
    "start": 224,
    "end": 239,
    "range": [
      224,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "initializeProperties",
    "start": 259,
    "end": 279,
    "range": [
      259,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 280,
    "end": 291,
    "range": [
      280,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 292,
    "end": 301,
    "range": [
      292,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "instanceMembers",
    "start": 303,
    "end": 318,
    "range": [
      303,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 347,
    "end": 349,
    "range": [
      347,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "staticMembers",
    "start": 351,
    "end": 364,
    "range": [
      351,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Identifier",
    "value": "initializeProperties",
    "start": 384,
    "end": 404,
    "range": [
      384,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 405,
    "end": 416,
    "range": [
      405,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "staticMembers",
    "start": 418,
    "end": 431,
    "range": [
      418,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 460,
    "end": 466,
    "range": [
      460,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 467,
    "end": 478,
    "range": [
      467,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 499,
    "end": 507,
    "range": [
      499,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "derive",
    "start": 508,
    "end": 514,
    "range": [
      508,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "baseClass",
    "start": 515,
    "end": 524,
    "range": [
      515,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 526,
    "end": 537,
    "range": [
      526,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Identifier",
    "value": "instanceMembers",
    "start": 539,
    "end": 554,
    "range": [
      539,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Identifier",
    "value": "staticMembers",
    "start": 556,
    "end": 569,
    "range": [
      556,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 585,
    "end": 587,
    "range": [
      585,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Identifier",
    "value": "baseClass",
    "start": 589,
    "end": 598,
    "range": [
      589,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 618,
    "end": 629,
    "range": [
      618,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 632,
    "end": 643,
    "range": [
      632,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 644,
    "end": 646,
    "range": [
      644,
      646
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 647,
    "end": 655,
    "range": [
      647,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 680,
    "end": 683,
    "range": [
      680,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "basePrototype",
    "start": 684,
    "end": 697,
    "range": [
      684,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Identifier",
    "value": "baseClass",
    "start": 700,
    "end": 709,
    "range": [
      700,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 710,
    "end": 719,
    "range": [
      710,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 737,
    "end": 748,
    "range": [
      737,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 749,
    "end": 758,
    "range": [
      749,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 761,
    "end": 767,
    "range": [
      761,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 768,
    "end": 774,
    "range": [
      768,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Identifier",
    "value": "basePrototype",
    "start": 775,
    "end": 788,
    "range": [
      775,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Identifier",
    "value": "PluginUtilities",
    "start": 807,
    "end": 822,
    "range": [
      807,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "Utilities",
    "start": 823,
    "end": 832,
    "range": [
      823,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Identifier",
    "value": "markSupportedForProcessing",
    "start": 833,
    "end": 859,
    "range": [
      833,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 860,
    "end": 871,
    "range": [
      860,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 890,
    "end": 896,
    "range": [
      890,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 897,
    "end": 911,
    "range": [
      897,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 912,
    "end": 923,
    "range": [
      912,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 924,
    "end": 933,
    "range": [
      924,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "String",
    "value": "\"constructor\"",
    "start": 935,
    "end": 948,
    "range": [
      935,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 952,
    "end": 957,
    "range": [
      952,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 959,
    "end": 970,
    "range": [
      959,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Identifier",
    "value": "writable",
    "start": 972,
    "end": 980,
    "range": [
      972,
      980
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 980,
    "end": 981,
    "range": [
      980,
      981
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 982,
    "end": 986,
    "range": [
      982,
      986
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Identifier",
    "value": "configurable",
    "start": 988,
    "end": 1000,
    "range": [
      988,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1002,
    "end": 1006,
    "range": [
      1002,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Identifier",
    "value": "enumerable",
    "start": 1008,
    "end": 1018,
    "range": [
      1008,
      1018
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1020,
    "end": 1024,
    "range": [
      1020,
      1024
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1045,
    "end": 1047,
    "range": [
      1045,
      1047
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Identifier",
    "value": "instanceMembers",
    "start": 1049,
    "end": 1064,
    "range": [
      1049,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  },
  {
    "type": "Identifier",
    "value": "initializeProperties",
    "start": 1088,
    "end": 1108,
    "range": [
      1088,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1109,
    "end": 1120,
    "range": [
      1109,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 1121,
    "end": 1130,
    "range": [
      1121,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Identifier",
    "value": "instanceMembers",
    "start": 1132,
    "end": 1147,
    "range": [
      1132,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1184,
    "end": 1186,
    "range": [
      1184,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1187,
    "end": 1188,
    "range": [
      1187,
      1188
    ]
  },
  {
    "type": "Identifier",
    "value": "staticMembers",
    "start": 1188,
    "end": 1201,
    "range": [
      1188,
      1201
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1201,
    "end": 1202,
    "range": [
      1201,
      1202
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1203,
    "end": 1204,
    "range": [
      1203,
      1204
    ]
  },
  {
    "type": "Identifier",
    "value": "initializeProperties",
    "start": 1225,
    "end": 1245,
    "range": [
      1225,
      1245
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1245,
    "end": 1246,
    "range": [
      1245,
      1246
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1246,
    "end": 1257,
    "range": [
      1246,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1257,
    "end": 1258,
    "range": [
      1257,
      1258
    ]
  },
  {
    "type": "Identifier",
    "value": "staticMembers",
    "start": 1259,
    "end": 1272,
    "range": [
      1259,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1291,
    "end": 1292,
    "range": [
      1291,
      1292
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1309,
    "end": 1315,
    "range": [
      1309,
      1315
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1316,
    "end": 1327,
    "range": [
      1316,
      1327
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1327,
    "end": 1328,
    "range": [
      1327,
      1328
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1341,
    "end": 1342,
    "range": [
      1341,
      1342
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1343,
    "end": 1347,
    "range": [
      1343,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1366,
    "end": 1372,
    "range": [
      1366,
      1372
    ]
  },
  {
    "type": "Identifier",
    "value": "define",
    "start": 1373,
    "end": 1379,
    "range": [
      1373,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1380,
    "end": 1391,
    "range": [
      1380,
      1391
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Identifier",
    "value": "instanceMembers",
    "start": 1393,
    "end": 1408,
    "range": [
      1393,
      1408
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Identifier",
    "value": "staticMembers",
    "start": 1410,
    "end": 1423,
    "range": [
      1410,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1438,
    "end": 1439,
    "range": [
      1438,
      1439
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1459,
    "end": 1467,
    "range": [
      1459,
      1467
    ]
  },
  {
    "type": "Identifier",
    "value": "mix",
    "start": 1468,
    "end": 1471,
    "range": [
      1468,
      1471
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1471,
    "end": 1472,
    "range": [
      1471,
      1472
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1472,
    "end": 1483,
    "range": [
      1472,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1485,
    "end": 1486,
    "range": [
      1485,
      1486
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1499,
    "end": 1510,
    "range": [
      1499,
      1510
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1511,
    "end": 1512,
    "range": [
      1511,
      1512
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1513,
    "end": 1524,
    "range": [
      1513,
      1524
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1525,
    "end": 1527,
    "range": [
      1525,
      1527
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1528,
    "end": 1536,
    "range": [
      1528,
      1536
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1537,
    "end": 1538,
    "range": [
      1537,
      1538
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1538,
    "end": 1539,
    "range": [
      1538,
      1539
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1540,
    "end": 1541,
    "range": [
      1540,
      1541
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1542,
    "end": 1543,
    "range": [
      1542,
      1543
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1557,
    "end": 1560,
    "range": [
      1557,
      1560
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1562,
    "end": 1563,
    "range": [
      1562,
      1563
    ]
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 1564,
    "end": 1567,
    "range": [
      1564,
      1567
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1567,
    "end": 1568,
    "range": [
      1567,
      1568
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1581,
    "end": 1584,
    "range": [
      1581,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1585,
    "end": 1586,
    "range": [
      1585,
      1586
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1588,
    "end": 1589,
    "range": [
      1588,
      1589
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1590,
    "end": 1591,
    "range": [
      1590,
      1591
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1591,
    "end": 1592,
    "range": [
      1591,
      1592
    ]
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 1593,
    "end": 1596,
    "range": [
      1593,
      1596
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1599,
    "end": 1608,
    "range": [
      1599,
      1608
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1609,
    "end": 1615,
    "range": [
      1609,
      1615
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1619,
    "end": 1620,
    "range": [
      1619,
      1620
    ]
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 1621,
    "end": 1624,
    "range": [
      1621,
      1624
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1627,
    "end": 1629,
    "range": [
      1627,
      1629
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1631,
    "end": 1632,
    "range": [
      1631,
      1632
    ]
  },
  {
    "type": "Identifier",
    "value": "initializeProperties",
    "start": 1649,
    "end": 1669,
    "range": [
      1649,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1670,
    "end": 1681,
    "range": [
      1670,
      1681
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 1682,
    "end": 1691,
    "range": [
      1682,
      1691
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1691,
    "end": 1692,
    "range": [
      1691,
      1692
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1693,
    "end": 1702,
    "range": [
      1693,
      1702
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1702,
    "end": 1703,
    "range": [
      1702,
      1703
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1704,
    "end": 1705,
    "range": [
      1704,
      1705
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1720,
    "end": 1721,
    "range": [
      1720,
      1721
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1734,
    "end": 1740,
    "range": [
      1734,
      1740
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1741,
    "end": 1752,
    "range": [
      1741,
      1752
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1752,
    "end": 1753,
    "range": [
      1752,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1762,
    "end": 1763,
    "range": [
      1762,
      1763
    ]
  }
]
```
