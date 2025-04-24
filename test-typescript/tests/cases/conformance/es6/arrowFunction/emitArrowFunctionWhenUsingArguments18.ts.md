__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 124,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 124,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 124,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 59,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 58,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 23,
                  "end": 42,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 25,
                      "end": 40,
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
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 36,
                        "end": 40,
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 45,
                  "end": 58,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 47,
                      "end": 56,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 47,
                        "end": 56,
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
                        "start": 47,
                        "end": 56,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 64,
            "end": 122,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 83,
              "end": 122,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 93,
                  "end": 116,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 100,
                    "end": 115,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 106,
                      "end": 115,
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null
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
              "start": 68,
              "end": 81,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 68,
                "end": 79,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 72,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 79,
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
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
