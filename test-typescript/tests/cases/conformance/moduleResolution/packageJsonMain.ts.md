__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 27,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 26,
          "value": "foo",
          "raw": "\"foo\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 29,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 39,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 42,
        "end": 56,
        "expression": {
          "type": "Literal",
          "start": 50,
          "end": 55,
          "value": "bar",
          "raw": "\"bar\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 58,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 68,
        "name": "baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 71,
        "end": 85,
        "expression": {
          "type": "Literal",
          "start": 79,
          "end": 84,
          "value": "baz",
          "raw": "\"baz\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 103,
      "expression": {
        "type": "BinaryExpression",
        "start": 87,
        "end": 102,
        "left": {
          "type": "BinaryExpression",
          "start": 87,
          "end": 96,
          "left": {
            "type": "Identifier",
            "start": 87,
            "end": 90,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "+",
          "right": {
            "type": "Identifier",
            "start": 93,
            "end": 96,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "+",
        "right": {
          "type": "Identifier",
          "start": 99,
          "end": 102,
          "name": "baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
