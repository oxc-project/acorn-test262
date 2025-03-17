__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 483,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 41,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 41,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 7,
                "end": 41,
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
                    "start": 35,
                    "end": 41,
                    "typeName": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 41,
                      "name": "RegExp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 44,
      "end": 51,
      "expression": {
        "type": "AssignmentExpression",
        "start": 44,
        "end": 50,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 44,
          "end": 45,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 48,
          "end": 50,
          "value": "",
          "raw": "\"\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 52,
      "end": 54,
      "expression": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 79,
      "expression": {
        "type": "AssignmentExpression",
        "start": 66,
        "end": 78,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 66,
          "end": 69,
          "elements": [
            {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 72,
          "end": 78,
          "elements": [
            {
              "type": "Literal",
              "start": 73,
              "end": 77,
              "value": true,
              "raw": "true"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 82,
      "expression": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 95,
      "end": 110,
      "expression": {
        "type": "AssignmentExpression",
        "start": 95,
        "end": 109,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 95,
          "end": 103,
          "elements": [
            {
              "type": "AssignmentPattern",
              "start": 96,
              "end": 102,
              "left": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 100,
                "end": 102,
                "value": "",
                "raw": "\"\""
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 106,
          "end": 109,
          "elements": [
            {
              "type": "Literal",
              "start": 107,
              "end": 108,
              "value": 1,
              "raw": "1"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 113,
      "expression": {
        "type": "Identifier",
        "start": 111,
        "end": 112,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 134,
      "end": 152,
      "expression": {
        "type": "AssignmentExpression",
        "start": 135,
        "end": 150,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 135,
          "end": 138,
          "properties": [
            {
              "type": "Property",
              "start": 136,
              "end": 137,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 136,
                "end": 137,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 136,
                "end": 137,
                "name": "x",
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
        "right": {
          "type": "ObjectExpression",
          "start": 141,
          "end": 150,
          "properties": [
            {
              "type": "Property",
              "start": 142,
              "end": 149,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 142,
                "end": 143,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 145,
                "end": 149,
                "value": true,
                "raw": "true"
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 153,
      "end": 155,
      "expression": {
        "type": "Identifier",
        "start": 153,
        "end": 154,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 168,
      "end": 186,
      "expression": {
        "type": "AssignmentExpression",
        "start": 169,
        "end": 184,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 169,
          "end": 175,
          "properties": [
            {
              "type": "Property",
              "start": 170,
              "end": 174,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 170,
                "end": 171,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 173,
                "end": 174,
                "name": "x",
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
        "right": {
          "type": "ObjectExpression",
          "start": 178,
          "end": 184,
          "properties": [
            {
              "type": "Property",
              "start": 179,
              "end": 183,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 179,
                "end": 180,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 182,
                "end": 183,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 187,
      "end": 189,
      "expression": {
        "type": "Identifier",
        "start": 187,
        "end": 188,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 201,
      "end": 224,
      "expression": {
        "type": "AssignmentExpression",
        "start": 202,
        "end": 222,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 202,
          "end": 210,
          "properties": [
            {
              "type": "Property",
              "start": 203,
              "end": 209,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 203,
                "end": 204,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 203,
                "end": 209,
                "left": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 204,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 207,
                  "end": 209,
                  "value": "",
                  "raw": "\"\""
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 213,
          "end": 222,
          "properties": [
            {
              "type": "Property",
              "start": 214,
              "end": 221,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 214,
                "end": 215,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 217,
                "end": 221,
                "value": true,
                "raw": "true"
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 225,
      "end": 227,
      "expression": {
        "type": "Identifier",
        "start": 225,
        "end": 226,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 249,
      "end": 273,
      "expression": {
        "type": "AssignmentExpression",
        "start": 250,
        "end": 271,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 250,
          "end": 262,
          "properties": [
            {
              "type": "Property",
              "start": 251,
              "end": 261,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 251,
                "end": 252,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 254,
                "end": 261,
                "left": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 255,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 258,
                  "end": 261,
                  "value": null,
                  "raw": "/a/",
                  "regex": {
                    "flags": "",
                    "pattern": "a"
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 265,
          "end": 271,
          "properties": [
            {
              "type": "Property",
              "start": 266,
              "end": 270,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 266,
                "end": 267,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 269,
                "end": 270,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 274,
      "end": 276,
      "expression": {
        "type": "Identifier",
        "start": 274,
        "end": 275,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 297,
      "end": 313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 312,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 312,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 302,
              "end": 312,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 304,
                "end": 312,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 304,
                  "end": 310
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 315,
      "end": 348,
      "await": false,
      "left": {
        "type": "Identifier",
        "start": 320,
        "end": 321,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "right": {
        "type": "Identifier",
        "start": 325,
        "end": 326,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 328,
        "end": 348,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 334,
            "end": 336,
            "expression": {
              "type": "Identifier",
              "start": 334,
              "end": 335,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 372,
      "end": 398,
      "id": {
        "type": "Identifier",
        "start": 377,
        "end": 384,
        "name": "AOrArrA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 384,
        "end": 387,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 385,
            "end": 386,
            "name": {
              "type": "Identifier",
              "start": 385,
              "end": 386,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 390,
        "end": 397,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 390,
            "end": 391,
            "typeName": {
              "type": "Identifier",
              "start": 390,
              "end": 391,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSArrayType",
            "start": 394,
            "end": 397,
            "elementType": {
              "type": "TSTypeReference",
              "start": 394,
              "end": 395,
              "typeName": {
                "type": "Identifier",
                "start": 394,
                "end": 395,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 399,
      "end": 446,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 445,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 429,
            "name": "arr",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 408,
              "end": 429,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 410,
                "end": 429,
                "typeName": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 417,
                  "name": "AOrArrA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 417,
                  "end": 429,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 418,
                      "end": 428,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 419,
                          "end": 427,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 419,
                            "end": 420,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 421,
                            "end": 427,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 423,
                              "end": 427,
                              "literal": {
                                "type": "Literal",
                                "start": 423,
                                "end": 427,
                                "value": "ok",
                                "raw": "\"ok\""
                              }
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 432,
            "end": 445,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 433,
                "end": 444,
                "properties": [
                  {
                    "type": "Property",
                    "start": 435,
                    "end": 442,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 435,
                      "end": 436,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 438,
                      "end": 442,
                      "value": "ok",
                      "raw": "\"ok\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 460,
      "end": 482,
      "expression": {
        "type": "CallExpression",
        "start": 460,
        "end": 481,
        "callee": {
          "type": "MemberExpression",
          "start": 460,
          "end": 468,
          "object": {
            "type": "Identifier",
            "start": 460,
            "end": 463,
            "name": "arr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 464,
            "end": 468,
            "name": "push",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 469,
            "end": 480,
            "properties": [
              {
                "type": "Property",
                "start": 471,
                "end": 478,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 471,
                  "end": 472,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 474,
                  "end": 478,
                  "value": "ok",
                  "raw": "\"ok\""
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
