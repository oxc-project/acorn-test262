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
      "left": {
        "type": "VariableDeclaration",
        "start": 30,
        "end": 43,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 36,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 43,
              "name": "element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "right": {
        "type": "CallExpression",
        "start": 47,
        "end": 81,
        "callee": {
          "type": "MemberExpression",
          "start": 47,
          "end": 76,
          "object": {
            "type": "Identifier",
            "start": 47,
            "end": 55,
            "name": "document",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 56,
            "end": 76,
            "name": "getElementsByTagName",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 77,
            "end": 80,
            "value": "a",
            "raw": "\"a\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 104,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 89,
            "end": 102,
            "expression": {
              "type": "MemberExpression",
              "start": 89,
              "end": 101,
              "object": {
                "type": "Identifier",
                "start": 89,
                "end": 96,
                "name": "element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 97,
                "end": 101,
                "name": "href",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
