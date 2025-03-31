__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 158,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 158,
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
        "end": 158,
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
            "end": 127,
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
              "end": 127,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 95,
                  "end": 121,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 102,
                    "end": 120,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "MemberExpression",
                      "start": 108,
                      "end": 120,
                      "object": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 117,
                        "name": "arguments",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 118,
                        "end": 119,
                        "value": 0,
                        "raw": "0"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 132,
            "end": 156,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 136,
                "end": 155,
                "id": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 145,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 148,
                  "end": 155,
                  "value": "world",
                  "raw": "\"world\""
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
