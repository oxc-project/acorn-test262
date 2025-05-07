__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 369,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 28,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 40,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 40,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 37,
                "end": 40
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 369,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 369,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 50,
            "end": 369,
            "properties": [
              {
                "type": "Property",
                "start": 56,
                "end": 79,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 62,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 63,
                  "end": 79,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 66,
                    "end": 79,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 68,
                        "end": 77,
                        "argument": {
                          "type": "Literal",
                          "start": 75,
                          "end": 76,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 85,
                "end": 99,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 91,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 92,
                  "end": 99,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 96,
                    "end": 99,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 93,
                      "end": 94,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 105,
                "end": 132,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 110,
                  "end": 115,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 111,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 115,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 116,
                  "end": 132,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 119,
                    "end": 132,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 121,
                        "end": 130,
                        "argument": {
                          "type": "Literal",
                          "start": 128,
                          "end": 129,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 138,
                "end": 156,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 143,
                  "end": 148,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 144,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 148,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 149,
                  "end": 156,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 153,
                    "end": 156,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 150,
                      "end": 151,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 162,
                "end": 186,
                "computed": true,
                "key": {
                  "type": "UnaryExpression",
                  "start": 167,
                  "end": 169,
                  "argument": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 169,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "prefix": true
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 170,
                  "end": 186,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 173,
                    "end": 186,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 175,
                        "end": 184,
                        "argument": {
                          "type": "Literal",
                          "start": 182,
                          "end": 183,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 192,
                "end": 207,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 197,
                  "end": 199,
                  "raw": "\"\"",
                  "value": "",
                  "regex": null,
                  "bigint": null
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 200,
                  "end": 207,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 204,
                    "end": 207,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 201,
                      "end": 202,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 213,
                "end": 236,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 218,
                  "end": 219,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 220,
                  "end": 236,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 223,
                    "end": 236,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 225,
                        "end": 234,
                        "argument": {
                          "type": "Literal",
                          "start": 232,
                          "end": 233,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 242,
                "end": 256,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 248,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 249,
                  "end": 256,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 253,
                    "end": 256,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 250,
                      "end": 251,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 262,
                "end": 293,
                "computed": true,
                "key": {
                  "type": "TSTypeAssertion",
                  "start": 267,
                  "end": 276,
                  "expression": {
                    "type": "Literal",
                    "start": 272,
                    "end": 276,
                    "raw": "true",
                    "value": true,
                    "regex": null,
                    "bigint": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 268,
                    "end": 271
                  }
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 277,
                  "end": 293,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 280,
                    "end": 293,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 282,
                        "end": 291,
                        "argument": {
                          "type": "Literal",
                          "start": 289,
                          "end": 290,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 299,
                "end": 323,
                "computed": true,
                "key": {
                  "type": "TemplateLiteral",
                  "start": 304,
                  "end": 315,
                  "expressions": [],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 304,
                      "end": 315,
                      "tail": true,
                      "value": {
                        "cooked": "hello bye",
                        "raw": "hello bye"
                      }
                    }
                  ]
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 316,
                  "end": 323,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 320,
                    "end": 323,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 317,
                      "end": 318,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 329,
                "end": 367,
                "computed": true,
                "key": {
                  "type": "TemplateLiteral",
                  "start": 334,
                  "end": 350,
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 343,
                      "end": 344,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 334,
                      "end": 343,
                      "tail": false,
                      "value": {
                        "cooked": "hello ",
                        "raw": "hello "
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 344,
                      "end": 350,
                      "tail": true,
                      "value": {
                        "cooked": " bye",
                        "raw": " bye"
                      }
                    }
                  ]
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 351,
                  "end": 367,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 354,
                    "end": 367,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 356,
                        "end": 365,
                        "argument": {
                          "type": "Literal",
                          "start": 363,
                          "end": 364,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
