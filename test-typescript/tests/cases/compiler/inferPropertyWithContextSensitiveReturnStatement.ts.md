__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 183,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 17,
      "end": 116,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 39,
        "decorators": [],
        "name": "repro",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 43,
          "end": 108,
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 49,
            "end": 108,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 51,
              "end": 108,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 55,
                  "end": 65,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 61,
                    "decorators": [],
                    "name": "params",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 64,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 63,
                      "end": 64,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 64,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 68,
                  "end": 106,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 76,
                    "decorators": [],
                    "name": "callback",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 76,
                    "end": 105,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 78,
                      "end": 105,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 81,
                        "end": 105,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 84,
                          "end": 105,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 85,
                              "end": 94,
                              "decorators": [],
                              "name": "params",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 91,
                                "end": 94,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 93,
                                  "end": 94,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 93,
                                    "end": 94,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 96,
                            "end": 105,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 99,
                              "end": 105
                            }
                          },
                          "typeParameters": null
                        }
                      },
                      "typeParameters": null
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 109,
        "end": 115,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 111,
          "end": 115
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 39,
        "end": 42,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 40,
            "end": 41,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 183,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 118,
        "end": 182,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 124,
            "end": 181,
            "properties": [
              {
                "type": "Property",
                "start": 128,
                "end": 137,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 134,
                  "decorators": [],
                  "name": "params",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 136,
                  "end": 137,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 141,
                "end": 178,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 149,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 151,
                  "end": 178,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 157,
                    "end": 178,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 159,
                        "end": 176,
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "start": 166,
                          "end": 176,
                          "async": false,
                          "body": {
                            "type": "BinaryExpression",
                            "start": 171,
                            "end": 176,
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "start": 171,
                              "end": 172,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 175,
                              "end": 176,
                              "raw": "1",
                              "value": 1,
                              "regex": null,
                              "bigint": null
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 166,
                              "end": 167,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 118,
          "end": 123,
          "decorators": [],
          "name": "repro",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
