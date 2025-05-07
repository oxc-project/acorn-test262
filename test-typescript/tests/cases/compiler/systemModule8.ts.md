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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 13,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 12,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 14,
      "end": 20,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 14,
        "end": 19,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 18,
          "end": 19,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 21,
      "end": 25,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 21,
        "end": 24,
        "argument": {
          "type": "Identifier",
          "start": 21,
          "end": 22,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 26,
      "end": 30,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 26,
        "end": 29,
        "argument": {
          "type": "Identifier",
          "start": 26,
          "end": 27,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "--",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 35,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 31,
        "end": 34,
        "argument": {
          "type": "Identifier",
          "start": 33,
          "end": 34,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 40,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 36,
        "end": 39,
        "argument": {
          "type": "Identifier",
          "start": 38,
          "end": 39,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "--",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 41,
      "end": 48,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 41,
        "end": 47,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 41,
          "end": 42,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 46,
          "end": 47,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 49,
      "end": 56,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 49,
        "end": 55,
        "operator": "-=",
        "left": {
          "type": "Identifier",
          "start": 49,
          "end": 50,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 54,
          "end": 55,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 57,
      "end": 64,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 57,
        "end": 63,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 57,
          "end": 58,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 62,
          "end": 63,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 72,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 65,
        "end": 71,
        "operator": "/=",
        "left": {
          "type": "Identifier",
          "start": 65,
          "end": 66,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 70,
          "end": 71,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 73,
      "end": 80,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 73,
        "end": 79,
        "operator": "|=",
        "left": {
          "type": "Identifier",
          "start": 73,
          "end": 74,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 78,
          "end": 79,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 88,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 81,
        "end": 87,
        "operator": "&=",
        "left": {
          "type": "Identifier",
          "start": 81,
          "end": 82,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 86,
          "end": 87,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 89,
      "end": 95,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 89,
        "end": 94,
        "operator": "+",
        "left": {
          "type": "Identifier",
          "start": 89,
          "end": 90,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 93,
          "end": 94,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 102,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 96,
        "end": 101,
        "operator": "-",
        "left": {
          "type": "Identifier",
          "start": 96,
          "end": 97,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 100,
          "end": 101,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 109,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 103,
        "end": 108,
        "operator": "&",
        "left": {
          "type": "Identifier",
          "start": 103,
          "end": 104,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 107,
          "end": 108,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 116,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 110,
        "end": 115,
        "operator": "|",
        "left": {
          "type": "Identifier",
          "start": 110,
          "end": 111,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 114,
          "end": 115,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 117,
      "end": 136,
      "body": {
        "type": "BlockStatement",
        "start": 134,
        "end": 136,
        "body": []
      },
      "init": {
        "type": "AssignmentExpression",
        "start": 122,
        "end": 127,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 122,
          "end": 123,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 126,
          "end": 127,
          "raw": "5",
          "value": 5,
          "regex": null,
          "bigint": null
        }
      },
      "test": null,
      "update": {
        "type": "UpdateExpression",
        "start": 129,
        "end": 132,
        "argument": {
          "type": "Identifier",
          "start": 129,
          "end": 130,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 137,
      "end": 156,
      "body": {
        "type": "BlockStatement",
        "start": 154,
        "end": 156,
        "body": []
      },
      "init": {
        "type": "AssignmentExpression",
        "start": 142,
        "end": 147,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 142,
          "end": 143,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 146,
          "end": 147,
          "raw": "8",
          "value": 8,
          "regex": null,
          "bigint": null
        }
      },
      "test": null,
      "update": {
        "type": "UpdateExpression",
        "start": 149,
        "end": 152,
        "argument": {
          "type": "Identifier",
          "start": 149,
          "end": 150,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "--",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 157,
      "end": 177,
      "body": {
        "type": "BlockStatement",
        "start": 175,
        "end": 177,
        "body": []
      },
      "init": {
        "type": "AssignmentExpression",
        "start": 162,
        "end": 168,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 162,
          "end": 163,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 166,
          "end": 168,
          "raw": "15",
          "value": 15,
          "regex": null,
          "bigint": null
        }
      },
      "test": null,
      "update": {
        "type": "UpdateExpression",
        "start": 170,
        "end": 173,
        "argument": {
          "type": "Identifier",
          "start": 172,
          "end": 173,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": true
      }
    },
    {
      "type": "ForStatement",
      "start": 178,
      "end": 198,
      "body": {
        "type": "BlockStatement",
        "start": 196,
        "end": 198,
        "body": []
      },
      "init": {
        "type": "AssignmentExpression",
        "start": 183,
        "end": 189,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 183,
          "end": 184,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 187,
          "end": 189,
          "raw": "18",
          "value": 18,
          "regex": null,
          "bigint": null
        }
      },
      "test": null,
      "update": {
        "type": "UpdateExpression",
        "start": 191,
        "end": 194,
        "argument": {
          "type": "Identifier",
          "start": 193,
          "end": 194,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "--",
        "prefix": true
      }
    },
    {
      "type": "ForStatement",
      "start": 200,
      "end": 221,
      "body": {
        "type": "BlockStatement",
        "start": 219,
        "end": 221,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 205,
        "end": 215,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 209,
            "end": 215,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 213,
              "end": 215,
              "raw": "50",
              "value": 50,
              "regex": null,
              "bigint": null
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": null,
      "update": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 222,
      "end": 253,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 237,
        "end": 253,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 243,
            "end": 251,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 243,
              "end": 250,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 243,
                "end": 244,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 247,
                "end": 250,
                "raw": "100",
                "value": 100,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 234,
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
      "type": "ExportNamedDeclaration",
      "start": 255,
      "end": 276,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 262,
        "end": 276,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 266,
            "end": 275,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 266,
              "end": 269,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 267,
                  "end": 268,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
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
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 277,
      "end": 337,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 284,
        "end": 337,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 290,
            "end": 336,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 290,
              "end": 309,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 291,
                  "end": 296,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 292,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 296,
                    "decorators": [],
                    "name": "z0",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 298,
                  "end": 308,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 299,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectPattern",
                    "start": 301,
                    "end": 308,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 302,
                        "end": 307,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 302,
                          "end": 303,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 305,
                          "end": 307,
                          "decorators": [],
                          "name": "z1",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": null
                  }
                }
              ],
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 313,
                    "end": 314,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 316,
                    "end": 320,
                    "raw": "true",
                    "value": true,
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "Property",
                  "start": 322,
                  "end": 335,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 322,
                    "end": 323,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectExpression",
                    "start": 325,
                    "end": 335,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 326,
                        "end": 334,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 326,
                          "end": 327,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 329,
                          "end": 334,
                          "raw": "\"123\"",
                          "value": "123",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ForOfStatement",
      "start": 338,
      "end": 359,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 357,
        "end": 359,
        "body": []
      },
      "left": {
        "type": "ArrayPattern",
        "start": 343,
        "end": 346,
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "start": 344,
            "end": 345,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
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
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ]
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
