__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 300,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 17,
            "decorators": [],
            "name": "globalCounter",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 20,
            "end": 21,
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
      "start": 23,
      "end": 86,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 38,
        "end": 86,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 44,
            "end": 63,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 44,
              "end": 62,
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "start": 44,
                "end": 57,
                "decorators": [],
                "name": "globalCounter",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 61,
                "end": 62,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 68,
            "end": 84,
            "argument": {
              "type": "ObjectExpression",
              "start": 75,
              "end": 83,
              "properties": [
                {
                  "type": "Property",
                  "start": 77,
                  "end": 81,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 77,
                    "end": 78,
                    "raw": "0",
                    "value": 0
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 80,
                    "end": 81,
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
        "start": 32,
        "end": 35,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 109,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 87,
        "end": 108,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 87,
          "end": 95,
          "computed": true,
          "object": {
            "type": "CallExpression",
            "start": 87,
            "end": 92,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 87,
              "end": 90,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 93,
            "end": 94,
            "raw": "0",
            "value": 0
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 100,
          "end": 108,
          "computed": true,
          "object": {
            "type": "CallExpression",
            "start": 100,
            "end": 105,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 100,
              "end": 103,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 106,
            "end": 107,
            "raw": "0",
            "value": 0
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 149,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 125,
            "decorators": [],
            "name": "result_foo1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 128,
            "end": 149,
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "start": 128,
              "end": 136,
              "computed": true,
              "object": {
                "type": "CallExpression",
                "start": 128,
                "end": 133,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 131,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 134,
                "end": 135,
                "raw": "0",
                "value": 0
              }
            },
            "right": {
              "type": "MemberExpression",
              "start": 141,
              "end": 149,
              "computed": true,
              "object": {
                "type": "CallExpression",
                "start": 141,
                "end": 146,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 144,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 147,
                "end": 148,
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
      "start": 151,
      "end": 179,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 151,
        "end": 178,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 151,
          "end": 159,
          "computed": true,
          "object": {
            "type": "CallExpression",
            "start": 151,
            "end": 156,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 151,
              "end": 154,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 157,
            "end": 158,
            "raw": "0",
            "value": 0
          }
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 164,
          "end": 178,
          "operator": "**=",
          "left": {
            "type": "MemberExpression",
            "start": 164,
            "end": 172,
            "computed": true,
            "object": {
              "type": "CallExpression",
              "start": 164,
              "end": 169,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 164,
                "end": 167,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 170,
              "end": 171,
              "raw": "0",
              "value": 0
            }
          },
          "right": {
            "type": "Literal",
            "start": 177,
            "end": 178,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 180,
      "end": 226,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 225,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 195,
            "decorators": [],
            "name": "result_foo2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 198,
            "end": 225,
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "start": 198,
              "end": 206,
              "computed": true,
              "object": {
                "type": "CallExpression",
                "start": 198,
                "end": 203,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 198,
                  "end": 201,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 204,
                "end": 205,
                "raw": "0",
                "value": 0
              }
            },
            "right": {
              "type": "AssignmentExpression",
              "start": 211,
              "end": 225,
              "operator": "**=",
              "left": {
                "type": "MemberExpression",
                "start": 211,
                "end": 219,
                "computed": true,
                "object": {
                  "type": "CallExpression",
                  "start": 211,
                  "end": 216,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 214,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 217,
                  "end": 218,
                  "raw": "0",
                  "value": 0
                }
              },
              "right": {
                "type": "Literal",
                "start": 224,
                "end": 225,
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
      "start": 227,
      "end": 254,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 227,
        "end": 253,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 227,
          "end": 235,
          "computed": true,
          "object": {
            "type": "CallExpression",
            "start": 227,
            "end": 232,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 227,
              "end": 230,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 233,
            "end": 234,
            "raw": "0",
            "value": 0
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 240,
          "end": 253,
          "operator": "**",
          "left": {
            "type": "MemberExpression",
            "start": 240,
            "end": 248,
            "computed": true,
            "object": {
              "type": "CallExpression",
              "start": 240,
              "end": 245,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 240,
                "end": 243,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 246,
              "end": 247,
              "raw": "0",
              "value": 0
            }
          },
          "right": {
            "type": "Literal",
            "start": 252,
            "end": 253,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 255,
      "end": 300,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 259,
          "end": 299,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 259,
            "end": 270,
            "decorators": [],
            "name": "result_foo3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 273,
            "end": 299,
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "start": 273,
              "end": 281,
              "computed": true,
              "object": {
                "type": "CallExpression",
                "start": 273,
                "end": 278,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 276,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 279,
                "end": 280,
                "raw": "0",
                "value": 0
              }
            },
            "right": {
              "type": "BinaryExpression",
              "start": 286,
              "end": 299,
              "operator": "**",
              "left": {
                "type": "MemberExpression",
                "start": 286,
                "end": 294,
                "computed": true,
                "object": {
                  "type": "CallExpression",
                  "start": 286,
                  "end": 291,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 286,
                    "end": 289,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 292,
                  "end": 293,
                  "raw": "0",
                  "value": 0
                }
              },
              "right": {
                "type": "Literal",
                "start": 298,
                "end": 299,
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
  "sourceType": "script",
  "hashbang": null
}
```
