__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 46,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 19,
          "end": 44,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 44,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 23,
              "end": 44,
              "params": [
                {
                  "type": "Identifier",
                  "start": 24,
                  "end": 33,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 25,
                    "end": 33,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 27,
                      "end": 33
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 35,
                "end": 44,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 38,
                  "end": 44
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 49,
      "end": 99,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 49,
        "end": 98,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 51,
            "end": 97,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 70,
              "end": 97,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 76,
                  "end": 95,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 83,
                    "end": 94,
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "start": 83,
                      "end": 86,
                      "raw": "\".\"",
                      "value": ".",
                      "regex": null,
                      "bigint": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 94,
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 52,
                "end": 57,
                "decorators": [],
                "name": "input",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 66,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 60,
                "end": 66
              }
            },
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 49,
          "end": 50,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
