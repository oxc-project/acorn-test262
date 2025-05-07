__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 210,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 95,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 95,
            "decorators": [],
            "name": "someVal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 45,
                "end": 95,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 53,
                  "end": 95,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 54,
                      "end": 94,
                      "members": [
                        {
                          "type": "TSMethodSignature",
                          "start": 60,
                          "end": 92,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 60,
                            "end": 62,
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "method",
                          "optional": true,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 64,
                              "end": 75,
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 67,
                                "end": 75,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 69,
                                  "end": 75
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 76,
                            "end": 91,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 78,
                              "end": 91,
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 78,
                                  "end": 84
                                },
                                {
                                  "type": "TSNullKeyword",
                                  "start": 87,
                                  "end": 91
                                }
                              ]
                            }
                          },
                          "static": false,
                          "typeParameters": null
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 53,
                  "decorators": [],
                  "name": "Required",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 97,
      "end": 112,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 97,
        "end": 111,
        "arguments": [
          {
            "type": "Literal",
            "start": 108,
            "end": 110,
            "raw": "\"\"",
            "value": "",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 97,
          "end": 107,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 97,
            "end": 104,
            "decorators": [],
            "name": "someVal",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 105,
            "end": 107,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 192,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 192,
            "decorators": [],
            "name": "someVal2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 192,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 138,
                "end": 192,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 146,
                  "end": 192,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 147,
                      "end": 191,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 153,
                          "end": 189,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 153,
                            "end": 155,
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": true,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 156,
                            "end": 188,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 158,
                              "end": 188,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 159,
                                  "end": 170,
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 162,
                                    "end": 170,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 164,
                                      "end": 170
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 172,
                                "end": 188,
                                "typeAnnotation": {
                                  "type": "TSUnionType",
                                  "start": 175,
                                  "end": 188,
                                  "types": [
                                    {
                                      "type": "TSStringKeyword",
                                      "start": 175,
                                      "end": 181
                                    },
                                    {
                                      "type": "TSNullKeyword",
                                      "start": 184,
                                      "end": 188
                                    }
                                  ]
                                }
                              },
                              "typeParameters": null
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 146,
                  "decorators": [],
                  "name": "Required",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 194,
      "end": 210,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 194,
        "end": 209,
        "arguments": [
          {
            "type": "Literal",
            "start": 206,
            "end": 208,
            "raw": "\"\"",
            "value": "",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 194,
          "end": 205,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 194,
            "end": 202,
            "decorators": [],
            "name": "someVal2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 203,
            "end": 205,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          }
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
