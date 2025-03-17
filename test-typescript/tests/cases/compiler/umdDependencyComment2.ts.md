__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 67,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 33,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 42,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 45,
        "end": 58,
        "expression": {
          "type": "Literal",
          "start": 53,
          "end": 57,
          "value": "m2",
          "raw": "\"m2\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 59,
      "end": 66,
      "expression": {
        "type": "CallExpression",
        "start": 59,
        "end": 65,
        "callee": {
          "type": "MemberExpression",
          "start": 59,
          "end": 63,
          "object": {
            "type": "Identifier",
            "start": 59,
            "end": 61,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
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
