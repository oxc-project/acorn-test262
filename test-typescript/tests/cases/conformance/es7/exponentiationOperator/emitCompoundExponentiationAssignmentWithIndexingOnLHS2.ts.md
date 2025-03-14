emitCompoundExponentiationAssignmentWithIndexingOnLHS2.ts
```json
{
  "type": "Program",
  "start": 17,
  "end": 317,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 34,
            "decorators": [],
            "name": "globalCounter",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 37,
            "end": 38,
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
      "start": 40,
      "end": 103,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 55,
        "end": 103,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 61,
            "end": 80,
            "expression": {
              "type": "AssignmentExpression",
              "start": 61,
              "end": 79,
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "start": 61,
                "end": 74,
                "decorators": [],
                "name": "globalCounter",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 78,
                "end": 79,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 85,
            "end": 101,
            "argument": {
              "type": "ObjectExpression",
              "start": 92,
              "end": 100,
              "properties": [
                {
                  "type": "Property",
                  "start": 94,
                  "end": 98,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 94,
                    "end": 95,
                    "raw": "0",
                    "value": 0
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 97,
                    "end": 98,
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
        "start": 49,
        "end": 52,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 126,
      "expression": {
        "type": "AssignmentExpression",
        "start": 104,
        "end": 125,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 104,
          "end": 112,
          "computed": true,
          "object": {
            "type": "CallExpression",
            "start": 104,
            "end": 109,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 104,
              "end": 107,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 110,
            "end": 111,
            "raw": "0",
            "value": 0
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 117,
          "end": 125,
          "computed": true,
          "object": {
            "type": "CallExpression",
            "start": 117,
            "end": 122,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 117,
              "end": 120,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 123,
            "end": 124,
            "raw": "0",
            "value": 0
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 166,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 142,
            "decorators": [],
            "name": "result_foo1",
            "optional": false
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 145,
            "end": 166,
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "start": 145,
              "end": 153,
              "computed": true,
              "object": {
                "type": "CallExpression",
                "start": 145,
                "end": 150,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 148,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 151,
                "end": 152,
                "raw": "0",
                "value": 0
              }
            },
            "right": {
              "type": "MemberExpression",
              "start": 158,
              "end": 166,
              "computed": true,
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
                "type": "Literal",
                "start": 164,
                "end": 165,
                "raw": "0",
                "value": 0
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
      "start": 168,
      "end": 196,
      "expression": {
        "type": "AssignmentExpression",
        "start": 168,
        "end": 195,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 168,
          "end": 176,
          "computed": true,
          "object": {
            "type": "CallExpression",
            "start": 168,
            "end": 173,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 168,
              "end": 171,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 174,
            "end": 175,
            "raw": "0",
            "value": 0
          }
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 181,
          "end": 195,
          "operator": "**=",
          "left": {
            "type": "MemberExpression",
            "start": 181,
            "end": 189,
            "computed": true,
            "object": {
              "type": "CallExpression",
              "start": 181,
              "end": 186,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 181,
                "end": 184,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 187,
              "end": 188,
              "raw": "0",
              "value": 0
            }
          },
          "right": {
            "type": "Literal",
            "start": 194,
            "end": 195,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 242,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 212,
            "decorators": [],
            "name": "result_foo2",
            "optional": false
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 215,
            "end": 242,
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "start": 215,
              "end": 223,
              "computed": true,
              "object": {
                "type": "CallExpression",
                "start": 215,
                "end": 220,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 218,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 221,
                "end": 222,
                "raw": "0",
                "value": 0
              }
            },
            "right": {
              "type": "AssignmentExpression",
              "start": 228,
              "end": 242,
              "operator": "**=",
              "left": {
                "type": "MemberExpression",
                "start": 228,
                "end": 236,
                "computed": true,
                "object": {
                  "type": "CallExpression",
                  "start": 228,
                  "end": 233,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 231,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 234,
                  "end": 235,
                  "raw": "0",
                  "value": 0
                }
              },
              "right": {
                "type": "Literal",
                "start": 241,
                "end": 242,
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
      "start": 244,
      "end": 271,
      "expression": {
        "type": "AssignmentExpression",
        "start": 244,
        "end": 270,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 244,
          "end": 252,
          "computed": true,
          "object": {
            "type": "CallExpression",
            "start": 244,
            "end": 249,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 244,
              "end": 247,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 250,
            "end": 251,
            "raw": "0",
            "value": 0
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 257,
          "end": 270,
          "operator": "**",
          "left": {
            "type": "MemberExpression",
            "start": 257,
            "end": 265,
            "computed": true,
            "object": {
              "type": "CallExpression",
              "start": 257,
              "end": 262,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 257,
                "end": 260,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 263,
              "end": 264,
              "raw": "0",
              "value": 0
            }
          },
          "right": {
            "type": "Literal",
            "start": 269,
            "end": 270,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 272,
      "end": 317,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 316,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 287,
            "decorators": [],
            "name": "result_foo3",
            "optional": false
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 290,
            "end": 316,
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "start": 290,
              "end": 298,
              "computed": true,
              "object": {
                "type": "CallExpression",
                "start": 290,
                "end": 295,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 293,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 296,
                "end": 297,
                "raw": "0",
                "value": 0
              }
            },
            "right": {
              "type": "BinaryExpression",
              "start": 303,
              "end": 316,
              "operator": "**",
              "left": {
                "type": "MemberExpression",
                "start": 303,
                "end": 311,
                "computed": true,
                "object": {
                  "type": "CallExpression",
                  "start": 303,
                  "end": 308,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 303,
                    "end": 306,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 309,
                  "end": 310,
                  "raw": "0",
                  "value": 0
                }
              },
              "right": {
                "type": "Literal",
                "start": 315,
                "end": 316,
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
