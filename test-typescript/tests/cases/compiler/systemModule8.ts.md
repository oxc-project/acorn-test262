__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 359,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 13,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 13,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 12,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "x",
              "typeAnnotation": null,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 14,
      "end": 20,
      "expression": {
        "type": "AssignmentExpression",
        "start": 14,
        "end": 19,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 18,
          "end": 19,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 21,
      "end": 25,
      "expression": {
        "type": "UpdateExpression",
        "start": 21,
        "end": 24,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 21,
          "end": 22,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 26,
      "end": 30,
      "expression": {
        "type": "UpdateExpression",
        "start": 26,
        "end": 29,
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 26,
          "end": 27,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 35,
      "expression": {
        "type": "UpdateExpression",
        "start": 31,
        "end": 34,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 33,
          "end": 34,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 40,
      "expression": {
        "type": "UpdateExpression",
        "start": 36,
        "end": 39,
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 38,
          "end": 39,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 41,
      "end": 48,
      "expression": {
        "type": "AssignmentExpression",
        "start": 41,
        "end": 47,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 41,
          "end": 42,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 46,
          "end": 47,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 49,
      "end": 56,
      "expression": {
        "type": "AssignmentExpression",
        "start": 49,
        "end": 55,
        "operator": "-=",
        "left": {
          "type": "Identifier",
          "start": 49,
          "end": 50,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 54,
          "end": 55,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 57,
      "end": 64,
      "expression": {
        "type": "AssignmentExpression",
        "start": 57,
        "end": 63,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 57,
          "end": 58,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 62,
          "end": 63,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 72,
      "expression": {
        "type": "AssignmentExpression",
        "start": 65,
        "end": 71,
        "operator": "/=",
        "left": {
          "type": "Identifier",
          "start": 65,
          "end": 66,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 70,
          "end": 71,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 73,
      "end": 80,
      "expression": {
        "type": "AssignmentExpression",
        "start": 73,
        "end": 79,
        "operator": "|=",
        "left": {
          "type": "Identifier",
          "start": 73,
          "end": 74,
          "name": "x",
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
      "type": "ExpressionStatement",
      "start": 81,
      "end": 88,
      "expression": {
        "type": "AssignmentExpression",
        "start": 81,
        "end": 87,
        "operator": "&=",
        "left": {
          "type": "Identifier",
          "start": 81,
          "end": 82,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 86,
          "end": 87,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 89,
      "end": 95,
      "expression": {
        "type": "BinaryExpression",
        "start": 89,
        "end": 94,
        "left": {
          "type": "Identifier",
          "start": 89,
          "end": 90,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "start": 93,
          "end": 94,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 102,
      "expression": {
        "type": "BinaryExpression",
        "start": 96,
        "end": 101,
        "left": {
          "type": "Identifier",
          "start": 96,
          "end": 97,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "-",
        "right": {
          "type": "Literal",
          "start": 100,
          "end": 101,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 109,
      "expression": {
        "type": "BinaryExpression",
        "start": 103,
        "end": 108,
        "left": {
          "type": "Identifier",
          "start": 103,
          "end": 104,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "&",
        "right": {
          "type": "Literal",
          "start": 107,
          "end": 108,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 116,
      "expression": {
        "type": "BinaryExpression",
        "start": 110,
        "end": 115,
        "left": {
          "type": "Identifier",
          "start": 110,
          "end": 111,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "|",
        "right": {
          "type": "Literal",
          "start": 114,
          "end": 115,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ForStatement",
      "start": 117,
      "end": 136,
      "init": {
        "type": "AssignmentExpression",
        "start": 122,
        "end": 127,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 122,
          "end": 123,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 126,
          "end": 127,
          "value": 5,
          "raw": "5"
        }
      },
      "test": null,
      "update": {
        "type": "UpdateExpression",
        "start": 129,
        "end": 132,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 129,
          "end": 130,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 134,
        "end": 136,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 137,
      "end": 156,
      "init": {
        "type": "AssignmentExpression",
        "start": 142,
        "end": 147,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 142,
          "end": 143,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 146,
          "end": 147,
          "value": 8,
          "raw": "8"
        }
      },
      "test": null,
      "update": {
        "type": "UpdateExpression",
        "start": 149,
        "end": 152,
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 149,
          "end": 150,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 154,
        "end": 156,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 157,
      "end": 177,
      "init": {
        "type": "AssignmentExpression",
        "start": 162,
        "end": 168,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 162,
          "end": 163,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 166,
          "end": 168,
          "value": 15,
          "raw": "15"
        }
      },
      "test": null,
      "update": {
        "type": "UpdateExpression",
        "start": 170,
        "end": 173,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 172,
          "end": 173,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 175,
        "end": 177,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 178,
      "end": 198,
      "init": {
        "type": "AssignmentExpression",
        "start": 183,
        "end": 189,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 183,
          "end": 184,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 187,
          "end": 189,
          "value": 18,
          "raw": "18"
        }
      },
      "test": null,
      "update": {
        "type": "UpdateExpression",
        "start": 191,
        "end": 194,
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 193,
          "end": 194,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 196,
        "end": 198,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 200,
      "end": 221,
      "init": {
        "type": "VariableDeclaration",
        "start": 205,
        "end": 215,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 209,
            "end": 215,
            "id": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 213,
              "end": 215,
              "value": 50,
              "raw": "50"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 219,
        "end": 221,
        "body": []
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 222,
      "end": 253,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 234,
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
        "start": 237,
        "end": 253,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 243,
            "end": 251,
            "expression": {
              "type": "AssignmentExpression",
              "start": 243,
              "end": 250,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 243,
                "end": 244,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 247,
                "end": 250,
                "value": 100,
                "raw": "100"
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 255,
      "end": 276,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 262,
        "end": 276,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 266,
            "end": 275,
            "id": {
              "type": "ArrayPattern",
              "start": 266,
              "end": 269,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 267,
                  "end": 268,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrayExpression",
              "start": 272,
              "end": 275,
              "elements": [
                {
                  "type": "Literal",
                  "start": 273,
                  "end": 274,
                  "value": 1,
                  "raw": "1"
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 277,
      "end": 337,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 284,
        "end": 337,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 290,
            "end": 336,
            "id": {
              "type": "ObjectPattern",
              "start": 290,
              "end": 309,
              "properties": [
                {
                  "type": "Property",
                  "start": 291,
                  "end": 296,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 292,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 296,
                    "name": "z0",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 298,
                  "end": 308,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 299,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 301,
                    "end": 308,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 302,
                        "end": 307,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 302,
                          "end": 303,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 305,
                          "end": 307,
                          "name": "z1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 312,
              "end": 336,
              "properties": [
                {
                  "type": "Property",
                  "start": 313,
                  "end": 320,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 313,
                    "end": 314,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 316,
                    "end": 320,
                    "value": true,
                    "raw": "true"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 322,
                  "end": 335,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 322,
                    "end": 323,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 325,
                    "end": 335,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 326,
                        "end": 334,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 326,
                          "end": 327,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 329,
                          "end": 334,
                          "value": "123",
                          "raw": "\"123\""
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ForOfStatement",
      "start": 338,
      "end": 359,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 343,
        "end": 346,
        "elements": [
          {
            "type": "Identifier",
            "start": 344,
            "end": 345,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "ArrayExpression",
        "start": 350,
        "end": 355,
        "elements": [
          {
            "type": "ArrayExpression",
            "start": 351,
            "end": 354,
            "elements": [
              {
                "type": "Literal",
                "start": 352,
                "end": 353,
                "value": 1,
                "raw": "1"
              }
            ]
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 357,
        "end": 359,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
