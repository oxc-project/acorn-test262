__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 42,
  "end": 75,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 42,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 51,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 54,
        "end": 67,
        "expression": {
          "type": "Literal",
          "start": 62,
          "end": 66,
          "value": "m2",
          "raw": "\"m2\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 68,
      "end": 75,
      "expression": {
        "type": "CallExpression",
        "start": 68,
        "end": 74,
        "callee": {
          "type": "MemberExpression",
          "start": 68,
          "end": 72,
          "object": {
            "type": "Identifier",
            "start": 68,
            "end": 70,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 71,
            "end": 72,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
