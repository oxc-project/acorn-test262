__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 50,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 50,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 21,
            "end": 48,
            "params": [
              {
                "type": "Identifier",
                "start": 39,
                "end": 43,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 40,
                  "end": 43,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 42,
                    "end": 43,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 47,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 46,
                "end": 47,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 25,
              "end": 38,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 26,
                  "end": 37,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 36,
                    "end": 37,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 37,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
      "type": "VariableDeclaration",
      "start": 51,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 67,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 67,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 58,
                "end": 67,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 59,
                  "end": 67,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 60,
                      "end": 66
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 69,
      "end": 87,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 86,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 77,
            "end": 86,
            "arguments": [
              {
                "type": "Literal",
                "start": 83,
                "end": 85,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
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
