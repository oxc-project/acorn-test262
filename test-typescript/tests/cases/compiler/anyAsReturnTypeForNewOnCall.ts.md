__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 53,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 53,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 25,
            "end": 36,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 25,
              "end": 35,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 25,
                "end": 31,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 25,
                  "end": 29
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 39,
            "end": 50,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 39,
              "end": 49,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 39,
                "end": 45,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 39,
                  "end": 43
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 16,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 18,
          "end": 19,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 78,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 63,
            "end": 78,
            "arguments": [
              {
                "type": "Literal",
                "start": 73,
                "end": 74,
                "raw": "3",
                "value": 3,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 76,
                "end": 77,
                "raw": "4",
                "value": 4,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 67,
              "end": 72,
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 81,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 93,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 87,
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 90,
            "end": 93,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
