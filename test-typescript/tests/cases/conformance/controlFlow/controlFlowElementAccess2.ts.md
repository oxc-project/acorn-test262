__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 422,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 72,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 72,
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 72,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 22,
                "end": 72,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 28,
                    "end": 70,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 29,
                        "end": 40,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 32,
                          "end": 40,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 34,
                            "end": 40
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 41,
                      "end": 69,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 43,
                        "end": 69,
                        "types": [
                          {
                            "type": "TSBooleanKeyword",
                            "start": 43,
                            "end": 50
                          },
                          {
                            "type": "TSTypeLiteral",
                            "start": 53,
                            "end": 69,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 55,
                                "end": 67,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 55,
                                  "end": 59,
                                  "decorators": [],
                                  "name": "prop",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 59,
                                  "end": 67,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 61,
                                    "end": 67
                                  }
                                }
                              }
                            ]
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
      "type": "IfStatement",
      "start": 75,
      "end": 249,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 117,
        "end": 249,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 123,
            "end": 150,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 123,
              "end": 149,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 123,
                "end": 140,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 123,
                  "end": 135,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 129,
                    "decorators": [],
                    "name": "config",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 135,
                    "decorators": [],
                    "name": "works",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 140,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 143,
                "end": 149,
                "raw": "'test'",
                "value": "test"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 161,
            "end": 191,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 161,
              "end": 190,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 161,
                "end": 181,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 161,
                  "end": 176,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 167,
                    "decorators": [],
                    "name": "config",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 168,
                    "end": 175,
                    "raw": "'works'",
                    "value": "works"
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 181,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 184,
                "end": 190,
                "raw": "'test'",
                "value": "test"
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 79,
        "end": 115,
        "operator": "!==",
        "left": {
          "type": "UnaryExpression",
          "start": 79,
          "end": 101,
          "argument": {
            "type": "MemberExpression",
            "start": 86,
            "end": 101,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 86,
              "end": 92,
              "decorators": [],
              "name": "config",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 93,
              "end": 100,
              "raw": "'works'",
              "value": "works"
            }
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 106,
          "end": 115,
          "raw": "'boolean'",
          "value": "boolean"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 250,
      "end": 421,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 289,
        "end": 421,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 295,
            "end": 325,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 295,
              "end": 324,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 295,
                "end": 315,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 295,
                  "end": 310,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 295,
                    "end": 301,
                    "decorators": [],
                    "name": "config",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 302,
                    "end": 309,
                    "raw": "'works'",
                    "value": "works"
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 315,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 318,
                "end": 324,
                "raw": "'test'",
                "value": "test"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 386,
            "end": 413,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 386,
              "end": 412,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 386,
                "end": 403,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 386,
                  "end": 398,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 386,
                    "end": 392,
                    "decorators": [],
                    "name": "config",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 393,
                    "end": 398,
                    "decorators": [],
                    "name": "works",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 399,
                  "end": 403,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 406,
                "end": 412,
                "raw": "'test'",
                "value": "test"
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 254,
        "end": 287,
        "operator": "!==",
        "left": {
          "type": "UnaryExpression",
          "start": 254,
          "end": 273,
          "argument": {
            "type": "MemberExpression",
            "start": 261,
            "end": 273,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 261,
              "end": 267,
              "decorators": [],
              "name": "config",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 268,
              "end": 273,
              "decorators": [],
              "name": "works",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 278,
          "end": 287,
          "raw": "'boolean'",
          "value": "boolean"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
