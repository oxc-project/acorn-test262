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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 20,
            "name": "foo",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 23,
            "end": 120,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 35,
              "name": "bar",
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
                      "id": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 60,
                        "name": "intermediate",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 63,
                        "end": 68,
                        "callee": {
                          "type": "Identifier",
                          "start": 63,
                          "end": 66,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
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
                      "name": "intermediate",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
