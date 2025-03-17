__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 104,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 25,
      "end": 104,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 104,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 89,
            "end": 102,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 89,
              "end": 101,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 89,
                "end": 96,
                "decorators": [],
                "name": "element",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 97,
                "end": 101,
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
        "start": 30,
        "end": 43,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 36,
            "end": 43,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 43,
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
        "start": 47,
        "end": 81,
        "arguments": [
          {
            "type": "Literal",
            "start": 77,
            "end": 80,
            "raw": "\"a\"",
            "value": "a"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 47,
          "end": 76,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 47,
            "end": 55,
            "decorators": [],
            "name": "document",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 56,
            "end": 76,
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
