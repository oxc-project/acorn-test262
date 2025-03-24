__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 315,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 39,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 35,
            "name": "globalCounter",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 38,
            "end": 39,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 53,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 56,
        "end": 107,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 62,
            "end": 81,
            "expression": {
              "type": "AssignmentExpression",
              "start": 62,
              "end": 80,
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "start": 62,
                "end": 75,
                "name": "globalCounter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 79,
                "end": 80,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 86,
            "end": 105,
            "argument": {
              "type": "ObjectExpression",
              "start": 93,
              "end": 104,
              "properties": [
                {
                  "type": "Property",
                  "start": 95,
                  "end": 102,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 99,
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 101,
                    "end": 102,
                    "value": 2,
                    "raw": "2"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 125,
      "expression": {
        "type": "AssignmentExpression",
        "start": 108,
        "end": 124,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 108,
          "end": 118,
          "object": {
            "type": "CallExpression",
            "start": 108,
            "end": 113,
            "callee": {
              "type": "Identifier",
              "start": 108,
              "end": 111,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 114,
            "end": 118,
            "name": "prop",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 123,
          "end": 124,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 156,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 137,
            "name": "result0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 140,
            "end": 156,
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "start": 140,
              "end": 150,
              "object": {
                "type": "CallExpression",
                "start": 140,
                "end": 145,
                "callee": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 143,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 146,
                "end": 150,
                "name": "prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 155,
              "end": 156,
              "value": 2,
              "raw": "2"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 158,
      "end": 190,
      "expression": {
        "type": "AssignmentExpression",
        "start": 158,
        "end": 189,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 158,
          "end": 168,
          "object": {
            "type": "CallExpression",
            "start": 158,
            "end": 163,
            "callee": {
              "type": "Identifier",
              "start": 158,
              "end": 161,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 164,
            "end": 168,
            "name": "prop",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 173,
          "end": 189,
          "operator": "**=",
          "left": {
            "type": "MemberExpression",
            "start": 173,
            "end": 183,
            "object": {
              "type": "CallExpression",
              "start": 173,
              "end": 178,
              "callee": {
                "type": "Identifier",
                "start": 173,
                "end": 176,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 179,
              "end": 183,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 188,
            "end": 189,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 191,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 236,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 202,
            "name": "result1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 205,
            "end": 236,
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "start": 205,
              "end": 215,
              "object": {
                "type": "CallExpression",
                "start": 205,
                "end": 210,
                "callee": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 208,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 211,
                "end": 215,
                "name": "prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "right": {
              "type": "AssignmentExpression",
              "start": 220,
              "end": 236,
              "operator": "**=",
              "left": {
                "type": "MemberExpression",
                "start": 220,
                "end": 230,
                "object": {
                  "type": "CallExpression",
                  "start": 220,
                  "end": 225,
                  "callee": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 223,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 230,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 235,
                "end": 236,
                "value": 2,
                "raw": "2"
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 238,
      "end": 269,
      "expression": {
        "type": "AssignmentExpression",
        "start": 238,
        "end": 268,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 238,
          "end": 248,
          "object": {
            "type": "CallExpression",
            "start": 238,
            "end": 243,
            "callee": {
              "type": "Identifier",
              "start": 238,
              "end": 241,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 244,
            "end": 248,
            "name": "prop",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 253,
          "end": 268,
          "left": {
            "type": "MemberExpression",
            "start": 253,
            "end": 263,
            "object": {
              "type": "CallExpression",
              "start": 253,
              "end": 258,
              "callee": {
                "type": "Identifier",
                "start": 253,
                "end": 256,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 259,
              "end": 263,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 267,
            "end": 268,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 315,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 314,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 281,
            "name": "result2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 284,
            "end": 314,
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "start": 284,
              "end": 294,
              "object": {
                "type": "CallExpression",
                "start": 284,
                "end": 289,
                "callee": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 287,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 290,
                "end": 294,
                "name": "prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 299,
              "end": 314,
              "left": {
                "type": "MemberExpression",
                "start": 299,
                "end": 309,
                "object": {
                  "type": "CallExpression",
                  "start": 299,
                  "end": 304,
                  "callee": {
                    "type": "Identifier",
                    "start": 299,
                    "end": 302,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 309,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Literal",
                "start": 313,
                "end": 314,
                "value": 2,
                "raw": "2"
              }
            }
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
