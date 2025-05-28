__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 20,
        "decorators": [],
        "name": "unreachable",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 104,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 29,
            "end": 40,
            "argument": {
              "type": "CallExpression",
              "start": 36,
              "end": 39,
              "callee": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 45,
            "end": 54,
            "argument": {
              "type": "Literal",
              "start": 52,
              "end": 53,
              "value": 2,
              "raw": "2"
            }
          },
          {
            "type": "ReturnStatement",
            "start": 59,
            "end": 68,
            "argument": {
              "type": "Literal",
              "start": 66,
              "end": 67,
              "value": 3,
              "raw": "3"
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 73,
            "end": 88,
            "id": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 86,
              "end": 88,
              "body": []
            },
            "expression": false
          },
          {
            "type": "ReturnStatement",
            "start": 93,
            "end": 102,
            "argument": {
              "type": "Literal",
              "start": 100,
              "end": 101,
              "value": 4,
              "raw": "4"
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
