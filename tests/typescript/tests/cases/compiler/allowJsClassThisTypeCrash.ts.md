__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 23,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 10,
            "end": 23,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 21,
              "end": 23,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 25,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 34,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 76,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 36,
        "end": 75,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 36,
          "end": 49,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 36,
            "end": 47,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 38,
              "end": 47,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 52,
          "end": 75,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 64,
            "end": 75,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 68,
                "end": 73,
                "directive": null,
                "expression": {
                  "type": "ThisExpression",
                  "start": 68,
                  "end": 72
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": null,
          "typeParameters": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
