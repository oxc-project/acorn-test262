__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 34,
            "name": "globalCounter",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 37,
            "end": 38,
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
      "start": 40,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 52,
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
                "name": "globalCounter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 78,
                "end": 79,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 94,
                    "end": 95,
                    "value": 0,
                    "raw": "0"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 97,
                    "end": 98,
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
          "object": {
            "type": "CallExpression",
            "start": 104,
            "end": 109,
            "callee": {
              "type": "Identifier",
              "start": 104,
              "end": 107,
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
            "type": "Literal",
            "start": 110,
            "end": 111,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 117,
          "end": 125,
          "object": {
            "type": "CallExpression",
            "start": 117,
            "end": 122,
            "callee": {
              "type": "Identifier",
              "start": 117,
              "end": 120,
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
            "type": "Literal",
            "start": 123,
            "end": 124,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 142,
            "name": "result_foo1",
            "typeAnnotation": null,
            "decorators": [],
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
              "object": {
                "type": "CallExpression",
                "start": 145,
                "end": 150,
                "callee": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 148,
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
                "type": "Literal",
                "start": 151,
                "end": 152,
                "value": 0,
                "raw": "0"
              },
              "computed": true,
              "optional": false
            },
            "right": {
              "type": "MemberExpression",
              "start": 158,
              "end": 166,
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
                "type": "Literal",
                "start": 164,
                "end": 165,
                "value": 0,
                "raw": "0"
              },
              "computed": true,
              "optional": false
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
          "object": {
            "type": "CallExpression",
            "start": 168,
            "end": 173,
            "callee": {
              "type": "Identifier",
              "start": 168,
              "end": 171,
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
            "type": "Literal",
            "start": 174,
            "end": 175,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
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
            "object": {
              "type": "CallExpression",
              "start": 181,
              "end": 186,
              "callee": {
                "type": "Identifier",
                "start": 181,
                "end": 184,
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
              "type": "Literal",
              "start": 187,
              "end": 188,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 194,
            "end": 195,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 212,
            "name": "result_foo2",
            "typeAnnotation": null,
            "decorators": [],
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
              "object": {
                "type": "CallExpression",
                "start": 215,
                "end": 220,
                "callee": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 218,
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
                "type": "Literal",
                "start": 221,
                "end": 222,
                "value": 0,
                "raw": "0"
              },
              "computed": true,
              "optional": false
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
                "object": {
                  "type": "CallExpression",
                  "start": 228,
                  "end": 233,
                  "callee": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 231,
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
                  "type": "Literal",
                  "start": 234,
                  "end": 235,
                  "value": 0,
                  "raw": "0"
                },
                "computed": true,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 241,
                "end": 242,
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
          "object": {
            "type": "CallExpression",
            "start": 244,
            "end": 249,
            "callee": {
              "type": "Identifier",
              "start": 244,
              "end": 247,
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
            "type": "Literal",
            "start": 250,
            "end": 251,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 257,
          "end": 270,
          "left": {
            "type": "MemberExpression",
            "start": 257,
            "end": 265,
            "object": {
              "type": "CallExpression",
              "start": 257,
              "end": 262,
              "callee": {
                "type": "Identifier",
                "start": 257,
                "end": 260,
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
              "type": "Literal",
              "start": 263,
              "end": 264,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 269,
            "end": 270,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 287,
            "name": "result_foo3",
            "typeAnnotation": null,
            "decorators": [],
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
              "object": {
                "type": "CallExpression",
                "start": 290,
                "end": 295,
                "callee": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 293,
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
                "type": "Literal",
                "start": 296,
                "end": 297,
                "value": 0,
                "raw": "0"
              },
              "computed": true,
              "optional": false
            },
            "right": {
              "type": "BinaryExpression",
              "start": 303,
              "end": 316,
              "left": {
                "type": "MemberExpression",
                "start": 303,
                "end": 311,
                "object": {
                  "type": "CallExpression",
                  "start": 303,
                  "end": 308,
                  "callee": {
                    "type": "Identifier",
                    "start": 303,
                    "end": 306,
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
                  "type": "Literal",
                  "start": 309,
                  "end": 310,
                  "value": 0,
                  "raw": "0"
                },
                "computed": true,
                "optional": false
              },
              "operator": "**",
              "right": {
                "type": "Literal",
                "start": 315,
                "end": 316,
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
