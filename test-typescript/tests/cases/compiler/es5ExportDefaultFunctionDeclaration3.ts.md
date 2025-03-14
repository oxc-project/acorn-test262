__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 133,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 23,
            "decorators": [],
            "name": "before",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 10,
              "end": 23,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 12,
                "end": 23,
                "exprName": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 23,
                  "decorators": [],
                  "name": "func",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 26,
            "end": 32,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 26,
              "end": 30,
              "decorators": [],
              "name": "func",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 35,
      "end": 99,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 50,
        "end": 99,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 79,
          "end": 99,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 85,
              "end": 97,
              "argument": {
                "type": "Identifier",
                "start": 92,
                "end": 96,
                "decorators": [],
                "name": "func",
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 59,
          "end": 63,
          "decorators": [],
          "name": "func",
          "optional": false
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 65,
          "end": 78,
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "start": 67,
            "end": 78,
            "exprName": {
              "type": "Identifier",
              "start": 74,
              "end": 78,
              "decorators": [],
              "name": "func",
              "optional": false
            }
          }
        }
      },
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 123,
            "decorators": [],
            "name": "after",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 123,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 112,
                "end": 123,
                "exprName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 123,
                  "decorators": [],
                  "name": "func",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 126,
            "end": 132,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 126,
              "end": 130,
              "decorators": [],
              "name": "func",
              "optional": false
            },
            "optional": false
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
