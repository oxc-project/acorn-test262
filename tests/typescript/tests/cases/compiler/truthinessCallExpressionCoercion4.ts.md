__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 96,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 16,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 16,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "IfStatement",
      "start": 18,
      "end": 96,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 68,
        "end": 96,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 74,
            "end": 94,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 74,
              "end": 93,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 74,
                "end": 88,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 80,
                  "decorators": [],
                  "name": "module",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 88,
                  "decorators": [],
                  "name": "exports",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 91,
                "end": 93,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "LogicalExpression",
        "start": 22,
        "end": 66,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 22,
          "end": 48,
          "operator": "===",
          "left": {
            "type": "UnaryExpression",
            "start": 22,
            "end": 35,
            "argument": {
              "type": "Identifier",
              "start": 29,
              "end": 35,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "typeof",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 40,
            "end": 48,
            "raw": "'object'",
            "value": "object"
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 52,
          "end": 66,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 52,
            "end": 58,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 59,
            "end": 66,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
