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
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 50,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 53,
                  "end": 60,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 66,
            "end": 155,
            "test": {
              "type": "CallExpression",
              "start": 70,
              "end": 83,
              "callee": {
                "type": "MemberExpression",
                "start": 70,
                "end": 81,
                "object": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 74,
                  "name": "Math",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 81,
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
                      "id": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 110,
                        "name": "arguments",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 113,
                        "end": 116,
                        "value": 100,
                        "raw": "100"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 126,
                  "end": 149,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 133,
                    "end": 148,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 148,
                      "name": "arguments",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
