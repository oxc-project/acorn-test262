__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 108,
  "end": 387,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 108,
      "end": 248,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 228,
        "end": 248,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 234,
            "end": 240,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 234,
              "end": 240,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 245,
            "end": 246,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 245,
              "end": 246,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 121,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 122,
          "end": 226,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 128,
              "end": 140,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 128,
                "end": 134,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 128,
                "end": 140,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 134,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 137,
                  "end": 140,
                  "raw": "'z'",
                  "value": "z"
                },
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 146,
              "end": 165,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 146,
                "end": 152,
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ObjectPattern",
                "start": 154,
                "end": 165,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 156,
                    "end": 163,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 156,
                      "end": 157,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 156,
                      "end": 163,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 156,
                        "end": 157,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 160,
                        "end": 163,
                        "raw": "'c'",
                        "value": "c"
                      },
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 167,
            "end": 226,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 169,
              "end": 226,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 175,
                  "end": 194,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 175,
                    "end": 181,
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 182,
                    "end": 193,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 184,
                      "end": 193,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 184,
                          "end": 187,
                          "literal": {
                            "type": "Literal",
                            "start": 184,
                            "end": 187,
                            "raw": "'x'",
                            "value": "x"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 190,
                          "end": 193,
                          "literal": {
                            "type": "Literal",
                            "start": 190,
                            "end": 193,
                            "raw": "'y'",
                            "value": "y"
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 199,
                  "end": 224,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 205,
                    "decorators": [],
                    "name": "nested",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 206,
                    "end": 224,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 208,
                      "end": 224,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 210,
                          "end": 222,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 210,
                            "end": 211,
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 211,
                            "end": 222,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 213,
                              "end": 222,
                              "types": [
                                {
                                  "type": "TSLiteralType",
                                  "start": 213,
                                  "end": 216,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 213,
                                    "end": 216,
                                    "raw": "'a'",
                                    "value": "a"
                                  }
                                },
                                {
                                  "type": "TSLiteralType",
                                  "start": 219,
                                  "end": 222,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 219,
                                    "end": 222,
                                    "raw": "'b'",
                                    "value": "b"
                                  }
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 250,
      "end": 259,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 250,
        "end": 258,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 255,
            "end": 257,
            "properties": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 250,
          "end": 254,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 260,
      "end": 301,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 260,
        "end": 301,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 265,
            "end": 300,
            "properties": [
              {
                "type": "Property",
                "start": 267,
                "end": 278,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 267,
                  "end": 273,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 275,
                  "end": 278,
                  "raw": "'x'",
                  "value": "x"
                }
              },
              {
                "type": "Property",
                "start": 280,
                "end": 298,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 286,
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 288,
                  "end": 298,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 290,
                      "end": 296,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 290,
                        "end": 291,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 293,
                        "end": 296,
                        "raw": "'a'",
                        "value": "a"
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 260,
          "end": 264,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 302,
      "end": 343,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 302,
        "end": 343,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 307,
            "end": 342,
            "properties": [
              {
                "type": "Property",
                "start": 309,
                "end": 320,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 315,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 317,
                  "end": 320,
                  "raw": "'z'",
                  "value": "z"
                }
              },
              {
                "type": "Property",
                "start": 322,
                "end": 340,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 328,
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 330,
                  "end": 340,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 332,
                      "end": 338,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 332,
                        "end": 333,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 335,
                        "end": 338,
                        "raw": "'b'",
                        "value": "b"
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 302,
          "end": 306,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 344,
      "end": 387,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 344,
        "end": 387,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 349,
            "end": 386,
            "properties": [
              {
                "type": "Property",
                "start": 351,
                "end": 364,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 357,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 359,
                  "end": 364,
                  "raw": "'one'",
                  "value": "one"
                }
              },
              {
                "type": "Property",
                "start": 366,
                "end": 384,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 372,
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 374,
                  "end": 384,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 376,
                      "end": 382,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 376,
                        "end": 377,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 379,
                        "end": 382,
                        "raw": "'a'",
                        "value": "a"
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 344,
          "end": 348,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
