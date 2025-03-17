__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 32,
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
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 17,
        "end": 32,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 19,
            "end": 30,
            "expression": {
              "type": "AssignmentExpression",
              "start": 19,
              "end": 29,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 19,
                "end": 25,
                "object": {
                  "type": "ThisExpression",
                  "start": 19,
                  "end": 23
                },
                "property": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 28,
                "end": 29,
                "value": 3,
                "raw": "3"
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
      "start": 33,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 57,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 43,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 43,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 40,
                "end": 43
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 46,
            "end": 57,
            "callee": {
              "type": "Identifier",
              "start": 50,
              "end": 55,
              "name": "Point",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
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
