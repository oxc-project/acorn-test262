__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn1",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 26,
                          "end": 30
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 31,
                          "end": 37
                        },
                        "optional": false,
                        "computed": false,
                        "start": 26,
                        "end": 37
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 26,
                      "end": 39
                    },
                    "operator": ">",
                    "right": {
                      "type": "Literal",
                      "value": 0.5,
                      "raw": "0.5",
                      "start": 42,
                      "end": 45
                    },
                    "start": 26,
                    "end": 45
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 60,
                            "end": 63
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 60,
                          "end": 65
                        },
                        "start": 53,
                        "end": 65
                      }
                    ],
                    "start": 47,
                    "end": 69
                  },
                  "alternate": null,
                  "start": 22,
                  "end": 69
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 79,
                    "end": 80
                  },
                  "start": 72,
                  "end": 80
                }
              ],
              "start": 18,
              "end": 82
            },
            "id": null,
            "generator": false,
            "start": 12,
            "end": 82
          },
          "definite": false,
          "start": 6,
          "end": 82
        }
      ],
      "declare": false,
      "start": 0,
      "end": 82
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 82
}
```
