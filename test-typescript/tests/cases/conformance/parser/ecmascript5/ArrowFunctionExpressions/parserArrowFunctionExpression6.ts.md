__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 111,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 109,
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
          "end": 22,
          "name": "q",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 22,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 16,
              "end": 22
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 24,
          "end": 33,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 33,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 27,
              "end": 33
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "name": "q",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 81,
                      "end": 89,
                      "object": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 82,
                        "name": "q",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 83,
                        "end": 89,
                        "name": "length",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  {
                    "type": "FunctionExpression",
                    "start": 91,
                    "end": 105,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 102,
                      "end": 105,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
