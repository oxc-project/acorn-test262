conditionalTypeAnyUnion.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 150,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 68,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 31,
        "decorators": [],
        "name": "Spec",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 34,
        "end": 67,
        "checkType": {
          "type": "TSAnyKeyword",
          "start": 34,
          "end": 37
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 46,
          "end": 52
        },
        "falseType": {
          "type": "TSStringKeyword",
          "start": 61,
          "end": 67
        },
        "trueType": {
          "type": "TSAnyKeyword",
          "start": 55,
          "end": 58
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 70,
      "end": 105,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 83,
        "decorators": [],
        "name": "WithSpec",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 104,
        "end": 105,
        "typeName": {
          "type": "Identifier",
          "start": 104,
          "end": 105,
          "decorators": [],
          "name": "T",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 83,
        "end": 101,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 84,
            "end": 100,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 94,
              "end": 100
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
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
      "type": "TSTypeAliasDeclaration",
      "start": 107,
      "end": 130,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "R",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 116,
        "end": 130,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 124,
          "end": 130,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 125,
              "end": 129,
              "typeName": {
                "type": "Identifier",
                "start": 125,
                "end": 129,
                "decorators": [],
                "name": "Spec",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 116,
          "end": 124,
          "decorators": [],
          "name": "WithSpec",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
