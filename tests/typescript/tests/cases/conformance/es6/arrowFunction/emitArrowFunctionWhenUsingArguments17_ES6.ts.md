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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 25,
                        "end": 34
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 25,
                        "end": 34
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 25,
                      "end": 34
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 36
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 41,
                        "end": 50
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 52,
                        "end": 59
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 41,
                      "end": 59
                    }
                  ],
                  "start": 39,
                  "end": 61
                },
                "definite": false,
                "start": 23,
                "end": 61
              }
            ],
            "declare": false,
            "start": 19,
            "end": 62
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
                  "start": 71,
                  "end": 75
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 82
                },
                "optional": false,
                "computed": false,
                "start": 71,
                "end": 82
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 71,
              "end": 84
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 109,
                        "end": 118
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 119,
                        "end": 120
                      },
                      "optional": false,
                      "computed": true,
                      "start": 109,
                      "end": 121
                    },
                    "id": null,
                    "generator": false,
                    "start": 103,
                    "end": 121
                  },
                  "start": 96,
                  "end": 122
                }
              ],
              "start": 86,
              "end": 128
            },
            "alternate": null,
            "start": 67,
            "end": 128
          },
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
                  "start": 137,
                  "end": 146
                },
                "init": {
                  "type": "Literal",
                  "value": "world",
                  "raw": "\"world\"",
                  "start": 149,
                  "end": 156
                },
                "definite": false,
                "start": 137,
                "end": 156
              }
            ],
            "declare": false,
            "start": 133,
            "end": 157
          }
        ],
        "start": 13,
        "end": 159
      },
      "expression": false,
      "start": 0,
      "end": 159
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 159
}
```
