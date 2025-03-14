controlFlowForOfStatement.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 179,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 17,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 17,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 9,
                "end": 17,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 9,
                  "end": 15
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 23,
          "end": 60,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 60,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 60,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 26,
                "end": 60,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 26,
                    "end": 32
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 35,
                    "end": 41
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 44,
                    "end": 51
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 54,
                    "end": 60,
                    "typeName": {
                      "type": "Identifier",
                      "start": 54,
                      "end": 60,
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 63,
      "end": 178,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 178,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 82,
            "end": 91,
            "expression": {
              "type": "AssignmentExpression",
              "start": 82,
              "end": 90,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 86,
                "end": 90,
                "raw": "true",
                "value": true
              }
            }
          },
          {
            "type": "ForOfStatement",
            "start": 96,
            "end": 149,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 111,
              "end": 149,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 121,
                  "end": 143,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 121,
                    "end": 142,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 121,
                      "end": 122,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 125,
                      "end": 142,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 125,
                        "end": 140,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 126,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 127,
                          "end": 140,
                          "decorators": [],
                          "name": "toExponential",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 106,
              "end": 109,
              "decorators": [],
              "name": "obj",
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 154,
            "end": 156,
            "expression": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
