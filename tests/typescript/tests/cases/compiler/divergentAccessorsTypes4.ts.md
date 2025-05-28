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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 104,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 48,
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
            "value": {
              "type": "FunctionExpression",
              "start": 23,
              "end": 48,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 84,
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
            "value": {
              "type": "FunctionExpression",
              "start": 60,
              "end": 84,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 81,
                "end": 84,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 88,
            "end": 102,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 93,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 106,
      "end": 270,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 116,
        "end": 270,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 120,
            "end": 160,
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
            "value": {
              "type": "FunctionExpression",
              "start": 129,
              "end": 160,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                }
              },
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
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 163,
            "end": 197,
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
            "value": {
              "type": "FunctionExpression",
              "start": 172,
              "end": 197,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                            "value": "hello",
                            "raw": "\"hello\""
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
              "body": {
                "type": "BlockStatement",
                "start": 194,
                "end": 197,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 201,
            "end": 235,
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
            "value": {
              "type": "FunctionExpression",
              "start": 210,
              "end": 235,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 238,
            "end": 267,
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
            "value": {
              "type": "FunctionExpression",
              "start": 247,
              "end": 267,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                            "value": 42,
                            "raw": "42"
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 264,
                "end": 267,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 272,
      "end": 299,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 286,
          "end": 298,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 289,
                      "end": 292,
                      "decorators": [],
                      "name": "One",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 295,
                    "end": 298,
                    "typeName": {
                      "type": "Identifier",
                      "start": 295,
                      "end": 298,
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 312,
      "end": 320,
      "expression": {
        "type": "MemberExpression",
        "start": 312,
        "end": 319,
        "object": {
          "type": "Identifier",
          "start": 312,
          "end": 313,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 314,
          "end": 319,
          "decorators": [],
          "name": "prop1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 341,
      "end": 354,
      "expression": {
        "type": "AssignmentExpression",
        "start": 341,
        "end": 353,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 341,
          "end": 348,
          "object": {
            "type": "Identifier",
            "start": 341,
            "end": 342,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 343,
            "end": 348,
            "decorators": [],
            "name": "prop1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 351,
          "end": 353,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 355,
      "end": 373,
      "expression": {
        "type": "AssignmentExpression",
        "start": 355,
        "end": 372,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 355,
          "end": 362,
          "object": {
            "type": "Identifier",
            "start": 355,
            "end": 356,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 357,
            "end": 362,
            "decorators": [],
            "name": "prop1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 365,
          "end": 372,
          "value": "hello",
          "raw": "\"hello\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 384,
      "end": 392,
      "expression": {
        "type": "MemberExpression",
        "start": 384,
        "end": 391,
        "object": {
          "type": "Identifier",
          "start": 384,
          "end": 385,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 386,
          "end": 391,
          "decorators": [],
          "name": "prop2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 399,
      "end": 412,
      "expression": {
        "type": "AssignmentExpression",
        "start": 399,
        "end": 411,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 399,
          "end": 406,
          "object": {
            "type": "Identifier",
            "start": 399,
            "end": 400,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 401,
            "end": 406,
            "decorators": [],
            "name": "prop2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 409,
          "end": 411,
          "value": 42,
          "raw": "42"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 413,
      "end": 431,
      "expression": {
        "type": "AssignmentExpression",
        "start": 413,
        "end": 430,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 413,
          "end": 420,
          "object": {
            "type": "Identifier",
            "start": 413,
            "end": 414,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 415,
            "end": 420,
            "decorators": [],
            "name": "prop2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 423,
          "end": 430,
          "value": "hello",
          "raw": "\"hello\""
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
