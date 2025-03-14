__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 103,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 80,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 63,
        "end": 80,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 69,
            "end": 78,
            "argument": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "p",
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
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 54,
          "end": 58,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 58,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 57,
              "end": 58,
              "typeName": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 59,
        "end": 62,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 61,
          "end": 62,
          "typeName": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 53,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 52,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 21,
              "end": 52,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 23,
                  "end": 50,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 23,
                    "end": 26,
                    "raw": "\"0\"",
                    "value": "0"
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 26,
                    "end": 50,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 28,
                      "end": 50,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 29,
                          "end": 39,
                          "decorators": [],
                          "name": "p1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 31,
                            "end": 39,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 33,
                              "end": 39
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 41,
                        "end": 50,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 44,
                          "end": 50
                        }
                      }
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 87,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 90,
            "end": 101,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 92,
                "end": 100,
                "elements": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 93,
                    "end": 99,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 99,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 93,
                        "end": 94,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false
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
