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
        "start": 40,
        "end": 42
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "m2",
          "raw": "\"m2\"",
          "start": 53,
          "end": 57
        },
        "start": 45,
        "end": 58
      },
      "importKind": "value",
      "start": 33,
      "end": 58
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
            "start": 59,
            "end": 61
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 63
          },
          "optional": false,
          "computed": false,
          "start": 59,
          "end": 63
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 59,
        "end": 65
      },
      "directive": null,
      "start": 59,
      "end": 66
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 33,
  "end": 66
}
```
