__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 32
                },
                "init": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 35,
                  "end": 42
                },
                "definite": false,
                "start": 23,
                "end": 42
              }
            ],
            "declare": false,
            "start": 19,
            "end": 43
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 56
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 63
                },
                "optional": false,
                "computed": false,
                "start": 52,
                "end": 63
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 52,
              "end": 65
            },
            "consequent": {
              "type": "BlockStatement",
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
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 83,
                        "end": 92
                      },
                      "init": {
                        "type": "Literal",
                        "value": 100,
                        "raw": "100",
                        "start": 95,
                        "end": 98
                      },
                      "definite": false,
                      "start": 83,
                      "end": 98
                    }
                  ],
                  "declare": false,
                  "start": 77,
                  "end": 99
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 121,
                      "end": 130
                    },
                    "id": null,
                    "generator": false,
                    "start": 115,
                    "end": 130
                  },
                  "start": 108,
                  "end": 131
                }
              ],
              "start": 67,
              "end": 137
            },
            "alternate": null,
            "start": 48,
            "end": 137
          }
        ],
        "start": 13,
        "end": 139
      },
      "expression": false,
      "start": 0,
      "end": 139
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 139
}
```
