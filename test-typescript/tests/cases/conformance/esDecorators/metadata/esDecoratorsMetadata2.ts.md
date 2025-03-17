__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "name": "meta",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 25,
          "name": "key",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 25,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 19,
              "end": 25
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 27,
          "end": 40,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 32,
            "end": 40,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 34,
              "end": 40
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "name": "_",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 59,
                  "end": 66,
                  "name": "context",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "object": {
                          "type": "MemberExpression",
                          "start": 81,
                          "end": 97,
                          "object": {
                            "type": "Identifier",
                            "start": 81,
                            "end": 88,
                            "name": "context",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 89,
                            "end": 97,
                            "name": "metadata",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 98,
                          "end": 101,
                          "name": "key",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 110,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 122,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 145,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 146,
        "end": 180,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 152,
            "end": 178,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 173,
              "end": 178,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 176,
                "end": 178,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 152,
                "end": 167,
                "expression": {
                  "type": "CallExpression",
                  "start": 153,
                  "end": 167,
                  "callee": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 157,
                    "name": "meta",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 158,
                      "end": 161,
                      "value": "b",
                      "raw": "'b'"
                    },
                    {
                      "type": "Literal",
                      "start": 163,
                      "end": 166,
                      "value": "y",
                      "raw": "'y'"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 122,
          "end": 137,
          "expression": {
            "type": "CallExpression",
            "start": 123,
            "end": 137,
            "callee": {
              "type": "Identifier",
              "start": 123,
              "end": 127,
              "name": "meta",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 128,
                "end": 131,
                "value": "a",
                "raw": "'a'"
              },
              {
                "type": "Literal",
                "start": 133,
                "end": 136,
                "value": "x",
                "raw": "'x'"
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 182,
      "end": 203,
      "expression": {
        "type": "MemberExpression",
        "start": 182,
        "end": 202,
        "object": {
          "type": "MemberExpression",
          "start": 182,
          "end": 200,
          "object": {
            "type": "Identifier",
            "start": 182,
            "end": 183,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "MemberExpression",
            "start": 184,
            "end": 199,
            "object": {
              "type": "Identifier",
              "start": 184,
              "end": 190,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 191,
              "end": 199,
              "name": "metadata",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 201,
          "end": 202,
          "name": "a",
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
      "start": 211,
      "end": 232,
      "expression": {
        "type": "MemberExpression",
        "start": 211,
        "end": 231,
        "object": {
          "type": "MemberExpression",
          "start": 211,
          "end": 229,
          "object": {
            "type": "Identifier",
            "start": 211,
            "end": 212,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "MemberExpression",
            "start": 213,
            "end": 228,
            "object": {
              "type": "Identifier",
              "start": 213,
              "end": 219,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 220,
              "end": 228,
              "name": "metadata",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 230,
          "end": 231,
          "name": "b",
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
      "type": "ClassDeclaration",
      "start": 241,
      "end": 293,
      "id": {
        "type": "Identifier",
        "start": 247,
        "end": 248,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 257,
        "end": 258,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 259,
        "end": 293,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 265,
            "end": 291,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 285,
              "end": 286,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 286,
              "end": 291,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 289,
                "end": 291,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 265,
                "end": 280,
                "expression": {
                  "type": "CallExpression",
                  "start": 266,
                  "end": 280,
                  "callee": {
                    "type": "Identifier",
                    "start": 266,
                    "end": 270,
                    "name": "meta",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 271,
                      "end": 274,
                      "value": "b",
                      "raw": "'b'"
                    },
                    {
                      "type": "Literal",
                      "start": 276,
                      "end": 279,
                      "value": "z",
                      "raw": "'z'"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
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
      "type": "ExpressionStatement",
      "start": 295,
      "end": 316,
      "expression": {
        "type": "MemberExpression",
        "start": 295,
        "end": 315,
        "object": {
          "type": "MemberExpression",
          "start": 295,
          "end": 313,
          "object": {
            "type": "Identifier",
            "start": 295,
            "end": 296,
            "name": "D",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "MemberExpression",
            "start": 297,
            "end": 312,
            "object": {
              "type": "Identifier",
              "start": 297,
              "end": 303,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 304,
              "end": 312,
              "name": "metadata",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 314,
          "end": 315,
          "name": "a",
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
      "start": 324,
      "end": 345,
      "expression": {
        "type": "MemberExpression",
        "start": 324,
        "end": 344,
        "object": {
          "type": "MemberExpression",
          "start": 324,
          "end": 342,
          "object": {
            "type": "Identifier",
            "start": 324,
            "end": 325,
            "name": "D",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "MemberExpression",
            "start": 326,
            "end": 341,
            "object": {
              "type": "Identifier",
              "start": 326,
              "end": 332,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 333,
              "end": 341,
              "name": "metadata",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 343,
          "end": 344,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
