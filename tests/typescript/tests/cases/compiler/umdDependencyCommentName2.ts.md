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
        "start": 122,
        "end": 124
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "m2",
          "raw": "\"m2\"",
          "start": 135,
          "end": 139
        },
        "start": 127,
        "end": 140
      },
      "importKind": "value",
      "start": 115,
      "end": 140
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
            "start": 141,
            "end": 143
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 145
          },
          "optional": false,
          "computed": false,
          "start": 141,
          "end": 145
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 141,
        "end": 147
      },
      "directive": null,
      "start": 141,
      "end": 148
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 115,
  "end": 148
}
```
