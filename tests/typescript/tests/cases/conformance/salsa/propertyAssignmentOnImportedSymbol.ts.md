__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "hurk",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 15
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 18,
              "end": 20
            },
            "definite": false,
            "start": 11,
            "end": 20
          }
        ],
        "declare": false,
        "start": 7,
        "end": 20
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 20
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 20
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
            "name": "hurk",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "hurk",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod1",
        "raw": "'./mod1'",
        "start": 21,
        "end": 29
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 29
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "hurk",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 34
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "expando",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 42
          },
          "optional": false,
          "computed": false,
          "start": 30,
          "end": 42
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 45,
          "end": 46
        },
        "start": 30,
        "end": 46
      },
      "directive": null,
      "start": 30,
      "end": 46
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 46
}
```
