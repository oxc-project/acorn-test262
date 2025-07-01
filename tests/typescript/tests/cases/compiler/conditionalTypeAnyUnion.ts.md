__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Spec",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 31
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
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
        },
        "start": 34,
        "end": 67
      },
      "declare": false,
      "start": 22,
      "end": 68
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithSpec",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 83
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 85
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 94,
              "end": 100
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 84,
            "end": 100
          }
        ],
        "start": 83,
        "end": 101
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 104,
          "end": 105
        },
        "typeArguments": null,
        "start": 104,
        "end": 105
      },
      "declare": false,
      "start": 70,
      "end": 105
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 113
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "WithSpec",
          "optional": false,
          "typeAnnotation": null,
          "start": 116,
          "end": 124
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Spec",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 129
              },
              "typeArguments": null,
              "start": 125,
              "end": 129
            }
          ],
          "start": 124,
          "end": 130
        },
        "start": 116,
        "end": 130
      },
      "declare": false,
      "start": 107,
      "end": 130
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 150
}
```
