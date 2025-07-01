__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 173
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 174
              },
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 178,
                        "end": 180
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 177,
                    "end": 181
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 176,
                "end": 182
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 183
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 186,
            "end": 188
          },
          "definite": false,
          "start": 169,
          "end": 188
        }
      ],
      "declare": false,
      "start": 165,
      "end": 188
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 212,
                    "end": 214
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 215
              },
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 219,
                        "end": 221
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 218,
                    "end": 222
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 217,
                "end": 223
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 224
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 227,
            "end": 236
          },
          "definite": false,
          "start": 210,
          "end": 236
        }
      ],
      "declare": false,
      "start": 206,
      "end": 236
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b0",
                "optional": false,
                "typeAnnotation": null,
                "start": 595,
                "end": 597
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b1",
                "optional": false,
                "typeAnnotation": null,
                "start": 599,
                "end": 601
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 603,
                "end": 605
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 609,
                    "end": 615
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 617,
                    "end": 624
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 626,
                    "end": 632
                  }
                ],
                "start": 608,
                "end": 633
              },
              "start": 606,
              "end": 633
            },
            "start": 594,
            "end": 633
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 637,
                "end": 638
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 640,
                "end": 641
              },
              {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 643,
                "end": 651
              }
            ],
            "start": 636,
            "end": 652
          },
          "definite": false,
          "start": 594,
          "end": 652
        }
      ],
      "declare": false,
      "start": 590,
      "end": 653
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J",
        "optional": false,
        "typeAnnotation": null,
        "start": 674,
        "end": 675
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 684,
            "end": 689
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 690,
                  "end": 696
                },
                "typeArguments": null,
                "start": 690,
                "end": 696
              }
            ],
            "start": 689,
            "end": 697
          },
          "start": 684,
          "end": 697
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 704,
              "end": 705
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 707,
                "end": 713
              },
              "start": 705,
              "end": 713
            },
            "accessibility": null,
            "static": false,
            "start": 704,
            "end": 714
          }
        ],
        "start": 698,
        "end": 716
      },
      "declare": false,
      "start": 664,
      "end": 716
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 727,
        "end": 730
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "J",
            "optional": false,
            "typeAnnotation": null,
            "start": 734,
            "end": 735
          },
          "typeArguments": null,
          "start": 734,
          "end": 735
        },
        "start": 732,
        "end": 735
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 751,
                    "end": 757
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 759,
                    "end": 765
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 767,
                    "end": 773
                  }
                ],
                "start": 750,
                "end": 774
              },
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 776,
                    "end": 777
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 779,
                    "end": 780
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 782,
                    "end": 783
                  }
                ],
                "start": 775,
                "end": 784
              },
              "start": 749,
              "end": 784
            },
            "start": 742,
            "end": 785
          }
        ],
        "start": 736,
        "end": 787
      },
      "expression": false,
      "start": 718,
      "end": 787
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 793,
                  "end": 795
                },
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 798,
                  "end": 806
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 793,
                "end": 806
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b4",
                "optional": false,
                "typeAnnotation": null,
                "start": 808,
                "end": 810
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b5",
                "optional": false,
                "typeAnnotation": null,
                "start": 812,
                "end": 814
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 792,
            "end": 815
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 818,
              "end": 821
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 818,
            "end": 823
          },
          "definite": false,
          "start": 792,
          "end": 823
        }
      ],
      "declare": false,
      "start": 788,
      "end": 824
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
            "name": "temp",
            "optional": false,
            "typeAnnotation": null,
            "start": 1093,
            "end": 1097
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1101,
                "end": 1102
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1104,
                "end": 1105
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1107,
                "end": 1108
              }
            ],
            "start": 1100,
            "end": 1109
          },
          "definite": false,
          "start": 1093,
          "end": 1109
        }
      ],
      "declare": false,
      "start": 1089,
      "end": 1109
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c0",
                "optional": false,
                "typeAnnotation": null,
                "start": 1115,
                "end": 1117
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1119,
                "end": 1121
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1125,
                    "end": 1131
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1133,
                    "end": 1139
                  }
                ],
                "start": 1124,
                "end": 1140
              },
              "start": 1122,
              "end": 1140
            },
            "start": 1114,
            "end": 1140
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "temp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1147,
                  "end": 1151
                },
                "start": 1144,
                "end": 1151
              }
            ],
            "start": 1143,
            "end": 1152
          },
          "definite": false,
          "start": 1114,
          "end": 1152
        }
      ],
      "declare": false,
      "start": 1110,
      "end": 1153
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1169,
                "end": 1171
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1173,
                "end": 1175
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1179,
                    "end": 1185
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1187,
                    "end": 1193
                  }
                ],
                "start": 1178,
                "end": 1194
              },
              "start": 1176,
              "end": 1194
            },
            "start": 1168,
            "end": 1194
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "temp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1201,
                  "end": 1205
                },
                "start": 1198,
                "end": 1205
              }
            ],
            "start": 1197,
            "end": 1206
          },
          "definite": false,
          "start": 1168,
          "end": 1206
        }
      ],
      "declare": false,
      "start": 1164,
      "end": 1207
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 1229,
        "end": 1230
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "idx",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1243,
                    "end": 1249
                  },
                  "start": 1241,
                  "end": 1249
                },
                "start": 1238,
                "end": 1249
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1252,
                "end": 1259
              },
              "start": 1250,
              "end": 1259
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1237,
            "end": 1259
          }
        ],
        "start": 1231,
        "end": 1261
      },
      "declare": false,
      "start": 1219,
      "end": 1261
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1272,
        "end": 1275
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "idx",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1281,
              "end": 1287
            },
            "start": 1279,
            "end": 1287
          },
          "start": 1276,
          "end": 1287
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 1290,
            "end": 1291
          },
          "typeArguments": null,
          "start": 1290,
          "end": 1291
        },
        "start": 1288,
        "end": 1291
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1315,
                    "end": 1316
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1318,
                    "end": 1322
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1315,
                  "end": 1322
                }
              ],
              "start": 1305,
              "end": 1328
            },
            "start": 1298,
            "end": 1328
          }
        ],
        "start": 1292,
        "end": 1330
      },
      "expression": false,
      "start": 1263,
      "end": 1330
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1336,
                "end": 1338
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1340,
                "end": 1342
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1344,
                "end": 1346
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1335,
            "end": 1347
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1350,
              "end": 1353
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1354,
                "end": 1355
              }
            ],
            "optional": false,
            "start": 1350,
            "end": 1356
          },
          "definite": false,
          "start": 1335,
          "end": 1356
        }
      ],
      "declare": false,
      "start": 1331,
      "end": 1357
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 165,
  "end": 1367
}
```
