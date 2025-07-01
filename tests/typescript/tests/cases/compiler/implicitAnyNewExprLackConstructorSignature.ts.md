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
        "name": "Point",
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 19,
                  "end": 23
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 24,
                  "end": 25
                },
                "optional": false,
                "computed": false,
                "start": 19,
                "end": 25
              },
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 28,
                "end": 29
              },
              "start": 19,
              "end": 29
            },
            "directive": null,
            "start": 19,
            "end": 30
          }
        ],
        "start": 17,
        "end": 32
      },
      "expression": false,
      "start": 0,
      "end": 32
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 40,
                "end": 43
              },
              "start": 38,
              "end": 43
            },
            "start": 37,
            "end": 43
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 55
            },
            "typeArguments": null,
            "arguments": [],
            "start": 46,
            "end": 57
          },
          "definite": false,
          "start": 37,
          "end": 57
        }
      ],
      "declare": false,
      "start": 33,
      "end": 58
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 77
}
```
