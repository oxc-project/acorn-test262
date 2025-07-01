__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestTscEdit",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 21
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
              "name": "caption",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 33
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 35,
                "end": 41
              },
              "start": 33,
              "end": 41
            },
            "accessibility": null,
            "static": false,
            "start": 26,
            "end": 42
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commandLineArgs",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 60
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 72,
                    "end": 78
                  },
                  "start": 72,
                  "end": 80
                },
                "start": 63,
                "end": 80
              },
              "start": 61,
              "end": 80
            },
            "accessibility": null,
            "static": false,
            "start": 45,
            "end": 81
          }
        ],
        "start": 22,
        "end": 83
      },
      "declare": false,
      "start": 0,
      "end": 83
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestTscCompile",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 109
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
              "name": "subScenario",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 125
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 127,
                "end": 133
              },
              "start": 125,
              "end": 133
            },
            "accessibility": null,
            "static": false,
            "start": 114,
            "end": 134
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commandLineArgs",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 152
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 163,
                    "end": 169
                  },
                  "start": 163,
                  "end": 171
                },
                "start": 154,
                "end": 171
              },
              "start": 152,
              "end": 171
            },
            "accessibility": null,
            "static": false,
            "start": 137,
            "end": 172
          }
        ],
        "start": 110,
        "end": 174
      },
      "declare": false,
      "start": 85,
      "end": 174
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VerifyTscEditDiscrepanciesInput",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 217
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
              "name": "index",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 227
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 229,
                "end": 235
              },
              "start": 227,
              "end": 235
            },
            "accessibility": null,
            "static": false,
            "start": 222,
            "end": 236
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "edits",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 244
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TestTscEdit",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 255,
                      "end": 266
                    },
                    "typeArguments": null,
                    "start": 255,
                    "end": 266
                  },
                  "start": 255,
                  "end": 268
                },
                "start": 246,
                "end": 268
              },
              "start": 244,
              "end": 268
            },
            "accessibility": null,
            "static": false,
            "start": 239,
            "end": 269
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commandLineArgs",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 287
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TestTscCompile",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 289,
                    "end": 303
                  },
                  "typeArguments": null,
                  "start": 289,
                  "end": 303
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "commandLineArgs",
                    "raw": "\"commandLineArgs\"",
                    "start": 304,
                    "end": 321
                  },
                  "start": 304,
                  "end": 321
                },
                "start": 289,
                "end": 322
              },
              "start": 287,
              "end": 322
            },
            "accessibility": null,
            "static": false,
            "start": 272,
            "end": 323
          }
        ],
        "start": 218,
        "end": 325
      },
      "declare": false,
      "start": 176,
      "end": 325
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testTscCompile",
        "optional": false,
        "typeAnnotation": null,
        "start": 336,
        "end": 350
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TestTscCompile",
                "optional": false,
                "typeAnnotation": null,
                "start": 358,
                "end": 372
              },
              "typeArguments": null,
              "start": 358,
              "end": 372
            },
            "start": 356,
            "end": 372
          },
          "start": 351,
          "end": 372
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 374,
        "end": 376
      },
      "expression": false,
      "start": 327,
      "end": 376
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "verifyTscEditDiscrepancies",
        "optional": false,
        "typeAnnotation": null,
        "start": 387,
        "end": 413
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": null,
                "start": 418,
                "end": 423
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": null,
                "start": 418,
                "end": 423
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 418,
              "end": 423
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "edits",
                "optional": false,
                "typeAnnotation": null,
                "start": 427,
                "end": 432
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "edits",
                "optional": false,
                "typeAnnotation": null,
                "start": 427,
                "end": 432
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 427,
              "end": 432
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "commandLineArgs",
                "optional": false,
                "typeAnnotation": null,
                "start": 436,
                "end": 451
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "commandLineArgs",
                "optional": false,
                "typeAnnotation": null,
                "start": 436,
                "end": 451
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 436,
              "end": 451
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "VerifyTscEditDiscrepanciesInput",
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 487
              },
              "typeArguments": null,
              "start": 456,
              "end": 487
            },
            "start": 454,
            "end": 487
          },
          "start": 414,
          "end": 487
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "caption",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 501,
                        "end": 508
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "caption",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 501,
                        "end": 508
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 501,
                      "end": 508
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 510
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "edits",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 513,
                    "end": 518
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 519,
                    "end": 524
                  },
                  "optional": false,
                  "computed": true,
                  "start": 513,
                  "end": 525
                },
                "definite": false,
                "start": 499,
                "end": 525
              }
            ],
            "declare": false,
            "start": 493,
            "end": 526
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "testTscCompile",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 543
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "subScenario",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 550,
                        "end": 561
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "caption",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 563,
                        "end": 570
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 550,
                      "end": 570
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "commandLineArgs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 576,
                        "end": 591
                      },
                      "value": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "edits",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 593,
                              "end": 598
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "index",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 599,
                              "end": 604
                            },
                            "optional": false,
                            "computed": true,
                            "start": 593,
                            "end": 605
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "commandLineArgs",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 606,
                            "end": 621
                          },
                          "optional": false,
                          "computed": false,
                          "start": 593,
                          "end": 621
                        },
                        "operator": "||",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "commandLineArgs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 625,
                          "end": 640
                        },
                        "start": 593,
                        "end": 640
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 576,
                      "end": 640
                    }
                  ],
                  "start": 544,
                  "end": 645
                }
              ],
              "optional": false,
              "start": 529,
              "end": 646
            },
            "directive": null,
            "start": 529,
            "end": 647
          }
        ],
        "start": 489,
        "end": 649
      },
      "expression": false,
      "start": 378,
      "end": 649
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 649
}
```
