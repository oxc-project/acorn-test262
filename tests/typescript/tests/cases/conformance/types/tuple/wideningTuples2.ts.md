__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 120,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 20,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 20,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 9,
                "end": 20,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 12,
                  "end": 20,
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "start": 15,
                    "end": 20,
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 16,
                        "end": 19
                      }
                    ]
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 23,
            "end": 120,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 38,
              "end": 120,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 44,
                  "end": 69,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 48,
                      "end": 68,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 60,
                        "decorators": [],
                        "name": "intermediate",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 63,
                        "end": 68,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 63,
                          "end": 66,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 74,
                  "end": 94,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 74,
                    "end": 93,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 74,
                      "end": 86,
                      "decorators": [],
                      "name": "intermediate",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 89,
                      "end": 93,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 90,
                          "end": 92,
                          "raw": "\"\"",
                          "value": ""
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 99,
                  "end": 118,
                  "argument": {
                    "type": "ArrayExpression",
                    "start": 106,
                    "end": 117,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 107,
                        "end": 116,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 35,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
