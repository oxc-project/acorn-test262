__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "name": "fn1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 12,
            "end": 82,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                          "name": "Math",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 31,
                          "end": 37,
                          "name": "random",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
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
                            "name": "fn1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
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
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
