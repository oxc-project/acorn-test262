__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 77,
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
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 23,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 23,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 16,
              "end": 23
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 25,
        "end": 77,
        "body": [
          {
            "type": "IfStatement",
            "start": 31,
            "end": 75,
            "test": {
              "type": "BinaryExpression",
              "start": 35,
              "end": 56,
              "left": {
                "type": "UnaryExpression",
                "start": 35,
                "end": 43,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 43,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 48,
                "end": 56,
                "value": "object",
                "raw": "\"object\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 58,
              "end": 75,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 68,
                  "end": 69,
                  "expression": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 69,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
