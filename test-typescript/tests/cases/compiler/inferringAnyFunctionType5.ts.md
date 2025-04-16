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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 52,
          "end": 56,
          "name": "p",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 51,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 50,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 24,
                    "name": "q",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 24,
                    "end": 48,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 26,
                      "end": 48,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 27,
                          "end": 37,
                          "name": "p1",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 29,
                            "end": 37,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 31,
                              "end": 37
                            }
                          },
                          "decorators": [],
                          "optional": false
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 88,
            "end": 104,
            "callee": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 93,
                      "name": "q",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 95,
                      "end": 101,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 95,
                          "end": 96,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Identifier",
                        "start": 100,
                        "end": 101,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
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
