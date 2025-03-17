__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 13,
      "expression": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 14,
      "end": 31,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 31,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 26,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
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
  "end": 24,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 23,
        "raw": "'./bar'",
        "value": "./bar"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
