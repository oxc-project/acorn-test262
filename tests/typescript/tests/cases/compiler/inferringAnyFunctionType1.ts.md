__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 80,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 53,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 52,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 23,
                    "end": 26,
                    "value": "0",
                    "raw": "\"0\""
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 26,
                    "end": 50,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 28,
                      "end": 50,
                      "typeParameters": null,
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
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
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
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 102,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 101,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 87,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 90,
            "end": 101,
            "callee": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 93,
                        "end": 94,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 99,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "id": null,
                    "generator": false
                  }
                ]
              }
            ],
            "optional": false
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
