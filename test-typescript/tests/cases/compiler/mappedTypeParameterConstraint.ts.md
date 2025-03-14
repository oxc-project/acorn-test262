mappedTypeParameterConstraint.ts
```json
{
  "type": "Program",
  "start": 21,
  "end": 121,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 21,
      "end": 66,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 31,
        "decorators": [],
        "name": "MyMap",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 37,
        "end": 65,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 44,
          "end": 51,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 50,
            "end": 51,
            "typeName": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 39,
          "end": 40,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 54,
          "end": 64,
          "indexType": {
            "type": "TSTypeOperator",
            "start": 56,
            "end": 63,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 62,
              "end": 63,
              "typeName": {
                "type": "Identifier",
                "start": 62,
                "end": 63,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 54,
            "end": 55,
            "typeName": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 31,
        "end": 34,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 32,
            "end": 33,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
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
      "type": "FunctionDeclaration",
      "start": 67,
      "end": 120,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 101,
        "end": 120,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 107,
            "end": 118,
            "argument": {
              "type": "Identifier",
              "start": 114,
              "end": 117,
              "decorators": [],
              "name": "arg",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 79,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 83,
          "end": 89,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 86,
            "end": 89,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 88,
              "end": 89,
              "typeName": {
                "type": "Identifier",
                "start": 88,
                "end": 89,
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
        "start": 90,
        "end": 100,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 92,
          "end": 100,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 97,
            "end": 100,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 98,
                "end": 99,
                "typeName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 92,
            "end": 97,
            "decorators": [],
            "name": "MyMap",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 79,
        "end": 82,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 80,
            "end": 81,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
