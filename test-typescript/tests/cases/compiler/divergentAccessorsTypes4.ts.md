__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 441,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "One",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 104,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 48,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 23,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 23,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 25,
                "end": 33,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 27,
                  "end": 33
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 84,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 60,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 60,
              "end": 84,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 61,
                  "end": 79,
                  "name": "s",
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 81,
                "end": 84,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 88,
            "end": 102,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 93,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 106,
      "end": 270,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 115,
        "name": "Two",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 116,
        "end": 270,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 120,
            "end": 160,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 129,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 129,
              "end": 160,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "declare": false,
              "typeParameters": null,
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
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 163,
            "end": 197,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 172,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 172,
              "end": 197,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 173,
                  "end": 192,
                  "name": "s",
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 194,
                "end": 197,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 201,
            "end": 235,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 205,
              "end": 210,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 210,
              "end": 235,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 212,
                "end": 220,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 214,
                  "end": 220
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 238,
            "end": 267,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 242,
              "end": 247,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 247,
              "end": 267,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 248,
                  "end": 262,
                  "name": "s",
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 264,
                "end": 267,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 286,
            "end": 298,
            "name": "i",
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
                      "name": "One",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "Two",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
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
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 314,
          "end": 319,
          "name": "prop1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 343,
            "end": 348,
            "name": "prop1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 357,
            "end": 362,
            "name": "prop1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 386,
          "end": 391,
          "name": "prop2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 401,
            "end": 406,
            "name": "prop2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 415,
            "end": 420,
            "name": "prop2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
