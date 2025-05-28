__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 492,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 491,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 491,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 26,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 18,
              "name": "foo"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 21,
              "end": 25,
              "value": true,
              "raw": "true"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 31,
            "end": 48,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 38,
              "end": 42,
              "name": "baz"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 45,
              "end": 47,
              "value": 10,
              "raw": "10"
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 67,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 60,
              "end": 62,
              "name": "m"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 67,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 65,
                "end": 67,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 72,
            "end": 215,
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
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 215,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 91,
                "end": 215,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 101,
                    "end": 112,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 101,
                      "end": 111,
                      "object": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 106,
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 107,
                        "end": 111,
                        "name": "foo"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 127,
                    "end": 138,
                    "expression": {
                      "type": "CallExpression",
                      "start": 127,
                      "end": 137,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 127,
                        "end": 135,
                        "object": {
                          "type": "Identifier",
                          "start": 127,
                          "end": 132,
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 133,
                          "end": 135,
                          "name": "m"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 147,
                    "end": 158,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 147,
                      "end": 157,
                      "object": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 152,
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 153,
                        "end": 157,
                        "name": "baz"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 167,
                    "end": 178,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 167,
                      "end": 177,
                      "object": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 172,
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 173,
                        "end": 177,
                        "name": "bar"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 196,
                    "end": 209,
                    "expression": {
                      "type": "CallExpression",
                      "start": 196,
                      "end": 208,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 196,
                        "end": 206,
                        "object": {
                          "type": "Identifier",
                          "start": 196,
                          "end": 201,
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 202,
                          "end": 206,
                          "name": "foo"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 220,
            "end": 353,
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
            "value": {
              "type": "FunctionExpression",
              "start": 227,
              "end": 353,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 244,
                "end": 353,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 254,
                    "end": 265,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 254,
                      "end": 264,
                      "object": {
                        "type": "Identifier",
                        "start": 254,
                        "end": 259,
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 260,
                        "end": 264,
                        "name": "foo"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 274,
                    "end": 285,
                    "expression": {
                      "type": "CallExpression",
                      "start": 274,
                      "end": 284,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 274,
                        "end": 282,
                        "object": {
                          "type": "Identifier",
                          "start": 274,
                          "end": 279,
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 280,
                          "end": 282,
                          "name": "m"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 294,
                    "end": 305,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 294,
                      "end": 304,
                      "object": {
                        "type": "Identifier",
                        "start": 294,
                        "end": 299,
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 300,
                        "end": 304,
                        "name": "baz"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 314,
                    "end": 325,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 314,
                      "end": 324,
                      "object": {
                        "type": "Identifier",
                        "start": 314,
                        "end": 319,
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 320,
                        "end": 324,
                        "name": "bar"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 334,
                    "end": 347,
                    "expression": {
                      "type": "CallExpression",
                      "start": 334,
                      "end": 346,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 334,
                        "end": 344,
                        "object": {
                          "type": "Identifier",
                          "start": 334,
                          "end": 339,
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 340,
                          "end": 344,
                          "name": "foo"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 358,
            "end": 489,
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
            "value": {
              "type": "FunctionExpression",
              "start": 365,
              "end": 489,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 380,
                "end": 489,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 390,
                    "end": 401,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 390,
                      "end": 400,
                      "object": {
                        "type": "Identifier",
                        "start": 390,
                        "end": 395,
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 396,
                        "end": 400,
                        "name": "foo"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 410,
                    "end": 421,
                    "expression": {
                      "type": "CallExpression",
                      "start": 410,
                      "end": 420,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 410,
                        "end": 418,
                        "object": {
                          "type": "Identifier",
                          "start": 410,
                          "end": 415,
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 416,
                          "end": 418,
                          "name": "m"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 430,
                    "end": 441,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 430,
                      "end": 440,
                      "object": {
                        "type": "Identifier",
                        "start": 430,
                        "end": 435,
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 436,
                        "end": 440,
                        "name": "baz"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 450,
                    "end": 461,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 450,
                      "end": 460,
                      "object": {
                        "type": "Identifier",
                        "start": 450,
                        "end": 455,
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 456,
                        "end": 460,
                        "name": "bar"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 470,
                    "end": 483,
                    "expression": {
                      "type": "CallExpression",
                      "start": 470,
                      "end": 482,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 470,
                        "end": 480,
                        "object": {
                          "type": "Identifier",
                          "start": 470,
                          "end": 475,
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 476,
                          "end": 480,
                          "name": "foo"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
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
      "type": "EmptyStatement",
      "start": 491,
      "end": 492
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
