returnInfiniteIntersection.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 131,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 101,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 101,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 65,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 31,
                "end": 64,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 35,
                  "end": 64,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 53,
                    "end": 64,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 62,
                      "decorators": [],
                      "name": "recursive",
                      "optional": false
                    },
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 39,
                      "end": 48,
                      "decorators": [],
                      "name": "subkey",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 45,
                        "end": 48,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 47,
                          "end": 48,
                          "typeName": {
                            "type": "Identifier",
                            "start": 47,
                            "end": 48,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 35,
                    "end": 38,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 36,
                        "end": 37,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 36,
                          "end": 37,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ReturnStatement",
            "start": 70,
            "end": 99,
            "argument": {
              "type": "TSAsExpression",
              "start": 77,
              "end": 98,
              "expression": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 82,
                "end": 98,
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "start": 82,
                    "end": 90,
                    "exprName": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 93,
                    "end": 98,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 95,
                        "end": 96,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 96,
                          "decorators": [],
                          "name": "p",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false
                      }
                    ]
                  }
                ]
              }
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
        "end": 18,
        "decorators": [],
        "name": "recursive",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 103,
      "end": 130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 130,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 113,
            "decorators": [],
            "name": "result",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 116,
            "end": 130,
            "arguments": [
              {
                "type": "Literal",
                "start": 128,
                "end": 129,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "CallExpression",
              "start": 116,
              "end": 127,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 116,
                "end": 125,
                "decorators": [],
                "name": "recursive",
                "optional": false
              },
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
