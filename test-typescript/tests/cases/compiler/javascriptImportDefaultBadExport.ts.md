__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 58,
  "end": 100,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 58,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 69,
            "decorators": [],
            "name": "alias",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 72,
            "end": 74,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 99,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 76,
        "end": 98,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 76,
          "end": 90,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 76,
            "end": 82,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 83,
            "end": 90,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 93,
          "end": 98,
          "decorators": [],
          "name": "alias",
          "optional": false,
          "typeAnnotation": null
        }
      }
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
  "end": 20,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "raw": "\"./a\"",
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
            "name": "a",
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
