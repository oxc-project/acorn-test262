__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 32,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 17,
        "end": 32,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 19,
            "end": 30,
            "expression": {
              "type": "AssignmentExpression",
              "start": 19,
              "end": 29,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 19,
                "end": 25,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 19,
                  "end": 23
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 28,
                "end": 29,
                "raw": "3",
                "value": 3
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
        "end": 14,
        "decorators": [],
        "name": "Point",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 57,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 43,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 43,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 40,
                "end": 43
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 46,
            "end": 57,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 50,
              "end": 55,
              "decorators": [],
              "name": "Point",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
