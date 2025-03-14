inferTypesInvalidExtendsDeclaration.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 61,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Test",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 15,
        "end": 60,
        "checkType": {
          "type": "TSTypeReference",
          "start": 15,
          "end": 16,
          "typeName": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSInferType",
          "start": 25,
          "end": 42,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 31,
            "end": 42,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 41,
              "end": 42,
              "typeName": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        },
        "falseType": {
          "type": "TSStringKeyword",
          "start": 54,
          "end": 60
        },
        "trueType": {
          "type": "TSNumberKeyword",
          "start": 45,
          "end": 51
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 12,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "T",
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
