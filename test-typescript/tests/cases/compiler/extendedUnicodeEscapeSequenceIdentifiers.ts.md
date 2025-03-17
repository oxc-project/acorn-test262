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
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 19,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 14,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 17,
            "end": 19,
            "value": 12,
            "raw": "12"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 36,
            "name": "aa",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 39,
            "end": 41,
            "value": 12,
            "raw": "12"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 44,
      "end": 64,
      "expression": {
        "type": "CallExpression",
        "start": 44,
        "end": 63,
        "callee": {
          "type": "MemberExpression",
          "start": 44,
          "end": 55,
          "object": {
            "type": "Identifier",
            "start": 44,
            "end": 51,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 52,
            "end": 55,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 56,
            "end": 62,
            "left": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 60,
              "end": 62,
              "name": "aa",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
