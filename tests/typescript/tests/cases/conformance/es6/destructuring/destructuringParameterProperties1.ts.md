__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 26
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 35,
                        "end": 36
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 38,
                        "end": 39
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 41,
                        "end": 42
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 45,
                          "end": 51
                        },
                        "start": 45,
                        "end": 53
                      },
                      "start": 43,
                      "end": 53
                    },
                    "start": 34,
                    "end": 53
                  },
                  "readonly": false,
                  "static": false,
                  "start": 27,
                  "end": 53
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 55,
                "end": 62
              },
              "expression": false,
              "start": 26,
              "end": 62
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 15,
            "end": 62
          }
        ],
        "start": 9,
        "end": 64
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 64
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TupleType1",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 81
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
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
        ],
        "start": 84,
        "end": 109
      },
      "declare": false,
      "start": 66,
      "end": 110
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 120
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 138
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 147,
                        "end": 148
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 150,
                        "end": 151
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 153,
                        "end": 154
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TupleType1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 157,
                          "end": 167
                        },
                        "typeArguments": null,
                        "start": 157,
                        "end": 167
                      },
                      "start": 155,
                      "end": 167
                    },
                    "start": 146,
                    "end": 167
                  },
                  "readonly": false,
                  "static": false,
                  "start": 139,
                  "end": 167
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 169,
                "end": 176
              },
              "expression": false,
              "start": 138,
              "end": 176
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 127,
            "end": 176
          }
        ],
        "start": 121,
        "end": 178
      },
      "abstract": false,
      "declare": false,
      "start": 112,
      "end": 178
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjType1",
        "optional": false,
        "typeAnnotation": null,
        "start": 185,
        "end": 193
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 199
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 201,
                "end": 207
              },
              "start": 199,
              "end": 207
            },
            "accessibility": null,
            "static": false,
            "start": 198,
            "end": 208
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 210
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 212,
                "end": 218
              },
              "start": 210,
              "end": 218
            },
            "accessibility": null,
            "static": false,
            "start": 209,
            "end": 219
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 221
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 223,
                "end": 230
              },
              "start": 221,
              "end": 230
            },
            "accessibility": null,
            "static": false,
            "start": 220,
            "end": 230
          }
        ],
        "start": 196,
        "end": 232
      },
      "declare": false,
      "start": 180,
      "end": 232
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 240,
        "end": 242
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 260
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
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
                          "start": 270,
                          "end": 271
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 270,
                          "end": 271
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 270,
                        "end": 271
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 273,
                          "end": 274
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 273,
                          "end": 274
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 273,
                        "end": 274
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 276,
                          "end": 277
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 276,
                          "end": 277
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 276,
                        "end": 277
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ObjType1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 281,
                          "end": 289
                        },
                        "typeArguments": null,
                        "start": 281,
                        "end": 289
                      },
                      "start": 279,
                      "end": 289
                    },
                    "start": 268,
                    "end": 289
                  },
                  "readonly": false,
                  "static": false,
                  "start": 261,
                  "end": 289
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 291,
                "end": 298
              },
              "expression": false,
              "start": 260,
              "end": 298
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 249,
            "end": 298
          }
        ],
        "start": 243,
        "end": 300
      },
      "abstract": false,
      "declare": false,
      "start": 234,
      "end": 300
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 308
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 317
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 318,
                "end": 320
              }
            ],
            "start": 311,
            "end": 321
          },
          "definite": false,
          "start": 306,
          "end": 321
        }
      ],
      "declare": false,
      "start": 302,
      "end": 322
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 323,
          "end": 325
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "C1",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 334
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "larry",
                  "raw": "\"larry\"",
                  "start": 336,
                  "end": 343
                },
                {
                  "type": "Literal",
                  "value": "{curly}",
                  "raw": "\"{curly}\"",
                  "start": 345,
                  "end": 354
                },
                {
                  "type": "Literal",
                  "value": "moe",
                  "raw": "\"moe\"",
                  "start": 356,
                  "end": 361
                }
              ],
              "start": 335,
              "end": 362
            }
          ],
          "start": 328,
          "end": 363
        },
        "start": 323,
        "end": 363
      },
      "directive": null,
      "start": 323,
      "end": 364
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
            "name": "useC1Properties",
            "optional": false,
            "typeAnnotation": null,
            "start": 369,
            "end": 384
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 387,
                  "end": 389
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 390,
                  "end": 391
                },
                "optional": false,
                "computed": false,
                "start": 387,
                "end": 391
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 396,
                  "end": 398
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 399,
                  "end": 400
                },
                "optional": false,
                "computed": false,
                "start": 396,
                "end": 400
              },
              "start": 387,
              "end": 400
            },
            "operator": "&&",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 404,
                  "end": 406
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 407,
                  "end": 408
                },
                "optional": false,
                "computed": false,
                "start": 404,
                "end": 408
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 413,
                  "end": 415
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 416,
                  "end": 417
                },
                "optional": false,
                "computed": false,
                "start": 413,
                "end": 417
              },
              "start": 404,
              "end": 417
            },
            "start": 387,
            "end": 417
          },
          "definite": false,
          "start": 369,
          "end": 417
        }
      ],
      "declare": false,
      "start": 365,
      "end": 418
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 426
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 433,
              "end": 435
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "10",
                    "raw": "\"10\"",
                    "start": 437,
                    "end": 441
                  },
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 443,
                    "end": 445
                  },
                  {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 449,
                        "end": 451
                      },
                      "prefix": true,
                      "start": 448,
                      "end": 451
                    },
                    "prefix": true,
                    "start": 447,
                    "end": 451
                  }
                ],
                "start": 436,
                "end": 452
              }
            ],
            "start": 429,
            "end": 453
          },
          "definite": false,
          "start": 424,
          "end": 453
        }
      ],
      "declare": false,
      "start": 420,
      "end": 454
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c2_x",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 464
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c2_y",
                "optional": false,
                "typeAnnotation": null,
                "start": 466,
                "end": 470
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c2_z",
                "optional": false,
                "typeAnnotation": null,
                "start": 472,
                "end": 476
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 459,
            "end": 477
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 481,
                  "end": 483
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 484,
                  "end": 485
                },
                "optional": false,
                "computed": false,
                "start": 481,
                "end": 485
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 487,
                  "end": 489
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 490,
                  "end": 491
                },
                "optional": false,
                "computed": false,
                "start": 487,
                "end": 491
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 493,
                  "end": 495
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 497
                },
                "optional": false,
                "computed": false,
                "start": 493,
                "end": 497
              }
            ],
            "start": 480,
            "end": 498
          },
          "definite": false,
          "start": 459,
          "end": 498
        }
      ],
      "declare": false,
      "start": 455,
      "end": 499
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": null,
            "start": 505,
            "end": 507
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null,
              "start": 514,
              "end": 516
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
                      "start": 518,
                      "end": 519
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 521,
                      "end": 522
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 518,
                    "end": 522
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 524,
                      "end": 525
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 527,
                      "end": 529
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 524,
                    "end": 529
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 531,
                      "end": 532
                    },
                    "value": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 534,
                      "end": 539
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 531,
                    "end": 539
                  }
                ],
                "start": 517,
                "end": 540
              }
            ],
            "start": 510,
            "end": 541
          },
          "definite": false,
          "start": 505,
          "end": 541
        }
      ],
      "declare": false,
      "start": 501,
      "end": 542
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 543,
          "end": 545
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "C3",
            "optional": false,
            "typeAnnotation": null,
            "start": 552,
            "end": 554
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
                    "start": 556,
                    "end": 557
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 559,
                    "end": 560
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 556,
                  "end": 560
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": "y",
                    "raw": "\"y\"",
                    "start": 562,
                    "end": 565
                  },
                  "value": {
                    "type": "Literal",
                    "value": "y",
                    "raw": "\"y\"",
                    "start": 567,
                    "end": 570
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 562,
                  "end": 570
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 572,
                    "end": 573
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 575,
                    "end": 579
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 572,
                  "end": 579
                }
              ],
              "start": 555,
              "end": 580
            }
          ],
          "start": 548,
          "end": 581
        },
        "start": 543,
        "end": 581
      },
      "directive": null,
      "start": 543,
      "end": 582
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c3_x",
                "optional": false,
                "typeAnnotation": null,
                "start": 588,
                "end": 592
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c3_y",
                "optional": false,
                "typeAnnotation": null,
                "start": 594,
                "end": 598
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c3_z",
                "optional": false,
                "typeAnnotation": null,
                "start": 600,
                "end": 604
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 587,
            "end": 605
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 609,
                  "end": 611
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 612,
                  "end": 613
                },
                "optional": false,
                "computed": false,
                "start": 609,
                "end": 613
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 615,
                  "end": 617
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 618,
                  "end": 619
                },
                "optional": false,
                "computed": false,
                "start": 615,
                "end": 619
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 621,
                  "end": 623
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 624,
                  "end": 625
                },
                "optional": false,
                "computed": false,
                "start": 621,
                "end": 625
              }
            ],
            "start": 608,
            "end": 626
          },
          "definite": false,
          "start": 587,
          "end": 626
        }
      ],
      "declare": false,
      "start": 583,
      "end": 627
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 627
}
```
