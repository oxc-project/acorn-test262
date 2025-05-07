__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 440,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 104,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 104,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 23,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 23,
              "end": 48,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 48,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 36,
                    "end": 46,
                    "argument": {
                      "type": "Literal",
                      "start": 43,
                      "end": 45,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 25,
                "end": 33,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 27,
                  "end": 33
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 84,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 60,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 60,
              "end": 84,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 81,
                "end": 84,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 61,
                  "end": 79,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 62,
                    "end": 79,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 64,
                      "end": 79,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 64,
                          "end": 70
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 73,
                          "end": 79
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 88,
            "end": 102,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 93,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 101,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 95,
                "end": 101
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "One",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 106,
      "end": 270,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 116,
        "end": 270,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 120,
            "end": 160,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 129,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 129,
              "end": 160,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 141,
                "end": 160,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 143,
                    "end": 158,
                    "argument": {
                      "type": "Literal",
                      "start": 150,
                      "end": 157,
                      "raw": "\"hello\"",
                      "value": "hello",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 131,
                "end": 140,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 133,
                  "end": 140,
                  "literal": {
                    "type": "Literal",
                    "start": 133,
                    "end": 140,
                    "raw": "\"hello\"",
                    "value": "hello",
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 163,
            "end": 197,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 172,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 172,
              "end": 197,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 194,
                "end": 197,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 173,
                  "end": 192,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 174,
                    "end": 192,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 176,
                      "end": 192,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 176,
                          "end": 183,
                          "literal": {
                            "type": "Literal",
                            "start": 176,
                            "end": 183,
                            "raw": "\"hello\"",
                            "value": "hello",
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 186,
                          "end": 192
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 201,
            "end": 235,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 205,
              "end": 210,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 210,
              "end": 235,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 221,
                "end": 235,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 223,
                    "end": 233,
                    "argument": {
                      "type": "Literal",
                      "start": 230,
                      "end": 232,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 212,
                "end": 220,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 214,
                  "end": 220
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 238,
            "end": 267,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 242,
              "end": 247,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 247,
              "end": 267,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 264,
                "end": 267,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 248,
                  "end": 262,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 249,
                    "end": 262,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 251,
                      "end": 262,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 251,
                          "end": 257
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 260,
                          "end": 262,
                          "literal": {
                            "type": "Literal",
                            "start": 260,
                            "end": 262,
                            "raw": "42",
                            "value": 42,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 115,
        "decorators": [],
        "name": "Two",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 272,
      "end": 299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 286,
          "end": 298,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 286,
            "end": 298,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 287,
              "end": 298,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 289,
                "end": 298,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 289,
                    "end": 292,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 289,
                      "end": 292,
                      "decorators": [],
                      "name": "One",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 295,
                    "end": 298,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 295,
                      "end": 298,
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 312,
      "end": 320,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 312,
        "end": 319,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 312,
          "end": 313,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 314,
          "end": 319,
          "decorators": [],
          "name": "prop1",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 341,
      "end": 354,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 341,
        "end": 353,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 341,
          "end": 348,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 341,
            "end": 342,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 343,
            "end": 348,
            "decorators": [],
            "name": "prop1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 351,
          "end": 353,
          "raw": "42",
          "value": 42,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 355,
      "end": 373,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 355,
        "end": 372,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 355,
          "end": 362,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 355,
            "end": 356,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 357,
            "end": 362,
            "decorators": [],
            "name": "prop1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 365,
          "end": 372,
          "raw": "\"hello\"",
          "value": "hello",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 384,
      "end": 392,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 384,
        "end": 391,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 384,
          "end": 385,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 386,
          "end": 391,
          "decorators": [],
          "name": "prop2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 399,
      "end": 412,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 399,
        "end": 411,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 399,
          "end": 406,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 399,
            "end": 400,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 401,
            "end": 406,
            "decorators": [],
            "name": "prop2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 409,
          "end": 411,
          "raw": "42",
          "value": 42,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 413,
      "end": 431,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 413,
        "end": 430,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 413,
          "end": 420,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 413,
            "end": 414,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 415,
            "end": 420,
            "decorators": [],
            "name": "prop2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 423,
          "end": 430,
          "raw": "\"hello\"",
          "value": "hello",
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
