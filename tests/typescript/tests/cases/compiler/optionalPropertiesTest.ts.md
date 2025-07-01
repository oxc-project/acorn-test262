__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                      "name": "p1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8,
                      "end": 10
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 11,
                        "end": 17
                      },
                      "start": 10,
                      "end": 17
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 8,
                    "end": 18
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 19,
                      "end": 21
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 23,
                        "end": 29
                      },
                      "start": 22,
                      "end": 29
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 19,
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
                      "name": "p3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 31,
                      "end": 33
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 39,
                                "end": 45
                              },
                              "start": 38,
                              "end": 45
                            },
                            "start": 36,
                            "end": 46
                          }
                        ],
                        "start": 35,
                        "end": 47
                      },
                      "start": 34,
                      "end": 47
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 31,
                    "end": 48
                  }
                ],
                "start": 7,
                "end": 49
              },
              "start": 5,
              "end": 49
            },
            "start": 4,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 49
        }
      ],
      "declare": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 66
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 75
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 77,
                "end": 83
              },
              "start": 75,
              "end": 83
            },
            "accessibility": null,
            "static": false,
            "start": 73,
            "end": 84
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 93
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 96,
                "end": 102
              },
              "start": 94,
              "end": 102
            },
            "accessibility": null,
            "static": false,
            "start": 89,
            "end": 103
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "print",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 113
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 118,
                "end": 122
              },
              "start": 116,
              "end": 122
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 108,
            "end": 123
          }
        ],
        "start": 67,
        "end": 125
      },
      "declare": false,
      "start": 52,
      "end": 125
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 141
                },
                "typeArguments": null,
                "start": 137,
                "end": 141
              },
              "start": 135,
              "end": 141
            },
            "start": 132,
            "end": 141
          },
          "init": null,
          "definite": false,
          "start": 132,
          "end": 141
        }
      ],
      "declare": false,
      "start": 128,
      "end": 142
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 143,
          "end": 146
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
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 153
              },
              "value": {
                "type": "Literal",
                "value": 1234,
                "raw": "1234",
                "start": 155,
                "end": 159
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 151,
              "end": 159
            }
          ],
          "start": 149,
          "end": 161
        },
        "start": 143,
        "end": 161
      },
      "directive": null,
      "start": 143,
      "end": 162
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 184,
          "end": 187
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
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 194
              },
              "value": {
                "type": "Literal",
                "value": 1234,
                "raw": "1234",
                "start": 196,
                "end": 200
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 192,
              "end": 200
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 202,
                "end": 206
              },
              "value": {
                "type": "Literal",
                "value": "test",
                "raw": "\"test\"",
                "start": 208,
                "end": 214
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 202,
              "end": 214
            }
          ],
          "start": 190,
          "end": 216
        },
        "start": 184,
        "end": 216
      },
      "directive": null,
      "start": 184,
      "end": 217
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 225,
          "end": 228
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
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 237
              },
              "value": {
                "type": "Literal",
                "value": "test",
                "raw": "\"test\"",
                "start": 239,
                "end": 245
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 233,
              "end": 245
            }
          ],
          "start": 231,
          "end": 247
        },
        "start": 225,
        "end": 247
      },
      "directive": null,
      "start": 225,
      "end": 248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 281,
          "end": 284
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
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 288,
                "end": 290
              },
              "value": {
                "type": "Literal",
                "value": 1234,
                "raw": "1234",
                "start": 292,
                "end": 296
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 288,
              "end": 296
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "print",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 303
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 308,
                  "end": 310
                },
                "id": null,
                "generator": false,
                "start": 304,
                "end": 310
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 298,
              "end": 310
            }
          ],
          "start": 287,
          "end": 311
        },
        "start": 281,
        "end": 311
      },
      "directive": null,
      "start": 281,
      "end": 311
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
            "typeAnnotation": null,
            "start": 326,
            "end": 327
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 330,
                "end": 333
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 334,
                "end": 338
              },
              "optional": false,
              "computed": false,
              "start": 330,
              "end": 338
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "value": "default",
              "raw": "\"default\"",
              "start": 342,
              "end": 351
            },
            "start": 330,
            "end": 351
          },
          "definite": false,
          "start": 326,
          "end": 351
        }
      ],
      "declare": false,
      "start": 322,
      "end": 352
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 357,
            "end": 360
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "print",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 366
          },
          "optional": false,
          "computed": false,
          "start": 357,
          "end": 366
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 371,
          "end": 380
        },
        "start": 357,
        "end": 380
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 385
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "print",
              "optional": false,
              "typeAnnotation": null,
              "start": 386,
              "end": 391
            },
            "optional": false,
            "computed": false,
            "start": 382,
            "end": 391
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 382,
          "end": 393
        },
        "directive": null,
        "start": 382,
        "end": 394
      },
      "alternate": null,
      "start": 353,
      "end": 394
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i1",
        "optional": false,
        "typeAnnotation": null,
        "start": 406,
        "end": 408
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
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 411,
              "end": 412
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 420,
                    "end": 424
                  },
                  "start": 417,
                  "end": 424
                },
                "start": 414,
                "end": 424
              },
              "start": 412,
              "end": 424
            },
            "accessibility": null,
            "static": false,
            "start": 411,
            "end": 425
          }
        ],
        "start": 409,
        "end": 427
      },
      "declare": false,
      "start": 396,
      "end": 427
    },
    {
      "type": "EmptyStatement",
      "start": 427,
      "end": 428
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i2",
        "optional": false,
        "typeAnnotation": null,
        "start": 439,
        "end": 441
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 444,
              "end": 445
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 454,
                    "end": 458
                  },
                  "start": 451,
                  "end": 458
                },
                "start": 448,
                "end": 458
              },
              "start": 446,
              "end": 458
            },
            "accessibility": null,
            "static": false,
            "start": 444,
            "end": 459
          }
        ],
        "start": 442,
        "end": 461
      },
      "declare": false,
      "start": 429,
      "end": 461
    },
    {
      "type": "EmptyStatement",
      "start": 461,
      "end": 462
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i3",
        "optional": false,
        "typeAnnotation": null,
        "start": 473,
        "end": 475
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
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 478,
              "end": 479
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 481,
                "end": 487
              },
              "start": 479,
              "end": 487
            },
            "accessibility": null,
            "static": false,
            "start": 478,
            "end": 488
          }
        ],
        "start": 476,
        "end": 490
      },
      "declare": false,
      "start": 463,
      "end": 490
    },
    {
      "type": "EmptyStatement",
      "start": 490,
      "end": 491
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i4",
        "optional": false,
        "typeAnnotation": null,
        "start": 502,
        "end": 504
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 507,
              "end": 508
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 511,
                "end": 517
              },
              "start": 509,
              "end": 517
            },
            "accessibility": null,
            "static": false,
            "start": 507,
            "end": 518
          }
        ],
        "start": 505,
        "end": 520
      },
      "declare": false,
      "start": 492,
      "end": 520
    },
    {
      "type": "EmptyStatement",
      "start": 520,
      "end": 521
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
            "name": "test1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 534,
                  "end": 536
                },
                "typeArguments": null,
                "start": 534,
                "end": 536
              },
              "start": 532,
              "end": 536
            },
            "start": 527,
            "end": 536
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 539,
            "end": 541
          },
          "definite": false,
          "start": 527,
          "end": 541
        }
      ],
      "declare": false,
      "start": 523,
      "end": 542
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
            "name": "test2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 554,
                  "end": 556
                },
                "typeArguments": null,
                "start": 554,
                "end": 556
              },
              "start": 552,
              "end": 556
            },
            "start": 547,
            "end": 556
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 559,
            "end": 561
          },
          "definite": false,
          "start": 547,
          "end": 561
        }
      ],
      "declare": false,
      "start": 543,
      "end": 562
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
            "name": "test3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 574,
                  "end": 576
                },
                "typeArguments": null,
                "start": 574,
                "end": 576
              },
              "start": 572,
              "end": 576
            },
            "start": 567,
            "end": 576
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 579,
            "end": 581
          },
          "definite": false,
          "start": 567,
          "end": 581
        }
      ],
      "declare": false,
      "start": 563,
      "end": 582
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
            "name": "test4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 594,
                  "end": 596
                },
                "typeArguments": null,
                "start": 594,
                "end": 596
              },
              "start": 592,
              "end": 596
            },
            "start": 587,
            "end": 596
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 599,
            "end": 601
          },
          "definite": false,
          "start": 587,
          "end": 601
        }
      ],
      "declare": false,
      "start": 583,
      "end": 602
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
            "name": "test5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 614,
                  "end": 616
                },
                "typeArguments": null,
                "start": 614,
                "end": 616
              },
              "start": 612,
              "end": 616
            },
            "start": 607,
            "end": 616
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
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 621,
                  "end": 622
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
                    "body": [],
                    "start": 636,
                    "end": 639
                  },
                  "expression": false,
                  "start": 624,
                  "end": 639
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 621,
                "end": 639
              }
            ],
            "start": 619,
            "end": 641
          },
          "definite": false,
          "start": 607,
          "end": 641
        }
      ],
      "declare": false,
      "start": 603,
      "end": 642
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
            "name": "test6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 654,
                  "end": 656
                },
                "typeArguments": null,
                "start": 654,
                "end": 656
              },
              "start": 652,
              "end": 656
            },
            "start": 647,
            "end": 656
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
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 661,
                  "end": 662
                },
                "value": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 664,
                  "end": 665
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 661,
                "end": 665
              }
            ],
            "start": 659,
            "end": 667
          },
          "definite": false,
          "start": 647,
          "end": 667
        }
      ],
      "declare": false,
      "start": 643,
      "end": 668
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
            "name": "test7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 680,
                  "end": 682
                },
                "typeArguments": null,
                "start": 680,
                "end": 682
              },
              "start": 678,
              "end": 682
            },
            "start": 673,
            "end": 682
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
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 687,
                  "end": 688
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
                    "body": [],
                    "start": 702,
                    "end": 705
                  },
                  "expression": false,
                  "start": 690,
                  "end": 705
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 687,
                "end": 705
              }
            ],
            "start": 685,
            "end": 707
          },
          "definite": false,
          "start": 673,
          "end": 707
        }
      ],
      "declare": false,
      "start": 669,
      "end": 708
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "test7",
          "optional": false,
          "typeAnnotation": null,
          "start": 709,
          "end": 714
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 717,
          "end": 719
        },
        "start": 709,
        "end": 719
      },
      "directive": null,
      "start": 709,
      "end": 720
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
            "name": "test8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 732,
                  "end": 734
                },
                "typeArguments": null,
                "start": 732,
                "end": 734
              },
              "start": 730,
              "end": 734
            },
            "start": 725,
            "end": 734
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
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 739,
                  "end": 740
                },
                "value": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 742,
                  "end": 743
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 739,
                "end": 743
              }
            ],
            "start": 737,
            "end": 745
          },
          "definite": false,
          "start": 725,
          "end": 745
        }
      ],
      "declare": false,
      "start": 721,
      "end": 745
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "test8",
          "optional": false,
          "typeAnnotation": null,
          "start": 746,
          "end": 751
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 754,
          "end": 756
        },
        "start": 746,
        "end": 756
      },
      "directive": null,
      "start": 746,
      "end": 757
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
            "name": "test9_1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 771,
                  "end": 773
                },
                "typeArguments": null,
                "start": 771,
                "end": 773
              },
              "start": 769,
              "end": 773
            },
            "start": 762,
            "end": 773
          },
          "init": null,
          "definite": false,
          "start": 762,
          "end": 773
        }
      ],
      "declare": false,
      "start": 758,
      "end": 774
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
            "name": "test9_2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 788,
                  "end": 790
                },
                "typeArguments": null,
                "start": 788,
                "end": 790
              },
              "start": 786,
              "end": 790
            },
            "start": 779,
            "end": 790
          },
          "init": null,
          "definite": false,
          "start": 779,
          "end": 790
        }
      ],
      "declare": false,
      "start": 775,
      "end": 791
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "test9_1",
          "optional": false,
          "typeAnnotation": null,
          "start": 792,
          "end": 799
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "test9_2",
          "optional": false,
          "typeAnnotation": null,
          "start": 802,
          "end": 809
        },
        "start": 792,
        "end": 809
      },
      "directive": null,
      "start": 792,
      "end": 810
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
            "name": "test10_1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 825,
                  "end": 827
                },
                "typeArguments": null,
                "start": 825,
                "end": 827
              },
              "start": 823,
              "end": 827
            },
            "start": 815,
            "end": 827
          },
          "init": null,
          "definite": false,
          "start": 815,
          "end": 827
        }
      ],
      "declare": false,
      "start": 811,
      "end": 828
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
            "name": "test10_2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 843,
                  "end": 845
                },
                "typeArguments": null,
                "start": 843,
                "end": 845
              },
              "start": 841,
              "end": 845
            },
            "start": 833,
            "end": 845
          },
          "init": null,
          "definite": false,
          "start": 833,
          "end": 845
        }
      ],
      "declare": false,
      "start": 829,
      "end": 846
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "test10_1",
          "optional": false,
          "typeAnnotation": null,
          "start": 847,
          "end": 855
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "test10_2",
          "optional": false,
          "typeAnnotation": null,
          "start": 858,
          "end": 866
        },
        "start": 847,
        "end": 866
      },
      "directive": null,
      "start": 847,
      "end": 867
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 867
}
```
