__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "value": true,
              "raw": "true"
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
              "callee": {
                "type": "Identifier",
                "start": 45,
                "end": 48,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 67,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 79,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
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
  "sourceType": "script",
  "hashbang": null
}
```
