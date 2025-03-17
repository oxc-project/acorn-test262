__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 513,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "name": "names",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "value": "list",
                "raw": "\"list\""
              },
              {
                "type": "Literal",
                "start": 21,
                "end": 29,
                "value": "table1",
                "raw": "\"table1\""
              },
              {
                "type": "Literal",
                "start": 31,
                "end": 39,
                "value": "table2",
                "raw": "\"table2\""
              },
              {
                "type": "Literal",
                "start": 41,
                "end": 49,
                "value": "table3",
                "raw": "\"table3\""
              },
              {
                "type": "Literal",
                "start": 51,
                "end": 60,
                "value": "summary",
                "raw": "\"summary\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 64,
      "end": 139,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 85,
        "name": "HTMLElement",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 86,
        "end": 139,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 92,
            "end": 112,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 103,
              "name": "clientWidth",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 111,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 105,
                "end": 111
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 117,
            "end": 137,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 127,
              "name": "isDisabled",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 127,
              "end": 136,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 129,
                "end": 136
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 171,
            "name": "document",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 161,
              "end": 171,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 163,
                "end": 171,
                "typeName": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 171,
                  "name": "Document",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 173,
      "end": 247,
      "id": {
        "type": "Identifier",
        "start": 183,
        "end": 191,
        "name": "Document",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 192,
        "end": 247,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 198,
            "end": 245,
            "key": {
              "type": "Identifier",
              "start": 198,
              "end": 212,
              "name": "getElementById",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 213,
                "end": 230,
                "name": "elementId",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 222,
                  "end": 230,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 224,
                    "end": 230
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 231,
              "end": 244,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 233,
                "end": 244,
                "typeName": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 244,
                  "name": "HTMLElement",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 261,
            "name": "elements",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 264,
            "end": 336,
            "callee": {
              "type": "MemberExpression",
              "start": 264,
              "end": 273,
              "object": {
                "type": "Identifier",
                "start": 264,
                "end": 269,
                "name": "names",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 270,
                "end": 273,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 274,
                "end": 335,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 284,
                    "end": 288,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "callee": {
                          "type": "MemberExpression",
                          "start": 303,
                          "end": 326,
                          "object": {
                            "type": "Identifier",
                            "start": 303,
                            "end": 311,
                            "name": "document",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 312,
                            "end": 326,
                            "name": "getElementById",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 327,
                            "end": 331,
                            "name": "name",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 344,
            "end": 347,
            "name": "xxx",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 350,
            "end": 409,
            "callee": {
              "type": "MemberExpression",
              "start": 350,
              "end": 365,
              "object": {
                "type": "Identifier",
                "start": 350,
                "end": 358,
                "name": "elements",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 359,
                "end": 365,
                "name": "filter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 366,
                "end": 408,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 376,
                    "end": 377,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "operator": "!",
                        "prefix": true,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 393,
                          "end": 405,
                          "object": {
                            "type": "Identifier",
                            "start": 393,
                            "end": 394,
                            "name": "e",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 395,
                            "end": 405,
                            "name": "isDisabled",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 416,
            "end": 431,
            "name": "widths",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 434,
            "end": 510,
            "callee": {
              "type": "MemberExpression",
              "start": 434,
              "end": 446,
              "object": {
                "type": "Identifier",
                "start": 434,
                "end": 442,
                "name": "elements",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 443,
                "end": 446,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 447,
                "end": 509,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 457,
                    "end": 458,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "object": {
                          "type": "Identifier",
                          "start": 493,
                          "end": 494,
                          "name": "e",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 495,
                          "end": 506,
                          "name": "clientWidth",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
