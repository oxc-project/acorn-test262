__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 110,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 110,
        "body": [
          {
            "type": "IfStatement",
            "start": 19,
            "end": 108,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 38,
              "end": 108,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 48,
                  "end": 70,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 54,
                      "end": 69,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 63,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 66,
                        "end": 69,
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
                  "start": 79,
                  "end": 102,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 86,
                    "end": 101,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 101,
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
              "start": 23,
              "end": 36,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 23,
                "end": 34,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 27,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 34,
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
