__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 8,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 7,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TryStatement",
      "start": 9,
      "end": 77,
      "block": {
        "type": "BlockStatement",
        "start": 13,
        "end": 61,
        "body": [
          {
            "type": "IfStatement",
            "start": 16,
            "end": 59,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 41,
              "end": 59,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 45,
                  "end": 56,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 45,
                    "end": 55,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 48,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 51,
                      "end": 55,
                      "raw": "1234",
                      "value": 1234
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 20,
              "end": 39,
              "operator": ">",
              "left": {
                "type": "CallExpression",
                "start": 20,
                "end": 33,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 20,
                  "end": 31,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 20,
                    "end": 24,
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 31,
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "right": {
                "type": "Literal",
                "start": 36,
                "end": 39,
                "raw": "0.5",
                "value": 0.5
              }
            }
          }
        ]
      },
      "finalizer": null,
      "handler": {
        "type": "CatchClause",
        "start": 62,
        "end": 77,
        "body": {
          "type": "BlockStatement",
          "start": 68,
          "end": 77,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 71,
              "end": 75,
              "directive": null,
              "expression": {
                "type": "Identifier",
                "start": 71,
                "end": 74,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "param": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
