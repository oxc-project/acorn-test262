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
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 60,
                      "end": 66
                    },
                    "start": 60,
                    "end": 68
                  },
                  "start": 57,
                  "end": 68
                },
                "start": 50,
                "end": 68
              },
              "start": 48,
              "end": 68
            },
            "start": 47,
            "end": 68
          },
          "init": null,
          "definite": false,
          "start": 47,
          "end": 68
        }
      ],
      "declare": false,
      "start": 43,
      "end": 69
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
            "start": 74,
            "end": 75
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 79
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 80,
              "end": 81
            },
            "optional": false,
            "computed": true,
            "start": 78,
            "end": 82
          },
          "definite": false,
          "start": 74,
          "end": 82
        }
      ],
      "declare": false,
      "start": 70,
      "end": 83
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
            "start": 88,
            "end": 90
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 98
            },
            "typeArguments": null,
            "arguments": [],
            "start": 93,
            "end": 100
          },
          "definite": false,
          "start": 88,
          "end": 100
        }
      ],
      "declare": false,
      "start": 84,
      "end": 101
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
            "start": 106,
            "end": 109
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 113
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 112,
            "end": 115
          },
          "definite": false,
          "start": 106,
          "end": 115
        }
      ],
      "declare": false,
      "start": 102,
      "end": 116
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
                      "type": "TSConstructSignatureDeclaration",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 135,
                          "end": 141
                        },
                        "start": 133,
                        "end": 141
                      },
                      "start": 128,
                      "end": 141
                    }
                  ],
                  "start": 126,
                  "end": 143
                },
                "start": 126,
                "end": 145
              },
              "start": 124,
              "end": 145
            },
            "start": 122,
            "end": 145
          },
          "init": null,
          "definite": false,
          "start": 122,
          "end": 145
        }
      ],
      "declare": false,
      "start": 118,
      "end": 146
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
            "start": 151,
            "end": 153
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 157
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 158,
              "end": 159
            },
            "optional": false,
            "computed": true,
            "start": 156,
            "end": 160
          },
          "definite": false,
          "start": 151,
          "end": 160
        }
      ],
      "declare": false,
      "start": 147,
      "end": 161
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
            "start": 166,
            "end": 168
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "r3",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 177
            },
            "typeArguments": null,
            "arguments": [],
            "start": 171,
            "end": 179
          },
          "definite": false,
          "start": 166,
          "end": 179
        }
      ],
      "declare": false,
      "start": 162,
      "end": 180
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
            "start": 185,
            "end": 188
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "r3",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 197
            },
            "typeArguments": null,
            "arguments": [],
            "start": 191,
            "end": 199
          },
          "definite": false,
          "start": 185,
          "end": 199
        }
      ],
      "declare": false,
      "start": 181,
      "end": 200
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
                  "start": 210,
                  "end": 215
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 226,
                          "end": 232
                        },
                        "start": 223,
                        "end": 232
                      },
                      "start": 216,
                      "end": 232
                    }
                  ],
                  "start": 215,
                  "end": 233
                },
                "start": 210,
                "end": 233
              },
              "start": 208,
              "end": 233
            },
            "start": 206,
            "end": 233
          },
          "init": null,
          "definite": false,
          "start": 206,
          "end": 233
        }
      ],
      "declare": false,
      "start": 202,
      "end": 234
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
            "start": 239,
            "end": 241
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x2",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 246
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 247,
              "end": 248
            },
            "optional": false,
            "computed": true,
            "start": 244,
            "end": 249
          },
          "definite": false,
          "start": 239,
          "end": 249
        }
      ],
      "declare": false,
      "start": 235,
      "end": 250
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
            "start": 255,
            "end": 257
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "r5",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 266
            },
            "typeArguments": null,
            "arguments": [],
            "start": 260,
            "end": 268
          },
          "definite": false,
          "start": 255,
          "end": 268
        }
      ],
      "declare": false,
      "start": 251,
      "end": 269
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
            "start": 274,
            "end": 277
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "r5",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 282
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 280,
            "end": 284
          },
          "definite": false,
          "start": 274,
          "end": 284
        }
      ],
      "declare": false,
      "start": 270,
      "end": 285
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 285
}
```
