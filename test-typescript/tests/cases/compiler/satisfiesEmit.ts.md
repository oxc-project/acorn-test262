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
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 65,
        "end": 79,
        "expression": {
          "type": "Literal",
          "start": 73,
          "end": 78,
          "raw": "\"foo\"",
          "value": "foo",
          "regex": null,
          "bigint": null
        }
      }
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
          "definite": false,
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 103,
                "end": 107,
                "decorators": [],
                "name": "bleh",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
