functionCall1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 29,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 29,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 19,
            "end": 28,
            "argument": {
              "type": "Literal",
              "start": 26,
              "end": 28,
              "raw": "\"\"",
              "value": ""
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 18,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 15,
          "end": 18
        }
      }
    },
    {
      "type": "EmptyStatement",
      "start": 29,
      "end": 30
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 39,
            "end": 44,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 39,
              "end": 42,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
