callExpressionWithTypeParameterConstrainedToOuterTypeParameter.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 46,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 46,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 21,
            "end": 44,
            "params": [
              {
                "type": "Identifier",
                "start": 35,
                "end": 39,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 36,
                  "end": 39,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 38,
                    "end": 39,
                    "typeName": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 43,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 42,
                "end": 43,
                "typeName": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 43,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 21,
              "end": 34,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 22,
                  "end": 33,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 32,
                    "end": 33,
                    "typeName": {
                      "type": "Identifier",
                      "start": 32,
                      "end": 33,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 23,
                    "decorators": [],
                    "name": "U",
                    "optional": false
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
        "optional": false
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 63,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 63,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 63,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 54,
                "end": 63,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 55,
                  "end": 63,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 56,
                      "end": 62
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
                  "decorators": [],
                  "name": "I",
                  "optional": false
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
      "start": 65,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 78,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 73,
            "end": 78,
            "arguments": [
              {
                "type": "Literal",
                "start": 75,
                "end": 77,
                "raw": "\"\"",
                "value": ""
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
