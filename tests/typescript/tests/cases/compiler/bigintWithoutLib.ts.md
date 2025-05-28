__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 93,
  "end": 2473,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 93,
      "end": 129,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 128,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 114,
            "decorators": [],
            "name": "bigintVal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 114,
              "typeAnnotation": {
                "type": "TSBigIntKeyword",
                "start": 108,
                "end": 114
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 117,
            "end": 128,
            "callee": {
              "type": "Identifier",
              "start": 117,
              "end": 123,
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 124,
                "end": 127,
                "value": 123,
                "raw": "123"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 156,
      "expression": {
        "type": "AssignmentExpression",
        "start": 130,
        "end": 155,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 130,
          "end": 139,
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 142,
          "end": 155,
          "callee": {
            "type": "Identifier",
            "start": 142,
            "end": 148,
            "decorators": [],
            "name": "BigInt",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 149,
              "end": 154,
              "value": "456",
              "raw": "\"456\""
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 157,
      "end": 173,
      "expression": {
        "type": "NewExpression",
        "start": 157,
        "end": 172,
        "callee": {
          "type": "Identifier",
          "start": 161,
          "end": 167,
          "decorators": [],
          "name": "BigInt",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 168,
            "end": 171,
            "value": 123,
            "raw": "123"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 212,
      "expression": {
        "type": "AssignmentExpression",
        "start": 174,
        "end": 211,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 174,
          "end": 183,
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 186,
          "end": 211,
          "callee": {
            "type": "MemberExpression",
            "start": 186,
            "end": 199,
            "object": {
              "type": "Identifier",
              "start": 186,
              "end": 192,
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 193,
              "end": 199,
              "decorators": [],
              "name": "asIntN",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 200,
              "end": 201,
              "value": 8,
              "raw": "8"
            },
            {
              "type": "Literal",
              "start": 203,
              "end": 210,
              "value": null,
              "raw": "0xFFFFn",
              "bigint": "65535"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 213,
      "end": 252,
      "expression": {
        "type": "AssignmentExpression",
        "start": 213,
        "end": 251,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 213,
          "end": 222,
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 225,
          "end": 251,
          "callee": {
            "type": "MemberExpression",
            "start": 225,
            "end": 239,
            "object": {
              "type": "Identifier",
              "start": 225,
              "end": 231,
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 232,
              "end": 239,
              "decorators": [],
              "name": "asUintN",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 240,
              "end": 241,
              "value": 8,
              "raw": "8"
            },
            {
              "type": "Literal",
              "start": 243,
              "end": 250,
              "value": null,
              "raw": "0xFFFFn",
              "bigint": "65535"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 253,
      "end": 285,
      "expression": {
        "type": "AssignmentExpression",
        "start": 253,
        "end": 284,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 253,
          "end": 262,
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 265,
          "end": 284,
          "callee": {
            "type": "MemberExpression",
            "start": 265,
            "end": 282,
            "object": {
              "type": "Identifier",
              "start": 265,
              "end": 274,
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 275,
              "end": 282,
              "decorators": [],
              "name": "valueOf",
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
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 329,
      "end": 374,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 333,
          "end": 373,
          "id": {
            "type": "Identifier",
            "start": 333,
            "end": 350,
            "decorators": [],
            "name": "stringVal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 342,
              "end": 350,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 344,
                "end": 350
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 353,
            "end": 373,
            "callee": {
              "type": "MemberExpression",
              "start": 353,
              "end": 371,
              "object": {
                "type": "Identifier",
                "start": 353,
                "end": 362,
                "decorators": [],
                "name": "bigintVal",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 363,
                "end": 371,
                "decorators": [],
                "name": "toString",
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 422,
      "end": 456,
      "expression": {
        "type": "AssignmentExpression",
        "start": 422,
        "end": 455,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 422,
          "end": 431,
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 434,
          "end": 455,
          "callee": {
            "type": "MemberExpression",
            "start": 434,
            "end": 452,
            "object": {
              "type": "Identifier",
              "start": 434,
              "end": 443,
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 444,
              "end": 452,
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 453,
              "end": 454,
              "value": 2,
              "raw": "2"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 500,
      "end": 539,
      "expression": {
        "type": "AssignmentExpression",
        "start": 500,
        "end": 538,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 500,
          "end": 509,
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 512,
          "end": 538,
          "callee": {
            "type": "MemberExpression",
            "start": 512,
            "end": 536,
            "object": {
              "type": "Identifier",
              "start": 512,
              "end": 521,
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 522,
              "end": 536,
              "decorators": [],
              "name": "toLocaleString",
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 587,
      "end": 633,
      "expression": {
        "type": "AssignmentExpression",
        "start": 587,
        "end": 632,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 587,
          "end": 596,
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 599,
          "end": 632,
          "callee": {
            "type": "MemberExpression",
            "start": 599,
            "end": 623,
            "object": {
              "type": "Identifier",
              "start": 599,
              "end": 608,
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 609,
              "end": 623,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 624,
              "end": 631,
              "value": "de-DE",
              "raw": "'de-DE'"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 681,
      "end": 750,
      "expression": {
        "type": "AssignmentExpression",
        "start": 681,
        "end": 749,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 681,
          "end": 690,
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 693,
          "end": 749,
          "callee": {
            "type": "MemberExpression",
            "start": 693,
            "end": 717,
            "object": {
              "type": "Identifier",
              "start": 693,
              "end": 702,
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 703,
              "end": 717,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 718,
              "end": 725,
              "value": "de-DE",
              "raw": "'de-DE'"
            },
            {
              "type": "ObjectExpression",
              "start": 727,
              "end": 748,
              "properties": [
                {
                  "type": "Property",
                  "start": 729,
                  "end": 746,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 729,
                    "end": 734,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 736,
                    "end": 746,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 798,
      "end": 883,
      "expression": {
        "type": "AssignmentExpression",
        "start": 798,
        "end": 883,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 798,
          "end": 807,
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 810,
          "end": 883,
          "callee": {
            "type": "MemberExpression",
            "start": 810,
            "end": 834,
            "object": {
              "type": "Identifier",
              "start": 810,
              "end": 819,
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 820,
              "end": 834,
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 835,
              "end": 842,
              "value": "de-DE",
              "raw": "'de-DE'"
            },
            {
              "type": "ObjectExpression",
              "start": 844,
              "end": 882,
              "properties": [
                {
                  "type": "Property",
                  "start": 846,
                  "end": 863,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 846,
                    "end": 851,
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 853,
                    "end": 863,
                    "value": "currency",
                    "raw": "'currency'"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 865,
                  "end": 880,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 865,
                    "end": 873,
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 875,
                    "end": 880,
                    "value": "EUR",
                    "raw": "'EUR'"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 954,
      "end": 1007,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 958,
          "end": 1006,
          "id": {
            "type": "Identifier",
            "start": 958,
            "end": 984,
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 969,
              "end": 984,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 971,
                "end": 984,
                "typeName": {
                  "type": "Identifier",
                  "start": 971,
                  "end": 984,
                  "decorators": [],
                  "name": "BigInt64Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 987,
            "end": 1006,
            "callee": {
              "type": "Identifier",
              "start": 991,
              "end": 1004,
              "decorators": [],
              "name": "BigInt64Array",
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
      "start": 1008,
      "end": 1044,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1008,
        "end": 1043,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1008,
          "end": 1019,
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 1022,
          "end": 1043,
          "callee": {
            "type": "Identifier",
            "start": 1026,
            "end": 1039,
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 1040,
              "end": 1042,
              "value": 10,
              "raw": "10"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1045,
      "end": 1091,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1045,
        "end": 1090,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1045,
          "end": 1056,
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 1059,
          "end": 1090,
          "callee": {
            "type": "Identifier",
            "start": 1063,
            "end": 1076,
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "start": 1077,
              "end": 1089,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1078,
                  "end": 1080,
                  "value": null,
                  "raw": "1n",
                  "bigint": "1"
                },
                {
                  "type": "Literal",
                  "start": 1082,
                  "end": 1084,
                  "value": null,
                  "raw": "2n",
                  "bigint": "2"
                },
                {
                  "type": "Literal",
                  "start": 1086,
                  "end": 1088,
                  "value": null,
                  "raw": "3n",
                  "bigint": "3"
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1092,
      "end": 1135,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1092,
        "end": 1134,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1092,
          "end": 1103,
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 1106,
          "end": 1134,
          "callee": {
            "type": "Identifier",
            "start": 1110,
            "end": 1123,
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "start": 1124,
              "end": 1133,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1125,
                  "end": 1126,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 1128,
                  "end": 1129,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 1131,
                  "end": 1132,
                  "value": 3,
                  "raw": "3"
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1136,
      "end": 1189,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1136,
        "end": 1188,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1136,
          "end": 1147,
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 1150,
          "end": 1188,
          "callee": {
            "type": "Identifier",
            "start": 1154,
            "end": 1167,
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "start": 1168,
              "end": 1187,
              "callee": {
                "type": "Identifier",
                "start": 1172,
                "end": 1183,
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1184,
                  "end": 1186,
                  "value": 80,
                  "raw": "80"
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1190,
      "end": 1246,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1190,
        "end": 1245,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1190,
          "end": 1201,
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 1204,
          "end": 1245,
          "callee": {
            "type": "Identifier",
            "start": 1208,
            "end": 1221,
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "start": 1222,
              "end": 1241,
              "callee": {
                "type": "Identifier",
                "start": 1226,
                "end": 1237,
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1238,
                  "end": 1240,
                  "value": 80,
                  "raw": "80"
                }
              ]
            },
            {
              "type": "Literal",
              "start": 1243,
              "end": 1244,
              "value": 8,
              "raw": "8"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1247,
      "end": 1306,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1247,
        "end": 1305,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1247,
          "end": 1258,
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 1261,
          "end": 1305,
          "callee": {
            "type": "Identifier",
            "start": 1265,
            "end": 1278,
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "start": 1279,
              "end": 1298,
              "callee": {
                "type": "Identifier",
                "start": 1283,
                "end": 1294,
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1295,
                  "end": 1297,
                  "value": 80,
                  "raw": "80"
                }
              ]
            },
            {
              "type": "Literal",
              "start": 1300,
              "end": 1301,
              "value": 8,
              "raw": "8"
            },
            {
              "type": "Literal",
              "start": 1303,
              "end": 1304,
              "value": 3,
              "raw": "3"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1307,
      "end": 1344,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1311,
          "end": 1343,
          "id": {
            "type": "Identifier",
            "start": 1311,
            "end": 1322,
            "decorators": [],
            "name": "len",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1314,
              "end": 1322,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1316,
                "end": 1322
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 1325,
            "end": 1343,
            "object": {
              "type": "Identifier",
              "start": 1325,
              "end": 1336,
              "decorators": [],
              "name": "bigIntArray",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1337,
              "end": 1343,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1345,
      "end": 1369,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1345,
        "end": 1368,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1345,
          "end": 1363,
          "object": {
            "type": "Identifier",
            "start": 1345,
            "end": 1356,
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1357,
            "end": 1363,
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 1366,
          "end": 1368,
          "value": 10,
          "raw": "10"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1370,
      "end": 1421,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1374,
          "end": 1420,
          "id": {
            "type": "Identifier",
            "start": 1374,
            "end": 1406,
            "decorators": [],
            "name": "arrayBufferLike",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1389,
              "end": 1406,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1391,
                "end": 1406,
                "typeName": {
                  "type": "Identifier",
                  "start": 1391,
                  "end": 1406,
                  "decorators": [],
                  "name": "ArrayBufferView",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 1409,
            "end": 1420,
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1446,
      "end": 1502,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1450,
          "end": 1501,
          "id": {
            "type": "Identifier",
            "start": 1450,
            "end": 1478,
            "decorators": [],
            "name": "bigUintArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1462,
              "end": 1478,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1464,
                "end": 1478,
                "typeName": {
                  "type": "Identifier",
                  "start": 1464,
                  "end": 1478,
                  "decorators": [],
                  "name": "BigUint64Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 1481,
            "end": 1501,
            "callee": {
              "type": "Identifier",
              "start": 1485,
              "end": 1499,
              "decorators": [],
              "name": "BigUint64Array",
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
      "start": 1503,
      "end": 1541,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1503,
        "end": 1540,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1503,
          "end": 1515,
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 1518,
          "end": 1540,
          "callee": {
            "type": "Identifier",
            "start": 1522,
            "end": 1536,
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 1537,
              "end": 1539,
              "value": 10,
              "raw": "10"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1542,
      "end": 1590,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1542,
        "end": 1589,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1542,
          "end": 1554,
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 1557,
          "end": 1589,
          "callee": {
            "type": "Identifier",
            "start": 1561,
            "end": 1575,
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "start": 1576,
              "end": 1588,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1577,
                  "end": 1579,
                  "value": null,
                  "raw": "1n",
                  "bigint": "1"
                },
                {
                  "type": "Literal",
                  "start": 1581,
                  "end": 1583,
                  "value": null,
                  "raw": "2n",
                  "bigint": "2"
                },
                {
                  "type": "Literal",
                  "start": 1585,
                  "end": 1587,
                  "value": null,
                  "raw": "3n",
                  "bigint": "3"
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1591,
      "end": 1636,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1591,
        "end": 1635,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1591,
          "end": 1603,
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 1606,
          "end": 1635,
          "callee": {
            "type": "Identifier",
            "start": 1610,
            "end": 1624,
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "start": 1625,
              "end": 1634,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1626,
                  "end": 1627,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 1629,
                  "end": 1630,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 1632,
                  "end": 1633,
                  "value": 3,
                  "raw": "3"
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1637,
      "end": 1692,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1637,
        "end": 1691,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1637,
          "end": 1649,
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 1652,
          "end": 1691,
          "callee": {
            "type": "Identifier",
            "start": 1656,
            "end": 1670,
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "start": 1671,
              "end": 1690,
              "callee": {
                "type": "Identifier",
                "start": 1675,
                "end": 1686,
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1687,
                  "end": 1689,
                  "value": 80,
                  "raw": "80"
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1693,
      "end": 1751,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1693,
        "end": 1750,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1693,
          "end": 1705,
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 1708,
          "end": 1750,
          "callee": {
            "type": "Identifier",
            "start": 1712,
            "end": 1726,
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "start": 1727,
              "end": 1746,
              "callee": {
                "type": "Identifier",
                "start": 1731,
                "end": 1742,
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1743,
                  "end": 1745,
                  "value": 80,
                  "raw": "80"
                }
              ]
            },
            {
              "type": "Literal",
              "start": 1748,
              "end": 1749,
              "value": 8,
              "raw": "8"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1752,
      "end": 1813,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1752,
        "end": 1812,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1752,
          "end": 1764,
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 1767,
          "end": 1812,
          "callee": {
            "type": "Identifier",
            "start": 1771,
            "end": 1785,
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "start": 1786,
              "end": 1805,
              "callee": {
                "type": "Identifier",
                "start": 1790,
                "end": 1801,
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1802,
                  "end": 1804,
                  "value": 80,
                  "raw": "80"
                }
              ]
            },
            {
              "type": "Literal",
              "start": 1807,
              "end": 1808,
              "value": 8,
              "raw": "8"
            },
            {
              "type": "Literal",
              "start": 1810,
              "end": 1811,
              "value": 3,
              "raw": "3"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1814,
      "end": 1839,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1814,
        "end": 1838,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1814,
          "end": 1817,
          "decorators": [],
          "name": "len",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 1820,
          "end": 1838,
          "object": {
            "type": "Identifier",
            "start": 1820,
            "end": 1831,
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1832,
            "end": 1838,
            "decorators": [],
            "name": "length",
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
      "type": "ExpressionStatement",
      "start": 1840,
      "end": 1864,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1840,
        "end": 1863,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1840,
          "end": 1858,
          "object": {
            "type": "Identifier",
            "start": 1840,
            "end": 1851,
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1852,
            "end": 1858,
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 1861,
          "end": 1863,
          "value": 10,
          "raw": "10"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1865,
      "end": 1895,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1865,
        "end": 1894,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1865,
          "end": 1880,
          "decorators": [],
          "name": "arrayBufferLike",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1883,
          "end": 1894,
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1928,
      "end": 1979,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1934,
          "end": 1978,
          "id": {
            "type": "Identifier",
            "start": 1934,
            "end": 1942,
            "decorators": [],
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1945,
            "end": 1978,
            "callee": {
              "type": "Identifier",
              "start": 1949,
              "end": 1957,
              "decorators": [],
              "name": "DataView",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 1958,
                "end": 1977,
                "callee": {
                  "type": "Identifier",
                  "start": 1962,
                  "end": 1973,
                  "decorators": [],
                  "name": "ArrayBuffer",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 1974,
                    "end": 1976,
                    "value": 80,
                    "raw": "80"
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
      "start": 1980,
      "end": 2009,
      "expression": {
        "type": "CallExpression",
        "start": 1980,
        "end": 2008,
        "callee": {
          "type": "MemberExpression",
          "start": 1980,
          "end": 2000,
          "object": {
            "type": "Identifier",
            "start": 1980,
            "end": 1988,
            "decorators": [],
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1989,
            "end": 2000,
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2001,
            "end": 2002,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "UnaryExpression",
            "start": 2004,
            "end": 2007,
            "operator": "-",
            "argument": {
              "type": "Literal",
              "start": 2005,
              "end": 2007,
              "value": null,
              "raw": "1n",
              "bigint": "1"
            },
            "prefix": true
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2010,
      "end": 2045,
      "expression": {
        "type": "CallExpression",
        "start": 2010,
        "end": 2044,
        "callee": {
          "type": "MemberExpression",
          "start": 2010,
          "end": 2030,
          "object": {
            "type": "Identifier",
            "start": 2010,
            "end": 2018,
            "decorators": [],
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2019,
            "end": 2030,
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2031,
            "end": 2032,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "UnaryExpression",
            "start": 2034,
            "end": 2037,
            "operator": "-",
            "argument": {
              "type": "Literal",
              "start": 2035,
              "end": 2037,
              "value": null,
              "raw": "1n",
              "bigint": "1"
            },
            "prefix": true
          },
          {
            "type": "Literal",
            "start": 2039,
            "end": 2043,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2046,
      "end": 2074,
      "expression": {
        "type": "CallExpression",
        "start": 2046,
        "end": 2073,
        "callee": {
          "type": "MemberExpression",
          "start": 2046,
          "end": 2066,
          "object": {
            "type": "Identifier",
            "start": 2046,
            "end": 2054,
            "decorators": [],
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2055,
            "end": 2066,
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2067,
            "end": 2068,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "UnaryExpression",
            "start": 2070,
            "end": 2072,
            "operator": "-",
            "argument": {
              "type": "Literal",
              "start": 2071,
              "end": 2072,
              "value": 1,
              "raw": "1"
            },
            "prefix": true
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2075,
      "end": 2106,
      "expression": {
        "type": "CallExpression",
        "start": 2075,
        "end": 2105,
        "callee": {
          "type": "MemberExpression",
          "start": 2075,
          "end": 2096,
          "object": {
            "type": "Identifier",
            "start": 2075,
            "end": 2083,
            "decorators": [],
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2084,
            "end": 2096,
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2097,
            "end": 2098,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 2100,
            "end": 2104,
            "value": null,
            "raw": "123n",
            "bigint": "123"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2107,
      "end": 2144,
      "expression": {
        "type": "CallExpression",
        "start": 2107,
        "end": 2143,
        "callee": {
          "type": "MemberExpression",
          "start": 2107,
          "end": 2128,
          "object": {
            "type": "Identifier",
            "start": 2107,
            "end": 2115,
            "decorators": [],
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2116,
            "end": 2128,
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2129,
            "end": 2130,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 2132,
            "end": 2136,
            "value": null,
            "raw": "123n",
            "bigint": "123"
          },
          {
            "type": "Literal",
            "start": 2138,
            "end": 2142,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2145,
      "end": 2175,
      "expression": {
        "type": "CallExpression",
        "start": 2145,
        "end": 2174,
        "callee": {
          "type": "MemberExpression",
          "start": 2145,
          "end": 2166,
          "object": {
            "type": "Identifier",
            "start": 2145,
            "end": 2153,
            "decorators": [],
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2154,
            "end": 2166,
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2167,
            "end": 2168,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 2170,
            "end": 2173,
            "value": 123,
            "raw": "123"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2176,
      "end": 2212,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2176,
        "end": 2211,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2176,
          "end": 2185,
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2188,
          "end": 2211,
          "callee": {
            "type": "MemberExpression",
            "start": 2188,
            "end": 2208,
            "object": {
              "type": "Identifier",
              "start": 2188,
              "end": 2196,
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 2197,
              "end": 2208,
              "decorators": [],
              "name": "getBigInt64",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 2209,
              "end": 2210,
              "value": 1,
              "raw": "1"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2213,
      "end": 2255,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2213,
        "end": 2254,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2213,
          "end": 2222,
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2225,
          "end": 2254,
          "callee": {
            "type": "MemberExpression",
            "start": 2225,
            "end": 2245,
            "object": {
              "type": "Identifier",
              "start": 2225,
              "end": 2233,
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 2234,
              "end": 2245,
              "decorators": [],
              "name": "getBigInt64",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 2246,
              "end": 2247,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 2249,
              "end": 2253,
              "value": true,
              "raw": "true"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2256,
      "end": 2293,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2256,
        "end": 2292,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2256,
          "end": 2265,
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2268,
          "end": 2292,
          "callee": {
            "type": "MemberExpression",
            "start": 2268,
            "end": 2289,
            "object": {
              "type": "Identifier",
              "start": 2268,
              "end": 2276,
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 2277,
              "end": 2289,
              "decorators": [],
              "name": "getBigUint64",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 2290,
              "end": 2291,
              "value": 2,
              "raw": "2"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2294,
      "end": 2337,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2294,
        "end": 2336,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2294,
          "end": 2303,
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 2306,
          "end": 2336,
          "callee": {
            "type": "MemberExpression",
            "start": 2306,
            "end": 2327,
            "object": {
              "type": "Identifier",
              "start": 2306,
              "end": 2314,
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 2315,
              "end": 2327,
              "decorators": [],
              "name": "getBigUint64",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 2328,
              "end": 2329,
              "value": 2,
              "raw": "2"
            },
            {
              "type": "Literal",
              "start": 2331,
              "end": 2335,
              "value": true,
              "raw": "true"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2384,
      "end": 2426,
      "expression": {
        "type": "CallExpression",
        "start": 2384,
        "end": 2425,
        "callee": {
          "type": "MemberExpression",
          "start": 2384,
          "end": 2418,
          "object": {
            "type": "NewExpression",
            "start": 2384,
            "end": 2411,
            "callee": {
              "type": "MemberExpression",
              "start": 2388,
              "end": 2405,
              "object": {
                "type": "Identifier",
                "start": 2388,
                "end": 2392,
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2393,
                "end": 2405,
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 2406,
                "end": 2410,
                "value": "fr",
                "raw": "\"fr\""
              }
            ]
          },
          "property": {
            "type": "Identifier",
            "start": 2412,
            "end": 2418,
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 2419,
            "end": 2424,
            "value": null,
            "raw": "3000n",
            "bigint": "3000"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2427,
      "end": 2473,
      "expression": {
        "type": "CallExpression",
        "start": 2427,
        "end": 2472,
        "callee": {
          "type": "MemberExpression",
          "start": 2427,
          "end": 2461,
          "object": {
            "type": "NewExpression",
            "start": 2427,
            "end": 2454,
            "callee": {
              "type": "MemberExpression",
              "start": 2431,
              "end": 2448,
              "object": {
                "type": "Identifier",
                "start": 2431,
                "end": 2435,
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2436,
                "end": 2448,
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 2449,
                "end": 2453,
                "value": "fr",
                "raw": "\"fr\""
              }
            ]
          },
          "property": {
            "type": "Identifier",
            "start": 2455,
            "end": 2461,
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 2462,
            "end": 2471,
            "decorators": [],
            "name": "bigintVal",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
