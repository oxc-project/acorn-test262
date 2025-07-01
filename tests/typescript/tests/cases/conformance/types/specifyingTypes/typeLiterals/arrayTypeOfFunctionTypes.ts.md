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
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 56,
                      "end": 62
                    },
                    "start": 56,
                    "end": 64
                  },
                  "start": 53,
                  "end": 64
                },
                "start": 50,
                "end": 64
              },
              "start": 48,
              "end": 64
            },
            "start": 47,
            "end": 64
          },
          "init": null,
          "definite": false,
          "start": 47,
          "end": 64
        }
      ],
      "declare": false,
      "start": 43,
      "end": 65
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 71
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 75
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 76,
              "end": 77
            },
            "optional": false,
            "computed": true,
            "start": 74,
            "end": 78
          },
          "definite": false,
          "start": 70,
          "end": 78
        }
      ],
      "declare": false,
      "start": 66,
      "end": 79
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 86
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 90
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 89,
            "end": 92
          },
          "definite": false,
          "start": 84,
          "end": 92
        }
      ],
      "declare": false,
      "start": 80,
      "end": 93
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
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 101
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 109
            },
            "typeArguments": null,
            "arguments": [],
            "start": 104,
            "end": 111
          },
          "definite": false,
          "start": 98,
          "end": 111
        }
      ],
      "declare": false,
      "start": 94,
      "end": 112
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 128,
                          "end": 134
                        },
                        "start": 126,
                        "end": 134
                      },
                      "start": 124,
                      "end": 134
                    }
                  ],
                  "start": 122,
                  "end": 136
                },
                "start": 122,
                "end": 138
              },
              "start": 120,
              "end": 138
            },
            "start": 118,
            "end": 138
          },
          "init": null,
          "definite": false,
          "start": 118,
          "end": 138
        }
      ],
      "declare": false,
      "start": 114,
      "end": 139
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 146
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x2",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 151
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 152,
              "end": 153
            },
            "optional": false,
            "computed": true,
            "start": 149,
            "end": 154
          },
          "definite": false,
          "start": 144,
          "end": 154
        }
      ],
      "declare": false,
      "start": 140,
      "end": 155
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 162
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "r3",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 167
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 165,
            "end": 169
          },
          "definite": false,
          "start": 160,
          "end": 169
        }
      ],
      "declare": false,
      "start": 156,
      "end": 170
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
            "name": "r4b",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 178
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "r3",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 187
            },
            "typeArguments": null,
            "arguments": [],
            "start": 181,
            "end": 189
          },
          "definite": false,
          "start": 175,
          "end": 189
        }
      ],
      "declare": false,
      "start": 171,
      "end": 190
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 214
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 221,
                          "end": 227
                        },
                        "start": 218,
                        "end": 227
                      },
                      "start": 215,
                      "end": 227
                    }
                  ],
                  "start": 214,
                  "end": 228
                },
                "start": 209,
                "end": 228
              },
              "start": 207,
              "end": 228
            },
            "start": 205,
            "end": 228
          },
          "init": null,
          "definite": false,
          "start": 205,
          "end": 228
        }
      ],
      "declare": false,
      "start": 201,
      "end": 229
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 236
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x2",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 241
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 242,
              "end": 243
            },
            "optional": false,
            "computed": true,
            "start": 239,
            "end": 244
          },
          "definite": false,
          "start": 234,
          "end": 244
        }
      ],
      "declare": false,
      "start": 230,
      "end": 245
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 252
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "r5",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 257
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 255,
            "end": 259
          },
          "definite": false,
          "start": 250,
          "end": 259
        }
      ],
      "declare": false,
      "start": 246,
      "end": 260
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
            "name": "r6b",
            "optional": false,
            "typeAnnotation": null,
            "start": 265,
            "end": 268
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "r5",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 277
            },
            "typeArguments": null,
            "arguments": [],
            "start": 271,
            "end": 279
          },
          "definite": false,
          "start": 265,
          "end": 279
        }
      ],
      "declare": false,
      "start": 261,
      "end": 280
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 289
}
```
