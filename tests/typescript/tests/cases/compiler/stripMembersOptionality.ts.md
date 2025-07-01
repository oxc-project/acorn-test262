__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "someVal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Required",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 45,
                  "end": 53
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 60,
                            "end": 62
                          },
                          "computed": false,
                          "optional": true,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 69,
                                  "end": 75
                                },
                                "start": 67,
                                "end": 75
                              },
                              "start": 64,
                              "end": 75
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
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
                              ],
                              "start": 78,
                              "end": 91
                            },
                            "start": 76,
                            "end": 91
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 60,
                          "end": 92
                        }
                      ],
                      "start": 54,
                      "end": 94
                    }
                  ],
                  "start": 53,
                  "end": 95
                },
                "start": 45,
                "end": 95
              },
              "start": 43,
              "end": 95
            },
            "start": 36,
            "end": 95
          },
          "init": null,
          "definite": false,
          "start": 36,
          "end": 95
        }
      ],
      "declare": true,
      "start": 22,
      "end": 96
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "someVal",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 104
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 107
          },
          "optional": false,
          "computed": false,
          "start": 97,
          "end": 107
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 108,
            "end": 110
          }
        ],
        "optional": false,
        "start": 97,
        "end": 111
      },
      "directive": null,
      "start": 97,
      "end": 112
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "someVal2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Required",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 146
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 153,
                            "end": 155
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 164,
                                      "end": 170
                                    },
                                    "start": 162,
                                    "end": 170
                                  },
                                  "start": 159,
                                  "end": 170
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSUnionType",
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
                                  ],
                                  "start": 175,
                                  "end": 188
                                },
                                "start": 172,
                                "end": 188
                              },
                              "start": 158,
                              "end": 188
                            },
                            "start": 156,
                            "end": 188
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 153,
                          "end": 189
                        }
                      ],
                      "start": 147,
                      "end": 191
                    }
                  ],
                  "start": 146,
                  "end": 192
                },
                "start": 138,
                "end": 192
              },
              "start": 136,
              "end": 192
            },
            "start": 128,
            "end": 192
          },
          "init": null,
          "definite": false,
          "start": 128,
          "end": 192
        }
      ],
      "declare": true,
      "start": 114,
      "end": 193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "someVal2",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 202
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 205
          },
          "optional": false,
          "computed": false,
          "start": 194,
          "end": 205
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 206,
            "end": 208
          }
        ],
        "optional": false,
        "start": 194,
        "end": 209
      },
      "directive": null,
      "start": 194,
      "end": 210
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 210
}
```
