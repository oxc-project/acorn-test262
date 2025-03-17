__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 4,
  "end": 261,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 4,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 25,
        "name": "IComparable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 25,
        "end": 28,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 26,
            "end": 27,
            "name": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 29,
        "end": 64,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 38,
            "end": 58,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 47,
              "name": "compareTo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 48,
                "end": 56,
                "name": "other",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 53,
                  "end": 56,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 55,
                    "end": 56,
                    "typeName": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 56,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 70,
      "end": 137,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 91,
        "name": "sort",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 120,
          "end": 130,
          "name": "items",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 125,
            "end": 130,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 127,
              "end": 130,
              "elementType": {
                "type": "TSTypeReference",
                "start": 127,
                "end": 128,
                "typeName": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 128,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 91,
        "end": 119,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 92,
            "end": 118,
            "name": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 102,
              "end": 118,
              "typeName": {
                "type": "Identifier",
                "start": 102,
                "end": 113,
                "name": "IComparable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 113,
                "end": 118,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 114,
                    "end": 117
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 131,
        "end": 136,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 133,
          "end": 136,
          "elementType": {
            "type": "TSTypeReference",
            "start": 133,
            "end": 134,
            "typeName": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 143,
      "end": 205,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 169,
        "name": "StringComparable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 178,
          "end": 197,
          "expression": {
            "type": "Identifier",
            "start": 178,
            "end": 189,
            "name": "IComparable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 189,
            "end": 197,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 190,
                "end": 196
              }
            ]
          }
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 198,
        "end": 205,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 211,
      "end": 238,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 237,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 237,
            "name": "sc",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 237,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 219,
                "end": 237,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 219,
                  "end": 235,
                  "typeName": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 235,
                    "name": "StringComparable",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 261,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 260,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 249,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 252,
            "end": 260,
            "callee": {
              "type": "Identifier",
              "start": 252,
              "end": 256,
              "name": "sort",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 257,
                "end": 259,
                "name": "sc",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
