__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 123,
  "end": 145,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 123,
      "end": 144,
      "declaration": {
        "type": "ArrayExpression",
        "start": 139,
        "end": 142,
        "elements": []
      },
      "exportKind": "value"
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
      "end": 19,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "value": "./a",
        "raw": "'./a'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 24,
      "expression": {
        "type": "MemberExpression",
        "start": 20,
        "end": 24,
        "object": {
          "type": "Identifier",
          "start": 20,
          "end": 21,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Literal",
          "start": 22,
          "end": 23,
          "value": 0,
          "raw": "0"
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
