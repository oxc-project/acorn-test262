__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 7,
                    "end": 13
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 16,
                    "end": 22
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 25,
                    "end": 32
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 35,
                      "end": 41
                    },
                    "typeArguments": null,
                    "start": 35,
                    "end": 41
                  }
                ],
                "start": 7,
                "end": 41
              },
              "start": 5,
              "end": 41
            },
            "start": 4,
            "end": 41
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 41
        }
      ],
      "declare": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 44,
          "end": 45
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 48,
          "end": 50
        },
        "start": 44,
        "end": 50
      },
      "directive": null,
      "start": 44,
      "end": 51
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 53
      },
      "directive": null,
      "start": 52,
      "end": 54
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 68
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 66,
          "end": 69
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 73,
              "end": 77
            }
          ],
          "start": 72,
          "end": 78
        },
        "start": 66,
        "end": 78
      },
      "directive": null,
      "start": 66,
      "end": 79
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 81
      },
      "directive": null,
      "start": 80,
      "end": 82
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 97
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 100,
                "end": 102
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 102
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 95,
          "end": 103
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 107,
              "end": 108
            }
          ],
          "start": 106,
          "end": 109
        },
        "start": 95,
        "end": 109
      },
      "directive": null,
      "start": 95,
      "end": 110
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 112
      },
      "directive": null,
      "start": 111,
      "end": 113
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
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
                "start": 136,
                "end": 137
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 137
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 136,
              "end": 137
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 135,
          "end": 138
        },
        "right": {
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
                "start": 142,
                "end": 143
              },
              "value": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 145,
                "end": 149
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 142,
              "end": 149
            }
          ],
          "start": 141,
          "end": 150
        },
        "start": 135,
        "end": 150
      },
      "directive": null,
      "start": 134,
      "end": 152
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 154
      },
      "directive": null,
      "start": 153,
      "end": 155
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 171
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 174
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 170,
              "end": 174
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 169,
          "end": 175
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 180
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 182,
                "end": 183
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 179,
              "end": 183
            }
          ],
          "start": 178,
          "end": 184
        },
        "start": 169,
        "end": 184
      },
      "directive": null,
      "start": 168,
      "end": 186
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 188
      },
      "directive": null,
      "start": 187,
      "end": 189
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
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
                "start": 203,
                "end": 204
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 204
                },
                "right": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 207,
                  "end": 209
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 209
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 203,
              "end": 209
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 202,
          "end": 210
        },
        "right": {
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
                "start": 214,
                "end": 215
              },
              "value": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 217,
                "end": 221
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 214,
              "end": 221
            }
          ],
          "start": 213,
          "end": 222
        },
        "start": 202,
        "end": 222
      },
      "directive": null,
      "start": 201,
      "end": 224
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 225,
        "end": 226
      },
      "directive": null,
      "start": 225,
      "end": 227
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 251,
                "end": 252
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 254,
                  "end": 255
                },
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "/a/",
                  "regex": {
                    "pattern": "a",
                    "flags": ""
                  },
                  "start": 258,
                  "end": 261
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 254,
                "end": 261
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 251,
              "end": 261
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 250,
          "end": 262
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 267
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 269,
                "end": 270
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 266,
              "end": 270
            }
          ],
          "start": 265,
          "end": 271
        },
        "start": 250,
        "end": 271
      },
      "directive": null,
      "start": 249,
      "end": 273
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 274,
        "end": 275
      },
      "directive": null,
      "start": 274,
      "end": 276
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 304,
                  "end": 310
                },
                "start": 304,
                "end": 312
              },
              "start": 302,
              "end": 312
            },
            "start": 301,
            "end": 312
          },
          "init": null,
          "definite": false,
          "start": 301,
          "end": 312
        }
      ],
      "declare": false,
      "start": 297,
      "end": 313
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 321
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 325,
        "end": 326
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 334,
              "end": 335
            },
            "directive": null,
            "start": 334,
            "end": 336
          }
        ],
        "start": 328,
        "end": 348
      },
      "start": 315,
      "end": 348
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AOrArrA",
        "optional": false,
        "typeAnnotation": null,
        "start": 377,
        "end": 384
      },
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
              "start": 385,
              "end": 386
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 385,
            "end": 386
          }
        ],
        "start": 384,
        "end": 387
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 391
            },
            "typeArguments": null,
            "start": 390,
            "end": 391
          },
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 395
              },
              "typeArguments": null,
              "start": 394,
              "end": 395
            },
            "start": 394,
            "end": 397
          }
        ],
        "start": 390,
        "end": 397
      },
      "declare": false,
      "start": 372,
      "end": 398
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AOrArrA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 410,
                  "end": 417
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 419,
                            "end": 420
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "ok",
                                "raw": "\"ok\"",
                                "start": 423,
                                "end": 427
                              },
                              "start": 423,
                              "end": 427
                            },
                            "start": 421,
                            "end": 427
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 419,
                          "end": 427
                        }
                      ],
                      "start": 418,
                      "end": 428
                    }
                  ],
                  "start": 417,
                  "end": 429
                },
                "start": 410,
                "end": 429
              },
              "start": 408,
              "end": 429
            },
            "start": 405,
            "end": 429
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
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
                      "start": 435,
                      "end": 436
                    },
                    "value": {
                      "type": "Literal",
                      "value": "ok",
                      "raw": "\"ok\"",
                      "start": 438,
                      "end": 442
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 435,
                    "end": 442
                  }
                ],
                "start": 433,
                "end": 444
              }
            ],
            "start": 432,
            "end": 445
          },
          "definite": false,
          "start": 405,
          "end": 445
        }
      ],
      "declare": false,
      "start": 399,
      "end": 446
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 460,
            "end": 463
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 464,
            "end": 468
          },
          "optional": false,
          "computed": false,
          "start": 460,
          "end": 468
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 471,
                  "end": 472
                },
                "value": {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "\"ok\"",
                  "start": 474,
                  "end": 478
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 471,
                "end": 478
              }
            ],
            "start": 469,
            "end": 480
          }
        ],
        "optional": false,
        "start": 460,
        "end": 481
      },
      "directive": null,
      "start": 460,
      "end": 482
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 482
}
```
