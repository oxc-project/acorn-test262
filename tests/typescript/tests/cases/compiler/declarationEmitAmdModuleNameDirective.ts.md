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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 57,
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
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 66,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "argument": {
          "type": "Identifier",
          "start": 87,
          "end": 90,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
