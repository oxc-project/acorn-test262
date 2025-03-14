__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 78,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 61,
        "end": 78,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 67,
            "end": 76,
            "argument": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
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
          "start": 52,
          "end": 56,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 53,
            "end": 56,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 55,
              "end": 56,
              "typeName": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
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
        "start": 57,
        "end": 60,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 59,
          "end": 60,
          "typeName": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 51,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 50,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 21,
              "end": 50,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 23,
                  "end": 48,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 24,
                    "decorators": [],
                    "name": "q",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 24,
                    "end": 48,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 26,
                      "end": 48,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 27,
                          "end": 37,
                          "decorators": [],
                          "name": "p1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 29,
                            "end": 37,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 31,
                              "end": 37
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 39,
                        "end": 48,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 42,
                          "end": 48
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
      "start": 80,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 104,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 88,
            "end": 104,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 90,
                "end": 103,
                "properties": [
                  {
                    "type": "Property",
                    "start": 92,
                    "end": 101,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 93,
                      "decorators": [],
                      "name": "q",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 95,
                      "end": 101,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 100,
                        "end": 101,
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
                          "start": 95,
                          "end": 96,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
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
