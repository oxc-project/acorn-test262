__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 109,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 35,
        "end": 109,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 41,
            "end": 107,
            "argument": {
              "type": "ConditionalExpression",
              "start": 48,
              "end": 106,
              "alternate": {
                "type": "SequenceExpression",
                "start": 77,
                "end": 105,
                "expressions": [
                  {
                    "type": "AssignmentExpression",
                    "start": 77,
                    "end": 89,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 77,
                      "end": 78,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 81,
                      "end": 89,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 82,
                        "decorators": [],
                        "name": "q",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 83,
                        "end": 89,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "FunctionExpression",
                    "start": 91,
                    "end": 105,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 102,
                      "end": 105,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                ]
              },
              "consequent": {
                "type": "ConditionalExpression",
                "start": 56,
                "end": 72,
                "alternate": {
                  "type": "Literal",
                  "start": 67,
                  "end": 72,
                  "raw": "false",
                  "value": false
                },
                "consequent": {
                  "type": "Literal",
                  "start": 60,
                  "end": 64,
                  "raw": "true",
                  "value": true
                },
                "test": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "test": {
                "type": "Literal",
                "start": 48,
                "end": 52,
                "raw": "true",
                "value": true
              }
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
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 22,
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 22,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 16,
              "end": 22
            }
          }
        },
        {
          "type": "Identifier",
          "start": 24,
          "end": 33,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 33,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 27,
              "end": 33
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 109,
      "end": 110
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
