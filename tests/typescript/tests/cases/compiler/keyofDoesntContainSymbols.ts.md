__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sym",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 18
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 12,
            "end": 20
          },
          "definite": false,
          "start": 6,
          "end": 20
        }
      ],
      "declare": false,
      "start": 0,
      "end": 21
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
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 31
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 34,
            "end": 35
          },
          "definite": false,
          "start": 28,
          "end": 35
        }
      ],
      "declare": false,
      "start": 22,
      "end": 36
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 54
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 56,
                  "end": 57
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 51,
                "end": 57
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 62
                },
                "value": {
                  "type": "Literal",
                  "value": "s",
                  "raw": "'s'",
                  "start": 64,
                  "end": 67
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 59,
                "end": 67
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 73
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 79
                  },
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 83,
                      "end": 84
                    },
                    "start": 83,
                    "end": 84
                  },
                  "start": 76,
                  "end": 84
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 69,
                "end": 84
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 90
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 96
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 86,
                "end": 96
              }
            ],
            "start": 49,
            "end": 98
          },
          "definite": false,
          "start": 43,
          "end": 98
        }
      ],
      "declare": false,
      "start": 37,
      "end": 99
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "set",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 113
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 116
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 125,
              "end": 131
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 115,
            "end": 131
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 134
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 149,
                  "end": 150
                },
                "typeArguments": null,
                "start": 149,
                "end": 150
              },
              "start": 143,
              "end": 150
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 133,
            "end": 150
          }
        ],
        "start": 114,
        "end": 151
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 159
              },
              "typeArguments": null,
              "start": 158,
              "end": 159
            },
            "start": 156,
            "end": 159
          },
          "start": 153,
          "end": 159
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 166,
                "end": 167
              },
              "typeArguments": null,
              "start": 166,
              "end": 167
            },
            "start": 164,
            "end": 167
          },
          "start": 161,
          "end": 167
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 177
                },
                "typeArguments": null,
                "start": 176,
                "end": 177
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 179
                },
                "typeArguments": null,
                "start": 178,
                "end": 179
              },
              "start": 176,
              "end": 180
            },
            "start": 174,
            "end": 180
          },
          "start": 169,
          "end": 180
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 184
            },
            "typeArguments": null,
            "start": 183,
            "end": 184
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 186
            },
            "typeArguments": null,
            "start": 185,
            "end": 186
          },
          "start": 183,
          "end": 187
        },
        "start": 181,
        "end": 187
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 202
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 206
                },
                "optional": false,
                "computed": true,
                "start": 199,
                "end": 207
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 215
              },
              "start": 199,
              "end": 215
            },
            "start": 192,
            "end": 216
          }
        ],
        "start": 188,
        "end": 218
      },
      "expression": false,
      "start": 101,
      "end": 218
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
            "name": "val",
            "optional": false,
            "typeAnnotation": null,
            "start": 226,
            "end": 229
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 235
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 236,
                "end": 239
              },
              {
                "type": "Literal",
                "value": "str",
                "raw": "'str'",
                "start": 241,
                "end": 246
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 248,
                "end": 250
              }
            ],
            "optional": false,
            "start": 232,
            "end": 251
          },
          "definite": false,
          "start": 226,
          "end": 251
        }
      ],
      "declare": false,
      "start": 220,
      "end": 252
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
            "name": "valB",
            "optional": false,
            "typeAnnotation": null,
            "start": 269,
            "end": 273
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 279
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 283
              },
              {
                "type": "Literal",
                "value": "num",
                "raw": "'num'",
                "start": 285,
                "end": 290
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 292,
                "end": 294
              }
            ],
            "optional": false,
            "start": 276,
            "end": 295
          },
          "definite": false,
          "start": 269,
          "end": 295
        }
      ],
      "declare": false,
      "start": 263,
      "end": 296
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
            "name": "valC",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 402
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 405,
              "end": 408
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 412
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sym",
                "optional": false,
                "typeAnnotation": null,
                "start": 414,
                "end": 417
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sym",
                "optional": false,
                "typeAnnotation": null,
                "start": 419,
                "end": 422
              }
            ],
            "optional": false,
            "start": 405,
            "end": 423
          },
          "definite": false,
          "start": 398,
          "end": 423
        }
      ],
      "declare": false,
      "start": 392,
      "end": 424
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
            "name": "valD",
            "optional": false,
            "typeAnnotation": null,
            "start": 541,
            "end": 545
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 548,
              "end": 551
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 552,
                "end": 555
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 557,
                "end": 560
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 562,
                "end": 565
              }
            ],
            "optional": false,
            "start": 548,
            "end": 566
          },
          "definite": false,
          "start": 541,
          "end": 566
        }
      ],
      "declare": false,
      "start": 535,
      "end": 567
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KeyofObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 671,
        "end": 679
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 695,
            "end": 698
          },
          "typeArguments": null,
          "start": 688,
          "end": 698
        },
        "start": 682,
        "end": 698
      },
      "declare": false,
      "start": 666,
      "end": 699
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Values",
        "optional": false,
        "typeAnnotation": null,
        "start": 722,
        "end": 728
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 729,
              "end": 730
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 729,
            "end": 730
          }
        ],
        "start": 728,
        "end": 731
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 734,
            "end": 735
          },
          "typeArguments": null,
          "start": 734,
          "end": 735
        },
        "indexType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 742,
              "end": 743
            },
            "typeArguments": null,
            "start": 742,
            "end": 743
          },
          "start": 736,
          "end": 743
        },
        "start": 734,
        "end": 744
      },
      "declare": false,
      "start": 717,
      "end": 745
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ValuesOfObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 752,
        "end": 763
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Values",
          "optional": false,
          "typeAnnotation": null,
          "start": 766,
          "end": 772
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 780,
                "end": 783
              },
              "typeArguments": null,
              "start": 773,
              "end": 783
            }
          ],
          "start": 772,
          "end": 784
        },
        "start": 766,
        "end": 784
      },
      "declare": false,
      "start": 747,
      "end": 785
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 785
}
```
