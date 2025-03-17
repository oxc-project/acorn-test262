__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 184,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 17,
      "end": 116,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 39,
        "name": "repro",
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
          "start": 43,
          "end": 108,
          "name": "config",
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
                    "name": "params",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                    "name": "callback",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                              "name": "params",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 109,
        "end": 115,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 111,
          "end": 115
        }
      }
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
          "name": "repro",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 134,
                  "name": "params",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 136,
                  "end": 137,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 141,
                "end": 178,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 149,
                  "name": "callback",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 151,
                  "end": 178,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 166,
                              "end": 167,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BinaryExpression",
                            "start": 171,
                            "end": 176,
                            "left": {
                              "type": "Identifier",
                              "start": 171,
                              "end": 172,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                          "typeParameters": null,
                          "returnType": null
                        }
                      }
                    ]
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
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
