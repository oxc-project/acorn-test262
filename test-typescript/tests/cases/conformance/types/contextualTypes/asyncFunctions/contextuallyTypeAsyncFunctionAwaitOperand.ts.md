__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 231,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 29,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 19,
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 28,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 21,
                "end": 28,
                "literal": {
                  "type": "Literal",
                  "start": 21,
                  "end": 28,
                  "raw": "\"value\"",
                  "value": "value",
                  "regex": null,
                  "bigint": null
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
        "end": 13,
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 33,
      "end": 231,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 68,
        "end": 231,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 74,
            "end": 115,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 80,
                "end": 114,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 89,
                  "decorators": [],
                  "name": "obj1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 84,
                    "end": 89,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 86,
                      "end": 89,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 89,
                        "decorators": [],
                        "name": "Obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 92,
                  "end": 114,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 98,
                    "end": 114,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 100,
                        "end": 112,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 100,
                          "end": 103,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 105,
                          "end": 112,
                          "raw": "\"value\"",
                          "value": "value",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 120,
            "end": 194,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 126,
                "end": 193,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 135,
                  "decorators": [],
                  "name": "obj2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 130,
                    "end": 135,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 132,
                      "end": 135,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 132,
                        "end": 135,
                        "decorators": [],
                        "name": "Obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 138,
                  "end": 193,
                  "argument": {
                    "type": "NewExpression",
                    "start": 144,
                    "end": 193,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 156,
                        "end": 192,
                        "async": false,
                        "body": {
                          "type": "CallExpression",
                          "start": 167,
                          "end": 192,
                          "arguments": [
                            {
                              "type": "ObjectExpression",
                              "start": 175,
                              "end": 191,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 177,
                                  "end": 189,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 177,
                                    "end": 180,
                                    "decorators": [],
                                    "name": "key",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 182,
                                    "end": 189,
                                    "raw": "\"value\"",
                                    "value": "value",
                                    "regex": null,
                                    "bigint": null
                                  }
                                }
                              ]
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 167,
                            "end": 174,
                            "decorators": [],
                            "name": "resolve",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 156,
                            "end": 163,
                            "decorators": [],
                            "name": "resolve",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 155,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 199,
            "end": 229,
            "argument": {
              "type": "AwaitExpression",
              "start": 206,
              "end": 228,
              "argument": {
                "type": "ObjectExpression",
                "start": 212,
                "end": 228,
                "properties": [
                  {
                    "type": "Property",
                    "start": 214,
                    "end": 226,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 217,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 219,
                      "end": 226,
                      "raw": "\"value\"",
                      "value": "value",
                      "regex": null,
                      "bigint": null
                    }
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
        "start": 48,
        "end": 51,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 53,
        "end": 67,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 55,
          "end": 67,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 62,
            "end": 67,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 63,
                "end": 66,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 66,
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 55,
            "end": 62,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
