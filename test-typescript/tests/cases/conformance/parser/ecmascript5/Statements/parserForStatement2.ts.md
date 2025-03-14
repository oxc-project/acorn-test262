parserForStatement2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 6,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 5,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 7,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 11,
          "end": 17,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 15,
            "end": 17,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 23,
          "end": 24,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForInStatement",
      "start": 26,
      "end": 62,
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 62,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 31,
        "end": 32,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "right": {
        "type": "SequenceExpression",
        "start": 36,
        "end": 56,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 36,
            "end": 53,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 36,
              "end": 40,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            },
            "right": {
              "type": "LogicalExpression",
              "start": 43,
              "end": 53,
              "operator": "||",
              "left": {
                "type": "MemberExpression",
                "start": 43,
                "end": 47,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
              },
              "right": {
                "type": "ArrayExpression",
                "start": 51,
                "end": 53,
                "elements": []
              }
            }
          },
          {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "d",
            "optional": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
