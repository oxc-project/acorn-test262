__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 31,
        "name": "Spec",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
        "trueType": {
          "type": "TSAnyKeyword",
          "start": 55,
          "end": 58
        },
        "falseType": {
          "type": "TSStringKeyword",
          "start": 61,
          "end": 67
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 70,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 83,
        "name": "WithSpec",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 94,
              "end": 100
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 104,
        "end": 105,
        "typeName": {
          "type": "Identifier",
          "start": 104,
          "end": 105,
          "name": "T",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 107,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "name": "R",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 116,
        "end": 130,
        "typeName": {
          "type": "Identifier",
          "start": 116,
          "end": 124,
          "name": "WithSpec",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "name": "Spec",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
