__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 19,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 18,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 18,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 18,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "implements": [],
        "superClass": null
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
  "end": 58,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 15,
        "decorators": [],
        "name": "myModule",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 37,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 36,
          "raw": "\"myModule\"",
          "value": "myModule"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 56,
      "expression": {
        "type": "NewExpression",
        "start": 39,
        "end": 55,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 43,
          "end": 53,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 43,
            "end": 51,
            "decorators": [],
            "name": "myModule",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
