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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "C",
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
        "start": 13,
        "end": 32,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 15,
            "end": 30,
            "expression": {
              "type": "AssignmentExpression",
              "start": 15,
              "end": 29,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 15,
                "end": 21,
                "object": {
                  "type": "ThisExpression",
                  "start": 15,
                  "end": 19
                },
                "property": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 24,
                "end": 29,
                "value": false,
                "raw": "false"
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
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
      "expression": {
        "type": "MemberExpression",
        "start": 56,
        "end": 69,
        "object": {
          "type": "MemberExpression",
          "start": 56,
          "end": 67,
          "object": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 58,
            "end": 67,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "property": {
          "type": "Identifier",
          "start": 68,
          "end": 69,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 71,
      "end": 81,
      "expression": {
        "type": "MemberExpression",
        "start": 71,
        "end": 80,
        "object": {
          "type": "NewExpression",
          "start": 71,
          "end": 78,
          "callee": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": []
        },
        "property": {
          "type": "Identifier",
          "start": 79,
          "end": 80,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
