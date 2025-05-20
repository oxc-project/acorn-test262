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
      "body": {
        "type": "TSInterfaceBody",
        "start": 29,
        "end": 64,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 38,
            "end": 58,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 47,
              "decorators": [],
              "name": "compareTo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 48,
                "end": 56,
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 53,
                  "end": 56,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 55,
                    "end": 56,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 56,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 25,
        "decorators": [],
        "name": "IComparable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 25,
        "end": 28,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 26,
            "end": 27,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 70,
      "end": 137,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 91,
        "decorators": [],
        "name": "sort",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 120,
          "end": 130,
          "decorators": [],
          "name": "items",
          "optional": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 128,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
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
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 91,
        "end": 119,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 92,
            "end": 118,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 102,
              "end": 118,
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
              },
              "typeName": {
                "type": "Identifier",
                "start": 102,
                "end": 113,
                "decorators": [],
                "name": "IComparable",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 143,
      "end": 205,
      "body": {
        "type": "TSInterfaceBody",
        "start": 198,
        "end": 205,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 178,
          "end": 197,
          "expression": {
            "type": "Identifier",
            "start": 178,
            "end": 189,
            "decorators": [],
            "name": "IComparable",
            "optional": false,
            "typeAnnotation": null
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
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 169,
        "decorators": [],
        "name": "StringComparable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 237,
            "decorators": [],
            "name": "sc",
            "optional": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 235,
                    "decorators": [],
                    "name": "StringComparable",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 249,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 252,
            "end": 260,
            "arguments": [
              {
                "type": "Identifier",
                "start": 257,
                "end": 259,
                "decorators": [],
                "name": "sc",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 252,
              "end": 256,
              "decorators": [],
              "name": "sort",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
