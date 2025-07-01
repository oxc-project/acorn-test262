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
