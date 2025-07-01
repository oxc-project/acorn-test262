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
        "name": "Thing1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
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
              "start": 23,
              "end": 24
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 26,
                "end": 32
              },
              "start": 24,
              "end": 32
            },
            "accessibility": null,
            "static": false,
            "start": 23,
            "end": 33
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 42
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 46,
                "end": 50
              },
              "start": 44,
              "end": 50
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 38,
            "end": 51
          }
        ],
        "start": 17,
        "end": 53
      },
      "declare": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing2",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 71
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 81,
                "end": 87
              },
              "start": 79,
              "end": 87
            },
            "accessibility": null,
            "static": false,
            "start": 78,
            "end": 88
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "me",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 95
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 99,
                "end": 103
              },
              "start": 97,
              "end": 103
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 93,
            "end": 104
          }
        ],
        "start": 72,
        "end": 106
      },
      "declare": false,
      "start": 55,
      "end": 106
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing3",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 119
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Thing1",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 128
            },
            "typeArguments": null,
            "start": 122,
            "end": 128
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Thing2",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 137
            },
            "typeArguments": null,
            "start": 131,
            "end": 137
          }
        ],
        "start": 122,
        "end": 137
      },
      "declare": false,
      "start": 108,
      "end": 138
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing4",
        "optional": false,
        "typeAnnotation": null,
        "start": 144,
        "end": 150
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Thing3",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 159
            },
            "typeArguments": null,
            "start": 153,
            "end": 159
          },
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSStringKeyword",
              "start": 162,
              "end": 168
            },
            "start": 162,
            "end": 170
          }
        ],
        "start": 153,
        "end": 170
      },
      "declare": false,
      "start": 139,
      "end": 171
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 182,
        "end": 184
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing3",
                "optional": false,
                "typeAnnotation": null,
                "start": 188,
                "end": 194
              },
              "typeArguments": null,
              "start": 188,
              "end": 194
            },
            "start": 186,
            "end": 194
          },
          "start": 185,
          "end": 194
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 202,
                "end": 203
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 206,
                    "end": 207
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "self",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 208,
                    "end": 212
                  },
                  "optional": false,
                  "computed": false,
                  "start": 206,
                  "end": 212
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 206,
                "end": 214
              },
              "start": 202,
              "end": 214
            },
            "directive": null,
            "start": 202,
            "end": 215
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 221
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 224,
                            "end": 225
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "me",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 226,
                            "end": 228
                          },
                          "optional": false,
                          "computed": false,
                          "start": 224,
                          "end": 228
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 224,
                        "end": 230
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "self",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 231,
                        "end": 235
                      },
                      "optional": false,
                      "computed": false,
                      "start": 224,
                      "end": 235
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 224,
                    "end": 237
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "me",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 238,
                    "end": 240
                  },
                  "optional": false,
                  "computed": false,
                  "start": 224,
                  "end": 240
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 224,
                "end": 242
              },
              "start": 220,
              "end": 242
            },
            "directive": null,
            "start": 220,
            "end": 243
          }
        ],
        "start": 196,
        "end": 245
      },
      "expression": false,
      "start": 173,
      "end": 245
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing5",
        "optional": false,
        "typeAnnotation": null,
        "start": 257,
        "end": 263
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Thing4",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 278
          },
          "typeArguments": null,
          "start": 272,
          "end": 278
        }
      ],
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 286
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 288,
                "end": 294
              },
              "start": 286,
              "end": 294
            },
            "accessibility": null,
            "static": false,
            "start": 285,
            "end": 295
          }
        ],
        "start": 279,
        "end": 297
      },
      "declare": false,
      "start": 247,
      "end": 297
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 308,
        "end": 310
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing5",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 320
              },
              "typeArguments": null,
              "start": 314,
              "end": 320
            },
            "start": 312,
            "end": 320
          },
          "start": 311,
          "end": 320
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 328,
                "end": 329
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 332,
                    "end": 333
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "self",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 334,
                    "end": 338
                  },
                  "optional": false,
                  "computed": false,
                  "start": 332,
                  "end": 338
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 332,
                "end": 340
              },
              "start": 328,
              "end": 340
            },
            "directive": null,
            "start": 328,
            "end": 341
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 346,
                "end": 347
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 350,
                            "end": 351
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "me",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 352,
                            "end": 354
                          },
                          "optional": false,
                          "computed": false,
                          "start": 350,
                          "end": 354
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 350,
                        "end": 356
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "self",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 357,
                        "end": 361
                      },
                      "optional": false,
                      "computed": false,
                      "start": 350,
                      "end": 361
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 350,
                    "end": 363
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "me",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 364,
                    "end": 366
                  },
                  "optional": false,
                  "computed": false,
                  "start": 350,
                  "end": 366
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 350,
                "end": 368
              },
              "start": 346,
              "end": 368
            },
            "directive": null,
            "start": 346,
            "end": 369
          }
        ],
        "start": 322,
        "end": 371
      },
      "expression": false,
      "start": 299,
      "end": 371
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 383,
        "end": 392
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extend",
              "optional": false,
              "typeAnnotation": null,
              "start": 399,
              "end": 405
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 406,
                    "end": 407
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 406,
                  "end": 407
                }
              ],
              "start": 405,
              "end": 408
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
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
                      "start": 416,
                      "end": 417
                    },
                    "typeArguments": null,
                    "start": 416,
                    "end": 417
                  },
                  "start": 414,
                  "end": 417
                },
                "start": 409,
                "end": 417
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSThisType",
                    "start": 420,
                    "end": 424
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 427,
                      "end": 428
                    },
                    "typeArguments": null,
                    "start": 427,
                    "end": 428
                  }
                ],
                "start": 420,
                "end": 428
              },
              "start": 418,
              "end": 428
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 399,
            "end": 429
          }
        ],
        "start": 393,
        "end": 431
      },
      "declare": false,
      "start": 373,
      "end": 431
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Label",
        "optional": false,
        "typeAnnotation": null,
        "start": 443,
        "end": 448
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null,
            "start": 457,
            "end": 466
          },
          "typeArguments": null,
          "start": 457,
          "end": 466
        }
      ],
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
              "name": "title",
              "optional": false,
              "typeAnnotation": null,
              "start": 473,
              "end": 478
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 480,
                "end": 486
              },
              "start": 478,
              "end": 486
            },
            "accessibility": null,
            "static": false,
            "start": 473,
            "end": 487
          }
        ],
        "start": 467,
        "end": 489
      },
      "declare": false,
      "start": 433,
      "end": 489
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 500,
        "end": 504
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "label",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Label",
                "optional": false,
                "typeAnnotation": null,
                "start": 512,
                "end": 517
              },
              "typeArguments": null,
              "start": 512,
              "end": 517
            },
            "start": 510,
            "end": 517
          },
          "start": 505,
          "end": 517
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "extended",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 531,
                  "end": 539
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "label",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 542,
                          "end": 547
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "extend",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 548,
                          "end": 554
                        },
                        "optional": false,
                        "computed": false,
                        "start": 542,
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
                                "name": "id",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 557,
                                "end": 559
                              },
                              "value": {
                                "type": "Literal",
                                "value": 67,
                                "raw": "67",
                                "start": 561,
                                "end": 563
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 557,
                              "end": 563
                            }
                          ],
                          "start": 555,
                          "end": 565
                        }
                      ],
                      "optional": false,
                      "start": 542,
                      "end": 566
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extend",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 567,
                      "end": 573
                    },
                    "optional": false,
                    "computed": false,
                    "start": 542,
                    "end": 573
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
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 576,
                            "end": 579
                          },
                          "value": {
                            "type": "Literal",
                            "value": "hello",
                            "raw": "\"hello\"",
                            "start": 581,
                            "end": 588
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 576,
                          "end": 588
                        }
                      ],
                      "start": 574,
                      "end": 590
                    }
                  ],
                  "optional": false,
                  "start": 542,
                  "end": 591
                },
                "definite": false,
                "start": 531,
                "end": 591
              }
            ],
            "declare": false,
            "start": 525,
            "end": 592
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "extended",
                "optional": false,
                "typeAnnotation": null,
                "start": 597,
                "end": 605
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 606,
                "end": 608
              },
              "optional": false,
              "computed": false,
              "start": 597,
              "end": 608
            },
            "directive": null,
            "start": 597,
            "end": 609
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "extended",
                "optional": false,
                "typeAnnotation": null,
                "start": 621,
                "end": 629
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 630,
                "end": 633
              },
              "optional": false,
              "computed": false,
              "start": 621,
              "end": 633
            },
            "directive": null,
            "start": 621,
            "end": 634
          }
        ],
        "start": 519,
        "end": 643
      },
      "expression": false,
      "start": 491,
      "end": 643
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 643
}
```
