__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
              "typeParameters": null,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 60,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 85,
        "decorators": [],
        "name": "identity",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 85,
        "end": 88,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 86,
            "end": 87,
            "name": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 113,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 112,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 167,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 166,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 148,
            "decorators": [],
            "name": "dottedIdentity",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 164,
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
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
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 172,
          "end": 197,
          "callee": {
            "type": "Identifier",
            "start": 172,
            "end": 175,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 176,
              "end": 178,
              "value": "",
              "raw": "\"\""
            },
            {
              "type": "MemberExpression",
              "start": 180,
              "end": 196,
              "object": {
                "type": "Identifier",
                "start": 180,
                "end": 194,
                "decorators": [],
                "name": "dottedIdentity",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 195,
                "end": 196,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          ],
          "optional": false
        }
      },
      "directive": null
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
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 224,
          "end": 252,
          "callee": {
            "type": "Identifier",
            "start": 224,
            "end": 227,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 228,
              "end": 230,
              "value": "",
              "raw": "\"\""
            },
            {
              "type": "MemberExpression",
              "start": 232,
              "end": 251,
              "object": {
                "type": "Identifier",
                "start": 232,
                "end": 246,
                "decorators": [],
                "name": "dottedIdentity",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 247,
                "end": 250,
                "value": "x",
                "raw": "'x'"
              },
              "optional": false,
              "computed": true
            }
          ],
          "optional": false
        }
      },
      "directive": null
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
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 276,
          "end": 303,
          "callee": {
            "type": "Identifier",
            "start": 276,
            "end": 279,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 280,
              "end": 282,
              "value": "",
              "raw": "\"\""
            },
            {
              "type": "CallExpression",
              "start": 284,
              "end": 302,
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 285,
                "end": 299,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 299,
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 319,
      "end": 381,
      "id": {
        "type": "Identifier",
        "start": 329,
        "end": 348,
        "decorators": [],
        "name": "IdentityConstructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 349,
        "end": 381,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 355,
            "end": 379,
            "typeParameters": null,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 382,
      "end": 410,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 386,
          "end": 409,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
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
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 415,
          "end": 432,
          "callee": {
            "type": "Identifier",
            "start": 415,
            "end": 418,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 419,
              "end": 421,
              "value": "",
              "raw": "\"\""
            },
            {
              "type": "NewExpression",
              "start": 423,
              "end": 431,
              "callee": {
                "type": "Identifier",
                "start": 427,
                "end": 429,
                "decorators": [],
                "name": "ic",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 449,
      "end": 455,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 453,
          "end": 454,
          "id": {
            "type": "Identifier",
            "start": 453,
            "end": 454,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
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
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 460,
          "end": 481,
          "callee": {
            "type": "Identifier",
            "start": 460,
            "end": 463,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 464,
              "end": 466,
              "value": "",
              "raw": "\"\""
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
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 472,
                "end": 480,
                "decorators": [],
                "name": "identity",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "optional": false
        }
      },
      "directive": null
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
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 506,
          "end": 540,
          "callee": {
            "type": "Identifier",
            "start": 506,
            "end": 509,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 510,
              "end": 512,
              "value": "",
              "raw": "\"\""
            },
            {
              "type": "TSTypeAssertion",
              "start": 514,
              "end": 539,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "Identifier",
                "start": 531,
                "end": 539,
                "decorators": [],
                "name": "identity",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "optional": false
        }
      },
      "directive": null
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
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 575,
          "end": 594,
          "callee": {
            "type": "Identifier",
            "start": 575,
            "end": 578,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 579,
              "end": 581,
              "value": "",
              "raw": "\"\""
            },
            {
              "type": "Identifier",
              "start": 584,
              "end": 592,
              "decorators": [],
              "name": "identity",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false
        }
      },
      "directive": null
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
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 610,
          "end": 633,
          "callee": {
            "type": "Identifier",
            "start": 610,
            "end": 613,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 614,
              "end": 616,
              "value": "",
              "raw": "\"\""
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
                  "value": "",
                  "raw": "\"\""
                },
                {
                  "type": "Identifier",
                  "start": 623,
                  "end": 631,
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            }
          ],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
