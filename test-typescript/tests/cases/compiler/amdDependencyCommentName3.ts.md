__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 115,
  "end": 148,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 115,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 124,
        "decorators": [],
        "name": "m1",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 127,
        "end": 140,
        "expression": {
          "type": "Literal",
          "start": 135,
          "end": 139,
          "raw": "\"m2\"",
          "value": "m2"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 141,
      "end": 148,
      "expression": {
        "type": "CallExpression",
        "start": 141,
        "end": 147,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 141,
          "end": 145,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 141,
            "end": 143,
            "decorators": [],
            "name": "m1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 144,
            "end": 145,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
