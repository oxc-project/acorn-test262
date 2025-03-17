__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 157,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 157,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 157,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 37,
            "end": 61,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 41,
                "end": 60,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 50,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 53,
                  "end": 60,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "start": 66,
            "end": 155,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 85,
              "end": 155,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 95,
                  "end": 117,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 101,
                      "end": 116,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 110,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 113,
                        "end": 116,
                        "raw": "100",
                        "value": 100
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ReturnStatement",
                  "start": 126,
                  "end": 149,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 133,
                    "end": 148,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 148,
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 70,
              "end": 83,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 70,
                "end": 81,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 74,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 81,
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "f",
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
