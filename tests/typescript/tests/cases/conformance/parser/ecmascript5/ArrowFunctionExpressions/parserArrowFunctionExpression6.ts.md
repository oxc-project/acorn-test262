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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "test": {
                "type": "Literal",
                "start": 48,
                "end": 52,
                "value": true,
                "raw": "true"
              },
              "consequent": {
                "type": "ConditionalExpression",
                "start": 56,
                "end": 72,
                "test": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null
                },
                "consequent": {
                  "type": "Literal",
                  "start": 60,
                  "end": 64,
                  "value": true,
                  "raw": "true"
                },
                "alternate": {
                  "type": "Literal",
                  "start": 67,
                  "end": 72,
                  "value": false,
                  "raw": "false"
                }
              },
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
                      "object": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 82,
                        "decorators": [],
                        "name": "q",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 83,
                        "end": 89,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  },
                  {
                    "type": "FunctionExpression",
                    "start": 91,
                    "end": 105,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 102,
                      "end": 105,
                      "body": []
                    },
                    "expression": false
                  }
                ]
              }
            }
          }
        ]
      },
      "expression": false
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
