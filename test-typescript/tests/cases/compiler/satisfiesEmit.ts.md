__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 54,
  "end": 109,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 54,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 65,
        "end": 79,
        "expression": {
          "type": "Literal",
          "start": 73,
          "end": 78,
          "value": "foo",
          "raw": "\"foo\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 81,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 107,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 91,
            "end": 107,
            "expression": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 103,
              "end": 107,
              "typeName": {
                "type": "Identifier",
                "start": 103,
                "end": 107,
                "name": "bleh",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
