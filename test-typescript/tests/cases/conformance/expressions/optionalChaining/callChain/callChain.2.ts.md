__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 188,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 44,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 44,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 18,
                "end": 44,
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 18,
                    "end": 27
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 31,
                    "end": 43,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 34,
                      "end": 43,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 37,
                        "end": 43
                      }
                    },
                    "typeParameters": null
                  }
                ]
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
      "start": 46,
      "end": 53,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 46,
        "end": 52,
        "expression": {
          "type": "CallExpression",
          "start": 46,
          "end": 52,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 46,
            "end": 48,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": true,
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 104,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 104,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 104,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 73,
                "end": 104,
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 73,
                    "end": 82
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 85,
                    "end": 104,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 87,
                        "end": 102,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 88,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 88,
                          "end": 102,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 90,
                            "end": 102,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 93,
                              "end": 102,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 96,
                                "end": 102
                              }
                            },
                            "typeParameters": null
                          }
                        }
                      }
                    ]
                  }
                ]
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
      "start": 106,
      "end": 114,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 106,
        "end": 113,
        "expression": {
          "type": "CallExpression",
          "start": 106,
          "end": 113,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 106,
            "end": 111,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 106,
              "end": 108,
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "property": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 174,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 174,
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 174,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 134,
                "end": 174,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 136,
                    "end": 172,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 137,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 137,
                      "end": 172,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 139,
                        "end": 172,
                        "types": [
                          {
                            "type": "TSFunctionType",
                            "start": 140,
                            "end": 159,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 143,
                              "end": 159,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 146,
                                "end": 159,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 148,
                                    "end": 157,
                                    "accessibility": null,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 148,
                                      "end": 149,
                                      "decorators": [],
                                      "name": "c",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 149,
                                      "end": 157,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 151,
                                        "end": 157
                                      }
                                    }
                                  }
                                ]
                              }
                            },
                            "typeParameters": null
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 163,
                            "end": 172
                          }
                        ]
                      }
                    }
                  }
                ]
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
      "start": 176,
      "end": 187,
      "directive": null,
      "expression": {
        "type": "ChainExpression",
        "start": 176,
        "end": 186,
        "expression": {
          "type": "MemberExpression",
          "start": 176,
          "end": 186,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 176,
            "end": 184,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 176,
              "end": 180,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 176,
                "end": 178,
                "decorators": [],
                "name": "o3",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 179,
                "end": 180,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": true,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 185,
            "end": 186,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
