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
        "name": "IComparable",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 25
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
              "start": 26,
              "end": 27
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 26,
            "end": 27
          }
        ],
        "start": 25,
        "end": 28
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
              "name": "compareTo",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 47
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "other",
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
                      "start": 55,
                      "end": 56
                    },
                    "typeArguments": null,
                    "start": 55,
                    "end": 56
                  },
                  "start": 53,
                  "end": 56
                },
                "start": 48,
                "end": 56
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 38,
            "end": 58
          }
        ],
        "start": 29,
        "end": 64
      },
      "declare": false,
      "start": 4,
      "end": 64
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "sort",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 91
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 93
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IComparable",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 113
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 114,
                    "end": 117
                  }
                ],
                "start": 113,
                "end": 118
              },
              "start": 102,
              "end": 118
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 92,
            "end": 118
          }
        ],
        "start": 91,
        "end": 119
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 128
                },
                "typeArguments": null,
                "start": 127,
                "end": 128
              },
              "start": 127,
              "end": 130
            },
            "start": 125,
            "end": 130
          },
          "start": 120,
          "end": 130
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 134
            },
            "typeArguments": null,
            "start": 133,
            "end": 134
          },
          "start": 133,
          "end": 136
        },
        "start": 131,
        "end": 136
      },
      "body": null,
      "expression": false,
      "start": 70,
      "end": 137
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringComparable",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 169
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IComparable",
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 189
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 190,
                "end": 196
              }
            ],
            "start": 189,
            "end": 197
          },
          "start": 178,
          "end": 197
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 198,
        "end": 205
      },
      "declare": false,
      "start": 143,
      "end": 205
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
            "name": "sc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringComparable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 235
                  },
                  "typeArguments": null,
                  "start": 219,
                  "end": 235
                },
                "start": 219,
                "end": 237
              },
              "start": 217,
              "end": 237
            },
            "start": 215,
            "end": 237
          },
          "init": null,
          "definite": false,
          "start": 215,
          "end": 237
        }
      ],
      "declare": false,
      "start": 211,
      "end": 238
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
            "typeAnnotation": null,
            "start": 248,
            "end": 249
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "sort",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 256
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sc",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 259
              }
            ],
            "optional": false,
            "start": 252,
            "end": 260
          },
          "definite": false,
          "start": 248,
          "end": 260
        }
      ],
      "declare": false,
      "start": 244,
      "end": 261
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 4,
  "end": 261
}
```
