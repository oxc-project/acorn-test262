__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f0",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 19
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 20,
              "end": 21
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 21
          }
        ],
        "start": 19,
        "end": 22
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
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
                "start": 27,
                "end": 28
              },
              "typeArguments": null,
              "start": 27,
              "end": 28
            },
            "start": 25,
            "end": 28
          },
          "start": 23,
          "end": 28
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 32
          },
          "typeArguments": null,
          "start": 31,
          "end": 32
        },
        "start": 29,
        "end": 32
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 53
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 54,
              "end": 55
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 54,
            "end": 55
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 58
            },
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 61,
              "end": 67
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 57,
            "end": 67
          }
        ],
        "start": 53,
        "end": 68
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
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
                "start": 73,
                "end": 74
              },
              "typeArguments": null,
              "start": 73,
              "end": 74
            },
            "start": 71,
            "end": 74
          },
          "start": 69,
          "end": 74
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 79
              },
              "typeArguments": null,
              "start": 78,
              "end": 79
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 82
              },
              "typeArguments": null,
              "start": 81,
              "end": 82
            }
          ],
          "start": 77,
          "end": 83
        },
        "start": 75,
        "end": 83
      },
      "body": null,
      "expression": false,
      "start": 34,
      "end": 84
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C0",
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 101
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
              "start": 102,
              "end": 103
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 102,
            "end": 103
          }
        ],
        "start": 101,
        "end": 104
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 112
            },
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
                  "start": 114,
                  "end": 115
                },
                "typeArguments": null,
                "start": 114,
                "end": 115
              },
              "start": 112,
              "end": 115
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 111,
            "end": 116
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 132
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": true,
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
                        "start": 137,
                        "end": 138
                      },
                      "typeArguments": null,
                      "start": 137,
                      "end": 138
                    },
                    "start": 135,
                    "end": 138
                  },
                  "start": 133,
                  "end": 138
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 132,
              "end": 140
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 121,
            "end": 140
          }
        ],
        "start": 105,
        "end": 142
      },
      "abstract": false,
      "declare": true,
      "start": 85,
      "end": 142
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 159
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
              "start": 160,
              "end": 161
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 160,
            "end": 161
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 164
            },
            "constraint": null,
            "default": {
              "type": "TSNumberKeyword",
              "start": 167,
              "end": 173
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 163,
            "end": 173
          }
        ],
        "start": 159,
        "end": 174
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 185,
                      "end": 186
                    },
                    "typeArguments": null,
                    "start": 185,
                    "end": 186
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 188,
                      "end": 189
                    },
                    "typeArguments": null,
                    "start": 188,
                    "end": 189
                  }
                ],
                "start": 184,
                "end": 190
              },
              "start": 182,
              "end": 190
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 181,
            "end": 191
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 207
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": true,
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
                        "start": 212,
                        "end": 213
                      },
                      "typeArguments": null,
                      "start": 212,
                      "end": 213
                    },
                    "start": 210,
                    "end": 213
                  },
                  "start": 208,
                  "end": 213
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 207,
              "end": 215
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 196,
            "end": 215
          }
        ],
        "start": 175,
        "end": 217
      },
      "abstract": false,
      "declare": true,
      "start": 143,
      "end": 217
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 217
}
```
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
            "name": "f0_v0",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 11
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f0",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 16
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 14,
            "end": 18
          },
          "definite": false,
          "start": 6,
          "end": 18
        }
      ],
      "declare": false,
      "start": 0,
      "end": 19
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
            "name": "f0_v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 31
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f0",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 36
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 37,
                "end": 38
              }
            ],
            "optional": false,
            "start": 34,
            "end": 39
          },
          "definite": false,
          "start": 26,
          "end": 39
        }
      ],
      "declare": false,
      "start": 20,
      "end": 40
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
            "name": "f1_c0",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 53
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 58
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 56,
            "end": 60
          },
          "definite": false,
          "start": 48,
          "end": 60
        }
      ],
      "declare": false,
      "start": 42,
      "end": 61
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
            "name": "f1_c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 73
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 78
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 79,
                "end": 80
              }
            ],
            "optional": false,
            "start": 76,
            "end": 81
          },
          "definite": false,
          "start": 68,
          "end": 81
        }
      ],
      "declare": false,
      "start": 62,
      "end": 82
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
            "name": "C0_v0",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 95
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C0",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 104
            },
            "typeArguments": null,
            "arguments": [],
            "start": 98,
            "end": 106
          },
          "definite": false,
          "start": 90,
          "end": 106
        }
      ],
      "declare": false,
      "start": 84,
      "end": 107
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
            "name": "C0_v0_y",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 121
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C0_v0",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 129
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 131
            },
            "optional": false,
            "computed": false,
            "start": 124,
            "end": 131
          },
          "definite": false,
          "start": 114,
          "end": 131
        }
      ],
      "declare": false,
      "start": 108,
      "end": 132
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
            "name": "C0_v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 145
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C0",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 154
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 155,
                "end": 156
              }
            ],
            "start": 148,
            "end": 157
          },
          "definite": false,
          "start": 140,
          "end": 157
        }
      ],
      "declare": false,
      "start": 134,
      "end": 158
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
            "name": "C0_v1_y",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 172
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C0_v1",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 180
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "optional": false,
            "computed": false,
            "start": 175,
            "end": 182
          },
          "definite": false,
          "start": 165,
          "end": 182
        }
      ],
      "declare": false,
      "start": 159,
      "end": 183
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
            "name": "C1_v0",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 196
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 205
            },
            "typeArguments": null,
            "arguments": [],
            "start": 199,
            "end": 207
          },
          "definite": false,
          "start": 191,
          "end": 207
        }
      ],
      "declare": false,
      "start": 185,
      "end": 208
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
            "name": "C1_v0_y",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 222
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1_v0",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 230
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 232
            },
            "optional": false,
            "computed": false,
            "start": 225,
            "end": 232
          },
          "definite": false,
          "start": 215,
          "end": 232
        }
      ],
      "declare": false,
      "start": 209,
      "end": 233
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
            "name": "C1_v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 246
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 255
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 256,
                "end": 257
              }
            ],
            "start": 249,
            "end": 258
          },
          "definite": false,
          "start": 241,
          "end": 258
        }
      ],
      "declare": false,
      "start": 235,
      "end": 259
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
            "name": "C1_v1_y",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 273
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1_v1",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 281
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 283
            },
            "optional": false,
            "computed": false,
            "start": 276,
            "end": 283
          },
          "definite": false,
          "start": 266,
          "end": 283
        }
      ],
      "declare": false,
      "start": 260,
      "end": 284
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C0_B0",
        "optional": false,
        "typeAnnotation": null,
        "start": 292,
        "end": 297
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C0",
        "optional": false,
        "typeAnnotation": null,
        "start": 306,
        "end": 308
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 309,
        "end": 311
      },
      "abstract": false,
      "declare": false,
      "start": 286,
      "end": 311
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C0_B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 323
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C0",
        "optional": false,
        "typeAnnotation": null,
        "start": 332,
        "end": 334
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 341,
              "end": 352
            },
            "value": {
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 365,
                        "end": 370
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 365,
                      "end": 372
                    },
                    "directive": null,
                    "start": 365,
                    "end": 373
                  }
                ],
                "start": 355,
                "end": 379
              },
              "expression": false,
              "start": 352,
              "end": 379
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 341,
            "end": 379
          }
        ],
        "start": 335,
        "end": 381
      },
      "abstract": false,
      "declare": false,
      "start": 312,
      "end": 381
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C0_B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 388,
        "end": 393
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C0",
        "optional": false,
        "typeAnnotation": null,
        "start": 402,
        "end": 404
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 411,
              "end": 422
            },
            "value": {
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 435,
                        "end": 440
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 441,
                          "end": 442
                        }
                      ],
                      "optional": false,
                      "start": 435,
                      "end": 443
                    },
                    "directive": null,
                    "start": 435,
                    "end": 444
                  }
                ],
                "start": 425,
                "end": 450
              },
              "expression": false,
              "start": 422,
              "end": 450
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 411,
            "end": 450
          }
        ],
        "start": 405,
        "end": 452
      },
      "abstract": false,
      "declare": false,
      "start": 382,
      "end": 452
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
            "name": "C0_B0_v0",
            "optional": false,
            "typeAnnotation": null,
            "start": 460,
            "end": 468
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C0_B0",
              "optional": false,
              "typeAnnotation": null,
              "start": 475,
              "end": 480
            },
            "typeArguments": null,
            "arguments": [],
            "start": 471,
            "end": 482
          },
          "definite": false,
          "start": 460,
          "end": 482
        }
      ],
      "declare": false,
      "start": 454,
      "end": 483
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
            "name": "C0_B0_v0_y",
            "optional": false,
            "typeAnnotation": null,
            "start": 490,
            "end": 500
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C0_B0_v0",
              "optional": false,
              "typeAnnotation": null,
              "start": 503,
              "end": 511
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 512,
              "end": 513
            },
            "optional": false,
            "computed": false,
            "start": 503,
            "end": 513
          },
          "definite": false,
          "start": 490,
          "end": 513
        }
      ],
      "declare": false,
      "start": 484,
      "end": 514
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
            "name": "C0_B0_v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 522,
            "end": 530
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C0_B0",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 542
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 543,
                "end": 544
              }
            ],
            "start": 533,
            "end": 545
          },
          "definite": false,
          "start": 522,
          "end": 545
        }
      ],
      "declare": false,
      "start": 516,
      "end": 546
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
            "name": "C0_B0_v1_y",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 563
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C0_B0_v1",
              "optional": false,
              "typeAnnotation": null,
              "start": 566,
              "end": 574
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 575,
              "end": 576
            },
            "optional": false,
            "computed": false,
            "start": 566,
            "end": 576
          },
          "definite": false,
          "start": 553,
          "end": 576
        }
      ],
      "declare": false,
      "start": 547,
      "end": 577
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
            "name": "C0_B1_v0",
            "optional": false,
            "typeAnnotation": null,
            "start": 585,
            "end": 593
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C0_B1",
              "optional": false,
              "typeAnnotation": null,
              "start": 600,
              "end": 605
            },
            "typeArguments": null,
            "arguments": [],
            "start": 596,
            "end": 607
          },
          "definite": false,
          "start": 585,
          "end": 607
        }
      ],
      "declare": false,
      "start": 579,
      "end": 608
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
            "name": "C0_B1_v0_y",
            "optional": false,
            "typeAnnotation": null,
            "start": 615,
            "end": 625
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C0_B1_v0",
              "optional": false,
              "typeAnnotation": null,
              "start": 628,
              "end": 636
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 637,
              "end": 638
            },
            "optional": false,
            "computed": false,
            "start": 628,
            "end": 638
          },
          "definite": false,
          "start": 615,
          "end": 638
        }
      ],
      "declare": false,
      "start": 609,
      "end": 639
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
            "name": "C0_B2_v0",
            "optional": false,
            "typeAnnotation": null,
            "start": 647,
            "end": 655
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C0_B2",
              "optional": false,
              "typeAnnotation": null,
              "start": 662,
              "end": 667
            },
            "typeArguments": null,
            "arguments": [],
            "start": 658,
            "end": 669
          },
          "definite": false,
          "start": 647,
          "end": 669
        }
      ],
      "declare": false,
      "start": 641,
      "end": 670
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
            "name": "C0_B2_v0_y",
            "optional": false,
            "typeAnnotation": null,
            "start": 677,
            "end": 687
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C0_B2_v0",
              "optional": false,
              "typeAnnotation": null,
              "start": 690,
              "end": 698
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 700
            },
            "optional": false,
            "computed": false,
            "start": 690,
            "end": 700
          },
          "definite": false,
          "start": 677,
          "end": 700
        }
      ],
      "declare": false,
      "start": 671,
      "end": 701
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1_B0",
        "optional": false,
        "typeAnnotation": null,
        "start": 709,
        "end": 714
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 723,
        "end": 725
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 726,
        "end": 728
      },
      "abstract": false,
      "declare": false,
      "start": 703,
      "end": 728
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1_B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 735,
        "end": 740
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 749,
        "end": 751
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 758,
              "end": 769
            },
            "value": {
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 782,
                        "end": 787
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 782,
                      "end": 789
                    },
                    "directive": null,
                    "start": 782,
                    "end": 790
                  }
                ],
                "start": 772,
                "end": 796
              },
              "expression": false,
              "start": 769,
              "end": 796
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 758,
            "end": 796
          }
        ],
        "start": 752,
        "end": 798
      },
      "abstract": false,
      "declare": false,
      "start": 729,
      "end": 798
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1_B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 805,
        "end": 810
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 819,
        "end": 821
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 828,
              "end": 839
            },
            "value": {
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 852,
                        "end": 857
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 858,
                          "end": 859
                        }
                      ],
                      "optional": false,
                      "start": 852,
                      "end": 860
                    },
                    "directive": null,
                    "start": 852,
                    "end": 861
                  }
                ],
                "start": 842,
                "end": 867
              },
              "expression": false,
              "start": 839,
              "end": 867
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 828,
            "end": 867
          }
        ],
        "start": 822,
        "end": 869
      },
      "abstract": false,
      "declare": false,
      "start": 799,
      "end": 869
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
            "name": "C1_B0_v0",
            "optional": false,
            "typeAnnotation": null,
            "start": 877,
            "end": 885
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1_B0",
              "optional": false,
              "typeAnnotation": null,
              "start": 892,
              "end": 897
            },
            "typeArguments": null,
            "arguments": [],
            "start": 888,
            "end": 899
          },
          "definite": false,
          "start": 877,
          "end": 899
        }
      ],
      "declare": false,
      "start": 871,
      "end": 900
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
            "name": "C1_B0_v0_y",
            "optional": false,
            "typeAnnotation": null,
            "start": 907,
            "end": 917
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1_B0_v0",
              "optional": false,
              "typeAnnotation": null,
              "start": 920,
              "end": 928
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 929,
              "end": 930
            },
            "optional": false,
            "computed": false,
            "start": 920,
            "end": 930
          },
          "definite": false,
          "start": 907,
          "end": 930
        }
      ],
      "declare": false,
      "start": 901,
      "end": 931
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
            "name": "C1_B0_v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 939,
            "end": 947
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1_B0",
              "optional": false,
              "typeAnnotation": null,
              "start": 954,
              "end": 959
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 960,
                "end": 961
              }
            ],
            "start": 950,
            "end": 962
          },
          "definite": false,
          "start": 939,
          "end": 962
        }
      ],
      "declare": false,
      "start": 933,
      "end": 963
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
            "name": "C1_B0_v1_y",
            "optional": false,
            "typeAnnotation": null,
            "start": 970,
            "end": 980
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1_B0_v1",
              "optional": false,
              "typeAnnotation": null,
              "start": 983,
              "end": 991
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 992,
              "end": 993
            },
            "optional": false,
            "computed": false,
            "start": 983,
            "end": 993
          },
          "definite": false,
          "start": 970,
          "end": 993
        }
      ],
      "declare": false,
      "start": 964,
      "end": 994
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
            "name": "C1_B1_v0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1002,
            "end": 1010
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1_B1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1017,
              "end": 1022
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1013,
            "end": 1024
          },
          "definite": false,
          "start": 1002,
          "end": 1024
        }
      ],
      "declare": false,
      "start": 996,
      "end": 1025
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
            "name": "C1_B1_v0_y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1032,
            "end": 1042
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1_B1_v0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1045,
              "end": 1053
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1054,
              "end": 1055
            },
            "optional": false,
            "computed": false,
            "start": 1045,
            "end": 1055
          },
          "definite": false,
          "start": 1032,
          "end": 1055
        }
      ],
      "declare": false,
      "start": 1026,
      "end": 1056
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
            "name": "C1_B2_v0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1064,
            "end": 1072
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1_B2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1079,
              "end": 1084
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1075,
            "end": 1086
          },
          "definite": false,
          "start": 1064,
          "end": 1086
        }
      ],
      "declare": false,
      "start": 1058,
      "end": 1087
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
            "name": "C1_B2_v0_y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1094,
            "end": 1104
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1_B2_v0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1107,
              "end": 1115
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1116,
              "end": 1117
            },
            "optional": false,
            "computed": false,
            "start": 1107,
            "end": 1117
          },
          "definite": false,
          "start": 1094,
          "end": 1117
        }
      ],
      "declare": false,
      "start": 1088,
      "end": 1118
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1118
}
```
