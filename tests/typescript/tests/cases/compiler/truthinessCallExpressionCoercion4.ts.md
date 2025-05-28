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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 16,
        "body": []
      },
      "expression": false
    },
    {
      "type": "IfStatement",
      "start": 18,
      "end": 96,
      "test": {
        "type": "LogicalExpression",
        "start": 22,
        "end": 66,
        "left": {
          "type": "BinaryExpression",
          "start": 22,
          "end": 48,
          "left": {
            "type": "UnaryExpression",
            "start": 22,
            "end": 35,
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "start": 29,
              "end": 35,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "start": 40,
            "end": 48,
            "value": "object",
            "raw": "'object'"
          }
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "start": 52,
          "end": 66,
          "object": {
            "type": "Identifier",
            "start": 52,
            "end": 58,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 59,
            "end": 66,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 68,
        "end": 96,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 74,
            "end": 94,
            "expression": {
              "type": "AssignmentExpression",
              "start": 74,
              "end": 93,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 74,
                "end": 88,
                "object": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 80,
                  "decorators": [],
                  "name": "module",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 88,
                  "decorators": [],
                  "name": "exports",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
