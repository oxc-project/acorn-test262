__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 350,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 32,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 32,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 32,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 7,
                "end": 32,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 7,
                    "end": 13
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 16,
                    "end": 23
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 26,
                    "end": 32
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 47,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 46,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 46,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 46,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 43,
                "end": 46
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 49,
      "end": 56,
      "expression": {
        "type": "AssignmentExpression",
        "start": 49,
        "end": 55,
        "operator": "=",
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
          "start": 53,
          "end": 55,
          "value": "",
          "raw": "\"\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 57,
      "end": 70,
      "expression": {
        "type": "AssignmentExpression",
        "start": 57,
        "end": 69,
        "operator": "=",
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
          "type": "MemberExpression",
          "start": 61,
          "end": 69,
          "object": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 63,
            "end": 69,
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 71,
      "end": 73,
      "expression": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 94,
      "expression": {
        "type": "AssignmentExpression",
        "start": 85,
        "end": 93,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 85,
          "end": 86,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 89,
          "end": 93,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 95,
      "end": 130,
      "expression": {
        "type": "AssignmentExpression",
        "start": 95,
        "end": 129,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 95,
          "end": 112,
          "object": {
            "type": "SequenceExpression",
            "start": 96,
            "end": 107,
            "expressions": [
              {
                "type": "AssignmentExpression",
                "start": 96,
                "end": 102,
                "operator": "=",
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
                  "end": 102,
                  "value": "",
                  "raw": "\"\""
                }
              },
              {
                "type": "Identifier",
                "start": 104,
                "end": 107,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "property": {
            "type": "Identifier",
            "start": 109,
            "end": 112,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 116,
          "end": 128,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 116,
            "end": 117,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "MemberExpression",
            "start": 120,
            "end": 128,
            "object": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 122,
              "end": 128,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 131,
      "end": 133,
      "expression": {
        "type": "Identifier",
        "start": 131,
        "end": 132,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 201,
      "end": 263,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 207,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 210,
        "end": 262,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 210,
            "end": 234,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 212,
                "end": 223,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 216,
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 216,
                  "end": 222,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 218,
                    "end": 222,
                    "literal": {
                      "type": "Literal",
                      "start": 218,
                      "end": 222,
                      "value": true,
                      "raw": "true"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 224,
                "end": 232,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 229,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 229,
                  "end": 232,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 231,
                    "end": 232,
                    "literal": {
                      "type": "Literal",
                      "start": 231,
                      "end": 232,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 237,
            "end": 262,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 239,
                "end": 251,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 243,
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 243,
                  "end": 250,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 245,
                    "end": 250,
                    "literal": {
                      "type": "Literal",
                      "start": 245,
                      "end": 250,
                      "value": false,
                      "raw": "false"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 252,
                "end": 260,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 257,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 257,
                  "end": 260,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 259,
                    "end": 260,
                    "literal": {
                      "type": "Literal",
                      "start": 259,
                      "end": 260,
                      "value": 2,
                      "raw": "2"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 264,
      "end": 289,
      "id": {
        "type": "Identifier",
        "start": 281,
        "end": 283,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 285,
        "end": 288,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 287,
          "end": 288,
          "typeName": {
            "type": "Identifier",
            "start": 287,
            "end": 288,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 290,
      "end": 299,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 298,
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 298,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 295,
              "end": 298,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 297,
                "end": 298,
                "typeName": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 298,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 300,
      "end": 350,
      "test": {
        "type": "MemberExpression",
        "start": 304,
        "end": 319,
        "object": {
          "type": "AssignmentExpression",
          "start": 305,
          "end": 313,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 305,
            "end": 306,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "CallExpression",
            "start": 309,
            "end": 313,
            "callee": {
              "type": "Identifier",
              "start": 309,
              "end": 311,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          }
        },
        "property": {
          "type": "Identifier",
          "start": 315,
          "end": 319,
          "decorators": [],
          "name": "done",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 321,
        "end": 350,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 327,
            "end": 348,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 333,
                "end": 347,
                "id": {
                  "type": "Identifier",
                  "start": 333,
                  "end": 337,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 334,
                    "end": 337,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 336,
                      "end": 337,
                      "literal": {
                        "type": "Literal",
                        "start": 336,
                        "end": 337,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 340,
                  "end": 347,
                  "object": {
                    "type": "Identifier",
                    "start": 340,
                    "end": 341,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 347,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
