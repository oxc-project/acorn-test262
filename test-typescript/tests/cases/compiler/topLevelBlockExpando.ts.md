__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 115,
  "end": 312,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 115,
      "end": 168,
      "body": {
        "type": "TSInterfaceBody",
        "start": 132,
        "end": 168,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 136,
            "end": 150,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 141,
              "decorators": [],
              "name": "first",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 149,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 153,
            "end": 166,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 157,
              "decorators": [],
              "name": "last",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 165,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 159,
                "end": 165
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 131,
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "BlockStatement",
      "start": 170,
      "end": 311,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 174,
          "end": 223,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 180,
              "end": 222,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 180,
                "end": 184,
                "decorators": [],
                "name": "dice",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "ArrowFunctionExpression",
                "start": 187,
                "end": 222,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 193,
                  "end": 222,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 204,
                      "end": 221,
                      "operator": "*",
                      "left": {
                        "type": "CallExpression",
                        "start": 204,
                        "end": 217,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 204,
                          "end": 215,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 204,
                            "end": 208,
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 209,
                            "end": 215,
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 220,
                        "end": 221,
                        "raw": "6",
                        "value": 6,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 193,
                    "end": 203,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 197,
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 203,
                      "decorators": [],
                      "name": "floor",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "ExpressionStatement",
          "start": 226,
          "end": 247,
          "directive": null,
          "expression": {
            "type": "AssignmentExpression",
            "start": 226,
            "end": 246,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 226,
              "end": 236,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 226,
                "end": 230,
                "decorators": [],
                "name": "dice",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 231,
                "end": 236,
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Literal",
              "start": 239,
              "end": 246,
              "raw": "'Rando'",
              "value": "Rando",
              "regex": null,
              "bigint": null
            }
          }
        },
        {
          "type": "ExpressionStatement",
          "start": 252,
          "end": 277,
          "directive": null,
          "expression": {
            "type": "AssignmentExpression",
            "start": 252,
            "end": 276,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 252,
              "end": 261,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 252,
                "end": 256,
                "decorators": [],
                "name": "dice",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 257,
                "end": 261,
                "decorators": [],
                "name": "last",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Literal",
              "start": 264,
              "end": 276,
              "raw": "'Calrissian'",
              "value": "Calrissian",
              "regex": null,
              "bigint": null
            }
          }
        },
        {
          "type": "VariableDeclaration",
          "start": 280,
          "end": 307,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 286,
              "end": 306,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 286,
                "end": 299,
                "decorators": [],
                "name": "diceP",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 291,
                  "end": 299,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 293,
                    "end": 299,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 299,
                      "decorators": [],
                      "name": "Person",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "start": 302,
                "end": 306,
                "decorators": [],
                "name": "dice",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "declare": false,
          "kind": "const"
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 309,
  "end": 658,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 309,
      "end": 341,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 339,
        "end": 341,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 331,
        "decorators": [],
        "name": "doHumanThings",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 332,
          "end": 337,
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 343,
      "end": 393,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 349,
          "end": 392,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 349,
            "end": 354,
            "decorators": [],
            "name": "dice1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 357,
            "end": 392,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 363,
              "end": 392,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 374,
                  "end": 391,
                  "operator": "*",
                  "left": {
                    "type": "CallExpression",
                    "start": 374,
                    "end": 387,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 374,
                      "end": 385,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 374,
                        "end": 378,
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 379,
                        "end": 385,
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 390,
                    "end": 391,
                    "raw": "6",
                    "value": 6,
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 363,
                "end": 373,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 367,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 368,
                  "end": 373,
                  "decorators": [],
                  "name": "floor",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 420,
      "end": 446,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 420,
        "end": 445,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 420,
          "end": 430,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 420,
            "end": 425,
            "decorators": [],
            "name": "dice1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 426,
            "end": 430,
            "decorators": [],
            "name": "last",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 433,
          "end": 445,
          "raw": "'Calrissian'",
          "value": "Calrissian",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "BlockStatement",
      "start": 521,
      "end": 658,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 525,
          "end": 575,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 531,
              "end": 574,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 531,
                "end": 536,
                "decorators": [],
                "name": "dice2",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "ArrowFunctionExpression",
                "start": 539,
                "end": 574,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 545,
                  "end": 574,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 556,
                      "end": 573,
                      "operator": "*",
                      "left": {
                        "type": "CallExpression",
                        "start": 556,
                        "end": 569,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 556,
                          "end": 567,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 556,
                            "end": 560,
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 561,
                            "end": 567,
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 572,
                        "end": 573,
                        "raw": "6",
                        "value": 6,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 545,
                    "end": 555,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 545,
                      "end": 549,
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 550,
                      "end": 555,
                      "decorators": [],
                      "name": "floor",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "ExpressionStatement",
          "start": 578,
          "end": 600,
          "directive": null,
          "expression": {
            "type": "AssignmentExpression",
            "start": 578,
            "end": 599,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 578,
              "end": 589,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 578,
                "end": 583,
                "decorators": [],
                "name": "dice2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 584,
                "end": 589,
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Literal",
              "start": 592,
              "end": 599,
              "raw": "'Rando'",
              "value": "Rando",
              "regex": null,
              "bigint": null
            }
          }
        },
        {
          "type": "ExpressionStatement",
          "start": 603,
          "end": 629,
          "directive": null,
          "expression": {
            "type": "AssignmentExpression",
            "start": 603,
            "end": 628,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 603,
              "end": 613,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 603,
                "end": 608,
                "decorators": [],
                "name": "dice2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 609,
                "end": 613,
                "decorators": [],
                "name": "last",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Literal",
              "start": 616,
              "end": 628,
              "raw": "'Calrissian'",
              "value": "Calrissian",
              "regex": null,
              "bigint": null
            }
          }
        },
        {
          "type": "ExpressionStatement",
          "start": 636,
          "end": 656,
          "directive": null,
          "expression": {
            "type": "CallExpression",
            "start": 636,
            "end": 656,
            "arguments": [
              {
                "type": "Identifier",
                "start": 650,
                "end": 655,
                "decorators": [],
                "name": "dice2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 636,
              "end": 649,
              "decorators": [],
              "name": "doHumanThings",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
