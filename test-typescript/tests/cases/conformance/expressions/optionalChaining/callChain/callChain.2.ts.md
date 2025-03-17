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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 44,
            "name": "o1",
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
                    "typeParameters": null,
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
                    }
                  }
                ]
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
      "start": 46,
      "end": 53,
      "expression": {
        "type": "ChainExpression",
        "start": 46,
        "end": 52,
        "expression": {
          "type": "CallExpression",
          "start": 46,
          "end": 52,
          "callee": {
            "type": "Identifier",
            "start": 46,
            "end": 48,
            "name": "o1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": true,
          "typeArguments": null
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 104,
            "name": "o2",
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 88,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 88,
                          "end": 102,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 90,
                            "end": 102,
                            "typeParameters": null,
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
      "start": 106,
      "end": 114,
      "expression": {
        "type": "ChainExpression",
        "start": 106,
        "end": 113,
        "expression": {
          "type": "CallExpression",
          "start": 106,
          "end": 113,
          "callee": {
            "type": "MemberExpression",
            "start": 106,
            "end": 111,
            "object": {
              "type": "Identifier",
              "start": 106,
              "end": 108,
              "name": "o2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 174,
            "name": "o3",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 137,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "typeParameters": null,
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
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 148,
                                      "end": 149,
                                      "name": "c",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 149,
                                      "end": 157,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 151,
                                        "end": 157
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 163,
                            "end": 172
                          }
                        ]
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
      "start": 176,
      "end": 187,
      "expression": {
        "type": "ChainExpression",
        "start": 176,
        "end": 186,
        "expression": {
          "type": "MemberExpression",
          "start": 176,
          "end": 186,
          "object": {
            "type": "CallExpression",
            "start": 176,
            "end": 184,
            "callee": {
              "type": "MemberExpression",
              "start": 176,
              "end": 180,
              "object": {
                "type": "Identifier",
                "start": 176,
                "end": 178,
                "name": "o3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 179,
                "end": 180,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": true,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 185,
            "end": 186,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
