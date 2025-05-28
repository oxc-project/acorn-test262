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
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 39,
        "decorators": [],
        "name": "repro",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 39,
        "end": 42,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 40,
            "end": 41,
            "name": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 61,
                    "decorators": [],
                    "name": "params",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 64,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 63,
                      "end": 64,
                      "typeName": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 64,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 68,
                  "end": 106,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 76,
                    "decorators": [],
                    "name": "callback",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 76,
                    "end": 105,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 78,
                      "end": 105,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 81,
                        "end": 105,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 84,
                          "end": 105,
                          "typeParameters": null,
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
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 93,
                                    "end": 94,
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
                            "start": 96,
                            "end": 105,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 99,
                              "end": 105
                            }
                          }
                        }
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 183,
      "expression": {
        "type": "CallExpression",
        "start": 118,
        "end": 182,
        "callee": {
          "type": "Identifier",
          "start": 118,
          "end": 123,
          "decorators": [],
          "name": "repro",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 134,
                  "decorators": [],
                  "name": "params",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 136,
                  "end": 137,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 141,
                "end": 178,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 149,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 151,
                  "end": 178,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
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
                          "body": {
                            "type": "BinaryExpression",
                            "start": 171,
                            "end": 176,
                            "left": {
                              "type": "Identifier",
                              "start": 171,
                              "end": 172,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "+",
                            "right": {
                              "type": "Literal",
                              "start": 175,
                              "end": 176,
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          "id": null,
                          "generator": false
                        }
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
