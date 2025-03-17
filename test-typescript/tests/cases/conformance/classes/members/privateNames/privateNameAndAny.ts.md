__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 493,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 491,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 491,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 26,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 18,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 21,
              "end": 25,
              "raw": "true",
              "value": true
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 31,
            "end": 48,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 38,
              "end": 42,
              "name": "baz"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 45,
              "end": 47,
              "raw": "10",
              "value": 10
            }
          },
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 67,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 60,
              "end": 62,
              "name": "m"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 67,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 65,
                "end": 67,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 72,
            "end": 215,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 78,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 215,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 91,
                "end": 215,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 101,
                    "end": 112,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 101,
                      "end": 111,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 106,
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 107,
                        "end": 111,
                        "name": "foo"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 127,
                    "end": 138,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 127,
                      "end": 137,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 127,
                        "end": 135,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 127,
                          "end": 132,
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 133,
                          "end": 135,
                          "name": "m"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 147,
                    "end": 158,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 147,
                      "end": 157,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 152,
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 153,
                        "end": 157,
                        "name": "baz"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 167,
                    "end": 178,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 167,
                      "end": 177,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 172,
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 173,
                        "end": 177,
                        "name": "bar"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 196,
                    "end": 209,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 196,
                      "end": 208,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 196,
                        "end": 206,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 196,
                          "end": 201,
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 202,
                          "end": 206,
                          "name": "foo"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 79,
                  "end": 89,
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 84,
                    "end": 89,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 86,
                      "end": 89
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
            "start": 220,
            "end": 353,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 227,
              "decorators": [],
              "name": "methodU",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 227,
              "end": 353,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 244,
                "end": 353,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 254,
                    "end": 265,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 254,
                      "end": 264,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 254,
                        "end": 259,
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 260,
                        "end": 264,
                        "name": "foo"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 274,
                    "end": 285,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 274,
                      "end": 284,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 274,
                        "end": 282,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 274,
                          "end": 279,
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 280,
                          "end": 282,
                          "name": "m"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 294,
                    "end": 305,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 294,
                      "end": 304,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 294,
                        "end": 299,
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 300,
                        "end": 304,
                        "name": "baz"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 314,
                    "end": 325,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 314,
                      "end": 324,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 314,
                        "end": 319,
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 320,
                        "end": 324,
                        "name": "bar"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 334,
                    "end": 347,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 334,
                      "end": 346,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 334,
                        "end": 344,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 334,
                          "end": 339,
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 340,
                          "end": 344,
                          "name": "foo"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 228,
                  "end": 242,
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 233,
                    "end": 242,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 235,
                      "end": 242
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
            "start": 358,
            "end": 489,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 358,
              "end": 365,
              "decorators": [],
              "name": "methodN",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 365,
              "end": 489,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 380,
                "end": 489,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 390,
                    "end": 401,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 390,
                      "end": 400,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 390,
                        "end": 395,
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 396,
                        "end": 400,
                        "name": "foo"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 410,
                    "end": 421,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 410,
                      "end": 420,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 410,
                        "end": 418,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 410,
                          "end": 415,
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 416,
                          "end": 418,
                          "name": "m"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 430,
                    "end": 441,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 430,
                      "end": 440,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 430,
                        "end": 435,
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 436,
                        "end": 440,
                        "name": "baz"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 450,
                    "end": 461,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 450,
                      "end": 460,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 450,
                        "end": 455,
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 456,
                        "end": 460,
                        "name": "bar"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 470,
                    "end": 483,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 470,
                      "end": 482,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 470,
                        "end": 480,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 470,
                          "end": 475,
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 476,
                          "end": 480,
                          "name": "foo"
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 366,
                  "end": 378,
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 371,
                    "end": 378,
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "start": 373,
                      "end": 378
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 491,
      "end": 492
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
