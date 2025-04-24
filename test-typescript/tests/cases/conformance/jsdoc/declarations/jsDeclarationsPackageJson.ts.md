__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 10,
            "end": 35,
            "arguments": [
              {
                "type": "Literal",
                "start": 18,
                "end": 34,
                "raw": "\"./package.json\"",
                "value": "./package.json"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 10,
              "end": 17,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 56,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 37,
        "end": 55,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 37,
          "end": 51,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 37,
            "end": 43,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 44,
            "end": 51,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 54,
          "end": 55,
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
