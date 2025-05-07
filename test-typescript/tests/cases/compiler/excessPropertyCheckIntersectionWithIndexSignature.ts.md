__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 317,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 82,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 82,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 29,
                "end": 82,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 29,
                    "end": 54,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 31,
                        "end": 52,
                        "accessibility": null,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 32,
                            "end": 41,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 33,
                              "end": 41,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 35,
                                "end": 41
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 42,
                          "end": 52,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 44,
                            "end": 52,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 46,
                                "end": 50,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 46,
                                  "end": 47,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 47,
                                  "end": 50,
                                  "typeAnnotation": {
                                    "type": "TSLiteralType",
                                    "start": 49,
                                    "end": 50,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 49,
                                      "end": 50,
                                      "raw": "0",
                                      "value": 0,
                                      "regex": null,
                                      "bigint": null
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 57,
                    "end": 82,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 59,
                        "end": 80,
                        "accessibility": null,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 60,
                            "end": 69,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 61,
                              "end": 69,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 63,
                                "end": 69
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 70,
                          "end": 80,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 72,
                            "end": 80,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 74,
                                "end": 78,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 74,
                                  "end": 75,
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
                                  "start": 75,
                                  "end": 78,
                                  "typeAnnotation": {
                                    "type": "TSLiteralType",
                                    "start": 77,
                                    "end": 78,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 77,
                                      "end": 78,
                                      "raw": "0",
                                      "value": 0,
                                      "regex": null,
                                      "bigint": null
                                    }
                                  }
                                }
                              }
                            ]
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
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 105,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 85,
        "end": 104,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 85,
          "end": 86,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 89,
          "end": 104,
          "properties": [
            {
              "type": "Property",
              "start": 91,
              "end": 102,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ObjectExpression",
                "start": 94,
                "end": 102,
                "properties": [
                  {
                    "type": "Property",
                    "start": 96,
                    "end": 100,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 99,
                      "end": 100,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 142,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 116,
        "end": 141,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 116,
          "end": 117,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 120,
          "end": 141,
          "properties": [
            {
              "type": "Property",
              "start": 122,
              "end": 139,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 122,
                "end": 123,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ObjectExpression",
                "start": 125,
                "end": 139,
                "properties": [
                  {
                    "type": "Property",
                    "start": 127,
                    "end": 131,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 127,
                      "end": 128,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 130,
                      "end": 131,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 133,
                    "end": 137,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 134,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 136,
                      "end": 137,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 143,
      "end": 175,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 143,
        "end": 174,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 143,
          "end": 144,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 147,
          "end": 174,
          "properties": [
            {
              "type": "Property",
              "start": 149,
              "end": 172,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ObjectExpression",
                "start": 152,
                "end": 172,
                "properties": [
                  {
                    "type": "Property",
                    "start": 154,
                    "end": 158,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 155,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 157,
                      "end": 158,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 160,
                    "end": 164,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 161,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 163,
                      "end": 164,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 166,
                    "end": 170,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 167,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 169,
                      "end": 170,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 187,
      "end": 210,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 193,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 196,
        "end": 209,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 198,
            "end": 207,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 207,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 201,
                "end": 207
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 211,
      "end": 234,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 217,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 220,
        "end": 233,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 222,
            "end": 231,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
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
              "start": 223,
              "end": 231,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 225,
                "end": 231
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 236,
      "end": 317,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 316,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 283,
            "decorators": [],
            "name": "yy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 244,
              "end": 283,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 246,
                "end": 283,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 246,
                    "end": 263,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 252,
                      "end": 263,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 253,
                          "end": 259
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 261,
                          "end": 262,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 261,
                            "end": 262,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 246,
                      "end": 252,
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 266,
                    "end": 283,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 272,
                      "end": 283,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 273,
                          "end": 279
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 281,
                          "end": 282,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 281,
                            "end": 282,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 266,
                      "end": 272,
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 286,
            "end": 316,
            "properties": [
              {
                "type": "Property",
                "start": 292,
                "end": 313,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 295,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 297,
                  "end": 313,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 299,
                      "end": 304,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 299,
                        "end": 300,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 302,
                        "end": 304,
                        "raw": "''",
                        "value": "",
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 306,
                      "end": 311,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 306,
                        "end": 307,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 309,
                        "end": 311,
                        "raw": "''",
                        "value": "",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
