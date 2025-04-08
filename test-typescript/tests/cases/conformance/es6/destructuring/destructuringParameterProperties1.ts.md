__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 628,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 65,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 63,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 27,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 63,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 28,
                  "end": 54,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "start": 35,
                    "end": 54,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 36,
                        "end": 37,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 39,
                        "end": 40,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 42,
                        "end": 43,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 44,
                      "end": 54,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 46,
                        "end": 54,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 46,
                          "end": 52
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 56,
                "end": 63,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 67,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 82,
        "name": "TupleType1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 85,
        "end": 110,
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 86,
            "end": 92
          },
          {
            "type": "TSNumberKeyword",
            "start": 94,
            "end": 100
          },
          {
            "type": "TSBooleanKeyword",
            "start": 102,
            "end": 109
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 113,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 121,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 122,
        "end": 179,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 128,
            "end": 177,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 139,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 139,
              "end": 177,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 140,
                  "end": 168,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "start": 147,
                    "end": 168,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 148,
                        "end": 149,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 151,
                        "end": 152,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 154,
                        "end": 155,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 156,
                      "end": 168,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 158,
                        "end": 168,
                        "typeName": {
                          "type": "Identifier",
                          "start": 158,
                          "end": 168,
                          "name": "TupleType1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 170,
                "end": 177,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 181,
      "end": 233,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 194,
        "name": "ObjType1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 197,
        "end": 233,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 199,
            "end": 209,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 199,
              "end": 200,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 208,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 202,
                "end": 208
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 210,
            "end": 220,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 210,
              "end": 211,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 211,
              "end": 219,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 213,
                "end": 219
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 221,
            "end": 231,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 222,
              "end": 231,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 224,
                "end": 231
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
      "start": 235,
      "end": 301,
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 243,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 244,
        "end": 301,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 250,
            "end": 299,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 250,
              "end": 261,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 261,
              "end": 299,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 262,
                  "end": 290,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ObjectPattern",
                    "start": 269,
                    "end": 290,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 271,
                        "end": 272,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 271,
                          "end": 272,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 271,
                          "end": 272,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 274,
                        "end": 275,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 274,
                          "end": 275,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 274,
                          "end": 275,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 277,
                        "end": 278,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 277,
                          "end": 278,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 277,
                          "end": 278,
                          "name": "z",
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 280,
                      "end": 290,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 282,
                        "end": 290,
                        "typeName": {
                          "type": "Identifier",
                          "start": 282,
                          "end": 290,
                          "name": "ObjType1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 292,
                "end": 299,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 303,
      "end": 323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 322,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 309,
            "name": "c1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 312,
            "end": 322,
            "callee": {
              "type": "Identifier",
              "start": 316,
              "end": 318,
              "name": "C1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 319,
                "end": 321,
                "elements": []
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 324,
      "end": 365,
      "expression": {
        "type": "AssignmentExpression",
        "start": 324,
        "end": 364,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 324,
          "end": 326,
          "name": "c1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 329,
          "end": 364,
          "callee": {
            "type": "Identifier",
            "start": 333,
            "end": 335,
            "name": "C1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "ArrayExpression",
              "start": 336,
              "end": 363,
              "elements": [
                {
                  "type": "Literal",
                  "start": 337,
                  "end": 344,
                  "value": "larry",
                  "raw": "\"larry\""
                },
                {
                  "type": "Literal",
                  "start": 346,
                  "end": 355,
                  "value": "{curly}",
                  "raw": "\"{curly}\""
                },
                {
                  "type": "Literal",
                  "start": 357,
                  "end": 362,
                  "value": "moe",
                  "raw": "\"moe\""
                }
              ]
            }
          ],
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 366,
      "end": 419,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 370,
          "end": 418,
          "id": {
            "type": "Identifier",
            "start": 370,
            "end": 385,
            "name": "useC1Properties",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 388,
            "end": 418,
            "left": {
              "type": "BinaryExpression",
              "start": 388,
              "end": 401,
              "left": {
                "type": "MemberExpression",
                "start": 388,
                "end": 392,
                "object": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 390,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 391,
                  "end": 392,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 397,
                "end": 401,
                "object": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 399,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 400,
                  "end": 401,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "operator": "&&",
            "right": {
              "type": "BinaryExpression",
              "start": 405,
              "end": 418,
              "left": {
                "type": "MemberExpression",
                "start": 405,
                "end": 409,
                "object": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 407,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 409,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "start": 414,
                "end": 418,
                "object": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 416,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 418,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 421,
      "end": 455,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 425,
          "end": 454,
          "id": {
            "type": "Identifier",
            "start": 425,
            "end": 427,
            "name": "c2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 430,
            "end": 454,
            "callee": {
              "type": "Identifier",
              "start": 434,
              "end": 436,
              "name": "C2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 437,
                "end": 453,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 438,
                    "end": 442,
                    "value": "10",
                    "raw": "\"10\""
                  },
                  {
                    "type": "Literal",
                    "start": 444,
                    "end": 446,
                    "value": 10,
                    "raw": "10"
                  },
                  {
                    "type": "UnaryExpression",
                    "start": 448,
                    "end": 452,
                    "operator": "!",
                    "prefix": true,
                    "argument": {
                      "type": "UnaryExpression",
                      "start": 449,
                      "end": 452,
                      "operator": "!",
                      "prefix": true,
                      "argument": {
                        "type": "Literal",
                        "start": 450,
                        "end": 452,
                        "value": 10,
                        "raw": "10"
                      }
                    }
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 456,
      "end": 500,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 460,
          "end": 499,
          "id": {
            "type": "ArrayPattern",
            "start": 460,
            "end": 478,
            "elements": [
              {
                "type": "Identifier",
                "start": 461,
                "end": 465,
                "name": "c2_x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 467,
                "end": 471,
                "name": "c2_y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 473,
                "end": 477,
                "name": "c2_z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 481,
            "end": 499,
            "elements": [
              {
                "type": "MemberExpression",
                "start": 482,
                "end": 486,
                "object": {
                  "type": "Identifier",
                  "start": 482,
                  "end": 484,
                  "name": "c2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 486,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              {
                "type": "MemberExpression",
                "start": 488,
                "end": 492,
                "object": {
                  "type": "Identifier",
                  "start": 488,
                  "end": 490,
                  "name": "c2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 491,
                  "end": 492,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              {
                "type": "MemberExpression",
                "start": 494,
                "end": 498,
                "object": {
                  "type": "Identifier",
                  "start": 494,
                  "end": 496,
                  "name": "c2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 497,
                  "end": 498,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 502,
      "end": 543,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 506,
          "end": 542,
          "id": {
            "type": "Identifier",
            "start": 506,
            "end": 508,
            "name": "c3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 511,
            "end": 542,
            "callee": {
              "type": "Identifier",
              "start": 515,
              "end": 517,
              "name": "C3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 518,
                "end": 541,
                "properties": [
                  {
                    "type": "Property",
                    "start": 519,
                    "end": 523,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 519,
                      "end": 520,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 522,
                      "end": 523,
                      "value": 0,
                      "raw": "0"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 525,
                    "end": 530,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 525,
                      "end": 526,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 528,
                      "end": 530,
                      "value": "",
                      "raw": "\"\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 532,
                    "end": 540,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 532,
                      "end": 533,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 535,
                      "end": 540,
                      "value": false,
                      "raw": "false"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 544,
      "end": 583,
      "expression": {
        "type": "AssignmentExpression",
        "start": 544,
        "end": 582,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 544,
          "end": 546,
          "name": "c3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 549,
          "end": 582,
          "callee": {
            "type": "Identifier",
            "start": 553,
            "end": 555,
            "name": "C3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "ObjectExpression",
              "start": 556,
              "end": 581,
              "properties": [
                {
                  "type": "Property",
                  "start": 557,
                  "end": 561,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 557,
                    "end": 558,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 560,
                    "end": 561,
                    "value": 0,
                    "raw": "0"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 563,
                  "end": 571,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 563,
                    "end": 566,
                    "value": "y",
                    "raw": "\"y\""
                  },
                  "value": {
                    "type": "Literal",
                    "start": 568,
                    "end": 571,
                    "value": "y",
                    "raw": "\"y\""
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 573,
                  "end": 580,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 573,
                    "end": 574,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 576,
                    "end": 580,
                    "value": true,
                    "raw": "true"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ],
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 584,
      "end": 628,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 588,
          "end": 627,
          "id": {
            "type": "ArrayPattern",
            "start": 588,
            "end": 606,
            "elements": [
              {
                "type": "Identifier",
                "start": 589,
                "end": 593,
                "name": "c3_x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 595,
                "end": 599,
                "name": "c3_y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 601,
                "end": 605,
                "name": "c3_z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 609,
            "end": 627,
            "elements": [
              {
                "type": "MemberExpression",
                "start": 610,
                "end": 614,
                "object": {
                  "type": "Identifier",
                  "start": 610,
                  "end": 612,
                  "name": "c3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 613,
                  "end": 614,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              {
                "type": "MemberExpression",
                "start": 616,
                "end": 620,
                "object": {
                  "type": "Identifier",
                  "start": 616,
                  "end": 618,
                  "name": "c3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 619,
                  "end": 620,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              {
                "type": "MemberExpression",
                "start": 622,
                "end": 626,
                "object": {
                  "type": "Identifier",
                  "start": 622,
                  "end": 624,
                  "name": "c3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 625,
                  "end": 626,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
