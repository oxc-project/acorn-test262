emitCompoundExponentiationAssignmentWithPropertyAccessingOnLHS1.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 35,
            "decorators": [],
            "name": "globalCounter",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 38,
            "end": 39,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 107,
      "async": false,
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
                "decorators": [],
                "name": "globalCounter",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 79,
                "end": 80,
                "raw": "1",
                "value": 1
              }
            }
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 99,
                    "decorators": [],
                    "name": "prop",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 101,
                    "end": 102,
                    "raw": "2",
                    "value": 2
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 53,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
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
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 108,
            "end": 113,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 108,
              "end": 111,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 114,
            "end": 118,
            "decorators": [],
            "name": "prop",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 123,
          "end": 124,
          "raw": "2",
          "value": 2
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 137,
            "decorators": [],
            "name": "result0",
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
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 140,
                "end": 145,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 143,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 146,
                "end": 150,
                "decorators": [],
                "name": "prop",
                "optional": false
              }
            },
            "right": {
              "type": "Literal",
              "start": 155,
              "end": 156,
              "raw": "2",
              "value": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 158,
            "end": 163,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 158,
              "end": 161,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 164,
            "end": 168,
            "decorators": [],
            "name": "prop",
            "optional": false
          }
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
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 173,
              "end": 178,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 173,
                "end": 176,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 179,
              "end": 183,
              "decorators": [],
              "name": "prop",
              "optional": false
            }
          },
          "right": {
            "type": "Literal",
            "start": 188,
            "end": 189,
            "raw": "2",
            "value": 2
          }
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 202,
            "decorators": [],
            "name": "result1",
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
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 205,
                "end": 210,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 208,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 211,
                "end": 215,
                "decorators": [],
                "name": "prop",
                "optional": false
              }
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
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 220,
                  "end": 225,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 223,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 230,
                  "decorators": [],
                  "name": "prop",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 235,
                "end": 236,
                "raw": "2",
                "value": 2
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 238,
            "end": 243,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 238,
              "end": 241,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 244,
            "end": 248,
            "decorators": [],
            "name": "prop",
            "optional": false
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 253,
          "end": 268,
          "operator": "**",
          "left": {
            "type": "MemberExpression",
            "start": 253,
            "end": 263,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 253,
              "end": 258,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 253,
                "end": 256,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 259,
              "end": 263,
              "decorators": [],
              "name": "prop",
              "optional": false
            }
          },
          "right": {
            "type": "Literal",
            "start": 267,
            "end": 268,
            "raw": "2",
            "value": 2
          }
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 281,
            "decorators": [],
            "name": "result2",
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
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 284,
                "end": 289,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 287,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 290,
                "end": 294,
                "decorators": [],
                "name": "prop",
                "optional": false
              }
            },
            "right": {
              "type": "BinaryExpression",
              "start": 299,
              "end": 314,
              "operator": "**",
              "left": {
                "type": "MemberExpression",
                "start": 299,
                "end": 309,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 299,
                  "end": 304,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 299,
                    "end": 302,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 309,
                  "decorators": [],
                  "name": "prop",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 313,
                "end": 314,
                "raw": "2",
                "value": 2
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
