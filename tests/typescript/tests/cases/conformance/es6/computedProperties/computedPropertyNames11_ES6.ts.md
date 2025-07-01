__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              },
              "start": 5,
              "end": 13
            },
            "start": 4,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
            },
            "start": 19,
            "end": 28
          },
          "init": null,
          "definite": false,
          "start": 19,
          "end": 28
        }
      ],
      "declare": false,
      "start": 15,
      "end": 29
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 37,
                "end": 40
              },
              "start": 35,
              "end": 40
            },
            "start": 34,
            "end": 40
          },
          "init": null,
          "definite": false,
          "start": 34,
          "end": 40
        }
      ],
      "declare": false,
      "start": 30,
      "end": 41
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 62
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 75,
                          "end": 76
                        },
                        "start": 68,
                        "end": 77
                      }
                    ],
                    "start": 66,
                    "end": 79
                  },
                  "expression": false,
                  "start": 63,
                  "end": 79
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 56,
                "end": 79
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 91
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 93,
                      "end": 94
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 96,
                    "end": 99
                  },
                  "expression": false,
                  "start": 92,
                  "end": 99
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 85,
                "end": 99
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 110,
                    "end": 111
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 114,
                    "end": 115
                  },
                  "start": 110,
                  "end": 115
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 128,
                          "end": 129
                        },
                        "start": 121,
                        "end": 130
                      }
                    ],
                    "start": 119,
                    "end": 132
                  },
                  "expression": false,
                  "start": 116,
                  "end": 132
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 105,
                "end": 132
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 144
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 148
                  },
                  "start": 143,
                  "end": 148
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 150,
                      "end": 151
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 153,
                    "end": 156
                  },
                  "expression": false,
                  "start": 149,
                  "end": 156
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 138,
                "end": 156
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "UnaryExpression",
                  "operator": "+",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 168,
                    "end": 169
                  },
                  "prefix": true,
                  "start": 167,
                  "end": 169
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 182,
                          "end": 183
                        },
                        "start": 175,
                        "end": 184
                      }
                    ],
                    "start": 173,
                    "end": 186
                  },
                  "expression": false,
                  "start": 170,
                  "end": 186
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 162,
                "end": 186
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 197,
                  "end": 199
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 201,
                      "end": 202
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 204,
                    "end": 207
                  },
                  "expression": false,
                  "start": 200,
                  "end": 207
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 192,
                "end": 207
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 218,
                  "end": 219
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 232,
                          "end": 233
                        },
                        "start": 225,
                        "end": 234
                      }
                    ],
                    "start": 223,
                    "end": 236
                  },
                  "expression": false,
                  "start": 220,
                  "end": 236
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 213,
                "end": 236
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 247,
                  "end": 248
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 250,
                      "end": 251
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 253,
                    "end": 256
                  },
                  "expression": false,
                  "start": 249,
                  "end": 256
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 242,
                "end": 256
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 268,
                    "end": 271
                  },
                  "expression": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 272,
                    "end": 276
                  },
                  "start": 267,
                  "end": 276
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 289,
                          "end": 290
                        },
                        "start": 282,
                        "end": 291
                      }
                    ],
                    "start": 280,
                    "end": 293
                  },
                  "expression": false,
                  "start": 277,
                  "end": 293
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 262,
                "end": 293
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "hello bye",
                        "cooked": "hello bye"
                      },
                      "tail": true,
                      "start": 304,
                      "end": 315
                    }
                  ],
                  "expressions": [],
                  "start": 304,
                  "end": 315
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 317,
                      "end": 318
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 320,
                    "end": 323
                  },
                  "expression": false,
                  "start": 316,
                  "end": 323
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 299,
                "end": 323
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "hello ",
                        "cooked": "hello "
                      },
                      "tail": false,
                      "start": 334,
                      "end": 343
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": " bye",
                        "cooked": " bye"
                      },
                      "tail": true,
                      "start": 344,
                      "end": 350
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 343,
                      "end": 344
                    }
                  ],
                  "start": 334,
                  "end": 350
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 363,
                          "end": 364
                        },
                        "start": 356,
                        "end": 365
                      }
                    ],
                    "start": 354,
                    "end": 367
                  },
                  "expression": false,
                  "start": 351,
                  "end": 367
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 329,
                "end": 367
              }
            ],
            "start": 50,
            "end": 369
          },
          "definite": false,
          "start": 46,
          "end": 369
        }
      ],
      "declare": false,
      "start": 42,
      "end": 369
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 369
}
```
