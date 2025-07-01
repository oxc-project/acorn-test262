__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 23
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "globalThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 36
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 43
            },
            "optional": false,
            "computed": false,
            "start": 26,
            "end": 43
          },
          "definite": false,
          "start": 17,
          "end": 43
        }
      ],
      "declare": false,
      "start": 11,
      "end": 44
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 45,
          "end": 47
        },
        "property": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 54
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "iterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 63
          },
          "optional": false,
          "computed": false,
          "start": 48,
          "end": 63
        },
        "optional": false,
        "computed": true,
        "start": 45,
        "end": 64
      },
      "directive": null,
      "start": 45,
      "end": 65
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 65
}
```
