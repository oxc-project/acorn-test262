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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 65
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 79
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 82
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 88
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 84,
                "end": 88
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 90,
              "end": 93
            },
            "expression": false,
            "start": 68,
            "end": 93
          },
          "definite": false,
          "start": 62,
          "end": 93
        }
      ],
      "declare": false,
      "start": 56,
      "end": 94
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 56,
  "end": 95
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 0,
          "end": 3
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 4,
            "end": 9
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 11,
            "end": 13
          }
        ],
        "optional": false,
        "start": 0,
        "end": 14
      },
      "directive": null,
      "start": 0,
      "end": 15
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 15
}
```
