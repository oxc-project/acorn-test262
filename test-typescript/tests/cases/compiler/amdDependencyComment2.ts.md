amdDependencyComment2.ts
```json
{
  "type": "Program",
  "start": 33,
  "end": 66,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 33,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 42,
        "decorators": [],
        "name": "m1",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 45,
        "end": 58,
        "expression": {
          "type": "Literal",
          "start": 53,
          "end": 57,
          "raw": "\"m2\"",
          "value": "m2"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 59,
      "end": 66,
      "expression": {
        "type": "CallExpression",
        "start": 59,
        "end": 65,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 59,
          "end": 63,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 59,
            "end": 61,
            "decorators": [],
            "name": "m1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
