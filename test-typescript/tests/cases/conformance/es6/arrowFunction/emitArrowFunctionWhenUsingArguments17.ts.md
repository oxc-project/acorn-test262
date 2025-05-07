__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 159,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 159,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 159,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 62,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 61,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 23,
                  "end": 36,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 25,
                      "end": 34,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 25,
                        "end": 34,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 25,
                        "end": 34,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 39,
                  "end": 61,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 41,
                      "end": 59,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 41,
                        "end": 50,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 52,
                        "end": 59,
                        "raw": "\"hello\"",
                        "value": "hello",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "start": 67,
            "end": 128,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 86,
              "end": 128,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 96,
                  "end": 122,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 103,
                    "end": 121,
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "start": 109,
                      "end": 121,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 118,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 119,
                        "end": 120,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
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
              "start": 71,
              "end": 84,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 71,
                "end": 82,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 75,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 82,
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 133,
            "end": 157,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 137,
                "end": 156,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 146,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 149,
                  "end": 156,
                  "raw": "\"world\"",
                  "value": "world",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
