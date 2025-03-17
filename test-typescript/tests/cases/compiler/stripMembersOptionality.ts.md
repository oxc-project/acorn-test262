__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 211,
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
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 95,
            "name": "someVal",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 45,
                "end": 95,
                "typeName": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 53,
                  "name": "Required",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                          "key": {
                            "type": "Identifier",
                            "start": 60,
                            "end": 62,
                            "name": "fn",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": true,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 64,
                              "end": 75,
                              "name": "key",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 67,
                                "end": 75,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 69,
                                  "end": 75
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
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
                          "accessibility": null,
                          "readonly": false,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 97,
      "end": 112,
      "expression": {
        "type": "CallExpression",
        "start": 97,
        "end": 111,
        "callee": {
          "type": "MemberExpression",
          "start": 97,
          "end": 107,
          "object": {
            "type": "Identifier",
            "start": 97,
            "end": 104,
            "name": "someVal",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 105,
            "end": 107,
            "name": "fn",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 108,
            "end": 110,
            "value": "",
            "raw": "\"\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 192,
            "name": "someVal2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 192,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 138,
                "end": 192,
                "typeName": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 146,
                  "name": "Required",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 153,
                            "end": 155,
                            "name": "fn",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 156,
                            "end": 188,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 158,
                              "end": 188,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 159,
                                  "end": 170,
                                  "name": "key",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 162,
                                    "end": 170,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 164,
                                      "end": 170
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
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
                              }
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 194,
      "end": 210,
      "expression": {
        "type": "CallExpression",
        "start": 194,
        "end": 209,
        "callee": {
          "type": "MemberExpression",
          "start": 194,
          "end": 205,
          "object": {
            "type": "Identifier",
            "start": 194,
            "end": 202,
            "name": "someVal2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 203,
            "end": 205,
            "name": "fn",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 206,
            "end": 208,
            "value": "",
            "raw": "\"\""
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
