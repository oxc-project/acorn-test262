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
        "name": "myWrapper",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 71
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
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "module",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 91
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "exports",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 99
                },
                "optional": false,
                "computed": false,
                "start": 85,
                "end": 99
              },
              "prefix": true,
              "start": 84,
              "end": 99
            },
            "consequent": {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "module",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 101,
                    "end": 107
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "exports",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 108,
                    "end": 115
                  },
                  "optional": false,
                  "computed": false,
                  "start": 101,
                  "end": 115
                },
                "right": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 118,
                  "end": 120
                },
                "start": 101,
                "end": 120
              },
              "directive": null,
              "start": 101,
              "end": 121
            },
            "alternate": null,
            "start": 80,
            "end": 121
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
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 131
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 134,
                  "end": 138
                },
                "definite": false,
                "start": 130,
                "end": 138
              }
            ],
            "declare": false,
            "start": 126,
            "end": 139
          }
        ],
        "start": 74,
        "end": 174
      },
      "expression": false,
      "start": 53,
      "end": 174
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 53,
  "end": 174
}
```
