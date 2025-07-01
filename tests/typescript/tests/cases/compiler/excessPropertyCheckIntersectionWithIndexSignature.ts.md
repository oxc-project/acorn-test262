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
            "name": "x",
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
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 35,
                                "end": 41
                              },
                              "start": 33,
                              "end": 41
                            },
                            "start": 32,
                            "end": 41
                          }
                        ],
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 46,
                                  "end": 47
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 49,
                                      "end": 50
                                    },
                                    "start": 49,
                                    "end": 50
                                  },
                                  "start": 47,
                                  "end": 50
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 46,
                                "end": 50
                              }
                            ],
                            "start": 44,
                            "end": 52
                          },
                          "start": 42,
                          "end": 52
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 31,
                        "end": 52
                      }
                    ],
                    "start": 29,
                    "end": 54
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 63,
                                "end": 69
                              },
                              "start": 61,
                              "end": 69
                            },
                            "start": 60,
                            "end": 69
                          }
                        ],
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
                                  "start": 74,
                                  "end": 75
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 77,
                                      "end": 78
                                    },
                                    "start": 77,
                                    "end": 78
                                  },
                                  "start": 75,
                                  "end": 78
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 74,
                                "end": 78
                              }
                            ],
                            "start": 72,
                            "end": 80
                          },
                          "start": 70,
                          "end": 80
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 59,
                        "end": 80
                      }
                    ],
                    "start": 57,
                    "end": 82
                  }
                ],
                "start": 29,
                "end": 82
              },
              "start": 27,
              "end": 82
            },
            "start": 26,
            "end": 82
          },
          "init": null,
          "definite": false,
          "start": 26,
          "end": 82
        }
      ],
      "declare": false,
      "start": 22,
      "end": 83
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 85,
          "end": 86
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 92
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 96,
                      "end": 97
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 99,
                      "end": 100
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 96,
                    "end": 100
                  }
                ],
                "start": 94,
                "end": 102
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 91,
              "end": 102
            }
          ],
          "start": 89,
          "end": 104
        },
        "start": 85,
        "end": 104
      },
      "directive": null,
      "start": 85,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 116,
          "end": 117
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 123
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 127,
                      "end": 128
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 130,
                      "end": 131
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 127,
                    "end": 131
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 133,
                      "end": 134
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 136,
                      "end": 137
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 133,
                    "end": 137
                  }
                ],
                "start": 125,
                "end": 139
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 122,
              "end": 139
            }
          ],
          "start": 120,
          "end": 141
        },
        "start": 116,
        "end": 141
      },
      "directive": null,
      "start": 116,
      "end": 142
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 143,
          "end": 144
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 150
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 154,
                      "end": 155
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 157,
                      "end": 158
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 154,
                    "end": 158
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 160,
                      "end": 161
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 163,
                      "end": 164
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 160,
                    "end": 164
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 166,
                      "end": 167
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 169,
                      "end": 170
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 166,
                    "end": 170
                  }
                ],
                "start": 152,
                "end": 172
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 149,
              "end": 172
            }
          ],
          "start": 147,
          "end": 174
        },
        "start": 143,
        "end": 174
      },
      "directive": null,
      "start": 143,
      "end": 175
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 193
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 199
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 201,
                "end": 207
              },
              "start": 199,
              "end": 207
            },
            "accessibility": null,
            "static": false,
            "start": 198,
            "end": 207
          }
        ],
        "start": 196,
        "end": 209
      },
      "declare": false,
      "start": 187,
      "end": 210
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 216,
        "end": 217
      },
      "typeParameters": null,
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
              "start": 222,
              "end": 223
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 225,
                "end": 231
              },
              "start": 223,
              "end": 231
            },
            "accessibility": null,
            "static": false,
            "start": 222,
            "end": 231
          }
        ],
        "start": 220,
        "end": 233
      },
      "declare": false,
      "start": 211,
      "end": 234
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
            "name": "yy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 246,
                      "end": 252
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 253,
                          "end": 259
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 261,
                            "end": 262
                          },
                          "typeArguments": null,
                          "start": 261,
                          "end": 262
                        }
                      ],
                      "start": 252,
                      "end": 263
                    },
                    "start": 246,
                    "end": 263
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 266,
                      "end": 272
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 273,
                          "end": 279
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 281,
                            "end": 282
                          },
                          "typeArguments": null,
                          "start": 281,
                          "end": 282
                        }
                      ],
                      "start": 272,
                      "end": 283
                    },
                    "start": 266,
                    "end": 283
                  }
                ],
                "start": 246,
                "end": 283
              },
              "start": 244,
              "end": 283
            },
            "start": 242,
            "end": 283
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 292,
                  "end": 295
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 299,
                        "end": 300
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 302,
                        "end": 304
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 299,
                      "end": 304
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 306,
                        "end": 307
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 309,
                        "end": 311
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 306,
                      "end": 311
                    }
                  ],
                  "start": 297,
                  "end": 313
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 292,
                "end": 313
              }
            ],
            "start": 286,
            "end": 316
          },
          "definite": false,
          "start": 242,
          "end": 316
        }
      ],
      "declare": false,
      "start": 236,
      "end": 317
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 317
}
```
