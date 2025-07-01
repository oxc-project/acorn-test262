__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 62
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "foo",
          "raw": "\"foo\"",
          "start": 73,
          "end": 78
        },
        "start": 65,
        "end": 79
      },
      "importKind": "value",
      "start": 54,
      "end": 80
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 88
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 92
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "bleh",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 107
              },
              "typeArguments": null,
              "start": 103,
              "end": 107
            },
            "start": 91,
            "end": 107
          },
          "definite": false,
          "start": 87,
          "end": 107
        }
      ],
      "declare": false,
      "start": 81,
      "end": 108
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 54,
  "end": 108
}
```
