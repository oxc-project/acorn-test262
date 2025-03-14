foo.ts
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
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 56,
              "end": 57,
              "raw": "1",
              "value": 1
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
  "sourceType": "module"
}
```
bar.ts
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
        "value": "./foo"
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 66,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 82,
      "end": 91,
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
          "optional": false
        },
        "operator": "void",
        "prefix": true
      }
    }
  ],
  "sourceType": "module"
}
```
