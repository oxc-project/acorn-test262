__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 96,
  "end": 145,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 96,
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "raw": "'./a'",
        "value": "./a",
        "regex": null,
        "bigint": null
      },
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
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 24,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 20,
        "end": 24,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 20,
          "end": 21,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 22,
          "end": 23,
          "raw": "0",
          "value": 0,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
