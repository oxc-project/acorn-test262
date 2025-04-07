__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 11,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 23,
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 26,
            "end": 43,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 26,
              "end": 36,
              "decorators": [],
              "name": "globalThis",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 37,
              "end": 43,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 65,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 45,
        "end": 64,
        "computed": true,
        "object": {
          "type": "ArrayExpression",
          "start": 45,
          "end": 47,
          "elements": []
        },
        "optional": false,
        "property": {
          "type": "MemberExpression",
          "start": 48,
          "end": 63,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 48,
            "end": 54,
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 55,
            "end": 63,
            "decorators": [],
            "name": "iterator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
