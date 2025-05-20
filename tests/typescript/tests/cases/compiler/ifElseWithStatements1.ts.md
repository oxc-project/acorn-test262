__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 127,
  "body": [
    {
      "type": "IfStatement",
      "start": 0,
      "end": 32,
      "alternate": {
        "type": "ExpressionStatement",
        "start": 28,
        "end": 32,
        "directive": null,
        "expression": {
          "type": "CallExpression",
          "start": 28,
          "end": 31,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      },
      "consequent": {
        "type": "ExpressionStatement",
        "start": 14,
        "end": 18,
        "directive": null,
        "expression": {
          "type": "CallExpression",
          "start": 14,
          "end": 17,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      },
      "test": {
        "type": "Literal",
        "start": 4,
        "end": 8,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 127,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 127,
        "body": [
          {
            "type": "IfStatement",
            "start": 64,
            "end": 125,
            "alternate": {
              "type": "ReturnStatement",
              "start": 112,
              "end": 125,
              "argument": {
                "type": "Literal",
                "start": 119,
                "end": 124,
                "raw": "false",
                "value": false
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 82,
              "end": 94,
              "argument": {
                "type": "Literal",
                "start": 89,
                "end": 93,
                "raw": "true",
                "value": true
              }
            },
            "test": {
              "type": "Literal",
              "start": 68,
              "end": 72,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 46,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 48,
        "end": 57,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 50,
          "end": 57
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
