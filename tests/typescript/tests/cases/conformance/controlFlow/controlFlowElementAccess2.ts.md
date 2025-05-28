__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 421,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 73,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 72,
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
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 55,
                                  "end": 59,
                                  "decorators": [],
                                  "name": "prop",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 59,
                                  "end": 67,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 61,
                                    "end": 67
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
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 75,
      "end": 249,
      "test": {
        "type": "BinaryExpression",
        "start": 79,
        "end": 115,
        "left": {
          "type": "UnaryExpression",
          "start": 79,
          "end": 101,
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "start": 86,
            "end": 101,
            "object": {
              "type": "Identifier",
              "start": 86,
              "end": 92,
              "decorators": [],
              "name": "config",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 93,
              "end": 100,
              "value": "works",
              "raw": "'works'"
            },
            "optional": false,
            "computed": true
          },
          "prefix": true
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 106,
          "end": 115,
          "value": "boolean",
          "raw": "'boolean'"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 117,
        "end": 249,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 123,
            "end": 150,
            "expression": {
              "type": "AssignmentExpression",
              "start": 123,
              "end": 149,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 123,
                "end": 140,
                "object": {
                  "type": "MemberExpression",
                  "start": 123,
                  "end": 135,
                  "object": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 129,
                    "decorators": [],
                    "name": "config",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 135,
                    "decorators": [],
                    "name": "works",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 140,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 143,
                "end": 149,
                "value": "test",
                "raw": "'test'"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 161,
            "end": 191,
            "expression": {
              "type": "AssignmentExpression",
              "start": 161,
              "end": 190,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 161,
                "end": 181,
                "object": {
                  "type": "MemberExpression",
                  "start": 161,
                  "end": 176,
                  "object": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 167,
                    "decorators": [],
                    "name": "config",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 168,
                    "end": 175,
                    "value": "works",
                    "raw": "'works'"
                  },
                  "optional": false,
                  "computed": true
                },
                "property": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 181,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 184,
                "end": 190,
                "value": "test",
                "raw": "'test'"
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 250,
      "end": 421,
      "test": {
        "type": "BinaryExpression",
        "start": 254,
        "end": 287,
        "left": {
          "type": "UnaryExpression",
          "start": 254,
          "end": 273,
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "start": 261,
            "end": 273,
            "object": {
              "type": "Identifier",
              "start": 261,
              "end": 267,
              "decorators": [],
              "name": "config",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 268,
              "end": 273,
              "decorators": [],
              "name": "works",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "prefix": true
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 278,
          "end": 287,
          "value": "boolean",
          "raw": "'boolean'"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 289,
        "end": 421,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 295,
            "end": 325,
            "expression": {
              "type": "AssignmentExpression",
              "start": 295,
              "end": 324,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 295,
                "end": 315,
                "object": {
                  "type": "MemberExpression",
                  "start": 295,
                  "end": 310,
                  "object": {
                    "type": "Identifier",
                    "start": 295,
                    "end": 301,
                    "decorators": [],
                    "name": "config",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 302,
                    "end": 309,
                    "value": "works",
                    "raw": "'works'"
                  },
                  "optional": false,
                  "computed": true
                },
                "property": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 315,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 318,
                "end": 324,
                "value": "test",
                "raw": "'test'"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 386,
            "end": 413,
            "expression": {
              "type": "AssignmentExpression",
              "start": 386,
              "end": 412,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 386,
                "end": 403,
                "object": {
                  "type": "MemberExpression",
                  "start": 386,
                  "end": 398,
                  "object": {
                    "type": "Identifier",
                    "start": 386,
                    "end": 392,
                    "decorators": [],
                    "name": "config",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 393,
                    "end": 398,
                    "decorators": [],
                    "name": "works",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 399,
                  "end": 403,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 406,
                "end": 412,
                "value": "test",
                "raw": "'test'"
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
