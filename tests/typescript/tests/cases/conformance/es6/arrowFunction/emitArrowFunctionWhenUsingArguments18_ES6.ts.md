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
        "end": 124,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 59,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 58,
                "id": {
                  "type": "ObjectPattern",
                  "start": 23,
                  "end": 42,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 25,
                      "end": 40,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 25,
                        "end": 34,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 36,
                        "end": 40,
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 47,
                        "end": 56,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 47,
                        "end": 56,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 64,
            "end": 122,
            "test": {
              "type": "CallExpression",
              "start": 68,
              "end": 81,
              "callee": {
                "type": "MemberExpression",
                "start": 68,
                "end": 79,
                "object": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 72,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 79,
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
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "start": 106,
                      "end": 115,
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "id": null,
                    "generator": false
                  }
                }
              ]
            },
            "alternate": null
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
