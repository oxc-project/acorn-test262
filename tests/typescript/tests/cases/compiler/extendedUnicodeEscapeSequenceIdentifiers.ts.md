__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 14
          },
          "init": {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 17,
            "end": 19
          },
          "definite": false,
          "start": 6,
          "end": 19
        }
      ],
      "declare": false,
      "start": 0,
      "end": 20
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
            "name": "aa",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 36
          },
          "init": {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 39,
            "end": 41
          },
          "definite": false,
          "start": 27,
          "end": 41
        }
      ],
      "declare": false,
      "start": 21,
      "end": 42
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 51
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 55
          },
          "optional": false,
          "computed": false,
          "start": 44,
          "end": 55
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 57
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "aa",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 62
            },
            "start": 56,
            "end": 62
          }
        ],
        "optional": false,
        "start": 44,
        "end": 63
      },
      "directive": null,
      "start": 44,
      "end": 64
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 64
}
```
