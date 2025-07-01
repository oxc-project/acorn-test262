__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSMethodSignature",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 11,
                          "end": 12
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 16,
                                "end": 22
                              },
                              "start": 14,
                              "end": 22
                            },
                            "start": 13,
                            "end": 22
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 25,
                            "end": 29
                          },
                          "start": 23,
                          "end": 29
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 11,
                        "end": 29
                      }
                    ],
                    "start": 9,
                    "end": 31
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 34,
                      "end": 40
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 41,
                          "end": 47
                        },
                        {
                          "type": "TSUnknownKeyword",
                          "start": 49,
                          "end": 56
                        }
                      ],
                      "start": 40,
                      "end": 57
                    },
                    "start": 34,
                    "end": 57
                  }
                ],
                "start": 9,
                "end": 57
              },
              "start": 7,
              "end": 57
            },
            "start": 4,
            "end": 57
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 66,
                    "end": 67
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 69
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 71,
                      "end": 74
                    },
                    "expression": false,
                    "start": 67,
                    "end": 74
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 66,
                  "end": 74
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 115,
                    "end": 116
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 117,
                        "end": 118
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 120,
                      "end": 123
                    },
                    "expression": false,
                    "start": 116,
                    "end": 123
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 115,
                  "end": 123
                }
              ],
              "start": 60,
              "end": 125
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 138,
                        "end": 139
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 143,
                              "end": 149
                            },
                            "start": 141,
                            "end": 149
                          },
                          "start": 140,
                          "end": 149
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 152,
                          "end": 156
                        },
                        "start": 150,
                        "end": 156
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 138,
                      "end": 156
                    }
                  ],
                  "start": 136,
                  "end": 158
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 167
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 168,
                        "end": 174
                      },
                      {
                        "type": "TSUnknownKeyword",
                        "start": 176,
                        "end": 183
                      }
                    ],
                    "start": 167,
                    "end": 184
                  },
                  "start": 161,
                  "end": 184
                }
              ],
              "start": 136,
              "end": 184
            },
            "start": 60,
            "end": 184
          },
          "definite": false,
          "start": 4,
          "end": 184
        }
      ],
      "declare": false,
      "start": 0,
      "end": 185
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSSatisfiesExpression",
        "expression": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 249
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 250,
                    "end": 251
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 253,
                  "end": 256
                },
                "expression": false,
                "start": 249,
                "end": 256
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 248,
              "end": 256
            }
          ],
          "start": 246,
          "end": 258
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 273
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 277,
                      "end": 283
                    },
                    "start": 275,
                    "end": 283
                  },
                  "start": 274,
                  "end": 283
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 286,
                  "end": 290
                },
                "start": 284,
                "end": 290
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 272,
              "end": 290
            }
          ],
          "start": 270,
          "end": 292
        },
        "start": 245,
        "end": 292
      },
      "directive": null,
      "start": 245,
      "end": 293
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 293
}
```
