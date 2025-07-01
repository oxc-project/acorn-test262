__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unreachable",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 37
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 36,
              "end": 39
            },
            "start": 29,
            "end": 40
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 52,
              "end": 53
            },
            "start": 45,
            "end": 54
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 66,
              "end": 67
            },
            "start": 59,
            "end": 68
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 83
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 86,
              "end": 88
            },
            "expression": false,
            "start": 73,
            "end": 88
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 100,
              "end": 101
            },
            "start": 93,
            "end": 102
          }
        ],
        "start": 23,
        "end": 104
      },
      "expression": false,
      "start": 0,
      "end": 104
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 104
}
```
