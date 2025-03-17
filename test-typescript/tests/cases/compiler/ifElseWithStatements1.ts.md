__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 128,
  "body": [
    {
      "type": "IfStatement",
      "start": 0,
      "end": 32,
      "test": {
        "type": "Literal",
        "start": 4,
        "end": 8,
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "ExpressionStatement",
        "start": 14,
        "end": 18,
        "expression": {
          "type": "CallExpression",
          "start": 14,
          "end": 17,
          "callee": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        },
        "directive": null
      },
      "alternate": {
        "type": "ExpressionStatement",
        "start": 28,
        "end": 32,
        "expression": {
          "type": "CallExpression",
          "start": 28,
          "end": 31,
          "callee": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        },
        "directive": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 46,
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
        "start": 58,
        "end": 127,
        "body": [
          {
            "type": "IfStatement",
            "start": 64,
            "end": 125,
            "test": {
              "type": "Literal",
              "start": 68,
              "end": 72,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 82,
              "end": 94,
              "argument": {
                "type": "Literal",
                "start": 89,
                "end": 93,
                "value": true,
                "raw": "true"
              }
            },
            "alternate": {
              "type": "ReturnStatement",
              "start": 112,
              "end": 125,
              "argument": {
                "type": "Literal",
                "start": 119,
                "end": 124,
                "value": false,
                "raw": "false"
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 48,
        "end": 57,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 50,
          "end": 57
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
