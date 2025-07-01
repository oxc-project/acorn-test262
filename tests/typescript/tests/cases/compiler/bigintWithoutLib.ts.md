__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigintVal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBigIntKeyword",
                "start": 108,
                "end": 114
              },
              "start": 106,
              "end": 114
            },
            "start": 97,
            "end": 114
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 123
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 124,
                "end": 127
              }
            ],
            "optional": false,
            "start": 117,
            "end": 128
          },
          "definite": false,
          "start": 97,
          "end": 128
        }
      ],
      "declare": false,
      "start": 93,
      "end": 129
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 130,
          "end": 139
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 148
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "456",
              "raw": "\"456\"",
              "start": 149,
              "end": 154
            }
          ],
          "optional": false,
          "start": 142,
          "end": 155
        },
        "start": 130,
        "end": 155
      },
      "directive": null,
      "start": 130,
      "end": 156
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "BigInt",
          "optional": false,
          "typeAnnotation": null,
          "start": 161,
          "end": 167
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 168,
            "end": 171
          }
        ],
        "start": 157,
        "end": 172
      },
      "directive": null,
      "start": 157,
      "end": 173
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 174,
          "end": 183
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 192
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "asIntN",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 199
            },
            "optional": false,
            "computed": false,
            "start": 186,
            "end": 199
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 200,
              "end": 201
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "0xFFFFn",
              "bigint": "65535",
              "start": 203,
              "end": 210
            }
          ],
          "optional": false,
          "start": 186,
          "end": 211
        },
        "start": 174,
        "end": 211
      },
      "directive": null,
      "start": 174,
      "end": 212
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 213,
          "end": 222
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 231
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "asUintN",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 239
            },
            "optional": false,
            "computed": false,
            "start": 225,
            "end": 239
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 240,
              "end": 241
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "0xFFFFn",
              "bigint": "65535",
              "start": 243,
              "end": 250
            }
          ],
          "optional": false,
          "start": 225,
          "end": 251
        },
        "start": 213,
        "end": 251
      },
      "directive": null,
      "start": 213,
      "end": 252
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 253,
          "end": 262
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 274
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "valueOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 282
            },
            "optional": false,
            "computed": false,
            "start": 265,
            "end": 282
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 265,
          "end": 284
        },
        "start": 253,
        "end": 284
      },
      "directive": null,
      "start": 253,
      "end": 285
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringVal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 344,
                "end": 350
              },
              "start": 342,
              "end": 350
            },
            "start": 333,
            "end": 350
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigintVal",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 362
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 371
              },
              "optional": false,
              "computed": false,
              "start": 353,
              "end": 371
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 353,
            "end": 373
          },
          "definite": false,
          "start": 333,
          "end": 373
        }
      ],
      "declare": false,
      "start": 329,
      "end": 374
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 422,
          "end": 431
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 434,
              "end": 443
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 444,
              "end": 452
            },
            "optional": false,
            "computed": false,
            "start": 434,
            "end": 452
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 453,
              "end": 454
            }
          ],
          "optional": false,
          "start": 434,
          "end": 455
        },
        "start": 422,
        "end": 455
      },
      "directive": null,
      "start": 422,
      "end": 456
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 500,
          "end": 509
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 512,
              "end": 521
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 522,
              "end": 536
            },
            "optional": false,
            "computed": false,
            "start": 512,
            "end": 536
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 512,
          "end": 538
        },
        "start": 500,
        "end": 538
      },
      "directive": null,
      "start": 500,
      "end": 539
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 587,
          "end": 596
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 599,
              "end": 608
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 609,
              "end": 623
            },
            "optional": false,
            "computed": false,
            "start": 599,
            "end": 623
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "de-DE",
              "raw": "'de-DE'",
              "start": 624,
              "end": 631
            }
          ],
          "optional": false,
          "start": 599,
          "end": 632
        },
        "start": 587,
        "end": 632
      },
      "directive": null,
      "start": 587,
      "end": 633
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 681,
          "end": 690
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 693,
              "end": 702
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 703,
              "end": 717
            },
            "optional": false,
            "computed": false,
            "start": 693,
            "end": 717
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "de-DE",
              "raw": "'de-DE'",
              "start": 718,
              "end": 725
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
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 729,
                    "end": 734
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 736,
                    "end": 746
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 729,
                  "end": 746
                }
              ],
              "start": 727,
              "end": 748
            }
          ],
          "optional": false,
          "start": 693,
          "end": 749
        },
        "start": 681,
        "end": 749
      },
      "directive": null,
      "start": 681,
      "end": 750
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 798,
          "end": 807
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 810,
              "end": 819
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 820,
              "end": 834
            },
            "optional": false,
            "computed": false,
            "start": 810,
            "end": 834
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "de-DE",
              "raw": "'de-DE'",
              "start": 835,
              "end": 842
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
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 846,
                    "end": 851
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 853,
                    "end": 863
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 846,
                  "end": 863
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 865,
                    "end": 873
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 875,
                    "end": 880
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 865,
                  "end": 880
                }
              ],
              "start": 844,
              "end": 882
            }
          ],
          "optional": false,
          "start": 810,
          "end": 883
        },
        "start": 798,
        "end": 883
      },
      "directive": null,
      "start": 798,
      "end": 883
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt64Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 971,
                  "end": 984
                },
                "typeArguments": null,
                "start": 971,
                "end": 984
              },
              "start": 969,
              "end": 984
            },
            "start": 958,
            "end": 984
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 991,
              "end": 1004
            },
            "typeArguments": null,
            "arguments": [],
            "start": 987,
            "end": 1006
          },
          "definite": false,
          "start": 958,
          "end": 1006
        }
      ],
      "declare": false,
      "start": 954,
      "end": 1007
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1008,
          "end": 1019
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1026,
            "end": 1039
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 1040,
              "end": 1042
            }
          ],
          "start": 1022,
          "end": 1043
        },
        "start": 1008,
        "end": 1043
      },
      "directive": null,
      "start": 1008,
      "end": 1044
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1045,
          "end": 1056
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1063,
            "end": 1076
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "1n",
                  "bigint": "1",
                  "start": 1078,
                  "end": 1080
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "2n",
                  "bigint": "2",
                  "start": 1082,
                  "end": 1084
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "3n",
                  "bigint": "3",
                  "start": 1086,
                  "end": 1088
                }
              ],
              "start": 1077,
              "end": 1089
            }
          ],
          "start": 1059,
          "end": 1090
        },
        "start": 1045,
        "end": 1090
      },
      "directive": null,
      "start": 1045,
      "end": 1091
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1092,
          "end": 1103
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1110,
            "end": 1123
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1125,
                  "end": 1126
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1128,
                  "end": 1129
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1131,
                  "end": 1132
                }
              ],
              "start": 1124,
              "end": 1133
            }
          ],
          "start": 1106,
          "end": 1134
        },
        "start": 1092,
        "end": 1134
      },
      "directive": null,
      "start": 1092,
      "end": 1135
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1136,
          "end": 1147
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1154,
            "end": 1167
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1172,
                "end": 1183
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 1184,
                  "end": 1186
                }
              ],
              "start": 1168,
              "end": 1187
            }
          ],
          "start": 1150,
          "end": 1188
        },
        "start": 1136,
        "end": 1188
      },
      "directive": null,
      "start": 1136,
      "end": 1189
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1190,
          "end": 1201
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1208,
            "end": 1221
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1226,
                "end": 1237
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 1238,
                  "end": 1240
                }
              ],
              "start": 1222,
              "end": 1241
            },
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 1243,
              "end": 1244
            }
          ],
          "start": 1204,
          "end": 1245
        },
        "start": 1190,
        "end": 1245
      },
      "directive": null,
      "start": 1190,
      "end": 1246
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1247,
          "end": 1258
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1265,
            "end": 1278
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1283,
                "end": 1294
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 1295,
                  "end": 1297
                }
              ],
              "start": 1279,
              "end": 1298
            },
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 1300,
              "end": 1301
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 1303,
              "end": 1304
            }
          ],
          "start": 1261,
          "end": 1305
        },
        "start": 1247,
        "end": 1305
      },
      "directive": null,
      "start": 1247,
      "end": 1306
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "len",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1316,
                "end": 1322
              },
              "start": 1314,
              "end": 1322
            },
            "start": 1311,
            "end": 1322
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1325,
              "end": 1336
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 1337,
              "end": 1343
            },
            "optional": false,
            "computed": false,
            "start": 1325,
            "end": 1343
          },
          "definite": false,
          "start": 1311,
          "end": 1343
        }
      ],
      "declare": false,
      "start": 1307,
      "end": 1344
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
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 1345,
            "end": 1356
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null,
            "start": 1357,
            "end": 1363
          },
          "optional": false,
          "computed": false,
          "start": 1345,
          "end": 1363
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 1366,
          "end": 1368
        },
        "start": 1345,
        "end": 1368
      },
      "directive": null,
      "start": 1345,
      "end": 1369
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arrayBufferLike",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArrayBufferView",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1391,
                  "end": 1406
                },
                "typeArguments": null,
                "start": 1391,
                "end": 1406
              },
              "start": 1389,
              "end": 1406
            },
            "start": 1374,
            "end": 1406
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 1409,
            "end": 1420
          },
          "definite": false,
          "start": 1374,
          "end": 1420
        }
      ],
      "declare": false,
      "start": 1370,
      "end": 1421
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigUintArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigUint64Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1464,
                  "end": 1478
                },
                "typeArguments": null,
                "start": 1464,
                "end": 1478
              },
              "start": 1462,
              "end": 1478
            },
            "start": 1450,
            "end": 1478
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigUint64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1485,
              "end": 1499
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1481,
            "end": 1501
          },
          "definite": false,
          "start": 1450,
          "end": 1501
        }
      ],
      "declare": false,
      "start": 1446,
      "end": 1502
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1503,
          "end": 1515
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1522,
            "end": 1536
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 1537,
              "end": 1539
            }
          ],
          "start": 1518,
          "end": 1540
        },
        "start": 1503,
        "end": 1540
      },
      "directive": null,
      "start": 1503,
      "end": 1541
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1542,
          "end": 1554
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1561,
            "end": 1575
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "1n",
                  "bigint": "1",
                  "start": 1577,
                  "end": 1579
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "2n",
                  "bigint": "2",
                  "start": 1581,
                  "end": 1583
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "3n",
                  "bigint": "3",
                  "start": 1585,
                  "end": 1587
                }
              ],
              "start": 1576,
              "end": 1588
            }
          ],
          "start": 1557,
          "end": 1589
        },
        "start": 1542,
        "end": 1589
      },
      "directive": null,
      "start": 1542,
      "end": 1590
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1591,
          "end": 1603
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1610,
            "end": 1624
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1626,
                  "end": 1627
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1629,
                  "end": 1630
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1632,
                  "end": 1633
                }
              ],
              "start": 1625,
              "end": 1634
            }
          ],
          "start": 1606,
          "end": 1635
        },
        "start": 1591,
        "end": 1635
      },
      "directive": null,
      "start": 1591,
      "end": 1636
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1637,
          "end": 1649
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1656,
            "end": 1670
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1675,
                "end": 1686
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 1687,
                  "end": 1689
                }
              ],
              "start": 1671,
              "end": 1690
            }
          ],
          "start": 1652,
          "end": 1691
        },
        "start": 1637,
        "end": 1691
      },
      "directive": null,
      "start": 1637,
      "end": 1692
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1693,
          "end": 1705
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1712,
            "end": 1726
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1731,
                "end": 1742
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 1743,
                  "end": 1745
                }
              ],
              "start": 1727,
              "end": 1746
            },
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 1748,
              "end": 1749
            }
          ],
          "start": 1708,
          "end": 1750
        },
        "start": 1693,
        "end": 1750
      },
      "directive": null,
      "start": 1693,
      "end": 1751
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1752,
          "end": 1764
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1771,
            "end": 1785
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1790,
                "end": 1801
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 1802,
                  "end": 1804
                }
              ],
              "start": 1786,
              "end": 1805
            },
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 1807,
              "end": 1808
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 1810,
              "end": 1811
            }
          ],
          "start": 1767,
          "end": 1812
        },
        "start": 1752,
        "end": 1812
      },
      "directive": null,
      "start": 1752,
      "end": 1813
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "len",
          "optional": false,
          "typeAnnotation": null,
          "start": 1814,
          "end": 1817
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 1820,
            "end": 1831
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null,
            "start": 1832,
            "end": 1838
          },
          "optional": false,
          "computed": false,
          "start": 1820,
          "end": 1838
        },
        "start": 1814,
        "end": 1838
      },
      "directive": null,
      "start": 1814,
      "end": 1839
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
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 1840,
            "end": 1851
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null,
            "start": 1852,
            "end": 1858
          },
          "optional": false,
          "computed": false,
          "start": 1840,
          "end": 1858
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 1861,
          "end": 1863
        },
        "start": 1840,
        "end": 1863
      },
      "directive": null,
      "start": 1840,
      "end": 1864
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arrayBufferLike",
          "optional": false,
          "typeAnnotation": null,
          "start": 1865,
          "end": 1880
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1883,
          "end": 1894
        },
        "start": 1865,
        "end": 1894
      },
      "directive": null,
      "start": 1865,
      "end": 1895
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 1934,
            "end": 1942
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "DataView",
              "optional": false,
              "typeAnnotation": null,
              "start": 1949,
              "end": 1957
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArrayBuffer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1962,
                  "end": 1973
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 80,
                    "raw": "80",
                    "start": 1974,
                    "end": 1976
                  }
                ],
                "start": 1958,
                "end": 1977
              }
            ],
            "start": 1945,
            "end": 1978
          },
          "definite": false,
          "start": 1934,
          "end": 1978
        }
      ],
      "declare": false,
      "start": 1928,
      "end": 1979
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 1980,
            "end": 1988
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "typeAnnotation": null,
            "start": 1989,
            "end": 2000
          },
          "optional": false,
          "computed": false,
          "start": 1980,
          "end": 2000
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 2001,
            "end": 2002
          },
          {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "1n",
              "bigint": "1",
              "start": 2005,
              "end": 2007
            },
            "prefix": true,
            "start": 2004,
            "end": 2007
          }
        ],
        "optional": false,
        "start": 1980,
        "end": 2008
      },
      "directive": null,
      "start": 1980,
      "end": 2009
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 2010,
            "end": 2018
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "typeAnnotation": null,
            "start": 2019,
            "end": 2030
          },
          "optional": false,
          "computed": false,
          "start": 2010,
          "end": 2030
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 2031,
            "end": 2032
          },
          {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "1n",
              "bigint": "1",
              "start": 2035,
              "end": 2037
            },
            "prefix": true,
            "start": 2034,
            "end": 2037
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 2039,
            "end": 2043
          }
        ],
        "optional": false,
        "start": 2010,
        "end": 2044
      },
      "directive": null,
      "start": 2010,
      "end": 2045
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 2046,
            "end": 2054
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "typeAnnotation": null,
            "start": 2055,
            "end": 2066
          },
          "optional": false,
          "computed": false,
          "start": 2046,
          "end": 2066
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 2067,
            "end": 2068
          },
          {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 2071,
              "end": 2072
            },
            "prefix": true,
            "start": 2070,
            "end": 2072
          }
        ],
        "optional": false,
        "start": 2046,
        "end": 2073
      },
      "directive": null,
      "start": 2046,
      "end": 2074
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 2075,
            "end": 2083
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "typeAnnotation": null,
            "start": 2084,
            "end": 2096
          },
          "optional": false,
          "computed": false,
          "start": 2075,
          "end": 2096
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 2097,
            "end": 2098
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "123n",
            "bigint": "123",
            "start": 2100,
            "end": 2104
          }
        ],
        "optional": false,
        "start": 2075,
        "end": 2105
      },
      "directive": null,
      "start": 2075,
      "end": 2106
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 2107,
            "end": 2115
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "typeAnnotation": null,
            "start": 2116,
            "end": 2128
          },
          "optional": false,
          "computed": false,
          "start": 2107,
          "end": 2128
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 2129,
            "end": 2130
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "123n",
            "bigint": "123",
            "start": 2132,
            "end": 2136
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 2138,
            "end": 2142
          }
        ],
        "optional": false,
        "start": 2107,
        "end": 2143
      },
      "directive": null,
      "start": 2107,
      "end": 2144
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 2145,
            "end": 2153
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "typeAnnotation": null,
            "start": 2154,
            "end": 2166
          },
          "optional": false,
          "computed": false,
          "start": 2145,
          "end": 2166
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 2167,
            "end": 2168
          },
          {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 2170,
            "end": 2173
          }
        ],
        "optional": false,
        "start": 2145,
        "end": 2174
      },
      "directive": null,
      "start": 2145,
      "end": 2175
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 2176,
          "end": 2185
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null,
              "start": 2188,
              "end": 2196
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBigInt64",
              "optional": false,
              "typeAnnotation": null,
              "start": 2197,
              "end": 2208
            },
            "optional": false,
            "computed": false,
            "start": 2188,
            "end": 2208
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 2209,
              "end": 2210
            }
          ],
          "optional": false,
          "start": 2188,
          "end": 2211
        },
        "start": 2176,
        "end": 2211
      },
      "directive": null,
      "start": 2176,
      "end": 2212
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 2213,
          "end": 2222
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null,
              "start": 2225,
              "end": 2233
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBigInt64",
              "optional": false,
              "typeAnnotation": null,
              "start": 2234,
              "end": 2245
            },
            "optional": false,
            "computed": false,
            "start": 2225,
            "end": 2245
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 2246,
              "end": 2247
            },
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2249,
              "end": 2253
            }
          ],
          "optional": false,
          "start": 2225,
          "end": 2254
        },
        "start": 2213,
        "end": 2254
      },
      "directive": null,
      "start": 2213,
      "end": 2255
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 2256,
          "end": 2265
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null,
              "start": 2268,
              "end": 2276
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBigUint64",
              "optional": false,
              "typeAnnotation": null,
              "start": 2277,
              "end": 2289
            },
            "optional": false,
            "computed": false,
            "start": 2268,
            "end": 2289
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 2290,
              "end": 2291
            }
          ],
          "optional": false,
          "start": 2268,
          "end": 2292
        },
        "start": 2256,
        "end": 2292
      },
      "directive": null,
      "start": 2256,
      "end": 2293
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 2294,
          "end": 2303
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null,
              "start": 2306,
              "end": 2314
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBigUint64",
              "optional": false,
              "typeAnnotation": null,
              "start": 2315,
              "end": 2327
            },
            "optional": false,
            "computed": false,
            "start": 2306,
            "end": 2327
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 2328,
              "end": 2329
            },
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2331,
              "end": 2335
            }
          ],
          "optional": false,
          "start": 2306,
          "end": 2336
        },
        "start": 2294,
        "end": 2336
      },
      "directive": null,
      "start": 2294,
      "end": 2337
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 2388,
                "end": 2392
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 2393,
                "end": 2405
              },
              "optional": false,
              "computed": false,
              "start": 2388,
              "end": 2405
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "fr",
                "raw": "\"fr\"",
                "start": 2406,
                "end": 2410
              }
            ],
            "start": 2384,
            "end": 2411
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null,
            "start": 2412,
            "end": 2418
          },
          "optional": false,
          "computed": false,
          "start": 2384,
          "end": 2418
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "3000n",
            "bigint": "3000",
            "start": 2419,
            "end": 2424
          }
        ],
        "optional": false,
        "start": 2384,
        "end": 2425
      },
      "directive": null,
      "start": 2384,
      "end": 2426
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 2431,
                "end": 2435
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 2436,
                "end": 2448
              },
              "optional": false,
              "computed": false,
              "start": 2431,
              "end": 2448
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "fr",
                "raw": "\"fr\"",
                "start": 2449,
                "end": 2453
              }
            ],
            "start": 2427,
            "end": 2454
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null,
            "start": 2455,
            "end": 2461
          },
          "optional": false,
          "computed": false,
          "start": 2427,
          "end": 2461
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "bigintVal",
            "optional": false,
            "typeAnnotation": null,
            "start": 2462,
            "end": 2471
          }
        ],
        "optional": false,
        "start": 2427,
        "end": 2472
      },
      "directive": null,
      "start": 2427,
      "end": 2473
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 93,
  "end": 2473
}
```
