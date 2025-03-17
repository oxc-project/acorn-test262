__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 249,
  "end": 534,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 249,
      "end": 316,
      "body": {
        "type": "TSEnumBody",
        "start": 262,
        "end": 316,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 268,
            "end": 273,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 272,
              "end": 273,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "TSEnumMember",
            "start": 279,
            "end": 284,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 279,
              "end": 280,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 283,
              "end": 284,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "TSEnumMember",
            "start": 290,
            "end": 299,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 290,
              "end": 291,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 294,
              "end": 299,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 294,
                "end": 295,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 298,
                "end": 299,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 305,
            "end": 314,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 305,
              "end": 306,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 309,
              "end": 314,
              "operator": "*",
              "left": {
                "type": "Identifier",
                "start": 309,
                "end": 310,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 313,
                "end": 314,
                "raw": "2",
                "value": 2
              }
            }
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 261,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 318,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 381,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 355,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 323,
              "end": 355,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 325,
                "end": 355,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 331,
                    "end": 353,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 332,
                        "end": 343,
                        "decorators": [],
                        "name": "idx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 335,
                          "end": 343,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 337,
                            "end": 343
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 344,
                      "end": 353,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 346,
                        "end": 353
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 358,
            "end": 381,
            "properties": [
              {
                "type": "Property",
                "start": 368,
                "end": 375,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 368,
                  "end": 369,
                  "raw": "1",
                  "value": 1
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 371,
                  "end": 375,
                  "raw": "true",
                  "value": true
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
      "start": 384,
      "end": 396,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 388,
          "end": 395,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 388,
            "end": 389,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 392,
            "end": 395,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 392,
              "end": 393,
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 394,
              "end": 395,
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
      "start": 397,
      "end": 413,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 401,
          "end": 412,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 401,
            "end": 403,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 406,
            "end": 412,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 406,
              "end": 407,
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 408,
              "end": 411,
              "raw": "\"A\"",
              "value": "A"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 414,
      "end": 429,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 418,
          "end": 428,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 418,
            "end": 419,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 422,
            "end": 428,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 422,
              "end": 423,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 424,
              "end": 427,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 424,
                "end": 425,
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 426,
                "end": 427,
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
      "start": 431,
      "end": 532,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 439,
        "end": 532,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 445,
            "end": 456,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 446,
              "end": 449,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 446,
                "end": 447,
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 448,
                "end": 449,
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
              "start": 450,
              "end": 456,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 453,
                "end": 456,
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
            "start": 461,
            "end": 501,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 466,
              "end": 469,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 466,
                "end": 467,
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 468,
                "end": 469,
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
              "start": 470,
              "end": 501,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 473,
                "end": 501,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 483,
                    "end": 495,
                    "argument": {
                      "type": "Literal",
                      "start": 490,
                      "end": 494,
                      "raw": "true",
                      "value": true
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
            "start": 506,
            "end": 530,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 511,
              "end": 514,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 511,
                "end": 512,
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 513,
                "end": 514,
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
              "start": 515,
              "end": 530,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 527,
                "end": 530,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 516,
                  "end": 525,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 517,
                    "end": 525,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 519,
                      "end": 525
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
        "start": 437,
        "end": 438,
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
