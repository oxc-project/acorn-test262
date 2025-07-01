__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Pair",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 17
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 17
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 21
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 21
          }
        ],
        "start": 14,
        "end": 22
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "first",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 32,
                  "end": 34
                },
                "typeArguments": null,
                "start": 32,
                "end": 34
              },
              "start": 30,
              "end": 34
            },
            "accessibility": null,
            "static": false,
            "start": 25,
            "end": 35
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "second",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 42
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 44,
                  "end": 46
                },
                "typeArguments": null,
                "start": 44,
                "end": 46
              },
              "start": 42,
              "end": 46
            },
            "accessibility": null,
            "static": false,
            "start": 36,
            "end": 47
          }
        ],
        "start": 23,
        "end": 49
      },
      "declare": false,
      "start": 0,
      "end": 49
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Pair",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 61
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 62,
                      "end": 68
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 70,
                      "end": 76
                    }
                  ],
                  "start": 61,
                  "end": 77
                },
                "start": 57,
                "end": 77
              },
              "start": 55,
              "end": 77
            },
            "start": 54,
            "end": 77
          },
          "init": null,
          "definite": false,
          "start": 54,
          "end": 77
        }
      ],
      "declare": false,
      "start": 50,
      "end": 77
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "first",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 87,
                      "end": 92
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 94,
                        "end": 100
                      },
                      "start": 92,
                      "end": 100
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 87,
                    "end": 101
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "second",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 108
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 110,
                        "end": 116
                      },
                      "start": 108,
                      "end": 116
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 102,
                    "end": 117
                  }
                ],
                "start": 85,
                "end": 119
              },
              "start": 83,
              "end": 119
            },
            "start": 82,
            "end": 119
          },
          "init": null,
          "definite": false,
          "start": 82,
          "end": 119
        }
      ],
      "declare": false,
      "start": 78,
      "end": 119
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 121,
          "end": 122
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 125,
          "end": 126
        },
        "start": 121,
        "end": 126
      },
      "directive": null,
      "start": 121,
      "end": 127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 128,
          "end": 129
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 132,
          "end": 133
        },
        "start": 128,
        "end": 133
      },
      "directive": null,
      "start": 128,
      "end": 134
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 154
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
              "start": 155,
              "end": 156
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 155,
            "end": 156
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 159
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 158,
            "end": 159
          }
        ],
        "start": 154,
        "end": 160
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pair",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 168
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 170
                    },
                    "typeArguments": null,
                    "start": 169,
                    "end": 170
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 172,
                      "end": 173
                    },
                    "typeArguments": null,
                    "start": 172,
                    "end": 173
                  }
                ],
                "start": 168,
                "end": 174
              },
              "start": 164,
              "end": 174
            },
            "start": 162,
            "end": 174
          },
          "start": 161,
          "end": 174
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 136,
      "end": 176
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 196
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
              "start": 197,
              "end": 198
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 197,
            "end": 198
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 201
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 200,
            "end": 201
          }
        ],
        "start": 196,
        "end": 202
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "first",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 208,
                    "end": 213
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
                        "start": 215,
                        "end": 216
                      },
                      "typeArguments": null,
                      "start": 215,
                      "end": 216
                    },
                    "start": 213,
                    "end": 216
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 208,
                  "end": 217
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "second",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 218,
                    "end": 224
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 226,
                        "end": 227
                      },
                      "typeArguments": null,
                      "start": 226,
                      "end": 227
                    },
                    "start": 224,
                    "end": 227
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 218,
                  "end": 228
                }
              ],
              "start": 206,
              "end": 230
            },
            "start": 204,
            "end": 230
          },
          "start": 203,
          "end": 230
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 177,
      "end": 232
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 234,
          "end": 235
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 237
          }
        ],
        "optional": false,
        "start": 234,
        "end": 238
      },
      "directive": null,
      "start": 234,
      "end": 239
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 240,
          "end": 241
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 243
          }
        ],
        "optional": false,
        "start": 240,
        "end": 244
      },
      "directive": null,
      "start": 240,
      "end": 245
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 246,
          "end": 248
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 250
          }
        ],
        "optional": false,
        "start": 246,
        "end": 251
      },
      "directive": null,
      "start": 246,
      "end": 252
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 253,
          "end": 255
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 256,
            "end": 257
          }
        ],
        "optional": false,
        "start": 253,
        "end": 258
      },
      "directive": null,
      "start": 253,
      "end": 259
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 259
}
```
