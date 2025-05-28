__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 627,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 64,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 64,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 62,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 26,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 26,
              "end": 62,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 27,
                  "end": 53,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "start": 34,
                    "end": 53,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 35,
                        "end": 36,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 38,
                        "end": 39,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 41,
                        "end": 42,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 43,
                      "end": 53,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 45,
                        "end": 53,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 45,
                          "end": 51
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 55,
                "end": 62,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 66,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 81,
        "decorators": [],
        "name": "TupleType1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 84,
        "end": 109,
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 85,
            "end": 91
          },
          {
            "type": "TSNumberKeyword",
            "start": 93,
            "end": 99
          },
          {
            "type": "TSBooleanKeyword",
            "start": 101,
            "end": 108
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 112,
      "end": 178,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 120,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 121,
        "end": 178,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 127,
            "end": 176,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 138,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 138,
              "end": 176,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 139,
                  "end": 167,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "start": 146,
                    "end": 167,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 147,
                        "end": 148,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 150,
                        "end": 151,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 153,
                        "end": 154,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 155,
                      "end": 167,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 157,
                        "end": 167,
                        "typeName": {
                          "type": "Identifier",
                          "start": 157,
                          "end": 167,
                          "decorators": [],
                          "name": "TupleType1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 169,
                "end": 176,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 180,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 193,
        "decorators": [],
        "name": "ObjType1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 196,
        "end": 232,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 198,
            "end": 208,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 207,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 201,
                "end": 207
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 209,
            "end": 219,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 210,
              "end": 218,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 212,
                "end": 218
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 220,
            "end": 230,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 230,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 223,
                "end": 230
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
      "type": "ClassDeclaration",
      "start": 234,
      "end": 300,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 240,
        "end": 242,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 243,
        "end": 300,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 249,
            "end": 298,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 249,
              "end": 260,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 260,
              "end": 298,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 261,
                  "end": 289,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ObjectPattern",
                    "start": 268,
                    "end": 289,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 270,
                        "end": 271,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 270,
                          "end": 271,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 270,
                          "end": 271,
                          "decorators": [],
                          "name": "x",
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
                        "start": 273,
                        "end": 274,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 273,
                          "end": 274,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 273,
                          "end": 274,
                          "decorators": [],
                          "name": "y",
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
                        "start": 276,
                        "end": 277,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 276,
                          "end": 277,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 276,
                          "end": 277,
                          "decorators": [],
                          "name": "z",
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
                      "start": 279,
                      "end": 289,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 281,
                        "end": 289,
                        "typeName": {
                          "type": "Identifier",
                          "start": 281,
                          "end": 289,
                          "decorators": [],
                          "name": "ObjType1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 291,
                "end": 298,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 302,
      "end": 322,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 306,
          "end": 321,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 308,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 311,
            "end": 321,
            "callee": {
              "type": "Identifier",
              "start": 315,
              "end": 317,
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 318,
                "end": 320,
                "elements": []
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
      "start": 323,
      "end": 364,
      "expression": {
        "type": "AssignmentExpression",
        "start": 323,
        "end": 363,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 323,
          "end": 325,
          "decorators": [],
          "name": "c1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 328,
          "end": 363,
          "callee": {
            "type": "Identifier",
            "start": 332,
            "end": 334,
            "decorators": [],
            "name": "C1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "start": 335,
              "end": 362,
              "elements": [
                {
                  "type": "Literal",
                  "start": 336,
                  "end": 343,
                  "value": "larry",
                  "raw": "\"larry\""
                },
                {
                  "type": "Literal",
                  "start": 345,
                  "end": 354,
                  "value": "{curly}",
                  "raw": "\"{curly}\""
                },
                {
                  "type": "Literal",
                  "start": 356,
                  "end": 361,
                  "value": "moe",
                  "raw": "\"moe\""
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 365,
      "end": 418,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 369,
          "end": 417,
          "id": {
            "type": "Identifier",
            "start": 369,
            "end": 384,
            "decorators": [],
            "name": "useC1Properties",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 387,
            "end": 417,
            "left": {
              "type": "BinaryExpression",
              "start": 387,
              "end": 400,
              "left": {
                "type": "MemberExpression",
                "start": 387,
                "end": 391,
                "object": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 389,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 391,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 396,
                "end": 400,
                "object": {
                  "type": "Identifier",
                  "start": 396,
                  "end": 398,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 399,
                  "end": 400,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            },
            "operator": "&&",
            "right": {
              "type": "BinaryExpression",
              "start": 404,
              "end": 417,
              "left": {
                "type": "MemberExpression",
                "start": 404,
                "end": 408,
                "object": {
                  "type": "Identifier",
                  "start": 404,
                  "end": 406,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 407,
                  "end": 408,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 413,
                "end": 417,
                "object": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 415,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 416,
                  "end": 417,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 420,
      "end": 454,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 424,
          "end": 453,
          "id": {
            "type": "Identifier",
            "start": 424,
            "end": 426,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 429,
            "end": 453,
            "callee": {
              "type": "Identifier",
              "start": 433,
              "end": 435,
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 436,
                "end": 452,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 437,
                    "end": 441,
                    "value": "10",
                    "raw": "\"10\""
                  },
                  {
                    "type": "Literal",
                    "start": 443,
                    "end": 445,
                    "value": 10,
                    "raw": "10"
                  },
                  {
                    "type": "UnaryExpression",
                    "start": 447,
                    "end": 451,
                    "operator": "!",
                    "argument": {
                      "type": "UnaryExpression",
                      "start": 448,
                      "end": 451,
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "start": 449,
                        "end": 451,
                        "value": 10,
                        "raw": "10"
                      },
                      "prefix": true
                    },
                    "prefix": true
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 455,
      "end": 499,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 459,
          "end": 498,
          "id": {
            "type": "ArrayPattern",
            "start": 459,
            "end": 477,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 460,
                "end": 464,
                "decorators": [],
                "name": "c2_x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 466,
                "end": 470,
                "decorators": [],
                "name": "c2_y",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 472,
                "end": 476,
                "decorators": [],
                "name": "c2_z",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 480,
            "end": 498,
            "elements": [
              {
                "type": "MemberExpression",
                "start": 481,
                "end": 485,
                "object": {
                  "type": "Identifier",
                  "start": 481,
                  "end": 483,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 485,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              {
                "type": "MemberExpression",
                "start": 487,
                "end": 491,
                "object": {
                  "type": "Identifier",
                  "start": 487,
                  "end": 489,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 491,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              {
                "type": "MemberExpression",
                "start": 493,
                "end": 497,
                "object": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 495,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 497,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 501,
      "end": 542,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 505,
          "end": 541,
          "id": {
            "type": "Identifier",
            "start": 505,
            "end": 507,
            "decorators": [],
            "name": "c3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 510,
            "end": 541,
            "callee": {
              "type": "Identifier",
              "start": 514,
              "end": 516,
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 517,
                "end": 540,
                "properties": [
                  {
                    "type": "Property",
                    "start": 518,
                    "end": 522,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 518,
                      "end": 519,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 521,
                      "end": 522,
                      "value": 0,
                      "raw": "0"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 524,
                    "end": 529,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 524,
                      "end": 525,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 527,
                      "end": 529,
                      "value": "",
                      "raw": "\"\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 531,
                    "end": 539,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 531,
                      "end": 532,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 534,
                      "end": 539,
                      "value": false,
                      "raw": "false"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
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
      "start": 543,
      "end": 582,
      "expression": {
        "type": "AssignmentExpression",
        "start": 543,
        "end": 581,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 543,
          "end": 545,
          "decorators": [],
          "name": "c3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 548,
          "end": 581,
          "callee": {
            "type": "Identifier",
            "start": 552,
            "end": 554,
            "decorators": [],
            "name": "C3",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ObjectExpression",
              "start": 555,
              "end": 580,
              "properties": [
                {
                  "type": "Property",
                  "start": 556,
                  "end": 560,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 556,
                    "end": 557,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 559,
                    "end": 560,
                    "value": 0,
                    "raw": "0"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 562,
                  "end": 570,
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "start": 562,
                    "end": 565,
                    "value": "y",
                    "raw": "\"y\""
                  },
                  "value": {
                    "type": "Literal",
                    "start": 567,
                    "end": 570,
                    "value": "y",
                    "raw": "\"y\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 572,
                  "end": 579,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 572,
                    "end": 573,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 575,
                    "end": 579,
                    "value": true,
                    "raw": "true"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 583,
      "end": 627,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 587,
          "end": 626,
          "id": {
            "type": "ArrayPattern",
            "start": 587,
            "end": 605,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 588,
                "end": 592,
                "decorators": [],
                "name": "c3_x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 594,
                "end": 598,
                "decorators": [],
                "name": "c3_y",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 600,
                "end": 604,
                "decorators": [],
                "name": "c3_z",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 608,
            "end": 626,
            "elements": [
              {
                "type": "MemberExpression",
                "start": 609,
                "end": 613,
                "object": {
                  "type": "Identifier",
                  "start": 609,
                  "end": 611,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 612,
                  "end": 613,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              {
                "type": "MemberExpression",
                "start": 615,
                "end": 619,
                "object": {
                  "type": "Identifier",
                  "start": 615,
                  "end": 617,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 618,
                  "end": 619,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              {
                "type": "MemberExpression",
                "start": 621,
                "end": 625,
                "object": {
                  "type": "Identifier",
                  "start": 621,
                  "end": 623,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 624,
                  "end": 625,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
