__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 103,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 27,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 26,
          "raw": "\"foo\"",
          "value": "foo"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 29,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 39,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 42,
        "end": 56,
        "expression": {
          "type": "Literal",
          "start": 50,
          "end": 55,
          "raw": "\"bar\"",
          "value": "bar"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 58,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 68,
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 71,
        "end": 85,
        "expression": {
          "type": "Literal",
          "start": 79,
          "end": 84,
          "raw": "\"baz\"",
          "value": "baz"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 103,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 87,
        "end": 102,
        "operator": "+",
        "left": {
          "type": "BinaryExpression",
          "start": 87,
          "end": 96,
          "operator": "+",
          "left": {
            "type": "Identifier",
            "start": 87,
            "end": 90,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 93,
            "end": 96,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 99,
          "end": 102,
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
