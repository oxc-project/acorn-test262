__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 650,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "name": "TestTscEdit",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 83,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 26,
            "end": 42,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 33,
              "name": "caption",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 41,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 35,
                "end": 41
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 45,
            "end": 81,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 60,
              "name": "commandLineArgs",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 80,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 63,
                "end": 80,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 72,
                  "end": 80,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 72,
                    "end": 78
                  }
                }
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
      "type": "TSInterfaceDeclaration",
      "start": 85,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 109,
        "name": "TestTscCompile",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 110,
        "end": 174,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 114,
            "end": 134,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 125,
              "name": "subScenario",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 133,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 127,
                "end": 133
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 137,
            "end": 172,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 152,
              "name": "commandLineArgs",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 171,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 154,
                "end": 171,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 163,
                  "end": 171,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 163,
                    "end": 169
                  }
                }
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
      "type": "TSInterfaceDeclaration",
      "start": 176,
      "end": 325,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 217,
        "name": "VerifyTscEditDiscrepanciesInput",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 218,
        "end": 325,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 222,
            "end": 236,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 227,
              "name": "index",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 235,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 229,
                "end": 235
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 239,
            "end": 269,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 239,
              "end": 244,
              "name": "edits",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 244,
              "end": 268,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 246,
                "end": 268,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 255,
                  "end": 268,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 255,
                    "end": 266,
                    "typeName": {
                      "type": "Identifier",
                      "start": 255,
                      "end": 266,
                      "name": "TestTscEdit",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 272,
            "end": 323,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 287,
              "name": "commandLineArgs",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 287,
              "end": 322,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 289,
                "end": 322,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 289,
                  "end": 303,
                  "typeName": {
                    "type": "Identifier",
                    "start": 289,
                    "end": 303,
                    "name": "TestTscCompile",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 304,
                  "end": 321,
                  "literal": {
                    "type": "Literal",
                    "start": 304,
                    "end": 321,
                    "value": "commandLineArgs",
                    "raw": "\"commandLineArgs\""
                  }
                }
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
      "type": "FunctionDeclaration",
      "start": 327,
      "end": 376,
      "id": {
        "type": "Identifier",
        "start": 336,
        "end": 350,
        "name": "testTscCompile",
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
          "start": 351,
          "end": 372,
          "name": "input",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 356,
            "end": 372,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 358,
              "end": 372,
              "typeName": {
                "type": "Identifier",
                "start": 358,
                "end": 372,
                "name": "TestTscCompile",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 374,
        "end": 376,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 378,
      "end": 649,
      "id": {
        "type": "Identifier",
        "start": 387,
        "end": 413,
        "name": "verifyTscEditDiscrepancies",
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
          "start": 414,
          "end": 487,
          "properties": [
            {
              "type": "Property",
              "start": 418,
              "end": 423,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 418,
                "end": 423,
                "name": "index",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 418,
                "end": 423,
                "name": "index",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 427,
              "end": 432,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 427,
                "end": 432,
                "name": "edits",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 427,
                "end": 432,
                "name": "edits",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 436,
              "end": 451,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 436,
                "end": 451,
                "name": "commandLineArgs",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 436,
                "end": 451,
                "name": "commandLineArgs",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 454,
            "end": 487,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 456,
              "end": 487,
              "typeName": {
                "type": "Identifier",
                "start": 456,
                "end": 487,
                "name": "VerifyTscEditDiscrepanciesInput",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 489,
        "end": 649,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 493,
            "end": 526,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 499,
                "end": 525,
                "id": {
                  "type": "ObjectPattern",
                  "start": 499,
                  "end": 510,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 501,
                      "end": 508,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 501,
                        "end": 508,
                        "name": "caption",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 501,
                        "end": 508,
                        "name": "caption",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 513,
                  "end": 525,
                  "object": {
                    "type": "Identifier",
                    "start": 513,
                    "end": 518,
                    "name": "edits",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 519,
                    "end": 524,
                    "name": "index",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 529,
            "end": 647,
            "expression": {
              "type": "CallExpression",
              "start": 529,
              "end": 646,
              "callee": {
                "type": "Identifier",
                "start": 529,
                "end": 543,
                "name": "testTscCompile",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 544,
                  "end": 645,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 550,
                      "end": 570,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 550,
                        "end": 561,
                        "name": "subScenario",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 563,
                        "end": 570,
                        "name": "caption",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 576,
                      "end": 640,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 576,
                        "end": 591,
                        "name": "commandLineArgs",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "LogicalExpression",
                        "start": 593,
                        "end": 640,
                        "left": {
                          "type": "MemberExpression",
                          "start": 593,
                          "end": 621,
                          "object": {
                            "type": "MemberExpression",
                            "start": 593,
                            "end": 605,
                            "object": {
                              "type": "Identifier",
                              "start": 593,
                              "end": 598,
                              "name": "edits",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 599,
                              "end": 604,
                              "name": "index",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": true,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 606,
                            "end": 621,
                            "name": "commandLineArgs",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "operator": "||",
                        "right": {
                          "type": "Identifier",
                          "start": 625,
                          "end": 640,
                          "name": "commandLineArgs",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
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
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
