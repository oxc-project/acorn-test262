for-of13.ts
```json
{
  "type": "Program",
  "start": 16,
  "end": 59,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 29,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 31,
      "end": 59,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 56,
        "end": 59,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "v",
        "optional": false
      },
      "right": {
        "type": "CallExpression",
        "start": 41,
        "end": 54,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 41,
          "end": 52,
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "start": 41,
            "end": 45,
            "elements": [
              {
                "type": "Literal",
                "start": 42,
                "end": 44,
                "raw": "\"\"",
                "value": ""
              }
            ]
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 46,
            "end": 52,
            "decorators": [],
            "name": "values",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
