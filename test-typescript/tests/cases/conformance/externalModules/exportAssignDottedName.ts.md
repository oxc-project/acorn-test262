__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 36,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 19,
          "end": 36,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 22,
              "end": 34,
              "argument": {
                "type": "Literal",
                "start": 29,
                "end": 33,
                "raw": "true",
                "value": true
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 30,
          "raw": "'./foo1'",
          "value": "./foo1"
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 33,
      "end": 49,
      "expression": {
        "type": "MemberExpression",
        "start": 42,
        "end": 48,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 42,
          "end": 46,
          "decorators": [],
          "name": "foo1",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 47,
          "end": 48,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
