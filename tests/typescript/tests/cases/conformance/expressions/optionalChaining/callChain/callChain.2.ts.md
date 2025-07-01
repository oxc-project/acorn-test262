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
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 18,
                    "end": 27
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 37,
                        "end": 43
                      },
                      "start": 34,
                      "end": 43
                    },
                    "start": 31,
                    "end": 43
                  }
                ],
                "start": 18,
                "end": 44
              },
              "start": 16,
              "end": 44
            },
            "start": 14,
            "end": 44
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 44
        }
      ],
      "declare": true,
      "start": 0,
      "end": 45
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 48
          },
          "typeArguments": null,
          "arguments": [],
          "optional": true,
          "start": 46,
          "end": 52
        },
        "start": 46,
        "end": 52
      },
      "directive": null,
      "start": 46,
      "end": 53
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 73,
                    "end": 82
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 87,
                          "end": 88
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 96,
                                "end": 102
                              },
                              "start": 93,
                              "end": 102
                            },
                            "start": 90,
                            "end": 102
                          },
                          "start": 88,
                          "end": 102
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 87,
                        "end": 102
                      }
                    ],
                    "start": 85,
                    "end": 104
                  }
                ],
                "start": 73,
                "end": 104
              },
              "start": 71,
              "end": 104
            },
            "start": 69,
            "end": 104
          },
          "init": null,
          "definite": false,
          "start": 69,
          "end": 104
        }
      ],
      "declare": true,
      "start": 55,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 108
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 111
            },
            "optional": true,
            "computed": false,
            "start": 106,
            "end": 111
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 106,
          "end": 113
        },
        "start": 106,
        "end": 113
      },
      "directive": null,
      "start": 106,
      "end": 114
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
            "name": "o3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 136,
                      "end": 137
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "c",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 148,
                                      "end": 149
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 151,
                                        "end": 157
                                      },
                                      "start": 149,
                                      "end": 157
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 148,
                                    "end": 157
                                  }
                                ],
                                "start": 146,
                                "end": 159
                              },
                              "start": 143,
                              "end": 159
                            },
                            "start": 140,
                            "end": 159
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 163,
                            "end": 172
                          }
                        ],
                        "start": 139,
                        "end": 172
                      },
                      "start": 137,
                      "end": 172
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 136,
                    "end": 172
                  }
                ],
                "start": 134,
                "end": 174
              },
              "start": 132,
              "end": 174
            },
            "start": 130,
            "end": 174
          },
          "init": null,
          "definite": false,
          "start": 130,
          "end": 174
        }
      ],
      "declare": true,
      "start": 116,
      "end": 175
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o3",
                "optional": false,
                "typeAnnotation": null,
                "start": 176,
                "end": 178
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 180
              },
              "optional": false,
              "computed": false,
              "start": 176,
              "end": 180
            },
            "typeArguments": null,
            "arguments": [],
            "optional": true,
            "start": 176,
            "end": 184
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 186
          },
          "optional": false,
          "computed": false,
          "start": 176,
          "end": 186
        },
        "start": 176,
        "end": 186
      },
      "directive": null,
      "start": 176,
      "end": 187
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 187
}
```
