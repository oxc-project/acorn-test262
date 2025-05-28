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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "decorators": [],
        "name": "Outer",
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
        "start": 17,
        "end": 55,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 23,
            "end": 38,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 27,
                "end": 38,
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
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 43,
            "end": 53,
            "expression": {
              "type": "AssignmentExpression",
              "start": 43,
              "end": 53,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 43,
                "end": 49,
                "object": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 47,
                  "decorators": [],
                  "name": "self",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 52,
                "end": 53,
                "value": 2,
                "raw": "2"
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 83,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 83,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 83,
            "decorators": [],
            "name": "ok",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 84,
      "end": 88,
      "expression": {
        "type": "MemberExpression",
        "start": 84,
        "end": 88,
        "object": {
          "type": "Identifier",
          "start": 84,
          "end": 86,
          "decorators": [],
          "name": "ok",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 87,
          "end": 88,
          "decorators": [],
          "name": "y",
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
