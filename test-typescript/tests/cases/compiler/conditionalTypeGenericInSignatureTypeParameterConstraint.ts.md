conditionalTypeGenericInSignatureTypeParameterConstraint.ts
```json
{
  "type": "Program",
  "start": 15,
  "end": 150,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 15,
      "end": 94,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 29,
        "decorators": [],
        "name": "H_inline1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 35,
        "end": 93,
        "checkType": {
          "type": "TSFunctionType",
          "start": 36,
          "end": 56,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 52,
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
                "name": "o",
                "optional": false
              }
            }
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 36,
            "end": 49,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 37,
                "end": 48,
                "const": false,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 47,
                  "end": 48,
                  "typeName": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 48,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "o",
                  "optional": false
                },
                "out": false
              }
            ]
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 67,
          "end": 80,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 70,
            "end": 80,
            "typeAnnotation": {
              "type": "TSInferType",
              "start": 73,
              "end": 80,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 79,
                "end": 80,
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 80,
                  "decorators": [],
                  "name": "o",
                  "optional": false
                },
                "out": false
              }
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 88,
          "end": 93
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 84,
          "end": 85,
          "typeName": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "decorators": [],
            "name": "o",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 29,
        "end": 32,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 30,
            "end": 31,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 96,
      "end": 128,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 107,
        "decorators": [],
        "name": "Result",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 110,
        "end": 127,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 119,
          "end": 127,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 120,
              "end": 126
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 110,
          "end": 119,
          "decorators": [],
          "name": "H_inline1",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
