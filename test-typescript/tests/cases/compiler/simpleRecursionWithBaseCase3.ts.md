__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "fn1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 12,
            "end": 82,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 18,
              "end": 82,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 22,
                  "end": 69,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 47,
                    "end": 69,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 53,
                        "end": 65,
                        "argument": {
                          "type": "CallExpression",
                          "start": 60,
                          "end": 65,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 60,
                            "end": 63,
                            "decorators": [],
                            "name": "fn1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 26,
                    "end": 45,
                    "operator": ">",
                    "left": {
                      "type": "CallExpression",
                      "start": 26,
                      "end": 39,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 26,
                        "end": 37,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 26,
                          "end": 30,
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 31,
                          "end": 37,
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 42,
                      "end": 45,
                      "raw": "0.5",
                      "value": 0.5
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 72,
                  "end": 80,
                  "argument": {
                    "type": "Literal",
                    "start": 79,
                    "end": 80,
                    "raw": "0",
                    "value": 0
                  }
                }
              ]
            },
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
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
