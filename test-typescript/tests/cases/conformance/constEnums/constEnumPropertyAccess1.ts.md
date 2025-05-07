__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 225,
  "end": 509,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 225,
      "end": 292,
      "body": {
        "type": "TSEnumBody",
        "start": 238,
        "end": 292,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 244,
            "end": 249,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 248,
              "end": 249,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 255,
            "end": 260,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 255,
              "end": 256,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 259,
              "end": 260,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 266,
            "end": 275,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 270,
              "end": 275,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 270,
                "end": 271,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 274,
                "end": 275,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 281,
            "end": 290,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 281,
              "end": 282,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 285,
              "end": 290,
              "operator": "*",
              "left": {
                "type": "Identifier",
                "start": 285,
                "end": 286,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 289,
                "end": 290,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 237,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 294,
      "end": 358,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 357,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 298,
            "end": 331,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 299,
              "end": 331,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 301,
                "end": 331,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 307,
                    "end": 329,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 308,
                        "end": 319,
                        "decorators": [],
                        "name": "idx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 311,
                          "end": 319,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 313,
                            "end": 319
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 320,
                      "end": 329,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 322,
                        "end": 329
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 334,
            "end": 357,
            "properties": [
              {
                "type": "Property",
                "start": 344,
                "end": 351,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 344,
                  "end": 345,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 347,
                  "end": 351,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 360,
      "end": 372,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 364,
          "end": 371,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 365,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 368,
            "end": 371,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 368,
              "end": 369,
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 370,
              "end": 371,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 373,
      "end": 389,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 377,
          "end": 388,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 377,
            "end": 379,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 382,
            "end": 388,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 382,
              "end": 383,
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 384,
              "end": 387,
              "raw": "\"A\"",
              "value": "A",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 390,
      "end": 405,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 394,
          "end": 404,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 394,
            "end": 395,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 398,
            "end": 404,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 398,
              "end": 399,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 400,
              "end": 403,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 400,
                "end": 401,
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 402,
                "end": 403,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 407,
      "end": 508,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 415,
        "end": 508,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 421,
            "end": 432,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 422,
              "end": 425,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 422,
                "end": 423,
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 424,
                "end": 425,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 426,
              "end": 432,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 429,
                "end": 432,
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
            "start": 437,
            "end": 477,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 442,
              "end": 445,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 442,
                "end": 443,
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 444,
                "end": 445,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 446,
              "end": 477,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 449,
                "end": 477,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 459,
                    "end": 471,
                    "argument": {
                      "type": "Literal",
                      "start": 466,
                      "end": 470,
                      "raw": "true",
                      "value": true,
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
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 482,
            "end": 506,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 487,
              "end": 490,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 487,
                "end": 488,
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 489,
                "end": 490,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 491,
              "end": 506,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 503,
                "end": 506,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 492,
                  "end": 501,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 493,
                    "end": 501,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 495,
                      "end": 501
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
        "start": 413,
        "end": 414,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
