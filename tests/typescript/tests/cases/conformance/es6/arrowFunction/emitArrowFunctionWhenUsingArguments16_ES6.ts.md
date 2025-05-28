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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 140,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 43,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 42,
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
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 48,
            "end": 109,
            "test": {
              "type": "CallExpression",
              "start": 52,
              "end": 65,
              "callee": {
                "type": "MemberExpression",
                "start": 52,
                "end": 63,
                "object": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 56,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 63,
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
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "start": 90,
                      "end": 102,
                      "object": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 99,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Literal",
                        "start": 100,
                        "end": 101,
                        "value": 0,
                        "raw": "0"
                      },
                      "optional": false,
                      "computed": true
                    },
                    "id": null,
                    "generator": false
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 114,
            "end": 138,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 118,
                "end": 137,
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
                  "value": "world",
                  "raw": "\"world\""
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
