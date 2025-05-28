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
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 131,
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 132,
        "end": 168,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 136,
            "end": 150,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 141,
              "decorators": [],
              "name": "first",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 149,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 153,
            "end": 166,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 157,
              "decorators": [],
              "name": "last",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 165,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 159,
                "end": 165
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
      "type": "BlockStatement",
      "start": 170,
      "end": 311,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 174,
          "end": 223,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 180,
              "end": 222,
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
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "start": 193,
                  "end": 222,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 193,
                    "end": 203,
                    "object": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 197,
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 203,
                      "decorators": [],
                      "name": "floor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 204,
                      "end": 221,
                      "left": {
                        "type": "CallExpression",
                        "start": 204,
                        "end": 217,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 204,
                          "end": 215,
                          "object": {
                            "type": "Identifier",
                            "start": 204,
                            "end": 208,
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 209,
                            "end": 215,
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "operator": "*",
                      "right": {
                        "type": "Literal",
                        "start": 220,
                        "end": 221,
                        "value": 6,
                        "raw": "6"
                      }
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 226,
          "end": 247,
          "expression": {
            "type": "AssignmentExpression",
            "start": 226,
            "end": 246,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 226,
              "end": 236,
              "object": {
                "type": "Identifier",
                "start": 226,
                "end": 230,
                "decorators": [],
                "name": "dice",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 231,
                "end": 236,
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "right": {
              "type": "Literal",
              "start": 239,
              "end": 246,
              "value": "Rando",
              "raw": "'Rando'"
            }
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 252,
          "end": 277,
          "expression": {
            "type": "AssignmentExpression",
            "start": 252,
            "end": 276,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 252,
              "end": 261,
              "object": {
                "type": "Identifier",
                "start": 252,
                "end": 256,
                "decorators": [],
                "name": "dice",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 257,
                "end": 261,
                "decorators": [],
                "name": "last",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "right": {
              "type": "Literal",
              "start": 264,
              "end": 276,
              "value": "Calrissian",
              "raw": "'Calrissian'"
            }
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 280,
          "end": 307,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 286,
              "end": 306,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 299,
                      "decorators": [],
                      "name": "Person",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
              },
              "definite": false
            }
          ],
          "declare": false
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
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 331,
        "decorators": [],
        "name": "doHumanThings",
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
          "start": 332,
          "end": 337,
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 339,
        "end": 341,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 343,
      "end": 393,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 349,
          "end": 392,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 363,
              "end": 392,
              "callee": {
                "type": "MemberExpression",
                "start": 363,
                "end": 373,
                "object": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 367,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 368,
                  "end": 373,
                  "decorators": [],
                  "name": "floor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 374,
                  "end": 391,
                  "left": {
                    "type": "CallExpression",
                    "start": 374,
                    "end": 387,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 374,
                      "end": 385,
                      "object": {
                        "type": "Identifier",
                        "start": 374,
                        "end": 378,
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 379,
                        "end": 385,
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "start": 390,
                    "end": 391,
                    "value": 6,
                    "raw": "6"
                  }
                }
              ],
              "optional": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 420,
      "end": 446,
      "expression": {
        "type": "AssignmentExpression",
        "start": 420,
        "end": 445,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 420,
          "end": 430,
          "object": {
            "type": "Identifier",
            "start": 420,
            "end": 425,
            "decorators": [],
            "name": "dice1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 426,
            "end": 430,
            "decorators": [],
            "name": "last",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 433,
          "end": 445,
          "value": "Calrissian",
          "raw": "'Calrissian'"
        }
      },
      "directive": null
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
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 531,
              "end": 574,
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
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "start": 545,
                  "end": 574,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 545,
                    "end": 555,
                    "object": {
                      "type": "Identifier",
                      "start": 545,
                      "end": 549,
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 550,
                      "end": 555,
                      "decorators": [],
                      "name": "floor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 556,
                      "end": 573,
                      "left": {
                        "type": "CallExpression",
                        "start": 556,
                        "end": 569,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 556,
                          "end": 567,
                          "object": {
                            "type": "Identifier",
                            "start": 556,
                            "end": 560,
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 561,
                            "end": 567,
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "operator": "*",
                      "right": {
                        "type": "Literal",
                        "start": 572,
                        "end": 573,
                        "value": 6,
                        "raw": "6"
                      }
                    }
                  ],
                  "optional": false
                },
                "id": null,
                "generator": false
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 578,
          "end": 600,
          "expression": {
            "type": "AssignmentExpression",
            "start": 578,
            "end": 599,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 578,
              "end": 589,
              "object": {
                "type": "Identifier",
                "start": 578,
                "end": 583,
                "decorators": [],
                "name": "dice2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 584,
                "end": 589,
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "right": {
              "type": "Literal",
              "start": 592,
              "end": 599,
              "value": "Rando",
              "raw": "'Rando'"
            }
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 603,
          "end": 629,
          "expression": {
            "type": "AssignmentExpression",
            "start": 603,
            "end": 628,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 603,
              "end": 613,
              "object": {
                "type": "Identifier",
                "start": 603,
                "end": 608,
                "decorators": [],
                "name": "dice2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 609,
                "end": 613,
                "decorators": [],
                "name": "last",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "right": {
              "type": "Literal",
              "start": 616,
              "end": 628,
              "value": "Calrissian",
              "raw": "'Calrissian'"
            }
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 636,
          "end": 656,
          "expression": {
            "type": "CallExpression",
            "start": 636,
            "end": 656,
            "callee": {
              "type": "Identifier",
              "start": 636,
              "end": 649,
              "decorators": [],
              "name": "doHumanThings",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
            "optional": false
          },
          "directive": null
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
