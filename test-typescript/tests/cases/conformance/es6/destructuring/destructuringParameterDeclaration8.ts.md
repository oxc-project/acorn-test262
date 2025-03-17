__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 108,
  "end": 388,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 108,
      "end": 248,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 121,
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 122,
          "end": 226,
          "properties": [
            {
              "type": "Property",
              "start": 128,
              "end": 140,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 128,
                "end": 134,
                "name": "method",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 128,
                "end": 140,
                "left": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 134,
                  "name": "method",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 137,
                  "end": 140,
                  "value": "z",
                  "raw": "'z'"
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 146,
              "end": 165,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 146,
                "end": 152,
                "name": "nested",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectPattern",
                "start": 154,
                "end": 165,
                "properties": [
                  {
                    "type": "Property",
                    "start": 156,
                    "end": 163,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 156,
                      "end": 157,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 156,
                      "end": 163,
                      "left": {
                        "type": "Identifier",
                        "start": 156,
                        "end": 157,
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 160,
                        "end": 163,
                        "value": "c",
                        "raw": "'c'"
                      },
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
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
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
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 175,
                    "end": 181,
                    "name": "method",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                            "value": "x",
                            "raw": "'x'"
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
                            "value": "y",
                            "raw": "'y'"
                          }
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 199,
                  "end": 224,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 205,
                    "name": "nested",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 210,
                            "end": 211,
                            "name": "p",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                    "value": "a",
                                    "raw": "'a'"
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
                                    "value": "b",
                                    "raw": "'b'"
                                  }
                                }
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 228,
        "end": 248,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 234,
            "end": 240,
            "expression": {
              "type": "Identifier",
              "start": 234,
              "end": 240,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 245,
            "end": 246,
            "expression": {
              "type": "Identifier",
              "start": 245,
              "end": 246,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "type": "ExpressionStatement",
      "start": 250,
      "end": 259,
      "expression": {
        "type": "CallExpression",
        "start": 250,
        "end": 258,
        "callee": {
          "type": "Identifier",
          "start": 250,
          "end": 254,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 255,
            "end": 257,
            "properties": []
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 260,
      "end": 301,
      "expression": {
        "type": "CallExpression",
        "start": 260,
        "end": 301,
        "callee": {
          "type": "Identifier",
          "start": 260,
          "end": 264,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 267,
                  "end": 273,
                  "name": "method",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 275,
                  "end": 278,
                  "value": "x",
                  "raw": "'x'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 280,
                "end": 298,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 286,
                  "name": "nested",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 288,
                  "end": 298,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 290,
                      "end": 296,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 290,
                        "end": 291,
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 293,
                        "end": 296,
                        "value": "a",
                        "raw": "'a'"
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
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 302,
      "end": 343,
      "expression": {
        "type": "CallExpression",
        "start": 302,
        "end": 343,
        "callee": {
          "type": "Identifier",
          "start": 302,
          "end": 306,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 315,
                  "name": "method",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 317,
                  "end": 320,
                  "value": "z",
                  "raw": "'z'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 322,
                "end": 340,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 328,
                  "name": "nested",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 330,
                  "end": 340,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 332,
                      "end": 338,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 332,
                        "end": 333,
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 335,
                        "end": 338,
                        "value": "b",
                        "raw": "'b'"
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
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 344,
      "end": 387,
      "expression": {
        "type": "CallExpression",
        "start": 344,
        "end": 387,
        "callee": {
          "type": "Identifier",
          "start": 344,
          "end": 348,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 357,
                  "name": "method",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 359,
                  "end": 364,
                  "value": "one",
                  "raw": "'one'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 366,
                "end": 384,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 372,
                  "name": "nested",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 374,
                  "end": 384,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 376,
                      "end": 382,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 376,
                        "end": 377,
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 379,
                        "end": 382,
                        "value": "a",
                        "raw": "'a'"
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
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
