__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 343,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 31,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 14,
        "end": 31,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 29,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 20,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 145,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 47,
            "decorators": [],
            "name": "getName1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 50,
            "end": 145,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 79,
              "end": 145,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 83,
                  "end": 143,
                  "argument": {
                    "type": "ConditionalExpression",
                    "start": 90,
                    "end": 142,
                    "alternate": {
                      "type": "Literal",
                      "start": 140,
                      "end": 142,
                      "raw": "''",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    },
                    "consequent": {
                      "type": "ChainExpression",
                      "start": 125,
                      "end": 137,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 125,
                        "end": 137,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 131,
                          "decorators": [],
                          "name": "person",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": true,
                        "property": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 137,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 90,
                      "end": 122,
                      "operator": "===",
                      "left": {
                        "type": "UnaryExpression",
                        "start": 90,
                        "end": 109,
                        "argument": {
                          "type": "ChainExpression",
                          "start": 97,
                          "end": 109,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 97,
                            "end": 109,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 97,
                              "end": 103,
                              "decorators": [],
                              "name": "person",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": true,
                            "property": {
                              "type": "Identifier",
                              "start": 105,
                              "end": 109,
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "operator": "typeof",
                        "prefix": true
                      },
                      "right": {
                        "type": "Literal",
                        "start": 114,
                        "end": 122,
                        "raw": "'string'",
                        "value": "string",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 51,
                "end": 66,
                "decorators": [],
                "name": "person",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 58,
                  "end": 66,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 60,
                    "end": 66,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 66,
                      "decorators": [],
                      "name": "Person",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 75,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 69,
                "end": 75
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 238,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 237,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 162,
            "decorators": [],
            "name": "isString",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 165,
            "end": 237,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 198,
              "end": 237,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 202,
                  "end": 235,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 209,
                    "end": 234,
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "start": 209,
                      "end": 221,
                      "argument": {
                        "type": "Identifier",
                        "start": 216,
                        "end": 221,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "typeof",
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "start": 226,
                      "end": 234,
                      "raw": "'string'",
                      "value": "string",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 166,
                "end": 176,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 171,
                  "end": 176,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 173,
                    "end": 176
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 194,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 179,
                "end": 194,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 184,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 188,
                  "end": 194,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 188,
                    "end": 194
                  }
                }
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 240,
      "end": 343,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 246,
          "end": 342,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 246,
            "end": 254,
            "decorators": [],
            "name": "getName2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 257,
            "end": 342,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 286,
              "end": 342,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 290,
                  "end": 340,
                  "argument": {
                    "type": "ConditionalExpression",
                    "start": 297,
                    "end": 339,
                    "alternate": {
                      "type": "Literal",
                      "start": 337,
                      "end": 339,
                      "raw": "''",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    },
                    "consequent": {
                      "type": "ChainExpression",
                      "start": 322,
                      "end": 334,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 322,
                        "end": 334,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 322,
                          "end": 328,
                          "decorators": [],
                          "name": "person",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": true,
                        "property": {
                          "type": "Identifier",
                          "start": 330,
                          "end": 334,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "test": {
                      "type": "CallExpression",
                      "start": 297,
                      "end": 319,
                      "arguments": [
                        {
                          "type": "ChainExpression",
                          "start": 306,
                          "end": 318,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 306,
                            "end": 318,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 306,
                              "end": 312,
                              "decorators": [],
                              "name": "person",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": true,
                            "property": {
                              "type": "Identifier",
                              "start": 314,
                              "end": 318,
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 297,
                        "end": 305,
                        "decorators": [],
                        "name": "isString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 258,
                "end": 273,
                "decorators": [],
                "name": "person",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 265,
                  "end": 273,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 267,
                    "end": 273,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 273,
                      "decorators": [],
                      "name": "Person",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 274,
              "end": 282,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 276,
                "end": 282
              }
            },
            "typeParameters": null
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
