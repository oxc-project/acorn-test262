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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 82,
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
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 18,
              "end": 82,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 22,
                  "end": 69,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 26,
                    "end": 45,
                    "left": {
                      "type": "CallExpression",
                      "start": 26,
                      "end": 39,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 26,
                        "end": 37,
                        "object": {
                          "type": "Identifier",
                          "start": 26,
                          "end": 30,
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 31,
                          "end": 37,
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "operator": ">",
                    "right": {
                      "type": "Literal",
                      "start": 42,
                      "end": 45,
                      "value": 0.5,
                      "raw": "0.5"
                    }
                  },
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
                          "callee": {
                            "type": "Identifier",
                            "start": 60,
                            "end": 63,
                            "decorators": [],
                            "name": "fn1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 72,
                  "end": 80,
                  "argument": {
                    "type": "Literal",
                    "start": 79,
                    "end": 80,
                    "value": 0,
                    "raw": "0"
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
