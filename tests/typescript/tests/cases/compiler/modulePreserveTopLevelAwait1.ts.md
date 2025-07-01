__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForOfStatement",
      "await": true,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 18
            },
            "init": null,
            "definite": false,
            "start": 17,
            "end": 18
          }
        ],
        "declare": false,
        "start": 11,
        "end": 18
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 22,
        "end": 24
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 26,
        "end": 28
      },
      "start": 0,
      "end": 28
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AwaitExpression",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 42
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "resolve",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 50
            },
            "optional": false,
            "computed": false,
            "start": 35,
            "end": 50
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 35,
          "end": 52
        },
        "start": 29,
        "end": 52
      },
      "directive": null,
      "start": 29,
      "end": 53
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 55,
      "end": 65
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 65
}
```
