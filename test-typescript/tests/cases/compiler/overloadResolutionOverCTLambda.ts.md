__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 113,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 46,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 43,
        "end": 46,
        "body": []
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
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 41,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 41,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 16,
              "end": 41,
              "params": [
                {
                  "type": "Identifier",
                  "start": 17,
                  "end": 29,
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 21,
                    "end": 29,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 23,
                      "end": 29
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 31,
                "end": 41,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 34,
                  "end": 41
                }
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 59,
      "expression": {
        "type": "CallExpression",
        "start": 47,
        "end": 58,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 51,
            "end": 57,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 51,
                "end": 52,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 47,
          "end": 50,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
