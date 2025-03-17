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
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 71,
        "name": "myWrapper",
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
        "start": 74,
        "end": 174,
        "body": [
          {
            "type": "IfStatement",
            "start": 80,
            "end": 121,
            "test": {
              "type": "UnaryExpression",
              "start": 84,
              "end": 99,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "start": 85,
                "end": 99,
                "object": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 91,
                  "name": "module",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 99,
                  "name": "exports",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "consequent": {
              "type": "ExpressionStatement",
              "start": 101,
              "end": 121,
              "expression": {
                "type": "AssignmentExpression",
                "start": 101,
                "end": 120,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 101,
                  "end": 115,
                  "object": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 107,
                    "name": "module",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 115,
                    "name": "exports",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 118,
                  "end": 120,
                  "value": "",
                  "raw": "\"\""
                }
              },
              "directive": null
            },
            "alternate": null
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
                "id": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 131,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 134,
                  "end": 138,
                  "value": null,
                  "raw": "null"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
