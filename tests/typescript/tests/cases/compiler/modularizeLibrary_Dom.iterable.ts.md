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
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 18,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 18,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 18,
              "decorators": [],
              "name": "element",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "CallExpression",
        "start": 22,
        "end": 56,
        "callee": {
          "type": "MemberExpression",
          "start": 22,
          "end": 51,
          "object": {
            "type": "Identifier",
            "start": 22,
            "end": 30,
            "decorators": [],
            "name": "document",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 31,
            "end": 51,
            "decorators": [],
            "name": "getElementsByTagName",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 52,
            "end": 55,
            "value": "a",
            "raw": "\"a\""
          }
        ],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 79,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 64,
            "end": 77,
            "expression": {
              "type": "MemberExpression",
              "start": 64,
              "end": 76,
              "object": {
                "type": "Identifier",
                "start": 64,
                "end": 71,
                "decorators": [],
                "name": "element",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 72,
                "end": 76,
                "decorators": [],
                "name": "href",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
