__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 54,
  "end": 108,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 54,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 107,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 91,
            "end": 107,
            "expression": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 103,
              "end": 107,
              "typeName": {
                "type": "Identifier",
                "start": 103,
                "end": 107,
                "decorators": [],
                "name": "bleh",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
