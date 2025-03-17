__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "name": "Point",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 16,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 18,
          "end": 19,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 53,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 25,
            "end": 36,
            "expression": {
              "type": "AssignmentExpression",
              "start": 25,
              "end": 35,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 25,
                "end": 31,
                "object": {
                  "type": "ThisExpression",
                  "start": 25,
                  "end": 29
                },
                "property": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 39,
            "end": 50,
            "expression": {
              "type": "AssignmentExpression",
              "start": 39,
              "end": 49,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 39,
                "end": 45,
                "object": {
                  "type": "ThisExpression",
                  "start": 39,
                  "end": 43
                },
                "property": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 63,
            "end": 78,
            "callee": {
              "type": "Identifier",
              "start": 67,
              "end": 72,
              "name": "Point",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 73,
                "end": 74,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 76,
                "end": 77,
                "value": 4,
                "raw": "4"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 87,
            "name": "xx",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 90,
            "end": 93,
            "object": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
