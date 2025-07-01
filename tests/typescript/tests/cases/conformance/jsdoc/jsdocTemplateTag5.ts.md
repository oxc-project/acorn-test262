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
        "name": "Multimap",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 121
      },
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 216,
                  "end": 220
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 221,
                  "end": 225
                },
                "optional": false,
                "computed": false,
                "start": 216,
                "end": 225
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 228,
                "end": 230
              },
              "start": 216,
              "end": 230
            },
            "directive": null,
            "start": 216,
            "end": 231
          }
        ],
        "start": 124,
        "end": 233
      },
      "expression": false,
      "start": 104,
      "end": 233
    },
    {
      "type": "EmptyStatement",
      "start": 233,
      "end": 234
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
            "name": "Multimap",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 244
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 254
          },
          "optional": false,
          "computed": false,
          "start": 236,
          "end": 254
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 348
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
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 352
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 371,
                            "end": 375
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_map",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 376,
                            "end": 380
                          },
                          "optional": false,
                          "computed": false,
                          "start": 371,
                          "end": 380
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 381,
                            "end": 384
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 387,
                            "end": 389
                          },
                          "start": 381,
                          "end": 389
                        },
                        "optional": false,
                        "computed": true,
                        "start": 371,
                        "end": 390
                      },
                      "start": 364,
                      "end": 391
                    }
                  ],
                  "start": 354,
                  "end": 397
                },
                "expression": false,
                "start": 348,
                "end": 397
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 345,
              "end": 397
            }
          ],
          "start": 257,
          "end": 399
        },
        "start": 236,
        "end": 399
      },
      "directive": null,
      "start": 236,
      "end": 399
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
            "name": "Multimap2",
            "optional": false,
            "typeAnnotation": null,
            "start": 504,
            "end": 513
          },
          "init": {
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
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 619,
                        "end": 623
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_map",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 624,
                        "end": 628
                      },
                      "optional": false,
                      "computed": false,
                      "start": 619,
                      "end": 628
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 631,
                      "end": 633
                    },
                    "start": 619,
                    "end": 633
                  },
                  "directive": null,
                  "start": 619,
                  "end": 634
                }
              ],
              "start": 527,
              "end": 636
            },
            "expression": false,
            "start": 516,
            "end": 636
          },
          "definite": false,
          "start": 504,
          "end": 636
        }
      ],
      "declare": false,
      "start": 500,
      "end": 637
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
            "name": "Multimap2",
            "optional": false,
            "typeAnnotation": null,
            "start": 639,
            "end": 648
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 649,
            "end": 658
          },
          "optional": false,
          "computed": false,
          "start": 639,
          "end": 658
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 749,
                "end": 752
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
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 763,
                    "end": 766
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 785,
                            "end": 789
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_map",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 790,
                            "end": 794
                          },
                          "optional": false,
                          "computed": false,
                          "start": 785,
                          "end": 794
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 795,
                            "end": 798
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 801,
                            "end": 803
                          },
                          "start": 795,
                          "end": 803
                        },
                        "optional": false,
                        "computed": true,
                        "start": 785,
                        "end": 804
                      },
                      "start": 778,
                      "end": 805
                    }
                  ],
                  "start": 768,
                  "end": 811
                },
                "expression": false,
                "start": 754,
                "end": 811
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 749,
              "end": 811
            }
          ],
          "start": 661,
          "end": 813
        },
        "start": 639,
        "end": 813
      },
      "directive": null,
      "start": 639,
      "end": 813
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
            "name": "Ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 819,
            "end": 821
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 824,
            "end": 826
          },
          "definite": false,
          "start": 819,
          "end": 826
        }
      ],
      "declare": false,
      "start": 815,
      "end": 827
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
            "name": "Ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 946,
            "end": 948
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Multimap3",
            "optional": false,
            "typeAnnotation": null,
            "start": 949,
            "end": 958
          },
          "optional": false,
          "computed": false,
          "start": 946,
          "end": 958
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
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 1064,
                      "end": 1068
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1069,
                      "end": 1073
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1064,
                    "end": 1073
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 1076,
                    "end": 1078
                  },
                  "start": 1064,
                  "end": 1078
                },
                "directive": null,
                "start": 1064,
                "end": 1079
              }
            ],
            "start": 972,
            "end": 1081
          },
          "expression": false,
          "start": 961,
          "end": 1081
        },
        "start": 946,
        "end": 1081
      },
      "directive": null,
      "start": 946,
      "end": 1082
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
              "name": "Ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 1084,
              "end": 1086
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Multimap3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1087,
              "end": 1096
            },
            "optional": false,
            "computed": false,
            "start": 1084,
            "end": 1096
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 1097,
            "end": 1106
          },
          "optional": false,
          "computed": false,
          "start": 1084,
          "end": 1106
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 1197,
                "end": 1200
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
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1201,
                    "end": 1204
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1223,
                            "end": 1227
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_map",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1228,
                            "end": 1232
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1223,
                          "end": 1232
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1233,
                            "end": 1236
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 1239,
                            "end": 1241
                          },
                          "start": 1233,
                          "end": 1241
                        },
                        "optional": false,
                        "computed": true,
                        "start": 1223,
                        "end": 1242
                      },
                      "start": 1216,
                      "end": 1243
                    }
                  ],
                  "start": 1206,
                  "end": 1249
                },
                "expression": false,
                "start": 1200,
                "end": 1249
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1197,
              "end": 1249
            }
          ],
          "start": 1109,
          "end": 1251
        },
        "start": 1084,
        "end": 1251
      },
      "directive": null,
      "start": 1084,
      "end": 1251
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 104,
  "end": 1252
}
```
