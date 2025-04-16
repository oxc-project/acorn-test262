__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 142,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 142,
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
        "end": 142,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 37,
            "end": 77,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 41,
                "end": 76,
                "id": {
                  "type": "ObjectPattern",
                  "start": 41,
                  "end": 60,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 43,
                      "end": 58,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 43,
                        "end": 52,
                        "name": "arguments",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 58,
                        "name": "args",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 63,
                  "end": 76,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 65,
                      "end": 74,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 65,
                        "end": 74,
                        "name": "arguments",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 65,
                        "end": 74,
                        "name": "arguments",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 82,
            "end": 140,
            "test": {
              "type": "CallExpression",
              "start": 86,
              "end": 99,
              "callee": {
                "type": "MemberExpression",
                "start": 86,
                "end": 97,
                "object": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 90,
                  "name": "Math",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 97,
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
              "start": 101,
              "end": 140,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 111,
                  "end": 134,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 118,
                    "end": 133,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 133,
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
