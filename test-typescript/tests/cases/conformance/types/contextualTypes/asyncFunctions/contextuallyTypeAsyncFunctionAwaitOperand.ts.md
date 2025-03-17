__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 232,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Obj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 29,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 19,
              "name": "key",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": "value",
                  "raw": "\"value\""
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 33,
      "end": 231,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 51,
        "name": "fn1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 89,
                  "name": "obj1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 84,
                    "end": 89,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 86,
                      "end": 89,
                      "typeName": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 89,
                        "name": "Obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 100,
                          "end": 103,
                          "name": "key",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 105,
                          "end": 112,
                          "value": "value",
                          "raw": "\"value\""
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 135,
                  "name": "obj2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 130,
                    "end": 135,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 132,
                      "end": 135,
                      "typeName": {
                        "type": "Identifier",
                        "start": 132,
                        "end": 135,
                        "name": "Obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 138,
                  "end": 193,
                  "argument": {
                    "type": "NewExpression",
                    "start": 144,
                    "end": 193,
                    "callee": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 155,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 156,
                        "end": 192,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 156,
                            "end": 163,
                            "name": "resolve",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "CallExpression",
                          "start": 167,
                          "end": 192,
                          "callee": {
                            "type": "Identifier",
                            "start": 167,
                            "end": 174,
                            "name": "resolve",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 177,
                                    "end": 180,
                                    "name": "key",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 182,
                                    "end": 189,
                                    "value": "value",
                                    "raw": "\"value\""
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
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 217,
                      "name": "key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 219,
                      "end": 226,
                      "value": "value",
                      "raw": "\"value\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 53,
        "end": 67,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 55,
          "end": 67,
          "typeName": {
            "type": "Identifier",
            "start": 55,
            "end": 62,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 62,
            "end": 67,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 63,
                "end": 66,
                "typeName": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 66,
                  "name": "Obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
