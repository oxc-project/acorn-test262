__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 140,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 140,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 43,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 42,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 32,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 35,
                  "end": 42,
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
            "start": 48,
            "end": 109,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 67,
              "end": 109,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 77,
                  "end": 103,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 84,
                    "end": 102,
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "start": 90,
                      "end": 102,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 99,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 100,
                        "end": 101,
                        "raw": "0",
                        "value": 0
                      }
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
              "start": 52,
              "end": 65,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 52,
                "end": 63,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 56,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 63,
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 114,
            "end": 138,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 118,
                "end": 137,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 127,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 130,
                  "end": 137,
                  "raw": "\"world\"",
                  "value": "world"
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
        "start": 9,
        "end": 10,
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
