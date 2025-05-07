__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 79,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 79,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 79,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 64,
            "end": 77,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 64,
              "end": 76,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 64,
                "end": 71,
                "decorators": [],
                "name": "element",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 72,
                "end": 76,
                "decorators": [],
                "name": "href",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 18,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 18,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 18,
              "decorators": [],
              "name": "element",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "CallExpression",
        "start": 22,
        "end": 56,
        "arguments": [
          {
            "type": "Literal",
            "start": 52,
            "end": 55,
            "raw": "\"a\"",
            "value": "a",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 22,
          "end": 51,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 22,
            "end": 30,
            "decorators": [],
            "name": "document",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 31,
            "end": 51,
            "decorators": [],
            "name": "getElementsByTagName",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
