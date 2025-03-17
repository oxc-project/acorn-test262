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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 28,
            "name": "n",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 40,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 40,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 37,
                "end": 40
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 62,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 63,
                  "end": 79,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "get",
                "optional": false
              },
              {
                "type": "Property",
                "start": 85,
                "end": 99,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 91,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 92,
                  "end": 99,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 93,
                      "end": 94,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 96,
                    "end": 99,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "set",
                "optional": false
              },
              {
                "type": "Property",
                "start": 105,
                "end": 132,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 110,
                  "end": 115,
                  "left": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 111,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 115,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 116,
                  "end": 132,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "get",
                "optional": false
              },
              {
                "type": "Property",
                "start": 138,
                "end": 156,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 143,
                  "end": 148,
                  "left": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 144,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 148,
                    "name": "n",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 149,
                  "end": 156,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 150,
                      "end": 151,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 153,
                    "end": 156,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "set",
                "optional": false
              },
              {
                "type": "Property",
                "start": 162,
                "end": 186,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "UnaryExpression",
                  "start": 167,
                  "end": 169,
                  "operator": "+",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 169,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 170,
                  "end": 186,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "get",
                "optional": false
              },
              {
                "type": "Property",
                "start": 192,
                "end": 207,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 197,
                  "end": 199,
                  "value": "",
                  "raw": "\"\""
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 200,
                  "end": 207,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 201,
                      "end": 202,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 204,
                    "end": 207,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "set",
                "optional": false
              },
              {
                "type": "Property",
                "start": 213,
                "end": 236,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 218,
                  "end": 219,
                  "value": 0,
                  "raw": "0"
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 220,
                  "end": 236,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "get",
                "optional": false
              },
              {
                "type": "Property",
                "start": 242,
                "end": 256,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 248,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 249,
                  "end": 256,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 250,
                      "end": 251,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 253,
                    "end": 256,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "set",
                "optional": false
              },
              {
                "type": "Property",
                "start": 262,
                "end": 293,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "TSTypeAssertion",
                  "start": 267,
                  "end": 276,
                  "expression": {
                    "type": "Literal",
                    "start": 272,
                    "end": 276,
                    "value": true,
                    "raw": "true"
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 268,
                    "end": 271
                  }
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 277,
                  "end": 293,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "get",
                "optional": false
              },
              {
                "type": "Property",
                "start": 299,
                "end": 323,
                "method": false,
                "shorthand": false,
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
                      "value": {
                        "cooked": "hello bye",
                        "raw": "hello bye"
                      },
                      "tail": true
                    }
                  ]
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 316,
                  "end": 323,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 317,
                      "end": 318,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 320,
                    "end": 323,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "set",
                "optional": false
              },
              {
                "type": "Property",
                "start": 329,
                "end": 367,
                "method": false,
                "shorthand": false,
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
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 334,
                      "end": 343,
                      "value": {
                        "cooked": "hello ",
                        "raw": "hello "
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 344,
                      "end": 350,
                      "value": {
                        "cooked": " bye",
                        "raw": " bye"
                      },
                      "tail": true
                    }
                  ]
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 351,
                  "end": 367,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "get",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
