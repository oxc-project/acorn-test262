__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 137,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 55,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 55,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 18,
            "end": 53,
            "parameters": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 28,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 20,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 22,
                    "end": 28
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 52,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 31,
                "end": 52,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 32,
                    "end": 41,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 33,
                      "end": 41,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 35,
                        "end": 41
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 43,
                  "end": 52,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 46,
                    "end": 52
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 65,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 65,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 64,
                "end": 65,
                "typeName": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 68,
            "end": 137,
            "properties": [
              {
                "type": "Property",
                "start": 74,
                "end": 106,
                "computed": true,
                "key": {
                  "type": "UnaryExpression",
                  "start": 75,
                  "end": 81,
                  "argument": {
                    "type": "Literal",
                    "start": 76,
                    "end": 81,
                    "raw": "\"foo\"",
                    "value": "foo"
                  },
                  "operator": "+",
                  "prefix": true
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 82,
                  "end": 106,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 86,
                    "end": 106,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 88,
                        "end": 104,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 95,
                          "end": 103,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 95,
                            "end": 96,
                            "decorators": [],
                            "name": "y",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 97,
                            "end": 103,
                            "decorators": [],
                            "name": "length",
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 83,
                      "end": 84,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 112,
                "end": 135,
                "computed": true,
                "key": {
                  "type": "UnaryExpression",
                  "start": 113,
                  "end": 119,
                  "argument": {
                    "type": "Literal",
                    "start": 114,
                    "end": 119,
                    "raw": "\"bar\"",
                    "value": "bar"
                  },
                  "operator": "+",
                  "prefix": true
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 122,
                  "end": 135,
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "start": 127,
                    "end": 135,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 127,
                      "end": 128,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 135,
                      "decorators": [],
                      "name": "length",
                      "optional": false
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 122,
                      "end": 123,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  ]
                }
              }
            ]
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
