__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 338,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 25,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 36,
          "end": 37,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 57,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 45,
            "end": 55,
            "expression": {
              "type": "AssignmentExpression",
              "start": 45,
              "end": 55,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 45,
                "end": 51,
                "object": {
                  "type": "ThisExpression",
                  "start": 45,
                  "end": 49
                },
                "property": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 58,
      "end": 104,
      "expression": {
        "type": "AssignmentExpression",
        "start": 58,
        "end": 104,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 58,
          "end": 71,
          "object": {
            "type": "MemberExpression",
            "start": 58,
            "end": 69,
            "object": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 60,
              "end": 69,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 74,
          "end": 104,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 85,
            "end": 104,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 91,
                "end": 102,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 91,
                  "end": 102,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 91,
                    "end": 97,
                    "object": {
                      "type": "ThisExpression",
                      "start": 91,
                      "end": 95
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 100,
                    "end": 102,
                    "value": 12,
                    "raw": "12"
                  }
                },
                "directive": null
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 105,
      "end": 121,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 121,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 110,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 113,
            "end": 121,
            "callee": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 119,
                "end": 120,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 122,
      "end": 137,
      "expression": {
        "type": "AssignmentExpression",
        "start": 122,
        "end": 137,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 122,
          "end": 125,
          "object": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 124,
            "end": 125,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 128,
          "end": 137,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 154,
      "end": 169,
      "expression": {
        "type": "AssignmentExpression",
        "start": 154,
        "end": 169,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 154,
          "end": 157,
          "object": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 156,
            "end": 157,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 160,
          "end": 169,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 202,
      "end": 296,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 212,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 213,
          "end": 214,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 216,
        "end": 296,
        "body": [
          {
            "type": "IfStatement",
            "start": 222,
            "end": 279,
            "test": {
              "type": "UnaryExpression",
              "start": 226,
              "end": 246,
              "operator": "!",
              "argument": {
                "type": "BinaryExpression",
                "start": 228,
                "end": 245,
                "left": {
                  "type": "ThisExpression",
                  "start": 228,
                  "end": 232
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 245,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "prefix": true
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 248,
              "end": 279,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 258,
                  "end": 273,
                  "argument": {
                    "type": "NewExpression",
                    "start": 265,
                    "end": 273,
                    "callee": {
                      "type": "Identifier",
                      "start": 269,
                      "end": 270,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 271,
                        "end": 272,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 284,
            "end": 294,
            "expression": {
              "type": "AssignmentExpression",
              "start": 284,
              "end": 294,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 284,
                "end": 290,
                "object": {
                  "type": "ThisExpression",
                  "start": 284,
                  "end": 288
                },
                "property": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 290,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Identifier",
                "start": 293,
                "end": 294,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 297,
      "end": 309,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 309,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 302,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 305,
            "end": 309,
            "callee": {
              "type": "Identifier",
              "start": 305,
              "end": 306,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 307,
                "end": 308,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 310,
      "end": 326,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 326,
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 315,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 318,
            "end": 326,
            "callee": {
              "type": "Identifier",
              "start": 322,
              "end": 323,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 324,
                "end": 325,
                "value": 2,
                "raw": "2"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 327,
      "end": 338,
      "expression": {
        "type": "BinaryExpression",
        "start": 327,
        "end": 338,
        "left": {
          "type": "MemberExpression",
          "start": 327,
          "end": 330,
          "object": {
            "type": "Identifier",
            "start": 327,
            "end": 328,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 329,
            "end": 330,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "MemberExpression",
          "start": 335,
          "end": 338,
          "object": {
            "type": "Identifier",
            "start": 335,
            "end": 336,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 337,
            "end": 338,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
