__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 32,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 32,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 15,
            "end": 30,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 15,
              "end": 29,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 15,
                "end": 21,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 15,
                  "end": 19
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 24,
                "end": 29,
                "raw": "false",
                "value": false
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
        "end": 10,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 32,
      "end": 33
    },
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 70,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 56,
        "end": 69,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 56,
          "end": 67,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 58,
            "end": 67,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 68,
          "end": 69,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 71,
      "end": 81,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 71,
        "end": 80,
        "computed": false,
        "object": {
          "type": "NewExpression",
          "start": 71,
          "end": 78,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 79,
          "end": 80,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
