__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 62,
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
      "end": 62,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 62,
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
        "end": 57,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 41,
          "end": 55,
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "start": 41,
            "end": 48,
            "elements": [
              {
                "type": "Literal",
                "start": 42,
                "end": 43,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 45,
                "end": 47,
                "raw": "\"\"",
                "value": ""
              }
            ]
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 49,
            "end": 55,
            "decorators": [],
            "name": "values",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
