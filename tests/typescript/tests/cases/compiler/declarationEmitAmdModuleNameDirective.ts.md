__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 53
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 56,
              "end": 57
            },
            "definite": false,
            "start": 50,
            "end": 57
          }
        ],
        "declare": false,
        "start": 44,
        "end": 58
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 37,
      "end": 58
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 37,
  "end": 58
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 66
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 66
          },
          "importKind": "value",
          "start": 63,
          "end": 66
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./foo",
        "raw": "'./foo'",
        "start": 73,
        "end": 80
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 55,
      "end": 81
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 90
        },
        "prefix": true,
        "start": 82,
        "end": 90
      },
      "directive": null,
      "start": 82,
      "end": 91
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 55,
  "end": 91
}
```
