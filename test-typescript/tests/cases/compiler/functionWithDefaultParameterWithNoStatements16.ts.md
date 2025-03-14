functionWithDefaultParameterWithNoStatements16.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 71,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 12,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 7,
                "end": 12,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 7,
                  "end": 10
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 15,
      "end": 42,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 42,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 27,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 28,
          "end": 37,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "CallExpression",
            "start": 32,
            "end": 37,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 32,
              "end": 35,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 44,
      "end": 71,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 68,
        "end": 71,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 56,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 57,
          "end": 66,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "CallExpression",
            "start": 61,
            "end": 66,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 61,
              "end": 64,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
