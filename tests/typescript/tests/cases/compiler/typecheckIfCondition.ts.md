__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 53,
  "end": 174,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 71,
        "decorators": [],
        "name": "myWrapper",
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
              "argument": {
                "type": "MemberExpression",
                "start": 85,
                "end": 99,
                "object": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 91,
                  "decorators": [],
                  "name": "module",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 99,
                  "decorators": [],
                  "name": "exports",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "prefix": true
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
                    "decorators": [],
                    "name": "module",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 115,
                    "decorators": [],
                    "name": "exports",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 130,
                "end": 138,
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
                  "value": null,
                  "raw": "null"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
