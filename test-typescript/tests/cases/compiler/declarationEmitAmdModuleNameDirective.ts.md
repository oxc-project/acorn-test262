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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 58,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 57,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 53,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 56,
              "end": 57,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
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
  "start": 55,
  "end": 91,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 55,
      "end": 81,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 63,
          "end": 66,
          "imported": {
            "type": "Identifier",
            "start": 63,
            "end": 66,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 66,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 73,
        "end": 80,
        "value": "./foo",
        "raw": "'./foo'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 82,
      "end": 91,
      "expression": {
        "type": "UnaryExpression",
        "start": 82,
        "end": 90,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 87,
          "end": 90,
          "name": "foo",
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
