__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 55,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 17,
        "end": 55,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 23,
            "end": 38,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 27,
                "end": 38,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 31,
                  "decorators": [],
                  "name": "self",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ThisExpression",
                  "start": 34,
                  "end": 38
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 43,
            "end": 53,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 43,
              "end": 53,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 43,
                "end": 49,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 47,
                  "decorators": [],
                  "name": "self",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 52,
                "end": 53,
                "raw": "2",
                "value": 2
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
        "name": "Outer",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 83,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 83,
            "decorators": [],
            "name": "ok",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 84,
      "end": 88,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 84,
        "end": 88,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 84,
          "end": 86,
          "decorators": [],
          "name": "ok",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 87,
          "end": 88,
          "decorators": [],
          "name": "y",
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
