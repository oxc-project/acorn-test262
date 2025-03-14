inferentialTypingWithFunctionTypeSyntacticScenarios.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 634,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 59,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "map",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 35,
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 32,
            "end": 35,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 34,
              "end": 35,
              "typeName": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 37,
          "end": 54,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 41,
            "end": 54,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 43,
              "end": 54,
              "params": [
                {
                  "type": "Identifier",
                  "start": 44,
                  "end": 48,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 45,
                    "end": 48,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 47,
                      "end": 48,
                      "typeName": {
                        "type": "Identifier",
                        "start": 47,
                        "end": 48,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 50,
                "end": 54,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 53,
                  "end": 54,
                  "typeName": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 55,
        "end": 58,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 57,
          "end": 58,
          "typeName": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "U",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 60,
      "end": 98,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 85,
        "decorators": [],
        "name": "identity",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 89,
          "end": 93,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 90,
            "end": 93,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 92,
              "end": 93,
              "typeName": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "decorators": [],
                "name": "V",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 94,
        "end": 97,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 96,
          "end": 97,
          "typeName": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "decorators": [],
            "name": "V",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 85,
        "end": 88,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 86,
            "end": 87,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 112,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 112,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 112,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 106,
                "end": 112
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 166,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 148,
            "decorators": [],
            "name": "dottedIdentity",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 151,
            "end": 166,
            "properties": [
              {
                "type": "Property",
                "start": 153,
                "end": 164,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 164,
                  "decorators": [],
                  "name": "identity",
                  "optional": false
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
      "type": "ExpressionStatement",
      "start": 168,
      "end": 198,
      "expression": {
        "type": "AssignmentExpression",
        "start": 168,
        "end": 197,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 168,
          "end": 169,
          "decorators": [],
          "name": "s",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 172,
          "end": 197,
          "arguments": [
            {
              "type": "Literal",
              "start": 176,
              "end": 178,
              "raw": "\"\"",
              "value": ""
            },
            {
              "type": "MemberExpression",
              "start": 180,
              "end": 196,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 180,
                "end": 194,
                "decorators": [],
                "name": "dottedIdentity",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 195,
                "end": 196,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 172,
            "end": 175,
            "decorators": [],
            "name": "map",
            "optional": false
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 220,
      "end": 253,
      "expression": {
        "type": "AssignmentExpression",
        "start": 220,
        "end": 252,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 220,
          "end": 221,
          "decorators": [],
          "name": "s",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 224,
          "end": 252,
          "arguments": [
            {
              "type": "Literal",
              "start": 228,
              "end": 230,
              "raw": "\"\"",
              "value": ""
            },
            {
              "type": "MemberExpression",
              "start": 232,
              "end": 251,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 232,
                "end": 246,
                "decorators": [],
                "name": "dottedIdentity",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 247,
                "end": 250,
                "raw": "'x'",
                "value": "x"
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 224,
            "end": 227,
            "decorators": [],
            "name": "map",
            "optional": false
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 272,
      "end": 304,
      "expression": {
        "type": "AssignmentExpression",
        "start": 272,
        "end": 303,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 272,
          "end": 273,
          "decorators": [],
          "name": "s",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 276,
          "end": 303,
          "arguments": [
            {
              "type": "Literal",
              "start": 280,
              "end": 282,
              "raw": "\"\"",
              "value": ""
            },
            {
              "type": "CallExpression",
              "start": 284,
              "end": 302,
              "arguments": [],
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 285,
                "end": 299,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 299,
                  "decorators": [],
                  "name": "identity",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              },
              "optional": false
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 276,
            "end": 279,
            "decorators": [],
            "name": "map",
            "optional": false
          },
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 319,
      "end": 381,
      "body": {
        "type": "TSInterfaceBody",
        "start": 349,
        "end": 381,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 355,
            "end": 379,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 361,
              "end": 378,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 363,
                "end": 378,
                "exprName": {
                  "type": "Identifier",
                  "start": 370,
                  "end": 378,
                  "decorators": [],
                  "name": "identity",
                  "optional": false
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
        "start": 329,
        "end": 348,
        "decorators": [],
        "name": "IdentityConstructor",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 382,
      "end": 410,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 386,
          "end": 409,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 386,
            "end": 409,
            "decorators": [],
            "name": "ic",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 388,
              "end": 409,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 390,
                "end": 409,
                "typeName": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 409,
                  "decorators": [],
                  "name": "IdentityConstructor",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 411,
      "end": 433,
      "expression": {
        "type": "AssignmentExpression",
        "start": 411,
        "end": 432,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 411,
          "end": 412,
          "decorators": [],
          "name": "s",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 415,
          "end": 432,
          "arguments": [
            {
              "type": "Literal",
              "start": 419,
              "end": 421,
              "raw": "\"\"",
              "value": ""
            },
            {
              "type": "NewExpression",
              "start": 423,
              "end": 431,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 427,
                "end": 429,
                "decorators": [],
                "name": "ic",
                "optional": false
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 415,
            "end": 418,
            "decorators": [],
            "name": "map",
            "optional": false
          },
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 449,
      "end": 455,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 453,
          "end": 454,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 453,
            "end": 454,
            "decorators": [],
            "name": "t",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 456,
      "end": 482,
      "expression": {
        "type": "AssignmentExpression",
        "start": 456,
        "end": 481,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 456,
          "end": 457,
          "decorators": [],
          "name": "s",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 460,
          "end": 481,
          "arguments": [
            {
              "type": "Literal",
              "start": 464,
              "end": 466,
              "raw": "\"\"",
              "value": ""
            },
            {
              "type": "AssignmentExpression",
              "start": 468,
              "end": 480,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 468,
                "end": 469,
                "decorators": [],
                "name": "t",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 472,
                "end": 480,
                "decorators": [],
                "name": "identity",
                "optional": false
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 460,
            "end": 463,
            "decorators": [],
            "name": "map",
            "optional": false
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 502,
      "end": 541,
      "expression": {
        "type": "AssignmentExpression",
        "start": 502,
        "end": 540,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 502,
          "end": 503,
          "decorators": [],
          "name": "s",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 506,
          "end": 540,
          "arguments": [
            {
              "type": "Literal",
              "start": 510,
              "end": 512,
              "raw": "\"\"",
              "value": ""
            },
            {
              "type": "TSTypeAssertion",
              "start": 514,
              "end": 539,
              "expression": {
                "type": "Identifier",
                "start": 531,
                "end": 539,
                "decorators": [],
                "name": "identity",
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 515,
                "end": 530,
                "exprName": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 530,
                  "decorators": [],
                  "name": "identity",
                  "optional": false
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 506,
            "end": 509,
            "decorators": [],
            "name": "map",
            "optional": false
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 571,
      "end": 595,
      "expression": {
        "type": "AssignmentExpression",
        "start": 571,
        "end": 594,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 571,
          "end": 572,
          "decorators": [],
          "name": "s",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 575,
          "end": 594,
          "arguments": [
            {
              "type": "Literal",
              "start": 579,
              "end": 581,
              "raw": "\"\"",
              "value": ""
            },
            {
              "type": "Identifier",
              "start": 584,
              "end": 592,
              "decorators": [],
              "name": "identity",
              "optional": false
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 575,
            "end": 578,
            "decorators": [],
            "name": "map",
            "optional": false
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 606,
      "end": 634,
      "expression": {
        "type": "AssignmentExpression",
        "start": 606,
        "end": 633,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 606,
          "end": 607,
          "decorators": [],
          "name": "s",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 610,
          "end": 633,
          "arguments": [
            {
              "type": "Literal",
              "start": 614,
              "end": 616,
              "raw": "\"\"",
              "value": ""
            },
            {
              "type": "SequenceExpression",
              "start": 619,
              "end": 631,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 619,
                  "end": 621,
                  "raw": "\"\"",
                  "value": ""
                },
                {
                  "type": "Identifier",
                  "start": 623,
                  "end": 631,
                  "decorators": [],
                  "name": "identity",
                  "optional": false
                }
              ]
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 610,
            "end": 613,
            "decorators": [],
            "name": "map",
            "optional": false
          },
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
