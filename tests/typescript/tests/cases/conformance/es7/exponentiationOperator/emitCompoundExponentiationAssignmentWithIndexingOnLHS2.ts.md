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
      "end": 86,
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
        "end": 86,
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
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "start": 77,
                    "end": 78,
                    "value": 0,
                    "raw": "0"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 80,
                    "end": 81,
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
      "start": 87,
      "end": 109,
      "expression": {
        "type": "AssignmentExpression",
        "start": 87,
        "end": 108,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 87,
          "end": 95,
          "object": {
            "type": "CallExpression",
            "start": 87,
            "end": 92,
            "callee": {
              "type": "Identifier",
              "start": 87,
              "end": 90,
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
            "type": "Literal",
            "start": 93,
            "end": 94,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "MemberExpression",
          "start": 100,
          "end": 108,
          "object": {
            "type": "CallExpression",
            "start": 100,
            "end": 105,
            "callee": {
              "type": "Identifier",
              "start": 100,
              "end": 103,
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
            "type": "Literal",
            "start": 106,
            "end": 107,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 150,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 149,
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
              "object": {
                "type": "CallExpression",
                "start": 128,
                "end": 133,
                "callee": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 131,
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
                "type": "Literal",
                "start": 134,
                "end": 135,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            },
            "right": {
              "type": "MemberExpression",
              "start": 141,
              "end": 149,
              "object": {
                "type": "CallExpression",
                "start": 141,
                "end": 146,
                "callee": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 144,
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
                "type": "Literal",
                "start": 147,
                "end": 148,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 151,
      "end": 179,
      "expression": {
        "type": "AssignmentExpression",
        "start": 151,
        "end": 178,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 151,
          "end": 159,
          "object": {
            "type": "CallExpression",
            "start": 151,
            "end": 156,
            "callee": {
              "type": "Identifier",
              "start": 151,
              "end": 154,
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
            "type": "Literal",
            "start": 157,
            "end": 158,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
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
            "object": {
              "type": "CallExpression",
              "start": 164,
              "end": 169,
              "callee": {
                "type": "Identifier",
                "start": 164,
                "end": 167,
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
              "type": "Literal",
              "start": 170,
              "end": 171,
              "value": 0,
              "raw": "0"
            },
            "optional": false,
            "computed": true
          },
          "right": {
            "type": "Literal",
            "start": 177,
            "end": 178,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 180,
      "end": 226,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 225,
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
              "object": {
                "type": "CallExpression",
                "start": 198,
                "end": 203,
                "callee": {
                  "type": "Identifier",
                  "start": 198,
                  "end": 201,
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
                "type": "Literal",
                "start": 204,
                "end": 205,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
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
                "object": {
                  "type": "CallExpression",
                  "start": 211,
                  "end": 216,
                  "callee": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 214,
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
                  "type": "Literal",
                  "start": 217,
                  "end": 218,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "Literal",
                "start": 224,
                "end": 225,
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
      "start": 227,
      "end": 254,
      "expression": {
        "type": "AssignmentExpression",
        "start": 227,
        "end": 253,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 227,
          "end": 235,
          "object": {
            "type": "CallExpression",
            "start": 227,
            "end": 232,
            "callee": {
              "type": "Identifier",
              "start": 227,
              "end": 230,
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
            "type": "Literal",
            "start": 233,
            "end": 234,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 240,
          "end": 253,
          "left": {
            "type": "MemberExpression",
            "start": 240,
            "end": 248,
            "object": {
              "type": "CallExpression",
              "start": 240,
              "end": 245,
              "callee": {
                "type": "Identifier",
                "start": 240,
                "end": 243,
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
              "type": "Literal",
              "start": 246,
              "end": 247,
              "value": 0,
              "raw": "0"
            },
            "optional": false,
            "computed": true
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 252,
            "end": 253,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 255,
      "end": 300,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 259,
          "end": 299,
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
              "object": {
                "type": "CallExpression",
                "start": 273,
                "end": 278,
                "callee": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 276,
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
                "type": "Literal",
                "start": 279,
                "end": 280,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            },
            "right": {
              "type": "BinaryExpression",
              "start": 286,
              "end": 299,
              "left": {
                "type": "MemberExpression",
                "start": 286,
                "end": 294,
                "object": {
                  "type": "CallExpression",
                  "start": 286,
                  "end": 291,
                  "callee": {
                    "type": "Identifier",
                    "start": 286,
                    "end": 289,
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
                  "type": "Literal",
                  "start": 292,
                  "end": 293,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "computed": true
              },
              "operator": "**",
              "right": {
                "type": "Literal",
                "start": 298,
                "end": 299,
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
