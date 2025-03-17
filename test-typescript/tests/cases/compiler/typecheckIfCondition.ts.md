__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 53,
  "end": 175,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 174,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 74,
        "end": 174,
        "body": [
          {
            "type": "IfStatement",
            "start": 80,
            "end": 121,
            "alternate": null,
            "consequent": {
              "type": "ExpressionStatement",
              "start": 101,
              "end": 121,
              "directive": null,
              "expression": {
                "type": "AssignmentExpression",
                "start": 101,
                "end": 120,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 101,
                  "end": 115,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 107,
                    "decorators": [],
                    "name": "module",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 115,
                    "decorators": [],
                    "name": "exports",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 118,
                  "end": 120,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            },
            "test": {
              "type": "UnaryExpression",
              "start": 84,
              "end": 99,
              "argument": {
                "type": "MemberExpression",
                "start": 85,
                "end": 99,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 91,
                  "decorators": [],
                  "name": "module",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 99,
                  "decorators": [],
                  "name": "exports",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 126,
            "end": 139,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 130,
                "end": 138,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 131,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 134,
                  "end": 138,
                  "raw": "null",
                  "value": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 71,
        "decorators": [],
        "name": "myWrapper",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
