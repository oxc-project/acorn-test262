__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 42,
  "end": 76,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 42,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 51,
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 54,
        "end": 67,
        "expression": {
          "type": "Literal",
          "start": 62,
          "end": 66,
          "raw": "\"m2\"",
          "value": "m2"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 68,
      "end": 75,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 68,
        "end": 74,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 68,
          "end": 72,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 68,
            "end": 70,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 71,
            "end": 72,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
