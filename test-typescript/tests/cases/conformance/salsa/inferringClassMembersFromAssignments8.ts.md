__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 55,
  "end": 154,
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
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 62,
            "name": "app",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 65,
            "end": 133,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                      "id": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 91,
                        "name": "_this",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ThisExpression",
                        "start": 94,
                        "end": 98
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 104,
                  "end": 131,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 104,
                    "end": 131,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 104,
                      "end": 114,
                      "object": {
                        "type": "Identifier",
                        "start": 104,
                        "end": 109,
                        "name": "_this",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 110,
                        "end": 114,
                        "name": "swap",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "start": 117,
                      "end": 131,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 128,
                        "end": 131,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 139,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 142,
            "end": 151,
            "callee": {
              "type": "Identifier",
              "start": 146,
              "end": 149,
              "name": "app",
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
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 153,
      "expression": {
        "type": "Identifier",
        "start": 152,
        "end": 153,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
