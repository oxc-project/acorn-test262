/foo.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 353,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 120,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 42,
        "end": 120,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 48,
            "end": 118,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 55,
              "end": 117,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 71,
                "end": 117,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 81,
                    "end": 111,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 81,
                      "end": 110,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 81,
                        "end": 102,
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "start": 81,
                          "end": 97,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 81,
                            "end": 88,
                            "decorators": [],
                            "name": "context",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 89,
                            "end": 97,
                            "decorators": [],
                            "name": "metadata",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 98,
                          "end": 101,
                          "decorators": [],
                          "name": "key",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 110,
                        "decorators": [],
                        "name": "value",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "_",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 59,
                  "end": 66,
                  "decorators": [],
                  "name": "context",
                  "optional": false
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
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "meta",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 25,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 25,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 19,
              "end": 25
            }
          }
        },
        {
          "type": "Identifier",
          "start": 27,
          "end": 40,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 32,
            "end": 40,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 34,
              "end": 40
            }
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 122,
      "end": 180,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 146,
        "end": 180,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 152,
            "end": 178,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 152,
                "end": 167,
                "expression": {
                  "type": "CallExpression",
                  "start": 153,
                  "end": 167,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 158,
                      "end": 161,
                      "raw": "'b'",
                      "value": "b"
                    },
                    {
                      "type": "Literal",
                      "start": 163,
                      "end": 166,
                      "raw": "'y'",
                      "value": "y"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 157,
                    "decorators": [],
                    "name": "meta",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 173,
              "end": 178,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 176,
                "end": 178,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 122,
          "end": 137,
          "expression": {
            "type": "CallExpression",
            "start": 123,
            "end": 137,
            "arguments": [
              {
                "type": "Literal",
                "start": 128,
                "end": 131,
                "raw": "'a'",
                "value": "a"
              },
              {
                "type": "Literal",
                "start": 133,
                "end": 136,
                "raw": "'x'",
                "value": "x"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 123,
              "end": 127,
              "decorators": [],
              "name": "meta",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 145,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 182,
      "end": 203,
      "expression": {
        "type": "MemberExpression",
        "start": 182,
        "end": 202,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 182,
          "end": 200,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 182,
            "end": 183,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "start": 184,
            "end": 199,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 184,
              "end": 190,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 191,
              "end": 199,
              "decorators": [],
              "name": "metadata",
              "optional": false
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 201,
          "end": 202,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 211,
      "end": 232,
      "expression": {
        "type": "MemberExpression",
        "start": 211,
        "end": 231,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 211,
          "end": 229,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 211,
            "end": 212,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "start": 213,
            "end": 228,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 213,
              "end": 219,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 220,
              "end": 228,
              "decorators": [],
              "name": "metadata",
              "optional": false
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 230,
          "end": 231,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 241,
      "end": 293,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 259,
        "end": 293,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 265,
            "end": 291,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 265,
                "end": 280,
                "expression": {
                  "type": "CallExpression",
                  "start": 266,
                  "end": 280,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 271,
                      "end": 274,
                      "raw": "'b'",
                      "value": "b"
                    },
                    {
                      "type": "Literal",
                      "start": 276,
                      "end": 279,
                      "raw": "'z'",
                      "value": "z"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 266,
                    "end": 270,
                    "decorators": [],
                    "name": "meta",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 285,
              "end": 286,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 286,
              "end": 291,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 289,
                "end": 291,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 247,
        "end": 248,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 257,
        "end": 258,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 295,
      "end": 316,
      "expression": {
        "type": "MemberExpression",
        "start": 295,
        "end": 315,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 295,
          "end": 313,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 295,
            "end": 296,
            "decorators": [],
            "name": "D",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "start": 297,
            "end": 312,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 297,
              "end": 303,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 304,
              "end": 312,
              "decorators": [],
              "name": "metadata",
              "optional": false
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 314,
          "end": 315,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 324,
      "end": 345,
      "expression": {
        "type": "MemberExpression",
        "start": 324,
        "end": 344,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 324,
          "end": 342,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 324,
            "end": 325,
            "decorators": [],
            "name": "D",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "start": 326,
            "end": 341,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 326,
              "end": 332,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 333,
              "end": 341,
              "decorators": [],
              "name": "metadata",
              "optional": false
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 343,
          "end": 344,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
