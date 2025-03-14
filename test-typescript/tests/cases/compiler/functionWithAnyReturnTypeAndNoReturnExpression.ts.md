functionWithAnyReturnTypeAndNoReturnExpression.ts
```json
{
  "type": "Program",
  "start": 25,
  "end": 102,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 25,
      "end": 46,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 43,
        "end": 46,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 37,
        "end": 42,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 39,
          "end": 42
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 64,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 64,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 55,
                "end": 64,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 58,
                  "end": 64,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 61,
                    "end": 64
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 67,
            "end": 76,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 73,
              "end": 76,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 78,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 84,
            "decorators": [],
            "name": "f3",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 87,
            "end": 101,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 98,
              "end": 101,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 94,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 91,
                "end": 94
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
