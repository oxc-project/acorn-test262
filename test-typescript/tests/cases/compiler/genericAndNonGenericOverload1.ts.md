genericAndNonGenericOverload1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 59,
      "body": {
        "type": "TSInterfaceBody",
        "start": 23,
        "end": 59,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 29,
            "end": 39,
            "params": [
              {
                "type": "Identifier",
                "start": 30,
                "end": 34,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 31,
                  "end": 34,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 33,
                    "end": 34,
                    "typeName": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 34,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 38,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 37,
                "end": 38,
                "typeName": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 44,
            "end": 57,
            "params": [
              {
                "type": "Identifier",
                "start": 48,
                "end": 52,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 49,
                  "end": 52,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 51,
                    "end": 52,
                    "typeName": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 52,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
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
                  "decorators": [],
                  "name": "Z",
                  "optional": false
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 44,
              "end": 47,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 45,
                  "end": 46,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 46,
                    "decorators": [],
                    "name": "Z",
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
        "end": 19,
        "decorators": [],
        "name": "callable2",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
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
      "start": 60,
      "end": 86,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 85,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 85,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 85,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 68,
                "end": 85,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 77,
                  "end": 85,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 78,
                      "end": 84
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 77,
                  "decorators": [],
                  "name": "callable2",
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
      "type": "ExpressionStatement",
      "start": 87,
      "end": 101,
      "expression": {
        "type": "CallExpression",
        "start": 87,
        "end": 100,
        "arguments": [
          {
            "type": "Literal",
            "start": 98,
            "end": 99,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 87,
          "end": 89,
          "decorators": [],
          "name": "c2",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 89,
          "end": 97,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 90,
              "end": 96
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
}
```
