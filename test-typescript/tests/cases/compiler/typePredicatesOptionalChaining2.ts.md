__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 344,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "name": "Person",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 14,
        "end": 31,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 29,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 20,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 47,
            "name": "getName1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 50,
            "end": 145,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 51,
                "end": 66,
                "name": "person",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 58,
                  "end": 66,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 60,
                    "end": 66,
                    "typeName": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 66,
                      "name": "Person",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
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
                    "test": {
                      "type": "BinaryExpression",
                      "start": 90,
                      "end": 122,
                      "left": {
                        "type": "UnaryExpression",
                        "start": 90,
                        "end": 109,
                        "operator": "typeof",
                        "prefix": true,
                        "argument": {
                          "type": "ChainExpression",
                          "start": 97,
                          "end": 109,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 97,
                            "end": 109,
                            "object": {
                              "type": "Identifier",
                              "start": 97,
                              "end": 103,
                              "name": "person",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 105,
                              "end": 109,
                              "name": "name",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": true
                          }
                        }
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 114,
                        "end": 122,
                        "value": "string",
                        "raw": "'string'"
                      }
                    },
                    "consequent": {
                      "type": "ChainExpression",
                      "start": 125,
                      "end": 137,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 125,
                        "end": 137,
                        "object": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 131,
                          "name": "person",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 137,
                          "name": "name",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": true
                      }
                    },
                    "alternate": {
                      "type": "Literal",
                      "start": 140,
                      "end": 142,
                      "value": "",
                      "raw": "''"
                    }
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 75,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 69,
                "end": 75
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 162,
            "name": "isString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 165,
            "end": 237,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 166,
                "end": 176,
                "name": "value",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 171,
                  "end": 176,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 173,
                    "end": 176
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                    "left": {
                      "type": "UnaryExpression",
                      "start": 209,
                      "end": 221,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 216,
                        "end": 221,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 226,
                      "end": 234,
                      "value": "string",
                      "raw": "'string'"
                    }
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 194,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 179,
                "end": 194,
                "parameterName": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 184,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "asserts": false,
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
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 246,
            "end": 254,
            "name": "getName2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 257,
            "end": 342,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 258,
                "end": 273,
                "name": "person",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 265,
                  "end": 273,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 267,
                    "end": 273,
                    "typeName": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 273,
                      "name": "Person",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
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
                    "test": {
                      "type": "CallExpression",
                      "start": 297,
                      "end": 319,
                      "callee": {
                        "type": "Identifier",
                        "start": 297,
                        "end": 305,
                        "name": "isString",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ChainExpression",
                          "start": 306,
                          "end": 318,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 306,
                            "end": 318,
                            "object": {
                              "type": "Identifier",
                              "start": 306,
                              "end": 312,
                              "name": "person",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 314,
                              "end": 318,
                              "name": "name",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": true
                          }
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "consequent": {
                      "type": "ChainExpression",
                      "start": 322,
                      "end": 334,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 322,
                        "end": 334,
                        "object": {
                          "type": "Identifier",
                          "start": 322,
                          "end": 328,
                          "name": "person",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 330,
                          "end": 334,
                          "name": "name",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": true
                      }
                    },
                    "alternate": {
                      "type": "Literal",
                      "start": 337,
                      "end": 339,
                      "value": "",
                      "raw": "''"
                    }
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 274,
              "end": 282,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 276,
                "end": 282
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
