__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "names",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "list",
                "raw": "\"list\"",
                "start": 13,
                "end": 19
              },
              {
                "type": "Literal",
                "value": "table1",
                "raw": "\"table1\"",
                "start": 21,
                "end": 29
              },
              {
                "type": "Literal",
                "value": "table2",
                "raw": "\"table2\"",
                "start": 31,
                "end": 39
              },
              {
                "type": "Literal",
                "value": "table3",
                "raw": "\"table3\"",
                "start": 41,
                "end": 49
              },
              {
                "type": "Literal",
                "value": "summary",
                "raw": "\"summary\"",
                "start": 51,
                "end": 60
              }
            ],
            "start": 12,
            "end": 61
          },
          "definite": false,
          "start": 4,
          "end": 61
        }
      ],
      "declare": false,
      "start": 0,
      "end": 62
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HTMLElement",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 85
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "clientWidth",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 103
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 105,
                "end": 111
              },
              "start": 103,
              "end": 111
            },
            "accessibility": null,
            "static": false,
            "start": 92,
            "end": 112
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isDisabled",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 127
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 129,
                "end": 136
              },
              "start": 127,
              "end": 136
            },
            "accessibility": null,
            "static": false,
            "start": 117,
            "end": 137
          }
        ],
        "start": 86,
        "end": 139
      },
      "declare": false,
      "start": 64,
      "end": 139
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "document",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Document",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 171
                },
                "typeArguments": null,
                "start": 163,
                "end": 171
              },
              "start": 161,
              "end": 171
            },
            "start": 153,
            "end": 171
          },
          "init": null,
          "definite": false,
          "start": 153,
          "end": 171
        }
      ],
      "declare": true,
      "start": 141,
      "end": 172
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Document",
        "optional": false,
        "typeAnnotation": null,
        "start": 183,
        "end": 191
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getElementById",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 212
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "elementId",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 224,
                    "end": 230
                  },
                  "start": 222,
                  "end": 230
                },
                "start": 213,
                "end": 230
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HTMLElement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 233,
                  "end": 244
                },
                "typeArguments": null,
                "start": 233,
                "end": 244
              },
              "start": 231,
              "end": 244
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 198,
            "end": 245
          }
        ],
        "start": 192,
        "end": 247
      },
      "declare": false,
      "start": 173,
      "end": 247
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "elements",
            "optional": false,
            "typeAnnotation": null,
            "start": 253,
            "end": 261
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "names",
                "optional": false,
                "typeAnnotation": null,
                "start": 264,
                "end": 269
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 273
              },
              "optional": false,
              "computed": false,
              "start": 264,
              "end": 273
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 284,
                    "end": 288
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "document",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 303,
                            "end": 311
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "getElementById",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 312,
                            "end": 326
                          },
                          "optional": false,
                          "computed": false,
                          "start": 303,
                          "end": 326
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 327,
                            "end": 331
                          }
                        ],
                        "optional": false,
                        "start": 303,
                        "end": 332
                      },
                      "start": 296,
                      "end": 333
                    }
                  ],
                  "start": 290,
                  "end": 335
                },
                "expression": false,
                "start": 274,
                "end": 335
              }
            ],
            "optional": false,
            "start": 264,
            "end": 336
          },
          "definite": false,
          "start": 253,
          "end": 336
        }
      ],
      "declare": false,
      "start": 249,
      "end": 337
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "xxx",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 347
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "elements",
                "optional": false,
                "typeAnnotation": null,
                "start": 350,
                "end": 358
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 359,
                "end": 365
              },
              "optional": false,
              "computed": false,
              "start": 350,
              "end": 365
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 376,
                    "end": 377
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 393,
                            "end": 394
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isDisabled",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 395,
                            "end": 405
                          },
                          "optional": false,
                          "computed": false,
                          "start": 393,
                          "end": 405
                        },
                        "prefix": true,
                        "start": 392,
                        "end": 405
                      },
                      "start": 385,
                      "end": 406
                    }
                  ],
                  "start": 379,
                  "end": 408
                },
                "expression": false,
                "start": 366,
                "end": 408
              }
            ],
            "optional": false,
            "start": 350,
            "end": 409
          },
          "definite": false,
          "start": 344,
          "end": 409
        }
      ],
      "declare": false,
      "start": 340,
      "end": 410
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "widths",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 423,
                  "end": 429
                },
                "start": 423,
                "end": 431
              },
              "start": 422,
              "end": 431
            },
            "start": 416,
            "end": 431
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "elements",
                "optional": false,
                "typeAnnotation": null,
                "start": 434,
                "end": 442
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 443,
                "end": 446
              },
              "optional": false,
              "computed": false,
              "start": 434,
              "end": 446
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 457,
                    "end": 458
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 493,
                          "end": 494
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "clientWidth",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 495,
                          "end": 506
                        },
                        "optional": false,
                        "computed": false,
                        "start": 493,
                        "end": 506
                      },
                      "start": 486,
                      "end": 507
                    }
                  ],
                  "start": 460,
                  "end": 509
                },
                "expression": false,
                "start": 447,
                "end": 509
              }
            ],
            "optional": false,
            "start": 434,
            "end": 510
          },
          "definite": false,
          "start": 416,
          "end": 510
        }
      ],
      "declare": false,
      "start": 412,
      "end": 511
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 512
}
```
