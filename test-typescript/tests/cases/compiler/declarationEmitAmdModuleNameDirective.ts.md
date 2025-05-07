__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 37,
  "end": 58,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 58,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 58,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 57,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 53,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 56,
              "end": 57,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
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
  "start": 55,
  "end": 91,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 55,
      "end": 81,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 73,
        "end": 80,
        "raw": "'./foo'",
        "value": "./foo",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 63,
          "end": 66,
          "imported": {
            "type": "Identifier",
            "start": 63,
            "end": 66,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 66,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 82,
      "end": 91,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 82,
        "end": 90,
        "argument": {
          "type": "Identifier",
          "start": 87,
          "end": 90,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "void",
        "prefix": true
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
