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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 20,
                    "end": 21
                  },
                  "typeArguments": null,
                  "start": 20,
                  "end": 21
                },
                "start": 20,
                "end": 23
              },
              "start": 19,
              "end": 23
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 24
          }
        ],
        "start": 12,
        "end": 26
      },
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 39
      },
      "typeParameters": null,
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 48,
                    "end": 49
                  },
                  "typeArguments": null,
                  "start": 48,
                  "end": 49
                },
                "start": 48,
                "end": 51
              },
              "start": 47,
              "end": 51
            },
            "accessibility": null,
            "static": false,
            "start": 46,
            "end": 52
          }
        ],
        "start": 40,
        "end": 54
      },
      "declare": false,
      "start": 28,
      "end": 54
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 66
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 70,
                "end": 71
              },
              "typeArguments": null,
              "start": 70,
              "end": 71
            },
            "start": 68,
            "end": 71
          },
          "start": 67,
          "end": 71
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 83
            },
            "start": 75,
            "end": 83
          }
        ],
        "start": 73,
        "end": 85
      },
      "expression": false,
      "start": 56,
      "end": 85
    },
    {
      "type": "EmptyStatement",
      "start": 85,
      "end": 86
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 94
                },
                "typeArguments": null,
                "start": 93,
                "end": 94
              },
              "start": 92,
              "end": 94
            },
            "start": 91,
            "end": 94
          },
          "init": null,
          "definite": false,
          "start": 91,
          "end": 94
        }
      ],
      "declare": false,
      "start": 87,
      "end": 95
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
          "start": 96,
          "end": 97
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 99
          }
        ],
        "optional": false,
        "start": 96,
        "end": 100
      },
      "directive": null,
      "start": 96,
      "end": 101
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 115
      },
      "typeParameters": null,
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 123
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 126
                },
                "typeArguments": null,
                "start": 124,
                "end": 126
              },
              "start": 123,
              "end": 126
            },
            "accessibility": null,
            "static": false,
            "start": 122,
            "end": 127
          }
        ],
        "start": 116,
        "end": 129
      },
      "declare": false,
      "start": 103,
      "end": 129
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 143
      },
      "typeParameters": null,
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 154
                },
                "typeArguments": null,
                "start": 152,
                "end": 154
              },
              "start": 151,
              "end": 154
            },
            "accessibility": null,
            "static": false,
            "start": 150,
            "end": 155
          }
        ],
        "start": 144,
        "end": 157
      },
      "declare": false,
      "start": 131,
      "end": 157
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 171
      },
      "typeParameters": null,
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 179
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 182
                },
                "typeArguments": null,
                "start": 180,
                "end": 182
              },
              "start": 179,
              "end": 182
            },
            "accessibility": null,
            "static": false,
            "start": 178,
            "end": 183
          }
        ],
        "start": 172,
        "end": 185
      },
      "declare": false,
      "start": 159,
      "end": 185
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 197
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "I1",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 203
              },
              "typeArguments": null,
              "start": 201,
              "end": 203
            },
            "start": 199,
            "end": 203
          },
          "start": 198,
          "end": 203
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 215
            },
            "start": 207,
            "end": 215
          }
        ],
        "start": 205,
        "end": 217
      },
      "expression": false,
      "start": 187,
      "end": 217
    },
    {
      "type": "EmptyStatement",
      "start": 217,
      "end": 218
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
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 228
                },
                "typeArguments": null,
                "start": 226,
                "end": 228
              },
              "start": 225,
              "end": 228
            },
            "start": 223,
            "end": 228
          },
          "init": null,
          "definite": false,
          "start": 223,
          "end": 228
        }
      ],
      "declare": false,
      "start": 219,
      "end": 229
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 230,
          "end": 231
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 234
          }
        ],
        "optional": false,
        "start": 230,
        "end": 235
      },
      "directive": null,
      "start": 230,
      "end": 236
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
            "name": "i3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 246
                },
                "typeArguments": null,
                "start": 244,
                "end": 246
              },
              "start": 243,
              "end": 246
            },
            "start": 241,
            "end": 246
          },
          "init": null,
          "definite": false,
          "start": 241,
          "end": 246
        }
      ],
      "declare": false,
      "start": 237,
      "end": 247
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 248,
          "end": 249
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "i3",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 252
          }
        ],
        "optional": false,
        "start": 248,
        "end": 253
      },
      "directive": null,
      "start": 248,
      "end": 254
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null,
        "start": 266,
        "end": 268
      },
      "typeParameters": null,
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 276
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 279
                },
                "typeArguments": null,
                "start": 277,
                "end": 279
              },
              "start": 276,
              "end": 279
            },
            "accessibility": null,
            "static": false,
            "start": 275,
            "end": 280
          }
        ],
        "start": 269,
        "end": 282
      },
      "declare": false,
      "start": 256,
      "end": 282
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I5",
        "optional": false,
        "typeAnnotation": null,
        "start": 294,
        "end": 296
      },
      "typeParameters": null,
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 304
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 305,
                  "end": 307
                },
                "typeArguments": null,
                "start": 305,
                "end": 307
              },
              "start": 304,
              "end": 307
            },
            "accessibility": null,
            "static": false,
            "start": 303,
            "end": 308
          }
        ],
        "start": 297,
        "end": 310
      },
      "declare": false,
      "start": 284,
      "end": 310
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
            "name": "i4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 319,
                  "end": 321
                },
                "typeArguments": null,
                "start": 319,
                "end": 321
              },
              "start": 318,
              "end": 321
            },
            "start": 316,
            "end": 321
          },
          "init": null,
          "definite": false,
          "start": 316,
          "end": 321
        }
      ],
      "declare": false,
      "start": 312,
      "end": 322
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 323,
          "end": 324
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "i4",
            "optional": false,
            "typeAnnotation": null,
            "start": 325,
            "end": 327
          }
        ],
        "optional": false,
        "start": 323,
        "end": 328
      },
      "directive": null,
      "start": 323,
      "end": 329
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 330
}
```
