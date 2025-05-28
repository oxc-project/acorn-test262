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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 120,
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
                "typeParameters": null,
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
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 23,
            "end": 120,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 35,
              "decorators": [],
              "name": "bar",
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
              "start": 38,
              "end": 120,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 44,
                  "end": 69,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 48,
                      "end": 68,
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
                        "callee": {
                          "type": "Identifier",
                          "start": 63,
                          "end": 66,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 74,
                  "end": 94,
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
                          "value": "",
                          "raw": "\"\""
                        }
                      ]
                    }
                  },
                  "directive": null
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
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
