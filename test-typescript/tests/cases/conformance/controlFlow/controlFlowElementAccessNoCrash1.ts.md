controlFlowElementAccessNoCrash1.ts
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
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 33,
              "decorators": [],
              "name": "caption",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 41,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 35,
                "end": 41
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 45,
            "end": 81,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 60,
              "decorators": [],
              "name": "commandLineArgs",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
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
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "decorators": [],
        "name": "TestTscEdit",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 85,
      "end": 174,
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
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 125,
              "decorators": [],
              "name": "subScenario",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 133,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 127,
                "end": 133
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 137,
            "end": 172,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 152,
              "decorators": [],
              "name": "commandLineArgs",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 109,
        "decorators": [],
        "name": "TestTscCompile",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 176,
      "end": 325,
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
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 227,
              "decorators": [],
              "name": "index",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 235,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 229,
                "end": 235
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 239,
            "end": 269,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 239,
              "end": 244,
              "decorators": [],
              "name": "edits",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 272,
            "end": 323,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 287,
              "decorators": [],
              "name": "commandLineArgs",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 287,
              "end": 322,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 289,
                "end": 322,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 304,
                  "end": 321,
                  "literal": {
                    "type": "Literal",
                    "start": 304,
                    "end": 321,
                    "raw": "\"commandLineArgs\"",
                    "value": "commandLineArgs"
                  }
                },
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
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 217,
        "decorators": [],
        "name": "VerifyTscEditDiscrepanciesInput",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 327,
      "end": 376,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 374,
        "end": 376,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 336,
        "end": 350,
        "decorators": [],
        "name": "testTscCompile",
        "optional": false
      },
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
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 378,
      "end": 649,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 499,
                  "end": 510,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 501,
                      "end": 508,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 501,
                        "end": 508,
                        "decorators": [],
                        "name": "caption",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 501,
                        "end": 508,
                        "decorators": [],
                        "name": "caption",
                        "optional": false
                      }
                    }
                  ]
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 513,
                  "end": 525,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 513,
                    "end": 518,
                    "decorators": [],
                    "name": "edits",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 519,
                    "end": 524,
                    "decorators": [],
                    "name": "index",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 529,
            "end": 647,
            "expression": {
              "type": "CallExpression",
              "start": 529,
              "end": 646,
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
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 550,
                        "end": 561,
                        "decorators": [],
                        "name": "subScenario",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 563,
                        "end": 570,
                        "decorators": [],
                        "name": "caption",
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 576,
                      "end": 640,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 576,
                        "end": 591,
                        "decorators": [],
                        "name": "commandLineArgs",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "LogicalExpression",
                        "start": 593,
                        "end": 640,
                        "operator": "||",
                        "left": {
                          "type": "MemberExpression",
                          "start": 593,
                          "end": 621,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 593,
                            "end": 605,
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "start": 593,
                              "end": 598,
                              "decorators": [],
                              "name": "edits",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 599,
                              "end": 604,
                              "decorators": [],
                              "name": "index",
                              "optional": false
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 606,
                            "end": 621,
                            "decorators": [],
                            "name": "commandLineArgs",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 625,
                          "end": 640,
                          "decorators": [],
                          "name": "commandLineArgs",
                          "optional": false
                        }
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 529,
                "end": 543,
                "decorators": [],
                "name": "testTscCompile",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 387,
        "end": 413,
        "decorators": [],
        "name": "verifyTscEditDiscrepancies",
        "optional": false
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 414,
          "end": 487,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 418,
              "end": 423,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 418,
                "end": 423,
                "decorators": [],
                "name": "index",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 418,
                "end": 423,
                "decorators": [],
                "name": "index",
                "optional": false
              }
            },
            {
              "type": "Property",
              "start": 427,
              "end": 432,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 427,
                "end": 432,
                "decorators": [],
                "name": "edits",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 427,
                "end": 432,
                "decorators": [],
                "name": "edits",
                "optional": false
              }
            },
            {
              "type": "Property",
              "start": 436,
              "end": 451,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 436,
                "end": 451,
                "decorators": [],
                "name": "commandLineArgs",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 436,
                "end": 451,
                "decorators": [],
                "name": "commandLineArgs",
                "optional": false
              }
            }
          ],
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
                "optional": false
              }
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
