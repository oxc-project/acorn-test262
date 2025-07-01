__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 4,
        "end": 8
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 15
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 14,
          "end": 17
        },
        "directive": null,
        "start": 14,
        "end": 18
      },
      "alternate": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 29
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 28,
          "end": 31
        },
        "directive": null,
        "start": 28,
        "end": 32
      },
      "start": 0,
      "end": 32
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 46
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 50,
          "end": 57
        },
        "start": 48,
        "end": 57
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 68,
              "end": 72
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 89,
                "end": 93
              },
              "start": 82,
              "end": 94
            },
            "alternate": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 119,
                "end": 124
              },
              "start": 112,
              "end": 125
            },
            "start": 64,
            "end": 125
          }
        ],
        "start": 58,
        "end": 127
      },
      "expression": false,
      "start": 34,
      "end": 127
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 127
}
```
