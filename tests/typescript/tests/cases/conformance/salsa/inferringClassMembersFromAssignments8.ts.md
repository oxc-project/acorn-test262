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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 133,
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
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 76,
              "end": 133,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 82,
                  "end": 99,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 86,
                      "end": 98,
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
                      },
                      "definite": false
                    }
                  ],
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
                        "decorators": [],
                        "name": "_this",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 110,
                        "end": 114,
                        "decorators": [],
                        "name": "swap",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "start": 117,
                      "end": 131,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 128,
                        "end": 131,
                        "body": []
                      },
                      "expression": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 151,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 151,
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
            "callee": {
              "type": "Identifier",
              "start": 146,
              "end": 149,
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
