__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 22
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 24,
            "end": 25
          }
        ],
        "start": 20,
        "end": 26
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 35
              },
              "typeArguments": null,
              "start": 34,
              "end": 35
            },
            "start": 32,
            "end": 35
          },
          "start": 27,
          "end": 35
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 47,
                        "end": 48
                      },
                      "typeArguments": null,
                      "start": 47,
                      "end": 48
                    },
                    "start": 45,
                    "end": 48
                  },
                  "start": 44,
                  "end": 48
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 53,
                    "end": 54
                  },
                  "typeArguments": null,
                  "start": 53,
                  "end": 54
                },
                "start": 50,
                "end": 54
              },
              "start": 43,
              "end": 54
            },
            "start": 41,
            "end": 54
          },
          "start": 37,
          "end": 54
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 58
          },
          "typeArguments": null,
          "start": 57,
          "end": 58
        },
        "start": 55,
        "end": 58
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 59
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "identity",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 85
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 87
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 86,
            "end": 87
          }
        ],
        "start": 85,
        "end": 88
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 93
              },
              "typeArguments": null,
              "start": 92,
              "end": 93
            },
            "start": 90,
            "end": 93
          },
          "start": 89,
          "end": 93
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 97
          },
          "typeArguments": null,
          "start": 96,
          "end": 97
        },
        "start": 94,
        "end": 97
      },
      "body": null,
      "expression": false,
      "start": 60,
      "end": 98
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 106,
                "end": 112
              },
              "start": 104,
              "end": 112
            },
            "start": 103,
            "end": 112
          },
          "init": null,
          "definite": false,
          "start": 103,
          "end": 112
        }
      ],
      "declare": false,
      "start": 99,
      "end": 113
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
            "name": "dottedIdentity",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 148
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 153,
                  "end": 154
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 164
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 153,
                "end": 164
              }
            ],
            "start": 151,
            "end": 166
          },
          "definite": false,
          "start": 134,
          "end": 166
        }
      ],
      "declare": false,
      "start": 130,
      "end": 167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 169
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 175
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 176,
              "end": 178
            },
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "dottedIdentity",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 194
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 196
              },
              "optional": false,
              "computed": false,
              "start": 180,
              "end": 196
            }
          ],
          "optional": false,
          "start": 172,
          "end": 197
        },
        "start": 168,
        "end": 197
      },
      "directive": null,
      "start": 168,
      "end": 198
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 220,
          "end": 221
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 227
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 228,
              "end": 230
            },
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "dottedIdentity",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 246
              },
              "property": {
                "type": "Literal",
                "value": "x",
                "raw": "'x'",
                "start": 247,
                "end": 250
              },
              "optional": false,
              "computed": true,
              "start": 232,
              "end": 251
            }
          ],
          "optional": false,
          "start": 224,
          "end": 252
        },
        "start": 220,
        "end": 252
      },
      "directive": null,
      "start": 220,
      "end": 253
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 272,
          "end": 273
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 279
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 280,
              "end": 282
            },
            {
              "type": "CallExpression",
              "callee": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 291,
                  "end": 299
                },
                "id": null,
                "generator": false,
                "start": 285,
                "end": 299
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 284,
              "end": 302
            }
          ],
          "optional": false,
          "start": 276,
          "end": 303
        },
        "start": 272,
        "end": 303
      },
      "directive": null,
      "start": 272,
      "end": 304
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IdentityConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 329,
        "end": 348
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 378
                },
                "typeArguments": null,
                "start": 363,
                "end": 378
              },
              "start": 361,
              "end": 378
            },
            "start": 355,
            "end": 379
          }
        ],
        "start": 349,
        "end": 381
      },
      "declare": false,
      "start": 319,
      "end": 381
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
            "name": "ic",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IdentityConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 390,
                  "end": 409
                },
                "typeArguments": null,
                "start": 390,
                "end": 409
              },
              "start": 388,
              "end": 409
            },
            "start": 386,
            "end": 409
          },
          "init": null,
          "definite": false,
          "start": 386,
          "end": 409
        }
      ],
      "declare": false,
      "start": 382,
      "end": 410
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 411,
          "end": 412
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 415,
            "end": 418
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 419,
              "end": 421
            },
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ic",
                "optional": false,
                "typeAnnotation": null,
                "start": 427,
                "end": 429
              },
              "typeArguments": null,
              "arguments": [],
              "start": 423,
              "end": 431
            }
          ],
          "optional": false,
          "start": 415,
          "end": 432
        },
        "start": 411,
        "end": 432
      },
      "directive": null,
      "start": 411,
      "end": 433
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
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 453,
            "end": 454
          },
          "init": null,
          "definite": false,
          "start": 453,
          "end": 454
        }
      ],
      "declare": false,
      "start": 449,
      "end": 455
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 456,
          "end": 457
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 460,
            "end": 463
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 464,
              "end": 466
            },
            {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 469
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "identity",
                "optional": false,
                "typeAnnotation": null,
                "start": 472,
                "end": 480
              },
              "start": 468,
              "end": 480
            }
          ],
          "optional": false,
          "start": 460,
          "end": 481
        },
        "start": 456,
        "end": 481
      },
      "directive": null,
      "start": 456,
      "end": 482
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 502,
          "end": 503
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 506,
            "end": 509
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 510,
              "end": 512
            },
            {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 530
                },
                "typeArguments": null,
                "start": 515,
                "end": 530
              },
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "identity",
                "optional": false,
                "typeAnnotation": null,
                "start": 531,
                "end": 539
              },
              "start": 514,
              "end": 539
            }
          ],
          "optional": false,
          "start": 506,
          "end": 540
        },
        "start": 502,
        "end": 540
      },
      "directive": null,
      "start": 502,
      "end": 541
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 571,
          "end": 572
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 575,
            "end": 578
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 579,
              "end": 581
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "identity",
              "optional": false,
              "typeAnnotation": null,
              "start": 584,
              "end": 592
            }
          ],
          "optional": false,
          "start": 575,
          "end": 594
        },
        "start": 571,
        "end": 594
      },
      "directive": null,
      "start": 571,
      "end": 595
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 606,
          "end": 607
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 610,
            "end": 613
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 614,
              "end": 616
            },
            {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 619,
                  "end": 621
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 623,
                  "end": 631
                }
              ],
              "start": 619,
              "end": 631
            }
          ],
          "optional": false,
          "start": 610,
          "end": 633
        },
        "start": 606,
        "end": 633
      },
      "directive": null,
      "start": 606,
      "end": 634
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 634
}
```
