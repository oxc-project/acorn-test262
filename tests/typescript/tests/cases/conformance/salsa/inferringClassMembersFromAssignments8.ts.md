__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 55,
  "end": 153,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 133,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 62,
            "decorators": [],
            "name": "app",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 65,
            "end": 133,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 76,
              "end": 133,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 82,
                  "end": 99,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 86,
                      "end": 98,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 91,
                        "decorators": [],
                        "name": "_this",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ThisExpression",
                        "start": 94,
                        "end": 98
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 104,
                  "end": 131,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 104,
                    "end": 131,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 104,
                      "end": 114,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 104,
                        "end": 109,
                        "decorators": [],
                        "name": "_this",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 110,
                        "end": 114,
                        "decorators": [],
                        "name": "swap",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "start": 117,
                      "end": 131,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 128,
                        "end": 131,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 151,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 139,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 142,
            "end": 151,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 146,
              "end": 149,
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 153,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 152,
        "end": 153,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
