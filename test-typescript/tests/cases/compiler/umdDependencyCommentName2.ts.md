__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 115,
  "end": 149,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 115,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 124,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 127,
        "end": 140,
        "expression": {
          "type": "Literal",
          "start": 135,
          "end": 139,
          "value": "m2",
          "raw": "\"m2\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 141,
      "end": 148,
      "expression": {
        "type": "CallExpression",
        "start": 141,
        "end": 147,
        "callee": {
          "type": "MemberExpression",
          "start": 141,
          "end": 145,
          "object": {
            "type": "Identifier",
            "start": 141,
            "end": 143,
            "name": "m1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 144,
            "end": 145,
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
