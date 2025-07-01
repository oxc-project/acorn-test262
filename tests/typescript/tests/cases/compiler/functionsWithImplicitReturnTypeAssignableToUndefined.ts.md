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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 15,
          "end": 22
        },
        "start": 13,
        "end": 22
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 33,
                    "end": 37
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 38,
                    "end": 44
                  },
                  "optional": false,
                  "computed": false,
                  "start": 33,
                  "end": 44
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 33,
                "end": 46
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 49,
                "end": 52
              },
              "start": 33,
              "end": 52
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 61,
                "end": 65
              },
              "start": 54,
              "end": 66
            },
            "alternate": null,
            "start": 29,
            "end": 66
          }
        ],
        "start": 23,
        "end": 140
      },
      "expression": false,
      "start": 0,
      "end": 140
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyUnknown",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 156
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnknownKeyword",
        "start": 159,
        "end": 166
      },
      "declare": false,
      "start": 142,
      "end": 167
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 177,
        "end": 179
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 183,
          "end": 190
        },
        "start": 181,
        "end": 190
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 201,
                    "end": 205
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 206,
                    "end": 212
                  },
                  "optional": false,
                  "computed": false,
                  "start": 201,
                  "end": 212
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 201,
                "end": 214
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 217,
                "end": 220
              },
              "start": 201,
              "end": 220
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 229,
                "end": 233
              },
              "start": 222,
              "end": 234
            },
            "alternate": null,
            "start": 197,
            "end": 234
          }
        ],
        "start": 191,
        "end": 308
      },
      "expression": false,
      "start": 168,
      "end": 308
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 319,
        "end": 321
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 325,
          "end": 328
        },
        "start": 323,
        "end": 328
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 329,
        "end": 399
      },
      "expression": false,
      "start": 310,
      "end": 399
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 410,
        "end": 412
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 416,
          "end": 420
        },
        "start": 414,
        "end": 420
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 421,
        "end": 492
      },
      "expression": false,
      "start": 401,
      "end": 492
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 503,
        "end": 505
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 509,
          "end": 511
        },
        "start": 507,
        "end": 511
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 522,
                    "end": 526
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 527,
                    "end": 533
                  },
                  "optional": false,
                  "computed": false,
                  "start": 522,
                  "end": 533
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 522,
                "end": 535
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 538,
                "end": 541
              },
              "start": 522,
              "end": 541
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 550,
                "end": 552
              },
              "start": 543,
              "end": 553
            },
            "alternate": null,
            "start": 518,
            "end": 553
          }
        ],
        "start": 512,
        "end": 648
      },
      "expression": false,
      "start": 494,
      "end": 648
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 659,
        "end": 661
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
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 665,
            "end": 671
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 672,
                "end": 678
              },
              {
                "type": "TSAnyKeyword",
                "start": 680,
                "end": 683
              }
            ],
            "start": 671,
            "end": 684
          },
          "start": 665,
          "end": 684
        },
        "start": 663,
        "end": 684
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 695,
                    "end": 699
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 700,
                    "end": 706
                  },
                  "optional": false,
                  "computed": false,
                  "start": 695,
                  "end": 706
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 695,
                "end": 708
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 711,
                "end": 714
              },
              "start": 695,
              "end": 714
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 725,
                      "end": 730
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 732,
                      "end": 736
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 725,
                    "end": 736
                  }
                ],
                "start": 723,
                "end": 738
              },
              "start": 716,
              "end": 739
            },
            "alternate": null,
            "start": 691,
            "end": 739
          }
        ],
        "start": 685,
        "end": 873
      },
      "expression": false,
      "start": 650,
      "end": 873
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 884,
        "end": 886
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNullKeyword",
          "start": 890,
          "end": 894
        },
        "start": 888,
        "end": 894
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 905,
                    "end": 909
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 910,
                    "end": 916
                  },
                  "optional": false,
                  "computed": false,
                  "start": 905,
                  "end": 916
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 905,
                "end": 918
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 921,
                "end": 924
              },
              "start": 905,
              "end": 924
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 933,
                "end": 937
              },
              "start": 926,
              "end": 938
            },
            "alternate": null,
            "start": 901,
            "end": 938
          }
        ],
        "start": 895,
        "end": 1031
      },
      "expression": false,
      "start": 875,
      "end": 1031
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1042,
        "end": 1044
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 1048,
              "end": 1054
            },
            {
              "type": "TSNullKeyword",
              "start": 1057,
              "end": 1061
            }
          ],
          "start": 1048,
          "end": 1061
        },
        "start": 1046,
        "end": 1061
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1072,
                    "end": 1076
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1077,
                    "end": 1083
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1072,
                  "end": 1083
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1072,
                "end": 1085
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 1088,
                "end": 1091
              },
              "start": 1072,
              "end": 1091
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 1100,
                "end": 1105
              },
              "start": 1093,
              "end": 1106
            },
            "alternate": null,
            "start": 1068,
            "end": 1106
          }
        ],
        "start": 1062,
        "end": 1199
      },
      "expression": false,
      "start": 1033,
      "end": 1199
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1199
}
```
