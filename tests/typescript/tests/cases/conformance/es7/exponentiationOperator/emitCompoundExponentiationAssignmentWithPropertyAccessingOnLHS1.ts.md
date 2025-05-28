__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 297,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 21,
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
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 23,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 38,
        "end": 89,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 44,
            "end": 63,
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
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 68,
            "end": 87,
            "argument": {
              "type": "ObjectExpression",
              "start": 75,
              "end": 86,
              "properties": [
                {
                  "type": "Property",
                  "start": 77,
                  "end": 84,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 81,
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 83,
                    "end": 84,
                    "value": 2,
                    "raw": "2"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 90,
      "end": 107,
      "expression": {
        "type": "AssignmentExpression",
        "start": 90,
        "end": 106,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 90,
          "end": 100,
          "object": {
            "type": "CallExpression",
            "start": 90,
            "end": 95,
            "callee": {
              "type": "Identifier",
              "start": 90,
              "end": 93,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 96,
            "end": 100,
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
          "start": 105,
          "end": 106,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 139,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 138,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 119,
            "decorators": [],
            "name": "result0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 122,
            "end": 138,
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "start": 122,
              "end": 132,
              "object": {
                "type": "CallExpression",
                "start": 122,
                "end": 127,
                "callee": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 125,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 128,
                "end": 132,
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
              "start": 137,
              "end": 138,
              "value": 2,
              "raw": "2"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 140,
      "end": 172,
      "expression": {
        "type": "AssignmentExpression",
        "start": 140,
        "end": 171,
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
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 146,
            "end": 150,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 155,
          "end": 171,
          "operator": "**=",
          "left": {
            "type": "MemberExpression",
            "start": 155,
            "end": 165,
            "object": {
              "type": "CallExpression",
              "start": 155,
              "end": 160,
              "callee": {
                "type": "Identifier",
                "start": 155,
                "end": 158,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 161,
              "end": 165,
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
            "start": 170,
            "end": 171,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 173,
      "end": 219,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 218,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 184,
            "decorators": [],
            "name": "result1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 187,
            "end": 218,
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "start": 187,
              "end": 197,
              "object": {
                "type": "CallExpression",
                "start": 187,
                "end": 192,
                "callee": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 190,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 193,
                "end": 197,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "right": {
              "type": "AssignmentExpression",
              "start": 202,
              "end": 218,
              "operator": "**=",
              "left": {
                "type": "MemberExpression",
                "start": 202,
                "end": 212,
                "object": {
                  "type": "CallExpression",
                  "start": 202,
                  "end": 207,
                  "callee": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 205,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 212,
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
                "start": 217,
                "end": 218,
                "value": 2,
                "raw": "2"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 220,
      "end": 251,
      "expression": {
        "type": "AssignmentExpression",
        "start": 220,
        "end": 250,
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
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 226,
            "end": 230,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 235,
          "end": 250,
          "left": {
            "type": "MemberExpression",
            "start": 235,
            "end": 245,
            "object": {
              "type": "CallExpression",
              "start": 235,
              "end": 240,
              "callee": {
                "type": "Identifier",
                "start": 235,
                "end": 238,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 241,
              "end": 245,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 249,
            "end": 250,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 252,
      "end": 297,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 256,
          "end": 296,
          "id": {
            "type": "Identifier",
            "start": 256,
            "end": 263,
            "decorators": [],
            "name": "result2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 266,
            "end": 296,
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "start": 266,
              "end": 276,
              "object": {
                "type": "CallExpression",
                "start": 266,
                "end": 271,
                "callee": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 269,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 272,
                "end": 276,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 281,
              "end": 296,
              "left": {
                "type": "MemberExpression",
                "start": 281,
                "end": 291,
                "object": {
                  "type": "CallExpression",
                  "start": 281,
                  "end": 286,
                  "callee": {
                    "type": "Identifier",
                    "start": 281,
                    "end": 284,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 291,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "**",
              "right": {
                "type": "Literal",
                "start": 295,
                "end": 296,
                "value": 2,
                "raw": "2"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
