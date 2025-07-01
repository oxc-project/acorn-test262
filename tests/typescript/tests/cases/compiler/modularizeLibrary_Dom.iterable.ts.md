__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "element",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 18
            },
            "init": null,
            "definite": false,
            "start": 11,
            "end": 18
          }
        ],
        "declare": false,
        "start": 5,
        "end": 18
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "document",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 30
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getElementsByTagName",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 51
          },
          "optional": false,
          "computed": false,
          "start": 22,
          "end": 51
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 52,
            "end": 55
          }
        ],
        "optional": false,
        "start": 22,
        "end": 56
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "element",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 71
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "href",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 76
              },
              "optional": false,
              "computed": false,
              "start": 64,
              "end": 76
            },
            "directive": null,
            "start": 64,
            "end": 77
          }
        ],
        "start": 58,
        "end": 79
      },
      "start": 0,
      "end": 79
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 79
}
```
