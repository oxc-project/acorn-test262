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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 19
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 23,
              "end": 27
            },
            "start": 21,
            "end": 27
          },
          "start": 20,
          "end": 27
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 30,
          "end": 34
        },
        "start": 28,
        "end": 34
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 35
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 55
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUndefinedKeyword",
              "start": 59,
              "end": 68
            },
            "start": 57,
            "end": 68
          },
          "start": 56,
          "end": 68
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 71,
          "end": 75
        },
        "start": 69,
        "end": 75
      },
      "body": null,
      "expression": false,
      "start": 36,
      "end": 76
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 96
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 100,
              "end": 107
            },
            "start": 98,
            "end": 107
          },
          "start": 97,
          "end": 107
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 110,
          "end": 114
        },
        "start": 108,
        "end": 114
      },
      "body": null,
      "expression": false,
      "start": 77,
      "end": 115
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 135
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 139,
              "end": 142
            },
            "start": 137,
            "end": 142
          },
          "start": 136,
          "end": 142
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 145,
          "end": 149
        },
        "start": 143,
        "end": 149
      },
      "body": null,
      "expression": false,
      "start": 116,
      "end": 150
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 163
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
              "start": 164,
              "end": 165
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 164,
            "end": 165
          }
        ],
        "start": 163,
        "end": 166
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 170
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
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
                      "start": 174,
                      "end": 175
                    },
                    "typeArguments": null,
                    "start": 174,
                    "end": 175
                  },
                  "start": 172,
                  "end": 175
                },
                "start": 171,
                "end": 175
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 178,
                "end": 182
              },
              "start": 176,
              "end": 182
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 169,
            "end": 183
          }
        ],
        "start": 167,
        "end": 185
      },
      "declare": false,
      "start": 152,
      "end": 185
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 205
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 206,
                      "end": 210
                    }
                  ],
                  "start": 205,
                  "end": 211
                },
                "start": 204,
                "end": 211
              },
              "start": 202,
              "end": 211
            },
            "start": 200,
            "end": 211
          },
          "init": null,
          "definite": false,
          "start": 200,
          "end": 211
        }
      ],
      "declare": true,
      "start": 186,
      "end": 212
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 232
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 233,
                      "end": 242
                    }
                  ],
                  "start": 232,
                  "end": 243
                },
                "start": 231,
                "end": 243
              },
              "start": 229,
              "end": 243
            },
            "start": 227,
            "end": 243
          },
          "init": null,
          "definite": false,
          "start": 227,
          "end": 243
        }
      ],
      "declare": true,
      "start": 213,
      "end": 244
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
            "name": "o3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 263,
                  "end": 264
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 265,
                      "end": 272
                    }
                  ],
                  "start": 264,
                  "end": 273
                },
                "start": 263,
                "end": 273
              },
              "start": 261,
              "end": 273
            },
            "start": 259,
            "end": 273
          },
          "init": null,
          "definite": false,
          "start": 259,
          "end": 273
        }
      ],
      "declare": true,
      "start": 245,
      "end": 274
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
            "name": "o4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 293,
                  "end": 294
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 295,
                      "end": 298
                    }
                  ],
                  "start": 294,
                  "end": 299
                },
                "start": 293,
                "end": 299
              },
              "start": 291,
              "end": 299
            },
            "start": 289,
            "end": 299
          },
          "init": null,
          "definite": false,
          "start": 289,
          "end": 299
        }
      ],
      "declare": true,
      "start": 275,
      "end": 300
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 301
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 55,
          "end": 57
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 55,
        "end": 59
      },
      "directive": null,
      "start": 55,
      "end": 60
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 63
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 65
          },
          "optional": false,
          "computed": false,
          "start": 61,
          "end": 65
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 61,
        "end": 67
      },
      "directive": null,
      "start": 61,
      "end": 68
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
          "start": 158,
          "end": 160
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 158,
        "end": 162
      },
      "directive": null,
      "start": 158,
      "end": 163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 164,
          "end": 166
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 164,
        "end": 168
      },
      "directive": null,
      "start": 164,
      "end": 169
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null,
          "start": 170,
          "end": 172
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 170,
        "end": 174
      },
      "directive": null,
      "start": 170,
      "end": 175
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 179
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 181
          },
          "optional": false,
          "computed": false,
          "start": 177,
          "end": 181
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 177,
        "end": 183
      },
      "directive": null,
      "start": 177,
      "end": 184
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
            "name": "o3",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 187
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 189
          },
          "optional": false,
          "computed": false,
          "start": 185,
          "end": 189
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 185,
        "end": 191
      },
      "directive": null,
      "start": 185,
      "end": 192
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
            "name": "o4",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 195
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 197
          },
          "optional": false,
          "computed": false,
          "start": 193,
          "end": 197
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 193,
        "end": 199
      },
      "directive": null,
      "start": 193,
      "end": 200
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 55,
  "end": 201
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 55,
          "end": 57
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 55,
        "end": 59
      },
      "directive": null,
      "start": 55,
      "end": 60
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 63
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 65
          },
          "optional": false,
          "computed": false,
          "start": 61,
          "end": 65
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 61,
        "end": 67
      },
      "directive": null,
      "start": 61,
      "end": 68
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
          "start": 95,
          "end": 97
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 95,
        "end": 99
      },
      "directive": null,
      "start": 95,
      "end": 100
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 103
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 101,
        "end": 105
      },
      "directive": null,
      "start": 101,
      "end": 106
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null,
          "start": 107,
          "end": 109
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 107,
        "end": 111
      },
      "directive": null,
      "start": 107,
      "end": 112
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 116
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 118
          },
          "optional": false,
          "computed": false,
          "start": 114,
          "end": 118
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 114,
        "end": 120
      },
      "directive": null,
      "start": 114,
      "end": 121
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
            "name": "o3",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 124
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 126
          },
          "optional": false,
          "computed": false,
          "start": 122,
          "end": 126
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 122,
        "end": 128
      },
      "directive": null,
      "start": 122,
      "end": 129
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
            "name": "o4",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 132
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 134
          },
          "optional": false,
          "computed": false,
          "start": 130,
          "end": 134
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 130,
        "end": 136
      },
      "directive": null,
      "start": 130,
      "end": 137
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 55,
  "end": 137
}
```
