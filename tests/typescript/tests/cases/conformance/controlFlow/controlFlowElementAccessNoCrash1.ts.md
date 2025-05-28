__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 649,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "decorators": [],
        "name": "TestTscEdit",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "caption",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "commandLineArgs",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "TestTscCompile",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "subScenario",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "commandLineArgs",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "VerifyTscEditDiscrepanciesInput",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "index",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "edits",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "TestTscEdit",
                      "optional": false,
                      "typeAnnotation": null
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
              "decorators": [],
              "name": "commandLineArgs",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TestTscCompile",
                    "optional": false,
                    "typeAnnotation": null
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
        "decorators": [],
        "name": "testTscCompile",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 351,
          "end": 372,
          "decorators": [],
          "name": "input",
          "optional": false,
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
                "decorators": [],
                "name": "TestTscCompile",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 374,
        "end": 376,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 378,
      "end": 649,
      "id": {
        "type": "Identifier",
        "start": 387,
        "end": 413,
        "decorators": [],
        "name": "verifyTscEditDiscrepancies",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 414,
          "end": 487,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 418,
              "end": 423,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 418,
                "end": 423,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 418,
                "end": 423,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 427,
              "end": 432,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 427,
                "end": 432,
                "decorators": [],
                "name": "edits",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 427,
                "end": 432,
                "decorators": [],
                "name": "edits",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 436,
              "end": 451,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 436,
                "end": 451,
                "decorators": [],
                "name": "commandLineArgs",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 436,
                "end": 451,
                "decorators": [],
                "name": "commandLineArgs",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
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
                "decorators": [],
                "name": "VerifyTscEditDiscrepanciesInput",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 489,
        "end": 649,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 493,
            "end": 526,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 499,
                "end": 525,
                "id": {
                  "type": "ObjectPattern",
                  "start": 499,
                  "end": 510,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 501,
                      "end": 508,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 501,
                        "end": 508,
                        "decorators": [],
                        "name": "caption",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 501,
                        "end": 508,
                        "decorators": [],
                        "name": "caption",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
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
                    "decorators": [],
                    "name": "edits",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 519,
                    "end": 524,
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
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
                "decorators": [],
                "name": "testTscCompile",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 550,
                        "end": 561,
                        "decorators": [],
                        "name": "subScenario",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 563,
                        "end": 570,
                        "decorators": [],
                        "name": "caption",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 576,
                      "end": 640,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 576,
                        "end": 591,
                        "decorators": [],
                        "name": "commandLineArgs",
                        "optional": false,
                        "typeAnnotation": null
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
                              "decorators": [],
                              "name": "edits",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 599,
                              "end": 604,
                              "decorators": [],
                              "name": "index",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": true
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 606,
                            "end": 621,
                            "decorators": [],
                            "name": "commandLineArgs",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "operator": "||",
                        "right": {
                          "type": "Identifier",
                          "start": 625,
                          "end": 640,
                          "decorators": [],
                          "name": "commandLineArgs",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
