functionWithNoBestCommonType1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 79,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 53,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 53,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 21,
            "end": 33,
            "argument": {
              "type": "Literal",
              "start": 28,
              "end": 32,
              "raw": "true",
              "value": true
            }
          },
          {
            "type": "ReturnStatement",
            "start": 38,
            "end": 51,
            "argument": {
              "type": "CallExpression",
              "start": 45,
              "end": 50,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 45,
                "end": 48,
                "decorators": [],
                "name": "bar",
                "optional": false
              },
              "optional": false
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
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 79,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 79,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 67,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 69,
        "end": 75,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 71,
          "end": 75
        }
      }
    }
  ],
  "sourceType": "script"
}
```
