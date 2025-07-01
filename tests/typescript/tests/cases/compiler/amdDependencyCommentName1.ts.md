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
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 51
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "m2",
          "raw": "\"m2\"",
          "start": 62,
          "end": 66
        },
        "start": 54,
        "end": 67
      },
      "importKind": "value",
      "start": 42,
      "end": 67
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 70
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 72
          },
          "optional": false,
          "computed": false,
          "start": 68,
          "end": 72
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 68,
        "end": 74
      },
      "directive": null,
      "start": 68,
      "end": 75
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 42,
  "end": 75
}
```
