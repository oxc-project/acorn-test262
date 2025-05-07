__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 139,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 139,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 139,
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
                  "value": "hello",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "start": 48,
            "end": 137,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 67,
              "end": 137,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 77,
                  "end": 99,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 83,
                      "end": 98,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 83,
                        "end": 92,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 95,
                        "end": 98,
                        "raw": "100",
                        "value": 100,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ReturnStatement",
                  "start": 108,
                  "end": 131,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 115,
                    "end": 130,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 121,
                      "end": 130,
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
