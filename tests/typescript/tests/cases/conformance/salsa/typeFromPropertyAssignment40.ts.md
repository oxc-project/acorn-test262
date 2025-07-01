__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Outer",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "self",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 27,
                  "end": 31
                },
                "init": {
                  "type": "ThisExpression",
                  "start": 34,
                  "end": 38
                },
                "definite": false,
                "start": 27,
                "end": 38
              }
            ],
            "declare": false,
            "start": 23,
            "end": 38
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "self",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 47
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 49
                },
                "optional": false,
                "computed": false,
                "start": 43,
                "end": 49
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 52,
                "end": 53
              },
              "start": 43,
              "end": 53
            },
            "directive": null,
            "start": 43,
            "end": 53
          }
        ],
        "start": 17,
        "end": 55
      },
      "expression": false,
      "start": 0,
      "end": 55
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ok",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 83
          },
          "init": null,
          "definite": false,
          "start": 81,
          "end": 83
        }
      ],
      "declare": false,
      "start": 77,
      "end": 83
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ok",
          "optional": false,
          "typeAnnotation": null,
          "start": 84,
          "end": 86
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 88
        },
        "optional": false,
        "computed": false,
        "start": 84,
        "end": 88
      },
      "directive": null,
      "start": 84,
      "end": 88
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 88
}
```
