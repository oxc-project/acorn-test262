__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 512,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 62,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 61,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "names",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 12,
            "end": 61,
            "elements": [
              {
                "type": "Literal",
                "start": 13,
                "end": 19,
                "raw": "\"list\"",
                "value": "list",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 21,
                "end": 29,
                "raw": "\"table1\"",
                "value": "table1",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 31,
                "end": 39,
                "raw": "\"table2\"",
                "value": "table2",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 41,
                "end": 49,
                "raw": "\"table3\"",
                "value": "table3",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 51,
                "end": 60,
                "raw": "\"summary\"",
                "value": "summary",
                "regex": null,
                "bigint": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 64,
      "end": 139,
      "body": {
        "type": "TSInterfaceBody",
        "start": 86,
        "end": 139,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 92,
            "end": 112,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 103,
              "decorators": [],
              "name": "clientWidth",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 111,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 105,
                "end": 111
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 117,
            "end": 137,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 127,
              "decorators": [],
              "name": "isDisabled",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 127,
              "end": 136,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 129,
                "end": 136
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 85,
        "decorators": [],
        "name": "HTMLElement",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 141,
      "end": 172,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 171,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 171,
            "decorators": [],
            "name": "document",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 161,
              "end": 171,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 163,
                "end": 171,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 171,
                  "decorators": [],
                  "name": "Document",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 173,
      "end": 247,
      "body": {
        "type": "TSInterfaceBody",
        "start": 192,
        "end": 247,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 198,
            "end": 245,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 198,
              "end": 212,
              "decorators": [],
              "name": "getElementById",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 213,
                "end": 230,
                "decorators": [],
                "name": "elementId",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 222,
                  "end": 230,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 224,
                    "end": 230
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 231,
              "end": 244,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 233,
                "end": 244,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 244,
                  "decorators": [],
                  "name": "HTMLElement",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 183,
        "end": 191,
        "decorators": [],
        "name": "Document",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 249,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 253,
          "end": 336,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 261,
            "decorators": [],
            "name": "elements",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 264,
            "end": 336,
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 274,
                "end": 335,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 290,
                  "end": 335,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 296,
                      "end": 333,
                      "argument": {
                        "type": "CallExpression",
                        "start": 303,
                        "end": 332,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 327,
                            "end": 331,
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 303,
                          "end": 326,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 303,
                            "end": 311,
                            "decorators": [],
                            "name": "document",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 312,
                            "end": 326,
                            "decorators": [],
                            "name": "getElementById",
                            "optional": false,
                            "typeAnnotation": null
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
                    "start": 284,
                    "end": 288,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 264,
              "end": 273,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 264,
                "end": 269,
                "decorators": [],
                "name": "names",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 270,
                "end": 273,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 340,
      "end": 410,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 344,
          "end": 409,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 344,
            "end": 347,
            "decorators": [],
            "name": "xxx",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 350,
            "end": 409,
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 366,
                "end": 408,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 379,
                  "end": 408,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 385,
                      "end": 406,
                      "argument": {
                        "type": "UnaryExpression",
                        "start": 392,
                        "end": 405,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 393,
                          "end": 405,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 393,
                            "end": 394,
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 395,
                            "end": 405,
                            "decorators": [],
                            "name": "isDisabled",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "operator": "!",
                        "prefix": true
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
                    "start": 376,
                    "end": 377,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 350,
              "end": 365,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 350,
                "end": 358,
                "decorators": [],
                "name": "elements",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 359,
                "end": 365,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 412,
      "end": 511,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 416,
          "end": 510,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 416,
            "end": 431,
            "decorators": [],
            "name": "widths",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 422,
              "end": 431,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 423,
                "end": 431,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 423,
                  "end": 429
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 434,
            "end": 510,
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 447,
                "end": 509,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 460,
                  "end": 509,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 486,
                      "end": 507,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 493,
                        "end": 506,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 493,
                          "end": 494,
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 495,
                          "end": 506,
                          "decorators": [],
                          "name": "clientWidth",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
                    "start": 457,
                    "end": 458,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 434,
              "end": 446,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 434,
                "end": 442,
                "decorators": [],
                "name": "elements",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 443,
                "end": 446,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
