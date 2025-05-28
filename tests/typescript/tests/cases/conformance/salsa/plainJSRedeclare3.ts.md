__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 17,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 13,
            "decorators": [],
            "name": "orbitol",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 16,
            "end": 17,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 41,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 29,
            "decorators": [],
            "name": "orbitol",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 32,
            "end": 41,
            "left": {
              "type": "Literal",
              "start": 32,
              "end": 33,
              "value": 1,
              "raw": "1"
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 36,
              "end": 41,
              "value": false,
              "raw": "false"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 65,
      "expression": {
        "type": "CallExpression",
        "start": 42,
        "end": 65,
        "callee": {
          "type": "MemberExpression",
          "start": 42,
          "end": 63,
          "object": {
            "type": "Identifier",
            "start": 42,
            "end": 49,
            "decorators": [],
            "name": "orbitol",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 50,
            "end": 63,
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
