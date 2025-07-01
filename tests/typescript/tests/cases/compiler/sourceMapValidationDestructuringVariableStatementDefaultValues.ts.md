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
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              },
              "start": 26,
              "end": 34
            },
            "accessibility": null,
            "static": false,
            "start": 22,
            "end": 35
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 45
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "accessibility": null,
            "static": false,
            "start": 40,
            "end": 54
          }
        ],
        "start": 16,
        "end": 56
      },
      "declare": false,
      "start": 0,
      "end": 56
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 87
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 93,
                            "end": 99
                          },
                          "start": 91,
                          "end": 99
                        },
                        "start": 88,
                        "end": 99
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 102,
                        "end": 106
                      },
                      "start": 100,
                      "end": 106
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 84,
                    "end": 107
                  }
                ],
                "start": 78,
                "end": 109
              },
              "start": 76,
              "end": 109
            },
            "start": 69,
            "end": 109
          },
          "init": null,
          "definite": false,
          "start": 69,
          "end": 109
        }
      ],
      "declare": true,
      "start": 57,
      "end": 109
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
            "name": "hello",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 119
          },
          "init": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 122,
            "end": 129
          },
          "definite": false,
          "start": 114,
          "end": 129
        }
      ],
      "declare": false,
      "start": 110,
      "end": 130
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
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 148
                },
                "typeArguments": null,
                "start": 143,
                "end": 148
              },
              "start": 141,
              "end": 148
            },
            "start": 135,
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 153,
                  "end": 157
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 159,
                  "end": 166
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 153,
                "end": 166
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 168,
                  "end": 173
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 175,
                  "end": 183
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 168,
                "end": 183
              }
            ],
            "start": 151,
            "end": 185
          },
          "definite": false,
          "start": 135,
          "end": 185
        }
      ],
      "declare": false,
      "start": 131,
      "end": 186
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
            "name": "robotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 204
                },
                "typeArguments": null,
                "start": 199,
                "end": 204
              },
              "start": 197,
              "end": 204
            },
            "start": 191,
            "end": 204
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 213
                },
                "value": {
                  "type": "Literal",
                  "value": "trimmer",
                  "raw": "\"trimmer\"",
                  "start": 215,
                  "end": 224
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 209,
                "end": 224
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 231
                },
                "value": {
                  "type": "Literal",
                  "value": "trimming",
                  "raw": "\"trimming\"",
                  "start": 233,
                  "end": 243
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 226,
                "end": 243
              }
            ],
            "start": 207,
            "end": 245
          },
          "definite": false,
          "start": 191,
          "end": 245
        }
      ],
      "declare": false,
      "start": 187,
      "end": 246
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 257
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 259,
                    "end": 264
                  },
                  "right": {
                    "type": "Literal",
                    "value": "<NoName>",
                    "raw": "\"<NoName>\"",
                    "start": 267,
                    "end": 277
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 259,
                  "end": 277
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 253,
                "end": 277
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 279
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 288
          },
          "definite": false,
          "start": 251,
          "end": 288
        }
      ],
      "declare": false,
      "start": 247,
      "end": 289
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 296,
                  "end": 300
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 302,
                    "end": 307
                  },
                  "right": {
                    "type": "Literal",
                    "value": "<NoName>",
                    "raw": "\"<NoName>\"",
                    "start": 310,
                    "end": 320
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 302,
                  "end": 320
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 296,
                "end": 320
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 322,
                  "end": 327
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 329,
                    "end": 335
                  },
                  "right": {
                    "type": "Literal",
                    "value": "<skillUnspecified>",
                    "raw": "\"<skillUnspecified>\"",
                    "start": 338,
                    "end": 358
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 329,
                  "end": 358
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 322,
                "end": 358
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 360
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 363,
            "end": 369
          },
          "definite": false,
          "start": 294,
          "end": 369
        }
      ],
      "declare": false,
      "start": 290,
      "end": 370
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 377,
                  "end": 381
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 383,
                    "end": 388
                  },
                  "right": {
                    "type": "Literal",
                    "value": "<NoName>",
                    "raw": "\"<NoName>\"",
                    "start": 391,
                    "end": 401
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 383,
                  "end": 401
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 377,
                "end": 401
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 403,
                  "end": 408
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 410,
                    "end": 416
                  },
                  "right": {
                    "type": "Literal",
                    "value": "<skillUnspecified>",
                    "raw": "\"<skillUnspecified>\"",
                    "start": 419,
                    "end": 439
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 410,
                  "end": 439
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 403,
                "end": 439
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 375,
            "end": 441
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 446,
                  "end": 450
                },
                "value": {
                  "type": "Literal",
                  "value": "Edger",
                  "raw": "\"Edger\"",
                  "start": 452,
                  "end": 459
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 446,
                "end": 459
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 461,
                  "end": 466
                },
                "value": {
                  "type": "Literal",
                  "value": "cutting edges",
                  "raw": "\"cutting edges\"",
                  "start": 468,
                  "end": 483
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 461,
                "end": 483
              }
            ],
            "start": 444,
            "end": 485
          },
          "definite": false,
          "start": 375,
          "end": 485
        }
      ],
      "declare": false,
      "start": 371,
      "end": 486
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameA",
          "optional": false,
          "typeAnnotation": null,
          "start": 491,
          "end": 496
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameB",
          "optional": false,
          "typeAnnotation": null,
          "start": 500,
          "end": 505
        },
        "start": 491,
        "end": 505
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 513,
                  "end": 520
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 521,
                  "end": 524
                },
                "optional": false,
                "computed": false,
                "start": 513,
                "end": 524
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 525,
                  "end": 531
                }
              ],
              "optional": false,
              "start": 513,
              "end": 532
            },
            "directive": null,
            "start": 513,
            "end": 533
          }
        ],
        "start": 507,
        "end": 535
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 547,
                  "end": 554
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 555,
                  "end": 558
                },
                "optional": false,
                "computed": false,
                "start": 547,
                "end": 558
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 559,
                  "end": 564
                }
              ],
              "optional": false,
              "start": 547,
              "end": 565
            },
            "directive": null,
            "start": 547,
            "end": 566
          }
        ],
        "start": 541,
        "end": 568
      },
      "start": 487,
      "end": 568
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 568
}
```
