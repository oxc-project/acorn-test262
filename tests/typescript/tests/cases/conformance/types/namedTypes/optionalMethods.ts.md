__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              },
              "start": 21,
              "end": 29
            },
            "accessibility": null,
            "static": false,
            "start": 20,
            "end": 30
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 39,
                "end": 45
              },
              "start": 37,
              "end": 45
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 46
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 52
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 56,
                "end": 62
              },
              "start": 54,
              "end": 62
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 51,
            "end": 63
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 69
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 74,
                "end": 80
              },
              "start": 72,
              "end": 80
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 68,
            "end": 81
          }
        ],
        "start": 14,
        "end": 83
      },
      "declare": false,
      "start": 0,
      "end": 83
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 99
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 106
              },
              "typeArguments": null,
              "start": 103,
              "end": 106
            },
            "start": 101,
            "end": 106
          },
          "start": 100,
          "end": 106
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 115
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 117
              },
              "optional": false,
              "computed": false,
              "start": 114,
              "end": 117
            },
            "directive": null,
            "start": 114,
            "end": 118
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 123,
                "end": 124
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 126
              },
              "optional": false,
              "computed": false,
              "start": 123,
              "end": 126
            },
            "directive": null,
            "start": 123,
            "end": 127
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 133
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 135
              },
              "optional": false,
              "computed": false,
              "start": 132,
              "end": 135
            },
            "directive": null,
            "start": 132,
            "end": 136
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 142
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 144
              },
              "optional": false,
              "computed": false,
              "start": 141,
              "end": 144
            },
            "directive": null,
            "start": 141,
            "end": 145
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
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 156
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 159,
                      "end": 160
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 161,
                      "end": 162
                    },
                    "optional": false,
                    "computed": false,
                    "start": 159,
                    "end": 162
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 159,
                  "end": 164
                },
                "definite": false,
                "start": 154,
                "end": 164
              }
            ],
            "declare": false,
            "start": 150,
            "end": 165
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
                  "name": "g1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 176
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 179,
                      "end": 180
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 181,
                      "end": 182
                    },
                    "optional": false,
                    "computed": false,
                    "start": 179,
                    "end": 182
                  },
                  "operator": "&&",
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 186,
                        "end": 187
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 188,
                        "end": 189
                      },
                      "optional": false,
                      "computed": false,
                      "start": 186,
                      "end": 189
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 186,
                    "end": 191
                  },
                  "start": 179,
                  "end": 191
                },
                "definite": false,
                "start": 174,
                "end": 191
              }
            ],
            "declare": false,
            "start": 170,
            "end": 192
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
                  "name": "g2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 203
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 206,
                      "end": 207
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 208,
                      "end": 209
                    },
                    "optional": false,
                    "computed": false,
                    "start": 206,
                    "end": 209
                  },
                  "consequent": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 212,
                        "end": 213
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 214,
                        "end": 215
                      },
                      "optional": false,
                      "computed": false,
                      "start": 212,
                      "end": 215
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 212,
                    "end": 217
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 220,
                    "end": 221
                  },
                  "start": 206,
                  "end": 221
                },
                "definite": false,
                "start": 201,
                "end": 221
              }
            ],
            "declare": false,
            "start": 197,
            "end": 222
          }
        ],
        "start": 108,
        "end": 224
      },
      "expression": false,
      "start": 85,
      "end": 224
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 235
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 242,
              "end": 243
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 245,
                "end": 251
              },
              "start": 243,
              "end": 251
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 242,
            "end": 252
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 258
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 261,
                "end": 267
              },
              "start": 259,
              "end": 267
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 257,
            "end": 268
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 274
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 278,
              "end": 279
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 273,
            "end": 280
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 296
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 308,
                        "end": 314
                      },
                      "start": 306,
                      "end": 314
                    },
                    "start": 304,
                    "end": 314
                  },
                  "readonly": false,
                  "static": false,
                  "start": 297,
                  "end": 314
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 323,
                      "end": 324
                    },
                    "right": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 327,
                      "end": 329
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 323,
                    "end": 329
                  },
                  "readonly": false,
                  "static": false,
                  "start": 316,
                  "end": 329
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 331,
                "end": 333
              },
              "expression": false,
              "start": 296,
              "end": 333
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 285,
            "end": 333
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 339
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 359,
                      "end": 360
                    },
                    "start": 352,
                    "end": 361
                  }
                ],
                "start": 342,
                "end": 367
              },
              "expression": false,
              "start": 339,
              "end": 367
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 338,
            "end": 367
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 372,
              "end": 373
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 378,
                  "end": 384
                },
                "start": 376,
                "end": 384
              },
              "body": null,
              "expression": false,
              "start": 374,
              "end": 385
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": true,
            "accessibility": null,
            "start": 372,
            "end": 385
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 433,
              "end": 434
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 455,
                      "end": 456
                    },
                    "start": 448,
                    "end": 457
                  }
                ],
                "start": 438,
                "end": 463
              },
              "expression": false,
              "start": 435,
              "end": 463
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": true,
            "accessibility": null,
            "start": 433,
            "end": 463
          }
        ],
        "start": 236,
        "end": 465
      },
      "abstract": false,
      "declare": false,
      "start": 226,
      "end": 465
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 476,
        "end": 481
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 485,
                "end": 488
              },
              "typeArguments": null,
              "start": 485,
              "end": 488
            },
            "start": 483,
            "end": 488
          },
          "start": 482,
          "end": 488
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 496,
                "end": 497
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 498,
                "end": 499
              },
              "optional": false,
              "computed": false,
              "start": 496,
              "end": 499
            },
            "directive": null,
            "start": 496,
            "end": 500
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 505,
                "end": 506
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 507,
                "end": 508
              },
              "optional": false,
              "computed": false,
              "start": 505,
              "end": 508
            },
            "directive": null,
            "start": 505,
            "end": 509
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 515
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 516,
                "end": 517
              },
              "optional": false,
              "computed": false,
              "start": 514,
              "end": 517
            },
            "directive": null,
            "start": 514,
            "end": 518
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 523,
                "end": 524
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 525,
                "end": 526
              },
              "optional": false,
              "computed": false,
              "start": 523,
              "end": 526
            },
            "directive": null,
            "start": 523,
            "end": 527
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 532,
                "end": 533
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 534,
                "end": 535
              },
              "optional": false,
              "computed": false,
              "start": 532,
              "end": 535
            },
            "directive": null,
            "start": 532,
            "end": 536
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 542
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 543,
                "end": 544
              },
              "optional": false,
              "computed": false,
              "start": 541,
              "end": 544
            },
            "directive": null,
            "start": 541,
            "end": 545
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 550,
                "end": 551
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 552,
                "end": 553
              },
              "optional": false,
              "computed": false,
              "start": 550,
              "end": 553
            },
            "directive": null,
            "start": 550,
            "end": 554
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
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 563,
                  "end": 565
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 568,
                      "end": 569
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 570,
                      "end": 571
                    },
                    "optional": false,
                    "computed": false,
                    "start": 568,
                    "end": 571
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 568,
                  "end": 573
                },
                "definite": false,
                "start": 563,
                "end": 573
              }
            ],
            "declare": false,
            "start": 559,
            "end": 574
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
                  "name": "g1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 583,
                  "end": 585
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 588,
                      "end": 589
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 590,
                      "end": 591
                    },
                    "optional": false,
                    "computed": false,
                    "start": 588,
                    "end": 591
                  },
                  "operator": "&&",
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 595,
                        "end": 596
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 597,
                        "end": 598
                      },
                      "optional": false,
                      "computed": false,
                      "start": 595,
                      "end": 598
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 595,
                    "end": 600
                  },
                  "start": 588,
                  "end": 600
                },
                "definite": false,
                "start": 583,
                "end": 600
              }
            ],
            "declare": false,
            "start": 579,
            "end": 601
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
                  "name": "g2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 610,
                  "end": 612
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 615,
                      "end": 616
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 617,
                      "end": 618
                    },
                    "optional": false,
                    "computed": false,
                    "start": 615,
                    "end": 618
                  },
                  "consequent": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 621,
                        "end": 622
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 623,
                        "end": 624
                      },
                      "optional": false,
                      "computed": false,
                      "start": 621,
                      "end": 624
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 621,
                    "end": 626
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 629,
                    "end": 630
                  },
                  "start": 615,
                  "end": 630
                },
                "definite": false,
                "start": 610,
                "end": 630
              }
            ],
            "declare": false,
            "start": 606,
            "end": 631
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
                  "name": "h1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 640,
                  "end": 642
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 645,
                      "end": 646
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "h",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 647,
                      "end": 648
                    },
                    "optional": false,
                    "computed": false,
                    "start": 645,
                    "end": 648
                  },
                  "operator": "&&",
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 652,
                        "end": 653
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "h",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 654,
                        "end": 655
                      },
                      "optional": false,
                      "computed": false,
                      "start": 652,
                      "end": 655
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 652,
                    "end": 657
                  },
                  "start": 645,
                  "end": 657
                },
                "definite": false,
                "start": 640,
                "end": 657
              }
            ],
            "declare": false,
            "start": 636,
            "end": 658
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
                  "name": "h2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 667,
                  "end": 669
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 672,
                      "end": 673
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "h",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 674,
                      "end": 675
                    },
                    "optional": false,
                    "computed": false,
                    "start": 672,
                    "end": 675
                  },
                  "consequent": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 678,
                        "end": 679
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "h",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 680,
                        "end": 681
                      },
                      "optional": false,
                      "computed": false,
                      "start": 678,
                      "end": 681
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 678,
                    "end": 683
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 686,
                    "end": 687
                  },
                  "start": 672,
                  "end": 687
                },
                "definite": false,
                "start": 667,
                "end": 687
              }
            ],
            "declare": false,
            "start": 663,
            "end": 688
          }
        ],
        "start": 490,
        "end": 690
      },
      "expression": false,
      "start": 467,
      "end": 690
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 698,
        "end": 702
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 709,
              "end": 710
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 713,
                "end": 719
              },
              "start": 711,
              "end": 719
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 709,
            "end": 720
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 725,
              "end": 726
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 731,
                  "end": 737
                },
                "start": 729,
                "end": 737
              },
              "body": null,
              "expression": false,
              "start": 727,
              "end": 738
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": true,
            "accessibility": null,
            "start": 725,
            "end": 738
          }
        ],
        "start": 703,
        "end": 740
      },
      "abstract": false,
      "declare": false,
      "start": 692,
      "end": 740
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 748,
        "end": 755
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 764,
        "end": 768
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 775,
              "end": 776
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 779,
              "end": 780
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 775,
            "end": 781
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 786,
              "end": 787
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 791,
                  "end": 797
                },
                "start": 789,
                "end": 797
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 807,
                      "end": 808
                    },
                    "start": 800,
                    "end": 809
                  }
                ],
                "start": 798,
                "end": 811
              },
              "expression": false,
              "start": 787,
              "end": 811
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 786,
            "end": 811
          }
        ],
        "start": 769,
        "end": 813
      },
      "abstract": false,
      "declare": false,
      "start": 742,
      "end": 813
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 813
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 85,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 94,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 103,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 150,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 154,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 170,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 174,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 183,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 197,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 201,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 226,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 232,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 261,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 276,
    "end": 277
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 285,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 297,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 308,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 316,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 327,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 352,
    "end": 358
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 378,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 438,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 448,
    "end": 454
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 467,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 476,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 485,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 559,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 563,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 573,
    "end": 574
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 579,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 583,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 592,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 606,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 610,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 627,
    "end": 628
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 636,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "h1",
    "start": 640,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 649,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 663,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "h2",
    "start": 667,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 684,
    "end": 685
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 689,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 692,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 698,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 713,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 731,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 739,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 742,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 748,
    "end": 755
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 756,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 764,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 777,
    "end": 778
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 791,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 798,
    "end": 799
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 800,
    "end": 806
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 812,
    "end": 813
  }
]
```
